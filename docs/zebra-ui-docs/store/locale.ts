import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    docsLocale: 'zh'
  }),
  actions: {
    setDocsLocale(value: string) {
      this.docsLocale = value
    }
  },
  persist: true
})
