<template>
  <view
    :class="bem({ on: isChecked(), loading, disabled })"
    :style="{
      fontSize: addUnit(size),
      backgroundColor: isChecked() ? activeColor : inactiveColor
    }"
    @click="onClick"
  >
    <view :class="bem('node')">
      <template v-if="props.loading">
        <z-loading
          :color="isChecked() ? props.activeColor : props.inactiveColor"
          :wrapper-style="loadingStyle"
        ></z-loading>
      </template>
      <template v-if="instance.slots.node">
        <slot name="node"></slot>
      </template>
    </view>
    <slot name="background"></slot>
  </view>
</template>
<script lang="ts" setup>
import { getCurrentInstance, computed, type CSSProperties } from 'vue'
import {
  addUnit,
  numericProp,
  unknownProp,
  createNamespace,
  useCustomFieldValue,
  useComponentName
} from '../../libs/utils'
import zLoading from '../z-loading/z-loading.vue'

const [name, bem] = createNamespace('switch')
useComponentName(name)
const props = defineProps({
  size: numericProp,
  loading: Boolean,
  disabled: Boolean,
  modelValue: unknownProp,
  activeColor: String,
  inactiveColor: String,
  activeValue: {
    type: unknownProp,
    default: true as unknown
  },
  inactiveValue: {
    type: unknownProp,
    default: false as unknown
  }
})
const emit = defineEmits(['change', 'update:modelValue'])
const isChecked = () => props.modelValue === props.activeValue
const instance = getCurrentInstance()!
const onClick = () => {
  if (!props.disabled && !props.loading) {
    const newValue = isChecked() ? props.inactiveValue : props.activeValue
    emit('update:modelValue', newValue)
    emit('change', newValue)
  }
}
useCustomFieldValue(() => props.modelValue)
const loadingStyle = computed(() => {
  const styleObject: CSSProperties = {
    top: '25%',
    left: '25%',
    width: '50%',
    height: '50%',
    lineHeight: '1'
  }
  if (isChecked()) {
    styleObject['color'] = 'var(--z-switch-on-background)'
  }
  return styleObject
})
</script>
<script lang="ts">
export default {
  name: 'ZSwitch',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-switch {
  position: relative;
  box-sizing: content-box;
  display: inline-block;
  width: var(--z-switch-width);
  height: var(--z-switch-height);
  font-size: var(--z-switch-size);
  background: var(--z-switch-background);
  border-radius: var(--z-switch-node-size);
  transition: background-color var(--z-switch-duration);

  &__node {
    position: absolute;
    top: 4rpx;
    left: 4rpx;
    width: var(--z-switch-node-size);
    height: var(--z-switch-node-size);
    font-size: inherit;
    background: var(--z-switch-node-background);
    border-radius: 100%;
    box-shadow: var(--z-switch-node-shadow);
    transition: transform var(--z-switch-duration)
      cubic-bezier(0.3, 1.05, 0.4, 1.05);
  }

  &__loading {
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    line-height: 1;
  }

  &--on {
    background: var(--z-switch-on-background);

    .z-switch__node {
      transform: translateX(
        calc(var(--z-switch-width) - var(--z-switch-node-size) - 8rpx)
      );
    }
  }

  &--disabled {
    cursor: not-allowed;
    opacity: var(--z-switch-disabled-opacity);
  }

  &--loading {
    cursor: default;
  }
}
</style>
