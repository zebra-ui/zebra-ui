# CountDown

### introduce

Used to display countdown values in real time, supporting millisecond precision.

## Code Demo

### Basic usage

The `time` attribute represents the total countdown time, in milliseconds.

```html
<z-count-down :time="time" />
```

```js
import { ref } from 'vue';
const time = ref(30 * 60 * 60 * 1000)
```

### Custom format

Set the content of the countdown text through the `format` attribute.

```html
<z-count-down :time="time" format="DD days HH hours mm minutes ss seconds" />
```

### Millisecond rendering

The countdown is rendered once per second by default. Setting the `millisecond` property can enable millisecond rendering.

```html
<z-count-down millisecond :time="time" format="HH:mm:ss:SS" />
```

### Custom style

Customize the countdown style through slots. See the table below for the `timeData` object format.

```html
<z-count-down :time="time">
   <template #default="{ current }">
     <text class="block">{{ current.hours }}</text>
     <text class="colon">:</text>
     <text class="block">{{ current.minutes }}</text>
     <text class="colon">:</text>
     <text class="block">{{ current.seconds }}</text>
   </template>
</z-count-down>

<style>
   .colon {
     display: inline-block;
     margin: 0 8rpx;
     color: var(--z-primary-color);
   }

   .block {
     display: inline-block;
     width: 44rpx;
     font-size: 24rpx;
     color: #fff;
     text-align: center;
     background-color: var(--z-primary-color);
     border-radius: 8rpx;
   }
</style>
```

### Manual control

After obtaining the component instance through ref, you can call the `start`, `pause`, and `reset` methods.

```html
<view class="count-content">
   <z-count-down
     ref="countDown"
     millisecond
     :time="3000"
     :auto-start="false"
     format="ss:SSS"
     @finish="onFinish"
   />
</view>
<z-grid clickable :column-num="3">
   <z-grid-item icon="play-circle" text="Start" @click="start" />
   <z-grid-item icon="timeout" text="Pause" @click="pause" />
   <z-grid-item icon="reload" text="Reset" @click="reset" />
</z-grid>
```

```js
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const countDown = ref()
const start = () => {
   countDown.value?.start()
}
const pause = () => {
   countDown.value?.pause()
}
const reset = () => {
   countDown.value?.reset()
}
const onFinish = () => toast.showToast('Countdown is over')
```

## API

### Props

| Parameters | Description | Type | Default value |
| ----------- | -------------------- | ------------------ | ---------- |
| time | Countdown duration in milliseconds | _number \| string_ | `0` |
| format | time format | _string_ | `HH:mm:ss` |
| auto-start | Whether to automatically start the countdown | _boolean_ | `true` |
| millisecond | Whether to enable millisecond rendering | _boolean_ | `false` |

### format format

| Format | Description |
| ---- | ------------ |
| DD | Number of days |
| HH | hours |
| mm | minutes |
| ss | seconds |
| S | Milliseconds (1 bit) |
| SS | milliseconds (2 digits) |
| SSS | milliseconds (3 digits) |

### Events

| Event name | Description | Callback parameters |
| ------ | ---------------- | --------------------------- |
| finish | Triggered when countdown ends | - |
| change | Triggered when the countdown changes | _currentTime: CurrentTime_ |

### Slots

| Name | Description | Parameters |
| ------- | ---------- | -------------------------- |
| default | Custom content | _currentTime: CurrentTime_ |

### CurrentTime format

| Name | Description | Type |
| ------------ | --------------------- | -------- |
| total | total remaining time (unit: milliseconds) | _number_ |
| days | remaining days | _number_ |
| hours | remaining hours | _number_ |
| minutes | minutes remaining | _number_ |
| seconds | Number of seconds remaining | _number_ |
| milliseconds | Remaining milliseconds | _number_ |

### method

Through ref, you can get the CountDown instance and call the instance method.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| start | Start countdown | - | - |
| pause | Pause countdown | - | - |
| reset | Reset the countdown. If `auto-start` is `true`, the countdown will automatically start after reset | - | - |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ---------------------------- | ----------------------------------- | ---- |
| --z-count-down-text-color | _var(--z-text-color)_ | - |
| --z-count-down-font-size | _var(--z-font-size-md)_ | - |
| --z-count-down-line-height | _var(--z-line-height-md)_ | - |