# Area province and city selection

### introduce

Three-level linkage selection of provinces and cities, usually used in conjunction with the [popup layer](/popup) component.

## Code Demo

### Basic usage

When initializing the province and city components, you need to pass in the province and city data through the `area-list` attribute.

```html
<z-area title="title" :area-list="areaList" />
```

### areaList format

areaList is an object structure, including three keys: `province_list`, `city_list`, and `county_list`.

Each item uses the area code as the key and the province and city name as the value. The area code is a 6-digit number. The first two digits represent the province, the middle two digits represent the city, and the last two digits represent the district and county. The six digits are supplemented with 0s. For example, the area code of Beijing is `11`, padding 6 digits with 0, it is `110000`.

Sample data is as follows:

```js
const areaList = {
   province_list: {
     110000: 'Beijing City',
     120000: 'Tianjin City',
   },
   city_list: {
     110100: 'Beijing',
     120100: 'Tianjin City',
   },
   county_list: {
     110101: 'Dongcheng District',
     110102: 'Xicheng District',
     // ....
   },
};
```

### China province and city data

The sample project of zebra-ui provides Chinese province and city data, which can be copied and quoted directly.

```ts
import { areaList } from '../../common/js/area'
```

### Control selected items

Bind the currently selected region code through `v-model`.

```html
<z-area v-model="valueSelect" title="title" :area-list="areaList" />
```

```js
import { ref } from 'vue';
import { areaList } from '../../common/js/area'
const valueSelect = ref('330302')
```

### Configure display columns

You can configure the number of columns displayed in provinces and cities through the `columns-num` attribute. By default, provinces and cities will be displayed. When you set it to `2`, only provinces and cities will be displayed.

```html
<z-area title="title" :area-list="areaList" :columns-num="2" />
```

### Configure column placeholder prompt text

The placeholder text for each column can be configured through the `columns-placeholder` attribute.

```html
<z-area
   title="title"
   :area-list="areaList"
   :columns-placeholder="['Please select', 'Please select', 'Please select']"
/>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | The area code corresponding to the currently selected item | _string_ | - |
| title | Top column title | _string_ | - |
| confirm-button-text | Confirm button text | _string_ | `Confirm` |
| cancel-button-text | Cancel button text | _string_ | `Cancel` |
| area-list | Province and city data | _object_ | - |
| columns-placeholder | Column placeholder prompt text | _string[]_ | `[]` |
| loading | whether to display loading status | _boolean_ | `false` |
| readonly | Whether it is in read-only state. Options cannot be switched in read-only state | _boolean_ | `false` |
| option-height | Option height, supports `rpx` unit, default `px` | _number \| string_ | `44` |
| columns-num | Display the number of columns, 3-province and city, 2-province and city, 1-province | _number \| string_ | `3` |
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
| -------------- | ---------------------- | ---- |
| toolbar | Customize the entire top bar content | - |
| title | Custom title content | - |
| confirm | Customize the confirmation button content | - |
| cancel | Customize cancel button content | - |
| columns-top | Customize the content above the options | - |
| columns-bottom | Customize the content below the options | - |

### method

Area instances can be obtained through ref and instance methods can be called.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| confirm | Stop inertial scrolling and trigger the `confirm` event | - | - |
| getSelectedOptions | Get the currently selected options | - | _PickerOption[]_ |