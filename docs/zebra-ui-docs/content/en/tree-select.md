# TreeSelect
 
### Introduction 
 
Used to select from a set of associated data collections. 
 
## Code Demonstration 
 
### Single choice mode 
 
`item` displays the required data for classification. The data format is shown in the example below `main-active-index` indicates the index of the highlighted option on the left, and `active-id` indicates the id of the highlighted option on the right. 
 
```html 
<z-tree-select 
  v-model:active-id="activeId" 
  v-model:main-active-index="activeIndex" 
  :items="items" 
/> 
``` 
 
```js 
import { ref } from 'vue'; 
 
export default { 
  setup() { 
    const activeId = ref(1); 
    const activeIndex = ref(0); 
    const items = [ 
      { 
        text: 'Zhejiang', 
        children: [ 
          { text: 'Hangzhou', id: 1 }, 
          { text: 'Wenzhou', id: 2 }, 
          { text: 'Ningbo', id: 3, disabled: true }, 
        ], 
      }, 
      { 
        text: 'Jiangsu', 
        children: [ 
          { text: 'Nanjing', id: 4 }, 
          { text: 'Wuxi', id: 5 }, 
          { text: 'Xuzhou', id: 6 }, 
        ], 
      }, 
      { text: 'Fujian', disabled: true }, 
    ]; 
 
    return { 
      items, 
      activeId, 
      activeIndex, 
    }; 
  }, 
}; 
``` 
 
### Multi-choice mode 
 
When `active-id` is in array format, multiple options on the right can be selected. 
 
```html 
<z-tree-select 
  v-model:active-id="activeIds" 
  v-model:main-active-index="activeIndex" 
  :items="items" 
/> 
``` 
 
```js 
import { ref } from 'vue'; 
 
export default { 
  setup() { 
    const activeIds = ref([1, 2]); 
    const activeIndex = ref(0); 
    const items = [ 
      { 
        text: 'Zhejiang', 
        children: [ 
          { text: 'Hangzhou', id: 1 }, 
          { text: 'Wenzhou', id: 2 }, 
          { text: 'Ningbo', id: 3, disabled: true }, 
        ], 
      }, 
      { 
        text: 'Jiangsu', 
        children: [ 
          { text: 'Nanjing', id: 4 }, 
          { text: 'Wuxi', id: 5 }, 
          { text: 'Xuzhou', id: 6 }, 
        ], 
      }, 
      { text: 'Fujian', disabled: true }, 
    ]; 
 
    return { 
      items, 
      activeIds, 
      activeIndex, 
    }; 
  }, 
}; 
``` 
 
### Customized Content 
 
The content of the right area can be customized through the `content` slot. 
 
```html 
<z-tree-select 
  v-model:main-active-index="activeIndex" 
  height="300rpx" 
  :items="items" 
> 
    <template #content> 
      <view v-if="activeIndex3 === 0" class="custom-content1"> 
        The currently selected subscript is {{ activeIndex3 }} 
      </view> 
      <view v-if="activeIndex3 === 1" class="custom-content2"> 
        The currently selected subscript is {{ activeIndex3 }} 
      </view> 
    </template> 
</z-tree-select> 
``` 
 
```js 
import { ref } from 'vue'; 
 
export default { 
  setup() { 
    const activeIndex = ref(0); 
    return { 
      activeIndex, 
      items: [{ text: 'Group 1' }, { text: 'Group 2' }], 
    }; 
  }, 
}; 
``` 
 
### Logo tips 
 
After setting the `dot` property, a small red dot will be displayed in the upper right corner of the icon; After setting the `badge` property, the corresponding logo will be displayed in the upper right corner of the icon. 
 
```html 
<z-tree-select 
  v-model:main-active-index="activeIndex" 
  :items="items" 
/> 
``` 
 
```js 
import { ref } from 'vue'; 
 
export default { 
  setup() { 
    const activeIndex = ref(0); 
    return { 
      activeIndex, 
      items: [ 
        { 
          text: 'Zhejiang', 
          children: [ 
            { text: 'Hangzhou', id: 1 }, 
            { text: 'Wenzhou', id: 2 }, 
            { text: 'Ningbo', id: 3, disabled: true }, 
          ], 
          dot: true, 
        }, 
        { 
          text: 'Jiangsu', 
          children: [ 
            { text: 'Nanjing', id: 4 }, 
            { text: 'Wuxi', id: 5 }, 
            { text: 'Xuzhou', id: 6 }, 
          ], 
          badge: 5, 
        }, 
      ], 
    }; 
  }, 
}; 
``` 
 
## API 
 
### Props 
 
| Parameter | Description | Type | Default Value | 
| --- | --- | --- | --- | 
| v-model:main-active-index | The index of the selected item on the left | _number \| string_ | `0` | 
| v-model:active-id | The id of the selected item on the right, supports passing in an array | _number \| string \|<br>(number \| string)[]_ | `0` | 
| items | Display the required data by category | _TreeSelectItem[]_ | `[]` | 
| height | Height, the default unit is `px` | _number \| string_ | `300` | 
| max | Maximum number of items selected on the right side | _number \| string_ | `Infinity` | 
| selected-icon | Customize the icon for the selected state in the right column | _string_ | `check` | 
 
### Events 
 
| Event Name     | Description                 | Callback Parameter                | 
| ---------- | -------------------- | ----------------------- | 
| click-nav  | Triggered when clicking the left navigation   | _index: number_         | 
| click-item | Triggered when clicking the selection item on the right | _item: TreeSelectChild_ | 
 
### Slots 
 
| Name              | Description               | Parameters                    | 
| ----------------- | ------------------ | ----------------------- | 
| nav-text | Custom Navigation Name     | _item: TreeSelectChild_ | 
| content           | Customize the content of the right area | -                       | 
 
### TreeSelectItem data structure 
 
`TreeSelectItem` is an array containing a series of objects describing categories. In each category, `text` represents the name of the current category, and `children` represents the selectable items in the category. 
 
```js 
[ 
  { 
    // Navigation name 
    text: 'All cities', 
    // Logo on the upper right corner of the navigation name 
    badge: 3, 
    // Whether to display a red dot on the upper right corner of the navigation name 
    dot: true, 
    // Additional class names for navigation nodes 
    className: 'my-class', 
    // All the options available under this navigation 
    children: [ 
      { 
        // Name 
        text: 'Wenzhou', 
        // id, as an identifier for matching the selected state 
        id: 1, 
        // Disable options 
        disabled: true, 
      }, 
      { 
        text: 'Hangzhou', 
        id: 2, 
      }, 
    ], 
  }, 
]; 
``` 
 
## Theme customization 
 
### Style Variables 
 
The component provides the following CSS variables for custom styles. For usage, please refer to the [ConfigProvider Component](/config-provider). 
 
| Name                                  | Default Value                   | Description | 
| ------------------------------------- | ---------------------------- | ---- | 
| --z-tree-select-font-size           | _var(--z-font-size-md)_    | -    | 
| --z-tree-select-nav-background      | _var(--z-background)_      | -    | 
| --z-tree-select-content-background  | _var(--z-background-2)_    | -    | 
| --z-tree-select-nav-item-padding    | _28rpx var(--z-padding-sm)_ | -    | 
| --z-tree-select-item-height         | _96rpx_                       | -    | 
| --z-tree-select-item-active-color   | _var(--z-primary-color)_   | -    | 
| --z-tree-select-item-disabled-color | _var(--z-gray-5)_          | -    | 
| --z-tree-select-item-selected-size  | _32rpx_                       | -    | 