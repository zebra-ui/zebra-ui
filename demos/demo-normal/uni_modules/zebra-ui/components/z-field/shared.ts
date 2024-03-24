import { type PropType } from 'vue'

import type {
  FieldTextAlign,
  FieldClearTrigger,
  FieldFormatTrigger
} from './types'

import {
  numericProp,
  unknownProp,
  makeStringProp,
  makeNumericProp,
  truthProp
} from '../../libs/utils'

export const fieldSharedProps = {
  id: String,
  name: String,
  leftIcon: String,
  rightIcon: String,
  autofocus: Boolean,
  clearable: Boolean,
  maxlength: {
    type: Number,
    default: 140
  },
  formatter: Function as PropType<(value: string) => string>,
  clearIcon: makeStringProp('close-circle-fill'),
  modelValue: makeNumericProp(''),
  inputAlign: String as PropType<FieldTextAlign>,
  placeholder: String,
  autocomplete: String,
  autocapitalize: String,
  autocorrect: String,
  errorMessage: String,
  enterkeyhint: String,
  clearTrigger: makeStringProp<FieldClearTrigger>('focus'),
  formatTrigger: makeStringProp<FieldFormatTrigger>('onInput'),
  spellcheck: {
    type: Boolean,
    default: null
  },
  error: {
    type: Boolean,
    default: null
  },
  disabled: {
    type: Boolean,
    default: null
  },
  readonly: {
    type: Boolean,
    default: null
  }
}

type CellSize = 'normal' | 'large'

type CellArrowDirection = 'up' | 'down' | 'left' | 'right'

export const cellSharedProps = {
  icon: String,
  size: String as PropType<CellSize>,
  title: numericProp,
  value: numericProp,
  label: numericProp,
  center: Boolean,
  isLink: Boolean,
  border: truthProp,
  iconPrefix: String,
  valueClass: unknownProp,
  labelClass: unknownProp,
  titleClass: unknownProp,
  titleStyle: null as unknown as PropType<string | any>,
  arrowDirection: String as PropType<CellArrowDirection>,
  required: {
    type: [Boolean, String] as PropType<boolean | 'auto'>,
    default: null
  },
  clickable: {
    type: Boolean as PropType<boolean | null>,
    default: null
  }
}
