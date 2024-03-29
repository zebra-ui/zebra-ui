import {
  d as t,
  D as s,
  o as e,
  c as a,
  w as l,
  e as i,
  F as r,
  r as n,
  E as h,
  n as g,
  y as o,
  b as c,
  t as u,
  C as d,
  i as p,
  _ as y,
  m as f,
  G as _,
  a as m
} from './index-7fd204f3.js'
import {
  t as x,
  R as S,
  s as w,
  i as k,
  j as b,
  r as v,
  a as j
} from './DemoPage.0bae30a9.js'
const z = y(
    t({
      name: 'ZHighlight',
      options: { virtualHost: !0 },
      props: {
        autoEscape: x,
        caseSensitive: Boolean,
        highlightStyle: Object,
        highlightClass: String,
        keywords: S([String, Array]),
        sourceString: w(''),
        unhighlightStyle: Object,
        unhighlightClass: String
      },
      setup(t) {
        const y = t,
          [f, _] = k('highlight')
        b(f)
        const m = s(() => {
            const {
                autoEscape: t,
                caseSensitive: s,
                keywords: e,
                sourceString: a
              } = y,
              l = s ? 'g' : 'gi'
            let i = (Array.isArray(e) ? e : [e])
              .filter((t) => t)
              .reduce((s, e) => {
                t && (e = e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
                const i = new RegExp(e, l)
                let r
                for (; (r = i.exec(a)); ) {
                  const t = r.index,
                    e = i.lastIndex
                  t >= e
                    ? i.lastIndex++
                    : s.push({ start: t, end: e, highlight: !0 })
                }
                return s
              }, [])
            i = i
              .sort((t, s) => t.start - s.start)
              .reduce((t, s) => {
                const e = t[t.length - 1]
                if (!e || s.start > e.end) {
                  const a = e ? e.end : 0,
                    l = s.start
                  a !== l && t.push({ start: a, end: l, highlight: !1 }),
                    t.push(s)
                } else e.end = Math.max(e.end, s.end)
                return t
              }, [])
            const r = i[i.length - 1]
            return (
              r &&
                r.end < a.length &&
                i.push({ start: r.end, end: a.length, highlight: !1 }),
              i
            )
          }),
          x = (t) => y.sourceString.slice(t.start, t.end)
        return (s, y) => {
          const f = d,
            S = p
          return (
            e(),
            a(
              S,
              { class: g(h(_)()) },
              {
                default: l(() => [
                  (e(!0),
                  i(
                    r,
                    null,
                    n(
                      h(m),
                      (s, n) => (
                        e(),
                        i(
                          r,
                          { key: n },
                          [
                            s.highlight
                              ? (e(),
                                a(
                                  f,
                                  {
                                    key: 0,
                                    class: g([h(_)('tag'), t.highlightClass]),
                                    style: o(t.highlightStyle)
                                  },
                                  { default: l(() => [c(u(x(s)), 1)]), _: 2 },
                                  1032,
                                  ['class', 'style']
                                ))
                              : (e(),
                                a(
                                  f,
                                  {
                                    key: 1,
                                    style: o(t.unhighlightStyle),
                                    class: g(t.unhighlightClass)
                                  },
                                  { default: l(() => [c(u(x(s)), 1)]), _: 2 },
                                  1032,
                                  ['style', 'class']
                                ))
                          ],
                          64
                        )
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              },
              8,
              ['class']
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-9550dab9']]
  ),
  C = y(
    t({
      __name: 'highlight',
      setup(t) {
        const s = 'zebra-swiper是基于uniapp开发的一款移动端轮播组件。',
          i = ['zebra-swiper', 'uniapp', '移动端']
        return (t, r) => {
          const n = v(f('z-highlight'), z),
            h = p,
            g = _('demo-block'),
            o = v(f('DemoPage'), j)
          return (
            e(),
            a(
              o,
              { title: 'Highlight' },
              {
                default: l(() => [
                  m(
                    h,
                    { class: 'demo-highlight' },
                    {
                      default: l(() => [
                        m(
                          g,
                          { title: '基础用法' },
                          {
                            default: l(() => [
                              m(
                                h,
                                { class: 'text-content' },
                                {
                                  default: l(() => [
                                    m(n, {
                                      keywords: 'zebra-swiper',
                                      'source-string': s
                                    })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        m(
                          g,
                          { title: '多字符匹配' },
                          {
                            default: l(() => [
                              m(
                                h,
                                { class: 'text-content' },
                                {
                                  default: l(() => [
                                    m(n, { keywords: i, 'source-string': s })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        m(
                          g,
                          { title: '自定义类名及样式' },
                          {
                            default: l(() => [
                              m(
                                h,
                                { class: 'text-content' },
                                {
                                  default: l(() => [
                                    m(n, {
                                      keywords: i,
                                      'source-string': s,
                                      'highlight-class': 'text-content-custom'
                                    })
                                  ]),
                                  _: 1
                                }
                              ),
                              m(
                                h,
                                { class: 'text-content' },
                                {
                                  default: l(() => [
                                    m(
                                      n,
                                      {
                                        keywords: i,
                                        'source-string': s,
                                        'highlight-style': {
                                          color: 'var(--z-red)'
                                        }
                                      },
                                      null,
                                      8,
                                      ['highlight-style']
                                    )
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              }
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-f5bf69ef']]
  )
export { C as default }
