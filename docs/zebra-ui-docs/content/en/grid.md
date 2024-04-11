# Grid Gongge

### introduce

The grid can divide the page into equal-width blocks in the horizontal direction for displaying content or page navigation.

## Code Demo

### Basic usage

Use the `icon` attribute to set the icon in the grid, and the `text` attribute to set the text content.

```html
<z-grid>
   <z-grid-item v-for="i in 4" :key="i" icon="image" text="text" />
</z-grid>
```

### Customize the number of columns

By default, four grids are displayed in one row, and the number of columns can be customized through `column-num`.

```html
<z-grid :column-num="3">
   <z-grid-item v-for="i in 6" :key="i" icon="image" text="text" />
</z-grid>
```

### Custom content

The content displayed in the grid can be customized through slots.

```html
<z-grid :border="false" :column-num="3">
   <z-grid-item>
     <z-image
       mode="widthFix"
       src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg"
     />
   </z-grid-item>
   <z-grid-item>
     <z-image
       mode="widthFix"
       src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg"
     />
   </z-grid-item>
   <z-grid-item>
     <z-image
       mode="widthFix"
       src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg"
     />
   </z-grid-item>
</z-grid>
```

### Square grid

After setting the `square` property, the height of the grid will be consistent with the width.

```html
<z-grid square>
   <z-grid-item v-for="i in 8" :key="i" icon="image" text="text" />
</z-grid>
```

### Grid spacing

Set the distance between grids through the `gutter` property.

```html
<z-grid :gutter="10">
   <z-grid-item v-for="i in 8" :key="i" icon="image" text="text" />
</z-grid>
```

### Contents arranged horizontally

Set the `direction` attribute to `horizontal` to arrange the contents of the grid horizontally.

```html
<z-grid direction="horizontal" :column-num="3">
   <z-grid-item icon="image" text="text" />
   <z-grid-item icon="image" text="text" />
   <z-grid-item icon="image" text="text" />
</z-grid>
```

### Logo Tips

After setting the `dot` attribute, a small red dot will be displayed in the upper right corner of the icon. After setting the `badge` attribute, the corresponding logo will be displayed in the upper right corner of the icon.

```html
<z-grid :column-num="2">
   <z-grid-item icon="home" text="text" dot />
   <z-grid-item icon="search" text="text" badge="99+" />
</z-grid>
```

## API

### Grid Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| column-num | column number | _number \| string_ | `4` |
| icon-size | Icon size, default unit is `px` | _number \| string_ | `56rpx` |
| gutter | The spacing between grids, the default unit is `px` | _number \| string_ | `0` |
| border | Whether to display the border | _boolean_ | `true` |
| center | Whether to center the grid content | _boolean_ | `true` |
| square | Whether to fix the grid to a square | _boolean_ | `false` |
| clickable | Whether to enable grid click feedback | _boolean_ | `false` |
| direction | The direction in which the grid content is arranged, the optional value is `horizontal` | _string_ | `vertical` |
| reverse | Whether to swap the positions of icons and text | _boolean_ | `false` |

### GridItem Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| text | text | _string_ | - |
| icon | Icon name or image link, equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | - |
| icon-prefix | Icon class name prefix, equivalent to the [class-prefix attribute](/icon#props) of the Icon component | _string_ | `z-icon` |
| icon-color | Icon color, equivalent to the [color property](/icon#props) of the Icon component | _string_ | - |
| dot | Whether to display the small red dot in the upper right corner of the icon | _boolean_ | `false` |
| badge | The content of the logo in the upper right corner of the icon | _number \| string_ | - |
| badge-props | Customize the properties of the logo. The incoming object will be transparently passed to [Badge component props](/badge#props) | _BadgeProps_ | - |

### GridItem Events

| Event name | Description | Callback parameters |
| ------ | -------------- | ------------------- |
| click | Triggered when the grid is clicked | _event: MouseEvent_ |

### GridItem Slots

| Name | Description |
| ------- | -------------------- |
| default | All contents of custom palace grid |
| icon | custom icon |
| text | Custom text |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-grid-item-content-padding | _var(--z-padding-md) var(--z-padding-xs)_ | - |
| --z-grid-item-content-background | _var(--z-background-2)_ | - |
| --z-grid-item-content-active-color | _var(--z-active-color)_ | - |
| --z-grid-item-icon-size | _56rpx_ | - |
| --z-grid-item-text-color | _var(--z-text-color)_ | - |
| --z-grid-item-text-font-size | _var(--z-font-size-sm)_ | - |