# Highlight 高亮文本

### 介绍

高亮指定文本内容。

## 代码演示

### 基础用法

你可以通过 `keywords` 指定需要高亮的关键字，通过 `source-string` 指定源文本。

```html
<z-highlight :keywords="keywords" :source-string="text" />
```

```ts
import { ref } from 'vue'
const text = ref('zebra-swiper是基于uniapp开发的一款移动端轮播组件。')
const keywords = ref('zebra-swiper')
```

### 多字符匹配

如果需要指定多个关键字，可以以数组的形式传入 `keywords`。

```html
<z-highlight :keywords="keywordsMore" :source-string="text" />
```

```ts
const keywordsMore = ref(['zebra-swiper', 'uniapp', '移动端'])
```

### 设置高亮标签类名

通过 `highlight-class` 可以设置高亮标签的类名，以便自定义样式。

> 此方法需要样式穿透。

```html
<view class="text-content">
  <z-highlight
    :keywords="keywordsMore"
    :source-string="text"
    highlight-class="text-content-custom"
  />
</view>
<view class="text-content">
  <z-highlight
    :keywords="keywordsMore"
    :source-string="text"
    :highlight-style="{ color: 'var(--z-red)' }"
  />
</view>
```

```ts
const keywordsMore = ref(['zebra-swiper', 'uniapp', '移动端'])
const text = ref('zebra-swiper是基于uniapp开发的一款移动端轮播组件。')
```

```css
.demo-highlight {
  .text-content {
    font-size: 28rpx;
    line-height: 40rpx;
    color: var(--zebra-text-color);

    ::v-deep &-custom {
      font-weight: bold;
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| auto-escape | 是否自动转义 | _boolean_ | `true` |
| case-sensitive | 是否区分大小写 | _boolean_ | `false` |
| highlight-class | 高亮元素的类名 | _string_ | - |
| keywords | 期望高亮的文本 | _string \| string[]_ | - |
| source-string | 源文本 | _string_ | - |
| unhighlight-class | 非高亮元素的类名 | _string_ | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                      | 默认值                     | 描述         |
| ------------------------- | -------------------------- | ------------ |
| --z-highlight-tag-color | _var(--z-primary-color)_ | 高亮文本颜色 |
