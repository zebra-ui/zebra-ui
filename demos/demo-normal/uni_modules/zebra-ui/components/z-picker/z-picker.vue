<template>
  <view :class="bem()">
    <template v-if="props.toolbarPosition === 'top'">
      <z-picker-toolbar
        v-if="props.showToolbar && !parent"
        :title="props.title"
        :cancel-button-text="props.cancelButtonText"
        :confirm-button-text="props.confirmButtonText"
        :component-slots="componentSlotsShow ? componentSlots : instance.slots"
        @confirm="confirm"
        @cancel="cancel"
      >
        <template v-if="showSlots('cancel')" #cancel>
          <slot name="cancel"></slot>
        </template>
        <template v-if="showSlots('confirm')" #confirm>
          <slot name="confirm"></slot>
        </template>
        <template v-if="showSlots('title')" #title>
          <slot name="title"></slot>
        </template>
        <template v-if="showSlots('toolbar')" #toolbar>
          <slot name="toolbar"></slot>
        </template>
      </z-picker-toolbar>
    </template>
    <template v-if="props.loading">
      <z-loading :wrapper-style="loadingStyle" />
    </template>
    <slot v-if="showSlots('columns-top')" name="columns-top"></slot>
    <view :class="bem('columns')" :style="columnsStyle" @touchmove.stop.prevent>
      <template
        v-for="(options, columnIndex) in currentColumns"
        :key="columnIndex"
      >
        <z-picker-column
          :value="selectedValues[columnIndex]"
          :fields="fields"
          :options="options"
          :readonly="props.readonly"
          :allow-html="props.allowHtml"
          :option-height="optionHeight"
          :swipe-duration="props.swipeDuration"
          :visible-option-num="props.visibleOptionNum"
          :component-slots="
            componentSlotsShow ? componentSlots : instance.slots
          "
          @change="(value: Numeric) => onChange(value, columnIndex)"
          @click-option="
            (option: PickerOption) => onClickOption(option, columnIndex)
          "
          @scroll-into="
            (option: PickerOption) => {
              emit('scrollInto', { currentOption: option, columnIndex })
            }
          "
        >
          <template v-if="showSlots('option')" #option>
            <slot name="option"></slot>
          </template>
        </z-picker-column>
      </template>
      <template v-if="hasOptions">
        <view :class="bem('mask')" :style="maskStyle" />
        <view
          :class="[BORDER_UNSET_TOP_BOTTOM, bem('frame')]"
          :style="frameStyle"
        />
      </template>
    </view>
    <slot v-if="showSlots('columns-bottom')" name="columns-bottom"></slot>
    <template v-if="props.toolbarPosition === 'bottom'">
      <z-picker-toolbar
        v-if="props.showToolbar && !parent"
        :title="props.title"
        :cancel-button-text="props.cancelButtonText"
        :confirm-button-text="props.confirmButtonText"
        :component-slots="componentSlotsShow ? componentSlots : instance.slots"
        @confirm="confirm"
        @cancel="cancel"
      >
        <template v-if="showSlots('cancel')" #cancel>
          <slot name="cancel"></slot>
        </template>
        <template v-if="showSlots('confirm')" #confirm>
          <slot name="confirm"></slot>
        </template>
        <template v-if="showSlots('title')" #title>
          <slot name="title"></slot>
        </template>
        <template v-if="showSlots('toolbar')" #toolbar>
          <slot name="toolbar"></slot>
        </template>
      </z-picker-toolbar>
    </template>
  </view>
</template>
<script lang="ts" setup>
import {
  ref,
  watch,
  computed,
  nextTick,
  type PropType,
  getCurrentInstance
} from 'vue'
import zPickerToolbar from './z-picker-toolbar.vue'
import zPickerColumn from './z-picker-column.vue'
import zLoading from '../z-loading/z-loading.vue'
import {
  extend,
  truthProp,
  isSameValue,
  makeArrayProp,
  makeStringProp,
  makeNumericProp,
  BORDER_UNSET_TOP_BOTTOM,
  type Numeric,
  isObject,
  useExpose,
  useChildren,
  useParent
} from '../../libs/utils'

import {
  bem,
  isOptionExist,
  getColumnsType,
  findOptionByValue,
  assignDefaultFields,
  formatCascadeColumns,
  getFirstEnabledOption
} from './utils'
import type {
  PickerColumn,
  PickerExpose,
  PickerOption,
  PickerFieldNames,
  PickerToolbarPosition
} from './types'

interface ComponentSlots {
  [key: string]: any
}
const instance = getCurrentInstance()!

const props = defineProps({
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  optionHeight: makeNumericProp(44),
  showToolbar: truthProp,
  swipeDuration: makeNumericProp(1000),
  visibleOptionNum: makeNumericProp(6),
  title: String,
  cancelButtonText: String,
  confirmButtonText: String,
  columns: makeArrayProp<PickerOption | PickerColumn>(),
  modelValue: makeArrayProp<Numeric>(),
  toolbarPosition: makeStringProp<PickerToolbarPosition>('top'),
  columnsFieldNames: Object as PropType<PickerFieldNames>,
  componentSlots: Object as PropType<ComponentSlots>
})
const emit = defineEmits([
  'confirm',
  'cancel',
  'change',
  'scrollInto',
  'clickOption',
  'update:modelValue'
])
const selectedValues = ref(props.modelValue.slice(0))
// @ts-ignore
const { parent } = useParent('z-picker-group')
const { children, linkChildren } = useChildren('z-picker-column')

const componentSlotsShow = computed(() => {
  return isObject(props.componentSlots)
})

const showSlots = (name: string) => {
  if (componentSlotsShow.value) {
    return props.componentSlots && props.componentSlots[name]
      ? props.componentSlots[name]
      : false
  }
  return instance.slots[name]
}

linkChildren()
const fields = computed(() => assignDefaultFields(props.columnsFieldNames))
const optionHeight = computed(() => Number(props.optionHeight))
const columnsType = computed(() => getColumnsType(props.columns, fields.value))

const loadingStyle = computed(() => {
  return {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--z-picker-loading-icon-color)',
    background: 'var(--z-picker-loading-mask-color)'
  }
})

const currentColumns = computed(() => {
  const { columns } = props
  switch (columnsType.value) {
    case 'multiple':
      return columns as PickerColumn[]
    case 'cascade':
      return formatCascadeColumns(columns, fields.value, selectedValues)
    default:
      return [columns]
  }
})

const hasOptions = computed(() =>
  currentColumns.value.some((options) => options.length)
)

const selectedOptions = computed(() =>
  currentColumns.value.map((options, index) =>
    findOptionByValue(options, selectedValues.value[index], fields.value)
  )
)

const selectedIndexes = computed(() =>
  currentColumns.value.map((options, index) =>
    options.findIndex(
      (option: any) =>
        option[fields.value.value] === selectedValues.value[index]
    )
  )
)

const wrapHeight = computed(() => optionHeight.value * +props.visibleOptionNum)
const columnsStyle = computed(() => {
  return { height: `${wrapHeight.value}px` }
})
const frameStyle = computed(() => {
  return {
    height: `${optionHeight.value}px`
  }
})
const maskStyle = computed(() => {
  return {
    backgroundSize: `100% ${(wrapHeight.value - optionHeight.value) / 2}px`
  }
})

const setValue = (index: number, value: Numeric) => {
  if (selectedValues.value[index] !== value) {
    const newValues = selectedValues.value.slice(0)
    newValues[index] = value
    selectedValues.value = newValues
  }
}

const getEventParams = () => ({
  selectedValues: selectedValues.value.slice(0),
  selectedOptions: selectedOptions.value,
  selectedIndexes: selectedIndexes.value
})

const onChange = (value: Numeric, columnIndex: number) => {
  setValue(columnIndex, value)

  if (columnsType.value === 'cascade') {
    selectedValues.value.forEach((value, index) => {
      const options: any = currentColumns.value[index]
      if (!isOptionExist(options, value, fields.value)) {
        setValue(
          index,
          options.length ? options[0][fields.value.value] : undefined
        )
      }
    })
  }

  nextTick(() => {
    emit('change', extend({ columnIndex }, getEventParams()))
  })
}

const onClickOption = (currentOption: PickerOption, columnIndex: number) => {
  const params = { columnIndex, currentOption }
  emit('clickOption', extend(getEventParams(), params))
  emit('scrollInto', params)
}

const confirm = () => {
  children.forEach((child: any) => child.stopMomentum())
  const params = getEventParams()
  nextTick(() => {
    emit('confirm', params)
  })

  return params
}

const cancel = () => emit('cancel', getEventParams())

watch(
  currentColumns,
  (columns) => {
    columns.forEach((options: any, index: any) => {
      if (
        options.length &&
        !isOptionExist(options, selectedValues.value[index], fields.value)
      ) {
        setValue(index, getFirstEnabledOption(options)![fields.value.value])
      }
    })
  },
  { immediate: true }
)

let lastEmittedModelValue: Numeric[]
watch(
  () => props.modelValue,
  (newValues) => {
    if (
      !isSameValue(newValues, selectedValues.value) &&
      !isSameValue(newValues, lastEmittedModelValue)
    ) {
      // @ts-ignore
      selectedValues.value = newValues.slice(0)
      // @ts-ignore
      lastEmittedModelValue = newValues.slice(0)
    }
  },
  { deep: true }
)
watch(
  selectedValues,
  (newValues) => {
    if (!isSameValue(newValues, props.modelValue)) {
      lastEmittedModelValue = newValues.slice(0)
      emit('update:modelValue', lastEmittedModelValue)
    }
  },
  { immediate: true }
)
const getSelectedOptions = () => selectedOptions.value

useExpose<PickerExpose>({ confirm, getSelectedOptions })
</script>
<script lang="ts">
export default {
  name: 'ZPicker',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-picker {
  position: relative;
  user-select: none;
  background: var(--z-picker-background);

  &__columns {
    position: relative;
    display: flex;
    cursor: grab;
  }

  &__frame {
    position: absolute;
    top: 50%;
    right: var(--z-padding-md);
    left: var(--z-padding-md);
    z-index: 2;
    pointer-events: none;
    transform: translateY(-50%);
  }

  &__mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: var(--z-picker-mask-color);
    background-repeat: no-repeat;
    background-position: top, bottom;
    transform: translateZ(0);
  }
}
</style>
