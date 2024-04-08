# Steps

### introduce

It is used to display each link of the operation process and let users understand the position of the current operation in the overall process.

## Code Demo

### Basic usage

The `active` attribute represents the index of the current step, starting from 0.

```html
<z-steps :active="active">
   <z-step>First step</z-step>
   <z-step>Second step</z-step>
   <z-step>The third step</z-step>
   <z-step>The fourth step</z-step>
</z-steps>
```

```js
import { ref } from 'vue';
const active = ref(1);
```

### Custom style

The active icon and color can be set through the `active-icon` and `active-color` properties.

```html
<z-steps :active="active" active-icon="check" inactive-icon="right-big" active-color="#07c160">
   <z-step>First step</z-step>
   <z-step>Second step</z-step>
   <z-step>The third step</z-step>
   <z-step>The fourth step</z-step>
</z-steps>
```

### Vertical step bar

You can change the display direction of the step bar by setting the `direction` property.

```html
<z-steps :active="0" direction="vertical">
   <z-step>
     <view>Status 1</view>
     <view>2016-07-12 12:40</view>
   </z-step>
   <z-step>
     <view>Status 2</view>
     <view>2016-07-11 10:00</view>
   </z-step>
   <z-step>
     <view>Status 3</view>
     <view>2016-07-10 09:30</view>
   </z-step>
</z-steps>
```

## API

### Steps Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| active | The index value corresponding to the current step | _number \| string_ | `0` |
| direction | Step bar direction, optional value is `vertical` | _string_ | `horizontal` |
| active-icon | The bottom icon corresponding to the current step. For optional values, see [Icon component](/icon) | _string_ | `checked` |
| inactive-icon | The bottom icon corresponding to the non-current step. For optional values, see [Icon component](/icon) | _string_ | - |
| finish-icon | The bottom icon corresponding to the completed step, with a higher priority than `inactive-icon`. For optional values, see [Icon component](/icon) | _string_ | - |
| active-color | The color of the current step and completed steps | _string_ | `#07c160` |
| inactive-color | Color of inactive steps | _string_ | `#969799` |
| icon-prefix | Icon class name prefix, equivalent to the [class-prefix attribute](/icon#props) of the Icon component | _string_ | `z-icon` |

### Step Slots

| Name | Description |
| ------------- | --------------------------------------------------------- |
| default | step content |
| active-icon | Custom activation status icon |
| inactive-icon | Customize the inactive status icon |
| finish-icon | Customize the bottom icon corresponding to the completed step, with a higher priority than `inactive-icon` |

### Steps Events

| Event name | Description | Callback parameters |
| ---------- | -------------------------- | -------------- |
| click-step | Triggered when the step's title or icon is clicked | _index: number_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ------------------------------------- | -------------------------- | ---- |
| --z-step-text-color | _var(--z-text-color-2)_ | - |
| --z-step-active-color | _var(--z-primary-color)_ | - |
| --z-step-process-text-color | _var(--z-text-color)_ | - |
| --z-step-font-size | _var(--z-font-size-md)_ | - |
| --z-step-line-color | _var(--z-border-color)_ | - |
| --z-step-finish-line-color | _var(--z-primary-color)_ | - |
| --z-step-finish-text-color | _var(--z-text-color)_ | - |
| --z-step-icon-size | _24rpx_ | - |
| --z-step-circle-size | _10rpx_ | - |
| --z-step-circle-color | _var(--z-gray-6)_ | - |
| --z-step-horizontal-title-font-size | _var(--z-font-size-sm)_ | - |
| --z-steps-background | _var(--z-background-2)_ | - |