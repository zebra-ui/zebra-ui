import {
  d as a,
  k as e,
  D as t,
  I as s,
  ae as l,
  l as o,
  a3 as i,
  m as u,
  af as n,
  ag as f,
  o as v,
  c,
  w as r,
  x,
  E as p,
  p as d,
  n as g,
  z as m,
  y,
  L as b,
  i as h,
  _,
  a as z,
  b as j,
  t as k
} from './index-7fd204f3.js'
import {
  w as T,
  s as C,
  i as w,
  j as F,
  J as $,
  K as I,
  y as P,
  r as B,
  _ as D,
  A as O,
  x as S,
  a2 as U,
  a as A
} from './DemoPage.0bae30a9.js'
import { u as E } from './use-touch.1ac9fd53.js'
import { c as H } from './closest.9c1a5909.js'
import { _ as J, a as K } from './z-tabs.8d3e6868.js'
import { _ as L } from './z-toast.a77377ba.js'
import { s as R } from './z-toast.44a3344c.js'
import './useParent.5b9c05b5.js'
import './use-id.c1b053ed.js'
import './z-sticky.e6c39ae3.js'
import './useChildren.fb2421ae.js'
const X = _(
    a({
      name: 'ZFloatingBubble',
      options: { virtualHost: !0 },
      props: {
        gap: T(24),
        icon: String,
        axis: C('y'),
        magnetic: String,
        offset: { type: Object, default: () => ({ x: -1, y: -1 }) }
      },
      emits: ['click', 'update:offset', 'offsetChange'],
      setup(a, { emit: _ }) {
        const z = a,
          j = b(),
          [k, T] = w('floating-bubble')
        F(k)
        const C = e(),
          A = e({ x: 0, y: 0, width: 0, height: 0 }),
          J = t(() => ({
            top: z.gap,
            right: $.value - A.value.width - z.gap,
            bottom: I.value - A.value.height - z.gap,
            left: z.gap
          })),
          K = e(!1)
        let L = !1
        const R = t(() => {
            const a = {},
              e = P(A.value.x),
              t = P(A.value.y)
            return (
              (a.transform = `translate3d(${e}, ${t}, 0)`),
              (!K.value && L) || (a.transition = 'none'),
              a
            )
          }),
          X = () => {
            V.value &&
              O(() => {
                S(j, '.z-floating-bubble').then((a) => {
                  const { width: e, height: t } = a,
                    { offset: s } = z
                  A.value = {
                    x: s.x > -1 ? s.x : $.value - e - z.gap,
                    y: s.y > -1 ? s.y : I.value - t - z.gap,
                    width: e,
                    height: t
                  }
                })
              })
          },
          Y = E()
        let Z = 0,
          q = 0
        const G = (a) => {
            Y.start(a), (K.value = !0), (Z = A.value.x), (q = A.value.y)
          },
          M = (a) => {
            if ((Y.move(a), 'lock' !== z.axis && !Y.isTap.value)) {
              if ('x' === z.axis || 'xy' === z.axis) {
                let a = Z + Y.deltaX.value
                a < J.value.left && (a = J.value.left),
                  a > J.value.right && (a = J.value.right),
                  (A.value.x = a)
              }
              if ('y' === z.axis || 'xy' === z.axis) {
                let a = q + Y.deltaY.value
                a < J.value.top && (a = J.value.top),
                  a > J.value.bottom && (a = J.value.bottom),
                  (A.value.y = a)
              }
              const a = U(A.value, ['x', 'y'])
              _('update:offset', a)
            }
          },
          N = () => {
            ;(K.value = !1),
              l(() => {
                if ('x' === z.magnetic) {
                  const a = H([J.value.left, J.value.right], A.value.x)
                  A.value.x = a
                }
                if ('y' === z.magnetic) {
                  const a = H([J.value.top, J.value.bottom], A.value.y)
                  A.value.y = a
                }
                if (!Y.isTap.value) {
                  const a = U(A.value, ['x', 'y'])
                  _('update:offset', a),
                    (Z === a.x && q === a.y) || _('offsetChange', a)
                }
              })
          },
          Q = (a) => {
            Y.isTap.value && _('click', a)
          }
        s(() => {
          X(),
            l(() => {
              L = !0
            })
        }),
          o([$, I, () => z.gap, () => z.offset], X)
        const V = e(!0)
        return (
          i(() => {
            V.value = !0
          }),
          (a, e) => {
            const t = B(u('z-icon'), D),
              s = h
            return n(
              (v(),
              c(
                s,
                {
                  class: g(p(T)()),
                  ref_key: 'rootRef',
                  ref: C,
                  onTouchstartPassive: G,
                  onTouchmove: m(M, ['stop', 'prevent']),
                  onTouchend: N,
                  onTouchcancel: N,
                  onClickCapture: Q,
                  style: y(p(R))
                },
                {
                  default: r(() => [
                    x(a.$slots, 'default', {}, void 0, !0),
                    p(j).slots.default
                      ? d('', !0)
                      : (v(),
                        c(
                          t,
                          {
                            key: 0,
                            name: z.icon,
                            size: 'var(--z-floating-bubble-icon-size)'
                          },
                          null,
                          8,
                          ['name']
                        ))
                  ]),
                  _: 3
                },
                8,
                ['class', 'onTouchmove', 'style']
              )),
              [[f, V.value]]
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-c755110a']]
  ),
  Y = _(
    a({
      __name: 'floatingBubble',
      setup(a) {
        const t = (a) => {
            R(`x: ${a.x.toFixed(0)}, y: ${a.y.toFixed(0)}`)
          },
          s = () => {
            R('点击气泡')
          },
          l = e(0),
          o = e({ x: 200, y: 400 })
        return (a, e) => {
          const i = h,
            n = B(u('z-floating-bubble'), X),
            f = B(u('z-tab'), J),
            x = B(u('z-tabs'), K),
            p = B(u('z-toast'), L),
            g = B(u('DemoPage'), A)
          return (
            v(),
            c(
              g,
              { title: 'FloatingBubble' },
              {
                default: r(() => [
                  z(
                    i,
                    { class: 'demo-floating-bubble' },
                    {
                      default: r(() => [
                        z(
                          x,
                          {
                            active: l.value,
                            'onUpdate:active':
                              e[1] || (e[1] = (a) => (l.value = a))
                          },
                          {
                            default: r(() => [
                              z(
                                f,
                                { title: '基础用法' },
                                {
                                  default: r(() => [
                                    z(
                                      i,
                                      { class: 'text' },
                                      {
                                        default: r(() => [
                                          j(
                                            '在 x 轴默认位置，只允许 y 轴方向拖拽'
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    0 === l.value
                                      ? (v(),
                                        c(n, {
                                          key: 0,
                                          icon: 'setting-fill',
                                          onClick: s
                                        }))
                                      : d('', !0)
                                  ]),
                                  _: 1
                                }
                              ),
                              z(
                                f,
                                { title: '自由拖拽和磁吸' },
                                {
                                  default: r(() => [
                                    z(
                                      i,
                                      { class: 'text' },
                                      {
                                        default: r(() => [
                                          j(
                                            '允许 x 和 y 轴方向拖拽，吸附到 x 轴方向最近一边'
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    1 === l.value
                                      ? (v(),
                                        c(n, {
                                          key: 0,
                                          icon: 'setting-fill',
                                          axis: 'xy',
                                          magnetic: 'x',
                                          onOffsetChange: t
                                        }))
                                      : d('', !0)
                                  ]),
                                  _: 1
                                }
                              ),
                              z(
                                f,
                                { title: '双向绑定' },
                                {
                                  default: r(() => [
                                    z(
                                      i,
                                      { class: 'text' },
                                      {
                                        default: r(() => [
                                          j(
                                            ' 使用 offset 控制位置, x：' +
                                              k(o.value.x.toFixed(0)) +
                                              ' y:' +
                                              k(o.value.y.toFixed(0)),
                                            1
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    2 === l.value
                                      ? (v(),
                                        c(
                                          n,
                                          {
                                            key: 0,
                                            icon: 'setting-fill',
                                            offset: o.value,
                                            'onUpdate:offset':
                                              e[0] ||
                                              (e[0] = (a) => (o.value = a)),
                                            axis: 'xy'
                                          },
                                          null,
                                          8,
                                          ['offset']
                                        ))
                                      : d('', !0)
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['active']
                        )
                      ]),
                      _: 1
                    }
                  ),
                  z(p, { ref: 'zToast' }, null, 512)
                ]),
                _: 1
              }
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-b7a9770a']]
  )
export { Y as default }
