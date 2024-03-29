import {
  d as e,
  k as t,
  D as s,
  I as a,
  l,
  o,
  e as i,
  a as n,
  w as c,
  F as u,
  b as p,
  t as r,
  c as d,
  n as x,
  E as v,
  x as m,
  p as f,
  y as h,
  L as y,
  v as w,
  ae as z,
  i as _,
  _ as g,
  m as b,
  G as k
} from './index-7fd204f3.js'
import {
  m as S,
  s as T,
  i as P,
  j,
  J as D,
  v as E,
  A as H,
  x as I,
  y as M,
  r as A,
  a as N
} from './DemoPage.0bae30a9.js'
const Z = g(
    e({
      name: 'ZTextEllipsis',
      options: { virtualHost: !0 },
      props: {
        rows: S(1),
        dots: T('...'),
        content: T(''),
        expandText: T(''),
        collapseText: T(''),
        position: T('end'),
        customStyle: Object
      },
      emits: ['clickAction'],
      setup(e, { expose: g, emit: b }) {
        const k = e,
          [S, T] = P('text-ellipsis')
        j(S)
        const A = y(),
          N = t(''),
          Z = t(!1),
          B = t(!1),
          C = s(() => (Z.value ? k.collapseText : k.expandText)),
          F = (e) => {
            if (!e) return 0
            const t = e.match(/^\d*(\.\d*)?/)
            return t ? Number(t[0]) : 0
          },
          G = t(!1),
          J = t({}),
          L = t(''),
          O = () => {
            const e = (e, t) =>
              new Promise((e) => {
                const { content: s, position: a, dots: l } = k,
                  o = s.length,
                  i = (e, a) =>
                    new Promise((n) => {
                      if (e[1] - e[0] <= 1 && a[1] - a[0] <= 1)
                        return void n(s.slice(0, e[0]) + l + s.slice(a[1], o))
                      const c = Math.floor((e[0] + e[1]) / 2),
                        u = Math.ceil((a[0] + a[1]) / 2)
                      ;(L.value =
                        k.content.slice(0, c) +
                        k.dots +
                        k.content.slice(u, o) +
                        k.expandText),
                        H(() => {
                          I(A, '.z-text-ellipsis-rect').then((s) => {
                            const { height: l } = s
                            n(
                              l >= t
                                ? i([e[0], c], [u, a[1]])
                                : i([c, e[1]], [a[0], u])
                            )
                          })
                        })
                    }),
                  n = (0 + o) >> 1
                'middle' === k.position
                  ? i([0, n], [n, o]).then((t) => {
                      ;(L.value = t), e(t)
                    })
                  : new Promise((e) => {
                      const i = (e, n) =>
                        new Promise((c) => {
                          if (n - e <= 1)
                            return 'end' === a
                              ? void c(s.slice(0, e) + l)
                              : void c(l + s.slice(n, o))
                          const u = Math.round((e + n) / 2)
                          ;(L.value =
                            'end' === a
                              ? s.slice(0, u) + l + C.value
                              : l + s.slice(u, o) + C.value),
                            H(() => {
                              I(A, '.z-text-ellipsis-rect').then((s) => {
                                const { height: l } = s
                                if (l > t)
                                  return 'end' === a
                                    ? void c(i(e, u))
                                    : void c(i(u, n))
                                c('end' !== a ? i(e, u) : i(u, n))
                              })
                            })
                        })
                      i(0, o).then((t) => {
                        ;(L.value = t), e(t)
                      })
                    }).then((t) => {
                      e(t)
                    })
              })
            H(() => {
              I(A, '.z-text-ellipsis-ph').then((t) => {
                const s =
                  ((a = t.width),
                  (J.value.position = 'fixed'),
                  (J.value.zIndex = '-9999'),
                  (J.value.top = '-19998rpx'),
                  (J.value.height = 'auto'),
                  (J.value.width = M(a)),
                  (J.value.minHeight = 'auto'),
                  (J.value.maxHeight = 'auto'),
                  (L.value = k.content),
                  (G.value = !0),
                  J.value)
                var a
                if (!s) return
                if (!k.customStyle || !k.customStyle['font-size'])
                  return void console.warn(
                    '[Zebra] 请通过customStyle设置font-size！'
                  )
                let {
                  paddingBottom: l = 0,
                  paddingTop: o = 0,
                  lineHeight: i,
                  'font-size': n
                } = k.customStyle
                i || '0' == i || (i = 1.6 * w(F(n)))
                const c = Math.ceil((Number(k.rows) + 0.5) * i + F(o) + F(l))
                z(() => {
                  H(() => {
                    I(A, '.z-text-ellipsis-rect').then((t) => {
                      c < t.height
                        ? ((B.value = !0),
                          e(0, c).then((e) => {
                            ;(N.value = e), (G.value = !1)
                          }))
                        : ((B.value = !1),
                          (N.value = k.content),
                          (G.value = !1))
                    })
                  })
                })
              })
            })
          },
          $ = (e = !Z.value) => {
            Z.value = e
          },
          q = (e) => {
            $(), b('clickAction', e)
          }
        return (
          a(O),
          l([D, () => [k.content, k.rows, k.position]], O),
          E({ toggle: $ }),
          g({ toggle: $ }),
          (t, s) => {
            const a = _
            return (
              o(),
              i(
                u,
                null,
                [
                  n(a, {
                    class: 'z-text-ellipsis-ph',
                    style: { width: '100%' }
                  }),
                  n(
                    a,
                    { class: x(v(T)()), style: h(e.customStyle) },
                    {
                      default: c(() => [
                        Z.value
                          ? (o(), i(u, { key: 0 }, [p(r(k.content), 1)], 64))
                          : (o(), i(u, { key: 1 }, [p(r(N.value), 1)], 64)),
                        B.value
                          ? (o(),
                            d(
                              a,
                              { key: 2, class: x(v(T)('action')), onClick: q },
                              {
                                default: c(() => [
                                  v(A).slots.action
                                    ? m(
                                        t.$slots,
                                        'action',
                                        { key: 0, expanded: Z.value },
                                        void 0,
                                        !0
                                      )
                                    : (o(),
                                      i(u, { key: 1 }, [p(r(v(C)), 1)], 64))
                                ]),
                                _: 3
                              },
                              8,
                              ['class']
                            ))
                          : f('', !0)
                      ]),
                      _: 3
                    },
                    8,
                    ['class', 'style']
                  ),
                  G.value
                    ? (o(),
                      d(
                        a,
                        {
                          key: 0,
                          class: x(['z-text-ellipsis-rect', v(T)()]),
                          style: h({ ...v(J), ...e.customStyle })
                        },
                        { default: c(() => [p(r(L.value), 1)]), _: 1 },
                        8,
                        ['class', 'style']
                      ))
                    : f('', !0)
                ],
                64
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-05b97d28']]
  ),
  B = g(
    e({
      __name: 'textEllipsis',
      setup(e) {
        const t =
            'zebra-swiper 是基于uniapp开发的一款适配多端的移动端轮播组件。',
          s =
            'zebra-swiper 是基于uniapp开发的一款移动端轮播组件。uniapp 的swiper组件存在很大的局限性，无法完成一些复杂的轮播效果。而zebra-swiper不仅可以实现一些3D轮播效果，还可以通过参数来定义你想要的效果。我们正在全面向swiperjs (opens new window)看齐，并且在小程序中，依然可以实现炫酷的轮播效果。'
        return (e, a) => {
          const l = A(b('z-text-ellipsis'), Z),
            i = k('demo-block'),
            u = _,
            x = A(b('DemoPage'), N)
          return (
            o(),
            d(
              x,
              { title: 'Ellipsis' },
              {
                default: c(() => [
                  n(
                    u,
                    { class: 'demo-text-ellipsis' },
                    {
                      default: c(() => [
                        n(
                          i,
                          { title: '基础用法' },
                          {
                            default: c(() => [
                              n(l, {
                                content: t,
                                'custom-style': { 'font-size': '26rpx' }
                              })
                            ]),
                            _: 1
                          }
                        ),
                        n(
                          i,
                          { title: '展开/收起' },
                          {
                            default: c(() => [
                              n(l, {
                                content:
                                  'uniapp 的swiper组件存在很大的局限性，无法完成一些复杂的轮播效果。而zebra-swiper不仅可以实现一些3D轮播效果，还可以通过参数来定义你想要的效果。',
                                'custom-style': { 'font-size': '26rpx' },
                                'expand-text': '展开',
                                'collapse-text': '收起'
                              })
                            ]),
                            _: 1
                          }
                        ),
                        n(
                          i,
                          { title: '自定义展示行数' },
                          {
                            default: c(() => [
                              n(l, {
                                rows: '3',
                                content: s,
                                'custom-style': { 'font-size': '26rpx' },
                                'expand-text': '展开',
                                'collapse-text': '收起'
                              })
                            ]),
                            _: 1
                          }
                        ),
                        n(
                          i,
                          { title: '头部省略' },
                          {
                            default: c(() => [
                              n(l, {
                                rows: '1',
                                content: s,
                                'custom-style': { 'font-size': '26rpx' },
                                'expand-text': '展开',
                                'collapse-text': '收起',
                                position: 'start'
                              })
                            ]),
                            _: 1
                          }
                        ),
                        n(
                          i,
                          { title: '中部省略' },
                          {
                            default: c(() => [
                              n(l, {
                                rows: '2',
                                content: s,
                                'custom-style': { 'font-size': '26rpx' },
                                'expand-text': '展开',
                                'collapse-text': '收起',
                                position: 'middle'
                              })
                            ]),
                            _: 1
                          }
                        ),
                        n(
                          i,
                          { title: '自定义操作内容' },
                          {
                            default: c(() => [
                              n(
                                l,
                                {
                                  content: t,
                                  'custom-style': { 'font-size': '26rpx' }
                                },
                                {
                                  action: c(({ expanded: e }) => [
                                    p(r(e ? '收起' : '展开'), 1)
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
    [['__scopeId', 'data-v-df153dc8']]
  )
export { B as default }
