<template>
  <view
    :class="bem([props.theme])"
    :data-popper-placement="props.placement"
    :style="props.customStyle"
  >
    <view
      class="z-popover-wrapper-rect"
      :class="bem('wrapper')"
      @click="onClickWrapper"
    >
      <slot name="reference"></slot>
    </view>
    <z-popup
      ref="popoverRef"
      :show="show"
      position=""
      :transition="popupTransition"
      :lock-scroll="false"
      :custom-style="popupStyle"
      @update:show="updateShow"
      :overlay="props.overlay"
      :duration="props.duration"
      :overlay-style="props.overlayStyle"
      :overlay-class="props.overlayClass"
      :overlay-back-groud="props.overlayBackGroud"
      :close-on-click-overlay="props.closeOnClickOverlay"
    >
      <template v-if="props.showArrow">
        <view :class="bem('arrow')" />
      </template>
      <view
        class="z-popover-content-rect"
        :class="bem('content', props.actionsDirection)"
      >
        <template v-if="instance.slots.default">
          <slot></slot>
        </template>
        <template v-else>
          <template v-for="(action, index) in props.actions" :key="index">
            <view
              :class="[
                bem('action', {
                  disabled: action.disabled,
                  'with-icon': action.icon
                }),
                {
                  [BORDER_RIGHT]: props.actionsDirection === 'horizontal'
                },
                action.className
              ]"
              :style="{ color: action.color }"
              @click="() => onClickAction(action, index)"
            >
              <template v-if="instance.slots.action">
                <slot name="action" :action="action" :index="index"></slot>
              </template>
              <template v-else>
                <template v-if="action.icon">
                  <z-icon
                    :name="action.icon"
                    :class-prefix="props.iconPrefix"
                    :custom-style="actionIconStyle"
                  />
                </template>
                <view
                  :class="[
                    bem('action-text'),
                    { [BORDER_BOTTOM]: props.actionsDirection === 'vertical' }
                  ]"
                >
                  {{ action.text }}
                </view>
              </template>
            </view>
          </template>
        </template>
      </view>
    </z-popup>
  </view>
</template>
<script lang="ts" setup>
import {
  ref,
  watch,
  nextTick,
  onMounted,
  type PropType,
  type TeleportProps,
  getCurrentInstance,
  computed
} from 'vue'
import {
  truthProp,
  unknownProp,
  BORDER_RIGHT,
  BORDER_BOTTOM,
  makeArrayProp,
  makeStringProp,
  createNamespace,
  type ComponentInstance,
  useSyncPropRef,
  getRect,
  getScrollRect,
  raf,
  doubleRaf,
  addUnit,
  useComponentName
} from '../../libs/utils'
import {
  PopoverTheme,
  PopoverAction,
  PopoverActionsDirection,
  PopoverTrigger,
  PopoverPlacement
} from './types'

import zPopup from '../z-popup/z-popup.vue'
import zIcon from '../z-icon/z-icon.vue'

interface PositionStyle {
  top?: string
  left?: string
  right?: string
  bottom?: string
}

const [name, bem] = createNamespace('popover')
useComponentName(name)
const ARROW_SPACE = 3
const instance = getCurrentInstance()!
const props = defineProps({
  show: Boolean,
  theme: makeStringProp<PopoverTheme>('light'),
  overlay: truthProp,
  overlayBackGroud: Boolean,
  actions: makeArrayProp<PopoverAction>(),
  actionsDirection: makeStringProp<PopoverActionsDirection>('vertical'),
  trigger: makeStringProp<PopoverTrigger>('click'),
  duration: Number,
  showArrow: truthProp,
  placement: makeStringProp<PopoverPlacement>('bottom'),
  iconPrefix: String,
  overlayClass: unknownProp,
  overlayStyle: Object,
  closeOnClickAction: truthProp,
  closeOnClickOverlay: truthProp,
  closeOnClickOutside: truthProp,
  offset: {
    type: Array as unknown as PropType<[number, number]>,
    default: () => [0, 8]
  },
  teleport: {
    type: [String, Object] as PropType<TeleportProps['to']>,
    default: 'body'
  },
  customStyle: Object
})

const emit = defineEmits(['select', 'touchstart', 'update:show'])
const popoverRef = ref<ComponentInstance>()

const show = useSyncPropRef(
  () => props.show,
  (value) => emit('update:show', value)
)

let positionStyle = ref<PositionStyle>({})

const updateLocation = () => {
  nextTick(() => {
    raf(() => {
      doubleRaf(() => {
        Promise.all([
          getRect(instance, '.z-popover-wrapper-rect'),
          getRect(instance, '.z-popover-content-rect'),
          getScrollRect()
        ]).then(([wrapRect, contentRect, scrollRect]: any) => {
          // @TODO 后续兼容父级fixed定位

          // 此方法计算统一按照屏幕尺寸，脱离文档流，不计算滚动，定位使用fixed
          // 父组件如果是fixed定位的话，计算位置会出现异常，因为boundingClientRect是基于整个屏幕，而计算时是基于fixed定位的父组件

          if (wrapRect && contentRect) {
            // 如果页面存在滚动条，计算滚动条和窗口的插值(用到bottom的时候，都需要这个值)
            const { windowHeight } = uni.getSystemInfoSync()
            // j:弹出内容宽度  k:页面触发内容宽度
            // 计算居中时的偏移量
            // 如果弹出内容宽度大于页面触发内容，就用(j - k) / 2
            // 如果 k>j 就用(k - j ) / 2
            const j = contentRect.width
            const k = wrapRect.width
            let bottomCenterOffset = 0
            if (j >= k) {
              bottomCenterOffset = wrapRect.left - (j - k) / 2
            } else {
              bottomCenterOffset = wrapRect.left + (k - j) / 2
            }

            const l = contentRect.height
            const m = wrapRect.height
            let leftCenterOffset = 0
            if (l >= m) {
              leftCenterOffset = wrapRect.top - (l - m) / 2
            } else {
              leftCenterOffset = wrapRect.top + (m - l) / 2
            }

            switch (props.placement) {
              // @ts-ignore
              case 'bottom':
                positionStyle.value['top'] =
                  `calc(var(--z-popover-arrow-size) + ${addUnit(wrapRect.height + wrapRect.top + ARROW_SPACE)})`
                positionStyle.value['left'] =
                  `calc(${addUnit(bottomCenterOffset)})`
                positionStyle.value['bottom'] = 'auto'
                positionStyle.value['right'] = 'auto'
                break
              // @ts-ignore
              case 'bottom-start':
                positionStyle.value['top'] =
                  `calc(var(--z-popover-arrow-size) + ${addUnit(wrapRect.height + wrapRect.top + ARROW_SPACE)})`
                positionStyle.value['left'] = `${addUnit(wrapRect.left)}`
                positionStyle.value['bottom'] = 'auto'
                positionStyle.value['right'] = 'auto'
                break
              // @ts-ignore
              case 'bottom-end':
                positionStyle.value['top'] =
                  `calc(var(--z-popover-arrow-size) + ${addUnit(wrapRect.height + wrapRect.top + ARROW_SPACE)})`
                positionStyle.value['right'] =
                  `${addUnit(wrapRect.right - wrapRect.width)}`
                positionStyle.value['bottom'] = 'auto'
                positionStyle.value['left'] = 'auto'
                break
              // @ts-ignore
              case 'top':
                positionStyle.value['bottom'] =
                  `calc(var(--z-popover-arrow-size) + ${addUnit(windowHeight - wrapRect.top + ARROW_SPACE)})`
                positionStyle.value['left'] =
                  `calc(${addUnit(bottomCenterOffset)})`
                positionStyle.value['top'] = 'auto'
                positionStyle.value['right'] = 'auto'
                break
              // @ts-ignore
              case 'top-start':
                positionStyle.value['bottom'] =
                  `calc(var(--z-popover-arrow-size) + ${addUnit(windowHeight - wrapRect.top + ARROW_SPACE)})`
                positionStyle.value['left'] = `${addUnit(wrapRect.left)}`
                positionStyle.value['top'] = 'auto'
                positionStyle.value['right'] = 'auto'
                break
              // @ts-ignore
              case 'top-end':
                positionStyle.value['bottom'] =
                  `calc(var(--z-popover-arrow-size) + ${addUnit(windowHeight - wrapRect.top + ARROW_SPACE)})`
                positionStyle.value['right'] =
                  `${addUnit(wrapRect.right - wrapRect.width)}`
                positionStyle.value['top'] = 'auto'
                positionStyle.value['left'] = 'auto'
                break
              // @ts-ignore
              case 'left':
                positionStyle.value['right'] =
                  `calc(var(--z-popover-arrow-size) + ${addUnit(wrapRect.right + ARROW_SPACE)})`
                positionStyle.value['top'] =
                  `calc(${addUnit(leftCenterOffset)})`
                positionStyle.value['left'] = 'auto'
                positionStyle.value['bottom'] = 'auto'
                break
              // @ts-ignore
              case 'left-start':
                positionStyle.value['right'] =
                  `calc(var(--z-popover-arrow-size) + ${addUnit(wrapRect.right + ARROW_SPACE)})`
                positionStyle.value['top'] = `${addUnit(wrapRect.top)}`
                positionStyle.value['left'] = 'auto'
                positionStyle.value['bottom'] = 'auto'
                break
              // @ts-ignore
              case 'left-end':
                positionStyle.value['right'] =
                  `calc(var(--z-popover-arrow-size) + ${addUnit(wrapRect.right + ARROW_SPACE)})`
                positionStyle.value['bottom'] =
                  `${addUnit(windowHeight - wrapRect.bottom)}`
                positionStyle.value['left'] = 'auto'
                positionStyle.value['top'] = 'auto'
                break
              // @ts-ignore
              case 'right':
                positionStyle.value['left'] =
                  `calc(var(--z-popover-arrow-size) + ${addUnit(wrapRect.left + wrapRect.width + ARROW_SPACE)})`
                positionStyle.value['top'] =
                  `calc(${addUnit(leftCenterOffset)})`
                positionStyle.value['right'] = 'auto'
                positionStyle.value['bottom'] = 'auto'
                break
              // @ts-ignore
              case 'right-start':
                positionStyle.value['left'] =
                  `calc(var(--z-popover-arrow-size) + ${addUnit(wrapRect.left + wrapRect.width + ARROW_SPACE)})`
                positionStyle.value['top'] = `${addUnit(wrapRect.top)}`
                positionStyle.value['right'] = 'auto'
                positionStyle.value['bottom'] = 'auto'
                break
              // @ts-ignore
              case 'right-end':
                positionStyle.value['left'] =
                  `calc(var(--z-popover-arrow-size) + ${addUnit(wrapRect.left + wrapRect.width + ARROW_SPACE)})`
                positionStyle.value['bottom'] =
                  `${addUnit(windowHeight - wrapRect.bottom)}`
                positionStyle.value['right'] = 'auto'
                positionStyle.value['top'] = 'auto'
                break
            }
          }
        })
      })
    })
  })
}

const updateShow = (value: boolean) => {
  show.value = value
}

const onClickWrapper = () => {
  // @ts-ignore
  if (props.trigger === 'click') {
    show.value = !show.value
  }
}

const onClickAction = (action: PopoverAction, index: number) => {
  if (action.disabled) {
    return
  }

  emit('select', action, index)

  if (props.closeOnClickAction) {
    show.value = false
  }
}

const actionIconStyle = computed(() => {
  const styles = {
    marginRight: 'var(--z-padding-xs)',
    fontSize: 'var(--z-popover-action-icon-size)'
  }
  return { ...styles }
})

const popupStyle = computed(() => {
  const styles = {
    position: 'fixed',
    overflow: 'visible',
    backgroundColor: 'transparent',
    transition: 'opacity 0.15s, transform 0.15s'
  }

  const origin = {
    top: '50% 100%',
    'top-start': '0 100%',
    'top-end': '100% 100%',
    left: '100% 50%',
    'left-start': '100% 0',
    'left-end': '100% 100%',
    right: '0 50%',
    'right-start': '0 0',
    'right-end': '0 100%',
    bottom: '50% 0',
    'bottom-start': '0 0',
    'bottom-end': '100% 0'
  }

  if (props.placement) {
    // @ts-ignore
    styles['transform-origin'] = origin[props.placement]
  }

  return { ...styles, ...positionStyle.value }
})

const popupTransition = computed(() => {
  // @ts-ignore
  if (props.placement.includes('top') || props.placement.includes('bottom')) {
    return 'popover-zoom-h'
  } else {
    return 'popover-zoom-w'
  }
})

onMounted(() => {
  updateLocation()
})

watch(() => [show.value, props.offset, props.placement], updateLocation)
</script>
<script lang="ts">
export default {
  name: 'ZPopover',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-popover {
  display: inline-block;

  &__arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: var(--z-popover-arrow-size);
  }

  &__content {
    overflow: hidden;
    border-radius: var(--z-popover-radius);

    &--horizontal {
      display: flex;
      width: max-content;

      .z-popover__action {
        flex: none;
        width: auto;
        height: var(--z-popover-horizontal-action-height);
        padding: 0 var(--z-padding-sm);

        &:last-child::after {
          display: none;
        }

        &-icon {
          margin-right: var(--z-padding-base);
          font-size: var(--z-popover-horizontal-action-icon-size);
        }
      }
    }
  }

  &__action {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: var(--z-popover-action-width);
    height: var(--z-popover-action-height);
    padding: 0 var(--z-padding-md);
    font-size: var(--z-popover-action-font-size);
    line-height: var(--z-line-height-md);
    cursor: pointer;

    &:last-child {
      .z-popover__action-text::after {
        display: none;
      }
    }

    &-text {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    &--with-icon {
      .z-popover__action-text {
        justify-content: flex-start;
      }
    }
  }

  &[data-popper-placement^='top'] {
    .z-popover__arrow {
      bottom: 0;
      margin-bottom: calc(var(--z-popover-arrow-size) * -1);
      border-top-color: currentcolor;
      border-bottom-width: 0;
    }
  }

  &[data-popper-placement='top'] {
    transform-origin: 50% 100%;

    .z-popover__arrow {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &[data-popper-placement='top-start'] {
    transform-origin: 0 100%;

    .z-popover__arrow {
      left: var(--z-padding-md);
    }
  }

  &[data-popper-placement='top-end'] {
    transform-origin: 100% 100%;

    .z-popover__arrow {
      right: var(--z-padding-md);
    }
  }

  &[data-popper-placement^='left'] {
    .z-popover__arrow {
      right: 0;
      margin-right: calc(var(--z-popover-arrow-size) * -1);
      border-right-width: 0;
      border-left-color: currentcolor;
    }
  }

  &[data-popper-placement='left'] {
    transform-origin: 100% 50%;

    .z-popover__arrow {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &[data-popper-placement='left-start'] {
    transform-origin: 100% 0;

    .z-popover__arrow {
      top: var(--z-padding-md);
    }
  }

  &[data-popper-placement='left-end'] {
    transform-origin: 100% 100%;

    .z-popover__arrow {
      bottom: var(--z-padding-md);
    }
  }

  &[data-popper-placement^='right'] {
    .z-popover__arrow {
      left: 0;
      margin-left: calc(var(--z-popover-arrow-size) * -1);
      border-right-color: currentcolor;
      border-left-width: 0;
    }
  }

  &[data-popper-placement='right'] {
    transform-origin: 0 50%;

    .z-popover__arrow {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &[data-popper-placement='right-start'] {
    transform-origin: 0 0;

    .z-popover__arrow {
      top: var(--z-padding-md);
    }
  }

  &[data-popper-placement='right-end'] {
    transform-origin: 0 100%;

    .z-popover__arrow {
      bottom: var(--z-padding-md);
    }
  }

  &[data-popper-placement^='bottom'] {
    .z-popover__arrow {
      top: 0;
      margin-top: calc(var(--z-popover-arrow-size) * -1);
      border-top-width: 0;
      border-bottom-color: currentcolor;
    }
  }

  &[data-popper-placement='bottom'] {
    transform-origin: 50% 0;

    .z-popover__arrow {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &[data-popper-placement='bottom-start'] {
    transform-origin: 0 0;

    .z-popover__arrow {
      left: var(--z-padding-md);
    }
  }

  &[data-popper-placement='bottom-end'] {
    transform-origin: 100% 0;

    .z-popover__arrow {
      right: var(--z-padding-md);
    }
  }

  &--light {
    color: var(--z-popover-light-text-color);

    .z-popover__content {
      background: var(--z-popover-light-background);
      box-shadow: 0 4rpx 24rpx rgb(50 50 51 / 12%);
    }

    .z-popover__arrow {
      color: var(--z-popover-light-background);
    }

    .z-popover__action {
      &:active {
        background-color: var(--z-active-color);
      }

      &--disabled {
        color: var(--z-popover-light-action-disabled-text-color);
        cursor: not-allowed;

        &:active {
          background-color: transparent;
        }
      }
    }
  }

  &--dark {
    color: var(--z-popover-dark-text-color);

    .z-popover__content {
      background: var(--z-popover-dark-background);
    }

    .z-popover__arrow {
      color: var(--z-popover-dark-background);
    }

    .z-popover__action {
      &:active {
        background-color: rgb(0 0 0 / 20%);
      }

      &--disabled {
        color: var(--z-popover-dark-action-disabled-text-color);

        &:active {
          background-color: transparent;
        }
      }
    }

    .z-popover__action-text {
      &::after {
        border-color: var(--z-gray-7);
      }
    }
  }
}
</style>
