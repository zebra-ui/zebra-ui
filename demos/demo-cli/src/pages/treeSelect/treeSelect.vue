<template>
  <DemoPage title="TreeSelect">
    <view class="demo-tree-select">
      <demo-block title="单选">
        <z-tree-select
          v-model:active-id="activeId"
          v-model:main-active-index="activeIndex"
          :items="items"
        />
      </demo-block>
      <demo-block title="多选">
        <z-tree-select
          v-model:active-id="activeIds"
          v-model:main-active-index="activeIndex2"
          :items="items"
        />
      </demo-block>
      <demo-block title="自定义内容">
        <z-tree-select
          v-model:main-active-index="activeIndex3"
          :items="simpleItems"
          height="300rpx"
        >
          <template #content>
            <view v-if="activeIndex3 === 0" class="custom-content1">
              当前选中的下标{{ activeIndex3 }}
            </view>
            <view v-if="activeIndex3 === 1" class="custom-content2">
              当前选中的下标{{ activeIndex3 }}
            </view>
          </template>
        </z-tree-select>
      </demo-block>
      <demo-block title="徽标提示">
        <z-tree-select
          v-model:active-id="activeId2"
          v-model:main-active-index="activeIndex4"
          height="55vw"
          :items="badgeItems"
        />
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const activeId = ref(1)
const activeIndex = ref(0)
const activeIds = ref([1, 2])
const activeIndex2 = ref(0)
const activeIndex3 = ref(0)
const activeId2 = ref(1)
const activeIndex4 = ref(0)
const items = ref([
  {
    text: '浙江',
    children: [
      { text: '杭州', id: 1 },
      { text: '温州', id: 2 },
      { text: '宁波', id: 3, disabled: true }
    ]
  },
  {
    text: '江苏',
    children: [
      { text: '南京', id: 4 },
      { text: '无锡', id: 5 },
      { text: '徐州', id: 6 }
    ]
  },
  { text: '福建', disabled: true }
])
const simpleItems = ref([{ text: '分组 1' }, { text: '分组 2' }])
const badgeItems = ref([
  {
    text: '浙江',
    children: [
      { text: '杭州', id: 1 },
      { text: '温州', id: 2 },
      { text: '宁波', id: 3, disabled: true }
    ],
    dot: true
  },
  {
    text: '江苏',
    children: [
      { text: '南京', id: 4 },
      { text: '无锡', id: 5 },
      { text: '徐州', id: 6 }
    ],
    badge: 5
  }
])
</script>
<style lang="scss" scoped>
.demo-tree-select {
  .custom-content1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300rpx;
    background-color: var(--z-primary-color);
  }

  .custom-content2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300rpx;
    background-color: var(--z-success-color);
  }
}
</style>
