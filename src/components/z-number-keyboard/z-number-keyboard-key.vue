<template>
  <view
    :class="[bem('wrapper', { wider: props.wider })]"
    @touchstart.passive="onTouchStart"
    @touchmove.passive="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <view
      :class="[
        bem([
          props.color,
          {
            large: props.large,
            active: active,
            delete: props.type === 'delete'
          }
        ])
      ]"
    >
      <template v-if="props.loading">
        <z-loading :class="bem('loading-icon')" />
      </template>
      <template v-if="props.type == 'delete'">
        <template v-if="props.text">
          {{ props.text }}
        </template>
        <template v-else>
          <z-icon name="delete-key" size="56rpx"></z-icon>
        </template>
      </template>
      <template v-else-if="props.type == 'extra'">
        <template v-if="props.text">
          {{ props.text }}
        </template>
        <template v-else>
          <z-icon name="hide-key" size="56rpx"></z-icon>
        </template>
      </template>
      <template v-else>
        {{ props.text }}
      </template>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { ref, type PropType } from 'vue'
import {
  numericProp,
  createNamespace,
  useTouch,
  useComponentName
} from '../../libs/utils'
import ZLoading from '../z-loading/z-loading.vue'
import ZIcon from '../z-icon/z-icon.vue'

const [name, bem] = createNamespace('key')
useComponentName(name)

type KeyType = '' | 'delete' | 'extra' | 'close'

const props = defineProps({
  type: String as PropType<KeyType>,
  text: numericProp,
  color: String,
  wider: Boolean,
  large: Boolean,
  loading: Boolean
})

const emit = defineEmits(['press'])
const active = ref(false)
const touch = useTouch()

const onTouchStart = (event: TouchEvent) => {
  touch.start(event)
  active.value = true
}

const onTouchMove = (event: TouchEvent) => {
  touch.move(event)

  if (touch.direction.value) {
    active.value = false
  }
}

const onTouchEnd = (event: TouchEvent) => {
  if (active.value) {
    active.value = false
    emit('press', props.text, props.type)
  }
}
</script>
<script lang="ts">
export default {
  name: 'ZNumberKeyboardKey',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-key {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--z-number-keyboard-key-height);
  font-size: var(--z-number-keyboard-key-font-size);
  line-height: 1.5;
  cursor: pointer;
  background: var(--z-number-keyboard-key-background);
  border-radius: var(--z-radius-lg);

  &--large {
    position: absolute;
    inset: 0 12rpx 12rpx 0;
    height: auto;
  }

  &--blue,
  &--delete {
    font-size: var(--z-number-keyboard-delete-font-size);
  }

  &--active {
    background-color: var(--z-number-keyboard-key-active-color);
  }

  &--blue {
    color: var(--z-number-keyboard-button-text-color);
    background: var(--z-number-keyboard-button-background);

    &.z-key--active {
      opacity: var(--z-active-opacity);
    }
  }

  &__wrapper {
    position: relative;
    box-sizing: border-box;
    flex: 1;
    flex-basis: 33%;
    padding: 0 12rpx 12rpx 0;

    &--wider {
      flex-basis: 66%;
    }
  }

  &__delete-icon {
    width: 64rpx;
    height: 44rpx;
  }

  &__collapse-icon {
    width: 60rpx;
    height: 48rpx;
  }

  &__loading-icon {
    color: var(--z-number-keyboard-button-text-color);
  }
}
</style>
