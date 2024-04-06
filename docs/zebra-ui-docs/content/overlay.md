# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

## 代码演示

### 基础用法

```html
<z-button type="primary" text="显示遮罩层" @click="show = true" />
<z-overlay :show="show" @click="show = false" />
```

```js
import { ref } from 'vue';
const show = ref(false);
```

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容。

```html
<z-button type="primary" text="嵌入内容" @click="showContent = true" />
<z-overlay :show="showContent" @click="showContent = false">
  <view class="wrapper">
    <view class="block" @click.stop />
  </view>
</z-overlay>

<style>
.demo-overlay {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 240rpx;
    height: 240rpx;
    background-color: #fff;
  }
}
</style>
```

### 设置 z-index

Overlay 组件默认的 z-index 层级为 `1`，你可以通过 `z-index` 属性设置它的 z-index 层级。

```html
<z-overlay z-index="100" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否展示遮罩层 | _boolean_ | `false` |
| z-index | z-index 层级 | _number \| string_ | `1` |
| duration | 动画时长，单位毫秒，设置为 0 可以禁用动画 | _number \| string_ | `300` |
| class-name | 自定义类名 | _string_ | - |
| custom-style | 自定义样式 | _object_ | - |
| lock-scroll | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | _boolean_ | `true` |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event_ |

### Slots

| 名称    | 说明                               |
| ------- | ---------------------------------- |
| default | 默认插槽，用于在遮罩层上方嵌入内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                     | 默认值               | 描述 |
| ------------------------ | -------------------- | ---- |
| --z-overlay-z-index    | _1_                  | -    |
| --z-overlay-background | _rgba(0, 0, 0, 0.7)_ | -    |
