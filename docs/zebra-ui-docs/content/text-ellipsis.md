# TextEllipsis 文本省略

### 介绍

对长文本进行省略，支持展开/收起。

> 必须通过custom-style属性指定font-size。

## 代码演示

### 基础用法

默认展示 `1` 行，超过 `1` 行显示省略号。

```html
<z-text-ellipsis
  :content="text1"
  :custom-style="{ 'font-size': '26rpx' }"
/>
```

```js
import { ref } from 'vue'
const text1 = ref(
  'zebra-swiper 是基于uniapp开发的一款适配多端的移动端轮播组件。'
)
```

### 展开/收起

超过行数支持展开/收起。

```html
<z-text-ellipsis
  :content="text2"
  :custom-style="{ 'font-size': '26rpx' }"
  expand-text="展开"
  collapse-text="收起"
/>
```

```js
const text2 = ref(
  'uniapp 的swiper组件存在很大的局限性，无法完成一些复杂的轮播效果。而zebra-swiper不仅可以实现一些3D轮播效果，还可以通过参数来定义你想要的效果。'
)
```

### 自定义展示行数

通过设置 `rows` 限制展示行数。

```html
<z-text-ellipsis
  rows="3"
  :content="text3"
  :custom-style="{ 'font-size': '26rpx' }"
  expand-text="展开"
  collapse-text="收起"
/>
```

```js
const text3 = ref(
  'zebra-swiper 是基于uniapp开发的一款移动端轮播组件。uniapp 的swiper组件存在很大的局限性，无法完成一些复杂的轮播效果。而zebra-swiper不仅可以实现一些3D轮播效果，还可以通过参数来定义你想要的效果。我们正在全面向swiperjs (opens new window)看齐，并且在小程序中，依然可以实现炫酷的轮播效果。'
)
```

### 自定义省略位置

通过设置 `position` 控制省略位置。

- 头部省略：

```html
<z-text-ellipsis
  rows="1"
  :content="text3"
  :custom-style="{ 'font-size': '26rpx' }"
  expand-text="展开"
  collapse-text="收起"
  position="start"
/>
```

```js
const text3 = ref(
  'zebra-swiper 是基于uniapp开发的一款移动端轮播组件。uniapp 的swiper组件存在很大的局限性，无法完成一些复杂的轮播效果。而zebra-swiper不仅可以实现一些3D轮播效果，还可以通过参数来定义你想要的效果。我们正在全面向swiperjs (opens new window)看齐，并且在小程序中，依然可以实现炫酷的轮播效果。'
)
```

- 中部省略：

```html
<z-text-ellipsis
  rows="2"
  :content="text3"
  :custom-style="{ 'font-size': '26rpx' }"
  expand-text="展开"
  collapse-text="收起"
  position="middle"
/>
```

```js
const text3 = ref(
  'zebra-swiper 是基于uniapp开发的一款移动端轮播组件。uniapp 的swiper组件存在很大的局限性，无法完成一些复杂的轮播效果。而zebra-swiper不仅可以实现一些3D轮播效果，还可以通过参数来定义你想要的效果。我们正在全面向swiperjs (opens new window)看齐，并且在小程序中，依然可以实现炫酷的轮播效果。'
)
```

### 自定义操作内容

通过插槽 `action` 自定义操作内容。

```html
<z-text-ellipsis
  :content="text1"
  :custom-style="{ 'font-size': '26rpx' }"
>
  <template #action="{ expanded }">
    {{ expanded ? '收起' : '展开' }}
  </template>
</z-text-ellipsis>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 展示的行数 | _number \| string_ | `1` |
| content | 需要展示的文本 | _string_ | - |
| expand-text | 展开操作的文案 | _string_ | - |
| collapse-text | 收起操作的文案 | _string_ | - |
| dots | 省略号的文本内容 | _string_ | `'...'` |
| position | 省略位置，可选值为 `start` `middle` | _string_ | `'end'` |

### Events

| 事件名       | 说明                | 回调参数            |
| ------------ | ------------------- | ------------------- |
| click-action | 点击展开/收起时触发 | _event: MouseEvent_ |

### TextEllipsis 方法

通过 ref 可以获取到 TextEllipsis 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggle | 切换文本的展开状态，传 `true` 为展开，`false` 为收起，不传参为切换 | _expanded?: boolean_ | - |

### Slots

| 名称            | 说明       | 参数                    |
| --------------- | ---------- | ----------------------- |
| action | 自定义操作 | _{ expanded: boolean }_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                             | 默认值            | 描述           |
| -------------------------------- | ----------------- | -------------- |
| --z-text-ellipsis-action-color | _var(--z-blue)_ | 操作按钮的颜色 |
| --z-text-ellipsis-line-height  | _1.6_             | 文本的行高     |
