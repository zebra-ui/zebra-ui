<template>
  <view
    :class="bem([{ round: props.round }])"
    :style="{ width: props.rowWidth }"
  />
</template>
<script lang="ts" setup>
import {
  createNamespace,
  numericProp,
  useComponentName
} from '../../libs/utils'
const props = defineProps({
  round: Boolean,
  rowWidth: {
    type: numericProp,
    default: '100%'
  }
})
const [name, bem] = createNamespace('skeleton-paragraph')
useComponentName(name)
</script>
<script lang="ts">
export default {
  name: 'ZSkeletonParagraph',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-skeleton {
  &-paragraph {
    height: var(--z-skeleton-paragraph-height);
    background: var(--z-skeleton-paragraph-background);

    &--round {
      border-radius: var(--z-radius-max);
    }

    &:not(:first-child) {
      margin-top: var(--z-skeleton-paragraph-margin-top);
    }
  }
}
</style>
