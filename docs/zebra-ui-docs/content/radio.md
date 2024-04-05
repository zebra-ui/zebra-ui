# Radio 单选框

### 介绍

在一组备选项中进行单选。

## 代码演示

### 基础用法

通过 `v-model` 绑定值当前选中项的 name。

```html
<z-radio-group v-model="checked">
  <z-radio name="1">单选框 1</z-radio>
  <z-radio name="2" :custom-style="{ 'margin-top': '20rpx' }"
    >单选框 2</z-radio
  >
</z-radio-group>
```

```js
import { ref } from 'vue'
const checked = ref('1')
```

### 水平排列

将 `direction` 属性设置为 `horizontal` 后，单选框组会变成水平排列。

```html
<z-radio-group v-model="checked" direction="horizontal">
  <z-radio name="1">单选框 1</z-radio>
  <z-radio name="2">单选框 2</z-radio>
</z-radio-group>
```

### 禁用状态

通过 `disabled` 属性禁止选项切换，在 `Radio` 上设置 `disabled` 可以禁用单个选项。

```html
<z-radio-group v-model="checked" disabled>
  <z-radio name="1">单选框 1</z-radio>
  <z-radio name="2">单选框 2</z-radio>
</z-radio-group>
```

### 自定义形状

`shape` 属性可选值为 `square` 和 `dot`，单选框形状分别对应方形和圆点形。

```html
<z-radio-group v-model="checked" shape="square">
  <z-radio name="1">单选框 1</z-radio>
  <z-radio name="2">单选框 2</z-radio>
</z-radio-group>

<z-radio-group v-model="checked" shape="dot">
  <z-radio name="1">Radio 1</z-radio>
  <z-radio name="2">Radio 2</z-radio>
</z-radio-group>
```

### 自定义颜色

通过 `checked-color` 属性设置选中状态的图标颜色。

```html
<z-radio-group v-model="checked">
  <z-radio name="1" checked-color="#ee0a24">单选框 1</z-radio>
  <z-radio name="2" checked-color="#ee0a24">单选框 2</z-radio>
</z-radio-group>
```

### 自定义大小

通过 `icon-size` 属性可以自定义图标的大小。

```html
<z-radio-group v-model="checked">
  <z-radio name="1" icon-size="24px">单选框 1</z-radio>
  <z-radio name="2" icon-size="24px">单选框 2</z-radio>
</z-radio-group>
```

### 自定义图标

通过 `icon` 插槽自定义图标，并通过 `slotProps` 判断是否为选中状态。

```html
<z-radio-group v-model="checked">
  <z-radio name="1">
    单选框 1
    <template #icon="props">
      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
    </template>
  </z-radio>
  <z-radio name="2">
    单选框 2
    <template #icon="props">
      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
    </template>
  </z-radio>
</z-radio-group>

<style>
.demo-radio {
  .img-icon {
    width: 40rpx;
    height: 40rpx;
  }
}
</style>
```

```ts
<script lang="ts" setup>
import { ref } from 'vue'
const checked = ref('1')
const activeIcon =
  'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png'
const inactiveIcon =
  'https://cdn.zebraui.com/zebra-ui/images/assets/demo-noselect.png'
</script>
```

### 左侧文本

将 `label-position` 属性设置为 `'left'`，可以将文本位置调整到单选框左侧。

```html
<z-radio-group v-model="checked">
  <z-radio name="1" label-position="left">单选框 1</z-radio>
  <z-radio name="2" label-position="left">单选框 2</z-radio>
</z-radio-group>
```

### 禁用文本点击

设置 `label-disabled` 属性后，点击图标以外的内容不会触发单选框切换。

```html
<z-radio-group v-model="checked">
  <z-radio name="1" label-disabled>单选框 1</z-radio>
  <z-radio name="2" label-disabled>单选框 2</z-radio>
</z-radio-group>
```

### 搭配单元格组件使用

搭配单元格组件使用时，需要再引入 `Cell` 和 `CellGroup` 组件。

```html
<z-radio-group v-model="checked">
  <z-cell-group>
    <z-cell title="单选框 1" clickable @click="checked = '1'">
      <template #right-icon>
        <z-radio name="1" />
      </template>
    </z-cell>
    <z-cell title="单选框 2" clickable @click="checked = '2'">
      <template #right-icon>
        <z-radio name="2" />
      </template>
    </z-cell>
  </z-cell-group>
</z-radio-group>
```

## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标识符，通常为一个唯一的字符串或数字 | _any_ | - |
| shape | 形状，可选值为 `square` `dot` | _string_ | `round` |
| disabled | 是否为禁用状态 | _boolean_ | `false` |
| label-disabled | 是否禁用文本内容点击 | _boolean_ | `false` |
| label-position | 文本位置，可选值为 `left` | _string_ | `right` |
| icon-size | 图标大小，默认单位为 `px` | _number \| string_ | `20px` |
| checked-color | 选中状态颜色 | _string_ | `#1989fa` |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中项的标识符 | _any_ | - |
| disabled | 是否禁用所有单选框 | _boolean_ | `false` |
| direction | 排列方向，可选值为 `horizontal` | _string_ | `vertical` |
| icon-size | 所有单选框的图标大小，默认单位为 `px` | _number \| string_ | `20px` |
| checked-color | 所有单选框的选中状态颜色 | _string_ | `#1989fa` |
| shape | 形状，可选值为 `square` `dot` | _string_ | `round` |

### Radio Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| click  | 点击单选框时触发 | _event_ |

### RadioGroup Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| change | 当绑定值变化时触发的事件 | _name: string_ |

### Radio Slots

| 名称    | 说明       | 参数                                      |
| ------- | ---------- | ----------------------------------------- |
| default | 自定义文本 | _{ checked: boolean, disabled: boolean }_ |
| icon    | 自定义图标 | _{ checked: boolean, disabled: boolean }_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-radio-size | _40rpx_ | - |
| --z-radio-dot-size | _16rpx_ | 圆点到边界的距离 |
| --z-radio-border-color | _var(--z-gray-5)_ | - |
| --z-radio-duration | _var(--z-duration-fast)_ | - |
| --z-radio-label-margin | _var(--z-padding-xs)_ | - |
| --z-radio-label-color | _var(--z-text-color)_ | - |
| --z-radio-checked-icon-color | _var(--z-primary-color)_ | - |
| --z-radio-disabled-icon-color | _var(--z-gray-5)_ | - |
| --z-radio-disabled-label-color | _var(--z-text-color-3)_ | - |
| --z-radio-disabled-background | _var(--z-border-color)_ | - |
