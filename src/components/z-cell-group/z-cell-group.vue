<template>
  <view :class="bem()">
    <template v-if="props.title || instance.slots.title">
      <view :class="bem('title', { inset: props.inset })">
        <template v-if="instance.slots.title">
          <slot name="title"></slot>
        </template>
        <template v-else>
          {{ props.title }}
        </template>
      </view>
      <view
        :class="[
          bem({ inset: props.inset }),
          { [BORDER_TOP_BOTTOM]: props.border && !props.inset }
        ]"
      >
        <slot></slot>
      </view>
    </template>
    <template v-else>
      <view
        :class="[
          bem({ inset: props.inset }),
          { [BORDER_TOP_BOTTOM]: props.border && !props.inset }
        ]"
      >
        <slot></slot>
      </view>
    </template>
  </view>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import {
  truthProp,
  createNamespace,
  BORDER_TOP_BOTTOM,
  useComponentName
} from '../../libs/utils'
const [name, bem] = createNamespace('cell-group')
useComponentName(name)
const props = defineProps({
  title: String,
  inset: Boolean,
  border: truthProp
})
const instance = getCurrentInstance()!
</script>

<style lang="scss" scoped>
.z-cell-group {
  &--inset {
    margin: var(--z-cell-group-inset-padding);
    overflow: hidden;
    border-radius: var(--z-cell-group-inset-radius);
  }

  &__title {
    padding: var(--z-cell-group-title-padding);
    font-size: var(--z-cell-group-title-font-size);
    line-height: var(--z-cell-group-title-line-height);
    color: var(--z-cell-group-title-color);

    &--inset {
      padding: var(--z-cell-group-inset-title-padding);
    }
  }
}
</style>
