<template>
  <view :class="bem()" :style="[rootStyle]">
    <slot></slot>
    <template v-for="(item, index) in barrageItems" :key="index">
      <view
        v-if="item.show"
        :class="item?.className"
        :data-id="item?.dataset?.id"
        :style="item.style"
        @animationend="animationEnd(item, index)"
        >{{ item.innerText }}</view
      >
    </template>
  </view>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch, getCurrentInstance } from 'vue'
import {
  createNamespace,
  makeArrayProp,
  makeNumberProp,
  makeNumericProp,
  truthProp,
  useExpose,
  raf,
  getRect,
  useComponentName
} from '../../libs/utils'
type BarrageExpose = {
  play(): void
  pause(): void
}
interface BarrageItem {
  id: string | number
  text: string | number
  show: boolean
  className: string
  dataset: Record<string, any>
  style: Record<string, string>
  innerText: string
}
const [name, bem] = createNamespace('barrage')
useComponentName(name)
const props = defineProps({
  top: makeNumericProp(10),
  rows: makeNumericProp(4),
  duration: makeNumericProp(4000),
  autoPlay: truthProp,
  delay: makeNumberProp(300),
  modelValue: makeArrayProp<BarrageItem>()
})
const emit = defineEmits(['update:modelValue'])
const instance = getCurrentInstance()
const className = bem('item') as string
const total = ref(0)
const barrageItems = ref<BarrageItem[]>([])
const createBarrageItem = (
  text: string | number,
  delay: number = props.delay
) => {
  const item: any = {}
  item.className = className
  item.innerText = String(text)
  item.style = {}
  item.dataset = {}
  item.style.animationDuration = `${props.duration}ms`
  item.style.animationDelay = `${delay}ms`
  item.style.animationTimingFunction = 'linear'
  item.show = true
  return item
}

const isInitBarrage = ref(true)
const isPlay = ref(props.autoPlay)

const appendBarrageItem = ({ id, text }: BarrageItem, i: number) => {
  const item = createBarrageItem(
    text,
    isInitBarrage.value ? i * props.delay : undefined
  )
  if (!props.autoPlay && isPlay.value === false) {
    item.style.animationPlayState = 'paused'
  }
  total.value++
  const top = ((total.value - 1) % +props.rows) * uni.upx2px(50) + +props.top
  item.style.top = `${top}px`
  item.dataset.id = String(id)
  barrageItems.value.push(item)
}

const updateBarrages = (newValue: BarrageItem[], oldValue: BarrageItem[]) => {
  const map = new Map(oldValue.map((item) => [item.id, item]))
  newValue.forEach((item, i) => {
    if (map.has(item.id)) {
      map.delete(item.id)
    } else {
      appendBarrageItem(item, i)
    }
  })
  map.forEach((item) => {
    const index = barrageItems.value.findIndex(
      (span) => span.dataset.id === String(item.id)
    )
    if (index > -1) {
      barrageItems.value.splice(index, 1)
    }
  })

  isInitBarrage.value = false
}

watch(
  // @ts-ignore
  () => props.modelValue.slice(),
  (newValue, oldValue) => {
    updateBarrages(newValue ? newValue : [], oldValue ? oldValue : [])
  },
  { deep: true }
)

const rootStyle = ref<{
  '--move-distance'?: string
}>({})

onMounted(() => {
  raf(() => {
    getRect(instance, '.z-barrage').then((res: any) => {
      rootStyle.value['--move-distance'] = `-${res.width}px`
      // @ts-ignore
      updateBarrages(props.modelValue, [])
    })
  })
})

const animationEnd = (item: any, index: number) => {
  item.show = false
  const allShowed = barrageItems.value.filter((item) => item.show)
  if (!allShowed.length) {
    emit('update:modelValue', [])
  }
}

const play = () => {
  isPlay.value = true
  barrageItems.value.forEach((item) => {
    // extra-zebra APP端-此处更改深层的数据不会触发页面更新，改为更改上一层的style
    // item.style.animationPlayState = 'running';
    item.style = {
      ...item.style,
      animationPlayState: 'running'
    }
  })
}

const pause = () => {
  isPlay.value = false
  barrageItems.value.forEach((item) => {
    // extra-zebra APP端-此处更改深层的数据不会触发页面更新，改为更改上一层的style
    // item.style.animationPlayState = 'paused';
    item.style = {
      ...item.style,
      animationPlayState: 'paused'
    }
  })
}

useExpose<BarrageExpose>({
  play,
  pause
})
defineExpose<BarrageExpose>({
  play,
  pause
})
</script>
<script lang="ts">
export default {
  name: 'ZBarrage',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-barrage {
  position: relative;
  overflow: hidden;

  &__item {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    padding-bottom: var(--z-barrage-space);
    font-family: var(--z-barrage-font);
    font-size: var(--z-barrage-font-size);
    font-weight: bold;
    line-height: 1;
    color: var(--z-barrage-color);
    text-shadow:
      2rpx 0 2rpx #000,
      0 2rpx 2rpx #000,
      0 -2rpx 2rpx #000,
      -2rpx 0 2rpx #000;
    white-space: nowrap;
    user-select: none;
    opacity: 0.75;
    transform: translateX(110%);
    animation-name: z-barrage;
    will-change: transform;
  }
}

@keyframes z-barrage {
  from {
    transform: translateX(110%);
  }

  to {
    transform: translateX(var(--move-distance));
  }
}
</style>
