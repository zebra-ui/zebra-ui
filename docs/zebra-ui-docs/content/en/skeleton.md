# Skeleton

### introduce

Used to display a set of placeholder graphics during content loading.

## Code Demo

### Basic usage

Display the title placeholder image through the `title` attribute, and configure the number of placeholder paragraph lines through the `row` attribute.

```html
<z-skeleton title :row="3" />
```

### Show avatar

Display the avatar placeholder image through the `avatar` attribute.

```html
<z-skeleton title avatar :row="3" />
```

### Display child components

Set the `loading` property to `false` to indicate that the content is loaded. At this time, the placeholder image will be hidden and the child components of `Skeleton` will be displayed.

```html
<view class="demo-skeleton-switch">
   <z-switch v-model="show" />
</view>
<z-skeleton title avatar :row="2" :loading="!show">
   <view class="demo-skeleton-preview">
     <image src="https://cdn.zebraui.com/zebra-ui/images/logo.png" />
     <view class="demo-skeleton-content">
       <view class="title">Title</view>
       <view class="desc"
         >zebra-swiper is a mobile carousel component developed based on uniapp. </view
       >
     </view>
   </view>
</z-skeleton>
```

```js
import { ref } from 'vue'
const show = ref(false)
```

```css
.demo-skeleton {
   color: var(--z-text-color);

   &-switch {
     margin-bottom: 30rpx;
   }

   &-preview {
     display: flex;

     image {
       flex-shrink: 0;
       width: 100rpx;
       height: 100rpx;
     }
   }

   &-content {
     margin-top: 16rpx;

     .title {
       font-size: 36rpx;
       line-height: 50rpx;
     }

     .desc {
       font-size: 26rpx;
       line-height: 40rpx;
     }
   }
}
```

### Custom display content

Display of custom content is completed through the `template` slot.

```html
<z-skeleton>
   <template #template>
     <view :style="{ display: 'flex', width: '100%' }">
       <z-skeleton-image />
       <view :style="{ flex: 1, marginLeft: '32rpx' }">
         <z-skeleton-paragraph row-width="60%" />
         <z-skeleton-paragraph />
         <z-skeleton-paragraph />
         <z-skeleton-paragraph />
       </view>
     </view>
   </template>
</z-skeleton>
```

## API

### Skeleton Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| row | Paragraph placeholder map row number | _number \| string_ | `0` |
| row-width | Width of paragraph placeholder image, you can pass an array to set the width of each row | _number \| string \|<br>(number \| string)[]_ | `100%` |
| title | Whether to display the title placeholder image | _boolean_ | `false` |
| avatar | Whether to display the avatar placeholder image | _boolean_ | `false` |
| loading | Whether to display the skeleton screen, when passing `false`, the content of the subcomponent will be displayed | _boolean_ | `true` |
| animate | Whether to enable animation | _boolean_ | `true` |
| round | Whether to display titles and paragraphs as rounded corners | _boolean_ | `false` |
| title-width | Title placeholder image width | _number \| string_ | `40%` |
| avatar-size | Avatar placeholder image size | _number \| string_ | `64rpx` |
| avatar-shape | Avatar placeholder image shape, optional value is `square` | _string_ | `round` |

### SkeletonParagraph Props

| Parameters | Description | Type | Default value |
| --------- | --------------------- | --------- | ------- |
| round | Whether to display paragraphs in rounded style | _boolean_ | `false` |
| row-width | Paragraph placeholder image width | _string_ | `100%` |

### SkeletonTitle Props

| Parameters | Description | Type | Default value |
| ----------- | ----------------------- | ---------------- | ------- |
| round | Whether to display the title in rounded style | _boolean_ | `false` |
| title-width | Title placeholder image width | _number \| string_ | `40%` |

### SkeletonAvatar Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| avatar-size | Avatar placeholder image size | _number \| string_ | `64rpx` |
| avatar-shape | Avatar placeholder image shape, optional value is `square` | _string_ | `round` |

### SkeletonImage Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| image-size | Image placeholder size | _number \| string_ | `64rpx` |
| image-shape | Image placeholder shape, optional value is `square` | _string_ | `round` |

### Skeleton Slots

| Name | Description |
| -------- | ---------- |
| default | Skeleton screen content |
| template | custom content |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ---------------------------------- | ------------------------- | ---- |
| --z-skeleton-paragraph-height | _32rpx_ | - |
| --z-skeleton-paragraph-background | _var(--z-active-color)_ | - |
| --z-skeleton-paragraph-margin-top | _var(--z-padding-sm)_ | - |
| --z-skeleton-title-width | _40%_ | - |
| --z-skeleton-avatar-size | _64rpx_ | - |
| --z-skeleton-avatar-background | _var(--z-active-color)_ | - |
| --z-skeleton-duration | _1.2s_ | - |
| --z-skeleton-image-size | _192rpx_ |
| --z-skeleton-image-radius | _48rpx_ | - |