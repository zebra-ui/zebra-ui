<template>
  <DemoPage title="Ellipsis">
    <view class="demo-text-ellipsis">
      <demo-block title="基础用法">
        <z-text-ellipsis
          :content="text1"
          :custom-style="{ 'font-size': '26rpx' }"
        />
      </demo-block>
      <demo-block title="展开/收起">
        <z-text-ellipsis
          :content="text2"
          :custom-style="{ 'font-size': '26rpx' }"
          expand-text="展开"
          collapse-text="收起"
        />
      </demo-block>
      <demo-block title="自定义展示行数">
        <z-text-ellipsis
          rows="3"
          :content="text3"
          :custom-style="{ 'font-size': '26rpx' }"
          expand-text="展开"
          collapse-text="收起"
        />
      </demo-block>
      <demo-block title="头部省略">
        <z-text-ellipsis
          rows="1"
          :content="text3"
          :custom-style="{ 'font-size': '26rpx' }"
          expand-text="展开"
          collapse-text="收起"
          position="start"
        />
      </demo-block>

      <demo-block title="中部省略">
        <z-text-ellipsis
          rows="2"
          :content="text3"
          :custom-style="{ 'font-size': '26rpx' }"
          expand-text="展开"
          collapse-text="收起"
          position="middle"
        />
      </demo-block>

      <demo-block title="自定义操作内容">
        <z-text-ellipsis
          :content="text1"
          :custom-style="{ 'font-size': '26rpx' }"
        >
          <template #action="{ expanded }">
            {{ expanded ? '收起' : '展开' }}
          </template>
        </z-text-ellipsis>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const text1 = ref(
  'zebra-swiper 是基于uniapp开发的一款适配多端的移动端轮播组件。'
)
const text2 = ref(
  'uniapp 的swiper组件存在很大的局限性，无法完成一些复杂的轮播效果。而zebra-swiper不仅可以实现一些3D轮播效果，还可以通过参数来定义你想要的效果。'
)
const text3 = ref(
  'zebra-swiper 是基于uniapp开发的一款移动端轮播组件。uniapp 的swiper组件存在很大的局限性，无法完成一些复杂的轮播效果。而zebra-swiper不仅可以实现一些3D轮播效果，还可以通过参数来定义你想要的效果。我们正在全面向swiperjs (opens new window)看齐，并且在小程序中，依然可以实现炫酷的轮播效果。'
)
</script>
<style lang="scss" scoped>
.demo-text-ellipsis {
  color: var(--z-text-color);
}
</style>
