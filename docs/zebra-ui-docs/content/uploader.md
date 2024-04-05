# Uploader 文件上传

### 介绍

用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。

> 该组件可上传图片，视频，音频。基于uniapp的图片及视频上传等API。

## 代码演示

### 基础用法

文件上传完毕后会触发 `after-read` 回调函数，获取到对应的 回调信息。

```html
<z-uploader :after-read="afterRead" />
```

```js
const afterRead = (file) => {
  // 此时可以自行将文件上传至服务器
  console.log(file);
};
```

### 文件预览

通过 `v-model` 可以绑定已经上传的文件列表，并展示文件列表的预览图。

```html
<z-uploader v-model="fileList" multiple />
```

```js
import { ref } from 'vue';
const fileList = ref([
  { url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg' },
  { url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg' }
])
```

### 上传状态

通过 `status` 属性可以标识上传状态，`uploading` 表示上传中，`failed` 表示上传失败，`done` 表示上传完成。

```html
<z-uploader v-model="fileListStatus" :after-read="afterReadStatus" />
```

```js
const fileListStatus = ref([
  {
    url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
    status: 'uploading',
    message: '上传中...'
  },
  {
    url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
    status: 'failed',
    message: '上传失败'
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
```

### 限制上传数量

通过 `max-count` 属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域。

```html
<z-uploader v-model="fileListMax" multiple :max-count="2" />
```

```js
const fileListMax = ref([])
```

### 限制上传大小

通过 `max-size` 属性可以限制上传文件的大小，超过大小的文件会被自动过滤，这些文件信息可以通过 `oversize` 事件获取。

```html
<z-uploader
  v-model="fileListSize"
  multiple
  :max-size="500 * 1024"
  @oversize="onOversize"
/>
```

```js
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const onOversize = () => {
  toast.showToast('文件大小不能超过 500kb')
}
```

### 自定义上传样式

通过默认插槽可以自定义上传区域的样式。

```html
<z-uploader>
  <z-button icon="upload" type="primary">上传文件</z-button>
</z-uploader>
```

### 自定义预览样式

通过 `preview-cover` 插槽可以自定义覆盖在预览区域上方的内容。

```html
<z-uploader v-model="fileList">
  <template #preview-cover="{ file }">
    <view class="preview-cover z-ellipsis">{{
      file?.url ? file?.url : file.file?.url
    }}</view>
  </template>
</z-uploader>

<style>
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
```

### 自定义预览大小

通过 `preview-size` 属性定义预览图和上传区域的大小。

```html
<z-uploader v-model="fileList" preview-size="180rpx" />
```

将 `preview-size` 设置为数组格式，可以分别设置宽高。数组第一项对应宽度，数组第二项对应高度。

```html
<z-uploader v-model="fileList" :preview-size="[60, 40]" />
```

### 上传前置处理

通过传入 `beforeRead` 函数可以在上传前进行校验和处理，返回 `true` 表示校验通过，返回 `false` 表示校验失败。支持返回 `Promise` 对 file 对象进行自定义处理，例如压缩图片。

```html
<z-uploader :before-read="beforeRead" />
<z-uploader :before-read="asyncBeforeRead" />
```

```js
const beforeRead = (file: any) => {
  if (file.type == 'image') {
    toast.showToast('上传图片拦截')
    return false
  }
  return true
}
const asyncBeforeRead = (file: any) =>
  new Promise((resolve, reject) => {
    if (file.type !== 'image') {
      toast.showToast('请上传图片格式文件')
      reject()
    } else {
      file.custom = {
        name: 'zebra-image-test'
      }
      resolve(file)
    }
  })
```

### 禁用文件上传

通过 `disabled` 属性禁用文件上传。

```html
<z-uploader disabled />
```

### 自定义单个图片预览

在 `v-model` 数组中设置单个预览图片属性，支持 `imageFit` `deletable` `previewSize` `beforeDelete`。

```html
<z-uploader v-model="fileList" :deletable="false" />
```

```js
const fileListOnly = ref([
  {
    url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
    deletable: true,
    beforeDelete: () => {
      toast.showToast('删除前置处理')
    }
  },
  {
    url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg'
  }
])
```

### 开启覆盖上传

```html
<z-uploader v-model="fileListRe" reupload max-count="2" />
```

```ts
const fileListRe = ref([
  { url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg' },
  { url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg' }
])
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 已上传的文件列表 | _FileListItem[]_ | - |
| accept | 允许上传的文件类型 | _string_ | `image` |
| name | 标识符，通常为一个唯一的字符串或数字，可以在回调函数的第二项参数中获取 | _number \| string_ | - |
| preview-size | 预览图和上传区域的尺寸，默认单位为 `px` | _number \| string \| Array_ | `160rpx` |
| preview-image | 是否在上传完成后展示预览图 | _boolean_ | `true` |
| preview-full-image | 是否在点击预览图后展示全屏图片预览 | _boolean_ | `true` |
| multiple | 是否开启图片多选 | _boolean_ | `false` |
| disabled | 是否禁用文件上传 | _boolean_ | `false` |
| readonly | 是否将上传区域设置为只读状态 | _boolean_ | `false` |
| deletable | 是否展示删除按钮 | _boolean_ | `true` |
| reupload | 是否开启覆盖上传，开启后会关闭图片预览 | _boolean_ | `false` |
| show-upload | 是否展示上传区域 | _boolean_ | `true` |
| capture | 图片选取模式 | _string_ | - |
| after-read | 文件读取完成后的回调函数 | _Function_ | - |
| before-read | 文件读取前的回调函数，返回 `false` 可终止文件读取，<br>支持返回 `Promise` | _Function_ | - |
| before-delete | 文件删除前的回调函数，返回 `false` 可终止文件读取，<br>支持返回 `Promise` | _Function_ | - |
| max-size | 文件大小限制，单位为 `byte` | _number \| string \| (file: File) => boolean_ | `Infinity` |
| max-count | 文件上传数量限制 | _number \| string_ | `Infinity` |
| upload-text | 上传区域文字提示 | _string_ | - |
| upload-icon | 上传区域图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | `upload` |

> 注意：上传组件基于uniapp的上传相关api。

### Events

| 事件名         | 说明                   | 回调参数            |
| -------------- | ---------------------- | ------------------- |
| oversize       | 文件大小超过限制时触发 | 同 `after-read`     |
| click-upload   | 点击上传区域时触发     | _event: MouseEvent_ |
| click-preview  | 点击预览图时触发       | 同 `after-read`     |
| click-reupload | 点击覆盖上传时触发     | 同 `after-read`     |
| delete         | 删除文件预览时触发     | 同 `after-read`     |

### Slots

| 名称           | 说明                           | 参数                 |
| -------------- | ------------------------------ | -------------------- |
| default        | 自定义上传区域                 | -                    |
| preview-delete | 自定义删除按钮                 | -                    |
| preview-cover  | 自定义覆盖在预览区域上方的内容 | _item: FileListItem_ |

### 回调参数

before-read、after-read、before-delete 执行时会传递以下回调参数：

| 参数名 | 说明                              | 类型     |
| ------ | --------------------------------- | -------- |
| file   | 选择文件后的回调信息                         | _object_ |
| detail | 额外信息，包含 name 和 index 字段 | _object_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-uploader-size | _160rpx_ | - |
| --z-uploader-icon-size | _48rpx_ | - |
| --z-uploader-icon-color | _var(--z-gray-4)_ | - |
| --z-uploader-text-color | _var(--z-text-color-2)_ | - |
| --z-uploader-text-font-size | _var(--z-font-size-sm)_ | - |
| --z-uploader-upload-background | _var(--z-gray-1)_ | - |
| --z-uploader-upload-active-color | _var(--z-active-color)_ | - |
| --z-uploader-delete-color | _var(--z-white)_ | - |
| --z-uploader-delete-icon-size | _28rpx_ | - |
| --z-uploader-delete-background | _rgba(0, 0, 0, 0.7)_ | - |
| --z-uploader-file-background | _var(--z-background)_ | - |
| --z-uploader-file-icon-size | _40rpx_ | - |
| --z-uploader-file-icon-color | _var(--z-gray-7)_ | - |
| --z-uploader-file-name-padding | _0 var(--z-padding-base)_ | - |
| --z-uploader-file-name-margin-top | _var(--z-padding-xs)_ | - |
| --z-uploader-file-name-font-size | _var(--z-font-size-sm)_ | - |
| --z-uploader-file-name-text-color | _var(--z-gray-7)_ | - |
| --z-uploader-mask-text-color | _var(--z-white)_ | - |
| --z-uploader-mask-background | _fade(var(--z-gray-8), 88%)_ | - |
| --z-uploader-mask-icon-size | _44rpx_ | - |
| --z-uploader-mask-message-font-size | _var(--z-font-size-sm)_ | - |
| --z-uploader-mask-message-line-height | _var(--z-line-height-xs)_ | - |
| --z-uploader-loading-icon-size | _44rpx_ | - |
| --z-uploader-loading-icon-color | _var(--z-white)_ | - |
| --z-uploader-disabled-opacity | _var(--z-disabled-opacity)_ | - |
| --z-uploader-border-radius | _0px_ | - |
