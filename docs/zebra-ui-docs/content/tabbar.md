# Tabbar 标签栏

### 介绍

底部导航栏，用于在不同页面之间进行切换。

## 代码演示

### 基础用法

`v-model` 默认绑定选中标签的索引值，通过修改 `v-model` 即可切换选中的标签。

```html
<z-tabbar :fixed="false" v-model="active">
  <z-tabbar-item icon="home">标签</z-tabbar-item>
  <z-tabbar-item icon="search">标签</z-tabbar-item>
  <z-tabbar-item icon="bell">标签</z-tabbar-item>
  <z-tabbar-item icon="setting">标签</z-tabbar-item>
</z-tabbar>
```

```js
import { ref } from 'vue';
const active = ref(0);
```

### 通过名称匹配

在标签指定 `name` 属性的情况下，`v-model` 的值为当前标签的 `name`。

```html
<z-tabbar :fixed="false" v-model="activeName">
  <z-tabbar-item name="home" icon="home"> 标签 </z-tabbar-item>
  <z-tabbar-item name="search" icon="search"> 标签 </z-tabbar-item>
  <z-tabbar-item name="friends" icon="bell"> 标签 </z-tabbar-item>
  <z-tabbar-item name="setting" icon="setting"> 标签 </z-tabbar-item>
</z-tabbar>
```

```js
import { ref } from 'vue';
const active = ref('home');
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点；设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```html
<z-tabbar :fixed="false" v-model="active2">
  <z-tabbar-item icon="home">标签</z-tabbar-item>
  <z-tabbar-item icon="search" dot>标签</z-tabbar-item>
  <z-tabbar-item icon="bell" badge="5"> 标签 </z-tabbar-item>
  <z-tabbar-item icon="setting" badge="20"> 标签 </z-tabbar-item>
</z-tabbar>
```

### 自定义图标

通过 `icon` 插槽自定义图标，可以通过 `slot-scope` 判断标签是否选中。

```html
<z-tabbar :fixed="false" v-model="active3">
  <z-tabbar-item badge="3">
    <text>自定义</text>
    <template #icon="props">
      <image
        class="image"
        :src="props.active ? icon.active : icon.inactive"
      />
    </template>
  </z-tabbar-item>
  <z-tabbar-item icon="search">标签</z-tabbar-item>
  <z-tabbar-item icon="setting">标签</z-tabbar-item>
</z-tabbar>
```

```js
import { ref } from 'vue';
const active = ref(0);
const icon = {
  active: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png',
  inactive: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-noselect.png'
}
```

### 自定义颜色

通过 `active-color` 属性设置选中标签的颜色，通过 `inactive-color` 属性设置未选中标签的颜色。

```html
<z-tabbar :fixed="false" v-model="active4" active-color="#ee0a24">
  <z-tabbar-item icon="home">标签</z-tabbar-item>
  <z-tabbar-item icon="search">标签</z-tabbar-item>
  <z-tabbar-item icon="bell">标签</z-tabbar-item>
  <z-tabbar-item icon="setting">标签</z-tabbar-item>
</z-tabbar>
```

### 监听切换事件

通过 `change` 事件来监听选中标签的变化。

```html
<z-tabbar :fixed="false" v-model="active5" @change="onChange">
  <z-tabbar-item icon="home">标签 1</z-tabbar-item>
  <z-tabbar-item icon="search">标签 2</z-tabbar-item>
  <z-tabbar-item icon="bell">标签 3</z-tabbar-item>
  <z-tabbar-item icon="setting">标签 4</z-tabbar-item>
</z-tabbar>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const onChange = (index: number) => {
  toast.showToast(`标签 ${index + 1}`)
}
```

### 背景

通过`background`属性指定背景。

```html
<z-tabbar :fixed="false" v-model="active6" background>
  <z-tabbar-item icon="home">标签</z-tabbar-item>
  <z-tabbar-item icon="search">标签</z-tabbar-item>
  <z-tabbar-item icon="bell">标签</z-tabbar-item>
  <z-tabbar-item icon="setting" badge="5">标签</z-tabbar-item>
</z-tabbar>
```

## API

### Tabbar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中标签的名称或索引值 | _number \| string_ | `0` |
| fixed | 是否固定在底部 | _boolean_ | `true` |
| border | 是否显示外边框 | _boolean_ | `true` |
| z-index | 元素 z-index | _number \| string_ | `1` |
| active-color | 选中标签的颜色 | _string_ | `#1989fa` |
| inactive-color | 未选中标签的颜色 | _string_ | `#7d7e80` |
| placeholder | 固定在底部时，是否在标签位置生成一个等高的占位元素 | _boolean_ | `false` |
| safe-area-inset-bottom | 是否开启底部安全区适配，设置 fixed 时默认开启 | _boolean_ | `false` |
| before-change | 切换标签前的回调函数，返回 `false` 可阻止切换，支持返回 Promise | _(name: number \| string) => boolean \| Promise\<boolean\>_ | - |

### Tabbar Events

| 事件名 | 说明           | 回调参数                   |
| ------ | -------------- | -------------------------- |
| change | 切换标签时触发 | _active: number \| string_ |

### TabbarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标签名称，作为匹配的标识符 | _number \| string_ | 当前标签的索引值 |
| icon | 图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | - |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](/icon#props) | _string_ | `z-icon` |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| badge-props | 自定义徽标的属性，传入的对象会被透传给 [Badge 组件的 props](/badge#props) | _BadgeProps_ | - |

### TabbarItem Slots

| 名称 | 说明       | 参数              |
| ---- | ---------- | ----------------- |
| icon | 自定义图标 | _active: boolean_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                                 | 默认值                     | 描述 |
| ------------------------------------ | -------------------------- | ---- |
| --z-tabbar-height                  | _100rpx_                     | -    |
| --z-tabbar-z-index                 | _1_                        | -    |
| --z-tabbar-background              | _var(--z-background-2)_  | -    |
| --z-tabbar-item-font-size          | _var(--z-font-size-sm)_  | -    |
| --z-tabbar-item-text-color         | _var(--z-text-color)_    | -    |
| --z-tabbar-item-active-color       | _var(--z-primary-color)_ | -    |
| --z-tabbar-item-active-background  | _var(--z-background-2)_  | -    |
| --z-tabbar-item-line-height        | _1_                        | -    |
| --z-tabbar-item-icon-size          | _44rpx_                     | -    |
| --z-tabbar-item-icon-margin-bottom | _var(--z-padding-base)_  | -    |
