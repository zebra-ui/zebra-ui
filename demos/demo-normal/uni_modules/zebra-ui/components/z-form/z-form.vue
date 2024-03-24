<template>
  <view :class="bem()">
    <slot></slot>
  </view>
</template>
<script lang="ts" setup>
import { type PropType } from 'vue'
import {
  FORM_KEY,
  truthProp,
  numericProp,
  createNamespace,
  useChildren,
  useExpose,
  useComponentName
} from '../../libs/utils'
import type {
  FieldTextAlign,
  FieldValidateError,
  FieldValidateTrigger,
  FieldValidationStatus
} from '../z-field/types'
import type { FormExpose } from './types'
const [name, bem] = createNamespace('form')
useComponentName(name)

const props = defineProps({
  colon: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  required: [Boolean, String] as PropType<boolean | 'auto'>,
  showError: Boolean,
  labelWidth: numericProp,
  labelAlign: String as PropType<FieldTextAlign>,
  inputAlign: String as PropType<FieldTextAlign>,
  scrollToError: Boolean,
  validateFirst: Boolean,
  submitOnEnter: truthProp,
  showErrorMessage: truthProp,
  errorMessageAlign: String as PropType<FieldTextAlign>,
  validateTrigger: {
    type: [String, Array] as PropType<
      FieldValidateTrigger | FieldValidateTrigger[]
    >,
    default: 'onBlur'
  }
})

const emit = defineEmits(['submit', 'failed'])

const { children, linkChildren } = useChildren(FORM_KEY)

const getFieldsByNames = (names?: string[]) => {
  if (names) {
    return children.filter((field: any) => names.includes(field.name))
  }
  return children
}

const validateSeq = (names?: string[]) =>
  new Promise<void>((resolve, reject) => {
    const errors: FieldValidateError[] = []
    const fields = getFieldsByNames(names)

    fields
      .reduce(
        (
          promise: Promise<any>,
          field: { validate: () => Promise<FieldValidateError | undefined> }
        ) =>
          promise.then(() => {
            if (!errors.length) {
              return field.validate().then((error?: FieldValidateError) => {
                if (error) {
                  errors.push(error)
                }
              })
            }
          }),
        Promise.resolve()
      )
      .then(() => {
        if (errors.length) {
          reject(errors)
        } else {
          resolve()
        }
      })
  })

const validateAll = (names?: string[]) =>
  new Promise<void>((resolve, reject) => {
    const fields = getFieldsByNames(names)
    Promise.all(fields.map((item: any) => item.validate())).then((errors) => {
      errors = errors.filter(Boolean)

      if (errors.length) {
        reject(errors)
      } else {
        resolve()
      }
    })
  })

const validateField = (name: string) => {
  const matched = children.find((item: any) => item.name === name)

  if (matched) {
    return new Promise<void>((resolve, reject) => {
      matched.validate().then((error?: FieldValidateError) => {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  }

  return Promise.reject()
}

const validate = (name?: string | string[]) => {
  if (typeof name === 'string') {
    return validateField(name)
  }
  return props.validateFirst ? validateSeq(name) : validateAll(name)
}

const resetValidation = (name?: string | string[]) => {
  if (typeof name === 'string') {
    name = [name]
  }

  const fields = getFieldsByNames(name)
  fields.forEach((item: any) => {
    item.resetValidation()
  })
}

const getValidationStatus = () =>
  // @ts-ignore
  children.reduce<Record<string, FieldValidationStatus>>((form, field) => {
    form[field.name] = field.getValidationStatus()
    return form
  }, {})

const scrollToField = (name: string, options?: boolean) => {
  children.some((item: any) => {
    if (item.name === name) {
      item.$el.scrollIntoView(options)
      return true
    }
    return false
  })
}

const getValues = () =>
  // @ts-ignore
  children.reduce<Record<string, unknown>>((form, field) => {
    if (field.name !== undefined) {
      form[field.name] = field.formValue.value
    }
    return form
  }, {})

const submit = () => {
  const values = getValues()

  validate()
    .then(() => emit('submit', values))
    .catch((errors: FieldValidateError[]) => {
      emit('failed', { values, errors })

      if (props.scrollToError && errors[0].name) {
        scrollToField(errors[0].name)
      }
    })
}

linkChildren({ props })
useExpose<FormExpose>({
  submit,
  validate,
  getValues,
  scrollToField,
  resetValidation,
  getValidationStatus
})
defineExpose<FormExpose>({
  submit,
  validate,
  getValues,
  scrollToField,
  resetValidation,
  getValidationStatus
})
</script>
<script lang="ts">
export default {
  name: 'ZForm',
  options: {
    virtualHost: true
  }
}
</script>
