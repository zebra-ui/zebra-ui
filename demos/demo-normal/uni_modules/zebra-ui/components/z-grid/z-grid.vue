<template>
  <view
    :style="{ paddingLeft: addUnit(props.gutter), ...props.customStyle }"
    :class="[bem(), { [BORDER_TOP]: props.border && !props.gutter }]"
  >
    <slot></slot>
  </view>
</template>
<script lang="ts" setup>
import { type PropType } from 'vue'
import {
  createNamespace,
  addUnit,
  truthProp,
  numericProp,
  makeNumericProp,
  BORDER_TOP,
  useChildren
} from '../../libs/utils'

const [name, bem] = createNamespace('grid')
type GridDirection = 'horizontal' | 'vertical'

const props = defineProps({
  square: Boolean,
  center: truthProp,
  border: truthProp,
  gutter: numericProp,
  reverse: Boolean,
  iconSize: numericProp,
  direction: String as PropType<GridDirection>,
  clickable: Boolean,
  columnNum: makeNumericProp(4),
  customStyle: Object
})

const { linkChildren } = useChildren(name)

linkChildren({ props })
</script>
<script lang="ts">
export default {
  name: 'ZGrid',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-grid {
  display: flex;
  flex-wrap: wrap;
}
</style>
