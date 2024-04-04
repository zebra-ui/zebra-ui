# Layout layout

### introduce

Zebra-ui provides two components, `z-row` and `z-col`, for row and column layout.

## Code Demo

### Basic usage

The Layout component provides a `24-column grid`, and the percentage of width occupied by the columns is set by adding the `span` attribute on `Col`. Additionally, adding the `offset` property sets the offset width of the column, calculated in the same way as span.

```html
<z-row>
   <z-col span="8">span: 8</z-col>
   <z-col span="8">span: 8</z-col>
   <z-col span="8">span: 8</z-col>
</z-row>

<z-row>
   <z-col span="4">span: 4</z-col>
   <z-col span="10" offset="4">offset: 4, span: 10</z-col>
</z-row>

<z-row>
   <z-col offset="12" span="12">offset: 12, span: 12</z-col>
</z-row>
```

### Set column element spacing

The spacing between column elements can be set through the `gutter` attribute. The default spacing is 0.

```html
<z-row gutter="20">
   <z-col span="8">span: 8</z-col>
   <z-col span="8">span: 8</z-col>
   <z-col span="8">span: 8</z-col>
</z-row>
```

### Vertical spacing

If you need to set vertical spacing, you can use array form to set `[horizontal spacing, vertical spacing]`.

```html
<!-- Set vertical spacing -->
<z-row :gutter="[20, 20]">
   <z-col span="12">span: 12</z-col>
   <z-col span="12">span: 12</z-col>
   <z-col span="12">span: 12</z-col>
   <z-col span="12">span: 12</z-col>
</z-row>
```

### Alignment

The alignment of content on the main axis can be set through the `justify` property, which is equivalent to the `justify-content` property in flex layout.

```html
<!-- Center -->
<z-row justify="center">
   <z-col span="6">span: 6</z-col>
   <z-col span="6">span: 6</z-col>
   <z-col span="6">span: 6</z-col>
</z-row>

<!-- Right aligned -->
<z-row justify="end">
   <z-col span="6">span: 6</z-col>
   <z-col span="6">span: 6</z-col>
   <z-col span="6">span: 6</z-col>
</z-row>

<!-- Align both ends -->
<z-row justify="space-between">
   <z-col span="6">span: 6</z-col>
   <z-col span="6">span: 6</z-col>
   <z-col span="6">span: 6</z-col>
</z-row>

<!-- Each element is equally spaced on both sides -->
<z-row justify="space-around">
   <z-col span="6">span: 6</z-col>
   <z-col span="6">span: 6</z-col>
   <z-col span="6">span: 6</z-col>
</z-row>
```

## API

### Row Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| gutter | Spacing between column elements (in px) | _number \| string \| Array_ | - |
| justify | Main axis alignment, optional values are `end` `center` <br> `space-around` `space-between` | _string_ | `start` |
| align | cross-axis alignment, optional values are `center` `bottom` | _string_ | `top` |
| wrap | Whether to wrap lines automatically | _boolean_ | `true` |

### Col Props

| Parameters | Description | Type | Default value |
| ------ | -------------- | ------------------ | ------ |
| span | Column element width | _number \| string_ | - |
| offset | Column element offset distance | _number \| string_ | - |

### Row Events

| Event name | Description | Callback parameters |
| ------ | ---------- | ------------------- |
| click | Triggered when clicked | _event_ |

### Col Events

| Event name | Description | Callback parameters |
| ------ | ---------- | ------------------- |
| click | Triggered when clicked | _event_ |