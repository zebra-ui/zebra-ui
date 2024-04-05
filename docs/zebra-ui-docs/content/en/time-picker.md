# TimePicker time selection

### introduce

Time picker, usually used in conjunction with the [popup layer](/popup) component.

## Code Demo

### Basic usage

Bind the currently selected time through `v-model`.

```html
<z-time-picker v-model="currentTime" title="Select time" />
```

```js
import { ref } from 'vue';
const currentTime = ref(['12', '00']);
```

### Option type

The type of options can be controlled through the `columns-type` attribute, which supports permutations and combinations of `hour`, `minute` and `second` in any order.

for example:

- Pass `['hour']` to select hours individually.
- Pass `['minute']` to select minutes individually.
- Pass `['minute', 'second']` to select minutes and seconds.
- Pass in `['hour', 'minute', 'second']` to select hours, minutes and seconds.

```html
<z-time-picker
   v-model="currentTime"
   title="Select time"
   :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';
const currentTime = ref(['12', '00', '00']);
const columnsType = ['hour', 'minute', 'second'];
```

### time limit

You can use attributes such as `min-hour` and `max-hour` to limit the hour (hour) range, minute (minute) range, and second (second) range.

For example, in the following example, the hours that the user can select are `10 ~ 20` and the minutes are `30 ~ 40`.

```html
<z-time-picker
   v-model="currentTime"
   title="Select time"
   :min-hour="10"
   :max-hour="20"
   :min-minute="30"
   :max-minute="40"
/>
```

### Overall time range

You can use the `min-time` and `max-time` attributes to limit the overall time range, with the agreed format `10:00:00`.

- After setting `min-time`, the `min-hour`, `min-minute` and `min-second` properties will not take effect.
- After setting `max-time`, the `max-hour`, `max-minute` and `max-second` properties will not take effect.

For example, in the following example, the user can select any time from `09:40:10` to `20:20:50`.

```html
<z-time-picker
   v-model="currentTime"
   title="Select time"
   :columns-type="['hour', 'minute', 'second']"
   min-time="09:40:10"
   max-time="20:20:50"
/>
```

### Format options

By passing in the `formatter` function, the text of the option can be formatted.

```html
<z-time-picker
   v-model="currentTime"
   title="Select time"
   :formatter="formatter"
/>
```

```js
const formatter = (type: string, option: any) => {
   if (type === 'hour') {
     option.text += 'when'
   }
   if (type === 'minute') {
     option.text += 'fen'
   }
   return option
}
```

### Filter options

By passing in the `filter` function, the option array can be filtered to eliminate unnecessary time and implement a custom time interval.

```html
<z-time-picker v-model="currentTime" title="Select time" :filter="filter" />
```

```js
const filter = (type: string, options: any) => {
   if (type === 'minute') {
     return options.filter((option: any) => Number(option.value) % 10 === 0)
   }
   return options
}
```

### Advanced usage

The third parameter of the `filter` function can get the currently selected time, which can more flexibly filter out unnecessary times when using uncontrolled mode.

```html
<z-time-picker title="Select time" :filter="filter" />
```

```js
const filterMore = (type: string, options: any, values: any) => {
   const hour = +values[0]

   if (type === 'hour') {
     return options.filter(
       (option: any) => Number(option.value) >= 8 && Number(option.value) <= 18
     )
   }

   if (type === 'minute') {
     options = options.filter((option: any) => Number(option.value) % 10 === 0)

     if (hour === 8) {
       return options.filter((option: any) => Number(option.value) >= 40)
     }

     if (hour === 18) {
       return options.filter((option: any) => Number(option.value) <= 20)
     }
   }

   return options
}
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | Currently selected time | _string[]_ | - |
| columns-type | Option type, array of `hour`, `minute` and `second` | _string[]_ | `['hour', 'minute']` |
| min-hour | Optional minimum hour | _number \| string_ | `0` |
| max-hour | Optional maximum hour | _number \| string_ | `23` |
| min-minute | Optional minimum minute | _number \| string_ | `0` |
| max-minute | Optional maximum minute | _number \| string_ | `59` |
| min-second | Optional minimum number of seconds | _number \| string_ | `0` |
| max-second | Optional maximum number of seconds | _number \| string_ | `59` |
| min-time | Optional minimum time, the format refers to `07:40:00`, when using `min-hour` `min-minute` `min-second` will not take effect | _string_ | - |
| max-time | Optional maximum time, the format refers to `10:20:00`, when using `max-hour` `max-minute` `max-second` will not take effect | _string_ | - |
| title | Top column title | _string_ | `''` |
| confirm-button-text | Confirm button text | _string_ | `Confirm` |
| cancel-button-text | Cancel button text | _string_ | `Cancel` |
| show-toolbar | Whether to display the top bar | _boolean_ | `true` |
| loading | whether to display loading status | _boolean_ | `false` |
| readonly | Whether it is in read-only state. Options cannot be switched in read-only state | _boolean_ | `false` |
| filter | option filter function | _(type: string, options: PickerOption[], values: string[]) => PickerOption[]_ | - |
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