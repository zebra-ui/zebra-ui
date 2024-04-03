<template>
  <view
    class="z-watermark-rect"
    :class="bem({ full: props.fullPage })"
    :style="styles"
  >
    <view :class="bem('wrapper')">
      <canvas
        v-if="canvasShow"
        :id="id"
        :canvas-id="id"
        :style="{ width: addUnit(svgWidth), height: addUnit(svgHeight) }"
      />
    </view>
  </view>
</template>
<script lang="ts" setup>
import { computed, nextTick, ref, watch, getCurrentInstance } from 'vue'
import {
  extend,
  truthProp,
  numericProp,
  createNamespace,
  getZIndexStyle,
  makeNumberProp,
  makeNumericProp,
  makeStringProp,
  useId,
  addUnit,
  useComponentName
} from '../../libs/utils'

const [name, bem] = createNamespace('watermark')

useComponentName(name)

const instance = getCurrentInstance()

const id = useId()

const props = defineProps({
  gapX: makeNumberProp(0),
  gapY: makeNumberProp(0),
  image: String,
  width: makeNumberProp(100),
  height: makeNumberProp(100),
  rotate: makeNumericProp(-22),
  zIndex: numericProp,
  content: String,
  opacity: makeNumberProp(1),
  fullPage: truthProp,
  textColor: makeStringProp('#dcdee0'),
  type: makeStringProp(''),
  fontSize: makeNumberProp(20)
})

const watermarkUrl = ref('')
const imageBase64 = ref('')

const canvasShow = ref(true)

const styles = computed(() => {
  return extend(
    { backgroundImage: `url(${watermarkUrl.value})` },
    getZIndexStyle(props.zIndex)
  )
})

const makeSvgToBlobUrl = (image: string = '') => {
  canvasShow.value = true
  const ctx = uni.createCanvasContext(id, instance)
  ctx.translate(0, 0)
  ctx.setGlobalAlpha(props.opacity)
  ctx.rotate((Number(props.rotate) * Math.PI) / 180)
  ctx.setFillStyle(props.textColor)
  ctx.setFontSize(props.fontSize)
  if (image) {
    ctx.drawImage(image, 0, 0, props.height / 1.5, props.width / 1.5)
  }
  if (props.content) {
    ctx.fillText(props.content, 0, props.height / 2)
  }
  ctx.draw(false, () => {
    uni.canvasToTempFilePath(
      {
        canvasId: id,
        destWidth: svgWidth.value,
        destHeight: svgHeight.value,
        success: (res) => {
          watermarkUrl.value = res.tempFilePath
          canvasShow.value = false
        },
        fail: (err) => {
          console.warn(err)
        }
      },
      // #ifdef MP-WEIXIN
      instance
      // #endif
    )
  })
}

const svgWidth = computed(() => {
  return props.width + props.gapX
})
const svgHeight = computed(() => {
  return props.height + props.gapY
})

watch(
  () => [
    imageBase64.value,
    props.content,
    props.textColor,
    props.height,
    props.width,
    props.rotate,
    props.gapX,
    props.gapY,
    props.image
  ],
  () => {
    nextTick(() => {
      if (watermarkUrl.value) {
        watermarkUrl.value = ''
      }
      if (props.image) {
        uni.getImageInfo({
          src: props.image,
          success: (image) => {
            makeSvgToBlobUrl(image.path)
          }
        })
      } else {
        makeSvgToBlobUrl()
      }
    })
  },
  {
    immediate: true
  }
)
</script>
<script lang="ts">
export default {
  name: 'ZWatermark',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-watermark {
  position: absolute;
  top: 0;
  left: 0;
  z-index: var(--z-watermark-z-index);
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-repeat: repeat;

  &--full {
    position: fixed;
  }
}
</style>
