<template>
  <view
    v-if="inited"
    :class="[bem(), classes, customClass]"
    :style="[rootStyle({ currentDuration, display, customStyle })]"
    @transitionend="onTransitionEnd"
    @click="onClick"
  >
    <slot />
  </view>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { createNamespace, doubleRaf, useComponentName } from '../../libs/utils'

const [componentName, bem] = createNamespace('transition')
useComponentName(componentName)

const emit = defineEmits([
  'click',
  'before-enter',
  'enter',
  'before-leave',
  'leave',
  'after-leave',
  'after-enter'
])

const props = defineProps({
  name: {
    type: String,
    default: 'fade'
  },
  show: {
    type: Boolean,
    default: true
  },
  duration: {
    type: [Number, Object],
    default: 300
  },
  customStyle: Object,
  customClass: String
})

const getClassNames = (transitionName: any) => ({
  enter: `z-${transitionName}-enter z-${transitionName}-enter-active enter-class enter-active-class`,
  'enter-to': `z-${transitionName}-enter-to z-${transitionName}-enter-active enter-to-class enter-active-class`,
  leave: `z-${transitionName}-leave z-${transitionName}-leave-active leave-class leave-active-class`,
  'leave-to': `z-${transitionName}-leave-to z-${transitionName}-leave-active leave-to-class leave-active-class`
})

watch(
  () => props.show,
  (val) => {
    if (val === true) {
      observeShow(true, false)
    } else {
      observeShow(false, true)
    }
  }
)

const onClick = () => {
  emit('click')
}

const observeShow = (value: any, old: any) => {
  if (value === old) {
    return
  }
  value ? enter() : leave()
}

const status = ref('')
const inited = ref(false)
const display = ref(false)
const classes = ref('')
const currentDuration = ref('')
const transitionEnded = ref(false)

const enter = () => {
  const { duration, name } = props
  const classNames = getClassNames(name)
  const currentDurationData =
    typeof duration == 'object' ? duration.enter : duration
  status.value = 'enter'
  emit('before-enter')
  doubleRaf(() => {
    if (status.value !== 'enter') {
      return
    }
    emit('enter')
    inited.value = true
    display.value = true
    classes.value = classNames.enter
    currentDuration.value = currentDurationData
    doubleRaf(() => {
      if (status.value !== 'enter') {
        return
      }
      transitionEnded.value = false
      setTimeout(() => onTransitionEnd(), currentDurationData)
      classes.value = classNames['enter-to']
    })
  })
}

const leave = () => {
  if (!display.value) {
    return
  }
  const { duration, name } = props
  const classNames = getClassNames(name)
  const currentDurationData =
    typeof duration == 'object' ? duration.leave : duration
  status.value = 'leave'
  emit('before-leave')
  doubleRaf(() => {
    if (status.value !== 'leave') {
      return
    }
    emit('leave')
    classes.value = classNames.leave
    currentDuration.value = currentDurationData
    doubleRaf(() => {
      if (status.value !== 'leave') {
        return
      }
      transitionEnded.value = false
      setTimeout(() => onTransitionEnd(), currentDurationData)
      classes.value = classNames['leave-to']
    })
  })
}

const onTransitionEnd = () => {
  if (transitionEnded.value) {
    return
  }
  transitionEnded.value = true
  //@ts-ignore
  emit(`after-${status.value}`)
  const { show } = props
  if (!show && display.value) {
    display.value = false
  }
}
const rootStyle = (data: any) => {
  if (data.display) {
    return {
      '-webkit-transition-duration': data.currentDuration + 'ms',
      'transition-duration': data.currentDuration + 'ms',
      ...data.customStyle
    }
  } else {
    return {
      '-webkit-transition-duration': data.currentDuration + 'ms',
      'transition-duration': data.currentDuration + 'ms',
      ...data.customStyle,
      display: 'none'
    }
  }
}

onMounted(() => {
  if (props.show === true) {
    observeShow(true, false)
  }
})
</script>

<script lang="ts">
export default {
  name: 'ZTransition',
  options: {
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<style lang="scss" scoped>
.z-popup-slide-top-enter-active,
.z-popup-slide-left-enter-active,
.z-popup-slide-right-enter-active,
.z-popup-slide-bottom-enter-active {
  transition-timing-function: var(--z-ease-out);
}

.z-popup-slide-top-leave-active,
.z-popup-slide-left-leave-active,
.z-popup-slide-right-leave-active,
.z-popup-slide-bottom-leave-active {
  transition-timing-function: var(--z-ease-in);
}

@keyframes zebra-slide-up-enter {
  from {
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes zebra-slide-up-leave {
  to {
    transform: translate3d(0, -100%, 0);
  }
}

.z-popup-slide-top {
  &-enter-active {
    animation: zebra-slide-up-enter var(--z-duration-base) both
      var(--z-ease-out);
  }

  &-leave-active {
    animation: zebra-slide-up-leave var(--z-duration-base) both var(--z-ease-in);
  }
}

@keyframes zebra-right-enter {
  from {
    transform: translate3d(100%, -50%, 0);
  }
}

@keyframes zebra-right-leave {
  to {
    transform: translate3d(100%, -50%, 0);
  }
}

.z-popup-slide-right {
  &-enter-active {
    animation: zebra-right-enter var(--z-duration-base) both var(--z-ease-out);
  }

  &-leave-active {
    animation: zebra-right-leave var(--z-duration-base) both var(--z-ease-in);
  }
}

@keyframes zebra-slide-down-enter {
  from {
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes zebra-slide-down-leave {
  to {
    transform: translate3d(0, 100%, 0);
  }
}

.z-popup-slide-bottom {
  &-enter-active {
    animation: zebra-slide-down-enter var(--z-duration-base) both
      var(--z-ease-out);
  }

  &-leave-active {
    animation: zebra-slide-down-leave var(--z-duration-base) both
      var(--z-ease-in);
  }
}

@keyframes zebra-left-enter {
  from {
    transform: translate3d(-100%, -50%, 0);
  }
}

@keyframes zebra-left-leave {
  to {
    transform: translate3d(-100%, -50%, 0);
  }
}

.z-popup-slide-left {
  &-enter-active {
    animation: zebra-left-enter var(--z-duration-base) both var(--z-ease-out);
  }

  &-leave-active {
    animation: zebra-left-leave var(--z-duration-base) both var(--z-ease-in);
  }
}

@keyframes bounce-enter {
  0% {
    opacity: 0;
    transform: translate3d(0, -50%, 0) scale(0.7);
  }
}

@keyframes bounce-leave {
  100% {
    opacity: 0;
    transform: translate3d(0, -50%, 0) scale(0.9);
  }
}

.z-dialog-bounce {
  &-enter-active {
    animation: bounce-enter var(--z-duration-base) both var(--z-ease-out);
  }

  &-leave-active {
    animation: bounce-leave var(--z-duration-base) both var(--z-ease-in);
  }
}

.z-popover-zoom-h-enter,
.z-popover-zoom-h-leave-active {
  opacity: 0;
  transform: scaleY(0.8);
}

.z-popover-zoom-h-enter-active {
  transition-timing-function: var(--z-ease-out);
}

.z-popover-zoom-h-leave-active {
  transition-timing-function: var(--z-ease-in);
}

.z-popover-zoom-w-enter,
.z-popover-zoom-w-leave-active {
  opacity: 0;
  transform: scaleX(0.8);
}

.z-popover-zoom-w-enter-active {
  transition-timing-function: var(--z-ease-out);
}

.z-popover-zoom-w-leave-active {
  transition-timing-function: var(--z-ease-in);
}
</style>
