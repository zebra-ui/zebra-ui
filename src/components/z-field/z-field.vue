<template>
  <view
    :class="
      bem({ error: showError, disabled, [`label-${labelAlign}`]: labelAlign })
    "
    :style="customStyle"
  >
    <z-cell
      :custom-style="cellCustomStyle"
      :size="props.size"
      :center="props.center"
      :border="props.border"
      :is-link="props.isLink"
      :clickable="props.clickable"
      :title-style="labelStyle"
      :value-style="{ overflow: 'visible' }"
      :title-class="[bem('label', [labelAlign]), props.labelClass]"
      :arrow-direction="props.arrowDirection"
      @click="onClick"
    >
      <template
        v-if="
          (props.leftIcon || instance.slots['left-icon']) &&
          labelAlign !== 'top'
        "
        #icon
      >
        <view :class="bem('left-icon')" @click="onClickLeftIcon">
          <template v-if="instance.slots['left-icon']">
            <slot name="left-icon"></slot>
          </template>
          <z-icon
            :name="props.leftIcon"
            :class-prefix="props.iconPrefix"
            :color="props.leftIconColor"
            :custom-style="leftIconStyle"
            :badge-wrapper-style="badgeWrapperStyle"
          ></z-icon>
        </view>
      </template>
      <template #title>
        <template v-if="labelAlign === 'top'">
          <template v-if="props.leftIcon || instance.slots['left-icon']">
            <view :class="bem('left-icon')" @click="onClickLeftIcon">
              <template v-if="instance.slots['left-icon']">
                <slot name="left-icon"></slot>
              </template>
              <z-icon
                :name="props.leftIcon"
                :class-prefix="props.iconPrefix"
                :custom-style="leftIconStyle"
                :badge-wrapper-style="badgeWrapperStyle"
              ></z-icon>
            </view>
          </template>
          <template v-if="instance.slots.label">
            <slot name="label"></slot>{{ getProp('colon') ? ':' : '' }}
          </template>
          <template v-else-if="props.label">
            <view
              :id="`${id}-label`"
              :style="
                getProp('labelAlign') === 'top' && getProp('labelWidth')
                  ? { width: addUnit(getProp('labelWidth')) }
                  : undefined
              "
            >
              {{ props.label + (getProp('colon') ? ':' : '') }}
            </view>
          </template>
        </template>
        <template v-else>
          <template v-if="instance.slots.label">
            <slot name="label"></slot>{{ getProp('colon') ? ':' : '' }}
          </template>
          <template v-else-if="props.label">
            <view
              :id="`${id}-label`"
              :class="bem('label--content', { required: showRequiredMark })"
              :style="
                getProp('labelAlign') === 'top' && getProp('labelWidth')
                  ? { width: addUnit(getProp('labelWidth')) }
                  : undefined
              "
            >
              {{ props.label + (getProp('colon') ? ':' : '') }}
            </view>
          </template>
        </template>
      </template>
      <template #default>
        <view :class="bem('body')">
          <template v-if="instance.slots.input">
            <view
              :class="
                bem('control', [
                  getProp('inputAlign'),
                  {
                    error: showError,
                    custom: !!instance.slots.input,
                    'min-height': props.type === 'textarea' && !props.autosize
                  }
                ])
              "
              @click="onClickInput"
            >
              <slot name="input"></slot>
            </view>
          </template>
          <template v-else-if="props.type === 'textarea'">
            <textarea
              :id="getInputId()"
              :name="props.name"
              :value="inputValue"
              :rows="props.rows !== undefined ? +props.rows : undefined"
              :maxlength="props.maxlength"
              :placeholder-style="placeholderStyleString"
              :class="
                bem('control', [
                  getProp('inputAlign'),
                  {
                    error: showError,
                    custom: !!instance.slots.input,
                    'min-height': props.type === 'textarea' && !props.autosize
                  }
                ])
              "
              :auto-height="!!props.autosize"
              :disabled="getProp('disabled') || getProp('readonly')"
              :readonly="getProp('readonly')"
              :autofocus="props.autofocus"
              :placeholder="props.placeholder"
              :autocomplete="props.autocomplete"
              :autocapitalize="props.autocapitalize"
              :autocorrect="props.autocorrect"
              :enterkeyhint="props.enterkeyhint"
              :spellcheck="props.spellcheck"
              @blur="onBlur"
              @focus="onFocus"
              @input="onInput"
              @click="onClickInput"
              @compositionend="endComposing"
              @compositionstart="startComposing"
            />
          </template>
          <template v-else>
            <input
              :type="props.type"
              :confirm-type="props.confirmType"
              :id="getInputId()"
              :name="props.name"
              :value="inputValue"
              :rows="props.rows !== undefined ? +props.rows : undefined"
              :maxlength="props.maxlength"
              :placeholder-style="placeholderStyleString"
              :style="getProp('readonly') ? 'pointer-events: none;' : ''"
              :class="
                bem('control', [
                  getProp('inputAlign'),
                  {
                    disabled,
                    error: showError,
                    custom: !!instance.slots.input,
                    // @ts-ignore
                    'min-height': props.type === 'textarea' && !props.autosize
                  }
                ])
              "
              :disabled="getProp('disabled') || getProp('readonly')"
              :readonly="getProp('readonly')"
              :autofocus="props.autofocus"
              :placeholder="props.placeholder"
              :autocomplete="props.autocomplete"
              :autocapitalize="props.autocapitalize"
              :autocorrect="props.autocorrect"
              :enterkeyhint="props.enterkeyhint"
              :spellcheck="props.spellcheck"
              @blur="onBlur"
              @focus="onFocus"
              @input="onInput"
              @confirm="onConfirm"
              @click="onClickInput"
              @compositionend="endComposing"
              @compositionstart="startComposing"
            />
          </template>

          <view v-if="showClear" :class="bem('clear')">
            <z-icon
              :name="props.clearIcon"
              :badge-wrapper-style="badgeWrapperStyle"
              @touchstart="onClear"
            />
          </view>
          <view
            v-if="props.rightIcon || instance.slots['right-icon']"
            :class="bem('right-icon')"
            @click="onClickRightIcon"
          >
            <template v-if="instance.slots['right-icon']">
              <slot name="right-icon"></slot>
            </template>
            <template v-else>
              <z-icon
                :name="props.rightIcon"
                :class-prefix="props.iconPrefix"
                :badge-wrapper-style="badgeWrapperStyle"
                :custom-style="rightIconStyle"
              />
            </template>
          </view>
          <view v-if="instance.slots.button" :class="bem('button')">
            <slot name="button"></slot>
          </view>
        </view>
        <view
          v-if="props.showWordLimit && props.maxlength"
          :class="bem('word-limit')"
        >
          <text :class="bem('word-num')">{{
            getStringLength(getModelValue())
          }}</text
          >/{{ props.maxlength }}
        </view>
        <template v-if="!form || !form.props.showErrorMessage === false">
          <view
            v-if="props.errorMessage || state.validateMessage"
            :class="bem('error-message', getProp('errorMessageAlign'))"
          >
            <template v-if="instance.slots['error-message']">
              <slot
                name="error-message"
                :message="props.errorMessage || state.validateMessage"
              ></slot>
            </template>
            <template v-else>
              {{ props.errorMessage || state.validateMessage }}
            </template>
          </view>
        </template>
      </template>
      <template #extra>
        <slot name="extra"></slot>
      </template>
    </z-cell>
  </view>
</template>
<script lang="ts" setup>
import {
  ref,
  watch,
  provide,
  computed,
  reactive,
  onMounted,
  type PropType,
  getCurrentInstance
} from 'vue'
import {
  isDef,
  extend,
  addUnit,
  toArray,
  FORM_KEY,
  numericProp,
  unknownProp,
  formatNumber,
  makeStringProp,
  createNamespace,
  useParent,
  CUSTOM_FIELD_INJECTION_KEY,
  useId,
  useExpose,
  useComponentName
} from '../../libs/utils'
import {
  cutString,
  runSyncRule,
  endComposing,
  isEmptyValue,
  startComposing,
  getRuleMessage,
  getStringLength,
  runRuleValidator
} from './utils'
import type {
  FieldRule,
  FieldType,
  FieldExpose,
  FieldTextAlign,
  FieldValidateError,
  FieldAutosizeConfig,
  FieldValidationStatus,
  FieldFormSharedProps,
  FieldConfirmType
} from './types'

import { cellSharedProps, fieldSharedProps } from './shared'
const [name, bem] = createNamespace('field')
useComponentName(name)
const instance = getCurrentInstance()!
const props = defineProps(
  extend({}, cellSharedProps, fieldSharedProps, {
    rows: numericProp,
    type: makeStringProp<FieldType>('text'),
    confirmType: makeStringProp<FieldConfirmType>('done'),
    rules: Array as PropType<FieldRule[]>,
    autosize: [Boolean, Object] as PropType<boolean | FieldAutosizeConfig>,
    labelWidth: numericProp,
    labelClass: unknownProp,
    labelAlign: String as PropType<FieldTextAlign>,
    showWordLimit: Boolean,
    errorMessageAlign: String as PropType<FieldTextAlign>,
    colon: {
      type: Boolean,
      default: null
    },
    placeholderStyle: String,
    leftIconColor: String,
    cellStyle: Object,
    customStyle: Object
  })
)
const inputValue = ref('')

const emit = defineEmits([
  'blur',
  'focus',
  'clear',
  'keypress',
  'clickInput',
  'endValidate',
  'startValidate',
  'clickLeftIcon',
  'clickRightIcon',
  'update:modelValue',
  'click',
  'confirm'
])

const id = useId()
const state = reactive({
  status: 'unvalidated' as FieldValidationStatus,
  focused: false,
  validateMessage: ''
})
const customValue = ref<() => unknown>()

const { parent: form } = useParent(FORM_KEY)

const placeholderStyleString = computed(() => {
  if (showError.value) {
    return (
      'color: var(--z-field-input-error-text-color);' + props.placeholderStyle
    )
  }
  return (
    'color: var(--z-field-placeholder-text-color);' + props.placeholderStyle
  )
})

const getModelValue = () => String(props.modelValue ? props.modelValue : '')

const getProp = <T extends FieldFormSharedProps>(key: T) => {
  if (isDef(props[key])) {
    return props[key]
  }
  if (form && isDef(form.props[key])) {
    return form.props[key]
  }
}

const showClear = computed(() => {
  const readonly = getProp('readonly')

  if (props.clearable && !readonly) {
    const hasValue = getModelValue() !== ''
    //@ts-ignore
    const trigger =
      props.clearTrigger === 'always' ||
      (props.clearTrigger === 'focus' && state.focused)

    return hasValue && trigger
  }
  return false
})

const formValue = computed(() => {
  if (customValue.value && instance.slots.input) {
    return customValue.value()
  }
  return props.modelValue
})

const showRequiredMark = computed(() => {
  const required = getProp('required')
  if (required === 'auto') {
    //@ts-ignore
    return props.rules?.some((rule: FieldRule) => rule.required)
  }
  return required
})

const cellCustomStyle = computed(() => {
  return {
    'flex-wrap': 'wrap',
    ...props.cellStyle
  }
})

const runRules = (rules: FieldRule[]) =>
  rules.reduce(
    (promise, rule) =>
      promise.then(() => {
        if (state.status === 'failed') {
          return
        }

        let { value } = formValue

        if (rule.formatter) {
          value = rule.formatter(value, rule)
        }

        if (!runSyncRule(value, rule)) {
          state.status = 'failed'
          state.validateMessage = getRuleMessage(value, rule)
          return
        }

        if (rule.validator) {
          if (isEmptyValue(value) && rule.validateEmpty === false) {
            return
          }

          return runRuleValidator(value, rule).then((result) => {
            if (result && typeof result === 'string') {
              state.status = 'failed'
              state.validateMessage = result
            } else if (result === false) {
              state.status = 'failed'
              state.validateMessage = getRuleMessage(value, rule)
            }
          })
        }
      }),
    Promise.resolve()
  )

const resetValidation = () => {
  state.status = 'unvalidated'
  state.validateMessage = ''
}

const endValidate = () =>
  emit('endValidate', {
    status: state.status,
    message: state.validateMessage
  })

const validate = (rules = props.rules) =>
  new Promise<FieldValidateError | void>((resolve) => {
    resetValidation()
    if (rules) {
      emit('startValidate')
      //@ts-ignore
      runRules(rules).then(() => {
        if (state.status === 'failed') {
          resolve({
            name: props.name,
            message: state.validateMessage
          })
          endValidate()
        } else {
          state.status = 'passed'
          resolve()
          endValidate()
        }
      })
    } else {
      resolve()
    }
  })

const validateWithTrigger = (trigger: any) => {
  if (form && props.rules) {
    const { validateTrigger } = form.props
    const defaultTrigger = toArray(validateTrigger).includes(trigger)
    //@ts-ignore
    const rules = props.rules.filter((rule) => {
      if (rule.trigger) {
        return toArray(rule.trigger).includes(trigger)
      }
      return defaultTrigger
    })

    if (rules.length) {
      validate(rules)
    }
  }
}

const limitValueLength = (value: string) => {
  const { maxlength } = props
  if (isDef(maxlength) && getStringLength(value) > +maxlength) {
    const modelValue = getModelValue()
    if (modelValue && getStringLength(modelValue) === +maxlength) {
      return modelValue
    }
    return cutString(value, +maxlength)
  }
  return value
}

const updateValue = (value: string, trigger: any = 'onInput') => {
  const originalValue = value
  value = limitValueLength(value)
  //@ts-ignore
  if (props.type === 'number' || props.type === 'digit') {
    const isNumber = props.type === 'number'
    value = formatNumber(value, isNumber, isNumber)
  }
  //@ts-ignore
  if (props.formatter && trigger === props.formatTrigger) {
    const { formatter, maxlength } = props
    //@ts-ignore
    value = formatter(value)
    if (isDef(maxlength) && getStringLength(value) > +maxlength) {
      value = cutString(value, +maxlength)
    }
  }
  inputValue.value = value
  if (value !== props.modelValue) {
    emit('update:modelValue', value)
  }
}

const onInput = (event: any) => {
  updateValue(event.detail.value)
}

const onConfirm = (event: any) => {
  emit('confirm', event)
}
const blur = () => {}
const focus = () => {}

const onFocus = (event: any) => {
  state.focused = true
  emit('focus', event)
  if (getProp('readonly')) {
    blur()
  }
}

const onBlur = (event: any) => {
  state.focused = false
  updateValue(getModelValue(), 'onBlur')
  emit('blur', event)

  if (getProp('readonly')) {
    return
  }
  validateWithTrigger('onBlur')
}

const onClickInput = (event: any) => emit('clickInput', event)

const onClickLeftIcon = (event: any) => emit('clickLeftIcon', event)

const onClickRightIcon = (event: any) => emit('clickRightIcon', event)

const onClear = (event: any) => {
  emit('update:modelValue', '')
  emit('clear', event)
}

const showError = computed(() => {
  if (typeof props.error === 'boolean') {
    return props.error
  }
  if (form && form.props.showError && state.status === 'failed') {
    return true
  }
})

// const labelContentStyle = computed(() => {
//   let labelAlignStyle = {}
//   //@ts-ignore
//   if (props.labelAlign == 'left') {
//     labelAlignStyle = {}
//   }
//   //@ts-ignore
//   else if (props.labelAlign == 'center') {
//     labelAlignStyle = {
//       'justify-content': 'center'
//     }
//   }
//   //@ts-ignore
//   else if (props.labelAlign == 'right') {
//     labelAlignStyle = {
//       'justify-content': 'flex-end'
//     }
//   }
//   return labelAlignStyle
// })

const labelStyle = computed(() => {
  const titleStyle = {
    flex: 'none',
    boxSizing: 'border-box',
    width: 'var(--z-field-label-width)',
    marginRight: 'var(--z-field-label-margin-right)',
    color: 'var(--z-field-label-color)',
    textAlign: 'left',
    wordWrap: 'break-word'
  }
  let labelAlignStyle = {}
  //@ts-ignore
  if (props.labelAlign == 'left') {
    labelAlignStyle = {}
  }
  //@ts-ignore
  else if (props.labelAlign == 'center') {
    labelAlignStyle = {
      'text-align': 'center'
    }
  }
  //@ts-ignore
  else if (props.labelAlign == 'right') {
    labelAlignStyle = {
      'text-align': 'right'
    }
  }
  //@ts-ignore
  else if (props.labelAlign == 'top') {
    labelAlignStyle = {
      display: 'flex',
      width: '100%',
      textAlign: 'left',
      marginBottom: 'var(--z-padding-base)',
      overflowWrap: 'break-word'
    }
  } else {
    labelAlignStyle = {}
  }

  const labelWidth = getProp('labelWidth')
  const labelAlign = getProp('labelAlign')
  if (labelWidth && labelAlign !== 'top') {
    return { ...titleStyle, ...labelAlignStyle, width: addUnit(labelWidth) }
  }
  return { ...titleStyle, ...labelAlignStyle }
})

const getInputId = () => props.id || `${id}-input`

const getValidationStatus = () => state.status

const onClick = () => {
  emit('click')
}

useExpose<FieldExpose>({
  blur,
  focus,
  //@ts-ignore
  validate,
  formValue,
  resetValidation,
  getValidationStatus
})

provide(CUSTOM_FIELD_INJECTION_KEY, {
  customValue,
  resetValidation,
  validateWithTrigger
})

watch(
  () => props.modelValue,
  () => {
    updateValue(getModelValue())
    resetValidation()
    validateWithTrigger('onInput')
  }
)

onMounted(() => {
  updateValue(getModelValue(), props.formatTrigger)
})

const leftIconStyle = computed(() => {
  const styles = {
    display: 'block',
    'font-size': 'var(--z-field-icon-size)',
    'line-height': 'inherit'
  }
  return { ...styles }
})

const rightIconStyle = computed(() => {
  const styles = {
    display: 'block',
    'font-size': 'var(--z-field-icon-size)',
    'line-height': 'inherit'
  }
  return { ...styles }
})

const badgeWrapperStyle = computed(() => {
  const styles = {
    display: 'block'
  }
  return { ...styles }
})
</script>
<script lang="ts">
export default {
  name: 'ZField',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-field {
  &--disabled {
    .z-field__label {
      color: var(--z-field-disabled-text-color);
    }
  }

  &__label {
    &--content {
      &--required {
        &::before {
          margin-right: 4rpx;
          color: var(--z-field-required-mark-color);
          content: '*';
        }
      }
    }
  }

  &__value {
    overflow: visible;
  }

  &__body {
    display: flex;
    align-items: center;
  }

  &__control {
    box-sizing: border-box;
    display: block;
    width: 100%;
    min-width: 0;
    min-height: var(--z-cell-line-height);
    padding: 0;
    margin: 0;
    font-size: inherit;
    line-height: var(--z-cell-line-height);
    color: var(--z-field-input-text-color);
    text-align: left;
    resize: none;
    user-select: auto;
    background-color: transparent;
    border: 0;

    &:read-only {
      cursor: default;
    }

    &:disabled {
      color: var(--z-field-input-disabled-text-color);
      cursor: not-allowed;
      opacity: 1;
      -webkit-text-fill-color: var(--z-field-input-disabled-text-color);
    }

    &--disabled {
      color: var(--z-field-input-disabled-text-color);
      cursor: not-allowed;
      opacity: 1;
      -webkit-text-fill-color: var(--z-field-input-disabled-text-color);
    }

    &--center {
      justify-content: center;
      text-align: center;
    }

    &--right {
      justify-content: flex-end;
      text-align: right;
    }

    &--custom {
      display: flex;
      align-items: center;
      min-height: var(--z-cell-line-height);
    }

    &--error,
    &--error::placeholder {
      color: var(--z-field-input-error-text-color);
      -webkit-text-fill-color: currentcolor;
    }

    &--min-height {
      min-height: var(--z-field-text-area-min-height);
    }

    &[type='date'],
    &[type='time'],
    &[type='datetime-local'] {
      min-height: var(--z-cell-line-height);
    }

    &[type='search'] {
      appearance: none;
    }
  }

  &__clear,
  &__icon,
  &__button,
  &__right-icon {
    flex-shrink: 0;
  }

  &__clear,
  &__right-icon {
    padding: 0 var(--z-padding-xs);
    margin-right: calc(var(--z-padding-xs) * -1);
    line-height: inherit;
  }

  &__clear {
    font-size: var(--z-field-clear-icon-size);
    color: var(--z-field-clear-icon-color);
    cursor: pointer;
  }

  // &__left-icon .z-icon,
  // &__right-icon .z-icon {
  // 	display: block;
  // 	font-size: var(--z-field-icon-size);
  // 	line-height: inherit;
  // }

  &__left-icon {
    margin-right: var(--z-padding-base);
  }

  &__right-icon {
    color: var(--z-field-right-icon-color);
  }

  &__button {
    display: flex;
    align-items: center;
    padding-left: var(--z-padding-xs);
  }

  &__error-message {
    font-size: var(--z-field-error-message-font-size);
    color: var(--z-field-error-message-color);
    text-align: left;

    &--center {
      text-align: center;
    }

    &--right {
      text-align: right;
    }
  }

  &__word-limit {
    margin-top: var(--z-padding-base);
    font-size: var(--z-field-word-limit-font-size);
    line-height: var(--z-field-word-limit-line-height);
    color: var(--z-field-word-limit-color);
    text-align: right;
  }
}
</style>
