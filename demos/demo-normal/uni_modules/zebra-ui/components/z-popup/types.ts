import type { Ref, ComponentPublicInstance } from 'vue'

export type PopupPosition = 'top' | 'left' | 'bottom' | 'right' | 'center' | ''

export type PopupCloseIconPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

export type PopupExpose = {
  popupRef: Ref<HTMLElement>
}

export type PopupInstance = ComponentPublicInstance<any, PopupExpose>

export type PopupThemeVars = {
  popupBackground?: string
  popupTransition?: string
  popupRoundRadius?: string
  popupCloseIconSize?: string
  popupCloseIconColor?: string
  popupCloseIconMargin?: string
  popupCloseIconZIndex?: number | string
}
