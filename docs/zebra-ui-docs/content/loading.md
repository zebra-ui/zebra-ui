# Loading 加载

### 介绍

加载图标，用于表示加载中的过渡状态。

## 代码演示

### 加载类型

通过 `type` 属性可以设置加载图标的类型，默认为 `circular`，可选值为 `spinner`。

```html
<z-loading />

<z-loading type="spinner" />
```

### 自定义颜色

通过 `color` 属性设置加载图标的颜色。

```html
<z-loading color="#1989fa" />

<z-loading type="spinner" color="#1989fa" />
```

### 自定义大小

通过 `size` 属性设置加载图标的大小，默认单位为 `px`。

```html
<z-loading size="24" />

<z-loading type="spinner" size="48rpx" />
```

### 加载文案

可以使用默认插槽在图标的右侧插入加载文案。

```html
<z-loading size="48rpx">加载中...</z-loading>
```

### 垂直排列

设置 `vertical` 属性后，图标和文案会垂直排列。

```html
<z-loading size="48rpx" vertical>加载中...</z-loading>
```

### 自定义文案颜色

通过 `color` 或者 `text-color` 属性设置加载文案的颜色。

```html
<!-- 可修改文案和加载图标的颜色 -->
<z-loading color="#0094ff" />

<!-- 只修改文案颜色 -->
<z-loading text-color="#0094ff" />
```

### 自定义图标

通过 `icon` 插槽可以自定义加载图标。

```html
<z-loading vertical>
  <template #icon>
    <z-icon name="undo" size="30" />
  </template>
  加载中...
</z-loading>
```

## API

### Props

| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| color      | 颜色                          | _string_           | `#c9c9c9`  |
| type       | 类型，可选值为 `spinner`      | _string_           | `circular` |
| size       | 加载图标大小，默认单位为 `px` | _number \| string_ | `60rpx`     |
| text-size  | 文字大小，默认单位为 `px`     | _number \| string_ | `28rpx`     |
| text-color | 文字颜色                      | _string_           | `#c9c9c9`  |
| vertical   | 是否垂直排列图标和文字内容    | _boolean_          | `false`    |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 加载文案       |
| icon    | 自定义加载图标 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                           | 默认值                    | 描述 |
| ------------------------------ | ------------------------- | ---- |
| --z-loading-text-color       | _var(--z-text-color-2)_ | -    |
| --z-loading-text-font-size   | _var(--z-font-size-md)_ | -    |
| --z-loading-spinner-color    | _var(--z-gray-5)_       | -    |
| --z-loading-spinner-size     | _60rpx_                    | -    |
| --z-loading-spinner-duration | _0.8s_                    | -    |
