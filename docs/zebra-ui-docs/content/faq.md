# 常见问题

### 如何自定义组件的样式

#### 1. 主题定制

`ZebraUI` 基于 `CSS` 变量提供了主题定制的能力，可以对组件样式进行统一修改，详见 [ConfigProvider 全局配置](/config-provider) 组件。

#### 2. 通过组件的custom-style属性

90%的组件都提供了`custom-style`属性，可以直接传入样式对象进行自定义。

#### 3. 通过样式穿透。

因为uniapp编译的小程序，不支持在标签上直接定义`style`和`class`，所以要使用样式穿透来强制给组件设置样式。

具体使用方法可自行查找。

### 可不可以直接调用toast或dialog

uniapp编译到小程序是没有单页面的概念，所以需要在使用的页面写入标签。

```vue
<z-toast />
```

[示例项目](https://github.com/zebra-ui/zebra-ui/tree/master/demos)提供了定义页面级组件的解决方案。

只需将页面包裹在`DemoPage`组件中，即可省去重复编写`z-toast` `z-dialog` `z-navbar`的痛点。

同时还可以引入[ConfigProvider 全局配置](/config-provider) 组件，从而便捷的实现主题定制。