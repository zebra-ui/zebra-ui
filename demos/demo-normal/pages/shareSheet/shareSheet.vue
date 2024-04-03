<template>
  <DemoPage title="ShareSheet">
    <view class="demo-share-sheet">
      <demo-block title="基础用法">
        <z-cell is-link title="显示分享面板" @click="showBasic = true" />
        <z-share-sheet
          v-model:show="showBasic"
          title="立即分享给好友"
          :options="options"
          @select="onSelect"
        />
      </demo-block>
      <demo-block title="展示多行选项">
        <z-cell is-link title="显示分享面板" @click="showMultiLine = true" />
        <z-share-sheet
          v-model:show="showMultiLine"
          title="立即分享给好友"
          :options="multiLineOptions"
          @select="onSelect"
        />
      </demo-block>
      <demo-block card title="自定义图标">
        <z-cell is-link title="显示分享面板" @click="showCustomIcon = true" />
        <z-share-sheet
          v-model:show="showCustomIcon"
          :options="customIconOptions"
          @select="onSelect"
        />
      </demo-block>
      <demo-block title="展示描述信息">
        <z-cell is-link title="显示分享面板" @click="showWithDesc = true" />
        <z-share-sheet
          v-model:show="showWithDesc"
          title="立即分享给好友"
          :options="optionsWithDesc"
          description="描述信息"
          @select="onSelect"
        />
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
// @ts-ignore
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const showBasic = ref(false)
const showWithDesc = ref(false)
const showMultiLine = ref(false)
const showCustomIcon = ref(false)

const options = computed(() => [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' }
])

const multiLineOptions = computed(() => [
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' }
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' }
  ]
])

const customIconOptions = computed(() => [
  {
    name: '名称',
    icon: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png'
  },
  {
    name: '名称',
    icon: 'zhihu'
  },
  {
    name: '名称',
    icon: 'linkedin'
  },
  { name: '名称', icon: 'facebook' }
])

const optionsWithDesc = computed(() => [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  {
    name: '复制链接',
    icon: 'link',
    description: '描述信息'
  },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' }
])

const onSelect = (option: any) => {
  toast.showToast(option.name)
  showBasic.value = false
  showWithDesc.value = false
  showMultiLine.value = false
  showCustomIcon.value = false
}
</script>
