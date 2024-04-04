# Toast light reminder

### introduce

A black translucent prompt pops up in the middle of the page, which is used for message notifications, loading prompts, operation result prompts and other scenarios.

### Function call

In order to facilitate the use of `Toast`, zebra-ui provides a series of auxiliary functions through which Toast components can be quickly evoked.

For example, if you use the `showToast` function, the corresponding light prompt will be rendered directly on the page after being called.

:::tips
There is no need to import it after using the unplugin-auto-import plug-in. For details, see [Advanced Usage](/advanced-usage).
:::

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
toast.showToast('prompt content');
```

## Code Demo

### Text prompt

Use the `showToast` method to display a text tooltip in the middle of the screen.

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
toast.showToast('prompt content');
```

### Loading tips

Use the `showLoadingToast` method to show the loading prompt, and the `forbidClick` option to disable background clicks.

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

toast.showLoadingToast({
   message: 'Loading...',
   forbidClick: true,
});
```

### Success/failure prompt

Use the `showSuccessToast` method to display success prompts and the `showFailToast` method to display failure prompts.

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

toast.showSuccessToast('Successful copy');
toast.showFailToast('failure copy');
```

### Custom icon

The icon can be customized through the `icon` option, which supports passing in the icon name or image link, which is equivalent to the [name attribute](/icon#props) of the Icon component.

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

toast.showToast({
   message: 'Custom icon',
   icon: 'smile',
});

toast.showToast({
   message: 'custom picture',
   icon: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png',
});
```

The loading icon type can be customized through the `loadingType` attribute.

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

toast.showLoadingToast({
   message: 'Loading...',
   forbidClick: true,
   loadingType: 'spinner',
});
```

### Custom location

Toast is rendered in the center of the screen by default, and the position of Toast display can be controlled through the `position` attribute.

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

toast.showToast({
   message: 'Top display',
   position: 'top',
});

toast.showToast({
   message: 'Bottom display',
   position: 'bottom',
});
```

### Text wrapping method

The `wordBreak` option can control the truncation method when the text in Toast is too long. The default value is `break-all`, and the optional values ​​are `break-word` and `normal`.

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

//Truncate words on line breaks
toast.showToast({
   message: 'This message will contain a incomprehensibilities long word.',
   wordBreak: 'break-all',
});

//Do not truncate words when wrapping
toast.showToast({
   message: 'This message will contain a incomprehensibilities long word.',
   wordBreak: 'break-word',
});
```

### Dynamic update tips

When the Toast method is executed, the corresponding Toast instance will be returned. By modifying the `message` attribute on the instance, the effect of dynamically updating the prompt can be achieved.

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

const toastData = toast.showLoadingToast({
   duration: 0,
   forbidClick: true,
   message: 'Countdown to 3 seconds',
});

let second = 3;
const timer = setInterval(() => {
   second--;
   if (second) {
     toastData!.message.value = `Countdown ${second} seconds`
   } else {
     clearInterval(timer);
     toast.closeToast();
   }
}, 1000);
```

### Modify default configuration

The default configuration of `showToast` and other methods can be globally modified through the `setToastDefaultOptions` function.

```js
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()

toast.setToastDefaultOptions({ duration: 2000 });

toast.setToastDefaultOptions('loading', { forbidClick: true });

toast.resetToastDefaultOptions();

toast.resetToastDefaultOptions('loading');
```

### Using Toast component

If you need to embed components or other custom content within Toast, you can use the Toast component directly and use the message slot for customization.

```html
<z-toast use-component v-model:show="show" :duration="0">
   <template #message>
     <view class="toast-custom">
       <z-icon name="error" color="var(--z-orange)"></z-icon>
       <view> This is a piece of content. Are you sure you want to delete it? </view>
     </view>
     <view class="toast-button">
       <z-button type="primary" size="mini" @click="show = false"
         >Confirm</z-button
       >
       <z-button size="mini" @click="show = false">Cancel</z-button>
     </view>
   </template>
</z-toast>
```

```js
import { ref } from 'vue';
const show = ref(false)
```

```css
.demo-toast {
   .toast-custom {
     display: flex;
     align-items: center;
     padding: 30rpx;
   }

   .toast-button {
     display: flex;
     align-items: center;
     justify-content: flex-end;
   }
}
```

## API

### method

Zebra exports the following Toast-related auxiliary functions:

| Method name | Description | Parameters | Return value |
| --- | --- | --- | --- |
| showToast | Display text prompts | `ToastOptions \| string` | Toast instance |
| showLoadingToast | Show loading prompt | `ToastOptions \| string` | Toast instance |
| showSuccessToast | Show success prompt | `ToastOptions \| string` | Toast instance |
| showFailToast | Show failure prompt | `ToastOptions \| string` | Toast instance |
| closeToast | Close the currently displayed tooltip | `closeAll: boolean` | `void` |
| setToastDefaultOptions | Modify the default configuration, affecting all `showToast` calls. Passing in type can modify the default configuration of the specified type of Toast | `type \| ToastOptions` | `void` |
| resetToastDefaultOptions | Resets the default configuration, affecting all `showToast` calls. Passing in type can reset the default configuration of the specified type of Toast | `type` | `void` |

### ToastOptions data structure

When calling `showToast` and other methods, the following options are supported:

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| type | Prompt type, optional values are `loading` `success` `fail` | _ToastType_ | `text` |
| position | Position, optional values are `top` `bottom` | _ToastPosition_ | `middle` |
| message | text content | _string_ | `''` |
| wordBreak | The line breaking method of text content. The optional values are `normal` `break-all` `break-word` | _ToastWordBreak_ | `'break-all'` |
| icon | Custom icon, supports passing in icon name or image chainConnection, equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | - |
| iconSize | Icon size, the default unit is `px`, you can pass in a string with `rpx` unit | _number \| string_ | - |
| iconPrefix | Icon class name prefix, equivalent to the [class-prefix attribute](/icon#props) of the Icon component | _string_ | `z-icon` |
| overlay | whether to display the background mask layer | _boolean_ | `false` |
| forbidClick | Whether to prohibit background clicks | _boolean_ | `false` |
| closeOnClick | Whether to close after clicking | _boolean_ | `false` |
| closeOnClickOverlay | Whether to close the mask layer after clicking | _boolean_ | `false` |
| loadingType | [Loading icon type](/loading), optional value is `spinner` | _string_ | `circular` |
| duration | display duration (ms), when the value is 0, the toast will not disappear | _number_ | `2000` |
| className | Custom class name | _string \| Array \| object_ | - |
| overlayClass | Custom mask layer class name | _string \| Array \| object_ | - |
| overlayStyle | Custom mask layer style | _object_ | - |
| transition | animation class name, equivalent to the `name` attribute of [transition](/transition) | _string_ | `fade` |
| z-index | Set the component's z-index level to a fixed value | _number \| string_ | `2000+` |
| onClose | Callback function when closing | _Function_ | - |
| onOpened | Callback function after full display | _Function_ | - |

### Props

When calling `Toast` through a component, the following Props are supported:

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| type | Prompt type, optional values are `loading` `success` `fail` | _ToastType_ | `text` |
| position | Position, optional values are `top` `bottom` | _ToastPosition_ | `middle` |
| message | text content | _string_ | `''` |
| word-break | The line breaking method of text content. The optional values are `normal` `break-all` `break-word` | _ToastWordBreak_ | `'break-all'` |
| icon | Custom icon, supports passing in icon name or image link, which is equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | - |
| icon-size | Icon size, the default unit is `px`, you can pass in a string with `rpx` unit | _number \| string_ | - |
| icon-prefix | Icon class name prefix, equivalent to the [class-prefix attribute](/icon#props) of the Icon component | _string_ | `z-icon` |
| overlay | whether to display the background mask layer | _boolean_ | `false` |
| forbid-click | Whether to prohibit background clicks | _boolean_ | `false` |
| close-on-click | Whether to close after click | _boolean_ | `false` |
| close-on-click-overlay | Whether to close the overlay after clicking it | _boolean_ | `false` |
| loading-type | [Loading icon type](/loading), optional value is `spinner` | _string_ | `circular` |
| duration | display duration (ms), when the value is 0, the toast will not disappear | _number_ | `2000` |
| class-name | Custom class name | _string \| Array \| object_ | - |
| overlay-class | Custom mask layer class name | _string \| Array \| object_ | - |
| overlay-style | Custom mask layer style | _object_ | - |
| transition | animation class name, equivalent to the `name` attribute of [transition](/transition) | _string_ | `fade` |
| z-index | Set the component's z-index level to a fixed value | _number \| string_ | `2000+` |

### Events

When calling `Toast` through a component, the following events are supported:

| Event name | Description | Callback parameters |
| ------ | -------------------- | -------- |
| close | callback function when closing | - |
| opened | callback function after full display | - |

### Slots

When using the `Toast` component, the following slots are supported:

| Name | Description |
| ------- | --------------- |
| message | Custom text content |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| --- | --- | --- |
| --z-toast-max-width | _70%_ | - |
| --z-toast-font-size | _var(--z-font-size-md)_ | - |
| --z-toast-text-color | _var(--z-white)_ | - |
| --z-toast-loading-icon-color | _var(--z-white)_ | - |
| --z-toast-line-height | _var(--z-line-height-md)_ | - |
| --z-toast-radius | _var(--z-radius-lg)_ | - |
| --z-toast-background | _fade(var(--z-black), 70%)_ | - |
| --z-toast-icon-size | _72rpx_ | - |
| --z-toast-text-min-width | _192rpx_ | - |
| --z-toast-text-padding | _var(--z-padding-xs) var(--z-padding-sm)_ | - |
| --z-toast-default-padding | _var(--z-padding-md)_ | - |
| --z-toast-default-width | _176rpx_ | - |
| --z-toast-default-min-height | _176rpx_ | - |
| --z-toast-position-top-distance | _20%_ | - |
| --z-toast-position-bottom-distance | _20%_ | - |

## common problem

### How to define multiple toast components

`useToast` supports passing `name` to distinguish the name of each `toast`.

```html
<z-toast name="test"></z-toast>
```

```ts
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast('test')
toast.showToast('text prompt')
```