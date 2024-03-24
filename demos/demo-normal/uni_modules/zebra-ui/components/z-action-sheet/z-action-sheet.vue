<template>
  <z-popup
    position="bottom"
    @update:show="updateShow"
    :show="props.show"
    :z-index="props.zIndex"
    :overlay="props.overlay"
    :duration="props.duration"
    :lock-scroll="props.lockScroll"
    :lazy-render="props.lazyRender"
    :before-close="props.beforeClose"
    :overlay-style="props.overlayStyle"
    :overlay-class="props.overlayClass"
    :close-on-click-overlay="props.closeOnClickOverlay"
    :round="props.round"
    :close-on-popstate="props.closeOnPopstate"
    :safe-area-inset-bottom="props.safeAreaInsetBottom"
  >
    <view :class="bem()">
      <template v-if="props.title">
        <view :class="bem('header')">
          {{ props.title }}
          <template v-if="props.closeable">
            <z-icon
              :name="props.closeIcon"
              :badge-wrapper-style="closeIconWrapperStyle"
              :custom-style="closeIconStyle"
              :custom-class="[HAPTICS_FEEDBACK]"
              @click="onCancel"
            />
          </template>
        </view>
      </template>
      <template v-if="props.description || instance.slots.description">
        <view :class="bem('description')">
          <template v-if="instance.slots.description">
            <slot name="description"></slot>
          </template>
          <template v-else>
            {{ props.description }}
          </template>
        </view>
      </template>
      <view :class="bem('content')">
        <template v-for="(action, index) in props.actions" :key="index">
          <button
            type="button"
            :style="{ color: action.color }"
            :class="[
              bem('item', {
                loading: action.loading,
                disabled: action.disabled
              }),
              action.className
            ]"
            @click="onClickAction(action, index)"
          >
            <template v-if="action.loading">
              <z-loading size="var(--z-action-sheet-loading-icon-size)" />
            </template>
            <template v-else-if="instance.slots.action">
              <slot name="action" :action="action" :index="index"></slot>
            </template>
            <template v-else>
              <text :class="bem('name')">{{ action.name }}</text>
              <view v-if="action.subname" :class="bem('subname')">{{
                action.subname
              }}</view>
            </template>
          </button>
        </template>
        <slot></slot>
      </view>
      <template v-if="props.cancelText || instance.slots.cancel">
        <view :class="bem('gap')" />
        <button type="button" :class="bem('cancel')" @click="onCancel">
          <template v-if="instance.slots.cancel">
            <slot name="cancel"></slot>
          </template>
          <template v-else>
            {{ props.cancelText }}
          </template>
        </button>
      </template>
    </view>
  </z-popup>
</template>
<script lang="ts" setup>
import { nextTick, computed, getCurrentInstance } from 'vue'
import {
  extend,
  truthProp,
  makeArrayProp,
  makeStringProp,
  createNamespace,
  HAPTICS_FEEDBACK,
  useComponentName
} from '../../libs/utils'
import { popupSharedProps } from '../z-popup/shared'

type ActionSheetAction = {
  name?: string
  color?: string
  subname?: string
  loading?: boolean
  disabled?: boolean
  callback?: (action: ActionSheetAction) => void
  className?: unknown
}

const [name, bem] = createNamespace('action-sheet')

useComponentName(name)

const instance = getCurrentInstance()!

const props = defineProps(
  extend({}, popupSharedProps, {
    title: String,
    round: truthProp,
    actions: makeArrayProp<ActionSheetAction>(),
    closeIcon: makeStringProp('close'),
    closeable: truthProp,
    cancelText: String,
    description: String,
    closeOnPopstate: truthProp,
    closeOnClickAction: Boolean,
    safeAreaInsetBottom: truthProp
  })
)

const emit = defineEmits(['select', 'cancel', 'update:show'])

const updateShow = (show: boolean) => emit('update:show', show)

const onCancel = () => {
  updateShow(false)
  emit('cancel')
}

const closeIconWrapperStyle = computed(() => {
  const styles = {
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: '1',
    padding: 'var(--z-action-sheet-close-icon-padding)'
  }
  return { ...styles }
})

const closeIconStyle = computed(() => {
  const styles = {
    color: 'var(--z-action-sheet-close-icon-color)',
    fontSize: 'var(--z-action-sheet-close-icon-size)',
    lineHeight: 'inherit'
  }
  return { ...styles }
})

const onClickAction = (action: any, index: number) => {
  const { loading, callback, disabled } = action

  if (disabled || loading) {
    return
  }

  if (callback) {
    callback(action)
  }

  if (props.closeOnClickAction) {
    updateShow(false)
  }

  nextTick(() => emit('select', action, index))
}
</script>
<script lang="ts">
export default {
  name: 'ZActionSheet',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
@import '../z-style/mixins/hairline';

.z-action-sheet {
  display: flex;
  flex-direction: column;
  max-height: var(--z-action-sheet-max-height);
  overflow: hidden;
  color: var(--z-action-sheet-item-text-color);

  &__content {
    flex: 1 auto;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  &__item,
  &__cancel {
    display: block;
    width: 100%;
    padding: 28rpx var(--z-padding-md);
    font-size: var(--z-action-sheet-item-font-size);
    line-height: inherit;
    color: inherit;
    cursor: pointer;
    background: var(--z-action-sheet-item-background);
    border: none;

    &:active {
      background-color: var(--z-active-color);
    }
  }

  &__item {
    line-height: var(--z-action-sheet-item-line-height);

    &--loading,
    &--disabled {
      color: var(--z-action-sheet-item-disabled-text-color);

      &:active {
        background-color: var(--z-action-sheet-item-background);
      }
    }

    &--disabled {
      cursor: not-allowed;
    }

    &--loading {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: default;
    }

    &::after {
      border: none;
    }
  }

  &__cancel {
    box-sizing: border-box;
    flex-shrink: 0;
    color: var(--z-action-sheet-cancel-text-color);

    &::after {
      border: none;
    }
  }

  &__subname {
    margin-top: var(--z-padding-xs);
    font-size: var(--z-action-sheet-subname-font-size);
    line-height: var(--z-action-sheet-subname-line-height);
    color: var(--z-action-sheet-subname-color);
  }

  &__gap {
    display: block;
    height: var(--z-action-sheet-cancel-padding-top);
    background: var(--z-action-sheet-cancel-padding-color);
  }

  &__header {
    flex-shrink: 0;
    font-size: var(--z-action-sheet-header-font-size);
    font-weight: var(--z-font-bold);
    line-height: var(--z-action-sheet-header-height);
    text-align: center;
  }

  &__description {
    position: relative;
    flex-shrink: 0;
    padding: 40rpx var(--z-padding-md);
    font-size: var(--z-action-sheet-description-font-size);
    line-height: var(--z-action-sheet-description-line-height);
    color: var(--z-action-sheet-description-color);
    text-align: center;

    &::after {
      @include hairline-bottom(
        var(--z-border-color),
        var(--z-padding-md),
        var(--z-padding-md)
      );
    }
  }
}
</style>
