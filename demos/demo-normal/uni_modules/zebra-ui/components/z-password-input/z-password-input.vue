<template>
  <view :class="bem()">
    <view
      :class="[bem('security'), { [BORDER_SURROUND]: !props.gutter }]"
      @click.passive="onTouchStart"
    >
      <template v-for="(item, index) in length" :key="index">
        <view
          :class="[
            { [BORDER_LEFT]: showBorder(index) },
            bem('item', { focus: showCursor(index) })
          ]"
          :style="styleData(index)"
        >
          <template v-if="mask">
            <view
              :class="bem('security--mask')"
              :style="{ visibility: char(index) ? 'visible' : 'hidden' }"
            />
          </template>
          <template v-else>
            {{ char(index) }}
          </template>
          <template v-if="showCursor(index)">
            <view :class="bem('cursor')" />
          </template>
        </view>
      </template>
    </view>
    <view v-if="info" :class="bem(props.errorInfo ? 'error-info' : 'info')">
      {{ info }}
    </view>
  </view>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import {
  addUnit,
  truthProp,
  numericProp,
  BORDER_LEFT,
  makeStringProp,
  BORDER_SURROUND,
  createNamespace,
  makeNumericProp,
  useComponentName
} from '../../libs/utils'

const [name, bem] = createNamespace('password-input')
useComponentName(name)

const props = defineProps({
  info: String,
  mask: truthProp,
  value: makeStringProp(''),
  gutter: numericProp,
  length: makeNumericProp(6),
  focused: Boolean,
  errorInfo: String
})

const emit = defineEmits(['focus'])

const onTouchStart = (event: any) => {
  emit('focus', event)
}

const info = computed(() => {
  return props.errorInfo || props.info
})

const length = computed(() => {
  return +props.length
})

const char = (index: any) => {
  return props.value[index]
}
const showBorder = (index: any) => {
  return index !== 0 && !props.gutter
}
const showCursor = (index: any) => {
  // @ts-ignore
  return props.focused && index === props.value.length
}

const styleData = (index: any) => {
  if (index !== 0 && props.gutter) {
    return { marginLeft: addUnit(props.gutter) }
  }
}
</script>
<script lang="ts">
export default {
  name: 'ZPasswordInput',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-password-input {
  position: relative;
  user-select: none;

  &__info,
  &__error-info {
    margin-top: var(--z-padding-md);
    font-size: var(--z-password-input-info-font-size);
    text-align: center;
  }

  &__info {
    color: var(--z-password-input-info-color);
  }

  &__error-info {
    color: var(--z-password-input-error-info-color);
  }

  &__security {
    display: flex;
    width: 100%;
    height: var(--z-password-input-height);
    cursor: pointer;

    &::after {
      border-radius: var(--z-password-input-radius);
    }

    &--mask {
      position: absolute;
      top: 50%;
      left: 50%;
      width: var(--z-password-input-dot-size);
      height: var(--z-password-input-dot-size);
      visibility: hidden;
      background: var(--z-password-input-dot-color);
      border-radius: 100%;
      transform: translate(-50%, -50%);
    }
  }

  &__item {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: var(--z-password-input-font-size);
    line-height: 1.2;
    color: var(--z-password-input-text-color);
    background: var(--z-password-input-background);
  }

  &__cursor {
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--z-password-input-cursor-width);
    height: var(--z-password-input-cursor-height);
    background: var(--z-password-input-cursor-color);
    transform: translate(-50%, -50%);
    animation: var(--z-password-input-cursor-duration) z-cursor-flicker infinite;
  }
}

@keyframes z-cursor-flicker {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
