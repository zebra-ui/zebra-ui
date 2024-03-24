<template>
  <view
    :class="[bem(), { 'van-safe-area-bottom': safeAreaInsetBottom }]"
    :style="rootStyle"
    data-id="root"
    @touchstart.passive="onTouchstart"
    @touchmove="onTouchmove"
    @touchend="onTouchend"
    @touchcancel="onTouchend"
  >
    <view :class="bem('header')">
      <view :class="bem('header-bar')"></view>
    </view>
    <scroll-view
      :class="bem('content')"
      :scroll-y="scrollShow"
      data-id="content"
      @touchmove.stop.prevent="onTouchmove"
    >
      <slot></slot>
    </scroll-view>
  </view>
</template>
<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import {
  addUnit,
  closest,
  createNamespace,
  makeArrayProp,
  makeNumericProp,
  truthProp,
  windowHeight,
  useTouch,
  useSyncPropRef,
  useComponentName
} from '../../libs/utils'

const props = defineProps({
  height: makeNumericProp(0),
  anchors: makeArrayProp<number>(),
  duration: makeNumericProp(0.3),
  contentDraggable: truthProp,
  lockScroll: Boolean,
  safeAreaInsetBottom: truthProp
})

const scrollShow = ref(false)

const [name, bem] = createNamespace('floating-panel')
useComponentName(name)

const emit = defineEmits(['heightChange', 'update:height'])

const DAMP = 0.2
const height = useSyncPropRef(
  () => +props.height,
  (value) => emit('update:height', value)
)
const boundary = computed(() => ({
  min: props.anchors[0] ? props.anchors[0] : 100,
  // @ts-ignore
  max: props.anchors[props.anchors.length - 1]
    ? props.anchors[props.anchors.length - 1]
    : Math.round(windowHeight.value * 0.6)
}))

const anchors = computed(() =>
  // @ts-ignore
  props.anchors.length >= 2
    ? props.anchors
    : [boundary.value.min, boundary.value.max]
)

const dragging = ref(false)

const rootStyle = computed(() => ({
  height: addUnit(boundary.value.max),
  transform: `translateY(calc(100% + ${addUnit(-height.value)}))`,
  transition: !dragging.value
    ? `transform ${props.duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28)`
    : 'none'
}))

const ease = (moveY: number): number => {
  const absDistance = Math.abs(moveY)
  const { min, max } = boundary.value

  if (absDistance > max) {
    return -(max + (absDistance - max) * DAMP)
  }

  if (absDistance < min) {
    return -(min - (min - absDistance) * DAMP)
  }

  return moveY
}

let startY: number
const touch = useTouch()

const onTouchstart = (e: TouchEvent) => {
  touch.start(e)
  dragging.value = true
  startY = -height.value
}

const onTouchmove = (e: TouchEvent) => {
  touch.move(e)
  const target = e.currentTarget
  // @ts-ignore
  if (target.dataset.id === 'content') {
    if (!props.contentDraggable) return
  }

  const moveY = touch.deltaY.value + startY
  height.value = -ease(moveY)
}

const onTouchend = () => {
  dragging.value = false
  // @ts-ignore
  height.value = closest(anchors.value, height.value)

  if (height.value !== -startY) {
    emit('heightChange', { height: height.value })
  }
}

watch(
  boundary,
  () => {
    // @ts-ignore
    height.value = closest(anchors.value, height.value)
  },
  { immediate: true }
)

watch(
  () => height.value,
  (value) => {
    if (!props.contentDraggable) return
    if (value == boundary.value.max) {
      scrollShow.value = true
    } else {
      scrollShow.value = false
    }
  },
  {
    immediate: true
  }
)
</script>
<script lang="ts">
export default {
  name: 'ZFloatingPanel',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-floating-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-floating-panel-z-index);
  display: flex;
  flex-direction: column;
  width: 100vw;
  touch-action: none;
  background: var(--z-floating-panel-background);
  border-top-left-radius: var(--z-floating-panel-border-radius);
  border-top-right-radius: var(--z-floating-panel-border-radius);
  will-change: transform;

  &::after {
    position: absolute;
    bottom: -100vh;
    display: block;
    width: 100vw;
    height: 100vh;
    content: '';
    background-color: inherit;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--z-floating-panel-header-height);
    cursor: grab;
    user-select: none;

    &-bar {
      width: var(--z-floating-panel-bar-width);
      height: var(--z-floating-panel-bar-height);
      background: var(--z-floating-panel-bar-color);
      border-radius: var(--z-radius-md);
    }
  }

  &__content {
    flex: 1;
    min-width: 0;
    min-height: 0;
    background-color: var(--z-floating-panel-background);
  }
}
</style>
