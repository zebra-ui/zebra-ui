# Highlight

### introduce

Highlight specified text content.

## Code Demo

### Basic usage

You can specify the keywords to be highlighted via `keywords` and the source text via `source-string`.

```html
<z-highlight :keywords="keywords" :source-string="text" />
```

```ts
import { ref } from 'vue'
const text = ref('zebra-swiper is a mobile carousel component developed based on uniapp.')
const keywords = ref('zebra-swiper')
```

###Multiple character matching

If you need to specify multiple keywords, you can pass in `keywords` in the form of an array.

```html
<z-highlight :keywords="keywordsMore" :source-string="text" />
```

```ts
const keywordsMore = ref(['zebra-swiper', 'uniapp', 'mobile'])
```

### Set the highlight label class name

Through `highlight-class` you can set the class name of the highlight label to customize the style.

> This method requires style penetration.

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
const keywordsMore = ref(['zebra-swiper', 'uniapp', 'mobile'])
const text = ref('zebra-swiper is a mobile carousel component developed based on uniapp.')
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

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| auto-escape | Whether to automatically escape | _boolean_ | `true` |
| case-sensitive | Whether to be case sensitive | _boolean_ | `false` |
| highlight-class | The class name of the highlighted element | _string_ | - |
| keywords | Text to be highlighted | _string \| string[]_ | - |
| source-string | source text | _string_ | - |
| unhighlight-class | Class name of non-highlighted element | _string_ | - |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ----------------------- | -------------------------- | ------------ |
| --z-highlight-tag-color | _var(--z-primary-color)_ | Highlight text color |