<template>
  <view
    :class="bem([{ round: props.round }])"
    :style="{ width: addUnit(props.titleWidth) }"
  />
</template>
<script lang="ts" setup>
import {
  createNamespace,
  numericProp,
  addUnit,
  useComponentName
} from '../../libs/utils'
const [name, bem] = createNamespace('skeleton-title')
useComponentName(name)
const props = defineProps({
  round: Boolean,
  titleWidth: numericProp
})
</script>
<script lang="ts">
export default {
  name: 'ZSkeletonTitle',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-skeleton {
  &-title {
    width: var(--z-skeleton-title-width);
    height: var(--z-skeleton-paragraph-height);
    margin: 0;
    background: var(--z-skeleton-paragraph-background);

    &--round {
      border-radius: var(--z-radius-max);
    }
  }

  &-title + &-paragraph {
    margin-top: 40rpx;
  }
}
</style>
