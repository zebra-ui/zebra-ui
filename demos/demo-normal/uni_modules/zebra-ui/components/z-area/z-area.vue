<template>
  <z-picker
    ref="picker"
    v-model="codes"
    :columns="columns"
    @change="onChange"
    @cancel="onCancel"
    @confirm="onConfirm"
    :title="props.title"
    :loading="props.loading"
    :readonly="props.readonly"
    :option-height="props.optionHeight"
    :swipe-duration="props.swipeDuration"
    :visible-option-num="props.visibleOptionNum"
    :cancel-button-text="props.cancelButtonText"
    :confirm-button-text="props.confirmButtonText"
    :component-slots="instance.slots"
  >
    <template v-if="instance.slots.title" #title>
      <slot name="title"></slot>
    </template>
    <template v-if="instance.slots.cancel" #cancel>
      <slot name="cancel"></slot>
    </template>
    <template v-if="instance.slots.confirm" #confirm>
      <slot name="confirm"></slot>
    </template>
    <template v-if="instance.slots.toolbar" #toolbar>
      <slot name="toolbar"></slot>
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
import { makeArrayProp, makeNumericProp, useExpose } from '../../libs/utils'

import { formatDataForCascade } from './utils'

import type { PickerExpose } from '../z-picker/types'
type AreaList = {
  city_list: Record<string, string>
  county_list: Record<string, string>
  province_list: Record<string, string>
}

// const [name, bem] = createNamespace('area')

const instance = getCurrentInstance()!

const props = defineProps({
  loading: Boolean,
  readonly: Boolean,
  optionHeight: makeNumericProp(44),
  swipeDuration: makeNumericProp(1000),
  visibleOptionNum: makeNumericProp(6),
  title: String,
  cancelButtonText: String,
  confirmButtonText: String,
  modelValue: String,
  columnsNum: makeNumericProp(3),
  columnsPlaceholder: makeArrayProp<string>(),
  areaList: {
    type: Object as PropType<AreaList>,
    default: () => ({})
  }
})

const emit = defineEmits(['change', 'confirm', 'cancel', 'update:modelValue'])

const codes = ref<string[]>([])
const picker = ref()

const columns = computed(() => formatDataForCascade(props))
const onChange = (...args: unknown[]) => emit('change', ...args)
const onCancel = (...args: unknown[]) => emit('cancel', ...args)
const onConfirm = (...args: unknown[]) => emit('confirm', ...args)

watch(
  codes,
  (newCodes) => {
    const lastCode = newCodes.length ? newCodes[newCodes.length - 1] : ''
    if (lastCode && lastCode !== props.modelValue) {
      emit('update:modelValue', lastCode)
    }
  },
  { deep: true }
)

watch(
  () => props.modelValue,
  (newCode) => {
    if (newCode) {
      const lastCode = codes.value.length
        ? codes.value[codes.value.length - 1]
        : ''
      if (newCode !== lastCode) {
        codes.value = [
          `${newCode.slice(0, 2)}0000`,
          `${newCode.slice(0, 4)}00`,
          newCode
        ].slice(0, +props.columnsNum)
      }
    } else {
      codes.value = []
    }
  },
  { immediate: true }
)

useExpose<PickerExpose>({
  confirm: () => picker.value?.confirm(),
  getSelectedOptions: () => picker.value?.getSelectedOptions() || []
})

defineExpose<PickerExpose>({
  confirm: () => picker.value?.confirm(),
  getSelectedOptions: () => picker.value?.getSelectedOptions() || []
})
</script>
<script lang="ts">
export default {
  name: 'ZArea',
  options: {
    virtualHost: true
  }
}
</script>
