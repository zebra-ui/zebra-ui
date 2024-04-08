# Steps 步骤条

### 介绍

用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。

## 代码演示

### 基础用法

`active` 属性表示当前步骤的索引，从 0 起计。

```html
<z-steps :active="active">
  <z-step>第一步</z-step>
  <z-step>第二步</z-step>
  <z-step>第三步</z-step>
  <z-step>第四步</z-step>
</z-steps>
```

```js
import { ref } from 'vue';
const active = ref(1);
```

### 自定义样式

可以通过 `active-icon` 和 `active-color` 属性设置激活状态下的图标和颜色。

```html
<z-steps :active="active" active-icon="check" inactive-icon="right-big" active-color="#07c160">
  <z-step>第一步</z-step>
  <z-step>第二步</z-step>
  <z-step>第三步</z-step>
  <z-step>第四步</z-step>
</z-steps>
```

### 竖向步骤条

可以通过设置 `direction` 属性来改变步骤条的显示方向。

```html
<z-steps :active="0" direction="vertical">
  <z-step>
    <view>状态一</view>
    <view>2016-07-12 12:40</view>
  </z-step>
  <z-step>
    <view>状态二</view>
    <view>2016-07-11 10:00</view>
  </z-step>
  <z-step>
    <view>状态三</view>
    <view>2016-07-10 09:30</view>
  </z-step>
</z-steps>
```

## API

### Steps Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 当前步骤对应的索引值 | _number \| string_ | `0` |
| direction | 步骤条方向，可选值为 `vertical` | _string_ | `horizontal` |
| active-icon | 当前步骤对应的底部图标，可选值见 [Icon 组件](/icon) | _string_ | `checked` |
| inactive-icon | 非当前步骤对应的底部图标，可选值见 [Icon 组件](/icon) | _string_ | - |
| finish-icon | 已完成步骤对应的底部图标，优先级高于 `inactive-icon`，可选值见 [Icon 组件](/icon) | _string_ | - |
| active-color | 当前步骤和已完成步骤的颜色 | _string_ | `#07c160` |
| inactive-color | 未激活步骤的颜色 | _string_ | `#969799` |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](/icon#props) | _string_ | `z-icon` |

### Step Slots

| 名称          | 说明                                                       |
| ------------- | ---------------------------------------------------------- |
| default       | 步骤内容                                                   |
| active-icon   | 自定义激活状态图标                                         |
| inactive-icon | 自定义未激活状态图标                                       |
| finish-icon   | 自定义已完成步骤对应的底部图标，优先级高于 `inactive-icon` |

### Steps Events

| 事件名     | 说明                       | 回调参数        |
| ---------- | -------------------------- | --------------- |
| click-step | 点击步骤的标题或图标时触发 | _index: number_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                                  | 默认值                     | 描述 |
| ------------------------------------- | -------------------------- | ---- |
| --z-step-text-color                 | _var(--z-text-color-2)_  | -    |
| --z-step-active-color               | _var(--z-primary-color)_ | -    |
| --z-step-process-text-color         | _var(--z-text-color)_    | -    |
| --z-step-font-size                  | _var(--z-font-size-md)_  | -    |
| --z-step-line-color                 | _var(--z-border-color)_  | -    |
| --z-step-finish-line-color          | _var(--z-primary-color)_ | -    |
| --z-step-finish-text-color          | _var(--z-text-color)_    | -    |
| --z-step-icon-size                  | _24rpx_                     | -    |
| --z-step-circle-size                | _10rpx_                      | -    |
| --z-step-circle-color               | _var(--z-gray-6)_        | -    |
| --z-step-horizontal-title-font-size | _var(--z-font-size-sm)_  | -    |
| --z-steps-background                | _var(--z-background-2)_  | -    |
