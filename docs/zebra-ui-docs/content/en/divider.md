# Divider

### introduce

Used to separate content into multiple areas.

## Code Demo

### Basic usage

A horizontal dividing line is rendered by default.

```html
<z-divider />
```

### Display text

Insert content in the middle of separable lines through slots.

```html
<z-divider>Text</z-divider>
```

### Content location

Specify the location of the content through `content-position`.

```html
<z-divider content-position="left">Text</z-divider>
<z-divider content-position="right">text</z-divider>
```

### dashed line

Add the `dashed` attribute to render the split line as a dashed line.

```html
<z-divider dashed>text</z-divider>
```

### Custom style

The style of the dividing line can be set directly through the `style` attribute.

```html
<z-divider
   :custom-style="{
     borderColor: '#1989fa',
     color: '#1989fa',
     padding: '0 32rpx'
   }"
>
   Word
</z-divider>
```

### vertical

```html
<div class="content">
   <z-divider vertical />
   Word
   <z-divider vertical dashed />
   Word
   <z-divider vertical :hairline="false" />
   Word
   <z-divider vertical :custom-style="{ borderColor: '#1989fa' }" />
</div>
```

## API

### Props

| Parameters | Description | Type | Default value |
| ------------------ | ------------------------------------ | --------- | -------- |
| dashed | Whether to use dashed lines | _boolean_ | `false` |
| hairline | Whether to use 0.5px line | _boolean_ | `true` |
| content-position | Content position, optional values are `left` `right` | _string_ | `center` |
| vertical | Whether to use vertical | _boolean_ | `false` |

### Slots

| Name | Description |
| ------- | ---- |
| default | content |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ---------------------------------- | ------------------------- | ---- |
| --z-divider-margin | _var(--z-padding-md) 0_ | - |
| --z-divider-vertical-margin | _0 var(--z-padding-xs)_ | - |
| --z-divider-text-color | _var(--z-text-color-2)_ | - |
| --z-divider-font-size | _var(--z-font-size-md)_ | - |
| --z-divider-line-height | _48rpx_ | - |
| --z-divider-border-color | _var(--z-border-color)_ | - |
| --z-divider-content-padding | _var(--z-padding-md)_ | - |
| --z-divider-content-left-width | _10%_ | - |
| --z-divider-content-right-width | _10%_ | - |