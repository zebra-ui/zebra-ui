<template>
  <view :class="bem([props.imageShape])" :style="getSizeStyle(props.imageSize)">
    <z-icon name="image" :custom-style="iconStyle" />
  </view>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import {
  numericProp,
  getSizeStyle,
  makeStringProp,
  createNamespace,
  useComponentName
} from '../../libs/utils'
type SkeletonImageShape = 'square' | 'round'

const props = defineProps({
  imageSize: numericProp,
  imageShape: makeStringProp<SkeletonImageShape>('square')
})

const [name, bem] = createNamespace('skeleton-image')
useComponentName(name)

const iconStyle = computed(() => {
  const styles = {
    width: `calc(var(--z-skeleton-image-size) / 2)`,
    height: `calc(var(--z-skeleton-image-size) / 2)`,
    fontSize: `calc(var(--z-skeleton-image-size) / 2)`,
    color: `var(--z-gray-5)`
  }
  return styles
})
</script>
<script lang="ts">
export default {
  name: 'ZSkeletonImage',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-skeleton {
  &-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--z-skeleton-image-size);
    height: var(--z-skeleton-image-size);
    background: var(--z-active-color);

    &--round {
      border-radius: var(--z-skeleton-image-radius);
    }
  }
}
</style>
