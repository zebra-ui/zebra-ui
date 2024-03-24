<template>
  <DemoPage title="Swipe">
    <view class="demo-swipe">
      <demo-block title="基础用法">
        <z-swipe indicator-color="#ffffff">
          <z-swipe-item
            v-for="(item, index) in 4"
            :key="index"
            :custom-style="customStyle"
            >{{ item }}</z-swipe-item
          >
        </z-swipe>
      </demo-block>
      <demo-block title="自动播放">
        <z-swipe autoplay="1000" indicator-color="#ffffff">
          <z-swipe-item
            v-for="(item, index) in 4"
            :key="index"
            :custom-style="customStyle"
            >{{ item }}</z-swipe-item
          >
        </z-swipe>
      </demo-block>
      <demo-block title="纵向">
        <z-swipe
          vertical
          indicator-color="#ffffff"
          :custom-style="{ height: '300rpx' }"
        >
          <z-swipe-item
            v-for="(item, index) in 4"
            :key="index"
            :custom-style="customStyle"
            >{{ item }}</z-swipe-item
          >
        </z-swipe>
      </demo-block>
      <demo-block title="事件">
        <z-swipe @change="onChange">
          <z-swipe-item
            v-for="(item, index) in 4"
            :key="index"
            :custom-style="customStyle"
            >{{ item }}</z-swipe-item
          >
        </z-swipe>
      </demo-block>
      <demo-block title="自定义宽高">
        <z-swipe :loop="false" :width="200">
          <z-swipe-item
            v-for="(item, index) in 4"
            :key="index"
            :custom-style="customStyle"
            >{{ item }}</z-swipe-item
          >
        </z-swipe>
      </demo-block>
      <demo-block title="自定义指示器">
        <z-swipe :show-indicators="false">
          <z-swipe-item
            v-for="(item, index) in 4"
            :key="index"
            :custom-style="customStyle"
            >{{ item }}</z-swipe-item
          >
          <template #indicator="{ active, total }">
            <view class="custom-indicator">{{ active + 1 }}/{{ total }}</view>
          </template>
        </z-swipe>
      </demo-block>
    </view>
  </DemoPage>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const customStyle = ref({
  color: '#ffffff',
  'font-size': '40rpx',
  'line-height': '300rpx',
  'text-align': 'center',
  'background-color': '#39a9ed'
})
const onChange = (index: number) => console.log('当前 Swipe 索引：' + index)
</script>

<style lang="scss" scoped>
.demo-swipe {
  .custom-indicator {
    position: absolute;
    right: 10rpx;
    bottom: 10rpx;
    padding: 4rpx 10rpx;
    font-size: 24rpx;
    color: #fff;
    background: rgb(0 0 0 / 10%);
  }
}
</style>
