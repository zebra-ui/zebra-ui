<template>
  <DemoPage title="Switch">
    <view class="demo-switch">
      <demo-block title="基础用法">
        <z-switch v-model="checked" />
      </demo-block>
      <demo-block title="禁用状态">
        <z-switch v-model="checked" disabled />
      </demo-block>
      <demo-block title="加载状态">
        <z-switch v-model="checked" loading />
      </demo-block>
      <demo-block title="自定义大小">
        <z-switch v-model="checked" size="30rpx" />
      </demo-block>
      <demo-block title="自定义颜色">
        <z-switch
          v-model="checked"
          active-color="#ee0a24"
          inactive-color="#dcdee0"
        />
      </demo-block>
      <demo-block title="自定义按钮">
        <z-switch v-model="checked">
          <template #node>
            <view class="icon-wrapper">
              <z-icon
                :name="checked ? 'plus-circle-fill' : 'minus-circle-fill'"
                :color="checked ? 'var(--z-blue)' : 'var(--z-gray-5)'"
                size="40rpx"
              />
            </view>
          </template>
        </z-switch>
      </demo-block>
      <demo-block title="异步控制">
        <z-switch :model-value="checked" @update:model-value="onUpdateValue" />
      </demo-block>
      <demo-block title="搭配单元格使用">
        <z-cell center title="标题">
          <template #right-icon>
            <z-switch v-model="checked" />
          </template>
        </z-cell>
      </demo-block>
    </view>
    <z-dialog ref="zDialog"></z-dialog>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { showConfirmDialog } from '@zebra-ui/uniapp/components/z-dialog/z-dialog'
const checked = ref(true)
const onUpdateValue = (newValue: any) => {
  showConfirmDialog({
    title: '提醒',
    message: '是否切换开关？'
  }).then(() => {
    checked.value = newValue
  })
}
</script>
<style lang="scss" scoped>
.demo-switch {
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}
</style>
