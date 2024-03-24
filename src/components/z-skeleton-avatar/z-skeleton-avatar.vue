<template>
  <view
    :class="bem([props.avatarShape])"
    :style="getSizeStyle(props.avatarSize)"
  />
</template>
<script lang="ts" setup>
import {
  numericProp,
  getSizeStyle,
  makeStringProp,
  createNamespace,
  useComponentName
} from '../../libs/utils'

type SkeletonAvatarShape = 'square' | 'round'
const [name, bem] = createNamespace('skeleton-avatar')
useComponentName(name)
const props = defineProps({
  avatarSize: numericProp,
  avatarShape: makeStringProp<SkeletonAvatarShape>('round')
})
</script>
<script lang="ts">
export default {
  name: 'ZSkeletonAvatar',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-skeleton {
  &-avatar {
    flex-shrink: 0;
    width: var(--z-skeleton-avatar-size);
    height: var(--z-skeleton-avatar-size);
    margin-right: var(--z-padding-md);
    background: var(--z-skeleton-avatar-background);

    &--round {
      border-radius: var(--z-radius-max);
    }
  }

  &-avatar + &__content {
    padding-top: var(--z-padding-xs);
  }
}
</style>
