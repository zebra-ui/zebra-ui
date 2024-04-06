# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。支持组件调用和函数调用两种方式。

### 函数调用

为了便于使用 `Dialog`，zebra 提供了一系列辅助函数，通过辅助函数可以快速唤起全局的弹窗组件。

比如使用 `showDialog` 函数，调用后会直接在页面中渲染对应的弹出框。

```js
import { useDialog } from '../../uni_modules/zebra-ui'
const dialog = useDialog()
dialog.showDialog({ title: '标题', message: '这是一个示例提示' })
```

## 代码演示

### 消息提示

用于提示一些消息，默认只包含一个确认按钮。

```js
import { useDialog } from '../../uni_modules/zebra-ui'
const dialog = useDialog()

dialog.showDialog({ title: '标题', message: '这是一个示例提示' })
```

### 消息确认

用于确认消息，默认包含确认和取消按钮。

```js
dialog.showConfirmDialog({
  title: '标题',
  message: '这是一个示例提示'
})
```

### 圆角按钮风格

将 theme 选项设置为 `round-button` 可以展示圆角按钮风格的弹窗。

```js
dialog.showDialog({
  title: '标题',
  theme: 'round-button',
  message: '这是一个示例提示'
})
```

### 异步关闭

通过 `beforeClose` 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。

```js
const showDialogMethod = () => {
  dialog.showConfirmDialog({
    title: '标题',
    message: '异步关闭示例',
    beforeClose
  })
}
const beforeClose = (action: any) =>
  new Promise((resolve) => {
    setTimeout(() => {
      // action !== 'confirm'  拦截取消操作
      resolve(action === 'confirm')
    }, 1000)
  })
```

### 使用 Dialog 组件

如果你需要在 Dialog 内嵌入组件或其他自定义内容，可以直接使用 Dialog 组件，并使用默认插槽进行定制。

```html
<z-dialog
  v-model:show="show"
  use-component
  title="标题"
  show-cancel-button
>
  <z-picker :columns="columns" :show-toolbar="false" />
</z-dialog>
```

```js
import { ref } from 'vue';
const show = ref(false);
```

## API

### 方法

zebra 中导出了以下 Dialog 相关的辅助函数：

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| showDialog | 展示消息提示弹窗，默认包含确认按钮 | _options: DialogOptions_ | `Promise<void>` |
| showConfirmDialog | 展示消息确认弹窗，默认包含确认和取消按钮 | _options: DialogOptions_ | `Promise<void>` |
| closeDialog | 关闭当前展示的弹窗 | - | `void` |
| setDialogDefaultOptions | 修改默认配置，影响所有的 `showDialog` 调用 | _options: DialogOptions_ | `void` |
| resetDialogDefaultOptions | 重置默认配置，影响所有的 `showDialog` 调用 | - | `void` |

### DialogOptions

调用 `showDialog` 等方法时，支持传入以下选项：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | - |
| width | 弹窗宽度，默认单位为 `px` | _number \| string_ | `320px` |
| message | 文本内容 | _string_ | - |
| messageAlign | 内容对齐方式，可选值为 `left` `right` | _string_ | `center` |
| theme | 样式风格，可选值为 `round-button` | _string_ | `default` |
| className | 自定义类名 | _string \| Array \| object_ | - |
| showConfirmButton | 是否展示确认按钮 | _boolean_ | `true` |
| showCancelButton | 是否展示取消按钮 | _boolean_ | `false` |
| confirmButtonText | 确认按钮文案 | _string_ | `确认` |
| confirmButtonColor | 确认按钮颜色 | _string_ | `#ee0a24` |
| confirmButtonDisabled | 是否禁用确认按钮 | _boolean_ | `false` |
| cancelButtonText | 取消按钮文案 | _string_ | `取消` |
| cancelButtonColor | 取消按钮颜色 | _string_ | `black` |
| cancelButtonDisabled | 是否禁用取消按钮 | _boolean_ | `false` |
| overlay | 是否展示遮罩层 | _boolean_ | `true` |
| overlayClass | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| closeOnClickOverlay | 是否在点击遮罩层后关闭弹窗 | _boolean_ | `false` |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| beforeClose | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(action: string) => boolean \| Promise\<boolean\>_ | - |
| transition | 动画类名，等价于 [transition](/transition) 的 `name` 属性 | _string_ | - |

### Props

通过组件调用 `Dialog` 时，支持以下 Props：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:show | 是否显示弹窗 | _boolean_ | - |
| title | 标题 | _string_ | - |
| width | 弹窗宽度，默认单位为 `px` | _number \| string_ | `640rpx` |
| message | 文本内容 | _string_ | - |
| message-align | 内容水平对齐方式，可选值为 `left` `right` `justify` | _string_ | `center` |
| theme | 样式风格，可选值为 `round-button` | _string_ | `default` |
| show-confirm-button | 是否展示确认按钮 | _boolean_ | `true` |
| show-cancel-button | 是否展示取消按钮 | _boolean_ | `false` |
| confirm-button-text | 确认按钮文案 | _string_ | `确认` |
| confirm-button-color | 确认按钮颜色 | _string_ | `#ee0a24` |
| confirm-button-disabled | 是否禁用确认按钮 | _boolean_ | `false` |
| cancel-button-text | 取消按钮文案 | _string_ | `取消` |
| cancel-button-color | 取消按钮颜色 | _string_ | `black` |
| cancel-button-disabled | 是否禁用取消按钮 | _boolean_ | `false` |
| z-index | 将弹窗的 z-index 层级设置为一个固定值 | _number \| string_ | `2000+` |
| overlay | 是否展示遮罩层 | _boolean_ | `true` |
| overlay-class | 自定义遮罩层类名 | _string_ | - |
| overlay-style | 自定义遮罩层样式 | _object_ | - |
| close-on-click-overlay | 是否在点击遮罩层后关闭弹窗 | _boolean_ | `false` |
| lock-scroll | 是否锁定背景滚动 | _boolean_ | `true` |
| before-close | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(action: string) => boolean \| Promise\<boolean\>_ | - |
| transition | 动画类名，等价于 [transition](/transition) 的 `name` 属性 | _string_ | - |

### Events

通过组件调用 `Dialog` 时，支持以下事件：

| 事件名  | 说明                     | 回调参数 |
| ------- | ------------------------ | -------- |
| confirm | 点击确认按钮时触发       | -        |
| cancel  | 点击取消按钮时触发       | -        |
| open    | 打开弹窗时触发           | -        |
| close   | 关闭弹窗时触发           | -        |
| opened  | 打开弹窗且动画结束后触发 | -        |
| closed  | 关闭弹窗且动画结束后触发 | -        |

### Slots

通过组件调用 `Dialog` 时，支持以下插槽：

| 名称    | 说明               |
| ------- | ------------------ |
| default | 自定义内容         |
| title   | 自定义标题         |
| footer  | 自定义底部按钮区域 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-dialog-width | _640rpx_ | - |
| --z-dialog-small-screen-width | _90%_ | - |
| --z-dialog-font-size | _var(--z-font-size-lg)_ | - |
| --z-dialog-transition | _var(--z-duration-base)_ | - |
| --z-dialog-radius | _32rpx_ | - |
| --z-dialog-background | _var(--z-background-2)_ | - |
| --z-dialog-header-font-weight | _var(--z-font-bold)_ | - |
| --z-dialog-header-line-height | _48rpx_ | - |
| --z-dialog-header-padding-top | _52rpx_ | - |
| --z-dialog-header-isolated-padding | _var(--z-padding-lg) 0_ | - |
| --z-dialog-message-padding | _var(--z-padding-lg)_ | - |
| --z-dialog-message-font-size | _var(--z-font-size-md)_ | - |
| --z-dialog-message-line-height | _var(--z-line-height-md)_ | - |
| --z-dialog-message-max-height | _60vh_ | - |
| --z-dialog-has-title-message-text-color | _var(--z-gray-7)_ | - |
| --z-dialog-has-title-message-padding-top | _var(--z-padding-xs)_ | - |
| --z-dialog-button-height | _96rpx_ | - |
| --z-dialog-round-button-height | _72rpx_ | - |
| --z-dialog-confirm-button-text-color | _var(--z-primary-color)_ | - |
