<template>
  <DemoPage title="CountDown">
    <view class="demo-count-down">
      <demo-block title="基础用法">
        <z-count-down :time="time" />
      </demo-block>
      <demo-block title="自定义格式">
        <z-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
      </demo-block>
      <demo-block title="毫秒级渲染">
        <z-count-down millisecond :time="time" format="HH:mm:ss:SS" />
      </demo-block>
      <demo-block title="自定义样式">
        <z-count-down :time="time">
          <template #default="{ current }">
            <text class="block">{{ current.hours }}</text>
            <text class="colon">:</text>
            <text class="block">{{ current.minutes }}</text>
            <text class="colon">:</text>
            <text class="block">{{ current.seconds }}</text>
          </template>
        </z-count-down>
      </demo-block>
      <demo-block title="手动控制">
        <view class="count-content">
          <z-count-down
            ref="countDown"
            millisecond
            :time="3000"
            :auto-start="false"
            format="ss:SSS"
            @finish="onFinish"
          />
        </view>

        <z-grid clickable :column-num="3">
          <z-grid-item icon="play-circle" text="开始" @click="start" />
          <z-grid-item icon="timeout" text="暂停" @click="pause" />
          <z-grid-item icon="reload" text="重置" @click="reset" />
        </z-grid>
      </demo-block>
    </view>
    <z-toast ref="zToast"></z-toast>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// @ts-ignore
import { showToast } from '../../uni_modules/zebra-ui'
const time = ref(30 * 60 * 60 * 1000)
const countDown = ref()

const start = () => {
  countDown.value?.start()
}
const pause = () => {
  countDown.value?.pause()
}
const reset = () => {
  countDown.value?.reset()
}
const onFinish = () => showToast('倒计时结束')
</script>
<style lang="scss" scoped>
.demo-count-down {
  .colon {
    display: inline-block;
    margin: 0 8rpx;
    color: var(--z-primary-color);
  }

  .block {
    display: inline-block;
    width: 44rpx;
    font-size: 24rpx;
    color: #fff;
    text-align: center;
    background-color: var(--z-primary-color);
    border-radius: 8rpx;
  }

  .count-content {
    margin-bottom: 30rpx;
    margin-left: 10rpx;
  }
}
</style>
