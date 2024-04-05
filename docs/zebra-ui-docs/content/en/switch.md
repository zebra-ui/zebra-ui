
# Switch switch

### introduce

Used to toggle between on and off state.

## Code Demo

### Basic usage

Bind the selected state of the switch through `v-model`, `true` means on, `false` means off.

```html
<z-switch v-model="checked" />
```

```js
import { ref } from 'vue';
const checked = ref(true);
```

### Disabled state

Disable the switch through the `disabled` attribute. When disabled, the switch cannot be clicked.

```html
<z-switch v-model="checked" disabled />
```

### Loading status

Set the switch to the loading state through the `loading` attribute. The switch is not clickable in the loading state.

```html
<z-switch v-model="checked" loading />
```

### Custom size

Customize the size of the switch via the `size` attribute.

```html
<z-switch v-model="checked" size="44rpx" />
```

### Custom color

The `active-color` attribute represents the background color when it is opened, and `inactive-color` represents the background color when it is closed.

```html
<z-switch v-model="checked" active-color="#ee0a24" inactive-color="#dcdee0" />
```

### Custom buttons

Customize the content of the button via the `node` slot.

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

### Asynchronous control

When you need to control the switch asynchronously, you can use the `modelValue` attribute and the `update:model-value` event instead of `v-model`, and manually handle the switch status in the event callback function.

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
title: 'Reminder',
message: 'Do you want to toggle the switch? '
})
.then(() => {
checked.value = newValue
})
}
</script>
```

### Use with cells

```html
<z-cell center title="标题">
<template #right-icon>
<z-switch v-model="checked" />
</template>
</z-cell>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | Switch selected state | _any_ | `false` |
| loading | Whether it is loading state | _boolean_ | `false` |
| disabled | Whether it is disabled | _boolean_ | `false` |
| size | The size of the switch button, the default unit is `px` | _number \| string_ | `52rpx` |
| active-color | Background color when opening | _string_ | `#1989fa` |
| inactive-color | Background color when turned off | _string_ | `rgba(120, 120, 128, 0.16)` |
| active-value | The corresponding value when opened | _any_ | `true` |
| inactive-value | The corresponding value when closed | _any_ | `false` |

### Events

| Event name | Description | Callback parameters |
| ------ | ------------------ | ------------------- |
| change | Triggered when the switch state switches | _value: any_ |
| click | Triggered when clicked | _event: MouseEvent_ |

### Slots

| Name | Description | Parameters |
| ---------- | -------------------- | ---- |
| node | Custom button content | - |
| background | Customize the background content of the switch | - |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
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

