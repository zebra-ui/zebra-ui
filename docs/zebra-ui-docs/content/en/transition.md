# Transition

### introduce

The effect of gradually changing an element from one style to another.

## Code Demo

### Basic usage

Wrap the element in the transition component, and there will be a corresponding transition animation when the element is displayed/hidden.

```html
<z-transition v-model:show="show">Content</z-transition>
```

### Animation type

The transition component has a variety of built-in animations, and the animation type can be specified through the `name` field.

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

| Parameters | Description | Type | Default value |
| ------------ | -------------------- | ------------------ | ------ |
| name | animation type | _string_ | `fade` |
| show | Whether to display the component | _boolean_ | `true` |
| duration | animation duration in milliseconds | _number \| object_ | `300` |
| custom-style | custom style | _object_ | - |

### Events

| Event name | Description | Parameters |
| ------------------ | ---------- | ---- |
| before-enter | Trigger before entering | - |
| enter | Triggered when entering | - |
| after-enter | Triggered after entering | - |
| before-leave | Triggered before leaving | - |
| leave | Triggered while leaving | - |
| after-leave | Triggered after leaving | - |

### Animation type

| Name | Description |
| ----------- | -------- |
| fade | fade in |
| fade-up | Slide up and fade in |
| fade-down | Slide down and fade in |
| fade-left | Slide left to fade in |
| fade-right | Slide right to fade in |
| slide-up | Slide up to enter |
| slide-down | Slide down to enter |
| slide-left | Slide left to enter |
| slide-right | Slide right to enter |