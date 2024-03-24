<template>
  <view :class="bem([props.theme])">
    <button
      v-show="props.showMinus"
      type="button"
      :style="buttonStyle"
      :class="[
        bem('minus', { disabled: minusDisabled }),
        { [HAPTICS_FEEDBACK]: !minusDisabled }
      ]"
      @click="onClick($event, 'minus')"
      @touchstart.passive="onTouchstartPassive($event, 'minus')"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    />
    <input
      v-show="props.showInput"
      :type="props.integer ? 'number' : 'digit'"
      :class="bem('input')"
      :value="current"
      :style="inputStyle"
      :disabled="props.disabled || props.disableInput"
      :inputmode="props.integer ? 'numeric' : 'decimal'"
      :placeholder="props.placeholder"
      :aria-valuemax="props.max"
      :aria-valuemin="props.min"
      :aria-valuenow="current"
      @blur="onBlur"
      @input="onInput"
      @focus="onFocus"
    />
    <button
      v-show="props.showPlus"
      type="button"
      :style="buttonStyle"
      :class="[
        bem('plus', { disabled: plusDisabled }),
        { [HAPTICS_FEEDBACK]: !plusDisabled }
      ]"
      @click="onClick($event, 'plus')"
      @touchstart.passive="onTouchstartPassive($event, 'plus')"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    />
  </view>
</template>
<script lang="ts" setup>
import { ref, watch, computed, nextTick, type PropType } from 'vue'
import {
  isDef,
  addUnit,
  addNumber,
  truthProp,
  Interceptor,
  numericProp,
  formatNumber,
  getSizeStyle,
  createNamespace,
  callInterceptor,
  makeNumericProp,
  HAPTICS_FEEDBACK,
  LONG_PRESS_START_TIME,
  type Numeric,
  useCustomFieldValue,
  useComponentName
} from '../../libs/utils'

const [componentName, bem] = createNamespace('stepper')
useComponentName(componentName)

const LONG_PRESS_INTERVAL = 200

const isEqual = (value1?: Numeric, value2?: Numeric) =>
  String(value1) === String(value2)

const props = defineProps({
  min: makeNumericProp(1),
  max: makeNumericProp(Infinity),
  name: makeNumericProp(''),
  step: makeNumericProp(1),
  theme: String as PropType<any>,
  integer: Boolean,
  disabled: Boolean,
  showPlus: truthProp,
  showMinus: truthProp,
  showInput: truthProp,
  longPress: truthProp,
  autoFixed: truthProp,
  allowEmpty: Boolean,
  modelValue: numericProp,
  inputWidth: numericProp,
  buttonSize: numericProp,
  placeholder: String,
  disablePlus: Boolean,
  disableMinus: Boolean,
  disableInput: Boolean,
  beforeChange: Function as PropType<Interceptor>,
  defaultValue: makeNumericProp(1),
  decimalLength: numericProp
})

const emit = defineEmits([
  'plus',
  'blur',
  'minus',
  'focus',
  'change',
  'overlimit',
  'update:modelValue'
])

const format = (value: Numeric, autoFixed = true) => {
  const { min, max, allowEmpty, decimalLength } = props

  if (allowEmpty && value === '') {
    return value
  }

  value = formatNumber(String(value), !props.integer)
  value = value === '' ? 0 : +value
  value = Number.isNaN(value) ? +min : value

  value = autoFixed ? Math.max(Math.min(+max, value), +min) : value

  if (isDef(decimalLength)) {
    value = value.toFixed(+decimalLength)
  }

  return value
}

const getInitialValue = () => {
  const defaultValue = props.modelValue ? props.modelValue : props.defaultValue
  const value = format(defaultValue)

  if (!isEqual(value, props.modelValue)) {
    emit('update:modelValue', value)
  }

  return value
}

let actionType: 'plus' | 'minus'
const inputRef = ref<HTMLInputElement>()
const current = ref(getInitialValue())

const minusDisabled = computed(
  () => props.disabled || props.disableMinus || +current.value <= +props.min
)

const plusDisabled = computed(
  () => props.disabled || props.disablePlus || +current.value >= +props.max
)

const inputStyle = computed(() => ({
  width: addUnit(props.inputWidth),
  height: addUnit(props.buttonSize)
}))

const buttonStyle = computed(() => getSizeStyle(props.buttonSize))

const check = () => {
  const value = format(current.value)
  if (!isEqual(value, current.value)) {
    current.value = value
  }
}

const setValue = (value: Numeric) => {
  if (props.beforeChange) {
    callInterceptor(props.beforeChange, {
      args: [value],
      done() {
        current.value = value
      }
    })
  } else {
    current.value = value
  }
}

const onChange = () => {
  if (
    (actionType === 'plus' && plusDisabled.value) ||
    (actionType === 'minus' && minusDisabled.value)
  ) {
    emit('overlimit', actionType)
    return
  }

  const diff = actionType === 'minus' ? -props.step : +props.step
  const value = format(addNumber(+current.value, diff))

  setValue(value)
  emit(actionType)
}

const onInput = (event: any) => {
  const input = event.target as HTMLInputElement
  const { value } = input
  const { decimalLength } = props

  let formatted = formatNumber(String(value), !props.integer)

  if (isDef(decimalLength) && formatted.includes('.')) {
    const pair = formatted.split('.')
    formatted = `${pair[0]}.${pair[1].slice(0, +decimalLength)}`
  }

  if (props.beforeChange) {
    input.value = String(current.value)
  } else if (!isEqual(value, formatted)) {
    input.value = formatted
  }

  const isNumeric = formatted === String(+formatted)
  setValue(isNumeric ? +formatted : formatted)
}

const onFocus = (event: any) => {
  if (props.disableInput) {
    inputRef.value?.blur()
  } else {
    emit('focus', event)
  }
}

const onBlur = (event: any) => {
  const input = event.detail
  const value = format(input.value, props.autoFixed)
  input.value = String(value)
  current.value = value
  nextTick(() => {
    emit('blur', event)
  })
}

let longPressTimer: ReturnType<typeof setTimeout>

const longPressStep = () => {
  longPressTimer = setTimeout(() => {
    onChange()
    longPressStep()
  }, LONG_PRESS_INTERVAL)
}

const onTouchStart = () => {
  if (props.longPress) {
    clearTimeout(longPressTimer)
    longPressTimer = setTimeout(() => {
      onChange()
      longPressStep()
    }, LONG_PRESS_START_TIME)
  }
}

const onTouchEnd = (event: TouchEvent) => {
  if (props.longPress) {
    clearTimeout(longPressTimer)
  }
}

const onClick = (event: any, type: any) => {
  actionType = type
  onChange()
}
const onTouchstartPassive = (event: any, type: any) => {
  actionType = type
  onTouchStart()
}

watch(() => [props.max, props.min, props.integer, props.decimalLength], check)

watch(
  () => props.modelValue,
  (value) => {
    if (!isEqual(value, current.value)) {
      current.value = format(value!)
    }
  }
)

watch(current, (value) => {
  emit('update:modelValue', value)
  emit('change', value, { name: props.name })
})

useCustomFieldValue(() => props.modelValue)
</script>
<script lang="ts">
export default {
  name: 'ZStepper',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-stepper {
  display: flex;
  align-items: center;
  user-select: none;

  &__minus,
  &__plus {
    position: relative;
    box-sizing: border-box;
    width: var(--z-stepper-input-height);
    height: var(--z-stepper-input-height);
    padding: 0;
    margin: 0;
    color: var(--z-stepper-button-icon-color);
    vertical-align: middle;
    background: var(--z-stepper-background);
    border: 0;

    &::before {
      width: 50%;
      height: 2rpx;
    }

    &::after {
      width: 2rpx;
      height: 50%;
    }

    &::before,
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      content: '';
      background-color: currentcolor;
      transform: translate(-50%, -50%);
    }

    &--disabled {
      color: var(--z-stepper-button-disabled-icon-color);
      cursor: not-allowed;
      background-color: var(--z-stepper-button-disabled-color);
    }
  }

  &__minus {
    border-radius: var(--z-stepper-radius) 0 0 var(--z-stepper-radius);

    &::after {
      display: none;
    }
  }

  &__plus {
    border-radius: 0 var(--z-stepper-radius) var(--z-stepper-radius) 0;
  }

  &__input {
    box-sizing: border-box;
    width: var(--z-stepper-input-width);
    height: var(--z-stepper-input-height);
    padding: 0;
    margin: 0 4rpx;
    font-size: var(--z-stepper-input-font-size);
    line-height: var(--z-stepper-input-line-height);
    color: var(--z-stepper-input-text-color);
    text-align: center;
    vertical-align: middle;
    appearance: none;
    background: var(--z-stepper-background);
    border: 0;
    border-width: 2rpx 0;
    border-radius: 0;

    &:disabled {
      color: var(--z-stepper-input-disabled-text-color);
      background-color: var(--z-stepper-input-disabled-background);
      -webkit-text-fill-color: var(--z-stepper-input-disabled-text-color);
      opacity: 1;
    }

    &:read-only {
      cursor: default;
    }
  }

  &--round {
    .z-stepper__input {
      background-color: transparent;
    }

    .z-stepper__plus,
    .z-stepper__minus {
      border-radius: 100%;

      &--disabled {
        cursor: not-allowed;
        opacity: 0.3;
      }
    }

    .z-stepper__plus {
      color: var(--z-white);
      background: var(--z-stepper-button-round-theme-color);
    }

    .z-stepper__minus {
      color: var(--z-stepper-button-round-theme-color);
      background-color: var(--z-background-2);
      border: 2rpx solid var(--z-stepper-button-round-theme-color);
    }
  }
}
</style>
