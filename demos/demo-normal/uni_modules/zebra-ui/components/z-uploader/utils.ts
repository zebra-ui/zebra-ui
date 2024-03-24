import {
  toArray,
  createNamespace,
  isFunction,
  isObject
} from '../../libs/utils'
import type {
  UploaderMaxSize,
  UploaderResultType,
  UploaderFileListItem
} from './types'

const [name, bem, t] = createNamespace('uploader')

export { name, bem, t }

export function readFileContent(file: any, resultType: UploaderResultType) {
  return new Promise<string | void>((resolve) => {
    if (resultType === 'file') {
      resolve()
      return
    }
    uni
      .getFileInfo({
        filePath: file.url
      })
      .then((res) => {
        file.size = res.size
        resolve(file)
      })
      .catch(() => {
        resolve(file)
      })
  })
}

export function isOversize(
  items: UploaderFileListItem | UploaderFileListItem[],
  maxSize: UploaderMaxSize
): boolean {
  return toArray(items).some((item) => {
    if (item.file) {
      if (isFunction(maxSize)) {
        return maxSize(item.file)
      }
      return item.file.size > +maxSize
    }
    return false
  })
}

export function filterFiles(
  items: UploaderFileListItem[],
  maxSize: UploaderMaxSize
) {
  const valid: UploaderFileListItem[] = []
  const invalid: UploaderFileListItem[] = []

  items.forEach((item) => {
    if (isOversize(item, maxSize)) {
      invalid.push(item)
    } else {
      valid.push(item)
    }
  })

  return { valid, invalid }
}

const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i

export const isImageUrl = (url: string): boolean => IMAGE_REGEXP.test(url)

export function isImageFile(item: UploaderFileListItem): boolean {
  if (item.isImage) {
    return true
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0
  }

  if (item.url) {
    return isImageUrl(item.url)
  }

  if (typeof item.content === 'string') {
    return item.content.indexOf('data:image') === 0
  }

  return false
}

function pickExclude(obj: any, keys: any) {
  if (!isObject(obj)) {
    return {}
  }
  return Object.keys(obj).reduce((prev: any, key) => {
    if (!keys.includes(key)) {
      prev[key] = obj[key]
    }
    return prev
  }, {})
}

function formatImage(res: any) {
  return res.tempFiles.map((item: any) =>
    Object.assign(Object.assign({}, pickExclude(item, ['path'])), {
      type: 'image',
      url: item.path,
      thumb: item.path
    })
  )
}

function formatVideo(res: any) {
  return [
    Object.assign(
      Object.assign(
        {},
        pickExclude(res, ['tempFilePath', 'thumbTempFilePath', 'errMsg'])
      ),
      {
        type: 'video',
        url: res.tempFilePath,
        thumb: res.thumbTempFilePath
      }
    )
  ]
}

function formatMedia(res: any) {
  return res.tempFiles.map((item: any) =>
    Object.assign(
      Object.assign(
        {},
        pickExclude(item, ['fileType', 'thumbTempFilePath', 'tempFilePath'])
      ),
      {
        type: res.type,
        url: item.tempFilePath,
        thumb: res.type === 'video' ? item.thumbTempFilePath : item.tempFilePath
      }
    )
  )
}

function formatFile(res: any) {
  return res.tempFiles.map((item: any) =>
    Object.assign(Object.assign({}, pickExclude(item, ['path'])), {
      url: item.path
    })
  )
}

export function chooseFile({
  accept,
  multiple,
  capture,
  compressed,
  maxDuration,
  sizeType,
  camera,
  maxCount
}: any) {
  return new Promise((resolve, reject) => {
    switch (accept) {
      case 'image':
        uni.chooseImage({
          count: multiple ? Math.min(maxCount, 9) : 1,
          sourceType: capture,
          sizeType,
          success: (res) => resolve(formatImage(res)),
          fail: reject
        })
        break
      case 'media':
        uni.chooseMedia({
          count: multiple ? Math.min(maxCount, 9) : 1,
          sourceType: capture,
          maxDuration,
          sizeType,
          camera,
          success: (res) => resolve(formatMedia(res)),
          fail: reject
        })
        break
      case 'video':
        uni.chooseVideo({
          sourceType: capture,
          compressed,
          maxDuration,
          camera,
          success: (res) => resolve(formatVideo(res)),
          fail: reject
        })
        break
      default:
        uni.chooseMessageFile({
          count: multiple ? maxCount : 1,
          type: accept,
          success: (res) => resolve(formatFile(res)),
          fail: reject
        })
        break
    }
  })
}
