# Checkbox 复选框

### 介绍

在一组备选项中进行多选。

## 代码演示

### 基础用法

通过 `v-model` 绑定复选框的勾选状态。

```html
<z-checkbox v-model="checked">复选框</z-checkbox>
```

```js
import { ref } from 'vue'
const checked = ref(true)
```

### 禁用状态

通过设置 `disabled` 属性可以禁用复选框。

```html
<z-checkbox v-model="checked" disabled>复选框</z-checkbox>
```

### 自定义形状

将 `shape` 属性设置为 `square`，复选框的形状会变成方形。

```html
<z-checkbox-group v-model="checked" shape="square">
  <z-checkbox name="a">复选框 a</z-checkbox>
  <z-checkbox name="b">复选框 b</z-checkbox>
</z-checkbox-group>
```

```js
import { ref } from 'vue';
const checked = ref(['a', 'b']);
```

### 自定义颜色

通过 `checked-color` 属性设置选中状态的图标颜色。

```html
<z-checkbox v-model="checked" checked-color="#ee0a24">复选框</z-checkbox>
```

### 自定义大小

通过 `icon-size` 属性可以自定义图标的大小。

```html
<z-checkbox v-model="checked" icon-size="48rpx">复选框</z-checkbox>
```

### 自定义图标

通过 `icon` 插槽自定义图标，可以通过 `slotProps` 判断是否为选中状态.

```html
<z-checkbox v-model="checked">
  自定义图标
  <template #icon>
    <image
      class="img-icon"
      :src="checked ? activeIcon : inactiveIcon"
    />
  </template>
</z-checkbox>

<style>
  .img-icon {
    width: 40rpx;
    height: 40rpx;
  }
</style>
```

```js
import { ref } from 'vue';
const activeIcon =
  'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png'
const inactiveIcon =
  'https://cdn.zebraui.com/zebra-ui/images/assets/demo-noselect.png'
```

### 左侧文本

将 `label-position` 属性设置为 `'left'`，可以将文本位置调整到复选框左侧。

```html
<z-checkbox v-model="checked" label-position="left">复选框</z-checkbox>
```

### 禁用文本点击

设置 `label-disabled` 属性后，点击图标以外的内容不会触发复选框切换。

```html
<z-checkbox v-model="checked" label-disabled>复选框</z-checkbox>
```

### 复选框组

复选框可以与复选框组一起使用，复选框组通过 `v-model` 数组绑定复选框的勾选状态。

```html
<z-checkbox-group v-model="checked">
  <z-checkbox name="a">复选框 a</z-checkbox>
  <z-checkbox name="b">复选框 b</z-checkbox>
</z-checkbox-group>
```

### 水平排列

将 `direction` 属性设置为 `horizontal` 后，复选框组会变成水平排列。

```html
<z-checkbox-group v-model="checked" direction="horizontal">
  <z-checkbox name="a">复选框 a</z-checkbox>
  <z-checkbox name="b">复选框 b</z-checkbox>
</z-checkbox-group>
```

### 限制最大可选数

通过 `max` 属性可以限制复选框组的最大可选数。

```html
<z-checkbox-group v-model="checked" :max="2">
  <z-checkbox name="a">复选框 a</z-checkbox>
  <z-checkbox name="b">复选框 b</z-checkbox>
  <z-checkbox name="c">复选框 c</z-checkbox>
</z-checkbox-group>
```

### 全选与反选

通过 `CheckboxGroup` 实例上的 `toggleAll` 方法可以实现全选与反选。

```html
<z-checkbox-group v-model="checked" ref="checkboxGroup">
  <z-checkbox name="a">复选框 a</z-checkbox>
  <z-checkbox name="b">复选框 b</z-checkbox>
  <z-checkbox name="c">复选框 c</z-checkbox>
</z-checkbox-group>

<z-button type="primary" @click="checkAll">全选</z-button>
<z-button type="primary" @click="toggleAll">反选</z-button>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref([]);
    const checkboxGroup = ref(null);
    const checkAll = () => {
      checkboxGroup.value.toggleAll(true);
    }
    const toggleAll = () => {
      checkboxGroup.value.toggleAll();
    },

    return {
      checked,
      checkAll,
      toggleAll,
      checkboxGroup,
    };
  },
};
```

### 搭配单元格组件使用

搭配单元格组件使用时，需要再引入 `Cell` 和 `CellGroup` 组件，并通过 `Checkbox` 实例上的 toggle 方法触发切换。

```html
<z-checkbox-group v-model="checked">
  <z-cell-group inset>
    <z-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="`复选框 ${item}`"
      @click="toggle(index)"
    >
      <template #right-icon>
        <z-checkbox
          :name="item"
          :ref="el => checkboxRefs[index] = el"
          @click.stop
        />
      </template>
    </z-cell>
  </z-cell-group>
</z-checkbox-group>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref([]);
    const checkboxRefs = ref([]);
    const toggle = (index) => {
      checkboxRefs.value[index].toggle();
    };
    return {
      list: ['a', 'b'],
      toggle,
      checked,
      checkboxRefs,
    };
  },
};
```

### 不确定状态

通过 `indeterminate` 设置复选框是否为不确定状态。

```html
<z-checkbox
  v-model="isCheckAll"
  :indeterminate="isIndeterminate"
  @change="checkAllChange"
>
  全选
</z-checkbox>

<z-checkbox-group v-model="checkedResult" @change="checkedResultChange">
  <z-checkbox v-for="item in list" :key="item" :name="item">
    复选框 {{ item }}
  </z-checkbox>
</z-checkbox-group>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const list = ['a', 'b', 'c', 'd']

    const isCheckAll = ref(false);
    const checkedResult = ref(['a', 'b', 'd']);
    const isIndeterminate = ref(true);

    const checkAllChange = (val: boolean) => {
      checkedResult.value = val ? list : []
      isIndeterminate.value = false
    }

    const checkedResultChange = (value: string[]) => {
      const checkedCount = value.length
      isCheckAll.value = checkedCount === list.length
      isIndeterminate.value = checkedCount > 0 && checkedCount < list.length
    }

    return {
      list,
      isCheckAll,
      checkedResult,
      checkAllChange,
      isIndeterminate,
      checkedResultChange
    };
  },
};
```

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否为选中状态 | _boolean_ | `false` |
| name | 标识符，通常为一个唯一的字符串或数字 | _any_ | - |
| shape | 形状，可选值为 `square` | _string_ | `round` |
| disabled | 是否禁用复选框 | _boolean_ | `false` |
| label-disabled | 是否禁用复选框文本点击 | _boolean_ | `false` |
| label-position | 文本位置，可选值为 `left` | _string_ | `right` |
| icon-size | 图标大小，默认单位为 `px` | _number \| string_ | `20px` |
| checked-color | 选中状态颜色 | _string_ | `#1989fa` |
| bind-group | 是否与复选框组绑定 | _boolean_ | `true` |
| indeterminate | 是否为不确定状态 | _boolean_ | `false` |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 所有选中项的标识符 | _any[]_ | - |
| disabled | 是否禁用所有复选框 | _boolean_ | `false` |
| max | 最大可选数，`0` 为无限制 | _number \| string_ | `0` |
| direction | 排列方向，可选值为 `horizontal` | _string_ | `vertical` |
| icon-size | 所有复选框的图标大小，默认单位为 `px` | _number \| string_ | `20px` |
| checked-color | 所有复选框的选中状态颜色 | _string_ | `#1989fa` |
| shape | 形状，可选值为 `square` | _string_ | `round` |

### Checkbox Events

| 事件名 | 说明                     | 回调参数            |
| ------ | ------------------------ | ------------------- |
| change | 当绑定值变化时触发的事件 | _checked: boolean_  |
| click  | 点击复选框时触发         | _event: MouseEvent_ |

### CheckboxGroup Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| change | 当绑定值变化时触发的事件 | _names: any[]_ |

### Checkbox Slots

| 名称    | 说明       | 参数                                      |
| ------- | ---------- | ----------------------------------------- |
| default | 自定义文本 | _{ checked: boolean, disabled: boolean }_ |
| icon    | 自定义图标 | _{ checked: boolean, disabled: boolean }_ |

### CheckboxGroup 方法

通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggleAll | 切换所有复选框，传 `true` 为选中，`false` 为取消选中，不传参为取反 | _options?: boolean \| object_ | - |

### toggleAll 方法示例

```js
import { ref } from 'vue';

const checkboxGroupRef = ref();

// 全部反选
checkboxGroupRef?.value.toggleAll();
// 全部选中
checkboxGroupRef?.value.toggleAll(true);
// 全部取消
checkboxGroupRef?.value.toggleAll(false);

// 全部反选，并跳过禁用的复选框
checkboxGroupRef?.value.toggleAll({
  skipDisabled: true,
});
// 全部选中，并跳过禁用的复选框
checkboxGroupRef?.value.toggleAll({
  checked: true,
  skipDisabled: true,
});
```

### Checkbox 方法

通过 ref 可以获取到 Checkbox 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggle | 切换选中状态，传 `true` 为选中，`false` 为取消选中，不传参为取反 | _checked?: boolean_ | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                                | 默认值                     | 描述 |
| ----------------------------------- | -------------------------- | ---- |
| --z-checkbox-size                 | _40rpx_                     | -    |
| --z-checkbox-border-color         | _var(--z-gray-5)_        | -    |
| --z-checkbox-duration             | _var(--z-duration-fast)_ | -    |
| --z-checkbox-label-margin         | _var(--z-padding-xs)_    | -    |
| --z-checkbox-label-color          | _var(--z-text-color)_    | -    |
| --z-checkbox-checked-icon-color   | _var(--z-primary-color)_ | -    |
| --z-checkbox-disabled-icon-color  | _var(--z-gray-5)_        | -    |
| --z-checkbox-disabled-label-color | _var(--z-text-color-3)_  | -    |
| --z-checkbox-disabled-background  | _var(--z-border-color)_  | -    |
