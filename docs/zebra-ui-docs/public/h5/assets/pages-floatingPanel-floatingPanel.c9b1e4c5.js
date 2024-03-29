import {
  d as a,
  k as e,
  D as t,
  l,
  o as s,
  c as o,
  w as n,
  a as r,
  n as u,
  E as i,
  z as c,
  x as d,
  y as h,
  i as m,
  S as g,
  _ as f,
  m as v,
  e as p,
  r as _,
  F as x,
  b,
  t as j,
  A as z,
  C as y
} from './index-7fd204f3.js'
import { _ as P } from './z-cell.365e08ec.js'
import {
  m as T,
  l as C,
  t as D,
  i as k,
  j as F,
  K as I,
  y as M,
  r as w,
  a as A
} from './DemoPage.0bae30a9.js'
import { _ as B } from './z-cell-group.8b81d491.js'
import { u as S } from './use-sync-prop-ref.d5773770.js'
import { u as $ } from './use-touch.1ac9fd53.js'
import { c as H } from './closest.9c1a5909.js'
import { _ as Y, a as E } from './z-tabs.8d3e6868.js'
import './useParent.5b9c05b5.js'
import './use-id.c1b053ed.js'
import './z-sticky.e6c39ae3.js'
import './useChildren.fb2421ae.js'
const K = f(
    a({
      name: 'ZFloatingPanel',
      options: { virtualHost: !0 },
      props: {
        height: T(0),
        anchors: C(),
        duration: T(0.3),
        contentDraggable: D,
        lockScroll: Boolean,
        safeAreaInsetBottom: D
      },
      emits: ['heightChange', 'update:height'],
      setup(a, { emit: f }) {
        const v = a,
          p = e(!1),
          [_, x] = k('floating-panel')
        F(_)
        const b = S(
            () => +v.height,
            (a) => f('update:height', a)
          ),
          j = t(() => ({
            min: v.anchors[0] ? v.anchors[0] : 100,
            max: v.anchors[v.anchors.length - 1]
              ? v.anchors[v.anchors.length - 1]
              : Math.round(0.6 * I.value)
          })),
          z = t(() =>
            v.anchors.length >= 2 ? v.anchors : [j.value.min, j.value.max]
          ),
          y = e(!1),
          P = t(() => ({
            height: M(j.value.max),
            transform: `translateY(calc(100% + ${M(-b.value)}))`,
            transition: y.value
              ? 'none'
              : `transform ${v.duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28)`
          }))
        let T
        const C = $(),
          D = (a) => {
            C.start(a), (y.value = !0), (T = -b.value)
          },
          w = (a) => {
            C.move(a)
            if ('content' === a.currentTarget.dataset.id && !v.contentDraggable)
              return
            const e = C.deltaY.value + T
            b.value = -((a) => {
              const e = Math.abs(a),
                { min: t, max: l } = j.value
              return e > l
                ? -(l + 0.2 * (e - l))
                : e < t
                  ? -(t - 0.2 * (t - e))
                  : a
            })(e)
          },
          A = () => {
            ;(y.value = !1),
              (b.value = H(z.value, b.value)),
              b.value !== -T && f('heightChange', { height: b.value })
          }
        return (
          l(
            j,
            () => {
              b.value = H(z.value, b.value)
            },
            { immediate: !0 }
          ),
          l(
            () => b.value,
            (a) => {
              v.contentDraggable &&
                (a == j.value.max ? (p.value = !0) : (p.value = !1))
            },
            { immediate: !0 }
          ),
          (e, t) => {
            const l = m,
              f = g
            return (
              s(),
              o(
                l,
                {
                  class: u([
                    i(x)(),
                    { 'z-safe-area-bottom': a.safeAreaInsetBottom }
                  ]),
                  style: h(i(P)),
                  'data-id': 'root',
                  onTouchstartPassive: D,
                  onTouchmove: w,
                  onTouchend: A,
                  onTouchcancel: A
                },
                {
                  default: n(() => [
                    r(
                      l,
                      { class: u(i(x)('header')) },
                      {
                        default: n(() => [
                          r(l, { class: u(i(x)('header-bar')) }, null, 8, [
                            'class'
                          ])
                        ]),
                        _: 1
                      },
                      8,
                      ['class']
                    ),
                    r(
                      f,
                      {
                        class: u(i(x)('content')),
                        'scroll-y': p.value,
                        'data-id': 'content',
                        onTouchmove: c(w, ['stop', 'prevent'])
                      },
                      {
                        default: n(() => [
                          d(e.$slots, 'default', {}, void 0, !0)
                        ]),
                        _: 3
                      },
                      8,
                      ['class', 'scroll-y', 'onTouchmove']
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
    [['__scopeId', 'data-v-6f354a81']]
  ),
  U = a({
    __name: 'floatingPanel',
    setup(a) {
      const l = t(() => z().windowHeight),
        u = [100, Math.round(0.4 * l.value), Math.round(0.7 * l.value)],
        i = e(u[0])
      return (a, e) => {
        const t = w(v('z-cell'), P),
          l = w(v('z-cell-group'), B),
          c = w(v('z-floating-panel'), K),
          d = w(v('z-tab'), Y),
          h = y,
          g = m,
          f = w(v('z-tabs'), E),
          z = w(v('DemoPage'), A)
        return (
          s(),
          o(
            z,
            { title: 'FloatingPanel' },
            {
              default: n(() => [
                r(
                  g,
                  { class: 'demo-floating-panel' },
                  {
                    default: n(() => [
                      r(f, null, {
                        default: n(() => [
                          r(
                            d,
                            { title: '基础用法' },
                            {
                              default: n(() => [
                                r(c, null, {
                                  default: n(() => [
                                    r(l, null, {
                                      default: n(() => [
                                        (s(),
                                        p(
                                          x,
                                          null,
                                          _(26, (a) =>
                                            r(
                                              t,
                                              {
                                                key: a,
                                                title: String.fromCharCode(
                                                  a + 64
                                                ),
                                                size: 'large'
                                              },
                                              null,
                                              8,
                                              ['title']
                                            )
                                          ),
                                          64
                                        ))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }
                          ),
                          r(
                            d,
                            { title: '自定义锚点' },
                            {
                              default: n(() => [
                                r(
                                  c,
                                  {
                                    height: i.value,
                                    'onUpdate:height':
                                      e[0] || (e[0] = (a) => (i.value = a)),
                                    anchors: u
                                  },
                                  {
                                    default: n(() => [
                                      r(
                                        g,
                                        {
                                          style: {
                                            padding: '30rpx',
                                            'text-align': 'center'
                                          }
                                        },
                                        {
                                          default: n(() => [
                                            r(h, null, {
                                              default: n(() => [
                                                b(
                                                  '面板显示高度 ' +
                                                    j(i.value.toFixed(0)) +
                                                    ' px',
                                                  1
                                                )
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['height']
                                )
                              ]),
                              _: 1
                            }
                          ),
                          r(
                            d,
                            { title: '仅头部拖拽' },
                            {
                              default: n(() => [
                                r(
                                  c,
                                  { 'content-draggable': !1 },
                                  {
                                    default: n(() => [
                                      r(
                                        g,
                                        {
                                          style: {
                                            padding: '30rpx',
                                            'text-align': 'center'
                                          }
                                        },
                                        {
                                          default: n(() => [
                                            r(h, null, {
                                              default: n(() => [
                                                b('内容不可拖拽')
                                              ]),
                                              _: 1
                                            })
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
                      })
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
  })
export { U as default }
