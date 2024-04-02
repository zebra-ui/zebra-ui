export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/content'
  ],
  nitro: {
    prerender: {
      ignore: ['/h5']
    }
  },
  content: {
    highlight: {
      theme: 'solarized-light'
    }
  }
})
