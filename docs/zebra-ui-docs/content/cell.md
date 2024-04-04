# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

## 代码演示

### 基础用法

`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。

```html
<z-cell-group>
  <z-cell title="单元格" value="内容" />
  <z-cell title="单元格" value="内容" label="描述信息" />
</z-cell-group>
```

### 卡片风格

通过 `CellGroup` 的 `inset` 属性，可以将单元格转换为圆角卡片风格。

```html
<z-cell-group inset>
  <z-cell title="单元格" value="内容" />
  <z-cell title="单元格" value="内容" label="描述信息" />
</z-cell-group>
```

### 单元格大小

通过 `size` 属性可以控制单元格的大小。

```html
<z-cell title="单元格" value="内容" size="large" />
<z-cell title="单元格" value="内容" size="large" label="描述信息" />
```

### 展示图标

通过 `icon` 属性在标题左侧展示图标。

```html
<z-cell-group>
  <z-cell title="单元格" value="内容" icon="appstore" />
  <z-cell title="单元格" value="内容" icon="setting" />
</z-cell-group>
```

### 展示箭头

设置 `is-link` 属性后会在单元格右侧显示箭头，并且可以通过 `arrow-direction` 属性控制箭头方向。

```html
<z-cell title="单元格" is-link />
<z-cell title="单元格" is-link value="内容" />
<z-cell title="单元格" is-link arrow-direction="down" value="内容" />
```

### 分组标题

通过 `CellGroup` 的 `title` 属性可以指定分组标题。

```html
<z-cell-group title="分组1">
  <z-cell title="单元格" value="内容" />
</z-cell-group>
<z-cell-group title="分组2">
  <z-cell title="单元格" value="内容" />
</z-cell-group>
```

### 使用插槽

如以上用法不能满足你的需求，可以使用插槽来自定义内容。

```html
<z-cell value="内容" is-link>
  <!-- 使用 title 插槽来自定义标题 -->
  <template #title>
    <text class="custom-title">单元格</text>
    <z-tag type="primary">标签</z-tag>
  </template>
</z-cell>

<z-cell title="单元格" icon="creditcard">
  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
  <template #right-icon>
    <z-icon name="search" class="search-icon" />
  </template>
</z-cell>

<style lang="scss" scoped>
.demo-cell {
  .custom-title {
    margin-right: 10rpx;
  }
}
</style>
```

### 垂直居中

通过 `center` 属性可以让 `Cell` 的左右内容都垂直居中。

```html
<z-cell center title="单元格" value="内容" label="描述信息" />
```

## API

### CellGroup Props

| 参数   | 说明                   | 类型      | 默认值  |
| ------ | ---------------------- | --------- | ------- |
| title  | 分组标题               | _string_  | `-`     |
| inset  | 是否展示为圆角卡片风格 | _boolean_ | `false` |
| border | 是否显示外边框         | _boolean_ | `true`  |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧标题 | _number \| string_ | - |
| value | 右侧内容 | _number \| string_ | - |
| label | 标题下方的描述信息 | _string_ | - |
| size | 单元格大小，可选值为 `large` `normal` | _string_ | - |
| icon | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | - |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](/icon#props) | _string_ | `z-icon` |
| border | 是否显示内边框 | _boolean_ | `true` |
| clickable | 是否开启点击反馈 | _boolean_ | `null` |
| is-link | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |
| title-style | 左侧标题额外样式 | _string \| Array \| object_ | - |
| title-class | 左侧标题额外类名 | _string \| Array \| object_ | - |
| value-class | 右侧内容额外类名 | _string \| Array \| object_ | - |
| label-class | 描述信息额外类名 | _string \| Array \| object_ | - |

### Cell Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| click  | 点击单元格时触发 | _event_ |

### CellGroup Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 默认插槽       |
| title   | 自定义分组标题 |

### Cell Slots

| 名称       | 说明                         |
| ---------- | ---------------------------- |
| title      | 自定义左侧标题               |
| value      | 自定义右侧内容               |
| label      | 自定义标题下方的描述信息     |
| icon       | 自定义左侧图标               |
| right-icon | 自定义右侧图标               |
| extra      | 自定义单元格最右侧的额外内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-cell-font-size | _var(--z-font-size-md)_ | - |
| --z-cell-line-height | _48rpx_ | - |
| --z-cell-vertical-padding | _20rpx_ | - |
| --z-cell-horizontal-padding | _var(--z-padding-md)_ | - |
| --z-cell-text-color | _var(--z-text-color)_ | - |
| --z-cell-background | _var(--z-background-2)_ | - |
| --z-cell-border-color | _var(--z-border-color)_ | - |
| --z-cell-active-color | _var(--z-active-color)_ | - |
| --z-cell-required-color | _var(--z-danger-color)_ | - |
| --z-cell-label-color | _var(--z-text-color-2)_ | - |
| --z-cell-label-font-size | _var(--z-font-size-sm)_ | - |
| --z-cell-label-line-height | _var(--z-line-height-sm)_ | - |
| --z-cell-label-margin-top | _var(--z-padding-base)_ | - |
| --z-cell-value-color | _var(--z-text-color-2)_ | - |
| --z-cell-value-font-size | _inherit_ | - |
| --z-cell-icon-size | _32rpx_ | - |
| --z-cell-right-icon-color | _var(--z-gray-6)_ | - |
| --z-cell-large-vertical-padding | _var(--z-padding-sm)_ | - |
| --z-cell-large-title-font-size | _var(--z-font-size-lg)_ | - |
| --z-cell-large-label-font-size | _var(--z-font-size-md)_ | - |
| --z-cell-large-value-font-size | _inherit_ | - |
| --z-cell-group-background | _var(--z-background-2)_ | - |
| --z-cell-group-title-color | _var(--z-text-color-2)_ | - |
| --z-cell-group-title-padding | _var(--z-padding-md) var(--z-padding-md) var(--z-padding-xs)_ | - |
| --z-cell-group-title-font-size | _var(--z-font-size-md)_ | - |
| --z-cell-group-title-line-height | _32rpx_ | - |
| --z-cell-group-inset-padding | _0 var(--z-padding-md)_ | - |
| --z-cell-group-inset-radius | _var(--z-radius-lg)_ | - |
| --z-cell-group-inset-title-padding | _var(--z-padding-md) var(--z-padding-md) var(--z-padding-xs) var(--z-padding-xl)_ | - |
