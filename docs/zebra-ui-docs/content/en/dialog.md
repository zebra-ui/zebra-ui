# Dialog popup box

### introduce

Pop-up modal boxes are often used for message prompts, message confirmation, or to complete specific interactive operations within the current page. Supports both component calling and function calling.

### Function call

In order to facilitate the use of `Dialog`, zebra provides a series of auxiliary functions through which global pop-up components can be quickly evoked.

For example, using the `showDialog` function, the corresponding pop-up box will be rendered directly on the page after being called.

```js
import { useDialog } from '../../uni_modules/zebra-ui'
const dialog = useDialog()
dialog.showDialog({ title: 'Title', message: 'This is a sample prompt' })
```

## Code Demo

### notification

Used to prompt some messages, which only contains a confirmation button by default.

```js
import { useDialog } from '../../uni_modules/zebra-ui'
const dialog = useDialog()

dialog.showDialog({ title: 'Title', message: 'This is a sample prompt' })
```

### Message confirmation

Used to confirm messages, including confirm and cancel buttons by default.

```js
dialog.showConfirmDialog({
   title: 'title',
   message: 'This is a sample prompt'
})
```

### Rounded button style

Set the theme option to `round-button` to display a rounded button style popup.

```js
dialog.showDialog({
   title: 'title',
   theme: 'round-button',
   message: 'This is a sample prompt'
})
```

### Asynchronous shutdown

A callback function can be passed in through the `beforeClose` attribute to perform specific operations before the pop-up window is closed.

```js
const showDialogMethod = () => {
   dialog.showConfirmDialog({
     title: 'title',
     message: 'Asynchronous shutdown example',
     beforeClose
   })
}
const beforeClose = (action: any) =>
   new Promise((resolve) => {
     setTimeout(() => {
       // action !== 'confirm' intercepts the cancellation operation
       resolve(action === 'confirm')
     }, 1000)
   })
```

### Using Dialog component

If you need to embed components or other custom content within Dialog, you can use the Dialog component directly and use the default slots for customization.

```html
<z-dialog
   v-model:show="show"
   use-component
   title="title"
   show-cancel-button
>
   <z-picker :columns="columns" :show-toolbar="false" />
</z-dialog>
```

```js
import { ref } from 'vue';
const show = ref(false);
```

## API

### method

Zebra exports the following Dialog-related auxiliary functions:

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| showDialog | Display message prompt pop-up window, including confirmation button by default | _options: DialogOptions_ | `Promise<void>` |
| showConfirmDialog | Display message confirmation pop-up window, including confirm and cancel buttons by default | _options: DialogOptions_ | `Promise<void>` |
| closeDialog | Close the currently displayed pop-up window | - | `void` |
| setDialogDefaultOptions | Modify the default configuration, affecting all `showDialog` calls | _options: DialogOptions_ | `void` |
| resetDialogDefaultOptions | Resets the default configuration, affecting all `showDialog` calls | - | `void` |

### DialogOptions

When calling methods such as `showDialog`, the following options are supported:

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| title | title | _string_ | - |
| width | Pop-up window width, default unit is `px` | _number \| string_ | `320px` |
| message | text content | _string_ | - |
| messageAlign | Content alignment, optional values are `left` `right` | _string_ | `center` |
| theme | Style, optional value is `round-button` | _string_ | `default` |
| className | Custom class name | _string \| Array \| object_ | - |
| showConfirmButton | Whether to display the confirmation button | _boolean_ | `true` |
| showCancelButton | Whether to display the cancel button | _boolean_ | `false` |
| confirmButtonText | Confirm button copy | _string_ | `Confirm` |
| confirmButtonColor | Confirm button color | _string_ | `#ee0a24` |
| confirmButtonDisabled | Whether to disable the confirm button | _boolean_ | `false` |
| cancelButtonText | Cancel button copy | _string_ | `Cancel` |
| cancelButtonColor | Cancel button color | _string_ | `black` |
| cancelButtonDisabled | Whether to disable the cancel button | _boolean_ | `false` |
| overlay | whether to display the mask layer | _boolean_ | `true` |
| overlayClass | Custom mask layer class name | _string \| Array \| object_ | - |
| overlayStyle | Custom mask layer style | _object_ | - |
| closeOnClickOverlay | Whether to close the pop-up window after clicking the mask layer | _boolean_ | `false` |
| lockScroll | Whether to lock background scrolling | _boolean_ | `true` |
| beforeClose | Callback function before closing, return `false` to prevent closing, support returning Promise | _(action: string) => boolean \| Promise\<boolean\>_ | - |
| transition | animation class name, equivalent to the `name` attribute of [transition](/transition) | _string_ | - |

### Props

When calling `Dialog` through a component, the following Props are supported:

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model:show | Whether to display the pop-up window | _boolean_ | - |
| title | title | _string_ | - |
| width | Pop-up window width, default unit is `px` | _number \| string_ | `640rpx` |
| message | text content | _string_ | - |
| message-align | Content horizontal alignment, optional values are `left` `right` `justify` | _string_ | `center` |
| theme | Style, optional value is `round-button` | _string_ | `default` |
| show-confirm-button | Whether to show the confirmation button | _boolean_ | `true` |
| show-cancel-button | Whether to show the cancel button | _boolean_ | `false` |
| confirm-button-text | Confirm button copy | _string_ | `Confirm` |
| confirm-button-color | Confirm button color | _string_ | `#ee0a24` |
| confirm-button-disabled | Whether to disable the confirm button | _boolean_ | `false` |
| cancel-button-text | Cancel button text | _string_ | `Cancel` |
| cancel-button-color | Cancel button color | _string_ | `black` |
| cancel-button-disabled | Whether to disable the cancel button | _boolean_ | `false` |
| z-index | Set the z-index level of the pop-up window to a fixed value | _number \| string_ | `2000+` |
| overlay | whether to display the mask layer | _boolean_ | `true` |
| overlay-class | Custom mask layer class name | _string_ | - |
| overlay-style | Custom mask layer style | _object_ | - |
| close-on-click-overlay | Whether to close the pop-up window after clicking the mask layer | _boolean_ | `false` |
| lock-scroll | Whether to lock background scrolling | _boolean_ | `true` |
| before-close | Callback function before closing, return `false` to prevent closing, support returning Promise | _(action: string) => boolean \| Promise\<boolean\>_ | - |
| transition | animation class name, equivalent to the `name` attribute of [transition](/transition) | _string_ | - |

### Events

When calling `Dialog` through a component, the following events are supported:

| Event name | Description | Callback parameters |
| ------- | -------------------------- | -------- |
| confirm | Triggered when the confirm button is clicked | - |
| cancel | Triggered when the cancel button is clicked | - |
| open | Triggered when the pop-up window is opened | - |
| close | Triggered when closing the pop-up window | - |
| opened | Triggered after the pop-up window is opened and the animation ends | - |
| closed | Triggered after the pop-up window is closed and the animation ends | - |

### Slots

When calling `Dialog` through a component, the following slots are supported:

| Name| Description |
| ------- | ------------------ |
| default | custom content |
| title | custom title |
| footer | Customize bottom button area |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-dialog-width | _640rpx_ | - |
| --z-dialog-small-screen-width | _90%_ | - |
| --z-dialog-font-size | _var(--z-font-size-lg)_ | - |
| --z-dialog-transition | _var(--z-duration-base)_ | - |
| --z-dialog-radius | _32rpx_ | - |
| --z-dialog-background | _var(--z-background-2)_ | - |
| --z-dialog-header-font-weight | _var(--z-font-bold)_ | - |
| --z-dialog-header-line-height | _48rpx_ | - |
| --z-dialog-header-padding-top | _52rpx_ | - |
| --z-dialog-header-isolated-padding | _var(--z-padding-lg) 0_ | - |
| --z-dialog-message-padding | _var(--z-padding-lg)_ | - |
| --z-dialog-message-font-size | _var(--z-font-size-md)_ | - |
| --z-dialog-message-line-height | _var(--z-line-height-md)_ | - |
| --z-dialog-message-max-height | _60vh_ | - |
| --z-dialog-has-title-message-text-color | _var(--z-gray-7)_ | - |
| --z-dialog-has-title-message-padding-top | _var(--z-padding-xs)_ | - |
| --z-dialog-button-height | _96rpx_ | - |
| --z-dialog-round-button-height | _72rpx_ | - |
| --z-dialog-confirm-button-text-color | _var(--z-primary-color)_ | - |