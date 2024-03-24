<template>
  <view :class="bem()">
    <template v-if="instance.slots.default">
      <slot :current="current"></slot>
    </template>
    <template v-else>
      {{ timeText }}
    </template>
  </view>
</template>
<script lang="ts" setup>
import { watch, computed, getCurrentInstance } from 'vue'
import {
  truthProp,
  makeStringProp,
  makeNumericProp,
  createNamespace,
  useCountDown,
  useExpose,
  useComponentName
} from '../../libs/utils'
import { parseFormat } from './utils'
const [name, bem] = createNamespace('count-down')
useComponentName(name)
const props = defineProps({
  time: makeNumericProp(0),
  format: makeStringProp('HH:mm:ss'),
  autoStart: truthProp,
  millisecond: Boolean
})
const instance = getCurrentInstance()!
const emit = defineEmits(['change', 'finish'])
const { start, pause, reset, current } = useCountDown({
  time: +props.time,
  millisecond: props.millisecond,
  onChange: (current) => emit('change', current),
  onFinish: () => emit('finish')
})
// @ts-ignore
const timeText = computed(() => parseFormat(props.format, current.value))

const resetTime = () => {
  reset(+props.time)

  if (props.autoStart) {
    start()
  }
}

watch(() => props.time, resetTime, { immediate: true })

useExpose({
  start,
  pause,
  reset: resetTime
})
defineExpose({
  start,
  pause,
  reset: resetTime
})
</script>
<script lang="ts">
export default {
  name: 'ZCountDown',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-count-down {
  font-size: var(--z-count-down-font-size);
  line-height: var(--z-count-down-line-height);
  color: var(--z-count-down-text-color);
}
</style>
