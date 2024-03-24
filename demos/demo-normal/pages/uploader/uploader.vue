<template>
  <DemoPage title="Uploader">
    <view class="demo-uploader">
      <demo-block title="基础用法">
        <z-uploader :after-read="afterRead" />
      </demo-block>
      <demo-block title="文件预览">
        <z-uploader v-model="fileList" multiple />
      </demo-block>
      <demo-block title="上传状态">
        <z-uploader v-model="fileListStatus" :after-read="afterReadStatus" />
      </demo-block>
      <demo-block title="限制上传数量">
        <z-uploader v-model="fileListMax" multiple :max-count="2" />
      </demo-block>
      <demo-block title="限制上传大小">
        <z-uploader
          v-model="fileListSize"
          multiple
          :max-size="500 * 1024"
          @oversize="onOversize"
        />
      </demo-block>
      <demo-block title="自定义上传样式">
        <z-uploader>
          <z-button icon="upload" type="primary">上传文件</z-button>
        </z-uploader>
      </demo-block>
      <demo-block title="自定义预览样式">
        <z-uploader v-model="fileList">
          <template #preview-cover="{ file }">
            <view class="preview-cover z-ellipsis">{{
              file?.url ? file?.url : file.file?.url
            }}</view>
          </template>
        </z-uploader>
      </demo-block>
      <demo-block title="自定义预览大小">
        <z-uploader v-model="fileList" preview-size="180rpx" />
      </demo-block>
      <demo-block title="上传前置处理">
        <z-uploader :before-read="beforeRead" />
        <z-uploader :before-read="asyncBeforeRead" />
      </demo-block>
      <demo-block title="禁用文件上传">
        <z-uploader disabled />
      </demo-block>
      <demo-block title="自定义单个图片预览">
        <z-uploader v-model="fileListOnly" :deletable="false" />
      </demo-block>
      <demo-block title="开启覆盖上传">
        <z-uploader v-model="fileListRe" reupload max-count="2" />
      </demo-block>
    </view>
    <z-toast ref="zToast"></z-toast>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { showToast } from '../../uni_modules/zebra-ui/components/z-toast/z-toast'
const afterRead = (file: any) => {
  console.log(file)
}
const fileListMax = ref([])
const fileListSize = ref([])
const fileList = ref([
  { url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg' },
  { url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg' }
])
const fileListRe = ref([
  { url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg' },
  { url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg' }
])

const fileListStatus = ref([
  {
    url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg',
    status: 'uploading',
    message: '上传中...'
  },
  {
    url: 'https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg',
    status: 'failed',
    message: '上传失败'
  }
])

const fileListOnly = ref([
  {
    url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
    deletable: true,
    beforeDelete: () => {
      showToast('删除前置处理')
    }
  },
  {
    url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg'
  }
])

const afterReadStatus = (file: any) => {
  file.status = 'uploading'
  file.message = '上传中...'

  setTimeout(() => {
    file.status = 'failed'
    file.message = '上传失败'
  }, 1000)
}

const onOversize = () => {
  showToast('文件大小不能超过 500kb')
}
const beforeRead = (file: any) => {
  if (file.type == 'image') {
    showToast('上传图片拦截')
    return false
  }
  return true
}
const asyncBeforeRead = (file: any) =>
  new Promise((resolve, reject) => {
    if (file.type !== 'image') {
      showToast('请上传图片格式文件')
      reject()
    } else {
      file.custom = {
        name: 'zebra-image-test'
      }
      resolve(file)
    }
  })
</script>
<style lang="scss" scoped>
.demo-uploader {
  .preview-cover {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 8rpx;
    font-size: 24rpx;
    color: #fff;
    text-align: center;
    background: rgb(0 0 0 / 70%);
  }
}
</style>
