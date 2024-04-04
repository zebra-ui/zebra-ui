# PasswordInput Password input box

### introduce

The input box component with grid can be used to enter passwords, SMS verification codes and other scenarios. It is usually used in conjunction with the [Number Keyboard](/number-keyboard) component.

## Code Demo

### Basic usage

Use the numeric keyboard component to realize the password input function.

```html
<!-- Password input box -->
<z-password-input
   :value="value"
   :focused="showKeyboard"
   @focus="showKeyboard = true"
/>
<!-- Numeric keyboard -->
<z-number-keyboard
   v-model="value"
   :show="showKeyboard"
   @blur="showKeyboard = false"
/>
```

```js
import { ref } from 'vue';
const value = ref('123');
const showKeyboard = ref(true);
```

### Custom length

Set the password length through the `length` property.

```html
<z-password-input
   :value="value"
   :length="4"
   :focused="showKeyboard"
   @focus="showKeyboard = true"
/>
```

### Grid spacing

Use the `gutter` property to set the spacing between grids.

```html
<z-password-input
   :value="value"
   :gutter="10"
   :focused="showKeyboard"
   @focus="showKeyboard = true"
/>
```

### Plain text display

Setting `mask` to `false` can display the input content in plain text, which is suitable for scenarios such as SMS verification codes.

```html
<z-password-input
   :value="value"
   :mask="false"
   :focused="showKeyboard"
   @focus="showKeyboard = true"
/>
```

### Prompt information

Set the prompt information through the `info` attribute, and set the error prompt through the `error-info` attribute. For example, when entering six digits, you will be prompted for an incorrect password.

```html
<z-password-input
   :value="value"
   info="Password is 6 digits"
   :error-info="errorInfo"
   :focused="showKeyboard"
   @focus="showKeyboard = true"
/>
<z-number-keyboard
   v-model="value"
   :show="showKeyboard"
   @blur="showKeyboard = false"
/>
```

```js
import { ref, watch } from 'vue';
const value = ref('123');
const errorInfo = ref('');
const showKeyboard = ref(true);
watch(value, (newVal) => {
   if (newVal.length === 6 && newVal !== '123456') {
     errorInfo.value = 'Wrong password';
   } else {
     errorInfo.value = '';
   }
});
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| value | Password value | _string_ | `''` |
| info | Text prompt below the input box | _string_ | - |
| error-info | Error message below the input box | _string_ | - |
| length | Maximum password length | _number \| string_ | `6` |
| gutter | The spacing between input box grids, such as `40rpx`, the default unit is `px` | _number \| string_ | `0` |
| mask | Whether to hide password content | _boolean_ | `true` |
| focused | Whether it is focused, the cursor will be displayed when focused | _boolean_ | `false` |

### Events

| Event name | Description | Callback parameters |
| ------ | ------------- | -------- |
| focus | Triggered when the input box is focused | - |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ------------------------------------- | -------------------------- | ---- |
| --z-password-input-height | _100rpx_ | - |
| --z-password-input-margin | _0 var(--z-padding-md)_ | - |
| --z-password-input-font-size | _40rpx_ | - |
| --z-password-input-radius | _12rpx_ | - |
| --z-password-input-background | _var(--z-background-2)_ | - |
| --z-password-input-info-color | _var(--z-text-color-2)_ | - |
| --z-password-input-info-font-size | _var(--z-font-size-md)_ | - |
| --z-password-input-error-info-color | _var(--z-danger-color)_ | - |
| --z-password-input-dot-size | _20rpx_ | - |
| --z-password-input-dot-color | _var(--z-text-color)_ | - |
| --z-password-input-text-color | _var(--z-text-color)_ | - |
| --z-password-input-cursor-color | _var(--z-text-color)_ | - |
| --z-password-input-cursor-width | _2rpx_ | - |
| --z-password-input-cursor-height | _40%_ | - |
| --z-password-input-cursor-duration | _1s_ | - |