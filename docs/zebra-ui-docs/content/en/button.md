# Button

### introduce

Buttons are often used to trigger actions.

## Code Demo

### Button type

The button supports five types: `default`, `primary`, `success`, `warning`, and `danger`. The default is `default`.

```html
<z-button type="primary">Primary button</z-button>
<z-button type="success">Success button</z-button>
<z-button type="default">Default button</z-button>
<z-button type="warning">Warning button</z-button>
<z-button type="danger">Danger button</z-button>
```

### Simple button

Set the button to a plain button through the `plain` attribute. The text of the plain button is the button color and the background is white.

```html
<z-button plain type="primary">plain button</z-button>
<z-button plain type="success">Plain button</z-button>
```

### Thin border

Set the `hairline` property to display a thin border of 0.5px.

In order to standardize the differences between Andriod and IOS, Zebra has processed the buttons, and the borders of the buttons use a thin border by default.

```html
<z-button plain hairline type="primary">Thin border button</z-button>
<z-button plain hairline type="success">Thin border button</z-button>
```

### Disabled state

Disable the button through the `disabled` attribute. The button is not clickable in the disabled state.

```html
<z-button disabled type="primary">Disabled state</z-button>
<z-button disabled type="success">Disabled status</z-button>
```

### Loading status

Use the `loading` attribute to set the button to the loading state. The button text will be hidden by default in the loading state. You can use `loading-text` to set the text in the loading state.

```html
<z-button loading type="primary" />
<z-button loading type="primary" loading-type="spinner" />
<z-button loading type="success" loading-text="Loading..." />
```

### Button shape

Use `square` to set a square button, and `round` to set a round button.

```html
<z-button square type="primary">Square button</z-button>
<z-button round type="success">Round button</z-button>
```

### Icon Button

Set the button icon through the `icon` attribute, which supports all icons in the Icon component. You can also pass in the icon URL.

```html
<z-button icon="plus" type="primary" />
<z-button icon="plus" type="primary">Button</z-button>
<z-button
   icon="https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png"
   type="primary"
>
   button
</z-button>
```

### Button size

Supports four sizes: `large`, `normal`, `small`, and `mini`. The default is `normal`.

```html
<z-button type="primary" size="large">Large button</z-button>
<z-button type="primary" size="normal">Normal button</z-button>
<z-button type="primary" size="small">Small button</z-button>
<z-button type="primary" size="mini">Mini button</z-button>
```

### Block-level elements

Buttons are inline block-level elements by default. The `block` attribute can be used to set the button's element type to a block-level element.

```html
<z-button type="primary" block>Block-level element</z-button>
```

### Custom color

The color of the button can be customized through the `color` attribute.

```html
<z-button color="#7232dd">Single color button</z-button>
<z-button color="#7232dd" plain>Single color button</z-button>
<z-button color="linear-gradient(to right, #ff6034, #ee0a24)">
   Gradient color button
</z-button>
```

### Animation button

With Button and [Swipe component](/swipe), you can achieve vertical scrolling animated button effects.

```html
<z-button type="danger">
   <z-swipe
     vertical
     class="notice-swipe"
     :autoplay="2000"
     :touchable="false"
     :show-indicators="false"
     :custom-style="{ height: '30rpx' }"
   >
     <z-swipe-item>Button 1</z-swipe-item>
     <z-swipe-item>Button 2</z-swipe-item>
   </z-swipe>
</z-button>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| type | Type, optional values are `primary` `success` `warning` `danger` | _string_ | `default` |
| size | Size, optional values are `large` `small` `mini` | _string_ | `normal` |
| text | Button text | _string_ | - |
| color | Button color, supports passing in `linear-gradient` gradient color | _string_ | - |
| icon | The icon name or image link on the left, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | - |
| icon-prefix | Icon class name prefix, equivalent to the [class-prefix attribute](/icon#props) of the Icon component | _string_ | `z-icon` |
| icon-position | Icon placement position, optional value is `right` | _string_ | `left` |
| block | Whether it is a block-level element | _boolean_ | `false` |
| plain | Whether it is a plain button | _boolean_ | `false` |
| square | Whether it is a square button | _boolean_ | `false` |
| round | Whether it is a round button | _boolean_ | `false` |
| disabled | Whether to disable the button | _boolean_ | `false` |
| hairline | Whether to use 0.5px border | _boolean_ | `true` |
| loading | Whether to display loading status | _boolean_ | `false` |
| loading-text | Loading status prompt text | _string_ | - |
| loading-type | [Loading icon type](/loading), optional value is `spinner` | _string_ | `circular` |
| loading-size | Loading icon size, the default unit is `px`, you can pass in a string with `rpx` unit | _number \| string_ | - |
| customStyle | Custom button style | _object_ | - |
| customClass | The class name of the custom button | _object_ | - |
| formType | Used for `form` component, click will trigger the `submit`/`reset` event of `form` component respectively | _string_ | - |
| hide-border | Whether to force the border to be hidden. Setting this property will force the button's border to be hidden | _boolean_ | `false` |
| hide-radius | Whether to forcefully remove the `border-radius` style | _boolean_ | `false` |

### Events

| Event name | Description | Callback parameters |
| ---------- | -------------------------------------------- | ------------------- |
| click | Triggered when a button is clicked and the button status is not loaded or disabled | _event_ |
| clickLoading | Triggered when the button is clicked and the button status is loading | _event_ |

### Slots

| Name | Description |
| ------- | --------------- |
| default | button content |
| icon | custom icon |
| loading | custom loading icon |

### Type definition

The component exports the following type definitions:

```ts
import type {
   ButtonType,
   ButtonSize,
   ButtonProps,
   ButtonIconPosition,
} from '@zebra-ui/uniapp/components/z-button/types';
```

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ---------------------------------- | ------------------------------ | ---- |
| --z-button-mini-height | _46rpx_ | - |
| --z-button-mini-padding | _0 var(--z-padding-base)_ | - |
| --z-button-mini-font-size | _var(--z-font-size-xs)_ | - |
| --z-button-small-height | _64rpx_ | - |
| --z-button-small-padding        | _0 var(--z-padding-xs)_     | -    |
| --z-button-small-font-size      | _var(--z-font-size-sm)_     | -    |
| --z-button-normal-font-size     | _var(--z-font-size-md)_     | -    |
| --z-button-normal-padding       | _0 30rpx_                      | -    |
| --z-button-large-height         | _100rpx_                        | -    |
| --z-button-default-height       | _88rpx_                        | -    |
| --z-button-default-line-height  | _1.2_                         | -    |
| --z-button-default-font-size    | _var(--z-font-size-lg)_     | -    |
| --z-button-default-color        | _var(--z-text-color)_       | -    |
| --z-button-default-background   | _var(--z-background-2)_     | -    |
| --z-button-default-border-color | _var(--z-gray-4)_           | -    |
| --z-button-primary-color        | _var(--z-white)_            | -    |
| --z-button-primary-background   | _var(--z-primary-color)_    | -    |
| --z-button-primary-border-color | _var(--z-primary-color)_    | -    |
| --z-button-success-color        | _var(--z-white)_            | -    |
| --z-button-success-background   | _var(--z-success-color)_    | -    |
| --z-button-success-border-color | _var(--z-success-color)_    | -    |
| --z-button-danger-color         | _var(--z-white)_            | -    |
| --z-button-danger-background    | _var(--z-danger-color)_     | -    |
| --z-button-danger-border-color  | _var(--z-danger-color)_     | -    |
| --z-button-warning-color        | _var(--z-white)_            | -    |
| --z-button-warning-background   | _var(--z-orange)_           | -    |
| --z-button-warning-border-color | _var(--z-orange)_           | -    |
| --z-button-border-width         | _var(--z-border-width)_     | -    |
| --z-button-radius               | _var(--z-radius-md)_        | -    |
| --z-button-round-radius         | _var(--z-radius-max)_       | -    |
| --z-button-plain-background     | _var(--z-white)_            | -    |
| --z-button-disabled-opacity     | _var(--z-disabled-opacity)_ | -    |
| --z-button-icon-size            | _1.2em_                       | -    |
| --z-button-loading-icon-size    | _40rpx_                        | -    |

### Precautions

The `button` component of `uniapp` has its own border and other styles, which cannot be overridden through global styles. The component provides `hide-border` and `hide-radius` attributes to force override.