<template>
  <view
    :class="
      bem({
        dashed: props.dashed,
        hairline: props.hairline,
        vertical: props.vertical,
        [`content-${props.contentPosition}`]:
          !!instance.slots.default && !props.vertical
      })
    "
    :style="customStyle"
  >
    <template v-if="!props.vertical">
      <slot></slot>
    </template>
  </view>
</template>
<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
import {
  truthProp,
  makeStringProp,
  createNamespace,
  useComponentName
} from '../../libs/utils'
type DividerContentPosition = 'left' | 'center' | 'right'
const [name, bem] = createNamespace('divider')
useComponentName(name)
const props = defineProps({
  dashed: Boolean,
  hairline: truthProp,
  vertical: Boolean,
  contentPosition: makeStringProp<DividerContentPosition>('center'),
  customStyle: Object
})
const instance = getCurrentInstance()!
</script>
<script lang="ts">
export default {
  name: 'ZDivider',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-divider {
  display: flex;
  align-items: center;
  margin: var(--z-divider-margin);
  font-size: var(--z-divider-font-size);
  line-height: var(--z-divider-line-height);
  color: var(--z-divider-text-color);
  border-color: var(--z-divider-border-color);
  border-style: solid;
  border-width: 0;

  &::before,
  &::after {
    box-sizing: border-box;
    display: block;
    flex: 1;
    height: 2rpx;
    border-color: inherit;
    border-style: inherit;
    border-width: var(--z-border-width) 0 0;
  }

  &::before {
    content: '';
  }

  &--hairline {
    &::before,
    &::after {
      transform: scaleY(0.5);
    }
  }

  &--dashed {
    border-style: dashed;
  }

  &--content-center,
  &--content-left,
  &--content-right {
    &::before {
      margin-right: var(--z-divider-content-padding);
    }

    &::after {
      margin-left: var(--z-divider-content-padding);
      content: '';
    }
  }

  &--content-left {
    &::before {
      max-width: var(--z-divider-content-left-width);
    }
  }

  &--content-right {
    &::after {
      max-width: var(--z-divider-content-right-width);
    }
  }

  &--vertical {
    display: inline-block;
    width: var(--z-border-width);
    height: 1em;
    margin: var(--z-divider-vertical-margin);
    vertical-align: middle;

    &::before {
      height: 100%;
      border-width: 0 0 0 var(--z-border-width);
    }

    &::after {
      display: none;
    }

    &.z-divider--hairline {
      &::before {
        transform: scaleX(0.5);
      }
    }
  }
}
</style>
