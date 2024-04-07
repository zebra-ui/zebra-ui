# List list

### introduce

Used to display long lists. When the list is about to scroll to the bottom, the event will be triggered and more list items will be loaded.

> Because the page scrolling cannot be monitored in the uniapp component, it is necessary to monitor the scrolling in the page and then send it to zebra-ui through uni.$emit.

## Code Demo

### Basic usage

The List component controls the loading status through the two variables `loading` and `finished`. When the component scrolls to the bottom, the `load` event is triggered and `loading` is set to `true`. At this time, you can initiate an asynchronous operation and update the data. After the data is updated, set `loading` to `false`. If all the data has been loaded, just set `finished` to `true`.

```html
<z-list
   id="list1"
   v-model:loading="list[0].loading"
   :finished="list[0].finished"
   finished-text="No more"
   @load="onLoadData(0)"
>
   <z-cell
     v-for="item in list[0].items"
     :key="item"
     :title="`Cell${item}`"
     value="content"
   />
</z-list>
```

```ts
<script lang="ts" setup>
import { ref } from 'vue'
import { onPageScroll } from '@dcloudio/uni-app'
const list = ref([
   {
     items: [] as string[],
     refreshing: false,
     loading: false,
     error: false,
     finished: false
   },
   {
     items: [] as string[],
     refreshing: false,
     loading: false,
     error: false,
     finished: false
   },
   {
     items: [] as string[],
     refreshing: false,
     loading: false,
     error: false,
     finished: false
   }
])

onPageScroll((event: any) => {
   // $emit name is z-list-${component id}
   uni.$emit(`z-list-list1`, event)
})

const onLoadData = (index: number) => {
   const currentList = list.value[index]
   currentList.loading = true

   setTimeout(() => {
     if (currentList.refreshing) {
       currentList.items = []
       currentList.refreshing = false
     }

     for (let i = 0; i < 10; i++) {
       const text = currentList.items.length + 1
       currentList.items.push(text < 10 ? '0' + text : String(text))
     }

     currentList.loading = false
     currentList.refreshing = false
     if (index === 1 && currentList.items.length === 10 && !currentList.error) {
       currentList.error = true
     } else {
       currentList.error = false
     }

     if (currentList.items.length >= 40) {
       currentList.finished = true
     }
   }, 2000)
}
</script>
```

### Error message

If the list data fails to load, set `error` to `true` to display an error prompt. After the user clicks on the error prompt, the load event will be retriggered.

```html
<z-list
   id="list2"
   v-model:loading="list[1].loading"
   v-model:error="list[1].error"
   :finished="list[1].finished"
   error-text="Request failed, click to reload"
   @load="onLoadData(1)"
>
   <z-cell
     v-for="item in list[1].items"
     :key="item"
     :title="`Cell${item}`"
     value="content"
   />
</z-list>
```

### Pull down to refresh

The List component can be used in conjunction with the [PullRefresh](/pull-refresh) component to achieve the pull-down refresh effect.

```html
<z-pull-refresh
   id="refresh1"
   v-model="list[2].refreshing"
   @refresh="onRefresh(2)"
>
   <z-list
     id="list3"
     v-model:loading="list[2].loading"
     :finished="list[2].finished"
     finished-text="No more"
     @load="onLoadData(2)"
   >
     <z-cell
       v-for="item in list[2].items"
       :key="item"
       :title="`Cell${item}`"
       value="content"
     />
   </z-list>
</z-pull-refresh>
```

```js
import { ref } from 'vue'
import { onPageScroll } from '@dcloudio/uni-app'
const list = ref([
   {
     items: [] as string[],
     refreshing: false,
     loading: false,
     error: false,
     finished: false
   },
   {
     items: [] as string[],
     refreshing: false,
     loading: false,
     error: false,
     finished: false
   },
   {
     items: [] as string[],
     refreshing: false,
     loading: false,
     error: false,
     finished: false
   }
])

onPageScroll((event: any) => {
   uni.$emit(`z-list-list1`, event)
   uni.$emit(`z-list-list2`, event)
   uni.$emit(`z-list-list3`, event)
   uni.$emit(`z-pull-refresh-refresh1`, event)
})

const onLoadData = (index: number) => {
   const currentList = list.value[index]
   currentList.loading = true

   setTimeout(() => {
     if (currentList.refreshing) {
       currentList.items = []
       currentList.refreshing = false
     }

     for (let i = 0; i < 10; i++) {
       const text = currentList.items.length + 1
       currentList.items.push(text < 10 ? '0' + text : String(text))
     }

     currentList.loading = false
     currentList.refreshing = false
     if (index === 1 && currentList.items.length === 10 && !currentList.error) {
       currentList.error = true
     } else {
       currentList.error = false
     }

     if (currentList.items.length >= 40) {
       currentList.finished = true
     }
   }, 2000)
}

const onRefresh = (index: number) => {
   list.value[index].finished = false
   onLoadData(index)
}
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model:loading | Whether it is in the loading state, the `load` event will not be triggered during the loading process | _boolean_ | `false` |
| v-model:error | Whether the loading failed. After the loading fails, click the error prompt to re-trigger the `load` event | _boolean_ | `false` |
| finished | Whether the loading has been completed. The `load` event will no longer be triggered after the loading is completed | _boolean_ | `false` |
| offset | The `load` event is triggered when the distance between the scroll bar and the bottom is less than offset | _number \| string_ | `30` |
| loading-text | Prompt text during loading | _string_ | `Loading...` |
| finished-text | Prompt text after loading is completed | _string_ | - |
| error-text | Prompt text after loading failure | _string_ | - |
| immediate-check | Whether to perform scroll position check immediately during initialization | _boolean_ | `true` |
| disabled | Whether to disable rolling loading | _boolean_ | `false` |
| direction | The direction in which scrolling triggers loading, the optional value is `up` | _string_ | `down` |

### Events

| Event name | Description | Callback parameters |
| ------ | ---------------------------------- | -------- |
| load | Triggered when the distance between the scroll bar and the bottom is less than offset | - |

### method

Through ref, you can get the List instance and call the instance method.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| check | Check the current scroll position. If it has scrolled to the bottom, the load event will be triggered | - | - |

### Slots

| Name | Description |
| -------- | -------------------------- |
| default | list content |
| loading | Customize the loading prompt at the bottom |
| finished | Customized prompt copy after loading is completed |
| error | Customized prompt text after failed loading |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ---------------------------- | --------------------------------- | ---- |
| --z-list-text-color | _var(--z-text-color-2)_ | - |
| --z-list-text-font-size | _var(--z-font-size-md)_ | - |
| --z-list-text-line-height | _100rpx_ | - |
| --z-list-loading-icon-size | _32rpx_ | - |