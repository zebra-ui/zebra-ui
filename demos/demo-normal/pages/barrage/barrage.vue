<template>
  <DemoPage title="Barrage">
    <view class="demo-barrage">
      <demo-block title="基础用法">
        <z-barrage v-model="list">
          <view class="video"></view>
        </z-barrage>
        <view style="margin-top: 20rpx">
          <z-button @click="add" type="primary" size="small"> 弹幕 </z-button>
        </view>
      </demo-block>
      <demo-block title="视频弹幕">
        <z-barrage v-model="videoList" ref="videoBarrage" :auto-play="false">
          <view class="video"></view>
        </z-barrage>
        <view style="margin-top: 10px">
          <z-button
            @click="videoAdd"
            type="primary"
            size="small"
            :disabled="!isPlay"
          >
            弹幕
          </z-button>
          <z-button
            :custom-style="{ 'margin-left': '20rpx' }"
            @click="toggle()"
            size="small"
          >
            {{ isPlay ? '暂停' : '播放' }}
          </z-button>
        </view>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
const defaultList = [
  { id: 11, text: 'zebra-ui' },
  { id: 12, text: '666666' },
  { id: 13, text: '哈哈哈哈哈哈' },
  { id: 14, text: 'uniapp' },
  { id: 15, text: 'zebra-swiper' },
  { id: 16, text: '嘻嘻嘻' },
  {
    id: 17,
    text: '这条弹幕很长这条弹幕很长这条弹幕很长这条弹幕很长这条弹幕很长'
  }
]
const list = ref([...defaultList])
const add = () => {
  list.value.push({ id: Math.random(), text: 'Barrage' })
}
const videoList = ref([...defaultList])
const videoBarrage = ref()
const videoAdd = () => {
  videoList.value.push({ id: Math.random(), text: 'Barrage' })
}

const isPlay = ref(false)

const toggle = (value = !isPlay.value) => {
  isPlay.value = value
}

watch(isPlay, () => {
  if (isPlay.value) videoBarrage.value?.play()
  else videoBarrage.value?.pause()
})
</script>
<style lang="scss" scoped>
.demo-barrage {
  .video {
    width: 100%;
    height: 300rpx;
    background-color: var(--z-gray-2);
  }
}
</style>
