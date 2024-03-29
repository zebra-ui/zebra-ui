import { a6 as n, a5 as e, L as r, ad as o } from './index-7fd204f3.js'
const i = (n, e) => {
  const r = n.indexOf(e)
  return -1 === r
    ? n.findIndex(
        (n) =>
          void 0 !== e.key &&
          null !== e.key &&
          n.type === e.type &&
          n.key === e.key
      )
    : r
}
function s(n, e, r) {
  const s = (function (n) {
    const e = [],
      r = (n) => {
        Array.isArray(n) &&
          n.forEach((n) => {
            var i
            o(n) &&
              (e.push(n),
              (null == (i = n.component) ? void 0 : i.subTree) &&
                (e.push(n.component.subTree), r(n.component.subTree.children)),
              n.children && r(n.children))
          })
      }
    return r(n), e
  })(n.ctx.children)
  r.sort((n, e) => i(s, n.vnode) - i(s, e.vnode))
  const t = r.map((n) => n.proxy)
  e.sort((n, e) => t.indexOf(n) - t.indexOf(e))
}
function t(o) {
  const i = n([]),
    t = n([]),
    c = r()
  return {
    children: i,
    linkChildren: (n) => {
      e(
        o,
        Object.assign(
          {
            link: (n) => {
              n.proxy && (t.push(n), i.push(n.proxy), s(c, i, t))
            },
            unlink: (n) => {
              const e = t.indexOf(n)
              i.splice(e, 1), t.splice(e, 1)
            },
            children: i,
            internalChildren: t
          },
          n
        )
      )
    }
  }
}
export { t as u }
