import {
  d as e,
  a6 as t,
  D as a,
  I as s,
  ae as i,
  o as l,
  e as o,
  x as c,
  y as n,
  E as r,
  _ as u,
  l as v,
  a3 as h,
  a4 as p,
  a9 as d,
  c as f,
  w as g,
  a as w,
  n as m,
  F as y,
  r as x,
  i as S,
  L as b
} from './index-7fd204f3.js'
import { u as $ } from './useParent.5b9c05b5.js'
import {
  v as C,
  t as z,
  n as _,
  m as T,
  i as j,
  E as I,
  A as M,
  x as k,
  F as O
} from './DemoPage.0bae30a9.js'
import { u as D } from './useChildren.fb2421ae.js'
import { u as E } from './use-touch.1ac9fd53.js'
const P = u(
    e({
      name: 'ZSwipeItem',
      options: { virtualHost: !0 },
      props: { customStyle: Object },
      setup(e) {
        const u = e,
          v = t({ offset: 0, inited: !1, mounted: !1 }),
          { parent: h } = $('z-swipe'),
          p = a(() => {
            const e = {}
            if (h) {
              const { vertical: t } = h.props
              h.size.value && (e[t ? 'height' : 'width'] = `${h.size.value}px`),
                v.offset &&
                  (e.transform = `translate${t ? 'Y' : 'X'}(${v.offset}px)`)
            }
            return { ...e, ...u.customStyle }
          })
        return (
          s(() => {
            i(() => {
              v.mounted = !0
            })
          }),
          C({
            setOffset: (e) => {
              v.offset = e
            }
          }),
          (e, t) => (
            l(),
            o(
              'div',
              { class: 'swipe-item', style: n([r(p)]) },
              [c(e.$slots, 'default', {}, void 0, !0)],
              4
            )
          )
        )
      }
    }),
    [['__scopeId', 'data-v-8326ac04']]
  ),
  X = u(
    e({
      name: 'ZSwipe',
      options: { virtualHost: !0 },
      props: {
        loop: z,
        width: _,
        height: _,
        vertical: Boolean,
        autoplay: T(0),
        duration: T(500),
        touchable: z,
        initialSwipe: T(0),
        indicatorColor: String,
        showIndicators: z,
        stopPropagation: z,
        customStyle: Object
      },
      emits: ['change', 'dragStart', 'dragEnd'],
      setup(e, { expose: i, emit: u }) {
        const $ = e,
          [z, _] = j('swipe'),
          T = b(),
          P = t({
            rect: null,
            width: 0,
            height: 0,
            offset: 0,
            active: 0,
            swiping: !1
          })
        let X = !1
        const Y = E(),
          { children: F, linkChildren: H } = D(z),
          Z = a(() => F.length),
          A = a(() => P[$.vertical ? 'height' : 'width']),
          B = a(() => ($.vertical ? Y.deltaY.value : Y.deltaX.value)),
          L = a(() => {
            if (P.rect) {
              return (
                ($.vertical ? P.rect.height : P.rect.width) - A.value * Z.value
              )
            }
            return 0
          }),
          q = a(() =>
            A.value ? Math.ceil(Math.abs(L.value) / A.value) : Z.value
          ),
          G = a(() => Z.value * A.value),
          J = a(() => (P.active + Z.value) % Z.value),
          K = a(() => {
            const e = $.vertical ? 'vertical' : 'horizontal'
            return Y.direction.value === e
          }),
          N = a(() => {
            const e = {
              transitionDuration: `${P.swiping ? 0 : $.duration}ms`,
              transform: `translate${$.vertical ? 'Y' : 'X'}(${+P.offset.toFixed(2)}px)`
            }
            if (A.value) {
              const t = $.vertical ? 'height' : 'width',
                a = $.vertical ? 'width' : 'height'
              ;(e[t] = `${G.value}px`), (e[a] = $[a] ? `${$[a]}px` : '')
            }
            return e
          }),
          Q = (e, t = 0) => {
            let a = e * A.value
            $.loop || (a = Math.min(a, -L.value))
            let s = t - a
            return $.loop || (s = O(s, L.value, 0)), s
          },
          R = ({ pace: e = 0, offset: t = 0, emitChange: a }) => {
            if (Z.value <= 1) return
            const { active: s } = P,
              i = ((e) => {
                const { active: t } = P
                return e
                  ? $.loop
                    ? O(t + e, -1, Z.value)
                    : O(t + e, 0, q.value)
                  : t
              })(e),
              l = Q(i, t)
            if ($.loop) {
              if (F[0] && l !== L.value) {
                const e = l < L.value
                F[0].setOffset(e ? G.value : 0)
              }
              if (F[Z.value - 1] && 0 !== l) {
                const e = l > 0
                F[Z.value - 1].setOffset(e ? -G.value : 0)
              }
            }
            ;(P.active = i),
              (P.offset = l),
              a && i !== s && u('change', J.value)
          },
          U = () => {
            ;(P.swiping = !0),
              P.active <= -1
                ? R({ pace: Z.value })
                : P.active >= Z.value && R({ pace: -Z.value })
          },
          V = () => {
            U(),
              Y.reset(),
              I(() => {
                ;(P.swiping = !1), R({ pace: -1, emitChange: !0 })
              })
          },
          W = () => {
            U(),
              Y.reset(),
              I(() => {
                ;(P.swiping = !1), R({ pace: 1, emitChange: !0 })
              })
          }
        let ee
        const te = () => clearTimeout(ee),
          ae = () => {
            te(),
              +$.autoplay > 0 &&
                Z.value > 1 &&
                (ee = setTimeout(() => {
                  W(), ae()
                }, +$.autoplay))
          },
          se = (e = +$.initialSwipe) => {
            M(() => {
              k(T, '.z-swipe-rect').then((t) => {
                const a = t
                ;(() => {
                  const t = { width: a.width, height: a.height }
                  ;(P.rect = t),
                    (P.width = +($.width ? $.width : t.width)),
                    (P.height = +($.height ? $.height : t.height)),
                    Z.value &&
                      -1 === (e = Math.min(Z.value - 1, e)) &&
                      (e = Z.value - 1),
                    (P.active = e),
                    (P.swiping = !0),
                    (P.offset = Q(e)),
                    F.forEach((e) => {
                      e.setOffset(0)
                    }),
                    ae()
                })()
              })
            })
          },
          ie = () => se(P.active)
        let le
        const oe = (e) => {
            !$.touchable ||
              e.touches.length > 1 ||
              (Y.start(e), (X = !1), (le = Date.now()), te(), U())
          },
          ce = (e) => {
            if ($.touchable && P.swiping && (Y.move(e), K.value)) {
              ;(!$.loop &&
                ((0 === P.active && B.value > 0) ||
                  (P.active === Z.value - 1 && B.value < 0))) ||
                (R({ offset: B.value }),
                X || (u('dragStart', { index: J.value }), (X = !0)))
            }
          },
          ne = () => {
            if (!$.touchable || !P.swiping) return
            const e = Date.now() - le,
              t = B.value / e
            if (
              (Math.abs(t) > 0.25 || Math.abs(B.value) > A.value / 2) &&
              K.value
            ) {
              const e = $.vertical ? Y.offsetY.value : Y.offsetX.value
              let t = 0
              ;(t = $.loop
                ? e > 0
                  ? B.value > 0
                    ? -1
                    : 1
                  : 0
                : -Math[B.value > 0 ? 'ceil' : 'floor'](B.value / A.value)),
                R({ pace: t, emitChange: !0 })
            } else B.value && R({ pace: 0 })
            ;(X = !1), (P.swiping = !1), u('dragEnd', { index: J.value }), ae()
          },
          re = (e, t = {}) => {
            U(),
              Y.reset(),
              I(() => {
                let a
                ;(a =
                  $.loop && e === Z.value
                    ? 0 === P.active
                      ? 0
                      : e
                    : e % Z.value),
                  t.immediate
                    ? I(() => {
                        P.swiping = !1
                      })
                    : (P.swiping = !1),
                  R({ pace: a - P.active, emitChange: !0 })
              })
          }
        return (
          C({ prev: V, next: W, state: P, resize: ie, swipeTo: re }),
          H({ size: A, props: $, count: Z, activeIndicator: J }),
          i({ prev: V, next: W, state: P, resize: ie, swipeTo: re }),
          v(
            () => $.initialSwipe,
            (e) => se(+e)
          ),
          v(Z, () => se(P.active)),
          v(() => $.autoplay, ae),
          v([() => $.width, () => $.height], ie),
          s(se),
          h(() => se(P.active)),
          p(te),
          d(te),
          (t, a) => {
            const s = S
            return (
              l(),
              f(
                s,
                {
                  class: m(['z-swipe-rect', [r(_)()]]),
                  style: n(e.customStyle)
                },
                {
                  default: g(() => [
                    w(
                      s,
                      {
                        style: n(r(N)),
                        class: m(r(_)('track', { vertical: $.vertical })),
                        onTouchstartPassive: oe,
                        onTouchmovePassive: ce,
                        onTouchend: ne,
                        onTouchcancel: ne
                      },
                      {
                        default: g(() => [
                          c(t.$slots, 'default', {}, void 0, !0)
                        ]),
                        _: 3
                      },
                      8,
                      ['style', 'class']
                    ),
                    e.showIndicators && r(Z) > 1
                      ? (l(),
                        f(
                          s,
                          {
                            key: 0,
                            class: m(
                              r(_)('indicators', { vertical: $.vertical })
                            )
                          },
                          {
                            default: g(() => [
                              (l(!0),
                              o(
                                y,
                                null,
                                x(
                                  r(Z),
                                  (e, t) => (
                                    l(),
                                    f(
                                      s,
                                      {
                                        key: t,
                                        style: n({
                                          backgroundColor:
                                            t === r(J) ? $.indicatorColor : ''
                                        }),
                                        class: m(
                                          r(_)('indicator', {
                                            active: t === r(J)
                                          })
                                        )
                                      },
                                      null,
                                      8,
                                      ['style', 'class']
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
                        ))
                      : c(
                          t.$slots,
                          'indicator',
                          { key: 1, active: r(J), total: r(Z) },
                          void 0,
                          !0
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
    [['__scopeId', 'data-v-5ed25dd9']]
  )
export { P as _, X as a }
