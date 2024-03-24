<template>
  <view
    :style="style"
    :class="
      bem({
        [props.span]: props.span,
        [`offset-${props.offset}`]: props.offset
      })
    "
  >
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { CSSProperties, computed } from 'vue'
import {
  numericProp,
  createNamespace,
  makeNumericProp,
  extend,
  useComponentName
} from '../../libs/utils'
import { useParent } from '../../libs/utils'
const [name, bem] = createNamespace('col')
useComponentName(name)
const props = defineProps({
  span: makeNumericProp(0),
  offset: numericProp
})
// @ts-ignore
const { parent, index } = useParent('z-row')
const style = computed(() => {
  if (!parent) {
    return
  }

  const { spaces, verticalSpaces } = parent
  let styles: CSSProperties = {}
  if (spaces && spaces.value && spaces.value[index.value]) {
    const { left, right } = spaces.value[index.value]
    styles = {
      paddingLeft: left ? `${left}px` : undefined,
      paddingRight: right ? `${right}px` : undefined
    }
  }

  const { bottom } = verticalSpaces.value[index.value] || {}

  return extend(styles, {
    marginBottom: bottom ? `${bottom}px` : null
  })
})
</script>

<script lang="ts">
export default {
  name: 'ZCol',
  options: {
    virtualHost: true
  }
}
</script>

<style lang="scss" scoped>
.z-col {
  box-sizing: border-box;
  display: block;
  min-height: 2rpx;
}

@mixin generate-col($n, $i: 1) {
  @while $i <= $n {
    .z-col--#{$i} {
      /* stylelint-disable-next-line */
      flex: 0 0 percentage(calc($i / 24));
      /* stylelint-disable-next-line */
      max-width: percentage(calc($i / 24));
    }

    .z-col--offset-#{$i} {
      /* stylelint-disable-next-line */
      margin-left: percentage(calc($i / 24));
    }
    /* stylelint-disable-next-line */
    $i: $i + 1;
  }
}

@include generate-col(24);
</style>
