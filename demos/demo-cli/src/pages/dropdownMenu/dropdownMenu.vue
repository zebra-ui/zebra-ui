<template>
  <DemoPage title="DropdownMenu">
    <view class="demo-dropdown-menu">
      <demo-block title="基础用法">
        <z-dropdown-menu ref="dropdown1">
          <z-dropdown-item v-model="value1" :options="option1" />
          <z-dropdown-item v-model="value2" :options="option2" />
        </z-dropdown-menu>
      </demo-block>
      <demo-block title="自定义菜单内容">
        <z-dropdown-menu>
          <z-dropdown-item v-model="value1" :options="option1" />
          <z-dropdown-item title="筛选" ref="item">
            <z-cell center title="选项一">
              <template #right-icon>
                <z-switch v-model="switch1" />
              </template>
            </z-cell>
            <z-cell center title="选项二">
              <template #right-icon>
                <z-switch v-model="switch2" />
              </template>
            </z-cell>
            <view style="padding: 10rpx 32rpx">
              <z-button
                type="primary"
                block
                round
                style="height: 80rpx"
                @click="onConfirm"
              >
                确认
              </z-button>
            </view>
          </z-dropdown-item>
        </z-dropdown-menu>
      </demo-block>
      <demo-block title="自定义选中颜色">
        <z-dropdown-menu active-color="#ee0a24">
          <z-dropdown-item v-model="value1" :options="option1" />
          <z-dropdown-item v-model="value2" :options="option2" />
        </z-dropdown-menu>
      </demo-block>
      <demo-block title="横向滚动">
        <z-dropdown-menu swipe-threshold="4">
          <z-dropdown-item v-model="value1" :options="option1" />
          <z-dropdown-item v-model="value2" :options="option2" />
          <z-dropdown-item v-model="value2" :options="option2" />
          <z-dropdown-item v-model="value2" :options="option2" />
          <z-dropdown-item v-model="value2" :options="option2" />
        </z-dropdown-menu>
      </demo-block>
      <demo-block title="向上展开">
        <z-dropdown-menu direction="up">
          <z-dropdown-item v-model="value1" :options="option1" />
          <z-dropdown-item v-model="value2" :options="option2" />
        </z-dropdown-menu>
      </demo-block>
      <demo-block title="禁用菜单">
        <z-dropdown-menu>
          <z-dropdown-item v-model="value1" disabled :options="option1" />
          <z-dropdown-item v-model="value2" disabled :options="option2" />
        </z-dropdown-menu>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// @ts-ignore
import { onPageScroll } from '@dcloudio/uni-app'
const value1 = ref(0)
const value2 = ref('a')
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 }
]
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' }
]
const item = ref()
const switch1 = ref(true)
const switch2 = ref(false)
const onConfirm = () => {
  item.value?.toggle()
}
const dropdown1 = ref()
// 防止滚动错乱示例
onPageScroll(() => {
  dropdown1.value.onScroll()
})
</script>
