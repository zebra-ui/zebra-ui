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