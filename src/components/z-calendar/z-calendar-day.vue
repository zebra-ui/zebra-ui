<template>
  <template v-if="props.item.type === 'placeholder'">
    <view :class="bem('day')" :style="style" />
  </template>
  <template v-else>
    <view
      :style="style"
      :class="[bem('day', props.item.type), props.item.className]"
      @click="onClick"
    >
      <template v-if="props.item.type === 'selected'">
        <view
          :class="bem('selected-day')"
          :style="{ width: rowHeight, height: rowHeight, background: color }"
        >
          <template
            v-if="
              props.item.topInfo ||
              (componentSlots && componentSlots['top-info'])
            "
          >
            <view :class="bem('top-info')">
              <template v-if="componentSlots && componentSlots['top-info']">
                <slot name="top-info"></slot>
              </template>
              <template v-else>
                {{ props.item.topInfo }}
              </template>
            </view>
          </template>
          {{ props.item.text }}
          <template
            v-if="
              props.item.bottomInfo ||
              (componentSlots && componentSlots['bottom-info'])
            "
          >
            <view :class="bem('bottom-info')">
              <template v-if="componentSlots && componentSlots['bottom-info']">
                <slot name="bottom-info"></slot>
              </template>
              <template v-else>
                {{ props.item.bottomInfo }}
              </template>
            </view>
          </template>
        </view>
      </template>
      <template v-else>
        <template
          v-if="
            props.item.topInfo || (componentSlots && componentSlots['top-info'])
          "
        >
          <view :class="bem('top-info')">
            <template v-if="componentSlots && componentSlots['top-info']">
              <slot name="top-info"></slot>
            </template>
            <template v-else>
              {{ props.item.topInfo }}
            </template>
          </view>
        </template>
        {{ props.item.text }}
        <template
          v-if="
            props.item.bottomInfo ||
            (componentSlots && componentSlots['bottom-info'])
          "
        >
          <view :class="bem('bottom-info')">
            <template v-if="componentSlots && componentSlots['bottom-info']">
              <slot name="bottom-info"></slot>
            </template>
            <template v-else>
              {{ props.item.bottomInfo }}
            </template>
          </view>
        </template>
      </template>
    </view>
  </template>
</template>
<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import {
  makeNumberProp,
  createNamespace,
  makeRequiredProp,
  useComponentName
} from '../../libs/utils'
import { bem } from './utils'
import type { CalendarDayItem } from './types'

interface ComponentSlots {
  'top-info': string
  'bottom-info': string
}

const [name] = createNamespace('calendar-day')
useComponentName(name)
const props = defineProps({
  item: makeRequiredProp<PropType<CalendarDayItem>>(Object),
  color: String,
  index: Number,
  offset: makeNumberProp(0),
  rowHeight: String,
  componentSlots: Object as PropType<ComponentSlots | undefined>
})
const emit = defineEmits(['click', 'clickDisabledDate'])

const style = computed(() => {
  const { item, index, color, offset, rowHeight } = props
  const style: any = {
    height: rowHeight
  }
  // @ts-ignore
  if (item.type === 'placeholder') {
    style.width = '100%'
    return style
  }

  if (index === 0) {
    style.marginLeft = `${(100 * offset) / 7}%`
  }

  if (color) {
    switch (item.type) {
      // @ts-ignore
      case 'end':
      // @ts-ignore
      // eslint-disable-next-line no-fallthrough
      case 'start':
      // @ts-ignore
      // eslint-disable-next-line no-fallthrough
      case 'start-end':
      // @ts-ignore
      // eslint-disable-next-line no-fallthrough
      case 'multiple-middle':
      // @ts-ignore
      // eslint-disable-next-line no-fallthrough
      case 'multiple-selected':
        style.background = color
        break
      // @ts-ignore
      case 'middle':
        style.color = color
        break
    }
  }
  // @ts-ignore
  if (offset + (item.date?.getDate() || 1) > 28) {
    style.marginBottom = 0
  }
  return style
})

const onClick = () => {
  // @ts-ignore
  if (props.item.type !== 'disabled') {
    emit('click', props.item)
  } else {
    emit('clickDisabledDate', props.item)
  }
}
</script>
<script lang="ts">
export default {
  name: 'ZCalendarDay',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-calendar__day,
.z-calendar__selected-day {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.z-calendar__day {
  position: relative;
  width: 14.285%;
  height: var(--z-calendar-day-height);
  margin-bottom: var(--z-calendar-day-margin-bottom);
  font-size: var(--z-calendar-day-font-size);
  color: var(--z-text-color);

  &--end,
  &--start,
  &--start-end,
  &--multiple-middle,
  &--multiple-selected {
    color: var(--z-calendar-range-edge-color);
    background: var(--z-calendar-range-edge-background);
  }

  &--start {
    border-radius: var(--z-radius-md) 0 0 var(--z-radius-md);
  }

  &--end {
    border-radius: 0 var(--z-radius-md) var(--z-radius-md) 0;
  }

  &--start-end,
  &--multiple-selected {
    border-radius: var(--z-radius-md);
  }

  &--middle {
    color: var(--z-calendar-range-middle-color);

    &::after {
      position: absolute;
      inset: 0;
      content: '';
      background-color: currentcolor;
      opacity: var(--z-calendar-range-middle-background-opacity);
    }
  }

  &--disabled {
    color: var(--z-calendar-day-disabled-color);
    cursor: default;
  }
}

.z-calendar__selected-day {
  width: var(--z-calendar-selected-day-size);
  height: var(--z-calendar-selected-day-size);
  color: var(--z-calendar-selected-day-color);
  background: var(--z-calendar-selected-day-background);
  border-radius: var(--z-radius-md);
}

.z-calendar__top-info,
.z-calendar__bottom-info {
  position: absolute;
  right: 0;
  left: 0;
  font-size: var(--z-calendar-info-font-size);
  line-height: var(--z-calendar-info-line-height);

  @media (width <= 700rpx) {
    font-size: 18rpx;
  }
}

.z-calendar__top-info {
  top: 12rpx;
}

.z-calendar__bottom-info {
  bottom: 12rpx;
}
</style>
