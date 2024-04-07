# Collapse

### introduce

Place a group of content in multiple accordion panels, and click the panel's title to expand or collapse its contents.

## Code Demo

### Basic usage

Control the expanded panel list through `v-model`, `activeNames` is in array format.

```html
<z-collapse v-model="active1">
   <z-collapse-item title="Title 1">
     Zebra-swiper is a mobile carousel component developed based on uniapp.
   </z-collapse-item>
   <z-collapse-item title="Title 2">
     The zebraSwiper component mainly consists of z-swiper and z-swiper-item.
     Among them, the z-swiper-item component can only be placed in the z-swiper component.
   </z-collapse-item>
   <z-collapse-item title="Title 3">
     When using components, you can pass parameters to the components through props to achieve different configurations.
     Typically, configuration will be passed to components through the options object. Therefore, configuration items should be written into options.
     At the same time, you can also call component methods through $refs.
   </z-collapse-item>
</z-collapse>
```

```js
const active1 = ref([0])
```

### Accordion

Accordion mode can be set through `accordion`, and up to one panel can be expanded. At this time, `activeName` is in string format.

```html
<z-collapse v-model="active2" accordion>
   <z-collapse-item title="Title 1">
     Zebra-swiper is a mobile carousel component developed based on uniapp.
   </z-collapse-item>
   <z-collapse-item title="Title 2">
     The zebraSwiper component mainly consists of z-swiper and z-swiper-item.
     Among them, the z-swiper-item component can only be placed in the z-swiper component.
   </z-collapse-item>
   <z-collapse-item title="Title 3">
     When using components, you can pass parameters to the components through props to achieve different configurations.
     Typically, configuration will be passed to components through the options object. Therefore, configuration items should be written into options.
     At the same time, you can also call component methods through $refs.
   </z-collapse-item>
</z-collapse>
```

```js
const active2 = ref(0)
```

### Disabled state

Disable individual panels via the `disabled` attribute.

```html
<z-collapse v-model="active3">
   <z-collapse-item title="Title 1">
     Zebra-swiper is a mobile carousel component developed based on uniapp.
   </z-collapse-item>
   <z-collapse-item title="Title 2" disabled>
     The zebraSwiper component mainly consists of z-swiper and z-swiper-item.
     Among them, the z-swiper-item component can only be placed in the z-swiper component.
   </z-collapse-item>
   <z-collapse-item title="Title 3" disabled>
     When using components, you can pass parameters to the components through props to achieve different configurations.
     Typically, configuration will be passed to components through the options object. Therefore, configuration items should be written into options.
     At the same time, you can also call component methods through $refs.
   </z-collapse-item>
</z-collapse>
```

### Custom title content

The content of the title bar can be customized through the `title` slot.

```html
<z-collapse v-model="active4">
   <z-collapse-item>
     <template #title> Title 1<z-icon name="tag" /> </template>
     Zebra-swiper is a mobile carousel component developed based on uniapp.
   </z-collapse-item>
   <z-collapse-item title="Title 2" value="Content" icon="question-circle">
     The zebraSwiper component mainly consists of z-swiper and z-swiper-item.
     Among them, the z-swiper-item component can only be placed in the z-swiper component.
   </z-collapse-item>
</z-collapse>
```

### Expand all and switch all

Expand all and toggle all can be achieved through the `toggleAll` method on the `Collapse` instance.

```html
<z-collapse v-model="active5" ref="collapse">
   <z-collapse-item title="Title 1" name="1">
     Zebra-swiper is a mobile carousel component developed based on uniapp.
   </z-collapse-item>
   <z-collapse-item title="Title 2" name="2">
     The zebraSwiper component mainly consists of z-swiper and z-swiper-item.
     Among them, the z-swiper-item component can only be placed in the z-swiper component.
   </z-collapse-item>
   <z-collapse-item title="Title 3" name="3">
     When using components, you can pass parameters to the components through props to achieve different configurations.
     Typically, configuration will be passed to components through the options object. Therefore, configuration items should be written into options.
     At the same time, you can also call component methods through $refs.
   </z-collapse-item>
</z-collapse>
<view class="demo-collapse-buttons">
   <z-button type="primary" @click="openAll"> Expand all </z-button>
   <z-button
     type="primary"
     :custom-style="{ 'margin-left': '30rpx' }"
     @click="toggleAll"
   >
     Switch all
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

> Tips: The toggleAll method cannot be used in accordion mode.

## API

### Collapse Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | The name of the currently expanded panel | Accordion mode: _number \| string_<br> Non-accordion mode: _(number \| string)[]_ | - |
| accordion | Whether to enable accordion mode | _boolean_ | `false` |
| border | Whether to display the outer border | _boolean_ | `true` |

### Collapse Events

| Event name | Description | Callback parameters |
| ------ | --------------- | ----------------------------------------- |
| change | Triggered when switching panels | activeNames: The type is consistent with the value bound to v-model |

### CollapseItem Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| name | Unique identifier, default is index value | _number \| string_ | `index` |
| icon | The icon name or image link on the left side of the title bar, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | - |
| size | Title bar size, optional value is `large` | _string_ | - |
| title | Content on the left side of the title bar | _number \| string_ | - |
| value | Content on the right side of the title bar | _number \| string_ | - |
| label | title bar description information | _number \| string_ | - |
| border | Whether to display the inner border | _boolean_ | `true` |
| is-link | Whether to display the arrow on the right side of the title bar and enable click feedback | _boolean_ | `true` |
| disabled | Whether to disable the panel | _boolean_ | `false` |
| readonly | Whether it is in read-only state. The panel cannot be operated in read-only state | _boolean_ | `false` |
| title-class | Additional class name for the left title | _string_ | - |
| value-class | Additional class name for content on the right | _string_ | - |
| label-class | Description information additional class name | _string_ | - |

### Collapse method

Through ref, you can get the CollapseItem instance and call the instance method.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| toggleAll | Toggle the expanded state of all panels, pass `true` to expand all, `false` to collapse all, pass no parameters to toggle all | _options?: boolean \| object_ | - |

### CollapseItem method

Through ref, you can get the CollapseItem instance and call the instance method.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| toggle | Switch the panel expansion state, pass `true` to expand, `false` to collapse, pass no parameter to toggle | _expand?: boolean_ | - |

### CollapseItem Slots

| Name | Description |
| ---------- | ------------------ |
| default | panel content |
| title | Customize the title bar on the left sidecapacity |
| value | Customize the content on the right side of the title bar |
| label | Custom title bar description information |
| icon | Customize the icon on the left side of the title bar |
| right-icon | Customize the icon on the right side of the title bar |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-collapse-item-duration | _var(--z-duration-base)_ | - |
| --z-collapse-item-content-padding | _var(--z-padding-sm) var(--z-padding-md)_ | - |
| --z-collapse-item-content-font-size | _var(--z-font-size-md)_ | - |
| --z-collapse-item-content-line-height | _1.5_ | - |
| --z-collapse-item-content-text-color | _var(--z-text-color-2)_ | - |
| --z-collapse-item-content-background | _var(--z-background-2)_ | - |
| --z-collapse-item-title-disabled-color | _var(--z-text-color-3)_ | - |