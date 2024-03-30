<template>
  <view class="item" :style="[getStyle()]">
    {{ item.text }}
  </view>
</template>

<script setup lang="ts">
interface Item {
  background: string
  text: string
}
const props = defineProps({
  item: {
    type: Object as () => Item,
    default: () => ({})
  },
  height: {
    type: String,
    default: '300rpx'
  },
  customStyle: {
    type: Object as () => Record<string, any>,
    default: () => ({})
  }
})

const getStyle = () => {
  return {
    background: props.item.background,
    height: props.height,
    ...props.customStyle
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
}
</style>
