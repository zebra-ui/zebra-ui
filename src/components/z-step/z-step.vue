<template>
  <view
    :class="[
      BORDER,
      bem([parentProps.direction, { [getStatus()]: getStatus() }])
    ]"
  >
    <view
      :class="bem('title', { active: isActive() })"
      :style="titleStyle"
      @click="onClickStep"
    >
      <slot></slot>
    </view>
    <view :class="bem('circle-container')" @click="onClickStep">
      <template v-if="isActive()">
        <template v-if="instance.slots['active-icon']">
          <slot name="active-icon"></slot>
        </template>
        <template v-else>
          <z-icon
            :custom-style="iconStyle"
            :name="parentProps.activeIcon"
            :class-prefix="parentProps.iconPrefix"
          />
        </template>
      </template>
      <template
        v-else-if="
          getStatus() === 'finish' &&
          (parentProps.finishIcon || instance.slots['finish-icon'])
        "
      >
        <template v-if="instance.slots['finish-icon']">
          <slot name="finish-icon"></slot>
        </template>
        <template v-else>
          <z-icon
            :custom-style="iconStyle"
            :name="parentProps.finishIcon"
            :class-prefix="parentProps.iconPrefix"
          />
        </template>
      </template>
      <template v-else-if="instance.slots['inactive-icon']">
        <slot name="inactive-icon"></slot>
      </template>
      <template v-else-if="parentProps.inactiveIcon">
        <z-icon
          :custom-style="iconStyleNormal"
          :name="parentProps.inactiveIcon"
          :class-prefix="parentProps.iconPrefix"
        />
      </template>
      <template v-else>
        <view :class="bem('circle')" :style="lineStyle" />
      </template>
    </view>
    <view :class="bem('line')" :style="lineStyle" />
  </view>
</template>
<script lang="ts" setup>
import { computed, getCurrentInstance } from 'vue'

// Utils
import {
  BORDER,
  createNamespace,
  useComponentName,
  useParent
} from '../../libs/utils'
const [name, bem] = createNamespace('step')
useComponentName(name)
// @ts-ignore
const { parent, index } = useParent('z-steps')

const parentProps = parent.props

const instance = getCurrentInstance()!

const getStatus = () => {
  const active = +parentProps.active
  if (index.value < active) {
    return 'finish'
  }
  return index.value === active ? 'process' : 'waiting'
}

const isActive = () => getStatus() === 'process'

const lineStyle = computed(() => ({
  background:
    getStatus() === 'finish'
      ? parentProps.activeColor
      : parentProps.inactiveColor
}))

const titleStyle = computed(() => {
  if (isActive()) {
    return { color: parentProps.activeColor }
  }
  if (getStatus() === 'waiting') {
    return { color: parentProps.inactiveColor }
  }
})

const iconStyle = computed(() => {
  const styles = {
    transition: 'color var(--z-duration-base)',
    color: 'var(--z-step-active-color)'
  }
  if (parentProps.activeColor) {
    styles['color'] = parentProps.activeColor
  }
  return styles
})
const iconStyleNormal = computed(() => {
  const styles = {
    transition: 'color var(--z-duration-base)'
  }
  return styles
})

const onClickStep = () => parent.onClickStep(index.value)
</script>
<script lang="ts">
export default {
  name: 'ZStep',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-step {
  position: relative;
  flex: 1;
  font-size: var(--z-step-font-size);
  color: var(--z-step-text-color);

  &__circle {
    display: block;
    width: var(--z-step-circle-size);
    height: var(--z-step-circle-size);
    background-color: var(--z-step-circle-color);
    border-radius: 50%;
  }

  &__line {
    position: absolute;
    background-color: var(--z-step-line-color);
    transition: background-color var(--z-duration-base);
  }

  &--horizontal {
    float: left;

    &:first-child {
      .z-step__title {
        margin-left: 0;
        transform: none;
      }
    }

    &:last-child:not(:first-child) {
      position: absolute;
      right: 2rpx;
      width: auto;

      .z-step__title {
        margin-left: 0;
        transform: none;
      }

      .z-step__circle-container {
        right: -18rpx;
        left: auto;
      }
    }

    .z-step__circle-container {
      position: absolute;
      top: 60rpx;
      left: calc(var(--z-padding-xs) * -1);
      z-index: 1;
      padding: 0 var(--z-padding-xs);
      background-color: var(--z-background-2);
      transform: translateY(-50%);
    }

    .z-step__title {
      display: inline-block;
      margin-left: 6rpx;
      font-size: var(--z-step-horizontal-title-font-size);
      transform: translateX(-50%);
    }

    .z-step__line {
      top: 60rpx;
      left: 0;
      width: 100%;
      height: 2rpx;
    }

    .z-step__icon {
      display: block;
      font-size: var(--z-step-icon-size);
    }

    .z-step--process {
      color: var(--z-step-process-text-color);
    }
  }

  &--vertical {
    display: block;
    float: none;
    padding: 20rpx 20rpx 20rpx 0;
    line-height: var(--z-line-height-sm);

    &:not(:last-child)::after {
      border-bottom-width: 2rpx;
    }

    .z-step__circle-container {
      position: absolute;
      top: 38rpx;
      left: -30rpx;
      z-index: 1;
      font-size: var(--z-step-icon-size);
      line-height: 1;
      transform: translate(-50%, -50%);
    }

    .z-step__line {
      top: 32rpx;
      left: -30rpx;
      width: 2rpx;
      height: 100%;
    }
  }

  &:last-child {
    .z-step__line {
      width: 0;
    }
  }

  &--finish {
    color: var(--z-step-finish-text-color);

    .z-step__circle,
    .z-step__line {
      background-color: var(--z-step-finish-line-color);
    }
  }

  // &__icon,
  &__title {
    transition: color var(--z-duration-base);

    &--active,
    &--finish {
      color: var(--z-step-active-color);
    }
  }
}
</style>
