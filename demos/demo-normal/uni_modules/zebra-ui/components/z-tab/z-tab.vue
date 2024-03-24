<template>
  <template v-if="animated || swipeable">
    <view
      class="swipe-item"
      :class="bem('panel-wrapper', { inactive: hasInactiveClass })"
      :style="[itemStyle]"
    >
      <view :class="bem('panel')">
        <slot></slot>
      </view>
    </view>
  </template>
  <template v-else>
    <view
      v-show="show"
      :id="id"
      :class="bem('panel')"
      :tabindex="show ? 0 : -1"
    >
      <slot></slot>
    </view>
  </template>
</template>

<script lang="ts" setup>
import {
  ref,
  watch,
  onMounted,
  computed,
  nextTick,
  reactive,
  getCurrentInstance,
  type PropType,
  provide
} from 'vue'
import {
  createNamespace,
  numericProp,
  unknownProp,
  truthProp,
  useId,
  useExpose,
  useParent,
  getRect,
  useComponentName
} from '../../libs/utils'

const [componentName, bem] = createNamespace('tab')
useComponentName(componentName)

const props = defineProps({
  dot: Boolean,
  name: numericProp,
  badge: numericProp,
  title: String,
  disabled: Boolean,
  titleClass: unknownProp,
  titleStyle: [String, Object] as PropType<string | any>,
  showZeroBadge: truthProp,
  slotContent: null
})

const id = useId()
const inited = ref(false)
const instance = getCurrentInstance()
// @ts-ignore
const { parent, index } = useParent('z-tabs')

const getName = () => (props.name ? props.name : index.value)

const init = () => {
  inited.value = true

  if (parent.props.lazyRender) {
    nextTick(() => {
      parent.onRendered(getName(), props.title)
    })
  }
}

const active: any = ref(false)
const { animated, swipeable, scrollspy } = parent.props
const show = ref(scrollspy || active.value)
const hasInactiveClass = ref(!active.value)
watch(
  () => [parent.currentName.value],
  () => {
    const isActive: boolean = getName() === parent.currentName.value
    if (isActive && !inited.value) {
      init()
    }

    active.value = isActive
  },
  {
    immediate: true
  }
)

watch(
  () => [scrollspy, active.value],
  () => {
    show.value = scrollspy || active.value
    if (active.value) {
      hasInactiveClass.value = false
    } else {
      hasInactiveClass.value = true
    }
  },
  { immediate: true }
)
const stateSwipeItem = reactive({
  offset: 0,
  inited: false,
  mounted: false
})

const itemStyle = computed(() => {
  const style: any = {}
  if (parent) {
    if (parent.size.value) {
      style['width'] = `${parent.size.value}px`
    }

    if (stateSwipeItem.offset) {
      style.transform = `translateX(${stateSwipeItem.offset}px)`
    }
  }
  return { ...style }
})

const setOffset = (offset: number) => {
  stateSwipeItem.offset = offset
}

const heightRect = ref(0)

onMounted(() => {
  nextTick(() => {
    stateSwipeItem.mounted = true
    getRect(instance, '.z-tab__panel').then((res: any) => {
      heightRect.value = res.height
    })
  })
})

provide('z-tab', active)
useExpose({
  id,
  active,
  bem,
  init,
  setOffset,
  heightRect
})
</script>

<script lang="ts">
export default {
  name: 'ZTab',
  options: {
    virtualHost: true
  }
}
</script>

<style lang="scss" scoped>
.z-tab {
  &__panel {
    &,
    &-wrapper {
      box-sizing: border-box;
      flex-shrink: 0;
      width: 100%;
    }

    &-wrapper--inactive {
      height: 0;
      overflow: visible;
    }
  }

  .swipe-item {
    position: relative;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
