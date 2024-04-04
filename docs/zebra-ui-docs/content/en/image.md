# Image picture

### introduce

Based on the `image` component of `uniapp`, it provides loading prompts and loading failure prompts.

## Code Demo

### Basic usage

The basic usage is the same as the `image` component of the native `uniapp`, and you can set the `src`, `width`, `height` and other attributes.

```html
  <z-image width="100" height="100" src="https://cdn.zebraui.com/zebra-ui/images/demo.jpg" />
```

### Fill mode

The image filling mode can be set through the `mode` attribute, which is equivalent to the [mode](https://uniapp.dcloud.net.cn/component/image.html) attribute of uniapp. For optional values, see `image` of `uniapp` components.

```html
<z-image
   width="150rpx"
   height="150rpx"
   :mode="item"
   :src="imageUrl"
/>
```

### Crop

The image cropping position can be set through the `mode` attribute. For optional values, see the `image` component of `uniapp`.

```html
<z-image
   width="150rpx"
   height="150rpx"
   :mode="item"
   :src="imageUrl"
/>
```

### Circle picture

You can set the image to be rounded through the `round` attribute

```html
  <z-image round width="100" height="100" :src="imageUrl" />
```

### Loading prompt

The `Image` component provides a default loading prompt and supports custom content through the `loading` slot.

```html
  <z-image show-loading width="100" height="100" />
  <!-- Custom loading prompt -->
  <z-image show-loading width="100" height="100">
     <template #loading>
       <z-loading type="spinner" size="40rpx" />
     </template>
   </z-image>
```

### Loading failure prompt

The `Image` component provides a default loading failure prompt and supports custom content through the `error` slot.

```html
<z-image show-error width="100" height="100" src="x" />
<!-- Customized loading failure prompt -->
<z-image show-error width="100" height="100" src="x">
   <template #error> Loading failed </template>
</z-image>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| src | Image link | _string_ | - |
| mode | Image cropping and scaling mode, equivalent to uniapp's [mode](https://uniapp.dcloud.net.cn/component/image.html) attribute | _string_ | `fill` |
| width | Width, default unit is `px` | _number \| string_ | - |
| height | height, default unit is `px` | _number \| string_ | - |
| radius | Fillet size, default unit is `px` | _number \| string_ | `0` |
| round | Whether to display as a circle | _boolean_ | `false` |
| block | Whether to set the root node as a block-level element, by default an `inline-block` element | _boolean_ | `false` |
| show-error | Whether to display image loading failure prompts | _boolean_ | `true` |
| show-loading | Whether to display the image loading prompt | _boolean_ | `true` |
| error-icon | The icon name or image link prompted when failure occurs, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | `error-fill` |
| loading-icon | The icon name or image link prompted when loading, equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | `image-fill` |
| icon-size | The size of the loading icon and the failure icon | _number \| string_ | - |
| icon-prefix | Icon class name prefix, equivalent to the [class-prefix attribute](/icon#props) of the Icon component | _string_ | `z-icon` |
| customStyle | custom style | _object_ | - |

### mode valid values

|Mode |Value|Description|
|--------|-----|-----|
| Scale |scaleToFill| Scale the image without maintaining the aspect ratio, so that the width and height of the image are completely stretched to fill the image element |
| Scale | aspectFit | Scale the image while maintaining the aspect ratio so that the long side of the image is fully displayed. |
|Zoom|aspectFill|Scale the image while maintaining the aspect ratio, ensuring that only the short side of the image can be fully displayed. |
|Scale|widthFix|The width remains unchanged, the height changes automatically, and the aspect ratio of the original image remains unchanged|
|Scale|heightFix|The height remains unchanged, the width changes automatically, and the aspect ratio of the original image remains unchanged |
|crop|top|Do not scale the image, only show the top area of the image|
|Crop|bottom|Do not scale the image, only show the bottom area of the image|
|Crop|center|Does not scale the image, only displays the middle area of the image|
|Crop|left|Do not scale the image, only display the left area of the image|
|Crop|right|Do not scale the image, only show the right area of the image|
|Crop|top left|Do not scale the image, only display the upper left area of the image|
|Crop|top right|Do not scale the image, only display the upper right area of the image|
|Crop|bottom left|Do not scale the image, only display the lower left area of the image|
|Crop|bottom right|Do not scale the image, only display the lower right area of the image|


### Events

| Event name | Description | Callback parameters |
| ------ | ------------------ | ------------------ |
| click | Triggered when the image is clicked | _event_ |
| load | Triggered when the image is loaded | _event_ |
| error | Triggered when image loading fails | - |

### Slots

| Name | Description |
| ------- | -------------------------- |
| default | Customize the content below the image |
| loading | Customize loading prompt content |
| error | Customize the prompt content when loading fails |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ---------------------------------- | -------------------------- | ---- |
| --z-image-placeholder-text-color | _var(--z-text-color-2)_ | - |
| --z-image-placeholder-font-size | _var(--z-font-size-md)_ | - |
| --z-image-placeholder-background | _var(--z-background)_ | - |
| --z-image-loading-icon-size | _64rpx_ | - |
| --z-image-loading-icon-color | _var(--z-gray-4)_ | - |
| --z-image-error-icon-size | _64rpx_ | - |
| --z-image-error-icon-color | _var(--z-gray-4)_ | - |