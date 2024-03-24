<template>
  <button
    :type="nativeType"
    :form-type="formType"
    :class="[
      bem([
        type,
        size,
        {
          plain,
          block,
          round,
          square,
          loading,
          disabled,
          hairline,
          hideborder: props.hideBorder,
          hideradius: props.hideRadius
        }
      ]),
      { [BORDER_SURROUND]: hairline },
      customClass
    ]"
    :style="getStyle()"
    :disabled="disabled"
    @click="onClick"
  >
    <view :class="bem('content')">
      <template v-if="iconPosition === 'left'">
        <template v-if="props.loading">
          <template v-if="instance.slots.loading">
            <slot name="loading"></slot>
          </template>
          <template v-else>
            <view :class="bem('loading')">
              <z-loading
                :size="props.loadingSize"
                :type="props.loadingType"
                :custom-style="loadingStyle()"
              />
            </view>
          </template>
        </template>
        <template v-else-if="instance.slots.icon">
          <view :class="bem('icon')">
            <slot name="icon"></slot>
          </view>
        </template>
        <template v-else-if="props.icon">
          <view :class="bem('icon')">
            <z-icon :name="props.icon" :class-prefix="props.iconPrefix" />
          </view>
        </template>
      </template>
      <view
        :class="bem('text')"
        v-if="
          (props.loading && loadingText) || instance.slots.default || props.text
        "
      >
        <template v-if="props.loading">
          {{ props.loadingText }}
        </template>
        <template v-else>
          <template v-if="instance.slots.default">
            <slot></slot>
          </template>
          <template v-else>
            {{ props.text }}
          </template>
        </template>
      </view>
      <template v-if="iconPosition === 'right'">
        <template v-if="props.loading">
          <template v-if="instance.slots.loading">
            <slot name="loading"></slot>
          </template>
          <template v-else>
            <view :class="bem('loading')">
              <z-loading
                :size="props.loadingSize"
                :type="props.loadingType"
                :custom-style="loadingStyle()"
              />
            </view>
          </template>
        </template>
        <template v-else-if="instance.slots.icon">
          <view :class="bem('icon')">
            <slot name="icon"></slot>
          </view>
        </template>
        <template v-else-if="props.icon">
          <view :class="bem('icon')">
            <z-icon :name="props.icon" :class-prefix="props.iconPrefix" />
          </view>
        </template>
      </template>
    </view>
  </button>
</template>

<script setup lang="ts">
import { type PropType, getCurrentInstance } from 'vue'
import {
  makeStringProp,
  createNamespace,
  BORDER_SURROUND,
  useComponentName
} from '../../libs/utils'
import {
  ButtonSize,
  ButtonType,
  ButtonNativeType,
  ButtonIconPosition
} from './types'
const [name, bem] = createNamespace('button')
useComponentName(name)
const instance = getCurrentInstance()!
const props = defineProps({
  text: String,
  icon: String,
  type: makeStringProp<ButtonType>('default'),
  size: makeStringProp<ButtonSize>('normal'),
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: {
    type: Boolean,
    default: true
  },
  disabled: Boolean,
  iconPrefix: String,
  nativeType: makeStringProp<ButtonNativeType>('button'),
  loadingSize: {
    type: [Number, String],
    default: ''
  },
  loadingText: String,
  loadingType: String as PropType<any>,
  iconPosition: makeStringProp<ButtonIconPosition>('left'),
  customStyle: Object,
  customClass: Object,
  formType: String,
  hideBorder: Boolean,
  hideRadius: Boolean
})
const emit = defineEmits(['click', 'clickLoading'])
const getStyle = () => {
  const { color, plain } = props
  if (color) {
    const style: any = {
      color: plain ? color : 'white'
    }

    if (!plain) {
      style.background = color
    }
    if (color.includes('gradient')) {
      style.border = 0
    } else {
      style.borderColor = color
    }

    return { ...style, ...props.customStyle }
  }
  return { ...props.customStyle }
}
const loadingStyle = () => {
  return {
    color: 'currentColor',
    width: 'var(--z-button-loading-icon-size)',
    height: 'var(--z-button-loading-icon-size)'
  }
}
const onClick = (event: any) => {
  if (props.loading) {
    emit('clickLoading', event)
  } else if (!props.disabled) {
    emit('click', event)
  }
}
</script>
<script lang="ts">
export default {
  name: 'ZButton',
  options: {
    virtualHost: true
  }
}
</script>

<style lang="scss" scoped>
// 此部分强制样式为解决：原始button的after伪类无法通过custom-style自定义，且外部样式始终会被button自带的after样式覆盖
// 强制隐藏边框
.z-button--hideborder.z-button::after {
  border: none;
}

// 强制去掉border-radius
.z-button--hideradius.z-button::after {
  border-radius: 0;
}

.z-button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  height: var(--z-button-default-height);
  padding: 0;
  margin: 0;
  overflow: visible;
  font-size: var(--z-button-default-font-size);
  line-height: var(--z-button-default-line-height);
  text-align: center;
  appearance: none;
  border-radius: var(--z-button-radius);
  transition: opacity var(--z-duration-fast);
  -webkit-font-smoothing: auto;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    content: ' ';
    background: var(--z-black);
    border: inherit;
    border-color: var(--z-black);
    border-radius: inherit;
    opacity: 0;
    transform: translate(-50%, -50%);
  }

  &:active::before {
    opacity: 0.1;
  }

  &--loading,
  &--disabled {
    &::before {
      display: none;
    }
  }

  &--default {
    color: var(--z-button-default-color);
    background: var(--z-button-default-background);
    border: var(--z-button-border-width) solid
      var(--z-button-default-border-color);
  }

  &--primary {
    color: var(--z-button-primary-color);
    background: var(--z-button-primary-background);
    border: var(--z-button-border-width) solid
      var(--z-button-primary-border-color);
  }

  &--success {
    color: var(--z-button-success-color);
    background: var(--z-button-success-background);
    border: var(--z-button-border-width) solid
      var(--z-button-success-border-color);
  }

  &--danger {
    color: var(--z-button-danger-color);
    background: var(--z-button-danger-background);
    border: var(--z-button-border-width) solid
      var(--z-button-danger-border-color);
  }

  &--warning {
    color: var(--z-button-warning-color);
    background: var(--z-button-warning-background);
    border: var(--z-button-border-width) solid
      var(--z-button-warning-border-color);
  }

  &--text {
    padding-right: 0;
    padding-left: 0;
    color: var(--z-primary-color);
    background: transparent;
    border: none;
    border-color: transparent;

    &::before {
      background: transparent;
      border-color: transparent;
    }

    &:active {
      opacity: var(--z-active-opacity);
    }
  }

  &--plain {
    background: var(--z-button-plain-background);

    &.z-button--primary {
      color: var(--z-button-primary-background);
    }

    &.z-button--success {
      color: var(--z-button-success-background);
    }

    &.z-button--danger {
      color: var(--z-button-danger-background);
    }

    &.z-button--warning {
      color: var(--z-button-warning-background);
    }
  }

  &--large {
    width: 100%;
    height: var(--z-button-large-height);
  }

  &--normal {
    padding: var(--z-button-normal-padding);
    font-size: var(--z-button-normal-font-size);
  }

  &--small {
    height: var(--z-button-small-height);
    padding: var(--z-button-small-padding);
    font-size: var(--z-button-small-font-size);
  }

  &__loading {
    font-size: inherit;
    color: inherit;
  }

  &--mini {
    height: var(--z-button-mini-height);
    padding: var(--z-button-mini-padding);
    font-size: var(--z-button-mini-font-size);

    & + .z-button--mini {
      margin-left: var(--z-padding-base);
    }
  }

  &--block {
    display: block;
    width: 100%;
  }

  &--disabled {
    cursor: not-allowed;
    opacity: var(--z-button-disabled-opacity);
  }

  &--loading {
    cursor: default;
  }

  &--round {
    border-radius: var(--z-button-round-radius);
  }

  &--square {
    border-radius: 0;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    &::before {
      content: ' ';
    }
  }

  &__icon {
    font-size: var(--z-button-icon-size);
    line-height: inherit;
  }

  &__icon + &__text,
  &__loading + &__text,
  &__text + &__icon,
  &__text + &__loading {
    margin-left: var(--z-padding-base);
  }

  &--hairline {
    border-width: 0;

    &::after {
      border-color: inherit;
      border-radius: calc(var(--z-button-radius) * 2);
      transform-origin: 50% 50%;
    }

    &.z-button--round::after {
      border-radius: var(--z-button-round-radius);
    }

    &.z-button--square::after {
      border-radius: 0;
    }
  }
}
</style>
