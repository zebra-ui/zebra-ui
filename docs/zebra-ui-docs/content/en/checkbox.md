# Checkbox checkbox

### introduce

Make multiple selections from a set of alternatives.

## Code Demo

### Basic usage

Bind the checked state of the checkbox through `v-model`.

```html
<z-checkbox v-model="checked">checkbox</z-checkbox>
```

```js
import { ref } from 'vue'
const checked = ref(true)
```

### Disabled state

Checkboxes can be disabled by setting the `disabled` attribute.

```html
<z-checkbox v-model="checked" disabled>checkbox</z-checkbox>
```

### Custom shapes

Set the `shape` property to `square` and the checkbox will become square.

```html
<z-checkbox-group v-model="checked" shape="square">
   <z-checkbox name="a">checkbox a</z-checkbox>
   <z-checkbox name="b">checkbox b</z-checkbox>
</z-checkbox-group>
```

```js
import { ref } from 'vue';
const checked = ref(['a', 'b']);
```

### Custom color

Set the icon color of the checked state through the `checked-color` property.

```html
<z-checkbox v-model="checked" checked-color="#ee0a24">checkbox</z-checkbox>
```

### Custom size

The size of the icon can be customized through the `icon-size` attribute.

```html
<z-checkbox v-model="checked" icon-size="48rpx">checkbox</z-checkbox>
```

### Custom icon

Customize the icon through the `icon` slot, and you can use `slotProps` to determine whether it is selected.

```html
<z-checkbox v-model="checked">
   Custom icon
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

### Left text

Set the `label-position` property to `'left'` to adjust the text position to the left side of the check box.

```html
<z-checkbox v-model="checked" label-position="left">checkbox</z-checkbox>
```

### Disable text click

After setting the `label-disabled` attribute, clicking on content other than the icon will not trigger the checkbox toggle.

```html
<z-checkbox v-model="checked" label-disabled>checkbox</z-checkbox>
```

### Checkbox group

Checkboxes can be used together with checkbox groups, which bind the checked state of the checkbox through the `v-model` array.

```html
<z-checkbox-group v-model="checked">
   <z-checkbox name="a">checkbox a</z-checkbox>
   <z-checkbox name="b">checkbox b</z-checkbox>
</z-checkbox-group>
```

### Horizontal arrangement

After setting the `direction` property to `horizontal`, the checkbox group becomes horizontal.

```html
<z-checkbox-group v-model="checked" direction="horizontal">
   <z-checkbox name="a">checkbox a</z-checkbox>
   <z-checkbox name="b">checkbox b</z-checkbox>
</z-checkbox-group>
```

### Limit the maximum number of options

The maximum number of options in a checkbox group can be limited through the `max` attribute.

```html
<z-checkbox-group v-model="checked" :max="2">
   <z-checkbox name="a">checkbox a</z-checkbox>
   <z-checkbox name="b">checkbox b</z-checkbox>
   <z-checkbox name="c">checkbox c</z-checkbox>
</z-checkbox-group>
```

### Select all and inverse selection

Selecting all and inverting selection can be achieved through the `toggleAll` method on the `CheckboxGroup` instance.

```html
<z-checkbox-group v-model="checked" ref="checkboxGroup">
   <z-checkbox name="a">checkbox a</z-checkbox>
   <z-checkbox name="b">checkbox b</z-checkbox>
   <z-checkbox name="c">checkbox c</z-checkbox>
</z-checkbox-group>

<z-button type="primary" @click="checkAll">Select all</z-button>
<z-button type="primary" @click="toggleAll">Invert</z-button>
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

### Used with cell component

When used with the cell component, you need to introduce the `Cell` and `CellGroup` components and trigger the switch through the toggle method on the `Checkbox` instance.

```html
<z-checkbox-group v-model="checked">
   <z-cell-group inset>
     <z-cell
       v-for="(item, index) in list"
       clickable
       :key="item"
       :title="`Checkbox ${item}`"
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

### Uncertain status

Use `indeterminate` to set whether the checkbox is in an indeterminate state.

```html
<z-checkbox
   v-model="isCheckAll"
   :indeterminate="isIndeterminate"
   @change="checkAllChange"
>
   select all
</z-checkbox>

<z-checkbox-group v-model="checkedResult" @change="checkedResultChange">
   <z-checkbox v-for="item in list" :key="item" :name="item">
     Checkbox {{ item }}
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

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | Whether it is selected | _boolean_ | `false` |
| name | Identifier, usually a unique string or number | _any_ | - |
| shape | Shape, optional value is `square` | _string_ | `round` |
| disabled | Whether to disable the checkbox | _boolean_ | `false` |
| label-disabled | Whether to disable checkbox text clicks | _boolean_ | `false` |
| label-position | Text position, optional value is `left` | _string_ | `right` |
| icon-size | Icon size, default unit is `px` | _number \| string_ | `20px` |
| checked-color | Checked status color | _string_ | `#1989fa` |
| bind-group | Whether to bind to the checkbox group | _boolean_ | `true` |
| indeterminate | Whether it is an indeterminate state | _boolean_ | `false` |

### CheckboxGroup Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | Identifiers for all selected items | _any[]_ | - |
| disabled | Whether to disable all checkboxes | _boolean_ | `false` |
| max | The maximum number of options, `0` means unlimited | _number \| string_ | `0` |
| direction | Arrangement direction, optional value is `horizontal` | _string_ | `vertical` |
| icon-size | Icon size for all checkboxes, default unit is `px` | _number \| string_ | `20px` |
| checked-color | The checked state color of all checkboxes | _string_ | `#1989fa` |
| shape | Shape, optional value is `square` | _string_ | `round` |

### Checkbox Events

| Event name | Description | Callback parameters |
| ------ | ------------------------ | -------------------- |
| change | Event triggered when the binding value changes | _checked: boolean_ |
| click | Triggered when the checkbox is clicked | _event: MouseEvent_ |

### CheckboxGroup Events

| Event name | Description | Callback parameters |
| ------ | --------------------- | --------------- |
| change | Event triggered when the binding value changes | _names: any[]_ |

### Checkbox Slots

| Name | Description | Parameters |
| ------- | ---------- | ----------------------------------------- |
| default | custom text | _{ checked: boolean, disabled: boolean }_ |
| icon | custom icon | _{ checked: boolean, disabled: boolean }_ |

### CheckboxGroup method

Through ref, you can get the CheckboxGroup instance and call the instance method.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| toggleAll | Toggle all check boxes, pass `true` to select, `false` to uncheck, pass no parameter to negate | _options?: boolean \| object_ | - |

### toggleAll method example

```js
import { ref } from 'vue';

const checkboxGroupRef = ref();

// Invert all selections
checkboxGroupRef?.value.toggleAll();
//select all
checkboxGroupRef?.value.toggleAll(true);
// cancel all of them
checkboxGroupRef?.value.toggleAll(false);

// Invert all selections and skip disabled checkboxes
checkboxGroupRef?.value.toggleAll({
   skipDisabled: true,
});
// Select all and skip disabled checkboxes
checkboxGroupRef?.value.toggleAll({
   checked: true,
   skipDisabled: true,
});
```

### Checkbox method

Through ref, you can get the Checkbox instance and call the instance method.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| toggle | Switch the selected state, pass `true` to select, `false` to deselect, and pass no parameter to negate | _checked?: boolean_ | - |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ---------------------------------- | ----------------------------- | ---- |
| --z-checkbox-size | _40rpx_ | - |
| --z-checkbox-border-color | _var(--z-gray-5)_ | - |
| --z-checkbox-duration | _var(--z-duration-fast)_ | - |
| --z-checkbox-label-margin | _var(--z-padding-xs)_ | - |
| --z-checkbox-label-color | _var(--z-text-color)_ | - |
| --z-checkbox-checked-icon-color | _var(--z-primary-color)_ | - |
| --z-checkbox-disabled-icon-color | _var(--z-gray-5)_ | - |
| --z-checkbox-disabled-label-color | _var(--z-text-color-3)_ | - |
| --z-checkbox-disabled-background | _var(--z-border-color)_ | - |