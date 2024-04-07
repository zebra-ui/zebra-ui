# Empty 空状态

### 介绍

空状态时的占位提示。

## 代码演示

### 基础用法

```html
<z-empty description="描述文字" />
```

### 图片类型

Empty 组件内置了多种占位图片类型，可以在不同业务场景下使用。

```html
<!-- 通用错误 -->
<z-empty image="error" description="描述文字" />
<!-- 网络错误 -->
<z-empty image="network" description="描述文字" />
<!-- 搜索提示 -->
<z-empty image="search" description="描述文字" />
```

### 自定义大小

通过 `image-size` 属性图片的大小。

```html
<z-empty image-size="500rpx" description="描述文字" />
```

将 `image-size` 设置为数组格式，可以分别设置宽高。数组第一项对应宽度，数组第二项对应高度。

```html
<z-empty :image-size="[60, 40]" description="描述文字" />
```

### 自定义图片

需要自定义图片时，可以在 image 属性中传入任意图片 URL。

```html
<z-empty
  image="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg"
  :image-size="80"
  description="描述文字"
/>
```

### 底部内容

通过默认插槽可以在 Empty 组件的下方插入内容。

```html
<z-empty description="描述文字">
  <z-button
    type="primary"
    round
    :custom-style="{ width: '300rpx' }"
    class="bottom-button"
  >
    按钮
  </z-button>
</z-empty>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image | 图片类型，可选值为 `error` `network` `search`，支持传入图片 URL | _string_ | `default` |
| image-size | 图片大小，默认单位为 `px` | _number \| string \| Array_ | - |
| description | 图片下方的描述文字 | _string_ | - |

### Slots

| 名称        | 说明           |
| ----------- | -------------- |
| default     | 自定义底部内容 |
| image       | 自定义图标     |
| description | 自定义描述文字 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                                | 默认值                      | 描述 |
| ----------------------------------- | --------------------------- | ---- |
| --z-empty-padding                 | _var(--z-padding-xl) 0_   | -    |
| --z-empty-image-size              | _320rpx_                     | -    |
| --z-empty-description-margin-top  | _var(--z-padding-md)_     | -    |
| --z-empty-description-padding     | _0 120rpx_                    | -    |
| --z-empty-description-color       | _var(--z-text-color-2)_   | -    |
| --z-empty-description-font-size   | _var(--z-font-size-md)_   | -    |
| --z-empty-description-line-height | _var(--z-line-height-md)_ | -    |
| --z-empty-bottom-margin-top       | _48rpx_                      | -    |
