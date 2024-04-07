# CountDown 倒计时

### 介绍

用于实时展示倒计时数值，支持毫秒精度。

## 代码演示

### 基础用法

`time` 属性表示倒计时总时长，单位为毫秒。

```html
<z-count-down :time="time" />
```

```js
import { ref } from 'vue';
const time = ref(30 * 60 * 60 * 1000)
```

### 自定义格式

通过 `format` 属性设置倒计时文本的内容。

```html
<z-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
```

### 毫秒级渲染

倒计时默认每秒渲染一次，设置 `millisecond` 属性可以开启毫秒级渲染。

```html
<z-count-down millisecond :time="time" format="HH:mm:ss:SS" />
```

### 自定义样式

通过插槽自定义倒计时的样式，`timeData` 对象格式见下方表格。

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

### 手动控制

通过 ref 获取到组件实例后，可以调用 `start`、`pause`、`reset` 方法。

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
  <z-grid-item icon="play-circle" text="开始" @click="start" />
  <z-grid-item icon="timeout" text="暂停" @click="pause" />
  <z-grid-item icon="reload" text="重置" @click="reset" />
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
const onFinish = () => toast.showToast('倒计时结束')
```

## API

### Props

| 参数        | 说明                 | 类型               | 默认值     |
| ----------- | -------------------- | ------------------ | ---------- |
| time        | 倒计时时长，单位毫秒 | _number \| string_ | `0`        |
| format      | 时间格式             | _string_           | `HH:mm:ss` |
| auto-start  | 是否自动开始倒计时   | _boolean_          | `true`     |
| millisecond | 是否开启毫秒级渲染   | _boolean_          | `false`    |

### format 格式

| 格式 | 说明         |
| ---- | ------------ |
| DD   | 天数         |
| HH   | 小时         |
| mm   | 分钟         |
| ss   | 秒数         |
| S    | 毫秒（1 位） |
| SS   | 毫秒（2 位） |
| SSS  | 毫秒（3 位） |

### Events

| 事件名 | 说明             | 回调参数                   |
| ------ | ---------------- | -------------------------- |
| finish | 倒计时结束时触发 | -                          |
| change | 倒计时变化时触发 | _currentTime: CurrentTime_ |

### Slots

| 名称    | 说明       | 参数                       |
| ------- | ---------- | -------------------------- |
| default | 自定义内容 | _currentTime: CurrentTime_ |

### CurrentTime 格式

| 名称         | 说明                   | 类型     |
| ------------ | ---------------------- | -------- |
| total        | 剩余总时间（单位毫秒） | _number_ |
| days         | 剩余天数               | _number_ |
| hours        | 剩余小时               | _number_ |
| minutes      | 剩余分钟               | _number_ |
| seconds      | 剩余秒数               | _number_ |
| milliseconds | 剩余毫秒               | _number_ |

### 方法

通过 ref 可以获取到 CountDown 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| start | 开始倒计时 | - | - |
| pause | 暂停倒计时 | - | - |
| reset | 重设倒计时，若 `auto-start` 为 `true`，重设后会自动开始倒计时 | - | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                         | 默认值                      | 描述 |
| ---------------------------- | --------------------------- | ---- |
| --z-count-down-text-color  | _var(--z-text-color)_     | -    |
| --z-count-down-font-size   | _var(--z-font-size-md)_   | -    |
| --z-count-down-line-height | _var(--z-line-height-md)_ | -    |
