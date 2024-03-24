export function getAllRect(context: any, selector: string) {
  return new Promise((resolve) => {
    uni
      .createSelectorQuery()
      .in(context)
      .selectAll(selector)
      .boundingClientRect()
      .exec((rect = []) => resolve(rect[0]))
  })
}

export function getRect(context: any, selector: any) {
  return new Promise((resolve: any) => {
    uni
      .createSelectorQuery()
      .in(context)
      .select(selector)
      .boundingClientRect()
      .exec((rect = [] as any) => {
        resolve(rect[0])
      })
  })
}

export function getScrollRect() {
  return new Promise((resolve: any) => {
    uni
      .createSelectorQuery()
      .selectViewport()
      .scrollOffset((rect = [] as any) => {
        resolve(rect)
      })
      .exec()
  })
}
