<template>
  <DemoPage title="Icon">
    <view class="demo-icon">
      <z-tabs v-model:active="tab" sticky custom-navbar>
        <z-tab title="用法示例">
          <demo-block title="基础用法">
            <view class="list">
              <view class="item">
                <z-icon
                  :name="demoIcon"
                  size="68rpx"
                  @click="onClick(demoIcon)"
                />
              </view>
              <view class="item">
                <z-icon
                  :name="demoImage"
                  size="68rpx"
                  @click="onClick(demoImage)"
                />
              </view>
            </view>
          </demo-block>
          <demo-block title="提示信息">
            <view class="list">
              <view class="item">
                <z-icon
                  :name="demoIcon"
                  size="64rpx"
                  dot
                  @click="onClick(demoIcon)"
                />
              </view>
              <view class="item">
                <z-icon
                  :name="demoIcon"
                  size="64rpx"
                  badge="9"
                  @click="onClick(demoIcon)"
                />
              </view>
              <view class="item">
                <z-icon
                  :name="demoIcon"
                  size="64rpx"
                  badge="99+"
                  @click="onClick(demoIcon)"
                />
              </view>
            </view>
          </demo-block>
          <demo-block title="图标颜色">
            <view class="list">
              <view class="item">
                <z-icon
                  :name="demoIcon"
                  size="64rpx"
                  color="#1989fa"
                  @click="onClick(demoIcon)"
                />
              </view>
              <view class="item">
                <z-icon
                  :name="demoIcon"
                  size="64rpx"
                  color="#07c160"
                  @click="onClick(demoIcon)"
                />
              </view>
            </view>
          </demo-block>
          <demo-block title="图标大小">
            <view class="list">
              <view class="item">
                <z-icon :name="demoIcon" size="50" @click="onClick(demoIcon)" />
              </view>
              <view class="item" style="margin-left: 20rpx">
                <z-icon :name="demoIcon" size="80" @click="onClick(demoIcon)" />
              </view>
            </view>
          </demo-block>
        </z-tab>
        <z-tab title="基础图标">
          <demo-block title="basic">
            <view class="list">
              <view
                class="item"
                v-for="(item, index) in iconData.basic"
                :key="index"
              >
                <z-icon
                  :name="item"
                  size="64rpx"
                  custom-class="icon"
                  @click="onClick(item)"
                />
              </view>
            </view>
          </demo-block>
        </z-tab>
        <z-tab title="线性图标">
          <demo-block title="line">
            <view class="list">
              <view
                class="item"
                v-for="(item, index) in iconData.outline"
                :key="index"
              >
                <z-icon
                  :name="item"
                  size="64rpx"
                  custom-class="icon"
                  @click="onClick(item)"
                />
              </view>
            </view>
          </demo-block>
        </z-tab>
        <z-tab title="面性图标">
          <demo-block title="fill">
            <view class="list">
              <view
                class="item"
                v-for="(item, index) in iconData.filled"
                :key="index"
              >
                <z-icon
                  :name="item"
                  size="64rpx"
                  custom-class="icon"
                  @click="onClick(item)"
                />
              </view>
            </view>
          </demo-block>
        </z-tab>
      </z-tabs>
    </view>
  </DemoPage>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import iconData from '../../common/js/iconfont.js'
const tab = ref(0)
const demoIcon = 'smile'
const demoImage =
  'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png'
const onClick = (name: string) => {
  uni.setClipboardData({
    data: name
  })
}
</script>

<style scoped lang="scss">
.demo-icon {
  color: var(--z-text-color);

  .list {
    display: flex;
    flex-wrap: wrap;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 25%;
      height: 150rpx;
    }

    .item:active {
      background-color: var(--z-line-color);
    }
  }
}
</style>
