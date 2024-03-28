import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    docsTheme: 'light-n'
  }),
  actions: {
    setDocsTheme(value: string) {
      this.docsTheme = value
    }
  },
  persist: true
})
