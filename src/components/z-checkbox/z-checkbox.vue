<template>
  <z-checker
    :bem="bem"
    role="checkbox"
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
    :bind-group="bindGroup"
    :indeterminate="indeterminate"
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
import { watch, computed, type PropType, getCurrentInstance } from 'vue'
import {
  truthProp,
  createNamespace,
  unknownProp,
  numericProp,
  useParent,
  useCustomFieldValue,
  useExpose,
  useComponentName
} from '../../libs/utils'
const [nameComponent, bem] = createNamespace('checkbox')
useComponentName(nameComponent)
type CheckerShape = 'square' | 'round'
type CheckerLabelPosition = 'left' | 'right'
const instance = getCurrentInstance()!
const props = defineProps({
  name: unknownProp,
  disabled: Boolean,
  iconSize: numericProp,
  modelValue: unknownProp,
  checkedColor: String,
  labelPosition: String as PropType<CheckerLabelPosition>,
  labelDisabled: Boolean,
  shape: String as PropType<CheckerShape>,
  bindGroup: truthProp,
  indeterminate: {
    type: Boolean as PropType<boolean | null>,
    default: null
  },
  iconName: String,
  customStyle: Object
})
const emit = defineEmits(['change', 'update:modelValue', 'click'])
// @ts-ignore
const { parent } = useParent('z-checkbox-group')
const setParentValue = (checked: boolean) => {
  const { name } = props
  const { max, modelValue } = parent!.props
  const value = modelValue.slice()
  if (checked) {
    const overlimit = max && value.length >= +max
    if (!overlimit && !value.includes(name)) {
      value.push(name)

      if (props.bindGroup) {
        parent!.updateValue(value)
      }
    }
  } else {
    const index = value.indexOf(name)

    if (index !== -1) {
      value.splice(index, 1)

      if (props.bindGroup) {
        parent!.updateValue(value)
      }
    }
  }
}
const checked = computed(() => {
  if (parent && props.bindGroup) {
    return parent.props.modelValue.indexOf(props.name) !== -1
  }
  return !!props.modelValue
})

const toggle = (newValue = !checked.value) => {
  if (parent && props.bindGroup) {
    setParentValue(newValue)
  } else {
    emit('update:modelValue', newValue)
  }
  if (props.indeterminate !== null) emit('change', newValue)
}
watch(
  () => props.modelValue,
  (value) => {
    if (props.indeterminate === null) emit('change', value)
  }
)
useExpose<any>({ toggle, props, checked })
defineExpose({ toggle, props, checked })
useCustomFieldValue(() => props.modelValue)
</script>
<script lang="ts">
export default {
  name: 'ZCheckbox',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-checkbox {
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
}
</style>
