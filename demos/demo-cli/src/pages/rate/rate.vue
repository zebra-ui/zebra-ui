<template>
  <DemoPage title="Rate">
    <view class="demo-rate">
      <demo-block title="基础用法">
        <z-rate v-model="value" />
      </demo-block>
      <demo-block title="自定义图标">
        <z-rate v-model="value" icon="heart-fill" void-icon="heart" />
      </demo-block>
      <demo-block title="自定义样式">
        <z-rate
          v-model="value"
          :size="35"
          color="#ffd21e"
          void-icon="star"
          void-color="#eee"
        />
      </demo-block>
      <demo-block title="半星">
        <z-rate v-model="valueHalf" allow-half />
      </demo-block>
      <demo-block title="自定义数量">
        <z-rate v-model="valueCount" :count="6" />
      </demo-block>
      <demo-block title="可清空">
        <z-rate v-model="valueClear" clearable />
      </demo-block>
      <demo-block title="禁用状态">
        <z-rate v-model="value" disabled />
      </demo-block>
      <demo-block title="只读状态">
        <z-rate v-model="value" readonly />
      </demo-block>
      <demo-block title="只读状态显示小数">
        <z-rate v-model="valueReadonly" readonly allow-half />
      </demo-block>
      <demo-block title="监听 change 事件">
        <z-rate v-model="value" @change="onChange" />
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// @ts-ignore
// eslint-disable-next-line no-undef
const toast = useToast()
const value = ref(3)
const valueHalf = ref(2.5)
const valueCount = ref(3)
const valueClear = ref(3)
const valueReadonly = ref(3.3)
const onChange = (value: string) => toast.showToast('当前值：' + value)
</script>
