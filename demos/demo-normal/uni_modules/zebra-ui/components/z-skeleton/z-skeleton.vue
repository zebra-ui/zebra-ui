<template>
  <template v-if="!props.loading">
    <slot></slot>
  </template>
  <view v-else :class="bem({ animate: props.animate, round: props.round })">
    <template v-if="instance.slots.template">
      <slot name="template"></slot>
    </template>
    <template v-else>
      <template v-if="props.avatar">
        <z-skeleton-avatar
          :avatar-shape="props.avatarShape"
          :avatar-size="props.avatarSize"
        />
      </template>
      <view :class="bem('content')">
        <template v-if="props.title">
          <z-skeleton-title
            :round="props.round"
            :title-width="props.titleWidth"
          />
        </template>
        <template v-for="(_, index) in Array(+props.row).fill('')" :key="index">
          <z-skeleton-paragraph
            :round="props.round"
            :row-width="addUnit(getRowWidth(index))"
          />
        </template>
      </view>
    </template>
  </view>
</template>
<script lang="ts" setup>
import { type PropType, getCurrentInstance } from 'vue'
import {
  addUnit,
  truthProp,
  numericProp,
  makeStringProp,
  makeNumericProp,
  createNamespace,
  type Numeric,
  useComponentName
} from '../../libs/utils'
const [name, bem] = createNamespace('skeleton')
useComponentName(name)
const DEFAULT_LAST_ROW_WIDTH = '60%'

const props = defineProps({
  row: makeNumericProp(0),
  round: Boolean,
  title: Boolean,
  titleWidth: numericProp,
  avatar: Boolean,
  avatarSize: numericProp,
  avatarShape: makeStringProp('round'),
  loading: truthProp,
  animate: truthProp,
  rowWidth: {
    type: [Number, String, Array] as PropType<Numeric | Numeric[]>,
    default: '100%'
  }
})

const instance = getCurrentInstance()!

const getRowWidth = (index: number) => {
  const { rowWidth } = props
  // @ts-ignore
  if (rowWidth === '100%' && index === +props.row - 1) {
    return DEFAULT_LAST_ROW_WIDTH
  }

  if (Array.isArray(rowWidth)) {
    return rowWidth[index]
  }

  return rowWidth
}
</script>
<script lang="ts">
export default {
  name: 'ZSkeleton',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-skeleton {
  display: flex;

  &__content {
    width: 100%;
  }

  &--animate {
    animation: z-skeleton-blink var(--z-skeleton-duration) ease-in-out infinite;
  }
}

@keyframes z-skeleton-blink {
  50% {
    opacity: 0.6;
  }
}
</style>
