# FloatingPanel floating panel

### introduce

A panel that floats at the bottom of the page and can be dragged up or down to browse content. It is often used to provide additional functionality or information.

## Code Demo

### Basic usage

The default height of a FloatingPanel is `100px`, and the user can drag it to expand the panel to `60%` of the screen height.

```html
<z-floating-panel>
   <z-cell-group>
     <z-cell
       v-for="i in 26"
       :key="i"
       :title="String.fromCharCode(i + 64)"
       size="large"
     />
   </z-cell-group>
</z-floating-panel>
```

### Custom anchor point

You can set the anchor position of the FloatingPanel through the `anchors` property, and control the display height of the current panel through `v-model:height`.

For example, make the height of the panel dock at three positions: `100px`, 40% screen height, and 70% screen height:

```html
<z-floating-panel v-model:height="height" :anchors="anchors">
   <view style="padding: 30rpx; text-align: center">
     <text>Panel display height {{ height.toFixed(0) }} px</text>
   </view>
</z-floating-panel>
```

```js
import { computed, ref } from 'vue'
const windowHeight = computed(() => {
   return uni.getSystemInfoSync().windowHeight
})
const anchors = [
   100,
   Math.round(0.4 * windowHeight.value),
   Math.round(0.7 * windowHeight.value)
]

const height = ref(anchors[0])
```

### Head drag only

By default, both the header area and the content area of a FloatingPanel can be dragged. You can disable dragging of the content area through the `content-draggable` attribute.

```html
<z-floating-panel :content-draggable="false">
   <view style="padding: 30rpx; text-align: center">
     <text>Content cannot be dragged</text>
   </view>
</z-floating-panel>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model:height | The display height of the current panel | _number \| string_ | `0` |
| anchors | Set custom anchor point, unit `px` | _number[]_ | `[100, windowHeight * 0.6]` |
| duration | animation duration, unit seconds, set to 0 to disable animation | _number \| string_ | `0.3` |
| content-draggable | Allow dragging of content containers | _boolean_ | `true` |
| lock-scroll | Whether to lock background scrolling when not dragging | _boolean_ | `false` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |

### Events

| Event name | Description | Callback parameters |
| ------------- | -------------------------------- | -------------------- |
| height-change | Triggered when the panel display height changes and ends dragging | _{ height: number }_ |

### Slots

| Name | Description |
| ------- | --------------- |
| default | Custom panel content |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default Value | Description |
| ---------------------------------- | -------------------------- | ----------- |
| --z-floating-panel-border-radius | _32rpx_ | - |
| --z-floating-panel-header-height | _60rpx_ | - |
| --z-floating-panel-z-index | _999_ | - |
| --z-floating-panel-background | _var(--z-background-2)_ | - |
| --z-floating-panel-bar-width | _40rpx_ | - |
| --z-floating-panel-bar-height | _6rpx_ | - |
| --z-floating-panel-bar-color | _var(--z-gray-5)_ | - |