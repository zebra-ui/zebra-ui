# Badge 徽标

### 介绍

在右上角展示徽标数字或小红点。

## 代码演示

### 基础用法

设置 `content` 属性后，Badge 会在子元素的右上角显示对应的徽标，也可以通过 `dot` 来显示小红点。

```html
<z-badge :content="5">
  <view class="child" />
</z-badge>
<z-badge :content="10">
  <view class="child" />
</z-badge>
<z-badge content="Hot">
  <view class="child" />
</z-badge>
<z-badge dot>
  <view class="child" />
</z-badge>

<style>
.demo-badge {
  .child {
    width: 80rpx;
    height: 80rpx;
    background: #fff;
    border-radius: 8rpx;
  }
}
</style>
```

### 最大值

设置 `max` 属性后，当 `content` 的数值超过最大值时，会自动显示为 `{max}+`。

```html
<z-badge :content="20" max="9">
  <view class="child" />
</z-badge>
<z-badge :content="50" max="20">
  <view class="child" />
</z-badge>
<z-badge :content="200" max="99">
  <view class="child" />
</z-badge>
```

### 自定义颜色

通过 `color` 属性来设置徽标的颜色。

```html
<z-badge :content="5" color="#1989fa">
  <view class="child" />
</z-badge>
<z-badge :content="10" color="#1989fa">
  <view class="child" />
</z-badge>
<z-badge dot color="#1989fa">
  <view class="child" />
</z-badge>
```

### 自定义徽标内容

通过 `content` 插槽可以自定义徽标的内容，比如插入一个图标。

```html
<z-badge>
  <view class="child" />
  <template #content>
    <z-icon name="download" />
  </template>
</z-badge>
<z-badge>
  <view class="child" />
  <template #content>
    <z-icon name="flag" />
  </template>
</z-badge>
<z-badge>
  <view class="child" />
  <template #content>
    <z-icon name="mail" />
  </template>
</z-badge>
```

### 自定义徽标位置

通过 `position` 属性来设置徽标的位置。

```html
<z-badge :content="10" position="top-left">
  <view class="child" />
</z-badge>
<z-badge :content="10" position="bottom-left">
  <view class="child" />
</z-badge>
<z-badge :content="10" position="bottom-right">
  <view class="child" />
</z-badge>
```

### 独立展示

当 Badge 没有子元素时，会作为一个独立的元素进行展示。

```html
<z-badge :content="20" />

<z-badge :content="200" max="99" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 徽标内容 | _number \| string_ | - |
| color | 徽标背景颜色 | _string_ | `#ee0a24` |
| dot | 是否展示为小红点 | _boolean_ | `false` |
| max | 最大值，超过最大值会显示 `{max}+`，仅当 content 为数字时有效 | _number \| string_ | - |
| offset | 设置徽标的偏移量，数组的两项分别对应水平向右和垂直向下方向的偏移量，默认单位为 `px` | _[number \| string, number \| string]_ | - |
| show-zero | 当 content 为数字 0 或字符串 '0' 时，是否展示徽标 | _boolean_ | `true` |
| position | 徽标位置，可选值为 `top-left` `bottom-left` `bottom-right` | _string_ | `top-right` |

### Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 徽标包裹的子元素 |
| content | 自定义徽标内容   |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-badge-size | _32rpx_ | - |
| --z-badge-color | _var(--z-white)_ | - |
| --z-badge-padding | _0 6rpx_ | - |
| --z-badge-font-size | _var(--z-font-size-sm)_ | - |
| --z-badge-font-weight | _var(--z-font-bold)_ | - |
| --z-badge-border-width | _var(--z-border-width)_ | - |
| --z-badge-background | _var(--z-danger-color)_ | - |
| --z-badge-dot-color | _var(--z-danger-color)_ | - |
| --z-badge-dot-size | _16rpx_ | - |
