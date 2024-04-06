# FloatingBubble 浮动气泡

### 介绍

悬浮在页面边缘的可点击气泡。

## 代码演示

### 基础用法

浮动气泡默认展示在右下角，并允许在 y 轴方向上下拖拽，你可以通过 `icon` 属性设置气泡的图标。

```html
<z-floating-bubble icon="setting-fill" @click="onClick" />
```

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const onClick = () => {
  toast.showToast('点击气泡')
}
```

### 自由拖拽和磁吸

允许 x 和 y 轴方向拖拽，吸附到 x 轴方向最近一边。

```html
<z-floating-bubble
  axis="xy"
  icon="setting-fill"
  magnetic="x"
  @offset-change="onOffsetChange"
/>
```

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const onOffsetChange = (offset: any) => {
  toast.showToast(`x: ${offset.x.toFixed(0)}, y: ${offset.y.toFixed(0)}`)
}
```

### 双向绑定

使用 `v-model:offset` 控制 FloatingBubble 的位置。

```html
<z-floating-bubble v-model:offset="offset" axis="xy" icon="chat" />
```

```js
const offset = ref({ x: 200, y: 400 })
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:offset | 控制气泡位置 | _OffsetType_ | `默认右下角坐标` |
| axis | 拖拽的方向，`xy` 代表自由拖拽，`lock` 代表禁止拖拽 | _'x' \| 'y' \| 'xy' \| 'lock'_ | `y` |
| magnetic | 自动磁吸的方向 | _'x' \| 'y'_ | - |
| icon | 气泡图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | - |
| gap | 气泡与窗口的最小间距，单位为 `px` | _number_ | `24` |

### Events

| 事件名        | 说明                         | 回调参数                 |
| ------------- | ---------------------------- | ------------------------ |
| click         | 点击组件时触发               | _MouseEvent_             |
| offset-change | 由用户拖拽导致位置改变后触发 | _{x: string, y: string}_ |

### Slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | 自定义气泡显示内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-floating-bubble-size | _96rpx_ | - |
| --z-floating-bubble-initial-gap | _48rpx_ | - |
| --z-floating-bubble-icon-size | _56rpx_ | - |
| --z-floating-bubble-background | _var(--z-primary-color)_ | - |
| --z-floating-bubble-color | _var(--z-background-2)_ | - |
| --z-floating-bubble-z-index | _999_ | - |
| --z-floating-bubble-border-radius | _--z-floating-bubble-border-radius_ | - |
