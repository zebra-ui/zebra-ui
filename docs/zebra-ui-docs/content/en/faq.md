# common problem

### How to customize the style of components

#### 1. Theme customization

`ZebraUI` provides theme customization capabilities based on `CSS` variables, and can uniformly modify component styles. For details, see [ConfigProvider Global Configuration](/config-provider) component.

#### 2. Through the custom-style attribute of the component

90% of components provide the `custom-style` attribute, which can be directly passed in the style object for customization.

#### 3. Penetration through style.

Because the small program compiled by uniapp does not support directly defining `style` and `class` on the label, style penetration must be used to force the component to be styled.

You can find the specific usage method by yourself.

### Can I call toast or dialog directly?

When uniapp is compiled into a small program, there is no concept of a single page, so tags need to be written on the pages used.

```vue
<z-toast />
```

[Sample project](https://github.com/zebra-ui/zebra-ui/tree/master/demos) provides a solution for defining page-level components.

Just wrap the page in the `DemoPage` component to avoid the pain point of repeatedly writing `z-toast` `z-dialog` `z-navbar`.

At the same time, you can also introduce the [ConfigProvider global configuration](/config-provider) component to easily implement theme customization.