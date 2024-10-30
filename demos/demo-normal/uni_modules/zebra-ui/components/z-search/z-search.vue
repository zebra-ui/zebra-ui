<template>
  <view
    :class="bem({ 'show-action': props.showAction })"
    :style="{ background: props.background }"
  >
    <template v-if="instance.slots.left">
      <slot name="left"></slot>
    </template>
    <view :class="bem('content', props.shape)">
      <template v-if="instance.slots.label || props.label">
        <view :class="bem('label')">
          <template v-if="instance.slots.label">
            <slot name="label"></slot>
          </template>
          <template v-else>
            {{ props.label }}
          </template>
        </view>
      </template>
      <z-field
        :id="getInputId()"
        type="text"
        confirm-type="search"
        :cell-style="cellStyle"
        :custom-style="{ display: 'flex', flex: '1' }"
        left-icon-color="var(--z-search-left-icon-color)"
        :border="false"
        :name="props.name"
        label-width="0"
        :left-icon="props.leftIcon"
        :right-icon="props.rightIcon"
        :autofocus="props.autofocus"
        :clearable="props.clearable"
        :maxlength="props.maxlength"
        :formatter="props.formatter"
        :clear-icon="props.clearIcon"
        :model-value="props.modelValue"
        :input-align="props.inputAlign"
        :placeholder="props.placeholder"
        :autocomplete="props.autocomplete"
        :autocapitalize="props.autocapitalize"
        :autocorrect="props.autocorrect"
        :error-message="props.errorMessage"
        :enterkeyhint="props.enterkeyhint"
        :clear-trigger="props.clearTrigger"
        :format-trigger="props.formatTrigger"
        :spellcheck="props.spellcheck"
        :error="props.error"
        :disabled="props.disabled"
        :readonly="props.readonly"
        @blur="onBlur"
        @focus="onFocus"
        @clear="onClear"
        @click-input="onClickInput"
        @click-left-icon="onClickLeftIcon"
        @confirm="onConfirm"
        @click-right-icon="onClickRightIcon"
        @update:model-value="onInput"
      >
        <template v-if="instance.slots['left-icon']">
          <slot name="left-icon"></slot>
        </template>
        <template v-if="instance.slots['right-icon']">
          <slot name="right-icon"></slot>
        </template>
      </z-field>
    </view>
    <div v-if="props.showAction" :class="bem('action')" @click="onCancel">
      <template v-if="instance.slots.action">
        <slot name="action"></slot>
      </template>
      <template v-else>
        {{ props.actionText || '取消' }}
      </template>
    </div>
  </view>
</template>
<script lang="ts" setup>
import { getCurrentInstance, computed } from 'vue'
import {
  extend,
  truthProp,
  makeStringProp,
  createNamespace,
  useId,
  useExpose,
  useComponentName
} from '../../libs/utils'
import { fieldSharedProps } from '../z-field/shared'
import zField from '../z-field/z-field.vue'

type SearchShape = 'square' | 'round'

const instance = getCurrentInstance()!

const [name, bem] = createNamespace('search')
useComponentName(name)

const props = defineProps(
  extend({}, fieldSharedProps, {
    label: String,
    shape: makeStringProp<SearchShape>('square'),
    leftIcon: makeStringProp('search'),
    clearable: truthProp,
    actionText: String,
    background: String,
    showAction: Boolean
  })
)

const emit = defineEmits([
  'blur',
  'focus',
  'clear',
  'search',
  'cancel',
  'clickInput',
  'clickLeftIcon',
  'clickRightIcon',
  'update:modelValue'
])

const id = useId()

const onCancel = () => {
  if (!instance.slots.action) {
    emit('update:modelValue', '')
    emit('cancel')
  }
}

const getInputId = () => props.id || `${id}-input`

const blur = () => {}
const focus = () => {}
const onBlur = (event: Event) => emit('blur', event)
const onFocus = (event: Event) => emit('focus', event)
const onClear = (event: MouseEvent) => emit('clear', event)
const onClickInput = (event: MouseEvent) => emit('clickInput', event)
const onClickLeftIcon = (event: MouseEvent) => emit('clickLeftIcon', event)
const onClickRightIcon = (event: MouseEvent) => emit('clickRightIcon', event)

const onConfirm = () => {
  emit('search', props.modelValue)
}

const cellStyle = computed(() => {
  const styles = {
    flex: 1,
    alignItems: 'center',
    padding: `0 var(--z-padding-xs) 0 0`,
    height: 'var(--z-search-input-height)',
    backgroundColor: 'transparent'
  }
  let messageStyle = {}
  if (props.errorMessage) {
    messageStyle = {
      height: 'auto',
      alignItems: 'flex-start',
      paddingTop: '10rpx',
      paddingBottom: '10rpx'
    }
  } else {
    messageStyle = {}
  }
  return { ...styles, ...messageStyle }
})

const onInput = (value: string) => emit('update:modelValue', value)

useExpose({ focus, blur })
</script>
<script lang="ts">
export default {
  name: 'ZSearch',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-search {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: var(--z-search-padding);
  background: var(--z-search-background);

  &__content {
    display: flex;
    flex: 1;
    padding-left: var(--z-padding-sm);
    background: var(--z-search-content-background);
    border-radius: var(--z-radius-sm);

    &--round {
      border-radius: var(--z-radius-max);
    }
  }

  &__label {
    padding: var(--z-search-label-padding);
    font-size: var(--z-search-label-font-size);
    line-height: var(--z-search-input-height);
    color: var(--z-search-label-color);
  }

  &__field {
    // flex: 1;
    // align-items: center;
    // padding: 0 var(--z-padding-xs) 0 0;
    // height: var(--z-search-input-height);
    // background-color: transparent;

    // .z-field__left-icon {
    // 	color: var(--z-search-left-icon-color);
    // }

    // &--with-message {
    // 	height: auto;
    // 	align-items: flex-start;
    // 	padding-top: 10rpx;
    // 	padding-bottom: 10rpx;
    // }
  }

  &--show-action {
    padding-right: 0;
  }

  input {
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }

  &__action {
    padding: var(--z-search-action-padding);
    font-size: var(--z-search-action-font-size);
    line-height: var(--z-search-input-height);
    color: var(--z-search-action-text-color);
  }
}
</style>
