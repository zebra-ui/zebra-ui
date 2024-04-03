<template>
  <view>
    <z-popup
      :show="getProps('show')"
      :z-index="getProps('zIndex')"
      :overlay="false"
      :duration="200"
      @update:show="updateShow"
      :lock-scroll="getProps('lockScroll')"
      :position="getProps('position')"
    >
      <view
        v-if="customNavbar && getProps('position') == 'top'"
        :class="bem('placeholder', [getProps('type')])"
        :style="{
          height: statusBarStyle,
          width: '100%',
          color: getProps('color'),
          background: getProps('background')
        }"
      />
      <view
        :class="[bem([getProps('type')]), getProps('className')]"
        :style="{
          color: getProps('color'),
          background: getProps('background')
        }"
      >
        <template v-if="instance.slots.default">
          <slot></slot>
        </template>
        <template v-else>
          {{ getProps('message') }}
        </template>
      </view>
    </z-popup>
  </view>
</template>
<script lang="ts" setup>
import { reactive, computed, getCurrentInstance, inject, watch, ref } from 'vue'
import {
  extend,
  numericProp,
  unknownProp,
  makeStringProp,
  createNamespace,
  useComponentName
} from '../../libs/utils'
import { popupSharedProps } from '../z-popup/shared'
import type { NotifyType, NotifyPosition } from './types'
import zPopup from '../z-popup/z-popup.vue'
const [componentName, bem] = createNamespace('notify')
useComponentName(componentName)
const props = defineProps(
  extend({}, popupSharedProps, {
    type: makeStringProp<NotifyType>('danger'),
    color: String,
    message: numericProp,
    position: makeStringProp<NotifyPosition>('top'),
    className: unknownProp,
    background: String,
    lockScroll: Boolean,
    useComponent: Boolean,
    customNavbar: Boolean,
    name: String
  })
)
const emit = defineEmits(['update:show'])
const instance = getCurrentInstance()!
const state = reactive<{
  show: boolean
  [key: string]: any
}>({
  show: false
})
const updateShow = (show: boolean) => emit('update:show', show)
const getProps = (name: string) => {
  if (props.useComponent) {
    // @ts-ignore
    return props[name]
  } else {
    return state[name]
  }
}
const statusBarStyle = computed(() => {
  return uni.getSystemInfoSync().statusBarHeight + 'px'
})
const toggle = (show: boolean) => {
  state.show = show
}

const open = (propsData: Record<string, any>) => {
  extend(state, propsData, { transitionAppear: true })
  toggle(true)
}

const close = () => toggle(false)

defineExpose({
  open,
  close,
  toggle,
  state
})

const notifyInjectKey = props.name ? `z-notify-${props.name}` : 'z-notify'

const injectOptions = inject(notifyInjectKey, ref({}))

watch(
  () => injectOptions.value,
  (value) => {
    extend(state, value, { transitionAppear: true })
  }
)
</script>
<script lang="ts">
export default {
  name: 'ZNotify',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-notify {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--z-notify-padding);
  font-size: var(--z-notify-font-size);
  line-height: var(--z-notify-line-height);
  color: var(--z-notify-text-color);
  text-align: center;
  word-wrap: break-word;
  white-space: pre-wrap;

  &__placeholder {
    &--primary {
      background: var(--z-notify-primary-background);
    }

    &--success {
      background: var(--z-notify-success-background);
    }

    &--danger {
      background: var(--z-notify-danger-background);
    }

    &--warning {
      background: var(--z-notify-warning-background);
    }
  }

  &--primary {
    background: var(--z-notify-primary-background);
  }

  &--success {
    background: var(--z-notify-success-background);
  }

  &--danger {
    background: var(--z-notify-danger-background);
  }

  &--warning {
    background: var(--z-notify-warning-background);
  }
}
</style>
