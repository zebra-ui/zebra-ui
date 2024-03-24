import type { ComponentPublicInstance } from 'vue'
import type { Numeric } from '../../libs/utils'

export type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html'
export type ToastPosition = 'top' | 'middle' | 'bottom'
export type ToastWordBreak = 'break-all' | 'break-word' | 'normal'

export type ToastOptions = {
  icon?: string
  type?: ToastType
  mask?: boolean
  message?: Numeric
  overlay?: boolean
  duration?: number
  iconSize?: Numeric
  position?: ToastPosition
  className?: unknown
  transition?: string
  iconPrefix?: string
  wordBreak?: ToastWordBreak
  loadingType?: any
  forbidClick?: boolean
  closeOnClick?: boolean
  overlayClass?: unknown
  overlayStyle?: Record<string, any>
  closeOnClickOverlay?: boolean
  zIndex?: Numeric
  onClose?: () => void
  onOpened?: () => void
}

export type ToastWrapperInstance = ComponentPublicInstance<
  { message: Numeric },
  {
    close: () => void
    open: (props: Record<string, any>) => void
    state: {
      show: boolean
      [key: string]: any
    }
  }
>

export type ToastThemeVars = {
  toastMaxWidth?: string
  toastFontSize?: string
  toastTextColor?: string
  toastLoadingIconColor?: string
  toastLineHeight?: number | string
  toastRadius?: string
  toastBackground?: string
  toastIconSize?: string
  toastTextMinWidth?: string
  toastTextPadding?: string
  toastDefaultPadding?: string
  toastDefaultWidth?: string
  toastDefaultMinHeight?: string
  toastPositionTopDistance?: string
  toastPositionBottomDistance?: string
}
