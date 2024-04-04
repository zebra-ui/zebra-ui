# Calendar Calendar

### introduce

Calendar component is used to select dates or date ranges.

## Code Demo

### Select a single date

The following demonstrates the use of the calendar component in combination with cells. The `confirm` event will be triggered after the date selection is completed.

```html
<z-cell title="Select a single date" :value="date" @click="show = true" />
<z-calendar v-model:show="show" @confirm="onConfirm" />
```

```js
import { ref } from 'vue';

export default {
   setup() {
     const date = ref('');
     const show = ref(false);

     const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
     const onConfirm = (value) => {
       show.value = false;
       date.value = formatDate(value);
     };

     return {
       date,
       show,
       onConfirm,
     };
   },
};
```

### Select multiple dates

After setting `type` to `multiple`, you can select multiple dates. At this time, the date returned by the `confirm` event is an array structure, and the array contains several selected dates.

```html
<z-cell title="Select multiple dates" :value="text" @click="show = true" />
<z-calendar v-model:show="show" type="multiple" @confirm="onConfirm" />
```

```js
import { ref } from 'vue';

export default {
   setup() {
     const text = ref('');
     const show = ref(false);

     const onConfirm = (dates) => {
       show.value = false;
       text.value = `${dates.length} dates selected`;
     };

     return {
       text,
       show,
       onConfirm,
     };
   },
};
```

### Select date range

After setting `type` to `range`, you can select a date range. At this time, the date returned by the `confirm` event is an array structure. The first item in the array is the start time and the second item is the end time.

```html
<z-cell title="Select date range" :value="date" @click="show = true" />
<z-calendar v-model:show="show" type="range" @confirm="onConfirm" />
```

```js
import { ref } from 'vue';

export default {
   setup() {
     const date = ref('');
     const show = ref(false);

     const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
     const onConfirm = (values) => {
       const [start, end] = values;
       show.value = false;
       date.value = `${formatDate(start)} - ${formatDate(end)}`;
     };

     return {
       date,
       show,
       onConfirm,
     };
   },
};
```

> Tips: By default, the start and end times of the date range cannot be on the same day. You can set the allow-same-day attribute to allow the selection of the same day.

### Quick selection

Set `show-confirm` to `false` to hide the confirm button, in which case the `confirm` event will be triggered immediately after the selection is completed.

```html
<z-calendar v-model:show="show" :show-confirm="false" />
```

### Custom color

The color of the calendar can be customized through the `color` attribute, which takes effect on the selected date and bottom button.

```html
<z-calendar v-model:show="show" color="#ee0a24" />
```

### Custom date range

Define the calendar range via `min-date` and `max-date`.

```html
<z-calendar v-model:show="show" :min-date="minDate" :max-date="maxDate" />
```

```js
import { ref } from 'vue';

export default {
   setup() {
     const show = ref(false);

     return {
       show,
       minDate: new Date(2010, 0, 1),
       maxDate: new Date(2010, 0, 31),
     };
   },
};
```

### Custom button text

Set the button text through `confirm-text`, and set the text when the button is disabled through `confirm-disabled-text`.

```html
<z-calendar
   v-model:show="show"
   type="range"
   confirm-text="Complete"
   confirm-disabled-text="Please select an end time"
/>
```

### Custom date copywriting

Format the content of each cell on the calendar by passing in the `formatter` function.

```html
<z-calendar v-model:show="show" type="range" :formatter="formatter" />
```

```js
export default {
   setup() {
     const formatter = (day) => {
       const month = day.date.getMonth() + 1;
       const date = day.date.getDate();

       if (month === 5) {
         if (date === 1) {
           day.topInfo = 'Labor Day';
         } else if (date === 4) {
           day.topInfo = 'Youth Day';
         } else if (date === 11) {
           day.text = 'Today';
         }
       }

       if (day.type === 'start') {
         day.bottomInfo = 'Check-in';
       } else if (day.type === 'end') {
         day.bottomInfo = 'Departure';
       }

       return day;
     };

     return {
       formatter,
     };
   },
};
```

### Custom popup position

Customize the pop-up position of the pop-up layer through the `position` attribute. The optional values are `top`, `left`, and `right`.

```html
<z-calendar v-model:show="show" :round="false" position="right" />
```

### Maximum date range

When selecting a date range, you can specify the maximum number of optional days through the `max-range` attribute. When the selected range exceeds the maximum number of optional days, the corresponding prompt copy will pop up.

```html
<z-calendar type="range" :max-range="3" />
```

### Customize the starting day of the week

Set the day the week starts with the `first-day-of-week` property.

```html
<z-calendar first-day-of-week="1" />
```

### Tiled display

Set `poppable` to `false`, and the calendar will be displayed directly on the page instead of appearing as a pop-up layer.

```html
<z-calendar
   title="Calendar"
   :poppable="false"
   :show-confirm="false"
   :custom-style="{ height: '500px' }"
/>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| type | Selection type:<br>`single` means selecting a single date, <br>`multiple` means selecting multiple dates, <br>`range` means selecting a date range | _string_ | `single` |
| title | Calendar title | _string_ | `Date selection` |
| color | Theme color, effective for bottom button and selected date | _string_ | `#1989fa` |
| min-date | Selectable minimum date | _Date_ | Current date |
| max-date | The maximum date that can be selected | _Date_ | Six months after the current date |
| default-date | The date selected by default, it is an array when `type` is `multiple` or `range`, passing in `null` means not selected by default | _Date \| Date[] \| null_ | Today |
| row-height | Date row height | _number \| string_ | `64` |
| formatter | Date formatting function | _(day: Day) => Day_ | - |
| poppable | Whether to display the calendar as a pop-up layer | _boolean_ | `true` |
| show-mark | Whether to display the month background watermark | _boolean_ | `true` |
| show-title | Whether to display the calendar title | _boolean_ | `true` |
| show-subtitle | Whether to display the calendar subtitle (year and month) | _boolean_ | `true` |
| show-confirm | Whether to display the confirmation button | _boolean_ | `true` |
| readonly | Whether it is in read-only state. Date cannot be selected in read-only state | _boolean_ | `false` |
| confirm-text | Confirm button text | _string_ | `OK` |
| confirm-disabled-text | Text when confirm button is disabled | _string_ | `OK` |
| first-day-of-week | Set the starting day of the week | _0-6_ | `0` |

### Calendar Poppable Props

When Calendar's `poppable` is `true`, the following props are supported:

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model:show | Whether to display the calendar pop-up window | _boolean_ | `false` |
| position | Pop-up position, optional values are `top` `right` `left` | _string_ | `bottom` |
| round | Whether to display rounded pop-ups | _boolean_ | `true` |
| close-on-popstate | Whether to automatically close when the page is rolled back | _boolean_ | `true` |
| close-on-click-overlay | Whether to close the overlay after clicking it | _boolean_ | `true` |
| safe-area-inset-top | Whether to enable top safe area adaptation | _boolean_ | `false` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |

### Calendar Range Props

When Calendar's `type` is `range`, the following props are supported:

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| max-range | The maximum number of optional days in the date range | _number \| string_ | Unlimited |
| range-prompt | Prompt text when the range selection exceeds the maximum number of optional days | _string_ | `Maximum selection of xx days` |
| show-range-prompt | When the range selection exceeds the maximum selectable number of days, whether to display the prompt text | _boolean_ | `true` |
| allow-same-day | Whether to allow the date range to start and end on the same day | _boolean_ | `false` |

### Calendar Multiple Props

When Calendar's `type` is `multiple`, the following props are supported:

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| max-range | The maximum number of days that can be selected for a date | _number \| string_ | Unlimited |
| range-prompt | Prompt text when selecting more than the maximum number of optional days | _string_ | `Select at most xx days` |

### Day data structure

Each date in the calendar corresponds to a Day object, and the content of the Day object can be customized through the `formatter` attribute.

| Key name | Description | Type |
| --- | --- | --- |
| date | Date object corresponding to date | _Date_ |
| type | Date type, optional values are `selected`, `start`, `middle`, `end`, `disabled` | _string_ |
| text | The text displayed in the middle | _string_ |
| topInfo | The prompt information above | _string_ |
| bottomInfo | Prompt information below | _string_ |
| className | Additional class name | _string_ |

### Events

| Event name | Description | Callback parameters |
| --- | --- | --- |
| select | Triggered when any date is clicked and selected | _value: Date \| Date[]_ |
| confirm | Triggered after date selection is completed. If `show-confirm` is `true`, it will be triggered after clicking the confirm button | _value: Date \| Date[]_ |
| open | Triggered when the popup layer is opened | - |
| close | Triggered when closing the popup layer | - |
| opened | Triggered after the popup layer is opened and the animation ends | - |
| closed | Triggered after the popup layer is closed and the animation ends | - |
| unselect | When the `type` of the calendar component is `multiple`, triggered when the date is unselected | _value: Date_ |
| month-show | Triggered when a month enters the visible area | _{ date: Date, title: string }_ |
| over-range | Triggered when the range selection exceeds the maximum selectable number of days | - |
| click-subtitle | Triggered when the calendar subtitle is clicked | _event: MouseEvent_ |
| click-disabled-date | Triggered when a disabled date is clicked | _value: Date \| Date[]_ |

### Slots

| Name | Description | Parameters |
| --- | --- | --- |
| title | Custom title | - |
| subtitle | Custom calendar subtitle | _{ text: string, date?: Date }_ |
| month-title | Customize the subtitle of each month | _{ text: string, date: Date }_ |
| footer | Customize bottom area content | - |
| confirm-text | Customize the content of the confirm button | _{ disabled: boolean }_ |
| top-info | Customize the prompt information above the date | _day: Day_ |
| bottom-info | Customize the prompt information below the date | _day: Day_ |

### method

Calendar instances can be obtained through ref and instance methods can be called.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| reset | Resets the selected date to the specified date. If no parameters are passed, it will be reset to the default date | _date?: Date \| Date[]_ | - |
| scrollToDate | Scroll to a certain date | _date: Date_ | - |
| getSelectedDate | Get the selected date | - | _Date \| Date[] \| null_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-calendar-background | _var(--z-background-2)_ | - |
| --z-calendar-popup-height | _80%_ | - |
| --z-calendar-header-shadow | _0 4rpx 20rpx rgba(125, 126, 128, 0.16)_ | - |
| --z-calendar-header-title-height | _88rpx_ | - |
| --z-calendar-header-title-font-size | _var(--z-font-size-lg)_ | - |
| --z-calendar-header-subtitle-font-size | _var(--z-font-size-md)_ | - |
| --z-calendar-weekdays-height | _60rpx_ | - |
| --z-calendar-weekdays-font-size | _var(--z-font-size-sm)_ | - |
| --z-calendar-month-title-font-size | _var(--z-font-size-md)_ | - |
| --z-calendar-month-mark-color | _fade(var(--z-gray-2), 80%)_ | - |
| --z-calendar-month-mark-font-size | _320rpx_ | - |
| --z-calendar-day-height | _128rpx_ | - |
| --z-calendar-day-font-size | _var(--z-font-size-lg)_ | - |
| --z-calendar-day-margin-bottom | _8rpx_ | - |
| --z-calendar-range-edge-color | _var(--z-white)_ | - |
| --z-calendar-range-edge-background | _var(--z-primary-color)_ | - |
| --z-calendar-range-middle-color | _var(--z-primary-color)_ | - |
| --z-calendar-range-middle-background-opacity | _0.1_ | - |
| --z-calendar-selected-day-size | _108rpx_ | - |
| --z-calendar-selected-day-color | _var(--z-white)_ | - |
| --z-calendar-info-font-size | _var(--z-font-size-xs)_ | - |
| --z-calendar-info-line-height | _var(--z-line-height-xs)_ | - |
| --z-calendar-selected-day-background | _var(--z-primary-color)_ | - |
| --z-calendar-day-disabled-color | _var(--z-text-color-3)_ | - |
| --z-calendar-confirm-button-height | _72rpx_ | - |
| --z-calendar-confirm-button-margin | _14rpx 0_ | - |

## common problem

### How to use asynchronously returned data in formatter?

If you need to use asynchronously returned data in a formatter, you can use computed properties to dynamically create a formatter function. The example is as follows:

```js
const asyncData = ref();

const formatter = computed(() => {
   if (!asyncData.value) {
     return (day) => day;
   }
   return (day) => {
     day.bottomInfo = asyncData.value;
     return day;
   };
});

setTimeout(() => {
   asyncData.value = 'Backend copywriting';
}, 3000);
```