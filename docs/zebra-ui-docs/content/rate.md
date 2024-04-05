# Rate 评分

### 介绍

用于对事物进行评级操作。

## 代码演示

### 基础用法

通过 `v-model` 来绑定当前评分值。

```html
<z-rate v-model="value" />
```

```js
import { ref } from 'vue';
const value = ref(3);
```

### 自定义图标

通过 `icon` 属性设置选中时的图标，`void-icon` 属性设置未选中时的图标。

```html
<z-rate v-model="value" icon="heart-fill" void-icon="heart" />
```

### 自定义样式

通过 `size` 属性设置图标大小，`color` 属性设置选中时的颜色，`void-color` 设置未选中时的颜色。

```html
<z-rate
  v-model="value"
  :size="35"
  color="#ffd21e"
  void-icon="star"
  void-color="#eee"
/>
```

### 半星

设置 `allow-half` 属性后可以选中半星。

```html
<z-rate v-model="value" allow-half />
```

```js
import { ref } from 'vue';
const value = ref(2.5);

```

### 自定义数量

通过 `count` 属性设置评分总数。

```html
<z-rate v-model="value" :count="6" />
```

### 可清空

当 `clearable` 属性设置为 `true`，再次点击相同的值时，可以将值重置为 `0`。

```html
<z-rate v-model="value" clearable />
```

### 禁用状态

通过 `disabled` 属性来禁用评分。

```html
<z-rate v-model="value" disabled />
```

### 只读状态

通过 `readonly` 属性将评分设置为只读状态。

```html
<z-rate v-model="value" readonly />
```

### 只读状态显示小数

设置 `readonly` 和 `allow-half` 属性后，Rate 组件可以展示任意小数结果。

```html
<z-rate v-model="value" readonly allow-half />
```

```js
import { ref } from 'vue';
const value = ref(3.3);
```

### 监听 change 事件

评分变化时，会触发 `change` 事件。

```html
<z-rate v-model="value" @change="onChange" />
```

```javascript
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const value = ref(3);
const onChange = (value) => showToast('当前值：' + value);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前分值 | _number_ | - |
| count | 图标总数 | _number \| string_ | `5` |
| size | 图标大小，默认单位为`px` | _number \| string_ | `40rpx` |
| gutter | 图标间距，默认单位为`px` | _number \| string_ | `8rpx` |
| color | 选中时的颜色 | _string_ | `#ee0a24` |
| void-color | 未选中时的颜色 | _string_ | `#c8c9cc` |
| disabled-color | 禁用时的颜色 | _string_ | `#c8c9cc` |
| icon | 选中时的图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | `star-fill` |
| void-icon | 未选中时的图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | `star` |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](/icon#props) | _string_ | `z-icon` |
| allow-half | 是否允许半选 | _boolean_ | `false` |
| clearable | 是否允许再次点击后清除 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法修改评分 | _boolean_ | `false` |
| disabled | 是否禁用评分 | _boolean_ | `false` |
| touchable | 是否可以通过滑动手势选择评分 | _boolean_ | `true` |

### Events

| 事件名 | 说明                     | 回调参数               |
| ------ | ------------------------ | ---------------------- |
| change | 当前分值变化时触发的事件 | _currentValue: number_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                           | 默认值                    | 描述 |
| ------------------------------ | ------------------------- | ---- |
| --z-rate-icon-size           | _40rpx_                    | -    |
| --z-rate-icon-gutter         | _var(--z-padding-base)_ | -    |
| --z-rate-icon-void-color     | _var(--z-gray-5)_       | -    |
| --z-rate-icon-full-color     | _var(--z-danger-color)_ | -    |
| --z-rate-icon-disabled-color | _var(--z-gray-5)_       | -    |
