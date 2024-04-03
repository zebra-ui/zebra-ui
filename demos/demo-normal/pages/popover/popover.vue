<template>
  <DemoPage title="Popover">
    <view class="demo-popover">
      <demo-block title="基础用法">
        <z-popover
          v-model:show="show.lightTheme"
          :actions="actions"
          placement="bottom-start"
          @select="onSelect"
        >
          <template #reference>
            <z-button type="primary"> 浅色风格 </z-button>
          </template>
        </z-popover>
        <z-popover
          v-model:show="show.darkTheme"
          :custom-style="{ 'margin-left': '30rpx' }"
          theme="dark"
          :actions="actions"
          @select="onSelect"
        >
          <template #reference>
            <z-button type="primary"> 深色风格 </z-button>
          </template>
        </z-popover>
      </demo-block>
      <demo-block title="排列方向">
        <z-popover
          v-model:show="show.horizontal"
          :actions="actions"
          actions-direction="horizontal"
          placement="bottom-start"
          @select="onSelect"
        >
          <template #reference>
            <z-button type="primary"> 水平排列 </z-button>
          </template>
        </z-popover>

        <z-popover
          v-model:show="show.vertical"
          :custom-style="{ 'margin-left': '30rpx' }"
          :actions="actions"
          @select="onSelect"
        >
          <template #reference>
            <z-button type="primary"> 垂直排列 </z-button>
          </template>
        </z-popover>
      </demo-block>

      <demo-block title="选项配置">
        <z-popover
          v-model:show="show.showIcon"
          :actions="actionsWithIcon"
          placement="bottom-start"
          @select="onSelect"
        >
          <template #reference>
            <z-button type="primary"> 展示图标 </z-button>
          </template>
        </z-popover>

        <z-popover
          v-model:show="show.disableAction"
          :custom-style="{ 'margin-left': '30rpx' }"
          :actions="actionsDisabled"
          @select="onSelect"
        >
          <template #reference>
            <z-button type="primary"> 禁用选项 </z-button>
          </template>
        </z-popover>
      </demo-block>

      <demo-block title="自定义内容">
        <z-popover
          v-model:show="show.customContent"
          placement="top-start"
          @select="onSelect"
        >
          <z-grid
            square
            clickable
            :border="false"
            column-num="3"
            :custom-style="{ width: '480rpx' }"
          >
            <z-grid-item
              v-for="i in 6"
              :key="i"
              icon="image"
              text="选项"
              @click="show.customContent = false"
            />
          </z-grid>
          <template #reference>
            <z-button type="primary"> 自定义内容 </z-button>
          </template>
        </z-popover>
      </demo-block>

      <demo-block title="弹出位置">
        <view class="demo-popover-box">
          <z-popover
            v-model:show="show.placement"
            theme="dark"
            :actions="shortActions"
            :placement="currentPlacement"
            @select="onSelect"
          >
            <template #reference>
              <div class="demo-popover-refer" />
            </template>
          </z-popover>
        </view>
        <z-picker
          :columns="placements"
          :show-toolbar="false"
          @change="onPickerChange"
        />
      </demo-block>

      <demo-block title="非受控模式">
        <z-popover :actions="actions" placement="top-start" @select="onSelect">
          <template #reference>
            <z-button type="primary"> 非受控模式 </z-button>
          </template>
        </z-popover>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const actions = ref([
  { text: '选项一' },
  { text: '选项二' },
  { text: '选项三' }
])
const shortActions = [{ text: '选项一' }, { text: '选项二' }]
const actionsWithIcon = [
  { text: '选项一', icon: 'plus-circle' },
  { text: '选项二', icon: 'minus-circle' },
  { text: '选项三', icon: 'message' }
]
const actionsDisabled = [
  { text: '选项一', disabled: true },
  { text: '选项二', disabled: true },
  { text: '选项三' }
]
const placements = [
  'top',
  'top-start',
  'top-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end'
].map((item) => ({ text: item, value: item }))
const show = ref({
  horizontal: false,
  vertical: false,
  showIcon: false,
  placement: false,
  darkTheme: false,
  lightTheme: false,
  customContent: false,
  disableAction: false
})
const currentPlacement = ref('top')

const onPickerChange = (option: any) => {
  setTimeout(() => {
    show.value.placement = true
    currentPlacement.value = option.selectedValues[0]
  })
}

const onSelect = (action: { text: string }) => toast.showToast(action.text)
</script>
<style lang="scss" scoped>
.demo-popover {
  &-box {
    display: flex;
    justify-content: center;
    margin: 220rpx 0;
  }

  &-refer {
    width: 120rpx;
    height: 120rpx;
    background-color: var(--z-blue);
    border-radius: 16rpx;
  }
}
</style>
