<template>
  <view :style="containerStyle">
    <view :class="bem()" :style="containerStyle">
      <view :class="[bem('wrap', { fixed })]" :style="wrapStyle">
        <slot />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import {
  ref,
  onMounted,
  onUnmounted,
  watch,
  nextTick,
  getCurrentInstance,
  computed
} from 'vue'
import {
  createNamespace,
  raf,
  windowWidth,
  windowHeight,
  useComponentName
} from '../../libs/utils'

const [name, bem] = createNamespace('sticky')
useComponentName(name)

const emit = defineEmits(['scroll'])

const instance = getCurrentInstance()

const props = defineProps({
  zIndex: {
    type: Number,
    default: 99
  },
  offsetTop: {
    type: Number,
    default: 0
  },
  disabled: {
    type: Boolean,
    default: false
  },
  container: {
    type: null
  },
  scrollTop: {
    type: Number,
    default: 0
  },
  h5NavHeight: {
    type: Number,
    default: 44
  },
  customNavbar: Boolean
})

const height = ref(0)
const width = ref(0)
const fixed = ref(false)
const transform = ref(0)
const containerHeight = ref(0)
const stickyTop = ref(0)

let contentObserver: any
let containerObserver: any
let relativeTop: any

const isReset = ref(false)

watch(
  () => props.offsetTop,
  (newVal) => {
    if (typeof newVal !== 'number') {
      return
    }
    if (props.scrollTop) {
      initObserver('scroll')
    } else {
      initObserver('page')
    }
  }
)

watch(
  () => props.disabled,
  (newVal) => {
    if (newVal) {
      transform.value = 0
      fixed.value = false
      disconnectObserver()
    } else {
      initObserver('page')
    }
  }
)

watch(
  () => props.container,
  (newVal) => {
    if (!newVal || !height.value) {
      return
    }
    observerContainer()
  }
)

watch(
  () => props.scrollTop,
  () => {
    initObserver('scroll')
  }
)

const wrapStyle = computed(() => {
  if (!fixed.value || isReset.value) {
    return
  }
  return {
    transform: transform.value
      ? 'translate3d(0, ' + transform.value + 'px, 0)'
      : '',
    top: fixed.value ? stickyTop.value + 'px' : '',
    'z-index': props.zIndex,
    width: `${width.value}px`,
    height: `${height.value}px`
  }
})

const containerStyle = computed(() => {
  if (isReset.value) {
    return
  }
  if (fixed.value) {
    return {
      width: `${width.value}px`,
      height: `${height.value}px`
    }
  }
})

const getRect = (selector: any) => {
  return new Promise((resolve, reject) => {
    uni
      .createSelectorQuery()
      .in(instance)
      .select(selector)
      .boundingClientRect((rect) => {
        if (rect) {
          resolve(rect)
        } else {
          reject(new Error(`can not find selector: ${selector}`))
        }
      })
      .exec()
  })
}
const customNavbarHeight = ref(0)
const initObserver = (type: any) => {
  if (props.customNavbar) {
    if (uni.getSystemInfoSync().uniPlatform == 'web') {
      stickyTop.value = props.offsetTop + customNavbarHeight.value
    } else {
      stickyTop.value =
        props.offsetTop +
        customNavbarHeight.value +
        // @ts-ignore
        uni.getSystemInfoSync().statusBarHeight
    }
  } else {
    if (uni.getSystemInfoSync().uniPlatform == 'web') {
      stickyTop.value = props.offsetTop + props.h5NavHeight
    } else {
      stickyTop.value = props.offsetTop
    }
  }
  disconnectObserver()
  raf(() => {
    getRect('.z-sticky').then((rect: any) => {
      height.value = rect.height
      width.value = rect.width
      transform.value = 0
      if (type == 'page') {
        observerContent()
        observerContainer()
      } else {
        if (props.offsetTop >= rect.top) {
          emit('scroll', {
            scrollTop: props.scrollTop,
            isFixed: true
          })
          fixed.value = true
          transform.value = 0
        } else {
          emit('scroll', {
            scrollTop: props.scrollTop,
            isFixed: false
          })
          fixed.value = false
        }
      }
    })
  })
}
const disconnectObserver = (observerName: any = null) => {
  if (observerName) {
    if (observerName == 'contentObserver') {
      contentObserver && contentObserver.disconnect()
    }
    if (observerName == 'containerObserver') {
      containerObserver && containerObserver.disconnect()
    }
  } else {
    contentObserver && contentObserver.disconnect()
    containerObserver && containerObserver.disconnect()
  }
}
const observerContent = () => {
  disconnectObserver('contentObserver')
  let contentObserverData = uni.createIntersectionObserver(instance, {
    thresholds: [1],
    initialRatio: 1
  })
  contentObserverData.relativeToViewport({
    top: -stickyTop.value
  })
  contentObserverData.observe('.z-sticky', (res) => {
    if (props.disabled) {
      return
    }
    setFixed(res.boundingClientRect.top)
  })
  contentObserver = contentObserverData
}
const observerContainer = () => {
  let rect = props.container
  if (!rect) {
    return
  }
  disconnectObserver('containerObserver')

  nextTick(() => {
    getRect('.z-sticky').then((contentRect: any) => {
      let _contentTop = contentRect.top
      let _containerTop = rect.top
      let _containerHeight = rect.height
      let _relativeTop = _contentTop - _containerTop
      let containerObserver = uni.createIntersectionObserver(instance, {
        thresholds: [1],
        initialRatio: 1
      })

      containerObserver.relativeToViewport({
        top: _containerHeight - height.value - stickyTop.value - _relativeTop
      })
      containerObserver.observe('.z-sticky', (res) => {
        if (props.disabled) {
          return
        }
        if (
          stickyTop.value + contentRect.height >
          _containerHeight + res.boundingClientRect.top
        ) {
          transform.value = _containerHeight - contentRect.height
        } else if (stickyTop.value >= _contentTop) {
          transform.value = 0
        } else {
          transform.value = 0
        }
        setFixed(res.boundingClientRect.top)
      })
      relativeTop = _relativeTop
      containerHeight.value = _containerHeight
      // eslint-disable-next-line no-self-assign
      containerObserver = containerObserver
    })
  })
}
const setFixed = (top: any = 0) => {
  let _relativeTop = relativeTop
  let fixedData =
    containerHeight.value && height.value
      ? top >=
          height.value +
            stickyTop.value +
            _relativeTop -
            containerHeight.value && top < stickyTop.value
      : top <= stickyTop.value
  if (fixedData) {
    transform.value = 0
  }
  emit('scroll', {
    scrollTop: top,
    isFixed: fixedData
  })
  fixed.value = fixedData
}

watch([windowWidth, windowHeight], () => {
  if (!fixed.value) {
    return
  }
  isReset.value = true
  nextTick(() => {
    getRect('.z-sticky').then((contentRect: any) => {
      const rootRect = contentRect
      width.value = rootRect.width
      height.value = rootRect.height
      isReset.value = false
    })
  })
})

onMounted(() => {
  if (props.customNavbar) {
    uni.$on('zNavbarHeight', (value) => {
      customNavbarHeight.value = value
      if (!props.disabled) {
        initObserver('page')
      }
    })
  } else {
    if (!props.disabled) {
      initObserver('page')
    }
  }
})

onUnmounted(() => {
  disconnectObserver()
  uni.$off('zNavbarHeight')
})

defineExpose({
  initObserver
})
</script>

<style lang="scss" scoped>
.z-sticky__wrap--fixed {
  position: fixed;
  z-index: var(--z-sticky-z-index);
}
</style>
