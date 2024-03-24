<template>
  <view
    :class="bem({ round: props.round, block: props.block })"
    :style="style"
    @click="onClick"
  >
    <image
      :class="bem('content')"
      :src="props.src"
      :mode="props.mode"
      :show-menu-by-longpress="props.showMenuByLongpress"
      @load="onLoadImage"
      @error="onErrorImage"
    />
    <view v-if="loading && props.showLoading" :class="bem('loading')">
      <template v-if="instance.slots.loading">
        <slot name="loading"></slot>
      </template>
      <template v-else>
        <view :class="bem('loading-icon')">
          <z-icon
            :name="props.loadingIcon"
            :size="props.iconSize"
            :class-prefix="props.iconPrefix"
          />
        </view>
      </template>
    </view>
    <view v-if="error && props.showError" :class="bem('error')">
      <template v-if="instance.slots.error">
        <slot name="error"></slot>
      </template>
      <template v-else>
        <view :class="bem('error-icon')">
          <z-icon
            :name="props.errorIcon"
            :size="props.iconSize"
            :class-prefix="props.iconPrefix"
          />
        </view>
      </template>
    </view>
    <slot></slot>
  </view>
</template>
<script lang="ts" setup>
import {
  ref,
  watch,
  computed,
  nextTick,
  onMounted,
  getCurrentInstance,
  type PropType
} from 'vue'
import {
  isDef,
  addUnit,
  truthProp,
  numericProp,
  makeStringProp,
  createNamespace,
  useComponentName
} from '../../libs/utils'

import type { ImageFit, ImagePosition } from './types'

const [name, bem] = createNamespace('image')
useComponentName(name)

const instance = getCurrentInstance()!

const props = defineProps({
  src: String,
  alt: String,
  mode: String as PropType<ImageFit>,
  position: String as PropType<ImagePosition>,
  round: Boolean,
  block: Boolean,
  width: numericProp,
  height: numericProp,
  radius: numericProp,
  iconSize: {
    type: [Number, String],
    default: '64rpx'
  },
  showError: truthProp,
  errorIcon: makeStringProp('error-fill'),
  iconPrefix: String,
  showLoading: truthProp,
  loadingIcon: makeStringProp('image-fill'),
  showMenuByLongpress: Boolean,
  customStyle: Object
})

const emit = defineEmits(['load', 'error', 'click'])

const error = ref(false)
const loading = ref(true)

const style = computed(() => {
  const style: any = {
    width: addUnit(props.width),
    height: addUnit(props.height)
  }

  if (isDef(props.radius)) {
    style.overflow = 'hidden'
    style.borderRadius = addUnit(props.radius)
  }

  return { ...style, ...props.customStyle }
})

watch(
  () => props.src,
  () => {
    error.value = false
    loading.value = true
  }
)

const onLoadImage = (event: any) => {
  if (loading.value && props.src) {
    loading.value = false
    emit('load', event)
  }
}

const triggerLoad = () => {
  onLoadImage(null)
}

const onErrorImage = (event?: any) => {
  error.value = true
  loading.value = false
  emit('error', event)
}

const onClick = () => {
  emit('click')
}

onMounted(() => {
  nextTick(() => {
    triggerLoad()
  })
})
</script>
<script lang="ts">
export default {
  name: 'ZImage',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-image {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;

  &--round {
    overflow: hidden;
    border-radius: var(--z-radius-max);

    .z-image__img {
      border-radius: inherit;
    }
  }

  &--block {
    display: block;
  }

  &__content {
    width: 100%;
    height: 100%;
  }

  &__img,
  &__error,
  &__loading {
    display: block;
    width: 100%;
    height: 100%;
  }

  &__error,
  &__loading {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: var(--z-image-placeholder-font-size);
    color: var(--z-image-placeholder-text-color);
    background: var(--z-image-placeholder-background);
  }

  &__loading-icon {
    font-size: var(--z-image-loading-icon-size);
    color: var(--z-image-loading-icon-color);
  }

  &__error-icon {
    font-size: var(--z-image-error-icon-size);
    color: var(--z-image-error-icon-color);
  }
}
</style>
