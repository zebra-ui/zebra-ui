# Field input box

### introduce

Users can enter or edit text in the text box.

## Code Demo

### Basic usage

You can use `v-model` to bidirectionally bind the value of the input box, and use `placeholder` to set the placeholder text.

```html
  <z-field v-model="value" label="text" placeholder="Please enter text" />
```

```js
import { ref } from 'vue'
const value = ref('')
```

### Custom type

Different types of input boxes are defined according to the `type` attribute. The default value is `text`.

```html
   <!-- Enter any text -->
   <z-field v-model="text" label="text" />
   <!-- Enter the mobile phone number and bring up the mobile phone number keyboard -->
   <z-field v-model="tel" type="tel" label="Mobile phone number" />
   <!-- Allow the input of positive integers and bring up the pure numeric keyboard -->
   <z-field v-model="digit" type="digit" label="integer" />
   <!-- Allows you to enter numbers and calls up a pure numeric keyboard with symbols -->
   <z-field v-model="number" type="number" label="number" />
   <!-- Enter password -->
   <z-field v-model="password" type="password" label="password" />
```

### Disable input box

Use `readonly` to set the input box to a read-only state, and use `disabled` to set the input box to a disabled state.

```html
   <z-field label="Text" model-value="Input box read-only" readonly />
   <z-field label="text" model-value="Input box is disabled" disabled />
```

### Show icon

Configure the icons on both sides of the input box through `left-icon` and `right-icon`, and display the clear icon during the input process by setting `clearable`.

```html
<z-cell-group inset>
   <z-field
     v-model="value1"
     label="text"
     left-icon="detail"
     right-icon="info-circle"
     placeholder="show icon"
   />
   <z-field
     v-model="value2"
     clearable
     label="text"
     left-icon="safetycertificate"
     placeholder="Show clear icon"
   />
</z-cell-group>
```

### Required asterisk

Set the `required` attribute to display required asterisks.

```html
   <z-field
     v-model="username"
     required
     label="username"
     placeholder="Please enter username"
   />
   <z-field
     v-model="phone"
     required
     label="mobile phone number"
     placeholder="Please enter your mobile phone number"
   />
```

Please note that the `required` attribute is only used to control style display. When performing form validation, you need to use the `rule.required` option to control the validation logic.

### Automatically display asterisks

You can set `required="auto"` on the Form component. At this time, all Fields in the Form will automatically determine whether asterisks need to be displayed based on `rule.required`.

```html
<z-form required="auto">
   <z-field
     v-model="username"
     :rules="[{ required: true }]"
     label="username"
     placeholder="Please enter username"
   />
   <z-field
     v-model="phone"
     :rules="[{ required: false }]"
     label="mobile phone number"
     placeholder="Please enter your mobile phone number"
   />
</z-form>
```

### Error message

Setting the `required` attribute indicates that this is a required item, and can be used with the `error` or `error-message` attribute to display the corresponding error prompt.

```html
   <z-field
     v-model="username"
     error
     label="username"
     placeholder="Please enter username"
   />
   <z-field
     v-model="phone"
     label="mobile phone number"
     placeholder="Please enter your mobile phone number"
     error-message="Mobile phone number format error"
   />
```

### Insert button

The button slot allows you to insert buttons at the end of the input box.

```html
   <z-field
     v-model="sms"
     center
     clearable
     label="SMS verification code"
     placeholder="Please enter the SMS verification code"
   >
     <template #button>
       <z-button size="small" type="primary">Send verification code</z-button>
     </template>
   </z-field>
```

### Format input content

The input content can be formatted through the `formatter` attribute, and the timing of formatting can be specified through the `format-trigger` attribute. By default, formatting is performed during input.

```html
   <z-field
     v-model="value1"
     label="text"
     :formatter="formatter"
     placeholder="Perform formatting as you type"
   />
   <z-field
     v-model="value2"
     label="text"
     :formatter="formatter"
     format-trigger="onBlur"
     placeholder="Perform formatting when out of focus"
   />
```

```js
// Filter the input numbers
const formatter = (value) => value.replace(/\d/g, '');
```

### Highly adaptive

For textarea, height adaptation can be set through the `autosize` property.

```html
   <z-field
     v-model="message"
     rows="1"
     autosize
     label="Message"
     type="textarea"
     placeholder="Please enter a message"
   />
```

### Show word count statistics

Setting the `maxlength` and `show-word-limit` properties will display the word count at the bottom.

```html
   <z-field
     v-model="message"
     rows="2"
     autosize
     label="Message"
     type="textarea"
     maxlength="50"
     placeholder="Please enter a message"
     show-word-limit
   />
```

### Alignment of input box content

The alignment of the input box content can be set through the `input-align` attribute. The optional values are `center` and `right`.

```html
   <z-field
     v-model="value"
     label="text"
     placeholder="Input box content right aligned"
     input-align="right"
   />
```

### Input box text position

The position of the input box text can be set through the `label-align` attribute. The optional values ​​are `center`, `right`, and `top`.

```html
   <z-field
     v-model="value"
     label="text"
     placeholder="top alignment"
     label-align="top"
   />
   <z-field
     v-model="value2"
     label="text"
     placeholder="left aligned"
     label-align="left"
   />
   <z-field
     v-model="value3"
     label="text"
     placeholder="center aligned"
     label-align="center"
   />
   <z-field
     v-model="value4"
     label="text"
     placeholder="right aligned"
     label-align="right"
   />
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | Current input value | _number \| string_ | - |
| label | Text on the left side of the input box | _string_ | - |
| name | Name, used as an identifier when submitting the form | _string_ | - |
| type | Input box type, same as uniapp's input component | _FieldType_ | `text` |
| size | Size, optional values are `large` `normal` | _string_ | - |
| maxlength | Maximum number of characters entered | _number \| string_ | - |
| placeholder | Input box placeholder prompt text | _string_ | - |
| border | Whether to display the inner border | _boolean_ | `true` |
| disabled | Whether to disable the input box | _boolean_ | `false` |
| readonly | Whether it is in the read-only state. Content cannot be entered in the read-only state | _boolean_ | `false` |
| colon | Whether to add a colon after label | _boolean_ | `false` |
| required | Whether to display the form required asterisk | _boolean \| 'auto'_ | `null` |
| center | Whether to center the content vertically | _boolean_ | `false` |
| clearable | Whether to enable the clear icon. Clicking the clear icon will clear the input box | _boolean_ | `false` |
| clear-icon | Clear the icon name or image link, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | `close-circle-fill` |
| clear-trigger | The timing to display the clear icon, `always` means it will be displayed when the input box is not empty, <br>`focus` means it will be displayed when the input box is focused and not empty | _FieldClearTrigger_ | `focus` |
| clickable | Whether to enable click feedback | _boolean_ | `false`|
| is-link | Whether to display the right arrow and enable click feedback | _boolean_ | `false` |
| show-word-limit | Whether to display word count statistics, you need to set the `maxlength` attribute | _boolean_ | `false` |
| error | Whether to mark the input content in red | _boolean_ | `false` |
| error-message | Bottom error message text, will not be displayed if empty | _string_ | - |
| error-message-align | Error text alignment, optional values are `center` `right` | _FieldTextAlign_ | `left` |
| formatter | Input content formatting function | _(val: string) => string_ | - |
| format-trigger | The timing when the format function is triggered, the optional value is `onBlur` | _FieldFormatTrigger_ | `onChange` |
| arrow-direction | Arrow direction, optional values are `left` `up` `down` | _string_ | `right` |
| label-class | Additional class name for left text | _string \| Array \| object_ | - |
| label-width | Left text width, default unit is `px` | _number \| string_ | `6.2em` |
| label-align | Left text alignment, optional values are `center` `right` `top` | _FieldTextAlign_ | `left` |
| input-align | Input box alignment, optional values are `center` `right` | _FieldTextAlign_ | `left` |
| autosize | Whether to adapt the content height, only valid for textarea, <br> objects can be passed in, such as { maxHeight: 100, minHeight: 50 }, <br> the unit is `px` | _boolean \| FieldAutosizeConfig_ | `false` |
| left-icon | The left icon name or image link, equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | - |
| right-icon | The right icon name or image link, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | - |
| icon-prefix | Icon class name prefix, equivalent to the [class-prefix attribute](/icon#props) of the Icon component | _string_ | `z-icon` |
| rules | Form validation rules, see [Form component](/form) | _FieldRule[]_ | - |
| custom-style | custom style | _object_ | - |

### Events

| Event name | Description | Callback parameters |
| --- | --- | --- |
| update:model-value | Triggered when the content of the input box changes | _value: string (currently entered value)_ |
| focus | Triggered when the input box gains focus | _event: Event_ |
| blur | Triggered when the input box loses focus | _event: Event_ |
| clear | Triggered when the clear button is clicked | _event: MouseEvent_ |
| click | Triggered when the component is clicked | _event: MouseEvent_ |
| click-input | Triggered when the input area is clicked | _event: MouseEvent_ |
| click-left-icon | Triggered when the left icon is clicked | _event: MouseEvent_ |
| click-right-icon | Triggered when the right icon is clicked | _event: MouseEvent_ |
| start-validate | Triggered when starting form validation | - |
| end-validate | Triggered when form validation ends | _{ status: string, message: string }_ |

### method

Field instances can be obtained through ref and instance methods can be called.

| Method name | Description | Parameters | Return value |
| ------ | -------------- | ---- | ------ |
| focus | Get input box focus | - | - |
| blur | Cancel focus of input box | - | - |

### Slots

| Name | Description | Parameters |
| --- | --- | --- |
| label | Customize the text on the left side of the input box | - |
| input | Custom input box, after using this slot, the properties and events related to the input box will be invalid | - |
| left-icon | Custom input box header icon | - |
| right-icon | Customize the input box tail icon | - |
| button | Custom input box tail button | - |
| error-message | Customized bottom error message text | _{ message: string }_ |
| extra | Extra content on the far right side of the custom input box | - |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ------------------------------------- | -------------------------- | ---- |
| --z-field-label-width | _6.2em_ | - |
| --z-field-label-color | _var(--z-text-color)_ | - |
| --z-field-label-margin-right | _var(--z-padding-sm)_ | - |
| --z-field-input-text-color | _var(--z-text-color)_ | - |
| --z-field-input-error-text-color | _var(--z-danger-color)_ | - |
| --z-field-input-disabled-text-color | _var(--z-text-color-3)_ | - |
| --z-field-placeholder-text-color | _var(--z-text-color-3)_ | - |
| --z-field-icon-size | _36rpx_ | - |
| --z-field-clear-icon-size | _36rpx_ | - |
| --z-field-clear-icon-color | _var(--z-gray-5)_ | - |
| --z-field-right-icon-color | _var(--z-gray-6)_ | - |
| --z-field-error-message-color | _var(--z-danger-color)_ | - |
| --z-field-error-message-font-size | _24rpx_ | - |
| --z-field-text-area-min-height | _120rpx_ | - |
| --z-field-word-limit-color | _var(--z-gray-7)_ | - |
| --z-field-word-limit-font-size | _var(--z-font-size-sm)_ | - |
| --z-field-word-limit-line-height | _32rpx_ | - |
| --z-field-disabled-text-color | _var(--z-text-color-3)_ | - |
| --z-field-required-mark-color | _var(--z-red)_ | - |