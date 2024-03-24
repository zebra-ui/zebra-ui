<template>
  <z-popup
    position="bottom"
    :show="props.show"
    :z-index="props.zIndex"
    :overlay="props.overlay"
    :duration="props.duration"
    :lock-scroll="props.lockScroll"
    :lazy-render="props.lazyRender"
    :before-close="props.beforeClose"
    :overlay-style="props.overlayStyle"
    :overlay-class="props.overlayClass"
    :transition-appear="props.transitionAppear"
    :close-on-click-overlay="props.closeOnClickOverlay"
    :round="props.round"
    :close-on-popstate="props.closeOnPopstate"
    :safe-area-inset-bottom="props.safeAreaInsetBottom"
    @update:show="updateShow"
  >
    <view :class="bem()">
      <template v-if="instance.slots.title || props.title || description">
        <view :class="bem('header')">
          <view
            v-if="instance.slots.title || props.title"
            :class="bem('title')"
          >
            <template v-if="instance.slots.title">
              <slot name="title"></slot>
            </template>
            <template v-else>
              {{ props.title }}
            </template>
          </view>
          <view
            v-if="instance.slots.description || props.description"
            :class="bem('description')"
          >
            <template v-if="instance.slots.description">
              <slot name="description"></slot>
            </template>
            <template v-else>
              {{ props.description }}
            </template>
          </view>
        </view>
      </template>
      <template v-if="Array.isArray(options[0])">
        <template v-for="(optionsItem, index) in options" :key="index">
          <view :class="bem('options', { border: Number(index) != 0 })">
            <template
              v-for="(option, optionIndex) in optionsItem"
              :key="optionIndex"
            >
              <view
                :class="[bem('option'), option.className, HAPTICS_FEEDBACK]"
                @click="() => onSelect(option, index)"
              >
                <template v-if="isImage(option.icon)">
                  <image :src="option.icon" :class="bem('image-icon')" />
                </template>
                <template v-else>
                  <view :class="bem('icon', [option.icon])">
                    <z-icon :name="iconMap[option.icon] || option.icon" />
                  </view>
                </template>
                <text v-if="option.name" :class="bem('name')">{{
                  option.name
                }}</text>
                <text
                  v-if="option.description"
                  :class="bem('option-description')"
                  >{{ option.description }}</text
                >
              </view>
            </template>
          </view>
        </template>
      </template>
      <template v-else>
        <view :class="bem('options')">
          <template v-for="(option, optionIndex) in options" :key="optionIndex">
            <view
              :class="[bem('option'), option.className, HAPTICS_FEEDBACK]"
              @click="() => onSelect(option, optionIndex)"
            >
              <template v-if="isImage(option.icon)">
                <image :src="option.icon" :class="bem('image-icon')" />
              </template>
              <template v-else>
                <view :class="bem('icon', [option.icon])">
                  <z-icon :name="iconMap[option.icon] || option.icon" />
                </view>
              </template>
              <text v-if="option.name" :class="bem('name')">{{
                option.name
              }}</text>
              <text
                v-if="option.description"
                :class="bem('option-description')"
                >{{ option.description }}</text
              >
            </view>
          </template>
        </view>
      </template>
      <button type="button" :class="bem('cancel')" @click="onCancel">
        <template v-if="instance.slots.cancel">
          <slot name="cancel"></slot>
        </template>
        <template v-else>
          {{ props.cancelText || '取消' }}
        </template>
      </button>
    </view>
  </z-popup>
</template>
<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
import {
  extend,
  truthProp,
  createNamespace,
  HAPTICS_FEEDBACK,
  useComponentName
} from '../../libs/utils'
import { popupSharedProps } from '../z-popup/shared'
type ShareSheetOption = {
  name: string
  icon: string
  className?: string
  description?: string
}
const isImage = (name?: string) => name?.includes('/')

const iconMap: Record<string, string> = {
  qq: 'QQ',
  link: 'link',
  weibo: 'weibo',
  qrcode: 'qrcode',
  poster: 'image',
  wechat: 'wechat-fill',
  'weapp-qrcode': 'miniprogram',
  'wechat-moments': 'message-fill'
}
const [name, bem] = createNamespace('share-sheet')
useComponentName(name)

const instance = getCurrentInstance()!

const props = defineProps(
  extend({}, popupSharedProps, {
    title: String,
    round: truthProp,
    options: [Array, Object] as any,
    cancelText: String,
    description: String,
    closeOnPopstate: truthProp,
    safeAreaInsetBottom: truthProp
  })
)
const emit = defineEmits(['cancel', 'select', 'update:show'])
const updateShow = (value: boolean) => emit('update:show', value)

const onCancel = () => {
  updateShow(false)
  emit('cancel')
}

const onSelect = (option: ShareSheetOption, index: number) =>
  emit('select', option, index)
</script>
<script lang="ts">
export default {
  name: 'ZShareSheet',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
@import '../z-style/mixins/hairline';

.z-share-sheet {
  &__header {
    padding: var(--z-share-sheet-header-padding);
    text-align: center;
  }

  &__title {
    margin-top: var(--z-padding-xs);
    font-size: var(--z-share-sheet-title-font-size);
    font-weight: normal;
    line-height: var(--z-share-sheet-title-line-height);
    color: var(--z-share-sheet-title-color);
  }

  &__description {
    display: block;
    margin-top: var(--z-padding-xs);
    font-size: var(--z-share-sheet-description-font-size);
    line-height: var(--z-share-sheet-description-line-height);
    color: var(--z-share-sheet-description-color);
  }

  &__options {
    position: relative;
    display: flex;
    padding: var(--z-padding-md) 0 var(--z-padding-md) var(--z-padding-xs);
    overflow: auto visible;
    -webkit-overflow-scrolling: touch;

    &--border::before {
      @include hairline-top(var(--z-border-color), var(--z-padding-md));
    }

    &::-webkit-scrollbar {
      height: 0;
    }
  }

  &__option {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
  }

  &__icon,
  &__image-icon {
    width: var(--z-share-sheet-icon-size);
    height: var(--z-share-sheet-icon-size);
    margin: 0 var(--z-padding-md);
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60rpx;
    color: var(--z-gray-7);
    background-color: var(--z-gray-2);
    border-radius: 100%;

    &--link,
    &--poster,
    &--qrcode {
      font-size: 52rpx;
    }

    &--weapp-qrcode {
      font-size: 56rpx;
    }

    &--qq,
    &--weibo,
    &--wechat,
    &--wechat-moments {
      font-size: 60rpx;
      color: var(--z-white);
    }

    &--qq {
      background-color: #38b9fa;
    }

    &--wechat {
      background-color: #0bc15f;
    }

    &--weibo {
      background-color: #ee575e;
    }

    &--wechat-moments {
      background-color: #7bc845;
    }
  }

  &__name {
    padding: 0 var(--z-padding-base);
    margin-top: var(--z-padding-xs);
    font-size: var(--z-share-sheet-option-name-font-size);
    color: var(--z-share-sheet-option-name-color);
  }

  &__option-description {
    padding: 0 var(--z-padding-base);
    font-size: var(--z-share-sheet-option-description-font-size);
    color: var(--z-share-sheet-option-description-color);
  }

  &__cancel {
    display: block;
    width: 100%;
    padding: 0;
    font-size: var(--z-share-sheet-cancel-button-font-size);
    line-height: var(--z-share-sheet-cancel-button-height);
    color: var(--z-text-color);
    text-align: center;
    cursor: pointer;
    background: var(--z-share-sheet-cancel-button-background);
    border: none;

    &::before {
      display: block;
      height: var(--z-padding-xs);
      content: ' ';
      background-color: var(--z-background);
    }

    &::after {
      border: none;
    }

    &:active {
      background-color: var(--z-active-color);
    }
  }
}
</style>
