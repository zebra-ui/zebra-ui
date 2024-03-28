<template>
  <div class="zebra-doc-header">
    <div class="zebra-doc-row">
      <div class="zebra-doc-header__top">
        <a class="zebra-doc-header__logo">
          <img :src="config.logo" />
          <span class="zebra-doc-header__title">{{ config.title }}</span>
          <span v-if="config.subtitle" class="zebra-doc-header__subtitle">
            {{ config.subtitle }}
          </span>
        </a>

        <ul class="zebra-doc-header__top-nav">
          <li
            v-for="(item, index) in config.links"
            :key="index"
            class="zebra-doc-header__top-nav-item"
          >
            <a class="zebra-doc-header__link" target="_blank" :href="item.url">
              <!-- <img v-if="item.logo" :src="item.logo" /> -->
              <UIcon
                v-if="item.logo"
                :name="getIconName(item.logo)"
                dynamic
                class="zebra-doc-header__link--icon"
              />
              <span v-else-if="item.text">
                {{ item.text }}
              </span>
            </a>
          </li>

          <li v-if="darkModeClass" class="zebra-doc-header__top-nav-item">
            <a
              class="zebra-doc-header__link"
              target="_blank"
              @click="toggleTheme"
            >
              <UIcon
                :name="themeImg"
                dynamic
                class="zebra-doc-header__link--icon"
              />
              <!-- <img :src="themeImg" /> -->
            </a>
          </li>
          <li
            ref="version"
            v-if="versions"
            class="zebra-doc-header__top-nav-item"
          >
            <span
              class="zebra-doc-header__cube zebra-doc-header__version"
              @click="toggleVersionPop"
            >
              {{ packageVersion }}
              <transition name="zebra-doc-dropdown">
                <div
                  v-if="showVersionPop"
                  class="zebra-doc-header__version-pop"
                >
                  <div
                    v-for="(item, index) in versions"
                    :key="index"
                    class="zebra-doc-header__version-pop-item"
                    @click="onSwitchVersion(item)"
                  >
                    {{ item.label }}
                  </div>
                </div>
              </transition>
            </span>
          </li>

          <li class="zebra-doc-header__top-nav-item">
            <span
              class="zebra-doc-header__cube zebra-doc-header__version"
              style="min-width: 80px"
              @click="toggleLangPop"
            >
              <UIcon name="i-icon-park-outline-international" dynamic />
              {{ options.find((item) => item.value === locale)?.label }}
              <transition name="zebra-doc-dropdown">
                <div v-if="showLangPop" class="zebra-doc-header__version-pop">
                  <div
                    v-for="(item, index) in options"
                    :key="index"
                    class="zebra-doc-header__version-pop-item"
                    @click="onSwitchLang(item.value)"
                  >
                    {{ item.label }}
                  </div>
                </div>
              </transition>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getDefaultTheme, syncThemeToChild } from '../common/iframe-sync'
const route = useRoute()
const router = useRouter()
import { useThemeStore } from '../store/theme'
const store = useThemeStore()
import { useLocaleStore } from '../store/locale'
const storeLocal = useLocaleStore()
const props = defineProps({
  lang: String,
  config: Object,
  versions: Array,
  langConfigs: Array,
  darkModeClass: String
})
const locale = computed(() => {
  return storeLocal.docsLocale
})
const options = [
  {
    value: 'zh',
    label: '中文'
  },
  {
    value: 'en',
    label: 'English'
  }
]

const currentTheme = ref(getDefaultTheme())
const packageVersion = '2.x'
const showVersionPop = ref(false)
const showLangPop = ref(false)

const getIconName = (name) => {
  if (name == 'h5') {
    return 'i-uiw-html5'
  }
  if (name == 'uni') {
    return 'i-gravity-ui-math-union-shape'
  }
  if (name == 'github') {
    return 'i-akar-icons-github-fill'
  }
  if (name == 'gitee') {
    return 'i-simple-icons-gitee'
  }
}

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light-n' ? 'dark-n' : 'light-n'
}

const toggleVersionPop = () => {
  const val = !showVersionPop.value
  showVersionPop.value = val
}

const toggleLangPop = () => {
  showLangPop.value = !showLangPop.value
}

const onSwitchLang = (lang) => {
  storeLocal.setDocsLocale(lang)
  if (lang == 'zh') {
    router.push(route.path.replace(`${props.lang}/`, ''))
  } else {
    router.push(`/${lang}${route.path}`)
  }
}

const onSwitchVersion = (version) => {
  if (version.link) {
    location.href = version.link
  }
}

const langLink = computed(() => {
  // return `${route.path.replace($i18n.locale, anotherLang.value.lang)}`
})

// const langLabel = computed(() => {
//   return anotherLang.value.label
// })

// const anotherLang = computed(() => {
//   const items = props.langConfigs.filter((item) => item.lang !== $i18n.locale)
//   if (items.length) {
//     return items[0]
//   }
//   return {}
// })

const themeImg = computed(() => {
  if (store.docsTheme === 'light-n') {
    return 'i-material-symbols-dark-mode'
  }
  return 'i-material-symbols-clear-day-rounded'
})

watch(
  currentTheme,
  (newVal, oldVal) => {
    store.setDocsTheme(newVal)
    document?.documentElement?.classList.remove(`zebra-doc-theme-${oldVal}`)
    document?.documentElement?.classList.add(`zebra-doc-theme-${newVal}`)
    syncThemeToChild(newVal)
  },
  { immediate: true }
)

watch(
  () => store.docsTheme,
  (newVal, oldVal) => {
    document?.documentElement?.classList.remove(`zebra-doc-theme-${oldVal}`)
    document?.documentElement?.classList.add(`zebra-doc-theme-${newVal}`)
  }
)
</script>

<style lang="scss">
.zebra-doc-header {
  width: 100%;
  user-select: none;
  position: relative;
  z-index: 2;
  padding: 10px;

  &__top {
    display: flex;
    align-items: center;
    height: var(--zebra-doc-header-top-height);
    padding: 0 var(--zebra-doc-padding);
    background-color: var(--zebra-doc-header-background);
    box-shadow: var(--zebra-doc-neumorphism-shadown);
    border-radius: var(--neumorphism-border-radius);

    &-nav {
      flex: 1;
      font-size: 0;
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      > li {
        position: relative;
        display: inline-block;
        vertical-align: middle;
      }

      &-item {
        margin-left: 16px;
      }

      &-title {
        display: block;
        font-size: 15px;
      }
    }
  }

  &__cube {
    position: relative;
    display: block;
    padding: 0 12px;
    color: var(--zebra-doc-text-color-1);
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    box-shadow: var(--box-shadow);
  }

  &__version {
    padding-right: 20px;

    &::after {
      position: absolute;
      top: 10px;
      right: 9px;
      width: 5px;
      height: 5px;
      color: var(--zebra-doc-text-color-1);
      border: 1px solid;
      border-color: transparent transparent currentColor currentColor;
      transform: rotate(-45deg);
      content: '';
    }

    &-pop {
      position: absolute;
      top: 34px;
      left: 0;
      width: 100%;
      z-index: 99;
      color: var(--zebra-doc-text-color-1);
      line-height: 36px;
      text-align: left;
      overflow: hidden;
      background-color: var(--zebra-doc-background);
      border-radius: 5px;
      box-shadow: 0 4px 12px var(--zebra-doc-background-3);
      transform-origin: top;
      transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

      &-item {
        padding-left: 12px;
        transition: 0.2s;

        &:hover {
          color: var(--zebra-doc-link-color);
          background-color: #f7f8fa;
        }
      }
    }
  }

  &__logo {
    display: block;

    img {
      display: inline-block;
      width: 50px;
      margin-right: 12px;
      vertical-align: middle;
      box-shadow: var(--box-shadow-inset);
      border-radius: var(--neumorphism-border-radius);
    }
  }

  &__title {
    display: inline-block;
    color: var(--zebra-doc-text-color-1);
    font-size: 28px;
    font-weight: bold;
    vertical-align: middle;
  }

  &__subtitle {
    display: inline-block;
    color: var(--zebra-doc-text-color-2);
    margin-left: 8px;
    vertical-align: -4px;
    font-size: 13px;
  }

  &__link {
    cursor: pointer;
    color: var(--zebra-doc-text-color-1);

    &--icon {
      color: var(--zebra-doc-text-color-1);
      font-size: 24px;
      display: block;
      width: 34px;
      height: 34px;
      padding: 6px;
      box-sizing: border-box;
      transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: var(--box-shadow);
      border-radius: var(--neumorphism-border-radius);

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

.zebra-doc-dropdown {
  &-enter,
  &-leave-active {
    transform: scaleY(0);
    opacity: 0;
  }

  &-enter-active {
    transform: scaleY(0);
    opacity: 1;
  }
}
</style>
