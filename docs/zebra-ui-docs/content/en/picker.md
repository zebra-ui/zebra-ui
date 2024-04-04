# Picker selector

### introduce

Provides multiple option sets for users to choose from, supporting single column selection, multi-column selection and cascading selection. It is usually used in conjunction with the [popup layer] (/popup) component.

## Code Demo

### Basic usage

#### Options configuration

The Picker component configures option data through the `columns` attribute, which is an array containing strings or objects.

#### Top bar

The top bar contains a title, a confirm button and a cancel button. Clicking the confirm button triggers the `confirm` event, and clicking the cancel button triggers the `cancel` event.

```html
<z-picker
   title="title"
   :columns="columns"
   @confirm="onConfirm"
   @cancel="onCancel"
   @change="onChange"
/>
```

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const columns = [
   { text: 'Hangzhou', value: 'Hangzhou' },
   { text: 'Ningbo', value: 'Ningbo' },
   { text: 'Wenzhou', value: 'Wenzhou' },
   { text: 'Shaoxing', value: 'Shaoxing' },
   { text: 'Huzhou', value: 'Huzhou' }
]
const onConfirm = ({ selectedValues }: any) => {
   toast.showToast(`Current value: ${selectedValues.join(',')}`)
}
const onChange = ({ selectedValues }: any) => {
   toast.showToast(`Current value: ${selectedValues.join(',')}`)
}
const onCancel = () => toast.showToast('Cancel')
```

### Used with pop-up layer

In actual scenarios, Picker is usually used to assist in form filling, and can be used with Popup and Field to achieve this effect.

```html
<z-field
   v-model="fieldValue"
   is-link
   readonly
   label="city"
   placeholder="Select city"
   @click="showPicker = true"
   @click-input="showPicker = true"
/>
<z-popup v-model:show="showPicker" round position="bottom">
   <z-picker
     :columns="columns"
     @cancel="showPicker = false"
     @confirm="onConfirmInput"
   />
</z-popup>
```

### Two-way binding

`v-model` can be used to bind the `values` of the currently selected item. When the value bound to `v-model` is modified, the selected state of the Picker will also change accordingly.

The value of `v-model` is an array. The first digit of the array corresponds to the `value` of the selected item in the first column, the second digit corresponds to the `value` of the selected item in the second column, and so on.

```html
<z-picker v-model="selectedValues" title="title" :columns="columns" />
```

###Multiple column selection

The `columns` property can configure multi-column selection in the form of a two-dimensional array.

```html
<z-picker title="title" :columns="columnsMore" />
```

```js
const columnsMore = [
   [
     { text: 'Monday', value: 'Monday' },
     { text: 'Tuesday', value: 'Tuesday' },
     { text: 'Wednesday', value: 'Wednesday' },
     { text: 'Thursday', value: 'Thursday' },
     { text: 'Friday', value: 'Friday' }
   ],
   [
     { text: 'Morning', value: 'Morning' },
     { text: 'afternoon', value: 'Afternoon' },
     { text: 'Evening', value: 'Evening' }
   ]
]
```

### Cascade selection

The effect of option cascading can be achieved using the `children` field of `columns`. If there are many cascading levels, it is recommended to use [Cascader cascading option component](#/zh-CN/cascader).

```html
<z-picker title="title" :columns="columnsCascade" />
```

```js
const columnsCascade = [
   {
     text: 'Zhejiang',
     value: 'Zhejiang',
     children: [
       {
         text: 'Hangzhou',
         value: 'Hangzhou',
         children: [
           { text: '西湖区', value: 'Xihu' },
           { text: 'Yuhang District', value: 'Yuhang' }
         ]
       },
       {
         text: 'Wenzhou',
         value: 'Wenzhou',
         children: [
           { text: 'Lucheng District', value: 'Lucheng' },
           { text: 'Ouhai District', value: 'Ouhai' }
         ]
       }
     ]
   },
   {
     text: 'Fujian',
     value: 'Fujian',
     children: [
       {
         text: 'Fuzhou',
         value: 'Fuzhou',
         children: [
           { text: 'Gulou District', value: 'Gulou' },
           { text: 'Taijiang District', value: 'Taijiang' }
         ]
       },
       {
         text: 'Xiamen',
         value: 'Xiamen',
         children: [
           { text: 'Siming District', value: 'Siming' },
           { text: 'Haicang District', value: 'Haicang' }
         ]
       }
     ]
   }
]
```

> The data nesting depth of cascade selection needs to be consistent. If some options have no sub-options, empty strings can be used as placeholders.

### Disable option

Options can be object structures, which can be disabled by setting `disabled`.

```html
<z-picker :columns="columnsDisabled" />
```

```js
const columnsDisabled = [
   { text: 'Hangzhou', value: 'Hangzhou', disabled: true },
   { text: 'Ningbo', value: 'Ningbo' },
   { text: 'Wenzhou', value: 'Wenzhou' }
]
```

### Loading status

If the selector data is obtained asynchronously, the loading prompt can be displayed through the `loading` attribute.

```html
<z-picker :loading="loading" />
```

```js
import { ref } from 'vue';
const loading = ref(true);
```

### Customize the structure of Columns

```html
<z-picker
   title="title"
   :columns="columnsCustom"
   :columns-field-names="customFieldName"
/>
```

```js
const columnsCustom = [
   {
     cityName: 'Zhejiang',
     cities: [
       {
         cityName: 'Hangzhou',
         cities: [{ cityName: 'Xihu District' }, { cityName: 'Yuhang District' }]
       },
       {
         cityName: 'Wenzhou',
         cities: [{ cityName: 'Lucheng District' }, { cityName: 'Ouhai District' }]
       }
     ]
   },
   {
     cityName: 'Fujian',
     cities: [
       {
         cityName: 'Fuzhou',
         cities: [{ cityName: 'Gulou District' }, { cityName: 'Taijiang District' }]
       },
       {
         cityName: 'Xiamen',
         cities: [{ cityName: 'Siming District' }, { cityName: 'Haicang District' }]
       }
     ]
   }
]
const customFieldName = {
   text: 'cityName',
   value: 'cityName',
   children: 'cities'
}
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | The value corresponding to the currently selected item | _number[] \| string[]_ | - |
| columns | Object array, configure the data displayed in each column | _PickerOption[] \| PickerOption[][]_ | `[]` |
| columns-field-names | Custom fields in the `columns` structure | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |
| title | Top column title | _string_ | - |
| confirm-button-text | Confirm button text, set to an empty string to hide the button | _string_ | `Confirm` |
| cancel-button-text | Cancel button text, set to an empty string to hide the button | _string_ | `Cancel` |
| toolbar-position | Top bar position, optional value is `bottom` | _string_ | `top` |
| loading | whether to display loading status | _boolean_ | `false` |
| readonly | Whether it is in read-only state. Options cannot be switched in read-only state | _boolean_ | `false` |
| show-toolbar | Whether to display the top bar | _boolean_ | `true` |
| option-height | option height, supports `rpx`Unit, default `px` | _number \| string_ | `44` |
| visible-option-num | Number of visible options | _number \| string_ | `6` |
| swipe-duration | The duration of inertial scrolling during fast swiping, unit `ms` | _number \| string_ | `1000` |

### Events

| Event name | Description | Callback parameters |
| --- | --- | --- |
| confirm | Triggered when the completion button is clicked | _{ selectedValues, selectedOptions, selectedIndexes }_ |
| cancel | Triggered when the cancel button is clicked | _{ selectedValues, selectedOptions, selectedIndexes }_ |
| change | Triggered when the selected option changes | _{ selectedValues, selectedOptions, selectedIndexes, columnIndex }_ |
| click-option | Triggered when an option is clicked | _{ currentOption, selectedValues, selectedOptions, selectedIndexes, columnIndex }_ |
| scroll-into | Triggered when the user scrolls an option to the middle selection area by clicking or dragging | _{ currentOption, columnIndex }_ |

### Slots

| Name | Description | Parameters |
| --- | --- | --- |
| toolbar | Customize the entire top bar content | - |
| title | Custom title content | - |
| confirm | Customize the confirmation button content | - |
| cancel | Customize cancel button content | - |
| option | Custom option content | _option: PickerOption, index: number_ |
| columns-top | Customize the content above the options | - |
| columns-bottom | Customize the content below the options | - |

### PickerOption data structure

| Key name | Description | Type |
| --------- | ------------ | --------------------------- |
| text | option text content | _string \| number_ |
| value | The value corresponding to the option | _string \| number_ |
| disabled | Whether to disable the option | _boolean_ |
| children | Cascading options | _PickerOption[]_ |
| className | option extra class name | _string \| Array \| object_ |

### method

Through ref, you can get the Picker instance and call the instance method.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| confirm | Stop inertial scrolling and trigger the `confirm` event | - | - |
| getSelectedOptions | Get the currently selected options | - | _(PickerOption \| undefined)[]_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ------------------------------------ | --------------------------- | ---- |
| --z-picker-background | _var(--z-background-2)_ | - |
| --z-picker-toolbar-height | _88rpx_ | - |
| --z-picker-title-font-size | _var(--z-font-size-lg)_ | - |
| --z-picker-title-line-height | _var(--z-line-height-md)_ | - |
| --z-picker-action-padding | _0 var(--z-padding-md)_ | - |
| --z-picker-action-font-size | _var(--z-font-size-md)_ | - |
| --z-picker-confirm-action-color | _var(--z-primary-color)_ | - |
| --z-picker-cancel-action-color | _var(--z-text-color-2)_ | - |
| --z-picker-option-padding | _0 var(--z-padding-base)_ | - |
| --z-picker-option-font-size | _var(--z-font-size-lg)_ | - |
| --z-picker-option-text-color | _var(--z-text-color)_ | - |
| --z-picker-option-disabled-opacity | _0.3_ | - |
| --z-picker-mask-color | _linear-gradient_ | - |
| --z-picker-loading-icon-color | _var(--z-primary-color)_ | - |
| --z-picker-loading-mask-color | _rgba(255, 255, 255, 0.9)_ | - |