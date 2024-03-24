<template>
  <view :class="bem()">
    <view
      class="z-dropdown-menu-rect"
      :style="barStyle"
      :class="bem('bar', { opened: opened.value, scrollable: scrollable })"
    >
      <template v-for="(item, index) in children" :key="index">
        <view
          :id="`${id}-${index}`"
          :class="[
            bem('item', {
              disabled: item.disabled,
              grow: scrollable
            }),
            { [HAPTICS_FEEDBACK]: !item.disabled }
          ]"
          @click="
            () => {
              if (!item.disabled) {
                toggleItem(index)
              }
            }
          "
        >
          <view
            :class="[
              bem('title', {
                down: item.state.showPopup === (props.direction === 'down'),
                active: item.state.showPopup
              }),
              item.titleClass
            ]"
            :style="{ color: item.state.showPopup ? props.activeColor : '' }"
          >
            <view class="z-ellipsis">
              <template v-if="instance.slots.title">
                <slot name="title" :item="item"></slot>
              </template>
              <template v-else-if="item.props.title">
                {{ item.props.title }}
              </template>
              <template v-else>
                {{ match(item) }}
              </template>
            </view>
          </view>
        </view>
      </template>
    </view>
    <slot></slot>
  </view>
</template>
<script lang="ts" setup>
import { ref, computed, getCurrentInstance } from 'vue'
import {
  isDef,
  truthProp,
  numericProp,
  makeStringProp,
  makeNumericProp,
  createNamespace,
  HAPTICS_FEEDBACK,
  useId,
  useExpose,
  getRect,
  useChildren
} from '../../libs/utils'
import type { DropdownMenuDirection } from './types'
const [name, bem] = createNamespace('dropdown-menu')
const props = defineProps({
  overlay: truthProp,
  zIndex: numericProp,
  duration: makeNumericProp(0.2),
  direction: makeStringProp<DropdownMenuDirection>('down'),
  activeColor: String,
  autoLocate: Boolean,
  closeOnClickOutside: truthProp,
  closeOnClickOverlay: truthProp,
  swipeThreshold: numericProp
})
const id = useId()
const offset = ref(0)
const instance = getCurrentInstance()!

const { children, linkChildren } = useChildren(name)

const opened = computed(() =>
  children.some((item: any) => item.state.showWrapper)
)

const scrollable = computed(
  () => props.swipeThreshold && children.length > +props.swipeThreshold
)

const barStyle = computed<any | undefined>(() => {
  if (opened.value && isDef(props.zIndex)) {
    return {
      zIndex: +props.zIndex + 1
    }
  }
})

const close = () => {
  children.forEach((item: any) => {
    item.toggle(false)
  })
}

const windowHeight = computed(() => {
  return uni.getSystemInfoSync().windowHeight
})

const itemWidth = ref(0)
const itemLeft = ref(0)

const updateOffset = () => {
  getRect(instance, '.z-dropdown-menu-rect').then((res: any) => {
    const rect = res
    itemWidth.value = res?.width
    itemLeft.value = res?.left
    // @ts-ignore
    if (props.direction === 'down') {
      offset.value = rect.bottom
    } else {
      offset.value = windowHeight.value - rect.top
    }
  })
}

const onScroll = () => {
  if (opened.value) {
    updateOffset()
  }
}

const toggleItem = (active: number) => {
  children.forEach((item: any, index: number) => {
    if (index === active) {
      item.toggle()
    } else if (item.state.showPopup) {
      item.toggle(false, { immediate: true })
    }
  })
}

const match = (item: any) => {
  const match = item.props.options.find(
    (option: any) => option.value === item.props.modelValue
  )
  return match ? match.text : ''
}

useExpose({ close, onScroll })
defineExpose({ close, onScroll })
linkChildren({ id, props, offset, updateOffset, itemWidth, itemLeft })
</script>
<script lang="ts">
export default {
  name: 'ZDropdownMenu',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-dropdown-menu {
  user-select: none;

  &__bar {
    position: relative;
    display: flex;
    height: var(--z-dropdown-menu-height);
    background: var(--z-dropdown-menu-background);
    box-shadow: var(--z-dropdown-menu-shadow);

    &--opened {
      z-index: calc(var(--z-dropdown-item-z-index) + 1);
    }

    &--scrollable {
      padding-right: var(--z-padding-xs);
      padding-left: var(--z-padding-base);
      overflow: auto hidden;
      -webkit-overflow-scrolling: touch;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  &__item {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    min-width: 0;

    &--disabled {
      .z-dropdown-menu__title {
        color: var(--z-dropdown-menu-title-disabled-text-color);
      }
    }

    &--grow {
      flex: 1 0 auto;
      padding-right: var(--z-padding-sm);
      padding-left: var(--z-padding-base);
    }
  }

  &__title {
    position: relative;
    box-sizing: border-box;
    max-width: 100%;
    padding: var(--z-dropdown-menu-title-padding);
    font-size: var(--z-dropdown-menu-title-font-size);
    line-height: var(--z-dropdown-menu-title-line-height);
    color: var(--z-dropdown-menu-title-text-color);

    &::after {
      position: absolute;
      top: 50%;
      right: -8rpx;
      margin-top: -10rpx;
      content: '';
      border: 6rpx solid;
      border-color: transparent transparent var(--z-gray-4) var(--z-gray-4);
      opacity: 0.8;
      transform: rotate(-45deg);
    }

    &--active {
      color: var(--z-dropdown-menu-title-active-text-color);

      &::after {
        border-color: transparent transparent currentcolor currentcolor;
      }
    }

    &--down {
      &::after {
        margin-top: -2rpx;
        transform: rotate(135deg);
      }
    }
  }
}
</style>
