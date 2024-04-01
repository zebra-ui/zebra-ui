<template>
  <view :class="bem()">
    <z-overlay
      :show="props.show && props.overlay"
      :z-index="zIndex"
      :duration="props.duration"
      :overlay-back-groud="overlayBackGroud"
      :custom-style="props.overlayStyle"
      @click="onClickOverlay"
    >
      <slot name="overlay-content"></slot>
    </z-overlay>
    <z-transition
      :show="props.show"
      :custom-style="style"
      :custom-class="customClass"
      :name="
        transition ||
        (position === 'center' ? 'fade' : `popup-slide-${position}`)
      "
      @after-enter="onOpened"
      @after-leave="onClosed"
    >
      <slot></slot>
      <template v-if="props.closeable">
        <view
          :class="[
            bem('close-icon', props.closeIconPosition),
            HAPTICS_FEEDBACK
          ]"
          :style="closeIconStyle"
        >
          <z-icon
            :name="props.closeIcon"
            size="var(--z-popup-close-icon-size)"
            color="var(--z-popup-close-icon-color)"
            :class-prefix="props.iconPrefix"
            @click="onClickCloseIcon"
          />
        </view>
      </template>
    </z-transition>
  </view>
</template>

<script lang="ts" setup>
import {
  ref,
  watch,
  provide,
  computed,
  onMounted,
  onActivated,
  onDeactivated,
  getCurrentInstance
} from 'vue'
import { popupSharedProps } from './shared'
import {
  isDef,
  extend,
  makeStringProp,
  callInterceptor,
  createNamespace,
  HAPTICS_FEEDBACK,
  useExpose,
  POPUP_TOGGLE_KEY,
  useGlobalZIndex,
  useComponentName
} from '../../libs/utils'
import type { PopupPosition, PopupCloseIconPosition } from './types'
import zOverlay from '../z-overlay/z-overlay.vue'
import zTransition from '../z-transition/z-transition.vue'
import zIcon from '../z-icon/z-icon.vue'

const props = defineProps(
  extend({}, popupSharedProps, {
    round: Boolean,
    position: makeStringProp<PopupPosition>('center'),
    closeIcon: makeStringProp('close'),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: makeStringProp<PopupCloseIconPosition>('top-right'),
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean,
    customStyle: Object,
    customClass: String,
    closeIconStyle: Object
  })
)

const [name, bem] = createNamespace('popup')
useComponentName(name)
const instance = getCurrentInstance()
const emit = defineEmits([
  'open',
  'close',
  'opened',
  'closed',
  'keydown',
  'update:show',
  'clickOverlay',
  'clickCloseIcon'
])

let opened: boolean
let shouldReopen: boolean

const zIndex = ref<number>()

const style = computed(() => {
  let style: any = {
    zIndex: zIndex.value
  }

  if (isDef(props.duration)) {
    //@ts-ignore
    const key =
      props.position === 'center' ? 'animationDuration' : 'transitionDuration'
    style[key] = `${props.duration}ms`
  }

  if (props.safeAreaInsetTop) {
    style['padding-top'] = 'constant(safe-area-inset-bottom)'
    style['padding-top'] = 'env(safe-area-inset-top)'
  }

  if (props.safeAreaInsetBottom) {
    style['padding-bottom'] = 'constant(safe-area-inset-top)'
    style['padding-bottom'] = 'env(safe-area-inset-bottom)'
  }

  const cssRoot = {
    position: 'fixed',
    maxHeight: '100%',
    overflowY: 'auto',
    boxSizing: 'border-box',
    background: 'var(--z-popup-background)',
    transition: 'var(--z-popup-transition)',
    WebkitOverflowScrolling: 'touch'
  }

  let positionStyle = {}
  //@ts-ignore
  if (props.position == 'center') {
    positionStyle = {
      top: '50%',
      left: '0',
      right: '0',
      width: 'fit-content',
      maxWidth: 'calc(100vw - var(--z-padding-md) * 2)',
      margin: '0 auto',
      transform: 'translateY(-50%)'
    }
    if (props.round) {
      style['border-radius'] = 'var(--z-popup-round-radius)'
    }
  }
  //@ts-ignore
  else if (props.position == 'top') {
    positionStyle = {
      top: '0',
      left: '0',
      width: '100%'
    }
    if (props.round) {
      style['border-radius'] =
        '0 0 var(--z-popup-round-radius) var(--z-popup-round-radius)'
    }
  }
  //@ts-ignore
  else if (props.position == 'bottom') {
    positionStyle = {
      bottom: '0',
      left: '0',
      width: '100%'
    }
    if (props.round) {
      style['border-radius'] =
        'var(--z-popup-round-radius) var(--z-popup-round-radius) 0 0'
    }
  }
  //@ts-ignore
  else if (props.position == 'left') {
    positionStyle = {
      top: '50%',
      left: '0',
      transform: 'translate3d(0, -50%, 0)'
    }
    if (props.round) {
      style['border-radius'] =
        '0 var(--z-popup-round-radius) var(--z-popup-round-radius) 0'
    }
  }
  //@ts-ignore
  else if (props.position == 'right') {
    positionStyle = {
      top: '50%',
      right: '0',
      transform: 'translate3d(0, -50%, 0)'
    }
    if (props.round) {
      style['border-radius'] =
        'var(--z-popup-round-radius) 0 0 var(--z-popup-round-radius)'
    }
  } else {
    positionStyle = {}
  }

  if (!props.round) {
    delete style['border-radius']
  }

  return { ...cssRoot, ...style, ...positionStyle, ...props.customStyle }
})

const open = () => {
  if (!opened) {
    opened = true
    zIndex.value =
      props.zIndex !== undefined ? +props.zIndex : useGlobalZIndex()
    emit('open')
  }
}

const close = () => {
  if (opened) {
    callInterceptor(props.beforeClose, {
      done() {
        opened = false
        emit('close')
        emit('update:show', false)
      }
    })
  }
}

const onClickOverlay = (event: MouseEvent) => {
  emit('clickOverlay', event)
  if (props.closeOnClickOverlay) {
    close()
  }
}

const onClickCloseIcon = (event: MouseEvent) => {
  emit('clickCloseIcon', event)
  close()
}

let timer: ReturnType<typeof setTimeout> | null
const onOpened = () => {
  if (timer) clearTimeout(timer)
  //@ts-ignore
  timer = setTimeout(() => {
    emit('opened')
  })
}
const onClosed = () => emit('closed')

watch(
  () => props.show,
  (show) => {
    if (show && !opened) {
      open()
    }
    if (!show && opened) {
      opened = false
      emit('close')
    }
  }
)

useExpose({ instance })

onMounted(() => {
  if (props.show) {
    open()
  }
})

onActivated(() => {
  if (shouldReopen) {
    emit('update:show', true)
    shouldReopen = false
  }
})

onDeactivated(() => {
  if (props.show) {
    close()
    shouldReopen = true
  }
})

provide(POPUP_TOGGLE_KEY, () => props.show)
</script>

<script lang="ts">
export default {
  name: 'ZPopup',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<style lang="scss" scoped>
.z-overflow-hidden {
  overflow: hidden !important;
}

.z-popup {
  width: 100%;
  height: 100%;

  &__close-icon {
    position: absolute;
    z-index: var(--z-popup-close-icon-z-index);

    &--top-left {
      top: var(--z-popup-close-icon-margin);
      left: var(--z-popup-close-icon-margin);
    }

    &--top-right {
      top: var(--z-popup-close-icon-margin);
      right: var(--z-popup-close-icon-margin);
    }

    &--bottom-left {
      bottom: var(--z-popup-close-icon-margin);
      left: var(--z-popup-close-icon-margin);
    }

    &--bottom-right {
      right: var(--z-popup-close-icon-margin);
      bottom: var(--z-popup-close-icon-margin);
    }
  }
}
</style>
