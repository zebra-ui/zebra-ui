# Popover

### introduce

Pop-up bubble menu.

## Code Demo

### Basic usage

When the Popover pops up, it will be positioned based on the contents of the `reference` slot.

```html
<z-popover
   v-model:show="showPopover"
   :actions="actions"
   placement="bottom-start"
   @select="onSelect"
>
   <template #reference>
     <z-button type="primary"> Light style </z-button>
   </template>
</z-popover>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const showPopover = ref(false);
// Define menu options through the actions attribute
const actions = [
   { text: 'Option 1' },
   { text: 'Option 2' },
   { text: 'Option 3' },
];
const onSelect = (action) => toast.showToast(action.text);
```

### Dark style

Popover supports two styles: light and dark. The default is light style. Set the `theme` attribute to `dark` to switch to dark style.

```html
<z-popover v-model:show="showPopover" theme="dark" :actions="actions">
   <template #reference>
     <z-button type="primary">Dark style</z-button>
   </template>
</z-popover>
```

```js
import { ref } from 'vue';
const showPopover = ref(false);
const actions = [
   { text: 'Option 1' },
   { text: 'Option 2' },
   { text: 'Option 3' },
];
```

### Horizontal arrangement

Setting the `actions-direction` property to `horizontal` causes the menu options to be arranged horizontally.

```html
<z-popover
   v-model:show="showPopover"
   :actions="actions"
   actions-direction="horizontal"
>
   <template #reference>
     <z-button type="primary">Arrange horizontally</z-button>
   </template>
</z-popover>
```

```js
import { ref } from 'vue';
const showPopover = ref(false);
const actions = [
   { text: 'Option 1' },
   { text: 'Option 2' },
   { text: 'Option 3' },
];
```

### Popup location

Use the `placement` attribute to control the pop-up position of the bubble.

```html
<z-popover placement="top" />
```

`placement` supports the following values:

```bash
top # Top middle position
top-start # Top left position
top-end # Top right position
left # left middle position
left-start # The upper left position
left-end # The lower left position
right # middle position on the right
right-start # The upper right position
right-end # The lower right position
bottom # bottom middle position
bottom-start #bottom left position
bottom-end # bottom right position
```

### Display icon

In the `actions` array, the icon of the option can be defined through the `icon` field, which supports passing in the icon name or image link, which is equivalent to the [name attribute](/icon#props) of the Icon component.

```html
<z-popover v-model:show="showPopover" :actions="actions">
   <template #reference>
     <z-button type="primary">Show icon</z-button>
   </template>
</z-popover>
```

```js
import { ref } from 'vue';
const showPopover = ref(false);
const actions = [
   { text: 'Option 1', icon: 'plus-circle' },
   { text: 'Option 2', icon: 'minus-circle' },
   { text: 'Option 3', icon: 'message' }
];
```

### Disable option

In the `actions` array, an option can be disabled via the `disabled` field.

```html
<z-popover v-model:show="showPopover" :actions="actions">
   <template #reference>
     <z-button type="primary">Disable option</z-button>
   </template>
</z-popover>
```

```js
import { ref } from 'vue';
const showPopover = ref(false);
const actions = [
   { text: 'Option 1', disabled: true },
   { text: 'Option 2', disabled: true },
   { text: 'Option 3' },
];
```

### Custom content

Default slots allow you to place any content inside the Popover.

```html
<z-popover
   v-model:show="show.customContent"
   placement="top-start"
   @select="onSelect"
>
   <z-grid
     square
     clickable
     :border="false"
     column-num="3"
     :custom-style="{ width: '480rpx' }"
   >
     <z-grid-item
       v-for="i in 6"
       :key="i"
       icon="image"
       text="options"
       @click="show.customContent = false"
     />
   </z-grid>
   <template #reference>
     <z-button type="primary"> Custom content </z-button>
   </template>
</z-popover>
```

```js
import { ref } from 'vue';
const showPopover = ref(false);
```

### Uncontrolled mode

You can use Popover as a controlled or uncontrolled component:

- When `v-model:show` is bound, Popover is a controlled component, and the display of the component is completely determined by the value of `v-model:show`.
- When `v-model:show` is not bound, Popover is an uncontrolled component. At this time, you can pass in a default value through the `show` attribute, and the display of the component value is controlled by the component itself.

```html
<z-popover :actions="actions" position="top-start" @select="onSelect">
   <template #reference>
     <z-button type="primary">Uncontrolled mode</z-button>
   </template>
</z-popover>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const actions = [
   { text: 'Option 1' },
   { text: 'Option 2' },
   { text: 'Option 3' },
];
const onSelect = (action) => toast.showToast(action.text);
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model:show | Whether to display the bubble popup layer | _boolean_ | `false` |
| actions | option list | _PopoverAction[]_ | `[]` |
| actions-direction | The arrangement direction of the option list, the optional value is `horizontal` | _PopoverActionsDirection_ | `vertical` |
| placement | pop-up position | _PopoverPlacement_ | `bottom` |
| theme | theme style, optional value is `dark` | _PopoverTheme_ | `light` |
| trigger | Trigger mode, optional value is `manual` | _PopoverTrigger_ | `click` |
| duration | animation duration in milliseconds, set to 0 to disable animation | _number \| string_ | `300` |
| offset | offset of occurrence position | _[number, number]_ | `[0, 8]` |
| overlay | whether to display the mask layer | _boolean_ | `false` |
| overlay-class | Custom mask layer class name | _string \| Array \| object_ | - |
| overlay-style | Custom mask layer style | _object_ | - |
| show-arrow | Whether to display small arrows | _boolean_ | `true` |
| close-on-click-action | Whether to close the option after clicking it | _boolean_ | `true` |
| close-on-click-outside | Whether to close the menu after clicking on an external element | _boolean_ | `true` |
| close-on-click-overlay | Whether to close the menu after clicking the overlay | _boolean_ | `true` |
| icon-prefix | Icon class name prefix, equivalent to the [class-prefix attribute](/icon#props) of the Icon component | _string_ | `z-icon` |

### PopoverAction data structure

The `actions` attribute is a number consisting of objectsGroup, each object in the array is configured with one column, and the objects can contain the following values:

| Key name | Description | Type |
| --- | --- | --- |
| text | option text | _string_ |
| icon | The icon to the left of the text, supports passing in the icon name or image link, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ |
| color | option text color | _string_ |
| disabled | Whether it is disabled | _boolean_ |
| className | Add an additional class name for the corresponding option | _string \| Array \| object_ |

### Events

| Event name | Description | Callback parameters |
| --- | --- | --- |
| select | Triggered when an option is clicked | _action: PopoverAction, index: number_ |
| open | Triggered when the menu is opened | - |
| close | Triggered when closing the menu | - |
| opened | Triggered after the menu is opened and the animation ends | - |
| closed | Triggered after the menu is closed and the animation ends | - |
| click-overlay | Triggered when the overlay layer is clicked | _event: MouseEvent_ |

### Slots

| Name | Description | Parameters |
| --- | --- | --- |
| default | Custom menu content | - |
| reference | The content of the element that triggers the Popover to display | - |
| action | Custom option content | _{ action: PopoverAction, index: number }_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-popover-arrow-size | _12rpx_ | - |
| --z-popover-radius | _var(--z-radius-lg)_ | - |
| --z-popover-action-width | _256rpx_ | - |
| --z-popover-action-height | _88rpx_ | - |
| --z-popover-action-font-size | _var(--z-font-size-md)_ | - |
| --z-popover-action-line-height | _var(--z-line-height-md)_ | - |
| --z-popover-action-icon-size | _40rpx_ | - |
| --z-popover-horizontal-action-height | _68rpx_ | - |
| --z-popover-horizontal-action-icon-size | _32rpx_ | - |
| --z-popover-light-text-color | _var(--z-text-color)_ | - |
| --z-popover-light-background | _var(--z-background-2)_ | - |
| --z-popover-light-action-disabled-text-color | _var(--z-text-color-3)_ | - |
| --z-popover-dark-text-color | _var(--z-white)_ | - |
| --z-popover-dark-background | _#4a4a4a_ | - |
| --z-popover-dark-action-disabled-text-color | _var(--z-text-color-2)_ | - |