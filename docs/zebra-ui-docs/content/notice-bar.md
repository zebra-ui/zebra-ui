# NoticeBar 通知栏

### 介绍

用于循环播放展示一组消息通知。

## 代码演示

### 基础用法

通过 `text` 属性设置通知栏的内容，通过 `left-icon` 属性设置通知栏左侧的图标。

```html
<z-notice-bar
  left-icon="sound"
  scrollable
  text="zebra-swiper是基于uniapp开发的一款移动端轮播组件。"
/>
```

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。

```html
<!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 -->
<z-notice-bar
  scrollable
  text="zebra-swiper是基于uniapp开发的一款移动端轮播组件。"
/>

<!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
<z-notice-bar
  :scrollable="false"
  text="zebra-swiper是基于uniapp开发的一款移动端轮播组件。"
/>
```

### 多行展示

文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。

```html
<z-notice-bar
  wrapable
  :scrollable="false"
  text="zebra-swiper是基于uniapp开发的一款移动端轮播组件。zebra-swiper是基于uniapp开发的一款移动端轮播组件。"
/>
```

### 通知栏模式

通知栏支持 `closeable` 和 `link` 两种模式。

```html
<!-- closeable 模式，在右侧显示关闭按钮 -->
<z-notice-bar
  mode="closeable"
  text="zebra-swiper是基于uniapp开发的一款移动端轮播组件。"
/>

<!-- link 模式，在右侧显示链接箭头 -->
<z-notice-bar
  mode="link"
  text="zebra-swiper是基于uniapp开发的一款移动端轮播组件。"
/>
```

### 自定义样式

通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。

```html
<z-notice-bar
  text="zebra-swiper是基于uniapp开发的一款移动端轮播组件。"
  color="#1989fa"
  background="#ecf9ff"
  left-icon="setting"
/>
```

### 垂直滚动

搭配 NoticeBar 和 Swipe 组件，可以实现垂直滚动的效果。

```html
<z-notice-bar left-icon="sound" :scrollable="false">
  <z-swipe
    vertical
    :custom-style="{ height: '80rpx', 'line-height': '80rpx' }"
    :autoplay="3000"
    :touchable="false"
    :show-indicators="false"
  >
    <z-swipe-item
      >zebra-swiper是基于uniapp开发的一款移动端轮播组件。</z-swipe-item
    >
    <z-swipe-item>一款移动端轮播组件。</z-swipe-item>
    <z-swipe-item>zebra-swiper</z-swipe-item>
  </z-swipe>
</z-notice-bar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 通知栏模式，可选值为 `closeable` `link` | _string_ | `''` |
| text | 通知文本内容 | _string_ | `''` |
| color | 通知文本颜色 | _string_ | `#ed6a0c` |
| background | 滚动条背景 | _string_ | `#fffbe8` |
| left-icon | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | - |
| delay | 动画延迟时间 (s) | _number \| string_ | `1` |
| speed | 滚动速率 (px/s) | _number \| string_ | `60` |
| scrollable | 是否开启滚动播放，内容长度溢出时默认开启 | _boolean_ | - |
| wrapable | 是否开启文本换行，只在禁用滚动时生效 | _boolean_ | `false` |

### Events

| 事件名 | 说明                         | 回调参数            |
| ------ | ---------------------------- | ------------------- |
| click  | 点击通知栏时触发             | _event: MouseEvent_ |
| close  | 关闭通知栏时触发             | _event: MouseEvent_ |
| replay | 每当滚动栏重新开始滚动时触发 | -                   |

### 方法

通过 ref 可以获取到 NoticeBar 实例并调用实例方法。

| 方法名 | 说明                 | 参数 | 返回值 |
| ------ | -------------------- | ---- | ------ |
| reset  | 重置通知栏到初始状态 | -    | -      |

### Slots

| 名称       | 内容           |
| ---------- | -------------- |
| default    | 通知文本内容   |
| left-icon  | 自定义左侧图标 |
| right-icon | 自定义右侧图标 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-notice-bar-height | _80rpx_ | - |
| --z-notice-bar-padding | _0 var(--z-padding-md)_ | - |
| --z-notice-bar-wrapable-padding | _var(--z-padding-xs) var(--z-padding-md)_ | - |
| --z-notice-bar-text-color | _var(--z-orange-dark)_ | - |
| --z-notice-bar-font-size | _var(--z-font-size-md)_ | - |
| --z-notice-bar-line-height | _48rpx_ | - |
| --z-notice-bar-background | _var(--z-orange-light)_ | - |
| --z-notice-bar-icon-size | _32rpx_ | - |
| --z-notice-bar-icon-min-width | _48rpx_ | - |
