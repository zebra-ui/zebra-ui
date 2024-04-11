# Tag 标签

### 介绍

用于标记关键词和概括主要内容。

## 代码演示

### 基础用法

通过 `type` 属性控制标签颜色。

```html
<z-tag type="primary">标签</z-tag>
<z-tag type="success">标签</z-tag>
<z-tag type="danger">标签</z-tag>
<z-tag type="warning">标签</z-tag>
```

### 空心样式

设置 `plain` 属性设置为空心样式。

```html
<z-tag plain type="primary">标签</z-tag>
```

### 圆角样式

通过 `round` 设置为圆角样式。

```html
<z-tag round type="primary">标签</z-tag>
```

### 标记样式

通过 `mark` 设置为标记样式(半圆角)。

```html
<z-tag mark type="primary">标签</z-tag>
```

### 可关闭标签

添加 `closeable` 属性表示标签是可关闭的，关闭标签时会触发 `close` 事件，在 `close` 事件中可以执行隐藏标签的逻辑。

```html
<z-tag :show="show" closeable size="medium" type="primary" @close="close">
  标签
</z-tag>
```

```js
import { ref } from 'vue';
const show = ref(true);
const close = () => {
  show.value = false;
};
```

### 标签大小

通过 `size` 属性调整标签大小。

```html
<z-tag type="primary">标签</z-tag>
<z-tag type="primary" size="medium">标签</z-tag>
<z-tag type="primary" size="large">标签</z-tag>
```

### 自定义颜色

通过 `color` 和 `text-color` 属性设置标签颜色。

```html
<z-tag color="#7232dd">标签</z-tag>
<z-tag color="#ffe1e1" text-color="#ad0000">标签</z-tag>
<z-tag color="#7232dd" plain>标签</z-tag>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `danger` `warning` | _string_ | `default` |
| size | 大小, 可选值为 `large` `medium` | _string_ | - |
| color | 标签颜色 | _string_ | - |
| show | 是否展示标签 | _boolean_ | `true` |
| plain | 是否为空心样式 | _boolean_ | `false` |
| round | 是否为圆角样式 | _boolean_ | `false` |
| mark | 是否为标记样式 | _boolean_ | `false` |
| text-color | 文本颜色，优先级高于 `color` 属性 | _string_ | `white` |
| closeable | 是否为可关闭标签 | _boolean_ | `false` |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 标签显示内容 |

### Events

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| click  | 点击时触发     | _event: MouseEvent_ |
| close  | 关闭标签时触发 | _event: MouseEvent_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-tag-padding | _0 var(--z-padding-base)_ | - |
| --z-tag-text-color | _var(--z-white)_ | - |
| --z-tag-font-size | _var(--z-font-size-sm)_ | - |
| --z-tag-radius | _4rpx_ | - |
| --z-tag-line-height | _32rpx_ | - |
| --z-tag-medium-padding | _4rpx 12rpx_ | - |
| --z-tag-large-padding | _var(--z-padding-base) var(--z-padding-xs)_ | - |
| --z-tag-large-radius | _var(--z-radius-md)_ | - |
| --z-tag-large-font-size | _var(--z-font-size-md)_ | - |
| --z-tag-round-radius | _var(--z-radius-max)_ | - |
| --z-tag-danger-color | _var(--z-danger-color)_ | - |
| --z-tag-primary-color | _var(--z-primary-color)_ | - |
| --z-tag-success-color | _var(--z-success-color)_ | - |
| --z-tag-warning-color | _var(--z-warning-color)_ | - |
| --z-tag-default-color | _var(--z-gray-6)_ | - |
| --z-tag-plain-background | _var(--z-background-2)_ | - |
