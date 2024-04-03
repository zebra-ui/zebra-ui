<template>
  <view :class="bem()">
    <canvas
      :class="bem('canvas')"
      :type="type"
      :style="[{ width: addUnit(size), height: addUnit(size) }, canvasStyle]"
      :id="id"
      :canvas-id="id"
    ></canvas>
    <view v-if="!text" :class="bem('text')">
      <slot></slot>
    </view>
    <cover-view v-else :class="bem('text')">{{ text }}</cover-view>
  </view>
</template>
<script lang="ts" setup>
import {
  type PropType,
  getCurrentInstance,
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  computed
} from 'vue'
import {
  truthProp,
  makeStringProp,
  createNamespace,
  addUnit,
  makeNumericProp,
  makeNumberProp,
  isObject,
  useId,
  useComponentName
} from '../../libs/utils'
type CircleStartPosition = 'top' | 'right' | 'bottom' | 'left'
const PERIMETER = 2 * Math.PI
const BEGIN_ANGLE = -Math.PI / 2
const format = (rate: number) => {
  return Math.min(Math.max(rate, 0), 100)
}
const STEP = 1
const [name, bem] = createNamespace('circle')
useComponentName(name)
const instance = getCurrentInstance()
const props = defineProps({
  text: String,
  type: makeStringProp(''),
  size: makeNumericProp(100),
  fill: makeStringProp(''),
  rate: makeNumericProp(100),
  speed: makeNumericProp(50),
  color: {
    type: [String, Object],
    default: '#1989fa'
  },
  clockwise: truthProp,
  layerColor: makeStringProp('#ffffff'),
  currentRate: makeNumberProp(0),
  strokeWidth: makeNumericProp(4),
  // eslint-disable-next-line no-undef
  strokeLinecap: String as PropType<CanvasLineCap>,
  startPosition: makeStringProp<CircleStartPosition>('top'),
  lineCap: makeStringProp('round')
})

const emit = defineEmits(['update:currentRate'])

const id = useId()

let inited: boolean

const hoverColor = ref('#1989fa')

const currentValue = ref(0)

const getContext = () => {
  const { type, size } = props
  // @ts-ignore
  if (type === '') {
    const ctx = uni.createCanvasContext(id, instance)
    return Promise.resolve(ctx)
  }

  const dpr = uni.getSystemInfoSync().pixelRatio

  return new Promise((resolve) => {
    uni
      .createSelectorQuery()
      .in(instance)
      .select(`#${id}`)
      .node((res) => {
        const canvas = res[0].node
        const ctx = canvas.getContext(type)

        if (!inited) {
          inited = true
          // @ts-ignore
          canvas.width = size * dpr
          // @ts-ignore
          canvas.height = size * dpr
          ctx.scale(dpr, dpr)
        }

        resolve(adaptor(ctx))
      })
      .exec()
  })
}

const canvasStyle = computed(() => {
  const ROTATE_ANGLE_MAP: Record<CircleStartPosition, number> = {
    top: 0,
    right: 90,
    bottom: 180,
    left: 270
  }
  // @ts-ignore
  const angleValue = ROTATE_ANGLE_MAP[props.startPosition]
  if (angleValue) {
    return {
      transform: `rotate(${angleValue}deg)`
    }
  }
})
const setHoverColor = () => {
  const { color, size } = props

  if (isObject(color)) {
    return getContext().then((context) => {
      if (!context) return
      // @ts-ignore
      const LinearColor = context.createLinearGradient(size, 0, 0, 0)
      Object.keys(color)
        .sort((a, b) => parseFloat(a) - parseFloat(b))
        .map((key) =>
          LinearColor.addColorStop(parseFloat(key) / 100, color[key] as string)
        )
      hoverColor.value = LinearColor
    })
  }

  hoverColor.value = color
  return Promise.resolve()
}
const renderLayerCircle = (context: CanvasRenderingContext2D) => {
  const { layerColor, fill } = props
  // @ts-ignore
  presetCanvas(context, layerColor, 0, PERIMETER, fill)
}

const renderHoverCircle = (
  context: CanvasRenderingContext2D,
  formatValue: any
) => {
  const { clockwise } = props
  const progress = PERIMETER * (formatValue / 100)
  const endAngle = clockwise
    ? BEGIN_ANGLE + progress
    : 3 * Math.PI - (BEGIN_ANGLE + progress)

  presetCanvas(context, hoverColor.value, BEGIN_ANGLE, endAngle)
}

const drawCircle = (currentValue: any) => {
  const { size } = props

  getContext().then((context) => {
    if (!context) return
    // @ts-ignore
    context.clearRect(0, 0, size, size)
    renderLayerCircle(context as CanvasRenderingContext2D)

    const formatValue = format(currentValue)
    renderHoverCircle(context as CanvasRenderingContext2D, formatValue)
    // @ts-ignore
    emit('update:currentRate', format(parseFloat(props.rate.toFixed(1))))
    // @ts-ignore
    context.draw()
  })
}

let interval = ref()

const reRender = () => {
  const { rate, speed } = props

  if (Number(speed) <= 0 || Number(speed) > 1000) {
    drawCircle(rate)
    return
  }

  if (currentValue.value == rate) {
    drawCircle(rate)
    return
  }

  clearMockInterval()
  const run = () => {
    interval.value = setTimeout(
      () => {
        if (currentValue.value !== rate) {
          if (Math.abs(currentValue.value - Number(rate)) < STEP) {
            currentValue.value = Number(rate)
          } else if (currentValue.value < Number(rate)) {
            currentValue.value += STEP
          } else {
            currentValue.value -= STEP
          }
          drawCircle(currentValue.value)
          run()
        } else {
          clearMockInterval()
        }
      },
      1000 / Number(speed)
    )
  }
  run()
}

const clearMockInterval = () => {
  if (interval.value) {
    clearTimeout(interval.value)
    interval.value = null
  }
}

const presetCanvas = (
  context: CanvasRenderingContext2D,
  strokeStyle: string,
  beginAngle: number,
  endAngle: number,
  fill?: string
) => {
  const { strokeWidth, lineCap, clockwise, size } = props
  // @ts-ignore
  const position = size / 2
  // @ts-ignore
  const radius = position - strokeWidth / 2

  // @ts-ignore
  context.setStrokeStyle(strokeStyle)
  // @ts-ignore
  context.setLineWidth(strokeWidth)
  // @ts-ignore
  context.setLineCap(lineCap)

  context.beginPath()
  context.arc(position, position, radius, beginAngle, endAngle, !clockwise)
  context.stroke()
  if (fill) {
    // @ts-ignore
    context.setFillStyle(fill)
    context.fill()
  }
}

const adaptor = (ctx: any) => {
  // @ts-ignore
  return Object.assign(ctx, {
    setStrokeStyle(val: any) {
      ctx.strokeStyle = val
    },
    setLineWidth(val: any) {
      ctx.lineWidth = val
    },
    setLineCap(val: any) {
      ctx.lineCap = val
    },
    setFillStyle(val: any) {
      ctx.fillStyle = val
    },
    setFontSize(val: any) {
      ctx.font = String(val)
    },
    setGlobalAlpha(val: any) {
      ctx.globalAlpha = val
    },
    setLineJoin(val: any) {
      ctx.lineJoin = val
    },
    setTextAlign(val: any) {
      ctx.textAlign = val
    },
    setMiterLimit(val: any) {
      ctx.miterLimit = val
    },
    setShadow(offsetX: any, offsetY: any, blur: any, color: any) {
      ctx.shadowOffsetX = offsetX
      ctx.shadowOffsetY = offsetY
      ctx.shadowBlur = blur
      ctx.shadowColor = color
    },
    setTextBaseline(val: any) {
      ctx.textBaseline = val
    },
    createCircularGradient() {},
    draw() {}
  })
}

watch(
  () => props.size,
  () => {
    reRender()
  }
)

watch(
  () => props.rate,
  () => {
    reRender()
  }
)

watch(
  () => props.color,
  () => {
    setHoverColor().then(() => {
      reRender()
    })
  }
)

onMounted(() => {
  currentValue.value = Number(props.currentRate)

  setHoverColor().then(() => {
    reRender()
  })
})

onBeforeUnmount(() => {
  clearMockInterval()
})
</script>
<script lang="ts">
export default {
  name: 'ZCircle',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-circle {
  position: relative;
  display: inline-block;
  text-align: center;

  &__text {
    position: absolute;
    top: 50%;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 0 var(--z-padding-base);
    font-size: var(--z-circle-text-font-size);
    font-weight: var(--z-circle-text-font-weight);
    line-height: var(--z-circle-text-line-height);
    color: var(--z-circle-text-color);
    background-color: transparent;
    transform: translateY(-50%);
  }
}
</style>
