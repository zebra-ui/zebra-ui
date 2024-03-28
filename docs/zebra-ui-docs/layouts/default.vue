<template>
  <zebra-doc
    v-if="configData"
    :lang="lang"
    :config="configData"
    :versions="versions"
    :simulator="simulator"
    :has-simulator="hasSimulator"
    :lang-configs="langConfigs"
    :dark-mode-class="darkModeClass"
  >
    <slot />
  </zebra-doc>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import zebraDoc from '../components/DocIndex.vue'
import config from '../config'
import { syncPathToChild } from '../common/iframe-sync'
const route = useRoute()

import { useLocaleStore } from '../store/locale'
const storeLocal = useLocaleStore()

const hasSimulator = ref(true)
const darkModeClass = ref(config.site.darkModeClass)

const simulator = computed(() => {
  if (config.site.simulator?.url) {
    return config.site.simulator?.url
  }
  const path = location.pathname.replace(/\/index(\.html)?/, '/')
  return `${path}mobile.html${location.hash}`
})

const lang = computed(() => {
  const lang = storeLocal.docsLocale
  return lang || 'zh'
})

const langConfigs = computed(() => {
  const { locales = {} } = config.site
  return Object.keys(locales).map((key) => ({
    lang: key,
    label: locales[key].langLabel || ''
  }))
})

const configData = computed(() => {
  const { locales } = config.site
  if (locales) {
    return locales[lang.value]
  }
  return config.site
})

const versions = computed(() => {
  return config.site.versions || null
})

watch(
  () => route.path,
  (to, from) => {
    syncPathToChild(to)
  },
  { immediate: true }
)

watch(lang, (val) => {
  setTitleAndToggleSimulator()
})

watch(
  configData,
  (val) => {
    if (val) {
      setTitleAndToggleSimulator()
    }
  },
  { immediate: true }
)

onMounted(() => {
  if (route.path.includes('en')) {
    storeLocal.setDocsLocale('en')
  } else {
    storeLocal.setDocsLocale('zh')
  }
  if (route.hash) {
    nextTick(() => {
      const el = document?.querySelector(route.hash)
      if (el) {
        el.scrollIntoView()
      }
    })
  }
})

function setTitleAndToggleSimulator() {
  let { title } = configData.value

  const navItems = configData.value.nav.reduce(
    (result, nav) => [...result, ...nav.items],
    []
  )

  const current = navItems.find((item) => item.path === route.meta.name)

  if (current && current.title) {
    title = current.title + ' - ' + title
  } else if (configData.value.description) {
    title += ` - ${configData.value.description}`
  }

  // document.title = title

  hasSimulator.value = !(
    config.site.hideSimulator ||
    configData.value.hideSimulator ||
    (current && current.hideSimulator)
  )
}
</script>

<style lang="scss">
@import '../common/style/base';
@import '../common/style/highlight';

.zebra-doc-intro {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
}
</style>
