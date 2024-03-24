<template>
  <z-checker
    :bem="bem"
    role="radio"
    :parent="parent"
    :checked="checked"
    @toggle="toggle"
    :name="name"
    :disabled="disabled"
    :icon-size="iconSize"
    :icon-name="iconName"
    :model-value="modelValue"
    :checked-color="checkedColor"
    :label-position="labelPosition"
    :label-disabled="labelDisabled"
    :shape="shape"
    :component-slot="instance.slots"
    :custom-style="customStyle"
  >
    <template v-if="instance.slots.icon" #icon>
      <slot name="icon"></slot>
    </template>
    <slot></slot>
  </z-checker>
</template>
<script lang="ts" setup>
import { type PropType, getCurrentInstance, computed } from 'vue'
import {
  createNamespace,
  unknownProp,
  numericProp,
  useParent,
  useComponentName
} from '../../libs/utils'
const [componentName, bem] = createNamespace('radio')
useComponentName(componentName)
const props = defineProps({
  name: unknownProp,
  disabled: Boolean,
  iconSize: numericProp,
  modelValue: unknownProp,
  checkedColor: String,
  labelPosition: String as PropType<any>,
  labelDisabled: Boolean,
  shape: String as PropType<any>,
  iconName: String,
  customStyle: Object
})
const instance = getCurrentInstance()!
const emit = defineEmits(['update:modelValue'])
// @ts-ignore
const { parent } = useParent('z-radio-group')
const checked = computed(() => {
  const value = parent ? parent.props.modelValue : props.modelValue
  return value === props.name
})

const toggle = () => {
  if (parent) {
    parent.updateValue(props.name)
  } else {
    emit('update:modelValue', props.name)
  }
}
</script>
<script lang="ts">
export default {
  name: 'ZRadio',
  options: {
    virtualHost: true
  }
}
</script>
