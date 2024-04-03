<template>
  <view class="z-pull-refresh-rect" :class="bem()" :style="style">
    <view
      :class="bem('track')"
      :style="trackStyle"
      @touchstart.passive="onTouchStart"
      @touchend="onTouchEnd"
      @touchmove="onTouchMove"
      @touchcancel="onTouchEnd"
    >
      <view :class="bem('head')" :style="getHeadStyle()">
        <template v-if="instance.slots[state.status]">
          <template v-if="instance.slots.normal && state.status == 'normal'">
            <slot name="normal" :distance="state.distance"></slot>
          </template>
          <template v-if="instance.slots.loading && state.status == 'loading'">
            <slot name="loading" :distance="state.distance"></slot>
          </template>
          <template v-if="instance.slots.loosing && state.status == 'loosing'">
            <slot name="loosing" :distance="state.distance"></slot>
          </template>
          <template v-if="instance.slots.pulling && state.status == 'pulling'">
            <slot name="pulling" :distance="state.distance"></slot>
          </template>
          <template v-if="instance.slots.success && state.status == 'success'">
            <slot name="success" :distance="state.distance"></slot>
          </template>
        </template>
        <template v-else>
          <template v-if="TEXT_STATUS.includes(state.status)">
            <view :class="bem('text')">{{ getStatusText() }}</view>
          </template>
          <template v-if="state.status === 'loading'">
            <z-loading size="var(--z-pull-refresh-loading-icon-size)">
              {{ getStatusText() }}
            </z-loading>
          </template>
        </template>
      </view>
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts" setup>
import {
  ref,
  watch,
  reactive,
  nextTick,
  computed,
  getCurrentInstance,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  type CSSProperties
} from 'vue'
import {
  numericProp,
  createNamespace,
  makeNumericProp,
  useTouch,
  getRect,
  raf,
  addUnit,
  useComponentName
} from '../../libs/utils'
import zLoading from '../z-loading/z-loading.vue'
const [name, bem] = createNamespace('pull-refresh')
useComponentName(name)
const instance = getCurrentInstance()!
const DEFAULT_HEAD_HEIGHT = 60
const TEXT_STATUS = ['pulling', 'loosing', 'success']
type PullRefreshStatus =
  | 'normal'
  | 'loading'
  | 'loosing'
  | 'pulling'
  | 'success'
const props = defineProps({
  disabled: Boolean,
  modelValue: Boolean,
  headHeight: makeNumericProp(60),
  successText: String,
  pullingText: String,
  loosingText: String,
  loadingText: String,
  pullDistance: numericProp,
  successDuration: makeNumericProp(500),
  animationDuration: makeNumericProp(300),
  customStyle: Object,
  id: String
})
const emit = defineEmits(['change', 'refresh', 'update:modelValue', 'init'])
let reachTop: boolean

let scrollParent = 0

const minHeight = ref(0)

const state = reactive({
  status: 'normal' as PullRefreshStatus,
  distance: 0,
  duration: 0
})

const touch = useTouch()

const getHeadStyle = () => {
  if (props.headHeight !== DEFAULT_HEAD_HEIGHT) {
    return {
      height: `${props.headHeight}px`
    }
  }
}

const style = computed(() => {
  return { ...props.customStyle }
})

const isTouchable = () =>
  state.status !== 'loading' && state.status !== 'success' && !props.disabled

const ease = (distance: number) => {
  const pullDistance = +(props.pullDistance || props.headHeight)

  if (distance > pullDistance) {
    if (distance < pullDistance * 2) {
      distance = pullDistance + (distance - pullDistance) / 2
    } else {
      distance = pullDistance * 1.5 + (distance - pullDistance * 2) / 4
    }
  }

  return Math.round(distance)
}

const setStatus = (distance: number, isLoading?: boolean) => {
  const pullDistance = +(props.pullDistance || props.headHeight)
  state.distance = distance

  if (isLoading) {
    state.status = 'loading'
  } else if (distance === 0) {
    state.status = 'normal'
  } else if (distance < pullDistance) {
    state.status = 'pulling'
  } else {
    state.status = 'loosing'
  }

  emit('change', {
    status: state.status,
    distance
  })
}

const getText = (key: string) => {
  const data: any = {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...',
    loading: '加载中'
  }
  return data[key]
}

const getStatusText = () => {
  const { status } = state
  if (status === 'normal') {
    return ''
  }
  return props[`${status}Text` as const] || getText(status)
}

const showSuccessTip = () => {
  state.status = 'success'

  setTimeout(() => {
    setStatus(0)
  }, +props.successDuration)
}

const checkPosition = (event: TouchEvent) => {
  reachTop = scrollParent === 0
  if (reachTop) {
    state.duration = 0
    touch.start(event)
  }
}

const onTouchStart = (event: TouchEvent) => {
  if (isTouchable()) {
    checkPosition(event)
  }
}

const onTouchMove = (event: TouchEvent) => {
  if (isTouchable()) {
    if (!reachTop) {
      checkPosition(event)
    }

    const { deltaY } = touch
    touch.move(event)

    if (reachTop && deltaY.value >= 0 && touch.isVertical()) {
      setStatus(ease(deltaY.value))
    }
  }
}

const onTouchEnd = () => {
  if (reachTop && touch.deltaY.value && isTouchable()) {
    state.duration = +props.animationDuration

    if (state.status === 'loosing') {
      setStatus(+props.headHeight, true)
      emit('update:modelValue', true)
      nextTick(() => emit('refresh'))
    } else {
      setStatus(0)
    }
  }
}

const trackStyle = computed(() => {
  let style: CSSProperties = {}
  if (minHeight.value) {
    style['min-height'] = addUnit(minHeight.value)
  }
  return {
    transitionDuration: `${state.duration}ms`,
    transform: state.distance ? `translate3d(0,${state.distance}px, 0)` : '',
    ...style
  }
})

const { windowHeight } = uni.getSystemInfoSync()

const setScrollHeight = () => {
  raf(() => {
    getRect(instance, '.z-pull-refresh-rect').then((res: any) => {
      const realHeight = Math.floor(windowHeight - res.top)
      minHeight.value = realHeight
    })
  })
}

const onPageScroll = (event: any) => {
  scrollParent = event.scrollTop
}

onMounted(() => {
  setScrollHeight()
  uni.$on(`z-pull-refresh-${props.id}`, onPageScroll)
})

onUpdated(() => {
  setScrollHeight()
})

onBeforeUnmount(() => {
  uni.$off(`z-pull-refresh-${props.id}`)
})

watch(
  () => props.modelValue,
  (value) => {
    state.duration = +props.animationDuration

    if (value) {
      setStatus(+props.headHeight, true)
    } else if (instance.slots.success || props.successText) {
      showSuccessTip()
    } else {
      setStatus(0, false)
    }
  }
)
</script>
<script lang="ts">
export default {
  name: 'ZPullRefresh',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-pull-refresh {
  overflow: hidden;

  &__track {
    position: relative;
    height: 100%;
    transition-property: transform;
  }

  &__head {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: var(--z-pull-refresh-head-height);
    overflow: hidden;
    font-size: var(--z-pull-refresh-head-font-size);
    line-height: var(--z-pull-refresh-head-height);
    color: var(--z-pull-refresh-head-text-color);
    transform: translateY(-100%);
  }
}
</style>
