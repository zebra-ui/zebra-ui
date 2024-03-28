// import MyModule from './my-module/my-module'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    // MyModule,
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: 'solarized-light'
    }
  },
  i18n: {
    strategy: 'no_prefix',
    locales: ['zh', 'en'], //配置语种
    defaultLocale: 'zh',
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }
})
