<template>
  <view :class="[bem({ border: index && props.border })]">
    <z-cell
      :custom-class="
        bem('title', { disabled, expanded: expanded, borderless: !border })
      "
      :custom-style="cellStyle"
      :icon="props.icon"
      :size="props.size"
      :title="props.title"
      :value="props.value"
      :label="props.label"
      :center="props.center"
      :border="props.border"
      :icon-prefix="props.iconPrefix"
      :value-class="props.valueClass"
      :value-style="props.valueStyle"
      :label-class="props.labelClass"
      :title-class="props.titleClass"
      :title-style="props.titleStyle"
      :arrow-direction="props.arrowDirection"
      :required="props.required"
      :is-link="props.isLink"
      :clickable="props.clickable"
      :right-icon-style="rightIconStyle"
      :component-slots="instance.slots"
      @click="onClickTitle"
    >
      <template v-if="instance.slots.title" #title>
        <slot name="title" />
      </template>
      <template v-if="instance.slots.icon" #icon>
        <slot name="icon" />
      </template>
      <template v-if="instance.slots.value" #default>
        <slot name="value" />
      </template>
      <template v-if="instance.slots.label" #label>
        <slot name="label" />
      </template>
      <template v-if="instance.slots['right-icon']" #right-icon>
        <slot name="right-icon" />
      </template>
    </z-cell>
    <template v-if="lazyRender">
      <view
        v-show="show"
        class="z-collapse-item-rect"
        :class="bem('wrapper')"
        :style="[wrapperStyle]"
        @transitionend="onTransitionEnd"
      >
        <view class="z-collapse-content-rect" :class="bem('content')">
          <slot></slot>
        </view>
      </view>
    </template>
  </view>
</template>
<script lang="ts" setup>
import {
  ref,
  watch,
  computed,
  nextTick,
  type PropType,
  getCurrentInstance,
  CSSProperties
} from 'vue'
import {
  truthProp,
  numericProp,
  createNamespace,
  raf,
  doubleRaf,
  useParent,
  useExpose,
  useLazyRender,
  unknownProp,
  getRect,
  useComponentName
} from '../../libs/utils'

type CellSize = 'normal' | 'large'
type CellArrowDirection = 'up' | 'down' | 'left' | 'right'

const [componentName, bem] = createNamespace('collapse-item')
useComponentName(componentName)

const props = defineProps({
  icon: String,
  size: String as PropType<CellSize>,
  title: numericProp,
  value: numericProp,
  label: numericProp,
  center: Boolean,
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
  name: numericProp,
  isLink: truthProp,
  disabled: Boolean,
  readonly: Boolean,
  lazyRender: truthProp
})

const instance = getCurrentInstance()!

const wrapperRef = ref<HTMLElement>()
// @ts-ignore
const { parent, index } = useParent('z-collapse')
const nameData = computed(() => (props.name ? props.name : index.value))
const expanded = computed(() => parent.isExpanded(nameData.value))
const show = ref(expanded.value)
const lazyRender = useLazyRender(() => show.value || !props.lazyRender)
const wrapperStyle = ref({
  height: '0'
})
const onTransitionEnd = () => {
  if (!expanded.value) {
    show.value = false
  } else if (wrapperRef.value) {
    wrapperStyle.value['height'] = ''
  }
}
watch(
  expanded,
  (value, oldValue) => {
    if (oldValue === null) {
      return
    }
    if (value) {
      show.value = true
    }
    const tick = value ? nextTick : raf
    tick(() => {
      getRect(instance, '.z-collapse-content-rect').then((res: any) => {
        if (res) {
          const offsetHeight = res.height
          if (offsetHeight) {
            const contentHeight = `${offsetHeight}px`
            wrapperStyle.value['height'] = value ? '0' : contentHeight
            doubleRaf(() => {
              wrapperStyle.value['height'] = value ? contentHeight : '0'
            })
          } else {
            onTransitionEnd()
          }
        }
      })
    })
  },
  {
    immediate: true
  }
)

const toggle = (newValue = !expanded.value) => {
  // @ts-ignore
  parent.toggle(nameData.value, newValue)
}

const onClickTitle = () => {
  if (!props.disabled && !props.readonly) {
    toggle()
  }
}
const rightIconStyle = computed(() => {
  const styles: CSSProperties = {
    transform: 'rotate(90deg) translateZ(0)',
    transition: `transform var(--z-collapse-item-duration)`
  }
  if (expanded.value) {
    styles['transform'] = ' rotate(-90deg)'
  }
  if (props.disabled) {
    styles['color'] = 'var(--z-collapse-item-title-disabled-color)'
  }
  return { ...styles }
})

const cellStyle = computed(() => {
  const styles: CSSProperties = {
    position: 'relative'
  }
  if (props.disabled) {
    styles['color'] = 'var(--z-collapse-item-title-disabled-color)'
    styles['cursor'] = 'not-allowed'
  }
  return { ...styles }
})
useExpose({ toggle, expanded, itemName: nameData })
defineExpose({ toggle, expanded, itemName: nameData })
</script>
<script lang="ts">
export default {
  name: 'ZCollapseItem',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
@import '../z-style/mixins/hairline';

.z-collapse-item {
  &--border {
    &::after {
      @include hairline-top(
        var(--z-border-color),
        var(--z-padding-md),
        var(--z-padding-md)
      );
    }
  }

  &__title {
    &::after {
      right: var(--z-padding-md);
      display: none;
    }

    &--expanded {
      &::after {
        display: block;
      }
    }

    &--borderless {
      &::after {
        display: none;
      }
    }
  }

  &__wrapper {
    overflow: hidden;
    transition: height var(--z-collapse-item-duration) ease-in-out;
    will-change: height;
  }

  &__content {
    padding: var(--z-collapse-item-content-padding);
    font-size: var(--z-collapse-item-content-font-size);
    line-height: var(--z-collapse-item-content-line-height);
    color: var(--z-collapse-item-content-text-color);
    background: var(--z-collapse-item-content-background);
  }
}
</style>
