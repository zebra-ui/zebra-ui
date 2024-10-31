# Sidebar

### Introduction 
 
A vertically displayed navigation bar for switching between different content areas. 
 
## Code Demonstration 
 
### Basic usage 
 
Bind the index of the currently selected item through `v-model`. 
 
```html 
<z-sidebar v-model="active"> 
  <z-sidebar-item title="tag name" /> 
  <z-sidebar-item title="label name" /> 
  <z-sidebar-item title="tag name" /> 
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
 
### Disable options 
 
Disable the option with the `disabled` attribute. 
 
```html 
<z-sidebar v-model="active"> 
  <z-sidebar-item title="tag name" /> 
  <z-sidebar-item title="label name" disabled /> 
  <z-sidebar-item title="label name" /> 
</z-sidebar> 
``` 
 
### Listening to Switch Events 
 
Set the `change` method to listen for events when switching navigation items. 
 
```html 
<z-sidebar v-model="active" @change="onChange"> 
  <z-sidebar-item title="Tag name 1" /> 
  <z-sidebar-item title="label name 2" /> 
  <z-sidebar-item title="Tag name 3" /> 
</z-sidebar> 
``` 
 
```js 
import { ref } from 'vue'; 
import { useToast } from '@/uni_modules/zebra-ui' 
const toast = useToast() 
 
export default { 
  setup() { 
    const active = ref(0); 
    const onChange = (index: number) => toast.showToast(`Title ${index + 1}`) 
    return { 
      active, 
      onChange, 
    }; 
  }, 
}; 
``` 
 
### Logo tips 
 
After setting the `dot` property, a small red dot will be displayed in the upper right corner; After setting the `badge` property, the corresponding logo will be displayed in the upper right corner. 
 
```html 
<z-sidebar v-model="active"> 
  <z-sidebar-item title="label name" dot /> 
  <z-sidebar-item title="label name" badge="5" /> 
  <z-sidebar-item title="tag name" /> 
</z-sidebar> 
``` 
 
## API 
 
### Sidebar Props 
 
| Parameter    | Description           | Type               | Default Value | 
| ------- | ---------------- | ------------------ | ------ | 
| v-model | Index of the current navigation item | _number \| string_ | `0`    | 
 
### Sidebar Events 
 
| Event Name | Description | Callback Parameter | 
| ------ | ---------------- | --------------- | 
| change | Triggered when switching navigation items | _index: number_ | 
 
### SidebarItem Props 
 
| Parameter | Description | Type | Default Value | 
| --- | --- | --- | --- | 
| title | content | _string_ | `''` | 
| dot | Whether to display the small red dot in the upper right corner | _boolean_ | `false` | 
| badge | The content of the logo in the upper right corner of the icon | _number \| string_ | - | 
| badge-props | Customize the attributes of the badge. The passed-in object will be passed through to the [Badge component props](/badge#props) | _BadgeProps_ | - | 
| disabled | Whether to disable the item | _boolean_ | `false` | 
 
### SidebarItem Events 
 
| Event Name | Description       | Callback Parameter        | 
| ------ | ---------- | --------------- | 
| click  | Triggered when clicked | _index: number_ | 
 
### SidebarItem Slots 
 
| Name  | Description | 
| ----- | ----------- | 
| title | Customize Title  | 
 
## Theme customization 
 
### Style Variables 
 
The component provides the following CSS variables that can be used to customize styles. For usage, please refer to the [ConfigProvider Component](/config-provider). 
 
| Name                                 | Default Value                   | Description | 
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