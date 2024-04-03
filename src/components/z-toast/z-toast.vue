<template>
  <view :class="bem()">
    <z-popup
      :show="getProps('show')"
      :overlay="getProps('overlay')"
      :transition="transition"
      :overlay-back-groud="getProps('type') ? false : true"
      :overlay-style="overlayStyle"
      :close-on-click-overlay="getProps('closeOnClickOverlay')"
      :z-index="getProps('zIndex')"
      :custom-style="styles"
      @click="onClick"
      @closed="clearTimer"
      @update:show="updateShow"
    >
      <template
        v-if="
          getProps('icon') ||
          getProps('type') === 'success' ||
          getProps('type') === 'fail'
        "
      >
        <z-icon
          :name="getProps('icon') || iconTypeName"
          :size="getProps('iconSize') || 'var(--z-toast-icon-size)'"
          :class-prefix="getProps('iconPrefix')"
          :custom-style="{ 'line-height': '1' }"
        />
      </template>
      <template v-else-if="getProps('type') === 'loading'">
        <z-loading
          :custom-style="{
            padding: 'var(--z-padding-base)',
            color: 'var(--z-toast-loading-icon-color)'
          }"
          :size="getProps('iconSize')"
          :type="getProps('loadingType')"
        />
      </template>
      <template v-if="instance.slots.message">
        <view :class="bem('text')" :style="toastTextStyle">
          <slot name="message"></slot>
        </view>
      </template>
      <template
        v-else-if="isDef(getProps('message')) && getProps('message') !== ''"
      >
        <view :class="bem('text')" :style="toastTextStyle">{{
          getProps('message')
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
  useComponent: Boolean,
  name: String
})

const state = reactive<{
  show: boolean
  [key: string]: any
}>({
  show: false,
  overlay: false
})

const getProps = (name: string) => {
  if (props.useComponent) {
    // @ts-ignore
    return props[name]
  } else {
    return state[name]
  }
}

const emit = defineEmits(['update:show'])
let timer: ReturnType<typeof setTimeout>
let clickable = false

const toggleClickable = () => {
  const newValue = getProps('show') && getProps('forbidClick')
  if (clickable !== newValue) {
    clickable = newValue
    state.overlay = true
  }
}

const iconTypeName = computed(() => {
  //@ts-ignore
  if (getProps('type') === 'success') {
    return 'check-circle'
  }
  //@ts-ignore
  else if (getProps('type') === 'fail') {
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
  if (getProps('position') == 'top') {
    style = {
      top: 'var(--z-toast-position-top-distance)'
    }
  }
  //@ts-ignore
  else if (getProps('position') == 'bottom') {
    style = {
      top: 'auto',
      bottom: 'var(--z-toast-position-bottom-distance)'
    }
  }
  //@ts-ignore
  else if (getProps('position') == 'middle') {
    style = {}
  } else {
    style = {}
  }
  //@ts-ignore
  if (getProps('wordBreak') === 'normal') {
    normalStyle['word-break'] = 'normal'
    normalStyle['word-wrap'] = 'normal'
  }
  //@ts-ignore
  else if (getProps('wordBreak') === 'break-word') {
    normalStyle['word-break'] = 'normal'
    normalStyle['word-wrap'] = 'break-word'
  }
  //@ts-ignore
  else if (getProps('wordBreak') === 'break-all') {
    normalStyle['word-break'] = 'break-all'
  }

  if (!getProps('icon')) {
    //@ts-ignore
    if (getProps('type') == 'text' || getProps('type') == 'html') {
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
    ...getProps('customStyle')
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

watch(() => [getProps('show'), getProps('forbidClick')], toggleClickable)

watch(
  () => [
    getProps('show'),
    getProps('type'),
    getProps('message'),
    getProps('duration')
  ],
  () => {
    clearTimer()
    if (getProps('show') && getProps('duration') > 0) {
      timer = setTimeout(() => {
        updateShow(false)
      }, getProps('duration'))
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

const toastInjectKey = props.name ? `z-toast-${props.name}` : 'z-toast'

const injectOptions = inject(toastInjectKey, ref({}))

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
