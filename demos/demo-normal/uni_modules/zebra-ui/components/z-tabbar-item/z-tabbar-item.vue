<template>
  <view
    :class="bem({ active: active, animate: parent.props.animate })"
    :style="{
      color: active ? parent.props.activeColor : parent.props.inactiveColor
    }"
    @click="onClick"
  >
    <z-badge
      :dot="dot"
      :wrapper-style="badgeStyle"
      :content="badge"
      v-bind="props.badgeProps"
    >
      <template v-if="instance.slots.icon">
        <slot name="icon" :active="active"></slot>
      </template>
      <template v-else-if="props.icon">
        <z-icon
          :name="props.icon"
          :custom-style="iconStyle"
          :class-prefix="props.iconPrefix"
        />
      </template>
    </z-badge>
    <view :class="bem('text')">
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { computed, getCurrentInstance } from 'vue'
import {
  createNamespace,
  numericProp,
  useParent,
  useComponentName
} from '../../libs/utils'

const [componentName, bem] = createNamespace('tabbar-item')
useComponentName(componentName)

const instance = getCurrentInstance()!

const props = defineProps({
  dot: Boolean,
  icon: String,
  name: numericProp,
  badge: numericProp,
  badgeProps: Object,
  iconPrefix: String
})

const emit = defineEmits(['click'])
// @ts-ignore
const { parent, index } = useParent('z-tabbar')

const active = computed(() => {
  const { modelValue } = parent.props
  return (props.name ? props.name : index.value) === modelValue
})

const onClick = (event: any) => {
  if (!active.value) {
    parent.setActive(props.name ? props.name : index.value, index, () => {})
  }
  emit('click', event)
}

const badgeStyle = computed(() => {
  const styles = {
    'margin-bottom': 'var(--z-tabbar-item-icon-margin-bottom)',
    'font-size': 'var(--z-tabbar-item-icon-size)'
  }
  return { ...styles }
})

const iconStyle = computed(() => {
  const styles = {
    display: 'block'
  }
  return { ...styles }
})
</script>
<script lang="ts">
export default {
  name: 'ZTabbarItem',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-tabbar-item {
  position: relative;
  z-index: 10;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: var(--z-tabbar-item-font-size);
  line-height: var(--z-tabbar-item-line-height);
  color: var(--z-tabbar-item-text-color);

  &--active {
    color: var(--z-tabbar-item-active-color);
  }
}

.z-tabbar-item--active.z-tabbar-item--animate {
  animation-name: pulse;
  animation-duration: 500ms;
  animation-timing-function: ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}
</style>
