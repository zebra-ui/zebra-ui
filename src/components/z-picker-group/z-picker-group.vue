<template>
  <view :class="bem()">
    <z-picker-toolbar
      :title="props.title"
      :cancel-button-text="props.cancelButtonText"
      :component-slots="componentSlotsShow ? componentSlots : instance.slots"
      :confirm-button-text="confirmButtonText"
      @confirm="onConfirm"
      @cancel="onCancel"
    >
      <template v-if="showSlots('cancel')" #cancel>
        <slot name="cancel"></slot>
      </template>
      <template v-if="showSlots('confirm')" #confirm>
        <slot name="confirm"></slot>
      </template>
      <template v-if="showSlots('title')" #title>
        <slot name="title"></slot>
      </template>
      <template v-if="showSlots('toolbar')" #toolbar>
        <slot name="toolbar"></slot>
      </template>
    </z-picker-toolbar>
    <slot></slot>
  </view>
</template>
<script lang="ts" setup>
import { computed, getCurrentInstance } from 'vue'
import zPickerToolbar from '../z-picker/z-picker-toolbar.vue'
import {
  makeArrayProp,
  makeNumericProp,
  createNamespace,
  isObject,
  useChildren,
  useSyncPropRef
} from '../../libs/utils'

const [name, bem] = createNamespace('picker-group')
const instance = getCurrentInstance()!
const props = defineProps({
  tabs: makeArrayProp<string>(),
  activeTab: makeNumericProp(0),
  nextStepText: String,
  title: String,
  cancelButtonText: String,
  confirmButtonText: String,
  componentSlots: Object,
  count: Number
})

const emit = defineEmits(['confirm', 'cancel', 'update:activeTab'])
const activeTab = useSyncPropRef(
  () => props.activeTab,
  (value) => emit('update:activeTab', value)
)
const { children, linkChildren } = useChildren(name)

linkChildren()

const showNextButton = computed(() => {
  // @ts-ignore
  return +activeTab.value < props.count - 1 && props.nextStepText
})

const confirmButtonText = computed(() => {
  return showNextButton.value ? props.nextStepText : props.confirmButtonText
})

const onConfirm = () => {
  if (showNextButton.value) {
    activeTab.value = +activeTab.value + 1
  } else {
    emit(
      'confirm',
      children.map((item: any) => item.confirm())
    )
  }
}
const onCancel = () => emit('cancel')

const componentSlotsShow = computed(() => {
  return isObject(props.componentSlots)
})

const showSlots = (name: string) => {
  if (componentSlotsShow.value) {
    return props.componentSlots && props.componentSlots[name]
      ? props.componentSlots[name]
      : false
  }
  return instance.slots[name]
}
</script>
<script lang="ts">
export default {
  name: 'ZPickerGroup',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-picker-group {
  background: var(--z-picker-group-background);
}
</style>
