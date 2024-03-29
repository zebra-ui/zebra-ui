import { g as o } from './index-7fd204f3.js'
import { k as n } from './DemoPage.0bae30a9.js'
let l = n(
  {},
  {
    title: '',
    width: '',
    theme: null,
    message: '',
    overlay: !0,
    callback: null,
    className: '',
    allowHtml: !1,
    lockScroll: !0,
    transition: 'dialog-bounce',
    beforeClose: null,
    overlayClass: '',
    overlayStyle: void 0,
    messageAlign: '',
    cancelButtonText: '',
    cancelButtonColor: null,
    cancelButtonDisabled: !1,
    confirmButtonText: '',
    confirmButtonColor: null,
    confirmButtonDisabled: !1,
    showConfirmButton: !0,
    showCancelButton: !1,
    closeOnPopstate: !0,
    closeOnClickOverlay: !1
  }
)
function t(n = 'zDialog') {
  const l = (function () {
    const n = o()
    return n[n.length - 1]
  })().$vm.$refs[n]
  if (l) return l
  console.warn('请确认页面存在z-dialog节点！')
}
function e(o) {
  return new Promise((e, a) => {
    const s = t()
    s &&
      s.open(
        n({}, l, o, {
          callback: (o) => {
            ;('confirm' === o ? e : a)(o)
          }
        })
      )
  })
}
const a = (o) => e(n({ showCancelButton: !0 }, o))
export { e as a, a as s }
