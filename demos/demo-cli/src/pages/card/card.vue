<template>
  <DemoPage title="Card">
    <view class="demo-card">
      <demo-block title="基础用法">
        <z-card :title="title" header-bordered>
          {{ infoMessage }}
          <template #actions>
            <z-button type="primary" size="mini" @click="clickHandler"
              >操作</z-button
            >
          </template>
        </z-card>
      </demo-block>
      <demo-block title="副标题与描述">
        <z-card :title="title" :subtitle="subtitle" :description="description">
          {{ infoMessage }}
          <template #actions>
            <z-button type="primary" size="mini" @click="clickHandler"
              >操作</z-button
            >
          </template>
        </z-card>
      </demo-block>
      <demo-block title="底部">
        <z-card :cover="cover">
          <template #footer>
            <view class="footer">
              <z-button icon="appstore"></z-button>
              <z-button icon="like"></z-button>
              <z-button icon="heart"></z-button>
            </view>
          </template>
        </z-card>
      </demo-block>
      <demo-block title="全部展示">
        <z-card
          :title="title"
          :cover="cover"
          :subtitle="subtitle"
          :description="description"
        >
          {{ infoMessage }}
          <template #actions>
            <z-button type="primary" size="mini" @click="clickHandler"
              >操作</z-button
            >
          </template>
          <template #footer>
            <view class="footer">
              <z-button icon="appstore"></z-button>
              <z-button icon="like"></z-button>
              <z-button icon="heart"></z-button>
            </view>
          </template>
        </z-card>
      </demo-block>
    </view>
    <z-toast ref="zToast"></z-toast>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { showToast } from '@zebra-ui/uniapp'
const title = ref('标题')
const subtitle = ref('副标题')
const description = ref('这是一段文字描述')
const cover = ref(
  'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg'
)
const infoMessage = ref(
  '仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。'
)
const clickHandler = () => {
  showToast('操作')
}
</script>
<style lang="scss" scoped>
.demo-card {
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
