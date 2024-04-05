
# Search Search

### introduce

Input box component for search scenarios.

## Code Demo

### Basic usage

`v-model` is used to control the text in the search box, and `background` can customize the external background color of the search box.

```html
<z-search v-model="value" placeholder="请输入搜索关键词" />
```

```js
import { ref } from 'vue';
const value = ref('');
```

### Event monitoring

The Search component provides `search` and `cancel` events. The `search` event is triggered after clicking the search/enter button on the keyboard, and the `cancel` event is triggered when the cancel button on the right side of the search box is clicked.

```html
<z-search
v-model="value"
show-action
placeholder="Please enter search keywords"
@search="onSearch"
@cancel="onCancel"
/>
```

### Search box content alignment

Set the alignment of the search box content through the `input-align` attribute. The optional values are `center` and `right`.

```html
<z-search
v-model="value"
placeholder="Please enter search keywords"
input-align="center"
/>
```

### Disable search box

Disable the search box via the `disabled` attribute.

```html
<z-search v-model="value" disabled placeholder="请输入搜索关键词" />
```

### Custom background color

The background color outside the search box can be set through the `background` attribute, and the shape of the search box can be set through the `shape` attribute. The optional value is `round`.

```html
<z-search
v-model="value"
shape="round"
background="#4fc08d"
placeholder="Please enter search keywords"
/>
```

### Custom buttons

Use the `action` slot to customize the content of the right button. After using the slot, the `cancel` event will no longer fire.

```html
<z-search
v-model="value"
show-action
label="address"
placeholder="Please enter search keywords"
@search="onSearch"
>
<template #action>
<div @click="onClickButton">Search</div>
</template>
</z-search>
```
## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | Current input value | _number \| string_ | - |
| label | Text on the left side of the search box | _string_ | - |
| name | Name, used as an identifier when submitting the form | _string_ | - |
| shape | Search box shape, optional value is `round` | _string_ | `square` |
| background | Search box external background color | _string_ | `#f2f2f2` |
| maxlength | Maximum number of characters entered | _number \| string_ | - |
| placeholder | placeholder text | _string_ | - |
| clearable | Whether to enable the clear icon. Clicking the clear icon will clear the input box | _boolean_ | `true` |
| clear-icon | Clear the icon name or image link, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | `clear` |
| clear-trigger | The timing of displaying the clear icon, `always` means it will be displayed when the input box is not empty, <br>`focus` means it will be displayed when the input box is focused and not empty | _string_ | `focus` |
| show-action | Whether to display the cancel button on the right side of the search box | _boolean_ | `false` |
| action-text | Cancel button text | _string_ | `Cancel` |
| disabled | Whether to disable the input box | _boolean_ | `false` |
| readonly | Whether to set the input box to read-only status. Content cannot be entered in read-only status | _boolean_ | `false` |
| error | Whether to mark the input content in red | _boolean_ | `false` |
| error-message | Bottom error message text, will not be displayed if empty | _string_ | - |
| formatter | Input content formatting function | _(val: string) => string_ | - |
| format-trigger | The timing when the format function is triggered, the optional value is `onBlur` | _string_ | `onChange` |
| input-align | Input box content alignment, optional values are `center` `right` | _string_ | `left` |
| left-icon | The icon name or image link on the left side of the input box, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | `search` |
| right-icon | The icon name or image link on the right side of the input box, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | - |

### Events

| Event name | Description | Callback parameters |
| --- | --- | --- |
| search | Triggered when search is determined | _value: string (currently entered value)_ |
| update:model-value | Triggered when the content of the input box changes | _value: string (currently entered value)_ |
| focus | Triggered when the input box gains focus | _event: Event_ |
| blur | Triggered when the input box loses focus | _event: Event_ |
| click-input | Triggered when the input area is clicked | _event: MouseEvent_ |
| click-left-icon | Triggered when the left icon is clicked | _event: MouseEvent_ |
| click-right-icon | Triggered when the right icon is clicked | _event: MouseEvent_ |
| clear | Triggered after clicking the clear button | _event: MouseEvent_ |
| cancel | Triggered when the cancel button is clicked | - |

### method

Through ref, you can get the Search instance and call the instance method.

| Method name | Description | Parameters | Return value |
| ------ | -------------- | ---- | ------ |
| focus | Get input box focus | - | - |
| blur | Cancel focus of input box | - | - |

### Slots

| Name | Description |
| ---------- | --------------------------------------------------------- |
| left | Customize the content on the left (outside the search box) |
| action | Customize the content on the right (outside the search box) and display it after setting the `show-action` attribute |
| label | Customize the left text (in the search box) |
| left-icon | Customize the left icon (in the search box) |
| right-icon | Customize the right icon (in the search box) |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ------------------------------- | ---------------------------- | ---- |
| --z-search-padding            | _20rpx var(--z-padding-sm)_ | -    |
| --z-search-background         | _var(--z-background-2)_    | -    |
| --z-search-content-background | _var(--z-gray-1)_          | -    |
| --z-search-input-height       | _68rpx_                       | -    |
| --z-search-label-padding      | _0 10rpx_                      | -    |
| --z-search-label-color        | _var(--z-text-color)_      | -    |
| --z-search-label-font-size    | _var(--z-font-size-md)_    | -    |
| --z-search-left-icon-color    | _var(--z-gray-6)_          | -    |
| --z-search-action-padding     | _0 var(--z-padding-xs)_    | -    |
| --z-search-action-text-color  | _var(--z-text-color)_      | -    |
| --z-search-action-font-size   | _var(--z-font-size-md)_    | -    |
