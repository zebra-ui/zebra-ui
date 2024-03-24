import type { Numeric } from '../../libs/utils'

export type CalendarType = 'single' | 'range' | 'multiple'

export type CalendarDayType =
  | ''
  | 'start'
  | 'start-end'
  | 'middle'
  | 'end'
  | 'selected'
  | 'multiple-middle'
  | 'multiple-selected'
  | 'disabled'
  | 'placeholder'

export type CalendarDayItem = {
  date?: Date
  text?: Numeric
  type?: CalendarDayType
  topInfo?: string
  className?: any
  bottomInfo?: string
}

export type CalendarExpose = {
  reset: (date?: Date | Date[]) => void
  scrollToDate: (targetDate: Date) => void
  getSelectedDate: () => Date | Date[] | null
}

export type CalendarThemeVars = {
  calendarBackground?: string
  calendarPopupHeight?: string
  calendarHeaderShadow?: string
  calendarHeaderTitleHeight?: string
  calendarHeaderTitleFontSize?: string
  calendarHeaderSubtitleFontSize?: string
  calendarWeekdaysHeight?: string
  calendarWeekdaysFontSize?: string
  calendarMonthTitleFontSize?: string
  calendarMonthMarkColor?: string
  calendarMonthMarkFontSize?: string
  calendarDayHeight?: string
  calendarDayFontSize?: string
  calendarDayMarginBottom?: string
  calendarRangeEdgeColor?: string
  calendarRangeEdgeBackground?: string
  calendarRangeMiddleColor?: string
  calendarRangeMiddleBackgroundOpacity?: number | string
  calendarSelectedDaySize?: string
  calendarSelectedDayColor?: string
  calendarInfoFontSize?: string
  calendarInfoLineHeight?: number | string
  calendarSelectedDayBackground?: string
  calendarDayDisabledColor?: string
  calendarConfirmButtonHeight?: string
  calendarConfirmButtonMargin?: string
}
