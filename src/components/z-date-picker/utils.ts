import {
  extend,
  padZero,
  makeArrayProp,
  clamp,
  type RequiredParams,
  makeNumericProp,
  truthProp,
  Numeric
} from '../../libs/utils'
import type { PropType } from 'vue'
export type PickerOption = {
  text?: Numeric
  value?: Numeric
  disabled?: boolean
  children?: PickerColumn
  className?: unknown
  [key: PropertyKey]: any
}

type PickerColumn = PickerOption[]

type Filter = (
  columnType: string,
  options: PickerOption[],
  values?: string[]
) => PickerOption[]
export type TimeFilter = RequiredParams<Filter>
type Formatter = (type: string, option: PickerOption) => PickerOption

const pickerSharedProps = {
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  optionHeight: makeNumericProp(44),
  showToolbar: truthProp,
  swipeDuration: makeNumericProp(1000),
  visibleOptionNum: makeNumericProp(6),
  title: String,
  cancelButtonText: String,
  confirmButtonText: String
}

export const sharedProps = extend({}, pickerSharedProps, {
  modelValue: makeArrayProp<string>(),
  filter: Function as PropType<Filter>,
  formatter: Function as PropType<Formatter>
})

export const pickerInheritKeys = Object.keys(pickerSharedProps) as Array<
  keyof typeof pickerSharedProps
>

export function times<T>(n: number, iteratee: (index: number) => T) {
  if (n < 0) {
    return []
  }

  const result: T[] = Array(n)

  let index = -1
  while (++index < n) {
    result[index] = iteratee(index)
  }

  return result
}

export const getMonthEndDay = (year: number, month: number): number =>
  32 - new Date(year, month - 1, 32).getDate()

export const genOptions = <T extends string>(
  min: number,
  max: number,
  type: T,
  formatter: Formatter,
  filter?: Filter | TimeFilter,
  values?: string[]
) => {
  const options = times(max - min + 1, (index) => {
    const value = padZero(min + index)
    // @extra-zebra APP端-函数设置默认值后解析不出来，会变成Undefined
    return formatter
      ? formatter(type, { text: value, value })
      : { text: value, value }
  })
  return filter ? filter(type, options, values!) : options
}

export const formatValueRange = (values: string[], columns: PickerOption[][]) =>
  values.map((value, index) => {
    const column = columns[index]
    if (column.length) {
      const minValue = +column[0].value!
      const maxValue = +column[column.length - 1].value!
      return padZero(clamp(+value, minValue, maxValue))
    }
    return value
  })
