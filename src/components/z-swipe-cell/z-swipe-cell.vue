<template>
  <view
    :class="bem()"
    @click.stop="getClickHandler($event, 'cell', lockClick)"
    @touchstart.passive="onTouchStart"
    @touchmove.passive="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <view :class="bem('wrapper')" :style="wrapperStyle">
      <template v-if="instance.slots.left">
        <view
          class="z-cell-left-rect"
          :class="bem('left')"
          @click="getClickHandler($event, 'left', true)"
        >
          <slot name="left"></slot>
        </view>
      </template>
      <slot></slot>
      <template v-if="instance.slots.right">
        <view
          class="z-cell-right-rect"
          :class="bem('right')"
          @click="getClickHandler($event, 'right', true)"
        >
          <slot name="right"></slot>
        </view>
      </template>
    </view>
  </view>
</template>
<script lang="ts" setup>
import {
  ref,
  reactive,
  computed,
  type PropType,
  getCurrentInstance,
  onMounted
} from 'vue'

// Utils
import {
  clamp,
  isDef,
  numericProp,
  Interceptor,
  callInterceptor,
  createNamespace,
  makeNumericProp,
  getRect,
  useTouch,
  useExpose,
  raf,
  useComponentName
} from '../../libs/utils'
// Types
import type { SwipeCellSide, SwipeCellExpose, SwipeCellPosition } from './types'

const instance = getCurrentInstance()!

const [componentName, bem] = createNamespace('swipe-cell')
useComponentName(componentName)

const props = defineProps({
  name: makeNumericProp(''),
  disabled: Boolean,
  leftWidth: numericProp,
  rightWidth: numericProp,
  beforeClose: Function as PropType<Interceptor>,
  stopPropagation: Boolean
})

const emit = defineEmits(['open', 'close', 'click'])

let opened: boolean
let lockClick: boolean
let startOffset: number
let isInBeforeClosing: boolean

const state = reactive({
  offset: 0,
  dragging: false
})

const touch = useTouch()

const wrapperStyle = computed(() => {
  return {
    transform: `translate3d(${state.offset}px, 0, 0)`,
    transitionDuration: state.dragging ? '0s' : '.6s'
  }
})

const rectValue = ref<any>({
  left: 0,
  right: 0
})

const getWidthByRef = (ref: string) => {
  return rectValue.value[ref]
}
// ref.value ? useRect(ref).width : 0;

const leftWidth = computed(() =>
  isDef(props.leftWidth) ? +props.leftWidth : getWidthByRef('left')
)

const rightWidth = computed(() =>
  isDef(props.rightWidth) ? +props.rightWidth : getWidthByRef('right')
)

const open = (side: SwipeCellSide) => {
  state.offset = side === 'left' ? leftWidth.value : -rightWidth.value

  if (!opened) {
    opened = true
    emit('open', {
      name: props.name,
      position: side
    })
  }
}

const close = (position: SwipeCellPosition) => {
  state.offset = 0

  if (opened) {
    opened = false
    emit('close', {
      name: props.name,
      position
    })
  }
}

const toggle = (side: SwipeCellSide) => {
  const offset = Math.abs(state.offset)
  const THRESHOLD = 0.15
  const threshold = opened ? 1 - THRESHOLD : THRESHOLD
  const width = side === 'left' ? leftWidth.value : rightWidth.value

  if (width && offset > width * threshold) {
    open(side)
  } else {
    close(side)
  }
}

const onTouchStart = (event: TouchEvent) => {
  if (!props.disabled) {
    startOffset = state.offset
    touch.start(event)
  }
}

const onTouchMove = (event: TouchEvent) => {
  if (props.disabled) {
    return
  }

  const { deltaX } = touch
  touch.move(event)

  if (touch.isHorizontal()) {
    lockClick = true
    state.dragging = true

    const isEdge = !opened || deltaX.value * startOffset < 0
    if (isEdge) {
      // preventDefault(event, props.stopPropagation);
    }

    state.offset = clamp(
      deltaX.value + startOffset,
      -rightWidth.value,
      leftWidth.value
    )
  }
}

const onTouchEnd = () => {
  if (state.dragging) {
    state.dragging = false
    toggle(state.offset > 0 ? 'left' : 'right')

    // compatible with desktop scenario
    setTimeout(() => {
      lockClick = false
    }, 0)
  }
}

const onClick = (position: SwipeCellPosition = 'outside') => {
  if (isInBeforeClosing) return

  emit('click', position)

  if (opened && !lockClick) {
    isInBeforeClosing = true
    callInterceptor(props.beforeClose, {
      args: [
        {
          name: props.name,
          position
        }
      ],
      done: () => {
        isInBeforeClosing = false
        close(position)
      },
      canceled: () => (isInBeforeClosing = false),
      error: () => (isInBeforeClosing = false)
    })
  }
}

const getClickHandler = (
  event: any,
  position: SwipeCellPosition,
  stop?: boolean
) => {
  if (stop) {
    event.stopPropagation()
  }
  onClick(position)
}

const getCellRect = () => {
  Promise.all([
    getRect(instance, '.z-cell-left-rect'),
    getRect(instance, '.z-cell-right-rect')
  ]).then(([leftRect, rightRect]: any) => {
    rectValue.value['left'] = leftRect?.width ? leftRect?.width : 0
    rectValue.value['right'] = rightRect?.width ? rightRect?.width : 0
  })
}

onMounted(() => {
  raf(() => {
    getCellRect()
  })
})

useExpose<SwipeCellExpose>({
  open,
  close
})
defineExpose<SwipeCellExpose>({
  open,
  close
})

// useClickAway(root, () => onClick('outside'), { eventName: 'touchstart' });

// // useEventListener will set passive to `false` to eliminate the warning of Chrome
// useEventListener('touchmove', onTouchMove, {
// 	target: root,
// });
</script>
<script lang="ts">
export default {
  name: 'ZSwipeCell',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-swipe-cell {
  position: relative;
  overflow: hidden;
  cursor: grab;

  &__wrapper {
    transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1);
    transition-property: transform;
  }

  &__left,
  &__right {
    position: absolute;
    top: 0;
    height: 100%;
  }

  &__left {
    left: 0;
    transform: translate3d(-100%, 0, 0);
  }

  &__right {
    right: 0;
    transform: translate3d(100%, 0, 0);
  }
}
</style>
