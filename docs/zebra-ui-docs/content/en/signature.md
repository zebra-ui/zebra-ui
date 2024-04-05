
# Signature Signature

### introduce

Components for signature scenarios.

## Code Demo

### Basic usage

When the confirm button is clicked, the component will trigger the `submit` event. The first parameter of the event is `data`, which contains the following fields:

- `image`: The path of the image exported through canvas. This path of the applet is a temporary file path.
- `width`: The width of the image.
- `height`: the height of the image.
- `canvas`: Canvas element.

```html
<z-signature @submit="onSubmit" @clear="onClear" />
<z-image v-if="image" :width="width" :height="height" :src="image" />
```

```js
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const image = ref('')
const onSubmit = (data: any) => {
image.value = data.image
width.value = data.width
height.value = data.height
}
const onClear = () => toast.showToast('clear')
```

### Custom color

Customize stroke color with `pen-color`.

```html
<z-signature pen-color="#ff0000" @submit="onSubmit" @clear="onClear" />
```

### Custom line width

Customize line width with `line-width`.

```html
<z-signature :line-width="6" @submit="onSubmit" @clear="onClear" />
```

### Custom background color

Customize the background color with `background-color`.

```html
<z-signature background-color="#eee" @submit="onSubmit" @clear="onClear" />
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| pen-color | Pen stroke color, default black | _string_ | `#000` |
| line-width | line width | _number_ | `3` |
| background-color | background color | _string_ | - |
| clear-button-text | Clear button text | _string_ | `clear` |
| confirm-button-text | Confirm button copy | _string_ | `Confirm` |

### Events

| Event name | Description | Callback parameters |
| --- | --- | --- |
| start | Triggered when signing starts | - |
| end | Triggered when signing ends | - |
| signing | Triggered during the signing process | _event: TouchEvent_ |
| submit | Triggered when the OK button is clicked | _data: { image: string; canvas: HTMLCanvasElement }_ |
| clear | Triggered when the cancel button is clicked | - |

### method

Signature instances can be obtained through ref and instance methods can be called.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| resize | This method can be called to trigger redrawing when the size of the outer element or the display state of the component changes | - | - |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-signature-padding | _var(--z-padding-xs)_ | - |
| --z-signature-content-height | _400rpx_ | Canvas height |
| --z-signature-content-background | _var(--z-background-2)_ | Canvas background color |
| --z-signature-content-border | _2rpx dotted #dadada_ | Canvas border style |

