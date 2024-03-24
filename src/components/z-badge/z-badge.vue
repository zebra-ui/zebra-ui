<template>
  <template v-if="instance.slots.default">
    <view :class="bem('wrapper')" :style="wrapperStyle">
      <slot></slot>
      <template v-if="hasContent() || props.dot">
        <view
          :class="
            bem([
              props.position,
              { dot: props.dot, fixed: !!instance.slots.default }
            ])
          "
          :style="style"
        >
          <template v-if="!dot && hasContent()">
            <template v-if="instance.slots.content">
              <slot name="content"></slot>
            </template>
            <template
              v-if="isDef(max) && isNumeric(content!) && +content > +max"
            >
              {{ max }}+
            </template>
            <template
              v-if="
                !instance.slots.content &&
                !(isDef(max) && isNumeric(content!) && +content > +max)
              "
            >
              {{ content }}
            </template>
          </template>
        </view>
      </template>
    </view>
  </template>
  <template v-else>
    <template v-if="hasContent() || props.dot">
      <view
        :class="
          bem([
            props.position,
            { dot: props.dot, fixed: !!instance.slots.default }
          ])
        "
        :style="style"
      >
        <template v-if="!dot && hasContent()">
          <template v-if="instance.slots.content">
            <slot name="content"></slot>
          </template>
          <template v-if="isDef(max) && isNumeric(content!) && +content > +max">
            {{ max }}+
          </template>
          <template
            v-if="
              !instance.slots.content &&
              !(isDef(max) && isNumeric(content!) && +content > +max)
            "
          >
            {{ content }}
          </template>
        </template>
      </view>
    </template>
  </template>
</template>

<script setup lang="ts">
import { computed, type PropType, getCurrentInstance } from 'vue'
import {
  isDef,
  addUnit,
  isNumeric,
  truthProp,
  numericProp,
  makeStringProp,
  createNamespace,
  type Numeric,
  useComponentName
} from '../../libs/utils'
type BadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
const [name, bem] = createNamespace('badge')
useComponentName(name)
const props = defineProps({
  dot: Boolean,
  max: numericProp,
  color: String,
  offset: Array as unknown as PropType<[Numeric, Numeric]>,
  content: numericProp,
  showZero: truthProp,
  position: makeStringProp<BadgePosition>('top-right'),
  customStyle: Object,
  wrapperStyle: Object
})
const instance = getCurrentInstance()!
const hasContent = () => {
  if (instance.slots.content) {
    return true
  }
  const { content, showZero } = props
  return (
    isDef(content) &&
    content !== '' &&
    (showZero || (content !== 0 && content !== '0'))
  )
}
const getOffsetWithMinusString = (val: string) =>
  val.startsWith('-') ? val.replace('-', '') : `-${val}`

const style = computed(() => {
  const style: any = {
    background: props.color,
    ...props.customStyle
  }

  if (props.offset) {
    const [x, y]: any = props.offset
    const { position }: any = props
    const [offsetY, offsetX] = position.split('-') as [
      'top' | 'bottom',
      'left' | 'right'
    ]

    if (instance.slots.default) {
      if (typeof y === 'number') {
        style[offsetY] = addUnit(offsetY === 'top' ? y : -y)
      } else {
        style[offsetY] =
          offsetY === 'top' ? addUnit(y) : getOffsetWithMinusString(y)
      }

      if (typeof x === 'number') {
        style[offsetX] = addUnit(offsetX === 'left' ? x : -x)
      } else {
        style[offsetX] =
          offsetX === 'left' ? addUnit(x) : getOffsetWithMinusString(x)
      }
    } else {
      style.marginTop = addUnit(y)
      style.marginLeft = addUnit(x)
    }
  }

  return style
})
</script>

<script lang="ts">
export default {
  name: 'ZBadge',
  options: {
    virtualHost: true
  }
}
</script>

<style lang="scss" scoped>
.z-badge {
  box-sizing: border-box;
  display: inline-block;
  min-width: var(--z-badge-size);
  padding: var(--z-badge-padding);
  font-family: var(--z-badge-font);
  font-size: var(--z-badge-font-size);
  font-weight: var(--z-badge-font-weight);
  line-height: 1.2;
  color: var(--z-badge-color);
  text-align: center;
  background: var(--z-badge-background);
  border: var(--z-badge-border-width) solid var(--z-background-2);
  border-radius: var(--z-radius-max);

  &--fixed {
    position: absolute;
    transform-origin: 100%;
  }

  &--top-left {
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
  }

  &--top-right {
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }

  &--bottom-left {
    bottom: 0;
    left: 0;
    transform: translate(-50%, 50%);
  }

  &--bottom-right {
    right: 0;
    bottom: 0;
    transform: translate(50%, 50%);
  }

  &--dot {
    width: var(--z-badge-dot-size);
    min-width: 0;
    height: var(--z-badge-dot-size);
    padding: 0;
    background: var(--z-badge-dot-color);
    border: none;
    border-radius: 100%;
  }

  &__wrapper {
    position: relative;
    display: inline-block;
  }
}
</style>
