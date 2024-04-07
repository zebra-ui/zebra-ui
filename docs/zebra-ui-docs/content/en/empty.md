# Empty Empty state

### introduce

Placeholder prompt when empty.

## Code Demo

### Basic usage

```html
<z-empty description="Description text" />
```

### Image type

The Empty component has a variety of placeholder image types built in, which can be used in different business scenarios.

```html
<!-- General error -->
<z-empty image="error" description="Description text" />
<!-- Network error -->
<z-empty image="network" description="description text" />
<!-- Search tips -->
<z-empty image="search" description="Description text" />
```

### Custom size

The size of the image via the `image-size` attribute.

```html
<z-empty image-size="500rpx" description="Description text" />
```

Set `image-size` to array format, and you can set the width and height separately. The first item in the array corresponds to the width, and the second item in the array corresponds to the height.

```html
<z-empty :image-size="[60, 40]" description="Description text" />
```

### Custom pictures

When you need to customize the image, you can pass in any image URL in the image attribute.

```html
<z-empty
   image="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg"
   :image-size="80"
   description="description text"
/>
```

### Bottom content

Content can be inserted below the Empty component through the default slot.

```html
<z-empty description="description text">
   <z-button
     type="primary"
     round
     :custom-style="{ width: '300rpx' }"
     class="bottom-button"
   >
     button
   </z-button>
</z-empty>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| image | Image type, optional values are `error` `network` `search`, supports passing in image URL | _string_ | `default` |
| image-size | Image size, default unit is `px` | _number \| string \| Array_ | - |
| description | Description text under the image | _string_ | - |

### Slots

| Name | Description |
| ----------- | --------------- |
| default | Custom bottom content |
| image | custom icon |
| description | Custom description text |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ---------------------------------- | ---------------------------- | ---- |
| --z-empty-padding | _var(--z-padding-xl) 0_ | - |
| --z-empty-image-size | _320rpx_ | - |
| --z-empty-description-margin-top | _var(--z-padding-md)_ | - |
| --z-empty-description-padding | _0 120rpx_ | - |
| --z-empty-description-color | _var(--z-text-color-2)_ | - |
| --z-empty-description-font-size | _var(--z-font-size-md)_ | - |
| --z-empty-description-line-height | _var(--z-line-height-md)_ | - |
| --z-empty-bottom-margin-top | _48rpx_ | - |