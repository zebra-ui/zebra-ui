# Progress progress bar

### introduce

Used to display the current progress of the operation.

## Code Demo

### Basic usage

The progress bar is blue by default, use the `percentage` property to set the current progress.

```html
<z-progress :percentage="50" />
```

### Line thickness

The thickness of the progress bar can be set with `stroke-width`.

```html
<z-progress :percentage="50" stroke-width="8" />
```

### Grayed out

Setting the `inactive` property will make the progress bar gray.

```html
<z-progress inactive :percentage="50" />
```

### Style customization

You can use the `pivot-text` attribute to customize the text and the `color` attribute to customize the progress bar color.

```html
<z-progress pivot-text="orange" color="#f2826a" :percentage="25" />
<z-progress pivot-text="Red" color="#ee0a24" :percentage="50" />
<z-progress
   :percentage="75"
   pivot-text="Purple"
   pivot-color="#7232dd"
   color="linear-gradient(to right, #be99ff, #7232dd)"
/>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| percentage | progress percentage | _number \| string_ | `0` |
| stroke-width | Progress bar thickness, default unit is `px` | _number \| string_ | `8rpx` |
| color | progress bar color | _string_ | `#1989fa` |
| track-color | track color | _string_ | `#e5e5e5` |
| pivot-text | progress text content | _string_ | percentage |
| pivot-color | Progress text background color | _string_ | Same as progress bar color |
| text-color | Progress text color | _string_ | `white` |
| inactive | whether to gray out | _boolean_ | `false` |
| show-pivot | Whether to display progress text | _boolean_ | `true` |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
|-------------------------------- |-------------------------- | ---- |
| --z-progress-height | _8rpx_ | - |
| --z-progress-color | _var(--z-primary-color)_ | - |
| --z-progress-inactive-color | _var(--z-gray-5)_ | - |
| --z-progress-background | _var(--z-gray-3)_ | - |
| --z-progress-pivot-padding | _0 10rpx_ | - |
| --z-progress-pivot-text-color | _var(--z-white)_ | - |
| --z-progress-pivot-font-size | _var(--z-font-size-xs)_ | - |
| --z-progress-pivot-line-height | _1.6_ | - |
| --z-progress-pivot-background | _var(--z-primary-color)_ | - |