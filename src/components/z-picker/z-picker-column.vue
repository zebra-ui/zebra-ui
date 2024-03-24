<template>
  <view
    :class="bem()"
    @touchstart.passive="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <view
      :style="{
        transform: `translate3d(0, ${currentOffset + baseOffset()}px, 0)`,
        transitionDuration: `${currentDuration}ms`,
        transitionProperty: currentDuration ? 'all' : 'none'
      }"
      :class="bem('wrapper')"
      @transitionend="stopMomentum"
    >
      <template v-for="(option, index) in props.options" :key="index">
        <view
          role="button"
          :style="optionStyle"
          :tabindex="option.disabled ? -1 : 0"
          :class="[
            bem('item', {
              disabled: option.disabled,
              selected: option[props.fields.value] === props.value
            }),
            option.className
          ]"
          @click="() => onClickOption(index)"
        >
          <template v-if="props.componentSlots && props.componentSlots.option">
            <slot name="option"></slot>
          </template>
          <template v-else>
            <view class="z-ellipsis">
              {{ option[props.fields.text] }}
            </view>
          </template>
        </view>
      </template>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect, type PropType } from 'vue'
import {
  clamp,
  numericProp,
  makeArrayProp,
  createNamespace,
  makeRequiredProp,
  type Numeric,
  useParent,
  useTouch,
  useExpose
} from '../../libs/utils'
import { findIndexOfEnabledOption } from './utils'
type PickerOption = {
  text?: Numeric
  value?: Numeric
  disabled?: boolean
  children?: any
  className?: unknown
  [key: PropertyKey]: any
}
const DEFAULT_DURATION = 200
const MOMENTUM_TIME = 300
const MOMENTUM_DISTANCE = 15
const [name, bem] = createNamespace('picker-column')
const props = defineProps({
  value: numericProp,
  fields: makeRequiredProp(Object as PropType<Required<any>>),
  options: makeArrayProp<PickerOption>(),
  readonly: Boolean,
  allowHtml: Boolean,
  optionHeight: makeRequiredProp(Number),
  swipeDuration: makeRequiredProp(numericProp),
  visibleOptionNum: makeRequiredProp(numericProp),
  componentSlots: Object
})
const emit = defineEmits(['change', 'clickOption', 'scrollInto'])
let moving: boolean
let startOffset: number
let touchStartTime: number
let momentumOffset: number
let transitionEndTrigger: null | (() => void)
const currentOffset = ref(0)
const currentDuration = ref(0)
const touch = useTouch()

// @ts-ignore
const count = () => props.options.length

const baseOffset = () =>
  (props.optionHeight * (+props.visibleOptionNum - 1)) / 2

const updateValueByIndex = (index: number) => {
  // @ts-ignore
  let enabledIndex = findIndexOfEnabledOption(props.options, index)
  const offset = -enabledIndex * props.optionHeight

  const trigger = () => {
    if (enabledIndex > count() - 1) {
      // @ts-ignore
      enabledIndex = findIndexOfEnabledOption(props.options, index)
    }
    // @ts-ignore
    const value = props.options[enabledIndex][props.fields.value]
    if (value !== props.value) {
      emit('change', value)
    }
  }
  if (moving && offset !== currentOffset.value) {
    transitionEndTrigger = trigger
  } else {
    trigger()
  }

  currentOffset.value = offset
}
// @ts-ignore
const isReadonly = () => props.readonly || !props.options.length

const optionStyle = computed(() => {
  return {
    height: `${props.optionHeight}px`
  }
})

const onClickOption = (index: number) => {
  if (moving || isReadonly()) {
    return
  }

  transitionEndTrigger = null
  currentDuration.value = DEFAULT_DURATION
  updateValueByIndex(index)
  emit('clickOption', props.options[index])
}

const getIndexByOffset = (offset: number) =>
  clamp(Math.round(-offset / props.optionHeight), 0, count() - 1)

const currentIndex = computed(() => getIndexByOffset(currentOffset.value))

const momentum = (distance: number, duration: number) => {
  const speed = Math.abs(distance / duration)

  distance = currentOffset.value + (speed / 0.003) * (distance < 0 ? -1 : 1)

  const index = getIndexByOffset(distance)

  currentDuration.value = +props.swipeDuration
  updateValueByIndex(index)
}

const stopMomentum = () => {
  moving = false
  currentDuration.value = 0

  if (transitionEndTrigger) {
    transitionEndTrigger()
    transitionEndTrigger = null
  }
}

const onTouchStart = (event: TouchEvent) => {
  if (isReadonly()) {
    return
  }

  touch.start(event)
  currentDuration.value = 0
  startOffset = currentOffset.value
  touchStartTime = Date.now()
  momentumOffset = startOffset
  transitionEndTrigger = null
}

const onTouchMove = (event: TouchEvent) => {
  if (isReadonly()) {
    return
  }

  touch.move(event)

  if (touch.isVertical()) {
    moving = true
  }

  const newOffset = clamp(
    startOffset + touch.deltaY.value,
    -(count() * props.optionHeight),
    props.optionHeight
  )

  const newIndex = getIndexByOffset(newOffset)
  if (newIndex !== currentIndex.value) {
    emit('scrollInto', props.options[newIndex])
  }

  currentOffset.value = newOffset

  const now = Date.now()
  if (now - touchStartTime > MOMENTUM_TIME) {
    touchStartTime = now
    momentumOffset = newOffset
  }
}

const onTouchEnd = () => {
  if (isReadonly()) {
    return
  }

  const distance = currentOffset.value - momentumOffset
  const duration = Date.now() - touchStartTime
  const startMomentum =
    duration < MOMENTUM_TIME && Math.abs(distance) > MOMENTUM_DISTANCE

  if (startMomentum) {
    momentum(distance, duration)
    return
  }

  const index = getIndexByOffset(currentOffset.value)
  currentDuration.value = DEFAULT_DURATION
  updateValueByIndex(index)
  setTimeout(() => {
    moving = false
  }, 0)
}
// @ts-ignore
useParent(name)
useExpose({ stopMomentum })

watchEffect(() => {
  const index = moving
    ? // @ts-ignore
      Math.floor(-currentOffset.value / props.optionHeight)
    : props.options.findIndex(
        (option) => option[props.fields.value] === props.value
      )
  // @ts-ignore
  const enabledIndex = findIndexOfEnabledOption(props.options, index)
  const offset = -enabledIndex * props.optionHeight
  if (moving && enabledIndex < index) stopMomentum()
  currentOffset.value = offset
})
</script>
<script lang="ts">
export default {
  name: 'ZPickerColumn',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-picker-column {
  flex: 1;
  overflow: hidden;
  font-size: var(--z-picker-option-font-size);

  &__wrapper {
    transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--z-picker-option-padding);
    color: var(--z-picker-option-text-color);

    &--disabled {
      cursor: not-allowed;
      opacity: var(--z-picker-option-disabled-opacity);
    }
  }
}
</style>
