<template>
  <z-popup
    :show="props.show"
    :overlay="overlay"
    :position="position"
    :overlay-back-groud="overlayBackground"
    :custom-style="popupStyle"
    @close="onClose"
  >
    <view
      :style="getZIndexStyle(props.zIndex)"
      :class="
        bem({ unfit: !props.safeAreaInsetBottom, 'with-title': showTitle })
      "
    >
      <template v-if="showTitle">
        <view :class="bem('header')">
          <template v-if="instance.slots['title-left']">
            <text :class="bem('title-left')">
              <slot name="title-left"></slot>
            </text>
          </template>
          <template v-if="title">
            <view :class="bem('title')">{{ title }}</view>
          </template>
          <template v-if="showClose">
            <z-button
              type="text"
              :custom-style="closeButtonStyle"
              @click="onClose"
            >
              {{ closeButtonText }}
            </z-button>
          </template>
        </view>
      </template>
      <view :class="bem('body')">
        <view :class="bem('keys')">
          <template v-for="(item, index) in keys" :key="index">
            <z-number-keyboard-key
              :text="item.text"
              :type="item.type"
              :wider="item.wider"
              :color="item.color"
              @press="onPress"
            >
            </z-number-keyboard-key>
          </template>
        </view>

        <template v-if="props.theme === 'custom'">
          <view :class="bem('sidebar')">
            <template v-if="props.showDeleteKey">
              <z-number-keyboard-key
                :large="true"
                :text="props.deleteButtonText"
                type="delete"
                @press="onPress"
              >
              </z-number-keyboard-key>
            </template>
            <z-number-keyboard-key
              :large="true"
              :text="closeButtonText"
              type="close"
              color="blue"
              :loading="closeButtonLoading"
              @press="onPress"
            />
          </view>
        </template>
      </view>
    </view>
  </z-popup>
</template>
<script lang="ts" setup>
import { watch, computed, type PropType, getCurrentInstance } from 'vue'
import {
  truthProp,
  numericProp,
  getZIndexStyle,
  makeStringProp,
  makeNumericProp,
  createNamespace,
  type Numeric,
  useComponentName
} from '../../libs/utils'
import type { PopupPosition } from '../z-popup/types'

import zNumberKeyboardKey from './z-number-keyboard-key.vue'
import zPopup from '../z-popup/z-popup.vue'
import zButton from '../z-button/z-button.vue'

type KeyType = '' | 'delete' | 'extra' | 'close'

const [name, bem] = createNamespace('number-keyboard')
useComponentName(name)

type NumberKeyboardTheme = 'default' | 'custom'

const instance = getCurrentInstance()!

type KeyConfig = {
  text?: Numeric
  type?: KeyType
  color?: string
  wider?: boolean
}

const props = defineProps({
  show: Boolean,
  title: String,
  overlay: truthProp,
  position: makeStringProp<PopupPosition>('bottom'),
  overlayBackground: {
    type: Boolean,
    default: false
  },
  theme: makeStringProp<NumberKeyboardTheme>('default'),
  zIndex: numericProp,
  maxlength: makeNumericProp(Infinity),
  modelValue: makeStringProp(''),
  transition: truthProp,
  blurOnClose: truthProp,
  showDeleteKey: truthProp,
  randomKeyOrder: Boolean,
  closeButtonText: String,
  deleteButtonText: String,
  closeButtonLoading: Boolean,
  hideOnClickOutside: truthProp,
  safeAreaInsetBottom: truthProp,
  extraKey: {
    type: [String, Array] as PropType<string | string[]>,
    default: ''
  }
})

function shuffle(array: unknown[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const emit = defineEmits([
  'show',
  'hide',
  'blur',
  'input',
  'close',
  'delete',
  'update:modelValue'
])

const genBasicKeys = () => {
  const keys: KeyConfig[] = Array(9)
    .fill('')
    .map((_, i) => ({ text: i + 1 }))

  if (props.randomKeyOrder) {
    shuffle(keys)
  }

  return keys
}

const closeButtonStyle = computed(() => {
  const styles = {
    position: 'absolute',
    right: 0,
    height: '100%',
    padding: 'var(--z-number-keyboard-close-padding)',
    color: 'var(--z-number-keyboard-close-color)',
    fontSize: 'var(--z-number-keyboard-close-font-size)'
  }
  return styles
})

const popupStyle = computed(() => {
  const styles = {
    background: 'transparent'
  }
  return { ...styles }
})

const genDefaultKeys = (): KeyConfig[] => [
  ...genBasicKeys(),
  { text: props.extraKey as string, type: 'extra' },
  { text: 0 },
  {
    text: props.showDeleteKey ? props.deleteButtonText : '',
    type: props.showDeleteKey ? 'delete' : ''
  }
]

const genCustomKeys = () => {
  const keys = genBasicKeys()
  const { extraKey } = props
  const extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey]

  if (extraKeys.length === 1) {
    keys.push({ text: 0, wider: true }, { text: extraKeys[0], type: 'extra' })
  } else if (extraKeys.length === 2) {
    keys.push(
      { text: extraKeys[0], type: 'extra' },
      { text: 0 },
      { text: extraKeys[1], type: 'extra' }
    )
  }

  return keys
}

const showClose = computed(() => {
  return props.closeButtonText && props.theme === 'default'
})

const showTitle = computed(() => {
  return props.title || showClose.value || instance.slots['title-left']
})

const keys = computed(() =>
  props.theme === 'custom' ? genCustomKeys() : genDefaultKeys()
)

const onBlur = () => {
  if (props.show) {
    emit('blur')
  }
}
const onClose = () => {
  emit('close')
  if (props.blurOnClose) {
    onBlur()
  }
}
const onPress = (text: string, type: KeyType) => {
  if (text === '') {
    // @ts-ignore
    if (type === 'extra') {
      onBlur()
    }
    return
  }

  const value = props.modelValue
  // @ts-ignore
  if (type === 'delete') {
    emit('delete')
    // @ts-ignore
    emit('update:modelValue', value.slice(0, value.length - 1))
    // @ts-ignore
  } else if (type === 'close') {
    onClose()
    // @ts-ignore
  } else if (value.length < +props.maxlength) {
    emit('input', text)
    emit('update:modelValue', value + text)
  }
}

watch(
  () => props.show,
  (value) => {
    if (!props.transition) {
      emit(value ? 'show' : 'hide')
    }
  }
)
</script>
<script lang="ts">
export default {
  name: 'ZNumberKeyboard',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-number-keyboard {
  width: 100%;
  padding-bottom: 44rpx;
  user-select: none;
  background: var(--z-number-keyboard-background);

  &--with-title {
    border-radius: 40rpx 40rpx 0 0;
  }

  &__header {
    position: relative;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--z-number-keyboard-title-height);
    padding-top: 12rpx;
    font-size: var(--z-number-keyboard-title-font-size);
    color: var(--z-number-keyboard-title-color);
  }

  &__title {
    display: inline-block;
    font-weight: normal;

    &-left {
      position: absolute;
      left: 0;
    }
  }

  &__body {
    display: flex;
    padding: 12rpx 0 0 12rpx;
  }

  &__keys {
    display: flex;
    flex: 3;
    flex-wrap: wrap;
  }

  &__sidebar {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  &--unfit {
    padding-bottom: 0;
  }
}
</style>
