<template>
  <DemoPage title="Tabbar">
    <view class="demo-tabbar">
      <demo-block title="基础用法">
        <z-tabbar :fixed="false" v-model="active">
          <z-tabbar-item icon="home">标签</z-tabbar-item>
          <z-tabbar-item icon="search">标签</z-tabbar-item>
          <z-tabbar-item icon="bell">标签</z-tabbar-item>
          <z-tabbar-item icon="setting">标签</z-tabbar-item>
        </z-tabbar>
      </demo-block>
      <demo-block title="通过名称匹配">
        <z-tabbar :fixed="false" v-model="activeName">
          <z-tabbar-item name="home" icon="home"> 标签 </z-tabbar-item>
          <z-tabbar-item name="search" icon="search"> 标签 </z-tabbar-item>
          <z-tabbar-item name="friends" icon="bell"> 标签 </z-tabbar-item>
          <z-tabbar-item name="setting" icon="setting"> 标签 </z-tabbar-item>
        </z-tabbar>
      </demo-block>

      <demo-block title="徽标提示">
        <z-tabbar :fixed="false" v-model="active2">
          <z-tabbar-item icon="home">标签</z-tabbar-item>
          <z-tabbar-item icon="search" dot>标签</z-tabbar-item>
          <z-tabbar-item icon="bell" badge="5"> 标签 </z-tabbar-item>
          <z-tabbar-item icon="setting" badge="20"> 标签 </z-tabbar-item>
        </z-tabbar>
      </demo-block>
      <demo-block title="自定义图标">
        <z-tabbar :fixed="false" v-model="active3">
          <z-tabbar-item badge="3">
            <text>自定义</text>
            <template #icon="props">
              <image
                class="image"
                :src="props.active ? icon.active : icon.inactive"
              />
            </template>
          </z-tabbar-item>
          <z-tabbar-item icon="search">标签</z-tabbar-item>
          <z-tabbar-item icon="setting">标签</z-tabbar-item>
        </z-tabbar>
      </demo-block>

      <demo-block title="自定义颜色">
        <z-tabbar :fixed="false" v-model="active4" active-color="#ee0a24">
          <z-tabbar-item icon="home">标签</z-tabbar-item>
          <z-tabbar-item icon="search">标签</z-tabbar-item>
          <z-tabbar-item icon="bell">标签</z-tabbar-item>
          <z-tabbar-item icon="setting">标签</z-tabbar-item>
        </z-tabbar>
      </demo-block>

      <demo-block title="监听切换事件">
        <z-tabbar :fixed="false" v-model="active5" @change="onChange">
          <z-tabbar-item icon="home">标签 1</z-tabbar-item>
          <z-tabbar-item icon="search">标签 2</z-tabbar-item>
          <z-tabbar-item icon="bell">标签 3</z-tabbar-item>
          <z-tabbar-item icon="setting">标签 4</z-tabbar-item>
        </z-tabbar>
      </demo-block>

      <demo-block title="背景">
        <z-tabbar :fixed="false" v-model="active6" background>
          <z-tabbar-item icon="home">标签</z-tabbar-item>
          <z-tabbar-item icon="search">标签</z-tabbar-item>
          <z-tabbar-item icon="bell">标签</z-tabbar-item>
          <z-tabbar-item icon="setting" badge="5">标签</z-tabbar-item>
        </z-tabbar>
      </demo-block>
      <demo-block title="圆角">
        <z-tabbar :fixed="false" v-model="active7" float background>
          <z-tabbar-item icon="home">标签</z-tabbar-item>
          <z-tabbar-item icon="search">标签</z-tabbar-item>
          <z-tabbar-item icon="bell">标签</z-tabbar-item>
          <z-tabbar-item icon="setting" badge="5">标签</z-tabbar-item>
        </z-tabbar>
      </demo-block>
      <demo-block title="圆角悬浮">
        <z-tabbar :fixed="true" placeholder v-model="active8" float background>
          <z-tabbar-item icon="home">标签</z-tabbar-item>
          <z-tabbar-item icon="search">标签</z-tabbar-item>
          <z-tabbar-item icon="bell">标签</z-tabbar-item>
          <z-tabbar-item icon="setting" badge="5">标签</z-tabbar-item>
        </z-tabbar>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const active = ref(0)
const active2 = ref(0)
const active3 = ref(0)
const active4 = ref(0)
const active5 = ref(0)
const active6 = ref(0)
const active7 = ref(0)
const active8 = ref(0)
const activeName = ref('home')

const icon = {
  active: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png',
  inactive: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-noselect.png'
}

const onChange = (index: number) => {
  toast.showToast(`标签 ${index + 1}`)
}
</script>
<style lang="scss" scoped>
.demo-tabbar {
  .image {
    width: 40rpx;
    height: 40rpx;
  }
}
</style>
