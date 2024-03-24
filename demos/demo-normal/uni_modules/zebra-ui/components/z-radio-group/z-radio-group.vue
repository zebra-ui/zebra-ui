<template>
  <view :class="bem([props.direction])" role="radiogroup">
    <slot></slot>
  </view>
</template>
<script lang="ts" setup>
import { watch, type PropType } from 'vue'
import {
  unknownProp,
  numericProp,
  createNamespace,
  useChildren,
  useCustomFieldValue
} from '../../libs/utils'
const [name, bem] = createNamespace('radio-group')
const props = defineProps({
  shape: String as PropType<any>,
  disabled: Boolean,
  iconSize: numericProp,
  direction: String as PropType<any>,
  modelValue: unknownProp,
  checkedColor: String
})
const emit = defineEmits(['change', 'update:modelValue'])
const { linkChildren } = useChildren(name)

const updateValue = (value: unknown) => emit('update:modelValue', value)

watch(
  () => props.modelValue,
  (value) => emit('change', value)
)

linkChildren({
  props,
  updateValue
})

useCustomFieldValue(() => props.modelValue)
</script>
<script lang="ts">
export default {
  name: 'ZRadioGroup',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-radio-group {
  &--horizontal {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
