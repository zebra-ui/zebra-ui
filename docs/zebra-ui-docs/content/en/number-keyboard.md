# NumberKeyboard

### introduce

The virtual numeric keyboard can be used with [Password Input Box Component](/password-input) or a custom input box component.

## Code Demo

### Default style

The numeric keyboard provides `input`, `delete`, and `blur` events, which respectively correspond to the actions of inputting content, deleting content, and losing focus.

```html
<z-cell title="Pop up default keyboard" is-link @click="show = true" />
<z-number-keyboard
   :show="show"
   @blur="show = false"
   @input="onInput"
   @delete="onDelete"
/>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const show = ref(false)
const onInput = (value: string) => toast.showToast(value)
const onDelete = () => toast.showToast('Delete')
```

### Keyboard with right sidebar

Set the theme attribute to `custom` to display the right column of the keyboard, which is often used for inputting amounts.

```html
<z-number-keyboard
   :show="show"
   theme="custom"
   extra-key="."
   close-button-text="Complete"
   @blur="show = false"
   @input="onInput"
   @delete="onDelete"
/>
```

### ID number keyboard

The content of the key in the lower left corner can be set through the `extra-key` attribute. For example, when you need to enter an ID number, you can set `extra-key` to `X`.

```html
<z-cell plain type="primary" @touchstart.stop="show = true">
   Pop up ID number keyboard
</z-cell>
<z-number-keyboard
   :show="show"
   extra-key="X"
   close-button-text="Complete"
   @blur="show = false"
   @input="onInput"
   @delete="onDelete"
/>
```

### Keyboard title

The keyboard title can be set via the `title` attribute.

```html
<z-cell plain type="primary" @touchstart.stop="show = true">
   Pop up keyboard with title
</z-cell>
<z-number-keyboard
   :show="show"
   title="Keyboard title"
   extra-key="."
   close-button-text="Complete"
   @blur="show = false"
   @input="onInput"
   @delete="onDelete"
/>
```

### Configure multiple buttons

When theme is `custom`, it supports configuring two `extra-key` in the form of array.

```html
<z-cell plain type="primary" @touchstart.stop="show = true">
   Pop up a keyboard configured with multiple keys
</z-cell>
<z-number-keyboard
   :show="show"
   theme="custom"
   :extra-key="['00', '.']"
   close-button-text="Complete"
   @blur="show = false"
   @input="onInput"
   @delete="onDelete"
/>
```

### Random number keyboard

The numeric keyboard can be randomly ordered through the `random-key-order` attribute, which is often used in scenarios with high security levels.

```html
<z-cell @touchstart.stop="show = true"> Pop up a keyboard with random numbers </z-cell>
<z-number-keyboard
   :show="show"
   random-key-order
   @blur="show = false"
   @input="onInput"
   @delete="onDelete"
/>
```

### Two-way binding

You can bind the current input value of the keyboard through `v-model` and limit the input length through the `maxlength` attribute.

```html
<z-field
   v-model="valueModel"
   label="two-way binding"
   readonly
   clickable
   @click="showValue = true"
/>
<z-number-keyboard
   v-model="valueModel"
   :show="showValue"
   :maxlength="6"
   @blur="showValue = false"
/>
```

```js
import { ref } from 'vue';
const show = ref(true);
const value = ref('');
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | Current input value | _string_ | - |
| show | Whether to display the keyboard | _boolean_ | - |
| title | keyboard title | _string_ | - |
| theme | Style, optional value is `custom` | _string_ | `default` |
| maxlength | Maximum length of input value | _number \| string_ | `Infinity` |
| transition | whether to enable cutscenes | _boolean_ | `true` |
| z-index | keyboard z-index level | _number \| string_ | `100` |
| extra-key | The content of the extra key at the bottom | _string \| string[]_ | `''` |
| close-button-text | Close button text, not displayed if empty | _string_ | - |
| delete-button-text | Delete button text, if empty, the delete icon will be displayed | _string_ | - |
| close-button-loading | Whether to set the close button to loading state, only valid when `theme="custom"` | _boolean_ | `false` |
| show-delete-key | Whether to display the delete icon | _boolean_ | `true` |
| blur-on-close | Whether to trigger the blur event when the close button is clicked | _boolean_ | `true` |
| hide-on-click-outside | Whether to hide the keyboard when clicking outside | _boolean_ | `true` |
| safe-area-inset-bottom | Whether to enable [Bottom Safe Area Adaptation](/adzced-usage) | _boolean_ | `true` |
| random-key-order | Whether keys will be displayed in random order | _boolean_ | `false` |

### Events

| Event name | Description | Callback parameters |
| ------ | ------------------------------- | ------------- |
| input | Triggered when a key is clicked | _key: string_ |
| delete | Triggered when the delete key is clicked | - |
| close | Triggered when the close button is clicked | - |
| blur | Triggered when the close button or non-keyboard area is clicked | - |
| show | Triggered when the keyboard is fully ejected | - |
| hide | Triggered when the keyboard is fully retracted | - |

### Slots

| Name | Description |
| ---------- | ------------------ |
| delete | Customize delete key content |
| extra-key | Customize the button content in the lower left corner |
| title-left | Customize the content on the left side of the title bar |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --------------------------------------- | --------------------------- | ---- |
| --z-number-keyboard-background | _var(--z-gray-2)_ | - |
| --z-number-keyboard-key-height | _96rpx_ | - |
| --z-number-keyboard-key-font-size | _56rpx_ | - |
| --z-number-keyboard-key-active-color | _var(--z-gray-3)_ | - |
| --z-number-keyboard-key-background | _var(--z-white)_ | - |
| --z-number-keyboard-delete-font-size | _var(--z-font-size-lg)_ | - |
| --z-number-keyboard-title-color | _var(--z-gray-7)_ | - |
| --z-number-keyboard-title-height | _68px_ | - |
| --z-number-keyboard-title-font-size | _var(--z-font-size-lg)_ | - |
| --z-number-keyboard-close-padding | _0 var(--z-padding-md)_ | - |
| --z-number-keyboard-close-color | _var(--z-primary-color)_ | - |
| --z-number-keyboard-close-font-size   | _var(--z-font-size-md)_  | -    |
| --z-number-keyboard-button-text-color | _var(--z-white)_         | -    |
| --z-number-keyboard-button-background | _var(--z-primary-color)_ | -    |
| --z-number-keyboard-z-index           | _100_                      | -    |