let requestAnimationFrameCb: any
let cancelAnimationFrameCb: any

if (typeof requestAnimationFrame === 'function') {
  requestAnimationFrameCb = requestAnimationFrame
} else {
  requestAnimationFrameCb = function (callback: any) {
    return setTimeout(callback, 16)
  }
}

if (typeof cancelAnimationFrame === 'function') {
  cancelAnimationFrameCb = cancelAnimationFrame
} else {
  cancelAnimationFrameCb = function (id: any) {
    clearTimeout(id)
  }
}

export const supportsPassive = true

export function raf(fn: any): number {
  return requestAnimationFrameCb(fn)
}

export function cancelRaf(id: number) {
  cancelAnimationFrameCb(id)
}
export function doubleRaf(fn: FrameRequestCallback): void {
  raf(() => raf(fn))
}
