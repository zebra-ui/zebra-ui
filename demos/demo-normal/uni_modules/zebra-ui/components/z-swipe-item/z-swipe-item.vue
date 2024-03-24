<template>
  <div class="swipe-item" :style="[itemStyle]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, reactive, onMounted } from 'vue'
import { useParent, useExpose } from '../../libs/utils'
const state = reactive({
  offset: 0,
  inited: false,
  mounted: false
})

const props: any = defineProps({
  customStyle: Object
})
// @ts-ignore
const { parent } = useParent('z-swipe')

const itemStyle = computed(() => {
  const style: any = {}
  if (parent) {
    const { vertical } = parent.props

    if (parent.size.value) {
      style[vertical ? 'height' : 'width'] = `${parent.size.value}px`
    }

    if (state.offset) {
      style.transform = `translate${vertical ? 'Y' : 'X'}(${state.offset}px)`
    }
  }
  return { ...style, ...props.customStyle }
})

const setOffset = (offset: number) => {
  state.offset = offset
}

onMounted(() => {
  nextTick(() => {
    state.mounted = true
  })
})

useExpose({ setOffset })
</script>

<script lang="ts">
export default {
  name: 'ZSwipeItem',
  options: {
    virtualHost: true
  }
}
</script>

<style lang="scss" scoped>
.z-swipe-item {
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
}
</style>
