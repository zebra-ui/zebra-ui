# Swipe 轮播

### 介绍

用于循环播放一组图片或内容。

## 代码演示

### 基础用法

每个 SwipeItem 代表一张轮播卡片，可以通过 `indicator-color` 属性设置指示器颜色。

```html
<z-swipe indicator-color="#ffffff">
  <z-swipe-item
    v-for="(item, index) in 4"
    :key="index"
    :custom-style="customStyle"
    >{{ item }}</z-swipe-item
  >
</z-swipe>
```

```js
import { ref } from 'vue'
const customStyle = ref({
  color: '#ffffff',
  'font-size': '40rpx',
  'line-height': '300rpx',
  'text-align': 'center',
  'background-color': '#39a9ed'
})
```

### 自动播放

可以通过 `autoplay` 属性设置自动轮播的间隔。

```html
<z-swipe autoplay="1000" indicator-color="#ffffff">
  <z-swipe-item
    v-for="(item, index) in 4"
    :key="index"
    :custom-style="customStyle"
    >{{ item }}</z-swipe-item
  >
</z-swipe>
```

```js
import { ref } from 'vue'
const customStyle = ref({
  color: '#ffffff',
  'font-size': '40rpx',
  'line-height': '300rpx',
  'text-align': 'center',
  'background-color': '#39a9ed'
})
```


### 监听 change 事件

在每一页轮播结束后，会触发 `change` 事件。

```html
<z-swipe @change="onChange">
  <z-swipe-item
    v-for="(item, index) in 4"
    :key="index"
    :custom-style="customStyle"
    >{{ item }}</z-swipe-item
  >
</z-swipe>
```

```js
const onChange = (index: number) => console.log('当前 Swipe 索引：' + index)
```

### 纵向滚动

设置 `vertical` 属性后滑块会纵向排列，此时需要指定滑块容器的高度。

```html
<z-swipe
  vertical
  indicator-color="#ffffff"
  :custom-style="{ height: '300rpx' }"
>
  <z-swipe-item
    v-for="(item, index) in 4"
    :key="index"
    :custom-style="customStyle"
    >{{ item }}</z-swipe-item
  >
</z-swipe>
```

### 自定义滑块大小

滑块默认宽度为 `100%`，可以通过 `width` 属性设置单个滑块的宽度。纵向滚动模式下，可以通过 `height` 属性设置单个滑块的高度。

```html
<z-swipe :loop="false" :width="200">
  <z-swipe-item
    v-for="(item, index) in 4"
    :key="index"
    :custom-style="customStyle"
    >{{ item }}</z-swipe-item
  >
</z-swipe>
```

> 目前不支持在循环滚动模式下自定义滑块大小，因此需要将 loop 设置为 false。

### 自定义指示器

通过 `indicator` 插槽可以自定义指示器的样式。

```html
<z-swipe :show-indicators="false">
  <z-swipe-item
    v-for="(item, index) in 4"
    :key="index"
    :custom-style="customStyle"
    >{{ item }}</z-swipe-item
  >
  <template #indicator="{ active, total }">
    <view class="custom-indicator">{{ active + 1 }}/{{ total }}</view>
  </template>
</z-swipe>

<style>
.custom-indicator {
  position: absolute;
  right: 10rpx;
  bottom: 10rpx;
  padding: 4rpx 10rpx;
  font-size: 24rpx;
  color: #fff;
  background: rgb(0 0 0 / 10%);
}
</style>
```

## API

### Swipe Props

| 参数             | 说明                     | 类型               | 默认值    |
| ---------------- | ------------------------ | ------------------ | --------- |
| autoplay         | 自动轮播间隔，单位为 ms  | _number \| string_ | -         |
| duration         | 动画时长，单位为 ms      | _number \| string_ | `500`     |
| initial-swipe    | 初始位置索引值           | _number \| string_ | `0`       |
| width            | 滑块宽度，单位为 `px`    | _number \| string_ | `auto`    |
| height           | 滑块高度，单位为 `px`    | _number \| string_ | `auto`    |
| loop             | 是否开启循环播放         | _boolean_          | `true`    |
| show-indicators  | 是否显示指示器           | _boolean_          | `true`    |
| vertical         | 是否为纵向滚动           | _boolean_          | `false`   |
| touchable        | 是否可以通过手势滑动     | _boolean_          | `true`    |
| indicator-color  | 指示器颜色               | _string_           | `#1989fa` |

### Swipe Events

| 事件名              | 说明                         | 回调参数            |
| ------------------- | ---------------------------- | ------------------- |
| change              | 每一页轮播结束后触发         | _index: number_     |
| drag-start | 当用户开始拖动轮播组件时触发 | _{ index: number }_ |
| drag-end  | 当用户结束拖动轮播组件时触发 | _{ index: number }_ |

### SwipeItem Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Swipe 方法

通过 ref 可以获取到 Swipe 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| prev | 切换到上一轮播 | - | - |
| next | 切换到下一轮播 | - | - |
| swipeTo | 切换到指定位置 | _index: number, options: SwipeToOptions_ | - |
| resize | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | - | - |

### SwipeToOptions 格式

| 名称      | 说明         | 类型      |
| --------- | ------------ | --------- |
| immediate | 是否跳过动画 | _boolean_ |

### Swipe Slots

| 名称      | 说明         | 参数                                |
| --------- | ------------ | ----------------------------------- |
| default   | 轮播内容     | -                                   |
| indicator | 自定义指示器 | _{ active: number, total: number }_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-swipe-indicator-size | _12rpx_ | - |
| --z-swipe-indicator-margin | _var(--z-padding-sm)_ | - |
| --z-swipe-indicator-active-opacity | _1_ | - |
| --z-swipe-indicator-inactive-opacity | _0.3_ | - |
| --z-swipe-indicator-active-background | _var(--z-primary-color)_ | - |
| --z-swipe-indicator-inactive-background | _var(--z-border-color)_ | - |
