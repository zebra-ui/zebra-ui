<template>
  <DemoPage title="Tag">
    <view class="demo-tag">
      <demo-block title="基础用法">
        <z-cell title="primary类型">
          <template #value>
            <z-tag type="primary">标签</z-tag>
          </template>
        </z-cell>
        <z-cell title="success类型">
          <template #value>
            <z-tag type="success">标签</z-tag>
          </template>
        </z-cell>
        <z-cell title="danger类型">
          <template #value>
            <z-tag type="danger">标签</z-tag>
          </template>
        </z-cell>
        <z-cell title="warning类型">
          <template #value>
            <z-tag type="warning">标签</z-tag>
          </template>
        </z-cell>
      </demo-block>
      <demo-block title="样式风格">
        <z-cell title="空心样式">
          <template #value>
            <z-tag plain type="primary">标签</z-tag>
          </template>
        </z-cell>
        <z-cell title="圆角样式">
          <template #value>
            <z-tag round type="primary">标签</z-tag>
          </template>
        </z-cell>
        <z-cell title="标记样式">
          <template #value>
            <z-tag mark type="primary">标签</z-tag>
          </template>
        </z-cell>
        <z-cell title="可关闭标签">
          <template #value>
            <z-tag
              closeable
              :show="show"
              size="medium"
              type="primary"
              @close="close"
            >
              标签
            </z-tag>
          </template>
        </z-cell>
      </demo-block>

      <demo-block title="标签大小">
        <z-cell title="小号标签">
          <template #value>
            <z-tag type="primary">标签</z-tag>
          </template>
        </z-cell>
        <z-cell title="中号标签">
          <template #value>
            <z-tag type="primary" size="medium">标签</z-tag>
          </template>
        </z-cell>
        <z-cell title="大号标签">
          <template #value>
            <z-tag type="primary" size="large">标签</z-tag>
          </template>
        </z-cell>
      </demo-block>
      <demo-block title="自定义颜色">
        <z-cell title="背景颜色">
          <template #value>
            <z-tag color="#7232dd">标签</z-tag>
          </template>
        </z-cell>
        <z-cell title="文字颜色">
          <template #value>
            <z-tag color="#ffe1e1" text-color="#ad0000">标签</z-tag>
          </template>
        </z-cell>
        <z-cell title="空心颜色">
          <template #value>
            <z-tag color="#7232dd" plain>标签</z-tag>
          </template>
        </z-cell>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(true)
const close = () => {
  show.value = false
}
</script>
