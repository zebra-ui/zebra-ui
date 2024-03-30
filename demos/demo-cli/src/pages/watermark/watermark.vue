<template>
  <DemoPage title="Watermark">
    <view class="demo-watermark">
      <demo-block title="基础用法">
        <view class="demo-watermark-wrapper">
          <z-watermark content="Zebra" :full-page="false" />
        </view>
      </demo-block>
      <demo-block title="图片水印">
        <view class="demo-watermark-wrapper">
          <z-watermark
            :rotate="0"
            image="https://assets-1256020106.cos.ap-beijing.myqcloud.com/zebra-ui/images/logo.png"
            :opacity="0.2"
            :full-page="false"
          />
        </view>
      </demo-block>

      <demo-block title="自定义间隔">
        <view class="demo-watermark-wrapper">
          <z-watermark
            :rotate="0"
            image="https://assets-1256020106.cos.ap-beijing.myqcloud.com/zebra-ui/images/logo.png"
            :gap-x="30"
            :gap-y="10"
            :opacity="0.2"
            :full-page="false"
          />
        </view>
      </demo-block>

      <demo-block title="自定义倾斜角度">
        <view class="demo-watermark-wrapper">
          <z-watermark
            image="https://assets-1256020106.cos.ap-beijing.myqcloud.com/zebra-ui/images/logo.png"
            :rotate="22"
            :opacity="0.2"
            :full-page="false"
          />
        </view>
      </demo-block>

      <demo-block title="显示范围">
        <view class="demo-watermark-wrapper">
          <z-button type="primary" @click="fullPage = !fullPage">
            切换
          </z-button>
          <z-watermark
            :rotate="0"
            :full-page="fullPage"
            :opacity="0.2"
            image="https://assets-1256020106.cos.ap-beijing.myqcloud.com/zebra-ui/images/logo.png"
          >
          </z-watermark>
        </view>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const fullPage = ref(false)
</script>
<style lang="scss" scoped>
.demo-watermark {
  &-wrapper {
    position: relative;
    height: 300rpx;
    padding: var(--z-padding-md);
    background-color: var(--z-background-2);
  }
}
</style>
