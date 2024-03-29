import {
  d as t,
  D as s,
  o as a,
  c as e,
  w as r,
  x as o,
  y as n,
  E as u,
  n as l,
  i,
  _ as p
} from './index-7fd204f3.js'
import { u as c } from './useParent.5b9c05b5.js'
import {
  m as f,
  n as g,
  i as d,
  j as h,
  k as m,
  t as v
} from './DemoPage.0bae30a9.js'
import { u as y } from './useChildren.fb2421ae.js'
const b = p(
    t({
      name: 'ZCol',
      options: { virtualHost: !0 },
      props: { span: f(0), offset: g },
      setup(t) {
        const p = t,
          [f, g] = d('col')
        h(f)
        const { parent: v, index: y } = c('z-row'),
          b = s(() => {
            if (!v) return
            const { spaces: t, verticalSpaces: s } = v
            let a = {}
            if (t && t.value && t.value[y.value]) {
              const { left: s, right: e } = t.value[y.value]
              a = {
                paddingLeft: s ? `${s}px` : void 0,
                paddingRight: e ? `${e}px` : void 0
              }
            }
            const { bottom: e } = s.value[y.value] || {}
            return m(a, { marginBottom: e ? `${e}px` : null })
          })
        return (t, s) => {
          const c = i
          return (
            a(),
            e(
              c,
              {
                style: n(u(b)),
                class: l(
                  u(g)({ [p.span]: p.span, [`offset-${p.offset}`]: p.offset })
                )
              },
              {
                default: r(() => [o(t.$slots, 'default', {}, void 0, !0)]),
                _: 3
              },
              8,
              ['style', 'class']
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-c488442b']]
  ),
  j = p(
    t({
      name: 'ZRow',
      options: { virtualHost: !0 },
      props: {
        wrap: v,
        align: String,
        gutter: { type: [String, Number, Array], default: 0 },
        justify: String
      },
      setup(t) {
        const n = t,
          [p, c] = d('row'),
          { children: f, linkChildren: g } = y(p),
          h = s(() => {
            const t = [[]]
            let s = 0
            return (
              f.forEach((a, e) => {
                ;(s += Number(a.span)),
                  s > 24 ? (t.push([e]), (s -= 24)) : t[t.length - 1].push(e)
              }),
              t
            )
          })
        return (
          g({
            spaces: s(() => {
              let t = 0
              t = Array.isArray(n.gutter)
                ? Number(n.gutter[0]) || 0
                : Number(n.gutter)
              const s = []
              return t
                ? (h.value.forEach((a) => {
                    const e = (t * (a.length - 1)) / a.length
                    a.forEach((a, r) => {
                      if (0 === r) s.push({ right: e })
                      else {
                        const r = t - s[a - 1].right,
                          o = e - r
                        s.push({ left: r, right: o })
                      }
                    })
                  }),
                  s)
                : s
            }),
            verticalSpaces: s(() => {
              const { gutter: t } = n,
                s = []
              if (Array.isArray(t) && t.length > 1) {
                const a = Number(t[1]) || 0
                if (a <= 0) return s
                h.value.forEach((t, e) => {
                  e !== h.value.length - 1 &&
                    t.forEach(() => {
                      s.push({ bottom: a })
                    })
                })
              }
              return s
            })
          }),
          (s, n) => {
            const p = i
            return (
              a(),
              e(
                p,
                {
                  class: l(
                    u(c)({
                      [`align-${t.align}`]: t.align,
                      [`justify-${t.justify}`]: t.justify,
                      nowrap: !t.wrap
                    })
                  )
                },
                {
                  default: r(() => [o(s.$slots, 'default', {}, void 0, !0)]),
                  _: 3
                },
                8,
                ['class']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-7270318e']]
  )
export { b as _, j as a }
