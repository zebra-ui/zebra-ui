<template>
  <view
    v-show="show"
    :class="bem()"
    ref="rootRef"
    @touchstart.passive="onTouchStart"
    @touchmove.stop.prevent="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
    @click.capture="onClick"
    :style="rootStyle"
  >
    <slot></slot>
    <template v-if="!instance.slots.default">
      <z-icon :name="props.icon" size="var(--z-floating-bubble-icon-size)" />
    </template>
  </view>
</template>
<script lang="ts" setup>
import {
  PropType,
  computed,
  nextTick,
  onMounted,
  ref,
  watch,
  onActivated,
  getCurrentInstance
} from 'vue'
import {
  pick,
  addUnit,
  closest,
  createNamespace,
  makeNumberProp,
  makeStringProp,
  windowWidth,
  windowHeight,
  getRect,
  useTouch,
  raf,
  useComponentName
} from '../../libs/utils'
import {
  FloatingBubbleAxis,
  FloatingBubbleMagnetic,
  FloatingBubbleOffset,
  FloatingBubbleBoundary
} from './types'
const instance = getCurrentInstance()!
const [name, bem] = createNamespace('floating-bubble')
useComponentName(name)
const props = defineProps({
  gap: makeNumberProp(24),
  icon: String,
  axis: makeStringProp<FloatingBubbleAxis>('y'),
  magnetic: String as PropType<FloatingBubbleMagnetic>,
  offset: {
    type: Object as unknown as PropType<FloatingBubbleOffset>,
    default: () => ({ x: -1, y: -1 })
  }
})
const emit = defineEmits(['click', 'update:offset', 'offsetChange'])
const rootRef = ref<HTMLDivElement>()
const state = ref({
  x: 0,
  y: 0,
  width: 0,
  height: 0
})
const boundary = computed<FloatingBubbleBoundary>(() => ({
  top: props.gap,
  right: windowWidth.value - state.value.width - props.gap,
  bottom: windowHeight.value - state.value.height - props.gap,
  left: props.gap
}))

const dragging = ref(false)
let initialized = false
const rootStyle = computed(() => {
  const style: any = {}

  const x = addUnit(state.value.x)
  const y = addUnit(state.value.y)
  style.transform = `translate3d(${x}, ${y}, 0)`

  if (dragging.value || !initialized) {
    style.transition = 'none'
  }

  return style
})

const updateState = () => {
  if (!show.value) return
  raf(() => {
    getRect(instance, '.z-floating-bubble').then((res: any) => {
      const { width, height } = res
      const { offset } = props
      state.value = {
        // @ts-ignore
        x: offset.x > -1 ? offset.x : windowWidth.value - width - props.gap,
        // @ts-ignore
        y: offset.y > -1 ? offset.y : windowHeight.value - height - props.gap,
        width,
        height
      }
    })
  })
}

const touch = useTouch()
let prevX = 0
let prevY = 0

const onTouchStart = (e: TouchEvent) => {
  touch.start(e)
  dragging.value = true

  prevX = state.value.x
  prevY = state.value.y
}

const onTouchMove = (e: TouchEvent) => {
  touch.move(e)
  // @ts-ignore
  if (props.axis === 'lock') return

  if (!touch.isTap.value) {
    // @ts-ignore
    if (props.axis === 'x' || props.axis === 'xy') {
      let nextX = prevX + touch.deltaX.value
      if (nextX < boundary.value.left) nextX = boundary.value.left
      if (nextX > boundary.value.right) nextX = boundary.value.right
      state.value.x = nextX
    }
    // @ts-ignore
    if (props.axis === 'y' || props.axis === 'xy') {
      let nextY = prevY + touch.deltaY.value
      if (nextY < boundary.value.top) nextY = boundary.value.top
      if (nextY > boundary.value.bottom) nextY = boundary.value.bottom
      state.value.y = nextY
    }

    const offset = pick(state.value, ['x', 'y'])
    emit('update:offset', offset)
  }
}

const onTouchEnd = () => {
  dragging.value = false

  nextTick(() => {
    // @ts-ignore
    if (props.magnetic === 'x') {
      const nextX = closest(
        [boundary.value.left, boundary.value.right],
        state.value.x
      )
      state.value.x = nextX
    }
    // @ts-ignore
    if (props.magnetic === 'y') {
      const nextY = closest(
        [boundary.value.top, boundary.value.bottom],
        state.value.y
      )
      state.value.y = nextY
    }

    if (!touch.isTap.value) {
      const offset = pick(state.value, ['x', 'y'])
      emit('update:offset', offset)
      if (prevX !== offset.x || prevY !== offset.y) {
        emit('offsetChange', offset)
      }
    }
  })
}

const onClick = (e: any) => {
  if (touch.isTap.value) emit('click', e)
}

onMounted(() => {
  updateState()
  nextTick(() => {
    initialized = true
  })
})

watch(
  [windowWidth, windowHeight, () => props.gap, () => props.offset],
  updateState
)

const show = ref(true)

onActivated(() => {
  show.value = true
})
</script>
<script lang="ts">
export default {
  name: 'ZFloatingBubble',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-floating-bubble {
  position: fixed;
  inset: 0 var(--z-floating-bubble-initial-gap)
    var(--z-floating-bubble-initial-gap) 0;
  z-index: var(--z-floating-bubble-z-index);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--z-floating-bubble-size);
  height: var(--z-floating-bubble-size);
  overflow: hidden;
  color: var(--z-floating-bubble-color);
  touch-action: none;
  cursor: pointer;
  user-select: none;
  background: var(--z-floating-bubble-background);
  border-radius: var(--z-floating-bubble-border-radius);
  transition: transform var(--z-duration-base);

  &:active {
    opacity: 0.8;
  }
}
</style>
