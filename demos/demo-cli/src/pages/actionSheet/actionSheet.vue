<template>
  <DemoPage title="ActionSheet">
    <view class="demo-action-sheet">
      <demo-block title="基础用法">
        <z-cell is-link title="基础用法" @click="showBasic = true" />
        <z-cell is-link title="展示取消按钮" @click="showCancel = true" />
        <z-cell is-link title="展示描述信息" @click="showDescription = true" />
      </demo-block>
      <demo-block title="选项状态">
        <z-cell is-link title="选项状态" @click="showStatus = true" />
      </demo-block>
      <demo-block title="自定义面板">
        <z-cell is-link title="自定义面板" @click="showTitle = true" />
      </demo-block>
    </view>
    <z-action-sheet
      v-model:show="showBasic"
      :actions="simpleActions"
      @select="onSelect"
    />
    <z-action-sheet
      v-model:show="showCancel"
      :actions="simpleActions"
      close-on-click-action
      cancel-text="取消"
      @cancel="onCancel"
    />
    <z-action-sheet
      v-model:show="showDescription"
      :actions="actionsWithDescription"
      close-on-click-action
      cancel-text="取消"
      description="描述"
    />
    <z-action-sheet
      v-model:show="showStatus"
      close-on-click-action
      :actions="statusActions"
      cancel-text="取消"
    />
    <z-action-sheet v-model:show="showTitle" title="标题">
      <view class="demo-action-sheet-content">内容</view>
    </z-action-sheet>
    <z-toast ref="zToast"></z-toast>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { showToast } from '@zebra-ui/uniapp'
const showBasic = ref(false)
const showCancel = ref(false)
const showTitle = ref(false)
const showStatus = ref(false)
const showDescription = ref(false)

const simpleActions = computed(() => [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' }
])

const statusActions = computed(() => [
  { name: '选项一', color: '#ee0a24' },
  { name: '禁用选项', disabled: true },
  { loading: true }
])

const actionsWithDescription = computed(() => [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三', subname: '描述信息' }
])

const onSelect = (item: any) => {
  showBasic.value = false
  showToast(item.name)
}

const onCancel = () => showToast('取消')
</script>
<style lang="scss" scoped>
.demo-action-sheet {
  &-content {
    padding: var(--z-padding-md) var(--z-padding-md)
      calc(var(--z-padding-md) * 10);
  }
}
</style>
