# PickerGroup

### introduce

Used to combine multiple Picker selector components to complete the selection of multiple values in one interaction.

The following components can be placed in PickerGroup:

- [Picker](/picker)
- [Area](/area)
- [DatePicker](/date-picker)
- [TimePicker](/time-picker)
- Other custom components based on Picker package

> It needs to be completed in conjunction with the [tab](/tab) component.

## Code Demo

### Select date and time

Placing a `DatePicker` component and a `TimePicker` component in the default slot of `PickerGroup` can achieve the interactive effect of selecting date and time at the same time.

```html
<z-picker-group
   title="Appointment Date"
   :tabs="['Select date', 'Select time']"
   @confirm="onConfirm"
   @cancel="onCancel"
>
   <z-tabs
     v-model:active="activeTab"
     shrink
     animated
     :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
   >
     <z-tab title="Select a date">
       <z-date-picker
         v-model="currentDate"
         :min-date="minDate"
         :max-date="maxDate"
       />
     </z-tab>
     <z-tab title="Select time">
       <z-time-picker v-model="currentTime" />
     </z-tab>
   </z-tabs>
</z-picker-group>
```

```js
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const currentDate = ref(['2022', '06', '01'])
const currentTime = ref(['12', '00'])
const onConfirm = () => {
   toast.showToast(
     `${currentDate.value.join('/')} ${currentTime.value.join(':')}`
   )
}

const onCancel = () => {
   toast.showToast('cancel')
}
```

### Next button

In some scenarios, to ensure that users can select all Pickers in sequence, you can set the `next-step-text` attribute of PickerGroup. After setting the `next-step-text` attribute, if the user has not switched to the last tab, the button in the upper right corner will become "Next", and it will automatically switch to the next Picker after clicking it. When the user switches to the last tab, the button in the upper right corner changes to "Confirm."

```html
<z-picker-group
   v-model:activeTab="activeTabNext"
   title="Appointment Date"
   :count="4"
   next-step-text="Next step"
   @confirm="onConfirm"
   @cancel="onCancel"
>
   <z-tabs
     v-model:active="activeTabNext"
     shrink
     animated
     :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
   >
     <z-tab title="Select a date">
       <z-date-picker
         v-model="currentDate"
         :min-date="minDate"
         :max-date="maxDate"
       />
     </z-tab>
     <z-tab title="Select time">
       <z-time-picker v-model="currentTime" />
     </z-tab>
     <z-tab title="Select date again">
       <z-date-picker
         v-model="currentDate"
         :min-date="minDate"
         :max-date="maxDate"
       />
     </z-tab>
     <z-tab title="Select time again">
       <z-time-picker v-model="currentTime" />
     </z-tab>
   </z-tabs>
</z-picker-group>
```

```js
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const currentDate = ref(['2022', '06', '01'])
const currentTime = ref(['12', '00'])
const activeTabNext = ref(0)
```

### Select date range

Placing two `DatePicker` components in the default slot of `PickerGroup` can achieve the interactive effect of selecting a date range.

```html
<z-picker-group
   title="Appointment Date"
   :count="2"
   @confirm="onConfirmTimeMax"
   @cancel="onCancelTimeMax"
>
   <z-tabs
     v-model:active="activeTab"
     shrink
     animated
     :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
   >
     <z-tab title="Start Date">
       <z-time-picker v-model="startTime" />
     </z-tab>
     <z-tab title="End date">
       <z-time-picker v-model="endTime" />
     </z-tab>
   </z-tabs>
</z-picker-group>
```

### Select time range

Placing two `TimePicker` components in the default slot of `PickerGroup` can achieve the interactive effect of selecting a time range.

```html
<z-picker-group
   title="Appointment date"
   :count="2"
   @confirm="onConfirmTimeMax"
   @cancel="onCancelTimeMax"
>
   <z-tabs
     v-model:active="activeTab"
     shrink
     animated
     :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
   >
     <z-tab title="Start Date">
       <z-time-picker v-model="startTime" />
     </z-tab>
     <z-tab title="End date">
       <z-time-picker v-model="endTime" />
     </z-tab>
   </z-tabs>
</z-picker-group>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const startTime = ref(['12', '00'])
const endTime = ref(['12', '00'])

const onConfirmTimeMax = () => {
   toast.showToast(`${startTime.value.join(':')} - ${endTime.value.join(':')}`)
}

const onCancelTimeMax = () => {
   toast.showToast('cancel')
}
```

### Controlled mode

The switching of `tab` in `PickerGroup` supports uncontrolled mode and controlled mode:

- When `v-model:active-tab` is not bound, the switching of the `tab` of the PickerGroup component is completely controlled by the component itself.
- When `v-model:active-tab` is bound, PickerGroup supports controlled mode. At this time, the switching of component `tab` supports both the value of `v-model:active-tab` and the control of the component itself.

```html
<view class="picker-button">
   <z-button type="primary" @click="setActiveTab">
     Click to switch tabs, currently {{ activeTab }}
   </z-button>
</view>
<z-picker-group
   title="Appointment Date"
   :count="2"
   @confirm="onConfirmTimeMax"
   @cancel="onCancelTimeMax"
>
   <z-tabs
     v-model:active="activeTab"
     shrink
     animated
     :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
   >
     <z-tab title="Start Date">
       <z-time-picker v-model="startTime" />
     </z-tab>
     <z-tab title="End date">
       <z-time-picker v-model="endTime" />
     </z-tab>
   </z-tabs>
</z-picker-group>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const activeTab = ref(0)
const setActiveTab = () => {
   activeTab.value = activeTab.value ? 0 : 1
}
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model:active-tab | Set the currently selected tab | _number \| string_ | `0` |
| tabs | Set the title of the tab page | _string[]_ | `[]` |
| title | Top column title | _string_ | `''` |
| next-step-text | Next button text | _string_ | `''` |
| confirm-button-text | Confirm button text | _string_ | `Confirm` |
| cancel-button-text | Cancel button text | _string_ | `Cancel` |

### Slots

| Name | Description | Parameters |
| ------- | ----------------------- | ---- |
| toolbar | Customize the entire top bar content | - |
| title | Custom title content | - |
| confirm | Customize the confirmation button content | - |
| cancel | Customize cancel button content | - |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
|-------------------------------- | ------------------- | ---- |
| --z-picker-group-background | _--z-background-2_ | - |