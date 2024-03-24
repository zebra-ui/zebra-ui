<template>
  <DemoPage title="RollingText">
    <view class="demo-rolling-text">
      <demo-block title="基础用法">
        <z-rolling-text
          :start-num="0"
          :target-num="123"
          :auto-start="isStart"
        />
        <view style="margin-top: 20rpx">
          <z-button @click="() => (isStart = true)" type="primary">
            向下翻滚
          </z-button>
        </view>
      </demo-block>
      <demo-block title="设置翻滚方向">
        <z-rolling-text
          :start-num="0"
          :target-num="432"
          :auto-start="isStart2"
          direction="up"
        />
        <view style="margin-top: 20rpx">
          <z-button @click="() => (isStart2 = true)" type="primary"
            >向上翻滚</z-button
          >
        </view>
      </demo-block>
      <demo-block title="设置各数位停止顺序">
        <z-rolling-text
          :start-num="0"
          :target-num="54321"
          :auto-start="isStart3"
          stop-order="rtl"
        />
        <view style="margin-top: 20rpx">
          <z-button @click="() => (isStart3 = true)" type="primary"
            >从个位停止</z-button
          >
        </view>
      </demo-block>
      <demo-block title="翻转非数字内容">
        <z-rolling-text
          :text-list="textList"
          :duration="1"
          :auto-start="isStartNoNumberType"
        />
        <view style="margin-top: 20rpx">
          <z-button @click="() => (isStartNoNumberType = true)" type="primary"
            >开始</z-button
          >
        </view>
      </demo-block>

      <demo-block title="自定义样式">
        <view class="my-rolling-text">
          <z-rolling-text
            :start-num="12345"
            :target-num="54321"
            :auto-start="isStart4"
            :height="54"
          />
        </view>
      </demo-block>

      <demo-block title="自定义样式">
        <view class="my-rolling-text">
          <z-rolling-text
            ref="rollingTextRef"
            :start-num="0"
            :target-num="54321"
            :auto-start="false"
            :height="54"
          />
        </view>
        <z-grid
          clickable
          :column-num="2"
          :custom-style="{ 'margin-top': '20rpx' }"
        >
          <z-grid-item icon="play-circle" text="开始" @click="start" />
          <z-grid-item icon="reload" text="重置" @click="reset" />
        </z-grid>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const isStart = ref(false)
const isStart2 = ref(false)
const isStart3 = ref(false)
const isStart4 = ref(false)

const isStartNoNumberType = ref(false)
const textList = ref([
  'aaaaa',
  'bbbbb',
  'ccccc',
  'ddddd',
  'eeeee',
  'fffff',
  'ggggg'
])

const rollingTextRef = ref()
const start = () => {
  rollingTextRef.value?.start()
}
const reset = () => {
  rollingTextRef.value?.reset()
}
</script>
<style lang="scss" scoped>
.demo-rolling-text {
  .my-rolling-text {
    --z-rolling-text-background: #1989fa;
    --z-rolling-text-color: white;
    --z-rolling-text-font-size: 48rpx;
    --z-rolling-text-gap: 12rpx;
    --z-rolling-text-item-border-radius: 10rpx;
    --z-rolling-text-item-width: 80rpx;
  }
}
</style>
