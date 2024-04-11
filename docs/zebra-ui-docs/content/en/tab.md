# Tab tab page

### introduce

Tab component for switching between different content areas.

## Code Demo

### Basic usage

Bind the index value corresponding to the currently active tag through `v-model:active`. The first tag is enabled by default.

```html
<z-tabs v-model:active="active">
   <z-tab title="Tab 1">Content 1</z-tab>
   <z-tab title="Tab 2">Content 2</z-tab>
   <z-tab title="Tab 3">Content 3</z-tab>
   <z-tab title="Tab 4">Content 4</z-tab>
</z-tabs>
```

```js
import { ref } from 'vue';
const active = ref(0);
```

### Match by name

When the label specifies the `name` attribute, the value of `v-model:active` is the `name` of the current label (the label cannot be matched by the index value at this time).

```html
<z-tabs v-model:active="activeName">
   <z-tab title="Tab 1" name="a">Content 1</z-tab>
   <z-tab title="Tab 2" name="b">Content 2</z-tab>
   <z-tab title="Tab 3" name="c">Content 3</z-tab>
</z-tabs>
```

```js
import { ref } from 'vue';
const activeName = ref('b');
```

### Tab bar scrolling

When the number of tabs exceeds 5, the tab bar can be scrolled horizontally, and the current tab will be automatically centered when switching.

```html
<z-tabs v-model:active="active">
   <z-tab v-for="index in 8" :title="'tab ' + index">
     Content {{ index }}
   </z-tab>
</z-tabs>
```

### Disable tags

A label can be disabled by setting the `disabled` attribute.

```html
<z-tabs v-model:active="active">
   <z-tab title="Tab 1">Content 1</z-tab>
   <z-tab title="Tab 2" disabled>Content 2</z-tab>
   <z-tab title="Tab 3">Content 3</z-tab>
</z-tabs>
```

### Style style

`Tab` supports two styles: `line` and `card`. The default is `line` style. You can switch the style through the `type` attribute.

```html
<z-tabs v-model:active="active" type="card">
   <z-tab title="Tab 1">Content 1</z-tab>
   <z-tab title="Tab 2">Content 2</z-tab>
   <z-tab title="Tab 3">Content 3</z-tab>
</z-tabs>
```

### Click event

When a tab is clicked, the `click-tab` event is triggered.

```html
<z-tabs v-model:active="active" @click-tab="onClickTab">
   <z-tab title="Tab 1">Content 1</z-tab>
   <z-tab title="Tab 2">Content 2</z-tab>
</z-tabs>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const onClickTab = ({ title }: any) => toast.showToast(title)
```

### Sticky layout

Sticky layout can be turned on through the `sticky` attribute. Under sticky layout, the tab will automatically stick to the top when it is scrolled to the top.

```html
<z-tabs v-model:active="active" sticky>
   <z-tab v-for="index in 4" :title="'options ' + index">
     Content {{ index }}
   </z-tab>
</z-tabs>
```

> Tips: If there is other content at the top of the page, you can set the distance from the top through the offset-top property. A custom navigation bar needs to declare the custom-navbar attribute.

### Shrink layout

Shrink layout can be turned on through the `shrink` attribute. When turned on, all labels will be shrunk and aligned to the left.

```html
<z-tabs v-model:active="active" shrink>
   <z-tab v-for="index in 4" :title="'options ' + index">
     Content {{ index }}
   </z-tab>
</z-tabs>
```

### Custom labels

Label content can be customized through the `title` slot.

```html
<z-tabs v-model:active="active">
   <z-tab v-for="index in 2">
     <template #title> <z-icon name="star" />Options </template>
     Content {{ index }}
   </z-tab>
</z-tabs>
```

### Switch animation

The transition animation when switching tag content can be turned on through the `animated` attribute.

```html
<z-tabs v-model:active="active" animated>
   <z-tab v-for="index in 4" :title="'options ' + index">
     Content {{ index }}
   </z-tab>
</z-tabs>
```

### Slide switch

Swipe switching tabs can be enabled through the `swipeable` attribute.

```html
<z-tabs v-model:active="active" swipeable>
   <z-tab v-for="index in 4" :title="'options ' + index">
     Content {{ index }}
   </z-tab>
</z-tabs>
```

### Scroll Navigation

The scroll navigation mode can be enabled through the `scrollspy` attribute. In this mode, the content will be displayed tiles.

```html
<z-tabs v-model:active="activeScrollspy" scrollspy>
   <view style="height: 1000rpx">
     <z-tab
       v-for="(item, index) in 18"
       :key="index"
       :title="`Tag ${item}`"
     >
       <view class="demo-tab-item"> Content{{ item }} </view>
     </z-tab>
   </view>
</z-tabs>
```

### Asynchronous switching

The `before-change` attribute allows you to perform specific logic before switching tags.

```html
<z-tabs v-model:active="activeBefore" :before-change="beforeChange">
   <z-tab
     v-for="(item, index) in 4"
     :key="index"
     :title="`Tag ${item}`"
   >
     <view class="demo-tab-item"> Content{{ item }} </view>
   </z-tab>
</z-tabs>
```

```js
const beforeChange = (index: any) => {
   if (index === 1) {
     return false
   }
   return new Promise((resolve) => {
     resolve(index !== 3)
   })
}
```

> Tips: Swiping through gestures will not trigger the before-change attribute.

### Hide title bar

The title bar of Tabs can not be rendered by setting the `showHeader` property to `false`. In this case, you can control the `active` property of Tabs through some custom components.

```html
<z-tabs v-model:active="active" :show-header="false">
   <z-tab v-for="index in 4"> Content {{ index }} </z-tab>
</z-tabs>
```

## API

### Tabs Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model:active | Bind the identifier of the currently selected tag | _number \| string_ | `0` |
| type | Style type, optional value is `card` | _string_ | `line` |
| color | Tag theme color | _string_ | `#1989fa` |
| background | tab bar background color | _string_ | `white` |
| duration | Animation time in seconds, set to 0 to disable animation | _number \| string_ | `0.3` |
| line-width | Bottom bar width, default unit `px` | _number \| string_ | `80rpx` |
| line-height | Bottom bar height, default unit `px` | _number \| string_ | `6rpx` |
| animated | Whether to enable transition animation when switching tab content | _boolean_ | `false` |
| border | Whether to display the outer border of the label bar, only valid when `type="line"` | _boolean_ | `false` |
| ellipsis | Whether to omit too long title text | _boolean_ | `true` |
| sticky | Whether to use sticky layout | _boolean_ | `false` |
| shrink | Whether to enable left shrink layout | _boolean_ | `false` |
| swipeable | Whether to enable left and right sliding switching with gestures | _boolean_ | `false` |
| scrollspy | Whether to enable scroll navigation | _boolean_ | `false` |
| show-header | Whether to display the title bar | _boolean_ | `true` |
| offset-top | The distance from the top when ceiling is mounted in sticky layout, supports `rpx` unit, default is `px` | _number \| string_ | `0` |
| swipe-threshold | Scroll threshold, horizontal scrolling starts when the number of tabs exceeds the threshold and the total width exceeds the width of the tab bar | _number \| string_ | `5` |
| title-active-color | title active color | _string_ | - |
| title-inactive-color | Title default color | _string_ | - |
| before-change | switch The callback function before the label, returning `false` can prevent switching, and supports returning Promise | _(name: number \| string) => boolean \| Promise\<boolean\>_ | - |

### Tab Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| title | title | _string_ | - |
| disabled | Whether to disable the label | _boolean_ | `false` |
| dot | Whether to display a small red dot in the upper right corner of the title | _boolean_ | `false` |
| badge | The content of the logo in the upper right corner of the icon | _number \| string_ | - |
| name | tag name as matching identifier | _number \| string_ | index value of the tag |
| title-style | Custom title style | _string \| Array \| object_ | - |
| title-class | Custom title class name | _string \| Array \| object_ | - |
| show-zero-badge | When badge is the number 0, whether to display the logo | _boolean_ | `true` |

### Tabs Events

| Event name | Description | Callback parameters |
| --- | --- | --- |
| click-tab | Triggered when a tab is clicked | _{ name: string \| number, title: string, event: MouseEvent, disabled: boolean }_ |
| change | Triggered when the currently active label changes | _name: string \| number, title: string_ |
| scroll | Triggered when scrolling, only effective in sticky mode | _{ scrollTop: number, isFixed: boolean }_ |

### Tabs method

Through ref, you can get the Tabs instance and call the instance method.

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| resize | This method can be called to trigger redrawing when the size of the outer element or the display state of the component changes | - | - |
| scrollTo | Scroll to the specified tab, available in scroll navigation mode | _name: string \| number_ | - |

### Tabs Slots

| Name | Description |
| ---------- | --------------- |
| nav-left | Content on the left side of the tab bar |
| nav-right | Content on the right side of the tab bar |
| nav-bottom | Content below the tab bar |

### Tab Slots

| Name | Description |
| ------- | ---------- |
| default | tab content |
| title | custom title |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
|-------------------------------- | -------------------------- | ---- |
| --z-tab-text-color | _var(--z-gray-7)_ | - |
| --z-tab-active-text-color | _var(--z-text-color)_ | - |
| --z-tab-disabled-text-color | _var(--z-text-color-3)_ | - |
| --z-tab-font-size | _var(--z-font-size-md)_ | - |
| --z-tab-line-height | _var(--z-line-height-md)_ | - |
| --z-tabs-default-color | _var(--z-primary-color)_ | - |
| --z-tabs-line-height | _88rpx_ | - |
| --z-tabs-card-height | _60rpx_ | - |
| --z-tabs-nav-background | _var(--z-background-2)_ | - |
| --z-tabs-bottom-bar-width | _80rpx_ | - |
| --z-tabs-bottom-bar-height | _6rpx_ | - |
| --z-tabs-bottom-bar-color | _var(--z-primary-color)_ | - |