export type SwipeState = {
  rect: { width: number; height: number } | null
  width: number
  height: number
  offset: number
  active: number
  swiping: boolean
}

export type SwipeToOptions = {
  immediate?: boolean
}

export type SwipeExpose = {
  prev: () => void
  next: () => void
  resize: () => void
  swipeTo: (index: number, options?: SwipeToOptions) => void
  state: SwipeState
}

export type SwipeThemeVars = {
  swipeIndicatorSize?: string
  swipeIndicatorMargin?: string
  swipeIndicatorActiveOpacity?: number | string
  swipeIndicatorInactiveOpacity?: number | string
  swipeIndicatorActiveBackground?: string
  swipeIndicatorInactiveBackground?: string
}
