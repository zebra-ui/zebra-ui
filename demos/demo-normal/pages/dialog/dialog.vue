<template>
  <DemoPage title="Dialog">
    <view class="demo-dialog">
      <demo-block title="基础用法">
        <z-cell
          title="提示弹窗"
          is-link
          @click="
            dialog.showDialog({ title: '标题', message: '这是一个示例提示' })
          "
        />
        <z-cell
          title="提示弹窗（无标题）"
          is-link
          @click="dialog.showDialog({ message: '这是一个无标题提示' })"
        />
        <z-cell
          title="确认弹窗"
          is-link
          @click="
            dialog.showConfirmDialog({
              title: '标题',
              message: '这是一个示例提示'
            })
          "
        />
      </demo-block>
      <demo-block title="按钮风格">
        <z-cell
          title="提示弹窗"
          is-link
          @click="
            dialog.showDialog({
              title: '标题',
              theme: 'round-button',
              message: '这是一个示例提示'
            })
          "
        />
        <z-cell
          title="提示弹窗（无标题）"
          is-link
          @click="
            dialog.showDialog({
              theme: 'round-button',
              message: '这是一个无标题提示'
            })
          "
        />
        <z-cell
          title="确认弹窗"
          is-link
          @click="
            dialog.showConfirmDialog({
              title: '标题',
              theme: 'round-button',
              message: '这是一个示例提示'
            })
          "
        />
      </demo-block>
      <demo-block title="异步关闭">
        <z-cell title="异步关闭" is-link @click="showDialogMethod" />
      </demo-block>
      <demo-block title="事件">
        <z-cell title="事件" is-link @click="showDialogEvent" />
      </demo-block>
      <demo-block title="使用组件">
        <z-cell title="使用组件" is-link @click="show = true" />
        <z-dialog
          v-model:show="show"
          use-component
          title="标题"
          show-cancel-button
        >
          <z-picker :columns="columns" :show-toolbar="false" />
        </z-dialog>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useDialog } from '../../uni_modules/zebra-ui'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const dialog = useDialog()
const beforeClose = (action: any) =>
  new Promise((resolve) => {
    setTimeout(() => {
      // action !== 'confirm'  拦截取消操作
      resolve(action === 'confirm')
    }, 1000)
  })
const showDialogMethod = () => {
  dialog.showConfirmDialog({
    title: '标题',
    message: '异步关闭示例',
    beforeClose
  })
}
const show = ref(false)
const columns = [
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' }
]
const showDialogEvent = () => {
  dialog
    .showConfirmDialog({
      title: '标题',
      message: '操作事件'
    })
    .then(() => {
      toast.showToast('点击确认按钮')
    })
    .catch(() => {
      toast.showToast('点击取消按钮')
    })
}
</script>
