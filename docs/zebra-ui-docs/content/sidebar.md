# Sidebar 侧边导航

### 介绍

垂直展示的导航栏，用于在不同的内容区域之间进行切换。

## 代码演示

### 基础用法

通过 `v-model` 绑定当前选中项的索引。

```html
<z-sidebar v-model="active">
  <z-sidebar-item title="标签名称" />
  <z-sidebar-item title="标签名称" />
  <z-sidebar-item title="标签名称" />
</z-sidebar>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};
```

### 禁用选项

通过 `disabled` 属性禁用选项。

```html
<z-sidebar v-model="active">
  <z-sidebar-item title="标签名称" />
  <z-sidebar-item title="标签名称" disabled />
  <z-sidebar-item title="标签名称" />
</z-sidebar>
```

### 监听切换事件

设置 `change` 方法来监听切换导航项时的事件。

```html
<z-sidebar v-model="active" @change="onChange">
  <z-sidebar-item title="标签名 1" />
  <z-sidebar-item title="标签名 2" />
  <z-sidebar-item title="标签名 3" />
</z-sidebar>
```

```js
import { ref } from 'vue';
import { useToast } from '@/uni_modules/zebra-ui'
const toast = useToast()

export default {
  setup() {
    const active = ref(0);
    const onChange = (index: number) => toast.showToast(`标题${index + 1}`)
    return {
      active,
      onChange,
    };
  },
};
```

### 徽标提示

设置 `dot` 属性后，会在右上角展示一个小红点；设置 `badge` 属性后，会在右上角展示相应的徽标。

```html
<z-sidebar v-model="active">
  <z-sidebar-item title="标签名称" dot />
  <z-sidebar-item title="标签名称" badge="5" />
  <z-sidebar-item title="标签名称" />
</z-sidebar>
```

## API

### Sidebar Props

| 参数    | 说明             | 类型               | 默认值 |
| ------- | ---------------- | ------------------ | ------ |
| v-model | 当前导航项的索引 | _number \| string_ | `0`    |

### Sidebar Events

| 事件名 | 说明             | 回调参数        |
| ------ | ---------------- | --------------- |
| change | 切换导航项时触发 | _index: number_ |

### SidebarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 内容 | _string_ | `''` |
| dot | 是否显示右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| badge-props | 自定义徽标的属性，传入的对象会被透传给 [Badge 组件的 props](/badge#props) | _BadgeProps_ | - |
| disabled | 是否禁用该项 | _boolean_ | `false` |

### SidebarItem Events

| 事件名 | 说明       | 回调参数        |
| ------ | ---------- | --------------- |
| click  | 点击时触发 | _index: number_ |

### SidebarItem Slots

| Name  | Description |
| ----- | ----------- |
| title | 自定义标题  |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                                 | 默认值                       | 描述 |
| ------------------------------------ | ---------------------------- | ---- |
| --z-sidebar-width                  | _160rpx_                       | -    |
| --z-sidebar-font-size              | _var(--z-font-size-md)_    | -    |
| --z-sidebar-line-height            | _var(--z-line-height-md)_  | -    |
| --z-sidebar-text-color             | _var(--z-text-color)_      | -    |
| --z-sidebar-disabled-text-color    | _var(--z-text-color-3)_    | -    |
| --z-sidebar-padding                | _40rpx var(--z-padding-sm)_ | -    |
| --z-sidebar-active-color           | _var(--z-active-color)_    | -    |
| --z-sidebar-background             | _var(--z-background)_      | -    |
| --z-sidebar-selected-font-weight   | _var(--z-font-bold)_       | -    |
| --z-sidebar-selected-text-color    | _var(--z-text-color)_      | -    |
| --z-sidebar-selected-border-width  | _8rpx_                        | -    |
| --z-sidebar-selected-border-height | _32rpx_                       | -    |
| --z-sidebar-selected-border-color  | _var(--z-primary-color)_   | -    |
| --z-sidebar-selected-background    | _var(--z-background-2)_    | -    |
