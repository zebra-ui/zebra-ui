# Swipe

### introduce

Used to loop through a set of images or content.

## Code Demo

### Basic usage

Each SwipeItem represents a carousel card, and the indicator color can be set through the `indicator-color` property.

```html
<z-swipe indicator-color="#ffffff">
   <z-swipe-item
     v-for="(item, index) in 4"
     :key="index"
     :custom-style="customStyle"
     >{{ item }}</z-swipe-item
   >
</z-swipe>
```

```js
import { ref } from 'vue'
const customStyle = ref({
   color: '#ffffff',
   'font-size': '40rpx',
   'line-height': '300rpx',
   'text-align': 'center',
   'background-color': '#39a9ed'
})
```

### Autoplay

The automatic rotation interval can be set through the `autoplay` attribute.

```html
<z-swipe autoplay="1000" indicator-color="#ffffff">
   <z-swipe-item
     v-for="(item, index) in 4"
     :key="index"
     :custom-style="customStyle"
     >{{ item }}</z-swipe-item
   >
</z-swipe>
```

```js
import { ref } from 'vue'
const customStyle = ref({
   color: '#ffffff',
   'font-size': '40rpx',
   'line-height': '300rpx',
   'text-align': 'center',
   'background-color': '#39a9ed'
})
```


### Listen for change events

After each page rotation ends, the `change` event will be triggered.

```html
<z-swipe @change="onChange">
   <z-swipe-item
     v-for="(item, index) in 4"
     :key="index"
     :custom-style="customStyle"
     >{{ item }}</z-swipe-item
   >
</z-swipe>
```

```js
const onChange = (index: number) => console.log('Current Swipe index: ' + index)
```

### Vertical scrolling

After setting the `vertical` attribute, the sliders will be arranged vertically. In this case, you need to specify the height of the slider container.

```html
<z-swipe
   vertical
   indicator-color="#ffffff"
   :custom-style="{ height: '300rpx' }"
>
   <z-swipe-item
     v-for="(item, index) in 4"
     :key="index"
     :custom-style="customStyle"
     >{{ item }}</z-swipe-item
   >
</z-swipe>
```

### Customize slider size

The default width of the slider is `100%`, and the width of a single slider can be set through the `width` property. In vertical scrolling mode, the height of a single slider can be set through the `height` property.

```html
<z-swipe :loop="false" :width="200">
   <z-swipe-item
     v-for="(item, index) in 4"
     :key="index"
     :custom-style="customStyle"
     >{{ item }}</z-swipe-item
   >
</z-swipe>
```

> Customizing the slider size in loop scrolling mode is currently not supported, so loop needs to be set to false.

### Custom indicator

The indicator's style can be customized via the `indicator` slot.

```html
<z-swipe :show-indicators="false">
   <z-swipe-item
     v-for="(item, index) in 4"
     :key="index"
     :custom-style="customStyle"
     >{{ item }}</z-swipe-item
   >
   <template #indicator="{ active, total }">
     <view class="custom-indicator">{{ active + 1 }}/{{ total }}</view>
   </template>
</z-swipe>

<style>
.custom-indicator {
   position: absolute;
   right: 10rpx;
   bottom: 10rpx;
   padding: 4rpx 10rpx;
   font-size: 24rpx;
   color: #fff;
   background: rgb(0 0 0 / 10%);
}
</style>
```

## API

### Swipe Props

| Parameters | Description | Type | Default value |
| ------------- | ------------------------ | ----------------- | ---------- |
| autoplay | Automatic rotation interval, unit is ms | _number \| string_ | - |
| duration | animation duration, unit is ms | _number \| string_ | `500` |
| initial-swipe | Initial position index value | _number \| string_ | `0` |
| width | Slider width, unit is `px` | _number \| string_ | `auto` |
| height | Slider height, unit is `px` | _number \| string_ | `auto` |
| loop | Whether to enable loop playback | _boolean_ | `true` |
| show-indicators | Whether to show indicators | _boolean_ | `true` |
| vertical | Whether to scroll vertically | _boolean_ | `false` |
| touchable | Whether swiping through gestures is possible | _boolean_ | `true` |
| indicator-color | indicator color | _string_ | `#1989fa` |

### Swipe Events

| Event name | Description | Callback parameters |
| ------------------- | ------------------------------- | ------------------ |
| change | Triggered after each page carousel ends | _index: number_ |
| drag-start | Triggered when the user starts dragging the carousel component | _{ index: number }_ |
| drag-end | Triggered when the user ends dragging the carousel component | _{ index: number }_ |

### SwipeItem Events

| Event name | Description | Callback parameters |
| ------ | ---------- | ------------------- |
| click | Triggered when clicked | _event: MouseEvent_ |

### Swipe method

Through ref, you can get the Swipe instance and call the instance method.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| prev | Switch to the previous carousel | - | - |
| next | Switch to the next carousel | - | - |
| swipeTo | Switch to the specified location | _index: number, options: SwipeToOptions_ | - |
| resize | This method can be called to trigger redrawing when the size of the outer element or the display state of the component changes | - | - |

### SwipeToOptions format

| Name | Description | Type |
| --------- | ------------ | --------- |
| immediate | Whether to skip animation | _boolean_ |

### Swipe Slots

| Name | Description | Parameters |
| --------- | ------------ | ------------------------------------ |
| default | carousel content | - |
| indicator | Custom indicator | _{ active: number, total: number }_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-swipe-indicator-size | _12rpx_ | - |
| --z-swipe-indicator-margin | _var(--z-padding-sm)_ | - |
| --z-swipe-indicator-active-opacity | _1_ | - |
| --z-swipe-indicator-inactive-opacity | _0.3_ | - |
| --z-swipe-indicator-active-background | _var(--z-primary-color)_ | - |
| --z-swipe-indicator-inactive-background | _var(--z-border-color)_ | - |