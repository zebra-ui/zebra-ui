<template>
  <DemoPage title="Cell">
    <view class="demo-cell">
      <demo-block title="基础用法">
        <z-cell-group>
          <z-cell title="单元格" value="内容" />
          <z-cell title="单元格" value="内容" label="描述信息" />
        </z-cell-group>
      </demo-block>
      <demo-block title="卡片风格">
        <z-cell-group inset>
          <z-cell title="单元格" value="内容" />
          <z-cell title="单元格" value="内容" label="描述信息" />
        </z-cell-group>
      </demo-block>
      <demo-block title="尺寸">
        <z-cell-group>
          <z-cell title="单元格" value="内容" size="large" />
          <z-cell title="单元格" value="内容" label="描述信息" size="large" />
        </z-cell-group>
      </demo-block>
      <demo-block title="图标">
        <z-cell-group>
          <z-cell title="单元格" value="内容" icon="appstore" />
          <z-cell title="单元格" value="内容" icon="setting" />
        </z-cell-group>
      </demo-block>
      <demo-block title="箭头">
        <z-cell-group>
          <z-cell title="单元格" is-link />
          <z-cell title="单元格" is-link value="内容" />
          <z-cell title="单元格" is-link arrow-direction="down" value="内容" />
        </z-cell-group>
      </demo-block>
      <demo-block title="分组标题">
        <z-cell-group title="分组1">
          <z-cell title="单元格" value="内容" />
        </z-cell-group>
        <z-cell-group title="分组2">
          <z-cell title="单元格" value="内容" />
        </z-cell-group>
      </demo-block>
      <demo-block title="插槽">
        <z-cell value="内容" is-link>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <text class="custom-title">单元格</text>
            <z-tag type="primary">标签</z-tag>
          </template>
        </z-cell>

        <z-cell title="单元格" icon="creditcard">
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <z-icon name="search" class="search-icon" />
          </template>
        </z-cell>
      </demo-block>
      <demo-block title="垂直居中">
        <z-cell center title="单元格" value="内容" label="描述信息" />
      </demo-block>
    </view>
  </DemoPage>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.demo-cell {
  .custom-title {
    margin-right: 10rpx;
  }
}
</style>
