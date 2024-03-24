<template>
  <view :class="bem()">
    <template v-for="(item, index) in targetNumArr" :key="index">
      <z-rolling-text-item
        :figure-arr="
          isCustomType ? getTextArrByIdx(index) : getFigureArr(index)
        "
        :duration="props.duration"
        :direction="props.direction"
        :is-start="rolling"
        :height="props.height"
        :delay="getDelay(index, itemLength)"
      ></z-rolling-text-item>
    </template>
  </view>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import {
  createNamespace,
  makeArrayProp,
  makeNumberProp,
  makeStringProp,
  truthProp,
  padZero,
  raf,
  useExpose,
  useComponentName
} from '../../libs/utils'
import zRollingTextItem from './z-rolling-text-item.vue'
import {
  RollingTextDirection,
  RollingTextStopOrder,
  RollingTextExpose
} from './types'
const [name, bem] = createNamespace('rolling-text')
useComponentName(name)
const CIRCLE_NUM = 2
const props = defineProps({
  startNum: makeNumberProp(0),
  targetNum: Number,
  textList: makeArrayProp<string>(),
  duration: makeNumberProp(2),
  autoStart: truthProp,
  direction: makeStringProp<RollingTextDirection>('down'),
  stopOrder: makeStringProp<RollingTextStopOrder>('ltr'),
  height: makeNumberProp(40)
})
const isCustomType = computed(
  () => Array.isArray(props.textList) && props.textList.length
)

const itemLength = computed(() => {
  if (isCustomType.value) return props.textList[0].length
  return `${Math.max(props.startNum, props.targetNum!)}`.length
})

const getTextArrByIdx = (idx: number) => {
  const result = []
  // @ts-ignore
  for (let i = 0; i < props.textList.length; i++) {
    result.push(props.textList[i][idx])
  }
  return result
}

const targetNumArr = computed(() => {
  if (isCustomType.value) return new Array(itemLength.value).fill('')
  return padZero(props.targetNum!, itemLength.value).split('')
})

const startNumArr = computed(() =>
  padZero(props.startNum, itemLength.value).split('')
)

const getFigureArr = (i: number) => {
  const start = +startNumArr.value[i]
  const target = +targetNumArr.value[i]
  const result = []
  for (let i = start; i <= 9; i++) {
    result.push(i)
  }
  for (let i = 0; i <= CIRCLE_NUM; i++) {
    for (let j = 0; j <= 9; j++) {
      result.push(j)
    }
  }
  for (let i = 0; i <= target; i++) {
    result.push(i)
  }
  return result
}

const getDelay = (i: number, len: number) => {
  // @ts-ignore
  if (props.stopOrder === 'ltr') return 0.2 * i
  return 0.2 * (len - 1 - i)
}

const rolling = ref(props.autoStart)

const start = () => {
  rolling.value = true
}

const reset = () => {
  rolling.value = false

  if (props.autoStart) {
    raf(() => start())
  }
}

watch(
  () => props.autoStart,
  (value) => {
    if (value) {
      start()
    }
  }
)

useExpose<RollingTextExpose>({
  start,
  reset
})
defineExpose<RollingTextExpose>({
  start,
  reset
})
</script>
<script lang="ts">
export default {
  name: 'ZRollingText',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-rolling-text {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--z-rolling-text-font-size);
  color: var(--z-rolling-text-color);
}
</style>
