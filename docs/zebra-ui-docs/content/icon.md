# Icon 图标

### 介绍

基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 `icon` 属性引用。

### 全部图标

zebra-ui提供了全部图标来方便查找。[点击跳转](https://icon.zebraui.com/){target="_blank"}

## 代码演示

### 基础用法

通过 `name` 属性来指定需要使用的图标，zebra-ui 内置了一套图标库（见右侧示例），可以直接传入对应的名称来使用。

```html
<z-icon name="smile" />
```

### 使用图片 URL

你也可以直接在 `name` 属性中传入一个图片 URL 来作为图标。

```html
<z-icon name="https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png" />
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点；设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```html
<z-icon name="smile" dot />
<z-icon name="smile" badge="9" />
<z-icon name="smile" badge="99+" />
```

### 图标颜色

通过 `color` 属性来设置图标的颜色。

```html
<z-icon name="smile" color="#1989fa" />
<z-icon name="smile" color="#ee0a24" />
```

### 图标大小

通过 `size` 属性来设置图标的尺寸大小，推荐使用 `rpx` 单位。

```html
<!-- 不指定单位，默认使用 px -->
<z-icon name="chat-o" size="40" />
<!-- 指定使用 rpx 单位 -->
<z-icon name="chat-o" size="80rpx" />
```

### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。

:::tips
示例项目中首页的所有图标都通过另一个图标库引入，自定义图标可参考示例项目。
:::

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'zebra-icon';
  /* Project id 4475347 */
  src:
    url('https://at.alicdn.com/t/c/font_4475347_8vf1nif45lx.woff2?t=1710943881998')
      format('woff2'),
    url('https://at.alicdn.com/t/c/font_4475347_8vf1nif45lx?t=1710943881998')
      format('woff'),
    url('https://at.alicdn.com/t/c/font_4475347_8vf1nif45lx?t=1710943881998')
      format('truetype');
}

.zebra-icon {
  font-family: 'zebra-icon' !important;
  font-size: 32rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.zebra-icon-show-a:before {
  content: '\e663';
}
```

```html
<!-- 通过 class-prefix 指定类名为 my-icon -->
<z-icon class-prefix="zebra-icon" name="show-a" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | _string_ | - |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| badge-props | 自定义徽标的属性，传入的对象会被透传给 [Badge 组件的 props](/badge#props) | _BadgeProps_ | - |
| color | 图标颜色 | _string_ | `inherit` |
| size | 图标大小，如 `20px` `40rpx`，默认单位为 `px` | _number \| string_ | `inherit` |
| class-prefix | 类名前缀，用于使用自定义图标 | _string_ | `z-icon` |

### Events

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| click  | 点击图标时触发 | _event_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                   | 默认值       | 描述 |
| ---------------------- | ------------ | ---- |
| --z-icon-font-family | _'z-icon'_ | -    |
