# PasswordInput 密码输入框

### 介绍

带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与[数字键盘](/number-keyboard)组件配合使用。

## 代码演示

### 基础用法

搭配数字键盘组件来实现密码输入功能。

```html
<!-- 密码输入框 -->
<z-password-input
  :value="value"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
<!-- 数字键盘 -->
<z-number-keyboard
  v-model="value"
  :show="showKeyboard"
  @blur="showKeyboard = false"
/>
```

```js
import { ref } from 'vue';
const value = ref('123');
const showKeyboard = ref(true);
```

### 自定义长度

通过 `length` 属性来设置密码长度。

```html
<z-password-input
  :value="value"
  :length="4"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
```

### 格子间距

通过 `gutter` 属性来设置格子之间的间距。

```html
<z-password-input
  :value="value"
  :gutter="10"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
```

### 明文展示

将 `mask` 设置为 `false` 可以明文展示输入的内容，适用于短信验证码等场景。

```html
<z-password-input
  :value="value"
  :mask="false"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
```

### 提示信息

通过 `info` 属性设置提示信息，通过 `error-info` 属性设置错误提示，例如当输入六位时提示密码错误。

```html
<z-password-input
  :value="value"
  info="密码为 6 位数字"
  :error-info="errorInfo"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
<z-number-keyboard
  v-model="value"
  :show="showKeyboard"
  @blur="showKeyboard = false"
/>
```

```js
import { ref, watch } from 'vue';
const value = ref('123');
const errorInfo = ref('');
const showKeyboard = ref(true);
watch(value, (newVal) => {
  if (newVal.length === 6 && newVal !== '123456') {
    errorInfo.value = '密码错误';
  } else {
    errorInfo.value = '';
  }
});
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 密码值 | _string_ | `''` |
| info | 输入框下方文字提示 | _string_ | - |
| error-info | 输入框下方错误提示 | _string_ | - |
| length | 密码最大长度 | _number \| string_ | `6` |
| gutter | 输入框格子之间的间距，如 `40rpx`，默认单位为`px` | _number \| string_ | `0` |
| mask | 是否隐藏密码内容 | _boolean_ | `true` |
| focused | 是否已聚焦，聚焦时会显示光标 | _boolean_ | `false` |

### Events

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| focus  | 输入框聚焦时触发 | -        |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                                  | 默认值                    | 描述 |
| ------------------------------------- | ------------------------- | ---- |
| --z-password-input-height           | _100rpx_                    | -    |
| --z-password-input-margin           | _0 var(--z-padding-md)_ | -    |
| --z-password-input-font-size        | _40rpx_                    | -    |
| --z-password-input-radius           | _12rpx_                     | -    |
| --z-password-input-background       | _var(--z-background-2)_ | -    |
| --z-password-input-info-color       | _var(--z-text-color-2)_ | -    |
| --z-password-input-info-font-size   | _var(--z-font-size-md)_ | -    |
| --z-password-input-error-info-color | _var(--z-danger-color)_ | -    |
| --z-password-input-dot-size         | _20rpx_                    | -    |
| --z-password-input-dot-color        | _var(--z-text-color)_   | -    |
| --z-password-input-text-color       | _var(--z-text-color)_   | -    |
| --z-password-input-cursor-color     | _var(--z-text-color)_   | -    |
| --z-password-input-cursor-width     | _2rpx_                     | -    |
| --z-password-input-cursor-height    | _40%_                     | -    |
| --z-password-input-cursor-duration  | _1s_                      | -    |
