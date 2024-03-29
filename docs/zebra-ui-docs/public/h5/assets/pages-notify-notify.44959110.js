import { _ as o } from './z-cell.365e08ec.js'
import {
  g as s,
  d as t,
  a6 as e,
  D as a,
  o as l,
  c as i,
  w as n,
  n as c,
  E as r,
  i as u,
  m as d,
  a as p,
  y as m,
  p as f,
  x as k,
  e as g,
  b as y,
  t as v,
  F as _,
  L as h,
  A as b,
  _ as w,
  k as C,
  G as z,
  C as N
} from './index-7fd204f3.js'
import {
  k as x,
  o as j,
  a1 as S,
  s as B,
  n as D,
  D as T,
  i as $,
  j as A,
  r as H,
  e as I,
  _ as P,
  a as U
} from './DemoPage.0bae30a9.js'
import './z-toast.44a3344c.js'
import './z-dialog.b209de9d.js'
let E, F
function G() {
  const o = (function () {
    const o = s()
    return o[o.length - 1]
  })().$vm.$refs.zNotify
  if (o) return (F = o), F
  console.warn('请确认页面存在z-notify节点！')
}
let L = {
  type: 'danger',
  color: void 0,
  message: '',
  onClose: void 0,
  onClick: void 0,
  onOpened: void 0,
  duration: 3e3,
  position: 'top',
  className: '',
  lockScroll: !1,
  background: void 0,
  customNavbar: !1
}
const O = () => {
  F && F.toggle(!1)
}
function Z(o) {
  var s
  return (
    F || G(),
    (o = x({}, L, j((s = o)) ? s : { message: s })),
    F.open(o),
    clearTimeout(E),
    o.duration > 0 && (E = setTimeout(O, o.duration)),
    F
  )
}
const q = w(
    t({
      name: 'ZNotify',
      options: { virtualHost: !0 },
      props: x({}, S, {
        type: B('danger'),
        color: String,
        message: D,
        position: B('top'),
        className: T,
        background: String,
        lockScroll: Boolean,
        useComponent: Boolean,
        customNavbar: Boolean
      }),
      emits: ['update:show'],
      setup(o, { expose: s, emit: t }) {
        const w = o,
          [C, z] = $('notify')
        A(C)
        const N = h(),
          j = e({ show: !1 }),
          S = (o) => t('update:show', o),
          B = (o) => (w.useComponent ? w[o] : j[o]),
          D = a(() => b().statusBarHeight + 'px'),
          T = (o) => {
            j.show = o
          }
        return (
          s({
            open: (o) => {
              x(j, o, { transitionAppear: !0 }), T(!0)
            },
            close: () => T(!1),
            toggle: T,
            state: j
          }),
          (o, s) => {
            const t = u,
              e = H(d('z-popup'), I)
            return (
              l(),
              i(
                t,
                { class: c(r(z)()) },
                {
                  default: n(() => [
                    p(
                      e,
                      {
                        show: B('show'),
                        'z-index': B('zIndex'),
                        overlay: !1,
                        duration: 200,
                        'onUpdate:show': S,
                        'lock-scroll': B('lockScroll'),
                        position: B('position')
                      },
                      {
                        default: n(() => [
                          o.customNavbar && 'top' == B('position')
                            ? (l(),
                              i(
                                t,
                                {
                                  key: 0,
                                  class: c(r(z)('placeholder', [B('type')])),
                                  style: m({
                                    height: r(D),
                                    width: '100%',
                                    color: B('color'),
                                    background: B('background')
                                  })
                                },
                                null,
                                8,
                                ['class', 'style']
                              ))
                            : f('', !0),
                          p(
                            t,
                            {
                              class: c([r(z)([B('type')]), B('className')]),
                              style: m({
                                color: B('color'),
                                background: B('background')
                              })
                            },
                            {
                              default: n(() => [
                                r(N).slots.default
                                  ? k(
                                      o.$slots,
                                      'default',
                                      { key: 0 },
                                      void 0,
                                      !0
                                    )
                                  : (l(),
                                    g(
                                      _,
                                      { key: 1 },
                                      [y(v(B('message')), 1)],
                                      64
                                    ))
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
                      ['show', 'z-index', 'lock-scroll', 'position']
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
    [['__scopeId', 'data-v-9a44eb61']]
  ),
  J = t({
    __name: 'notify',
    setup(s) {
      const t = C(!1),
        e = () => {
          Z('通知内容')
        },
        a = (o) => {
          Z({ message: '通知内容', type: o })
        },
        c = () => {
          Z({ color: '#ad0000', message: '自定义颜色', background: '#ffe1e1' })
        },
        r = () => {
          Z({ message: '自定义时长', duration: 1e3 })
        },
        m = () => {
          Z({ message: '自定义位置', position: 'bottom' })
        },
        f = () => {
          ;(t.value = !0),
            setTimeout(() => {
              t.value = !1
            }, 2e3)
        }
      return (s, k) => {
        const g = H(d('z-cell'), o),
          v = z('demo-block'),
          _ = H(d('z-icon'), P),
          h = N,
          b = H(d('z-notify'), q),
          w = u,
          C = H(d('DemoPage'), U)
        return (
          l(),
          i(
            C,
            { title: 'Notify' },
            {
              default: n(() => [
                p(
                  w,
                  { class: 'demo-notify' },
                  {
                    default: n(() => [
                      p(
                        v,
                        { title: '基础用法' },
                        {
                          default: n(() => [
                            p(g, {
                              'is-link': '',
                              title: '基础用法',
                              onClick: e
                            })
                          ]),
                          _: 1
                        }
                      ),
                      p(
                        v,
                        { title: '通知类型' },
                        {
                          default: n(() => [
                            p(g, {
                              'is-link': '',
                              title: '主要通知',
                              onClick: k[0] || (k[0] = (o) => a('primary'))
                            }),
                            p(g, {
                              'is-link': '',
                              title: '成功通知',
                              onClick: k[1] || (k[1] = (o) => a('success'))
                            }),
                            p(g, {
                              'is-link': '',
                              title: '危险通知',
                              onClick: k[2] || (k[2] = (o) => a('danger'))
                            }),
                            p(g, {
                              'is-link': '',
                              title: '警告通知',
                              onClick: k[3] || (k[3] = (o) => a('warning'))
                            })
                          ]),
                          _: 1
                        }
                      ),
                      p(
                        v,
                        { card: '', title: '自定义配置' },
                        {
                          default: n(() => [
                            p(g, {
                              'is-link': '',
                              title: '自定义颜色',
                              onClick: c
                            }),
                            p(g, {
                              'is-link': '',
                              title: '自定义位置',
                              onClick: m
                            }),
                            p(g, {
                              'is-link': '',
                              title: '自定义时长',
                              onClick: r
                            })
                          ]),
                          _: 1
                        }
                      ),
                      p(
                        v,
                        { title: '使用 Notify 组件' },
                        {
                          default: n(() => [
                            p(g, {
                              'is-link': '',
                              title: '使用 Notify 组件',
                              onClick: f
                            }),
                            p(
                              b,
                              {
                                show: t.value,
                                'onUpdate:show':
                                  k[4] || (k[4] = (o) => (t.value = o)),
                                type: 'success',
                                'custom-navbar': '',
                                'use-component': ''
                              },
                              {
                                default: n(() => [
                                  p(_, { name: 'notification' }),
                                  p(
                                    h,
                                    { style: { 'margin-left': '8rpx' } },
                                    { default: n(() => [y('内容')]), _: 1 }
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['show']
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                p(b, { ref: 'zNotify', 'custom-navbar': '' }, null, 512)
              ]),
              _: 1
            }
          )
        )
      }
    }
  })
export { J as default }
