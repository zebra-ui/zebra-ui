import type { VNode } from 'vue'
import type { Numeric } from '../../libs/utils'

export type DropdownItemOptionValue = Numeric | boolean

export type DropdownItemOption = {
  text: string
  icon?: string
  value: DropdownItemOptionValue
}

export type DropdownItemExpose = {
  toggle: (
    show?: boolean,
    options?: {
      immediate?: boolean
    }
  ) => void
  state: {
    showPopup: boolean
    transition: boolean
    showWrapper: boolean
  }
  renderTitle: () => string | VNode[]
}

export type DropdownItemThemeVars = {
  dropdownItemZIndex?: number | string
}
