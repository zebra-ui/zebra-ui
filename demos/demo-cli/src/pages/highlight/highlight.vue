<template>
  <DemoPage title="Highlight">
    <view class="demo-highlight">
      <demo-block title="基础用法">
        <view class="text-content">
          <z-highlight :keywords="keywords" :source-string="text" />
        </view>
      </demo-block>
      <demo-block title="多字符匹配">
        <view class="text-content">
          <z-highlight :keywords="keywordsMore" :source-string="text" />
        </view>
      </demo-block>
      <demo-block title="自定义类名及样式">
        <view class="text-content">
          <z-highlight
            :keywords="keywordsMore"
            :source-string="text"
            highlight-class="text-content-custom"
          />
        </view>
        <view class="text-content">
          <z-highlight
            :keywords="keywordsMore"
            :source-string="text"
            :highlight-style="{ color: 'var(--z-red)' }"
          />
        </view>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
const text = 'zebra-swiper是基于uniapp开发的一款移动端轮播组件。'
const keywords = 'zebra-swiper'
const keywordsMore = ['zebra-swiper', 'uniapp', '移动端']
</script>
<style lang="scss" scoped>
.demo-highlight {
  .text-content {
    font-size: 28rpx;
    line-height: 40rpx;
    color: var(--zebra-text-color);

    ::v-deep &-custom {
      font-weight: bold;
    }
  }
}
</style>
