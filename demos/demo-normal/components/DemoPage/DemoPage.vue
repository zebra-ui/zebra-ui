<template>
  <z-config-provider :theme="theme">
    <z-nav-bar
      v-if="props.showHeader"
      :title="props.title"
      left-arrow
      fixed
      placeholder
    ></z-nav-bar>
    <view class="demo-page" :style="pageStyle" @click="pageClick">
      <slot></slot>
    </view>
    <z-dialog></z-dialog>
    <z-toast></z-toast>
    <z-notify custom-navbar></z-notify>
  </z-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
// @ts-ignore
import { useThemeStore } from '../../store'
const store = useThemeStore()
const props = defineProps({
  showHeader: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: 'zebra-ui'
  }
})
const theme = computed(() => {
  return store.theme
})

const pageStyle = computed(() => {
  return {
    'min-height': `calc(100vh - 88rpx - env(safe-area-inset-top) - ${uni.getSystemInfoSync().statusBarHeight}px)`
  }
})

const pageClick = () => {
  uni.$emit('pageClick')
}
</script>

<style lang="scss">
.demo-page {
  background-color: var(--zebra-background);
}
</style>
