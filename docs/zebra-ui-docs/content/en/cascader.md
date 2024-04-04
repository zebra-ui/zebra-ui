# Cascader cascade selection

### introduce

Cascading selection boxes are used for selecting multi-level data. Typical scenarios are province and city selection.


## Code Demo

### Basic usage

The cascading selection component can be used with Field and Popup components. Examples are as follows:

```html
<z-field
   v-model="fieldValue"
   is-link
   readonly
   label="region"
   placeholder="Please select your region"
   @click="show = true"
/>
<z-popup v-model:show="show" round position="bottom">
   <z-cascader
     v-model="cascaderValue"
     title="Please select your region"
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
     //Option list, children represents sub-options, supports multi-level nesting
     const options = [
       {
         text: 'Zhejiang Province',
         value: '330000',
         children: [{ text: 'Hangzhou City', value: '330100' }],
       },
       {
         text: 'Jiangsu Province',
         value: '320000',
         children: [{ text: 'Nanjing City', value: '320100' }],
       },
     ];
     //After all options are selected, the finish event will be triggered
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

### China province and city data

The Cascader component is often used to select provinces and municipalities. The example project of `zebra` provides a Chinese province and municipality data, which can be downloaded and introduced into your own project:

```html
<z-field
   v-model="fieldValue"
   is-link
   readonly
   label="region"
   placeholder="Please select your region"
   @click="show = true"
/>
<z-popup v-model:show="show" round position="bottom">
   <z-cascader
     v-model="cascaderValue"
     title="Please select your region"
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

### Custom color

Use the `active-color` property to set the highlight color of the selected state.

```html
<z-cascader
   v-model="cascaderValue"
   title="Please select your region"
   :options="options"
   active-color="#ee0a24"
   @close="show = false"
   @finish="onFinish"
/>
```

### Asynchronous loading options

You can listen to the `change` event and set `options` dynamically to implement asynchronous loading of options.

```html
<z-field
   v-model="fieldValue"
   is-link
   readonly
   label="region"
   placeholder="Please select your region"
   @click="show = true"
/>
<z-popup v-model:show="show" round position="bottom">
   <z-cascader
     v-model="cascaderValue"
     title="Please select your region"
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
         text: 'Zhejiang Province',
         value: '330000',
         children: [],
       },
     ]);
     const onChange = ({ value }) => {
       if (
         value === options.value[0].value &&
         options.value[0].children.length === 0
       ) {
         // Simulate data request
         toast.showLoadingToast('Loading...');
         setTimeout(() => {
           options.value[0].children = [
             { text: 'Hangzhou City', value: '330100' },
             { text: 'Ningbo City', value: '330200' },
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

### Custom field name

The field names in `options` can be customized through the `field-names` attribute.

```html
<z-cascader
   v-model="code"
   title="Please select your region"
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
         name: 'Zhejiang Province',
         code: '330000',
         items: [{ name: 'Hangzhou City', code: '330100' }],
       },
       {
         name: 'Jiangsu Province',
         code: '320000',
         items: [{ name: 'Nanjing City', code: '320100' }],
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

### Customize the content above the options

```html
<z-cascader v-model="code" title="Please select your region" :options="options">
   <template #options-top="{ tabIndex }">
     <div class="current-level">The current level is {{ tabIndex + 1 }}</div>
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
         name: 'Zhejiang Province',
         code: '330000',
         items: [{ name: 'Hangzhou City', code: '330100' }],
       },
       {
         name: 'Jiangsu Province',
         code: '320000',
         items: [{ name: 'Nanjing City', code: '320100' }],
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

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | The value of the selected item | _string \| number_ | - |
| title | top title | _string_ | - |
| options | Option data source | _CascaderOption[]_ | `[]` |
| placeholder | Prompt text when not selected | _string_ | `Please select` |
| active-color | Highlight color of selected state | _string_ | `#1989fa` |
| swipeable | Whether to enable left and right sliding switching with gestures | _boolean_ | `true` |
| closeable | Whether to display the close icon | _boolean_ | `true` |
| show-header | Whether to display the title bar | _boolean_ | `true` |
| close-icon | Close the icon name or image link, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | `cross` |
| field-names | Custom fields in the `options` structure | _CascaderFieldNames_ | `{ text: 'text', value: 'value', children: 'children' }` |

### CascaderOption data structure

The `options` property is an array of objects. Each object in the array is configured with an option. The object can contain the following values:

| Key name | Description | Type |
| --------- | -------------------------- | --------------------------- |
| text | option text (required) | _string_ |
| value | The value corresponding to the option (required) | _string \| number_ |
| color | option text color | _string_ |
| children | list of child options | _CascaderOption[]_ |
| disabled | Whether to disable the option | _boolean_ |
| className | Add additional class for the corresponding column | _string \| Array \| object_ |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| change | Triggered when the selected item changes | _{ value: string \| number, selectedOptions: CascaderOption[], tabIndex: number }_ |
| finish | Triggered after all options are selected | _{ value: string \| number, selectedOptions: CascaderOption[], tabIndex: number }_ |
| close | Triggered when the close icon is clicked | - |
| click-tab | Triggered when a tab is clicked | _tabIndex: number, title: string_ |

### Slots

| Name | Description | Parameters |
| --- | --- | --- |
| title | Custom top title | - |
| option | Custom option text | _{ option: CascaderOption, selected: boolean }_ |
| options-top | Customize the content above the options | _{ tabIndex: number }_ |
| options-bottom | Customize the content below the options | _{ tabIndex: number }_ |


## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ------------------------------------ | ------------------------- | ---- |
| --z-cascader-header-height | _96rpx_ | - |
| --z-cascader-header-padding | _0 var(--z-padding-md)_ | - |
| --z-cascader-title-font-size | _var(--z-font-size-lg)_ | - |
| --z-cascader-title-line-height | _40rpx_ | - |
| --z-cascader-close-icon-size | _44rpx_ | - |
| --z-cascader-close-icon-color | _var(--z-gray-5)_ | - |
| --z-cascader-selected-icon-size | _36rpx_ | - |
| --z-cascader-tabs-height | _96rpx_ | - |
| --z-cascader-active-color | _var(--z-danger-color)_ | - |
| --z-cascader-options-height | _768rpx_ | - |
| --z-cascader-option-disabled-color | _var(--z-text-color-3)_ | - |
| --z-cascader-tab-color | _var(--z-text-color)_ | - |
| --z-cascader-unselected-tab-color | _var(--z-text-color-2)_ | - |