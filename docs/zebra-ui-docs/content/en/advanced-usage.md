# Advanced usage

### introduce

Through this chapter you can learn some advanced usage of `ZebraUI`.

### Component registration

Zebra-ui supports the introduction of single components and introduction through easycom.

If imported through `uni_modules`, no further import is required.

Both easycom and uni_modules methods will filter unused components, that is, they will be introduced on demand.

#### Single component global registration

```js
// main.ts
import { createSSRApp } from "vue";
//Introduce button through path
import zButton from "@zebra-ui/uniapp/components/z-button/z-button.vue";
import App from "./App.vue";
export function createApp() {
   const app = createSSRApp(App);
   //Globally register components
   app.component("z-button", zButton);
   return {
     app,
   };
}
```

#### Single component page registration

ZebraUI components can be used directly in `<script setup>` without component registration.

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

### Using component style variables

Zebra-ui provides a large number of component style variables, through which you can control the theme of the component and customize the style of the component.

Usage example

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
The above style implements custom styles by declaring zebra-ui style variables on the page and overriding the default variables.

Of course, you can also customize the style through the [z-config-provider](/config-provider) component.

### Automatically introduce component API

Zebra supports using the `unplugin-auto-import` plug-in to automatically introduce the API.

```bash
pnpm install -D unplugin-auto-import
```

After installation, introduce the plug-in in the `vite.config.ts` file.

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

Before using the plug-in:

```vue
<script lang="ts" setup>
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
toast.showToast('text prompt')
</script>
```

After using the plugin:

```vue
<script lang="ts" setup>
const toast = useToast()
toast.showToast('text prompt')
</script>
```

No need to introduce it, just declare it and use it directly.

Supported components:
- [z-toast](/toast) light reminder
- [z-dialog](/dialog) pop-up box
- [z-notify](/notify) message prompt