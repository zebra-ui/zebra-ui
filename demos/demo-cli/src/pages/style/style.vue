<template>
  <DemoPage title="Style">
    <view class="demo-style">
      <demo-block title="文本省略">
        <view class="z-ellipsis"
          >这是一段文字，超出一行会显示省略号。这是一段文字，超出一行会显示省略号</view
        >
        <view class="text-top z-multi-ellipsis--l2"
          >这是一段文字，超出两行会显示省略号。这是一段文字，超出两行会显示省略号。这是一段文字，超出两行会显示省略号</view
        >
      </demo-block>
      <demo-block title="细边框">
        <view class="z-hairline--top" />
      </demo-block>
    </view>
  </DemoPage>
</template>
<style lang="scss" scoped>
.demo-style {
  font-size: 28rpx;
  color: var(--zebra-text-color);

  .text-top {
    margin-top: 30rpx;
  }
}
</style>
