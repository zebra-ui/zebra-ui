import {
  d as s,
  k as a,
  a6 as t,
  D as e,
  A as l,
  I as o,
  B as n,
  an as i,
  a9 as u,
  s as r,
  l as c,
  m as d,
  o as h,
  c as g,
  w as m,
  a as p,
  n as f,
  E as v,
  y,
  x,
  e as T,
  F as D,
  b as H,
  t as _,
  p as z,
  L as $,
  ae as S,
  i as k,
  _ as j
} from './index-7fd204f3.js'
import {
  m as V,
  n as b,
  i as w,
  j as B,
  y as P,
  r as A,
  d as I,
  A as M,
  x as Y
} from './DemoPage.0bae30a9.js'
import { u as E } from './use-touch.1ac9fd53.js'
const F = j(
  s({
    name: 'ZPullRefresh',
    options: { virtualHost: !0 },
    props: {
      disabled: Boolean,
      modelValue: Boolean,
      headHeight: V(60),
      successText: String,
      pullingText: String,
      loosingText: String,
      loadingText: String,
      pullDistance: b,
      successDuration: V(500),
      animationDuration: V(300),
      customStyle: Object,
      id: String
    },
    emits: ['change', 'refresh', 'update:modelValue', 'init'],
    setup(s, { emit: j }) {
      const V = s,
        [b, F] = w('pull-refresh')
      B(b)
      const L = $(),
        O = ['pulling', 'loosing', 'success']
      let R,
        Z = 0
      const q = a(0),
        C = t({ status: 'normal', distance: 0, duration: 0 }),
        G = E(),
        J = () => {
          if (60 !== V.headHeight) return { height: `${V.headHeight}px` }
        },
        K = e(() => ({ ...V.customStyle })),
        N = () =>
          'loading' !== C.status && 'success' !== C.status && !V.disabled,
        Q = (s, a) => {
          const t = +(V.pullDistance || V.headHeight)
          ;(C.distance = s),
            (C.status = a
              ? 'loading'
              : 0 === s
                ? 'normal'
                : s < t
                  ? 'pulling'
                  : 'loosing'),
            j('change', { status: C.status, distance: s })
        },
        U = () => {
          const { status: s } = C
          return 'normal' === s
            ? ''
            : V[`${s}Text`] ||
                {
                  pulling: '下拉即可刷新...',
                  loosing: '释放即可刷新...',
                  loading: '加载中'
                }[s]
        },
        W = (s) => {
          ;(R = 0 === Z), R && ((C.duration = 0), G.start(s))
        },
        X = (s) => {
          N() && W(s)
        },
        ss = (s) => {
          if (N()) {
            R || W(s)
            const { deltaY: a } = G
            G.move(s),
              R &&
                a.value >= 0 &&
                G.isVertical() &&
                Q(
                  ((s) => {
                    const a = +(V.pullDistance || V.headHeight)
                    return (
                      s > a &&
                        (s =
                          s < 2 * a
                            ? a + (s - a) / 2
                            : 1.5 * a + (s - 2 * a) / 4),
                      Math.round(s)
                    )
                  })(a.value)
                )
          }
        },
        as = () => {
          R &&
            G.deltaY.value &&
            N() &&
            ((C.duration = +V.animationDuration),
            'loosing' === C.status
              ? (Q(+V.headHeight, !0),
                j('update:modelValue', !0),
                S(() => j('refresh')))
              : Q(0))
        },
        ts = e(() => {
          let s = {}
          return (
            q.value && (s['min-height'] = P(q.value)),
            {
              transitionDuration: `${C.duration}ms`,
              transform: C.distance ? `translate3d(0,${C.distance}px, 0)` : '',
              ...s
            }
          )
        }),
        { windowHeight: es } = l(),
        ls = () => {
          M(() => {
            Y(L, '.z-pull-refresh-rect').then((s) => {
              const a = Math.floor(es - s.top)
              q.value = a
            })
          })
        },
        os = (s) => {
          Z = s.scrollTop
        }
      return (
        o(() => {
          ls(), n(`z-pull-refresh-${V.id}`, os)
        }),
        i(() => {
          ls()
        }),
        u(() => {
          r(`z-pull-refresh-${V.id}`)
        }),
        c(
          () => V.modelValue,
          (s) => {
            ;(C.duration = +V.animationDuration),
              s
                ? Q(+V.headHeight, !0)
                : L.slots.success || V.successText
                  ? ((C.status = 'success'),
                    setTimeout(() => {
                      Q(0)
                    }, +V.successDuration))
                  : Q(0, !1)
          }
        ),
        (s, a) => {
          const t = k,
            e = A(d('z-loading'), I)
          return (
            h(),
            g(
              t,
              { class: f(['z-pull-refresh-rect', v(F)()]), style: y(v(K)) },
              {
                default: m(() => [
                  p(
                    t,
                    {
                      class: f(v(F)('track')),
                      style: y(v(ts)),
                      onTouchstartPassive: X,
                      onTouchend: as,
                      onTouchmove: ss,
                      onTouchcancel: as
                    },
                    {
                      default: m(() => [
                        p(
                          t,
                          { class: f(v(F)('head')), style: y(J()) },
                          {
                            default: m(() => [
                              v(L).slots[C.status]
                                ? x(
                                    s.$slots,
                                    C.status,
                                    { key: 0, distance: C.distance },
                                    void 0,
                                    !0
                                  )
                                : (h(),
                                  T(
                                    D,
                                    { key: 1 },
                                    [
                                      O.includes(C.status)
                                        ? (h(),
                                          g(
                                            t,
                                            { key: 0, class: f(v(F)('text')) },
                                            {
                                              default: m(() => [H(_(U()), 1)]),
                                              _: 1
                                            },
                                            8,
                                            ['class']
                                          ))
                                        : z('', !0),
                                      'loading' === C.status
                                        ? (h(),
                                          g(
                                            e,
                                            {
                                              key: 1,
                                              size: 'var(--z-pull-refresh-loading-icon-size)'
                                            },
                                            {
                                              default: m(() => [H(_(U()), 1)]),
                                              _: 1
                                            }
                                          ))
                                        : z('', !0)
                                    ],
                                    64
                                  ))
                            ]),
                            _: 3
                          },
                          8,
                          ['class', 'style']
                        ),
                        x(s.$slots, 'default', {}, void 0, !0)
                      ]),
                      _: 3
                    },
                    8,
                    ['class', 'style']
                  )
                ]),
                _: 3
              },
              8,
              ['class', 'style']
            )
          )
        }
      )
    }
  }),
  [['__scopeId', 'data-v-3c97effe']]
)
export { F as _ }
