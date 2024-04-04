# ConfigProvider global configuration

### introduce

Used to globally configure zebra-ui components, providing dark mode, theme customization and other capabilities.

## Dark mode

### Turn on dark mode

Set the `theme` attribute of the ConfigProvider component to `dark` to enable dark mode.

Dark mode will take effect globally, making all zebra components on the page dark.

```html
<z-config-provider theme="dark">...</z-config-provider>
```

It is worth noting that turning on zebra's dark mode will only affect the UI of the zebra component and will not affect the global text color or background color. You can refer to the following CSS to set some global styles:

```css
.z-theme-dark {
   --zebra-background: #202124;
   --zebra-shadow-background1: #0d0d0e;
   --zebra-shadow-background2: #33353a;
   --zebra-text-color: #f5f5f5;
   --z-text-color-2: #707070;
   --z-line-color: #666;
}
```

### Dynamic switching

You can switch between light and dark styles by dynamically setting the `theme` attribute. The DemoPage of the sample project provides usage methods

```html
<z-config-provider :theme="theme">
   <z-nav-bar
     v-if="props.showHeader"
     :title="props.title"
     left-arrow
     fixed
     placeholder
   ></z-nav-bar>
   <view class="demo-page" :style="pageStyle" @click="pageClick">
     <slot></slot>
   </view>
   <z-dialog></z-dialog>
   <z-toast></z-toast>
   <z-notify custom-navbar></z-notify>
</z-config-provider>
```

```vue
<script lang="ts" setup>
import { computed } from 'vue'
// @ts-ignore
import { useThemeStore } from '../../store'
const store = useThemeStore()
const props = defineProps({
   showHeader: {
     type: Boolean,
     default: true
   },
   title: {
     type: String,
     default: 'zebra-ui'
   }
})
const theme = computed(() => {
   return store.theme
})

const pageStyle = computed(() => {
   return {
     'min-height': `calc(100vh - 88rpx - env(safe-area-inset-top) - ${uni.getSystemInfoSync().statusBarHeight}px)`
   }
})

const pageClick = () => {
   uni.$emit('pageClick')
}
</script>
```

## Custom theme

### introduce

Zebra components organize styles through rich [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties). By overriding these CSS variables, you can achieve customized themes and dynamics. Switch theme** and other effects.

#### Example

Taking the Button component as an example, looking at the style of the component, you can see that the following variables exist on the `.z-button--primary` class name:

```css
.z-button--primary {
   color: var(--z-button-primary-color);
   background-color: var(--z-button-primary-background);
}
```

The default values of these variables are defined on the `:root` node (the applet is defined on the `page` node), and all child nodes in the component can access these variables:

```css
:root,
page {
   --z-white: #fff;
   --z-blue: #1989fa;
   --z-button-primary-color: var(--z-white);
   --z-button-primary-background: var(--z-primary-color);
}
```

### Custom CSS variables

#### Override via ConfigProvider

The `ConfigProvider` component provides the ability to override CSS variables. You need to wrap a `ConfigProvider` component in the root node and configure some theme variables through the `theme-vars` attribute.

```html
<z-config-provider :theme-vars="themeVars">
    <z-form>
      <z-field name="rate" label="rating">
        <template #input>
          <z-rate v-model="rate" />
        </template>
      </z-field>
      <z-field name="slider" label="Slider">
        <template #input>
          <z-slider v-model="slider" />
        </template>
      </z-field>
      <view style="margin: 32rpx">
        <z-button block type="primary"> Submit </z-button>
      </view>
    </z-form>
</z-config-provider>
```

```vue
<script lang="ts" setup>
import { ref } from 'vue'
const rate = ref(4)
const slider = ref(50)
const themeVars = {
   rateIconFullColor: '#07c160',
   sliderBarHeight: '8rpx',
   sliderButtonWidth: '40rpx',
   sliderButtonHeight: '40rpx',
   sliderActiveBackground: '#07c160',
   buttonPrimaryBackground: '#07c160',
   buttonPrimaryBorderColor: '#07c160'
}
</script>
```

### Combine dark mode with CSS variables

If you need to define CSS variables in dark mode or light mode separately, you can use the `theme-vars-dark` and `theme-vars-light` properties.

- `theme-vars-dark`: CSS variables that only take effect in dark mode, have higher priority than variables defined in `theme-vars`.
- `theme-vars-light`: CSS variables that only take effect in light mode, have higher priority than variables defined in `theme-vars`.

#### Example

Taking the `buttonPrimaryBackground` variable below as an example, the value in dark mode is `blue` and the value in light mode is `green`.

```html
<z-config-provider
   :theme-vars="themeVars"
   :theme-vars-dark="themeVarsDark"
   :theme-vars-light="themeVarsLight"
>
   ...
</z-config-provider>
```

```js
import { ref, reactive } from 'vue';

export default {
   setup() {
     const themeVars = reactive({ buttonPrimaryBackground: 'red' });
     const themeVarsDark = reactive({ buttonPrimaryBackground: 'blue' });
     const themeVarsLight = reactive({ buttonPrimaryBackground: 'green' });

     return {
       themeVars,
       themeVarsDark,
       themeVarsLight,
     };
   },
};
```

#### Use class name

In addition, you can also use the two class name selectors `.z-theme-light` and `.z-theme-dark` to individually modify the base variables and component variables in light or dark mode.

```css
.z-theme-light {
   --z-white: white;
}

.z-theme-dark {
   --z-white: black;
}
```

## Topic variables

### Variable type

CSS variables in zebra are divided into **basic variables** and **component variables**. Component variables inherit the base variables, so modifying the base variables will affect all related components.

#### Modify variables

CSS variables have an inheritance relationship, and component variables will look for the nearest parent base variable for inheritance.

It is recommended to use uniapp's unique `page` selector and declare it in App.vue to achieve global coverage.

Take the basic variable `--z-primary-color` as an example:

```vue
<!-- App.vue -->
<script>
export default {
   onLaunch: function () {},
   onShow: function () {},
   onHide: function () {}
}
</script>

<style lang="scss">
@import './uni_modules/zebra-ui/index';
@import './common/style/var';
@import './common/style/icon.css';

::-webkit-scrollbar {
   width: 0;
   background: transparent;
}

page {
   --z-primary-color: red;
}
</style>
```

### Basic variable list

Here are all the basic variables:

```css
   // Color Palette
   --z-black: #000;
   --z-white: #fff;
   --z-gray-1: #f7f8fa;
   --z-gray-2: #f2f3f5;
   --z-gray-3: #ebedf0;
   --z-gray-4: #dcdee0;
   --z-gray-5: #c8c9cc;
   --z-gray-6: #969799;
   --z-gray-7: #646566;
   --z-gray-8: #323233;
   --z-red: #ee0a24;
   --z-blue: #1989fa;
   --z-orange: #ff976a;
   --z-orange-dark: #ed6a0c;
   --z-orange-light: #fffbe8;
   --z-green: #07c160;

   // Gradient Colors
   --z-gradient-red: linear-gradient(to right, #ff6034, #ee0a24);
   --z-gradient-orange: linear-gradient(to right, #ffd01e, #ff8917);

   //Component Colors
   --z-primary-color: var(--z-blue);
   --z-success-color: var(--z-green);
   --z-danger-color: var(--z-red);
   --z-warning-color: var(--z-orange);
   --z-text-color: var(--z-gray-8);
   --z-text-color-2: var(--z-gray-6);
   --z-text-color-3: var(--z-gray-5);
   --z-active-color: var(--z-gray-2);
   --z-active-opacity: 0.6;
   --z-disabled-opacity: 0.5;
   --z-background: var(--z-gray-1);
   --z-background-2: var(--z-white);
   --z-background-3: var(--z-white);

   // Padding
   --z-padding-base: 8rpx;
   --z-padding-xs: 16rpx;
   --z-padding-sm: 24rpx;
   --z-padding-md: 32rpx;
   --z-padding-lg: 48rpx;
   --z-padding-xl: 64rpx;

   // Font
   --z-font-bold: 600;
   --z-font-size-xs: 20rpx;
   --z-font-size-sm: 24rpx;
   --z-font-size-md: 26rpx;
   --z-font-size-cx: 28rpx;
   --z-font-size-lg: 32rpx;
   --z-line-height-xs: 26rpx;
   --z-line-height-sm: 36rpx;
   --z-line-height-md: 40rpx;
   --z-line-height-lg: 44rpx;
   /* stylelint-disable */
   --z-base-font: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica,
     Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB',
     'Microsoft Yahei', sans-serif;
   --z-price-font: avenir-heavy, 'PingFang SC', helvetica neue, arial, sans-serif;
   /* stylelint-enable */

   // Animation
   --z-duration-base: 0.3s;
   --z-duration-fast: 0.2s;
   --z-ease-out: ease-out;
   --z-ease-in: ease-in;

   // Border
   --z-border-color: var(--z-gray-3);
   --z-border-width: 2rpx;
   --z-radius-sm: 4rpx;
   --z-radius-md: 8rpx;
   --z-radius-lg: 16rpx;
   --z-radius-max: 1998rpx;
```

You can view component variables in the table at the bottom of each component's documentation.

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| theme | Theme style, set to `dark` to enable dark mode, effective globally | _ConfigProviderTheme_ | `light` |
| theme-vars | Custom theme variables, local effect | _object_ | - |
| theme-vars-dark | Theme variables that only take effect in dark mode, have higher priority than `theme-vars` | _object_ | - |
| theme-vars-light | Theme variables that only take effect in light mode, have higher priority than `theme-vars` | _object_ | - |
| z-index | Set the z-index of all pop-up components. This property takes effect globally | _number_ | `2000` |
| icon-prefix | The class name prefix of all icons, equivalent to the [class-prefix attribute](/icon#props) of the Icon component | _string_ | `z-icon` |