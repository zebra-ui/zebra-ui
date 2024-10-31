<template>
  <DemoPage title="Sidebar">
    <view class="demo-sidebar">
      <demo-block title="基础用法">
        <z-sidebar v-model="active1">
          <z-sidebar-item title="标签名" />
          <z-sidebar-item title="标签名" />
          <z-sidebar-item title="标签名" />
        </z-sidebar>
      </demo-block>
      <demo-block title="禁用选项">
        <z-sidebar v-model="active2">
          <z-sidebar-item title="标签名" />
          <z-sidebar-item title="标签名" disabled />
          <z-sidebar-item title="标签名" />
        </z-sidebar>
      </demo-block>
      <demo-block title="监听切换">
        <z-sidebar v-model="active3" @change="onChange">
          <z-sidebar-item title="标签名" />
          <z-sidebar-item title="标签名" />
          <z-sidebar-item title="标签名" />
        </z-sidebar>
      </demo-block>
      <demo-block title="徽标提示">
        <z-sidebar v-model="active4">
          <z-sidebar-item title="标签名" dot />
          <z-sidebar-item title="标签名" badge="5" />
          <z-sidebar-item title="标签名" />
        </z-sidebar>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// @ts-ignore
// eslint-disable-next-line no-undef
const toast = useToast()
const active1 = ref(0)
const active2 = ref(0)
const active3 = ref(0)
const active4 = ref(0)
const onChange = (index: number) => toast.showToast(`标题${index + 1}`)
</script>
