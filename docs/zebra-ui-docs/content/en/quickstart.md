# Get started quickly

### introduce

Through this chapter, you can learn about the installation method and basic usage of `ZebraUI`.

## Install

### Install via npm

When using ZebraUI in an existing project, you can install it via `npm`:

```bash
npm i @zebra-ui/uniapp
```

It can also be installed via `pnpm`:

```bash
# Install via pnpm
pnpm add @zebra-ui/uniapp
```

After that, use the `easycom` method recommended by `uniapp` to import it.

```json
// pages.json
{
   "easycom": {
     "custom": {
       "^z-(.*)": "@zebra-ui/uniapp/components/z-$1/z-$1.vue"
     }
   },
   "pages": [...]
}
```

### Install via uni_modules

[zebra-ui](https://ext.dcloud.net.cn/plugin?id=17407) is already in uniapp’s [plug-in market](https://ext.dcloud.net.cn/plugin?id=17407 )release.

If the `IDE` used is `HbuilderX`, you can import the project through uniapp's [Plug-in Market] (https://ext.dcloud.net.cn/plugin?id=17407).

`uniapp` provides `uni_modules` import. Using this method does not require the import of the component library separately.

##Introduce styles


### uni_modules method

The components of zebra-ui rely on its own style files, so you need to introduce them in APP.vue.

```vue
<!-- APP.vue -->
<style lang="scss">
@import './uni_modules/zebra-ui/index';
</style>
```

### npm method

Packages installed through dependencies also need to import styles.

```vue
<!-- APP.vue -->
<style lang="scss">
@import '@zebra-ui/uniapp/index';
</style>
```

### Sample project

The following are some sample projects officially provided by ZebraUI. You can clone the project and directly copy the code to use.

- [demo-normal](https://github.com/zebra-ui/zebra-ui/tree/master/demos/demo-normal): This sample project uses `HbuilderX` to create an application and introduces zebra through `uni_modules` -ui.
- [demo-cli](https://github.com/zebra-ui/zebra-ui/tree/master/demos/demo-cli): This sample project uses `VSCode` to create an application and introduces zebra through `pnpm` -ui.

### Use suggestions

- Do not use npm and uni_modules at the same time, otherwise it will cause confusion in the components and lead to conflicts.