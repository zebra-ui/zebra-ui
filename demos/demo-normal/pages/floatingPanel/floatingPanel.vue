<template>
  <DemoPage title="FloatingPanel">
    <view class="demo-floating-panel">
      <z-tabs>
        <z-tab title="基础用法">
          <z-floating-panel>
            <z-cell-group>
              <z-cell
                v-for="i in 26"
                :key="i"
                :title="String.fromCharCode(i + 64)"
                size="large"
              />
            </z-cell-group>
          </z-floating-panel>
        </z-tab>

        <z-tab title="自定义锚点">
          <z-floating-panel v-model:height="height" :anchors="anchors">
            <view style="padding: 30rpx; text-align: center">
              <text>面板显示高度 {{ height.toFixed(0) }} px</text>
            </view>
          </z-floating-panel>
        </z-tab>

        <z-tab title="仅头部拖拽">
          <z-floating-panel :content-draggable="false">
            <view style="padding: 30rpx; text-align: center">
              <text>内容不可拖拽</text>
            </view>
          </z-floating-panel>
        </z-tab>
      </z-tabs>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
const windowHeight = computed(() => {
  return uni.getSystemInfoSync().windowHeight
})
const anchors = [
  100,
  Math.round(0.4 * windowHeight.value),
  Math.round(0.7 * windowHeight.value)
]

const height = ref(anchors[0])
</script>
