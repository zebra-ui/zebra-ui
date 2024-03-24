import type { Numeric } from '../../libs/utils'

export type CascaderOption = {
  text?: string
  value?: Numeric
  color?: string
  disabled?: boolean
  children?: CascaderOption[]
  className?: unknown
  [key: PropertyKey]: any
}

export type CascaderTab = {
  options: CascaderOption[]
  selected: CascaderOption | null
}

export type CascaderFieldNames = {
  text?: string
  value?: string
  children?: string
}

export type CascaderThemeVars = {
  cascaderHeaderHeight?: string
  cascaderHeaderPadding?: string
  cascaderTitleFontSize?: string
  cascaderTitleLineHeight?: number | string
  cascaderCloseIconSize?: string
  cascaderCloseIconColor?: string
  cascaderSelectedIconSize?: string
  cascaderTabsHeight?: string
  cascaderActiveColor?: string
  cascaderOptionsHeight?: string
  cascaderOptionDisabledColor?: string
  cascaderTabColor?: string
  cascaderUnselectedTabColor?: string
}
