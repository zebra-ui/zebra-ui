# Progress 进度条

### 介绍

用于展示操作的当前进度。

## 代码演示

### 基础用法

进度条默认为蓝色，使用 `percentage` 属性来设置当前进度。

```html
<z-progress :percentage="50" />
```

### 线条粗细

通过 `stroke-width` 可以设置进度条的粗细。

```html
<z-progress :percentage="50" stroke-width="8" />
```

### 置灰

设置 `inactive` 属性后进度条将置灰。

```html
<z-progress inactive :percentage="50" />
```

### 样式定制

可以使用 `pivot-text` 属性自定义文字，`color` 属性自定义进度条颜色。

```html
<z-progress pivot-text="橙色" color="#f2826a" :percentage="25" />
<z-progress pivot-text="红色" color="#ee0a24" :percentage="50" />
<z-progress
  :percentage="75"
  pivot-text="紫色"
  pivot-color="#7232dd"
  color="linear-gradient(to right, #be99ff, #7232dd)"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percentage | 进度百分比 | _number \| string_ | `0` |
| stroke-width | 进度条粗细，默认单位为`px` | _number \| string_ | `8rpx` |
| color | 进度条颜色 | _string_ | `#1989fa` |
| track-color | 轨道颜色 | _string_ | `#e5e5e5` |
| pivot-text | 进度文字内容 | _string_ | 百分比 |
| pivot-color | 进度文字背景色 | _string_ | 同进度条颜色 |
| text-color | 进度文字颜色 | _string_ | `white` |
| inactive | 是否置灰 | _boolean_ | `false` |
| show-pivot | 是否显示进度文字 | _boolean_ | `true` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                             | 默认值                     | 描述 |
| -------------------------------- | -------------------------- | ---- |
| --z-progress-height            | _8rpx_                      | -    |
| --z-progress-color             | _var(--z-primary-color)_ | -    |
| --z-progress-inactive-color    | _var(--z-gray-5)_        | -    |
| --z-progress-background        | _var(--z-gray-3)_        | -    |
| --z-progress-pivot-padding     | _0 10rpx_                    | -    |
| --z-progress-pivot-text-color  | _var(--z-white)_         | -    |
| --z-progress-pivot-font-size   | _var(--z-font-size-xs)_  | -    |
| --z-progress-pivot-line-height | _1.6_                      | -    |
| --z-progress-pivot-background  | _var(--z-primary-color)_ | -    |
