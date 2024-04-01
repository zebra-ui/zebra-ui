<template>
  <view :class="bem()">
    <z-popup
      :show="show || state.show"
      :overlay="overlay || state.overlay"
      :transition="transition"
      :overlay-back-groud="
        props.type == 'loading' || state.type == 'loading' ? false : true
      "
      :overlay-style="overlayStyle"
      :close-on-click-overlay="closeOnClickOverlay || state.closeOnClickOverlay"
      :z-index="zIndex"
      :custom-style="styles"
      @click="onClick"
      @closed="clearTimer"
      @update:show="updateShow"
    >
      <template
        v-if="
          icon ||
          state.icon ||
          type === 'success' ||
          type === 'fail' ||
          state.type === 'success' ||
          state.type === 'fail'
        "
      >
        <z-icon
          :name="icon || state.icon || iconTypeName"
          :size="iconSize || state.iconSize || 'var(--z-toast-icon-size)'"
          :class-prefix="iconPrefix || state.iconPrefix"
          :custom-style="{ 'line-height': '1' }"
        />
      </template>
      <template v-else-if="type === 'loading' || state.type === 'loading'">
        <z-loading
          :custom-style="{
            padding: 'var(--z-padding-base)',
            color: 'var(--z-toast-loading-icon-color)'
          }"
          :size="iconSize || state.iconSize"
          :type="loadingType || state.loadingType"
        />
      </template>
      <template v-if="instance.slots.message">
        <view :class="bem('text')" :style="toastTextStyle">
          <slot name="message"></slot>
        </view>
      </template>
      <template
        v-else-if="
          (isDef(message) || isDef(state.message)) &&
          (message !== '' || state.message !== '')
        "
      >
        <view :class="bem('text')" :style="toastTextStyle">{{
          message || state.message
        }}</view>
      </template>
    </z-popup>
  </view>
</template>

<script lang="ts" setup>
import {
  ref,
  watch,
  onMounted,
  onUnmounted,
  type PropType,
  computed,
  getCurrentInstance,
  inject,
  reactive,
  type CSSProperties
} from 'vue'
import {
  isDef,
  numericProp,
  makeStringProp,
  makeNumberProp,
  createNamespace,
  extend,
  useComponentName
} from '../../libs/utils'
import zPopup from '../z-popup/z-popup.vue'
import zIcon from '../z-icon/z-icon.vue'
import zLoading from '../z-loading/z-loading.vue'

import type { ToastType, ToastPosition, ToastWordBreak } from './types'
interface ToastTextStyle {
  'margin-top'?: string | undefined
}
const [componentName, bem] = createNamespace('toast')
useComponentName(componentName)
const instance = getCurrentInstance()!

const props = defineProps({
  icon: String,
  show: Boolean,
  type: makeStringProp<ToastType>('text'),
  overlay: Boolean,
  message: numericProp,
  iconSize: numericProp,
  duration: makeNumberProp(2000),
  position: makeStringProp<ToastPosition>('middle'),
  wordBreak: String as PropType<ToastWordBreak>,
  iconPrefix: String,
  transition: makeStringProp('fade'),
  loadingType: String as PropType<any>,
  forbidClick: Boolean,
  overlayStyle: Object as PropType<any>,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean,
  zIndex: numericProp,
  customStyle: Object,
  name: String
})

const state = reactive<{
  show: boolean
  [key: string]: any
}>({
  show: false,
  overlay: false
})

const emit = defineEmits(['update:show'])
let timer: ReturnType<typeof setTimeout>
let clickable = false

const toggleClickable = () => {
  const newValue =
    (props.show && props.forbidClick) || (state.show && state.forbidClick)
  if (clickable !== newValue) {
    clickable = newValue
    state.overlay = true
  }
}

const iconTypeName = computed(() => {
  //@ts-ignore
  if (props.type === 'success' || state.type === 'success') {
    return 'check-circle'
  }
  //@ts-ignore
  else if (props.type === 'fail' || state.type === 'fail') {
    return 'warning-circle'
  } else {
    return ''
  }
})

const updateShow = (show: boolean) => {
  state.show = show
  emit('update:show', show)
}

const onClick = () => {
  if (props.closeOnClick) {
    updateShow(false)
  }
}

const clearTimer = () => clearTimeout(timer)

const toastTextStyle = ref<ToastTextStyle>({})

const styles = computed(() => {
  const elementStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'content-box',
    transition: 'all var(--z-duration-fast)',
    width: 'var(--z-toast-default-width)',
    maxWidth: 'var(--z-toast-max-width)',
    minHeight: 'var(--z-toast-default-min-height)',
    padding: 'var(--z-toast-default-padding)',
    color: 'var(--z-toast-text-color)',
    fontSize: 'var(--z-toast-font-size)',
    lineHeight: 'var(--z-toast-line-height)',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all',
    textAlign: 'center',
    background: 'var(--z-toast-background)',
    borderRadius: 'var(--z-toast-radius)'
  }
  const normalStyle: CSSProperties = {}
  let style = {}
  let typeStyle = {}
  //@ts-ignore
  if (props.position == 'top' || state.position == 'top') {
    style = {
      top: 'var(--z-toast-position-top-distance)'
    }
  }
  //@ts-ignore
  else if (props.position == 'bottom' || state.position == 'bottom') {
    style = {
      top: 'auto',
      bottom: 'var(--z-toast-position-bottom-distance)'
    }
  }
  //@ts-ignore
  else if (props.position == 'middle' || state.position == 'middle') {
    style = {}
  } else {
    style = {}
  }
  //@ts-ignore
  if (props.wordBreak === 'normal' || state.wordBreak === 'normal') {
    normalStyle['word-break'] = 'normal'
    normalStyle['word-wrap'] = 'normal'
  }
  //@ts-ignore
  else if (
    props.wordBreak === 'break-word' ||
    state.wordBreak === 'break-word'
  ) {
    normalStyle['word-break'] = 'normal'
    normalStyle['word-wrap'] = 'break-word'
  }
  //@ts-ignore
  else if (props.wordBreak === 'break-all' || state.wordBreak === 'break-all') {
    normalStyle['word-break'] = 'break-all'
  }

  if (!props.icon && !state.icon) {
    //@ts-ignore
    if (
      (props.type == 'text' || props.type == 'html') &&
      (state.type == 'text' || state.type == 'html')
    ) {
      typeStyle = {
        width: 'fit-content',
        minWidth: 'var(--z-toast-text-min-width)',
        minHeight: '0',
        padding: 'var(--z-toast-text-padding)'
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      toastTextStyle.value = {
        'margin-top': '0'
      }
    } else if (instance.slots.message) {
      typeStyle = {
        width: 'fit-content',
        minWidth: 'var(--z-toast-text-min-width)',
        minHeight: '0',
        padding: 'var(--z-toast-text-padding)'
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      toastTextStyle.value = {
        'margin-top': '0'
      }
    } else {
      typeStyle = {}
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      toastTextStyle.value = {}
    }
  } else {
    typeStyle = {}
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    toastTextStyle.value = {}
  }

  return {
    ...elementStyle,
    ...style,
    ...normalStyle,
    ...typeStyle,
    ...props.customStyle,
    ...state.customStyle
  }
})

const toggle = (show: boolean) => {
  state.show = show
}

const open = (propsData: Record<string, any>) => {
  extend(state, propsData, { transitionAppear: true })
  toggle(true)
}

const close = () => toggle(false)

watch(() => [props.show, props.forbidClick], toggleClickable)
watch(() => [state.show, state.forbidClick], toggleClickable)

watch(
  () => [props.show, props.type, props.message, props.duration],
  () => {
    clearTimer()
    if (props.show && props.duration > 0) {
      timer = setTimeout(() => {
        updateShow(false)
      }, props.duration)
    }
  }
)

watch(
  () => [state.show, state.type, state.message, state.duration],
  () => {
    clearTimer()
    if (state.show && state.duration > 0) {
      timer = setTimeout(() => {
        updateShow(false)
      }, state.duration)
    }
  }
)

onMounted(toggleClickable)
onUnmounted(toggleClickable)

defineExpose({
  open,
  close,
  toggle,
  state
})

const injectOptions = inject(`z-toast-${props.name}`, ref({}))

watch(
  () => injectOptions.value,
  (value) => {
    extend(state, value, { transitionAppear: true })
  }
)
</script>

<style lang="scss" scoped>
.z-toast {
  width: 100%;
  height: 100%;

  &--unclickable {
    overflow: hidden;
    cursor: not-allowed;
  }

  &__text {
    margin-top: var(--z-padding-xs);
  }
}
</style>
