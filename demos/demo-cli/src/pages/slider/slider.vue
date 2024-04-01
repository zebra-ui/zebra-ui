<template>
  <DemoPage title="Slider">
    <view class="demo-slider">
      <demo-block title="基础用法">
        <view class="demo-slider-item">
          <z-slider v-model="value" @change="onChange" />
        </view>
      </demo-block>
      <demo-block title="双滑块">
        <view class="demo-slider-item">
          <z-slider v-model="valueRange" range @change="onChange" />
        </view>
      </demo-block>
      <demo-block title="指定选择范围">
        <view class="demo-slider-item">
          <z-slider
            v-model="valueMax"
            :min="-50"
            :max="50"
            @change="onChange"
          />
        </view>
      </demo-block>
      <demo-block title="禁用">
        <view class="demo-slider-item">
          <z-slider v-model="value" disabled />
        </view>
      </demo-block>
      <demo-block title="指定步长">
        <view class="demo-slider-item">
          <z-slider v-model="valueStep" :step="10" @change="onChange" />
        </view>
      </demo-block>
      <demo-block title="自定义样式">
        <view class="demo-slider-item">
          <z-slider
            v-model="value"
            bar-height="8rpx"
            active-color="#ee0a24"
            @change="onChange"
          />
        </view>
      </demo-block>
      <demo-block title="自定义按钮">
        <view class="demo-slider-item">
          <z-slider v-model="value">
            <template #button>
              <view class="custom-button">{{ value }}</view>
            </template>
          </z-slider>
        </view>
      </demo-block>
      <demo-block title="垂直方向">
        <view class="demo-slider-item">
          <view :style="{ height: '300rpx' }">
            <z-slider v-model="value1" vertical @change="onChange" />
            <z-slider
              v-model="value2"
              range
              vertical
              :custom-style="{ 'margin-left': '200rpx' }"
              @change="onChange"
            />
          </view>
        </view>
      </demo-block>
    </view>
    <z-toast ref="zToast"></z-toast>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { showToast } from '@zebra-ui/uniapp/components/z-toast/z-toast'
const value = ref(50)
const valueMax = ref(0)
const valueStep = ref(50)
const valueRange = ref([10, 50])
const value1 = ref(50)
const value2 = ref([10, 50])
const onChange = (value: string) => showToast('当前值：' + value)
</script>
<style lang="scss" scoped>
.demo-slider {
  .demo-slider-item {
    padding: 30rpx;
  }

  .custom-button {
    width: 52rpx;
    font-size: 20rpx;
    line-height: 36rpx;
    color: #fff;
    text-align: center;
    background-color: var(--z-primary-color);
    border-radius: 200rpx;
  }
}
</style>
