# Skeleton 骨架屏

### 介绍

用于在内容加载过程中展示一组占位图形。

## 代码演示

### 基础用法

通过 `title` 属性显示标题占位图，通过 `row` 属性配置占位段落行数。

```html
<z-skeleton title :row="3" />
```

### 显示头像

通过 `avatar` 属性显示头像占位图。

```html
<z-skeleton title avatar :row="3" />
```

### 展示子组件

将 `loading` 属性设置成 `false` 表示内容加载完成，此时会隐藏占位图，并显示 `Skeleton` 的子组件。

```html
<view class="demo-skeleton-switch">
  <z-switch v-model="show" />
</view>
<z-skeleton title avatar :row="2" :loading="!show">
  <view class="demo-skeleton-preview">
    <image src="https://cdn.zebraui.com/zebra-ui/images/logo.png" />
    <view class="demo-skeleton-content">
      <view class="title">标题</view>
      <view class="desc"
        >zebra-swiper 是基于uniapp开发的一款移动端轮播组件。</view
      >
    </view>
  </view>
</z-skeleton>
```

```js
import { ref } from 'vue'
const show = ref(false)
```

```css
.demo-skeleton {
  color: var(--z-text-color);

  &-switch {
    margin-bottom: 30rpx;
  }

  &-preview {
    display: flex;

    image {
      flex-shrink: 0;
      width: 100rpx;
      height: 100rpx;
    }
  }

  &-content {
    margin-top: 16rpx;

    .title {
      font-size: 36rpx;
      line-height: 50rpx;
    }

    .desc {
      font-size: 26rpx;
      line-height: 40rpx;
    }
  }
}
```

### 自定义展示内容

通过 `template` 插槽完成自定义内容的展示。

```html
<z-skeleton>
  <template #template>
    <view :style="{ display: 'flex', width: '100%' }">
      <z-skeleton-image />
      <view :style="{ flex: 1, marginLeft: '32rpx' }">
        <z-skeleton-paragraph row-width="60%" />
        <z-skeleton-paragraph />
        <z-skeleton-paragraph />
        <z-skeleton-paragraph />
      </view>
    </view>
  </template>
</z-skeleton>
```

## API

### Skeleton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| row | 段落占位图行数 | _number \| string_ | `0` |
| row-width | 段落占位图宽度，可传数组来设置每一行的宽度 | _number \| string \|<br>(number \| string)[]_ | `100%` |
| title | 是否显示标题占位图 | _boolean_ | `false` |
| avatar | 是否显示头像占位图 | _boolean_ | `false` |
| loading | 是否显示骨架屏，传 `false` 时会展示子组件内容 | _boolean_ | `true` |
| animate | 是否开启动画 | _boolean_ | `true` |
| round | 是否将标题和段落显示为圆角风格 | _boolean_ | `false` |
| title-width | 标题占位图宽度 | _number \| string_ | `40%` |
| avatar-size | 头像占位图大小 | _number \| string_ | `64rpx` |
| avatar-shape | 头像占位图形状，可选值为 `square` | _string_ | `round` |

### SkeletonParagraph Props

| 参数      | 说明                     | 类型      | 默认值  |
| --------- | ------------------------ | --------- | ------- |
| round     | 是否将段落显示为圆角风格 | _boolean_ | `false` |
| row-width | 段落占位图宽度           | _string_  | `100%`  |

### SkeletonTitle Props

| 参数        | 说明                     | 类型               | 默认值  |
| ----------- | ------------------------ | ------------------ | ------- |
| round       | 是否将标题显示为圆角风格 | _boolean_          | `false` |
| title-width | 标题占位图宽度           | _number \| string_ | `40%`   |

### SkeletonAvatar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| avatar-size | 头像占位图大小 | _number \| string_ | `64rpx` |
| avatar-shape | 头像占位图形状，可选值为 `square` | _string_ | `round` |

### SkeletonImage Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image-size | 图片占位图大小 | _number \| string_ | `64rpx` |
| image-shape | 图片占位图形状，可选值为 `square` | _string_ | `round` |

### Skeleton Slots

| 名称     | 说明       |
| -------- | ---------- |
| default  | 骨架屏内容 |
| template | 自定义内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/config-provider)。

| 名称                                | 默认值                    | 描述 |
| ----------------------------------- | ------------------------- | ---- |
| --z-skeleton-paragraph-height     | _32rpx_                    | -    |
| --z-skeleton-paragraph-background | _var(--z-active-color)_ | -    |
| --z-skeleton-paragraph-margin-top | _var(--z-padding-sm)_   | -    |
| --z-skeleton-title-width          | _40%_                     | -    |
| --z-skeleton-avatar-size          | _64rpx_                    | -    |
| --z-skeleton-avatar-background    | _var(--z-active-color)_ | -    |
| --z-skeleton-duration             | _1.2s_                    | -    |
| --z-skeleton-image-size           | _192rpx_                    |
| --z-skeleton-image-radius         | _48rpx_                    | -    |
