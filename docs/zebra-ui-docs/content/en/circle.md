# Circle

### introduce

A circular progress bar component that supports progress gradient animation.

## Code Demo

### Basic usage

The `rate` attribute represents the target progress of the progress bar, and `v-model:current-rate` represents the real-time progress during the animation. When `rate` changes, `v-model:current-rate` will change at `speed` until it reaches the value set by `rate`.

```html
<z-circle
   v-model:current-rate="currentRate1"
   :rate="rate"
   :speed="100"
   :text="currentRate1.toFixed(0) + '%'"
/>
```

```js
import { ref } from 'vue'
const rate = ref(70)
const currentRate1 = ref(0)
```

### Width customization

Control the width of the progress bar through the `stroke-width` property.

```html
<z-circle
   v-model:current-rate="currentRate3"
   :rate="rate"
   :speed="100"
   :stroke-width="10"
   text="Customized width"
/>
```

### Color customization

Use the `color` property to control the progress bar color, and the `layer-color` property to control the track color.

```html
<z-circle
   v-model:current-rate="currentRate3"
   color="#ee0a24"
   :rate="rate"
   layer-color="#ebedf0"
   :speed="100"
   text="Color customization"
/>
```

### Gradient color

The `color` property supports passing in an object format to define gradient colors.

```html
<z-circle
   v-model:current-rate="currentRate"
   :rate="rate"
   :speed="100"
   :color="gradientColor"
   text="gradient color"
/>
```

```js
const gradientColor = {
   '0%': '#3fecff',
   '100%': '#6149f6'
}
```

### Counterclockwise

Set `clockwise` to `false` and progress will start in a counter-clockwise direction.

```html
<z-circle
   v-model:current-rate="currentRate4"
   color="#07c160"
   :rate="rate"
   :speed="100"
   :clockwise="false"
   text="Counterclockwise"
/>
```

### Size customization

Set the ring diameter via the `size` property.

```html
<z-circle
   v-model:current-rate="currentRate4"
   color="#7232dd"
   :rate="rate"
   :speed="100"
   :size="140"
   text="Customized size"
/>
```

### starting point

The progress bar starts from the top by default, and the starting position can be set through the `start-position` property.

```html
<z-circle
   v-model:current-rate="currentRate"
   :rate="rate"
   text="left"
   start-position="left"
/>
<z-circle
   v-model:current-rate="currentRate"
   :rate="rate"
   text="right"
   start-position="right"
/>
<z-circle
   v-model:current-rate="currentRate"
   :rate="rate"
   text="bottom"
   start-position="bottom"
/>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model:current-rate | Current progress | _number_ | - |
| rate | target progress | _number \| string_ | `100` |
| size | Ring diameter, default unit is `px` | _number \| string_ | `100px` |
| color | Progress bar color, passing in object format can define gradient color | _string \| object_ | `#1989fa` |
| layer-color | track color | _string_ | `white` |
| fill | fill color | _string_ | `none` |
| speed | Animation speed (unit: rate/s) | _number \| string_ | `0` |
| text | text | _string_ | - |
| stroke-width | progress bar width | _number \| string_ | `40` |
| stroke-linecap | The shape of the endpoint of the progress bar, optional values ​​are `square` `butt` | _string_ | `round` |
| clockwise | Whether to increase clockwise | _boolean_ | `true` |
| start-position | Progress starting position, optional values ​​are `left`, `right`, `bottom` | _CircleStartPosition_ | `top` |

### Slots

| Name | Description |
| ------- | --------------- |
| default | Custom text content |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
|-------------------------------- | -------------------------- | ---- |
| --z-circle-size | _200rpx_ | - |
| --z-circle-color | _var(--z-primary-color)_ | - |
| --z-circle-layer-color | _var(--z-white)_ | - |
| --z-circle-text-color | _var(--z-text-color)_ | - |
| --z-circle-text-font-weight | _var(--z-font-bold)_ | - |
| --z-circle-text-font-size | _var(--z-font-size-md)_ | - |
| --z-circle-text-line-height | _var(--z-line-height-md)_ | - |