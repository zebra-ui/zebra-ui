<template>
  <DemoPage title="Layout">
    <view class="demo-layout">
      <demo-block title="基础用法">
        <z-row>
          <z-col span="8">span: 8</z-col>
          <z-col span="8">span: 8</z-col>
          <z-col span="8">span: 8</z-col>
        </z-row>
        <z-row>
          <z-col span="4">span: 4</z-col>
          <z-col span="10" offset="4">offset: 4, span: 10</z-col>
        </z-row>
        <z-row>
          <z-col offset="12" span="12">offset: 12, span: 12</z-col>
        </z-row>
      </demo-block>
      <demo-block title="水平间距">
        <z-row gutter="20">
          <z-col span="8">span: 8</z-col>
          <z-col span="8">span: 8</z-col>
          <z-col span="8">span: 8</z-col>
        </z-row>
      </demo-block>
      <demo-block title="垂直间距">
        <z-row :gutter="[20, 20]">
          <z-col span="12">span: 12</z-col>
          <z-col span="12">span: 12</z-col>
          <z-col span="12">span: 12</z-col>
          <z-col span="12">span: 12</z-col>
        </z-row>
      </demo-block>
      <demo-block title="对齐方式">
        <z-row justify="center">
          <z-col span="6">span: 6</z-col>
          <z-col span="6">span: 6</z-col>
          <z-col span="6">span: 6</z-col>
        </z-row>
        <z-row justify="end">
          <z-col span="6">span: 6</z-col>
          <z-col span="6">span: 6</z-col>
          <z-col span="6">span: 6</z-col>
        </z-row>
        <z-row justify="space-between">
          <z-col span="6">span: 6</z-col>
          <z-col span="6">span: 6</z-col>
          <z-col span="6">span: 6</z-col>
        </z-row>
        <z-row justify="space-around">
          <z-col span="6">span: 6</z-col>
          <z-col span="6">span: 6</z-col>
          <z-col span="6">span: 6</z-col>
        </z-row>
      </demo-block>
    </view>
  </DemoPage>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.demo-layout {
  ::v-deep .z-col {
    margin-bottom: 20rpx;
    font-size: 26rpx;
    line-height: 60rpx;
    color: var(--z-white);
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
