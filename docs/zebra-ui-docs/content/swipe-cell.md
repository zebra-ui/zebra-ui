# SwipeCell 滑动单元格

### 介绍

可以左右滑动来展示操作按钮的单元格组件。

## 代码演示

### 基础用法

`SwipeCell` 组件提供了 `left` 和 `right` 两个插槽，用于定义两侧滑动区域的内容。

```html
<z-swipe-cell>
  <template #left>
    <z-button square type="primary" text="选择" />
  </template>
  <z-cell :border="false" title="单元格" value="内容" />
  <template #right>
    <z-button square type="danger" text="删除" />
    <z-button square type="primary" text="收藏" />
  </template>
</z-swipe-cell>
```

### 自定义内容

`SwipeCell` 可以嵌套任意内容，比如嵌套一个商品卡片。

```html
<z-swipe-cell>
  <z-card title="标题" :cover="cover" header-bordered>
    这是一段文字
    <template #actions>
      <z-button type="primary" size="mini">操作</z-button>
    </template>
  </z-card>
  <template #right>
    <z-button
      square
      type="danger"
      text="删除"
      :custom-style="{ height: '100%' }"
    />
  </template>
</z-swipe-cell>
```

```js
import { ref } from 'vue'
const cover = ref(
  'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg'
)
```

### 异步关闭

通过传入 `before-close` 回调函数，可以自定义两侧滑动内容关闭时的行为。

```html
<z-swipe-cell :before-close="beforeClose">
  <template #left>
    <z-button square type="primary" text="选择" />
  </template>
  <z-cell :border="false" title="单元格" value="内容" />
  <template #right>
    <z-button square type="danger" text="删除" />
  </template>
</z-swipe-cell>
```

```js
import { useDialog } from '../../uni_modules/zebra-ui'
const dialog = useDialog()
const beforeClose = ({ position }: { position: string }) => {
  switch (position) {
    case 'left':
    case 'cell':
    case 'outside':
      return true
    case 'right':
      return new Promise<boolean>((resolve) => {
        dialog
          .showConfirmDialog({
            title: '确定删除吗'
          })
          .then(() => resolve(true))
          .catch(() => resolve(false))
      })
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标识符，通常为一个唯一的字符串或数字，可以在事件参数中获取到 | _number \| string_ | `''` |
| left-width | 指定左侧滑动区域宽度，单位为 `px` | _number \| string_ | `auto` |
| right-width | 指定右侧滑动区域宽度，单位为 `px` | _number \| string_ | `auto` |
| before-close | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(args) => boolean \| Promise\<boolean\>_ | - |
| disabled | 是否禁用滑动 | _boolean_ | `false` |

### Slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | 默认显示的内容     |
| left    | 左侧滑动区域的内容 |
| right   | 右侧滑动区域的内容 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | _position: 'left' \| 'right' \| 'cell' \| 'outside'_ |
| open | 打开时触发 | _{ name: string \| number, position: 'left' \| 'right' }_ |
| close | 关闭时触发 | _{ name: string \| number, position: 'left' \| 'right' \| 'cell' \| 'outside' }_ |

### beforeClose 参数

beforeClose 的第一个参数为对象，对象中包含以下属性：

| 参数名   | 说明             | 类型                                       |
| -------- | ---------------- | ------------------------------------------ |
| name     | 标识符           | _string \| number_                         |
| position | 关闭时的点击位置 | _'left' \| 'right' \| 'cell' \| 'outside'_ |

### 方法

通过 ref 可以获取到 SwipeCell 实例并调用实例方法。

| 方法名 | 说明             | 参数                      | 返回值 |
| ------ | ---------------- | ------------------------- | ------ |
| open   | 打开单元格侧边栏 | position: `left \| right` | -      |
| close  | 收起单元格侧边栏 | -                         | -      |
