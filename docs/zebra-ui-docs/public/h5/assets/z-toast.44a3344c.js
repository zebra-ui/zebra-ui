import { g as o } from './index-7fd204f3.js'
import { k as e, o as n } from './DemoPage.0bae30a9.js'
let s = [],
  t = e(
    {},
    {
      icon: '',
      type: 'text',
      message: '',
      overlay: !1,
      onClose: void 0,
      onOpened: void 0,
      duration: 2e3,
      iconSize: void 0,
      iconPrefix: void 0,
      position: 'middle',
      transition: 'fade',
      forbidClick: !1,
      loadingType: void 0,
      overlayClass: '',
      overlayStyle: void 0,
      closeOnClick: !1,
      closeOnClickOverlay: !1
    }
  )
const i = new Map()
function a(o) {
  return n(o) ? o : { message: o }
}
function r() {
  if (((s = []), !s.length)) {
    const e = (function () {
      const e = o()
      return e[e.length - 1]
    })().$vm.$refs.zToast
    if (!e) return void console.warn('请确认页面存在z-toast节点！')
    s.push(e)
  }
  return s[s.length - 1]
}
function c(o = {}) {
  const n = r(),
    s = a(o)
  if (n) return n.open(e({}, t, i.get(s.type || t.type), s)), n
}
const l = (o) => (n) => c(e({ type: o }, a(n))),
  d = l('loading'),
  f = l('success'),
  p = l('fail'),
  u = (o) => {
    s.length &&
      (o
        ? (s.forEach((o) => {
            o.close()
          }),
          (s = []))
        : s[0].close())
  }
export { d as a, f as b, p as c, u as d, c as s }
