<template>
  <DemoPage title="Skeleton">
    <view class="demo-skeleton">
      <demo-block title="基础用法">
        <z-skeleton title :row="3" />
      </demo-block>
      <demo-block title="显示头像">
        <z-skeleton title avatar :row="3" />
      </demo-block>

      <demo-block title="显示子组件">
        <view class="demo-skeleton-switch">
          <z-switch v-model="show" />
        </view>
        <z-skeleton title avatar :row="2" :loading="!show">
          <view class="demo-skeleton-preview">
            <image src="https://cdn.zebraui.com/zebra-ui/images/logo.png" />
            <view class="demo-skeleton-content">
              <view class="title">标题</view>
              <view class="desc"
                >zebra-swiper 是基于uniapp开发的一款移动端轮播组件。</view
              >
            </view>
          </view>
        </z-skeleton>
      </demo-block>

      <demo-block title="自定义内容">
        <z-skeleton>
          <template #template>
            <view :style="{ display: 'flex', width: '100%' }">
              <z-skeleton-image />
              <view :style="{ flex: 1, marginLeft: '32rpx' }">
                <z-skeleton-paragraph row-width="60%" />
                <z-skeleton-paragraph />
                <z-skeleton-paragraph />
                <z-skeleton-paragraph />
              </view>
            </view>
          </template>
        </z-skeleton>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(false)
</script>
<style lang="scss" scoped>
.demo-skeleton {
  color: var(--z-text-color);

  &-switch {
    margin-bottom: 30rpx;
  }

  &-preview {
    display: flex;

    image {
      flex-shrink: 0;
      width: 100rpx;
      height: 100rpx;
      margin-right: var(--van-padding-md);
    }
  }

  &-content {
    margin-top: 16rpx;

    .title {
      font-size: 36rpx;
      line-height: 50rpx;
    }

    .desc {
      font-size: 26rpx;
      line-height: 40rpx;
    }
  }
}
</style>
