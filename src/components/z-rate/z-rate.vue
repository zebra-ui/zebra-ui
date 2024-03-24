<template>
  <view
    class="z-rate-rect"
    :class="
      bem({
        readonly: props.readonly,
        disabled: props.disabled
      })
    "
    @touchstart.passive="onTouchStart"
    @touchmove.stop.prevent="onTouchMove"
  >
    <template v-for="(item, index) in list" :key="index">
      <view
        :style="itemStyle(index)"
        :class="bem('item')"
        @click="onClickItem($event, index)"
      >
        <z-icon
          :name="isFull(item) ? icon : voidIcon"
          :custom-style="fullIconStyle(item)"
          :class-prefix="iconPrefix"
        />
        <template v-if="renderHalf(item)">
          <z-icon
            :custom-style="voidIconStyle(item)"
            :badge-wrapper-style="voidWrapperStyle(item)"
            :name="isVoid(item) ? voidIcon : icon"
            :class-prefix="iconPrefix"
          />
        </template>
      </view>
    </template>
  </view>
</template>
<script lang="ts" setup>
import { CSSProperties, computed, getCurrentInstance } from 'vue'
import {
  addUnit,
  truthProp,
  numericProp,
  makeStringProp,
  makeNumberProp,
  makeNumericProp,
  createNamespace,
  getRect,
  getAllRect,
  useCustomFieldValue,
  useTouch,
  useComponentName
} from '../../libs/utils'

const [name, bem] = createNamespace('rate')
useComponentName(name)

type RateStatus = 'full' | 'half' | 'void'

type RateListItem = {
  value: number
  status: RateStatus
}

function getRateStatus(
  value: number,
  index: number,
  allowHalf: boolean,
  readonly: boolean
): RateListItem {
  if (value >= index) {
    return { status: 'full', value: 1 }
  }

  if (value + 0.5 >= index && allowHalf && !readonly) {
    return { status: 'half', value: 0.5 }
  }

  if (value + 1 >= index && allowHalf && readonly) {
    const cardinal = 10 ** 10
    return {
      status: 'half',
      value: Math.round((value - index + 1) * cardinal) / cardinal
    }
  }

  return { status: 'void', value: 0 }
}

const props = defineProps({
  size: numericProp,
  icon: makeStringProp('star-fill'),
  color: String,
  count: makeNumericProp(5),
  gutter: numericProp,
  clearable: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  voidIcon: makeStringProp('star'),
  allowHalf: Boolean,
  voidColor: String,
  touchable: truthProp,
  iconPrefix: String,
  modelValue: makeNumberProp(0),
  disabledColor: String
})

const emit = defineEmits(['change', 'update:modelValue'])

const instance = getCurrentInstance()

const touch = useTouch()

const unselectable = computed(() => props.readonly || props.disabled)

const untouchable = computed(() => unselectable.value || !props.touchable)

const list = computed<RateListItem[]>(() =>
  Array(+props.count)
    .fill('')
    .map((_, i) =>
      getRateStatus(props.modelValue, i + 1, props.allowHalf, props.readonly)
    )
)

let ranges: Array<{
  left: number
  top: number
  height: number
  score: number
}>

let groupRefRect: DOMRect
let minRectTop = Number.MAX_SAFE_INTEGER
let maxRectTop = Number.MIN_SAFE_INTEGER

const updateRanges = () => {
  Promise.all([
    getRect(instance, '.z-rate-rect'),
    getAllRect(instance, '.z-rate__item')
  ]).then(([groupRect, itemRects]: any) => {
    groupRefRect = groupRect
    const rects = itemRects

    ranges = []
    rects.forEach((rect: any, index: number) => {
      minRectTop = Math.min(rect.top, minRectTop)
      maxRectTop = Math.max(rect.top, maxRectTop)

      if (props.allowHalf) {
        ranges.push(
          {
            score: index + 0.5,
            left: rect.left,
            top: rect.top,
            height: rect.height
          },
          {
            score: index + 1,
            left: rect.left + rect.width / 2,
            top: rect.top,
            height: rect.height
          }
        )
      } else {
        ranges.push({
          score: index + 1,
          left: rect.left,
          top: rect.top,
          height: rect.height
        })
      }
    })
  })
}

const getScoreByPosition = (x: number, y: number) => {
  for (let i = ranges.length - 1; i > 0; i--) {
    if (y >= groupRefRect.top && y <= groupRefRect.bottom) {
      if (
        x > ranges[i].left &&
        y >= ranges[i].top &&
        y <= ranges[i].top + ranges[i].height
      ) {
        return ranges[i].score
      }
    } else {
      const curTop = y < groupRefRect.top ? minRectTop : maxRectTop

      if (x > ranges[i].left && ranges[i].top === curTop) {
        return ranges[i].score
      }
    }
  }
  return props.allowHalf ? 0.5 : 1
}

const select = (value: number) => {
  if (unselectable.value || value === props.modelValue) return
  emit('update:modelValue', value)
  emit('change', value)
}

const onTouchStart = (event: TouchEvent) => {
  if (untouchable.value) {
    return
  }

  touch.start(event)
  updateRanges()
}

const onTouchMove = (event: TouchEvent) => {
  if (untouchable.value) {
    return
  }

  touch.move(event)

  if (touch.isHorizontal() && !touch.isTap.value) {
    const { clientX, clientY } = event.touches[0]
    select(getScoreByPosition(clientX, clientY))
  }
}

const itemStyle = (index: any) => {
  let style = {}
  const score = index + 1
  if (props.gutter && score !== +props.count) {
    style = {
      paddingRight: addUnit(props.gutter)
    }
  }
  return style
}

const onClickItem = (event: any, index: any) => {
  const touchs = event.touches[0]
  const score = index + 1
  updateRanges()
  let value = props.allowHalf
    ? getScoreByPosition(touchs.clientX, touchs.clientY)
    : score
  if (props.clearable && touch.isTap.value && value === props.modelValue) {
    value = 0
  }
  select(value)
}

const isFull = (item: any) => {
  return item.status === 'full'
}

const isVoid = (item: any) => {
  return item.status === 'void'
}

const renderHalf = (item: any) => {
  return props.allowHalf && item.value > 0 && item.value < 1
}

const fullIconStyle = (item: any) => {
  const style: CSSProperties = {
    display: 'block',
    width: '1em',
    color: 'var(--z-rate-icon-void-color)',
    fontSize: 'var(--z-rate-icon-size)'
  }

  if (props.size) {
    style['font-size'] = addUnit(props.size)
  }

  let fullStyle: CSSProperties = {}
  if (isFull(item)) {
    fullStyle = {
      color: 'var(--z-rate-icon-full-color)'
    }
  } else {
    fullStyle = {}
  }
  if (props.disabled) {
    fullStyle['color'] = 'var(--z-rate-icon-disabled-color)'
  }
  let colorStyle = {}
  if (props.disabled && props.disabledColor) {
    colorStyle = {
      color: props.disabledColor
    }
  } else if (isFull(item) && props.color) {
    colorStyle = {
      color: props.color
    }
  } else if (props.voidColor) {
    colorStyle = {
      color: props.voidColor
    }
  } else {
    colorStyle = {}
  }

  return { ...style, ...fullStyle, ...colorStyle }
}

const voidIconStyle = (item: any) => {
  const style: CSSProperties = {
    display: 'block',
    width: item.value + 'em',
    color: 'var(--z-rate-icon-void-color)',
    fontSize: 'var(--z-rate-icon-size)'
  }
  if (props.size) {
    style['font-size'] = addUnit(props.size)
  }
  let fullStyle: CSSProperties = {}
  if (!isVoid(item)) {
    fullStyle = {
      color: 'var(--z-rate-icon-full-color)'
    }
  } else {
    fullStyle = {}
  }
  if (props.disabled) {
    fullStyle['color'] = 'var(--z-rate-icon-disabled-color)'
  }
  let colorStyle = {}
  if (props.disabled && props.disabledColor) {
    colorStyle = {
      color: props.disabledColor
    }
  } else if (isVoid(item) && props.voidColor) {
    colorStyle = {
      color: props.voidColor
    }
  } else if (props.color) {
    colorStyle = {
      color: props.color
    }
  } else {
    colorStyle = {}
  }
  return { ...style, ...fullStyle, ...colorStyle }
}

const voidWrapperStyle = (item: any) => {
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    pointerEvents: 'none'
  }
  return { ...style }
}

useCustomFieldValue(() => props.modelValue)
</script>
<script lang="ts">
export default {
  name: 'ZRate',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-rate {
  display: inline-flex;
  flex-wrap: wrap;
  user-select: none;

  &__item {
    position: relative;

    &:not(:last-child) {
      padding-right: var(--z-rate-icon-gutter);
    }
  }

  &__icon {
    display: block;
    width: 1em;
    font-size: var(--z-rate-icon-size);
    color: var(--z-rate-icon-void-color);

    &--half {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      pointer-events: none;
    }

    &--full {
      color: var(--z-rate-icon-full-color);
    }
  }

  &--disabled {
    cursor: not-allowed;
  }

  &--readonly {
    cursor: default;
  }
}
</style>
