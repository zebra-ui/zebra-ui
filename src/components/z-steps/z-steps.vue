<template>
  <view :class="bem([props.direction])">
    <view :class="bem('items')">
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts" setup>
import {
  makeStringProp,
  makeNumericProp,
  createNamespace,
  useChildren
} from '../../libs/utils'
const [name, bem] = createNamespace('steps')

type StepsDirection = 'horizontal' | 'vertical'
const props = defineProps({
  active: makeNumericProp(0),
  direction: makeStringProp<StepsDirection>('horizontal'),
  activeIcon: makeStringProp('check-circle-fill'),
  iconPrefix: String,
  finishIcon: String,
  activeColor: String,
  inactiveIcon: String,
  inactiveColor: String
})

const emit = defineEmits(['clickStep'])

const { linkChildren } = useChildren(name)

const onClickStep = (index: number) => emit('clickStep', index)

linkChildren({
  props,
  onClickStep
})
</script>
<script lang="ts">
export default {
  name: 'ZSteps',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-steps {
  overflow: hidden;
  background-color: var(--z-steps-background);

  &--horizontal {
    padding: 20rpx 20rpx 0;

    .z-steps__items {
      position: relative;
      display: flex;
      padding-bottom: 44rpx;
      margin: 0 0 20rpx;
    }
  }

  &--vertical {
    padding: 0 0 0 var(--z-padding-xl);
  }
}
</style>
