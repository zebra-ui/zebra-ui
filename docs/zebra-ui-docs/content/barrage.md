# Barrage 弹幕

### 介绍

实现观看视频时弹出的评论性字幕功能。

## 代码演示

### 基础用法

可以通过 `v-model` 双向绑定弹幕数据，`Barrage` 会在组件区域内播放文字弹幕，使用数组数据 `push()` 可以发送弹幕文字。

```html
<z-barrage v-model="list">
  <view class="video"></view>
</z-barrage>
<view style="margin-top: 20rpx">
  <z-button @click="add" type="primary" size="small"> 弹幕 </z-button>
</view>
```

```ts
import { ref, watch } from 'vue'
const defaultList = [
  { id: 11, text: 'zebra-ui' },
  { id: 12, text: '666666' },
  { id: 13, text: '哈哈哈哈哈哈' },
  { id: 14, text: 'uniapp' },
  { id: 15, text: 'zebra-swiper' },
  { id: 16, text: '嘻嘻嘻' },
  {
    id: 17,
    text: '这条弹幕很长这条弹幕很长这条弹幕很长这条弹幕很长这条弹幕很长'
  }
]
const list = ref([...defaultList])
const add = () => {
  list.value.push({ id: Math.random(), text: 'Barrage' })
}
```

### 模拟视频弹幕

设置 `auto-play` 为 `false` 属性后，需要使用 `play()` 进行弹幕播放，暂停可以使用 `pause()` 实现。

```html
<z-barrage v-model="videoList" ref="videoBarrage" :auto-play="false">
  <view class="video"></view>
</z-barrage>
<view style="margin-top: 10px">
  <z-button
    @click="videoAdd"
    type="primary"
    size="small"
    :disabled="!isPlay"
  >
    弹幕
  </z-button>
  <z-button
    :custom-style="{ 'margin-left': '20rpx' }"
    @click="toggle()"
    size="small"
  >
    {{ isPlay ? '暂停' : '播放' }}
  </z-button>
</view>
```

```ts
const videoList = ref([...defaultList])
const videoBarrage = ref()
const videoAdd = () => {
  videoList.value.push({ id: Math.random(), text: 'Barrage' })
}

const isPlay = ref(false)

const toggle = (value = !isPlay.value) => {
  isPlay.value = value
}

watch(isPlay, () => {
  if (isPlay.value) videoBarrage.value?.play()
  else videoBarrage.value?.pause()
})
```

```css
.demo-barrage {
  .video {
    width: 100%;
    height: 300rpx;
    background-color: var(--z-gray-2);
  }
}
```

## API

### Props

| 参数      | 说明                              | 类型               | 默认值 |
| --------- | --------------------------------- | ------------------ | ------ |
| v-model   | 弹幕数据                          | _BarrageItem[]_    | -      |
| auto-play | 是否自动播放弹幕                  | _boolean_          | `true` |
| rows      | 弹幕文字行数                      | _number \| string_ | `4`    |
| top       | 弹幕文字区域顶部间距，单位 `px`   | _number \| string_ | `10`   |
| duration  | 弹幕文字滑过容器的时间，单位 `ms` | _number \| string_ | `4000` |
| delay     | 弹幕动画延时，单位 `ms`           | _number_           | `300`  |

### 方法

通过 ref 可以获取到 Barrage 实例并调用实例方法。

| 方法名 | 说明     | 参数 | 返回值 |
| ------ | -------- | ---- | ------ |
| play   | 播放弹幕 | -    | -      |
| pause  | 暂停弹幕 | -    | -      |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 弹幕组件子元素 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                    | 默认值             | 描述 |
| ----------------------- | ------------------ | ---- |
| --z-barrage-font-size | _32rpx_             | -    |
| --z-barrage-space     | _20rpx_             | -    |
| --z-barrage-color     | _var(--z-white)_ | -    |
| --z-barrage-font      | _inherit_          | -    |
