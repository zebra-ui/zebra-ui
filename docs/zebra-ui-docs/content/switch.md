# Switch 开关

### 介绍

用于在打开和关闭状态之间进行切换。

## 代码演示

### 基础用法

通过 `v-model` 绑定开关的选中状态，`true` 表示开，`false` 表示关。

```html
<z-switch v-model="checked" />
```

```js
import { ref } from 'vue';
const checked = ref(true);
```

### 禁用状态

通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。

```html
<z-switch v-model="checked" disabled />
```

### 加载状态

通过 `loading` 属性设置开关为加载状态，加载状态下开关不可点击。

```html
<z-switch v-model="checked" loading />
```

### 自定义大小

通过 `size` 属性自定义开关的大小。

```html
<z-switch v-model="checked" size="44rpx" />
```

### 自定义颜色

`active-color` 属性表示打开时的背景色，`inactive-color` 表示关闭时的背景色。

```html
<z-switch v-model="checked" active-color="#ee0a24" inactive-color="#dcdee0" />
```

### 自定义按钮

通过 `node` 插槽自定义按钮的内容。

```vue
<z-switch v-model="checked">
  <template #node>
    <view class="icon-wrapper">
      <z-icon
        :name="checked ? 'plus-circle-fill' : 'minus-circle-fill'"
        :color="checked ? 'var(--z-blue)' : 'var(--z-gray-5)'"
        size="40rpx"
      />
    </view>
  </template>
</z-switch>

<style>
.demo-switch {
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}
</style>
```

### 异步控制

需要异步控制开关时，可以使用 `modelValue` 属性和 `update:model-value` 事件代替 `v-model`，并在事件回调函数中手动处理开关状态。

```html
<z-switch :model-value="checked" @update:model-value="onUpdateValue" />
```

```ts
<script lang="ts" setup>
import { ref } from 'vue'
import { useDialog } from '../../uni_modules/zebra-ui'
const dialog = useDialog()
const checked = ref(true)
const onUpdateValue = (newValue: any) => {
  dialog
    .showConfirmDialog({
      title: '提醒',
      message: '是否切换开关？'
    })
    .then(() => {
      checked.value = newValue
    })
}
</script>
```

### 搭配单元格使用

```html
<z-cell center title="标题">
  <template #right-icon>
    <z-switch v-model="checked" />
  </template>
</z-cell>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 开关选中状态 | _any_ | `false` |
| loading | 是否为加载状态 | _boolean_ | `false` |
| disabled | 是否为禁用状态 | _boolean_ | `false` |
| size | 开关按钮的尺寸，默认单位为 `px` | _number \| string_ | `52rpx` |
| active-color | 打开时的背景色 | _string_ | `#1989fa` |
| inactive-color | 关闭时的背景色 | _string_ | `rgba(120, 120, 128, 0.16)` |
| active-value | 打开时对应的值 | _any_ | `true` |
| inactive-value | 关闭时对应的值 | _any_ | `false` |

### Events

| 事件名 | 说明               | 回调参数            |
| ------ | ------------------ | ------------------- |
| change | 开关状态切换时触发 | _value: any_        |
| click  | 点击时触发         | _event: MouseEvent_ |

### Slots

| 名称       | 说明                 | 参数 |
| ---------- | -------------------- | ---- |
| node       | 自定义按钮的内容     | -    |
| background | 自定义开关的背景内容 | -    |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                          | 默认值                            | 描述 |
| ----------------------------- | --------------------------------- | ---- |
| --z-switch-size             | _52rpx_                            | -    |
| --z-switch-width            | _calc(1.8em + 8rpx)_               | -    |
| --z-switch-height           | _calc(1em + 8rpx)_                 | -    |
| --z-switch-node-size        | _1em_                             | -    |
| --z-switch-node-background  | _var(--z-white)_                | -    |
| --z-switch-node-shadow      | _0 6rpx 2rpx 0 rgba(0, 0, 0, 0.05)_ | -    |
| --z-switch-background       | _rgba(120, 120, 128, 0.16)_       | -    |
| --z-switch-on-background    | _var(--z-primary-color)_        | -    |
| --z-switch-duration         | _var(--z-duration-base)_        | -    |
| --z-switch-disabled-opacity | _var(--z-disabled-opacity)_     | -    |
