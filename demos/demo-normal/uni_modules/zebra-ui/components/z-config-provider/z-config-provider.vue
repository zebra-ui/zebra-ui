<template>
  <page-meta
    v-if="themeVarsScope === 'global'"
    :page-style="themeStyle"
  ></page-meta>
  <view
    :class="[bem(), props.themeVarsScope === 'local' ? themeClass : '']"
    :style="props.themeVarsScope === 'local' ? style : undefined"
  >
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import {
  ref,
  watch,
  provide,
  computed,
  watchEffect,
  onActivated,
  onDeactivated,
  onBeforeUnmount,
  type PropType,
  type InjectionKey
} from 'vue'
import {
  extend,
  kebabCase,
  makeStringProp,
  createNamespace,
  type Numeric
} from '../../libs/utils'

import { setGlobalZIndex } from '../../libs/utils/components/composables/use-global-z-index'
type ConfigProviderTheme = 'light' | 'dark'
type ConfigProviderThemeVarsScope = 'local' | 'global'
type ConfigProviderProvide = {
  iconPrefix?: string
}
type ThemeVars = PropType<Record<string, Numeric>>
const [name, bem] = createNamespace('config-provider')
const CONFIG_PROVIDER_KEY: InjectionKey<ConfigProviderProvide> = Symbol(name)
const props = defineProps({
  theme: makeStringProp<ConfigProviderTheme>('light'),
  zIndex: Number,
  themeVars: Object as ThemeVars,
  themeVarsDark: Object as ThemeVars,
  themeVarsLight: Object as ThemeVars,
  themeVarsScope: makeStringProp<ConfigProviderThemeVarsScope>('local'),
  iconPrefix: String
})
const themeClass = ref('')
const themeStyle = ref('')
function insertDash(str: string) {
  return str.replace(/([a-zA-Z])(\d)/g, '$1-$2')
}

function mapThemeVarsToCSSVars(themeVars: Record<string, Numeric>) {
  const cssVars: Record<string, Numeric> = {}
  Object.keys(themeVars).forEach((key) => {
    const formattedKey = insertDash(kebabCase(key))
    cssVars[`--z-${formattedKey}`] = themeVars[key]
  })
  return cssVars
}

function syncThemeVarsOnRoot(
  newStyle: Record<string, Numeric> = {},
  oldStyle: Record<string, Numeric> = {}
) {
  Object.keys(newStyle).forEach((key) => {
    if (newStyle[key] !== oldStyle[key]) {
      document.documentElement.style.setProperty(key, newStyle[key] as string)
    }
  })
  Object.keys(oldStyle).forEach((key) => {
    if (!newStyle[key]) {
      document.documentElement.style.removeProperty(key)
    }
  })
}
const style = computed<any | undefined>(() =>
  mapThemeVarsToCSSVars(
    //@ts-ignore
    extend(
      {},
      props.themeVars,
      //@ts-ignore
      props.theme === 'dark' ? props.themeVarsDark : props.themeVarsLight
    )
  )
)
const addTheme = () => {
  themeClass.value = `z-theme-${props.theme}`
}
const removeTheme = (theme = props.theme) => {
  themeClass.value = ''
}

watch(
  () => props.theme,
  (newVal, oldVal) => {
    if (oldVal) {
      removeTheme(oldVal)
    }
    addTheme()
  },
  { immediate: true }
)

onActivated(addTheme)
onDeactivated(removeTheme)
onBeforeUnmount(removeTheme)

watch(style, (newStyle, oldStyle) => {
  //@ts-ignore
  if (props.themeVarsScope === 'global') {
    syncThemeVarsOnRoot(
      newStyle as Record<string, Numeric>,
      oldStyle as Record<string, Numeric>
    )
  }
})

watch(
  () => props.themeVarsScope,
  (newScope, oldScope) => {
    //@ts-ignore
    if (oldScope === 'global') {
      syncThemeVarsOnRoot({}, style.value as Record<string, Numeric>)
    }
    //@ts-ignore
    if (newScope === 'global') {
      syncThemeVarsOnRoot(style.value as Record<string, Numeric>, {})
    }
  }
)
//@ts-ignore
if (props.themeVarsScope === 'global') {
  syncThemeVarsOnRoot(style.value as Record<string, Numeric>, {})
}

provide(CONFIG_PROVIDER_KEY, props)

watchEffect(() => {
  if (props.zIndex !== undefined) {
    setGlobalZIndex(props.zIndex)
  }
})
</script>
<script lang="ts">
export default {
  name: 'ZConfigProvider',
  options: {
    virtualHost: true
  }
}
</script>
