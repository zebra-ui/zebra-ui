<template>
  <DemoPage title="Notify">
    <view class="demo-notify">
      <demo-block title="基础用法">
        <z-cell is-link title="基础用法" @click="showBasicNotify" />
      </demo-block>
      <demo-block title="通知类型">
        <z-cell is-link title="主要通知" @click="showType('primary')" />
        <z-cell is-link title="成功通知" @click="showType('success')" />
        <z-cell is-link title="危险通知" @click="showType('danger')" />
        <z-cell is-link title="警告通知" @click="showType('warning')" />
      </demo-block>
      <demo-block card title="自定义配置">
        <z-cell is-link title="自定义颜色" @click="showCustomColor" />
        <z-cell is-link title="自定义位置" @click="showCustomPosition" />
        <z-cell is-link title="自定义时长" @click="showCustomDuration" />
      </demo-block>
      <demo-block title="使用 Notify 组件">
        <z-cell is-link title="使用 Notify 组件" @click="showComponentCall" />

        <z-notify
          v-model:show="show"
          type="success"
          custom-navbar
          use-component
        >
          <z-icon name="notification" />
          <text style="margin-left: 8rpx">内容</text>
        </z-notify>
      </demo-block>
    </view>
    <z-notify ref="zNotify" custom-navbar></z-notify>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { showNotify } from '@zebra-ui/uniapp'
const show = ref(false)
const showBasicNotify = () => {
  showNotify('通知内容')
}
const showType = (type: any) => {
  showNotify({
    message: '通知内容',
    type
  })
}
const showCustomColor = () => {
  showNotify({
    color: '#ad0000',
    message: '自定义颜色',
    background: '#ffe1e1'
  })
}

const showCustomDuration = () => {
  showNotify({
    message: '自定义时长',
    duration: 1000
  })
}

const showCustomPosition = () => {
  showNotify({
    message: '自定义位置',
    position: 'bottom'
  })
}

const showComponentCall = () => {
  show.value = true
  setTimeout(() => {
    show.value = false
  }, 2000)
}
</script>
