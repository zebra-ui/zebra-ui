# Tab 标签页

### 介绍

选项卡组件，用于在不同的内容区域之间进行切换。

## 代码演示

### 基础用法

通过 `v-model:active` 绑定当前激活标签对应的索引值，默认情况下启用第一个标签。

```html
<z-tabs v-model:active="active">
  <z-tab title="标签 1">内容 1</z-tab>
  <z-tab title="标签 2">内容 2</z-tab>
  <z-tab title="标签 3">内容 3</z-tab>
  <z-tab title="标签 4">内容 4</z-tab>
</z-tabs>
```

```js
import { ref } from 'vue';
const active = ref(0);
```

### 通过名称匹配

在标签指定 `name` 属性的情况下，`v-model:active` 的值为当前标签的 `name`（此时无法通过索引值来匹配标签）。

```html
<z-tabs v-model:active="activeName">
  <z-tab title="标签 1" name="a">内容 1</z-tab>
  <z-tab title="标签 2" name="b">内容 2</z-tab>
  <z-tab title="标签 3" name="c">内容 3</z-tab>
</z-tabs>
```

```js
import { ref } from 'vue';
const activeName = ref('b');
```

### 标签栏滚动

标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。

```html
<z-tabs v-model:active="active">
  <z-tab v-for="index in 8" :title="'标签 ' + index">
    内容 {{ index }}
  </z-tab>
</z-tabs>
```

### 禁用标签

设置 `disabled` 属性即可禁用标签。

```html
<z-tabs v-model:active="active">
  <z-tab title="标签 1">内容 1</z-tab>
  <z-tab title="标签 2" disabled>内容 2</z-tab>
  <z-tab title="标签 3">内容 3</z-tab>
</z-tabs>
```

### 样式风格

`Tab` 支持两种样式风格：`line` 和`card`，默认为 `line` 样式，可以通过 `type` 属性切换样式风格。

```html
<z-tabs v-model:active="active" type="card">
  <z-tab title="标签 1">内容 1</z-tab>
  <z-tab title="标签 2">内容 2</z-tab>
  <z-tab title="标签 3">内容 3</z-tab>
</z-tabs>
```

### 点击事件

点击标签页时，会触发 `click-tab` 事件。

```html
<z-tabs v-model:active="active" @click-tab="onClickTab">
  <z-tab title="标签 1">内容 1</z-tab>
  <z-tab title="标签 2">内容 2</z-tab>
</z-tabs>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const onClickTab = ({ title }: any) => toast.showToast(title)
```

### 粘性布局

通过 `sticky` 属性可以开启粘性布局，粘性布局下，标签页滚动到顶部时会自动吸顶。

```html
<z-tabs v-model:active="active" sticky>
  <z-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </z-tab>
</z-tabs>
```

> Tips: 如果页面顶部有其他内容，可以通过 offset-top 属性设置吸顶时与顶部的距离。自定义导航栏需声明custom-navbar属性。

### 收缩布局

通过 `shrink` 属性可以开启收缩布局，开启后，所有的标签会向左侧收缩对齐。

```html
<z-tabs v-model:active="active" shrink>
  <z-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </z-tab>
</z-tabs>
```

### 自定义标签

通过 `title` 插槽可以自定义标签内容。

```html
<z-tabs v-model:active="active">
  <z-tab v-for="index in 2">
    <template #title> <z-icon name="star" />选项 </template>
    内容 {{ index }}
  </z-tab>
</z-tabs>
```

### 切换动画

通过 `animated` 属性可以开启切换标签内容时的转场动画。

```html
<z-tabs v-model:active="active" animated>
  <z-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </z-tab>
</z-tabs>
```

### 滑动切换

通过 `swipeable` 属性可以开启滑动切换标签页。

```html
<z-tabs v-model:active="active" swipeable>
  <z-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </z-tab>
</z-tabs>
```

### 滚动导航

通过 `scrollspy` 属性可以开启滚动导航模式，该模式下，内容将会平铺展示。

```html
<z-tabs v-model:active="activeScrollspy" scrollspy>
  <view style="height: 1000rpx">
    <z-tab
      v-for="(item, index) in 18"
      :key="index"
      :title="`标签 ${item}`"
    >
      <view class="demo-tab-item"> 内容{{ item }} </view>
    </z-tab>
  </view>
</z-tabs>
```

### 异步切换

通过 `before-change` 属性可以在切换标签前执行特定的逻辑。

```html
<z-tabs v-model:active="activeBefore" :before-change="beforeChange">
  <z-tab
    v-for="(item, index) in 4"
    :key="index"
    :title="`标签 ${item}`"
  >
    <view class="demo-tab-item"> 内容{{ item }} </view>
  </z-tab>
</z-tabs>
```

```js
const beforeChange = (index: any) => {
  if (index === 1) {
    return false
  }
  return new Promise((resolve) => {
    resolve(index !== 3)
  })
}
```

> Tips: 通过手势滑动不会触发 before-change 属性。

### 隐藏标题栏

通过将 `showHeader` 属性设置为 `false`，可以不渲染 Tabs 的标题栏。在这种情况下，你可以通过一些自定义组件来控制 Tabs 的 `active` 属性。

```html
<z-tabs v-model:active="active" :show-header="false">
  <z-tab v-for="index in 4"> 内容 {{ index }} </z-tab>
</z-tabs>
```

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:active | 绑定当前选中标签的标识符 | _number \| string_ | `0` |
| type | 样式风格类型，可选值为 `card` | _string_ | `line` |
| color | 标签主题色 | _string_ | `#1989fa` |
| background | 标签栏背景色 | _string_ | `white` |
| duration | 动画时间，单位秒，设置为 0 可以禁用动画 | _number \| string_ | `0.3` |
| line-width | 底部条宽度，默认单位 `px` | _number \| string_ | `80rpx` |
| line-height | 底部条高度，默认单位 `px` | _number \| string_ | `6rpx` |
| animated | 是否开启切换标签内容时的转场动画 | _boolean_ | `false` |
| border | 是否显示标签栏外边框，仅在 `type="line"` 时有效 | _boolean_ | `false` |
| ellipsis | 是否省略过长的标题文字 | _boolean_ | `true` |
| sticky | 是否使用粘性布局 | _boolean_ | `false` |
| shrink | 是否开启左侧收缩布局 | _boolean_ | `false` |
| swipeable | 是否开启手势左右滑动切换 | _boolean_ | `false` |
| scrollspy | 是否开启滚动导航 | _boolean_ | `false` |
| show-header | 是否显示标题栏 | _boolean_ | `true` |
| offset-top | 粘性布局下吸顶时与顶部的距离，支持 `rpx` 单位，默认 `px` | _number \| string_ | `0` |
| swipe-threshold | 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 | _number \| string_ | `5` |
| title-active-color | 标题选中态颜色 | _string_ | - |
| title-inactive-color | 标题默认态颜色 | _string_ | - |
| before-change | 切换标签前的回调函数，返回 `false` 可阻止切换，支持返回 Promise | _(name: number \| string) => boolean \| Promise\<boolean\>_ | - |

### Tab Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | - |
| disabled | 是否禁用标签 | _boolean_ | `false` |
| dot | 是否在标题右上角显示小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| name | 标签名称，作为匹配的标识符 | _number \| string_ | 标签的索引值 |
| title-style | 自定义标题样式 | _string \| Array \| object_ | - |
| title-class | 自定义标题类名 | _string \| Array \| object_ | - |
| show-zero-badge | 当 badge 为数字 0 时，是否展示徽标 | _boolean_ | `true` |

### Tabs Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click-tab | 点击标签时触发 | _{ name: string \| number, title: string, event: MouseEvent, disabled: boolean }_ |
| change | 当前激活的标签改变时触发 | _name: string \| number, title: string_ |
| scroll | 滚动时触发，仅在 sticky 模式下生效 | _{ scrollTop: number, isFixed: boolean }_ |

### Tabs 方法

通过 ref 可以获取到 Tabs 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| resize | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | - | - |
| scrollTo | 滚动到指定的标签页，在滚动导航模式下可用 | _name: string \| number_ | - |

### Tabs Slots

| 名称       | 说明           |
| ---------- | -------------- |
| nav-left   | 标签栏左侧内容 |
| nav-right  | 标签栏右侧内容 |
| nav-bottom | 标签栏下方内容 |

### Tab Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 标签页内容 |
| title   | 自定义标题 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                          | 默认值                      | 描述 |
| ----------------------------- | --------------------------- | ---- |
| --z-tab-text-color          | _var(--z-gray-7)_         | -    |
| --z-tab-active-text-color   | _var(--z-text-color)_     | -    |
| --z-tab-disabled-text-color | _var(--z-text-color-3)_   | -    |
| --z-tab-font-size           | _var(--z-font-size-md)_   | -    |
| --z-tab-line-height         | _var(--z-line-height-md)_ | -    |
| --z-tabs-default-color      | _var(--z-primary-color)_  | -    |
| --z-tabs-line-height        | _88rpx_                      | -    |
| --z-tabs-card-height        | _60rpx_                      | -    |
| --z-tabs-nav-background     | _var(--z-background-2)_   | -    |
| --z-tabs-bottom-bar-width   | _80rpx_                      | -    |
| --z-tabs-bottom-bar-height  | _6rpx_                       | -    |
| --z-tabs-bottom-bar-color   | _var(--z-primary-color)_  | -    |
