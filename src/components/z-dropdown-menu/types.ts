import type { Ref } from 'vue'
export type DropdownMenuDirection = 'up' | 'down'

export type DropdownMenuProvide = {
  id: string
  props: any
  offset: Ref<number>
  updateOffset: () => void
}

export type DropdownMenuExpose = {
  close: () => void
}

export type DropdownMenuThemeVars = {
  dropdownMenuHeight?: string
  dropdownMenuBackground?: string
  dropdownMenuShadow?: string
  dropdownMenuTitleFontSize?: string
  dropdownMenuTitleTextColor?: string
  dropdownMenuTitleActiveTextColor?: string
  dropdownMenuTitleDisabledTextColor?: string
  dropdownMenuTitlePadding?: string
  dropdownMenuTitleLineHeight?: number | string
  dropdownMenuOptionActiveColor?: string
  dropdownMenuContentMaxHeight?: string
}
