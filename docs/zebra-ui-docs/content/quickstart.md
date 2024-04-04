# 快速上手

### 介绍

通过本章节你可以了解到 `ZebraUI` 的安装方法和基本使用方式。

## 安装

### 通过 npm 安装

在现有项目中使用 ZebraUI 时，可以通过 `npm` 进行安装：

```bash
npm i @zebra-ui/uniapp
```

也可以通过 `pnpm` 进行安装：

```bash
# 通过 pnpm 安装
pnpm add @zebra-ui/uniapp
```

之后，使用`uniapp`推荐的`easycom`方式进行引入。

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

### 通过 uni_modules 安装

[zebra-ui](https://ext.dcloud.net.cn/plugin?id=17407)已经在uniapp的[插件市场](https://ext.dcloud.net.cn/plugin?id=17407)发布。

如果使用的`IDE`为`HbuilderX`，则可以通过uniapp的[插件市场](https://ext.dcloud.net.cn/plugin?id=17407)进行项目导入。

`uniapp`提供了`uni_modules`引入，使用此方法不需要再单独对组件库进行引入。

## 引入样式


### uni_modules方式

zebra-ui的组件依赖于自身的样式文件，所以你需要在APP.vue中引入。

```vue
<!-- APP.vue -->
<style lang="scss">
@import './uni_modules/zebra-ui/index';
</style>
```

### npm方式

通过依赖安装的包也需要引入样式。

```vue
<!-- APP.vue -->
<style lang="scss">
@import '@zebra-ui/uniapp/index';
</style>
```

### 示例项目

以下是 ZebraUI 官方提供的一些示例项目，你可以克隆该项目，并直接拷贝代码来使用。

- [demo-normal](https://github.com/zebra-ui/zebra-ui/tree/master/demos/demo-normal)：此示例项目使用 `HbuilderX` 创建应用，通过 `uni_modules` 引入zebra-ui。
- [demo-cli](https://github.com/zebra-ui/zebra-ui/tree/master/demos/demo-cli)：此示例项目使用 `VSCode` 创建应用，通过 `pnpm` 引入zebra-ui。

### 使用提示

- npm和uni_modules方式不要同时使用，否则会造成组件引入混乱，从而导致冲突。
