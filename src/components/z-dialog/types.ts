import type { Numeric } from '../../libs/utils'
export type DialogTheme = 'default' | 'round-button'
export type DialogAction = 'confirm' | 'cancel'
export type DialogMessage = string | (() => string)
export type DialogMessageAlign = 'left' | 'center' | 'right' | 'justify'
export type DialogOptions = {
  title?: string
  width?: Numeric
  theme?: DialogTheme
  message?: DialogMessage
  overlay?: boolean
  className?: unknown
  allowHtml?: boolean
  lockScroll?: boolean
  transition?: string
  beforeClose?: any
  messageAlign?: DialogMessageAlign
  overlayClass?: string
  overlayStyle?: object
  closeOnPopstate?: boolean
  showCancelButton?: boolean
  showConfirmButton?: boolean
  cancelButtonText?: string
  cancelButtonColor?: string
  cancelButtonDisabled?: boolean
  confirmButtonText?: string
  confirmButtonColor?: string
  confirmButtonDisabled?: boolean
  closeOnClickOverlay?: boolean
}

export type DialogThemeVars = {
  dialogWidth?: string
  dialogSmallScreenWidth?: string
  dialogFontSize?: string
  dialogTransition?: string
  dialogRadius?: string
  dialogBackground?: string
  dialogHeaderFontWeight?: string
  dialogHeaderLineHeight?: number | string
  dialogHeaderPaddingTop?: string
  dialogHeaderIsolatedPadding?: string
  dialogMessagePadding?: string
  dialogMessageFontSize?: string
  dialogMessageLineHeight?: number | string
  dialogMessageMaxHeight?: string
  dialogHasTitleMessageTextColor?: string
  dialogHasTitleMessagePaddingTop?: string
  dialogButtonHeight?: string
  dialogRoundButtonHeight?: string
  dialogConfirmButtonTextColor?: string
}
