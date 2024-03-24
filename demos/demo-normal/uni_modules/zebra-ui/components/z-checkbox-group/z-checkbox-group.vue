<template>
  <view :class="bem([props.direction])">
    <slot></slot>
  </view>
</template>
<script lang="ts" setup>
import { watch, type PropType } from 'vue'
import {
  numericProp,
  makeArrayProp,
  makeStringProp,
  createNamespace,
  useChildren,
  useCustomFieldValue,
  useExpose
} from '../../libs/utils'
import type {
  CheckboxGroupExpose,
  CheckboxGroupToggleAllOptions
} from './types'
const [name, bem] = createNamespace('checkbox-group')
const props = defineProps({
  max: numericProp,
  shape: makeStringProp<any>('round'),
  disabled: Boolean,
  iconSize: numericProp,
  direction: String as PropType<any>,
  modelValue: makeArrayProp<unknown>(),
  checkedColor: String
})
const emit = defineEmits(['change', 'update:modelValue'])
const { children, linkChildren } = useChildren(name)
const updateValue = (value: unknown[]) => emit('update:modelValue', value)
const toggleAll = (options: CheckboxGroupToggleAllOptions = {}) => {
  if (typeof options === 'boolean') {
    options = { checked: options }
  }

  const { checked, skipDisabled } = options

  const checkedChildren = children.filter((item: any) => {
    if (!item.props.bindGroup) {
      return false
    }
    if (item.props.disabled && skipDisabled) {
      return item.checked.value
    }
    return checked ? checked : !item.checked.value
  })

  const names = checkedChildren.map((item: any) => item.name)
  updateValue(names)
}

watch(
  () => props.modelValue,
  (value) => emit('change', value)
)

useExpose<CheckboxGroupExpose>({ toggleAll })
defineExpose({ toggleAll })
useCustomFieldValue(() => props.modelValue)
linkChildren({
  props,
  updateValue
})
</script>
<script lang="ts">
export default {
  name: 'ZCheckboxGroup',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-checkbox-group {
  &--horizontal {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
