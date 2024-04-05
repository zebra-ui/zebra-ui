# Slider 滑块

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

## 代码演示

### 基础用法

```html
<z-slider v-model="value" @change="onChange" />
```

```js
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const value = ref(50)
const onChange = (value: string) => toast.showToast('当前值：' + value)
```

### 双滑块

添加 `range` 属性就可以开启双滑块模式，确保 `value` 的值是一个数组。

```html
<z-slider v-model="value" range @change="onChange" />
```

```js
const value = ref([10, 50]);
```

### 指定选择范围

```html
<z-slider v-model="value" :min="-50" :max="50" />
```

### 禁用

```html
<z-slider v-model="value" disabled />
```

### 指定步长

```html
<z-slider v-model="value" :step="10" />
```

### 自定义样式

```html
<z-slider v-model="value" bar-height="8rpx" active-color="#ee0a24" />
```

### 自定义按钮

```html
<z-slider v-model="value">
  <template #button>
    <view class="custom-button">{{ value }}</view>
  </template>
</z-slider>

<style>
  .custom-button {
    width: 52rpx;
    font-size: 20rpx;
    line-height: 36rpx;
    color: #fff;
    text-align: center;
    background-color: var(--z-primary-color);
    border-radius: 200rpx;
  }
</style>
```

### 垂直方向

设置 `vertical` 属性后，滑块会垂直展示，且高度为 100% 父元素高度。

```html
<view class="demo-slider-item">
  <view :style="{ height: '300rpx' }">
    <z-slider v-model="value1" vertical @change="onChange" />
    <z-slider
      v-model="value2"
      range
      vertical
      :custom-style="{ 'margin-left': '200rpx' }"
      @change="onChange"
    />
  </view>
</view>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前进度百分比，在双滑块模式下为数组格式 | _number \| [number, number]_ | `0` |
| max | 最大值 | _number \| string_ | `100` |
| min | 最小值 | _number \| string_ | `0` |
| step | 步长 | _number \| string_ | `1` |
| bar-height | 进度条高度，默认单位为 `px` | _number \| string_ | `2px` |
| button-size | 滑块按钮大小，默认单位为 `px` | _number \| string_ | `24px` |
| active-color | 进度条激活态颜色 | _string_ | `#1989fa` |
| inactive-color | 进度条非激活态颜色 | _string_ | `#e5e5e5` |
| range | 是否开启双滑块模式 | _boolean_ | `false` |
| reverse | 是否将进度条反转 | _boolean_ | `false` |
| disabled | 是否禁用滑块 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法修改滑块的值 | _boolean_ | `false` |
| vertical | 是否垂直展示 | _boolean_ | `false` |

### Events

| 事件名             | 说明                     | 回调参数            |
| ------------------ | ------------------------ | ------------------- |
| update:model-value | 进度变化时实时触发       | _value: number_     |
| change             | 进度变化且结束拖动后触发 | _value: number_     |
| drag-start         | 开始拖动时触发           | _event: TouchEvent_ |
| drag-end           | 结束拖动时触发           | _event: TouchEvent_ |

### Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| button | 自定义滑块按钮 | _{ value: number, dragging: boolean }_ |
| left-button | 自定义左侧滑块按钮（双滑块模式下） | _{ value: number, dragging: boolean, dragIndex?: number }_ |
| right-button | 自定义右侧滑块按钮（双滑块模式下） | _{ value: number, dragging: boolean, dragIndex?: number }_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                             | 默认值                         | 描述 |
| -------------------------------- | ------------------------------ | ---- |
| --z-slider-active-background   | _var(--z-primary-color)_     | -    |
| --z-slider-inactive-background | _var(--z-gray-3)_            | -    |
| --z-slider-disabled-opacity    | _var(--z-disabled-opacity)_  | -    |
| --z-slider-bar-height          | _4rpx_                          | -    |
| --z-slider-button-width        | _48rpx_                         | -    |
| --z-slider-button-height       | _48rpx_                         | -    |
| --z-slider-button-radius       | _50%_                          | -    |
| --z-slider-button-background   | _var(--z-white)_             | -    |
| --z-slider-button-shadow       | _0 2rpx 4rpx rgba(0, 0, 0, 0.5)_ | -    |
