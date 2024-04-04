# DatePicker 日期选择

### 介绍

日期选择器，用于选择年、月、日，通常与[弹出层](/popup)组件配合使用。

## 代码演示

### 基础用法

通过 `v-model` 绑定当前选中的日期，通过 `min-date` 和 `max-date` 属性来设定可选的时间范围。

```html
<z-date-picker
  v-model="currentDate"
  title="选择日期"
  :min-date="minDate"
  :max-date="maxDate"
/>
```

```js
const currentDate = ref(['2021', '01', '01'])
const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2025, 5, 1)
```

### 选项类型

通过 `columns-type` 属性可以控制选项的类型，支持以任意顺序对 `year`、`month` 和 `day` 进行排列组合。

比如：

- 传入 `['year']` 来单独选择年份。
- 传入 `['month']` 来单独选择月份。
- 传入 `['year', 'month']` 来选择年份和月份。
- 传入 `['month', 'day']` 来选择月份和日期。

```html
<z-date-picker
  v-model="currentDate"
  title="选择年月"
  :min-date="minDate"
  :max-date="maxDate"
  :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';
const currentDate = ref(['2021', '01']);
const columnsType = ['year', 'month'];
const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2025, 5, 1)
```

### 格式化选项

通过传入 `formatter` 函数，可以对选项文字进行格式化处理。

```html
<z-date-picker
  v-model="currentDateFormatter"
  title="选择年月"
  :min-date="minDate"
  :max-date="maxDate"
  :formatter="formatter"
  :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';
const currentDateFormatter = ref(['2021', '01'])
const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2025, 5, 1)
const columnsType = ['year', 'month']
const formatter = (type: any, option: any) => {
  if (type === 'year') {
    option.text += '年'
  }
  if (type === 'month') {
    option.text += '月'
  }
  return option
}
```

### 过滤选项

通过传入 `filter` 函数，可以对选项数组进行过滤，实现自定义选项间隔。

```html
<z-date-picker
  v-model="currentDateFilter"
  title="选择年月"
  :filter="filter"
  :min-date="minDate"
  :max-date="maxDate"
  :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';

const filter = (type: string, options: any) => {
  if (type === 'month') {
    return options.filter((option: any) => Number(option.value) % 6 === 0)
  }
  return options
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中的日期 | _string[]_ | `[]` |
| columns-type | 选项类型，由 `year`、`month` 和 `day` 组成的数组 | _string[]_ | `['year', 'month', 'day']` |
| min-date | 可选的最小时间，精确到日 | _Date_ | - |
| max-date | 可选的最大时间，精确到日 | _Date_ | - |
| title | 顶部栏标题 | _string_ | `''` |
| confirm-button-text | 确认按钮文字 | _string_ | `确认` |
| cancel-button-text | 取消按钮文字 | _string_ | `取消` |
| show-toolbar | 是否显示顶部栏 | _boolean_ | `true` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法切换选项 | _boolean_ | `false` |
| filter | 选项过滤函数 | _(type: string, options: PickerOption[]) => PickerOption[]_ | - |
| formatter | 选项格式化函数 | _(type: string, option: PickerOption) => PickerOption_ | - |
| option-height | 选项高度，支持 `rpx` 单位，默认 `px` | _number \| string_ | `44` |
| visible-option-num | 可见的选项个数 | _number \| string_ | `6` |
| swipe-duration | 快速滑动时惯性滚动的时长，单位 `ms` | _number \| string_ | `1000` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击完成按钮时触发 | _{ selectedValues, selectedOptions, selectedIndexes }_ |
| cancel | 点击取消按钮时触发 | _{ selectedValues, selectedOptions, selectedIndexes }_ |
| change | 选项改变时触发 | _{ selectedValues, selectedOptions, selectedIndexes, columnIndex }_ |

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
