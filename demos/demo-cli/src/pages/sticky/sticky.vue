<template>
  <DemoPage title="Sticky">
    <view class="demo-sticky">
      <demo-block title="基础用法">
        <z-sticky custom-navbar>
          <z-button type="primary">基础用法</z-button>
        </z-sticky>
      </demo-block>
      <demo-block title="吸顶距离">
        <z-sticky custom-navbar :offset-top="50">
          <z-button type="primary" :custom-style="{ 'margin-left': '30%' }"
            >基础用法</z-button
          >
        </z-sticky>
      </demo-block>
      <demo-block title="指定容器">
        <view id="container" style="height: 300rpx; background-color: #fff">
          <z-sticky custom-navbar :container="container">
            <z-button
              type="warning"
              :custom-style="{ 'margin-left': '300rpx' }"
            >
              指定容器
            </z-button>
          </z-sticky>
        </view>
      </demo-block>
      <demo-block title="嵌套在 scroll-view 内使用">
        <scroll-view
          @scroll="onScroll"
          scroll-y
          id="scroller"
          style="height: 400rpx; background-color: #fff"
        >
          <view style="height: 800rpx; padding-top: 50px">
            <z-sticky :scroll-top="scrollTop" :offset-top="offsetTop">
              <z-button type="danger"> 嵌套在 scroll-view 内 </z-button>
            </z-sticky>
          </view>
        </scroll-view>
      </demo-block>
    </view>
  </DemoPage>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const container = ref({})
onMounted(() => {
  const query = uni.createSelectorQuery()
  query
    .select('#container')
    .boundingClientRect((data) => {
      container.value = data
    })
    .exec()
})

const scrollTop = ref(0)
const offsetTop = ref(0)

const onScroll = (event: any) => {
  uni
    .createSelectorQuery()
    .select('#scroller')
    .boundingClientRect((res: any) => {
      scrollTop.value = event.detail.scrollTop
      offsetTop.value = res.top
    })
    .exec()
}
</script>

<style scoped lang="scss">
.demo-sticky {
  height: 180vh;
}
</style>
