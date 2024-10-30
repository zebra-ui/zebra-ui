<template>
  <view :class="bem()" :style="customStyle">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import { makeNumericProp, createNamespace, useChildren } from '../../libs/utils'

const [name, bem] = createNamespace('sidebar')
const props = defineProps({
  modelValue: makeNumericProp(0),
  customStyle: {
    type: Object,
    default: () => {}
  }
})
const emit = defineEmits(['change', 'update:modelValue'])
const { linkChildren } = useChildren(name)
const getActive = () => +props.modelValue

const setActive = (value: number) => {
  if (value !== getActive()) {
    emit('update:modelValue', value)
    emit('change', value)
  }
}

linkChildren({
  getActive,
  setActive
})
</script>
<script lang="ts">
export default {
  name: 'ZSidebar',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-sidebar {
  width: var(--z-sidebar-width);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
