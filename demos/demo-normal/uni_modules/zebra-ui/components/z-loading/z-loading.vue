<template>
  <view
    :class="bem([type, { vertical, horizontal: !vertical }])"
    :style="wrapperStyle"
  >
    <view :class="bem('spinner', props.type)" :style="spinnerStyle">
      <template v-if="instance.slots.icon">
        <slot name="icon"></slot>
      </template>
      <template v-else>
        <template v-if="props.type === 'spinner'">
          <view
            v-for="(item, index) in 12"
            :key="index"
            :class="bem('line', String(index + 1))"
          >
          </view>
        </template>
        <template v-else>
          <view :class="bem('circular')">
            <view :class="bem('circular--content')">
              <view class="circle circle-left">
                <view class="circle-inner"></view>
              </view>
              <view class="circle circle-right">
                <view class="circle-inner"></view>
              </view>
            </view>
          </view>
        </template>
      </template>
    </view>
    <template v-if="instance.slots.default">
      <view
        :class="bem('text')"
        :style="{
          fontSize: addUnit(props.textSize),
          color: props.textColor ? props.textColor : props.color
        }"
      >
        <slot></slot>
      </view>
    </template>
  </view>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance } from 'vue'
import {
  extend,
  addUnit,
  numericProp,
  getSizeStyle,
  makeStringProp,
  createNamespace,
  useComponentName
} from '../../libs/utils'
type LoadingType = 'circular' | 'spinner'
const [name, bem] = createNamespace('loading')
useComponentName(name)
const instance = getCurrentInstance()!
const props = defineProps({
  size: numericProp,
  type: makeStringProp<LoadingType>('circular'),
  color: String,
  vertical: Boolean,
  textSize: numericProp,
  textColor: String,
  customStyle: Object,
  wrapperStyle: Object
})

const spinnerStyle = computed(() =>
  extend({ color: props.color }, getSizeStyle(props.size), {
    ...props.customStyle
  })
)
</script>

<style lang="scss" scoped>
.z-loading {
  position: relative;
  font-size: 0;
  color: var(--z-loading-spinner-color);
  vertical-align: middle;

  &__spinner {
    position: relative;
    display: inline-block;
    width: var(--z-loading-spinner-size);
    max-width: 100%;
    height: var(--z-loading-spinner-size);
    max-height: 100%;
    vertical-align: middle;
    animation: z-rotate var(--z-loading-spinner-duration) linear infinite;

    &--spinner {
      animation-timing-function: steps(12);
    }

    &--circular {
      animation-duration: 2s;
    }
  }

  &__line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &::before {
      display: block;
      width: 4rpx;
      height: 25%;
      margin: 0 auto;
      content: ' ';
      background-color: currentcolor;
      border-radius: 40%;
    }
  }

  &__circular {
    display: block;
    width: 100%;
    height: 100%;

    &--content {
      @keyframes anim-circle-1 {
        from {
          transform: rotate(60deg);
        }

        to {
          transform: rotate(205deg);
        }
      }

      @keyframes anim-circle-2 {
        from {
          transform: rotate(30deg);
        }

        to {
          transform: rotate(-115deg);
        }
      }

      @keyframes anim-spinner {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }

      width: 100%;
      height: 100%;
      animation-name: anim-spinner;
      animation-duration: var(--z-loading-spinner-duration);
      animation-timing-function: linear;
      animation-iteration-count: infinite;

      .circle {
        box-sizing: border-box;
        width: 100%;
        height: 50%;
        overflow: hidden;
      }

      .circle-inner {
        box-sizing: border-box;
        width: 100%;
        height: 200%;
        border: 6rpx solid;
        border-right: 6rpx solid transparent;
        border-bottom: 6rpx solid transparent;
        border-radius: 50%;
        transform: rotate(45deg);
        animation-name: anim-circle-1;
        animation-duration: var(--z-loading-spinner-duration);
        animation-timing-function: cubic-bezier(0.1, 0.3, 0.5, 0.7);
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }

      .circle-right {
        transform: rotate(180deg);

        & .circle-inner {
          animation-name: anim-circle-2;
        }
      }
    }
  }

  &__text {
    display: inline-block;
    margin-left: var(--z-padding-xs);
    font-size: var(--z-loading-text-font-size);
    color: var(--z-loading-text-color);
    vertical-align: middle;
  }

  &--vertical {
    display: flex;
    flex-direction: column;
    align-items: center;

    .z-loading__text {
      margin: var(--z-padding-xs) 0 0;
    }
  }

  &--horizontal {
    display: flex;
    align-items: center;
  }
}

@mixin generate-spinner($n, $i: 1) {
  @if $i <= $n {
    .z-loading__line--#{$i} {
      opacity: 1 - calc(0.75 / 12) * ($i - 1);
      transform: rotate($i * 30deg);
    }
    /* stylelint-disable-next-line */
    @include generate-spinner($n, ($i + 1));
  }
}

@include generate-spinner(12);
</style>
