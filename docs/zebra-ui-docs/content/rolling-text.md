# RollingText 翻滚文本

### 介绍

文本翻滚动效，可以翻滚数字和其他类型文本。

## 代码演示

### 基础用法

你可以通过 `start-num` 设置起始数值，`target-num` 设置目标数值。RollingText 组件会自动开始动画，从起始数值翻滚到目标数值。

```html
<z-rolling-text :start-num="0" :target-num="123" />
```

### 设置翻滚方向

你可以通过 `direction` 属性设置数字的翻滚方向，默认为向下翻滚，设置为 `up` 即可向上翻滚。

```html
<z-rolling-text :start-num="0" :target-num="432" direction="up" />
```

### 设置各数位停止顺序

你可以通过 `stop-order` 属性设置动画各个数位的停止先后顺序。默认先停止高位，设置为 `rtl` 可以先从个位停止。

```html
<z-rolling-text :start-num="0" :target-num="54321" stop-order="rtl" />
```

### 翻转非数字内容

你可以使用 `text-list` 属性设置非数字内容的翻转。组件会从数组的第一项翻转到最后一项，请确保数组长度大于等于 2，以及每一项的长度一致。

```html
<z-rolling-text :text-list="textList" :duration="1" />
```

```js
import { ref } from 'vue';
const textList = ref([
  'aaaaa',
  'bbbbb',
  'ccccc',
  'ddddd',
  'eeeee',
  'fffff',
  'ggggg',
]);
```

### 自定义样式

RollingText 组件提供了一些 CSS 变量，你可以覆盖这些变量来自定义样式，也可以直接修改组件的样式。此外，你还可以通过 `height` 属性设置数字高度。

```html
<view class="my-rolling-text">
  <z-rolling-text
    :start-num="12345"
    :target-num="54321"
    :auto-start="isStart4"
    :height="54"
  />
</view>
```

```css
.my-rolling-text {
  --z-rolling-text-background: #1989fa;
  --z-rolling-text-color: white;
  --z-rolling-text-font-size: 48rpx;
  --z-rolling-text-gap: 12rpx;
  --z-rolling-text-item-border-radius: 10rpx;
  --z-rolling-text-item-width: 80rpx;
}
```

### 手动控制

通过 ref 获取到组件实例后，你可以调用 `start`、`reset` 方法，`start` 方法用于开始动画，`reset` 方法用于重置动画。

```html
<view class="my-rolling-text">
  <z-rolling-text
    ref="rollingTextRef"
    :start-num="0"
    :target-num="54321"
    :auto-start="false"
    :height="54"
  />
</view>
<z-grid
  clickable
  :column-num="2"
  :custom-style="{ 'margin-top': '20rpx' }"
>
  <z-grid-item icon="play-circle" text="开始" @click="start" />
  <z-grid-item icon="reload" text="重置" @click="reset" />
</z-grid>
```

```js
import { ref } from 'vue';
const rollingTextRef = ref(null);
const start = () => {
  rollingTextRef.value.start();
};
const reset = () => {
  rollingTextRef.value.reset();
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| start-num | 起始数值 | _number_ | `0` |
| target-num | 目标数值 | _number_ | - |
| text-list | 内容数组，用于翻转非数字内容 | _string[]_ | `[]` |
| duration | 动画时长，单位为秒 | _number_ | `2` |
| direction | 文本翻滚方向，值为 `down` 和 `up` | _string_ | `down` |
| auto-start | 是否自动开始动画 | _boolean_ | `true` |
| stop-order | 各个数位动画停止先后顺序，值为 `ltr` 和 `rtl` | _string_ | `ltr` |
| height | 数字高度，单位为 `px` | _number_ | `40` |

### 方法

通过 ref 可以获取到 RollingText 实例并调用实例方法。

| 方法名 | 说明     | 参数 | 返回值 |
| ------ | -------- | ---- | ------ |
| start  | 开始动画 | -    | -      |
| reset  | 重置动画 | -    | -      |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-rolling-text-background | _inherit_ | 单个数位背景色 |
| --z-rolling-text-color | _var(--z-text-color)_ | 数字颜色 |
| --z-rolling-text-font-size | _var(--z-font-size-md)_ | 字体大小 |
| --z-rolling-text-gap | _0px_ | 数位之间的间隔 |
| --z-rolling-text-item-width | _30rpx_ | 单个数位宽度 |
| --z-rolling-text-item-border-radius | _0px_ | 单个数位边框圆角 |
