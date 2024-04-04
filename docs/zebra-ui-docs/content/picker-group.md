# PickerGroup 选择器组

### 介绍

用于结合多个 Picker 选择器组件，在一次交互中完成多个值的选择。

PickerGroup 中可以放置以下组件：

- [Picker](/picker)
- [Area](/area)
- [DatePicker](/date-picker)
- [TimePicker](/time-picker)
- 其他基于 Picker 封装的自定义组件

> 需结合[tab](/tab)组件完成。

## 代码演示

### 选择日期时间

在 `PickerGroup` 的默认插槽中放置一个 `DatePicker` 组件和一个 `TimePicker` 组件，可以实现同时选择日期和时间的交互效果。

```html
<z-picker-group
  title="预约日期"
  :tabs="['选择日期', '选择时间']"
  @confirm="onConfirm"
  @cancel="onCancel"
>
  <z-tabs
    v-model:active="activeTab"
    shrink
    animated
    :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
  >
    <z-tab title="选择日期">
      <z-date-picker
        v-model="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </z-tab>
    <z-tab title="选择时间">
      <z-time-picker v-model="currentTime" />
    </z-tab>
  </z-tabs>
</z-picker-group>
```

```js
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const currentDate = ref(['2022', '06', '01'])
const currentTime = ref(['12', '00'])
const onConfirm = () => {
  toast.showToast(
    `${currentDate.value.join('/')} ${currentTime.value.join(':')}`
  )
}

const onCancel = () => {
  toast.showToast('cancel')
}
```

### 下一步按钮

部分场景下，为了保证用户能够依次选择所有的 Picker，你可以设置 PickerGroup 的 `next-step-text` 属性。在设置 `next-step-text` 属性后，如果用户未切换到最后一个标签页，那么右上角的按钮会变成「下一步」，点击后自动切换到下一个 Picker。当用户切换到最后一个标签页时，右上角的按钮会变为「确认」。

```html
<z-picker-group
  v-model:activeTab="activeTabNext"
  title="预约日期"
  :count="4"
  next-step-text="下一步"
  @confirm="onConfirm"
  @cancel="onCancel"
>
  <z-tabs
    v-model:active="activeTabNext"
    shrink
    animated
    :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
  >
    <z-tab title="选择日期">
      <z-date-picker
        v-model="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </z-tab>
    <z-tab title="选择时间">
      <z-time-picker v-model="currentTime" />
    </z-tab>
    <z-tab title="再次选择日期">
      <z-date-picker
        v-model="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </z-tab>
    <z-tab title="再次选择时间">
      <z-time-picker v-model="currentTime" />
    </z-tab>
  </z-tabs>
</z-picker-group>
```

```js
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const currentDate = ref(['2022', '06', '01'])
const currentTime = ref(['12', '00'])
const activeTabNext = ref(0)
```

### 选择日期范围

在 `PickerGroup` 的默认插槽中放置两个 `DatePicker` 组件，可以实现选择日期范围的交互效果。

```html
<z-picker-group
  title="预约日期"
  :count="2"
  @confirm="onConfirmTimeMax"
  @cancel="onCancelTimeMax"
>
  <z-tabs
    v-model:active="activeTab"
    shrink
    animated
    :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
  >
    <z-tab title="开始日期">
      <z-time-picker v-model="startTime" />
    </z-tab>
    <z-tab title="结束日期">
      <z-time-picker v-model="endTime" />
    </z-tab>
  </z-tabs>
</z-picker-group>
```

### 选择时间范围

在 `PickerGroup` 的默认插槽中放置两个 `TimePicker` 组件，可以实现选择时间范围的交互效果。

```html
<z-picker-group
  title="预约日期"
  :count="2"
  @confirm="onConfirmTimeMax"
  @cancel="onCancelTimeMax"
>
  <z-tabs
    v-model:active="activeTab"
    shrink
    animated
    :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
  >
    <z-tab title="开始日期">
      <z-time-picker v-model="startTime" />
    </z-tab>
    <z-tab title="结束日期">
      <z-time-picker v-model="endTime" />
    </z-tab>
  </z-tabs>
</z-picker-group>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const startTime = ref(['12', '00'])
const endTime = ref(['12', '00'])

const onConfirmTimeMax = () => {
  toast.showToast(`${startTime.value.join(':')} - ${endTime.value.join(':')}`)
}

const onCancelTimeMax = () => {
  toast.showToast('cancel')
}
```

### 受控模式

`PickerGroup` 中 `tab` 的切换支持非受控模式和受控模式：

- 当未绑定 `v-model:active-tab` 时，PickerGroup 组件 `tab` 的切换完全由组件自身控制。
- 当绑定 `v-model:active-tab` 时，PickerGroup 支持受控模式，此时组件 `tab` 的切换同时支持 `v-model:active-tab` 的值和组件本身控制。

```html
<view class="picker-button">
  <z-button type="primary" @click="setActiveTab">
    点击切换 tab，当前为 {{ activeTab }}
  </z-button>
</view>
<z-picker-group
  title="预约日期"
  :count="2"
  @confirm="onConfirmTimeMax"
  @cancel="onCancelTimeMax"
>
  <z-tabs
    v-model:active="activeTab"
    shrink
    animated
    :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
  >
    <z-tab title="开始日期">
      <z-time-picker v-model="startTime" />
    </z-tab>
    <z-tab title="结束日期">
      <z-time-picker v-model="endTime" />
    </z-tab>
  </z-tabs>
</z-picker-group>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const activeTab = ref(0)
const setActiveTab = () => {
  activeTab.value = activeTab.value ? 0 : 1
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:active-tab | 设置当前选中的标签 | _number \| string_ | `0` |
| tabs | 设置标签页的标题 | _string[]_ | `[]` |
| title | 顶部栏标题 | _string_ | `''` |
| next-step-text | 下一步按钮的文字 | _string_ | `''` |
| confirm-button-text | 确认按钮的文字 | _string_ | `确认` |
| cancel-button-text | 取消按钮的文字 | _string_ | `取消` |

### Slots

| 名称    | 说明                   | 参数 |
| ------- | ---------------------- | ---- |
| toolbar | 自定义整个顶部栏的内容 | -    |
| title   | 自定义标题内容         | -    |
| confirm | 自定义确认按钮内容     | -    |
| cancel  | 自定义取消按钮内容     | -    |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                          | 默认值               | 描述 |
| ----------------------------- | -------------------- | ---- |
| --z-picker-group-background | _--z-background-2_ | -    |
