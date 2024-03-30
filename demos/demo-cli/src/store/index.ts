// @ts-ignore
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({ theme: uni.getStorageSync('theme') || 'light' }),
  actions: {
    setTheme(value: string) {
      // @ts-ignore
      this.theme = value
      uni.setStorageSync('theme', value)
    }
  }
})
