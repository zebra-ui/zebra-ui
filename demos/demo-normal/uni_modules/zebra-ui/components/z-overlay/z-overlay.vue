<template>
  <view :class="[bem()]">
    <z-transition
      key="overlayTransition"
      :show="props.show"
      name="fade"
      :custom-style="style"
      @click="onClick"
      @touchmove.stop.prevent="lockScroll ? noop : touchmove"
    >
      <slot></slot>
    </z-transition>
  </view>
</template>

<script lang="ts" setup>
import { type PropType, computed } from 'vue'
import {
  isDef,
  extend,
  truthProp,
  numericProp,
  createNamespace,
  getZIndexStyle,
  useComponentName
} from '../../libs/utils'

const [name, bem] = createNamespace('overlay')

useComponentName(name)

const emit = defineEmits(['click', 'touchmove'])

const props = defineProps({
  show: Boolean,
  zIndex: numericProp,
  duration: numericProp,
  lockScroll: truthProp,
  lazyRender: truthProp,
  overlayBackGroud: truthProp,
  customStyle: Object as PropType<any>
})

const cssObject = {
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: 'var(--z-overlay-z-index)',
  width: '100%',
  height: '100%'
}

const style: any = computed(() =>
  extend(
    cssObject,
    getZIndexStyle(props.zIndex),
    {
      background: props.overlayBackGroud
        ? 'var(--z-overlay-background)'
        : 'transparent'
    },
    props.customStyle
  )
)

if (isDef(props.duration)) {
  style.value.animationDuration = `${props.duration}ms`
}

const onClick = () => {
  emit('click')
}

const noop = () => {}
const touchmove = () => {
  emit('touchmove')
}
</script>
