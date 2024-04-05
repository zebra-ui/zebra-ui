
# Rate rating

### introduce

Used to rate things.

## Code Demo

### Basic usage

Bind the current rating value through `v-model`.

```html
<z-rate v-model="value" />
```

```js
import { ref } from 'vue';
const value = ref(3);
```

### Custom icon

Use the `icon` attribute to set the icon when selected, and the `void-icon` attribute to set the icon when not selected.

```html
<z-rate v-model="value" icon="heart-fill" void-icon="heart" />
```

### Custom style

Use the `size` attribute to set the size of the icon, the `color` attribute to set the color when it is selected, and `void-color` to set the color when it is not selected.

```html
<z-rate
v-model="value"
:size="35"
color="#ffd21e"
void-icon="star"
void-color="#eee"
/>
```

### Half star

Half stars can be selected by setting the `allow-half` property.

```html
<z-rate v-model="value" allow-half />
```

```js
import { ref } from 'vue';
const value = ref(2.5);

```

### Custom quantity

Set the total number of ratings via the `count` attribute.

```html
<z-rate v-model="value" :count="6" />
```

### Can be cleared

When the `clearable` property is set to `true`, clicking the same value again will reset the value to `0`.

```html
<z-rate v-model="value" clearable />
```

### Disabled state

Disable scoring via the `disabled` attribute.

```html
<z-rate v-model="value" disabled />
```

### Read-only status

Set the rating to read-only status via the `readonly` attribute.

```html
<z-rate v-model="value" readonly />
```

### Read-only status displays decimals

After setting the `readonly` and `allow-half` properties, the Rate component can display any decimal result.

```html
<z-rate v-model="value" readonly allow-half />
```

```js
import { ref } from 'vue';
const value = ref(3.3);
```

### Listen for change events

When the rating changes, the `change` event is triggered.

```html
<z-rate v-model="value" @change="onChange" />
```

```javascript
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const value = ref(3);
const onChange = (value) => showToast('Current value: ' + value);
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | Current score | _number_ | - |
| count | Total number of icons | _number \| string_ | `5` |
| size | Icon size, default unit is `px` | _number \| string_ | `40rpx` |
| gutter | Icon spacing, default unit is `px` | _number \| string_ | `8rpx` |
| color | Color when selected | _string_ | `#ee0a24` |
| void-color | Color when not selected | _string_ | `#c8c9cc` |
| disabled-color | Disabled color | _string_ | `#c8c9cc` |
| icon | The icon name or image link when selected, equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | `star-fill` |
| void-icon | The icon name or image link when not selected, equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | `star` |
| icon-prefix | Icon class name prefix, equivalent to the [class-prefix attribute](/icon#props) of the Icon component | _string_ | `z-icon` |
| allow-half | Whether to allow half selection | _boolean_ | `false` |
| clearable | Whether to allow clearing after clicking again | _boolean_ | `false` |
| readonly | Whether it is in read-only status. The rating cannot be modified in read-only status | _boolean_ | `false` |
| disabled | Whether to disable rating | _boolean_ | `false` |
| touchable | Whether ratings can be selected through swipe gestures | _boolean_ | `true` |

### Events

| Event name | Description | Callback parameters |
| ------ | ------------------------ | ---------------------- |
| change | Event triggered when the current score changes | _currentValue: number_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ------------------------------ | ------------------------- | ---- |
| --z-rate-icon-size           | _40rpx_                    | -    |
| --z-rate-icon-gutter         | _var(--z-padding-base)_ | -    |
| --z-rate-icon-void-color     | _var(--z-gray-5)_       | -    |
| --z-rate-icon-full-color     | _var(--z-danger-color)_ | -    |
| --z-rate-icon-disabled-color | _var(--z-gray-5)_       | -    |
