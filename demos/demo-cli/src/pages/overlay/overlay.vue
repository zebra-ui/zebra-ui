<template>
  <DemoPage title="Overlay">
    <view class="demo-overlay">
      <demo-block title="基础用法">
        <z-button type="primary" text="显示遮罩层" @click="show = true" />
        <z-overlay :show="show" @click="show = false" />
      </demo-block>
      <demo-block title="嵌入内容">
        <z-button type="primary" text="嵌入内容" @click="showContent = true" />
        <z-overlay :show="showContent" @click="showContent = false">
          <view class="wrapper">
            <view class="block" @click.stop />
          </view>
        </z-overlay>
      </demo-block>
      <demo-block title="设置层级">
        <z-button type="primary" text="设置层级" @click="showIndex = true" />
        <z-overlay :show="showIndex" z-index="100" @click="showIndex = false" />
      </demo-block>
    </view>
  </DemoPage>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
const showContent = ref(false)
const showIndex = ref(false)
</script>

<style lang="scss" scoped>
.demo-overlay {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 240rpx;
    height: 240rpx;
    background-color: #fff;
  }
}
</style>
