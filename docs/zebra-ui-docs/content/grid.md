# Grid 宫格

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

## 代码演示

### 基础用法

通过 `icon` 属性设置格子内的图标，`text` 属性设置文字内容。

```html
<z-grid>
  <z-grid-item v-for="i in 4" :key="i" icon="image" text="文字" />
</z-grid>
```

### 自定义列数

默认一行展示四个格子，可以通过 `column-num` 自定义列数。

```html
<z-grid :column-num="3">
  <z-grid-item v-for="i in 6" :key="i" icon="image" text="文字" />
</z-grid>
```

### 自定义内容

通过插槽可以自定义格子展示的内容。

```html
<z-grid :border="false" :column-num="3">
  <z-grid-item>
    <z-image
      mode="widthFix"
      src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg"
    />
  </z-grid-item>
  <z-grid-item>
    <z-image
      mode="widthFix"
      src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg"
    />
  </z-grid-item>
  <z-grid-item>
    <z-image
      mode="widthFix"
      src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg"
    />
  </z-grid-item>
</z-grid>
```

### 正方形格子

设置 `square` 属性后，格子的高度会和宽度保持一致。

```html
<z-grid square>
  <z-grid-item v-for="i in 8" :key="i" icon="image" text="文字" />
</z-grid>
```

### 格子间距

通过 `gutter` 属性设置格子之间的距离。

```html
<z-grid :gutter="10">
  <z-grid-item v-for="i in 8" :key="i" icon="image" text="文字" />
</z-grid>
```

### 内容横排

将 `direction` 属性设置为 `horizontal`，可以让宫格的内容呈横向排列。

```html
<z-grid direction="horizontal" :column-num="3">
  <z-grid-item icon="image" text="文字" />
  <z-grid-item icon="image" text="文字" />
  <z-grid-item icon="image" text="文字" />
</z-grid>
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点。设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```html
<z-grid :column-num="2">
  <z-grid-item icon="home" text="文字" dot />
  <z-grid-item icon="search" text="文字" badge="99+" />
</z-grid>
```

## API

### Grid Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| column-num | 列数 | _number \| string_ | `4` |
| icon-size | 图标大小，默认单位为`px` | _number \| string_ | `56rpx` |
| gutter | 格子之间的间距，默认单位为`px` | _number \| string_ | `0` |
| border | 是否显示边框 | _boolean_ | `true` |
| center | 是否将格子内容居中显示 | _boolean_ | `true` |
| square | 是否将格子固定为正方形 | _boolean_ | `false` |
| clickable | 是否开启格子点击反馈 | _boolean_ | `false` |
| direction | 格子内容排列的方向，可选值为 `horizontal` | _string_ | `vertical` |
| reverse | 是否调换图标和文本的位置 | _boolean_ | `false` |

### GridItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 文字 | _string_ | - |
| icon | 图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | - |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](/icon#props) | _string_ | `z-icon` |
| icon-color | 图标颜色，等同于 Icon 组件的 [color 属性](/icon#props) | _string_ | - |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| badge-props | 自定义徽标的属性，传入的对象会被透传给 [Badge 组件的 props](/badge#props) | _BadgeProps_ | - |

### GridItem Events

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| click  | 点击格子时触发 | _event: MouseEvent_ |

### GridItem Slots

| 名称    | 说明                 |
| ------- | -------------------- |
| default | 自定义宫格的所有内容 |
| icon    | 自定义图标           |
| text    | 自定义文字           |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-grid-item-content-padding | _var(--z-padding-md) var(--z-padding-xs)_ | - |
| --z-grid-item-content-background | _var(--z-background-2)_ | - |
| --z-grid-item-content-active-color | _var(--z-active-color)_ | - |
| --z-grid-item-icon-size | _56rpx_ | - |
| --z-grid-item-text-color | _var(--z-text-color)_ | - |
| --z-grid-item-text-font-size | _var(--z-font-size-sm)_ | - |
