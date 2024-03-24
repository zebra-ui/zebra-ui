<template>
  <view :class="bem()">
    <view :class="bem('wrapper', { disabled: props.disabled })">
      <template v-if="props.previewImage">
        <template v-for="(item, index) in props.modelValue" :key="index">
          <z-uploader-item
            :item="item"
            :index="index"
            :name="props.name"
            :deletable="item.deletable || props.deletable"
            :reupload="item.reupload || props.reupload"
            :preview-size="item.previewSize || props.previewSize"
            :before-delete="item.beforeDelete || props.beforeDelete"
            :comonent-slots="instance.slots"
            @click="
              () =>
                emit(
                  props.reupload ? 'clickReupload' : 'clickPreview',
                  item,
                  getDetail(index)
                )
            "
            @delete="deleteFile(item, index)"
            @preview="previewImage(item)"
            @reupload="reuploadImage(index)"
          >
            <template v-if="instance.slots['preview-cover']" #preview-cover>
              <slot name="preview-cover" :file="item"></slot>
            </template>
            <template v-if="instance.slots['preview-delete']" #preview-delete>
              <slot name="preview-delete"></slot>
            </template>
          </z-uploader-item>
        </template>
      </template>
      <template v-if="props.modelValue.length < +props.maxCount">
        <template v-if="instance.slots.default">
          <view
            v-show="!hideUploader"
            :class="bem('input-wrapper')"
            @click="onClickUpload"
          >
            <slot></slot>
            <template v-if="!props.readonly">
              <view :class="bem('input')" @click="startUpload"></view>
            </template>
          </view>
        </template>
        <template v-else>
          <view
            v-show="props.showUpload && !hideUploader"
            :class="bem('upload', { readonly: props.readonly })"
            :style="getSizeStyle(props.previewSize)"
            @click="onClickUpload"
          >
            <z-icon :name="props.uploadIcon" :custom-style="uploadIconStyle" />
            <template v-if="props.uploadText">
              <text :class="bem('upload-text')">{{ props.uploadText }}</text>
            </template>
            <template v-if="!props.readonly">
              <view :class="bem('input')" @click="startUpload"></view>
            </template>
          </view>
        </template>
      </template>
    </view>
  </view>
</template>
<script lang="ts" setup>
import {
  ref,
  reactive,
  type PropType,
  nextTick,
  getCurrentInstance,
  computed
} from 'vue'
import {
  toArray,
  isPromise,
  truthProp,
  Interceptor,
  getSizeStyle,
  makeArrayProp,
  makeStringProp,
  makeNumericProp,
  type Numeric,
  type ComponentInstance,
  useCustomFieldValue,
  useExpose
} from '../../libs/utils'
import zUploaderItem from './z-uploader-item.vue'
import {
  bem,
  isOversize,
  filterFiles,
  isImageFile,
  readFileContent,
  chooseFile
} from './utils'
import type {
  UploaderExpose,
  UploaderMaxSize,
  UploaderAfterRead,
  UploaderBeforeRead,
  UploaderResultType,
  UploaderFileListItem
} from './types'

const instance = getCurrentInstance()!

const props = defineProps({
  name: makeNumericProp(''),
  accept: makeStringProp('image'),
  capture: String,
  multiple: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  lazyLoad: Boolean,
  maxCount: makeNumericProp(Infinity),
  imageFit: makeStringProp<any>('cover'),
  resultType: makeStringProp<UploaderResultType>('dataUrl'),
  uploadIcon: makeStringProp('upload'),
  uploadText: String,
  deletable: truthProp,
  reupload: Boolean,
  afterRead: Function as PropType<UploaderAfterRead>,
  showUpload: truthProp,
  modelValue: makeArrayProp<UploaderFileListItem>(),
  beforeRead: Function as PropType<UploaderBeforeRead>,
  beforeDelete: Function as PropType<Interceptor>,
  previewSize: [Number, String, Array] as PropType<
    Numeric | [Numeric, Numeric]
  >,
  previewImage: truthProp,
  previewFullImage: truthProp,
  maxSize: {
    type: [Number, String, Function] as PropType<UploaderMaxSize>,
    default: Infinity
  },
  compressed: truthProp,
  maxDuration: {
    type: Number,
    default: 60
  },
  sizeType: {
    type: Array,
    default: () => {
      return ['original', 'compressed']
    }
  },
  camera: {
    type: String,
    default: 'back'
  }
})

const emit = defineEmits([
  'delete',
  'oversize',
  'clickUpload',
  'closePreview',
  'clickPreview',
  'clickReupload',
  'update:modelValue',
  'error'
])
const urls: string[] = []
const reuploadIndex = ref(-1)
const isReuploading = ref(false)
// @ts-ignore
const getDetail = (index = props.modelValue.length) => ({
  name: props.name,
  index
})
const resetInput = () => {}

const uploadIconStyle = computed(() => {
  const styles = {
    color: 'var(--z-uploader-icon-color)',
    fontSize: 'var(--z-uploader-icon-size)'
  }
  return { ...styles }
})

const onAfterRead = (items: UploaderFileListItem | UploaderFileListItem[]) => {
  resetInput()
  // @ts-ignore
  if (isOversize(items, props.maxSize)) {
    if (Array.isArray(items)) {
      // @ts-ignore
      const result = filterFiles(items, props.maxSize)
      items = result.valid
      emit('oversize', result.invalid, getDetail())

      if (!items.length) {
        return
      }
    } else {
      emit('oversize', items, getDetail())
      return
    }
  }
  items = reactive(items)
  if (reuploadIndex.value > -1) {
    // @ts-ignore
    const arr = [...props.modelValue]
    arr.splice(reuploadIndex.value, 1, items as UploaderFileListItem)
    emit('update:modelValue', arr)
    reuploadIndex.value = -1
  } else {
    // @ts-ignore
    emit('update:modelValue', [...props.modelValue, ...toArray(items)])
  }

  if (props.afterRead) {
    // @ts-ignore
    props.afterRead(items, getDetail())
  }
}

const hideUploader = computed(() => {
  // @ts-ignore
  return props.modelValue.length >= +props.maxCount && props.reupload
})

const readFile = (files: File | File[]) => {
  const { maxCount, modelValue, resultType } = props
  if (Array.isArray(files)) {
    // @ts-ignore
    const remainCount = +maxCount - modelValue.length

    if (files.length > remainCount) {
      files = files.slice(0, remainCount)
    }

    Promise.all(
      // @ts-ignore
      files.map((file) => readFileContent(file, resultType))
    ).then((contents) => {
      const fileList = (files as File[]).map((file: any, index) => {
        const result: UploaderFileListItem = {
          file,
          status: '',
          message: '',
          objectUrl: file.url
        }

        if (contents[index]) {
          result.content = contents[index] as string
        }

        return result
      })

      onAfterRead(fileList)
    })
  } else {
    // @ts-ignore
    readFileContent(files, resultType).then((content: any) => {
      const result: UploaderFileListItem = {
        file: files as File,
        status: '',
        message: '',
        objectUrl: content.url
      }

      if (content) {
        result.content = content
      }

      onAfterRead(result)
    })
  }
}

const onChange = (event: any) => {
  const files = event

  if (props.disabled || !files || !files.length) {
    return
  }

  const file = files.length === 1 ? files[0] : ([].slice.call(files) as File[])

  if (props.beforeRead) {
    // @ts-ignore
    const response = props.beforeRead(file, getDetail())

    if (!response) {
      // resetInput();
      return
    }

    if (isPromise(response)) {
      response
        .then((data) => {
          if (data) {
            readFile(data)
          } else {
            readFile(file)
          }
        })
        .catch(resetInput)
      return
    }
  }

  readFile(file)
}

let imagePreview: ComponentInstance | undefined
const previewImage = (item: any) => {
  if (props.previewFullImage) {
    // @ts-ignore
    const imageFiles = props.modelValue.filter(isImageFile)
    const images = imageFiles
      .map((item) => {
        if (item.objectUrl && !item.url && item.status !== 'failed') {
          item.url = item.objectUrl
          urls.push(item.url)
        }
        return item.url
      })
      .filter(Boolean) as string[]
    uni.previewImage({
      urls: images,
      current: imageFiles.indexOf(item),
      showmenu: true
    })
  }
}

const closeImagePreview = () => {
  if (imagePreview) {
    imagePreview.close()
  }
}

const deleteFile = (item: any, index: any) => {
  // @ts-ignore
  const fileList = props.modelValue.slice(0)
  fileList.splice(index, 1)

  emit('update:modelValue', fileList)
  emit('delete', item, getDetail(index))
}

const reuploadImage = (index: any) => {
  isReuploading.value = true
  reuploadIndex.value = index
  nextTick(() => startUpload())
}
const onClickUpload = (event: any) => emit('clickUpload', event)
const startUpload = () => {
  if (!isReuploading.value) {
    reuploadIndex.value = -1
  }
  isReuploading.value = false

  const { maxCount, modelValue, disabled } = props
  if (disabled) {
    return
  }

  chooseFile(
    Object.assign(
      Object.assign(
        {},
        {
          accept: props.accept,
          multiple: props.multiple,
          capture: props.capture,
          compressed: props.compressed,
          maxDuration: props.maxDuration,
          sizeType: props.sizeType,
          camera: props.camera,
          maxCount: props.maxCount
        }
      ),
      {
        // @ts-ignore
        maxCount: maxCount - modelValue.length
      }
    )
  )
    .then((res) => {
      onChange(res)
    })
    .catch((error) => {
      emit('error', error)
    })
}

useExpose<UploaderExpose>({
  chooseFile: startUpload,
  closeImagePreview
})
useCustomFieldValue(() => props.modelValue)
</script>
<script lang="ts">
export default {
  name: 'ZUploader',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-uploader {
  position: relative;
  display: inline-block;

  &__wrapper {
    display: flex;
    flex-wrap: wrap;

    &--disabled {
      opacity: var(--z-uploader-disabled-opacity);
    }
  }

  &__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;

    &-wrapper {
      position: relative;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  &__upload {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: var(--z-uploader-size);
    height: var(--z-uploader-size);
    margin: 0 var(--z-padding-xs) var(--z-padding-xs) 0;
    background: var(--z-uploader-upload-background);
    border-radius: var(--z-uploader-border-radius);

    &:active {
      background-color: var(--z-uploader-upload-active-color);
    }

    &--readonly:active {
      background-color: var(--z-uploader-upload-background);
    }

    &-text {
      margin-top: var(--z-padding-xs);
      font-size: var(--z-uploader-text-font-size);
      color: var(--z-uploader-text-color);
    }
  }
}
</style>
