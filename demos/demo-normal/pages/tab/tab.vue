<template>
  <DemoPage title="Tab">
    <view class="demo-tab">
      <demo-block title="基础用法">
        <z-tabs v-model:active="active">
          <z-tab
            v-for="(item, index) in 4"
            :key="index"
            :title="`标签 ${item}`"
          >
            <view class="demo-tab-item"> 内容{{ item }} </view>
          </z-tab>
        </z-tabs>
      </demo-block>
      <demo-block title="通过名称匹配">
        <z-tabs v-model:active="activeName">
          <z-tab
            v-for="(item, index) in 4"
            :key="index"
            :title="`标签 ${item}`"
            :name="`name${item}`"
          >
            <view class="demo-tab-item"> 内容{{ item }} </view>
          </z-tab>
        </z-tabs>
      </demo-block>
      <demo-block title="吸顶">
        <z-tabs v-model:active="active" sticky custom-navbar>
          <z-tab
            v-for="(item, index) in 4"
            :key="index"
            :title="`标签 ${item}`"
          >
            <view class="demo-tab-item"> 内容{{ item }} </view>
          </z-tab>
        </z-tabs>
      </demo-block>
      <demo-block title="标签栏滚动">
        <z-tabs v-model:active="activeScroll">
          <z-tab
            v-for="(item, index) in 8"
            :key="index"
            :title="`标签 ${item}`"
          >
            <view class="demo-tab-item"> 内容{{ item }} </view>
          </z-tab>
        </z-tabs>
      </demo-block>
      <demo-block title="禁用标签">
        <z-tabs v-model:active="activeDisabled">
          <z-tab
            v-for="(item, index) in 4"
            :key="index"
            :title="`标签 ${item}`"
            :disabled="index == 2"
          >
            <view class="demo-tab-item"> 内容{{ item }} </view>
          </z-tab>
        </z-tabs>
      </demo-block>
      <demo-block title="样式风格">
        <z-tabs v-model:active="active" type="card">
          <z-tab
            v-for="(item, index) in 4"
            :key="index"
            :title="`标签 ${item}`"
          >
            <view class="demo-tab-item"> 内容{{ item }} </view>
          </z-tab>
        </z-tabs>
      </demo-block>
      <demo-block title="点击事件">
        <z-tabs v-model:active="active" @click-tab="onClickTab">
          <z-tab
            v-for="(item, index) in 4"
            :key="index"
            :title="`标签 ${item}`"
          >
            <view class="demo-tab-item"> 内容{{ item }} </view>
          </z-tab>
        </z-tabs>
      </demo-block>
      <demo-block title="收缩布局">
        <z-tabs v-model:active="active" shrink>
          <z-tab
            v-for="(item, index) in 4"
            :key="index"
            :title="`标签 ${item}`"
          >
            <view class="demo-tab-item"> 内容{{ item }} </view>
          </z-tab>
        </z-tabs>
        <z-tabs v-model:active="active" shrink type="card">
          <z-tab
            v-for="(item, index) in 4"
            :key="index"
            :title="`标签 ${item}`"
          >
            <view class="demo-tab-item"> 内容{{ item }} </view>
          </z-tab>
        </z-tabs>
      </demo-block>
      <demo-block title="自定义标题">
        <z-tabs v-model:active="active">
          <template #title="{ item }">
            <z-icon name="star" />选项 {{ item.slotContent }}
          </template>
          <z-tab v-for="(item, index) in 4" :key="index" :slot-content="item">
            <view class="demo-tab-item"> 内容{{ item }} </view>
          </z-tab>
        </z-tabs>
      </demo-block>
      <demo-block title="切换动画">
        <z-tabs v-model:active="active" animated>
          <z-tab
            v-for="(item, index) in 4"
            :key="index"
            :title="`标签 ${item}`"
          >
            <view class="demo-tab-item"> 内容{{ item }} </view>
          </z-tab>
        </z-tabs>
      </demo-block>
      <demo-block title="滑动切换">
        <z-tabs v-model:active="active" swipeable>
          <z-tab
            v-for="(item, index) in 4"
            :key="index"
            :title="`标签 ${item}`"
          >
            <view class="demo-tab-item"> 内容{{ item }} </view>
          </z-tab>
        </z-tabs>
      </demo-block>
      <demo-block title="滚动导航">
        <z-tabs v-model:active="activeScrollspy" scrollspy>
          <view style="height: 1000rpx">
            <z-tab
              v-for="(item, index) in 18"
              :key="index"
              :title="`标签 ${item}`"
            >
              <view class="demo-tab-item"> 内容{{ item }} </view>
            </z-tab>
          </view>
        </z-tabs>
      </demo-block>
      <demo-block title="异步切换">
        <z-tabs v-model:active="activeBefore" :before-change="beforeChange">
          <z-tab
            v-for="(item, index) in 4"
            :key="index"
            :title="`标签 ${item}`"
          >
            <view class="demo-tab-item"> 内容{{ item }} </view>
          </z-tab>
        </z-tabs>
      </demo-block>
      <z-toast ref="zToast"></z-toast>
    </view>
  </DemoPage>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from '../../uni_modules/zebra-ui'
const active = ref(0)
const activeScroll = ref(0)
const activeScrollspy = ref(0)
const activeDisabled = ref(0)
const activeBefore = ref(0)
const activeName = ref('name1')
const onClickTab = ({ title }: any) => showToast(title)
const beforeChange = (index: any) => {
  if (index === 1) {
    return false
  }
  return new Promise((resolve) => {
    resolve(index !== 3)
  })
}
</script>

<style scoped lang="scss">
.demo-tab {
  .demo-tab-item {
    padding: 30rpx;
    background-color: var(--z-line-color);
  }
}
</style>
