<template>
  <view :class="bem()">
    <z-popup
      :show="getProps('show')"
      role="dialog"
      :custom-style="popupStyle"
      :z-index="getProps('zIndex')"
      :overlay="getProps('overlay')"
      :duration="getProps('duration')"
      :teleport="getProps('teleport')"
      :lock-scroll="getProps('lockScroll')"
      :lazy-render="getProps('lazyRender')"
      :before-close="getProps('beforeClose')"
      :overlay-style="getProps('overlayStyle')"
      :overlay-class="getProps('overlayClass')"
      :transition-appear="getProps('transitionAppear')"
      :close-on-click-overlay="getProps('closeOnClickOverlay')"
      :transition="getProps('transition')"
      :close-on-popstate="getProps('closeOnPopstate')"
      @update:show="updateShow"
    >
      <view :class="bem([getProps('theme')])">
        <template v-if="instance.slots.title || getProps('title')">
          <view
            :class="
              bem('header', {
                isolated: !getProps('message') && !instance.slots.default
              })
            "
          >
            <template v-if="instance.slots.title">
              <slot name="title"></slot>
            </template>
            <template v-else>
              {{ getProps('title') }}
            </template>
          </view>
        </template>
        <template v-if="instance.slots.default">
          <view :class="bem('content')">
            <slot></slot>
          </view>
        </template>
        <template v-if="getProps('message')">
          <view :class="bem('content', { isolated: !hasTitle })">
            <view
              :class="
                bem('message', {
                  'has-title': hasTitle,
                  [messageAlign as string]: getProps('messageAlign')
                })
              "
            >
              {{
                isFunction(getProps('message'))
                  ? getProps('message')()
                  : getProps('message')
              }}
            </view>
          </view>
        </template>
        <template v-if="instance.slots.footer">
          <slot name="footer"></slot>
        </template>
        <template v-else>
          <view
            v-if="getProps('theme') === 'round-button'"
            :class="bem('footer')"
          >
            <z-button
              v-if="getProps('showCancelButton')"
              size="normal"
              :custom-style="cancelRoundStyle"
              :text="getProps('cancelButtonText') || '取消'"
              :loading="loading.cancel"
              :disabled="getProps('cancelButtonDisabled')"
              @click="onCancel"
            ></z-button>

            <z-button
              v-if="getProps('showConfirmButton')"
              size="normal"
              type="primary"
              :custom-style="confirmRoundStyle"
              :text="getProps('confirmButtonText') || '确认'"
              :loading="loading.confirm"
              :disabled="getProps('confirmButtonDisabled')"
              @click="onConfirm"
            ></z-button>
          </view>
          <view v-else :class="[BORDER_TOP, bem('footer')]">
            <z-button
              v-if="getProps('showCancelButton')"
              size="large"
              :custom-style="cancelStyle"
              :hairline="false"
              :custom-class="{ [BORDER]: getProps('showCancelButton') }"
              :text="getProps('cancelButtonText') || '取消'"
              :loading="loading.cancel"
              hide-border
              :disabled="getProps('cancelButtonDisabled')"
              @click="onCancel"
            ></z-button>

            <z-button
              v-if="getProps('showConfirmButton')"
              size="large"
              :custom-style="confirmStyle"
              :hairline="false"
              :hide-border="!getProps('showCancelButton')"
              hide-radius
              :custom-class="{
                [BORDER_LEFT]: getProps('showCancelButton'),
                [BORDER_ORGIN]: getProps('showCancelButton')
              }"
              :text="getProps('confirmButtonText') || '确认'"
              :loading="loading.confirm"
              :disabled="getProps('confirmButtonDisabled')"
              @click="onConfirm"
            ></z-button>
          </view>
        </template>
      </view>
    </z-popup>
  </view>
</template>
<script lang="ts" setup>
import {
  ref,
  reactive,
  type PropType,
  getCurrentInstance,
  computed,
  inject,
  watch,
  type CSSProperties
} from 'vue'
import {
  extend,
  addUnit,
  truthProp,
  isFunction,
  BORDER,
  BORDER_ORGIN,
  BORDER_TOP,
  BORDER_LEFT,
  unknownProp,
  numericProp,
  makeStringProp,
  callInterceptor,
  createNamespace,
  useComponentName
} from '../../libs/utils'
import { popupSharedProps } from '../z-popup/shared'
import type {
  DialogTheme,
  DialogAction,
  DialogMessage,
  DialogMessageAlign
} from './types'
import zPopup from '../z-popup/z-popup.vue'
import zButton from '../z-button/z-button.vue'
const [name, bem] = createNamespace('dialog')
useComponentName(name)
const props = defineProps(
  extend({}, popupSharedProps, {
    title: String,
    theme: String as PropType<DialogTheme>,
    width: numericProp,
    message: [String, Function] as PropType<DialogMessage>,
    callback: Function as PropType<(action?: DialogAction) => void>,
    allowHtml: Boolean,
    className: unknownProp,
    transition: makeStringProp('dialog-bounce'),
    messageAlign: String as PropType<DialogMessageAlign>,
    closeOnPopstate: truthProp,
    showCancelButton: Boolean,
    cancelButtonText: String,
    cancelButtonColor: String,
    cancelButtonDisabled: Boolean,
    confirmButtonText: String,
    confirmButtonColor: String,
    confirmButtonDisabled: Boolean,
    showConfirmButton: truthProp,
    closeOnClickOverlay: Boolean,
    useComponent: Boolean,
    name: String
  })
)
const instance = getCurrentInstance()!
const emit = defineEmits(['confirm', 'cancel', 'keydown', 'update:show'])
const loading = reactive({
  confirm: false,
  cancel: false
})

const state = reactive<{
  show: boolean
  [key: string]: any
}>({
  show: false,
  overlay: false,
  transition: 'dialog-bounce'
})

const getProps = (name: string) => {
  if (props.useComponent) {
    // @ts-ignore
    return props[name]
  } else {
    return state[name]
  }
}
const hasTitle = computed(() => {
  return !!(getProps('title') || instance.slots.title)
})

const popupStyle = computed(() => {
  const styleObject: CSSProperties = {
    top: '45%',
    width: 'var(--z-dialog-width)',
    overflow: 'hidden',
    fontSize: 'var(--z-dialog-font-size)',
    background: 'var(--z-dialog-background)',
    borderRadius: 'var(--z-dialog-radius)',
    backfaceVisibility: 'hidden',
    transition: 'var(--z-dialog-transition)',
    transitionProperty: 'transform, opacity'
  }
  if (props.width || state.width) {
    styleObject['width'] = addUnit(props.width || state.width)
  }
  return styleObject
})

const cancelStyle = computed(() => {
  const styleObject: CSSProperties = {
    flex: '1',
    height: 'var(--z-dialog-button-height)',
    margin: '0',
    border: '0',
    borderRadius: '0'
  }
  if (getProps('cancelButtonColor')) {
    styleObject['color'] = getProps('cancelButtonColor')
  }
  return styleObject
})

const confirmStyle = computed(() => {
  const styleObject = {
    flex: '1',
    height: 'var(--z-dialog-button-height)',
    margin: '0',
    border: '0',
    borderRadius: '0',
    color: 'var(--z-dialog-confirm-button-text-color)'
  }
  if (getProps('confirmButtonColor')) {
    styleObject['color'] = getProps('confirmButtonColor')
  }
  return styleObject
})

const cancelRoundStyle = computed(() => {
  const styleObject: CSSProperties = {
    flex: '1'
  }
  if (getProps('confirmButtonColor')) {
    styleObject['color'] = getProps('cancelButtonColor')
  }
  return styleObject
})

const confirmRoundStyle = computed(() => {
  const styleObject: CSSProperties = {
    flex: '1'
  }
  if (getProps('confirmButtonColor')) {
    styleObject['color'] = getProps('confirmButtonColor')
  }
  if (getProps('showCancelButton')) {
    styleObject['margin-left'] = '30rpx'
  }
  return styleObject
})

const updateShow = (value: boolean) => {
  state.show = value
  emit('update:show', value)
}

const closeDialog = (action: DialogAction) => {
  updateShow(false)
  // @ts-ignore
  getProps('callback')?.(action)
}

const getActionHandler = (action: DialogAction) => () => {
  if (!getProps('show')) {
    return
  }

  emit(action)

  if (getProps('beforeClose')) {
    loading[action] = true
    callInterceptor(getProps('beforeClose'), {
      args: [action],
      done() {
        closeDialog(action)
        loading[action] = false
      },
      canceled() {
        loading[action] = false
      }
    })
  } else {
    closeDialog(action)
  }
}

const onCancel = getActionHandler('cancel')
const onConfirm = getActionHandler('confirm')

const toggle = (show: boolean) => {
  state.show = show
}

const open = (propsData: Record<string, any>) => {
  extend(state, propsData, { transitionAppear: true })
  toggle(true)
}

const close = () => toggle(false)

defineExpose({
  open,
  close,
  toggle,
  state
})

const injectOptions = inject(`z-dialog-${props.name}`, ref({}))

watch(
  () => injectOptions.value,
  (value) => {
    extend(state, value, { transitionAppear: true })
  }
)
</script>
<script lang="ts">
export default {
  name: 'ZDialog',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-dialog {
  @media (width <= 642rpx) {
    width: var(--z-dialog-small-screen-width);
  }

  &__header {
    padding-top: var(--z-dialog-header-padding-top);
    font-weight: var(--z-dialog-header-font-weight);
    line-height: var(--z-dialog-header-line-height);
    color: var(--z-text-color);
    text-align: center;

    &--isolated {
      padding: var(--z-dialog-header-isolated-padding);
    }
  }

  &__content {
    &--isolated {
      display: flex;
      align-items: center;
      min-height: 208rpx;
    }
  }

  &__message {
    flex: 1;
    max-height: var(--z-dialog-message-max-height);
    padding: 52rpx var(--z-dialog-message-padding);
    overflow-y: auto;
    font-size: var(--z-dialog-message-font-size);
    line-height: var(--z-dialog-message-line-height);
    color: var(--z-text-color);
    text-align: center;
    word-wrap: break-word;
    white-space: pre-wrap;
    -webkit-overflow-scrolling: touch;

    &--has-title {
      padding-top: var(--z-dialog-has-title-message-padding-top);
      color: var(--z-dialog-has-title-message-text-color);
    }

    &--left {
      text-align: left;
    }

    &--right {
      text-align: right;
    }

    &--justify {
      text-align: justify;
    }
  }

  &__footer {
    display: flex;
    overflow: hidden;
    user-select: none;
  }

  &--round-button {
    .z-dialog__footer {
      position: relative;
      height: auto;
      padding: var(--z-padding-xs) var(--z-padding-lg) var(--z-padding-md);
    }

    .z-dialog__message {
      padding-bottom: var(--z-padding-md);
      color: var(--z-text-color);
    }

    .z-dialog__confirm,
    .z-dialog__cancel {
      height: var(--z-dialog-round-button-height);
    }

    .z-dialog__confirm {
      color: var(--z-white);
    }

    .z-action-bar-button {
      &--first {
        border-top-left-radius: var(--z-radius-max);
        border-bottom-left-radius: var(--z-radius-max);
      }

      &--last {
        border-top-right-radius: var(--z-radius-max);
        border-bottom-right-radius: var(--z-radius-max);
      }
    }
  }
}
</style>
