<template>
  <view
    v-show="state.showWrapper"
    :style="styles"
    :class="bem([parent.props.direction])"
    @click="onClickWrapper"
  >
    <z-popup
      v-model:show="state.showPopup"
      :custom-style="popupStyle"
      :overlay="parent.props.overlay"
      :overlay-back-groud="overlayBackGroud"
      :position="parent.props.direction === 'down' ? 'top' : 'bottom'"
      :duration="state.transition ? parent.props.duration : 0"
      :overlay-style="{ position: 'absolute' }"
      :close-on-click-overlay="parent.props.closeOnClickOverlay"
      @open="onOpen"
      @close="onClose"
      @opened="onOpened"
      @closed="onClosed"
    >
      <template v-for="(option, index) in props.options" :key="index">
        <z-cell
          :icon="option.icon"
          :title="option.text"
          :custom-style="cellStyle(option)"
          clickable
          @click="onClickOption(option)"
        >
          <template v-if="option.value === props.modelValue">
            <z-icon
              :custom-style="iconStyle"
              size="var(--z-font-size-lg)"
              :color="parent.props.activeColor"
              name="check"
            />
          </template>
        </z-cell>
      </template>
      <slot></slot>
    </z-popup>
  </view>
</template>
<script lang="ts" setup>
import { reactive, computed, CSSProperties } from 'vue'
import {
  truthProp,
  unknownProp,
  getZIndexStyle,
  createNamespace,
  makeArrayProp,
  useParent,
  useExpose,
  addUnit,
  useComponentName
} from '../../libs/utils'
import type { DropdownItemOption } from './types'
import zPopup from '../z-popup/z-popup.vue'
import zCell from '../z-cell/z-cell.vue'
import zIcon from '../z-icon/z-icon.vue'

const [name, bem] = createNamespace('dropdown-item')
useComponentName(name)

const props = defineProps({
  title: String,
  options: makeArrayProp<DropdownItemOption>(),
  disabled: Boolean,
  lazyRender: truthProp,
  modelValue: unknownProp,
  titleClass: unknownProp,
  inheritWidth: truthProp,
  overlayBackGroud: Boolean
})
const emit = defineEmits([
  'open',
  'opened',
  'close',
  'closed',
  'change',
  'update:modelValue'
])
const state = reactive({
  showPopup: false,
  transition: true,
  showWrapper: false
})
// @ts-ignore
const { parent } = useParent('z-dropdown-menu')
const styles = computed(() => {
  const { zIndex, direction } = parent.props
  const { offset } = parent
  const style: any = getZIndexStyle(zIndex)
  let offsetValue = offset.value
  if (direction === 'down') {
    style.top = `${offsetValue}px`
  } else {
    style.bottom = `${offsetValue}px`
  }
  if (props.inheritWidth) {
    style.width = addUnit(parent.itemWidth.value)
    style.left = addUnit(parent.itemLeft.value)
  }
  return style
})

const iconStyle = computed(() => {
  return { display: 'block', 'line-height': 'inherit' } as CSSProperties
})

const cellStyle = (option: any) => {
  const styles: CSSProperties = { 'text-align': 'left' }
  if (option.value === props.modelValue) {
    styles['color'] = 'var(--z-dropdown-menu-option-active-color)'
    iconStyle.value['color'] = 'var(--z-dropdown-menu-option-active-color)'
    if (parent.props.activeColor) {
      styles['color'] = parent.props.activeColor
      iconStyle.value['color'] = parent.props.activeColor
    }
  }
  return { ...styles }
}

const onClickOption = (option: any) => {
  state.showPopup = false
  if (option.value !== props.modelValue) {
    emit('update:modelValue', option.value)
    emit('change', option.value)
  }
}

const getEmitter = (name: 'open' | 'close' | 'opened') => () => emit(name)
const onOpen = getEmitter('open')
const onClose = getEmitter('close')
const onOpened = getEmitter('opened')

const onClosed = () => {
  state.showWrapper = false
  emit('closed')
}

const onClickWrapper = (event: any) => {}

const popupStyle = computed(() => {
  const styles = {
    position: 'absolute',
    maxHeight: 'var(--z-dropdown-menu-content-max-height)'
  }
  return styles
})

const toggle = (
  show = !state.showPopup,
  options: { immediate?: boolean } = {}
) => {
  if (show === state.showPopup) {
    return
  }

  state.showPopup = show
  state.transition = !options.immediate

  if (show) {
    parent.updateOffset()
    state.showWrapper = true
  }
}

useExpose({ state, toggle, props })
defineExpose({ state, toggle, props })
</script>
<script lang="ts">
export default {
  name: 'ZDropdownItem',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-dropdown-item {
  position: fixed;
  right: 0;
  left: 0;
  z-index: var(--z-dropdown-item-z-index);
  overflow: hidden;

  &--up {
    top: 0;
  }

  &--down {
    bottom: 0;
  }
}
</style>
