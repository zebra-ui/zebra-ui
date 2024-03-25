<template>
  <!-- #ifdef MP-ALIPAY -->
  <!-- 支付宝小程序必须声明是否使用插槽 -->
  <view class="demo-badge">
    <demo-block card title="基本使用">
      <view class="demo-badge-list">
        <z-badge :content="5" use-slot>
          <view class="child" />
        </z-badge>
        <z-badge content="10" customStyle="margin-left:30rpx;" use-slot>
          <view class="child" />
        </z-badge>
        <z-badge content="Hot" customStyle="margin-left:30rpx;" use-slot>
          <view class="child" />
        </z-badge>
        <z-badge dot customStyle="margin-left:30rpx;" use-slot>
          <view class="child" />
        </z-badge>
      </view>
    </demo-block>
    <demo-block title="最大值">
      <view class="demo-badge-list">
        <z-badge content="20" max="9" use-slot>
          <view class="child" />
        </z-badge>
        <z-badge
          content="50"
          max="20"
          customStyle="margin-left:30rpx;"
          use-slot
        >
          <view class="child" />
        </z-badge>
        <z-badge
          content="200"
          max="99"
          customStyle="margin-left:30rpx;"
          use-slot
        >
          <view class="child" />
        </z-badge>
      </view>
    </demo-block>
    <demo-block title="自定义颜色">
      <view class="demo-badge-list">
        <z-badge content="5" color="#1989fa" use-slot>
          <view class="child" />
        </z-badge>
        <z-badge
          content="10"
          color="#1989fa"
          customStyle="margin-left:30rpx;"
          use-slot
        >
          <view class="child" />
        </z-badge>
        <z-badge dot color="#1989fa" customStyle="margin-left:30rpx;" use-slot>
          <view class="child" />
        </z-badge>
      </view>
    </demo-block>
    <demo-block title="自定义徽标内容">
      <view class="demo-badge-list">
        <z-badge use-slot use-content-slot>
          <view class="child" />
          <template #content>
            <z-icon name="done" size="20rpx" />
          </template>
        </z-badge>
        <z-badge use-slot use-content-slot customStyle="margin-left:30rpx;">
          <view class="child" />
          <template #content>
            <z-icon name="mail" size="20rpx" />
          </template>
        </z-badge>
        <z-badge use-slot use-content-slot customStyle="margin-left:30rpx;">
          <view class="child" />
          <template #content>
            <z-icon name="download" size="20rpx" />
          </template>
        </z-badge>
      </view>
    </demo-block>
    <demo-block title="独立展示">
      <view class="demo-badge-list">
        <z-badge content="20" customStyle="margin-left:30rpx;" />
        <z-badge content="200" max="99" customStyle="margin-left:30rpx;" />
      </view>
    </demo-block>
  </view>
  <!-- #endif -->
  <!-- #ifndef MP-ALIPAY -->
  <view class="demo-badge">
    <demo-block card title="基本使用">
      <view class="demo-badge-list">
        <z-badge :content="5">
          <view class="child" />
        </z-badge>
        <z-badge content="10" customStyle="margin-left:30rpx;">
          <view class="child" />
        </z-badge>
        <z-badge content="Hot" customStyle="margin-left:30rpx;">
          <view class="child" />
        </z-badge>
        <z-badge dot customStyle="margin-left:30rpx;">
          <view class="child" />
        </z-badge>
      </view>
    </demo-block>
    <demo-block title="最大值">
      <view class="demo-badge-list">
        <z-badge content="20" max="9">
          <view class="child" />
        </z-badge>
        <z-badge content="50" max="20" customStyle="margin-left:30rpx;">
          <view class="child" />
        </z-badge>
        <z-badge content="200" max="99" customStyle="margin-left:30rpx;">
          <view class="child" />
        </z-badge>
      </view>
    </demo-block>
    <demo-block title="自定义颜色">
      <view class="demo-badge-list">
        <z-badge content="5" color="#1989fa">
          <view class="child" />
        </z-badge>
        <z-badge content="10" color="#1989fa" customStyle="margin-left:30rpx;">
          <view class="child" />
        </z-badge>
        <z-badge dot color="#1989fa" customStyle="margin-left:30rpx;">
          <view class="child" />
        </z-badge>
      </view>
    </demo-block>
    <demo-block title="自定义徽标内容">
      <view class="demo-badge-list">
        <z-badge use-content-slot>
          <div class="child" />
          <template #content>
            <z-icon name="done" size="20rpx" />
          </template>
        </z-badge>
        <z-badge use-content-slot customStyle="margin-left:30rpx;">
          <div class="child" />
          <template #content>
            <z-icon name="mail" size="20rpx" />
          </template>
        </z-badge>
        <z-badge use-content-slot customStyle="margin-left:30rpx;">
          <div class="child" />
          <template #content>
            <z-icon name="download" size="20rpx" />
          </template>
        </z-badge>
      </view>
    </demo-block>
    <demo-block title="独立展示">
      <view class="demo-badge-list">
        <z-badge content="20" customStyle="margin-left:30rpx;" />
        <z-badge content="200" max="99" customStyle="margin-left:30rpx;" />
      </view>
    </demo-block>
  </view>
  <!-- #endif -->
</template>

<script>
import DemoBlock from "../../components/DemoBlock/DemoBlock.vue";
export default {
  components: {
    DemoBlock,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.demo-badge {
  // background-color: $white;

  .child {
    width: 80rpx;
    height: 80rpx;
    background: $gray-2;
    border-radius: 8rpx;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
