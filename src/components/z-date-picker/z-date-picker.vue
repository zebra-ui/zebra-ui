<template>
  <z-picker
    v-model="currentValues"
    :columns="columns"
    :loading="loading"
    :readonly="readonly"
    :option-height="optionHeight"
    :show-toolbar="showToolbar"
    :swipe-duration="swipeDuration"
    :visible-option-num="visibleOptionNum"
    :title="title"
    :cancel-button-text="cancelButtonText"
    :component-slots="instance.slots"
    :confirm-button-text="confirmButtonText"
    @change="onChange"
    @cancel="onCancel"
    @confirm="onConfirm"
  >
    <template v-if="instance.slots.toolbar" #toolbar>
      <slot name="toolbar"></slot>
    </template>
    <template v-if="instance.slots.title" #title>
      <slot name="title"></slot>
    </template>
    <template v-if="instance.slots.confirm" #confirm>
      <slot name="confirm"></slot>
    </template>
    <template v-if="instance.slots.cancel" #cancel>
      <slot name="cancel"></slot>
    </template>
    <template v-if="instance.slots.option" #option>
      <slot name="option"></slot>
    </template>
    <template v-if="instance.slots['columns-top']" #columns-top>
      <slot name="columns-top"></slot>
    </template>
    <template v-if="instance.slots['columns-bottom']" #columns-bottom>
      <slot name="columns-bottom"></slot>
    </template>
  </z-picker>
</template>
<script lang="ts" setup>
import { ref, watch, computed, type PropType, getCurrentInstance } from 'vue'
import {
  extend,
  isDate,
  isSameValue,
  createNamespace,
  useComponentName
} from '../../libs/utils'
import {
  genOptions,
  sharedProps,
  getMonthEndDay,
  formatValueRange
} from './utils'
const [name] = createNamespace('date-picker')
useComponentName(name)
const instance = getCurrentInstance()!

type DatePickerColumnType = 'year' | 'month' | 'day'

const props = defineProps(
  extend({}, sharedProps, {
    columnsType: {
      type: Array as PropType<DatePickerColumnType[]>,
      default: () => ['year', 'month', 'day']
    },
    minDate: {
      type: Date,
      default: () => new Date(new Date().getFullYear() - 10, 0, 1),
      validator: isDate
    },
    maxDate: {
      type: Date,
      default: () => new Date(new Date().getFullYear() + 10, 11, 31),
      validator: isDate
    }
  })
)
const emit = defineEmits(['confirm', 'cancel', 'change', 'update:modelValue'])
// @ts-ignore
const currentValues = ref<string[]>(props.modelValue)
const updatedByExternalSources = ref(false)

const genYearOptions = () => {
  const minYear = props.minDate.getFullYear()
  const maxYear = props.maxDate.getFullYear()
  return genOptions(
    minYear,
    maxYear,
    'year',
    // @ts-ignore
    props.formatter,
    props.filter
  )
}

const isMinYear = (year: number) => year === props.minDate.getFullYear()
const isMaxYear = (year: number) => year === props.maxDate.getFullYear()
const isMinMonth = (month: number) => month === props.minDate.getMonth() + 1
const isMaxMonth = (month: number) => month === props.maxDate.getMonth() + 1

const getValue = (type: DatePickerColumnType) => {
  const { minDate, columnsType } = props
  // @ts-ignore
  const index = columnsType.indexOf(type)
  const value = updatedByExternalSources.value
    ? props.modelValue[index]
    : currentValues.value[index]
  if (value) {
    return +value
  }

  switch (type) {
    case 'year':
      return minDate.getFullYear()
    case 'month':
      return minDate.getMonth() + 1
    case 'day':
      return minDate.getDate()
  }
}

const genMonthOptions = () => {
  const year = getValue('year')
  const minMonth = isMinYear(year) ? props.minDate.getMonth() + 1 : 1
  const maxMonth = isMaxYear(year) ? props.maxDate.getMonth() + 1 : 12

  return genOptions(
    minMonth,
    maxMonth,
    'month',
    // @ts-ignore
    props.formatter,
    props.filter
  )
}

const genDayOptions = () => {
  const year = getValue('year')
  const month = getValue('month')
  const minDate =
    isMinYear(year) && isMinMonth(month) ? props.minDate.getDate() : 1
  const maxDate =
    isMaxYear(year) && isMaxMonth(month)
      ? props.maxDate.getDate()
      : getMonthEndDay(year, month)
  // @ts-ignore
  return genOptions(minDate, maxDate, 'day', props.formatter, props.filter)
}

const columns = computed(() => {
  // @ts-ignore
  return props.columnsType.map((type) => {
    switch (type) {
      case 'year':
        return genYearOptions()
      case 'month':
        return genMonthOptions()
      case 'day':
        return genDayOptions()
      default:
        // @ts-ignore
        if (process.env.NODE_ENV !== 'production') {
          throw new Error(
            `[Zebra] DatePicker: unsupported columns type: ${type}`
          )
        }
        return []
    }
  })
})
watch(currentValues, (newValues) => {
  if (!isSameValue(newValues, props.modelValue)) {
    emit('update:modelValue', newValues)
  }
})
watch(
  () => props.modelValue,
  (newValues, oldValues) => {
    updatedByExternalSources.value = isSameValue(oldValues, currentValues.value)
    // @ts-ignore
    newValues = formatValueRange(newValues, columns.value)
    if (!isSameValue(newValues, currentValues.value)) {
      // @ts-ignore
      currentValues.value = newValues
    }
    updatedByExternalSources.value = false
  },
  {
    immediate: true
  }
)

const onChange = (...args: unknown[]) => emit('change', ...args)
const onCancel = (...args: unknown[]) => emit('cancel', ...args)
const onConfirm = (...args: unknown[]) => emit('confirm', ...args)
</script>
<script lang="ts">
export default {
  name: 'ZDatePicker',
  options: {
    virtualHost: true
  }
}
</script>
