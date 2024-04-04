# Popup popup layer

### introduce

Pop-up layer container, used to display pop-up windows, information prompts, etc.

## Code Demo

### Basic usage

Use `v-model:show` to control whether the popup layer is displayed.

```html
<z-cell title="Show popup layer" is-link @click="show = true" />
<z-popup v-model:show="show">
   <view class="popup-content"> Content </view>
</z-popup>
```

```js
import { ref } from 'vue';
const show = ref(false)
```

```css
<style lang="scss" scoped>
.demo-popup {
   .popup-content {
     padding: 100rpx;
     color: var(--z-text-color);
   }
}
</style>
```

### Popup location

Set the pop-up position of the pop-up window through the `position` attribute. The default is a centered pop-up, which can be set to `top`, `bottom`, `left`, `right`.

:::tips
When a popup pops up from the top or bottom, the default width remains consistent with the screen width, and the popup height depends on the height of the content.

When the pop-up window pops up from the left or right side, the width and height are not set by default. The width and height of the pop-up window depend on the width and height of the content.
:::

```html
<!-- Top pop-up -->
<z-popup
   v-model:show="showTop"
   position="top"
   :custom-style="{ height: '30%' }"
></z-popup>

<!-- Bottom pop-up -->
<z-popup
   v-model:show="showBottom"
   position="bottom"
   :custom-style="{ height: '30%' }"
></z-popup>

<!-- Pop up on the left -->
<z-popup
   v-model:show="showLeft"
   position="left"
   :custom-style="{ width: '30%', height: '100%' }"
/>

<!-- Pop up on the right -->
<z-popup
   v-model:show="showRight"
   position="right"
   :custom-style="{ width: '30%', height: '100%' }"
/>
```

### Close icon

After setting the `closeable` attribute, the close icon will be displayed in the upper right corner of the pop-up layer, and the icon can be customized through the `close-icon` attribute, and the icon position can be customized using the `close-icon-position` attribute.

```html
<z-popup
   v-model:show="showClose"
   closeable
   position="bottom"
   :custom-style="{ height: '30%' }"
></z-popup>
<!-- Custom icon -->
<z-popup
   v-model:show="showCloseCustom"
   closeable
   close-icon="close-circle"
   position="bottom"
   :custom-style="{ height: '30%' }"
></z-popup>
<!-- Icon position -->
<z-popup
   v-model:show="showClosePosition"
   closeable
   close-icon-position="top-left"
   position="bottom"
   :custom-style="{ height: '30%' }"
></z-popup>
```

### Rounded pop-up window

After setting the `round` attribute, the pop-up window will add different rounded corner styles according to the pop-up position.

```html
<!-- Rounded pop-up window (centered) -->
<z-popup v-model:show="showRadiusCenter" round>
   <view class="popup-content"> Content </view>
</z-popup>

<!-- Rounded pop-up window (bottom) -->
<z-popup
   v-model:show="showRadiusBottom"
   round
   position="bottom"
   :custom-style="{ height: '30%' }"
></z-popup>
```

### Listen for click events

Popup supports the following click events:

- `click`: Triggered when the popup layer is clicked.
- `click-overlay`: Triggered when the mask layer is clicked.
- `click-close-icon`: Triggered when the close icon is clicked.

```html
<z-cell title="Click event" is-link @click="showEvent = true" />
<z-popup
   v-model:show="showEvent"
   position="bottom"
   closeable
   :custom-style="{ height: '30%' }"
   @click-overlay="onClickOverlay"
   @click-close-icon="onClickCloseIcon"
></z-popup>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const onClickOverlay = () => {
   toast.showToast('click-overlay')
}
const onClickCloseIcon = () => {
   toast.showToast('click-close-icon')
}
```

### Listen to display events

When a Popup is opened or closed, the following events are triggered:

- `open`: Triggered immediately when the popup layer is opened.
- `opened`: Triggered after the popup layer is opened and the animation ends.
- `close`: Triggered immediately when closing the popup layer.
- `closed`: Triggered after the popup layer is closed and the animation ends.

```html
<z-cell title="Show closing event" is-link @click="showEventHide = true" />
<z-popup
   v-model:show="showEventHide"
   position="bottom"
   closeable
   :custom-style="{ height: '30%' }"
   @open="toast.showToast('open')"
   @opened="toast.showToast('opened')"
   @close="toast.showToast('close')"
   @closed="toast.showToast('closed')"
></z-popup>
```

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model:show | Whether to display the popup layer | _boolean_ | `false` |
| overlay | whether to display the mask layer | _boolean_ | `true` |
| position | Pop-up position, optional values are `top` `bottom` `right` `left` | _string_ | `center` |
| overlay-class | Custom mask layer class name | _string \| Array \| object_ | - |
| overlay-style | Custom mask layer style | _object_ | - |
| duration | animation duration in milliseconds, set to 0 to disable animation | _number \| string_ | `300` |
| z-index | Set the z-index level of the pop-up window to a fixed value | _number \| string_ | `2000+` |
| round | Whether to display rounded corners | _boolean_ | `false` |
| lock-scroll | Whether to lock background scrolling | _boolean_ | `true` |
| close-on-click-overlay | Whether to close the overlay after clicking it | _boolean_ | `true` |
| closeable | Whether to display the close icon | _boolean_ | `false` |
| close-icon | Close the icon name or image link, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | `close` |
| close-icon-position | Close icon position, optional values are `top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
| before-close | Callback function before closing, return `false` to prevent closing, support returning Promise | _(action: string) => boolean \| Promise\<boolean\>_ | - |
| icon-prefix | Icon class name prefix, equivalent to the [class-prefix attribute](/icon#props) of the Icon component | _string_ | `z-icon` |
| transition | animation class name, equivalent to the `name` attribute of the [transition](/transition) component | _string_ | - |
| safe-area-inset-top | Whether to enable top safe area adaptation | _boolean_ | `false` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `false` |
| customStyle | custom style | _object_ | - |
| customClass | Custom class name | _string_ | - |
| closeIconStyle | Custom close icon style | _object_ | - |


### Events

| Event name | Description | Callback parameters |
| ---------------- | -------------------------- | -------------------- |
| click | Triggered when the popup layer is clicked | _event_ |
| click-overlay | Triggered when the overlay layer is clicked | _event_ |
| click-close-icon | Triggered when the close icon is clicked | _event_ |
| open | Triggered immediately when the popup layer is opened | - |
| close |Triggered immediately when the popup layer is closed | - |
| opened | Triggered after the popup layer is opened and the animation ends | - |
| closed | Triggered after the popup layer is closed and the animation ends | - |

### Slots

| Name | Description |
| --------------- | ---------- |
| default | pop-up content |
| overlay-content | The content of the mask layer |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ---------------------------------- | ------------------------------------ | ---- |
| --z-popup-background | _var(--z-background-2)_ | - |
| --z-popup-transition | _transform var(--z-duration-base)_ | - |
| --z-popup-round-radius | _32rpx_ | - |
| --z-popup-close-icon-size | _44rpx_ | - |
| --z-popup-close-icon-color | _var(--z-gray-5)_ | - |
| --z-popup-close-icon-margin | _32rpx_ | - |
| --z-popup-close-icon-z-index | _1_ | - |