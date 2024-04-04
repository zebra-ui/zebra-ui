# Cascader 级联选择

### 介绍

级联选择框，用于多层级数据的选择，典型场景为省市区选择。


## 代码演示

### 基础用法

级联选择组件可以搭配 Field 和 Popup 组件使用，示例如下：

```html
<z-field
  v-model="fieldValue"
  is-link
  readonly
  label="地区"
  placeholder="请选择所在地区"
  @click="show = true"
/>
<z-popup v-model:show="show" round position="bottom">
  <z-cascader
    v-model="cascaderValue"
    title="请选择所在地区"
    :options="options"
    @close="show = false"
    @finish="onFinish"
  />
</z-popup>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const fieldValue = ref('');
    const cascaderValue = ref('');
    // 选项列表，children 代表子选项，支持多级嵌套
    const options = [
      {
        text: '浙江省',
        value: '330000',
        children: [{ text: '杭州市', value: '330100' }],
      },
      {
        text: '江苏省',
        value: '320000',
        children: [{ text: '南京市', value: '320100' }],
      },
    ];
    // 全部选项选择完毕后，会触发 finish 事件
    const onFinish = ({ selectedOptions }) => {
      show.value = false;
      fieldValue.value = selectedOptions.map((option) => option.text).join('/');
    };

    return {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};
```

### 中国省市区数据

Cascader 组件常用于选择省市区，`zebra` 的示例中项目 提供了一份中国省市区数据，可以下载到自己的项目中来引入：

```html
<z-field
  v-model="fieldValue"
  is-link
  readonly
  label="地区"
  placeholder="请选择所在地区"
  @click="show = true"
/>
<z-popup v-model:show="show" round position="bottom">
  <z-cascader
    v-model="cascaderValue"
    title="请选择所在地区"
    :options="options"
    @close="show = false"
    @finish="onFinish"
  />
</z-popup>
```

```js
import { ref } from 'vue';
import { useCascaderAreaData } from '../../common/js/area'

export default {
  setup() {
    const show = ref(false);
    const fieldValue = ref('');
    const cascaderValue = ref('');
    const options = useCascaderAreaData();
    const onFinish = ({ selectedOptions }) => {
      show.value = false;
      fieldValue.value = selectedOptions.map((option) => option.text).join('/');
    };
    return {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};
```

### 自定义颜色

通过 `active-color` 属性来设置选中状态的高亮颜色。

```html
<z-cascader
  v-model="cascaderValue"
  title="请选择所在地区"
  :options="options"
  active-color="#ee0a24"
  @close="show = false"
  @finish="onFinish"
/>
```

### 异步加载选项

可以监听 `change` 事件并动态设置 `options`，实现异步加载选项。

```html
<z-field
  v-model="fieldValue"
  is-link
  readonly
  label="地区"
  placeholder="请选择所在地区"
  @click="show = true"
/>
<z-popup v-model:show="show" round position="bottom">
  <z-cascader
    v-model="cascaderValue"
    title="请选择所在地区"
    :options="options"
    @close="show = false"
    @change="onChange"
    @finish="onFinish"
  />
</z-popup>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
export default {
  setup() {
    const toast = useToast()
    const show = ref(false);
    const fieldValue = ref('');
    const cascaderValue = ref('');
    const options = ref([
      {
        text: '浙江省',
        value: '330000',
        children: [],
      },
    ]);
    const onChange = ({ value }) => {
      if (
        value === options.value[0].value &&
        options.value[0].children.length === 0
      ) {
        // 模拟数据请求
        toast.showLoadingToast('加载中...');
        setTimeout(() => {
          options.value[0].children = [
            { text: '杭州市', value: '330100' },
            { text: '宁波市', value: '330200' },
          ];
          toast.closeToast();
        }, 1000);
      }
    };
    const onFinish = ({ selectedOptions }) => {
      show.value = false;
      fieldValue.value = selectedOptions.map((option) => option.text).join('/');
    };

    return {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};
```

### 自定义字段名

通过 `field-names` 属性可以自定义 `options` 里的字段名称。

```html
<z-cascader
  v-model="code"
  title="请选择所在地区"
  :options="options"
  :field-names="fieldNames"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const code = ref('');
    const fieldNames = {
      text: 'name',
      value: 'code',
      children: 'items',
    };
    const options = [
      {
        name: '浙江省',
        code: '330000',
        items: [{ name: '杭州市', code: '330100' }],
      },
      {
        name: '江苏省',
        code: '320000',
        items: [{ name: '南京市', code: '320100' }],
      },
    ];

    return {
      code,
      options,
      fieldNames,
    };
  },
};
```

### 自定义选项上方内容

```html
<z-cascader v-model="code" title="请选择所在地区" :options="options">
  <template #options-top="{ tabIndex }">
    <div class="current-level">当前为第 {{ tabIndex + 1 }} 级</div>
  </template>
</z-cascader>

<style>
.demo-cascader {
  .current-level {
    padding: 32rpx 32rpx 0;
    font-size: 28rpx;
    color: var(--z-gray-6);
  }
}
</style>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const code = ref('');
    const options = [
      {
        name: '浙江省',
        code: '330000',
        items: [{ name: '杭州市', code: '330100' }],
      },
      {
        name: '江苏省',
        code: '320000',
        items: [{ name: '南京市', code: '320100' }],
      },
    ];

    return {
      code,
      options,
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 选中项的值 | _string \| number_ | - |
| title | 顶部标题 | _string_ | - |
| options | 可选项数据源 | _CascaderOption[]_ | `[]` |
| placeholder | 未选中时的提示文案 | _string_ | `请选择` |
| active-color | 选中状态的高亮颜色 | _string_ | `#1989fa` |
| swipeable | 是否开启手势左右滑动切换 | _boolean_ | `true` |
| closeable | 是否显示关闭图标 | _boolean_ | `true` |
| show-header | 是否展示标题栏 | _boolean_ | `true` |
| close-icon | 关闭图标名称或图片链接，等同于 Icon 组件的 [name 属性](/icon#props) | _string_ | `cross` |
| field-names | 自定义 `options` 结构中的字段 | _CascaderFieldNames_ | `{ text: 'text', value: 'value', children: 'children' }` |

### CascaderOption 数据结构

`options` 属性是一个由对象构成的数组，数组中的每个对象配置一个可选项，对象可以包含以下值：

| 键名      | 说明                     | 类型                        |
| --------- | ------------------------ | --------------------------- |
| text      | 选项文字（必填）         | _string_                    |
| value     | 选项对应的值（必填）     | _string \| number_          |
| color     | 选项文字颜色             | _string_                    |
| children  | 子选项列表               | _CascaderOption[]_          |
| disabled  | 是否禁用选项             | _boolean_                   |
| className | 为对应列添加额外的 class | _string \| Array \| object_ |

### Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中项变化时触发 | _{ value: string \| number, selectedOptions: CascaderOption[], tabIndex: number }_ |
| finish | 全部选项选择完成后触发 | _{ value: string \| number, selectedOptions: CascaderOption[], tabIndex: number }_ |
| close | 点击关闭图标时触发 | - |
| click-tab | 点击标签时触发 | _tabIndex: number, title: string_ |

### Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| title | 自定义顶部标题 | - |
| option | 自定义选项文字 | _{ option: CascaderOption, selected: boolean }_ |
| options-top | 自定义选项上方的内容 | _{ tabIndex: number }_ |
| options-bottom | 自定义选项下方的内容 | _{ tabIndex: number }_ |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                                 | 默认值                    | 描述 |
| ------------------------------------ | ------------------------- | ---- |
| --z-cascader-header-height         | _96rpx_                    | -    |
| --z-cascader-header-padding        | _0 var(--z-padding-md)_ | -    |
| --z-cascader-title-font-size       | _var(--z-font-size-lg)_ | -    |
| --z-cascader-title-line-height     | _40rpx_                    | -    |
| --z-cascader-close-icon-size       | _44rpx_                    | -    |
| --z-cascader-close-icon-color      | _var(--z-gray-5)_       | -    |
| --z-cascader-selected-icon-size    | _36rpx_                    | -    |
| --z-cascader-tabs-height           | _96rpx_                    | -    |
| --z-cascader-active-color          | _var(--z-danger-color)_ | -    |
| --z-cascader-options-height        | _768rpx_                   | -    |
| --z-cascader-option-disabled-color | _var(--z-text-color-3)_ | -    |
| --z-cascader-tab-color             | _var(--z-text-color)_   | -    |
| --z-cascader-unselected-tab-color  | _var(--z-text-color-2)_ | -    |
