<template>
  <DemoPage title="FloatingBubble">
    <view class="demo-floating-bubble">
      <z-tabs v-model:active="activeName">
        <z-tab title="基础用法">
          <view class="text">在 x 轴默认位置，只允许 y 轴方向拖拽</view>
          <z-floating-bubble
            v-if="activeName === 0"
            icon="setting-fill"
            @click="onClick"
          />
        </z-tab>
        <z-tab title="自由拖拽和磁吸">
          <view class="text"
            >允许 x 和 y 轴方向拖拽，吸附到 x 轴方向最近一边</view
          >
          <z-floating-bubble
            v-if="activeName === 1"
            icon="setting-fill"
            axis="xy"
            magnetic="x"
            @offset-change="onOffsetChange"
          />
        </z-tab>
        <z-tab title="双向绑定">
          <view class="text">
            使用 offset 控制位置, x：{{ offset.x.toFixed(0) }} y:{{
              offset.y.toFixed(0)
            }}
          </view>
          <z-floating-bubble
            v-if="activeName === 2"
            icon="setting-fill"
            v-model:offset="offset"
            axis="xy"
          />
        </z-tab>
      </z-tabs>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// @ts-ignore
// eslint-disable-next-line no-undef
const toast = useToast()
const onOffsetChange = (offset: any) => {
  toast.showToast(`x: ${offset.x.toFixed(0)}, y: ${offset.y.toFixed(0)}`)
}

const onClick = () => {
  toast.showToast('点击气泡')
}

const activeName = ref(0)
const offset = ref({ x: 200, y: 400 })
</script>
<style lang="scss" scoped>
.demo-floating-bubble {
  .text {
    padding: 50rpx;
    font-size: 26rpx;
    color: var(--zebra-text-color);
    text-align: center;
  }
}
</style>
