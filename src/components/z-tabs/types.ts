import type { Numeric } from '../../libs/utils'

export type TabsType = 'line' | 'card'

export type TabsClickTabEventParams = {
  name: Numeric
  title: string
  event: MouseEvent
  disabled: boolean
}

export type TabsExpose = {
  resize: () => void
  scrollTo: (name: Numeric) => void
}

export type TabsThemeVars = {
  tabTextColor?: string
  tabActiveTextColor?: string
  tabDisabledTextColor?: string
  tabFontSize?: string
  tabLineHeight?: number | string
  tabsDefaultColor?: string
  tabsLineHeight?: number | string
  tabsCardHeight?: string
  tabsNavBackground?: string
  tabsBottomBarWidth?: string
  tabsBottomBarHeight?: string
  tabsBottomBarColor?: string
}
