# RollingText

### introduce

Text scrolling effect, you can scroll numbers and other types of text.

## Code Demo

### Basic usage

You can set the starting value with `start-num` and the target value with `target-num`. The RollingText component will automatically start animation and roll from the starting value to the target value.

```html
<z-rolling-text :start-num="0" :target-num="123" />
```

### Set the rolling direction

You can set the scrolling direction of the number through the `direction` attribute. The default is to scroll down. Set it to `up` to scroll up.

```html
<z-rolling-text :start-num="0" :target-num="432" direction="up" />
```

### Set the stop sequence of each digit

You can set the stopping order of each digit of the animation through the `stop-order` property. By default, the high position is stopped first, and if set to `rtl`, it can be stopped from the ones position first.

```html
<z-rolling-text :start-num="0" :target-num="54321" stop-order="rtl" />
```

### Flip non-numeric content

You can set the flipping of non-numeric content using the `text-list` attribute. The component will flip from the first item to the last item in the array. Please ensure that the array length is greater than or equal to 2, and that the length of each item is consistent.

```html
<z-rolling-text :text-list="textList" :duration="1" />
```

```js
import { ref } from 'vue';
const textList = ref([
   'aaaaa',
   'bbbb',
   'ccccc',
   'ddddd',
   'eeeee',
   'fffff',
   'ggggg',
]);
```

### Custom style

The RollingText component provides some CSS variables. You can override these variables to customize the style, or you can directly modify the component's style. Additionally, you can set the height of the number via the `height` property.

```html
<view class="my-rolling-text">
   <z-rolling-text
     :start-num="12345"
     :target-num="54321"
     :auto-start="isStart4"
     :height="54"
   />
</view>
```

```css
.my-rolling-text {
   --z-rolling-text-background: #1989fa;
   --z-rolling-text-color: white;
   --z-rolling-text-font-size: 48rpx;
   --z-rolling-text-gap: 12rpx;
   --z-rolling-text-item-border-radius: 10rpx;
   --z-rolling-text-item-width: 80rpx;
}
```

### Manual control

After obtaining the component instance through ref, you can call the `start` and `reset` methods. The `start` method is used to start the animation, and the `reset` method is used to reset the animation.

```html
<view class="my-rolling-text">
   <z-rolling-text
     ref="rollingTextRef"
     :start-num="0"
     :target-num="54321"
     :auto-start="false"
     :height="54"
   />
</view>
<z-grid
   clickable
   :column-num="2"
   :custom-style="{ 'margin-top': '20rpx' }"
>
   <z-grid-item icon="play-circle" text="Start" @click="start" />
   <z-grid-item icon="reload" text="Reset" @click="reset" />
</z-grid>
```

```js
import { ref } from 'vue';
const rollingTextRef = ref(null);
const start = () => {
   rollingTextRef.value.start();
};
const reset = () => {
   rollingTextRef.value.reset();
};
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| start-num | starting value | _number_ | `0` |
| target-num | target number | _number_ | - |
| text-list | Content array, used to flip non-numeric content | _string[]_ | `[]` |
| duration | animation duration in seconds | _number_ | `2` |
| direction | Text scrolling direction, values are `down` and `up` | _string_ | `down` |
| auto-start | Whether to automatically start animation | _boolean_ | `true` |
| stop-order | The order in which each digital animation is stopped, the values are `ltr` and `rtl` | _string_ | `ltr` |
| height | Number height in `px` | _number_ | `40` |

### method

Through ref, you can get the RollingText instance and call the instance method.

| Method name | Description | Parameters | Return value |
| ------ | -------- | ---- | ------ |
| start | Start animation | - | - |
| reset | reset animation | - | - |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-rolling-text-background | _inherit_ | Single digit background color |
| --z-rolling-text-color | _var(--z-text-color)_ | Numeric color |
| --z-rolling-text-font-size | _var(--z-font-size-md)_ | Font size |
| --z-rolling-text-gap | _0px_ | The gap between digits |
| --z-rolling-text-item-width | _30rpx_ | Single digit width |
| --z-rolling-text-item-border-radius | _0px_ | Single digital border rounded corners |