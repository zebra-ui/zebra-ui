<template>
  <view
    v-show="state.show"
    :class="bem({ wrapable })"
    :style="{ color, background }"
  >
    <template v-if="instance.slots['left-icon']">
      <slot name="left-icon"></slot>
    </template>
    <template v-else-if="props.leftIcon">
      <z-icon :custom-style="leftIconStyle" :name="props.leftIcon" />
    </template>
    <view class="z-notice-wrap" :class="bem('wrap')">
      <view
        class="z-notice-content"
        :style="{
          transform: state.offset ? `translateX(${state.offset}px)` : '',
          transitionDuration: `${state.duration}s`
        }"
        :class="[
          bem('content'),
          { 'z-ellipsis': props.scrollable === false && !props.wrapable }
        ]"
        @transitionend="onTransitionEnd"
      >
        <template v-if="instance.slots.default">
          <slot></slot>
        </template>
        <template v-else>
          {{ props.text }}
        </template>
      </view>
    </view>
    <template v-if="instance.slots['right-icon']">
      <slot name="right-icon"></slot>
    </template>
    <template v-else-if="getRightIconName()">
      <z-icon
        :custom-style="rightIconStyle"
        :name="getRightIconName()"
        @click="onClickRightIcon"
      />
    </template>
  </view>
</template>
<script lang="ts" setup>
import {
  watch,
  reactive,
  type PropType,
  onMounted,
  getCurrentInstance,
  computed
} from 'vue'
import {
  isDef,
  createNamespace,
  makeNumericProp,
  raf,
  getRect,
  doubleRaf,
  useExpose,
  useComponentName
} from '../../libs/utils'
import { NoticeBarMode } from './types'
import zIcon from '../z-icon/z-icon.vue'

const [name, bem] = createNamespace('notice-bar')
useComponentName(name)
const instance = getCurrentInstance()!
const props = defineProps({
  text: String,
  mode: String as PropType<NoticeBarMode>,
  color: String,
  delay: makeNumericProp(1),
  speed: makeNumericProp(60),
  leftIcon: String,
  wrapable: Boolean,
  background: String,
  scrollable: {
    type: Boolean as PropType<boolean | null>,
    default: false
  }
})

const emit = defineEmits(['close', 'replay'])

let wrapWidth = 0
let contentWidth = 0
let startTimer: ReturnType<typeof setTimeout>

const state = reactive({
  show: true,
  offset: 0,
  duration: 0
})

const getRightIconName = () => {
  // @ts-ignore
  if (props.mode === 'closeable') {
    return 'close'
  }
  // @ts-ignore
  if (props.mode === 'link') {
    return 'right-big'
  }
}

const onClickRightIcon = (event: MouseEvent) => {
  // @ts-ignore
  if (props.mode === 'closeable') {
    state.show = false
    emit('close', event)
  }
}

const onTransitionEnd = () => {
  state.offset = wrapWidth
  state.duration = 0
  raf(() => {
    doubleRaf(() => {
      state.offset = -contentWidth
      state.duration = (contentWidth + wrapWidth) / +props.speed
      emit('replay')
    })
  })
}

const reset = () => {
  const { delay, speed, scrollable } = props
  const ms = isDef(delay) ? +delay * 1000 : 0

  wrapWidth = 0
  contentWidth = 0
  state.offset = 0
  state.duration = 0

  clearTimeout(startTimer)
  startTimer = setTimeout(() => {
    // @ts-ignore
    if (scrollable === false) {
      return
    }

    Promise.all([
      getRect(instance, '.z-notice-wrap'),
      getRect(instance, '.z-notice-content')
    ]).then(([wrapRect, contentRect]: any) => {
      const wrapRefWidth = wrapRect.width
      const contentRefWidth = contentRect.width

      if (scrollable || contentRefWidth > wrapRefWidth) {
        doubleRaf(() => {
          wrapWidth = wrapRefWidth
          contentWidth = contentRefWidth
          state.offset = -contentWidth
          state.duration = contentWidth / +speed
        })
      }
    })
  }, ms)
}

const leftIconStyle = computed(() => {
  const styles = {
    minWidth: 'var(--z-notice-bar-icon-min-width)',
    fontSize: 'var(--z-notice-bar-icon-size)'
  }
  return { ...styles }
})

const rightIconStyle = computed(() => {
  const styles = {
    minWidth: 'var(--z-notice-bar-icon-min-width)',
    fontSize: 'var(--z-notice-bar-icon-size)',
    textAlign: 'right',
    cursor: 'pointer'
  }
  return { ...styles }
})

useExpose({ reset })

onMounted(() => {
  reset()
})

watch(() => [props.text, props.scrollable], reset)
</script>
<script lang="ts">
export default {
  name: 'ZNoticeBar',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-notice-bar {
  position: relative;
  display: flex;
  align-items: center;
  height: var(--z-notice-bar-height);
  padding: var(--z-notice-bar-padding);
  font-size: var(--z-notice-bar-font-size);
  line-height: var(--z-notice-bar-line-height);
  color: var(--z-notice-bar-text-color);
  background: var(--z-notice-bar-background);

  &__wrap {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    height: 100%;
    overflow: hidden;
  }

  &__content {
    position: absolute;
    white-space: nowrap;
    transition-timing-function: linear;

    &.z-ellipsis {
      max-width: 100%;
    }
  }

  &--wrapable {
    height: auto;
    padding: var(--z-notice-bar-wrapable-padding);

    .z-notice-bar {
      &__wrap {
        height: auto;
      }

      &__content {
        position: relative;
        word-wrap: break-word;
        white-space: normal;
      }
    }
  }
}
</style>
