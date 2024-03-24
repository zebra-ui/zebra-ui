<template>
  <view :class="bem('toolbar')">
    <template v-if="componentSlots && componentSlots.toolbar">
      <slot name="toolbar"></slot>
    </template>
    <template v-else>
      <z-button
        v-if="
          (componentSlots && componentSlots.cancel) ||
          (props.cancelButtonText ? props.cancelButtonText : '取消')
        "
        type="text"
        :custom-style="cancelButtonStyle"
        @click="onCancel"
      >
        <template v-if="componentSlots && componentSlots.cancel">
          <slot name="cancel"></slot>
        </template>
        <template v-else>
          {{ props.cancelButtonText ? props.cancelButtonText : '取消' }}
        </template>
      </z-button>
      <template v-if="componentSlots && componentSlots.title">
        <slot name="title"></slot>
      </template>
      <template v-if="props.title">
        <view :class="[bem('title'), 'z-ellipsis']">{{ props.title }}</view>
      </template>
      <z-button
        v-if="
          (componentSlots && componentSlots.confirm) ||
          (props.confirmButtonText ? props.confirmButtonText : '确认')
        "
        type="text"
        :custom-style="confirmButtonStyle"
        @click="onConfirm"
      >
        <template v-if="componentSlots && componentSlots.confirm">
          <slot name="confirm"></slot>
        </template>
        <template v-else>
          {{ props.confirmButtonText ? props.confirmButtonText : '确认' }}
        </template>
      </z-button>
    </template>
  </view>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { bem } from './utils'
import { createNamespace, useComponentName } from '../../libs/utils'
const [name] = createNamespace('picker-toolbar')
useComponentName(name)
const props = defineProps({
  title: String,
  cancelButtonText: String,
  confirmButtonText: String,
  componentSlots: Object
})
const emit = defineEmits(['confirm', 'cancel'])

const onCancel = () => emit('cancel')
const onConfirm = () => emit('confirm')
const cancelButtonStyle = computed(() => {
  return {
    color: 'var(--z-picker-cancel-action-color)',
    padding: 'var(--z-picker-action-padding)',
    fontSize: 'var(--z-picker-action-font-size)'
  }
})
const confirmButtonStyle = computed(() => {
  return {
    color: 'var(--z-picker-confirm-action-color)',
    padding: 'var(--z-picker-action-padding)',
    fontSize: 'var(--z-picker-action-font-size)'
  }
})
</script>
<script lang="ts">
export default {
  name: 'ZPickerToolbar',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-picker__toolbar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--z-picker-toolbar-height);
}

.z-picker__title {
  position: absolute;
  left: 50%;
  max-width: 50%;
  font-size: var(--z-picker-title-font-size);
  font-weight: var(--z-font-bold);
  line-height: var(--z-picker-title-line-height);
  color: var(--z-text-color);
  text-align: center;
  transform: translateX(-50%);
}
</style>
