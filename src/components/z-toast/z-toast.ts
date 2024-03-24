import { extend, isObject } from '../../libs/utils'
import type { ToastType, ToastOptions, ToastWrapperInstance } from './types'

const defaultOptions: ToastOptions = {
  icon: '',
  type: 'text',
  message: '',
  overlay: false,
  onClose: undefined,
  onOpened: undefined,
  duration: 2000,
  iconSize: undefined,
  iconPrefix: undefined,
  position: 'middle',
  transition: 'fade',
  forbidClick: false,
  loadingType: undefined,
  overlayClass: '',
  overlayStyle: undefined,
  closeOnClick: false,
  closeOnClickOverlay: false
}

let queue: ToastWrapperInstance[] = []
let allowMultiple = false
let currentOptions = extend({}, defaultOptions)
const defaultOptionsMap = new Map<string, ToastOptions>()
function parseOptions(message: string | ToastOptions): ToastOptions {
  if (isObject(message)) {
    return message
  }
  return { message }
}
function getContext() {
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}
function getInstance() {
  queue = []
  if (!queue.length || allowMultiple) {
    const content = getContext()
    const instance = content.$vm.$refs.zToast
    if (!instance) {
      console.warn('请确认页面存在z-toast节点！')
      return
    }
    queue.push(instance)
  }
  return queue[queue.length - 1]
}
export function showToast(options: string | ToastOptions = {}) {
  const toast = getInstance()
  const parsedOptions = parseOptions(options)
  if (toast) {
    toast.open(
      extend(
        {},
        currentOptions,
        defaultOptionsMap.get(parsedOptions.type || currentOptions.type!),
        parsedOptions
      )
    )
    return toast
  }
  return
}
const createMethod = (type: ToastType) => (options: string | ToastOptions) =>
  showToast(extend({ type }, parseOptions(options)))
export const showLoadingToast = createMethod('loading')
export const showSuccessToast = createMethod('success')
export const showFailToast = createMethod('fail')
export const closeToast = (all?: boolean) => {
  if (queue.length) {
    if (all) {
      queue.forEach((toast) => {
        toast.close()
      })
      queue = []
    } else if (!allowMultiple) {
      queue[0].close()
    } else {
      queue.shift()?.close()
    }
  }
}
export function setToastDefaultOptions(options: ToastOptions): void
export function setToastDefaultOptions(
  type: ToastType,
  options: ToastOptions
): void
export function setToastDefaultOptions(
  type: ToastType | ToastOptions,
  options?: ToastOptions
) {
  if (typeof type === 'string') {
    defaultOptionsMap.set(type, options!)
  } else {
    extend(currentOptions, type)
  }
}
export const resetToastDefaultOptions = (type?: ToastType) => {
  if (typeof type === 'string') {
    defaultOptionsMap.delete(type)
  } else {
    currentOptions = extend({}, defaultOptions)
    defaultOptionsMap.clear()
  }
}
export const allowMultipleToast = (value = true) => {
  allowMultiple = value
}
