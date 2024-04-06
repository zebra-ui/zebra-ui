# PullRefresh 下拉刷新

### 介绍

用于提供下拉刷新的交互操作。

## 代码演示

### 基础用法

下拉刷新时会触发 `refresh` 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 `v-model` 设置为 `false`，表示加载完成。

```html
<z-pull-refresh
  id="refresh1"
  v-model="loading"
  @refresh="onRefresh(true)"
>
  <z-cell
    v-for="item in 30"
    :key="item"
    :title="`单元格${item}`"
    value="内容"
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
      toast.showToast('刷新成功')
    }
    loading.value = false
    count.value++
  }, 1000)
}
```

### 成功提示

通过 `success-text` 可以设置刷新成功后的顶部提示文案。

```html
<z-pull-refresh
  id="refresh2"
  v-model="loading"
  success-text="刷新成功"
  @refresh="onRefresh(false)"
>
  <z-cell
    v-for="item in 10"
    :key="item"
    :title="`单元格${item}`"
    value="内容"
  />
</z-pull-refresh>
```

### 自定义提示

通过插槽可以自定义下拉刷新过程中的提示内容。

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
    :title="`单元格${item}`"
    value="内容"
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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否处于加载中状态 | _boolean_ | - |
| pulling-text | 下拉过程提示文案 | _string_ | `下拉即可刷新...` |
| loosing-text | 释放过程提示文案 | _string_ | `释放即可刷新...` |
| loading-text | 加载过程提示文案 | _string_ | `加载中...` |
| success-text | 刷新成功提示文案 | _string_ | - |
| success-duration | 刷新成功提示展示时长(ms) | _number \| string_ | `500` |
| animation-duration | 动画时长 | _number \| string_ | `300` |
| head-height | 顶部内容高度 | _number \| string_ | `50` |
| pull-distance | 触发下拉刷新的距离 | _number \| string_ | 与 `head-height` 一致 |
| disabled | 是否禁用下拉刷新 | _boolean_ | `false` |

### Events

| 事件名  | 说明                   | 回调参数                               |
| ------- | ---------------------- | -------------------------------------- |
| refresh | 下拉刷新时触发         | -                                      |
| change  | 拖动时或状态改变时触发 | _{ status: string, distance: number }_ |

### Slots

| 名称    | 说明                 | 参数                   |
| ------- | -------------------- | ---------------------- |
| default | 自定义内容           | -                      |
| normal  | 非下拉状态时顶部内容 | -                      |
| pulling | 下拉过程中顶部内容   | _{ distance: number }_ |
| loosing | 释放过程中顶部内容   | _{ distance: number }_ |
| loading | 加载过程中顶部内容   | _{ distance: number }_ |
| success | 刷新成功提示内容     | -                      |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                                 | 默认值                    | 描述 |
| ------------------------------------ | ------------------------- | ---- |
| --z-pull-refresh-head-height       | _100rpx_                    | -    |
| --z-pull-refresh-head-font-size    | _var(--z-font-size-md)_ | -    |
| --z-pull-refresh-head-text-color   | _var(--z-text-color-2)_ | -    |
| --z-pull-refresh-loading-icon-size | _32rpx_                    | -    |
