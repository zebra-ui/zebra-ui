<template>
  <view :class="bem([props.direction])" :style="rootStyle">
    <view :class="bem('box', { animate: props.isStart })">
      <template v-if="Array.isArray(newFigureArr)">
        <template v-for="(item, index) in newFigureArr" :key="index">
          <view :class="bem('item')" :style="itemStyle">
            {{ item }}
          </view>
        </template>
      </template>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import {
  createNamespace,
  makeNumberProp,
  makeArrayProp,
  makeStringProp,
  addUnit,
  useComponentName
} from '../../libs/utils'
import { RollingTextDirection } from './types'

const props = defineProps({
  figureArr: makeArrayProp(),
  delay: Number,
  duration: makeNumberProp(2),
  isStart: Boolean,
  direction: makeStringProp<RollingTextDirection>('down'),
  height: makeNumberProp(40)
})

const [name, bem] = createNamespace('rolling-text-item')
useComponentName(name)

const newFigureArr = computed(() =>
  // @ts-ignore
  props.direction === 'down'
    ? // @ts-ignore
      props.figureArr.slice().reverse()
    : props.figureArr
)
const translatePx = computed(() => {
  // @ts-ignore
  const totalHeight = props.height * (props.figureArr.length - 1)
  return `-${totalHeight}px`
})
const itemStyle = computed(() => ({
  lineHeight: addUnit(props.height)
}))
const rootStyle = computed(() => ({
  height: addUnit(props.height),
  '--z-translate': translatePx.value,
  '--z-duration': props.duration + 's',
  '--z-delay': props.delay + 's'
}))
</script>
<script lang="ts">
export default {
  name: 'ZRollingTextItem',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-rolling-text-item {
  width: var(--z-rolling-text-item-width);
  margin-right: var(--z-rolling-text-gap);
  overflow: hidden;
  background: var(--z-rolling-text-background);
  border-radius: var(--z-rolling-text-item-border-radius);

  &:last-child {
    margin-right: 0;
  }

  &__box {
    overflow: hidden;

    &--animate {
      animation: z-up var(--z-duration) ease-in-out var(--z-delay);
      animation-iteration-count: 1;
      animation-fill-mode: both;
    }
  }

  &__item {
    text-align: center;
  }
}

.z-rolling-text-item--down {
  .z-rolling-text-item__box {
    transform: translateY(var(--z-translate));

    &--animate {
      animation-name: z-down;
    }
  }
}

@keyframes z-down {
  0% {
    transform: translateY(var(--z-translate));
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes z-up {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(var(--z-translate));
  }
}
</style>
