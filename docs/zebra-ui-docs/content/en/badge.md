# Badge

### introduce

Display the logo number or small red dot in the upper right corner.

## Code Demo

### Basic usage

After setting the `content` attribute, Badge will display the corresponding logo in the upper right corner of the child element, or you can use `dot` to display a small red dot.

```html
<z-badge :content="5">
   <view class="child" />
</z-badge>
<z-badge :content="10">
   <view class="child" />
</z-badge>
<z-badge content="Hot">
   <view class="child" />
</z-badge>
<z-badge dot>
   <view class="child" />
</z-badge>

<style>
.demo-badge {
   .child {
     width: 80rpx;
     height: 80rpx;
     background: #fff;
     border-radius: 8rpx;
   }
}
</style>
```

### Maximum value

After setting the `max` attribute, when the value of `content` exceeds the maximum value, it will automatically be displayed as `{max}+`.

```html
<z-badge :content="20" max="9">
   <view class="child" />
</z-badge>
<z-badge :content="50" max="20">
   <view class="child" />
</z-badge>
<z-badge :content="200" max="99">
   <view class="child" />
</z-badge>
```

### Custom color

Set the color of the logo via the `color` property.

```html
<z-badge :content="5" color="#1989fa">
   <view class="child" />
</z-badge>
<z-badge :content="10" color="#1989fa">
   <view class="child" />
</z-badge>
<z-badge dot color="#1989fa">
   <view class="child" />
</z-badge>
```

### Custom logo content

The content of the logo can be customized through the `content` slot, such as inserting an icon.

```html
<z-badge>
   <view class="child" />
   <template #content>
     <z-icon name="download" />
   </template>
</z-badge>
<z-badge>
   <view class="child" />
   <template #content>
     <z-icon name="flag" />
   </template>
</z-badge>
<z-badge>
   <view class="child" />
   <template #content>
     <z-icon name="mail" />
   </template>
</z-badge>
```

### Custom logo position

Set the position of the logo via the `position` property.

```html
<z-badge :content="10" position="top-left">
   <view class="child" />
</z-badge>
<z-badge :content="10" position="bottom-left">
   <view class="child" />
</z-badge>
<z-badge :content="10" position="bottom-right">
   <view class="child" />
</z-badge>
```

### Independent display

When Badge has no child elements, it will be displayed as an independent element.

```html
<z-badge :content="20" />

<z-badge :content="200" max="99" />
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| content | Logo content | _number \| string_ | - |
| color | Logo background color | _string_ | `#ee0a24` |
| dot | Whether to display as a small red dot | _boolean_ | `false` |
| max | The maximum value. `{max}+` will be displayed if the maximum value is exceeded. It is only valid when content is a number | _number \| string_ | - |
| offset | Set the offset of the logo. The two items of the array correspond to the horizontal rightward and vertical downward offsets respectively. The default unit is `px` | _[number \| string, number \| string]_ | - |
| show-zero | When content is the number 0 or the string '0', whether to display the logo | _boolean_ | `true` |
| position | Logo position, optional values are `top-left` `bottom-left` `bottom-right` | _string_ | `top-right` |

### Slots

| Name | Description |
| ------- | ------------- |
| default | Child element wrapped by logo |
| content | Custom logo content |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-badge-size | _32rpx_ | - |
| --z-badge-color | _var(--z-white)_ | - |
| --z-badge-padding | _0 6rpx_ | - |
| --z-badge-font-size | _var(--z-font-size-sm)_ | - |
| --z-badge-font-weight | _var(--z-font-bold)_ | - |
| --z-badge-border-width | _var(--z-border-width)_ | - |
| --z-badge-background | _var(--z-danger-color)_ | - |
| --z-badge-dot-color | _var(--z-danger-color)_ | - |
| --z-badge-dot-size | _16rpx_ | - |