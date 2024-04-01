<template>
  <DemoPage title="ConfigProvider">
    <view class="demo-config-provider">
      <demo-block title="深色模式">
        <z-config-provider theme="dark">
          <z-form>
            <z-field name="rate" label="评分">
              <template #input>
                <z-rate v-model="rate" />
              </template>
            </z-field>
            <z-field name="slider" label="滑块">
              <template #input>
                <z-slider v-model="slider" />
              </template>
            </z-field>

            <view style="margin: 32rpx">
              <z-button block type="primary"> 提交 </z-button>
            </view>
          </z-form>
        </z-config-provider>
      </demo-block>
      <demo-block title="定制主题">
        <z-config-provider :theme-vars="themeVars">
          <z-form>
            <z-field name="rate" label="评分">
              <template #input>
                <z-rate v-model="rate" />
              </template>
            </z-field>

            <z-field name="slider" label="滑块">
              <template #input>
                <z-slider v-model="slider" />
              </template>
            </z-field>

            <view style="margin: 32rpx">
              <z-button block type="primary"> 提交 </z-button>
            </view>
          </z-form>
        </z-config-provider>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const rate = ref(4)
const slider = ref(50)
const themeVars = {
  rateIconFullColor: '#07c160',
  sliderBarHeight: '8rpx',
  sliderButtonWidth: '40rpx',
  sliderButtonHeight: '40rpx',
  sliderActiveBackground: '#07c160',
  buttonPrimaryBackground: '#07c160',
  buttonPrimaryBorderColor: '#07c160'
}
</script>
