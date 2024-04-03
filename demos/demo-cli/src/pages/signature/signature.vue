<template>
  <DemoPage title="Signature">
    <view class="demo-signature">
      <demo-block title="基础用法">
        <z-signature @submit="onSubmit" @clear="onClear" />
        <z-image v-if="image" :width="width" :height="height" :src="image" />
      </demo-block>
      <demo-block title="自定义颜色">
        <z-signature
          pen-color="#ff0000"
          @submit="onSubmitColor"
          @clear="onClear"
        />
        <z-image
          v-if="imageColor"
          :width="widthColor"
          :height="heightColor"
          :src="imageColor"
        />
      </demo-block>
      <demo-block title="自定义线宽">
        <z-signature :line-width="10" @submit="onSubmitLine" @clear="onClear" />
        <z-image
          v-if="imageLine"
          :width="widthLine"
          :height="heightLine"
          :src="imageLine"
        />
      </demo-block>
      <demo-block title="自定义背景颜色">
        <z-signature
          background-color="#eee"
          @submit="onSubmitBackground"
          @clear="onClear"
        />
        <z-image
          v-if="imageBackground"
          :width="widthBackground"
          :height="heightBackground"
          :src="imageBackground"
        />
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// @ts-ignore
// eslint-disable-next-line no-undef
const toast = useToast()
const image = ref('')
const width = ref('')
const height = ref('')
const imageColor = ref('')
const widthColor = ref('')
const heightColor = ref('')
const imageLine = ref('')
const widthLine = ref('')
const heightLine = ref('')
const imageBackground = ref('')
const widthBackground = ref('')
const heightBackground = ref('')
const onSubmit = (data: any) => {
  image.value = data.image
  width.value = data.width
  height.value = data.height
}
const onSubmitColor = (data: any) => {
  imageColor.value = data.image
  widthColor.value = data.width
  heightColor.value = data.height
}
const onSubmitLine = (data: any) => {
  imageLine.value = data.image
  widthLine.value = data.width
  heightLine.value = data.height
}
const onSubmitBackground = (data: any) => {
  imageBackground.value = data.image
  widthBackground.value = data.width
  heightBackground.value = data.height
}
const onClear = () => toast.showToast('clear')
</script>
