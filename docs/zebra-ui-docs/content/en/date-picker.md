# DatePicker date selection

### introduce

Date picker, used to select year, month, day, usually used in conjunction with the [popup layer] (/popup) component.

## Code Demo

### Basic usage

Bind the currently selected date through `v-model`, and set the optional time range through `min-date` and `max-date` attributes.

```html
<z-date-picker
   v-model="currentDate"
   title="Select date"
   :min-date="minDate"
   :max-date="maxDate"
/>
```

```js
const currentDate = ref(['2021', '01', '01'])
const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2025, 5, 1)
```

### Option type

The type of options can be controlled through the `columns-type` attribute, which supports permutations and combinations of `year`, `month` and `day` in any order.

for example:

- Pass `['year']` to select the year individually.
- Pass `['month']` to select months individually.
- Pass in `['year', 'month']` to select year and month.
- Pass in `['month', 'day']` to select month and day.

```html
<z-date-picker
   v-model="currentDate"
   title="Select year and month"
   :min-date="minDate"
   :max-date="maxDate"
   :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';
const currentDate = ref(['2021', '01']);
const columnsType = ['year', 'month'];
const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2025, 5, 1)
```

### Format options

By passing in the `formatter` function, the option text can be formatted.

```html
<z-date-picker
   v-model="currentDateFormatter"
   title="Select year and month"
   :min-date="minDate"
   :max-date="maxDate"
   :formatter="formatter"
   :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';
const currentDateFormatter = ref(['2021', '01'])
const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2025, 5, 1)
const columnsType = ['year', 'month']
const formatter = (type: any, option: any) => {
   if (type === 'year') {
     option.text += 'year'
   }
   if (type === 'month') {
     option.text += 'month'
   }
   return option
}
```

### Filter options

By passing in the `filter` function, the option array can be filtered to implement custom option intervals.

```html
<z-date-picker
   v-model="currentDateFilter"
   title="Select year and month"
   :filter="filter"
   :min-date="minDate"
   :max-date="maxDate"
   :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';

const filter = (type: string, options: any) => {
   if (type === 'month') {
     return options.filter((option: any) => Number(option.value) % 6 === 0)
   }
   return options
}
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | Currently selected date | _string[]_ | `[]` |
| columns-type | Option type, array of `year`, `month` and `day` | _string[]_ | `['year', 'month', 'day']` |
| min-date | Optional minimum time, accurate to day | _Date_ | - |
| max-date | Optional maximum time, accurate to day | _Date_ | - |
| title | Top column title | _string_ | `''` |
| confirm-button-text | Confirm button text | _string_ | `Confirm` |
| cancel-button-text | Cancel button text | _string_ | `Cancel` |
| show-toolbar | Whether to display the top bar | _boolean_ | `true` |
| loading | whether to display loading status | _boolean_ | `false` |
| readonly | Whether it is in read-only state. Options cannot be switched in read-only state | _boolean_ | `false` |
| filter | option filter function | _(type: string, options: PickerOption[]) => PickerOption[]_ | - |
| formatter | option formatting function | _(type: string, option: PickerOption) => PickerOption_ | - |
| option-height | Option height, supports `rpx` unit, default `px` | _number \| string_ | `44` |
| visible-option-num | Number of visible options | _number \| string_ | `6` |
| swipe-duration | The duration of inertial scrolling during fast swiping, unit `ms` | _number \| string_ | `1000` |

### Events

| Event name | Description | Callback parameters |
| --- | --- | --- |
| confirm | Triggered when the completion button is clicked | _{ selectedValues, selectedOptions, selectedIndexes }_ |
| cancel | Triggered when the cancel button is clicked | _{ selectedValues, selectedOptions, selectedIndexes }_ |
| change | Triggered when options change | _{ selectedValues, selectedOptions, selectedIndexes, columnIndex }_ |

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