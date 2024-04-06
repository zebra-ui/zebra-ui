# DropdownMenu 下拉菜单

### 介绍

向下弹出的菜单列表。

## 代码演示

### 基础用法

```html
<z-dropdown-menu>
  <z-dropdown-item v-model="value1" :options="option1" />
  <z-dropdown-item v-model="value2" :options="option2" />
</z-dropdown-menu>
```

```js
import { ref } from 'vue'
const value1 = ref(0)
const value2 = ref('a')
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 }
]
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' }
]
```

### 自定义菜单内容

通过插槽可以自定义 `DropdownItem` 的内容，此时需要使用 `DropdownMenu` 实例上的 `close` 或指定 `DropdownItem` 的 `toggle` 方法手动控制菜单的显示。

```html
<z-dropdown-menu>
  <z-dropdown-item v-model="value1" :options="option1" />
  <z-dropdown-item title="筛选" ref="item">
    <z-cell center title="选项一">
      <template #right-icon>
        <z-switch v-model="switch1" />
      </template>
    </z-cell>
    <z-cell center title="选项二">
      <template #right-icon>
        <z-switch v-model="switch2" />
      </template>
    </z-cell>
    <view style="padding: 10rpx 32rpx">
      <z-button
        type="primary"
        block
        round
        style="height: 80rpx"
        @click="onConfirm"
      >
        确认
      </z-button>
    </view>
  </z-dropdown-item>
</z-dropdown-menu>
```

```js
import { ref } from 'vue';
const value1 = ref(0)
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 }
]
const item = ref()
const switch1 = ref(true)
const switch2 = ref(false)
const onConfirm = () => {
  item.value?.toggle()
}
```

### 自定义选中态颜色

通过 `active-color` 属性可以自定义菜单标题和选项的选中态颜色。

```html
<z-dropdown-menu active-color="#ee0a24">
  <z-dropdown-item v-model="value1" :options="option1" />
  <z-dropdown-item v-model="value2" :options="option2" />
</z-dropdown-menu>
```

### 横向滚动

通过 `swipe-threshold` 属性可以自定义滚动阈值。

```html
<z-dropdown-menu swipe-threshold="4">
  <z-dropdown-item v-model="value1" :options="option1" />
  <z-dropdown-item v-model="value2" :options="option2" />
  <z-dropdown-item v-model="value2" :options="option2" />
  <z-dropdown-item v-model="value2" :options="option2" />
  <z-dropdown-item v-model="value2" :options="option2" />
</z-dropdown-menu>
```

### 向上展开

将 `direction` 属性值设置为 `up`，菜单即可向上展开。

```html
<z-dropdown-menu direction="up">
  <z-dropdown-item v-model="value1" :options="option1" />
  <z-dropdown-item v-model="value2" :options="option2" />
</z-dropdown-menu>
```

### 禁用菜单

```html
<z-dropdown-menu>
  <z-dropdown-item v-model="value1" disabled :options="option1" />
  <z-dropdown-item v-model="value2" disabled :options="option2" />
</z-dropdown-menu>
```

## API

### DropdownMenu Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active-color | 菜单标题和选项的选中态颜色 | _string_ | `#1989fa` |
| direction | 菜单展开方向，可选值为`up` | _string_ | `down` |
| z-index | 菜单栏 z-index 层级 | _number \| string_ | `10` |
| duration | 动画时长，单位毫秒，设置为 0 可以禁用动画 | _number \| string_ | `200` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭菜单 | _boolean_ | `true` |
| close-on-click-outside | 是否在点击外部元素后关闭菜单 | _boolean_ | `true` |
| swipe-threshold | 滚动阈值，选项数量超过阈值且总宽度超过菜单栏宽度时，可以横向滚动 | _number \| string_ | - |

### DropdownItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中项对应的 value | _number \| string_ | - |
| title | 菜单项标题 | _string_ | 当前选中项文字 |
| options | 选项数组 | _Option[]_ | `[]` |
| disabled | 是否禁用菜单 | _boolean_ | `false` |
| title-class | 标题额外类名 | _string \| Array \| object_ | - |

### DropdownItem Events

| 事件名 | 说明                          | 回调参数 |
| ------ | ----------------------------- | -------- |
| change | 点击选项导致 value 变化时触发 | value    |
| open   | 打开菜单栏时触发              | -        |
| close  | 关闭菜单栏时触发              | -        |
| opened | 打开菜单栏且动画结束后触发    | -        |
| closed | 关闭菜单栏且动画结束后触发    | -        |

### DropdownItem Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 菜单内容         |
| title   | 自定义菜单项标题 |

### DropdownMenu 方法

通过 ref 可以获取到 DropdownMenu 实例并调用实例方法。

| 方法名 | 说明                   | 参数 | 返回值 |
| ------ | ---------------------- | ---- | ------ |
| close  | 关闭所有菜单的展示状态 | -    | -      |

### DropdownItem 方法

通过 ref 可以获取到 DropdownItem 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggle | 切换菜单展示状态，传 `true` 为显示，`false` 为隐藏，不传参为取反 | _show?: boolean_ | - |

### Option 数据结构

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| text | 文字 | _string_ |
| value | 标识符 | _number \| string \| boolean_ |
| icon | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-dropdown-menu-height | _96rpx_ | - |
| --z-dropdown-menu-background | _var(--z-background-2)_ | - |
| --z-dropdown-menu-shadow | _0 4rpx 24rpx fade(var(--z-gray-7), 12)_ | - |
| --z-dropdown-menu-title-font-size | _30rpx_ | - |
| --z-dropdown-menu-title-text-color | _var(--z-text-color)_ | - |
| --z-dropdown-menu-title-active-text-color | _var(--z-primary-color)_ | - |
| --z-dropdown-menu-title-disabled-text-color | _var(--z-text-color-2)_ | - |
| --z-dropdown-menu-title-padding | _0 var(--z-padding-xs)_ | - |
| --z-dropdown-menu-title-line-height | _var(--z-line-height-lg)_ | - |
| --z-dropdown-menu-option-active-color | _var(--z-primary-color)_ | - |
| --z-dropdown-menu-content-max-height | _80%_ | - |
| --z-dropdown-item-z-index | _10_ | - |

