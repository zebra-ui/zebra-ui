# ActionSheet action panel

### introduce

A modal panel that pops up at the bottom, containing multiple options related to the current situation.

## Code Demo

### Basic usage

The action panel defines options through the `actions` attribute. The `actions` attribute is an array composed of objects. Each object in the array is configured with a column. For the object format, see the table at the bottom of the document.

```html
<z-cell is-link title="Basic usage" @click="show = true" />
<z-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
```

```js
import { ref, computed } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const show = ref(false);
const actions = [
   { name: 'Option 1' },
   { name: 'Option 2' },
   { name: 'Option 3' },
];
const onSelect = (item) => {
   // By default, options will not automatically collapse when clicked
   // Automatic collapse can be enabled through the close-on-click-action attribute
   show.value = false;
   toast.showToast(item.name);
};
```

### Show cancel button

After setting the `cancel-text` property, a cancel button will be displayed at the bottom. After clicking, the current panel will be closed and the `cancel` event will be triggered.

```html
<z-action-sheet
   v-model:show="show"
   :actions="actions"
   cancel-text="Cancel"
   close-on-click-action
   @cancel="onCancel"
/>
```

```js
const onCancel = () => toast.showToast('Cancel')
```

### Display description information

The description information can be displayed at the top of the menu through `description`, and the description information can be displayed to the right of the option text through the `subname` attribute of the option.

```html
<z-action-sheet
   v-model:show="show"
   :actions="actions"
   cancel-text="Cancel"
   description="This is a description message"
   close-on-click-action
/>
```

```js
import { ref } from 'vue';
const actions = [
   { name: 'Option 1' },
   { name: 'Option 2' },
   { name: 'Option 3', subname: 'Description information' },
];
```

### Option status

You can set options to the loading state or disabled state through `loading` and `disabled`, or set the color of the option through `color`

```html
<z-action-sheet
   v-model:show="show"
   :actions="actions"
   cancel-text="Cancel"
   close-on-click-action
/>
```

```js
import { ref } from 'vue';
const actions = [
   { name: 'Coloring options', color: '#ee0a24' },
   { name: 'Disable option', disabled: true },
   { name: 'Loading options', loading: true },
];
```

### Custom panel

The display content of the panel can be customized through the slot, and the title bar can be displayed using the `title` attribute.

```html
<z-action-sheet v-model:show="showTitle" title="title">
   <view class="demo-action-sheet-content">Content</view>
</z-action-sheet>

<style>
.demo-action-sheet {
   &-content {
     padding: var(--z-padding-md) var(--z-padding-md)
       calc(var(--z-padding-md) * 10);
   }
}
</style>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model:show | Whether to display the action panel | _boolean_ | `false` |
| actions | Panel option list | _ActionSheetAction[]_ | `[]` |
| title | top title | _string_ | - |
| cancel-text | Cancel button text | _string_ | - |
| description | Description information above the option | _string_ | - |
| closeable | Whether to display the close icon | _boolean_ | `true` |
| close-icon | Close the icon name or image link, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | `close` |
| duration | animation duration in milliseconds, set to 0 to disable animation | _number \| string_ | `300` |
| z-index | Set the z-index level of the panel to a fixed value | _number \| string_ | `2000+` |
| round | Whether to display rounded corners | _boolean_ | `true` |
| overlay | whether to display the mask layer | _boolean_ | `true` |
| overlay-class | Custom mask layer class name | _string \| Array \| object_ | - |
| overlay-style | Custom mask layer style | _object_ | - |
| lock-scroll | Whether to lock background scrolling | _boolean_ | `true` |
| close-on-click-action | Whether to close the option after clicking it | _boolean_ | `false` |
| close-on-click-overlay | Whether to close the overlay after clicking it | _boolean_ | `true` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
| before-close | Callback function before closing, return `false` to prevent closing, support returning Promise | _(action: string) => boolean \| Promise\<boolean\>_ | - |

### Action data structure

The `actions` property is an array of objects. Each object in the array is configured with a column. The objects can contain the following values:

| Key name | Description | Type |
| --------- | -------------------------- | --------------------------- |
| name | title | _string_ |
| subname | Secondary title | _string_ |
| color | option text color | _string_ |
| className | Add additional class for the corresponding column | _string \| Array \| object_ |
| loading | whether it is loading state | _boolean_ |
| disabled | Whether it is disabled | _boolean_ |
| callback | Callback function triggered when clicked | _action: ActionSheetAction_ |

### Events

| Event name | Description | Callback parameters |
| --- | --- | --- |
| select | Triggered when an option is clicked, not triggered when disabled or loaded | _action: ActionSheetAction, index: number_ |
| cancel | Triggered when the cancel button is clicked | - |
| open | Triggered when the panel is opened | - |
| close | Triggered when closing the panel | - |
| opened | Triggered after the panel is opened and the animation ends | - |
| closed | Triggered after the panel is closed and the animation ends | - |
| click-overlay | Triggered when the overlay layer is clicked | _event: MouseEvent_ |

### Slots

| Name | Description | Parameters |
| --- | --- | --- |
| default | Customize the display content of the panel | - |
| description | Custom description copy | - |
| cancel | Customize cancel button content | - |
| action | Custom option content | _{ action: ActionSheetAction, index: number }_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-action-sheet-max-height | _80%_ | - |
| --z-action-sheet-header-height | _96rpx_ | - |
| --z-action-sheet-header-font-size | _var(--z-font-size-lg)_ | - |
| --z-action-sheet-description-color | _var(--z-text-color-2)_ | - |
| --z-action-sheet-description-font-size | _var(--z-font-size-md)_ | - |
| --z-action-sheet-description-line-height | _var(--z-line-height-md)_ | - |
| --z-action-sheet-item-background | _var(--z-background-2)_ | - |
| --z-action-sheet-item-font-size | _var(--z-font-size-lg)_ | - |
| --z-action-sheet-item-line-height | _var(--z-line-height-lg)_ | - |
| --z-action-sheet-item-text-color | _var(--z-text-color)_ | - |
| --z-action-sheet-item-disabled-text-color | _var(--z-text-color-3)_ | - |
| --z-action-sheet-subname-color | _var(--z-text-color-2)_ | - |
| --z-action-sheet-subname-font-size | _var(--z-font-size-sm)_ | - |
| --z-action-sheet-subname-line-height | _var(--z-line-height-sm)_ | - |
| --z-action-sheet-close-icon-size | _44rpx_ | - |
| --z-action-sheet-close-icon-color | _var(--z-gray-5)_ | - |
| --z-action-sheet-close-icon-padding | _0 var(--z-padding-md)_ | - |
| --z-action-sheet-cancel-text-color | _var(--z-gray-7)_ | - |
| --z-action-sheet-cancel-padding-top | _var(--z-padding-xs)_ | - |
| --z-action-sheet-cancel-padding-color | _var(--z-background)_ | - |
| --z-action-sheet-loading-icon-size | _44rpx_ | - |