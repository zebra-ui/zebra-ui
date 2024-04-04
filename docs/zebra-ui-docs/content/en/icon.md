# Icon

### introduce

A font-based icon set that can be used through the Icon component or referenced in other components through the `icon` attribute.

### All icons

zebra-ui provides all icons for easy search. [Click to jump](https://icon.zebraui.com/){target="_blank"}

## Code Demo

### Basic usage

Use the `name` attribute to specify the icon you want to use. Zebra-ui has a built-in icon library (see the example on the right), and you can directly pass in the corresponding name to use.

```html
<z-icon name="smile" />
```

### Use image URL

You can also directly pass an image URL as the icon in the `name` attribute.

```html
<z-icon name="https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png" />
```

### Logo Tips

After setting the `dot` attribute, a small red dot will be displayed in the upper right corner of the icon; after setting the `badge` attribute, the corresponding logo will be displayed in the upper right corner of the icon.

```html
<z-icon name="smile" dot />
<z-icon name="smile" badge="9" />
<z-icon name="smile" badge="99+" />
```

### Icon color

Use the `color` property to set the color of the icon.

```html
<z-icon name="smile" color="#1989fa" />
<z-icon name="smile" color="#ee0a24" />
```

### Icon size

Use the `size` attribute to set the size of the icon. It is recommended to use the `rpx` unit.

```html
<!-- If the unit is not specified, px is used by default -->
<z-icon name="chat-o" size="40" />
<!-- Specify the rpx unit to be used -->
<z-icon name="chat-o" size="80rpx" />
```

### Custom icon

If you need to use more icons based on the existing Icon, you can introduce the font files and CSS files corresponding to the third-party iconfont, and then use them directly in the Icon component.

:::tips
All icons on the homepage in the sample project are introduced through another icon library. For customized icons, please refer to the sample project.
:::

```css
/* Introduce third-party or custom font icon styles */
@font-face {
   font-family: 'zebra-icon';
   /* Project id 4475347 */
   src:
     url('https://at.alicdn.com/t/c/font_4475347_8vf1nif45lx.woff2?t=1710943881998')
       format('woff2'),
     url('https://at.alicdn.com/t/c/font_4475347_8vf1nif45lx?t=1710943881998')
       format('woff'),
     url('https://at.alicdn.com/t/c/font_4475347_8vf1nif45lx?t=1710943881998')
       format('truetype');
}

.zebra-icon {
   font-family: 'zebra-icon' !important;
   font-size: 32rpx;
   font-style: normal;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

.zebra-icon-show-a:before {
   content: '\e663';
}
```

```html
<!-- Specify the class name my-icon through class-prefix -->
<z-icon class-prefix="zebra-icon" name="show-a" />
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| name | Icon name or image link | _string_ | - |
| dot | Whether to display the small red dot in the upper right corner of the icon | _boolean_ | `false` |
| badge | The content of the logo in the upper right corner of the icon | _number \| string_ | - |
| badge-props | Customize the properties of the logo. The incoming object will be transparently passed to [Badge component props](/badge#props) | _BadgeProps_ | - |
| color | icon color | _string_ | `inherit` |
| size | Icon size, such as `20px` `40rpx`, the default unit is `px` | _number \| string_ | `inherit` |
| class-prefix | Class name prefix for using custom icons | _string_ | `z-icon` |

### Events

| Event name | Description | Callback parameters |
| ------ | -------------- | ------------------- |
| click | Triggered when the icon is clicked | _event_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ----------------------- | ---------- | ---- |
| --z-icon-font-family | _'z-icon'_ | - |