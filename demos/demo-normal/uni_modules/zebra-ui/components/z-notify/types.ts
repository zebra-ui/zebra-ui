import type { Numeric } from '../../libs/utils'

export type NotifyMessage = Numeric

export type NotifyType = 'primary' | 'success' | 'danger' | 'warning'

export type NotifyPosition = 'top' | 'bottom'

export type NotifyOptions = {
  show?: boolean
  type?: NotifyType
  color?: string
  message?: NotifyMessage
  duration?: number
  position?: NotifyPosition
  className?: unknown
  background?: string
  lockScroll?: boolean
  onClick?: (event: MouseEvent) => void
  onClose?: () => void
  onOpened?: () => void
  customNavbar?: boolean
}

export type NotifyThemeVars = {
  notifyTextColor?: string
  notifyPadding?: string
  notifyFontSize?: string
  notifyLineHeight?: number | string
  notifyPrimaryBackground?: string
  notifySuccessBackground?: string
  notifyDangerBackground?: string
  notifyWarningBackground?: string
}
