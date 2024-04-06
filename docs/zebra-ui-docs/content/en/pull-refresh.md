# PullRefresh Pull down to refresh

### introduce

Used to provide interactive operations for pull-down refresh.

## Code Demo

### Basic usage

The `refresh` event will be triggered when pulling down to refresh. Synchronous or asynchronous operations can be performed in the callback function of the event. After the operation is completed, `v-model` is set to `false`, indicating that the loading is completed.

```html
<z-pull-refresh
   id="refresh1"
   v-model="loading"
   @refresh="onRefresh(true)"
>
   <z-cell
     v-for="item in 30"
     :key="item"
     :title="`Cell${item}`"
     value="content"
   />
</z-pull-refresh>
```

```js
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const loading = ref(false)
const onRefresh = (isShowToast: boolean) => {
   setTimeout(() => {
     if (isShowToast) {
       toast.showToast('Refresh successful')
     }
     loading.value = false
     count.value++
   }, 1000)
}
```

### Success Tips

Use `success-text` to set the top prompt text after successful refresh.

```html
<z-pull-refresh
   id="refresh2"
   v-model="loading"
   success-text="Refresh successful"
   @refresh="onRefresh(false)"
>
   <z-cell
     v-for="item in 10"
     :key="item"
     :title="`Cell${item}`"
     value="content"
   />
</z-pull-refresh>
```

### Custom prompts

The prompt content during the pull-down refresh process can be customized through the slot.

```html
<z-pull-refresh
   id="refresh3"
   v-model="loading"
   head-height="80"
   @refresh="onRefresh(true)"
>
   <template #pulling="{ distance }">
     <image
       class="doge"
       src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg"
       :style="{ transform: `scale(${distance / 80})` }"
     />
   </template>
   <template #loosing>
     <image
       src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg"
       class="doge"
     />
   </template>
   <template #loading>
     <image
       src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg"
       class="doge"
     />
   </template>
   <z-cell
     v-for="item in 2"
     :key="item"
     :title="`Cell${item}`"
     value="content"
   />
</z-pull-refresh>
<style>
.demo-pull-refresh {
   .demo-pull-refresh {
     background-color: var(--z-background-2);

     .z-pull-refresh {
       height: calc(100vh - 100rpx);
     }

     .doge {
       width: 280rpx;
       height: 144rpx;
       margin-top: 16rpx;
       border-radius: 8rpx;
     }

     text {
       padding: var(--z-padding-md) 0 0 var(--z-padding-md);
       margin: 0;
     }
   }
}
</style>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | Whether it is loading | _boolean_ | - |
| pulling-text | Prompt copy of the pull-down process | _string_ | `Pull down to refresh...` |
| loose-text | Loose process prompt copy | _string_ | `Release to refresh...` |
| loading-text | Loading process prompt copy | _string_ | `Loading...` |
| success-text | Refresh success prompt copy | _string_ | - |
| success-duration | Refresh success prompt display duration (ms) | _number \| string_ | `500` |
| animation-duration | animation duration | _number \| string_ | `300` |
| head-height | Top content height | _number \| string_ | `50` |
| pull-distance | Distance that triggers pull-down refresh | _number \| string_ | Consistent with `head-height` |
| disabled | Whether to disable pull-down refresh | _boolean_ | `false` |

### Events

| Event name | Description | Callback parameters |
| ------- | ----------------------- | ------------------------------------ |
| refresh | Triggered when pull-down to refresh | - |
| change | Triggered when dragging or when the status changes | _{ status: string, distance: number }_ |

### Slots

| Name | Description | Parameters |
| ------- | ------------------- | --------------------- |
| default | custom content | - |
| normal | Top content when not in pull-down state | - |
| pulling | Top content during pull-down process | _{ distance: number }_ |
| Loosing | Top content during release | _{ distance: number }_ |
| loading | Top content during loading | _{ distance: number }_ |
| success | Refresh success prompt content | - |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ------------------------------------ | ------------------------- | ---- |
| --z-pull-refresh-head-height | _100rpx_ | - |
| --z-pull-refresh-head-font-size | _var(--z-font-size-md)_ | - |
| --z-pull-refresh-head-text-color | _var(--z-text-color-2)_ | - |
| --z-pull-refresh-loading-icon-size | _32rpx_ | - |