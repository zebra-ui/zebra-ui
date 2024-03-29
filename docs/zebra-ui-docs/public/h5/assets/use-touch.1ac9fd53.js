import { k as e } from './index-7fd204f3.js'
import { T as a } from './DemoPage.0bae30a9.js'
function l() {
  const l = e(0),
    t = e(0),
    u = e(0),
    v = e(0),
    o = e(0),
    s = e(0),
    i = e(''),
    r = e(!0),
    c = () => {
      ;(u.value = 0),
        (v.value = 0),
        (o.value = 0),
        (s.value = 0),
        (i.value = ''),
        (r.value = !0)
    }
  return {
    move: (e) => {
      const c = e.touches[0]
      ;(u.value = (c.clientX < 0 ? 0 : c.clientX) - l.value),
        (v.value = c.clientY - t.value),
        (o.value = Math.abs(u.value)),
        (s.value = Math.abs(v.value))
      var n, f
      ;(!i.value || (o.value < 10 && s.value < 10)) &&
        (i.value =
          ((n = o.value),
          (f = s.value),
          n > f ? 'horizontal' : f > n ? 'vertical' : '')),
        r.value && (o.value > a || s.value > a) && (r.value = !1)
    },
    start: (e) => {
      c(), (l.value = e.touches[0].clientX), (t.value = e.touches[0].clientY)
    },
    reset: c,
    startX: l,
    startY: t,
    deltaX: u,
    deltaY: v,
    offsetX: o,
    offsetY: s,
    direction: i,
    isVertical: () => 'vertical' === i.value,
    isHorizontal: () => 'horizontal' === i.value,
    isTap: r
  }
}
export { l as u }
