# Notify message prompt

### introduce

Display message prompts at the top of the page, supporting component calling and function calling.

### Function call

In order to facilitate the use of `Notify`, zebra provides a series of auxiliary functions through which global message prompts can be quickly evoked.

For example, using the `showNotify` function, the corresponding prompt will be rendered directly on the page after being called.

```js
import { useNotify } from '../../uni_modules/zebra-ui'
const notify = useNotify()
notify.showNotify({
   message: 'Notification content',
   type
})
```

## Code Demo

### Basic usage

```js
import { useNotify } from '../../uni_modules/zebra-ui'
const notify = useNotify()
// Automatically close after 3 seconds
notify.showNotify('notification content');
//Actively close
notify.closeNotify();
```

### Notification type

Supports four notification types: `primary`, `success`, `warning`, and `danger`. The default is `danger`.

```js
import { useNotify } from '../../uni_modules/zebra-ui'
const notify = useNotify()

// Main notification
notify.showNotify({ type: 'primary', message: 'Notification content' });

// Success notification
notify.showNotify({ type: 'success', message: 'Notification content' });

// danger notification
notify.showNotify({ type: 'danger', message: 'Notification content' });

// warning notification
notify.showNotify({ type: 'warning', message: 'Notification content' });
```

### Custom notifications

Customize the color, position and display duration of message notifications.

```js
notify.showNotify({
   message: 'Custom color',
   color: '#ad0000',
   background: '#ffe1e1',
});

notify.showNotify({
   message: 'Custom location',
   position: 'bottom',
});

notify.showNotify({
   message: 'Custom duration',
   duration: 1000,
});
```

### Using Notify component

If you need to embed components or other custom content within Notify, you can use the Notify component directly and customize it using the default slot.

```html
<z-cell is-link title="Use Notify component" @click="showComponentCall" />
<z-notify
   v-model:show="show"
   type="success"
   custom-navbar
   use-component
>
   <z-icon name="notification" />
   <text style="margin-left: 8rpx">Content</text>
</z-notify>
```

```js
const show = ref(false)
const showComponentCall = () => {
   show.value = true
   setTimeout(() => {
     show.value = false
   }, 2000)
}
```

## API

### method

Zebra exports the following Notify related auxiliary functions:

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| showNotify | Show Notify at the top of the page | `NotifyOptions \| string` | notify instance |
| closeNotify | Close the currently displayed Notify | - | `void` |
| setNotifyDefaultOptions | Modify the default configuration, affecting all `showNotify` calls | `NotifyOptions` | `void` |
| resetNotifyDefaultOptions | Resets the default configuration, affecting all `showNotify` calls | - | `void` |

### NotifyOptions

When calling methods such as `showNotify`, the following options are supported:

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| type | Type, optional values are `primary` `success` `warning` | _NotifyType_ | `danger` |
| message | display copy | _string_ | - |
| duration | display duration (ms), when the value is 0, notify will not disappear | _number \| string_ | `3000` |
| z-index | Set the component's z-index level to a fixed value | _number \| string_ | `2000+` |
| position | Pop-up position, optional value is `bottom` | _NotifyPosition_ | `top` |
| color | font color | _string_ | `white` |
| background | background color | _string_ | - |
| className | Custom class name | _string \| Array \| object_ | - |
| lockScroll | Whether to lock background scrolling | _boolean_ | `false` |
| onClick | Callback function when clicked | _(event: MouseEvent): void_ | - |
| onOpened | Callback function after full display | _() => void_ | - |
| onClose | Callback function when closing | _() => void_ | - |

### Props

When calling `Notify` through a component, the following Props are supported:

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model:show | Whether to display notifications | _boolean_ | `false` |
| type | Type, optional values are `primary` `success` `warning` | _NotifyType_ | `danger` |
| message | display copy | _string_ | - |
| z-index | Set the component's z-index level to a fixed value | _number \| string_ | `2000+` |
| position | Pop-up position, optional value is `bottom` | _NotifyPosition_ | `top` |
| color | font color | _string_ | `white` |
| background | background color | _string_ | - |
| class-name | Custom class name | _string \| Array \| object_ | - |
| lock-scroll | Whether to lock background scrolling | _boolean_ | `false` |

### Events

When calling `Notify` through a component, the following events are supported:

| Event name | Description | Callback parameters |
| ------ | -------------------- | ------------------- |
| click | callback function when clicked | _event: MouseEvent_ |
| close | callback function when closing | - |
| opened | callback function after full display | - |

### Slots

When calling `Notify` through a component, the following slots are supported:

| Name | Description |
| ------- | ---------- |
| default | custom content |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-notify-text-color | _var(--z-white)_ | - |
| --z-notify-padding | _var(--z-padding-xs) var(--z-padding-md)_ | - |
| --z-notify-font-size | _var(--z-font-size-md)_ | - |
| --z-notify-line-height | _var(--z-line-height-md)_ | - |
| --z-notify-primary-background | _var(--z-primary-color)_ | - |
| --z-notify-success-background | _var(--z-success-color)_ | - |
| --z-notify-danger-background | _var(--z-danger-color)_ | - |
| --z-notify-warning-background | _var(--z-warning-color)_ | - |