import { provide, ref } from 'vue'
import { extend } from '../../libs/utils'
import type { DialogAction, DialogOptions } from './types'

const DEFAULT_OPTIONS = {
  title: '',
  width: '',
  theme: null,
  message: '',
  overlay: true,
  callback: null,
  className: '',
  allowHtml: false,
  lockScroll: true,
  transition: 'dialog-bounce',
  beforeClose: null,
  overlayClass: '',
  overlayStyle: undefined,
  messageAlign: '',
  cancelButtonText: '',
  cancelButtonColor: null,
  cancelButtonDisabled: false,
  confirmButtonText: '',
  confirmButtonColor: null,
  confirmButtonDisabled: false,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: true,
  closeOnClickOverlay: false
} as const

let currentOptions = extend({}, DEFAULT_OPTIONS)
let instanceData: any

function getContext() {
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}

function initInstance(ref = 'zDialog') {
  const content = getContext()
  const instance = content.$vm.$refs[ref]
  if (!instance) {
    console.warn('请确认页面存在z-dialog节点！')
    return
  }
  instanceData = instance
  return instance
}

export function useDialog(name: string = '') {
  const componentsOptions = ref(extend({}, DEFAULT_OPTIONS))
  const dialogProvideKey = name ? `z-dialog-${name}` : 'z-dialog'
  provide(dialogProvideKey, componentsOptions)
  const showDialog = (
    options: DialogOptions
  ): Promise<DialogAction | undefined> => {
    return new Promise((resolve, reject) => {
      componentsOptions.value = extend(
        {},
        currentOptions,
        options,
        {
          callback: (action?: DialogAction) => {
            ;(action === 'confirm' ? resolve : reject)(action)
          }
        },
        {
          show: true
        }
      )
    })
  }
  const setDialogDefaultOptions = (options: DialogOptions) => {
    componentsOptions.value = extend(currentOptions, options)
  }
  const resetDialogDefaultOptions = () => {
    componentsOptions.value = extend({}, DEFAULT_OPTIONS)
  }
  const showConfirmDialog = (options: DialogOptions) =>
    showDialog(extend({ showCancelButton: true }, options))
  const closeDialog = () => {
    componentsOptions.value = extend({
      show: false
    })
  }
  return {
    showDialog,
    setDialogDefaultOptions,
    resetDialogDefaultOptions,
    showConfirmDialog,
    closeDialog
  }
}
export function showDialog(
  options: DialogOptions
): Promise<DialogAction | undefined> {
  return new Promise((resolve, reject) => {
    const instance = initInstance()
    if (instance) {
      instance.open(
        extend({}, currentOptions, options, {
          callback: (action?: DialogAction) => {
            ;(action === 'confirm' ? resolve : reject)(action)
          }
        })
      )
    }
  })
}
export const setDialogDefaultOptions = (options: DialogOptions) => {
  extend(currentOptions, options)
}
export const resetDialogDefaultOptions = () => {
  currentOptions = extend({}, DEFAULT_OPTIONS)
}
export const showConfirmDialog = (options: DialogOptions) =>
  showDialog(extend({ showCancelButton: true }, options))
export const closeDialog = () => {
  if (instanceData) {
    instanceData.toggle(false)
  }
}
