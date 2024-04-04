# Transition 动画

### 介绍

使元素从一种样式逐渐变化为另一种样式的效果。

## 代码演示

### 基础用法

将元素包裹在 transition 组件内，在元素展示/隐藏时，会有相应的过渡动画。

```html
<z-transition v-model:show="show">内容</z-transition>
```

### 动画类型

transition 组件内置了多种动画，可以通过`name`字段指定动画类型。

```html
<z-cell-group>
  <z-cell is-link title="Fade" @click="animate('fade')" />
  <z-cell is-link title="Slide Up" @click="animate('slide-up')" />
  <z-cell is-link title="Slide Down" @click="animate('slide-down')" />
  <z-cell is-link title="Slide Left" @click="animate('slide-left')" />
  <z-cell is-link title="Slide Right" @click="animate('slide-right')" />
</z-cell-group>
<z-transition v-model:show="show" :name="transitionName">
  <view class="demo-animate-content">
    <view class="demo-animate-block" />
  </view>
</z-transition>
```

```ts
<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const transitionName = ref('')

const animate = (newName: string) => {
  show.value = true
  transitionName.value = newName

  setTimeout(() => {
    show.value = false
  }, 500)
}
</script>
```

```css
<style lang="scss" scoped>
.demo-transition {
  .demo-animate-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500rpx;

    .demo-animate-block {
      width: 200rpx;
      height: 200rpx;
      background-color: var(--z-blue);
      border-radius: 16rpx;
    }
  }
}
</style>
```

## API

### Props

| 参数         | 说明                 | 类型               | 默认值 |
| ------------ | -------------------- | ------------------ | ------ |
| name         | 动画类型             | _string_           | `fade` |
| show         | 是否展示组件         | _boolean_          | `true` |
| duration     | 动画时长，单位为毫秒 | _number \| object_ | `300`  |
| custom-style | 自定义样式           | _object_           | -      |

### Events

| 事件名            | 说明       | 参数 |
| ----------------- | ---------- | ---- |
| before-enter | 进入前触发 | -    |
| enter        | 进入中触发 | -    |
| after-enter  | 进入后触发 | -    |
| before-leave | 离开前触发 | -    |
| leave        | 离开中触发 | -    |
| after-leave  | 离开后触发 | -    |

### 动画类型

| 名称        | 说明     |
| ----------- | -------- |
| fade        | 淡入     |
| fade-up     | 上滑淡入 |
| fade-down   | 下滑淡入 |
| fade-left   | 左滑淡入 |
| fade-right  | 右滑淡入 |
| slide-up    | 上滑进入 |
| slide-down  | 下滑进入 |
| slide-left  | 左滑进入 |
| slide-right | 右滑进入 |
