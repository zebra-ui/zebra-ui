import { provide, ref } from 'vue'
import { extend, isObject, type ComponentInstance } from '../../libs/utils'
import type { NotifyMessage, NotifyOptions } from './types'

let timer: ReturnType<typeof setTimeout>
let instance: ComponentInstance

const parseOptions = (message: NotifyMessage | NotifyOptions) =>
  isObject(message) ? message : { message }

function getContext() {
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}

function initInstance() {
  const content = getContext()
  const instanceData = content.$vm.$refs.zNotify
  if (!instanceData) {
    console.warn('请确认页面存在z-notify节点！')
    return
  }
  instance = instanceData
  return instance
}

const getDefaultOptions = (): NotifyOptions => ({
  show: false,
  type: 'danger',
  color: undefined,
  message: '',
  onClose: undefined,
  onClick: undefined,
  onOpened: undefined,
  duration: 3000,
  position: 'top',
  className: '',
  lockScroll: false,
  background: undefined,
  customNavbar: false
})

let currentOptions = getDefaultOptions()
export const closeNotify = () => {
  if (instance) {
    instance.toggle(false)
  }
}
export function showNotify(options: NotifyMessage | NotifyOptions) {
  if (!instance) {
    initInstance()
  }

  options = extend({}, currentOptions, parseOptions(options))

  instance.open(options)
  clearTimeout(timer)

  if (options.duration! > 0) {
    timer = setTimeout(closeNotify, options.duration)
  }

  return instance
}
export const setNotifyDefaultOptions = (options: NotifyOptions) =>
  extend(currentOptions, options)
export const resetNotifyDefaultOptions = () => {
  currentOptions = getDefaultOptions()
}

export function useNotify(name: string = '') {
  const componentsOptions = ref(extend({}, currentOptions))
  const notifyProvideKey = name ? `z-notify-${name}` : 'z-notify'
  provide(notifyProvideKey, componentsOptions)
  const showNotify = (options: NotifyMessage | NotifyOptions) => {
    options = extend({}, currentOptions, parseOptions(options))

    componentsOptions.value = extend({}, options, {
      show: true
    })
    clearTimeout(timer)

    if (options.duration! > 0) {
      timer = setTimeout(closeNotify, options.duration)
    }
  }
  const closeNotify = () => {
    componentsOptions.value = extend(
      {},
      {
        show: false
      }
    )
  }
  return {
    showNotify,
    closeNotify
  }
}
