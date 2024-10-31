<template>
  <view
    :class="bem({ select: selected, disabled })"
    :style="customStyle"
    @click="onClick"
  >
    <z-badge v-bind="badgeProps" :dot="dot" :content="badge">
      <template v-if="instance.slots.title">
        <slot name="title"></slot>
      </template>
      <template v-else>
        {{ title }}
      </template>
    </z-badge>
  </view>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
import {
  numericProp,
  createNamespace,
  useParent,
  useComponentName
} from '../../libs/utils'
import zBadge from '../z-badge/z-badge.vue'
const instance = getCurrentInstance()!
const [componentName, bem] = createNamespace('sidebar-item')
useComponentName(componentName)
const props = defineProps({
  dot: Boolean,
  title: String,
  badge: numericProp,
  disabled: Boolean,
  badgeProps: Object,
  customStyle: {
    type: Object,
    default: () => {}
  }
})
const emit = defineEmits(['click'])
// @ts-ignore
const { parent, index } = useParent('z-sidebar')
const selected = computed(() => index.value === parent.getActive())
const onClick = () => {
  if (props.disabled) {
    return
  }

  emit('click', index.value)
  parent.setActive(index.value)
}
</script>
<script lang="ts">
export default {
  name: 'ZSidebarItem',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-sidebar-item {
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: var(--z-sidebar-padding);
  overflow: hidden;
  font-size: var(--z-sidebar-font-size);
  line-height: var(--z-sidebar-line-height);
  color: var(--z-sidebar-text-color);
  background: var(--z-sidebar-background);

  &:active {
    background-color: var(--z-sidebar-active-color);
  }

  &:not(:last-child)::after {
    border-bottom-width: 1px;
  }

  &__text {
    word-break: break-all;
  }

  &--select {
    font-weight: var(--z-sidebar-selected-font-weight);
    color: var(--z-sidebar-selected-text-color);

    &,
    &:active {
      background-color: var(--z-sidebar-selected-background);
    }

    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      width: var(--z-sidebar-selected-border-width);
      height: var(--z-sidebar-selected-border-height);
      content: '';
      background-color: var(--z-sidebar-selected-border-color);
      transform: translateY(-50%);
    }
  }

  &--disabled {
    color: var(--z-sidebar-disabled-text-color);
    cursor: not-allowed;

    &:active {
      background-color: var(--z-sidebar-background);
    }
  }
}
</style>
