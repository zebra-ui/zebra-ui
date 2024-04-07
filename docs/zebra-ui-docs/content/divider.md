# Divider 分割线

### 介绍

用于将内容分隔为多个区域。

## 代码演示

### 基础用法

默认渲染一条水平分割线。

```html
<z-divider />
```

### 展示文本

通过插槽在可以分割线中间插入内容。

```html
<z-divider>文本</z-divider>
```

### 内容位置

通过 `content-position` 指定内容所在位置。

```html
<z-divider content-position="left">文本</z-divider>
<z-divider content-position="right">文本</z-divider>
```

### 虚线

添加 `dashed` 属性使分割线渲染为虚线。

```html
<z-divider dashed>文本</z-divider>
```

### 自定义样式

可以直接通过 `style` 属性设置分割线的样式。

```html
<z-divider
  :custom-style="{
    borderColor: '#1989fa',
    color: '#1989fa',
    padding: '0 32rpx'
  }"
>
  文字
</z-divider>
```

### 垂直

```html
<div class="content">
  <z-divider vertical />
  文字
  <z-divider vertical dashed />
  文字
  <z-divider vertical :hairline="false" />
  文字
  <z-divider vertical :custom-style="{ borderColor: '#1989fa' }" />
</div>
```

## API

### Props

| 参数              | 说明                              | 类型      | 默认值   |
| ----------------- | --------------------------------- | --------- | -------- |
| dashed            | 是否使用虚线                      | _boolean_ | `false`  |
| hairline          | 是否使用 0.5px 线                 | _boolean_ | `true`   |
| content-position  | 内容位置，可选值为 `left` `right` | _string_  | `center` |
| vertical | 是否使用垂直                      | _boolean_ | `false`  |

### Slots

| 名称    | 说明 |
| ------- | ---- |
| default | 内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                              | 默认值                    | 描述 |
| --------------------------------- | ------------------------- | ---- |
| --z-divider-margin              | _var(--z-padding-md) 0_ | -    |
| --z-divider-vertical-margin     | _0 var(--z-padding-xs)_ | -    |
| --z-divider-text-color          | _var(--z-text-color-2)_ | -    |
| --z-divider-font-size           | _var(--z-font-size-md)_ | -    |
| --z-divider-line-height         | _48rpx_                    | -    |
| --z-divider-border-color        | _var(--z-border-color)_ | -    |
| --z-divider-content-padding     | _var(--z-padding-md)_   | -    |
| --z-divider-content-left-width  | _10%_                     | -    |
| --z-divider-content-right-width | _10%_                     | -    |
