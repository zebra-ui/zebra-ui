# Cell cell

### introduce

A cell is a single display item in the list.

## Code Demo

### Basic usage

`Cell` can be used alone or in combination with `CellGroup`. `CellGroup` can provide upper and lower outer borders for `Cell`.

```html
<z-cell-group>
   <z-cell title="cell" value="content" />
   <z-cell title="cell" value="content" label="description information" />
</z-cell-group>
```

### Card style

Cells can be converted to rounded card style through the `inset` property of `CellGroup`.

```html
<z-cell-group inset>
   <z-cell title="cell" value="content" />
   <z-cell title="cell" value="content" label="description information" />
</z-cell-group>
```

### Cell size

The size of the cell can be controlled through the `size` property.

```html
<z-cell title="cell" value="content" size="large" />
<z-cell title="cell" value="content" size="large" label="description information" />
```

### Display icon

Display the icon to the left of the title via the `icon` attribute.

```html
<z-cell-group>
   <z-cell title="cell" value="content" icon="appstore" />
   <z-cell title="cell" value="content" icon="setting" />
</z-cell-group>
```

### Show arrow

After setting the `is-link` property, an arrow will be displayed on the right side of the cell, and the arrow direction can be controlled through the `arrow-direction` property.

```html
<z-cell title="cell" is-link />
<z-cell title="cell" is-link value="content" />
<z-cell title="cell" is-link arrow-direction="down" value="content" />
```

### Group title

The group title can be specified through the `title` attribute of `CellGroup`.

```html
<z-cell-group title="Group 1">
   <z-cell title="cell" value="content" />
</z-cell-group>
<z-cell-group title="Group 2">
   <z-cell title="cell" value="content" />
</z-cell-group>
```

### Using slots

If the above usage does not meet your needs, you can use slots to customize the content.

```html
<z-cell value="content" is-link>
   <!-- Use the title slot to customize the title -->
   <template #title>
     <text class="custom-title">Cell</text>
     <z-tag type="primary">tag</z-tag>
   </template>
</z-cell>

<z-cell title="cell" icon="creditcard">
   <!-- Use the right-icon slot to customize the right icon -->
   <template #right-icon>
     <z-icon name="search" class="search-icon" />
   </template>
</z-cell>

<style lang="scss" scoped>
.demo-cell {
   .custom-title {
     margin-right: 10rpx;
   }
}
</style>
```

### Vertically centered

The left and right contents of the `Cell` can be vertically centered through the `center` attribute.

```html
<z-cell center title="cell" value="content" label="description information" />
```

## API

### CellGroup Props

| Parameters | Description | Type | Default value |
| ------ | ----------------------- | ---------- | ------- |
| title | Group title | _string_ | `-` |
| inset | Whether to display rounded card style | _boolean_ | `false` |
| border | Whether to display the outer border | _boolean_ | `true` |

### Cell Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| title | left title | _number \| string_ | - |
| value | Right content | _number \| string_ | - |
| label | Description information below the title | _string_ | - |
| size | Cell size, optional values are `large` `normal` | _string_ | - |
| icon | The icon name or image link on the left, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | - |
| icon-prefix | Icon class name prefix, equivalent to the [class-prefix attribute](/icon#props) of the Icon component | _string_ | `z-icon` |
| border | Whether to display the inner border | _boolean_ | `true` |
| clickable | Whether to enable click feedback | _boolean_ | `null` |
| is-link | Whether to display the right arrow and enable click feedback | _boolean_ | `false` |
| required | Whether to display the required asterisk in the form | _boolean_ | `false` |
| center | Whether to center the content vertically | _boolean_ | `false` |
| arrow-direction | Arrow direction, optional values are `left` `up` `down` | _string_ | `right` |
| title-style | Additional style for left title | _string \| Array \| object_ | - |
| title-class | Additional class name for left title | _string \| Array \| object_ | - |
| value-class | Additional class name of the right content | _string \| Array \| object_ | - |
| label-class | Description information additional class name | _string \| Array \| object_ | - |

### Cell Events

| Event name | Description | Callback parameters |
| ------ | ---------------- | ------------------ |
| click | Triggered when a cell is clicked | _event_ |

### CellGroup Slots

| Name | Description |
| ------- | --------------- |
| default | default slot |
| title | Custom group title |

### Cell Slots

| Name | Description |
| ---------- | ---------------------------- |
| title | Custom left title |
| value | Customize the right content |
| label | Custom description information below the title |
| icon | Customize the left icon |
| right-icon | Customize the right icon |
| extra | Customize the extra content on the rightmost side of the cell |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-cell-font-size | _var(--z-font-size-md)_ | - |
| --z-cell-line-height | _48rpx_ | - |
| --z-cell-vertical-padding | _20rpx_ | - |
| --z-cell-horizontal-padding | _var(--z-padding-md)_ | - |
| --z-cell-text-color | _var(--z-text-color)_ | - |
| --z-cell-background | _var(--z-background-2)_ | - |
| --z-cell-border-color | _var(--z-border-color)_ | - |
| --z-cell-active-color | _var(--z-active-color)_ | - |
| --z-cell-required-color | _var(--z-danger-color)_ | - |
| --z-cell-label-color | _var(--z-text-color-2)_ | - |
| --z-cell-label-font-size | _var(--z-font-size-sm)_ | - |
| --z-cell-label-line-height | _var(--z-line-height-sm)_ | - |
| --z-cell-label-margin-top | _var(--z-padding-base)_ | - |
| --z-cell-value-color | _var(--z-text-color-2)_ | - |
| --z-cell-value-font-size | _inherit_ | - |
| --z-cell-icon-size | _32rpx_ | - |
| --z-cell-right-icon-color | _var(--z-gray-6)_ | - |
| --z-cell-large-vertical-padding | _var(--z-padding-sm)_ | - |
| --z-cell-large-title-font-size | _var(--z-font-size-lg)_ | - |
| --z-cell-large-label-font-size | _var(--z-font-size-md)_ | - |
| --z-cell-large-value-font-size | _inherit_ | - |
| --z-cell-group-background | _var(--z-background-2)_ | - |
| --z-cell-group-title-color | _var(--z-text-color-2)_ | - |
| --z-cell-group-title-padding | _var(--z-padding-md) var(--z-padding-md) var(--z-padding-xs)_ | - |
| --z-cell-group-title-font-size | _var(--z-font-size-md)_ | - |
| --z-cell-group-title-line-height | _32rpx_ | - |
| --z-cell-group-inset-padding | _0 var(--z-padding-md)_ | - |
| --z-cell-group-inset-radius | _var(--z-radius-lg)_ | - |
| --z-cell-group-inset-title-padding | _var(--z-padding-md) var(--z-padding-md) var(--z-padding-xs) var(--z-padding-xl)_ | - |