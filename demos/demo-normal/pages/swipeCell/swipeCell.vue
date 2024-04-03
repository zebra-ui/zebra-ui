<template>
  <DemoPage title="SwipeCell">
    <view class="demo-swipe-cell">
      <demo-block title="基础用法">
        <z-swipe-cell>
          <template #left>
            <z-button square type="primary" text="选择" />
          </template>
          <z-cell :border="false" title="单元格" value="内容" />
          <template #right>
            <z-button square type="danger" text="删除" />
            <z-button square type="primary" text="收藏" />
          </template>
        </z-swipe-cell>
      </demo-block>
      <demo-block title="自定义内容">
        <z-swipe-cell>
          <z-card title="标题" :cover="cover" header-bordered>
            这是一段文字
            <template #actions>
              <z-button type="primary" size="mini">操作</z-button>
            </template>
          </z-card>
          <template #right>
            <z-button
              square
              type="danger"
              text="删除"
              :custom-style="{ height: '100%' }"
            />
          </template>
        </z-swipe-cell>
      </demo-block>
      <demo-block title="异步关闭">
        <z-swipe-cell :before-close="beforeClose">
          <template #left>
            <z-button square type="primary" text="选择" />
          </template>
          <z-cell :border="false" title="单元格" value="内容" />
          <template #right>
            <z-button square type="danger" text="删除" />
          </template>
        </z-swipe-cell>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useDialog } from '../../uni_modules/zebra-ui'
const dialog = useDialog()
const cover = ref(
  'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg'
)
const beforeClose = ({ position }: { position: string }) => {
  switch (position) {
    case 'left':
    case 'cell':
    case 'outside':
      return true
    case 'right':
      return new Promise<boolean>((resolve) => {
        dialog
          .showConfirmDialog({
            title: '确定删除吗'
          })
          .then(() => resolve(true))
          .catch(() => resolve(false))
      })
  }
}
</script>
