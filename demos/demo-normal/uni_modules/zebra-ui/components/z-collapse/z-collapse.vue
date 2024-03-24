<template>
  <view :class="[bem(), { [BORDER_TOP_BOTTOM]: props.border }]">
    <slot></slot>
  </view>
</template>
<script lang="ts" setup>
import { type PropType } from 'vue'
import {
  truthProp,
  createNamespace,
  BORDER_TOP_BOTTOM,
  type Numeric,
  useChildren,
  useExpose
} from '../../libs/utils'

const [name, bem] = createNamespace('collapse')
type CollapseToggleAllOptions =
  | boolean
  | {
      expanded?: boolean
      skipDisabled?: boolean
    }
const props = defineProps({
  border: truthProp,
  accordion: Boolean,
  modelValue: {
    type: [String, Number, Array] as PropType<Numeric | Numeric[]>,
    default: ''
  }
})
const emit = defineEmits(['change', 'update:modelValue'])
const { linkChildren, children } = useChildren(name)

const updateName = (name: Numeric | Numeric[]) => {
  emit('change', name)
  emit('update:modelValue', name)
}

const toggle = (name: Numeric, expanded: boolean) => {
  const { accordion, modelValue } = props
  if (accordion) {
    // @ts-ignore
    updateName(name === modelValue ? '' : name)
  } else if (expanded) {
    // @ts-ignore
    updateName((modelValue as Numeric[]).concat(name))
  } else {
    updateName(
      // @ts-ignore
      (modelValue as Numeric[]).filter((activeName) => activeName !== name)
    )
  }
}

const toggleAll = (options: boolean | CollapseToggleAllOptions = {}) => {
  if (props.accordion) {
    return
  }

  if (typeof options === 'boolean') {
    options = { expanded: options }
  }

  const { expanded, skipDisabled } = options!
  const expandedChildren = children.filter((item: any) => {
    if (item.disabled && skipDisabled) {
      return item.expanded.value
    }
    return expanded ? expanded : !item.expanded.value
  })

  const names = expandedChildren.map(
    (item: { itemName: { value: any } }) => item.itemName.value
  )
  updateName(names)
}

const isExpanded = (name: Numeric) => {
  const { accordion, modelValue } = props
  // @ts-ignore
  return accordion
    ? modelValue === name
    : (modelValue as Numeric[]).includes(name)
}
useExpose({ toggleAll })
defineExpose({ toggleAll })
linkChildren({ toggle, isExpanded })
</script>
<script lang="ts">
export default {
  name: 'ZCollapse',
  options: {
    virtualHost: true
  }
}
</script>
