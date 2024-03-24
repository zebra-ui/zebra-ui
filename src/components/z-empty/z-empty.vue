<template>
  <view :class="bem()">
    <view :class="bem('image')" :style="getSizeStyle(props.imageSize)">
      <template v-if="instance.slots.image">
        <slot name="image"></slot>
      </template>
      <template v-else>
        <image
          :src="PRESET_IMAGES[props.image] || props.image"
          mode="aspectFill"
        ></image>
      </template>
    </view>
    <template v-if="instance.slots.description">
      <slot name="description"></slot>
    </template>
    <template v-else>
      <text :class="bem('description')">{{ props.description }}</text>
    </template>
    <template v-if="instance.slots.default">
      <view :class="bem('bottom')">
        <slot></slot>
      </view>
    </template>
  </view>
</template>
<script lang="ts" setup>
import { type PropType, getCurrentInstance, computed } from 'vue'
import {
  Numeric,
  getSizeStyle,
  makeStringProp,
  createNamespace,
  useComponentName
} from '../../libs/utils'
const [name, bem] = createNamespace('empty')
useComponentName(name)
const instance = getCurrentInstance()!
const props = defineProps({
  image: makeStringProp('default'),
  imageSize: [Number, String, Array] as PropType<Numeric | [Numeric, Numeric]>,
  description: String
})
const PRESET_IMAGES = computed(() => {
  return {
    error: 'https://cdn.zebraui.com/zebra-ui/error-default.png',
    search: 'https://cdn.zebraui.com/zebra-ui/empty-search.png',
    network: 'https://cdn.zebraui.com/zebra-ui/error-network.png',
    default: 'https://cdn.zebraui.com/zebra-ui/empty-default.png'
  } as any
})
</script>
<script lang="ts">
export default {
  name: 'ZEmpty',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-empty {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--z-empty-padding);

  &__image {
    width: var(--z-empty-image-size);
    height: var(--z-empty-image-size);

    image {
      width: 100%;
      height: 100%;
    }
  }

  &__description {
    padding: var(--z-empty-description-padding);
    margin-top: var(--z-empty-description-margin-top);
    font-size: var(--z-empty-description-font-size);
    line-height: var(--z-empty-description-line-height);
    color: var(--z-empty-description-color);
  }

  &__bottom {
    margin-top: var(--z-empty-bottom-margin-top);
  }
}

.z-theme-dark .z-empty {
  opacity: 0.5;
}
</style>
