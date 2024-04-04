# 内置样式

### 介绍

zebra-ui 中默认包含了一些常用样式，可以直接通过 className 的方式使用。

### 文字省略

当文本内容长度超过容器最大宽度时，自动省略多余的文本。

```html
<!-- 最多显示一行 -->
<view class="z-ellipsis">这是一段文字，超出一行会显示省略号。这是一段文字，超出一行会显示省略号</view>

<!-- 最多显示两行 -->
<view class="text-top z-multi-ellipsis--l2">这是一段文字，超出两行会显示省略号。这是一段文字，超出两行会显示省略号。这是一段文字，超出两行会显示省略号</view>

<!-- 最多显示三行 -->
<view class="z-multi-ellipsis--l3">
  xxxxx
</view>
```

### 1px 边框

为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现。

```html
<!-- 上边框 -->
<div class="z-hairline--top"></div>

<!-- 下边框 -->
<div class="z-hairline--bottom"></div>

<!-- 左边框 -->
<div class="z-hairline--left"></div>

<!-- 右边框 -->
<div class="z-hairline--right"></div>

<!-- 上下边框 -->
<div class="z-hairline--top-bottom"></div>

<!-- 全边框 -->
<div class="z-hairline--surround"></div>
```

### 安全区

为元素添加安全区适配。

```html
<!-- 顶部安全区 -->
<div class="z-safe-area-top"></div>

<!-- 底部安全区 -->
<div class="z-safe-area-bottom"></div>
```

### 触碰反馈

为元素添加触碰反馈效果，触碰后，元素的透明度会降低。

通常用于按钮等可点击的元素上。

```html
<div class="z-haptics-feedback"></div>
```

### 清除浮动

清除元素在 float 布局下的浮动，

```html
<div class="z-clearfix"></div>
```
