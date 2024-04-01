<template>
  <view :class="[bem({ square: parent.props.square })]" :style="rootStyle">
    <view :class="classes" :style="contentStyle" @click="onClick">
      <template v-if="instance.slots.default">
        <slot></slot>
      </template>
      <template v-else>
        <template v-if="instance.slots.icon">
          <z-badge :dot="props.dot" :content="props.badge" v-bind="badgeProps">
            <slot name="icon"></slot>
          </z-badge>
        </template>
        <template v-else-if="props.icon">
          <z-icon
            :dot="props.dot"
            :name="props.icon"
            :size="parent.props.iconSize"
            :badge="props.badge"
            :custom-style="iconStyle"
            :color="props.iconColor"
            :badge-props="props.badgeProps"
            :class-prefix="props.iconPrefix"
          />
        </template>
      </template>
      <template v-if="instance.slots.text">
        <slot name="text"></slot>
      </template>
      <template v-else-if="props.text">
        <text :class="bem('text')">{{ props.text }}</text>
      </template>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { computed, getCurrentInstance } from 'vue'
import {
  BORDER,
  addUnit,
  numericProp,
  createNamespace,
  useParent,
  useComponentName
} from '../../libs/utils'
import zIcon from '../z-icon/z-icon.vue'
import zBadge from '../z-badge/z-badge.vue'

const [name, bem] = createNamespace('grid-item')
useComponentName(name)

const instance = getCurrentInstance()!

const props = defineProps({
  dot: Boolean,
  text: String,
  icon: String,
  badge: numericProp,
  iconColor: String,
  iconPrefix: String,
  badgeProps: Object
})

const emit = defineEmits(['click'])

// @ts-ignore
const { parent, index } = useParent('z-grid')

const classes = computed(() => {
  const { center, border, square, gutter, reverse, direction, clickable } =
    parent.props
  return [
    bem('content', [
      direction,
      {
        center,
        square,
        reverse,
        clickable,
        surround: border && gutter
      }
    ]),
    { [BORDER]: border }
  ]
})

const rootStyle = computed(() => {
  const { square, gutter, columnNum } = parent.props
  const percent = `${100 / +columnNum}%`
  const style: any = {
    flexBasis: percent
  }

  if (square) {
    style.paddingTop = percent
  } else if (gutter) {
    const gutterValue = addUnit(gutter)
    style.paddingRight = gutterValue

    if (index.value >= +columnNum) {
      style.marginTop = gutterValue
    }
  }

  return style
})

const contentStyle = computed(() => {
  const { square, gutter } = parent.props

  if (square && gutter) {
    const gutterValue = addUnit(gutter)
    return {
      right: gutterValue,
      bottom: gutterValue,
      height: 'auto'
    }
  }
})

const onClick = () => {
  emit('click')
}

const iconStyle = computed(() => {
  const styles = {
    'font-size': 'var(--z-grid-item-icon-size)'
  }
  return { ...styles }
})
</script>
<script lang="ts">
export default {
  name: 'ZGridItem',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-grid-item {
  position: relative;
  box-sizing: border-box;

  &--square {
    height: 0;
  }

  &__text {
    margin-top: var(--z-padding-xs);
    font-size: var(--z-grid-item-text-font-size);
    line-height: 1.5;
    color: var(--z-grid-item-text-color);
    word-break: break-all;
  }

  &__content {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: var(--z-grid-item-content-padding);
    background: var(--z-grid-item-content-background);

    &::after {
      z-index: 1;
      border-width: 0 var(--z-border-width) var(--z-border-width) 0;
    }

    &--square {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }

    &--center {
      align-items: center;
      justify-content: center;
    }

    &--horizontal {
      flex-direction: row;

      .z-grid-item__text {
        margin: 0 0 0 var(--z-padding-xs);
      }
    }

    &--reverse {
      flex-direction: column-reverse;

      .z-grid-item__text {
        margin: 0 0 var(--z-padding-xs);
      }
    }

    &--surround {
      &::after {
        border-width: var(--z-border-width);
      }
    }

    &--clickable {
      cursor: pointer;

      &:active {
        background-color: var(--z-grid-item-content-active-color);
      }
    }
  }
}

.z-grid-item--horizontal.z-grid-item--reverse {
  flex-direction: row-reverse;

  .z-grid-item__text {
    margin: 0 var(--z-padding-xs) 0 0;
  }
}
</style>
