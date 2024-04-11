# Tag tag

### introduce

Used to mark keywords and summarize main content.

## Code Demo

### Basic usage

Control the label color through the `type` attribute.

```html
<z-tag type="primary">tag</z-tag>
<z-tag type="success">tag</z-tag>
<z-tag type="danger">tag</z-tag>
<z-tag type="warning">tag</z-tag>
```

### Hollow style

Set the `plain` attribute to hollow style.

```html
<z-tag plain type="primary">tag</z-tag>
```

### Rounded corner style

Set to rounded corner style via `round`.

```html
<z-tag round type="primary">tag</z-tag>
```

### Tag style

Set to mark style (semi-rounded) via `mark`.

```html
<z-tag mark type="primary">tag</z-tag>
```

### Closeable tags

Adding the `closeable` attribute indicates that the label can be closed. When the label is closed, the `close` event will be triggered. In the `close` event, the logic of hiding the label can be executed.

```html
<z-tag :show="show" closeable size="medium" type="primary" @close="close">
   Label
</z-tag>
```

```js
import { ref } from 'vue';
const show = ref(true);
const close = () => {
   show.value = false;
};
```

### Label size

Resize the label via the `size` attribute.

```html
<z-tag type="primary">tag</z-tag>
<z-tag type="primary" size="medium">tag</z-tag>
<z-tag type="primary" size="large">tag</z-tag>
```

### Custom color

Set the label color via the `color` and `text-color` properties.

```html
<z-tag color="#7232dd">tag</z-tag>
<z-tag color="#ffe1e1" text-color="#ad0000">tag</z-tag>
<z-tag color="#7232dd" plain>tag</z-tag>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| type | Type, optional values are `primary` `success` `danger` `warning` | _string_ | `default` |
| size | Size, optional values are `large` `medium` | _string_ | - |
| color | label color | _string_ | - |
| show | Whether to display tags | _boolean_ | `true` |
| plain | Whether it is hollow style | _boolean_ | `false` |
| round | Whether it is rounded corner style | _boolean_ | `false` |
| mark | Whether it is mark style | _boolean_ | `false` |
| text-color | Text color, has higher priority than `color` attribute | _string_ | `white` |
| closeable | Whether the tag is closeable | _boolean_ | `false` |

### Slots

| Name | Description |
| ------- | ---------- |
| default | Label display content |

### Events

| Event name | Description | Callback parameters |
| ------ | -------------- | ------------------- |
| click | Triggered when clicked | _event: MouseEvent_ |
| close | Triggered when the tag is closed | _event: MouseEvent_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-tag-padding | _0 var(--z-padding-base)_ | - |
| --z-tag-text-color | _var(--z-white)_ | - |
| --z-tag-font-size | _var(--z-font-size-sm)_ | - |
| --z-tag-radius | _4rpx_ | - |
| --z-tag-line-height | _32rpx_ | - |
| --z-tag-medium-padding | _4rpx 12rpx_ | - |
| --z-tag-large-padding | _var(--z-padding-base) var(--z-padding-xs)_ | - |
| --z-tag-large-radius | _var(--z-radius-md)_ | - |
| --z-tag-large-font-size | _var(--z-font-size-md)_ | - |
| --z-tag-round-radius | _var(--z-radius-max)_ | - |
| --z-tag-danger-color | _var(--z-danger-color)_ | - |
| --z-tag-primary-color | _var(--z-primary-color)_ | - |
| --z-tag-success-color | _var(--z-success-color)_ | - |
| --z-tag-warning-color | _var(--z-warning-color)_ | - |
| --z-tag-default-color | _var(--z-gray-6)_ | - |
| --z-tag-plain-background | _var(--z-background-2)_ | - |