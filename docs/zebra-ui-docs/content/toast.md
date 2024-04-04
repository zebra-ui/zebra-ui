# Toast 轻提示

### 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

### 函数调用

为了便于使用 `Toast`，zebra-ui 提供了一系列辅助函数，通过辅助函数可以快速唤起 Toast 组件。

比如使用 `showToast` 函数，调用后会直接在页面中渲染对应的轻提示。

:::tips
使用unplugin-auto-import插件后不需要引入，详见[进阶用法](/advanced-usage#自动引入组件api)。
:::

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
toast.showToast('提示内容');
```

## 代码演示

### 文字提示

使用 `showToast` 方法在屏幕中间展示一条文字提示。

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
toast.showToast('提示内容');
```

### 加载提示

使用 `showLoadingToast` 方法展示加载提示，通过 `forbidClick` 选项可以禁用背景点击。

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

toast.showLoadingToast({
  message: '加载中...',
  forbidClick: true,
});
```

### 成功/失败提示

使用 `showSuccessToast` 方法展示成功提示，使用 `showFailToast` 方法展示失败提示。

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

toast.showSuccessToast('成功文案');
toast.showFailToast('失败文案');
```

### 自定义图标

通过 `icon` 选项可以自定义图标，支持传入图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props)。

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

toast.showToast({
  message: '自定义图标',
  icon: 'smile',
});

toast.showToast({
  message: '自定义图片',
  icon: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png',
});
```

通过 `loadingType` 属性可以自定义加载图标类型。

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

toast.showLoadingToast({
  message: '加载中...',
  forbidClick: true,
  loadingType: 'spinner',
});
```

### 自定义位置

Toast 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Toast 展示的位置。

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

toast.showToast({
  message: '顶部展示',
  position: 'top',
});

toast.showToast({
  message: '底部展示',
  position: 'bottom',
});
```

### 文字换行方式

通过 `wordBreak` 选项可以控制 Toast 中的文字过长时的截断方式，默认值为 `break-all`，可选值为 `break-word` 和 `normal`。

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

// 换行时截断单词
toast.showToast({
  message: 'This message will contain a incomprehensibilities long word.',
  wordBreak: 'break-all',
});

// 换行时不截断单词
toast.showToast({
  message: 'This message will contain a incomprehensibilities long word.',
  wordBreak: 'break-word',
});
```

### 动态更新提示

执行 Toast 方法时会返回对应的 Toast 实例，通过修改实例上的 `message` 属性可以实现动态更新提示的效果。

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

const toastData = toast.showLoadingToast({
  duration: 0,
  forbidClick: true,
  message: '倒计时 3 秒',
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toastData!.message.value = `倒计时 ${second} 秒`
  } else {
    clearInterval(timer);
    toast.closeToast();
  }
}, 1000);
```

### 修改默认配置

通过 `setToastDefaultOptions` 函数可以全局修改 `showToast` 等方法的默认配置。

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

toast.setToastDefaultOptions({ duration: 2000 });

toast.setToastDefaultOptions('loading', { forbidClick: true });

toast.resetToastDefaultOptions();

toast.resetToastDefaultOptions('loading');
```

### 使用 Toast 组件

如果你需要在 Toast 内嵌入组件或其他自定义内容，可以直接使用 Toast 组件，并使用 message 插槽进行定制。

```html
<z-toast use-component v-model:show="show" :duration="0">
  <template #message>
    <view class="toast-custom">
      <z-icon name="error" color="var(--z-orange)"></z-icon>
      <view> 这是一段内容确定删除吗？ </view>
    </view>
    <view class="toast-button">
      <z-button type="primary" size="mini" @click="show = false"
        >确认</z-button
      >
      <z-button size="mini" @click="show = false">取消</z-button>
    </view>
  </template>
</z-toast>
```

```js
import { ref } from 'vue';
const show = ref(false)
```

```css
.demo-toast {
  .toast-custom {
    display: flex;
    align-items: center;
    padding: 30rpx;
  }

  .toast-button {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
```

## API

### 方法

zebra 中导出了以下 Toast 相关的辅助函数：

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| showToast | 展示文字提示 | `ToastOptions \| string` | Toast 实例 |
| showLoadingToast | 展示加载提示 | `ToastOptions \| string` | Toast 实例 |
| showSuccessToast | 展示成功提示 | `ToastOptions \| string` | Toast 实例 |
| showFailToast | 展示失败提示 | `ToastOptions \| string` | Toast 实例 |
| closeToast | 关闭当前展示的提示 | `closeAll: boolean` | `void` |
| setToastDefaultOptions | 修改默认配置，影响所有的 `showToast` 调用。传入 type 可以修改指定类型 Toast 的默认配置 | `type \| ToastOptions` | `void` |
| resetToastDefaultOptions | 重置默认配置，影响所有的 `showToast` 调用。传入 type 可以重置指定类型 Toast 的默认配置 | `type` | `void` |

### ToastOptions 数据结构

调用 `showToast` 等方法时，支持传入以下选项：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示类型，可选值为 `loading` `success` `fail` | _ToastType_ | `text` |
| position | 位置，可选值为 `top` `bottom` | _ToastPosition_ | `middle` |
| message | 文本内容 | _string_ | `''` |
| wordBreak | 文本内容的换行方式，可选值为 `normal` `break-all` `break-word` | _ToastWordBreak_ | `'break-all'` |
| icon | 自定义图标，支持传入图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | - |
| iconSize | 图标大小，默认单位为 `px`，可传入带`rpx`单位的字符串 | _number \| string_ | - |
| iconPrefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](/icon#props) | _string_ | `z-icon` |
| overlay | 是否显示背景遮罩层 | _boolean_ | `false` |
| forbidClick | 是否禁止背景点击 | _boolean_ | `false` |
| closeOnClick | 是否在点击后关闭 | _boolean_ | `false` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `false` |
| loadingType | [加载图标类型](/loading), 可选值为 `spinner` | _string_ | `circular` |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | _number_ | `2000` |
| className | 自定义类名 | _string \| Array \| object_ | - |
| overlayClass | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| transition | 动画类名，等价于 [transition](/transition) 的`name`属性 | _string_ | `fade` |
| z-index | 将组件的 z-index 层级设置为一个固定值 | _number \| string_ | `2000+` |
| onClose | 关闭时的回调函数 | _Function_ | - |
| onOpened | 完全展示后的回调函数 | _Function_ | - |

### Props

通过组件调用 `Toast` 时，支持以下 Props：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示类型，可选值为 `loading` `success` `fail` | _ToastType_ | `text` |
| position | 位置，可选值为 `top` `bottom` | _ToastPosition_ | `middle` |
| message | 文本内容 | _string_ | `''` |
| word-break | 文本内容的换行方式，可选值为 `normal` `break-all` `break-word` | _ToastWordBreak_ | `'break-all'` |
| icon | 自定义图标，支持传入图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | - |
| icon-size | 图标大小，默认单位为 `px`，可传入带`rpx`单位的字符串 | _number \| string_ | - |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](/icon#props) | _string_ | `z-icon` |
| overlay | 是否显示背景遮罩层 | _boolean_ | `false` |
| forbid-click | 是否禁止背景点击 | _boolean_ | `false` |
| close-on-click | 是否在点击后关闭 | _boolean_ | `false` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | _boolean_ | `false` |
| loading-type | [加载图标类型](/loading), 可选值为 `spinner` | _string_ | `circular` |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | _number_ | `2000` |
| class-name | 自定义类名 | _string \| Array \| object_ | - |
| overlay-class | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlay-style | 自定义遮罩层样式 | _object_ | - |
| transition | 动画类名，等价于 [transition](/transition) 的`name`属性 | _string_ | `fade` |
| z-index | 将组件的 z-index 层级设置为一个固定值 | _number \| string_ | `2000+` |

### Events

通过组件调用 `Toast` 时，支持以下事件：

| 事件名 | 说明                 | 回调参数 |
| ------ | -------------------- | -------- |
| close  | 关闭时的回调函数     | -        |
| opened | 完全展示后的回调函数 | -        |

### Slots

使用 `Toast` 组件时，支持以下插槽：

| 名称    | 说明           |
| ------- | -------------- |
| message | 自定义文本内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-toast-max-width | _70%_ | - |
| --z-toast-font-size | _var(--z-font-size-md)_ | - |
| --z-toast-text-color | _var(--z-white)_ | - |
| --z-toast-loading-icon-color | _var(--z-white)_ | - |
| --z-toast-line-height | _var(--z-line-height-md)_ | - |
| --z-toast-radius | _var(--z-radius-lg)_ | - |
| --z-toast-background | _fade(var(--z-black), 70%)_ | - |
| --z-toast-icon-size | _72rpx_ | - |
| --z-toast-text-min-width | _192rpx_ | - |
| --z-toast-text-padding | _var(--z-padding-xs) var(--z-padding-sm)_ | - |
| --z-toast-default-padding | _var(--z-padding-md)_ | - |
| --z-toast-default-width | _176rpx_ | - |
| --z-toast-default-min-height | _176rpx_ | - |
| --z-toast-position-top-distance | _20%_ | - |
| --z-toast-position-bottom-distance | _20%_ | - |

## 常见问题

### 怎样定义多个toast组件

`useToast` 支持传入`name`来区分每个`toast`的名称。

```html
<z-toast name="test"></z-toast>
```

```ts
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast('test')
toast.showToast('文字提示')
```