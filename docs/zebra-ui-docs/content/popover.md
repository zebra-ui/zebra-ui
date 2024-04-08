# Popover 气泡弹出框

### 介绍

弹出式的气泡菜单。

## 代码演示

### 基础用法

当 Popover 弹出时，会基于 `reference` 插槽的内容进行定位。

```html
<z-popover
  v-model:show="showPopover"
  :actions="actions"
  placement="bottom-start"
  @select="onSelect"
>
  <template #reference>
    <z-button type="primary"> 浅色风格 </z-button>
  </template>
</z-popover>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const showPopover = ref(false);
// 通过 actions 属性来定义菜单选项
const actions = [
  { text: '选项一' },
  { text: '选项二' },
  { text: '选项三' },
];
const onSelect = (action) => toast.showToast(action.text);
```

### 深色风格

Popover 支持浅色和深色两种风格，默认为浅色风格，将 `theme` 属性设置为 `dark` 可切换为深色风格。

```html
<z-popover v-model:show="showPopover" theme="dark" :actions="actions">
  <template #reference>
    <z-button type="primary">深色风格</z-button>
  </template>
</z-popover>
```

```js
import { ref } from 'vue';
const showPopover = ref(false);
const actions = [
  { text: '选项一' },
  { text: '选项二' },
  { text: '选项三' },
];
```

### 水平排列

将 `actions-direction` 属性设置为 `horizontal` 后，菜单选项会变成水平排列。

```html
<z-popover
  v-model:show="showPopover"
  :actions="actions"
  actions-direction="horizontal"
>
  <template #reference>
    <z-button type="primary">水平排列</z-button>
  </template>
</z-popover>
```

```js
import { ref } from 'vue';
const showPopover = ref(false);
const actions = [
  { text: '选项一' },
  { text: '选项二' },
  { text: '选项三' },
];
```

### 弹出位置

通过 `placement` 属性来控制气泡的弹出位置。

```html
<z-popover placement="top" />
```

`placement` 支持以下值：

```bash
top           # 顶部中间位置
top-start     # 顶部左侧位置
top-end       # 顶部右侧位置
left          # 左侧中间位置
left-start    # 左侧上方位置
left-end      # 左侧下方位置
right         # 右侧中间位置
right-start   # 右侧上方位置
right-end     # 右侧下方位置
bottom        # 底部中间位置
bottom-start  # 底部左侧位置
bottom-end    # 底部右侧位置
```

### 展示图标

在 `actions` 数组中，可以通过 `icon` 字段来定义选项的图标，支持传入图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props)。

```html
<z-popover v-model:show="showPopover" :actions="actions">
  <template #reference>
    <z-button type="primary">展示图标</z-button>
  </template>
</z-popover>
```

```js
import { ref } from 'vue';
const showPopover = ref(false);
const actions = [
  { text: '选项一', icon: 'plus-circle' },
  { text: '选项二', icon: 'minus-circle' },
  { text: '选项三', icon: 'message' }
];
```

### 禁用选项

在 `actions` 数组中，可以通过 `disabled` 字段来禁用某个选项。

```html
<z-popover v-model:show="showPopover" :actions="actions">
  <template #reference>
    <z-button type="primary">禁用选项</z-button>
  </template>
</z-popover>
```

```js
import { ref } from 'vue';
const showPopover = ref(false);
const actions = [
  { text: '选项一', disabled: true },
  { text: '选项二', disabled: true },
  { text: '选项三' },
];
```

### 自定义内容

通过默认插槽，可以在 Popover 内部放置任意内容。

```html
<z-popover
  v-model:show="show.customContent"
  placement="top-start"
  @select="onSelect"
>
  <z-grid
    square
    clickable
    :border="false"
    column-num="3"
    :custom-style="{ width: '480rpx' }"
  >
    <z-grid-item
      v-for="i in 6"
      :key="i"
      icon="image"
      text="选项"
      @click="show.customContent = false"
    />
  </z-grid>
  <template #reference>
    <z-button type="primary"> 自定义内容 </z-button>
  </template>
</z-popover>
```

```js
import { ref } from 'vue';
const showPopover = ref(false);
```

### 非受控模式

你可以把 Popover 当做受控组件或非受控组件使用：

- 当绑定 `v-model:show` 时，Popover 为受控组件，此时组件的显示完全由 `v-model:show` 的值决定。
- 当未绑定 `v-model:show` 时，Popover 为非受控组件，此时你可以通过 `show` 属性传入一个默认值，组件值的显示由组件自身控制。

```html
<z-popover :actions="actions" position="top-start" @select="onSelect">
  <template #reference>
    <z-button type="primary">非受控模式</z-button>
  </template>
</z-popover>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const actions = [
  { text: '选项一' },
  { text: '选项二' },
  { text: '选项三' },
];
const onSelect = (action) => toast.showToast(action.text);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:show | 是否展示气泡弹出层 | _boolean_ | `false` |
| actions | 选项列表 | _PopoverAction[]_ | `[]` |
| actions-direction | 选项列表的排列方向，可选值为 `horizontal` | _PopoverActionsDirection_ | `vertical` |
| placement | 弹出位置 | _PopoverPlacement_ | `bottom` |
| theme | 主题风格，可选值为 `dark` | _PopoverTheme_ | `light` |
| trigger | 触发方式，可选值为 `manual` | _PopoverTrigger_ | `click` |
| duration | 动画时长，单位毫秒，设置为 0 可以禁用动画 | _number \| string_ | `300` |
| offset | 出现位置的偏移量 | _[number, number]_ | `[0, 8]` |
| overlay | 是否显示遮罩层 | _boolean_ | `false` |
| overlay-class | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlay-style | 自定义遮罩层样式 | _object_ | - |
| show-arrow | 是否展示小箭头 | _boolean_ | `true` |
| close-on-click-action | 是否在点击选项后关闭 | _boolean_ | `true` |
| close-on-click-outside | 是否在点击外部元素后关闭菜单 | _boolean_ | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭菜单 | _boolean_ | `true` |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](/icon#props) | _string_ | `z-icon` |

### PopoverAction 数据结构

`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| text | 选项文字 | _string_ |
| icon | 文字左侧的图标，支持传入图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ |
| color | 选项文字颜色 | _string_ |
| disabled | 是否为禁用状态 | _boolean_ |
| className | 为对应选项添加额外的类名 | _string \| Array \| object_ |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 点击选项时触发 | _action: PopoverAction, index: number_ |
| open | 打开菜单时触发 | - |
| close | 关闭菜单时触发 | - |
| opened | 打开菜单且动画结束后触发 | - |
| closed | 关闭菜单且动画结束后触发 | - |
| click-overlay | 点击遮罩层时触发 | _event: MouseEvent_ |

### Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| default | 自定义菜单内容 | - |
| reference | 触发 Popover 显示的元素内容 | - |
| action | 自定义选项内容 | _{ action: PopoverAction, index: number }_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-popover-arrow-size | _12rpx_ | - |
| --z-popover-radius | _var(--z-radius-lg)_ | - |
| --z-popover-action-width | _256rpx_ | - |
| --z-popover-action-height | _88rpx_ | - |
| --z-popover-action-font-size | _var(--z-font-size-md)_ | - |
| --z-popover-action-line-height | _var(--z-line-height-md)_ | - |
| --z-popover-action-icon-size | _40rpx_ | - |
| --z-popover-horizontal-action-height | _68rpx_ | - |
| --z-popover-horizontal-action-icon-size | _32rpx_ | - |
| --z-popover-light-text-color | _var(--z-text-color)_ | - |
| --z-popover-light-background | _var(--z-background-2)_ | - |
| --z-popover-light-action-disabled-text-color | _var(--z-text-color-3)_ | - |
| --z-popover-dark-text-color | _var(--z-white)_ | - |
| --z-popover-dark-background | _#4a4a4a_ | - |
| --z-popover-dark-action-disabled-text-color | _var(--z-text-color-2)_ | - |
