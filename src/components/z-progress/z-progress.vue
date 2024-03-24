<template>
  <view
    :class="bem()"
    :style="{ background: trackColor, height: addUnit(strokeWidth) }"
  >
    <text
      :class="bem('portion', { inactive: props.inactive })"
      :style="{ width: `${percentage}%`, background: background }"
    >
    </text>
    <template v-if="props.showPivot">
      <text
        :style="{
          color: textColor,
          left: `${+percentage}%`,
          transform: `translate(-${+percentage}%,-50%)`,
          background: pivotColor || background
        }"
        :class="bem('pivot', { inactive: props.inactive })"
      >
        {{ pivotText ? pivotText : `${percentage}%` }}
      </text>
    </template>
  </view>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import {
  addUnit,
  truthProp,
  numericProp,
  createNamespace,
  type Numeric,
  useComponentName
} from '../../libs/utils'

const [name, bem] = createNamespace('progress')
useComponentName(name)

const props = defineProps({
  color: String,
  inactive: Boolean,
  pivotText: String,
  textColor: String,
  showPivot: truthProp,
  pivotColor: String,
  trackColor: String,
  strokeWidth: numericProp,
  percentage: {
    type: numericProp,
    default: 0,
    validator: (value: Numeric) => +value >= 0 && +value <= 100
  },
  customStyle: Object
})
const background = computed(() => (props.inactive ? undefined : props.color))
</script>
<script lang="ts">
export default {
  name: 'ZProgress',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-progress {
  position: relative;
  height: var(--z-progress-height);
  background: var(--z-progress-background);
  border-radius: var(--z-progress-height);

  &__portion {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--z-progress-color);
    border-radius: inherit;
    transition: all var(--z-duration-base) var(--z-ease-out);
    transform-origin: 0;

    &--inactive {
      background: var(--z-progress-inactive-color);
    }
  }

  &__pivot {
    position: absolute;
    top: 50%;
    box-sizing: border-box;
    min-width: 3.6em;
    padding: var(--z-progress-pivot-padding);
    font-size: var(--z-progress-pivot-font-size);
    line-height: var(--z-progress-pivot-line-height);
    color: var(--z-progress-pivot-text-color);
    text-align: center;
    word-break: keep-all;
    background: var(--z-progress-pivot-background);
    border-radius: 1em;
    transition: all var(--z-duration-base) var(--z-ease-out);

    &--inactive {
      background: var(--z-progress-inactive-color);
    }
  }
}
</style>
