import {
  n as a,
  i as e,
  j as t,
  r as s,
  _ as o,
  c as l,
  t as r,
  m as n,
  y as i,
  B as c,
  z as d,
  A as u,
  x as b,
  C as p
} from './DemoPage.0bae30a9.js'
import {
  d as m,
  D as f,
  m as v,
  o as g,
  c as y,
  w as x,
  a as h,
  ab as k,
  E as z,
  x as _,
  p as B,
  n as C,
  y as I,
  L as j,
  i as A,
  _ as P,
  k as $,
  I as w
} from './index-7fd204f3.js'
import { u as S } from './useParent.5b9c05b5.js'
import { u as V } from './useChildren.fb2421ae.js'
const D = P(
    m({
      name: 'ZTabbarItem',
      options: { virtualHost: !0 },
      props: {
        dot: Boolean,
        icon: String,
        name: a,
        badge: a,
        badgeProps: Object,
        iconPrefix: String
      },
      emits: ['click'],
      setup(a, { emit: r }) {
        const n = a,
          [i, c] = e('tabbar-item')
        t(i)
        const d = j(),
          { parent: u, index: b } = S('z-tabbar'),
          p = f(() => {
            const { modelValue: a } = u.props
            return (n.name ? n.name : b.value) === a
          }),
          m = (a) => {
            p.value || u.setActive(n.name ? n.name : b.value, b, () => {}),
              r('click', a)
          },
          P = f(() => ({
            'margin-bottom': 'var(--z-tabbar-item-icon-margin-bottom)',
            'font-size': 'var(--z-tabbar-item-icon-size)'
          })),
          $ = f(() => ({ display: 'block' }))
        return (e, t) => {
          const r = s(v('z-icon'), o),
            i = s(v('z-badge'), l),
            b = A
          return (
            g(),
            y(
              b,
              {
                class: C(z(c)({ active: z(p), animate: z(u).props.animate })),
                style: I({
                  color: z(p)
                    ? z(u).props.activeColor
                    : z(u).props.inactiveColor
                }),
                onClick: m
              },
              {
                default: x(() => [
                  h(
                    i,
                    k(
                      { dot: a.dot, 'wrapper-style': z(P), content: a.badge },
                      n.badgeProps
                    ),
                    {
                      default: x(() => [
                        z(d).slots.icon
                          ? _(
                              e.$slots,
                              'icon',
                              { key: 0, active: z(p) },
                              void 0,
                              !0
                            )
                          : n.icon
                            ? (g(),
                              y(
                                r,
                                {
                                  key: 1,
                                  name: n.icon,
                                  'custom-style': z($),
                                  'class-prefix': n.iconPrefix
                                },
                                null,
                                8,
                                ['name', 'custom-style', 'class-prefix']
                              ))
                            : B('', !0)
                      ]),
                      _: 3
                    },
                    16,
                    ['dot', 'wrapper-style', 'content']
                  ),
                  h(
                    b,
                    { class: C(z(c)('text')) },
                    {
                      default: x(() => [
                        _(e.$slots, 'default', {}, void 0, !0)
                      ]),
                      _: 3
                    },
                    8,
                    ['class']
                  )
                ]),
                _: 3
              },
              8,
              ['class', 'style']
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-ac74c367']]
  ),
  H = P(
    m({
      name: 'ZTabbar',
      options: { virtualHost: !0 },
      props: {
        route: Boolean,
        fixed: r,
        border: r,
        zIndex: a,
        placeholder: Boolean,
        activeColor: String,
        beforeChange: Function,
        inactiveColor: String,
        modelValue: n(0),
        safeAreaInsetBottom: { type: Boolean, default: null },
        background: Boolean,
        float: Boolean,
        animate: Boolean
      },
      emits: ['change', 'update:modelValue'],
      setup(a, { emit: t }) {
        const s = a,
          [o, l] = e('tabbar'),
          r = j(),
          n = $(0),
          { children: m, linkChildren: v } = V(o),
          k = () => (s.safeAreaInsetBottom ? s.safeAreaInsetBottom : s.fixed),
          P = $(0),
          S = $(0),
          D = $(0),
          H = f(() => ({
            ...{
              width: i(S.value),
              transform: `translateX(${D.value}px)`,
              'transition-duration': '0.3s'
            }
          })),
          T = f(() => {
            const a = {}
            return (
              s.float &&
                (0 == n.value &&
                  ((a['border-top-left-radius'] = '50rpx'),
                  (a['border-bottom-left-radius'] = '50rpx')),
                n.value == m.length - 1 &&
                  ((a['border-top-right-radius'] = '50rpx'),
                  (a['border-bottom-right-radius'] = '50rpx'))),
              { ...a }
            )
          })
        return (
          v({
            props: s,
            setActive: (a, e, o) => {
              p(s.beforeChange, {
                args: [a],
                done() {
                  s.background && (D.value = S.value * e.value),
                    (n.value = e.value),
                    t('update:modelValue', a),
                    t('change', a),
                    o()
                }
              })
            }
          }),
          w(() => {
            u(() => {
              b(r, '.z-tabbar-rect').then((a) => {
                ;(P.value = a.height), (S.value = a.width / m.length)
              })
            })
          }),
          (e, t) => {
            const o = A
            return s.fixed && s.placeholder
              ? (g(),
                y(
                  o,
                  {
                    key: 0,
                    class: C(z(l)('placeholder')),
                    style: I({ height: P.value ? `${P.value}px` : void 0 })
                  },
                  {
                    default: x(() => [
                      h(
                        o,
                        {
                          class: C([
                            'z-tabbar-rect',
                            [
                              z(l)({ fixed: a.fixed, float: s.float }),
                              {
                                [z(c)]: a.border && !s.float,
                                'z-safe-area-bottom': k() && !s.float
                              }
                            ]
                          ]),
                          style: I(z(d)(a.zIndex))
                        },
                        {
                          default: x(() => [
                            _(e.$slots, 'default', {}, void 0, !0),
                            s.background
                              ? (g(),
                                y(
                                  o,
                                  {
                                    key: 0,
                                    class: C(z(l)('background')),
                                    style: I(z(H))
                                  },
                                  {
                                    default: x(() => [
                                      h(
                                        o,
                                        {
                                          class: C(z(l)('background--content')),
                                          style: I(z(T))
                                        },
                                        null,
                                        8,
                                        ['class', 'style']
                                      )
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['class', 'style']
                                ))
                              : B('', !0)
                          ]),
                          _: 3
                        },
                        8,
                        ['style', 'class']
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['class', 'style']
                ))
              : (g(),
                y(
                  o,
                  {
                    key: 1,
                    class: C([
                      'z-tabbar-rect',
                      [
                        z(l)({ fixed: a.fixed, float: s.float }),
                        {
                          [z(c)]: a.border && !s.float,
                          'z-safe-area-bottom': k() && !s.float
                        }
                      ]
                    ]),
                    style: I(z(d)(a.zIndex))
                  },
                  {
                    default: x(() => [
                      _(e.$slots, 'default', {}, void 0, !0),
                      s.background
                        ? (g(),
                          y(
                            o,
                            {
                              key: 0,
                              class: C(z(l)('background')),
                              style: I(z(H))
                            },
                            {
                              default: x(() => [
                                h(
                                  o,
                                  {
                                    class: C(z(l)('background--content')),
                                    style: I(z(T))
                                  },
                                  null,
                                  8,
                                  ['class', 'style']
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ['class', 'style']
                          ))
                        : B('', !0)
                    ]),
                    _: 3
                  },
                  8,
                  ['style', 'class']
                ))
          }
        )
      }
    }),
    [['__scopeId', 'data-v-8d10e23e']]
  )
export { D as _, H as a }
