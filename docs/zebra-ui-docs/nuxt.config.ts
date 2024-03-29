export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: 'solarized-light'
    }
  }
})
