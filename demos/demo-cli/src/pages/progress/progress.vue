<template>
  <DemoPage title="Progress">
    <view class="demo-progress">
      <demo-block title="基础用法">
        <z-progress :percentage="50" />
      </demo-block>
      <demo-block title="线条粗细">
        <z-progress :percentage="50" stroke-width="8" />
      </demo-block>

      <demo-block title="置灰">
        <z-progress inactive :percentage="50" />
      </demo-block>

      <demo-block title="样式定制">
        <z-progress color="#f2826a" :percentage="25" pivot-text="橙色" />
        <view class="demo-progress-item">
          <z-progress color="#ee0a24" :percentage="50" pivot-text="红色" />
        </view>
        <view class="demo-progress-item">
          <z-progress
            :percentage="75"
            pivot-text="紫色渐变"
            pivot-color="#7232dd"
            color="linear-gradient(to right, #be99ff, #7232dd)"
          />
        </view>
      </demo-block>

      <demo-block title="过渡效果">
        <z-progress :percentage="percentage" />
        <view style="margin-top: 30rpx">
          <z-button text="增加" type="primary" size="small" @click="add" />
          <z-button
            text="减少"
            type="danger"
            size="small"
            :custom-style="{ 'margin-left': '30rpx' }"
            @click="reduce"
          />
        </view>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const percentage = ref(50)

const format = (rate: number) => Math.min(Math.max(rate, 0), 100)

const add = () => {
  percentage.value = format(percentage.value + 20)
}

const reduce = () => {
  percentage.value = format(percentage.value - 20)
}
</script>
<style lang="scss" scoped>
.demo-progress {
  &-item {
    margin-top: 30rpx;
  }
}
</style>
