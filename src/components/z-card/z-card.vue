<template>
  <view :class="bem({ shadow, bordered })">
    <template v-if="isHeaderRender">
      <view :class="[bem('header'), { [BORDER_BOTTOM]: props.headerBordered }]">
        <view :class="bem('header--wrapper')">
          <view>
            <template v-if="showTitle">
              <view :class="bem('title')">
                <template v-if="instance.slots.title">
                  <slot name="title"></slot>
                </template>
                <template v-else>
                  {{ props.title }}
                </template>
              </view>
            </template>
            <template v-if="showSubtitle">
              <view :class="bem('subtitle')">
                <template v-if="instance.slots.subtitle">
                  <slot name="subtitle"></slot>
                </template>
                <template v-else>
                  {{ props.subtitle }}
                </template>
              </view>
            </template>
            <template v-if="showDescription">
              <view :class="bem('description')">
                <template v-if="instance.slots.description">
                  <slot name="description"></slot>
                </template>
                <template v-else>
                  {{ props.description }}
                </template>
              </view>
            </template>
          </view>
        </view>
        <template v-if="showActions">
          <view :class="bem('actions')">
            <template v-if="instance.slots.actions">
              <slot name="actions"></slot>
            </template>
            <template v-else>
              {{ props.actions }}
            </template>
          </view>
        </template>
      </view>
    </template>
    <template v-if="showCover">
      <view :class="bem('cover')">
        <template v-if="props.cover">
          <image
            :class="bem('cover--image', { showtitle: isHeaderRender })"
            :src="props.cover"
            mode="aspectFill"
          >
          </image>
        </template>
        <template v-else>
          <slot name="cover"></slot>
        </template>
      </view>
    </template>
    <template v-if="showContent">
      <view :class="bem('body')">
        <template v-if="instance.slots.default">
          <slot></slot>
        </template>
        <template v-else>
          {{ props.content }}
        </template>
      </view>
    </template>
    <template v-if="isFooterRender">
      <view :class="bem('footer')">
        <view :class="bem('footer--wrapper')">
          <template v-if="instance.slots.footer">
            <slot name="footer"></slot>
          </template>
          <template v-else>
            {{ props.footer }}
          </template>
        </view>
      </view>
    </template>
  </view>
</template>
<script lang="ts" setup>
import { computed, getCurrentInstance } from 'vue'
import {
  createNamespace,
  BORDER_BOTTOM,
  useComponentName
} from '../../libs/utils'

const [name, bem] = createNamespace('card')
useComponentName(name)
const instance = getCurrentInstance()!
const props = defineProps({
  actions: String,
  bordered: Boolean,
  content: String,
  cover: String,
  default: String,
  description: String,
  footer: String,
  headerBordered: Boolean,
  shadow: Boolean,
  subtitle: String,
  title: String
})

const showTitle = computed(() => props.title || instance.slots.title)
const showSubtitle = computed(() => props.subtitle || instance.slots.subtitle)
const showDescription = computed(
  () => props.description || instance.slots.description
)
const showActions = computed(() => props.actions || instance.slots.actions)
const showFooter = computed(() => props.footer || instance.slots.footer)
const showCover = computed(() => props.cover || instance.slots.cover)
const showContent = computed(
  () =>
    props.content ||
    instance.slots.content ||
    props.default ||
    instance.slots.default
)
const isHeaderRender = computed(
  () =>
    showTitle.value ||
    showSubtitle.value ||
    showDescription.value ||
    showActions.value
)
const isFooterRender = computed(() => showFooter.value)
</script>
<script lang="ts">
export default {
  name: 'ZCard',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-card {
  position: relative;
  box-sizing: border-box;
  color: var(--card-color);
  background-color: var(--card-background);
  border-radius: var(--card-border-radius);
  transition: box-shadow var(--z-duration-base) var(--z-ease-in);

  &--bordered {
    border: 1rpx solid var(--card-border-color);
  }

  &--shadow-hover:hover,
  &--shadow {
    box-shadow: var(--z-shadow-1);
  }

  &__cover {
    &--image {
      width: 100%;
      max-height: 100%;
      border-radius: var(--z-radius-md) var(--z-radius-md) 0 0;

      &--showtitle {
        border-radius: 0;
      }
    }
  }

  &__body {
    padding: var(--card-body-padding);
    font-size: var(--z-font-size-md);
    line-height: var(--z-line-height-md);
  }

  &__header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--card-header-padding);

    &--wrapper {
      display: flex;
      flex: 1;
      align-items: center;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--card-footer-padding);

    &--wrapper {
      flex: 1;
    }
  }

  &__title {
    margin-right: var(--card-title-margin);
    font-size: var(--z-font-size-cx);
    color: var(--card-color);
    word-break: break-all;
  }

  &__subtitle {
    margin-top: var(--z-padding-base);
    font-size: var(--z-font-size-md);
    color: var(--card-subtitle-color);
    word-break: break-all;
  }

  &__description {
    margin-top: var(--card-description-margin);
    font-size: var(--z-font-size-md);
    color: var(--card-subtitle-color);
    word-break: break-all;
  }
}
</style>
