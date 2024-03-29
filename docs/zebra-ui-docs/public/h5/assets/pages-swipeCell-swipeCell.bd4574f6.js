import {
  m as e,
  n as t,
  i as s,
  j as a,
  H as l,
  A as o,
  v as i,
  F as r,
  C as n,
  x as c,
  r as d,
  b as u,
  q as f,
  a as p
} from './DemoPage.0bae30a9.js'
import {
  d as g,
  a6 as m,
  D as h,
  k as v,
  I as _,
  o as z,
  c as b,
  w as y,
  a as w,
  n as x,
  E as j,
  y as k,
  x as C,
  p as P,
  z as q,
  L as W,
  i as D,
  _ as T,
  m as $,
  G as H,
  b as B
} from './index-7fd204f3.js'
import { _ as F } from './z-cell.365e08ec.js'
import { u as I } from './use-touch.1ac9fd53.js'
import { _ as S } from './z-card.861d1a5d.js'
import './z-toast.44a3344c.js'
import { s as A } from './z-dialog.b209de9d.js'
const E = T(
    g({
      name: 'ZSwipeCell',
      options: { virtualHost: !0 },
      props: {
        name: e(''),
        disabled: Boolean,
        leftWidth: t,
        rightWidth: t,
        beforeClose: Function,
        stopPropagation: Boolean
      },
      emits: ['open', 'close', 'click'],
      setup(e, { expose: t, emit: d }) {
        const u = e,
          f = W(),
          [p, g] = s('swipe-cell')
        let T, $, H, B
        a(p)
        const F = m({ offset: 0, dragging: !1 }),
          S = I(),
          A = h(() => ({
            transform: `translate3d(${F.offset}px, 0, 0)`,
            transitionDuration: F.dragging ? '0s' : '.6s'
          })),
          E = v({ left: 0, right: 0 }),
          G = (e) => E.value[e],
          J = h(() => (l(u.leftWidth) ? +u.leftWidth : G('left'))),
          L = h(() => (l(u.rightWidth) ? +u.rightWidth : G('right'))),
          M = (e) => {
            ;(F.offset = 'left' === e ? J.value : -L.value),
              T || ((T = !0), d('open', { name: u.name, position: e }))
          },
          X = (e) => {
            ;(F.offset = 0),
              T && ((T = !1), d('close', { name: u.name, position: e }))
          },
          Z = (e) => {
            u.disabled || ((H = F.offset), S.start(e))
          },
          K = (e) => {
            if (u.disabled) return
            const { deltaX: t } = S
            S.move(e),
              S.isHorizontal() &&
                (($ = !0),
                (F.dragging = !0),
                !T || t.value,
                (F.offset = r(t.value + H, -L.value, J.value)))
          },
          N = () => {
            F.dragging &&
              ((F.dragging = !1),
              ((e) => {
                const t = Math.abs(F.offset),
                  s = T ? 0.85 : 0.15,
                  a = 'left' === e ? J.value : L.value
                a && t > a * s ? M(e) : X(e)
              })(F.offset > 0 ? 'left' : 'right'),
              setTimeout(() => {
                $ = !1
              }, 0))
          },
          O = (e, t, s) => {
            s && e.stopPropagation(),
              ((e = 'outside') => {
                B ||
                  (d('click', e),
                  T &&
                    !$ &&
                    ((B = !0),
                    n(u.beforeClose, {
                      args: [{ name: u.name, position: e }],
                      done: () => {
                        ;(B = !1), X(e)
                      },
                      canceled: () => (B = !1),
                      error: () => (B = !1)
                    })))
              })(t)
          }
        return (
          _(() => {
            o(() => {
              Promise.all([
                c(f, '.z-cell-left-rect'),
                c(f, '.z-cell-right-rect')
              ]).then(([e, t]) => {
                ;(E.value.left = (null == e ? void 0 : e.width)
                  ? null == e
                    ? void 0
                    : e.width
                  : 0),
                  (E.value.right = (null == t ? void 0 : t.width)
                    ? null == t
                      ? void 0
                      : t.width
                    : 0)
              })
            })
          }),
          i({ open: M, close: X }),
          t({ open: M, close: X }),
          (e, t) => {
            const s = D
            return (
              z(),
              b(
                s,
                {
                  class: x(j(g)()),
                  onClick:
                    t[2] || (t[2] = q((e) => O(e, 'cell', j($)), ['stop'])),
                  onTouchstartPassive: Z,
                  onTouchmovePassive: K,
                  onTouchend: N,
                  onTouchcancel: N
                },
                {
                  default: y(() => [
                    w(
                      s,
                      { class: x(j(g)('wrapper')), style: k(j(A)) },
                      {
                        default: y(() => [
                          j(f).slots.left
                            ? (z(),
                              b(
                                s,
                                {
                                  key: 0,
                                  class: x(['z-cell-left-rect', j(g)('left')]),
                                  onClick:
                                    t[0] || (t[0] = (e) => O(e, 'left', !0))
                                },
                                {
                                  default: y(() => [
                                    C(e.$slots, 'left', {}, void 0, !0)
                                  ]),
                                  _: 3
                                },
                                8,
                                ['class']
                              ))
                            : P('', !0),
                          C(e.$slots, 'default', {}, void 0, !0),
                          j(f).slots.right
                            ? (z(),
                              b(
                                s,
                                {
                                  key: 1,
                                  class: x([
                                    'z-cell-right-rect',
                                    j(g)('right')
                                  ]),
                                  onClick:
                                    t[1] || (t[1] = (e) => O(e, 'right', !0))
                                },
                                {
                                  default: y(() => [
                                    C(e.$slots, 'right', {}, void 0, !0)
                                  ]),
                                  _: 3
                                },
                                8,
                                ['class']
                              ))
                            : P('', !0)
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
                ['class']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-e9eb16bc']]
  ),
  G = g({
    __name: 'swipeCell',
    setup(e) {
      const t = v(
          'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg'
        ),
        s = ({ position: e }) => {
          switch (e) {
            case 'left':
            case 'cell':
            case 'outside':
              return !0
            case 'right':
              return new Promise((e) => {
                A({ title: '确定删除吗' })
                  .then(() => e(!0))
                  .catch(() => e(!1))
              })
          }
        }
      return (e, a) => {
        const l = d($('z-button'), u),
          o = d($('z-cell'), F),
          i = d($('z-swipe-cell'), E),
          r = H('demo-block'),
          n = d($('z-card'), S),
          c = D,
          g = d($('z-dialog'), f),
          m = d($('DemoPage'), p)
        return (
          z(),
          b(
            m,
            { title: 'SwipeCell' },
            {
              default: y(() => [
                w(
                  c,
                  { class: 'demo-swipe-cell' },
                  {
                    default: y(() => [
                      w(
                        r,
                        { title: '基础用法' },
                        {
                          default: y(() => [
                            w(i, null, {
                              left: y(() => [
                                w(l, {
                                  square: '',
                                  type: 'primary',
                                  text: '选择'
                                })
                              ]),
                              right: y(() => [
                                w(l, {
                                  square: '',
                                  type: 'danger',
                                  text: '删除'
                                }),
                                w(l, {
                                  square: '',
                                  type: 'primary',
                                  text: '收藏'
                                })
                              ]),
                              default: y(() => [
                                w(o, {
                                  border: !1,
                                  title: '单元格',
                                  value: '内容'
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }
                      ),
                      w(
                        r,
                        { title: '自定义内容' },
                        {
                          default: y(() => [
                            w(i, null, {
                              right: y(() => [
                                w(l, {
                                  square: '',
                                  type: 'danger',
                                  text: '删除',
                                  'custom-style': { height: '100%' }
                                })
                              ]),
                              default: y(() => [
                                w(
                                  n,
                                  {
                                    title: '标题',
                                    cover: t.value,
                                    'header-bordered': ''
                                  },
                                  {
                                    actions: y(() => [
                                      w(
                                        l,
                                        { type: 'primary', size: 'mini' },
                                        { default: y(() => [B('操作')]), _: 1 }
                                      )
                                    ]),
                                    default: y(() => [B(' 这是一段文字 ')]),
                                    _: 1
                                  },
                                  8,
                                  ['cover']
                                )
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }
                      ),
                      w(
                        r,
                        { title: '异步关闭' },
                        {
                          default: y(() => [
                            w(
                              i,
                              { 'before-close': s },
                              {
                                left: y(() => [
                                  w(l, {
                                    square: '',
                                    type: 'primary',
                                    text: '选择'
                                  })
                                ]),
                                right: y(() => [
                                  w(l, {
                                    square: '',
                                    type: 'danger',
                                    text: '删除'
                                  })
                                ]),
                                default: y(() => [
                                  w(o, {
                                    border: !1,
                                    title: '单元格',
                                    value: '内容'
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
                ),
                w(g, { ref: 'zDialog' }, null, 512)
              ]),
              _: 1
            }
          )
        )
      }
    }
  })
export { G as default }
