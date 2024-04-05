# Signature 签名

### 介绍

用于签名场景的组件。

## 代码演示

### 基础用法

当点击确认按钮时，组件会触发 `submit` 事件，事件的第一个参数为 `data`，包含以下字段：

- `image`：图片通过canvas导出的路径，小程序此路径为临时文件路径。
- `width`：图片的宽度。
- `height`：图片的高度。
-  `canvas`：Canvas 元素。

```html
<z-signature @submit="onSubmit" @clear="onClear" />
<z-image v-if="image" :width="width" :height="height" :src="image" />
```

```js
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const image = ref('')
const onSubmit = (data: any) => {
  image.value = data.image
  width.value = data.width
  height.value = data.height
}
const onClear = () => toast.showToast('clear')
```

### 自定义颜色

通过 `pen-color` 来自定义笔触颜色。

```html
<z-signature pen-color="#ff0000" @submit="onSubmit" @clear="onClear" />
```

### 自定义线宽

通过 `line-width` 来自定义线条宽度。

```html
<z-signature :line-width="6" @submit="onSubmit" @clear="onClear" />
```

### 自定义背景颜色

通过 `background-color` 来自定义背景颜色。

```html
<z-signature background-color="#eee" @submit="onSubmit" @clear="onClear" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| pen-color | 笔触颜色，默认黑色 | _string_ | `#000` |
| line-width | 线条宽度 | _number_ | `3` |
| background-color | 背景颜色 | _string_ | - |
| clear-button-text | 清除按钮文案 | _string_ | `清空` |
| confirm-button-text | 确认按钮文案 | _string_ | `确认` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| start | 开始签名时触发 | - |
| end | 结束签名时触发 | - |
| signing | 签名过程中触发 | _event: TouchEvent_ |
| submit | 点击确定按钮时触发 | _data: { image: string; canvas: HTMLCanvasElement }_ |
| clear | 点击取消按钮时触发 | - |

### 方法

通过 ref 可以获取到 Signature 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| resize | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | - | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-signature-padding | _var(--z-padding-xs)_ | - |
| --z-signature-content-height | _400rpx_ | 画布高度 |
| --z-signature-content-background | _var(--z-background-2)_ | 画布背景色 |
| --z-signature-content-border | _2rpx dotted #dadada_ | 画布边框样式 |
