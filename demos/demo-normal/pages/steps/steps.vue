<template>
  <DemoPage title="Steps">
    <view class="demo-steps">
      <demo-block title="基础用法">
        <z-steps :active="active">
          <z-step>第一步</z-step>
          <z-step>第二步</z-step>
          <z-step>第三步</z-step>
          <z-step>第四步</z-step>
        </z-steps>
        <z-button :custom-style="{ 'margin-top': '30rpx' }" @click="nextStep"
          >下一步</z-button
        >
      </demo-block>
      <demo-block title="自定义样式">
        <z-steps
          :active="active"
          active-icon="check"
          inactive-icon="right-big"
          active-color="#07c160"
        >
          <z-step>第一步</z-step>
          <z-step>第二步</z-step>
          <z-step>第三步</z-step>
          <z-step>第四步</z-step>
        </z-steps>
      </demo-block>

      <demo-block title="竖向步骤条">
        <z-steps :active="0" direction="vertical">
          <z-step>
            <view>状态一</view>
            <view>2016-07-12 12:40</view>
          </z-step>
          <z-step>
            <view>状态二</view>
            <view>2016-07-11 10:00</view>
          </z-step>
          <z-step>
            <view>状态三</view>
            <view>2016-07-10 09:30</view>
          </z-step>
        </z-steps>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const active = ref(1)

const nextStep = () => {
  active.value = ++active.value % 4
}
</script>
