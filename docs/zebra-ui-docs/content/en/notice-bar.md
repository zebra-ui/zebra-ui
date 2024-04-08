# NoticeBar

### introduce

Used to loop and display a set of message notifications.

## Code Demo

### Basic usage

Set the content of the notification bar through the `text` property, and set the icon on the left side of the notification bar through the `left-icon` property.

```html
<z-notice-bar
   left-icon="sound"
   scrollable
   text="zebra-swiper is a mobile carousel component developed based on uniapp."
/>
```

### Scroll play

When the content length of the notification bar exceeds, scrolling playback will be automatically enabled. This behavior can be controlled through the `scrollable` attribute.

```html
<!-- When the text is short, enable scrolling playback by setting the scrollable attribute -->
<z-notice-bar
   scrollable
   text="zebra-swiper is a mobile carousel component developed based on uniapp."
/>

<!-- When the text is long, turn off the scrolling playback by disabling the scrollable attribute -->
<z-notice-bar
   :scrollable="false"
   text="zebra-swiper is a mobile carousel component developed based on uniapp."
/>
```

### Multi-line display

When the text is long, you can enable multi-line display by setting the `wrapable` attribute.

```html
<z-notice-bar
   wrapable
   :scrollable="false"
   text="zebra-swiper is a mobile carousel component developed based on uniapp. Zebra-swiper is a mobile carousel component developed based on uniapp."
/>
```

### Notification bar mode

The notification bar supports two modes: `closeable` and `link`.

```html
<!-- closeable mode, display the close button on the right side -->
<z-notice-bar
   mode="closeable"
   text="zebra-swiper is a mobile carousel component developed based on uniapp."
/>

<!-- link mode, display link arrow on the right side -->
<z-notice-bar
   mode="link"
   text="zebra-swiper is a mobile carousel component developed based on uniapp."
/>
```

### Custom style

Set the text color through the `color` property and set the background color through the `background` property.

```html
<z-notice-bar
   text="zebra-swiper is a mobile carousel component developed based on uniapp."
   color="#1989fa"
   background="#ecf9ff"
   left-icon="setting"
/>
```

### Vertical scrolling

With NoticeBar and Swipe components, vertical scrolling effect can be achieved.

```html
<z-notice-bar left-icon="sound" :scrollable="false">
   <z-swipe
     vertical
     :custom-style="{ height: '80rpx', 'line-height': '80rpx' }"
     :autoplay="3000"
     :touchable="false"
     :show-indicators="false"
   >
     <z-swipe-item
       >zebra-swiper is a mobile carousel component developed based on uniapp. </z-swipe-item
     >
     <z-swipe-item>A mobile carousel component. </z-swipe-item>
     <z-swipe-item>zebra-swiper</z-swipe-item>
   </z-swipe>
</z-notice-bar>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| mode | Notification bar mode, optional values are `closeable` `link` | _string_ | `''` |
| text | Notification text content | _string_ | `''` |
| color | Notification text color | _string_ | `#ed6a0c` |
| background | scroll bar background | _string_ | `#fffbe8` |
| left-icon | The left icon name or image link, equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | - |
| delay | Animation delay time (s) | _number \| string_ | `1` |
| speed | scroll speed (px/s) | _number \| string_ | `60` |
| scrollable | Whether to enable scrolling playback, it will be enabled by default when the content length overflows | _boolean_ | - |
| wrapable | Whether to enable text wrapping, only takes effect when scrolling is disabled | _boolean_ | `false` |

### Events

| Event name | Description | Callback parameters |
| ------ | ---------------------------- | ------------------- |
| click | Triggered when the notification bar is clicked | _event: MouseEvent_ |
| close | Triggered when closing the notification bar | _event: MouseEvent_ |
| replay | Fired whenever the scroll bar restarts scrolling | - |

### method

Through ref, you can get the NoticeBar instance and call the instance method.

| Method name | Description | Parameters | Return value |
| ------ | -------------------- | ---- | ------ |
| reset | Reset notification bar to initial state | - | - |

### Slots

| Name | Content |
| ---------- | --------------- |
| default | notification text content |
| left-icon | Customize the left icon |
| right-icon | Customize the right icon |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-notice-bar-height | _80rpx_ | - |
| --z-notice-bar-padding | _0 var(--z-padding-md)_ | - |
| --z-notice-bar-wrapable-padding | _var(--z-padding-xs) var(--z-padding-md)_ | - |
| --z-notice-bar-text-color | _var(--z-orange-dark)_ | - |
| --z-notice-bar-font-size | _var(--z-font-size-md)_ | - |
| --z-notice-bar-line-height | _48rpx_ | - |
| --z-notice-bar-background | _var(--z-orange-light)_ | - |
| --z-notice-bar-icon-size | _32rpx_ | - |
| --z-notice-bar-icon-min-width | _48rpx_ | - |