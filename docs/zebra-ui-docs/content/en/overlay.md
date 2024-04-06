# Overlay mask layer

### introduce

Create a mask layer that emphasizes specific page elements and blocks other actions by the user.

## Code Demo

### Basic usage

```html
<z-button type="primary" text="Show mask layer" @click="show = true" />
<z-overlay :show="show" @click="show = false" />
```

```js
import { ref } from 'vue';
const show = ref(false);
```

### Embed content

Arbitrary content can be embedded on the mask layer through the default slots.

```html
<z-button type="primary" text="Embedded content" @click="showContent = true" />
<z-overlay :show="showContent" @click="showContent = false">
   <view class="wrapper">
     <view class="block" @click.stop />
   </view>
</z-overlay>

<style>
.demo-overlay {
   .wrapper {
     display: flex;
     align-items: center;
     justify-content: center;
     height: 100%;
   }

   .block {
     width: 240rpx;
     height: 240rpx;
     background-color: #fff;
   }
}
</style>
```

### Set z-index

The default z-index level of the Overlay component is `1`, and you can set its z-index level through the `z-index` property.

```html
<z-overlay z-index="100" />
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| show | Whether to display the mask layer | _boolean_ | `false` |
| z-index | z-index level | _number \| string_ | `1` |
| duration | animation duration in milliseconds, set to 0 to disable animation | _number \| string_ | `300` |
| class-name | Custom class name | _string_ | - |
| custom-style | custom style | _object_ | - |
| lock-scroll | Whether to lock background scrolling. When locked, the content in the mask layer will not be scrollable | _boolean_ | `true` |

### Events

| Event name | Description | Callback parameters |
| ------ | ---------- | ------------------- |
| click | Triggered when clicked | _event_ |

### Slots

| Name | Description |
| ------- | ---------------------------------- |
| default | The default slot for embedding content above the mask layer |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| -------------------------------- | -------------------- | ---- |
| --z-overlay-z-index | _1_ | - |
| --z-overlay-background | _rgba(0, 0, 0, 0.7)_ | - |