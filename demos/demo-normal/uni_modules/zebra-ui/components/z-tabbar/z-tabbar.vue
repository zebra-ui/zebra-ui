<template>
  <template v-if="props.fixed && props.placeholder">
    <view
      :class="bem('placeholder')"
      :style="{
        height: placeholderHeight ? `${placeholderHeight}px` : undefined
      }"
    >
      <view
        class="z-tabbar-rect"
        :style="getZIndexStyle(zIndex)"
        :class="[
          bem({ fixed, float: props.float }),
          {
            [BORDER_TOP_BOTTOM]: border && !props.float,
            'z-safe-area-bottom': enableSafeArea() && !props.float
          }
        ]"
      >
        <slot></slot>
        <view
          v-if="props.background"
          :class="bem('background')"
          :style="backgroundStyle"
        >
          <view
            :class="bem('background--content')"
            :style="backgroundContentStyle"
          ></view>
        </view>
      </view>
    </view>
  </template>
  <template v-else>
    <view
      class="z-tabbar-rect"
      :style="getZIndexStyle(zIndex)"
      :class="[
        bem({ fixed, float: props.float }),
        {
          [BORDER_TOP_BOTTOM]: border && !props.float,
          'z-safe-area-bottom': enableSafeArea() && !props.float
        }
      ]"
    >
      <slot></slot>
      <view
        v-if="props.background"
        :class="bem('background')"
        :style="backgroundStyle"
      >
        <view
          :class="bem('background--content')"
          :style="backgroundContentStyle"
        ></view>
      </view>
    </view>
  </template>
</template>
<script lang="ts" setup>
import {
  ref,
  type PropType,
  computed,
  onMounted,
  getCurrentInstance,
  type CSSProperties
} from 'vue'
import {
  truthProp,
  numericProp,
  getZIndexStyle,
  createNamespace,
  callInterceptor,
  makeNumericProp,
  BORDER_TOP_BOTTOM,
  type Numeric,
  type Interceptor,
  useChildren,
  getRect,
  raf,
  addUnit
} from '../../libs/utils'

const [name, bem] = createNamespace('tabbar')

const instance = getCurrentInstance()

const props = defineProps({
  route: Boolean,
  fixed: truthProp,
  border: truthProp,
  zIndex: numericProp,
  placeholder: Boolean,
  activeColor: String,
  beforeChange: Function as PropType<Interceptor>,
  inactiveColor: String,
  modelValue: makeNumericProp(0),
  safeAreaInsetBottom: {
    type: Boolean as PropType<boolean | null>,
    default: null
  },
  background: Boolean,
  float: Boolean,
  animate: Boolean
})

const emit = defineEmits(['change', 'update:modelValue'])
const activeIndex = ref(0)
const { children, linkChildren } = useChildren(name)
const enableSafeArea = () =>
  props.safeAreaInsetBottom ? props.safeAreaInsetBottom : props.fixed

const placeholderHeight = ref(0)

const itemWidth = ref(0)
const itemTranslateX = ref(0)

const backgroundStyle = computed(() => {
  const styles = {
    width: addUnit(itemWidth.value),
    transform: `translateX(${itemTranslateX.value}px)`,
    'transition-duration': '0.3s'
  }
  return { ...styles }
})

const backgroundContentStyle = computed(() => {
  const styles: CSSProperties = {}
  if (props.float) {
    if (activeIndex.value == 0) {
      styles['border-top-left-radius'] = '50rpx'
      styles['border-bottom-left-radius'] = '50rpx'
    }
    if (activeIndex.value == children.length - 1) {
      styles['border-top-right-radius'] = '50rpx'
      styles['border-bottom-right-radius'] = '50rpx'
    }
  }
  return { ...styles }
})

const getPlaceholderHeight = () => {
  raf(() => {
    getRect(instance, '.z-tabbar-rect').then((res: any) => {
      placeholderHeight.value = res.height
      itemWidth.value = res.width / children.length
    })
  })
}

const setActive = (
  active: Numeric,
  index: Numeric,
  afterChange: () => void
) => {
  callInterceptor(props.beforeChange, {
    args: [active],
    done() {
      // @ts-ignore
      if (props.background) {
        // @ts-ignore
        itemTranslateX.value = itemWidth.value * index.value
      }
      // @ts-ignore
      activeIndex.value = index.value
      emit('update:modelValue', active)
      emit('change', active)
      afterChange()
    }
  })
}

linkChildren({ props, setActive })

onMounted(() => {
  getPlaceholderHeight()
})
</script>
<script lang="ts">
export default {
  name: 'ZTabbar',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-tabbar {
  position: relative;
  z-index: var(--z-tabbar-z-index);
  box-sizing: content-box;
  display: flex;
  width: 100%;
  height: var(--z-tabbar-height);
  background: var(--z-tabbar-background);

  &--fixed {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    height: 100%;
    padding: 8rpx 10rpx;

    &--content {
      width: 100%;
      height: 100%;
      background-color: var(--z-tabbar-item-active-background);
      border-radius: 10rpx;
    }
  }

  &--float {
    width: 100%;
    border-radius: 50rpx;
    box-shadow:
      0rpx 8rpx 10rpx -4rpx rgb(0 0 0 / 8%),
      0rpx 16rpx 24rpx 2rpx rgb(0 0 0 / 4%),
      0rpx 6rpx 30rpx 6rpx rgb(0 0 0 / 5%);
  }
}

.z-tabbar--fixed.z-tabbar--float {
  bottom: 50rpx;
  left: 50%;
  width: 90%;
  border-radius: 50rpx;
  box-shadow:
    0rpx 8rpx 10rpx -4rpx rgb(0 0 0 / 8%),
    0rpx 16rpx 24rpx 2rpx rgb(0 0 0 / 4%),
    0rpx 6rpx 30rpx 6rpx rgb(0 0 0 / 5%);
  transform: translateX(-50%);
}
</style>
