# Sticky 粘性布局

### 介绍

Sticky 组件与 CSS 中 `position: sticky` 属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

> 当自定义导航栏时，需指定custom-navbar属性。

## 代码演示

### 基础用法

将内容包裹在 `Sticky` 组件内即可。

```html
<z-sticky custom-navbar>
  <z-button type="primary">基础用法</z-button>
</z-sticky>
```

### 吸顶距离

通过 `offset-top` 属性可以设置组件在吸顶时与顶部的距离。

```html
<z-sticky custom-navbar :offset-top="50">
  <z-button type="primary" :custom-style="{ 'margin-left': '30%' }"
    >基础用法</z-button
  >
</z-sticky>
```

### 指定容器

通过 `container` 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。

```html
<view id="container" style="height: 300rpx; background-color: #fff">
  <z-sticky custom-navbar :container="container">
    <z-button
      type="warning"
      :custom-style="{ 'margin-left': '300rpx' }"
    >
      指定容器
    </z-button>
  </z-sticky>
</view>
```

```js
import { ref, onMounted } from 'vue'
const container = ref({})
onMounted(() => {
  const query = uni.createSelectorQuery()
  query
    .select('#container')
    .boundingClientRect((data) => {
      container.value = data
    })
    .exec()
})
```

### 嵌套在 scroll-view 内使用

在`scroll-view`组件中使用时，需要监听`scroll`事件，将`scrollTop`及内容布局的top传给组件。

```html
<scroll-view
  @scroll="onScroll"
  scroll-y
  id="scroller"
  style="height: 400rpx; background-color: #fff"
>
  <view style="height: 800rpx; padding-top: 50px">
    <z-sticky :scroll-top="scrollTop" :offset-top="offsetTop">
      <z-button type="danger"> 嵌套在 scroll-view 内 </z-button>
    </z-sticky>
  </view>
</scroll-view>
```

```js
const scrollTop = ref(0)
const offsetTop = ref(0)

const onScroll = (event: any) => {
  uni
    .createSelectorQuery()
    .select('#scroller')
    .boundingClientRect((res: any) => {
      scrollTop.value = event.detail.scrollTop
      offsetTop.value = res.top
    })
    .exec()
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offset-top | 吸顶时与顶部的距离，支持 `rpx` 单位，默认 `px` | _number \| string_ | `0` |
| offset-bottom | 吸底时与底部的距离，支持 `rpx` 单位，默认 `px` | _number \| string_ | `0` |
| z-index | 吸顶时的 z-index | _number \| string_ | `99` |
| container | 容器对应的布局信息 | _object_ | - |
| custom-navbar | 是否自定义导航栏 | _boolean_ | `false` |

### Events

| 事件名 | 说明                 | 回调参数                                  |
| ------ | -------------------- | ----------------------------------------- |
| scroll | 滚动时触发           | _{ scrollTop: number, isFixed: boolean }_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                 | 默认值 | 描述 |
| -------------------- | ------ | ---- |
| --z-sticky-z-index | _99_   | -    |
