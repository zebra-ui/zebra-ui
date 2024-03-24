<template>
  <view :class="bem()">
    <view :class="bem('content')">
      <template v-if="hasCanvasSupport">
        <canvas
          :id="id"
          :canvas-id="id"
          disable-scroll
          @touchstart.passive="touchStart"
          @touchmove="touchMove"
          @touchend="touchEnd"
        />
      </template>
      <template v-else>
        <text>{{ props.tips }}</text>
      </template>
    </view>
    <view :class="bem('footer')">
      <z-button size="small" :custom-style="buttonStyle" @click="clear">
        {{ props.clearButtonText || '清空' }}
      </z-button>
      <z-button
        type="primary"
        size="small"
        :custom-style="buttonStyle"
        @click="submit"
      >
        {{ props.confirmButtonText || '确认' }}
      </z-button>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { computed, onMounted, getCurrentInstance } from 'vue'
import {
  makeNumberProp,
  makeStringProp,
  createNamespace,
  useId,
  getRect,
  useExpose,
  useComponentName
} from '../../libs/utils'

const [name, bem] = createNamespace('signature')
useComponentName(name)

const instance = getCurrentInstance()

let hasCanvasSupport: boolean = true

const props = defineProps({
  tips: String,
  type: makeStringProp('png'),
  penColor: makeStringProp('#000'),
  lineWidth: makeNumberProp(3),
  clearButtonText: String,
  backgroundColor: makeStringProp(''),
  confirmButtonText: String
})

const id = useId()

const emit = defineEmits(['submit', 'clear', 'start', 'end', 'signing'])

const ctx = computed(() => {
  const canvas = uni.createCanvasContext(id, instance)

  if (!canvas) {
    hasCanvasSupport = false
    return null
  }
  return canvas
})

let canvasWidth = 0
let canvasHeight = 0
let canvasRect: DOMRect

const touchStart = (event: TouchEvent) => {
  if (!ctx.value) {
    return false
  }
  ctx.value.beginPath()
  ctx.value.lineWidth = props.lineWidth
  // @ts-ignore
  ctx.value.strokeStyle = props.penColor
  getRect(instance, `#${id}`).then((res: any) => {
    canvasRect = res
    const touch = event.touches[0]
    const mouseX = touch.clientX - (canvasRect?.left || 0)
    const mouseY = touch.clientY - (canvasRect?.top || 0)
    ctx.value && ctx.value.moveTo(mouseX, mouseY)
  })

  emit('start')
}

const touchMove = (event: any) => {
  if (!ctx.value) {
    return false
  }
  const touch = event.touches[0]
  // const mouseX = touch.clientX - (canvasRect?.left || 0);
  // const mouseY = touch.clientY - (canvasRect?.top || 0);
  const mouseX = touch.x
  const mouseY = touch.y

  ctx.value.lineCap = 'round'
  ctx.value.lineJoin = 'round'
  ctx.value.lineTo(mouseX, mouseY)
  ctx.value.stroke()
  ctx.value.draw(true)
  ctx.value.moveTo(mouseX, mouseY)
  emit('signing', event)
}

const touchEnd = (event: TouchEvent) => {
  emit('end')
}

const setCanvasBgColor = (ctx: CanvasRenderingContext2D | null | undefined) => {
  if (ctx && props.backgroundColor) {
    // @ts-ignore
    ctx.fillStyle = props.backgroundColor
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
    // @ts-ignore
    ctx.draw()
  }
}

const submit = () => {
  const canvas = ctx.value
  if (!canvas) {
    return
  }
  uni.canvasToTempFilePath(
    {
      canvasId: id,
      success: (res) => {
        emit('submit', {
          image: res.tempFilePath,
          width: canvasWidth,
          height: canvasHeight,
          canvas
        })
      },
      fail: (error) => {
        console.error(error)
      }
    },
    instance
  )
}

const clear = () => {
  if (ctx.value) {
    ctx.value.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.value.closePath()
    // @ts-ignore
    setCanvasBgColor(ctx.value)
    ctx.value.draw()
  }
  emit('clear')
}

const initialize = () => {
  if (hasCanvasSupport && ctx.value) {
    const canvas = ctx.value
    const dpr = 1

    getRect(instance, '.z-signature__content').then((res: any) => {
      // @ts-ignore
      canvasWidth = canvas.width = (res.width || 0) * dpr
      // @ts-ignore
      canvasHeight = canvas.height = (res.height || 0) * dpr
      ctx.value?.scale(dpr, dpr)
      // @ts-ignore
      setCanvasBgColor(ctx.value)
    })
  }
}

const resize = () => {
  if (ctx.value) {
    initialize()
  }
}

const buttonStyle = computed(() => {
  const styles = {
    padding: `0 var(--z-padding-md)`,
    marginTop: 'var(--z-padding-xs)',
    marginLeft: 'var(--z-padding-xs)'
  }
  return styles
})

onMounted(initialize)
useExpose<any>({
  resize
})
</script>
<script lang="ts">
export default {
  name: 'ZSignature',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-signature {
  padding: var(--z-signature-padding);

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--z-signature-content-height);
    overflow: hidden;
    background-color: var(--z-signature-content-background);
    border: var(--z-signature-content-border);
    border-radius: var(--z-radius-lg);

    canvas {
      width: 100%;
      height: 100%;
    }
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
