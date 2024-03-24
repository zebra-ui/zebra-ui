<template>
  <view
    :class="[
      bem({
        center,
        required: !!required,
        clickable,
        borderless: !border,
        [size]: !!size
      }),
      customClass
    ]"
    :style="customStyle"
    :tabindex="clickable ? 0 : undefined"
    @click="onClick"
  >
    <template v-if="showSlots('icon')">
      <slot name="icon"></slot>
    </template>
    <template v-else-if="props.icon">
      <view :class="bem('left-icon')">
        <z-icon :name="props.icon" :class-prefix="props.iconPrefix" />
      </view>
    </template>
    <template v-if="showSlots('title') || isDef(props.title)">
      <view :class="[bem('title'), props.titleClass]" :style="props.titleStyle">
        <template v-if="showSlots('title')">
          <slot name="title"></slot>
        </template>
        <template v-else>
          {{ props.title }}
        </template>
        <template v-if="showSlots('label') || isDef(props.label)">
          <view :class="[bem('label'), props.labelClass]">
            <template v-if="showSlots('label')">
              <slot name="label"></slot>
            </template>
            <template v-else>
              {{ props.label }}
            </template>
          </view>
        </template>
      </view>
    </template>
    <template
      v-if="showSlots('default') || showSlots('value') || isDef(props.value)"
    >
      <view :class="[bem('value'), props.valueClass]" :style="props.valueStyle">
        <template v-if="showSlots('default')">
          <slot></slot>
        </template>
        <template v-else-if="showSlots('value')">
          <slot name="value"></slot>
        </template>
        <template v-else>
          {{ props.value }}
        </template>
      </view>
    </template>
    <template v-if="showSlots('right-icon')">
      <slot name="right-icon"></slot>
    </template>
    <template v-else-if="props.isLink">
      <view :class="bem('right-icon')">
        <z-icon
          :custom-style="rightIconStyle"
          :name="
            props.arrowDirection && props.arrowDirection !== 'right'
              ? `${props.arrowDirection}-big`
              : 'right-big'
          "
        />
      </view>
    </template>
    <slot name="extra"></slot>
  </view>
</template>

<script lang="ts" setup>
import { type PropType, getCurrentInstance, computed } from 'vue'
import {
  isDef,
  truthProp,
  unknownProp,
  numericProp,
  createNamespace,
  isObject,
  useComponentName
} from '../../libs/utils'
const emit = defineEmits(['click'])
const instance = getCurrentInstance()
const [name, bem] = createNamespace('cell')
useComponentName(name)
type CellSize = 'normal' | 'large'
type CellArrowDirection = 'up' | 'down' | 'left' | 'right'

const props = defineProps({
  icon: String,
  size: String as PropType<CellSize | any>,
  title: numericProp,
  value: numericProp,
  label: numericProp,
  center: Boolean,
  isLink: Boolean,
  border: truthProp,
  iconPrefix: String,
  valueClass: unknownProp,
  valueStyle: null as unknown as PropType<string | any>,
  labelClass: unknownProp,
  titleClass: unknownProp,
  titleStyle: null as unknown as PropType<string | any>,
  arrowDirection: String as PropType<CellArrowDirection>,
  required: {
    type: [Boolean, String] as PropType<boolean | 'auto'>,
    default: null
  },
  clickable: {
    type: Boolean as PropType<boolean | null>,
    default: null
  },
  customStyle: Object,
  customClass: [String, Object],
  rightIconStyle: Object,
  componentSlots: Object
})

const clickable: any = props.clickable ? props.clickable : props.isLink

const onClick = () => {
  emit('click')
}

const componentSlotsShow = computed(() => {
  return isObject(props.componentSlots)
})

const showSlots = (name: string) => {
  if (componentSlotsShow.value) {
    if (name == 'default') {
      return props.componentSlots!['value']
        ? props.componentSlots!['value']
        : false
    }
    return props.componentSlots![name] ? props.componentSlots![name] : false
  }
  return instance!.slots[name]
}
</script>
<script lang="ts">
export default {
  name: 'ZCell',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
@import '../z-style/mixins/hairline';

.z-cell {
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: var(--z-cell-vertical-padding) var(--z-cell-horizontal-padding);
  overflow: hidden;
  font-size: var(--z-cell-font-size);
  line-height: var(--z-cell-line-height);
  color: var(--z-cell-text-color);
  background: var(--z-cell-background);

  &::before {
    @include hairline-bottom(
      var(--z-cell-border-color),
      var(--z-padding-md),
      var(--z-padding-md)
    );
  }

  &:last-child::before,
  &--borderless::before {
    display: none;
  }

  &__label {
    margin-top: var(--z-cell-label-margin-top);
    font-size: var(--z-cell-label-font-size);
    line-height: var(--z-cell-label-line-height);
    color: var(--z-cell-label-color);
  }

  &__title,
  &__value {
    flex: 1;
  }

  &__value {
    position: relative;
    overflow: hidden;
    font-size: var(--z-cell-value-font-size);
    color: var(--z-cell-value-color);
    text-align: right;
    word-wrap: break-word;
    vertical-align: middle;
  }

  &__left-icon,
  &__right-icon {
    height: var(--z-cell-line-height);
    font-size: var(--z-cell-icon-size);
    line-height: var(--z-cell-line-height);
  }

  &__left-icon {
    margin-right: var(--z-padding-base);
  }

  &__right-icon {
    margin-left: var(--z-padding-base);
    color: var(--z-cell-right-icon-color);
  }

  &--clickable {
    cursor: pointer;

    &:active {
      background-color: var(--z-cell-active-color);
    }
  }

  &--required {
    overflow: visible;

    &::before {
      position: absolute;
      left: var(--z-padding-xs);
      font-size: var(--z-cell-font-size);
      color: var(--z-cell-required-color);
      content: '*';
    }
  }

  &--center {
    align-items: center;
  }

  &--large {
    padding-top: var(--z-cell-large-vertical-padding);
    padding-bottom: var(--z-cell-large-vertical-padding);

    .z-cell__title {
      font-size: var(--z-cell-large-title-font-size);
    }

    .z-cell__label {
      font-size: var(--z-cell-large-label-font-size);
    }

    .z-cell__value {
      font-size: var(--z-cell-large-value-font-size);
    }
  }
}
</style>
