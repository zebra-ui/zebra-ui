<template>
  <view class="z-tabs-rect" :class="[bem([props.type])]" :style="customStyle">
    <template v-if="props.showHeader">
      <z-sticky
        v-if="props.sticky"
        :container="stickyContainer"
        :offset-top="offsetTopPx"
        :custom-navbar="customNavbar"
        @scroll="onStickyScroll"
      >
        <view
          class="z-tabs__wrap-rect"
          :class="[
            bem('wrap'),
            { [BORDER_TOP_BOTTOM]: type === 'line' && border }
          ]"
        >
          <scroll-view
            :class="bem('scrollview')"
            :scroll-x="scrollable"
            :scroll-with-animation="true"
            :scroll-left="scrollLeft"
          >
            <slot name="nav-left"></slot>
            <view
              :class="
                bem('nav', [
                  type,
                  { shrink: props.shrink, complete: scrollable }
                ])
              "
              :style="[navStyle, color ? 'border-color: ' + color : '']"
            >
              <template v-for="(item, index) in children" :key="index">
                <view
                  :id="useIdItem('z-tab', index)"
                  :class="[
                    item.bem([
                      props.type,
                      {
                        grow: scrollable && !props.shrink,
                        shrink: props.shrink,
                        active: item.active.value,
                        disabled: item.disabled
                      }
                    ])
                  ]"
                  :style="titleStyleData(item)"
                  :tabindex="
                    item.disabled ? undefined : item.active.value ? 0 : -1
                  "
                  @click="onClickTab(item, index, $event)"
                >
                  <template
                    v-if="item.dot || (isDef(item.badge) && item.badge !== '')"
                  >
                    <z-badge
                      :dot="item.dot"
                      :content="item.badge"
                      :show-zero="item.showZeroBadge"
                    >
                      <text
                        :class="bem('text', { ellipsis: !item.scrollable })"
                      >
                        <template v-if="item.title">
                          {{ item.title }}
                        </template>
                        <template v-else>
                          <slot name="title"></slot>
                        </template>
                      </text>
                    </z-badge>
                  </template>
                  <template v-else>
                    <view
                      :class="item.bem('text', { ellipsis: !item.scrollable })"
                    >
                      <template v-if="item.title">
                        {{ item.title }}
                      </template>
                      <template v-else>
                        <slot name="title"></slot>
                      </template>
                    </view>
                  </template>
                </view>
              </template>
              <template v-if="type === 'line' && children.length">
                <view :class="bem('line')" :style="state.lineStyle"></view>
              </template>
            </view>
            <slot name="nav-right"></slot>
          </scroll-view>
        </view>
      </z-sticky>
      <template v-else>
        <view
          class="z-tabs__wrap-rect"
          :class="[
            bem('wrap'),
            { [BORDER_TOP_BOTTOM]: type === 'line' && border }
          ]"
        >
          <scroll-view
            :class="bem('scrollview')"
            :scroll-x="scrollable"
            :scroll-with-animation="true"
            :scroll-left="scrollLeft"
          >
            <slot name="nav-left"></slot>
            <view
              :class="
                bem('nav', [
                  type,
                  { shrink: props.shrink, complete: scrollable }
                ])
              "
              :style="[navStyle, color ? 'border-color: ' + color : '']"
            >
              <template v-for="(item, index) in children" :key="index">
                <view
                  :id="useIdItem('z-tab', index)"
                  :class="[
                    item.bem([
                      props.type,
                      {
                        grow: scrollable && !props.shrink,
                        shrink: props.shrink,
                        active: item.active.value,
                        disabled: item.disabled
                      }
                    ])
                  ]"
                  :style="titleStyleData(item)"
                  :tabindex="
                    item.disabled ? undefined : item.active.value ? 0 : -1
                  "
                  @click="onClickTab(item, index, $event)"
                >
                  <template
                    v-if="item.dot || (isDef(item.badge) && item.badge !== '')"
                  >
                    <z-badge
                      :dot="item.dot"
                      :content="item.badge"
                      :show-zero="item.showZeroBadge"
                    >
                      <text
                        :class="bem('text', { ellipsis: !item.scrollable })"
                      >
                        <template v-if="item.title">
                          {{ item.title }}
                        </template>
                        <template v-else>
                          <slot name="title"></slot>
                        </template>
                      </text>
                    </z-badge>
                  </template>
                  <template v-else>
                    <view
                      :class="item.bem('text', { ellipsis: !item.scrollable })"
                    >
                      <template v-if="item.title">
                        {{ item.title }}
                      </template>
                      <template v-else>
                        <slot name="title" :item="item" :index="index"></slot>
                      </template>
                    </view>
                  </template>
                </view>
              </template>
              <template v-if="type === 'line' && children.length">
                <view :class="bem('line')" :style="state.lineStyle"></view>
              </template>
            </view>
            <slot name="nav-right"></slot>
          </scroll-view>
        </view>
      </template>
    </template>
    <view
      :class="bem('content', { animated: props.animated || props.swipeable })"
    >
      <template v-if="props.animated || props.swipeable">
        <view class="z-swipe-rect" :class="[bemSwipe()]">
          <view
            :style="trackStyle"
            :class="bem('track')"
            @touchstart.passive="onTouchStart"
            @touchmove.passive="onTouchMove"
            @touchend="onTouchEnd"
            @touchcancel="onTouchEnd"
          >
            <slot />
          </view>
        </view>
      </template>
      <template v-else-if="props.scrollspy">
        <scroll-view
          scroll-y
          style="width: 100%; height: 100%"
          scroll-with-animation
          :scroll-top="scrollTop"
          @scroll="onScroll"
        >
          <slot></slot>
        </scroll-view>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </view>
  </view>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  reactive,
  watch,
  onMounted,
  nextTick,
  type PropType,
  getCurrentInstance
} from 'vue'
import {
  createNamespace,
  clamp,
  makeNumericProp,
  truthProp,
  numericProp,
  BORDER_TOP_BOTTOM,
  addUnit,
  isDef,
  callInterceptor,
  type Interceptor,
  useId,
  useRefs,
  useExpose,
  useChildren,
  getRect,
  getAllRect,
  doubleRaf,
  useTouch,
  raf,
  useComponentName
} from '../../libs/utils'

let stickyContainer: any
let lockScroll: boolean
const instance = getCurrentInstance()
const [name, bem] = createNamespace('tabs')

const emit = defineEmits([
  'change',
  'scroll',
  'rendered',
  'clickTab',
  'update:active'
])

const props = defineProps({
  type: {
    type: String,
    default: 'line'
  },
  color: String,
  border: Boolean,
  sticky: Boolean,
  shrink: Boolean,
  active: makeNumericProp(0),
  duration: makeNumericProp(0.3),
  animated: Boolean,
  ellipsis: truthProp,
  swipeable: Boolean,
  scrollspy: Boolean,
  offsetTop: makeNumericProp(0),
  background: String,
  lazyRender: truthProp,
  showHeader: truthProp,
  lineWidth: numericProp,
  lineHeight: numericProp,
  beforeChange: Function as PropType<Interceptor>,
  swipeThreshold: makeNumericProp(5),
  titleActiveColor: String,
  titleInactiveColor: String,
  customNavbar: Boolean,
  customStyle: Object,
  titleStyle: Object
})

const scrollLeft = ref(0)

const id = useId()
const useIdItem = (name: any, index: any) => {
  return useId(name) + index
}
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [titleRefs, setTitleRefs] = useRefs<any>()
const { children, linkChildren } = useChildren(name)

const state = reactive({
  inited: false,
  position: '',
  lineStyle: {},
  currentIndex: -1
})

const scrollable = computed(
  () =>
    children.length > +props.swipeThreshold || !props.ellipsis || props.shrink
)

const navStyle = computed(() => ({
  borderColor: props.color,
  background: props.background
}))

const titleStyleData = (child: any) => {
  const style: any = {}
  const { type, color } = props

  const { disabled } = child
  const isActive = child.active
  const activeColor = props.titleActiveColor
  const inactiveColor = props.titleInactiveColor

  const isCard = type === 'card'
  if (color && isCard) {
    style.borderColor = color

    if (!disabled) {
      if (isActive) {
        style.backgroundColor = color
      } else {
        style.color = color
      }
    }
  }
  const titleColor = isActive ? activeColor : inactiveColor
  if (titleColor) {
    style.color = titleColor
  }

  return { ...style, ...props.titleStyle, ...child.titleStyle }
}

const getTabName = (tab: any, index: number): any =>
  tab.name ? tab.name : index

const currentName = computed(() => {
  const activeTab = children[state.currentIndex]
  if (activeTab) {
    return getTabName(activeTab, state.currentIndex)
  }
})

const offsetTopPx = computed(() => props.offsetTop)

const scrollIntoView = (immediate?: boolean) => {
  if (!scrollable.value) {
    return
  }

  Promise.all([
    getRect(instance, '.z-tabs__nav'),
    getAllRect(instance, '.z-tab')
  ]).then(([navRect, tabRects]: any) => {
    const tabRect: any = tabRects[state.currentIndex]
    const offsetLeft = tabRects
      .slice(0, state.currentIndex)
      .reduce((prev: any, curr: any) => prev + curr.width, 0)
    scrollLeft.value = offsetLeft - (navRect.width - tabRect.width) / 2
  })
}

const setLine = () => {
  const shouldAnimate = state.inited

  nextTick(() => {
    if (props.type != 'line') {
      return
    }
    Promise.all([getAllRect(instance, '.z-tab')]).then(([tabRects]: any) => {
      const tabRect: any = tabRects[state.currentIndex]

      let lineOffsetLeft = tabRects
        .slice(0, state.currentIndex)
        .reduce((prev: any, curr: any) => prev + curr.width, 0)
      lineOffsetLeft += tabRect.width / 2 + (props.ellipsis ? 0 : 8)

      const { lineWidth, lineHeight } = props
      const lineStyle: any = {
        width: addUnit(lineWidth),
        backgroundColor: props.color,
        transform: `translateX(${lineOffsetLeft}px) translateX(-50%)`
      }

      if (shouldAnimate) {
        lineStyle.transitionDuration = `${props.duration}s`
      }

      if (isDef(lineHeight)) {
        const height = addUnit(lineHeight)
        lineStyle.height = height
        lineStyle.borderRadius = height
      }

      state.lineStyle = lineStyle
    })
  })
}

const findAvailableTab = (index: number) => {
  const diff = index < state.currentIndex ? -1 : 1

  while (index >= 0 && index < children.length) {
    if (!children[index].disabled) {
      return index
    }
    index += diff
  }
}

const setCurrentIndex = (
  currentIndex: number,
  skipScrollIntoView?: boolean
) => {
  const newIndex = findAvailableTab(currentIndex)
  if (!isDef(newIndex)) {
    return
  }

  const newTab = children[newIndex]
  const newName = getTabName(newTab, newIndex)
  const shouldEmitChange = state.currentIndex !== null

  if (state.currentIndex !== newIndex) {
    state.currentIndex = newIndex

    if (!skipScrollIntoView) {
      scrollIntoView()
    }
    setLine()
  }

  if (newName !== props.active) {
    emit('update:active', newName)

    if (shouldEmitChange) {
      emit('change', newName, newTab.title)
    }
  }
}
const setCurrentIndexByName = (name: any, skipScrollIntoView?: boolean) => {
  const matched = children.find(
    (tab: any, index: number) => getTabName(tab, index) === name
  )

  const index = matched ? children.indexOf(matched) : 0
  setCurrentIndex(index, skipScrollIntoView)
}

const scrollTop = ref(0)

const getValueAtIndex = (index: number, array: any) => {
  let sum = 0
  for (let i = 0; i <= index; i++) {
    sum += array[i].heightRect.value
  }
  return sum - array[index].heightRect.value
}

const scrollToCurrentContent = (immediate: any = false) => {
  if (props.scrollspy) {
    const indexData = getValueAtIndex(state.currentIndex, children)
    scrollTop.value = indexData
  }
}
const onClickTab = (item: any, index: number, event: any) => {
  const { title, disabled } = children[index]
  const name = getTabName(children[index], index)

  if (!disabled) {
    callInterceptor(props.beforeChange, {
      args: [name],
      done: () => {
        setCurrentIndex(index)
        scrollToCurrentContent()
      }
    })
  }

  emit('clickTab', {
    name,
    title,
    event,
    disabled
  })
}

const onStickyScroll = (params: { isFixed: boolean; scrollTop: number }) => {
  emit('scroll', params)
}

const scrollTo = (name: any) => {
  nextTick(() => {
    setCurrentIndexByName(name)
    scrollToCurrentContent(true)
  })
}

const findIndexScroll = (value: any, array: any) => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i].heightRect.value
    if (value < sum - 1) {
      return i
    }
  }
  return array.length
}

const getCurrentIndexOnScroll = (scrollTop: any) => {
  const indexData = findIndexScroll(scrollTop, children)
  return indexData
}

const onScroll = (e: any) => {
  if (props.scrollspy && !lockScroll) {
    const index: any = getCurrentIndexOnScroll(e.detail.scrollTop)
    setCurrentIndex(index)
  }
}

const resize = () => {
  setLine()

  nextTick(() => {
    scrollIntoView(true)
  })
}

watch(
  () => [props.color, props.duration, props.lineWidth, props.lineHeight],
  setLine
)

watch(
  () => props.active,
  (value) => {
    if (value !== currentName.value) {
      setCurrentIndexByName(value)
    }
  }
)

watch(
  () => children.length,
  () => {
    if (state.inited) {
      setCurrentIndexByName(props.active)
      setLine()
      nextTick(() => {
        scrollIntoView(true)
      })
    }
  }
)

const init = () => {
  setCurrentIndexByName(props.active, true)
  nextTick(() => {
    state.inited = true
    getRect(instance, '.z-tabs__wrap-rect').then((res: any) => {
      const wrapRect = res
      scrollIntoView(true)
    })
  })
}

const onRendered = (name: any, title?: string) => emit('rendered', name, title)

const [nameSwipe, bemSwipe] = createNamespace('swipe')
useComponentName(nameSwipe)
const stateSwipe = reactive<any>({
  rect: null,
  width: 0,
  height: 0,
  offset: 0,
  active: 0,
  swiping: false
})
let dragging = false

const touch = useTouch()
const count = computed(() => children.length)
const size = computed(() => stateSwipe['width'])

const delta = computed(() => touch.deltaX.value)

const minOffset = computed(() => {
  if (stateSwipe.rect) {
    const base = stateSwipe.rect.width
    return base - size.value * count.value
  }
  return 0
})

const maxCount = computed(() =>
  size.value ? Math.ceil(Math.abs(minOffset.value) / size.value) : count.value
)

const trackSize = computed(() => count.value * size.value)

const activeIndicator = computed(
  () => (stateSwipe.active + count.value) % count.value
)

const isCorrectDirection = computed(() => {
  const expect = 'horizontal'
  return touch.direction.value === expect
})

const trackStyle = computed(() => {
  const style: any = {
    transitionDuration: `${stateSwipe.swiping ? 0 : +props.duration * 1000}ms`,
    transform: `translateX(${+stateSwipe.offset.toFixed(2)}px)`
  }

  if (size.value) {
    const mainAxis = 'width'
    const crossAxis = 'height'
    style[mainAxis] = `${trackSize.value}px`
    // @ts-ignore
    style[crossAxis] = props[crossAxis] ? `${props[crossAxis]}px` : ''
  }

  return style
})

const getTargetActive = (pace: number) => {
  const { active } = stateSwipe

  if (pace) {
    return clamp(active + pace, 0, maxCount.value)
  }
  return active
}

const getTargetOffset = (targetActive: number, offset = 0) => {
  let currentPosition = targetActive * size.value
  currentPosition = Math.min(currentPosition, -minOffset.value)
  let targetOffset = offset - currentPosition
  targetOffset = clamp(targetOffset, minOffset.value, 0)
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

  const { active } = stateSwipe
  const targetActive = getTargetActive(pace)
  const targetOffset = getTargetOffset(targetActive, offset)
  stateSwipe.active = targetActive
  stateSwipe.offset = targetOffset

  if (emitChange && targetActive !== active) {
    setCurrentIndex(activeIndicator.value)
  }
}
const correctPosition = () => {
  stateSwipe.swiping = true

  if (stateSwipe.active <= -1) {
    move({ pace: count.value })
  } else if (stateSwipe.active >= count.value) {
    move({ pace: -count.value })
  }
}
const prev = () => {
  correctPosition()
  touch.reset()

  doubleRaf(() => {
    stateSwipe.swiping = false
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
    stateSwipe.swiping = false
    move({
      pace: 1,
      emitChange: true
    })
  })
}

const initialize = (active = +0) => {
  raf(() => {
    getRect(instance, '.z-swipe-rect').then((res: any) => {
      const swiperRect: any = res
      const cb = () => {
        const rect = {
          width: swiperRect.width,
          height: swiperRect.height
        }
        stateSwipe.rect = rect
        stateSwipe.width = +rect.width
        stateSwipe.height = +rect.height

        if (count.value) {
          active = Math.min(count.value - 1, active)

          if (active === -1) {
            active = count.value - 1
          }
        }

        stateSwipe.active = active
        stateSwipe.swiping = true
        stateSwipe.offset = getTargetOffset(active)
        children.forEach((swipe: any) => {
          swipe.setOffset(0)
        })
      }
      cb()
    })
  })
}

let touchStartTime: number

const onTouchStart = (event: TouchEvent) => {
  if (!props.swipeable || event.touches.length > 1) return

  touch.start(event)

  dragging = false
  touchStartTime = Date.now()
  correctPosition()
}

const onTouchMove = (event: TouchEvent) => {
  if (props.swipeable && stateSwipe.swiping) {
    touch.move(event)

    if (isCorrectDirection.value) {
      const isEdgeTouch =
        (stateSwipe.active === 0 && delta.value > 0) ||
        (stateSwipe.active === count.value - 1 && delta.value < 0)

      if (!isEdgeTouch) {
        move({ offset: delta.value })

        if (!dragging) {
          dragging = true
        }
      }
    }
  }
}

const onTouchEnd = () => {
  if (!props.swipeable || !stateSwipe.swiping) {
    return
  }

  const duration = Date.now() - touchStartTime
  const speed = delta.value / duration
  const shouldSwipe =
    Math.abs(speed) > 0.25 || Math.abs(delta.value) > size.value / 2

  if (shouldSwipe && isCorrectDirection.value) {
    const offset = touch.offsetX.value

    let pace = 0
    pace = -Math[delta.value > 0 ? 'ceil' : 'floor'](delta.value / size.value)

    move({
      pace,
      emitChange: true
    })
  } else if (delta.value) {
    move({ pace: 0 })
  }

  dragging = false
  stateSwipe.swiping = false
}

const swipeTo = (index: number, options: any = {}) => {
  correctPosition()
  touch.reset()

  doubleRaf(() => {
    let targetIndex: any
    targetIndex = index % count.value
    if (options.immediate) {
      doubleRaf(() => {
        stateSwipe.swiping = false
      })
    } else {
      stateSwipe.swiping = false
    }

    move({
      pace: targetIndex - stateSwipe.active,
      emitChange: true
    })
  })
}
useExpose({
  resize,
  scrollTo,
  prev,
  next,
  state,
  swipeTo
})

linkChildren({
  id,
  props,
  setLine,
  scrollable,
  onRendered,
  currentName,
  setTitleRefs,
  scrollIntoView,
  size,
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

watch(count, () => {
  if (props.animated || props.swipeable) {
    initialize(stateSwipe.active)
  }
})

const swipeToCurrentTab = (index: number) => {
  if (stateSwipe.active !== index) {
    swipeTo(index, { immediate: !state.inited })
  }
}

watch(() => state.currentIndex, swipeToCurrentTab)

onMounted(() => {
  init()
  if (props.animated || props.swipeable) {
    initialize()
  }
  swipeToCurrentTab(state.currentIndex)
})
</script>
<script lang="ts">
export default {
  name: 'ZTabs',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-tab {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 var(--z-padding-base);
  font-size: var(--z-tab-font-size);
  line-height: var(--z-tab-line-height);
  color: var(--z-tab-text-color);

  &--active {
    font-weight: var(--z-font-bold);
    color: var(--z-tab-active-text-color);
  }

  &--disabled {
    color: var(--z-tab-disabled-text-color);
    cursor: not-allowed;
  }

  &--grow {
    flex: 1 0 auto;
    padding: 0 var(--z-padding-sm);
  }

  &--shrink {
    flex: none;
    padding: 0 var(--z-padding-xs);
  }

  &--card {
    color: var(--z-tabs-default-color);
    border-right: var(--z-border-width) solid var(--z-tabs-default-color);

    &:last-child {
      border-right: none;
    }

    &.z-tab--active {
      color: var(--z-white);
      background-color: var(--z-tabs-default-color);
    }

    &--disabled {
      color: var(--z-tab-disabled-text-color);
    }
  }

  &__text {
    &--ellipsis {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}

.z-tabs {
  position: relative;

  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
    height: 0 !important;
    appearance: none;
    background: transparent;
  }

  &__wrap {
    overflow: hidden;

    &--page-top {
      position: fixed;
    }

    &--content-bottom {
      top: auto;
      bottom: 0;
    }
  }

  &__nav {
    position: relative;
    display: flex;
    user-select: none;
    background: var(--z-tabs-nav-background);

    &--complete {
      &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
        height: 0 !important;
        appearance: none;
        background: transparent;
      }
    }

    &--line {
      box-sizing: content-box;
      height: 100%;
      padding-bottom: 30rpx;
    }

    &--card {
      box-sizing: border-box;
      height: var(--z-tabs-card-height);
      border: var(--z-border-width) solid var(--z-tabs-default-color);
      border-radius: var(--z-radius-sm);
    }

    &--card.z-tabs__nav--shrink {
      display: inline-flex;
    }
  }

  &__scrollview {
    width: 100%;
    height: 100%;
    white-space: nowrap;
    background: var(--z-tabs-nav-background);
  }

  &__line {
    position: absolute;
    bottom: 38rpx;
    left: 0;
    z-index: 1;
    width: var(--z-tabs-bottom-bar-width);
    height: var(--z-tabs-bottom-bar-height);
    background: var(--z-tabs-bottom-bar-color);
    border-radius: var(--z-tabs-bottom-bar-height);
  }

  &__track {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    will-change: left;
  }

  &__content {
    &--animated {
      overflow: hidden;
    }
  }

  &--line {
    .z-tabs__wrap {
      height: var(--z-tabs-line-height);
    }
  }

  &--card {
    > .z-tabs__wrap {
      height: var(--z-tabs-card-height);
    }
  }

  .z-swipe {
    --z-swipe-indicator-size: 12rpx;
    --z-swipe-indicator-margin: var(--z-padding-sm);
    --z-swipe-indicator-active-opacity: 1;
    --z-swipe-indicator-inactive-opacity: 0.3;
    --z-swipe-indicator-active-background: var(--z-primary-color);
    --z-swipe-indicator-inactive-background: var(--z-border-color);

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
}
</style>
