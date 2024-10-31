# NavBar 导航栏

### 介绍

为页面提供导航功能，常用于页面顶部。

## 代码演示

### 基础用法

通过 `title` 属性设置导航栏标题。

```html
<z-nav-bar title="标题" />
```

### 返回上级

在导航栏实现返回上级功能。

```html
<z-nav-bar title="标题" left-text="返回" left-arrow />
```

### 右侧按钮

在导航栏右侧添加可点击的按钮。

```html
<z-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-right="toast.showToast('按钮')"
/>
```

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
```

### 使用插槽

可以通过插槽自定义导航栏两侧的内容。

```html
<z-nav-bar title="标题" left-text="返回" left-arrow>
  <template #right>
    <z-icon name="search" size="18" />
  </template>
</z-nav-bar>
```

### 禁用按钮

通过 `left-disabled` 或 `right-disabled` 属性来禁用两侧的按钮。按钮被禁用时透明度降低，且无法点击。

```html
<z-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  left-disabled
  right-disabled
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | `''` |
| left-text | 左侧文案 | _string_ | `''` |
| right-text | 右侧文案 | _string_ | `''` |
| left-disabled | 是否禁用左侧按钮，禁用时透明度降低，且无法点击 | _boolean_ | `false` |
| right-disabled | 是否禁用右侧按钮，禁用时透明度降低，且无法点击 | _boolean_ | `false` |
| left-arrow | 是否显示左侧箭头 | _boolean_ | `false` |
| border | 是否显示下边框 | _boolean_ | `true` |
| fixed | 是否固定在顶部 | _boolean_ | `false` |
| placeholder | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | _boolean_ | `false` |
| z-index | 导航栏 z-index | _number \| string_ | `1` |
| safe-area-inset-top | 是否开启顶部安全区适配 | _boolean_ | `false` |
| clickable | 是否开启两侧按钮的点击反馈 | _boolean_ | `true` |
| autoBack | 点击后是否自动返回上一页 | _boolean_ | `true` |

### Slots

| 名称  | 说明               |
| ----- | ------------------ |
| title | 自定义标题         |
| left  | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

### Events

| 事件名      | 说明               | 回调参数            |
| ----------- | ------------------ | ------------------- |
| click-left  | 点击左侧按钮时触发 | _event: MouseEvent_ |
| click-right | 点击右侧按钮时触发 | _event: MouseEvent_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                           | 默认值                     | 描述 |
| ------------------------------ | -------------------------- | ---- |
| --z-nav-bar-height           | _92rpx_                     | -    |
| --z-nav-bar-background       | _var(--z-background-2)_  | -    |
| --z-nav-bar-arrow-size       | _32rpx_                     | -    |
| --z-nav-bar-icon-color       | _var(--z-primary-color)_ | -    |
| --z-nav-bar-text-color       | _var(--z-primary-color)_ | -    |
| --z-nav-bar-title-font-size  | _var(--z-font-size-lg)_  | -    |
| --z-nav-bar-title-text-color | _var(--z-text-color)_    | -    |
| --z-nav-bar-z-index          | _1_                        | -    |
