import './index-7fd204f3.js'
import {
  k as t,
  l as e,
  m as n,
  t as o,
  V as a,
  F as r
} from './DemoPage.0bae30a9.js'
const l = t(
  {},
  {
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: n(44),
    showToolbar: o,
    swipeDuration: n(1e3),
    visibleOptionNum: n(6),
    title: String,
    cancelButtonText: String,
    confirmButtonText: String
  },
  { modelValue: e(), filter: Function, formatter: Function }
)
const s = (t, e) => 32 - new Date(t, e - 1, 32).getDate(),
  i = (t, e, n, o, r, l) => {
    const s = (function (t, e) {
      if (t < 0) return []
      const n = Array(t)
      let o = -1
      for (; ++o < t; ) n[o] = e(o)
      return n
    })(e - t + 1, (e) => {
      const r = a(t + e)
      return o ? o(n, { text: r, value: r }) : { text: r, value: r }
    })
    return r ? r(n, s, l) : s
  },
  u = (t, e) =>
    t.map((t, n) => {
      const o = e[n]
      if (o.length) {
        const e = +o[0].value,
          n = +o[o.length - 1].value
        return a(r(+t, e, n))
      }
      return t
    })
export { s as a, u as f, i as g, l as s }
