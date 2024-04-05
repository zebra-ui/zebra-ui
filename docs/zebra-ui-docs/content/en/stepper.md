
# Stepper stepper

### introduce

The stepper consists of an increase button, a decrease button and an input box, which is used to input and adjust numbers within a certain range.

## Code Demo

### Basic usage

By binding the input value with `v-model`, you can monitor changes in the input value through the `change` event.

```html
<z-stepper v-model="value" />
```

```js
import { ref } from 'vue';
const value = ref(1);
```

### Step size setting

Use the `step` attribute to set the value that changes each time the increase or decrease button is clicked. The default is `1`.

```html
<z-stepper v-model="value" step="2" />
```

### Limit input range

Limit the range of the input value through the `min` and `max` attributes. By default, the maximum or minimum value will be automatically corrected after exceeding the range. Automatic correction can be turned off by `auto-fixed`.

```html
<z-stepper v-model="value" min="5" max="8" />
```

### Limit input to integers

After setting the `integer` attribute, the input box will be restricted to only integers.

```html
<z-stepper v-model="value" integer />
```

### Disabled state

Disable the stepper by setting the `disabled` attribute. In the disabled state, you cannot click the button or modify the input box.

```html
<z-stepper v-model="value" disabled />
```

### Disable input box

Disable the input box by setting the `disable-input` attribute, while the button is still clickable.

```html
<z-stepper v-model="value" disable-input />
```

### Fixed number of decimal places

A fixed number of decimal places can be preserved by setting the `decimal-length` property.

```html
<z-stepper v-model="value" step="0.2" :decimal-length="1" />
```

### Custom size

Set the input box width through the `input-width` property, and set the button size and input box height through the `button-size` property.

```html
<z-stepper v-model="value" input-width="80rpx" button-size="64rpx" />
```

### Asynchronous changes

The `before-change` attribute can be used to verify and intercept the input value before it changes.

```html
<z-stepper v-model="value" :before-change="beforeChange" />
```

```js
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const beforeChange = () => {
toast.showLoadingToast({ forbidClick: true })

return new Promise((resolve) => {
setTimeout(() => {
toast.closeToast()
resolve(true)
}, 1000)
})
}
```

### Rounded corner style

Set `theme` to `round` to display a rounded style stepper.

```html
<z-stepper v-model="value" theme="round" button-size="22" disable-input />
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | Current input value | _number \| string_ | - |
| min | minimum value | _number \| string_ | `1` |
| max | maximum value | _number \| string_ | - |
| auto-fixed | Whether to automatically correct values that exceed the limit range. If set to `false`, input values that exceed the limit range will not be automatically corrected | _boolean_ | `true` |
| default-value | Initial value, effective when v-model is empty | _number \| string_ | `1` |
| step | Step size, the value changed each time you click | _number \| string_ | `1` |
| name | Identifier, usually a unique string or number, can be obtained in the `change` event callback parameter | _number \| string_ | - |
| input-width | Input box width, default unit is `px` | _number \| string_ | `64rpx` |
| button-size | Button size and input box height, default unit is `px` | _number \| string_ | `56rpx` |
| decimal-length | Fixed number of displayed decimal places | _number \| string_ | - |
| theme | style, optional value is `round` | _string_ | - |
| placeholder | Input box placeholder prompt text | _string_ | - |
| integer | Whether to only allow integers to be entered | _boolean_ | `false` |
| disabled | Whether to disable the stepper | _boolean_ | `false` |
| disable-plus | Whether to disable the add button | _boolean_ | `false` |
| disable-minus | Whether to disable the reduce button | _boolean_ | `false` |
| disable-input | Whether to disable the input box | _boolean_ | `false` |
| before-change | Callback function before the input value changes. Return `false` to prevent input and support returning Promise | _(value: number \| string) => boolean \| Promise\ <boolean>_ | `false` |
| show-plus | Whether to display the add button | _boolean_ | `true` |
| show-minus | Whether to display the reduce button | _boolean_ | `true` |
| show-input | Whether to display the input box | _boolean_ | `true` |
| long-press | Whether to enable long press gestures. After enabling, you can long press the increase and decrease buttons | _boolean_ | `true` |
| allow-empty | Whether to allow the input value to be empty, set to `true` to allow empty strings to be passed in | _boolean_ | `false` |

### Events

| Event name | Description | Callback parameters |
| --- | --- | --- |
| change | Event triggered when the binding value changes | _value: string, detail: { name: string }_ |
| overlimit | Fired when an unavailable button is clicked | - |
| plus | Triggered when the add button is clicked | - |
| minus | Triggered when the reduce button is clicked | - |
| focus | Triggered when the input box is focused | _event: Event_ |
| blur | Triggered when the input box is out of focus | _event: Event_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ---------------------------------------- | -------------------------- | ---- |
| --z-stepper-background                 | _var(--z-active-color)_  | -    |
| --z-stepper-button-icon-color          | _var(--z-text-color)_    | -    |
| --z-stepper-button-disabled-color      | _var(--z-background)_    | -    |
| --z-stepper-button-disabled-icon-color | _var(--z-gray-5)_        | -    |
| --z-stepper-button-round-theme-color   | _var(--z-primary-color)_ | -    |
| --z-stepper-input-width                | _64rpx_                     | -    |
| --z-stepper-input-height               | _56rpx_                     | -    |
| --z-stepper-input-font-size            | _var(--z-font-size-md)_  | -    |
| --z-stepper-input-line-height          | _normal_                   | -    |
| --z-stepper-input-text-color           | _var(--z-text-color)_    | -    |
| --z-stepper-input-disabled-text-color  | _var(--z-text-color-3)_  | -    |
| --z-stepper-input-disabled-background  | _var(--z-active-color)_  | -    |
| --z-stepper-radius | _var(--z-radius-md)_ | - |
