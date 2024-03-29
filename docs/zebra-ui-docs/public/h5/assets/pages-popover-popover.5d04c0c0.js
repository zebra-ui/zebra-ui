import {
  s as e,
  t,
  l as a,
  n as o,
  D as l,
  i as s,
  j as r,
  r as c,
  _ as i,
  e as n,
  a7 as u,
  a3 as p,
  A as v,
  E as m,
  x as d,
  a8 as h,
  y as f,
  b as y,
  a as w
} from './DemoPage.0bae30a9.js'
import {
  d as b,
  k as g,
  D as z,
  I as k,
  l as _,
  m as x,
  o as $,
  c as C,
  w as S,
  a as j,
  n as O,
  E as A,
  x as U,
  p as D,
  e as P,
  F as T,
  r as I,
  y as B,
  b as G,
  t as E,
  L as H,
  ae as R,
  A as q,
  i as F,
  _ as K,
  G as L,
  M
} from './index-7fd204f3.js'
import { u as N } from './use-sync-prop-ref.d5773770.js'
import { _ as V, a as Z } from './z-grid.6d744e86.js'
import { _ as J } from './z-picker.ce3c705f.js'
import { _ as Q } from './z-toast.a77377ba.js'
import { s as W } from './z-toast.44a3344c.js'
import './useParent.5b9c05b5.js'
import './useChildren.fb2421ae.js'
import './use-touch.1ac9fd53.js'
const X = K(
    b({
      name: 'ZPopover',
      options: { virtualHost: !0 },
      props: {
        show: Boolean,
        theme: e('light'),
        overlay: t,
        overlayBackGroud: Boolean,
        actions: a(),
        actionsDirection: e('vertical'),
        trigger: e('click'),
        duration: o,
        showArrow: t,
        placement: e('bottom'),
        iconPrefix: String,
        overlayClass: l,
        overlayStyle: Object,
        closeOnClickAction: t,
        closeOnClickOverlay: t,
        closeOnClickOutside: t,
        offset: { type: Array, default: () => [0, 8] },
        teleport: { type: [String, Object], default: 'body' },
        customStyle: Object
      },
      emits: ['select', 'touchstart', 'update:show'],
      setup(e, { emit: t }) {
        const a = e,
          [o, l] = s('popover')
        r(o)
        const y = H(),
          w = g(),
          b = N(
            () => a.show,
            (e) => t('update:show', e)
          )
        let K = g({})
        const L = () => {
            R(() => {
              v(() => {
                m(() => {
                  Promise.all([
                    d(y, '.z-popover-wrapper-rect'),
                    d(y, '.z-popover-content-rect'),
                    h()
                  ]).then(([e, t, o]) => {
                    if (e && t) {
                      const { windowHeight: o } = q(),
                        l = t.width,
                        s = e.width
                      let r = 0
                      r = l >= s ? e.left - (l - s) / 2 : e.left + (s - l) / 2
                      const c = t.height,
                        i = e.height
                      let n = 0
                      switch (
                        ((n =
                          c >= i ? e.top - (c - i) / 2 : e.top + (i - c) / 2),
                        a.placement)
                      ) {
                        case 'bottom':
                          ;(K.value.top = `calc(var(--z-popover-arrow-size) + ${f(e.height + e.top + 3)})`),
                            (K.value.left = `calc(${f(r)})`),
                            (K.value.bottom = 'auto'),
                            (K.value.right = 'auto')
                          break
                        case 'bottom-start':
                          ;(K.value.top = `calc(var(--z-popover-arrow-size) + ${f(e.height + e.top + 3)})`),
                            (K.value.left = `${f(e.left)}`),
                            (K.value.bottom = 'auto'),
                            (K.value.right = 'auto')
                          break
                        case 'bottom-end':
                          ;(K.value.top = `calc(var(--z-popover-arrow-size) + ${f(e.height + e.top + 3)})`),
                            (K.value.right = `${f(e.right - e.width)}`),
                            (K.value.bottom = 'auto'),
                            (K.value.left = 'auto')
                          break
                        case 'top':
                          ;(K.value.bottom = `calc(var(--z-popover-arrow-size) + ${f(o - e.top + 3)})`),
                            (K.value.left = `calc(${f(r)})`),
                            (K.value.top = 'auto'),
                            (K.value.right = 'auto')
                          break
                        case 'top-start':
                          ;(K.value.bottom = `calc(var(--z-popover-arrow-size) + ${f(o - e.top + 3)})`),
                            (K.value.left = `${f(e.left)}`),
                            (K.value.top = 'auto'),
                            (K.value.right = 'auto')
                          break
                        case 'top-end':
                          ;(K.value.bottom = `calc(var(--z-popover-arrow-size) + ${f(o - e.top + 3)})`),
                            (K.value.right = `${f(e.right - e.width)}`),
                            (K.value.top = 'auto'),
                            (K.value.left = 'auto')
                          break
                        case 'left':
                          ;(K.value.right = `calc(var(--z-popover-arrow-size) + ${f(e.right + 3)})`),
                            (K.value.top = `calc(${f(n)})`),
                            (K.value.left = 'auto'),
                            (K.value.bottom = 'auto')
                          break
                        case 'left-start':
                          ;(K.value.right = `calc(var(--z-popover-arrow-size) + ${f(e.right + 3)})`),
                            (K.value.top = `${f(e.top)}`),
                            (K.value.left = 'auto'),
                            (K.value.bottom = 'auto')
                          break
                        case 'left-end':
                          ;(K.value.right = `calc(var(--z-popover-arrow-size) + ${f(e.right + 3)})`),
                            (K.value.bottom = `${f(o - e.bottom)}`),
                            (K.value.left = 'auto'),
                            (K.value.top = 'auto')
                          break
                        case 'right':
                          ;(K.value.left = `calc(var(--z-popover-arrow-size) + ${f(e.left + e.width + 3)})`),
                            (K.value.top = `calc(${f(n)})`),
                            (K.value.right = 'auto'),
                            (K.value.bottom = 'auto')
                          break
                        case 'right-start':
                          ;(K.value.left = `calc(var(--z-popover-arrow-size) + ${f(e.left + e.width + 3)})`),
                            (K.value.top = `${f(e.top)}`),
                            (K.value.right = 'auto'),
                            (K.value.bottom = 'auto')
                          break
                        case 'right-end':
                          ;(K.value.left = `calc(var(--z-popover-arrow-size) + ${f(e.left + e.width + 3)})`),
                            (K.value.bottom = `${f(o - e.bottom)}`),
                            (K.value.right = 'auto'),
                            (K.value.top = 'auto')
                      }
                    }
                  })
                })
              })
            })
          },
          M = (e) => {
            b.value = e
          },
          V = () => {
            'click' === a.trigger && (b.value = !b.value)
          },
          Z = z(() => ({
            marginRight: 'var(--z-padding-xs)',
            fontSize: 'var(--z-popover-action-icon-size)'
          })),
          J = z(() => {
            const e = {
                position: 'fixed',
                overflow: 'visible',
                backgroundColor: 'transparent',
                transition: 'opacity 0.15s, transform 0.15s'
              },
              t = {
                top: '50% 100%',
                'top-start': '0 100%',
                'top-end': '100% 100%',
                left: '100% 50%',
                'left-start': '100% 0',
                'left-end': '100% 100%',
                right: '0 50%',
                'right-start': '0 0',
                'right-end': '0 100%',
                bottom: '50% 0',
                'bottom-start': '0 0',
                'bottom-end': '100% 0'
              }
            return (
              a.placement && (e['transform-origin'] = t[a.placement]),
              { ...e, ...K.value }
            )
          }),
          Q = z(() =>
            a.placement.includes('top') || a.placement.includes('bottom')
              ? 'popover-zoom-h'
              : 'popover-zoom-w'
          )
        return (
          k(() => {
            L()
          }),
          _(() => [b.value, a.offset, a.placement], L),
          (e, o) => {
            const s = F,
              r = c(x('z-icon'), i),
              v = c(x('z-popup'), n)
            return (
              $(),
              C(
                s,
                {
                  class: O(A(l)([a.theme])),
                  'data-popper-placement': a.placement,
                  style: B(a.customStyle)
                },
                {
                  default: S(() => [
                    j(
                      s,
                      {
                        class: O(['z-popover-wrapper-rect', A(l)('wrapper')]),
                        onClick: V
                      },
                      {
                        default: S(() => [
                          U(e.$slots, 'reference', {}, void 0, !0)
                        ]),
                        _: 3
                      },
                      8,
                      ['class']
                    ),
                    j(
                      v,
                      {
                        ref_key: 'popoverRef',
                        ref: w,
                        show: A(b),
                        position: '',
                        transition: A(Q),
                        'lock-scroll': !1,
                        'custom-style': A(J),
                        'onUpdate:show': M,
                        overlay: a.overlay,
                        duration: a.duration,
                        'overlay-style': a.overlayStyle,
                        'overlay-class': a.overlayClass,
                        'overlay-back-groud': a.overlayBackGroud,
                        'close-on-click-overlay': a.closeOnClickOverlay
                      },
                      {
                        default: S(() => [
                          a.showArrow
                            ? ($(),
                              C(
                                s,
                                { key: 0, class: O(A(l)('arrow')) },
                                null,
                                8,
                                ['class']
                              ))
                            : D('', !0),
                          j(
                            s,
                            {
                              class: O([
                                'z-popover-content-rect',
                                A(l)('content', a.actionsDirection)
                              ])
                            },
                            {
                              default: S(() => [
                                A(y).slots.default
                                  ? U(
                                      e.$slots,
                                      'default',
                                      { key: 0 },
                                      void 0,
                                      !0
                                    )
                                  : ($(!0),
                                    P(
                                      T,
                                      { key: 1 },
                                      I(
                                        a.actions,
                                        (o, c) => (
                                          $(),
                                          C(
                                            s,
                                            {
                                              key: c,
                                              class: O([
                                                A(l)('action', {
                                                  disabled: o.disabled,
                                                  'with-icon': o.icon
                                                }),
                                                {
                                                  [A(u)]:
                                                    'horizontal' ===
                                                    a.actionsDirection
                                                },
                                                o.className
                                              ]),
                                              style: B({ color: o.color }),
                                              onClick: () =>
                                                ((e, o) => {
                                                  e.disabled ||
                                                    (t('select', e, o),
                                                    a.closeOnClickAction &&
                                                      (b.value = !1))
                                                })(o, c)
                                            },
                                            {
                                              default: S(() => [
                                                A(y).slots.action
                                                  ? U(
                                                      e.$slots,
                                                      'action',
                                                      {
                                                        key: 0,
                                                        action: o,
                                                        index: c
                                                      },
                                                      void 0,
                                                      !0
                                                    )
                                                  : ($(),
                                                    P(
                                                      T,
                                                      { key: 1 },
                                                      [
                                                        o.icon
                                                          ? ($(),
                                                            C(
                                                              r,
                                                              {
                                                                key: 0,
                                                                name: o.icon,
                                                                'class-prefix':
                                                                  a.iconPrefix,
                                                                'custom-style':
                                                                  A(Z)
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                'name',
                                                                'class-prefix',
                                                                'custom-style'
                                                              ]
                                                            ))
                                                          : D('', !0),
                                                        j(
                                                          s,
                                                          {
                                                            class: O([
                                                              A(l)(
                                                                'action-text'
                                                              ),
                                                              {
                                                                [A(p)]:
                                                                  'vertical' ===
                                                                  a.actionsDirection
                                                              }
                                                            ])
                                                          },
                                                          {
                                                            default: S(() => [
                                                              G(E(o.text), 1)
                                                            ]),
                                                            _: 2
                                                          },
                                                          1032,
                                                          ['class']
                                                        )
                                                      ],
                                                      64
                                                    ))
                                              ]),
                                              _: 2
                                            },
                                            1032,
                                            ['class', 'style', 'onClick']
                                          )
                                        )
                                      ),
                                      128
                                    ))
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
                      [
                        'show',
                        'transition',
                        'custom-style',
                        'overlay',
                        'duration',
                        'overlay-style',
                        'overlay-class',
                        'overlay-back-groud',
                        'close-on-click-overlay'
                      ]
                    )
                  ]),
                  _: 3
                },
                8,
                ['class', 'data-popper-placement', 'style']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-c74b4080']]
  ),
  Y = K(
    b({
      __name: 'popover',
      setup(e) {
        const t = g([
            { text: '选项一' },
            { text: '选项二' },
            { text: '选项三' }
          ]),
          a = [{ text: '选项一' }, { text: '选项二' }],
          o = [
            { text: '选项一', icon: 'plus-circle' },
            { text: '选项二', icon: 'minus-circle' },
            { text: '选项三', icon: 'message' }
          ],
          l = [
            { text: '选项一', disabled: !0 },
            { text: '选项二', disabled: !0 },
            { text: '选项三' }
          ],
          s = [
            'top',
            'top-start',
            'top-end',
            'left',
            'left-start',
            'left-end',
            'right',
            'right-start',
            'right-end',
            'bottom',
            'bottom-start',
            'bottom-end'
          ].map((e) => ({ text: e, value: e })),
          r = g({
            horizontal: !1,
            vertical: !1,
            showIcon: !1,
            placement: !1,
            darkTheme: !1,
            lightTheme: !1,
            customContent: !1,
            disableAction: !1
          }),
          i = g('top'),
          n = (e) => {
            setTimeout(() => {
              ;(r.value.placement = !0), (i.value = e.selectedValues[0])
            })
          },
          u = (e) => W(e.text)
        return (e, p) => {
          const v = c(x('z-button'), y),
            m = c(x('z-popover'), X),
            d = L('demo-block'),
            h = c(x('z-grid-item'), V),
            f = c(x('z-grid'), Z),
            b = F,
            g = c(x('z-picker'), J),
            z = c(x('z-toast'), Q),
            k = c(x('DemoPage'), w)
          return (
            $(),
            C(
              k,
              { title: 'Popover' },
              {
                default: S(() => [
                  j(
                    b,
                    { class: 'demo-popover' },
                    {
                      default: S(() => [
                        j(
                          d,
                          { title: '基础用法' },
                          {
                            default: S(() => [
                              j(
                                m,
                                {
                                  show: r.value.lightTheme,
                                  'onUpdate:show':
                                    p[0] ||
                                    (p[0] = (e) => (r.value.lightTheme = e)),
                                  actions: t.value,
                                  placement: 'bottom-start',
                                  onSelect: u
                                },
                                {
                                  reference: S(() => [
                                    j(
                                      v,
                                      { type: 'primary' },
                                      {
                                        default: S(() => [G(' 浅色风格 ')]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['show', 'actions']
                              ),
                              j(
                                m,
                                {
                                  show: r.value.darkTheme,
                                  'onUpdate:show':
                                    p[1] ||
                                    (p[1] = (e) => (r.value.darkTheme = e)),
                                  'custom-style': { 'margin-left': '30rpx' },
                                  theme: 'dark',
                                  actions: t.value,
                                  onSelect: u
                                },
                                {
                                  reference: S(() => [
                                    j(
                                      v,
                                      { type: 'primary' },
                                      {
                                        default: S(() => [G(' 深色风格 ')]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['show', 'actions']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        j(
                          d,
                          { title: '排列方向' },
                          {
                            default: S(() => [
                              j(
                                m,
                                {
                                  show: r.value.horizontal,
                                  'onUpdate:show':
                                    p[2] ||
                                    (p[2] = (e) => (r.value.horizontal = e)),
                                  actions: t.value,
                                  'actions-direction': 'horizontal',
                                  placement: 'bottom-start',
                                  onSelect: u
                                },
                                {
                                  reference: S(() => [
                                    j(
                                      v,
                                      { type: 'primary' },
                                      {
                                        default: S(() => [G(' 水平排列 ')]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['show', 'actions']
                              ),
                              j(
                                m,
                                {
                                  show: r.value.vertical,
                                  'onUpdate:show':
                                    p[3] ||
                                    (p[3] = (e) => (r.value.vertical = e)),
                                  'custom-style': { 'margin-left': '30rpx' },
                                  actions: t.value,
                                  onSelect: u
                                },
                                {
                                  reference: S(() => [
                                    j(
                                      v,
                                      { type: 'primary' },
                                      {
                                        default: S(() => [G(' 垂直排列 ')]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['show', 'actions']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        j(
                          d,
                          { title: '选项配置' },
                          {
                            default: S(() => [
                              j(
                                m,
                                {
                                  show: r.value.showIcon,
                                  'onUpdate:show':
                                    p[4] ||
                                    (p[4] = (e) => (r.value.showIcon = e)),
                                  actions: o,
                                  placement: 'bottom-start',
                                  onSelect: u
                                },
                                {
                                  reference: S(() => [
                                    j(
                                      v,
                                      { type: 'primary' },
                                      {
                                        default: S(() => [G(' 展示图标 ')]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['show']
                              ),
                              j(
                                m,
                                {
                                  show: r.value.disableAction,
                                  'onUpdate:show':
                                    p[5] ||
                                    (p[5] = (e) => (r.value.disableAction = e)),
                                  'custom-style': { 'margin-left': '30rpx' },
                                  actions: l,
                                  onSelect: u
                                },
                                {
                                  reference: S(() => [
                                    j(
                                      v,
                                      { type: 'primary' },
                                      {
                                        default: S(() => [G(' 禁用选项 ')]),
                                        _: 1
                                      }
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
                        ),
                        j(
                          d,
                          { title: '自定义内容' },
                          {
                            default: S(() => [
                              j(
                                m,
                                {
                                  show: r.value.customContent,
                                  'onUpdate:show':
                                    p[7] ||
                                    (p[7] = (e) => (r.value.customContent = e)),
                                  placement: 'top-start',
                                  onSelect: u
                                },
                                {
                                  reference: S(() => [
                                    j(
                                      v,
                                      { type: 'primary' },
                                      {
                                        default: S(() => [G(' 自定义内容 ')]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  default: S(() => [
                                    j(
                                      f,
                                      {
                                        square: '',
                                        clickable: '',
                                        border: !1,
                                        'column-num': '3',
                                        'custom-style': { width: '480rpx' }
                                      },
                                      {
                                        default: S(() => [
                                          ($(),
                                          P(
                                            T,
                                            null,
                                            I(6, (e) =>
                                              j(h, {
                                                key: e,
                                                icon: 'image',
                                                text: '选项',
                                                onClick:
                                                  p[6] ||
                                                  (p[6] = (e) =>
                                                    (r.value.customContent =
                                                      !1))
                                              })
                                            ),
                                            64
                                          ))
                                        ]),
                                        _: 1
                                      }
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
                        ),
                        j(
                          d,
                          { title: '弹出位置' },
                          {
                            default: S(() => [
                              j(
                                b,
                                { class: 'demo-popover-box' },
                                {
                                  default: S(() => [
                                    j(
                                      m,
                                      {
                                        show: r.value.placement,
                                        'onUpdate:show':
                                          p[8] ||
                                          (p[8] = (e) =>
                                            (r.value.placement = e)),
                                        theme: 'dark',
                                        actions: a,
                                        placement: i.value,
                                        onSelect: u
                                      },
                                      {
                                        reference: S(() => [
                                          M('div', {
                                            class: 'demo-popover-refer'
                                          })
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['show', 'placement']
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              j(
                                g,
                                {
                                  columns: A(s),
                                  'show-toolbar': !1,
                                  onChange: n
                                },
                                null,
                                8,
                                ['columns']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        j(
                          d,
                          { title: '非受控模式' },
                          {
                            default: S(() => [
                              j(
                                m,
                                {
                                  actions: t.value,
                                  placement: 'top-start',
                                  onSelect: u
                                },
                                {
                                  reference: S(() => [
                                    j(
                                      v,
                                      { type: 'primary' },
                                      {
                                        default: S(() => [G(' 非受控模式 ')]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['actions']
                              )
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    }
                  ),
                  j(z, { ref: 'zToast' }, null, 512)
                ]),
                _: 1
              }
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-da43a69a']]
  )
export { Y as default }
