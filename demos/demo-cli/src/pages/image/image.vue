<template>
  <DemoPage title="Image">
    <view class="demo-image">
      <demo-block title="基础用法">
        <z-row gutter="30">
          <z-col span="8">
            <z-image width="100" height="100" :src="imageUrl" />
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="填充模式">
        <z-row gutter="30">
          <z-col span="8" v-for="(item, index) in imageMode" :key="index">
            <z-image
              width="150rpx"
              height="150rpx"
              :mode="item"
              :src="imageUrl"
            />
            <view class="text">
              {{ item }}
            </view>
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="裁剪">
        <z-row gutter="30">
          <z-col span="8" v-for="(item, index) in imageType" :key="index">
            <z-image
              width="150rpx"
              height="150rpx"
              :mode="item"
              :src="imageUrl"
            />
            <view class="text">
              {{ item }}
            </view>
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="圆形图片">
        <z-row gutter="30">
          <z-col span="8">
            <z-image round width="100" height="100" :src="imageUrl" />
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="加载中提示">
        <z-row gutter="30">
          <z-col span="8">
            <z-image show-loading width="100" height="100" />
            <view class="text">默认提示</view>
          </z-col>
          <z-col span="8">
            <z-image show-loading width="100" height="100">
              <template #loading>
                <z-loading type="spinner" size="40rpx" />
              </template>
            </z-image>
            <view class="text">自定义提示</view>
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="加载失败提示">
        <z-row gutter="30">
          <z-col span="8">
            <z-image show-error width="100" height="100" src="x" />
            <view class="text">默认提示</view>
          </z-col>
          <z-col span="8">
            <z-image show-error width="100" height="100" src="x">
              <template #error> 加载失败 </template>
            </z-image>
            <view class="text">自定义提示</view>
          </z-col>
        </z-row>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const imageUrl = ref('https://cdn.zebraui.com/zebra-ui/images/demo.jpg')
const imageMode = ref([
  'scaleToFill',
  'aspectFit',
  'aspectFill',
  'widthFix',
  'heightFix'
])
const imageType = [
  'top',
  'bottom',
  'center',
  'left',
  'right',
  'top left',
  'top right',
  'bottom left',
  'bottom right'
]
</script>
<style lang="scss" scoped>
.demo-image {
  .text {
    margin: 20rpx 0 30rpx;
    font-size: 26rpx;
    color: var(--zebra-text-color);
  }
}
</style>
