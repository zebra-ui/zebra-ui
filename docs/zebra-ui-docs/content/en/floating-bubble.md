# FloatingBubble Floating Bubble

### introduce

Clickable bubbles that float at the edge of the page.

## Code Demo

### Basic usage

Floating bubbles are displayed in the lower right corner by default and allow dragging up and down in the y-axis direction. You can set the icon of the bubble through the `icon` property.

```html
<z-floating-bubble icon="setting-fill" @click="onClick" />
```

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const onClick = () => {
   toast.showToast('Click on the bubble')
}
```

### Free drag and magnet attraction

Allows dragging in the x- and y-axis directions, and snaps to the nearest side in the x-axis direction.

```html
<z-floating-bubble
   axis="xy"
   icon="setting-fill"
   magnetic="x"
   @offset-change="onOffsetChange"
/>
```

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const onOffsetChange = (offset: any) => {
   toast.showToast(`x: ${offset.x.toFixed(0)}, y: ${offset.y.toFixed(0)}`)
}
```

### Two-way binding

Use `v-model:offset` to control the position of the FloatingBubble.

```html
<z-floating-bubble v-model:offset="offset" axis="xy" icon="chat" />
```

```js
const offset = ref({ x: 200, y: 400 })
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model:offset | Control bubble position | _OffsetType_ | `Default lower right corner coordinate` |
| axis | The direction of dragging, `xy` means free dragging, `lock` means dragging prohibited | _'x' \| 'y' \| 'xy' \| 'lock'_ | `y` |
| magnetic | The direction of automatic magnetic attraction | _'x' \| 'y'_ | - |
| icon | Bubble icon name or image link, equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | - |
| gap | The minimum distance between the bubble and the window, in `px` | _number_ | `24` |

### Events

| Event name | Description | Callback parameters |
| ------------- | ---------------------------- | ------------------------ |
| click | Triggered when the component is clicked | _MouseEvent_ |
| offset-change | Triggered when the position changes due to user dragging | _{x: string, y: string}_ |

### Slots

| Name | Description |
| ------- | ------------------ |
| default | Customize bubble display content |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-floating-bubble-size | _96rpx_ | - |
| --z-floating-bubble-initial-gap | _48rpx_ | - |
| --z-floating-bubble-icon-size | _56rpx_ | - |
| --z-floating-bubble-background | _var(--z-primary-color)_ | - |
| --z-floating-bubble-color | _var(--z-background-2)_ | - |
| --z-floating-bubble-z-index | _999_ | - |
| --z-floating-bubble-border-radius | _--z-floating-bubble-border-radius_ | - |