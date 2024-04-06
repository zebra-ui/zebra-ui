# Notify 消息提示

### 介绍

在页面顶部展示消息提示，支持组件调用和函数调用两种方式。

### 函数调用

为了便于使用 `Notify`，zebra 提供了一系列辅助函数，通过辅助函数可以快速唤起全局的消息提示。

比如使用 `showNotify` 函数，调用后会直接在页面中渲染对应的提示。

```js
import { useNotify } from '../../uni_modules/zebra-ui'
const notify = useNotify()
notify.showNotify({
  message: '通知内容',
  type
})
```

## 代码演示

### 基础用法

```js
import { useNotify } from '../../uni_modules/zebra-ui'
const notify = useNotify()
// 3 秒后自动关闭
notify.showNotify('通知内容');
// 主动关闭
notify.closeNotify();
```

### 通知类型

支持 `primary`、`success`、`warning`、`danger` 四种通知类型，默认为 `danger`。

```js
import { useNotify } from '../../uni_modules/zebra-ui'
const notify = useNotify()

// 主要通知
notify.showNotify({ type: 'primary', message: '通知内容' });

// 成功通知
notify.showNotify({ type: 'success', message: '通知内容' });

// 危险通知
notify.showNotify({ type: 'danger', message: '通知内容' });

// 警告通知
notify.showNotify({ type: 'warning', message: '通知内容' });
```

### 自定义通知

自定义消息通知的颜色、位置和展示时长。

```js
notify.showNotify({
  message: '自定义颜色',
  color: '#ad0000',
  background: '#ffe1e1',
});

notify.showNotify({
  message: '自定义位置',
  position: 'bottom',
});

notify.showNotify({
  message: '自定义时长',
  duration: 1000,
});
```

### 使用 Notify 组件

如果需要在 Notify 内嵌入组件或其他自定义内容，可以直接使用 Notify 组件，并使用默认插槽进行定制。

```html
<z-cell is-link title="使用 Notify 组件" @click="showComponentCall" />
<z-notify
  v-model:show="show"
  type="success"
  custom-navbar
  use-component
>
  <z-icon name="notification" />
  <text style="margin-left: 8rpx">内容</text>
</z-notify>
```

```js
const show = ref(false)
const showComponentCall = () => {
  show.value = true
  setTimeout(() => {
    show.value = false
  }, 2000)
}
```

## API

### 方法

zebra 中导出了以下 Notify 相关的辅助函数：

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| showNotify | 在页面顶部展示 Notify | `NotifyOptions \| string` | notify 实例 |
| closeNotify | 关闭当前展示的 Notify | - | `void` |
| setNotifyDefaultOptions | 修改默认配置，影响所有的 `showNotify` 调用 | `NotifyOptions` | `void` |
| resetNotifyDefaultOptions | 重置默认配置，影响所有的 `showNotify` 调用 | - | `void` |

### NotifyOptions

调用 `showNotify` 等方法时，支持传入以下选项：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `warning` | _NotifyType_ | `danger` |
| message | 展示文案 | _string_ | - |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | _number \| string_ | `3000` |
| z-index | 将组件的 z-index 层级设置为一个固定值 | _number \| string_ | `2000+` |
| position | 弹出位置，可选值为 `bottom` | _NotifyPosition_ | `top` |
| color | 字体颜色 | _string_ | `white` |
| background | 背景颜色 | _string_ | - |
| className | 自定义类名 | _string \| Array \| object_ | - |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `false` |
| onClick | 点击时的回调函数 | _(event: MouseEvent): void_ | - |
| onOpened | 完全展示后的回调函数 | _() => void_ | - |
| onClose | 关闭时的回调函数 | _() => void_ | - |

### Props

通过组件调用 `Notify` 时，支持以下 Props：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:show | 是否显示通知 | _boolean_ | `false` |
| type | 类型，可选值为 `primary` `success` `warning` | _NotifyType_ | `danger` |
| message | 展示文案 | _string_ | - |
| z-index | 将组件的 z-index 层级设置为一个固定值 | _number \| string_ | `2000+` |
| position | 弹出位置，可选值为 `bottom` | _NotifyPosition_ | `top` |
| color | 字体颜色 | _string_ | `white` |
| background | 背景颜色 | _string_ | - |
| class-name | 自定义类名 | _string \| Array \| object_ | - |
| lock-scroll | 是否锁定背景滚动 | _boolean_ | `false` |

### Events

通过组件调用 `Notify` 时，支持以下事件：

| 事件名 | 说明                 | 回调参数            |
| ------ | -------------------- | ------------------- |
| click  | 点击时的回调函数     | _event: MouseEvent_ |
| close  | 关闭时的回调函数     | -                   |
| opened | 完全展示后的回调函数 | -                   |

### Slots

通过组件调用 `Notify` 时，支持以下插槽：

| 名称    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-notify-text-color | _var(--z-white)_ | - |
| --z-notify-padding | _var(--z-padding-xs) var(--z-padding-md)_ | - |
| --z-notify-font-size | _var(--z-font-size-md)_ | - |
| --z-notify-line-height | _var(--z-line-height-md)_ | - |
| --z-notify-primary-background | _var(--z-primary-color)_ | - |
| --z-notify-success-background | _var(--z-success-color)_ | - |
| --z-notify-danger-background | _var(--z-danger-color)_ | - |
| --z-notify-warning-background | _var(--z-warning-color)_ | - |
