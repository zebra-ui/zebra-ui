import {
  l as e,
  t as o,
  D as l,
  i as a,
  j as t,
  z as s,
  y as u,
  v as d,
  r as n,
  _ as i,
  e as p,
  n as r,
  m as c,
  s as m,
  H as v,
  L as f,
  x as h,
  a0 as V,
  b as w,
  a as y
} from './DemoPage.0bae30a9.js'
import {
  d as _,
  a6 as g,
  D as k,
  m as x,
  af as b,
  ag as z,
  o as C,
  c as U,
  w as P,
  a as O,
  E as j,
  e as W,
  F as I,
  r as D,
  p as $,
  x as B,
  y as H,
  n as L,
  i as S,
  _ as E,
  k as G,
  A as M,
  b as T,
  t as Z,
  L as A,
  G as F
} from './index-7fd204f3.js'
import { _ as R } from './z-cell.365e08ec.js'
import { u as q } from './useParent.5b9c05b5.js'
import { u as J } from './useChildren.fb2421ae.js'
import { u as K } from './use-id.c1b053ed.js'
import { _ as N } from './z-switch.e182d14d.js'
import './index.389bd7d1.js'
const Q = E(
    _({
      name: 'ZDropdownItem',
      options: { virtualHost: !0 },
      props: {
        title: String,
        options: e(),
        disabled: Boolean,
        lazyRender: o,
        modelValue: l,
        titleClass: l,
        inheritWidth: o,
        overlayBackGroud: Boolean
      },
      emits: [
        'open',
        'opened',
        'close',
        'closed',
        'change',
        'update:modelValue'
      ],
      setup(e, { expose: o, emit: l }) {
        const r = e,
          [c, m] = a('dropdown-item')
        t(c)
        const v = g({ showPopup: !1, transition: !0, showWrapper: !1 }),
          { parent: f } = q('z-dropdown-menu'),
          h = k(() => {
            const { zIndex: e, direction: o } = f.props,
              { offset: l } = f,
              a = s(e)
            let t = l.value
            return (
              'down' === o ? (a.top = `${t}px`) : (a.bottom = `${t}px`),
              r.inheritWidth &&
                ((a.width = u(f.itemWidth.value)),
                (a.left = u(f.itemLeft.value))),
              a
            )
          }),
          V = k(() => ({ display: 'block', 'line-height': 'inherit' })),
          w = (e) => {
            const o = { 'text-align': 'left' }
            return (
              e.value === r.modelValue &&
                ((o.color = 'var(--z-dropdown-menu-option-active-color)'),
                (V.value.color = 'var(--z-dropdown-menu-option-active-color)'),
                f.props.activeColor &&
                  ((o.color = f.props.activeColor),
                  (V.value.color = f.props.activeColor))),
              { ...o }
            )
          },
          y = (e) => () => l(e),
          _ = y('open'),
          E = y('close'),
          G = y('opened'),
          M = () => {
            ;(v.showWrapper = !1), l('closed')
          },
          T = (e) => {},
          Z = k(() => ({
            position: 'absolute',
            maxHeight: 'var(--z-dropdown-menu-content-max-height)'
          })),
          A = (e = !v.showPopup, o = {}) => {
            e !== v.showPopup &&
              ((v.showPopup = e),
              (v.transition = !o.immediate),
              e && (f.updateOffset(), (v.showWrapper = !0)))
          }
        return (
          d({ state: v, toggle: A, props: r }),
          o({ state: v, toggle: A, props: r }),
          (o, a) => {
            const t = n(x('z-icon'), i),
              s = n(x('z-cell'), R),
              u = n(x('z-popup'), p),
              d = S
            return b(
              (C(),
              U(
                d,
                {
                  style: H(j(h)),
                  class: L(j(m)([j(f).props.direction])),
                  onClick: T
                },
                {
                  default: P(() => [
                    O(
                      u,
                      {
                        show: v.showPopup,
                        'onUpdate:show':
                          a[0] || (a[0] = (e) => (v.showPopup = e)),
                        'custom-style': j(Z),
                        overlay: j(f).props.overlay,
                        'overlay-back-groud': e.overlayBackGroud,
                        position:
                          'down' === j(f).props.direction ? 'top' : 'bottom',
                        duration: v.transition ? j(f).props.duration : 0,
                        'overlay-style': { position: 'absolute' },
                        'close-on-click-overlay':
                          j(f).props.closeOnClickOverlay,
                        onOpen: j(_),
                        onClose: j(E),
                        onOpened: j(G),
                        onClosed: M
                      },
                      {
                        default: P(() => [
                          (C(!0),
                          W(
                            I,
                            null,
                            D(
                              r.options,
                              (e, o) => (
                                C(),
                                U(
                                  s,
                                  {
                                    key: o,
                                    icon: e.icon,
                                    title: e.text,
                                    'custom-style': w(e),
                                    clickable: '',
                                    onClick: (o) =>
                                      ((e) => {
                                        ;(v.showPopup = !1),
                                          e.value !== r.modelValue &&
                                            (l('update:modelValue', e.value),
                                            l('change', e.value))
                                      })(e)
                                  },
                                  {
                                    default: P(() => [
                                      e.value === r.modelValue
                                        ? (C(),
                                          U(
                                            t,
                                            {
                                              key: 0,
                                              'custom-style': j(V),
                                              size: 'var(--z-font-size-lg)',
                                              color: j(f).props.activeColor,
                                              name: 'check'
                                            },
                                            null,
                                            8,
                                            ['custom-style', 'color']
                                          ))
                                        : $('', !0)
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ['icon', 'title', 'custom-style', 'onClick']
                                )
                              )
                            ),
                            128
                          )),
                          B(o.$slots, 'default', {}, void 0, !0)
                        ]),
                        _: 3
                      },
                      8,
                      [
                        'show',
                        'custom-style',
                        'overlay',
                        'overlay-back-groud',
                        'position',
                        'duration',
                        'close-on-click-overlay',
                        'onOpen',
                        'onClose',
                        'onOpened'
                      ]
                    )
                  ]),
                  _: 3
                },
                8,
                ['style', 'class']
              )),
              [[z, v.showWrapper]]
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-6d3eebd9']]
  ),
  X = E(
    _({
      name: 'ZDropdownMenu',
      options: { virtualHost: !0 },
      props: {
        overlay: o,
        zIndex: r,
        duration: c(0.2),
        direction: m('down'),
        activeColor: String,
        autoLocate: Boolean,
        closeOnClickOutside: o,
        closeOnClickOverlay: o,
        swipeThreshold: r
      },
      setup(e, { expose: o }) {
        const l = e,
          [t, s] = a('dropdown-menu'),
          u = K(),
          n = G(0),
          i = A(),
          { children: p, linkChildren: r } = J(t),
          c = k(() => p.some((e) => e.state.showWrapper)),
          m = k(() => l.swipeThreshold && p.length > +l.swipeThreshold),
          V = k(() => {
            if (c.value && v(l.zIndex)) return { zIndex: +l.zIndex + 1 }
          }),
          w = () => {
            p.forEach((e) => {
              e.toggle(!1)
            })
          },
          y = k(() => M().windowHeight),
          _ = G(0),
          g = G(0),
          x = () => {
            h(i, '.z-dropdown-menu-rect').then((e) => {
              const o = e
              ;(_.value = null == e ? void 0 : e.width),
                (g.value = null == e ? void 0 : e.left),
                'down' === l.direction
                  ? (n.value = o.bottom)
                  : (n.value = y.value - o.top)
            })
          },
          b = () => {
            c.value && x()
          },
          z = (e) => {
            const o = e.props.options.find(
              (o) => o.value === e.props.modelValue
            )
            return o ? o.text : ''
          }
        return (
          d({ close: w, onScroll: b }),
          o({ close: w, onScroll: b }),
          r({
            id: u,
            props: l,
            offset: n,
            updateOffset: x,
            itemWidth: _,
            itemLeft: g
          }),
          (e, o) => {
            const a = S
            return (
              C(),
              U(
                a,
                { class: L(j(s)()) },
                {
                  default: P(() => [
                    O(
                      a,
                      {
                        class: L([
                          'z-dropdown-menu-rect',
                          j(s)('bar', { opened: j(c).value, scrollable: j(m) })
                        ]),
                        style: H(j(V))
                      },
                      {
                        default: P(() => [
                          (C(!0),
                          W(
                            I,
                            null,
                            D(
                              j(p),
                              (o, t) => (
                                C(),
                                U(
                                  a,
                                  {
                                    key: t,
                                    id: `${j(u)}-${t}`,
                                    class: L([
                                      j(s)('item', {
                                        disabled: o.disabled,
                                        grow: j(m)
                                      }),
                                      { [j(f)]: !o.disabled }
                                    ]),
                                    onClick: () => {
                                      var e
                                      o.disabled ||
                                        ((e = t),
                                        p.forEach((o, l) => {
                                          l === e
                                            ? o.toggle()
                                            : o.state.showPopup &&
                                              o.toggle(!1, { immediate: !0 })
                                        }))
                                    }
                                  },
                                  {
                                    default: P(() => [
                                      O(
                                        a,
                                        {
                                          class: L([
                                            j(s)('title', {
                                              down:
                                                o.state.showPopup ===
                                                ('down' === l.direction),
                                              active: o.state.showPopup
                                            }),
                                            o.titleClass
                                          ]),
                                          style: H({
                                            color: o.state.showPopup
                                              ? l.activeColor
                                              : ''
                                          })
                                        },
                                        {
                                          default: P(() => [
                                            O(
                                              a,
                                              { class: 'z-ellipsis' },
                                              {
                                                default: P(() => [
                                                  j(i).slots.title
                                                    ? B(
                                                        e.$slots,
                                                        'title',
                                                        { key: 0, item: o },
                                                        void 0,
                                                        !0
                                                      )
                                                    : o.props.title
                                                      ? (C(),
                                                        W(
                                                          I,
                                                          { key: 1 },
                                                          [
                                                            T(
                                                              Z(o.props.title),
                                                              1
                                                            )
                                                          ],
                                                          64
                                                        ))
                                                      : (C(),
                                                        W(
                                                          I,
                                                          { key: 2 },
                                                          [T(Z(z(o)), 1)],
                                                          64
                                                        ))
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['class', 'style']
                                      )
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ['id', 'class', 'onClick']
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        _: 3
                      },
                      8,
                      ['style', 'class']
                    ),
                    B(e.$slots, 'default', {}, void 0, !0)
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
    [['__scopeId', 'data-v-8e449b1a']]
  ),
  Y = _({
    __name: 'dropdownMenu',
    setup(e) {
      const o = G(0),
        l = G('a'),
        a = [
          { text: '全部商品', value: 0 },
          { text: '新款商品', value: 1 },
          { text: '活动商品', value: 2 }
        ],
        t = [
          { text: '默认排序', value: 'a' },
          { text: '好评排序', value: 'b' },
          { text: '销量排序', value: 'c' }
        ],
        s = G(),
        u = G(!0),
        d = G(!1),
        i = () => {
          var e
          null == (e = s.value) || e.toggle()
        },
        p = G()
      return (
        V(() => {
          p.value.onScroll()
        }),
        (e, r) => {
          const c = n(x('z-dropdown-item'), Q),
            m = n(x('z-dropdown-menu'), X),
            v = F('demo-block'),
            f = n(x('z-switch'), N),
            h = n(x('z-cell'), R),
            V = n(x('z-button'), w),
            _ = S,
            g = n(x('DemoPage'), y)
          return (
            C(),
            U(
              g,
              { title: 'DropdownMenu' },
              {
                default: P(() => [
                  O(
                    _,
                    { class: 'demo-dropdown-menu' },
                    {
                      default: P(() => [
                        O(
                          v,
                          { title: '基础用法' },
                          {
                            default: P(() => [
                              O(
                                m,
                                { ref_key: 'dropdown1', ref: p },
                                {
                                  default: P(() => [
                                    O(
                                      c,
                                      {
                                        modelValue: o.value,
                                        'onUpdate:modelValue':
                                          r[0] || (r[0] = (e) => (o.value = e)),
                                        options: a
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    ),
                                    O(
                                      c,
                                      {
                                        modelValue: l.value,
                                        'onUpdate:modelValue':
                                          r[1] || (r[1] = (e) => (l.value = e)),
                                        options: t
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    )
                                  ]),
                                  _: 1
                                },
                                512
                              )
                            ]),
                            _: 1
                          }
                        ),
                        O(
                          v,
                          { title: '自定义菜单内容' },
                          {
                            default: P(() => [
                              O(m, null, {
                                default: P(() => [
                                  O(
                                    c,
                                    {
                                      modelValue: o.value,
                                      'onUpdate:modelValue':
                                        r[2] || (r[2] = (e) => (o.value = e)),
                                      options: a
                                    },
                                    null,
                                    8,
                                    ['modelValue']
                                  ),
                                  O(
                                    c,
                                    { title: '筛选', ref_key: 'item', ref: s },
                                    {
                                      default: P(() => [
                                        O(
                                          h,
                                          { center: '', title: '选项一' },
                                          {
                                            'right-icon': P(() => [
                                              O(
                                                f,
                                                {
                                                  modelValue: u.value,
                                                  'onUpdate:modelValue':
                                                    r[3] ||
                                                    (r[3] = (e) =>
                                                      (u.value = e))
                                                },
                                                null,
                                                8,
                                                ['modelValue']
                                              )
                                            ]),
                                            _: 1
                                          }
                                        ),
                                        O(
                                          h,
                                          { center: '', title: '选项二' },
                                          {
                                            'right-icon': P(() => [
                                              O(
                                                f,
                                                {
                                                  modelValue: d.value,
                                                  'onUpdate:modelValue':
                                                    r[4] ||
                                                    (r[4] = (e) =>
                                                      (d.value = e))
                                                },
                                                null,
                                                8,
                                                ['modelValue']
                                              )
                                            ]),
                                            _: 1
                                          }
                                        ),
                                        O(
                                          _,
                                          { style: { padding: '10rpx 32rpx' } },
                                          {
                                            default: P(() => [
                                              O(
                                                V,
                                                {
                                                  type: 'primary',
                                                  block: '',
                                                  round: '',
                                                  style: { height: '80rpx' },
                                                  onClick: i
                                                },
                                                {
                                                  default: P(() => [
                                                    T(' 确认 ')
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
                                    },
                                    512
                                  )
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }
                        ),
                        O(
                          v,
                          { title: '自定义选中颜色' },
                          {
                            default: P(() => [
                              O(
                                m,
                                { 'active-color': '#ee0a24' },
                                {
                                  default: P(() => [
                                    O(
                                      c,
                                      {
                                        modelValue: o.value,
                                        'onUpdate:modelValue':
                                          r[5] || (r[5] = (e) => (o.value = e)),
                                        options: a
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    ),
                                    O(
                                      c,
                                      {
                                        modelValue: l.value,
                                        'onUpdate:modelValue':
                                          r[6] || (r[6] = (e) => (l.value = e)),
                                        options: t
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    )
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        O(
                          v,
                          { title: '横向滚动' },
                          {
                            default: P(() => [
                              O(
                                m,
                                { 'swipe-threshold': '4' },
                                {
                                  default: P(() => [
                                    O(
                                      c,
                                      {
                                        modelValue: o.value,
                                        'onUpdate:modelValue':
                                          r[7] || (r[7] = (e) => (o.value = e)),
                                        options: a
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    ),
                                    O(
                                      c,
                                      {
                                        modelValue: l.value,
                                        'onUpdate:modelValue':
                                          r[8] || (r[8] = (e) => (l.value = e)),
                                        options: t
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    ),
                                    O(
                                      c,
                                      {
                                        modelValue: l.value,
                                        'onUpdate:modelValue':
                                          r[9] || (r[9] = (e) => (l.value = e)),
                                        options: t
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    ),
                                    O(
                                      c,
                                      {
                                        modelValue: l.value,
                                        'onUpdate:modelValue':
                                          r[10] ||
                                          (r[10] = (e) => (l.value = e)),
                                        options: t
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    ),
                                    O(
                                      c,
                                      {
                                        modelValue: l.value,
                                        'onUpdate:modelValue':
                                          r[11] ||
                                          (r[11] = (e) => (l.value = e)),
                                        options: t
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    )
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        O(
                          v,
                          { title: '向上展开' },
                          {
                            default: P(() => [
                              O(
                                m,
                                { direction: 'up' },
                                {
                                  default: P(() => [
                                    O(
                                      c,
                                      {
                                        modelValue: o.value,
                                        'onUpdate:modelValue':
                                          r[12] ||
                                          (r[12] = (e) => (o.value = e)),
                                        options: a
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    ),
                                    O(
                                      c,
                                      {
                                        modelValue: l.value,
                                        'onUpdate:modelValue':
                                          r[13] ||
                                          (r[13] = (e) => (l.value = e)),
                                        options: t
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    )
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        O(
                          v,
                          { title: '禁用菜单' },
                          {
                            default: P(() => [
                              O(m, null, {
                                default: P(() => [
                                  O(
                                    c,
                                    {
                                      modelValue: o.value,
                                      'onUpdate:modelValue':
                                        r[14] || (r[14] = (e) => (o.value = e)),
                                      disabled: '',
                                      options: a
                                    },
                                    null,
                                    8,
                                    ['modelValue']
                                  ),
                                  O(
                                    c,
                                    {
                                      modelValue: l.value,
                                      'onUpdate:modelValue':
                                        r[15] || (r[15] = (e) => (l.value = e)),
                                      disabled: '',
                                      options: t
                                    },
                                    null,
                                    8,
                                    ['modelValue']
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
                ]),
                _: 1
              }
            )
          )
        }
      )
    }
  })
export { Y as default }
