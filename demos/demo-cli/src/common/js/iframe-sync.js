import { useThemeStore } from '../../store'
const store = useThemeStore()

const passReplacePath = [
  'quickstart',
  'advancedUsage',
  'faq',
  'changedlog',
  'contribution',
  'international'
]

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase()
  })
}

function extractAndConvertToCamelCase(path) {
  const regex = /\/([^/]+)$/
  const match = path.match(regex)
  if (match) {
    const segment = match[1]
    return toCamelCase(segment)
  }
  return null
}

window.top.postMessage(
  {
    type: 'iframeReady'
  },
  '*'
)
window.addEventListener('message', (event) => {
  if (event.data.type === 'windowIframeReady') {
    window.top.postMessage(
      {
        type: 'iframeReady'
      },
      '*'
    )
  }
  if (event.data.type === 'replacePath') {
    if (
      !extractAndConvertToCamelCase(event.data.value) ||
      passReplacePath.includes(extractAndConvertToCamelCase(event.data.value))
    ) {
      uni.reLaunch({
        url: `/pages/index/index`
      })
    } else {
      uni.reLaunch({
        url: `/pages/${extractAndConvertToCamelCase(event.data.value)}/${extractAndConvertToCamelCase(event.data.value)}`
      })
    }
  }
})

export function syncPathToParent(value) {
  window.top.postMessage(
    {
      type: 'replacePath',
      value: value
    },
    '*'
  )
}

export function syncThemeToParent() {
  window.top.postMessage(
    {
      type: 'updateThemeParent',
      value: store.theme
    },
    '*'
  )
}

export function useCurrentTheme() {
  window.addEventListener('message', (event) => {
    if (event.data?.type !== 'updateTheme') {
      return
    }
    const newTheme = event.data?.value || ''
    store.setTheme(newTheme == 'light-n' ? 'light' : 'dark')
  })
}

export function listenToSyncPath(router) {
  window.addEventListener('message', (event) => {
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
