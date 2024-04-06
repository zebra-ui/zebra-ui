# Barrage Barrage

### introduce

Implement the pop-up comment subtitle function when watching videos.

## Code Demo

### Basic usage

Barrage data can be bidirectionally bound through `v-model`. `Barrage` will play text barrages in the component area, and array data `push()` can be used to send barrage text.

```html
<z-barrage v-model="list">
   <view class="video"></view>
</z-barrage>
<view style="margin-top: 20rpx">
   <z-button @click="add" type="primary" size="small"> Barrage </z-button>
</view>
```

```ts
import { ref, watch } from 'vue'
const defaultList = [
   { id: 11, text: 'zebra-ui' },
   { id: 12, text: '666666' },
   { id: 13, text: 'Hahahahahaha' },
   { id: 14, text: 'uniapp' },
   { id: 15, text: 'zebra-swiper' },
   { id: 16, text: 'heeheehee' },
   {
     id: 17,
     text: 'This barrage is very long. This barrage is very long. This barrage is very long. This barrage is very long.'
   }
]
const list = ref([...defaultList])
const add = () => {
   list.value.push({ id: Math.random(), text: 'Barrage' })
}
```

### Simulate video barrage

After setting `auto-play` to the `false` attribute, you need to use `play()` to play the barrage, and pause using `pause()`.

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
     Barrage
   </z-button>
   <z-button
     :custom-style="{ 'margin-left': '20rpx' }"
     @click="toggle()"
     size="small"
   >
     {{ isPlay ? 'pause' : 'play' }}
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

| Parameters | Description | Type | Default value |
| --------- | ---------------------------------- | ------------------ | ------ |
| v-model | Barrage data | _BarrageItem[]_ | - |
| auto-play | Whether to automatically play barrages | _boolean_ | `true` |
| rows | Number of lines of barrage text | _number \| string_ | `4` |
| top | Spacing at the top of the barrage text area, unit `px` | _number \| string_ | `10` |
| duration | The time for the barrage text to slide across the container, unit `ms` | _number \| string_ | `4000` |
| delay | barrage animation delay, unit `ms` | _number_ | `300` |

### method

Barrage instances can be obtained through ref and instance methods can be called.

| Method name | Description | Parameters | Return value |
| ------ | -------- | ---- | ------ |
| play | play barrage | - | - |
| pause | Pause barrage | - | - |

### Slots

| Name | Description |
| ------- | --------------- |
| default | sub-element of barrage component |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ----------------------- | ------------------ | ---- |
| --z-barrage-font-size | _32rpx_ | - |
| --z-barrage-space | _20rpx_ | - |
| --z-barrage-color | _var(--z-white)_ | - |
| --z-barrage-font | _inherit_ | - |