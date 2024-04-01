<template>
  <z-badge
    :dot="dot"
    :content="badge"
    :max="badgeProps?.max"
    :color="badgeProps?.color"
    :offset="badgeProps?.offset"
    :show-zero="badgeProps?.showZero"
    :position="badgeProps?.position"
    :wrapper-style="badgeWrapperStyle"
  >
    <view
      :class="[
        classPrefix,
        isImageIcon ? '' : `${classPrefix}-${props.name}`,
        customClass
      ]"
      :style="{
        color,
        fontSize: addUnit(size),
        ...customStyle
      }"
      @click="onClick"
      @touchstart.passive="onTouchstart"
    >
      <slot></slot>
      <image v-if="isImageIcon" :class="bem('image')" :src="props.name" />
    </view>
  </z-badge>
</template>

<script lang="ts" setup>
import { inject, computed, type PropType, type ExtractPropTypes } from 'vue'
import {
  addUnit,
  numericProp,
  makeStringProp,
  createNamespace,
  Numeric,
  truthProp,
  useComponentName
} from '../../libs/utils'
import zBadge from '../z-badge/z-badge.vue'

const [componentName, bem] = createNamespace('icon')
useComponentName(componentName)

const emit = defineEmits(['click', 'touchstart'])

const isImage = (name?: string) => name?.includes('/')

type BadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

const badgeProp = {
  dot: Boolean,
  max: numericProp,
  color: String,
  offset: Array as unknown as PropType<[Numeric, Numeric]>,
  content: numericProp,
  showZero: truthProp,
  position: makeStringProp<BadgePosition>('top-right')
}

type BadgeProps = ExtractPropTypes<typeof badgeProp>

const props = defineProps({
  dot: Boolean,
  name: String,
  size: numericProp,
  badge: numericProp,
  color: String,
  badgeProps: Object as PropType<Partial<BadgeProps>>,
  classPrefix: String,
  customStyle: Object,
  customClass: [Object, String],
  badgeWrapperStyle: Object
})

const config: any = inject('z-config-provider', null)

const classPrefix = computed(
  () => props.classPrefix || config?.iconPrefix || bem()
)

const isImageIcon = computed(() => {
  return isImage(props.name)
})

const onClick = (event: any) => {
  emit('click', event)
}

const onTouchstart = () => {
  emit('touchstart')
}
</script>
<script lang="ts">
export default {
  name: 'ZIcon',
  options: {
    virtualHost: true
  }
}
</script>

<style lang="scss" scoped>
@import '../z-style/iconfont.css';

.z-icon {
  &__image {
    width: 1em;
    height: 1em;
    object-fit: contain;
  }
}
</style>
