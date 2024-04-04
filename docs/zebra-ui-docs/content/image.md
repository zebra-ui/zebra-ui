# Image 图片

### 介绍

基于`uniapp`的`image`组件，并提供加载中提示、加载失败提示。

## 代码演示

### 基础用法

基础用法与原生 `uniapp`的`image`组件一致，可以设置 `src`、`width`、`height` 等属性。

```html
 <z-image width="100" height="100" src="https://cdn.zebraui.com/zebra-ui/images/demo.jpg" />
```

### 填充模式

通过 `mode` 属性可以设置图片填充模式，等同于uniapp的 [mode](https://uniapp.dcloud.net.cn/component/image.html) 属性，可选值见`uniapp`的`image`组件。

```html
<z-image
  width="150rpx"
  height="150rpx"
  :mode="item"
  :src="imageUrl"
/>
```

### 裁剪

通过 `mode` 属性可以设置图片裁剪位置，可选值见`uniapp`的`image`组件。

```html
<z-image
  width="150rpx"
  height="150rpx"
  :mode="item"
  :src="imageUrl"
/>
```

### 圆形图片

通过 `round` 属性可以设置图片变圆

```html
 <z-image round width="100" height="100" :src="imageUrl" />
```

### 加载中提示

`Image` 组件提供了默认的加载中提示，支持通过 `loading` 插槽自定义内容。

```html
 <z-image show-loading width="100" height="100" />
 <!-- 自定义加载中提示 -->
 <z-image show-loading width="100" height="100">
    <template #loading>
      <z-loading type="spinner" size="40rpx" />
    </template>
  </z-image>
```

### 加载失败提示

`Image` 组件提供了默认的加载失败提示，支持通过 `error` 插槽自定义内容。

```html
<z-image show-error width="100" height="100" src="x" />
<!-- 自定义加载失败提示 -->
<z-image show-error width="100" height="100" src="x">
  <template #error> 加载失败 </template>
</z-image>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | _string_ | - |
| mode | 图片裁剪、缩放的模式，等同于uniapp的 [mode](https://uniapp.dcloud.net.cn/component/image.html) 属性 | _string_ | `fill` |
| width | 宽度，默认单位为 `px` | _number \| string_ | - |
| height | 高度，默认单位为 `px` | _number \| string_ | - |
| radius | 圆角大小，默认单位为 `px` | _number \| string_ | `0` |
| round | 是否显示为圆形 | _boolean_ | `false` |
| block | 是否将根节点设置为块级元素，默认情况下为 `inline-block` 元素 | _boolean_ | `false` |
| show-error | 是否展示图片加载失败提示 | _boolean_ | `true` |
| show-loading | 是否展示图片加载中提示 | _boolean_ | `true` |
| error-icon | 失败时提示的图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | `error-fill` |
| loading-icon | 加载时提示的图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | `image-fill` |
| icon-size | 加载图标和失败图标的大小 | _number \| string_ | - |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](/icon#props) | _string_ | `z-icon` |
| customStyle | 自定义样式 | _object_ | - |

### mode 有效值

| 模式 |值|说明|
|--------|-----|-----|
| 缩放 |scaleToFill|不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素|
| 缩放 |aspectFit|保持纵横比缩放图片，使图片的长边能完全显示出来。|
|缩放|aspectFill|保持纵横比缩放图片，只保证图片的短边能完全显示出来。|
|缩放|widthFix|宽度不变，高度自动变化，保持原图宽高比不变|
|缩放|heightFix|高度不变，宽度自动变化，保持原图宽高比不变 |
|裁剪|top|不缩放图片，只显示图片的顶部区域|
|裁剪|bottom|不缩放图片，只显示图片的底部区域|
|裁剪|center|不缩放图片，只显示图片的中间区域|
|裁剪|left|不缩放图片，只显示图片的左边区域|
|裁剪|right|不缩放图片，只显示图片的右边区域|
|裁剪|top left|不缩放图片，只显示图片的左上边区域|
|裁剪|top right|不缩放图片，只显示图片的右上边区域|
|裁剪|bottom left|不缩放图片，只显示图片的左下边区域|
|裁剪|bottom right|不缩放图片，只显示图片的右下边区域|


### Events

| 事件名 | 说明               | 回调参数            |
| ------ | ------------------ | ------------------- |
| click  | 点击图片时触发     | _event_ |
| load   | 图片加载完毕时触发 | _event_      |
| error  | 图片加载失败时触发 | -                   |

### Slots

| 名称    | 说明                       |
| ------- | -------------------------- |
| default | 自定义图片下方的内容       |
| loading | 自定义加载中的提示内容     |
| error   | 自定义加载失败时的提示内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                               | 默认值                    | 描述 |
| ---------------------------------- | ------------------------- | ---- |
| --z-image-placeholder-text-color | _var(--z-text-color-2)_ | -    |
| --z-image-placeholder-font-size  | _var(--z-font-size-md)_ | -    |
| --z-image-placeholder-background | _var(--z-background)_   | -    |
| --z-image-loading-icon-size      | _64rpx_                    | -    |
| --z-image-loading-icon-color     | _var(--z-gray-4)_       | -    |
| --z-image-error-icon-size        | _64rpx_                    | -    |
| --z-image-error-icon-color       | _var(--z-gray-4)_       | -    |
