<template>
  <view
    :style="wrapperStyle"
    class="z-slider-rect"
    :class="bem({ vertical: props.vertical, disabled: props.disabled })"
    @click.stop="onClick"
  >
    <view :class="bem('bar')" :style="barStyle">
      <template v-if="props.range">
        <view
          :class="getButtonClassName(0)"
          @touchstart.passive="touchStartEvent($event, 0)"
          @touchmove.stop.prevent="onTouchMove"
          @touchend="onTouchEnd"
          @touchcancel="onTouchEnd"
          @click.stop
        >
          <template v-if="instance.slots['left-button']">
            <slot
              name="left-button"
              :value="props.modelValue[0]"
              :dragging="dragging"
              :drag-index="
                current[0] > current[1] ? buttonIndex ^ 1 : buttonIndex
              "
            ></slot>
          </template>
          <template v-else>
            <view
              :class="bem('button')"
              :style="getSizeStyle(props.buttonSize)"
            />
          </template>
        </view>
        <view
          :class="getButtonClassName(1)"
          @touchstart.passive="touchStartEvent($event, 1)"
          @touchmove.stop.prevent="onTouchMove"
          @touchend="onTouchEnd"
          @touchcancel="onTouchEnd"
        >
          <template v-if="instance.slots['right-button']">
            <slot
              name="right-button"
              :value="props.modelValue[1]"
              :dragging="dragging"
              :drag-index="
                current[0] > current[1] ? buttonIndex ^ 1 : buttonIndex
              "
            ></slot>
          </template>
          <template v-else>
            <view
              :class="bem('button')"
              :style="getSizeStyle(props.buttonSize)"
            />
          </template>
        </view>
      </template>
      <template v-else>
        <view
          :class="getButtonClassName()"
          @touchstart.passive="touchStartEvent($event)"
          @touchmove.stop.prevent="onTouchMove"
          @touchend="onTouchEnd"
          @touchcancel="onTouchEnd"
        >
          <template v-if="instance.slots['button']">
            <slot
              name="button"
              :value="props.modelValue"
              :dragging="dragging"
            ></slot>
          </template>
          <template v-else>
            <view
              :class="bem('button')"
              :style="getSizeStyle(props.buttonSize)"
            />
          </template>
        </view>
      </template>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { ref, computed, getCurrentInstance } from 'vue'
import {
  clamp,
  addUnit,
  addNumber,
  numericProp,
  isSameValue,
  getSizeStyle,
  createNamespace,
  makeNumericProp,
  getRect,
  useCustomFieldValue,
  useTouch,
  useComponentName
} from '../../libs/utils'

type NumberRange = [number, number]

type SliderValue = number | NumberRange

const [name, bem] = createNamespace('slider')
useComponentName(name)
const instance = getCurrentInstance()!
const props = defineProps({
  min: makeNumericProp(0),
  max: makeNumericProp(100),
  step: makeNumericProp(1),
  range: Boolean,
  reverse: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  vertical: Boolean,
  barHeight: numericProp,
  buttonSize: numericProp,
  activeColor: String,
  inactiveColor: String,
  modelValue: {
    type: [Number, Array] as any,
    default: 0
  },
  customStyle: Object
})

const emit = defineEmits([
  'change',
  'dragEnd',
  'dragStart',
  'update:modelValue'
])

let buttonIndex: 0 | 1
let current: any
let startValue: any
const dragStatus = ref<'start' | 'dragging' | ''>()
const touch = useTouch()

const scope = computed(() => Number(props.max) - Number(props.min))

const wrapperStyle = computed(() => {
  const crossAxis = props.vertical ? 'width' : 'height'
  return {
    background: props.inactiveColor,
    [crossAxis]: addUnit(props.barHeight),
    ...props.customStyle
  }
})

const dragging = computed(() => {
  return dragStatus.value === 'dragging'
})

const isRange = (val: unknown): val is NumberRange =>
  props.range && Array.isArray(val)
const calcMainAxis = () => {
  const { modelValue, min } = props
  if (isRange(modelValue)) {
    return `${((modelValue[1] - modelValue[0]) * 100) / scope.value}%`
  }
  // @ts-ignore
  return `${((modelValue - Number(min)) * 100) / scope.value}%`
}
const calcOffset = () => {
  const { modelValue, min } = props
  if (isRange(modelValue)) {
    return `${((modelValue[0] - Number(min)) * 100) / scope.value}%`
  }
  return '0%'
}

const barStyle = computed(() => {
  const mainAxis = props.vertical ? 'height' : 'width'
  const style: any = {
    [mainAxis]: calcMainAxis(),
    background: props.activeColor
  }

  if (dragStatus.value) {
    style.transition = 'none'
  }

  const getPositionKey = () => {
    if (props.vertical) {
      return props.reverse ? 'bottom' : 'top'
    }
    return props.reverse ? 'right' : 'left'
  }

  style[getPositionKey()] = calcOffset()

  return style
})

const format = (value: number) => {
  const min = +props.min
  const max = +props.max
  const step = +props.step

  value = clamp(value, min, max)
  const diff = Math.round((value - min) / step) * step
  return addNumber(min, diff)
}

const updateStartValue = () => {
  const current = props.modelValue
  if (isRange(current)) {
    startValue = current.map(format) as NumberRange
  } else {
    // @ts-ignore
    startValue = format(current)
  }
}

const handleRangeValue = (value: NumberRange) => {
  const left = value[0] ? value[0] : Number(props.min)
  const right = value[1] ? value[1] : Number(props.max)
  return left > right ? [right, left] : [left, right]
}

const updateValue = (value: SliderValue, end?: boolean) => {
  if (isRange(value)) {
    value = handleRangeValue(value).map(format) as NumberRange
  } else {
    value = format(value)
  }

  if (!isSameValue(value, props.modelValue)) {
    emit('update:modelValue', value)
  }

  if (end && !isSameValue(value, startValue)) {
    emit('change', value)
  }
}

const onClick = (event: any) => {
  if (props.disabled || props.readonly) {
    return
  }

  updateStartValue()
  const touch = event.touches[0]
  const { min, reverse, vertical, modelValue } = props
  getRect(instance, '.z-slider-rect').then((rect: any) => {
    const getDelta = () => {
      if (vertical) {
        if (reverse) {
          return rect.bottom - touch.clientY
        }
        return touch.clientY - rect.top
      }
      if (reverse) {
        return rect.right - touch.clientX
      }
      return touch.clientX - rect.left
    }

    const total = vertical ? rect.height : rect.width
    const value = Number(min) + (getDelta() / total) * scope.value

    if (isRange(modelValue)) {
      const [left, right] = modelValue
      const middle = (left + right) / 2

      if (value <= middle) {
        updateValue([value, right], true)
      } else {
        updateValue([left, value], true)
      }
    } else {
      updateValue(value, true)
    }
  })
}

const touchStartEvent = (event: any, index: any = '') => {
  if (typeof index === 'number') {
    // @ts-ignore
    buttonIndex = index
  }
  onTouchStart(event)
}

const onTouchStart = (event: TouchEvent) => {
  if (props.disabled || props.readonly) {
    return
  }
  touch.start(event)
  // @ts-ignore
  current = props.modelValue
  updateStartValue()

  dragStatus.value = 'start'
}

const onTouchMove = (event: TouchEvent) => {
  if (props.disabled || props.readonly) {
    return
  }

  if (dragStatus.value === 'start') {
    emit('dragStart', event)
  }
  touch.move(event)
  dragStatus.value = 'dragging'
  getRect(instance, '.z-slider-rect').then((rect: any) => {
    const delta = props.vertical ? touch.deltaY.value : touch.deltaX.value
    const total = props.vertical ? rect.height : rect.width

    let diff = (delta / total) * scope.value
    if (props.reverse) {
      diff = -diff
    }

    if (isRange(startValue)) {
      const index = props.reverse ? 1 - buttonIndex : buttonIndex
      ;(current as NumberRange)[index] = startValue[index] + diff
    } else {
      current = startValue + diff
    }
    updateValue(current)
  })
}

const onTouchEnd = (event: TouchEvent) => {
  if (props.disabled || props.readonly) {
    return
  }

  if (dragStatus.value === 'dragging') {
    updateValue(current, true)
    emit('dragEnd', event)
  }

  dragStatus.value = ''
}

const getButtonClassName = (index?: 0 | 1) => {
  if (typeof index === 'number') {
    const position = ['left', 'right']
    return bem(`button-wrapper`, position[index])
  }
  return bem('button-wrapper', props.reverse ? 'left' : 'right')
}
// @ts-ignore
updateValue(props.modelValue)
useCustomFieldValue(() => props.modelValue)
</script>
<script lang="ts">
export default {
  name: 'ZSlider',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-slider {
  position: relative;
  width: 100%;
  height: var(--z-slider-bar-height);
  background: var(--z-slider-inactive-background);
  border-radius: var(--z-radius-max);

  &::before {
    position: absolute;
    inset: calc(var(--z-padding-xs) * -1) 0 calc(var(--z-padding-xs) * -1) 0;
    content: '';
  }

  &__bar {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--z-slider-active-background);
    border-radius: inherit;
    transition: all var(--z-duration-fast);
  }

  &__button {
    width: var(--z-slider-button-width);
    height: var(--z-slider-button-height);
    background: var(--z-slider-button-background);
    border-radius: var(--z-slider-button-radius);
    box-shadow: var(--z-slider-button-shadow);

    &-wrapper {
      position: absolute;
      top: 50%;
      cursor: grab;

      &--right {
        right: 0;
        transform: translate3d(50%, -50%, 0);
      }

      &--left {
        left: 0;
        transform: translate3d(-50%, -50%, 0);
      }
    }
  }

  &--disabled {
    cursor: not-allowed;
    opacity: var(--z-slider-disabled-opacity);

    .z-slider__button-wrapper {
      cursor: not-allowed;
    }
  }

  &--vertical {
    display: inline-block;
    width: var(--z-slider-bar-height);
    height: 100%;

    .z-slider__button-wrapper--right {
      top: auto;
      right: 50%;
      bottom: 0;
      transform: translate3d(50%, 50%, 0);
    }

    .z-slider__button-wrapper--left {
      top: 0;
      right: 50%;
      left: auto;
      transform: translate3d(50%, -50%, 0);
    }

    &::before {
      inset: 0 calc(var(--z-padding-xs) * -1) 0 calc(var(--z-padding-xs) * -1);
    }
  }
}
</style>
