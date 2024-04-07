# List 列表

### 介绍

用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。

> 因为uniapp组件中无法监听页面滚动，所以需要再页面中监听滚动后通过uni.$emit发送给zebra-ui。

## 代码演示

### 基础用法

List 组件通过 `loading` 和 `finished` 两个变量控制加载状态，当组件滚动到底部时，会触发 `load` 事件并将 `loading` 设置成 `true`。此时可以发起异步操作并更新数据，数据更新完毕后，将 `loading` 设置成 `false` 即可。若数据已全部加载完毕，则直接将 `finished` 设置成 `true` 即可。

```html
<z-list
  id="list1"
  v-model:loading="list[0].loading"
  :finished="list[0].finished"
  finished-text="没有更多了"
  @load="onLoadData(0)"
>
  <z-cell
    v-for="item in list[0].items"
    :key="item"
    :title="`单元格${item}`"
    value="内容"
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
  // $emit名称为z-list-${组件id}
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

### 错误提示

若列表数据加载失败，将 `error` 设置成 `true` 即可显示错误提示，用户点击错误提示后会重新触发 load 事件。

```html
<z-list
  id="list2"
  v-model:loading="list[1].loading"
  v-model:error="list[1].error"
  :finished="list[1].finished"
  error-text="请求失败，点击重新加载"
  @load="onLoadData(1)"
>
  <z-cell
    v-for="item in list[1].items"
    :key="item"
    :title="`单元格${item}`"
    value="内容"
  />
</z-list>
```

### 下拉刷新

List 组件可以与 [PullRefresh](/pull-refresh) 组件结合使用，实现下拉刷新的效果。

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
    finished-text="没有更多了"
    @load="onLoadData(2)"
  >
    <z-cell
      v-for="item in list[2].items"
      :key="item"
      :title="`单元格${item}`"
      value="内容"
    />
  </z-list>
</z-pull-refresh>
```

```js
import { ref } from 'vue'
// @ts-ignore
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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:loading | 是否处于加载状态，加载过程中不触发 `load` 事件 | _boolean_ | `false` |
| v-model:error | 是否加载失败，加载失败后点击错误提示可以重新触发 `load` 事件 | _boolean_ | `false` |
| finished | 是否已加载完成，加载完成后不再触发 `load` 事件 | _boolean_ | `false` |
| offset | 滚动条与底部距离小于 offset 时触发 `load` 事件 | _number \| string_ | `30` |
| loading-text | 加载过程中的提示文案 | _string_ | `加载中...` |
| finished-text | 加载完成后的提示文案 | _string_ | - |
| error-text | 加载失败后的提示文案 | _string_ | - |
| immediate-check | 是否在初始化时立即执行滚动位置检查 | _boolean_ | `true` |
| disabled | 是否禁用滚动加载 | _boolean_ | `false` |
| direction | 滚动触发加载的方向，可选值为 `up` | _string_ | `down` |

### Events

| 事件名 | 说明                               | 回调参数 |
| ------ | ---------------------------------- | -------- |
| load   | 滚动条与底部距离小于 offset 时触发 | -        |

### 方法

通过 ref 可以获取到 List 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| check | 检查当前的滚动位置，若已滚动至底部，则会触发 load 事件 | - | - |

### Slots

| 名称     | 说明                       |
| -------- | -------------------------- |
| default  | 列表内容                   |
| loading  | 自定义底部加载中提示       |
| finished | 自定义加载完成后的提示文案 |
| error    | 自定义加载失败后的提示文案 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                         | 默认值                    | 描述 |
| ---------------------------- | ------------------------- | ---- |
| --z-list-text-color        | _var(--z-text-color-2)_ | -    |
| --z-list-text-font-size    | _var(--z-font-size-md)_ | -    |
| --z-list-text-line-height  | _100rpx_                    | -    |
| --z-list-loading-icon-size | _32rpx_                    | -    |
