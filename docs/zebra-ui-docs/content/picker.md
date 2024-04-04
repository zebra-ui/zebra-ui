# Picker 选择器

### 介绍

提供多个选项集合供用户选择，支持单列选择、多列选择和级联选择，通常与[弹出层](/popup)组件配合使用。

## 代码演示

### 基础用法

#### 选项配置

Picker 组件通过 `columns` 属性配置选项数据，`columns` 是一个包含字符串或对象的数组。

#### 顶部栏

顶部栏包含标题、确认按钮和取消按钮，点击确认按钮触发 `confirm` 事件，点击取消按钮触发 `cancel` 事件。

```html
<z-picker
  title="标题"
  :columns="columns"
  @confirm="onConfirm"
  @cancel="onCancel"
  @change="onChange"
/>
```

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const columns = [
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' }
]
const onConfirm = ({ selectedValues }: any) => {
  toast.showToast(`当前值: ${selectedValues.join(',')}`)
}
const onChange = ({ selectedValues }: any) => {
  toast.showToast(`当前值: ${selectedValues.join(',')}`)
}
const onCancel = () => toast.showToast('取消')
```

### 搭配弹出层使用

在实际场景中，Picker 通常作为用于辅助表单填写，可以搭配 Popup 和 Field 实现该效果。

```html
<z-field
  v-model="fieldValue"
  is-link
  readonly
  label="城市"
  placeholder="选择城市"
  @click="showPicker = true"
  @click-input="showPicker = true"
/>
<z-popup v-model:show="showPicker" round position="bottom">
  <z-picker
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirmInput"
  />
</z-popup>
```

### 双向绑定

通过 `v-model` 可以绑定当前选中项的 `values`，修改 `v-model` 绑定的值时，Picker 的选中状态也会随之改变。

`v-model` 的值是一个数组，数组的第一位对应第一列选中项的 `value`，第二位对应第二列选中项的 `value`，以此类推。

```html
<z-picker v-model="selectedValues" title="标题" :columns="columns" />
```

### 多列选择

`columns` 属性可以通过二维数组的形式配置多列选择。

```html
<z-picker title="标题" :columns="columnsMore" />
```

```js
const columnsMore = [
  [
    { text: '周一', value: 'Monday' },
    { text: '周二', value: 'Tuesday' },
    { text: '周三', value: 'Wednesday' },
    { text: '周四', value: 'Thursday' },
    { text: '周五', value: 'Friday' }
  ],
  [
    { text: '上午', value: 'Morning' },
    { text: '下午', value: 'Afternoon' },
    { text: '晚上', value: 'Evening' }
  ]
]
```

### 级联选择

使用 `columns` 的 `children` 字段可以实现选项级联的效果。如果级联层级较多，推荐使用 [Cascader 级联选项组件](#/zh-CN/cascader)。

```html
<z-picker title="标题" :columns="columnsCascade" />
```

```js
const columnsCascade = [
  {
    text: '浙江',
    value: 'Zhejiang',
    children: [
      {
        text: '杭州',
        value: 'Hangzhou',
        children: [
          { text: '西湖区', value: 'Xihu' },
          { text: '余杭区', value: 'Yuhang' }
        ]
      },
      {
        text: '温州',
        value: 'Wenzhou',
        children: [
          { text: '鹿城区', value: 'Lucheng' },
          { text: '瓯海区', value: 'Ouhai' }
        ]
      }
    ]
  },
  {
    text: '福建',
    value: 'Fujian',
    children: [
      {
        text: '福州',
        value: 'Fuzhou',
        children: [
          { text: '鼓楼区', value: 'Gulou' },
          { text: '台江区', value: 'Taijiang' }
        ]
      },
      {
        text: '厦门',
        value: 'Xiamen',
        children: [
          { text: '思明区', value: 'Siming' },
          { text: '海沧区', value: 'Haicang' }
        ]
      }
    ]
  }
]
```

> 级联选择的数据嵌套深度需要保持一致，如果部分选项没有子选项，可以使用空字符串进行占位。

### 禁用选项

选项可以为对象结构，通过设置 `disabled` 来禁用该选项。

```html
<z-picker :columns="columnsDisabled" />
```

```js
const columnsDisabled = [
  { text: '杭州', value: 'Hangzhou', disabled: true },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' }
]
```

### 加载状态

若选择器数据是异步获取的，可以通过 `loading` 属性显示加载提示。

```html
<z-picker :loading="loading" />
```

```js
import { ref } from 'vue';
const loading = ref(true);
```

### 自定义 Columns 的结构

```html
<z-picker
  title="标题"
  :columns="columnsCustom"
  :columns-field-names="customFieldName"
/>
```

```js
const columnsCustom = [
  {
    cityName: '浙江',
    cities: [
      {
        cityName: '杭州',
        cities: [{ cityName: '西湖区' }, { cityName: '余杭区' }]
      },
      {
        cityName: '温州',
        cities: [{ cityName: '鹿城区' }, { cityName: '瓯海区' }]
      }
    ]
  },
  {
    cityName: '福建',
    cities: [
      {
        cityName: '福州',
        cities: [{ cityName: '鼓楼区' }, { cityName: '台江区' }]
      },
      {
        cityName: '厦门',
        cities: [{ cityName: '思明区' }, { cityName: '海沧区' }]
      }
    ]
  }
]
const customFieldName = {
  text: 'cityName',
  value: 'cityName',
  children: 'cities'
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中项对应的值 | _number[] \| string[]_ | - |
| columns | 对象数组，配置每一列显示的数据 | _PickerOption[] \| PickerOption[][]_ | `[]` |
| columns-field-names | 自定义 `columns` 结构中的字段 | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |
| title | 顶部栏标题 | _string_ | - |
| confirm-button-text | 确认按钮文字，设置为空字符串可以隐藏按钮 | _string_ | `确认` |
| cancel-button-text | 取消按钮文字，设置为空字符串可以隐藏按钮 | _string_ | `取消` |
| toolbar-position | 顶部栏位置，可选值为 `bottom` | _string_ | `top` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法切换选项 | _boolean_ | `false` |
| show-toolbar | 是否显示顶部栏 | _boolean_ | `true` |
| option-height | 选项高度，支持 `rpx` 单位，默认 `px` | _number \| string_ | `44` |
| visible-option-num | 可见的选项个数 | _number \| string_ | `6` |
| swipe-duration | 快速滑动时惯性滚动的时长，单位 `ms` | _number \| string_ | `1000` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击完成按钮时触发 | _{ selectedValues, selectedOptions, selectedIndexes }_ |
| cancel | 点击取消按钮时触发 | _{ selectedValues, selectedOptions, selectedIndexes }_ |
| change | 选中的选项改变时触发 | _{ selectedValues, selectedOptions, selectedIndexes, columnIndex }_ |
| click-option | 点击选项时触发 | _{ currentOption, selectedValues, selectedOptions, selectedIndexes, columnIndex }_ |
| scroll-into | 当用户通过点击或拖拽让一个选项滚动到中间的选择区域时触发 | _{ currentOption, columnIndex }_ |

### Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| toolbar | 自定义整个顶部栏的内容 | - |
| title | 自定义标题内容 | - |
| confirm | 自定义确认按钮内容 | - |
| cancel | 自定义取消按钮内容 | - |
| option | 自定义选项内容 | _option: PickerOption, index: number_ |
| columns-top | 自定义选项上方内容 | - |
| columns-bottom | 自定义选项下方内容 | - |

### PickerOption 数据结构

| 键名      | 说明         | 类型                        |
| --------- | ------------ | --------------------------- |
| text      | 选项文字内容 | _string \| number_          |
| value     | 选项对应的值 | _string \| number_          |
| disabled  | 是否禁用选项 | _boolean_                   |
| children  | 级联选项     | _PickerOption[]_            |
| className | 选项额外类名 | _string \| Array \| object_ |

### 方法

通过 ref 可以获取到 Picker 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| confirm | 停止惯性滚动并触发 `confirm` 事件 | - | - |
| getSelectedOptions | 获取当前选中的选项 | - | _(PickerOption \| undefined)[]_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                                 | 默认值                      | 描述 |
| ------------------------------------ | --------------------------- | ---- |
| --z-picker-background              | _var(--z-background-2)_   | -    |
| --z-picker-toolbar-height          | _88rpx_                      | -    |
| --z-picker-title-font-size         | _var(--z-font-size-lg)_   | -    |
| --z-picker-title-line-height       | _var(--z-line-height-md)_ | -    |
| --z-picker-action-padding          | _0 var(--z-padding-md)_   | -    |
| --z-picker-action-font-size        | _var(--z-font-size-md)_   | -    |
| --z-picker-confirm-action-color    | _var(--z-primary-color)_  | -    |
| --z-picker-cancel-action-color     | _var(--z-text-color-2)_   | -    |
| --z-picker-option-padding          | _0 var(--z-padding-base)_ | -    |
| --z-picker-option-font-size        | _var(--z-font-size-lg)_   | -    |
| --z-picker-option-text-color       | _var(--z-text-color)_     | -    |
| --z-picker-option-disabled-opacity | _0.3_                       | -    |
| --z-picker-mask-color              | _linear-gradient_           | -    |
| --z-picker-loading-icon-color      | _var(--z-primary-color)_  | -    |
| --z-picker-loading-mask-color      | _rgba(255, 255, 255, 0.9)_  | -    |
