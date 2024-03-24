<template>
  <view class="z-text-ellipsis-ph" style="width: 100%"></view>
  <view :class="bem()" :style="customStyle">
    <template v-if="expanded">
      {{ props.content }}
    </template>
    <template v-else>
      {{ text }}
    </template>
    <template v-if="hasAction">
      <view :class="bem('action')" @click="onClickAction">
        <template v-if="instance.slots.action">
          <slot name="action" :expanded="expanded"></slot>
        </template>
        <template v-else>
          {{ actionText }}
        </template>
      </view>
    </template>
  </view>
  <view
    v-if="cloneContainerShow"
    class="z-text-ellipsis-rect"
    :class="bem()"
    :style="{ ...cloneContainerStyle, ...customStyle }"
  >
    {{ cloneContainerText }}
  </view>
</template>
<script lang="ts" setup>
import {
  ref,
  watch,
  computed,
  onMounted,
  getCurrentInstance,
  nextTick
} from 'vue'
import {
  makeNumericProp,
  makeStringProp,
  createNamespace,
  windowWidth,
  useExpose,
  getRect,
  raf,
  addUnit,
  useComponentName
} from '../../libs/utils'

const [name, bem] = createNamespace('text-ellipsis')
useComponentName(name)

const instance = getCurrentInstance()!

const props = defineProps({
  rows: makeNumericProp(1),
  dots: makeStringProp('...'),
  content: makeStringProp(''),
  expandText: makeStringProp(''),
  collapseText: makeStringProp(''),
  position: makeStringProp('end'),
  customStyle: Object
})

const emit = defineEmits(['clickAction'])

const text = ref('')
const expanded = ref(false)
const hasAction = ref(false)

const actionText = computed(() =>
  expanded.value ? props.collapseText : props.expandText
)

const pxToNum = (value: string | null) => {
  if (!value) return 0
  const match = value.match(/^\d*(\.\d*)?/)
  return match ? Number(match[0]) : 0
}

const cloneContainerShow = ref(false)

const cloneContainerStyle = ref({}) as any
const cloneContainerText = ref('')

const calcEllipsised = () => {
  const cloneContainer = (width: number) => {
    cloneContainerStyle.value.position = 'fixed'
    cloneContainerStyle.value.zIndex = '-9999'
    cloneContainerStyle.value.top = '-19998rpx'
    cloneContainerStyle.value.height = 'auto'
    cloneContainerStyle.value.width = addUnit(width)
    cloneContainerStyle.value.minHeight = 'auto'
    cloneContainerStyle.value.maxHeight = 'auto'
    cloneContainerText.value = props.content
    cloneContainerShow.value = true
    return cloneContainerStyle.value
  }

  const calcEllipsisText = (container: any, maxHeight: number) => {
    return new Promise((resolve) => {
      const { content, position, dots }: any = props
      const end = content.length

      const calcEllipse = () => {
        return new Promise((resolve0) => {
          const tail = (left: number, right: number) => {
            return new Promise((resolve1) => {
              if (right - left <= 1) {
                if (position === 'end') {
                  resolve1(content.slice(0, left) + dots)
                  return
                }
                resolve1(dots + content.slice(right, end))
                return
              }

              const middle = Math.round((left + right) / 2)
              if (position === 'end') {
                cloneContainerText.value =
                  content.slice(0, middle) + dots + actionText.value
              } else {
                cloneContainerText.value =
                  dots + content.slice(middle, end) + actionText.value
              }
              raf(() => {
                getRect(instance, '.z-text-ellipsis-rect').then((res: any) => {
                  const { height } = res
                  if (height > maxHeight) {
                    if (position === 'end') {
                      resolve1(tail(left, middle))
                      return
                    }
                    resolve1(tail(middle, right))
                    return
                  }
                  if (position === 'end') {
                    resolve1(tail(middle, right))
                    return
                  }

                  resolve1(tail(left, middle))
                  return
                })
              })
            })
          }
          tail(0, end).then((value) => {
            // @ts-ignore
            cloneContainerText.value = value
            resolve0(value)
          })
        })
      }

      const middleTail = (
        leftPart: [number, number],
        rightPart: [number, number]
      ) => {
        return new Promise((resolveMiddle) => {
          if (
            leftPart[1] - leftPart[0] <= 1 &&
            rightPart[1] - rightPart[0] <= 1
          ) {
            resolveMiddle(
              content.slice(0, leftPart[0]) +
                dots +
                content.slice(rightPart[1], end)
            )
            return
          }

          const leftMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2)
          const rightMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2)

          cloneContainerText.value =
            props.content.slice(0, leftMiddle) +
            props.dots +
            props.content.slice(rightMiddle, end) +
            props.expandText

          raf(() => {
            getRect(instance, '.z-text-ellipsis-rect').then((res: any) => {
              const { height } = res
              if (height >= maxHeight) {
                resolveMiddle(
                  middleTail(
                    [leftPart[0], leftMiddle],
                    [rightMiddle, rightPart[1]]
                  )
                )
                return
              }
              resolveMiddle(
                middleTail(
                  [leftMiddle, leftPart[1]],
                  [rightPart[0], rightMiddle]
                )
              )
              return
            })
          })
        })
      }

      const middle = (0 + end) >> 1
      if (props.position === 'middle') {
        middleTail([0, middle], [middle, end]).then((res0: any) => {
          cloneContainerText.value = res0
          resolve(res0)
          return
        })
      } else {
        calcEllipse().then((res1) => {
          resolve(res1)
          return
        })
      }
    })
  }
  raf(() => {
    getRect(instance, '.z-text-ellipsis-ph').then((result: any) => {
      const container = cloneContainer(result.width)
      if (!container) return
      if (!props.customStyle || !props.customStyle['font-size']) {
        console.warn('[Zebra] 请通过customStyle设置font-size！')
        return
      }
      let {
        paddingBottom = 0,
        paddingTop = 0,
        lineHeight,
        'font-size': fontSize
      } = props.customStyle

      if (!lineHeight && lineHeight != '0') {
        lineHeight = 1.6 * uni.upx2px(pxToNum(fontSize))
      }
      const maxHeight = Math.ceil(
        (Number(props.rows) + 0.5) * lineHeight +
          pxToNum(paddingTop) +
          pxToNum(paddingBottom)
      )
      nextTick(() => {
        raf(() => {
          getRect(instance, '.z-text-ellipsis-rect').then((res: any) => {
            if (maxHeight < res.height) {
              hasAction.value = true
              calcEllipsisText(container, maxHeight).then((res: string) => {
                text.value = res
                cloneContainerShow.value = false
              })
            } else {
              hasAction.value = false
              text.value = props.content
              cloneContainerShow.value = false
            }
          })
        })
      })
    })
  })
}

const toggle = (isExpanded = !expanded.value) => {
  expanded.value = isExpanded
}

const onClickAction = (event: any) => {
  toggle()
  emit('clickAction', event)
}

onMounted(calcEllipsised)

watch(
  [windowWidth, () => [props.content, props.rows, props.position]],
  calcEllipsised
)

useExpose({ toggle })
defineExpose({ toggle })
</script>
<script lang="ts">
export default {
  name: 'ZTextEllipsis',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-text-ellipsis {
  line-height: var(--z-text-ellipsis-line-height);
  overflow-wrap: break-word;
  white-space: pre-wrap;

  &__action {
    display: inline-block;
    color: var(--z-text-ellipsis-action-color);
    cursor: pointer;

    &:active {
      opacity: var(--z-active-opacity);
    }
  }
}
</style>
