<template>
  <view
    v-if="props.fixed && props.placeholder"
    :class="bem('placeholder')"
    :style="placeholderStyle"
  >
  </view>
  <view
    :style="getZIndexStyle(zIndex)"
    :class="[
      bem({ fixed }),
      { [BORDER_BOTTOM]: border, 'z-safe-area-top': props.safeAreaInsetTop }
    ]"
  >
    <view
      :class="bem('statusbar')"
      v-if="props.fixed"
      :style="statusBarStyle"
    ></view>
    <view :class="bem('content')">
      <template v-if="props.leftArrow || props.leftText || instance.slots.left">
        <view
          :class="[
            bem('left', { disabled: props.leftDisabled }),
            props.clickable && !props.leftDisabled ? HAPTICS_FEEDBACK : ''
          ]"
          @click="onClickLeft"
        >
          <template v-if="instance.slots.left">
            <slot name="left"></slot>
          </template>
          <template v-else>
            <view :class="bem('arrow')">
              <z-icon
                v-if="props.leftArrow"
                color="var(--z-nav-bar-icon-color)"
                size="var(--z-nav-bar-arrow-size)"
                :custom-style="{ 'font-weight': 'bold' }"
                name="left-big"
              />
            </view>
            <text v-if="props.leftText" :class="bem('text')">{{
              props.leftText
            }}</text>
          </template>
        </view>
      </template>
      <view :class="[bem('title'), 'z-ellipsis']">
        <template v-if="instance.slots.title">
          <slot name="title"></slot>
        </template>
        <template v-else>
          {{ props.title }}
        </template>
      </view>
      <template v-if="props.rightText || instance.slots.right">
        <view
          :class="[
            bem('right', { disabled: props.rightDisabled }),
            props.clickable && !props.rightDisabled ? HAPTICS_FEEDBACK : ''
          ]"
          @click="onClickRight"
        >
          <template v-if="instance.slots.right">
            <slot name="right"></slot>
          </template>
          <template v-else>
            <text :class="bem('text')">{{ props.rightText }}</text>
          </template>
        </view>
      </template>
    </view>
  </view>
</template>

<script setup lang="ts">
import { getCurrentInstance, computed, onMounted } from 'vue'
import {
  truthProp,
  numericProp,
  BORDER_BOTTOM,
  getZIndexStyle,
  createNamespace,
  HAPTICS_FEEDBACK,
  getRect,
  raf,
  useComponentName
} from '../../libs/utils'
import zIcon from '../z-icon/z-icon.vue'

const [name, bem] = createNamespace('nav-bar')
useComponentName(name)
const instance = getCurrentInstance()!
const props = defineProps({
  title: String,
  fixed: Boolean,
  zIndex: numericProp,
  border: Boolean,
  leftText: String,
  rightText: String,
  leftDisabled: Boolean,
  rightDisabled: Boolean,
  leftArrow: Boolean,
  placeholder: Boolean,
  safeAreaInsetTop: Boolean,
  clickable: truthProp,
  autoBack: truthProp
})

const emit = defineEmits(['clickLeft', 'clickRight'])

const statusBarStyle = computed(() => {
  return {
    height: uni.getSystemInfoSync().statusBarHeight + 'px'
  }
})

const placeholderStyle = computed(() => {
  return {
    height: `calc(var(--z-nav-bar-height) + ${uni.getSystemInfoSync().statusBarHeight}px)`
  }
})

const onClickLeft = (event: any) => {
  if (!props.leftDisabled) {
    if (props.autoBack) {
      uni.navigateBack({
        delta: 1
      })
    }
    emit('clickLeft', event)
  }
}
const onClickRight = (event: any) => {
  if (!props.rightDisabled) {
    emit('clickRight', event)
  }
}

const provideNavbarHeight = () => {
  raf(() => {
    getRect(instance, '.z-nav-bar__content').then((res: any) => {
      uni.$emit('zNavbarHeight', res?.height || 0)
    })
  })
}

onMounted(() => {
  provideNavbarHeight()
})
</script>

<style lang="scss" scoped>
.z-nav-bar__placeholder {
  width: 100%;
}

.z-nav-bar__statusbar {
  width: 100%;
}

.z-nav-bar {
  position: relative;
  z-index: var(--z-nav-bar-z-index);
  line-height: var(--z-line-height-lg);
  text-align: center;
  user-select: none;
  background: var(--z-nav-bar-background);

  &--fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  &--safe-area-inset-top {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
  }

  &__content {
    position: relative;
    display: flex;
    align-items: center;
    height: var(--z-nav-bar-height);
  }

  &__arrow {
    margin-right: var(--z-padding-base);
    font-size: var(--z-nav-bar-arrow-size);
  }

  &__title {
    max-width: 60%;
    margin: 0 auto;
    font-size: var(--z-nav-bar-title-font-size);
    font-weight: var(--z-font-bold);
    color: var(--z-nav-bar-title-text-color);
  }

  &__left,
  &__right {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 0 var(--z-padding-md);
    font-size: var(--z-font-size-md);

    &--disabled {
      cursor: not-allowed;
      opacity: var(--z-nav-bar-disabled-opacity);
    }
  }

  &__left {
    left: 0;
  }

  &__right {
    right: 0;
  }

  &__text {
    color: var(--z-nav-bar-text-color);
  }
}
</style>
