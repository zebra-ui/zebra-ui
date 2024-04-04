# ConfigProvider 全局配置

### 介绍

用于全局配置 zebra-ui 组件，提供深色模式、主题定制等能力。

## 深色模式

### 开启深色模式

将 ConfigProvider 组件的 `theme` 属性设置为 `dark`，可以开启深色模式。

深色模式会全局生效，使页面上的所有 zebra 组件变为深色风格。

```html
<z-config-provider theme="dark">...</z-config-provider>
```

值得注意的是，开启 zebra 的深色模式只会影响 zebra 组件的 UI，并不会影响全局的文字颜色或背景颜色，你可以参考以下 CSS 来设置一些全局样式：

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

### 动态切换

通过动态设置 `theme` 属性，可以在浅色风格和深色风格之间进行切换。示例项目的DemoPage提供了使用方法

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

## 定制主题

### 介绍

zebra 组件通过丰富的 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 CSS 变量，可以实现**定制主题、动态切换主题**等效果。

#### 示例

以 Button 组件为例，查看组件的样式，可以看到 `.z-button--primary` 类名上存在以下变量：

```css
.z-button--primary {
  color: var(--z-button-primary-color);
  background-color: var(--z-button-primary-background);
}
```

这些变量的默认值被定义在 `:root` 节点上（小程序定义在`page`节点上），组件里的所有子节点都可以访问到这些变量：

```css
:root,
page {
  --z-white: #fff;
  --z-blue: #1989fa;
  --z-button-primary-color: var(--z-white);
  --z-button-primary-background: var(--z-primary-color);
}
```

### 自定义 CSS 变量

#### 通过 ConfigProvider 覆盖

`ConfigProvider` 组件提供了覆盖 CSS 变量的能力，你需要在根节点包裹一个 `ConfigProvider` 组件，并通过 `theme-vars` 属性来配置一些主题变量。

```html
<z-config-provider :theme-vars="themeVars">
   <z-form>
     <z-field name="rate" label="评分">
       <template #input>
         <z-rate v-model="rate" />
       </template>
     </z-field>
     <z-field name="slider" label="滑块">
       <template #input>
         <z-slider v-model="slider" />
       </template>
     </z-field>
     <view style="margin: 32rpx">
       <z-button block type="primary"> 提交 </z-button>
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

### 结合深色模式与 CSS 变量

如果需要单独定义深色模式或浅色模式下的 CSS 变量，可以使用 `theme-vars-dark` 和 `theme-vars-light` 属性。

- `theme-vars-dark`: 仅在深色模式下生效的 CSS 变量，优先级高于 `theme-vars` 中定义的变量。
- `theme-vars-light`: 仅在浅色模式下生效的 CSS 变量，优先级高于 `theme-vars` 中定义的变量。

#### 示例

以下方的 `buttonPrimaryBackground` 变量为例, 在深色模式下的值为 `blue`，在浅色模式下的值为 `green`。

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

#### 使用类名

此外，你也可以使用 `.z-theme-light` 和 `.z-theme-dark` 这两个类名选择器来单独修改浅色或深色模式下的基础变量和组件变量。

```css
.z-theme-light {
  --z-white: white;
}

.z-theme-dark {
  --z-white: black;
}
```

## 主题变量

### 变量类型

zebra 中的 CSS 变量分为 **基础变量** 和 **组件变量**。组件变量会继承基础变量，因此在修改基础变量后，会影响所有相关的组件。

#### 修改变量

CSS 变量存在继承关系，组件变量会寻找最近的父级基础变量进行继承。

推荐使用uniapp特有的`page`选择器并在App.vue声明来实现全局覆盖。

以 `--z-primary-color` 这个基础变量为例：

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

### 基础变量列表

下面是所有的基础变量：

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

  // Component Colors
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

你可以在各个组件文档底部的表格中查看组件变量。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 主题风格，设置为 `dark` 来开启深色模式，全局生效 | _ConfigProviderTheme_ | `light` |
| theme-vars | 自定义主题变量，局部生效 | _object_ | - |
| theme-vars-dark | 仅在深色模式下生效的主题变量，优先级高于 `theme-vars` | _object_ | - |
| theme-vars-light | 仅在浅色模式下生效的主题变量，优先级高于 `theme-vars` | _object_ | - |
| z-index | 设置所有弹窗类组件的 z-index，该属性对全局生效 | _number_ | `2000` |
| icon-prefix | 所有图标的类名前缀，等同于 Icon 组件的 [class-prefix 属性](/icon#props) | _string_ | `z-icon` |
