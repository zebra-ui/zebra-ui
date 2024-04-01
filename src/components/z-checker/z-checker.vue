<template>
  <view
    :class="
      props.bem([
        { disabled: disabled, 'label-disabled': props.labelDisabled },
        direction
      ])
    "
    :style="customStyle"
    @click="onClick"
  >
    <template v-if="props.labelPosition === 'left'">
      <text
        v-if="instance.slots.default"
        :class="
          props.bem('label', [props.labelPosition, { disabled: disabled }])
        "
      >
        <slot></slot>
      </text>
      <view
        :class="
          bem('icon', [shape, { disabled: disabled, checked, indeterminate }])
        "
        :style="
          shape !== 'dot'
            ? { fontSize: addUnit(props.iconSize || getParentProp('iconSize')) }
            : {
                width: addUnit(props.iconSize || getParentProp('iconSize')),
                height: addUnit(props.iconSize || getParentProp('iconSize')),
                borderColor: iconStyle?.borderColor
              }
        "
      >
        <template v-if="componentSlot && componentSlot.icon">
          <slot name="icon"></slot>
        </template>
        <template v-else-if="shape !== 'dot'">
          <view @click.stop="iconClick">
            <z-icon
              :name="
                indeterminate
                  ? 'minus'
                  : getParentProp('iconName') || iconName || 'check-small'
              "
              :custom-style="iconStyle"
              :badge-wrapper-style="{ display: 'block' }"
            />
          </view>
        </template>
        <template v-else>
          <view
            :class="bem('icon--dot__icon')"
            :style="{ backgroundColor: iconStyle?.backgroundColor }"
          >
          </view>
        </template>
      </view>
    </template>
    <template v-else>
      <view
        :class="
          bem('icon', [shape, { disabled: disabled, checked, indeterminate }])
        "
        :style="
          shape !== 'dot'
            ? { fontSize: addUnit(props.iconSize || getParentProp('iconSize')) }
            : {
                width: addUnit(props.iconSize || getParentProp('iconSize')),
                height: addUnit(props.iconSize || getParentProp('iconSize')),
                borderColor: iconStyle?.borderColor
              }
        "
      >
        <template v-if="componentSlot && componentSlot.icon">
          <slot name="icon"></slot>
        </template>
        <template v-else-if="shape !== 'dot'">
          <view @click.stop="iconClick">
            <z-icon
              :name="
                indeterminate
                  ? 'minus'
                  : getParentProp('iconName') || iconName || 'check-small'
              "
              :custom-style="iconStyle"
              :badge-wrapper-style="{ display: 'block' }"
            />
          </view>
        </template>
        <template v-else>
          <view
            :class="bem('icon--dot__icon')"
            :style="{ backgroundColor: iconStyle?.backgroundColor }"
          >
          </view>
        </template>
      </view>
      <view
        v-if="instance.slots.default"
        :class="
          props.bem('label', [props.labelPosition, { disabled: disabled }])
        "
      >
        <slot></slot>
      </view>
    </template>
  </view>
</template>
<script lang="ts" setup>
import { computed, type PropType, getCurrentInstance, CSSProperties } from 'vue'
import {
  addUnit,
  truthProp,
  numericProp,
  unknownProp,
  makeRequiredProp,
  type Numeric
} from '../../libs/utils'
import zIcon from '../z-icon/z-icon.vue'

type CheckerShape = 'square' | 'round'
type CheckerDirection = 'horizontal' | 'vertical'
type CheckerLabelPosition = 'left' | 'right'
type CheckerParent = {
  props: {
    max?: Numeric
    shape?: CheckerShape | any
    disabled?: boolean
    iconSize?: Numeric
    direction?: CheckerDirection
    modelValue?: unknown | unknown[]
    checkedColor?: string
    iconName?: string
  }
}
const props = defineProps({
  name: unknownProp,
  disabled: Boolean,
  iconSize: numericProp,
  modelValue: unknownProp,
  checkedColor: String,
  labelPosition: String as PropType<CheckerLabelPosition>,
  labelDisabled: Boolean,
  bem: makeRequiredProp(Function),
  role: String,
  shape: String as PropType<CheckerShape | any>,
  parent: Object as PropType<CheckerParent | null>,
  checked: Boolean,
  bindGroup: truthProp,
  indeterminate: {
    type: Boolean as PropType<boolean | null>,
    default: null
  },
  iconName: String,
  componentSlot: Object,
  customStyle: Object
})
const emit = defineEmits(['click', 'toggle'])
const instance = getCurrentInstance()!
const getParentProp = <T extends keyof CheckerParent['props']>(name: T) => {
  if (props.parent && props.bindGroup) {
    // @ts-ignore
    return props.parent.props[name]
  }
}
const disabled = computed(() => {
  if (props.parent && props.bindGroup) {
    const disabled = getParentProp('disabled') || props.disabled

    if (props.role === 'checkbox') {
      const checkedCount = (getParentProp('modelValue') as unknown[]).length
      const max = getParentProp('max')
      const overlimit = max && checkedCount >= +max

      return disabled || (overlimit && !props.checked)
    }

    return disabled
  }

  return props.disabled
})

const shape = computed(() => {
  return props.shape || getParentProp('shape') || 'round'
})

const direction = computed(() => getParentProp('direction'))

const iconStyle = computed(() => {
  let style: CSSProperties = {}
  let indeterminateStyle: CSSProperties = {}
  let checkedStyle: CSSProperties = {}
  let disabledStyle: CSSProperties = {}
  if (props.role === 'checkbox') {
    style = {
      display: 'block',
      boxSizing: 'border-box',
      width: '1.25em',
      height: '1.25em',
      color: 'transparent',
      fontSize: '0.8em',
      lineHeight: '1.25',
      textAlign: 'center',
      border: '1rpx solid var(--z-checkbox-border-color)',
      transitionDuration: 'var(--z-checkbox-duration)',
      transitionProperty: 'color, border-color, background-color'
    }

    if (shape.value == 'round') {
      style['border-radius'] = '100%'
    }
    if (props.indeterminate) {
      indeterminateStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--z-white)',
        borderColor: 'var(--z-checkbox-checked-icon-color)',
        backgroundColor: 'var(--z-checkbox-checked-icon-color)'
      }
    } else {
      indeterminateStyle = {}
    }

    if (props.checked) {
      checkedStyle = {
        color: 'var(--z-white)',
        backgroundColor: 'var(--z-checkbox-checked-icon-color)',
        borderColor: 'var(--z-checkbox-checked-icon-color)'
      }
    } else {
      checkedStyle = {}
    }

    if (disabled.value) {
      disabledStyle = {
        'background-color': 'var(--z-checkbox-disabled-background)',
        'border-color': 'var(--z-checkbox-disabled-icon-color)'
      }
      if (props.checked) {
        disabledStyle['color'] = 'var(--z-checkbox-disabled-icon-color)'
      }
    } else {
      disabledStyle = {}
    }
  } else {
    style = {
      display: 'block',
      boxSizing: 'border-box',
      width: '1.25em',
      height: '1.25em',
      color: 'transparent',
      fontSize: '0.8em',
      lineHeight: '1.25',
      textAlign: 'center',
      border: '1rpx solid var(--z-radio-border-color)',
      transitionDuration: 'var(--z-radio-duration)',
      transitionProperty: 'color, border-color, background-color'
    }

    if (shape.value == 'round') {
      style['border-radius'] = '100%'
    }

    if (props.checked) {
      checkedStyle = {
        color: 'var(--z-white)',
        backgroundColor: 'var(--z-radio-checked-icon-color)',
        borderColor: 'var(--z-radio-checked-icon-color)'
      }
    } else {
      checkedStyle = {}
    }

    if (disabled.value) {
      disabledStyle = {
        'background-color': 'var(--z-radio-disabled-background)',
        'border-color': 'var(--z-radio-disabled-icon-color)'
      }
      if (props.checked) {
        disabledStyle['color'] = 'var(--z-radio-disabled-icon-color)'
      }
    } else {
      disabledStyle = {}
    }
  }

  const checkedColor = props.checkedColor || getParentProp('checkedColor')

  if (checkedColor && props.checked && !disabled.value) {
    return {
      ...style,
      ...indeterminateStyle,
      ...checkedStyle,
      ...disabledStyle,
      borderColor: checkedColor,
      backgroundColor: checkedColor
    }
  }
  return { ...style, ...indeterminateStyle, ...checkedStyle, ...disabledStyle }
})
const onClick = (event: any) => {
  if (!disabled.value && !props.labelDisabled) {
    emit('toggle')
  }
  emit('click', event)
}
const iconClick = (event: any) => {
  if (!disabled.value) {
    emit('toggle')
  }
  emit('click', event)
}
</script>
<script lang="ts">
export default {
  name: 'ZChecker',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss">
.z-checkbox {
  display: flex;
  align-items: center;
  overflow: hidden;
  user-select: none;

  &--disabled {
    cursor: not-allowed;
  }

  &--label-disabled {
    cursor: default;
  }

  &--horizontal {
    margin-right: var(--z-padding-sm);
  }

  &__icon {
    flex: none;
    height: 1em;
    font-size: var(--z-checkbox-size);
    line-height: 1em;
  }

  &__label {
    margin-left: var(--z-checkbox-label-margin);
    font-size: var(--z-checkbox-font-size);
    line-height: var(--z-checkbox-size);
    color: var(--z-checkbox-label-color);

    &--left {
      margin: 0 var(--z-checkbox-label-margin) 0 0;
    }

    &--disabled {
      color: var(--z-checkbox-disabled-label-color);
    }
  }
}

.z-radio {
  display: flex;
  align-items: center;
  overflow: hidden;
  user-select: none;

  &--disabled {
    cursor: not-allowed;
  }

  &--label-disabled {
    cursor: default;
  }

  &--horizontal {
    margin-right: var(--z-padding-sm);
  }

  &__icon {
    flex: none;
    height: 1em;
    font-size: var(--z-radio-size);
    line-height: 1em;

    &--dot {
      position: relative;
      box-sizing: border-box;
      width: var(--z-radio-size);
      height: var(--z-radio-size);
      border: 2rpx solid var(--z-radio-border-color);
      border-radius: 100%;
      transition-duration: var(--z-radio-duration);
      transition-property: border-color;

      &__icon {
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% - var(--z-radio-dot-size));
        height: calc(100% - var(--z-radio-dot-size));
        border-radius: 100%;
        transition-duration: var(--z-radio-duration);
        transition-property: background-color;
        transform: translate(-50%, -50%);
      }
    }

    &--checked {
      &.z-radio__icon--dot {
        border-color: var(--z-radio-checked-icon-color);

        .z-radio__icon--dot__icon {
          background: var(--z-radio-checked-icon-color);
        }
      }
    }
  }

  &__label {
    margin-left: var(--z-radio-label-margin);
    line-height: var(--z-radio-size);
    color: var(--z-radio-label-color);

    &--left {
      margin: 0 var(--z-radio-label-margin) 0 0;
    }

    &--disabled {
      color: var(--z-radio-disabled-label-color);
    }
  }
}
</style>
