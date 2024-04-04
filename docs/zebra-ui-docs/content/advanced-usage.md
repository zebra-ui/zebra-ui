# 进阶用法

### 介绍

通过本章节你可以了解到 `ZebraUI` 的一些进阶用法。

### 组件注册

zebra-ui支持单组件引入以及通过easycom的方式引入。

如果通过`uni_modules`引入，则不需要再进行引入。

easycom和uni_modules方式都会过滤未使用的组件，即按需引入。

#### 单组件全局注册

```js
// main.ts
import { createSSRApp } from "vue";
// 通过路径引入button
import zButton from "@zebra-ui/uniapp/components/z-button/z-button.vue";
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  //全局注册组件
  app.component("z-button", zButton);
  return {
    app,
  };
}
```

#### 单组件页面注册

在 `<script setup>` 中可以直接使用 ZebraUI 组件，不需要进行组件注册。

```vue
<!-- test.vue -->
<template>
  <div class="wrapper">
    <z-button type="primary">Primary</z-button>
  </div>
</template>

<script setup>
import zButton from "@zebra-ui/uniapp/components/z-button/z-button.vue";
</script>
```

### 使用组件样式变量

zebra-ui提供了大量的组件样式变量，通过变量可控制组件的主题，以及自定义组件的样式。

使用示例

```vue
<style lang="scss" scoped>
.demo-rolling-text {
  .my-rolling-text {
    --z-rolling-text-background: #1989fa;
    --z-rolling-text-color: white;
    --z-rolling-text-font-size: 48rpx;
    --z-rolling-text-gap: 12rpx;
    --z-rolling-text-item-border-radius: 10rpx;
    --z-rolling-text-item-width: 80rpx;
  }
}
</style>
```
以上样式通过在页面中声明zebra-ui的样式变量，对默认的变量执行覆盖，从而实现自定义样式。

当然，也可以通过[z-config-provider](/config-provider)组件自定义样式。

### 自动引入组件API

zebra支持使用`unplugin-auto-import`插件对api实现自动引入。

```bash
pnpm install -D unplugin-auto-import
```

安装后在`vite.config.ts`文件引入插件。

```ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: [
        {
          '@zebra-ui/uniapp': ['useDialog', 'useToast', 'useNotify']
        }
      ]
    })
  ]
})
```

未使用插件前：

```vue
<script lang="ts" setup>
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
toast.showToast('文字提示')
</script>
```

使用插件后：

```vue
<script lang="ts" setup>
const toast = useToast()
toast.showToast('文字提示')
</script>
```

无需引入，直接声明后使用。

支持的组件：
- [z-toast](/toast) 轻提示
- [z-dialog](/dialog) 弹出框
- [z-notify](/notify) 消息提示

