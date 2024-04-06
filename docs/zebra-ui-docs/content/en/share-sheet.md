# ShareSheet sharing panel

### introduce

The sharing panel that pops up at the bottom is used to display the operation buttons corresponding to each sharing channel, without specific sharing logic.

## Code Demo

### Basic usage

The sharing panel defines sharing options through the `options` attribute. Each item in the array is an object. For the object format, see the table at the bottom of the document.

```html
<z-cell is-link title="Show sharing panel" @click="showBasic = true" />
<z-share-sheet
   v-model:show="showBasic"
   title="Share with friends now"
   :options="options"
   @select="onSelect"
/>
```

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const showBasic = ref(false)
const options = computed(() => [
   { name: 'WeChat', icon: 'wechat' },
   { name: 'Weibo', icon: 'weibo' },
   { name: 'Copy link', icon: 'link' },
   { name: 'Share poster', icon: 'poster' },
   { name: 'QR code', icon: 'qrcode' }
])
const onSelect = (option: any) => {
   toast.showToast(option.name)
   showBasic.value = false
}
```

### Show multi-line options

When the number of sharing options is large, `options` can be defined as a nested array format, and each sub-array will be displayed as a row of options.

```html
<z-share-sheet
   v-model:show="showMultiLine"
   title="Share with friends now"
   :options="multiLineOptions"
   @select="onSelect"
/>
```

```js
const multiLineOptions = computed(() => [
   [
     { name: 'WeChat', icon: 'wechat' },
     { name: 'Moments', icon: 'wechat-moments' },
     { name: 'Weibo', icon: 'weibo' },
     { name: 'QQ', icon: 'qq' }
   ],
   [
     { name: 'Copy link', icon: 'link' },
     { name: 'Share poster', icon: 'poster' },
     { name: 'QR code', icon: 'qrcode' },
     { name: 'small program code', icon: 'weapp-qrcode' }
   ]
])
```

### Custom icon

In addition to using several built-in icons, you can directly pass the image URL in `icon` to use a custom icon.

```html
<z-share-sheet
   v-model:show="showCustomIcon"
   :options="customIconOptions"
   @select="onSelect"
/>
```

```js
const customIconOptions = computed(() => [
   {
     name: 'name',
     icon: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png'
   },
   {
     name: 'name',
     icon: 'zhihu'
   },
   {
     name: 'name',
     icon: 'linkedin'
   },
   { name: 'name', icon: 'facebook' }
])
```

### Display description information

The description text under the title can be set through the `description` attribute, and the description of the sharing options can be added by setting the `description` attribute in `options`.

```html
<z-share-sheet
   v-model:show="showWithDesc"
   title="Share with friends now"
   :options="optionsWithDesc"
   description="Description information"
   @select="onSelect"
/>
```

```js
const optionsWithDesc = computed(() => [
   { name: 'WeChat', icon: 'wechat' },
   { name: 'Weibo', icon: 'weibo' },
   {
     name: 'Copy link',
     icon: 'link',
     description: 'Description information'
   },
   { name: 'Share poster', icon: 'poster' },
   { name: 'QR code', icon: 'qrcode' }
])
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model:show | Whether to display the sharing panel | _boolean_ | `false` |
| options | Sharing options | _Option[]_ | `[]` |
| title | top title | _string_ | - |
| cancel-text | Cancel button text, passing an empty string can hide the button | _string_ | `'Cancel'` |
| description | Auxiliary description text below the title | _string_ | - |
| duration | animation duration in milliseconds, set to 0 to disable animation | _number \| string_ | `300` |
| z-index | Set the z-index level of the panel to a fixed value | _number \| string_ | `2000+` |
| round | Whether to display rounded corners | _boolean_ | `true` |
| overlay | whether to display the mask layer | _boolean_ | `true` |
| overlay-class | Custom mask layer class name | _string \| Array \| object_ | - |
| overlay-style | Custom mask layer style | _object_ | - |
| lock-scroll | Whether to lock background scrolling | _boolean_ | `true` |
| close-on-popstate | Whether to automatically close when the page is rolled back | _boolean_ | `true` |
| close-on-click-overlay | Whether to close the overlay after clicking it | _boolean_ | `true` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
| before-close | Callback function before closing, return `false` to prevent closing, support returning Promise | _(action: string) => boolean \| Promise\<boolean\>_ | - |

### Option data structure

The `options` property is an array of objects. Each object in the array is configured with a column. The objects can contain the following values:

| Key name | Description | Type |
| --- | --- | --- |
| name | Sharing channel name | _string_ |
| description | Description of sharing options | _string_ |
| icon | Icon, optional values are `wechat` `weibo` `qq` `link` `qrcode` `poster` `weapp-qrcode` `wechat-moments`, supports passing in image URL | _string_ |
| className | Sharing option class name | _string_ |

### Events

| Event name | Description | Callback parameters |
| ------------- | -------------------------- | ------------------------------------ |
| select | Triggered when the sharing option is clicked | _option: Option, index: number_ |
| cancel | Triggered when the cancel button is clicked | - |
| open | Triggered when the panel is opened | - |
| close | Triggered when closing the panel | - |
| opened | Triggered after the panel is opened and the animation ends | - |
| closed | Triggered after the panel is closed and the animation ends | - |
| click-overlay | Triggered when the overlay layer is clicked | _event: MouseEvent_ |

### Slots

| Name | Description |
| ----------- | ------------------ |
| title | Custom top title |
| description | Custom description text |
| cancel | Customize cancel button content |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-share-sheet-header-padding | _var(--z-padding-sm) var(--z-padding-md) var(--z-padding-base)_ | - |
| --z-share-sheet-title-color | _var(--z-text-color)_ | - |
| --z-share-sheet-title-font-size | _var(--z-font-size-md)_ | - |
| --z-share-sheet-title-line-height | _var(--z-line-height-md)_ | - |
| --z-share-sheet-description-color | _var(--z-text-color-2)_ | - |
| --z-share-sheet-description-font-size | _var(--z-font-size-sm)_ | - |
| --z-share-sheet-description-line-height | _32rpx_ | - |
|--z-share-sheet-icon-size | _96rpx_ | - |
| --z-share-sheet-option-name-color | _var(--z-gray-7)_ | - |
| --z-share-sheet-option-name-font-size | _var(--z-font-size-sm)_ | - |
| --z-share-sheet-option-description-color | _var(--z-text-color-3)_ | - |
| --z-share-sheet-option-description-font-size | _var(--z-font-size-sm)_ | - |
| --z-share-sheet-cancel-button-font-size | _var(--z-font-size-lg)_ | - |
| --z-share-sheet-cancel-button-height | _96rpx_ | - |
| --z-share-sheet-cancel-button-background | _var(--z-background-2)_ | - |