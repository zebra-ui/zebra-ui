# TextEllipsis

### introduce

Omit long text and support expansion/collapse.

> Font-size must be specified through the custom-style attribute.

## Code Demo

### Basic usage

By default, `1` lines are displayed, and ellipses are displayed for more than `1` lines.

```html
<z-text-ellipsis
   :content="text1"
   :custom-style="{ 'font-size': '26rpx' }"
/>
```

```js
import { ref } from 'vue'
const text1 = ref(
   'zebra-swiper is a multi-terminal mobile carousel component developed based on uniapp. '
)
```

### Expand/Collapse

Exceeding the number of rows supports expansion/collapse.

```html
<z-text-ellipsis
   :content="text2"
   :custom-style="{ 'font-size': '26rpx' }"
   expand-text="Expand"
   collapse-text="Collapse"
/>
```

```js
const text2 = ref(
   'Uniapp's swiper component has great limitations and cannot complete some complex carousel effects. Zebra-swiper can not only achieve some 3D carousel effects, but also define the effects you want through parameters. '
)
```

### Customize the number of display rows

Limit the number of displayed rows by setting `rows`.

```html
<z-text-ellipsis
   rows="3"
   :content="text3"
   :custom-style="{ 'font-size': '26rpx' }"
   expand-text="Expand"
   collapse-text="Collapse"
/>
```

```js
const text3 = ref(
   'zebra-swiper is a mobile carousel component developed based on uniapp. The swiper component of uniapp has great limitations and cannot complete some complex carousel effects. Zebra-swiper can not only achieve some 3D carousel effects, but also define the effects you want through parameters. We are fully aligned with swiperjs (opens new window), and we can still achieve cool carousel effects in mini programs. '
)
```

### Custom omitted position

Control the omitted position by setting `position`.

- Header omitted:

```html
<z-text-ellipsis
   rows="1"
   :content="text3"
   :custom-style="{ 'font-size': '26rpx' }"
   expand-text="Expand"
   collapse-text="Collapse"
   position="start"
/>
```

```js
const text3 = ref(
   'zebra-swiper is a mobile carousel component developed based on uniapp. The swiper component of uniapp has great limitations and cannot complete some complex carousel effects. Zebra-swiper can not only achieve some 3D carousel effects, but also define the effects you want through parameters. We are fully aligned with swiperjs (opens new window), and we can still achieve cool carousel effects in mini programs. '
)
```

- Omit the middle part:

```html
<z-text-ellipsis
   rows="2"
   :content="text3"
   :custom-style="{ 'font-size': '26rpx' }"
   expand-text="Expand"
   collapse-text="Collapse"
   position="middle"
/>
```

```js
const text3 = ref(
   'zebra-swiper is a mobile carousel component developed based on uniapp. The swiper component of uniapp has great limitations and cannot complete some complex carousel effects. Zebra-swiper can not only achieve some 3D carousel effects, but also define the effects you want through parameters. We are fully aligned with swiperjs (opens new window), and we can still achieve cool carousel effects in mini programs. '
)
```

### Custom operation content

Customize the action content through the slot `action`.

```html
<z-text-ellipsis
   :content="text1"
   :custom-style="{ 'font-size': '26rpx' }"
>
   <template #action="{ expanded }">
     {{ expanded ? 'Collapse' : 'Expand' }}
   </template>
</z-text-ellipsis>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| rows | Number of rows displayed | _number \| string_ | `1` |
| content | Text to be displayed | _string_ | - |
| expand-text | The text of the expand operation | _string_ | - |
| collapse-text | Collapse operation text | _string_ | - |
| dots | The text content of the ellipsis | _string_ | `'...'` |
| position | Omit position, optional values are `start` `middle` | _string_ | `'end'` |

### Events

| Event name | Description | Callback parameters |
| ------------ | ------------------- | ------------------- |
| click-action | Triggered when click to expand/collapse | _event: MouseEvent_ |

### TextEllipsis method

Through ref, you can get the TextEllipsis instance and call the instance method.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| toggle | Toggle the expanded state of the text. Pass `true` to expand, `false` to collapse, and pass no parameter to toggle | _expanded?: boolean_ | - |

### Slots

| Name | Description | Parameters |
| --------------- | ---------- | ------------------------ |
| action | Custom action | _{ expanded: boolean }_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
|-------------------------------- |----------------- | -------------- |
| --z-text-ellipsis-action-color | _var(--z-blue)_ | Color of action button |
| --z-text-ellipsis-line-height | _1.6_ | Line height of text |