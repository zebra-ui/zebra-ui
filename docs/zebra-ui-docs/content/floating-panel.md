# FloatingPanel 浮动面板

### 介绍

浮动在页面底部的面板，可以上下拖动来浏览内容，常用于提供额外的功能或信息。

## 代码演示

### 基础用法

FloatingPanel 的默认高度为 `100px`，用户可以拖动来展开面板，使高度达到 `60%` 的屏幕高度。

```html
<z-floating-panel>
  <z-cell-group>
    <z-cell
      v-for="i in 26"
      :key="i"
      :title="String.fromCharCode(i + 64)"
      size="large"
    />
  </z-cell-group>
</z-floating-panel>
```

### 自定义锚点

你可以通过 `anchors` 属性来设置 FloatingPanel 的锚点位置，并通过 `v-model:height` 来控制当前面板的显示高度。

比如，使面板的高度在 `100px`、40% 屏幕高度和 70% 屏幕高度三个位置停靠：

```html
<z-floating-panel v-model:height="height" :anchors="anchors">
  <view style="padding: 30rpx; text-align: center">
    <text>面板显示高度 {{ height.toFixed(0) }} px</text>
  </view>
</z-floating-panel>
```

```js
import { computed, ref } from 'vue'
const windowHeight = computed(() => {
  return uni.getSystemInfoSync().windowHeight
})
const anchors = [
  100,
  Math.round(0.4 * windowHeight.value),
  Math.round(0.7 * windowHeight.value)
]

const height = ref(anchors[0])
```

### 仅头部拖拽

默认情况下，FloatingPanel 的头部区域和内容区域都可以被拖拽，你可以通过 `content-draggable` 属性来禁用内容区域的拖拽。

```html
<z-floating-panel :content-draggable="false">
  <view style="padding: 30rpx; text-align: center">
    <text>内容不可拖拽</text>
  </view>
</z-floating-panel>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:height | 当前面板的显示高度 | _number \| string_ | `0` |
| anchors | 设置自定义锚点, 单位 `px` | _number[]_ | `[100, windowHeight * 0.6]` |
| duration | 动画时长，单位秒，设置为 0 可以禁用动画 | _number \| string_ | `0.3` |
| content-draggable | 允许拖拽内容容器 | _boolean_ | `true` |
| lock-scroll | 当不拖拽时，是否锁定背景滚动 | _boolean_ | `false` |
| safe-area-inset-bottom | 是否开启底部安全区适配 | _boolean_ | `true` |

### Events

| 事件名        | 说明                             | 回调参数             |
| ------------- | -------------------------------- | -------------------- |
| height-change | 面板显示高度改变且结束拖动后触发 | _{ height: number }_ |

### Slots

| Name    | Description    |
| ------- | -------------- |
| default | 自定义面板内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| Name                               | Default Value             | Description |
| ---------------------------------- | ------------------------- | ----------- |
| --z-floating-panel-border-radius | _32rpx_                    | -           |
| --z-floating-panel-header-height | _60rpx_                    | -           |
| --z-floating-panel-z-index       | _999_                     | -           |
| --z-floating-panel-background    | _var(--z-background-2)_ | -           |
| --z-floating-panel-bar-width     | _40rpx_                    | -           |
| --z-floating-panel-bar-height    | _6rpx_                     | -           |
| --z-floating-panel-bar-color     | _var(--z-gray-5)_       | -           |
