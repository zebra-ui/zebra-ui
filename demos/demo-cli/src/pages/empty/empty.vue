<template>
  <DemoPage title="Empty">
    <view class="demo-empty">
      <demo-block title="基础用法">
        <z-empty description="描述文字" />
      </demo-block>
      <demo-block title="图片类型">
        <z-tabs v-model:active="active">
          <z-tab name="error" title="通用错误">
            <z-empty image="error" description="描述文字" />
          </z-tab>
          <z-tab name="network" title="网络错误">
            <z-empty image="network" description="描述文字" />
          </z-tab>
          <z-tab name="search" title="搜索提示">
            <z-empty image="search" description="描述文字" />
          </z-tab>
        </z-tabs>
      </demo-block>
      <demo-block title="自定义大小">
        <z-empty image-size="500rpx" description="描述文字" />
      </demo-block>
      <demo-block title="自定义图片">
        <z-empty
          image="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg"
          :image-size="80"
          description="描述文字"
        />
      </demo-block>

      <demo-block title="底部内容">
        <z-empty description="描述文字">
          <z-button
            type="primary"
            round
            :custom-style="{ width: '300rpx' }"
            class="bottom-button"
          >
            按钮
          </z-button>
        </z-empty>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const active = ref('error')
</script>
