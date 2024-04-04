# Button 按钮

### 介绍

按钮通常用于触发操作。

## 代码演示

### 按钮类型

按钮支持 `default`、`primary`、`success`、`warning`、`danger` 五种类型，默认为 `default`。

```html
<z-button type="primary">主要按钮</z-button>
<z-button type="success">成功按钮</z-button>
<z-button type="default">默认按钮</z-button>
<z-button type="warning">警告按钮</z-button>
<z-button type="danger">危险按钮</z-button>
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<z-button plain type="primary">朴素按钮</z-button>
<z-button plain type="success">朴素按钮</z-button>
```

### 细边框

设置 `hairline` 属性可以展示 0.5px 的细边框。

:::tips
为规范Andriod和IOS差异，zebra对button做了处理，按钮的边框默认统一使用细边框。
:::

```html
<z-button plain hairline type="primary">细边框按钮</z-button>
<z-button plain hairline type="success">细边框按钮</z-button>
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```html
<z-button disabled type="primary">禁用状态</z-button>
<z-button disabled type="success">禁用状态</z-button>
```

### 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 `loading-text` 设置加载状态下的文字。

```html
<z-button loading type="primary" />
<z-button loading type="primary" loading-type="spinner" />
<z-button loading type="success" loading-text="加载中..." />
```

### 按钮形状

通过 `square` 设置方形按钮，通过 `round` 设置圆形按钮。

```html
<z-button square type="primary">方形按钮</z-button>
<z-button round type="success">圆形按钮</z-button>
```

### 图标按钮

通过 `icon` 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。

```html
<z-button icon="plus" type="primary" />
<z-button icon="plus" type="primary">按钮</z-button>
<z-button
  icon="https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png"
  type="primary"
>
  按钮
</z-button>
```

### 按钮尺寸

支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal`。

```html
<z-button type="primary" size="large">大号按钮</z-button>
<z-button type="primary" size="normal">普通按钮</z-button>
<z-button type="primary" size="small">小型按钮</z-button>
<z-button type="primary" size="mini">迷你按钮</z-button>
```

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素。

```html
<z-button type="primary" block>块级元素</z-button>
```

### 自定义颜色

通过 `color` 属性可以自定义按钮的颜色。

```html
<z-button color="#7232dd">单色按钮</z-button>
<z-button color="#7232dd" plain>单色按钮</z-button>
<z-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  渐变色按钮
</z-button>
```

### 动画按钮

搭配 Button 和 [Swipe 组件](/swipe)，可以实现垂直滚动的动画按钮效果。

```html
<z-button type="danger">
  <z-swipe
    vertical
    class="notice-swipe"
    :autoplay="2000"
    :touchable="false"
    :show-indicators="false"
    :custom-style="{ height: '30rpx' }"
  >
    <z-swipe-item>按钮一</z-swipe-item>
    <z-swipe-item>按钮二</z-swipe-item>
  </z-swipe>
</z-button>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `warning` `danger` | _string_ | `default` |
| size | 尺寸，可选值为 `large` `small` `mini` | _string_ | `normal` |
| text | 按钮文字 | _string_ | - |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色 | _string_ | - |
| icon | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | - |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](/icon#props) | _string_ | `z-icon` |
| icon-position | 图标展示位置，可选值为 `right` | _string_ | `left` |
| block | 是否为块级元素 | _boolean_ | `false` |
| plain | 是否为朴素按钮 | _boolean_ | `false` |
| square | 是否为方形按钮 | _boolean_ | `false` |
| round | 是否为圆形按钮 | _boolean_ | `false` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| hairline | 是否使用 0.5px 边框 | _boolean_ | `true` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| loading-text | 加载状态提示文字 | _string_ | - |
| loading-type | [加载图标类型](/loading)，可选值为 `spinner` | _string_ | `circular` |
| loading-size | 加载图标大小，默认单位为 `px`，可传入带`rpx`单位的字符串 | _number \| string_ | - |
| customStyle | 自定义按钮的样式 | _object_ | - |
| customClass | 自定义按钮的类名 | _object_ | - |
| formType | 用于 `form` 组件，点击分别会触发 `form` 组件的 `submit`/`reset` 事件 | _string_ | - |
| hide-border | 是否强制隐藏边框，设置此属性，将会强制隐藏按钮的边框 | _boolean_ | `false` |
| hide-radius | 是否强制去掉`border-radius`样式 | _boolean_ | `false` |

### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event_ |
| clickLoading | 点击按钮，且按钮状态为加载时触发    | _event_ |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 按钮内容       |
| icon    | 自定义图标     |
| loading | 自定义加载图标 |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  ButtonType,
  ButtonSize,
  ButtonProps,
  ButtonIconPosition,
} from '@zebra-ui/uniapp/components/z-button/types';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                              | 默认值                        | 描述 |
| --------------------------------- | ----------------------------- | ---- |
| --z-button-mini-height          | _46rpx_                        | -    |
| --z-button-mini-padding         | _0 var(--z-padding-base)_   | -    |
| --z-button-mini-font-size       | _var(--z-font-size-xs)_     | -    |
| --z-button-small-height         | _64rpx_                        | -    |
| --z-button-small-padding        | _0 var(--z-padding-xs)_     | -    |
| --z-button-small-font-size      | _var(--z-font-size-sm)_     | -    |
| --z-button-normal-font-size     | _var(--z-font-size-md)_     | -    |
| --z-button-normal-padding       | _0 30rpx_                      | -    |
| --z-button-large-height         | _100rpx_                        | -    |
| --z-button-default-height       | _88rpx_                        | -    |
| --z-button-default-line-height  | _1.2_                         | -    |
| --z-button-default-font-size    | _var(--z-font-size-lg)_     | -    |
| --z-button-default-color        | _var(--z-text-color)_       | -    |
| --z-button-default-background   | _var(--z-background-2)_     | -    |
| --z-button-default-border-color | _var(--z-gray-4)_           | -    |
| --z-button-primary-color        | _var(--z-white)_            | -    |
| --z-button-primary-background   | _var(--z-primary-color)_    | -    |
| --z-button-primary-border-color | _var(--z-primary-color)_    | -    |
| --z-button-success-color        | _var(--z-white)_            | -    |
| --z-button-success-background   | _var(--z-success-color)_    | -    |
| --z-button-success-border-color | _var(--z-success-color)_    | -    |
| --z-button-danger-color         | _var(--z-white)_            | -    |
| --z-button-danger-background    | _var(--z-danger-color)_     | -    |
| --z-button-danger-border-color  | _var(--z-danger-color)_     | -    |
| --z-button-warning-color        | _var(--z-white)_            | -    |
| --z-button-warning-background   | _var(--z-orange)_           | -    |
| --z-button-warning-border-color | _var(--z-orange)_           | -    |
| --z-button-border-width         | _var(--z-border-width)_     | -    |
| --z-button-radius               | _var(--z-radius-md)_        | -    |
| --z-button-round-radius         | _var(--z-radius-max)_       | -    |
| --z-button-plain-background     | _var(--z-white)_            | -    |
| --z-button-disabled-opacity     | _var(--z-disabled-opacity)_ | -    |
| --z-button-icon-size            | _1.2em_                       | -    |
| --z-button-loading-icon-size    | _40rpx_                        | -    |

### 注意事项

`uniapp`的`button`组件会自带边框等样式，且无法通过全局样式进行覆盖，组件提供`hide-border` `hide-radius` 属性来强制覆盖。