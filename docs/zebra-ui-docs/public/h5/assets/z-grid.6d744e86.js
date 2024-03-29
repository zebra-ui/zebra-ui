import {
  n as s,
  i as e,
  j as t,
  a5 as o,
  r as a,
  c as r,
  _ as i,
  y as n,
  t as c,
  m as l,
  a6 as d
} from './DemoPage.0bae30a9.js'
import {
  d as u,
  D as p,
  m as g,
  o as m,
  c as f,
  w as b,
  a as y,
  n as x,
  E as k,
  y as v,
  x as _,
  e as z,
  F as S,
  ab as j,
  p as q,
  b as P,
  t as h,
  L as C,
  C as B,
  i as $,
  _ as I
} from './index-7fd204f3.js'
import { u as D } from './useParent.5b9c05b5.js'
import { u as G } from './useChildren.fb2421ae.js'
const H = I(
    u({
      name: 'ZGridItem',
      options: { virtualHost: !0 },
      props: {
        dot: Boolean,
        text: String,
        icon: String,
        badge: s,
        iconColor: String,
        iconPrefix: String,
        badgeProps: Object
      },
      emits: ['click'],
      setup(s, { emit: c }) {
        const l = s,
          [d, u] = e('grid-item')
        t(d)
        const I = C(),
          { parent: G, index: H } = D('z-grid'),
          L = p(() => {
            const {
              center: s,
              border: e,
              square: t,
              gutter: a,
              reverse: r,
              direction: i,
              clickable: n
            } = G.props
            return [
              u('content', [
                i,
                {
                  center: s,
                  square: t,
                  reverse: r,
                  clickable: n,
                  surround: e && a
                }
              ]),
              { [o]: e }
            ]
          }),
          N = p(() => {
            const { square: s, gutter: e, columnNum: t } = G.props,
              o = 100 / +t + '%',
              a = { flexBasis: o }
            if (s) a.paddingTop = o
            else if (e) {
              const s = n(e)
              ;(a.paddingRight = s), H.value >= +t && (a.marginTop = s)
            }
            return a
          }),
          O = p(() => {
            const { square: s, gutter: e } = G.props
            if (s && e) {
              const s = n(e)
              return { right: s, bottom: s, height: 'auto' }
            }
          }),
          T = () => {
            c('click')
          },
          Z = p(() => ({ 'font-size': 'var(--z-grid-item-icon-size)' }))
        return (e, t) => {
          const o = a(g('z-badge'), r),
            n = a(g('z-icon'), i),
            c = B,
            d = $
          return (
            m(),
            f(
              d,
              {
                class: x([k(u)({ square: k(G).props.square })]),
                style: v(k(N))
              },
              {
                default: b(() => [
                  y(
                    d,
                    { class: x(k(L)), style: v(k(O)), onClick: T },
                    {
                      default: b(() => [
                        k(I).slots.default
                          ? _(e.$slots, 'default', { key: 0 }, void 0, !0)
                          : (m(),
                            z(
                              S,
                              { key: 1 },
                              [
                                k(I).slots.icon
                                  ? (m(),
                                    f(
                                      o,
                                      j(
                                        {
                                          key: 0,
                                          dot: l.dot,
                                          content: l.badge
                                        },
                                        s.badgeProps
                                      ),
                                      {
                                        default: b(() => [
                                          _(e.$slots, 'icon', {}, void 0, !0)
                                        ]),
                                        _: 3
                                      },
                                      16,
                                      ['dot', 'content']
                                    ))
                                  : l.icon
                                    ? (m(),
                                      f(
                                        n,
                                        {
                                          key: 1,
                                          dot: l.dot,
                                          name: l.icon,
                                          size: k(G).props.iconSize,
                                          badge: l.badge,
                                          'custom-style': k(Z),
                                          color: l.iconColor,
                                          'badge-props': l.badgeProps,
                                          'class-prefix': l.iconPrefix
                                        },
                                        null,
                                        8,
                                        [
                                          'dot',
                                          'name',
                                          'size',
                                          'badge',
                                          'custom-style',
                                          'color',
                                          'badge-props',
                                          'class-prefix'
                                        ]
                                      ))
                                    : q('', !0)
                              ],
                              64
                            )),
                        k(I).slots.text
                          ? _(e.$slots, 'text', { key: 2 }, void 0, !0)
                          : l.text
                            ? (m(),
                              f(
                                c,
                                { key: 3, class: x(k(u)('text')) },
                                { default: b(() => [P(h(l.text), 1)]), _: 1 },
                                8,
                                ['class']
                              ))
                            : q('', !0)
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
      }
    }),
    [['__scopeId', 'data-v-f62ac549']]
  ),
  L = I(
    u({
      name: 'ZGrid',
      options: { virtualHost: !0 },
      props: {
        square: Boolean,
        center: c,
        border: c,
        gutter: s,
        reverse: Boolean,
        iconSize: s,
        direction: String,
        clickable: Boolean,
        columnNum: l(4),
        customStyle: Object
      },
      setup(s) {
        const t = s,
          [o, a] = e('grid'),
          { linkChildren: r } = G(o)
        return (
          r({ props: t }),
          (s, e) => {
            const o = $
            return (
              m(),
              f(
                o,
                {
                  style: v({ paddingLeft: k(n)(t.gutter), ...t.customStyle }),
                  class: x([k(a)(), { [k(d)]: t.border && !t.gutter }])
                },
                {
                  default: b(() => [_(s.$slots, 'default', {}, void 0, !0)]),
                  _: 3
                },
                8,
                ['style', 'class']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-5feef701']]
  )
export { H as _, L as a }
