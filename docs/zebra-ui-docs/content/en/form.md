# Form form

### introduce

Used for data entry and verification. It supports input boxes, radio boxes, check boxes, file uploads, etc. It needs to be used in conjunction with the [Field input box](/field) component.

## Code Demo

### Basic usage

In the form, each [Field component](/field) represents a form item, and the validation rules are defined using the `rules` attribute of the Field.

```html
<z-form ref="formBasic" @submit="onSubmitBasic">
   <z-field
     v-model="username"
     name="username"
     label="username"
     placeholder="username"
     :rules="[{ required: true, message: 'Please fill in your username' }]"
   />
   <z-field
     v-model="password"
     type="password"
     name="password"
     label="password"
     placeholder="password"
     :rules="[{ required: true, message: 'Please fill in your password' }]"
   />
</z-form>
<view class="button">
   <z-button block type="primary" @click="submitFormBasic">
     submit
   </z-button>
</view>
```

```js
import { ref } from 'vue';
const username = ref('')
const password = ref('')
const onSubmitBasic = (values: any) => {
   console.log('submit', values)
}
```

```css
<style lang="scss" scoped>
.demo-form {
   .button {
     margin-top: 20rpx;
   }
}
</style>
```

### Verification rules

Define form validation rules through `rules`. All available fields are shown in [table below](/form#rule-数据结构).

```html
<z-form @failed="onFailed">
   <z-cell-group inset>
     <!-- Regularity verification through pattern -->
     <z-field
       v-model="value1"
       name="pattern"
       placeholder="Regular check"
       :rules="[{ pattern, message: 'Please enter the correct content' }]"
     />
     <!-- Function verification through validator -->
     <z-field
       v-model="value2"
       name="validator"
       placeholder="function check"
       :rules="[{ validator, message: 'Please enter the correct content' }]"
     />
     <!-- Return error message through validator -->
     <z-field
       v-model="value3"
       name="validatorMessage"
       placeholder="The verification function returns an error message"
       :rules="[{ validator: validatorMessage }]"
     />
     <!-- Asynchronous function verification through validator -->
     <z-field
       v-model="value4"
       name="asyncValidator"
       placeholder="Asynchronous function verification"
       :rules="[{ validator: asyncValidator, message: 'Please enter the correct content' }]"
     />
   </z-cell-group>
   <div style="margin: 16px;">
     <z-button round block type="primary" native-type="submit">
       submit
     </z-button>
   </div>
</z-form>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const value1 = ref('')
const value2 = ref('')
const value3 = ref('abc')
const value4 = ref('')
const pattern = /\d{6}/
const validator = (val: any) => /1\d{10}/.test(val)
const validatorMessage = (val: any) => `${val} is illegal, please re-enter`
const asyncValidator = (val: any) =>
   new Promise((resolve) => {
     toast.showLoadingToast('Verifying...')

     setTimeout(() => {
       toast.closeToast()
       resolve(val === '1234')
     }, 1000)
   })
const onFailed = (errorInfo: any) => {
   console.log('failed', errorInfo)
}
```

### Form item type - switch

Use the [Switch component](/switch) in your form.

```html
<z-field name="switch" label="switch">
   <template #input>
     <z-switch v-model="switchChecked" />
   </template>
</z-field>
```

### Form item type - checkbox

Use the [Checkbox component](/checkbox) in your form.

```html
<z-field name="checkbox" label="checkbox">
   <template #input>
     <z-checkbox v-model="checked" shape="square" />
   </template>
</z-field>
<z-field name="checkboxGroup" label="checkbox group">
   <template #input>
     <z-checkbox-group v-model="groupChecked" direction="horizontal">
       <z-checkbox name="1" shape="square">Checkbox 1</z-checkbox>
       <z-checkbox name="2" shape="square">Checkbox 2</z-checkbox>
     </z-checkbox-group>
   </template>
</z-field>
```

### Form item type - radio button

Use the [Radio component](/radio) in your form.

```html
<z-field name="radio" label="radio button">
   <template #input>
     <z-radio-group v-model="checked" direction="horizontal">
       <z-radio name="1">Radio button 1</z-radio>
       <z-radio name="2">Radio button 2</z-radio>
     </z-radio-group>
   </template>
</z-field>
```

### Form item type - stepper

Use the [Stepper component](/stepper) in your form.

```html
<z-field name="stepper" label="Stepper">
   <template #input>
     <z-stepper v-model="value" />
   </template>
</z-field>
```

### Form Item Type - Rating

Use the [Rate component](/rate) in your form.

```html
<z-field name="rate" label="rating">
   <template #input>
     <z-rate v-model="value" />
   </template>
</z-field>
```

### Form Item Type - Slider

Use the [Slider component](/slider) in your form.

```html
<z-field name="slider" label="Slider">
   <template #input>
     <z-slider v-model="value" />
   </template>
</z-field>
```

### Form item type - file upload

Use the [Uploader component](/uploader) in your form.

```html
<z-field name="uploader" label="File upload">
   <template #input>
     <z-uploader v-model="value" />
   </template>
</z-field>
```

### Form item type - selector

Use the [Picker component](/picker) in your form.

```html
<z-field
   v-model="result"
   is-link
   readonly
   name="picker"
   label="selector"
   placeholder="Click to select city"
   @click="showPicker = true"
/>
<z-popup v-model:show="showPicker" position="bottom">
   <z-picker
     :columns="columns"
     @confirm="onConfirm"
     @cancel="showPicker = false"
   />
</z-popup>
```

### Form Item Type - Date Picker

Use the [DatePicker component](/date-picker) in your form.

```html
<z-field
   v-model="result"
   is-link
   readonly
   name="datePicker"
   label="Time selection"
   placeholder="Click to select time"
   @click="showPicker = true"
/>
<z-popup v-model:show="showPicker" position="bottom">
   <z-date-picker @confirm="onConfirm" @cancel="showPicker = false" />
</z-popup>
```

### Form item type - Province and city selector

Use the [Area component](/area) in your form.

```html
<z-field v-model="result"
   is-link
   readonly
   name="area"
   label="region selection"
   placeholder="Click to select province and city"
   @click="showArea = true"
/>
<z-popup v-model:show="showArea" position="bottom">
   <z-area
     :area-list="areaList"
     @confirm="onConfirm"
     @cancel="showArea = false"
   />
</z-popup>
```

### Form Item Type - Calendar

Use the [Calendar component](/calendar) in your form.

```html
<z-field
   v-model="result"
   is-link
   readonly
   name="calendar"
   label="calendar"
   placeholder="Click to select date"
   @click="showCalendar = true"
/>
<z-calendar v-model:show="showCalendar" @confirm="onConfirm" />
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| label-width | Form item label width, default unit is `px` | _number \| string_ | `6.2em` |
| label-align | Form item label alignment, optional values are `center` `right` `top` | _string_ | `left` |
| input-align | Input box alignment, optional values are `center` `right` | _string_ | `left` |
| error-message-align | Error text alignment, optional values are `center` `right` | _string_ | `left` |
| validate-trigger | Form verification trigger timing, optional values ​​are `onChange`, `onSubmit`, supports setting multiple values ​​at the same time through arrays, specific usage is shown in the table below | _string \| string[]_ | `onBlur` |
| colon | Whether to add a colon after label | _boolean_ | `false` |
| disabled | Whether to disable all input boxes in the form | _boolean_ | `false` |
| readonly | Whether to set all input boxes in the form to read-only | _boolean_ | `false` |
| required | Whether to display the form required asterisk | _boolean \| 'auto'_ | `null` |
| validate-first | Whether to stop verification when a certain verification item fails | _boolean_ | `false` |
| scroll-to-error | Whether to scroll to the wrong form item when the form is submitted and validation fails | _boolean_ | `false` |
| show-error | Whether to mark the input box red when the verification fails | _boolean_ | `false` |
| show-error-message | Whether to display an error message below the input box when the verification fails | _boolean_ | `true` |
| submit-on-enter | Whether to submit the form when the enter key is pressed | _boolean_ | `true` |

> For the API of form items, see: [Field component](/field#api)

### Rule data structure

Validation rules can be defined using the `rules` attribute of Field. The optional attributes are as follows:

| Key name | Description | Type |
| --- | --- | --- |
| required | Whether it is a required field. When the value is a null value (empty string, empty array, `false`, `undefined`, `null`), the verification fails | _boolean_ |
| message | Error message copy, which can be set as a function to return dynamic copy content | _string \| (value, rule) => string_ |
| validator | Verify through functions, you can return a Promise for asynchronous verification | _(value, rule) => boolean \| string \| Promise_ |
| pattern | Verification is performed through regular expressions. If the regular expression cannot be matched, the verification fails | _RegExp_ |
| trigger | Set the triggering time of this rule. The priority is higher than the `validate-trigger` attribute set by the Form component. The optional values are `onChange`, `onBlur`, `onSubmit` | _string \| string[]_ |
| formatter | Formatting function, converts the value of the form item and then verifies it | _(value, rule) => any_ |
| validateEmpty | Set whether `validator` and `pattern` should be used to verify empty values. The default value is `true` and can be set to `false` to disable this behavior | _boolean_ |

### validate-trigger optional value

The trigger timing of form validation can be customized through the `validate-trigger` attribute.

| value | description |
| -------- | ---------------------------------- |
| onSubmit | Validation is only triggered when the form is submitted |
| onBlur | Trigger validation when the form is submitted and the input box is out of focus |
| onChange | Trigger verification when the form is submitted and the content of the input box changes |

### Events

| Event name | Description | Callback parameters |
| --- | --- | --- |
| submit | Triggered after the form is submitted and verification passes | _values: object_ |
| failed | Triggered after the form is submitted and verification fails | _errorInfo: { values: object, errors: object[] }_ |

### method

Through ref, you can get the Form instance and call instance methods.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| submit | Submit the form, which is equivalent to clicking the submit button | - | - |
| getValues | Get the current values of all form items | - | _Record<string, unknown>_ |
| validate | Validation form, supports passing in one or more `name` to validate single or partial form items. When `name` is not passed in, all form items will be verified | _name?: string \| string[]_ | _Promise \<void\>_ |
| resetValidation | Reset the validation prompt of form items. It supports passing in one or more `name` to reset single or partial form items. If `name` is not passed in, all form items will be reset | _name?: string \ | string[]_ | - |
| getValidationStatus | Get the validation status of all form items, the status includes `passed`, `failed`, `unvalidated` | - | _Record\<string, FieldValidationStatus\>_ |


### Slots

| Name | Description |
| ------- | -------- |
| default | form content |