# NavBar navigation bar

### introduce

Provide navigation function for the page, often used at the top of the page.

## Code Demo

### Basic usage

Set the navigation bar title through the `title` attribute.

```html
<z-nav-bar title="title" />
```

### Return to previous page

Implement the return to previous function in the navigation bar.

```html
<z-nav-bar title="Title" left-text="Return" left-arrow />
```

### Right button

Add a clickable button to the right of the navigation bar.

```html
<z-nav-bar
   title="title"
   left-text="Return"
   right-text="Button"
   left-arrow
   @click-right="toast.showToast('button')"
/>
```

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
```

### Using slots

The content on either side of the navigation bar can be customized via slots.

```html
<z-nav-bar title="Title" left-text="Return" left-arrow>
   <template #right>
     <z-icon name="search" size="18" />
   </template>
</z-nav-bar>
```

### Disable button

Disable buttons on both sides via the `left-disabled` or `right-disabled` properties. When a button is disabled, its transparency is reduced and it cannot be clicked.

```html
<z-nav-bar
   title="title"
   left-text="Return"
   right-text="Button"
   left-arrow
   left-disabled
   right-disabled
/>
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| title | title | _string_ | `''` |
| left-text | left copy | _string_ | `''` |
| right-text | right side copy | _string_ | `''` |
| left-disabled | Whether to disable the left button. When disabled, the transparency is reduced and cannot be clicked | _boolean_ | `false` |
| right-disabled | Whether to disable the right button. When disabled, the transparency is reduced and cannot be clicked | _boolean_ | `false` |
| left-arrow | Whether to display the left arrow | _boolean_ | `false` |
| border | Whether to display the bottom border | _boolean_ | `true` |
| fixed | Whether to be fixed at the top | _boolean_ | `false` |
| placeholder | Whether to generate a placeholder element of equal height at the label position when fixed at the top | _boolean_ | `false` |
| z-index | Navigation bar z-index | _number \| string_ | `1` |
| safe-area-inset-top | Whether to enable top safe area adaptation | _boolean_ | `false` |
| clickable | Whether to enable click feedback for buttons on both sides | _boolean_ | `true` |
| autoBack | Whether to automatically return to the previous page after clicking | _boolean_ | `true` | 

### Slots

| Name | Description |
| ----- | ------------------ |
| title | custom title |
| left | Customize left area content |
| right | Customize the content of the right area |

### Events

| Event name | Description | Callback parameters |
| ----------- | ------------------ | ------------------- |
| click-left | Triggered when the left button is clicked | _event: MouseEvent_ |
| click-right | Triggered when the right button is clicked | _event: MouseEvent_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ---------------------------------- | -------------------------- | ---- |
| --z-nav-bar-height | _92rpx_ | - |
| --z-nav-bar-background | _var(--z-background-2)_ | - |
| --z-nav-bar-arrow-size | _32rpx_ | - |
| --z-nav-bar-icon-color | _var(--z-primary-color)_ | - |
| --z-nav-bar-text-color | _var(--z-primary-color)_ | - |
| --z-nav-bar-title-font-size | _var(--z-font-size-lg)_ | - |
| --z-nav-bar-title-text-color | _var(--z-text-color)_ | - |
| --z-nav-bar-z-index | _1_ | - |