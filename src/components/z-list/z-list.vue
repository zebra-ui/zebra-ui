<template>
  <view class="z-list-rect" :class="bem()">
    <template v-if="props.direction === 'down'">
      <slot></slot>
    </template>
    <template v-else>
      <view :class="bem('placeholder')" />
    </template>
    <template v-if="loading && !props.finished && !props.disabled">
      <view :class="bem('loading')">
        <template v-if="instance.slots.loading">
          <slot name="loading"></slot>
        </template>
        <template v-else>
          <z-loading size="var(--z-list-loading-icon-size)">
            {{ props.loadingText || '加载中' }}
          </z-loading>
        </template>
      </view>
    </template>
    <template
      v-if="props.finished && (instance.slots.finished || props.finishedText)"
    >
      <view :class="bem('finished-text')">
        <template v-if="instance.slots.finished">
          <slot name="finished"></slot>
        </template>
        <template v-else>
          {{ props.finishedText }}
        </template>
      </view>
    </template>
    <template v-if="props.error && (instance.slots.error || props.errorText)">
      <view :class="bem('error-text')" @click="clickErrorText">
        <template v-if="instance.slots.error">
          <slot name="error"></slot>
        </template>
        <template v-else>
          {{ props.errorText }}
        </template>
      </view>
    </template>
    <template v-if="props.direction === 'up'">
      <slot></slot>
    </template>
    <template v-else>
      <view :class="bem('placeholder')" />
    </template>
  </view>
</template>
<script lang="ts" setup>
import {
  ref,
  watch,
  computed,
  nextTick,
  onUpdated,
  onMounted,
  type PropType,
  getCurrentInstance,
  inject,
  onBeforeUnmount
} from 'vue'
import {
  truthProp,
  makeStringProp,
  makeNumericProp,
  createNamespace,
  useExpose,
  getRect,
  raf,
  useComponentName
} from '../../libs/utils'

type ListDirection = 'up' | 'down'

const [name, bem] = createNamespace('list')
useComponentName(name)

const instance = getCurrentInstance()!

const props = defineProps({
  error: Boolean,
  offset: makeNumericProp(30),
  loading: Boolean,
  disabled: Boolean,
  finished: Boolean,
  scroller: Object as PropType<Element>,
  errorText: String,
  direction: makeStringProp<ListDirection>('down'),
  loadingText: String,
  finishedText: String,
  immediateCheck: truthProp,
  id: String
})

const emit = defineEmits(['load', 'update:error', 'update:loading'])

const loading = ref(props.loading)
const tabStatus = inject('z-tab')
const windowHeight = computed(() => {
  return uni.getSystemInfoSync().windowHeight
})
const check = () => {
  nextTick(() => {
    if (
      loading.value ||
      props.finished ||
      props.disabled ||
      props.error ||
      // @ts-ignore
      tabStatus?.value === false
    ) {
      isMountedLoad.value = false
      return
    }

    const { direction } = props
    const offset = +props.offset
    getRect(instance, '.z-list__placeholder').then((res: any) => {
      let isReachEdge = false
      const placeholderRect = res
      // @ts-ignore
      if (direction === 'up') {
        // @TODO 下拉加载---未实现
        // isReachEdge = scrollParentRect.top - placeholderRect.top <= offset;
      } else {
        isReachEdge = placeholderRect.bottom - windowHeight.value <= offset
      }

      if (isReachEdge) {
        isMountedLoad.value = false
        loading.value = true
        emit('update:loading', true)
        emit('load')
      }
    })
  })
}
const clickErrorText = () => {
  emit('update:error', false)
  check()
}

const isMountedLoad = ref(false)

watch(() => [props.loading, props.finished, props.error], check)

if (tabStatus) {
  // @ts-ignore
  watch(tabStatus, (tabActive) => {
    if (tabActive && !isMountedLoad.value) {
      check()
    }
  })
}

const onPageScroll = () => {
  check()
}

let contentObserver = ref()

const isHidden = () => {
  raf(() => {
    if (contentObserver.value != null) {
      contentObserver.value.disconnect()
    }
    const contentObserverData = uni
      .createIntersectionObserver(instance, {
        thresholds: [0, 0.5, 1],
        observeAll: true
      })
      .relativeToViewport()
    contentObserver.value = contentObserverData
    contentObserver.value.relativeToViewport({
      top: 0,
      left: 0
    })
    contentObserver.value.observe('.z-list-rect', (res: any) => {
      // @TODO =====> 判断显隐
    })
  })
}

onUpdated(() => {
  loading.value = props.loading!
})

onMounted(() => {
  if (props.immediateCheck) {
    isMountedLoad.value = true
    check()
  }

  isHidden()

  uni.$on(`z-list-${props.id}`, onPageScroll)
})

onBeforeUnmount(() => {
  uni.$off(`z-list-${props.id}`)
})

useExpose({ check })

defineExpose({ check })
</script>
<script lang="ts">
export default {
  name: 'ZList',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-list {
  &__loading,
  &__finished-text,
  &__error-text {
    font-size: var(--z-list-text-font-size);
    line-height: var(--z-list-text-line-height);
    color: var(--z-list-text-color);
    text-align: center;
  }

  &__loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__placeholder {
    height: 0;
    pointer-events: none;
  }
}
</style>
