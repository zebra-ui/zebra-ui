# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容。

## 代码演示

### 基础用法

通过 `v-model:show` 控制弹出层是否展示。

```html
<z-cell title="展示弹出层" is-link @click="show = true" />
<z-popup v-model:show="show">
  <view class="popup-content"> 内容 </view>
</z-popup>
```

```js
import { ref } from 'vue';
const show = ref(false)
```

```css
<style lang="scss" scoped>
.demo-popup {
  .popup-content {
    padding: 100rpx;
    color: var(--z-text-color);
  }
}
</style>
```

### 弹出位置

通过 `position` 属性设置弹窗的弹出位置，默认为居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。

:::tips
当弹窗从顶部或底部弹出时，默认宽度与屏幕宽度保持一致，弹窗高度取决于内容的高度。

当弹窗从左侧或右侧弹出时，默认不设置宽度和高度，弹窗的宽高取决于内容的宽高。
:::

```html
<!-- 顶部弹出 -->
<z-popup
  v-model:show="showTop"
  position="top"
  :custom-style="{ height: '30%' }"
></z-popup>

<!-- 底部弹出 -->
<z-popup
  v-model:show="showBottom"
  position="bottom"
  :custom-style="{ height: '30%' }"
></z-popup>

<!-- 左侧弹出 -->
<z-popup
  v-model:show="showLeft"
  position="left"
  :custom-style="{ width: '30%', height: '100%' }"
/>

<!-- 右侧弹出 -->
<z-popup
  v-model:show="showRight"
  position="right"
  :custom-style="{ width: '30%', height: '100%' }"
/>
```

### 关闭图标

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `close-icon` 属性自定义图标，使用 `close-icon-position` 属性可以自定义图标位置。

```html
<z-popup
  v-model:show="showClose"
  closeable
  position="bottom"
  :custom-style="{ height: '30%' }"
></z-popup>
<!-- 自定义图标 -->
<z-popup
  v-model:show="showCloseCustom"
  closeable
  close-icon="close-circle"
  position="bottom"
  :custom-style="{ height: '30%' }"
></z-popup>
<!-- 图标位置 -->
<z-popup
  v-model:show="showClosePosition"
  closeable
  close-icon-position="top-left"
  position="bottom"
  :custom-style="{ height: '30%' }"
></z-popup>
```

### 圆角弹窗

设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```html
<!-- 圆角弹窗（居中） -->
<z-popup v-model:show="showRadiusCenter" round>
  <view class="popup-content"> 内容 </view>
</z-popup>

<!-- 圆角弹窗（底部） -->
<z-popup
  v-model:show="showRadiusBottom"
  round
  position="bottom"
  :custom-style="{ height: '30%' }"
></z-popup>
```

### 监听点击事件

Popup 支持以下点击事件：

- `click`: 点击弹出层时触发。
- `click-overlay`: 点击遮罩层时触发。
- `click-close-icon`: 点击关闭图标时触发。

```html
<z-cell title="点击事件" is-link @click="showEvent = true" />
<z-popup
  v-model:show="showEvent"
  position="bottom"
  closeable
  :custom-style="{ height: '30%' }"
  @click-overlay="onClickOverlay"
  @click-close-icon="onClickCloseIcon"
></z-popup>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const onClickOverlay = () => {
  toast.showToast('click-overlay')
}
const onClickCloseIcon = () => {
  toast.showToast('click-close-icon')
}
```

### 监听显示事件

当 Popup 被打开或关闭时，会触发以下事件：

- `open`: 打开弹出层时立即触发。
- `opened`: 打开弹出层且动画结束后触发。
- `close`: 关闭弹出层时立即触发。
- `closed`: 关闭弹出层且动画结束后触发。

```html
<z-cell title="显示关闭事件" is-link @click="showEventHide = true" />
<z-popup
  v-model:show="showEventHide"
  position="bottom"
  closeable
  :custom-style="{ height: '30%' }"
  @open="toast.showToast('open')"
  @opened="toast.showToast('opened')"
  @close="toast.showToast('close')"
  @closed="toast.showToast('closed')"
></z-popup>
```

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:show | 是否显示弹出层 | _boolean_ | `false` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| position | 弹出位置，可选值为 `top` `bottom` `right` `left` | _string_ | `center` |
| overlay-class | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlay-style | 自定义遮罩层样式 | _object_ | - |
| duration | 动画时长，单位毫秒，设置为 0 可以禁用动画 | _number \| string_ | `300` |
| z-index | 将弹窗的 z-index 层级设置为一个固定值 | _number \| string_ | `2000+` |
| round | 是否显示圆角 | _boolean_ | `false` |
| lock-scroll | 是否锁定背景滚动 | _boolean_ | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| close-icon | 关闭图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | `close` |
| close-icon-position | 关闭图标位置，可选值为 `top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
| before-close | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(action: string) => boolean \| Promise\<boolean\>_ | - |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](/icon#props) | _string_ | `z-icon` |
| transition | 动画类名，等价于 [transition](/transition)组件 的 `name` 属性 | _string_ | - |
| safe-area-inset-top | 是否开启顶部安全区适配 | _boolean_ | `false` |
| safe-area-inset-bottom | 是否开启底部安全区适配 | _boolean_ | `false` |
| customStyle | 自定义样式 | _object_ | - |
| customClass | 自定义类名 | _string_ | - |
| closeIconStyle | 自定义关闭图标样式 | _object_ | - |


### Events

| 事件名           | 说明                       | 回调参数            |
| ---------------- | -------------------------- | ------------------- |
| click            | 点击弹出层时触发           | _event_ |
| click-overlay    | 点击遮罩层时触发           | _event_ |
| click-close-icon | 点击关闭图标时触发         | _event_ |
| open             | 打开弹出层时立即触发       | -                   |
| close            | 关闭弹出层时立即触发       | -                   |
| opened           | 打开弹出层且动画结束后触发 | -                   |
| closed           | 关闭弹出层且动画结束后触发 | -                   |

### Slots

| 名称            | 说明         |
| --------------- | ------------ |
| default         | 弹窗内容     |
| overlay-content | 遮罩层的内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                           | 默认值                               | 描述 |
| ------------------------------ | ------------------------------------ | ---- |
| --z-popup-background         | _var(--z-background-2)_            | -    |
| --z-popup-transition         | _transform var(--z-duration-base)_ | -    |
| --z-popup-round-radius       | _32rpx_                               | -    |
| --z-popup-close-icon-size    | _44rpx_                               | -    |
| --z-popup-close-icon-color   | _var(--z-gray-5)_                  | -    |
| --z-popup-close-icon-margin  | _32rpx_                               | -    |
| --z-popup-close-icon-z-index | _1_                                  | -    |
