<template>
  <DemoPage title="Stepper">
    <view class="demo-stepper">
      <demo-block title="基础用法">
        <z-stepper v-model="value" />
      </demo-block>
      <demo-block title="步长设置">
        <z-stepper v-model="value" step="2" />
      </demo-block>
      <demo-block title="限制输入范围">
        <z-stepper v-model="valueMax" min="5" max="8" />
      </demo-block>
      <demo-block title="限制输入整数">
        <z-stepper v-model="valueInteger" integer />
      </demo-block>
      <demo-block title="禁用状态">
        <z-stepper v-model="value" disabled />
      </demo-block>
      <demo-block title="禁用输入框">
        <z-stepper v-model="value" disable-input />
      </demo-block>
      <demo-block title="固定小数位数">
        <z-stepper v-model="valueDecimal" step="0.2" :decimal-length="1" />
      </demo-block>
      <demo-block title="自定义大小">
        <z-stepper v-model="value" input-width="80rpx" button-size="64rpx" />
      </demo-block>
      <demo-block title="异步变更">
        <z-stepper v-model="value" :before-change="beforeChange" />
      </demo-block>
      <demo-block title="圆角风格">
        <z-stepper
          v-model="value"
          theme="round"
          button-size="44rpx"
          disable-input
        />
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// @ts-ignore
// eslint-disable-next-line no-undef
const toast = useToast()
const value = ref(1)
const valueMax = ref(5)
const valueInteger = ref(1)
const valueDecimal = ref(1)
const beforeChange = () => {
  toast.showLoadingToast({ forbidClick: true })

  return new Promise((resolve) => {
    setTimeout(() => {
      toast.closeToast()
      resolve(true)
    }, 1000)
  })
}
</script>
