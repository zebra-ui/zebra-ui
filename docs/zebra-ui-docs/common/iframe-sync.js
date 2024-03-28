import { ref } from 'vue'
import config from '../config'
import { useThemeStore } from '../store/theme'
const store = useThemeStore()
let queue = []
let isIframeReady = false

function iframeReady(callback) {
  if (isIframeReady) {
    callback()
  } else {
    queue.push(callback)
  }
}
if (process.client) {
  const iframe = document?.querySelector('iframe')
  iframe.contentWindow.postMessage({ type: 'windowIframeReady' }, '*')
  window?.addEventListener('message', (event) => {
    if (event.data.type === 'iframeReady') {
      isIframeReady = true
      queue.forEach((callback) => callback())
      queue = []
    }
    if (event.data.type === 'updateThemeParent') {
      store.setDocsTheme(event.data.value == 'light' ? 'light-n' : 'dark-n')
    }
  })
}

// function getCurrentDir() {
//   const router = window.vueRouter
//   const { path } = router.currentRoute.value

//   if (config.site.simulator?.routeMapper) {
//     return config.site.simulator?.routeMapper(path)
//   }
//   return path
// }

export function syncPathToChild(value) {
  const iframe = document?.querySelector('iframe')
  if (iframe) {
    iframeReady(() => {
      iframe.contentWindow.postMessage(
        {
          type: 'replacePath',
          value: value
        },
        '*'
      )
    })
  }
}

export function syncThemeToChild(theme) {
  const iframe = document?.querySelector('iframe')
  if (iframe) {
    iframeReady(() => {
      iframe.contentWindow.postMessage(
        {
          type: 'updateTheme',
          value: theme
        },
        '*'
      )
    })
  }
}

export function getDefaultTheme() {
  const cache = store.docsTheme
  if (cache) {
    return cache
  }

  const useDark =
    window?.matchMedia &&
    window?.matchMedia('(prefers-color-scheme: dark)').matches
  return useDark ? 'dark-n' : 'light-n'
}

export function listenToSyncPath(router) {
  window?.addEventListener('message', (event) => {
    if (event.data?.type !== 'replacePath') {
      return
    }

    const path = event.data?.value || ''
    // should preserve hash for anchor
    if (router.currentRoute.value.path !== path) {
      router.replace(path).catch(() => {})
    }
  })
}
