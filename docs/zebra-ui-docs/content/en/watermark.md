# Watermark

### introduce

Adding specific text or patterns as watermarks on pages can be used to prevent information theft.

## Code Demo

### Text watermark

Set the text of the watermark through the `content` attribute.

```html
<z-watermark content="Zebra" :full-page="false" />
```

### Image watermark

Set the watermark image through the `image` attribute, and use `opacity` to adjust the overall transparency of the watermark.

```html
  <z-watermark
   :rotate="0"
   image="https://assets-1256020106.cos.ap-beijing.myqcloud.com/zebra-ui/images/logo.png"
   :opacity="0.2"
   :full-page="false"
/>
```

### Custom interval

Control the spacing between multiple repeating watermarks through the `gap-x` and `gap-y` attributes.

```html
<z-watermark
   :rotate="0"
   image="https://assets-1256020106.cos.ap-beijing.myqcloud.com/zebra-ui/images/logo.png"
   :gap-x="30"
   :gap-y="10"
   :opacity="0.2"
   :full-page="false"
/>
```

### Custom tilt angle

Use the `rotate` attribute to control the tilt angle of the watermark. The default value is `-22`.

```html
<view class="demo-watermark-wrapper">
   <z-watermark
     image="https://assets-1256020106.cos.ap-beijing.myqcloud.com/zebra-ui/images/logo.png"
     :rotate="22"
     :opacity="0.2"
     :full-page="false"
   />
</view>
```

### Display range

Use the `full-page` attribute to control the display range of the watermark.

```html
<view class="demo-watermark-wrapper">
   <z-button type="primary" @click="fullPage = !fullPage">
     switch
   </z-button>
   <z-watermark
     :rotate="0"
     :full-page="fullPage"
     :opacity="0.2"
     image="https://assets-1256020106.cos.ap-beijing.myqcloud.com/zebra-ui/images/logo.png"
   >
   </z-watermark>
</view>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| width | watermark width | _number_ | `100` |
| height | watermark height | _number_ | `100` |
| z-index | z-index of watermark | _number \| string_ | `100` |
| content | The content of the text watermark | _string_ | - |
| image | The content of the image watermark. If passed in at the same time as `content`, the image watermark will be used first | _string_ | - |
| rotate | The rotation angle of the watermark | _number \| string_ | `-22` |
| full-page | Whether the watermark is displayed in full screen | _boolean_ | `false` |
| gap-x | Horizontal gap between watermarks | _number_ | `0` |
| gap-y | Vertical gap between watermarks | _number_ | `0` |
| text-color | Text watermark color | _string_ | `#dcdee0` |
| opacity | The transparency of the watermark | _number \| string_ | - |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ----------------------- | ------ | --------------------- |
| --z-watermark-z-index | _100_ | The z-index level of the root node |