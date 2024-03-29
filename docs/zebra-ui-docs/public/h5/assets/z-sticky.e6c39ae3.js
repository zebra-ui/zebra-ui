import {
  d as e,
  k as a,
  l,
  D as t,
  A as s,
  ae as o,
  I as u,
  B as i,
  ac as r,
  s as v,
  o as n,
  c,
  w as p,
  a as d,
  n as f,
  E as h,
  y as b,
  x as g,
  ah as y,
  i as m,
  L as x,
  u as T,
  _ as w
} from './index-7fd204f3.js'
import { i as z, j as N, A as _, J as k, K as R } from './DemoPage.0bae30a9.js'
const $ = w(
  e({
    __name: 'z-sticky',
    props: {
      zIndex: { type: Number, default: 99 },
      offsetTop: { type: Number, default: 0 },
      disabled: { type: Boolean, default: !1 },
      container: { type: null },
      scrollTop: { type: Number, default: 0 },
      h5NavHeight: { type: Number, default: 44 },
      customNavbar: Boolean
    },
    emits: ['scroll'],
    setup(e, { expose: w, emit: $ }) {
      const H = e,
        [B, C] = z('sticky')
      N(B)
      const I = x(),
        O = a(0),
        P = a(0),
        j = a(!1),
        F = a(0),
        A = a(0),
        D = a(0)
      let E, V
      const J = a(!1)
      l(
        () => H.offsetTop,
        (e) => {
          'number' == typeof e && (H.scrollTop ? M('scroll') : M('page'))
        }
      ),
        l(
          () => H.disabled,
          (e) => {
            e ? ((F.value = 0), (j.value = !1), Q()) : M('page')
          }
        ),
        l(
          () => H.container,
          (e) => {
            e && O.value && U()
          }
        ),
        l(
          () => H.scrollTop,
          () => {
            M('scroll')
          }
        )
      const K = t(() => {
          if (j.value && !J.value)
            return {
              transform: F.value ? 'translate3d(0, ' + F.value + 'px, 0)' : '',
              top: j.value ? D.value + 'px' : '',
              'z-index': H.zIndex,
              width: `${P.value}px`,
              height: `${O.value}px`
            }
        }),
        L = t(() => {
          if (!J.value)
            return j.value
              ? { width: `${P.value}px`, height: `${O.value}px` }
              : void 0
        }),
        q = (e) =>
          new Promise((a, l) => {
            T()
              .in(I)
              .select(e)
              .boundingClientRect((t) => {
                t ? a(t) : l(new Error(`can not find selector: ${e}`))
              })
              .exec()
          }),
        G = a(0),
        M = (e) => {
          H.customNavbar
            ? 'web' == s().uniPlatform
              ? (D.value = H.offsetTop + G.value)
              : (D.value = H.offsetTop + G.value + s().statusBarHeight)
            : 'web' == s().uniPlatform
              ? (D.value = H.offsetTop + H.h5NavHeight)
              : (D.value = H.offsetTop),
            Q(),
            _(() => {
              q('.z-sticky').then((a) => {
                ;(O.value = a.height),
                  (P.value = a.width),
                  (F.value = 0),
                  'page' == e
                    ? (S(), U())
                    : H.offsetTop >= a.top
                      ? ($('scroll', { scrollTop: H.scrollTop, isFixed: !0 }),
                        (j.value = !0),
                        (F.value = 0))
                      : ($('scroll', { scrollTop: H.scrollTop, isFixed: !1 }),
                        (j.value = !1))
              })
            })
        },
        Q = (e = null) => {
          e
            ? 'contentObserver' == e && E && E.disconnect()
            : E && E.disconnect()
        },
        S = () => {
          Q('contentObserver')
          let e = y(I, { thresholds: [1], initialRatio: 1 })
          e.relativeToViewport({ top: -D.value }),
            e.observe('.z-sticky', (e) => {
              H.disabled || W(e.boundingClientRect.top)
            }),
            (E = e)
        },
        U = () => {
          let e = H.container
          e &&
            (Q('containerObserver'),
            o(() => {
              q('.z-sticky').then((a) => {
                let l = a.top,
                  t = e.top,
                  s = e.height,
                  o = l - t,
                  u = y(I, { thresholds: [1], initialRatio: 1 })
                u.relativeToViewport({ top: s - O.value - D.value - o }),
                  u.observe('.z-sticky', (e) => {
                    H.disabled ||
                      (D.value + a.height > s + e.boundingClientRect.top
                        ? (F.value = s - a.height)
                        : (D.value, (F.value = 0)),
                      W(e.boundingClientRect.top))
                  }),
                  (V = o),
                  (A.value = s)
              })
            }))
        },
        W = (e = 0) => {
          let a = V,
            l =
              A.value && O.value
                ? e >= O.value + D.value + a - A.value && e < D.value
                : e <= D.value
          l && (F.value = 0),
            $('scroll', { scrollTop: e, isFixed: l }),
            (j.value = l)
        }
      return (
        l([k, R], () => {
          j.value &&
            ((J.value = !0),
            o(() => {
              q('.z-sticky').then((e) => {
                const a = e
                ;(P.value = a.width), (O.value = a.height), (J.value = !1)
              })
            }))
        }),
        u(() => {
          H.customNavbar
            ? i('zNavbarHeight', (e) => {
                ;(G.value = e), H.disabled || M('page')
              })
            : H.disabled || M('page')
        }),
        r(() => {
          Q(), v('zNavbarHeight')
        }),
        w({ initObserver: M }),
        (e, a) => {
          const l = m
          return (
            n(),
            c(
              l,
              { style: b(h(L)) },
              {
                default: p(() => [
                  d(
                    l,
                    { class: f(h(C)()), style: b(h(L)) },
                    {
                      default: p(() => [
                        d(
                          l,
                          {
                            class: f([h(C)('wrap', { fixed: j.value })]),
                            style: b(h(K))
                          },
                          {
                            default: p(() => [
                              g(e.$slots, 'default', {}, void 0, !0)
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
                ]),
                _: 3
              },
              8,
              ['style']
            )
          )
        }
      )
    }
  }),
  [['__scopeId', 'data-v-d57a3826']]
)
export { $ as _ }
