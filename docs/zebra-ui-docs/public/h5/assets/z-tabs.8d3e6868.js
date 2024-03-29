import {
  d as e,
  k as t,
  l as a,
  a6 as l,
  D as s,
  I as i,
  ae as o,
  a5 as n,
  E as r,
  o as c,
  c as d,
  w as u,
  a as v,
  n as h,
  x as p,
  y as f,
  af as b,
  ag as m,
  i as y,
  L as g,
  _ as w,
  m as k,
  e as x,
  F as _,
  r as z,
  b as C,
  t as I,
  p as S,
  C as $,
  S as T
} from './index-7fd204f3.js'
import {
  n as B,
  D as j,
  t as R,
  i as H,
  j as D,
  v as M,
  x as O,
  m as P,
  G as X,
  r as N,
  c as Z,
  B as F,
  H as A,
  I as E,
  y as W,
  C as L,
  E as G,
  A as V,
  F as q
} from './DemoPage.0bae30a9.js'
import { u as J } from './useParent.5b9c05b5.js'
import { u as K } from './use-id.c1b053ed.js'
import { _ as Q } from './z-sticky.e6c39ae3.js'
import { u as U } from './useChildren.fb2421ae.js'
import { u as Y } from './use-touch.1ac9fd53.js'
const ee = w(
    e({
      name: 'ZTab',
      options: { virtualHost: !0 },
      props: {
        dot: Boolean,
        name: B,
        badge: B,
        title: String,
        disabled: Boolean,
        titleClass: j,
        titleStyle: [String, Object],
        showZeroBadge: R,
        slotContent: null
      },
      setup(e) {
        const w = e,
          [k, x] = H('tab')
        D(k)
        const _ = K(),
          z = t(!1),
          C = g(),
          { parent: I, index: S } = J('z-tabs'),
          $ = () => (w.name ? w.name : S.value),
          T = () => {
            ;(z.value = !0),
              I.props.lazyRender &&
                o(() => {
                  I.onRendered($(), w.title)
                })
          },
          B = t(!1),
          { animated: j, swipeable: R, scrollspy: P } = I.props,
          X = t(P || B.value),
          N = t(!B.value)
        a(
          () => [I.currentName.value],
          () => {
            const e = $() === I.currentName.value
            e && !z.value && T(), (B.value = e)
          },
          { immediate: !0 }
        ),
          a(
            () => [P, B.value],
            () => {
              ;(X.value = P || B.value),
                B.value ? (N.value = !1) : (N.value = !0)
            },
            { immediate: !0 }
          )
        const Z = l({ offset: 0, inited: !1, mounted: !1 }),
          F = s(() => {
            const e = {}
            return (
              I &&
                (I.size.value && (e.width = `${I.size.value}px`),
                Z.offset && (e.transform = `translateX(${Z.offset}px)`)),
              { ...e }
            )
          }),
          A = t(0)
        return (
          i(() => {
            o(() => {
              ;(Z.mounted = !0),
                O(C, '.z-tab__panel').then((e) => {
                  A.value = e.height
                })
            })
          }),
          n('z-tab', B),
          M({
            id: _,
            active: B,
            bem: x,
            init: T,
            setOffset: (e) => {
              Z.offset = e
            },
            heightRect: A
          }),
          (e, t) => {
            const a = y
            return r(j) || r(R)
              ? (c(),
                d(
                  a,
                  {
                    key: 0,
                    class: h([
                      'swipe-item',
                      r(x)('panel-wrapper', { inactive: N.value })
                    ]),
                    style: f([r(F)])
                  },
                  {
                    default: u(() => [
                      v(
                        a,
                        { class: h(r(x)('panel')) },
                        {
                          default: u(() => [
                            p(e.$slots, 'default', {}, void 0, !0)
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
                ))
              : b(
                  (c(),
                  d(
                    a,
                    {
                      key: 1,
                      id: r(_),
                      class: h(r(x)('panel')),
                      tabindex: X.value ? 0 : -1
                    },
                    {
                      default: u(() => [
                        p(e.$slots, 'default', {}, void 0, !0)
                      ]),
                      _: 3
                    },
                    8,
                    ['id', 'class', 'tabindex']
                  )),
                  [[m, X.value]]
                )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-16e4ed5b']]
  ),
  te = w(
    e({
      name: 'ZTabs',
      options: { virtualHost: !0 },
      props: {
        type: { type: String, default: 'line' },
        color: String,
        border: Boolean,
        sticky: Boolean,
        shrink: Boolean,
        active: P(0),
        duration: P(0.3),
        animated: Boolean,
        ellipsis: R,
        swipeable: Boolean,
        scrollspy: Boolean,
        offsetTop: P(0),
        background: String,
        lazyRender: R,
        showHeader: R,
        lineWidth: B,
        lineHeight: B,
        beforeChange: Function,
        swipeThreshold: P(5),
        titleActiveColor: String,
        titleInactiveColor: String,
        customNavbar: Boolean,
        customStyle: Object,
        titleStyle: Object
      },
      emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],
      setup(e, { expose: n, emit: b }) {
        const m = e
        const w = g(),
          [B, j] = H('tabs'),
          R = t(0),
          P = K(),
          J = (e, t) => K(e) + t,
          [ee, te] = X(),
          { children: ae, linkChildren: le } = U(B),
          se = l({ inited: !1, position: '', lineStyle: {}, currentIndex: -1 }),
          ie = s(
            () => ae.length > +m.swipeThreshold || !m.ellipsis || m.shrink
          ),
          oe = s(() => ({ borderColor: m.color, background: m.background })),
          ne = (e) => {
            const t = {},
              { type: a, color: l } = m,
              { disabled: s } = e,
              i = e.active,
              o = m.titleActiveColor,
              n = m.titleInactiveColor
            l &&
              'card' === a &&
              ((t.borderColor = l),
              s || (i ? (t.backgroundColor = l) : (t.color = l)))
            const r = i ? o : n
            return (
              r && (t.color = r), { ...t, ...m.titleStyle, ...e.titleStyle }
            )
          },
          re = (e, t) => (e.name ? e.name : t),
          ce = s(() => {
            const e = ae[se.currentIndex]
            if (e) return re(e, se.currentIndex)
          }),
          de = s(() => m.offsetTop),
          ue = (e) => {
            ie.value &&
              Promise.all([O(w, '.z-tabs__nav'), E(w, '.z-tab')]).then(
                ([e, t]) => {
                  const a = t[se.currentIndex],
                    l = t
                      .slice(0, se.currentIndex)
                      .reduce((e, t) => e + t.width, 0)
                  R.value = l - (e.width - a.width) / 2
                }
              )
          },
          ve = () => {
            const e = se.inited
            o(() => {
              'line' == m.type &&
                Promise.all([E(w, '.z-tab')]).then(([t]) => {
                  const a = t[se.currentIndex]
                  let l = t
                    .slice(0, se.currentIndex)
                    .reduce((e, t) => e + t.width, 0)
                  l += a.width / 2 + (m.ellipsis ? 0 : 8)
                  const { lineWidth: s, lineHeight: i } = m,
                    o = {
                      width: W(s),
                      backgroundColor: m.color,
                      transform: `translateX(${l}px) translateX(-50%)`
                    }
                  if ((e && (o.transitionDuration = `${m.duration}s`), A(i))) {
                    const e = W(i)
                    ;(o.height = e), (o.borderRadius = e)
                  }
                  se.lineStyle = o
                })
            })
          },
          he = (e, t) => {
            const a = ((e) => {
              const t = e < se.currentIndex ? -1 : 1
              for (; e >= 0 && e < ae.length; ) {
                if (!ae[e].disabled) return e
                e += t
              }
            })(e)
            if (!A(a)) return
            const l = ae[a],
              s = re(l, a),
              i = null !== se.currentIndex
            se.currentIndex !== a && ((se.currentIndex = a), t || ue(), ve()),
              s !== m.active &&
                (b('update:active', s), i && b('change', s, l.title))
          },
          pe = (e, t) => {
            const a = ae.find((t, a) => re(t, a) === e),
              l = a ? ae.indexOf(a) : 0
            he(l, t)
          },
          fe = t(0),
          be = (e = !1) => {
            if (m.scrollspy) {
              const e = ((e, t) => {
                let a = 0
                for (let l = 0; l <= e; l++) a += t[l].heightRect.value
                return a - t[e].heightRect.value
              })(se.currentIndex, ae)
              fe.value = e
            }
          },
          me = (e, t, a) => {
            const { title: l, disabled: s } = ae[t],
              i = re(ae[t], t)
            s ||
              L(m.beforeChange, {
                args: [i],
                done: () => {
                  he(t), be()
                }
              }),
              b('clickTab', { name: i, title: l, event: a, disabled: s })
          },
          ye = (e) => {
            b('scroll', e)
          },
          ge = (e) => {
            if (m.scrollspy) {
              const t = ((e, t) => {
                let a = 0
                for (let l = 0; l < t.length; l++)
                  if (((a += t[l].heightRect.value), e < a - 1)) return l
                return t.length
              })(e.detail.scrollTop, ae)
              he(t)
            }
          },
          we = () => {
            ve(),
              o(() => {
                ue()
              })
          }
        a(() => [m.color, m.duration, m.lineWidth, m.lineHeight], ve),
          a(
            () => m.active,
            (e) => {
              e !== ce.value && pe(e)
            }
          ),
          a(
            () => ae.length,
            () => {
              se.inited &&
                (pe(m.active),
                ve(),
                o(() => {
                  ue()
                }))
            }
          )
        const [ke, xe] = H('swipe')
        D(ke)
        const _e = l({
            rect: null,
            width: 0,
            height: 0,
            offset: 0,
            active: 0,
            swiping: !1
          }),
          ze = Y(),
          Ce = s(() => ae.length),
          Ie = s(() => _e.width),
          Se = s(() => ze.deltaX.value),
          $e = s(() => {
            if (_e.rect) {
              return _e.rect.width - Ie.value * Ce.value
            }
            return 0
          }),
          Te = s(() =>
            Ie.value ? Math.ceil(Math.abs($e.value) / Ie.value) : Ce.value
          ),
          Be = s(() => Ce.value * Ie.value),
          je = s(() => (_e.active + Ce.value) % Ce.value),
          Re = s(() => 'horizontal' === ze.direction.value),
          He = s(() => {
            const e = {
              transitionDuration: (_e.swiping ? 0 : 1e3 * +m.duration) + 'ms',
              transform: `translateX(${+_e.offset.toFixed(2)}px)`
            }
            if (Ie.value) {
              const t = 'height'
              ;(e['width'] = `${Be.value}px`), (e[t] = m[t] ? `${m[t]}px` : '')
            }
            return e
          }),
          De = (e, t = 0) => {
            let a = e * Ie.value
            a = Math.min(a, -$e.value)
            let l = t - a
            return (l = q(l, $e.value, 0)), l
          },
          Me = ({ pace: e = 0, offset: t = 0, emitChange: a }) => {
            if (Ce.value <= 1) return
            const { active: l } = _e,
              s = ((e) => {
                const { active: t } = _e
                return e ? q(t + e, 0, Te.value) : t
              })(e),
              i = De(s, t)
            ;(_e.active = s), (_e.offset = i), a && s !== l && he(je.value)
          },
          Oe = () => {
            ;(_e.swiping = !0),
              _e.active <= -1
                ? Me({ pace: Ce.value })
                : _e.active >= Ce.value && Me({ pace: -Ce.value })
          },
          Pe = () => {
            Oe(),
              ze.reset(),
              G(() => {
                ;(_e.swiping = !1), Me({ pace: -1, emitChange: !0 })
              })
          },
          Xe = () => {
            Oe(),
              ze.reset(),
              G(() => {
                ;(_e.swiping = !1), Me({ pace: 1, emitChange: !0 })
              })
          },
          Ne = (e = 0) => {
            V(() => {
              O(w, '.z-swipe-rect').then((t) => {
                const a = t
                ;(() => {
                  const t = { width: a.width, height: a.height }
                  ;(_e.rect = t),
                    (_e.width = +t.width),
                    (_e.height = +t.height),
                    Ce.value &&
                      -1 === (e = Math.min(Ce.value - 1, e)) &&
                      (e = Ce.value - 1),
                    (_e.active = e),
                    (_e.swiping = !0),
                    (_e.offset = De(e)),
                    ae.forEach((e) => {
                      e.setOffset(0)
                    })
                })()
              })
            })
          }
        let Ze
        const Fe = (e) => {
            !m.swipeable ||
              e.touches.length > 1 ||
              (ze.start(e), (Ze = Date.now()), Oe())
          },
          Ae = (e) => {
            if (m.swipeable && _e.swiping && (ze.move(e), Re.value)) {
              ;(0 === _e.active && Se.value > 0) ||
                (_e.active === Ce.value - 1 && Se.value < 0) ||
                Me({ offset: Se.value })
            }
          },
          Ee = () => {
            if (!m.swipeable || !_e.swiping) return
            const e = Date.now() - Ze,
              t = Se.value / e
            if (
              (Math.abs(t) > 0.25 || Math.abs(Se.value) > Ie.value / 2) &&
              Re.value
            ) {
              ze.offsetX.value
              let e = 0
              ;(e = -Math[Se.value > 0 ? 'ceil' : 'floor'](
                Se.value / Ie.value
              )),
                Me({ pace: e, emitChange: !0 })
            } else Se.value && Me({ pace: 0 })
            _e.swiping = !1
          },
          We = (e, t = {}) => {
            Oe(),
              ze.reset(),
              G(() => {
                let a
                ;(a = e % Ce.value),
                  t.immediate
                    ? G(() => {
                        _e.swiping = !1
                      })
                    : (_e.swiping = !1),
                  Me({ pace: a - _e.active, emitChange: !0 })
              })
          }
        M({
          resize: we,
          scrollTo: (e) => {
            o(() => {
              pe(e), be(!0)
            })
          },
          prev: Pe,
          next: Xe,
          state: se,
          swipeTo: We
        }),
          le({
            id: P,
            props: m,
            setLine: ve,
            scrollable: ie,
            onRendered: (e, t) => b('rendered', e, t),
            currentName: ce,
            setTitleRefs: te,
            scrollIntoView: ue,
            size: Ie,
            count: Ce,
            activeIndicator: je
          }),
          n({ prev: Pe, next: Xe, state: se, resize: we, swipeTo: We }),
          a(Ce, () => {
            ;(m.animated || m.swipeable) && Ne(_e.active)
          })
        const Le = (e) => {
          _e.active !== e && We(e, { immediate: !se.inited })
        }
        return (
          a(() => se.currentIndex, Le),
          i(() => {
            pe(m.active, !0),
              o(() => {
                ;(se.inited = !0),
                  O(w, '.z-tabs__wrap-rect').then((e) => {
                    ue()
                  })
              }),
              (m.animated || m.swipeable) && Ne(),
              Le(se.currentIndex)
          }),
          (t, a) => {
            const l = $,
              s = N(k('z-badge'), Z),
              i = y,
              o = T,
              n = N(k('z-sticky'), Q)
            return (
              c(),
              d(
                i,
                {
                  class: h(['z-tabs-rect', [r(j)([m.type])]]),
                  style: f(e.customStyle)
                },
                {
                  default: u(() => [
                    m.showHeader
                      ? (c(),
                        x(
                          _,
                          { key: 0 },
                          [
                            m.sticky
                              ? (c(),
                                d(
                                  n,
                                  {
                                    key: 0,
                                    container: r(undefined),
                                    'offset-top': r(de),
                                    'custom-navbar': e.customNavbar,
                                    onScroll: ye
                                  },
                                  {
                                    default: u(() => [
                                      v(
                                        i,
                                        {
                                          class: h([
                                            'z-tabs__wrap-rect',
                                            [
                                              r(j)('wrap'),
                                              {
                                                [r(F)]:
                                                  'line' === e.type && e.border
                                              }
                                            ]
                                          ])
                                        },
                                        {
                                          default: u(() => [
                                            v(
                                              o,
                                              {
                                                class: h(r(j)('scrollview')),
                                                'scroll-x': r(ie),
                                                'scroll-with-animation': !0,
                                                'scroll-left': R.value
                                              },
                                              {
                                                default: u(() => [
                                                  p(
                                                    t.$slots,
                                                    'nav-left',
                                                    {},
                                                    void 0,
                                                    !0
                                                  ),
                                                  v(
                                                    i,
                                                    {
                                                      class: h(
                                                        r(j)('nav', [
                                                          e.type,
                                                          {
                                                            shrink: m.shrink,
                                                            complete: r(ie)
                                                          }
                                                        ])
                                                      ),
                                                      style: f([
                                                        r(oe),
                                                        e.color
                                                          ? 'border-color: ' +
                                                            e.color
                                                          : ''
                                                      ])
                                                    },
                                                    {
                                                      default: u(() => [
                                                        (c(!0),
                                                        x(
                                                          _,
                                                          null,
                                                          z(
                                                            r(ae),
                                                            (e, a) => (
                                                              c(),
                                                              d(
                                                                i,
                                                                {
                                                                  key: a,
                                                                  id: J(
                                                                    'z-tab',
                                                                    a
                                                                  ),
                                                                  class: h([
                                                                    e.bem([
                                                                      m.type,
                                                                      {
                                                                        grow:
                                                                          r(
                                                                            ie
                                                                          ) &&
                                                                          !m.shrink,
                                                                        shrink:
                                                                          m.shrink,
                                                                        active:
                                                                          e
                                                                            .active
                                                                            .value,
                                                                        disabled:
                                                                          e.disabled
                                                                      }
                                                                    ])
                                                                  ]),
                                                                  style: f(
                                                                    ne(e)
                                                                  ),
                                                                  tabindex:
                                                                    e.disabled
                                                                      ? void 0
                                                                      : e.active
                                                                            .value
                                                                        ? 0
                                                                        : -1,
                                                                  onClick: (
                                                                    e
                                                                  ) =>
                                                                    me(0, a, e)
                                                                },
                                                                {
                                                                  default: u(
                                                                    () => [
                                                                      e.dot ||
                                                                      (r(A)(
                                                                        e.badge
                                                                      ) &&
                                                                        '' !==
                                                                          e.badge)
                                                                        ? (c(),
                                                                          d(
                                                                            s,
                                                                            {
                                                                              key: 0,
                                                                              dot: e.dot,
                                                                              content:
                                                                                e.badge,
                                                                              'show-zero':
                                                                                e.showZeroBadge
                                                                            },
                                                                            {
                                                                              default:
                                                                                u(
                                                                                  () => [
                                                                                    v(
                                                                                      l,
                                                                                      {
                                                                                        class:
                                                                                          h(
                                                                                            r(
                                                                                              j
                                                                                            )(
                                                                                              'text',
                                                                                              {
                                                                                                ellipsis:
                                                                                                  !e.scrollable
                                                                                              }
                                                                                            )
                                                                                          )
                                                                                      },
                                                                                      {
                                                                                        default:
                                                                                          u(
                                                                                            () => [
                                                                                              e.title
                                                                                                ? (c(),
                                                                                                  x(
                                                                                                    _,
                                                                                                    {
                                                                                                      key: 0
                                                                                                    },
                                                                                                    [
                                                                                                      C(
                                                                                                        I(
                                                                                                          e.title
                                                                                                        ),
                                                                                                        1
                                                                                                      )
                                                                                                    ],
                                                                                                    64
                                                                                                  ))
                                                                                                : p(
                                                                                                    t.$slots,
                                                                                                    'title',
                                                                                                    {
                                                                                                      key: 1
                                                                                                    },
                                                                                                    void 0,
                                                                                                    !0
                                                                                                  )
                                                                                            ]
                                                                                          ),
                                                                                        _: 2
                                                                                      },
                                                                                      1032,
                                                                                      [
                                                                                        'class'
                                                                                      ]
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                              _: 2
                                                                            },
                                                                            1032,
                                                                            [
                                                                              'dot',
                                                                              'content',
                                                                              'show-zero'
                                                                            ]
                                                                          ))
                                                                        : (c(),
                                                                          d(
                                                                            i,
                                                                            {
                                                                              key: 1,
                                                                              class:
                                                                                h(
                                                                                  e.bem(
                                                                                    'text',
                                                                                    {
                                                                                      ellipsis:
                                                                                        !e.scrollable
                                                                                    }
                                                                                  )
                                                                                )
                                                                            },
                                                                            {
                                                                              default:
                                                                                u(
                                                                                  () => [
                                                                                    e.title
                                                                                      ? (c(),
                                                                                        x(
                                                                                          _,
                                                                                          {
                                                                                            key: 0
                                                                                          },
                                                                                          [
                                                                                            C(
                                                                                              I(
                                                                                                e.title
                                                                                              ),
                                                                                              1
                                                                                            )
                                                                                          ],
                                                                                          64
                                                                                        ))
                                                                                      : p(
                                                                                          t.$slots,
                                                                                          'title',
                                                                                          {
                                                                                            key: 1
                                                                                          },
                                                                                          void 0,
                                                                                          !0
                                                                                        )
                                                                                  ]
                                                                                ),
                                                                              _: 2
                                                                            },
                                                                            1032,
                                                                            [
                                                                              'class'
                                                                            ]
                                                                          ))
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                [
                                                                  'id',
                                                                  'class',
                                                                  'style',
                                                                  'tabindex',
                                                                  'onClick'
                                                                ]
                                                              )
                                                            )
                                                          ),
                                                          128
                                                        )),
                                                        'line' === e.type &&
                                                        r(ae).length
                                                          ? (c(),
                                                            d(
                                                              i,
                                                              {
                                                                key: 0,
                                                                class: h(
                                                                  r(j)('line')
                                                                ),
                                                                style: f(
                                                                  se.lineStyle
                                                                )
                                                              },
                                                              null,
                                                              8,
                                                              ['class', 'style']
                                                            ))
                                                          : S('', !0)
                                                      ]),
                                                      _: 3
                                                    },
                                                    8,
                                                    ['class', 'style']
                                                  ),
                                                  p(
                                                    t.$slots,
                                                    'nav-right',
                                                    {},
                                                    void 0,
                                                    !0
                                                  )
                                                ]),
                                                _: 3
                                              },
                                              8,
                                              [
                                                'class',
                                                'scroll-x',
                                                'scroll-left'
                                              ]
                                            )
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
                                  ['container', 'offset-top', 'custom-navbar']
                                ))
                              : (c(),
                                d(
                                  i,
                                  {
                                    key: 1,
                                    class: h([
                                      'z-tabs__wrap-rect',
                                      [
                                        r(j)('wrap'),
                                        {
                                          [r(F)]: 'line' === e.type && e.border
                                        }
                                      ]
                                    ])
                                  },
                                  {
                                    default: u(() => [
                                      v(
                                        o,
                                        {
                                          class: h(r(j)('scrollview')),
                                          'scroll-x': r(ie),
                                          'scroll-with-animation': !0,
                                          'scroll-left': R.value
                                        },
                                        {
                                          default: u(() => [
                                            p(
                                              t.$slots,
                                              'nav-left',
                                              {},
                                              void 0,
                                              !0
                                            ),
                                            v(
                                              i,
                                              {
                                                class: h(
                                                  r(j)('nav', [
                                                    e.type,
                                                    {
                                                      shrink: m.shrink,
                                                      complete: r(ie)
                                                    }
                                                  ])
                                                ),
                                                style: f([
                                                  r(oe),
                                                  e.color
                                                    ? 'border-color: ' + e.color
                                                    : ''
                                                ])
                                              },
                                              {
                                                default: u(() => [
                                                  (c(!0),
                                                  x(
                                                    _,
                                                    null,
                                                    z(
                                                      r(ae),
                                                      (e, a) => (
                                                        c(),
                                                        d(
                                                          i,
                                                          {
                                                            key: a,
                                                            id: J('z-tab', a),
                                                            class: h([
                                                              e.bem([
                                                                m.type,
                                                                {
                                                                  grow:
                                                                    r(ie) &&
                                                                    !m.shrink,
                                                                  shrink:
                                                                    m.shrink,
                                                                  active:
                                                                    e.active
                                                                      .value,
                                                                  disabled:
                                                                    e.disabled
                                                                }
                                                              ])
                                                            ]),
                                                            style: f(ne(e)),
                                                            tabindex: e.disabled
                                                              ? void 0
                                                              : e.active.value
                                                                ? 0
                                                                : -1,
                                                            onClick: (e) =>
                                                              me(0, a, e)
                                                          },
                                                          {
                                                            default: u(() => [
                                                              e.dot ||
                                                              (r(A)(e.badge) &&
                                                                '' !== e.badge)
                                                                ? (c(),
                                                                  d(
                                                                    s,
                                                                    {
                                                                      key: 0,
                                                                      dot: e.dot,
                                                                      content:
                                                                        e.badge,
                                                                      'show-zero':
                                                                        e.showZeroBadge
                                                                    },
                                                                    {
                                                                      default:
                                                                        u(
                                                                          () => [
                                                                            v(
                                                                              l,
                                                                              {
                                                                                class:
                                                                                  h(
                                                                                    r(
                                                                                      j
                                                                                    )(
                                                                                      'text',
                                                                                      {
                                                                                        ellipsis:
                                                                                          !e.scrollable
                                                                                      }
                                                                                    )
                                                                                  )
                                                                              },
                                                                              {
                                                                                default:
                                                                                  u(
                                                                                    () => [
                                                                                      e.title
                                                                                        ? (c(),
                                                                                          x(
                                                                                            _,
                                                                                            {
                                                                                              key: 0
                                                                                            },
                                                                                            [
                                                                                              C(
                                                                                                I(
                                                                                                  e.title
                                                                                                ),
                                                                                                1
                                                                                              )
                                                                                            ],
                                                                                            64
                                                                                          ))
                                                                                        : p(
                                                                                            t.$slots,
                                                                                            'title',
                                                                                            {
                                                                                              key: 1
                                                                                            },
                                                                                            void 0,
                                                                                            !0
                                                                                          )
                                                                                    ]
                                                                                  ),
                                                                                _: 2
                                                                              },
                                                                              1032,
                                                                              [
                                                                                'class'
                                                                              ]
                                                                            )
                                                                          ]
                                                                        ),
                                                                      _: 2
                                                                    },
                                                                    1032,
                                                                    [
                                                                      'dot',
                                                                      'content',
                                                                      'show-zero'
                                                                    ]
                                                                  ))
                                                                : (c(),
                                                                  d(
                                                                    i,
                                                                    {
                                                                      key: 1,
                                                                      class: h(
                                                                        e.bem(
                                                                          'text',
                                                                          {
                                                                            ellipsis:
                                                                              !e.scrollable
                                                                          }
                                                                        )
                                                                      )
                                                                    },
                                                                    {
                                                                      default:
                                                                        u(
                                                                          () => [
                                                                            e.title
                                                                              ? (c(),
                                                                                x(
                                                                                  _,
                                                                                  {
                                                                                    key: 0
                                                                                  },
                                                                                  [
                                                                                    C(
                                                                                      I(
                                                                                        e.title
                                                                                      ),
                                                                                      1
                                                                                    )
                                                                                  ],
                                                                                  64
                                                                                ))
                                                                              : p(
                                                                                  t.$slots,
                                                                                  'title',
                                                                                  {
                                                                                    key: 1,
                                                                                    item: e,
                                                                                    index:
                                                                                      a
                                                                                  },
                                                                                  void 0,
                                                                                  !0
                                                                                )
                                                                          ]
                                                                        ),
                                                                      _: 2
                                                                    },
                                                                    1032,
                                                                    ['class']
                                                                  ))
                                                            ]),
                                                            _: 2
                                                          },
                                                          1032,
                                                          [
                                                            'id',
                                                            'class',
                                                            'style',
                                                            'tabindex',
                                                            'onClick'
                                                          ]
                                                        )
                                                      )
                                                    ),
                                                    128
                                                  )),
                                                  'line' === e.type &&
                                                  r(ae).length
                                                    ? (c(),
                                                      d(
                                                        i,
                                                        {
                                                          key: 0,
                                                          class: h(
                                                            r(j)('line')
                                                          ),
                                                          style: f(se.lineStyle)
                                                        },
                                                        null,
                                                        8,
                                                        ['class', 'style']
                                                      ))
                                                    : S('', !0)
                                                ]),
                                                _: 3
                                              },
                                              8,
                                              ['class', 'style']
                                            ),
                                            p(
                                              t.$slots,
                                              'nav-right',
                                              {},
                                              void 0,
                                              !0
                                            )
                                          ]),
                                          _: 3
                                        },
                                        8,
                                        ['class', 'scroll-x', 'scroll-left']
                                      )
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  ['class']
                                ))
                          ],
                          64
                        ))
                      : S('', !0),
                    v(
                      i,
                      {
                        class: h(
                          r(j)('content', {
                            animated: m.animated || m.swipeable
                          })
                        )
                      },
                      {
                        default: u(() => [
                          m.animated || m.swipeable
                            ? (c(),
                              d(
                                i,
                                {
                                  key: 0,
                                  class: h(['z-swipe-rect', [r(xe)()]])
                                },
                                {
                                  default: u(() => [
                                    v(
                                      i,
                                      {
                                        style: f(r(He)),
                                        class: h(r(j)('track')),
                                        onTouchstartPassive: Fe,
                                        onTouchmovePassive: Ae,
                                        onTouchend: Ee,
                                        onTouchcancel: Ee
                                      },
                                      {
                                        default: u(() => [
                                          p(t.$slots, 'default', {}, void 0, !0)
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
                                ['class']
                              ))
                            : m.scrollspy
                              ? (c(),
                                d(
                                  o,
                                  {
                                    key: 1,
                                    'scroll-y': '',
                                    style: { width: '100%', height: '100%' },
                                    'scroll-with-animation': '',
                                    'scroll-top': fe.value,
                                    onScroll: ge
                                  },
                                  {
                                    default: u(() => [
                                      p(t.$slots, 'default', {}, void 0, !0)
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  ['scroll-top']
                                ))
                              : p(t.$slots, 'default', { key: 2 }, void 0, !0)
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
        )
      }
    }),
    [['__scopeId', 'data-v-937fc430']]
  )
export { ee as _, te as a }
