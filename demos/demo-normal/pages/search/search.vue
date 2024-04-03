<template>
  <DemoPage title="Search">
    <view class="demo-search">
      <demo-block title="基础用法">
        <z-search v-model="value" placeholder="请输入搜索关键词" />
      </demo-block>
      <demo-block title="事件监听">
        <z-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </demo-block>
      <demo-block title="搜索框内容对齐">
        <z-search
          v-model="value"
          placeholder="请输入搜索关键词"
          input-align="center"
        />
      </demo-block>
      <demo-block title="禁用搜索框">
        <z-search v-model="value" placeholder="请输入搜索关键词" disabled />
      </demo-block>
      <demo-block title="自定义背景色">
        <z-search
          v-model="value"
          placeholder="请输入搜索关键词"
          shape="round"
          background="#4fc08d"
        />
      </demo-block>
      <demo-block title="自定义按钮">
        <z-search
          v-model="value"
          show-action
          label="地址"
          placeholder="请输入搜索关键词"
          @search="onSearch"
        >
          <template #action>
            <div @click="onClickButton">搜索</div>
          </template>
        </z-search>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const value = ref('')
const onSearch = (val: string) => toast.showToast(val)
const onCancel = () => toast.showToast('取消')
const onClickButton = () => toast.showToast(value.value)
</script>
