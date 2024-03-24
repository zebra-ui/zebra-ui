<template>
  <view :class="bem('preview')">
    <template v-if="isImageFile(item)">
      <z-image
        :mode="imageFit"
        :src="item.objectUrl || item.content || item.url"
        :custom-style="imageStyle"
        @click="imageClick"
      >
        <template v-if="comonentSlots && comonentSlots['preview-cover']">
          <view :class="bem('preview-cover')">
            <slot name="preview-cover"></slot>
          </view>
        </template>
      </z-image>
    </template>
    <template v-else>
      <view :class="bem('file')" :style="getSizeStyle(props.previewSize)">
        <z-icon :custom-style="fileIconStyle" name="description" />
        <view :class="[bem('file-name'), 'z-ellipsis']">
          {{ item.file ? item.file.name : item.url }}
        </view>
        <template v-if="comonentSlots && comonentSlots['preview-cover']">
          <view :class="bem('preview-cover')">
            <slot name="preview-cover"></slot>
          </view>
        </template>
      </view>
    </template>

    <template v-if="shouldRenderMask">
      <view :class="bem('mask')">
        <template v-if="item.status === 'failed'">
          <z-icon name="close-circle" :custom-style="closeIconStyle" />
        </template>
        <template v-else>
          <z-loading :custom-style="maskLoadingStyle" />
        </template>
        <template v-if="showMessage">
          <view :class="bem('mask-message')">
            {{ props.item.message }}
          </view>
        </template>
      </view>
    </template>
    <view
      v-if="shouldRenderDeleteIcon"
      :class="[
        bem('preview-delete', {
          shadow: !(comonentSlots && comonentSlots['preview-delete'])
        })
      ]"
      @click="onDelete"
    >
      <template v-if="comonentSlots && comonentSlots['preview-delete']">
        <slot name="preview-delete"></slot>
      </template>
      <template v-else>
        <z-icon name="close" :badge-wrapper-style="deleteIconStyle" />
      </template>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { type PropType, computed } from 'vue'
import { bem, isImageFile } from './utils'
import {
  isDef,
  numericProp,
  getSizeStyle,
  callInterceptor,
  makeRequiredProp,
  type Numeric,
  type Interceptor
} from '../../libs/utils'
import type { UploaderFileListItem } from './types'

const props = defineProps({
  name: numericProp,
  item: makeRequiredProp<PropType<UploaderFileListItem>>(Object),
  index: Number,
  imageFit: String as PropType<any>,
  lazyLoad: Boolean,
  deletable: Boolean,
  reupload: Boolean,
  previewSize: [Number, String, Array] as PropType<
    Numeric | [Numeric, Numeric]
  >,
  beforeDelete: Function as PropType<Interceptor>,
  comonentSlots: Object
})

const emit = defineEmits(['delete', 'preview', 'reupload'])

const onDelete = (event: any) => {
  const { name, item, index, beforeDelete } = props
  event.stopPropagation()
  callInterceptor(beforeDelete, {
    args: [item, { name, index }],
    done: () => emit('delete')
  })
}

const imageStyle = computed(() => {
  const styles = {
    display: 'block',
    width: 'var(--z-uploader-size)',
    height: 'var(--z-uploader-size)',
    overflow: 'hidden',
    borderRadius: 'var(--z-uploader-border-radius)'
  }

  if (Array.isArray(props.previewSize)) {
    // @ts-ignore
    styles['width'] = props.previewSize[0]
    // @ts-ignore
    styles['height'] = props.previewSize[1]
  } else if (props.previewSize) {
    // @ts-ignore
    styles['width'] = props.previewSize
    // @ts-ignore
    styles['height'] = props.previewSize
  }

  return { ...styles }
})

const fileIconStyle = computed(() => {
  const styles = {
    color: 'var(--z-uploader-file-icon-color)',
    fontSize: 'var(--z-uploader-file-icon-size)'
  }
  return { ...styles }
})
const shouldRenderMask = computed(() => {
  return props.item.status === 'uploading' || props.item.status === 'failed'
})
const showMessage = computed(() => {
  return isDef(props.item.message) && props.item.message !== ''
})
const shouldRenderDeleteIcon = computed(() => {
  return props.deletable && props.item.status !== 'uploading'
})

const closeIconStyle = computed(() => {
  const styles = {
    fontSize: 'var(--z-uploader-mask-icon-size)'
  }
  return { ...styles }
})

const maskLoadingStyle = computed(() => {
  const styles = {
    width: 'var(--z-uploader-loading-icon-size)',
    height: 'var(--z-uploader-loading-icon-size)',
    color: 'var(--z-uploader-loading-icon-color)'
  }
  return { ...styles }
})

const deleteIconStyle = computed(() => {
  const styles = {
    color: 'var(--z-uploader-delete-color)',
    fontSize: 'var(--z-uploader-delete-icon-size)',
    transform: 'scale(0.8)'
  }
  return { ...styles }
})

const onPreview = () => emit('preview')

const onReupload = () => emit('reupload')

const imageClick = () => {
  if (props.reupload) {
    onReupload()
  } else {
    onPreview()
  }
}
</script>
<script lang="ts">
export default {
  name: 'ZUploaderItem',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-uploader__preview {
  position: relative;
  margin: 0 var(--z-padding-xs) var(--z-padding-xs) 0;
  cursor: pointer;

  &-delete {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &--shadow {
      width: var(--z-uploader-delete-size);
      height: var(--z-uploader-delete-size);
      background: var(--z-uploader-delete-background);
      border-radius: 0 var(--z-uploader-border-radius) 0 16rpx;
    }
  }

  &-cover {
    position: absolute;
    inset: 0;
  }
}

.z-uploader__file {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: var(--z-uploader-size);
  height: var(--z-uploader-size);
  background: var(--z-uploader-file-background);

  &-name {
    box-sizing: border-box;
    width: 100%;
    padding: var(--z-uploader-file-name-padding);
    margin-top: var(--z-uploader-file-name-margin-top);
    font-size: var(--z-uploader-file-name-font-size);
    color: var(--z-uploader-file-name-text-color);
    text-align: center;
  }
}

.z-uploader__mask {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--z-uploader-mask-text-color);
  background: var(--z-uploader-mask-background);
  border-radius: var(--z-uploader-border-radius);

  &-message {
    padding: 0 var(--z-padding-base);
    margin-top: 12rpx;
    font-size: var(--z-uploader-mask-message-font-size);
    line-height: var(--z-uploader-mask-message-line-height);
  }
}
</style>
