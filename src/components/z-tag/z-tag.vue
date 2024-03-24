<template>
  <z-transition
    :show="props.show"
    :name="props.closeable ? 'fade' : ''"
    :custom-style="transitionStyle"
  >
    <view :style="getStyle" :class="bem([classes, type])">
      <slot></slot>
      <template v-if="closeable">
        <z-icon
          name="close"
          :custom-style="{ 'margin-left': '4rpx' }"
          :custom-class="[HAPTICS_FEEDBACK]"
          @click.stop="onClose"
        />
      </template>
    </view>
  </z-transition>
</template>
<script lang="ts" setup>
import { type PropType, computed } from 'vue'
import {
  truthProp,
  makeStringProp,
  createNamespace,
  HAPTICS_FEEDBACK,
  useComponentName
} from '../../libs/utils'
import type { TagType, TagSize } from './types'
const [name, bem] = createNamespace('tag')
useComponentName(name)
const props = defineProps({
  size: String as PropType<TagSize>,
  mark: Boolean,
  show: truthProp,
  type: makeStringProp<TagType>('default'),
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String,
  closeable: Boolean
})
const emit = defineEmits(['close'])
const onClose = (event: MouseEvent) => {
  emit('close', event)
}

const getStyle = computed(() => {
  if (props.plain) {
    return {
      color: props.textColor || props.color,
      borderColor: props.color
    }
  }
  return {
    color: props.textColor,
    background: props.color
  }
})

const classes = computed(() => {
  const classes: Record<string, unknown> = {
    mark: props.mark,
    plain: props.plain,
    round: props.round
  }
  if (props.size) {
    classes[props.size] = props.size
  }
  return classes
})

const transitionStyle = computed(() => {
  const styles = {
    display: 'inline-flex'
  }
  return { ...styles }
})
</script>
<script lang="ts">
export default {
  name: 'ZTag',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-tag {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: var(--z-tag-padding);
  font-size: var(--z-tag-font-size);
  line-height: var(--z-tag-line-height);
  color: var(--z-tag-text-color);
  border-radius: var(--z-tag-radius);

  &--default {
    background: var(--z-tag-default-color);

    &.z-tag--plain {
      color: var(--z-tag-default-color);
    }
  }

  &--danger {
    background: var(--z-tag-danger-color);

    &.z-tag--plain {
      color: var(--z-tag-danger-color);
    }
  }

  &--primary {
    background: var(--z-tag-primary-color);

    &.z-tag--plain {
      color: var(--z-tag-primary-color);
    }
  }

  &--success {
    background: var(--z-tag-success-color);

    &.z-tag--plain {
      color: var(--z-tag-success-color);
    }
  }

  &--warning {
    background: var(--z-tag-warning-color);

    &.z-tag--plain {
      color: var(--z-tag-warning-color);
    }
  }

  &--plain {
    background: var(--z-tag-plain-background);
    border-color: currentcolor;

    &::before {
      position: absolute;
      inset: 0;
      pointer-events: none;
      content: '';
      border: 2rpx solid;
      border-color: inherit;
      border-radius: inherit;
    }
  }

  &--medium {
    padding: var(--z-tag-medium-padding);
  }

  &--large {
    padding: var(--z-tag-large-padding);
    font-size: var(--z-tag-large-font-size);
    border-radius: var(--z-tag-large-radius);
  }

  &--mark {
    border-radius: 0 var(--z-tag-round-radius) var(--z-tag-round-radius) 0;

    &::after {
      display: block;
      width: 4rpx;
      content: '';
    }
  }

  &--round {
    border-radius: var(--z-tag-round-radius);
  }
}
</style>
