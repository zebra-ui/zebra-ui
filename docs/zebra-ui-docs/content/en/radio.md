# Radio radio button

### introduce

Make a single selection from a set of alternatives.

## Code Demo

### Basic usage

Bind the value to the name of the currently selected item through `v-model`.

```html
<z-radio-group v-model="checked">
   <z-radio name="1">Radio button 1</z-radio>
   <z-radio name="2" :custom-style="{ 'margin-top': '20rpx' }"
     >Radio button 2</z-radio
   >
</z-radio-group>
```

```js
import { ref } from 'vue'
const checked = ref('1')
```

### Horizontal arrangement

Setting the `direction` property to `horizontal` causes the radio button group to be arranged horizontally.

```html
<z-radio-group v-model="checked" direction="horizontal">
   <z-radio name="1">Radio button 1</z-radio>
   <z-radio name="2">Radio button 2</z-radio>
</z-radio-group>
```

### Disabled state

Disable option switching via the `disabled` attribute, setting `disabled` on `Radio` disables individual options.

```html
<z-radio-group v-model="checked" disabled>
   <z-radio name="1">Radio button 1</z-radio>
   <z-radio name="2">Radio button 2</z-radio>
</z-radio-group>
```

### Custom shapes

The optional values ​​of the `shape` attribute are `square` and `dot`, and the radio button shapes correspond to square and dot shapes respectively.

```html
<z-radio-group v-model="checked" shape="square">
   <z-radio name="1">Radio button 1</z-radio>
   <z-radio name="2">Radio button 2</z-radio>
</z-radio-group>

<z-radio-group v-model="checked" shape="dot">
   <z-radio name="1">Radio 1</z-radio>
   <z-radio name="2">Radio 2</z-radio>
</z-radio-group>
```

### Custom color

Set the icon color of the checked state through the `checked-color` property.

```html
<z-radio-group v-model="checked">
   <z-radio name="1" checked-color="#ee0a24">Radio button 1</z-radio>
   <z-radio name="2" checked-color="#ee0a24">Radio button 2</z-radio>
</z-radio-group>
```

### Custom size

The size of the icon can be customized through the `icon-size` attribute.

```html
<z-radio-group v-model="checked">
   <z-radio name="1" icon-size="24px">Radio button 1</z-radio>
   <z-radio name="2" icon-size="24px">Radio button 2</z-radio>
</z-radio-group>
```

### Custom icon

Customize the icon through the `icon` slot, and determine whether it is selected through `slotProps`.

```html
<z-radio-group v-model="checked">
   <z-radio name="1">
     Radio button 1
     <template #icon="props">
       <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
     </template>
   </z-radio>
   <z-radio name="2">
     radio button 2
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

### Left text

Set the `label-position` property to `'left'` to adjust the text position to the left side of the radio button.

```html
<z-radio-group v-model="checked">
   <z-radio name="1" label-position="left">Radio button 1</z-radio>
   <z-radio name="2" label-position="left">Radio button 2</z-radio>
</z-radio-group>
```

### Disable text click

After setting the `label-disabled` attribute, clicking on content other than the icon will not trigger the radio button switch.

```html
<z-radio-group v-model="checked">
   <z-radio name="1" label-disabled>Radio button 1</z-radio>
   <z-radio name="2" label-disabled>Radio button 2</z-radio>
</z-radio-group>
```

### Used with cell component

When used with the cell component, you need to introduce the `Cell` and `CellGroup` components.

```html
<z-radio-group v-model="checked">
   <z-cell-group>
     <z-cell title="Radio button 1" clickable @click="checked = '1'">
       <template #right-icon>
         <z-radio name="1" />
       </template>
     </z-cell>
     <z-cell title="Radio button 2" clickable @click="checked = '2'">
       <template #right-icon>
         <z-radio name="2" />
       </template>
     </z-cell>
   </z-cell-group>
</z-radio-group>
```

## API

### Radio Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| name | Identifier, usually a unique string or number | _any_ | - |
| shape | Shape, optional values are `square` `dot` | _string_ | `round` |
| disabled | Whether it is disabled | _boolean_ | `false` |
| label-disabled | Whether to disable text content clicks | _boolean_ | `false` |
| label-position | Text position, optional value is `left` | _string_ | `right` |
| icon-size | Icon size, default unit is `px` | _number \| string_ | `20px` |
| checked-color | Checked status color | _string_ | `#1989fa` |

### RadioGroup Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | The identifier of the currently selected item | _any_ | - |
| disabled | Whether to disable all radio buttons | _boolean_ | `false` |
| direction | Arrangement direction, optional value is `horizontal` | _string_ | `vertical` |
| icon-size | The icon size of all radio buttons, the default unit is `px` | _number \| string_ | `20px` |
| checked-color | The checked state color of all radio buttons | _string_ | `#1989fa` |
| shape | Shape, optional values are `square` `dot` | _string_ | `round` |

### Radio Events

| Event name | Description | Callback parameters |
| ------ | ---------------- | ------------------ |
| click | Triggered when the radio button is clicked | _event_ |

### RadioGroup Events

| Event name | Description | Callback parameters |
| ------ | --------------------- | --------------- |
| change | Event triggered when the binding value changes | _name: string_ |

### Radio Slots

| Name | Description | Parameters |
| ------- | ---------- | ----------------------------------------- |
| default | custom text | _{ checked: boolean, disabled: boolean }_ |
| icon | custom icon | _{ checked: boolean, disabled: boolean }_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-radio-size | _40rpx_ | - |
| --z-radio-dot-size | _16rpx_ | Distance from dot to border |
| --z-radio-border-color | _var(--z-gray-5)_ | - |
| --z-radio-duration | _var(--z-duration-fast)_ | - |
| --z-radio-label-margin | _var(--z-padding-xs)_ | - |
| --z-radio-label-color | _var(--z-text-color)_ | - |
| --z-radio-checked-icon-color | _var(--z-primary-color)_ | - |
| --z-radio-disabled-icon-color | _var(--z-gray-5)_ | - |
| --z-radio-disabled-label-color | _var(--z-text-color-3)_ | - |
| --z-radio-disabled-background | _var(--z-border-color)_ | - |