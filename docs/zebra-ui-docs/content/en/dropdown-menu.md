# DropdownMenu drop-down menu

### introduce

Pop-down menu list.

## Code Demo

### Basic usage

```html
<z-dropdown-menu>
   <z-dropdown-item v-model="value1" :options="option1" />
   <z-dropdown-item v-model="value2" :options="option2" />
</z-dropdown-menu>
```

```js
import { ref } from 'vue'
const value1 = ref(0)
const value2 = ref('a')
const option1 = [
   { text: 'All products', value: 0 },
   { text: 'New product', value: 1 },
   { text: 'Activity product', value: 2 }
]
const option2 = [
   { text: 'Default sort', value: 'a' },
   { text: 'Praise sorting', value: 'b' },
   { text: 'Sales Sort', value: 'c' }
]
```

### Customize menu content

The content of `DropdownItem` can be customized through slots. In this case, you need to use `close` on the `DropdownMenu` instance or specify the `toggle` method of `DropdownItem` to manually control the display of the menu.

```html
<z-dropdown-menu>
   <z-dropdown-item v-model="value1" :options="option1" />
   <z-dropdown-item title="Filter" ref="item">
     <z-cell center title="Option 1">
       <template #right-icon>
         <z-switch v-model="switch1" />
       </template>
     </z-cell>
     <z-cell center title="Option 2">
       <template #right-icon>
         <z-switch v-model="switch2" />
       </template>
     </z-cell>
     <view style="padding: 10rpx 32rpx">
       <z-button
         type="primary"
         block
         round
         style="height: 80rpx"
         @click="onConfirm"
       >
         confirm
       </z-button>
     </view>
   </z-dropdown-item>
</z-dropdown-menu>
```

```js
import { ref } from 'vue';
const value1 = ref(0)
const option1 = [
   { text: 'All products', value: 0 },
   { text: 'New product', value: 1 },
   { text: 'Activity product', value: 2 }
]
const item = ref()
const switch1 = ref(true)
const switch2 = ref(false)
const onConfirm = () => {
   item.value?.toggle()
}
```

### Customize selected color

The selected color of menu titles and options can be customized through the `active-color` attribute.

```html
<z-dropdown-menu active-color="#ee0a24">
   <z-dropdown-item v-model="value1" :options="option1" />
   <z-dropdown-item v-model="value2" :options="option2" />
</z-dropdown-menu>
```

### Horizontal scrolling

The scrolling threshold can be customized through the `swipe-threshold` property.

```html
<z-dropdown-menu swipe-threshold="4">
   <z-dropdown-item v-model="value1" :options="option1" />
   <z-dropdown-item v-model="value2" :options="option2" />
   <z-dropdown-item v-model="value2" :options="option2" />
   <z-dropdown-item v-model="value2" :options="option2" />
   <z-dropdown-item v-model="value2" :options="option2" />
</z-dropdown-menu>
```

### Expand upward

Set the `direction` attribute value to `up` to expand the menu upwards.

```html
<z-dropdown-menu direction="up">
   <z-dropdown-item v-model="value1" :options="option1" />
   <z-dropdown-item v-model="value2" :options="option2" />
</z-dropdown-menu>
```

### Disable menu

```html
<z-dropdown-menu>
   <z-dropdown-item v-model="value1" disabled :options="option1" />
   <z-dropdown-item v-model="value2" disabled :options="option2" />
</z-dropdown-menu>
```

## API

### DropdownMenu Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| active-color | The selected state color of menu titles and options | _string_ | `#1989fa` |
| direction | Menu expansion direction, optional value is `up` | _string_ | `down` |
| z-index | Menu bar z-index level | _number \| string_ | `10` |
| duration | animation duration in milliseconds, set to 0 to disable animation | _number \| string_ | `200` |
| overlay | whether to display the mask layer | _boolean_ | `true` |
| close-on-click-overlay | Whether to close the menu after clicking the overlay | _boolean_ | `true` |
| close-on-click-outside | Whether to close the menu after clicking on an external element | _boolean_ | `true` |
| swipe-threshold | Scroll threshold, when the number of options exceeds the threshold and the total width exceeds the menu bar width, horizontal scrolling can be performed | _number \| string_ | - |

### DropdownItem Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | The value corresponding to the currently selected item | _number \| string_ | - |
| title | Menu item title | _string_ | Currently selected item text |
| options | options array | _Option[]_ | `[]` |
| disabled | Whether to disable the menu | _boolean_ | `false` |
| title-class | Title extra class name | _string \| Array \| object_ | - |

### DropdownItem Events

| Event name | Description | Callback parameters |
| ------ | -------------------------- | -------- |
| change | Triggered when clicking an option causes value to change | value |
| open | Triggered when the menu bar is opened | - |
| close | Triggered when closing the menu bar | - |
| opened | Triggered after the menu bar is opened and the animation ends | - |
| closed | Triggered after the menu bar is closed and the animation ends | - |

### DropdownItem Slots

| Name | Description |
| ------- | ------------- |
| default | menu content |
| title | Custom menu item title |

### DropdownMenu method

Through ref, you can get the DropdownMenu instance and call the instance method.

| Method name | Description | Parameters | Return value |
| ------ | ----------------------- | ---- | ------ |
| close | Close the display state of all menus | - | - |

### DropdownItem method

Through ref, you can get the DropdownItem instance and call the instance method.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| toggle | Switch the menu display state, pass `true` to display, `false` to hide, pass no parameter to negate | _show?: boolean_ | - |

### Option data structure

| Key name | Description | Type |
| --- | --- | --- |
| text | text | _string_ |
| value | identifier | _number \| string \| boolean_ |
| icon | The icon name or image link on the left, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-dropdown-menu-height | _96rpx_ | - |
| --z-dropdown-menu-background | _var(--z-background-2)_ | - |
| --z-dropdown-menu-shadow | _0 4rpx 24rpx fade(var(--z-gray-7), 12)_ | - |
| --z-dropdown-menu-title-font-size | _30rpx_ | - |
| --z-dropdown-menu-title-text-color | _var(--z-text-color)_ | - |
| --z-dropdown-menu-title-active-text-color | _var(--z-primary-color)_ | - |
| --z-dropdown-menu-title-disabled-text-color | _var(--z-text-color-2)_ | - |
| --z-dropdown-menu-title-padding | _0 var(--z-padding-xs)_ | - |
| --z-dropdown-menu-title-line-height | _var(--z-line-height-lg)_ | - |
| --z-dropdown-menu-option-active-color | _var(--z-primary-color)_ | - |
| --z-dropdown-menu-content-max-height | _80%_ | - |
| --z-dropdown-item-z-index | _10_ | - |