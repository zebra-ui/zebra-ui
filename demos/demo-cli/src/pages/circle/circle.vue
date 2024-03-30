<template>
  <DemoPage title="Circle">
    <view class="demo-circle">
      <demo-block title="基础用法">
        <z-circle
          v-model:current-rate="currentRate1"
          :rate="rate"
          :speed="100"
          :text="currentRate1.toFixed(0) + '%'"
        />
      </demo-block>
      <demo-block title="自定义样式">
        <view class="content">
          <view class="content-item">
            <z-circle
              v-model:current-rate="currentRate3"
              :rate="rate"
              :speed="100"
              :stroke-width="10"
              text="宽度定制"
            />
          </view>
          <view class="content-item">
            <z-circle
              v-model:current-rate="currentRate3"
              color="#ee0a24"
              :rate="rate"
              layer-color="#ebedf0"
              :speed="100"
              text="颜色定制"
            />
          </view>
          <view class="content-item">
            <z-circle
              v-model:current-rate="currentRate2"
              :rate="rate"
              :speed="100"
              :color="gradientColor"
              text="渐变色"
            />
          </view>
          <view class="content-item">
            <z-circle
              v-model:current-rate="currentRate4"
              color="#07c160"
              :rate="rate"
              :speed="100"
              :clockwise="false"
              text="逆时针"
            />
          </view>
          <view class="content-item">
            <z-circle
              v-model:current-rate="currentRate4"
              color="#7232dd"
              :rate="rate"
              :speed="100"
              :size="140"
              text="大小定制"
            />
          </view>
        </view>
        <view style="margin-top: 30rpx">
          <z-button text="增加" type="primary" size="small" @click="add" />
          <z-button
            :custom-style="{ 'margin-left': '30rpx' }"
            text="减少"
            type="danger"
            size="small"
            @click="reduce"
          />
        </view>
      </demo-block>
      <demo-block title="起始位置">
        <view class="content">
          <view class="content-item">
            <z-circle
              :current-rate="75"
              :rate="rate"
              text="左侧"
              start-position="left"
            />
          </view>
          <view class="content-item">
            <z-circle
              :current-rate="75"
              :rate="rate"
              text="右侧"
              start-position="right"
            />
          </view>
          <view class="content-item">
            <z-circle
              :current-rate="75"
              :rate="rate"
              text="底部"
              start-position="bottom"
            />
          </view>
        </view>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const rate = ref(70)
const currentRate1 = ref(0)
const currentRate2 = ref(70)
const currentRate3 = ref(70)
const currentRate4 = ref(70)

const gradientColor = {
  '0%': '#3fecff',
  '100%': '#6149f6'
}

const format = (rate: number) => Math.min(Math.max(rate, 0), 100)

const add = () => {
  rate.value = format(rate.value + 20)
}

const reduce = () => {
  rate.value = format(rate.value - 20)
}
</script>
<style lang="scss" scoped>
.demo-circle {
  .content {
    display: flex;
    flex-wrap: wrap;

    .content-item {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      margin: 30rpx;
    }
  }
}
</style>
