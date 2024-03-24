<template>
  <DemoPage title="Divider">
    <view class="demo-divider">
      <demo-block title="基础用法">
        <z-divider />
      </demo-block>
      <demo-block title="展示文本">
        <z-divider> 文字 </z-divider>
      </demo-block>
      <demo-block title="内容位置">
        <z-divider content-position="left"> 文字 </z-divider>
        <z-divider content-position="right"> 文字 </z-divider>
      </demo-block>
      <demo-block title="虚线">
        <z-divider dashed :hairline="false"> 文字 </z-divider>
      </demo-block>
      <demo-block title="自定义样式">
        <z-divider
          :custom-style="{
            borderColor: '#1989fa',
            color: '#1989fa',
            padding: '0 32rpx'
          }"
        >
          文字
        </z-divider>
      </demo-block>
      <demo-block title="垂直">
        <div class="content">
          <z-divider vertical />
          文字
          <z-divider vertical dashed />
          文字
          <z-divider vertical :hairline="false" />
          文字
          <z-divider vertical :custom-style="{ borderColor: '#1989fa' }" />
        </div>
      </demo-block>
    </view>
  </DemoPage>
</template>
<style lang="scss" scoped>
.demo-divider {
  .content {
    padding: 0 var(--z-padding-md);
    font-size: var(--z-font-size-md);
    color: var(--z-text-color-2);
  }
}
</style>
