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
import { computed, ref, watch, type PropType, getCurrentInstance } from 'vue'
import {
  formatValueRange,
  genOptions,
  sharedProps,
  type TimeFilter
} from '../z-date-picker/utils'
import {
  createNamespace,
  extend,
  isSameValue,
  makeNumericProp,
  useComponentName
} from '../../libs/utils'
const [name] = createNamespace('time-picker')
useComponentName(name)
type TimePickerColumnType = 'hour' | 'minute' | 'second'
const fullColumns: TimePickerColumnType[] = ['hour', 'minute', 'second']
const instance = getCurrentInstance()!
const props = defineProps(
  extend({}, sharedProps, {
    minHour: makeNumericProp(0),
    maxHour: makeNumericProp(23),
    minMinute: makeNumericProp(0),
    maxMinute: makeNumericProp(59),
    minSecond: makeNumericProp(0),
    maxSecond: makeNumericProp(59),
    minTime: {
      type: String,
      validator: (val: string) =>
        /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(val)
    },
    maxTime: {
      type: String,
      validator: (val: string) =>
        /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(val)
    },
    columnsType: {
      type: Array as PropType<TimePickerColumnType[]>,
      default: () => ['hour', 'minute']
    },
    filter: Function as PropType<TimeFilter>
  })
)
const emit = defineEmits(['confirm', 'cancel', 'change', 'update:modelValue'])
const currentValues = ref<string[]>(props.modelValue)

const getValidTime = (time: string) => {
  const timeLimitArr = time.split(':')
  return fullColumns.map((col, i) =>
    props.columnsType.includes(col) ? timeLimitArr[i] : '00'
  )
}

const columns = computed(() => {
  let { minHour, maxHour, minMinute, maxMinute, minSecond, maxSecond } = props

  if (props.minTime || props.maxTime) {
    const fullTime: Record<TimePickerColumnType, string | number> = {
      hour: 0,
      minute: 0,
      second: 0
    }
    props.columnsType.forEach((col, i) => {
      fullTime[col] = currentValues.value[i] ? currentValues.value[i] : 0
    })
    const { hour, minute } = fullTime
    if (props.minTime) {
      const [minH, minM, minS] = getValidTime(props.minTime)
      minHour = minH
      minMinute = +hour <= +minHour ? minM : '00'
      minSecond = +hour <= +minHour && +minute <= +minMinute ? minS : '00'
    }
    if (props.maxTime) {
      const [maxH, maxM, maxS] = getValidTime(props.maxTime)
      maxHour = maxH
      maxMinute = +hour >= +maxHour ? maxM : '59'
      maxSecond = +hour >= +maxHour && +minute >= +maxMinute ? maxS : '59'
    }
  }
  // @ts-ignore
  return props.columnsType.map((type) => {
    const { filter, formatter } = props
    switch (type) {
      case 'hour':
        return genOptions(
          +minHour,
          +maxHour,
          type,
          // @ts-ignore
          formatter,
          filter,
          currentValues.value
        )
      case 'minute':
        return genOptions(
          +minMinute,
          +maxMinute,
          type,
          // @ts-ignore
          formatter,
          filter,
          currentValues.value
        )
      case 'second':
        return genOptions(
          +minSecond,
          +maxSecond,
          type,
          // @ts-ignore
          formatter,
          filter,
          currentValues.value
        )
      default:
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
  (newValues) => {
    // @ts-ignore
    newValues = formatValueRange(newValues, columns.value)
    if (!isSameValue(newValues, currentValues.value)) {
      // @ts-ignore
      currentValues.value = newValues
    }
  },
  { immediate: true }
)

const onChange = (...args: unknown[]) => emit('change', ...args)
const onCancel = (...args: unknown[]) => emit('cancel', ...args)
const onConfirm = (...args: unknown[]) => emit('confirm', ...args)
</script>
<script lang="ts">
export default {
  name: 'ZTimePicker',
  options: {
    virtualHost: true
  }
}
</script>
