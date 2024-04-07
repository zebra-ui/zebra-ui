# Collapse 折叠面板

### 介绍

将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。

## 代码演示

### 基础用法

通过 `v-model` 控制展开的面板列表，`activeNames` 为数组格式。

```html
<z-collapse v-model="active1">
  <z-collapse-item title="标题1">
    zebra-swiper是基于uniapp开发的一款移动端轮播组件。
  </z-collapse-item>
  <z-collapse-item title="标题2">
    zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。
    其中，z-swiper-item 组件只可放置在 z-swiper 组件中。
  </z-collapse-item>
  <z-collapse-item title="标题3">
    在使用组件时，可以通过props像组件传递参数，从而实现不同的配置。
    通常，配置都将通过options对象传递给组件。所以配置项都应该写进options中。
    同时，也可以通过$refs的方式调用组件的方法。
  </z-collapse-item>
</z-collapse>
```

```js
const active1 = ref([0])
```

### 手风琴

通过 `accordion` 可以设置为手风琴模式，最多展开一个面板，此时 `activeName` 为字符串格式。

```html
<z-collapse v-model="active2" accordion>
  <z-collapse-item title="标题1">
    zebra-swiper是基于uniapp开发的一款移动端轮播组件。
  </z-collapse-item>
  <z-collapse-item title="标题2">
    zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。
    其中，z-swiper-item 组件只可放置在 z-swiper 组件中。
  </z-collapse-item>
  <z-collapse-item title="标题3">
    在使用组件时，可以通过props像组件传递参数，从而实现不同的配置。
    通常，配置都将通过options对象传递给组件。所以配置项都应该写进options中。
    同时，也可以通过$refs的方式调用组件的方法。
  </z-collapse-item>
</z-collapse>
```

```js
const active2 = ref(0)
```

### 禁用状态

通过 `disabled` 属性来禁用单个面板。

```html
<z-collapse v-model="active3">
  <z-collapse-item title="标题1">
    zebra-swiper是基于uniapp开发的一款移动端轮播组件。
  </z-collapse-item>
  <z-collapse-item title="标题2" disabled>
    zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。
    其中，z-swiper-item 组件只可放置在 z-swiper 组件中。
  </z-collapse-item>
  <z-collapse-item title="标题3" disabled>
    在使用组件时，可以通过props像组件传递参数，从而实现不同的配置。
    通常，配置都将通过options对象传递给组件。所以配置项都应该写进options中。
    同时，也可以通过$refs的方式调用组件的方法。
  </z-collapse-item>
</z-collapse>
```

### 自定义标题内容

通过 `title` 插槽可以自定义标题栏的内容。

```html
<z-collapse v-model="active4">
  <z-collapse-item>
    <template #title> 标题1<z-icon name="tag" /> </template>
    zebra-swiper是基于uniapp开发的一款移动端轮播组件。
  </z-collapse-item>
  <z-collapse-item title="标题2" value="内容" icon="question-circle">
    zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。
    其中，z-swiper-item 组件只可放置在 z-swiper 组件中。
  </z-collapse-item>
</z-collapse>
```

### 全部展开与全部切换

通过 `Collapse` 实例上的 `toggleAll` 方法可以实现全部展开与全部切换。

```html
<z-collapse v-model="active5" ref="collapse">
  <z-collapse-item title="标题1" name="1">
    zebra-swiper是基于uniapp开发的一款移动端轮播组件。
  </z-collapse-item>
  <z-collapse-item title="标题2" name="2">
    zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。
    其中，z-swiper-item 组件只可放置在 z-swiper 组件中。
  </z-collapse-item>
  <z-collapse-item title="标题3" name="3">
    在使用组件时，可以通过props像组件传递参数，从而实现不同的配置。
    通常，配置都将通过options对象传递给组件。所以配置项都应该写进options中。
    同时，也可以通过$refs的方式调用组件的方法。
  </z-collapse-item>
</z-collapse>
<view class="demo-collapse-buttons">
  <z-button type="primary" @click="openAll"> 全部展开 </z-button>
  <z-button
    type="primary"
    :custom-style="{ 'margin-left': '30rpx' }"
    @click="toggleAll"
  >
    全部切换
  </z-button>
</view>
```

```js
import { ref } from 'vue';
const active5 = ref(['1'])
const collapse = ref()

const openAll = () => {
  collapse.value?.toggleAll?.(true)
}
const toggleAll = () => {
  collapse.value?.toggleAll?.()
}
```

```css
.demo-collapse {
  &-buttons {
    margin-top: var(--z-padding-md);
  }
}
```

> Tips: 手风琴模式下无法使用 toggleAll 方法。

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前展开面板的 name | 手风琴模式：_number \| string_<br>非手风琴模式：_(number \| string)[]_ | - |
| accordion | 是否开启手风琴模式 | _boolean_ | `false` |
| border | 是否显示外边框 | _boolean_ | `true` |

### Collapse Events

| 事件名 | 说明           | 回调参数                                 |
| ------ | -------------- | ---------------------------------------- |
| change | 切换面板时触发 | activeNames: 类型与 v-model 绑定的值一致 |

### CollapseItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 唯一标识符，默认为索引值 | _number \| string_ | `index` |
| icon | 标题栏左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | - |
| size | 标题栏大小，可选值为 `large` | _string_ | - |
| title | 标题栏左侧内容 | _number \| string_ | - |
| value | 标题栏右侧内容 | _number \| string_ | - |
| label | 标题栏描述信息 | _number \| string_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| is-link | 是否展示标题栏右侧箭头并开启点击反馈 | _boolean_ | `true` |
| disabled | 是否禁用面板 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法操作面板 | _boolean_ | `false` |
| title-class | 左侧标题额外类名 | _string_ | - |
| value-class | 右侧内容额外类名 | _string_ | - |
| label-class | 描述信息额外类名 | _string_ | - |

### Collapse 方法

通过 ref 可以获取到 CollapseItem 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggleAll | 切换所有面板展开状态，传 `true` 为全部展开，`false` 为全部收起，不传参为全部切换 | _options?: boolean \| object_ | - |

### CollapseItem 方法

通过 ref 可以获取到 CollapseItem 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggle | 切换面板展开状态，传 `true` 为展开，`false` 为收起，不传参为切换 | _expand?: boolean_ | - |

### CollapseItem Slots

| 名称       | 说明                 |
| ---------- | -------------------- |
| default    | 面板内容             |
| title      | 自定义标题栏左侧内容 |
| value      | 自定义标题栏右侧内容 |
| label      | 自定义标题栏描述信息 |
| icon       | 自定义标题栏左侧图标 |
| right-icon | 自定义标题栏右侧图标 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --z-collapse-item-duration | _var(--z-duration-base)_ | - |
| --z-collapse-item-content-padding | _var(--z-padding-sm) var(--z-padding-md)_ | - |
| --z-collapse-item-content-font-size | _var(--z-font-size-md)_ | - |
| --z-collapse-item-content-line-height | _1.5_ | - |
| --z-collapse-item-content-text-color | _var(--z-text-color-2)_ | - |
| --z-collapse-item-content-background | _var(--z-background-2)_ | - |
| --z-collapse-item-title-disabled-color | _var(--z-text-color-3)_ | - |
