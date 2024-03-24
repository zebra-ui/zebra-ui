<template>
  <view class="z-swipe-rect" :class="[bem()]" :style="customStyle">
    <view
      :style="trackStyle"
      :class="bem('track', { vertical: props.vertical })"
      @touchstart.passive="onTouchStart"
      @touchmove.passive="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <slot />
    </view>
    <template v-if="showIndicators && count > 1">
      <view :class="bem('indicators', { vertical: props.vertical })">
        <template v-for="(item, index) in count" :key="index">
          <view
            :style="{
              backgroundColor:
                index === activeIndicator ? props.indicatorColor : ''
            }"
            :class="bem('indicator', { active: index === activeIndicator })"
          ></view>
        </template>
      </view>
    </template>
    <template v-else>
      <slot name="indicator" :active="activeIndicator" :total="count"></slot>
    </template>
  </view>
</template>

<script setup lang="ts">
import {
  watch,
  reactive,
  computed,
  onMounted,
  onActivated,
  onDeactivated,
  onBeforeUnmount,
  getCurrentInstance
} from 'vue'
import {
  createNamespace,
  truthProp,
  numericProp,
  makeNumericProp,
  clamp,
  useTouch,
  useExpose,
  doubleRaf,
  useChildren,
  getRect,
  raf
} from '../../libs/utils'
import { SwipeState, SwipeExpose, SwipeToOptions } from './types'

const emit = defineEmits(['change', 'dragStart', 'dragEnd'])

const [name, bem] = createNamespace('swipe')

const instance = getCurrentInstance()!

const props = defineProps({
  loop: truthProp,
  width: numericProp,
  height: numericProp,
  vertical: Boolean,
  autoplay: makeNumericProp(0),
  duration: makeNumericProp(500),
  touchable: truthProp,
  initialSwipe: makeNumericProp(0),
  indicatorColor: String,
  showIndicators: truthProp,
  stopPropagation: truthProp,
  customStyle: Object
})

const state = reactive<SwipeState>({
  rect: null,
  width: 0,
  height: 0,
  offset: 0,
  active: 0,
  swiping: false
})

let dragging = false

const touch = useTouch()

const { children, linkChildren } = useChildren(name)

const count = computed(() => children.length)

const size = computed(() => state[props.vertical ? 'height' : 'width'])

const delta = computed(() =>
  props.vertical ? touch.deltaY.value : touch.deltaX.value
)

const minOffset = computed(() => {
  if (state.rect) {
    const base = props.vertical ? state.rect.height : state.rect.width
    return base - size.value * count.value
  }
  return 0
})

const maxCount = computed(() =>
  size.value ? Math.ceil(Math.abs(minOffset.value) / size.value) : count.value
)

const trackSize = computed(() => count.value * size.value)

const activeIndicator = computed(
  () => (state.active + count.value) % count.value
)

const isCorrectDirection = computed(() => {
  const expect = props.vertical ? 'vertical' : 'horizontal'
  return touch.direction.value === expect
})

const trackStyle = computed(() => {
  const style: any = {
    transitionDuration: `${state.swiping ? 0 : props.duration}ms`,
    transform: `translate${props.vertical ? 'Y' : 'X'}(${+state.offset.toFixed(2)}px)`
  }

  if (size.value) {
    const mainAxis = props.vertical ? 'height' : 'width'
    const crossAxis = props.vertical ? 'width' : 'height'
    style[mainAxis] = `${trackSize.value}px`
    style[crossAxis] = props[crossAxis] ? `${props[crossAxis]}px` : ''
  }

  return style
})

const getTargetActive = (pace: number) => {
  const { active } = state

  if (pace) {
    if (props.loop) {
      return clamp(active + pace, -1, count.value)
    }
    return clamp(active + pace, 0, maxCount.value)
  }
  return active
}

const getTargetOffset = (targetActive: number, offset = 0) => {
  let currentPosition = targetActive * size.value
  if (!props.loop) {
    currentPosition = Math.min(currentPosition, -minOffset.value)
  }

  let targetOffset = offset - currentPosition
  if (!props.loop) {
    targetOffset = clamp(targetOffset, minOffset.value, 0)
  }

  return targetOffset
}

const move = ({
  pace = 0,
  offset = 0,
  emitChange
}: {
  pace?: number
  offset?: number
  emitChange?: boolean
}) => {
  if (count.value <= 1) {
    return
  }

  const { active } = state
  const targetActive = getTargetActive(pace)
  const targetOffset = getTargetOffset(targetActive, offset)

  if (props.loop) {
    if (children[0] && targetOffset !== minOffset.value) {
      const outRightBound = targetOffset < minOffset.value
      children[0].setOffset(outRightBound ? trackSize.value : 0)
    }

    if (children[count.value - 1] && targetOffset !== 0) {
      const outLeftBound = targetOffset > 0
      children[count.value - 1].setOffset(outLeftBound ? -trackSize.value : 0)
    }
  }

  state.active = targetActive
  state.offset = targetOffset

  if (emitChange && targetActive !== active) {
    emit('change', activeIndicator.value)
  }
}
const correctPosition = () => {
  state.swiping = true

  if (state.active <= -1) {
    move({ pace: count.value })
  } else if (state.active >= count.value) {
    move({ pace: -count.value })
  }
}
const prev = () => {
  correctPosition()
  touch.reset()

  doubleRaf(() => {
    state.swiping = false
    move({
      pace: -1,
      emitChange: true
    })
  })
}
const next = () => {
  correctPosition()
  touch.reset()

  doubleRaf(() => {
    state.swiping = false
    move({
      pace: 1,
      emitChange: true
    })
  })
}

let autoplayTimer: ReturnType<typeof setTimeout>

const stopAutoplay = () => clearTimeout(autoplayTimer)

const autoplay = () => {
  stopAutoplay()
  if (+props.autoplay > 0 && count.value > 1) {
    autoplayTimer = setTimeout(() => {
      next()
      autoplay()
    }, +props.autoplay)
  }
}

const initialize = (active = +props.initialSwipe) => {
  raf(() => {
    getRect(instance, '.z-swipe-rect').then((res: any) => {
      const swiperRect: any = res
      const cb = () => {
        const rect = {
          width: swiperRect.width,
          height: swiperRect.height
        }
        state.rect = rect
        state.width = +(props.width ? props.width : rect.width)
        state.height = +(props.height ? props.height : rect.height)

        if (count.value) {
          active = Math.min(count.value - 1, active)

          if (active === -1) {
            active = count.value - 1
          }
        }

        state.active = active
        state.swiping = true
        state.offset = getTargetOffset(active)
        children.forEach((swipe: any) => {
          swipe.setOffset(0)
        })

        autoplay()
      }
      cb()
    })
  })
}

const resize = () => initialize(state.active)

let touchStartTime: number

const onTouchStart = (event: TouchEvent) => {
  if (!props.touchable || event.touches.length > 1) return

  touch.start(event)

  dragging = false
  touchStartTime = Date.now()

  stopAutoplay()
  correctPosition()
}

const onTouchMove = (event: TouchEvent) => {
  if (props.touchable && state.swiping) {
    touch.move(event)

    if (isCorrectDirection.value) {
      const isEdgeTouch =
        !props.loop &&
        ((state.active === 0 && delta.value > 0) ||
          (state.active === count.value - 1 && delta.value < 0))

      if (!isEdgeTouch) {
        move({ offset: delta.value })

        if (!dragging) {
          emit('dragStart', { index: activeIndicator.value })
          dragging = true
        }
      }
    }
  }
}

const onTouchEnd = () => {
  if (!props.touchable || !state.swiping) {
    return
  }

  const duration = Date.now() - touchStartTime
  const speed = delta.value / duration
  const shouldSwipe =
    Math.abs(speed) > 0.25 || Math.abs(delta.value) > size.value / 2

  if (shouldSwipe && isCorrectDirection.value) {
    const offset = props.vertical ? touch.offsetY.value : touch.offsetX.value

    let pace = 0

    if (props.loop) {
      pace = offset > 0 ? (delta.value > 0 ? -1 : 1) : 0
    } else {
      pace = -Math[delta.value > 0 ? 'ceil' : 'floor'](delta.value / size.value)
    }

    move({
      pace,
      emitChange: true
    })
  } else if (delta.value) {
    move({ pace: 0 })
  }

  dragging = false
  state.swiping = false

  emit('dragEnd', { index: activeIndicator.value })
  autoplay()
}

const swipeTo = (index: number, options: SwipeToOptions = {}) => {
  correctPosition()
  touch.reset()

  doubleRaf(() => {
    let targetIndex: any
    if (props.loop && index === count.value) {
      targetIndex = state.active === 0 ? 0 : index
    } else {
      targetIndex = index % count.value
    }

    if (options.immediate) {
      doubleRaf(() => {
        state.swiping = false
      })
    } else {
      state.swiping = false
    }

    move({
      pace: targetIndex - state.active,
      emitChange: true
    })
  })
}

useExpose<SwipeExpose>({
  prev,
  next,
  state,
  resize,
  swipeTo
})

linkChildren({
  size,
  props,
  count,
  activeIndicator
})

defineExpose({
  prev,
  next,
  state,
  resize,
  swipeTo
})

watch(
  () => props.initialSwipe,
  (value) => initialize(+value)
)

watch(count, () => initialize(state.active))
watch(() => props.autoplay, autoplay)
watch([() => props.width, () => props.height], resize)

onMounted(initialize)
onActivated(() => initialize(state.active))
onDeactivated(stopAutoplay)
onBeforeUnmount(stopAutoplay)
</script>

<script lang="ts">
export default {
  name: 'ZSwipe',
  options: {
    virtualHost: true
  }
}
</script>

<style lang="scss" scoped>
.z-swipe {
  position: relative;
  overflow: hidden;
  cursor: grab;
  user-select: none;
  transform: translateZ(0);

  &__track {
    display: flex;
    height: 100%;
    transition-property: transform;

    &--vertical {
      flex-direction: column;
    }
  }

  &__indicators {
    position: absolute;
    bottom: var(--z-swipe-indicator-margin);
    left: 50%;
    display: flex;
    transform: translateX(-50%);

    &--vertical {
      top: 50%;
      bottom: auto;
      left: var(--z-swipe-indicator-margin);
      flex-direction: column;
      transform: translateY(-50%);

      .z-swipe__indicator:not(:last-child) {
        margin-bottom: var(--z-swipe-indicator-size);
      }
    }
  }

  &__indicator {
    width: var(--z-swipe-indicator-size);
    height: var(--z-swipe-indicator-size);
    background-color: var(--z-swipe-indicator-inactive-background);
    border-radius: 100%;
    opacity: var(--z-swipe-indicator-inactive-opacity);
    transition:
      opacity var(--z-duration-fast),
      background-color var(--z-duration-fast);

    &:not(:last-child) {
      margin-right: var(--z-swipe-indicator-size);
    }

    &--active {
      background-color: var(--z-swipe-indicator-active-background);
      opacity: var(--z-swipe-indicator-active-opacity);
    }
  }
}
</style>
