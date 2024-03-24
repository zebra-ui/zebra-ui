export type SwipeCellSide = 'left' | 'right'

export type SwipeCellPosition = SwipeCellSide | 'cell' | 'outside'

export type SwipeCellExpose = {
  open: (side: SwipeCellSide) => void
  close: (position: SwipeCellPosition) => void
}
