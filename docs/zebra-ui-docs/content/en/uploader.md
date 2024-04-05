# Uploader file upload

### introduce

Used to upload local images or files to the server, and display preview images and upload progress during the upload process. Currently, the Uploader component does not include the interface logic for uploading files to the server. This step needs to be implemented by yourself.

> This component can upload pictures, videos, and audios. APIs for image and video upload based on uniapp.

## Code Demo

### Basic usage

After the file is uploaded, the `after-read` callback function will be triggered to obtain the corresponding callback information.

```html
<z-uploader :after-read="afterRead" />
```

```js
const afterRead = (file) => {
   // At this point you can upload the file to the server yourself
   console.log(file);
};
```

### File preview

Through `v-model`, you can bind the uploaded file list and display a preview of the file list.

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

### Upload status

The upload status can be identified through the `status` attribute. `uploading` means uploading, `failed` means the upload failed, and `done` means the upload is completed.

```html
<z-uploader v-model="fileListStatus" :after-read="afterReadStatus" />
```

```js
const fileListStatus = ref([
   {
     url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
     status: 'uploading',
     message: 'Uploading...'
   },
   {
     url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
     status: 'failed',
     message: 'Upload failed'
   }
])
const afterReadStatus = (file: any) => {
   file.status = 'uploading'
   file.message = 'Uploading...'

   setTimeout(() => {
     file.status = 'failed'
     file.message = 'Upload failed'
   }, 1000)
}
```

### Limit the number of uploads

The number of uploaded files can be limited through the `max-count` attribute. When the number of uploaded files reaches the limit, the upload area will be automatically hidden.

```html
<z-uploader v-model="fileListMax" multiple :max-count="2" />
```

```js
const fileListMax = ref([])
```

### Limit upload size

You can limit the size of uploaded files through the `max-size` attribute. Files that exceed the size will be automatically filtered. This file information can be obtained through the `oversize` event.

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
   toast.showToast('File size cannot exceed 500kb')
}
```

### Custom upload style

The default slot allows you to customize the style of the upload area.

```html
<z-uploader>
   <z-button icon="upload" type="primary">Upload files</z-button>
</z-uploader>
```

### Custom preview style

The content covered above the preview area can be customized through the `preview-cover` slot.

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

### Custom preview size

Define the size of the preview image and upload area through the `preview-size` attribute.

```html
<z-uploader v-model="fileList" preview-size="180rpx" />
```

Set `preview-size` to array format, and you can set the width and height separately. The first item in the array corresponds to the width, and the second item in the array corresponds to the height.

```html
<z-uploader v-model="fileList" :preview-size="[60, 40]" />
```

### Upload pre-processing

By passing in the `beforeRead` function, you can perform verification and processing before uploading. Returning `true` means that the verification has passed, and returning `false` means that the verification has failed. Supports returning `Promise` for custom processing of file objects, such as compressing images.

```html
<z-uploader :before-read="beforeRead" />
<z-uploader :before-read="asyncBeforeRead" />
```

```js
const beforeRead = (file: any) => {
   if (file.type == 'image') {
     toast.showToast('Upload image interception')
     return false
   }
   return true
}
const asyncBeforeRead = (file: any) =>
   new Promise((resolve, reject) => {
     if (file.type !== 'image') {
       toast.showToast('Please upload image format file')
       reject()
     } else {
       file.custom = {
         name: 'zebra-image-test'
       }
       resolve(file)
     }
   })
```

### Disable file upload

Disable file upload via the `disabled` attribute.

```html
<z-uploader disabled />
```

### Customize single image preview

Set a single preview image property in the `v-model` array, supporting `imageFit` `deletable` `previewSize` `beforeDelete`.

```html
<z-uploader v-model="fileList" :deletable="false" />
```

```js
const fileListOnly = ref([
   {
     url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
     deletable: true,
     beforeDelete: () => {
       toast.showToast('Delete preprocessing')
     }
   },
   {
     url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg'
   }
])
```

### Enable overlay upload

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

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | Uploaded file list | _FileListItem[]_ | - |
| accept | File types allowed to be uploaded | _string_ | `image` |
| name | Identifier, usually a unique string or number, can be obtained in the second parameter of the callback function | _number \| string_ | - |
| preview-size | The size of the preview image and upload area, the default unit is `px` | _number \| string \| Array_ | `160rpx` |
| preview-image | Whether to display the preview image after uploading | _boolean_ | `true` |
| preview-full-image | Whether to display a full-screen image preview after clicking the preview image | _boolean_ | `true` |
| multiple | Whether to enable image multiple selection | _boolean_ | `false` |
| disabled | Whether to disable file upload | _boolean_ | `false` |
| readonly | Whether to set the upload area to read-only status | _boolean_ | `false` |
| deletable | Whether to display the delete button | _boolean_ | `true` |
| reupload | Whether to enable overlay upload, which will turn off image preview | _boolean_ | `false` |
| show-upload | Whether to display the upload area | _boolean_ | `true` |
| capture | Image selection mode | _string_ | - |
| after-read | Callback function after file reading is completed| _Function_ | - |
| before-read | Callback function before file reading, return `false` to terminate file reading, <br>supports returning `Promise` | _Function_ | - |
| before-delete | Callback function before file deletion, return `false` to terminate file reading, <br>supports returning `Promise` | _Function_ | - |
| max-size | File size limit in `byte` | _number \| string \| (file: File) => boolean_ | `Infinity` |
| max-count | File upload limit | _number \| string_ | `Infinity` |
| upload-text | Upload area text prompt | _string_ | - |
| upload-icon | Upload area icon name or image link, equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | `upload` |

> Note: The upload component is based on the upload-related API of uniapp.

### Events

| Event name | Description | Callback parameters |
| -------------- | ---------------------- | ------------------- |
| oversize | Triggered when the file size exceeds the limit | Same as `after-read` |
| click-upload | Triggered when the upload area is clicked | _event: MouseEvent_ |
| click-preview | Triggered when the preview image is clicked | Same as `after-read` |
| click-reupload | Triggered when clicking to overwrite upload | Same as `after-read` |
| delete | Triggered when deleting file preview | Same as `after-read` |

### Slots

| Name | Description | Parameters |
| -------------- | --------------------------------- | --------------------- |
| default | Custom upload area | - |
| preview-delete | Custom delete button | - |
| preview-cover | Customize the content covered above the preview area | _item: FileListItem_ |

### Callback parameters

When before-read, after-read, and before-delete are executed, the following callback parameters are passed:

| Parameter name | Description | Type |
| ------ | ---------------------------------- | -------- |
| file | Callback information after selecting a file | _object_ |
| detail | Additional information, including name and index fields | _object_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
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