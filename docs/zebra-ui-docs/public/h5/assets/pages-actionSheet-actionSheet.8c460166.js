import { _ as e } from './z-cell.365e08ec.js'
import {
  d as s,
  D as a,
  o,
  c as l,
  w as t,
  m as n,
  a as c,
  n as i,
  E as d,
  b as r,
  t as u,
  p,
  x as m,
  e as k,
  F as y,
  r as v,
  L as h,
  i as f,
  a2 as z,
  y as _,
  ae as b,
  C as w,
  _ as g,
  k as C,
  G as x
} from './index-7fd204f3.js'
import {
  k as S,
  a1 as j,
  t as I,
  l as A,
  s as O,
  i as U,
  j as P,
  r as T,
  L as $,
  _ as B,
  d as D,
  e as H,
  a as L
} from './DemoPage.0bae30a9.js'
import { _ as E } from './z-toast.a77377ba.js'
import { s as F } from './z-toast.44a3344c.js'
import './z-dialog.b209de9d.js'
const G = g(
    s({
      name: 'ZActionSheet',
      options: { virtualHost: !0 },
      props: S({}, j, {
        title: String,
        round: I,
        actions: A(),
        closeIcon: O('close'),
        closeable: I,
        cancelText: String,
        description: String,
        closeOnPopstate: I,
        closeOnClickAction: Boolean,
        safeAreaInsetBottom: I
      }),
      emits: ['select', 'cancel', 'update:show'],
      setup(e, { emit: s }) {
        const g = e,
          [C, x] = U('action-sheet')
        P(C)
        const S = h(),
          j = (e) => s('update:show', e),
          I = () => {
            j(!1), s('cancel')
          },
          A = a(() => ({
            position: 'absolute',
            top: '0',
            right: '0',
            zIndex: '1',
            padding: 'var(--z-action-sheet-close-icon-padding)'
          })),
          O = a(() => ({
            color: 'var(--z-action-sheet-close-icon-color)',
            fontSize: 'var(--z-action-sheet-close-icon-size)',
            lineHeight: 'inherit'
          }))
        return (e, a) => {
          const h = T(n('z-icon'), B),
            C = f,
            U = T(n('z-loading'), D),
            P = w,
            L = z,
            E = T(n('z-popup'), H)
          return (
            o(),
            l(
              E,
              {
                position: 'bottom',
                'onUpdate:show': j,
                show: g.show,
                'z-index': g.zIndex,
                overlay: g.overlay,
                duration: g.duration,
                'lock-scroll': g.lockScroll,
                'lazy-render': g.lazyRender,
                'before-close': g.beforeClose,
                'overlay-style': g.overlayStyle,
                'overlay-class': g.overlayClass,
                'close-on-click-overlay': g.closeOnClickOverlay,
                round: g.round,
                'close-on-popstate': g.closeOnPopstate,
                'safe-area-inset-bottom': g.safeAreaInsetBottom
              },
              {
                default: t(() => [
                  c(
                    C,
                    { class: i(d(x)()) },
                    {
                      default: t(() => [
                        g.title
                          ? (o(),
                            l(
                              C,
                              { key: 0, class: i(d(x)('header')) },
                              {
                                default: t(() => [
                                  r(u(g.title) + ' ', 1),
                                  g.closeable
                                    ? (o(),
                                      l(
                                        h,
                                        {
                                          key: 0,
                                          name: g.closeIcon,
                                          'badge-wrapper-style': d(A),
                                          'custom-style': d(O),
                                          'custom-class': [d($)],
                                          onClick: I
                                        },
                                        null,
                                        8,
                                        [
                                          'name',
                                          'badge-wrapper-style',
                                          'custom-style',
                                          'custom-class'
                                        ]
                                      ))
                                    : p('', !0)
                                ]),
                                _: 1
                              },
                              8,
                              ['class']
                            ))
                          : p('', !0),
                        g.description || d(S).slots.description
                          ? (o(),
                            l(
                              C,
                              { key: 1, class: i(d(x)('description')) },
                              {
                                default: t(() => [
                                  d(S).slots.description
                                    ? m(
                                        e.$slots,
                                        'description',
                                        { key: 0 },
                                        void 0,
                                        !0
                                      )
                                    : (o(),
                                      k(
                                        y,
                                        { key: 1 },
                                        [r(u(g.description), 1)],
                                        64
                                      ))
                                ]),
                                _: 3
                              },
                              8,
                              ['class']
                            ))
                          : p('', !0),
                        c(
                          C,
                          { class: i(d(x)('content')) },
                          {
                            default: t(() => [
                              (o(!0),
                              k(
                                y,
                                null,
                                v(
                                  g.actions,
                                  (a, n) => (
                                    o(),
                                    l(
                                      L,
                                      {
                                        key: n,
                                        type: 'button',
                                        style: _({ color: a.color }),
                                        class: i([
                                          d(x)('item', {
                                            loading: a.loading,
                                            disabled: a.disabled
                                          }),
                                          a.className
                                        ]),
                                        onClick: (e) =>
                                          ((e, a) => {
                                            const {
                                              loading: o,
                                              callback: l,
                                              disabled: t
                                            } = e
                                            t ||
                                              o ||
                                              (l && l(e),
                                              g.closeOnClickAction && j(!1),
                                              b(() => s('select', e, a)))
                                          })(a, n)
                                      },
                                      {
                                        default: t(() => [
                                          a.loading
                                            ? (o(),
                                              l(U, {
                                                key: 0,
                                                size: 'var(--z-action-sheet-loading-icon-size)'
                                              }))
                                            : d(S).slots.action
                                              ? m(
                                                  e.$slots,
                                                  'action',
                                                  {
                                                    key: 1,
                                                    action: a,
                                                    index: n
                                                  },
                                                  void 0,
                                                  !0
                                                )
                                              : (o(),
                                                k(
                                                  y,
                                                  { key: 2 },
                                                  [
                                                    c(
                                                      P,
                                                      {
                                                        class: i(d(x)('name'))
                                                      },
                                                      {
                                                        default: t(() => [
                                                          r(u(a.name), 1)
                                                        ]),
                                                        _: 2
                                                      },
                                                      1032,
                                                      ['class']
                                                    ),
                                                    a.subname
                                                      ? (o(),
                                                        l(
                                                          C,
                                                          {
                                                            key: 0,
                                                            class: i(
                                                              d(x)('subname')
                                                            )
                                                          },
                                                          {
                                                            default: t(() => [
                                                              r(u(a.subname), 1)
                                                            ]),
                                                            _: 2
                                                          },
                                                          1032,
                                                          ['class']
                                                        ))
                                                      : p('', !0)
                                                  ],
                                                  64
                                                ))
                                        ]),
                                        _: 2
                                      },
                                      1032,
                                      ['style', 'class', 'onClick']
                                    )
                                  )
                                ),
                                128
                              )),
                              m(e.$slots, 'default', {}, void 0, !0)
                            ]),
                            _: 3
                          },
                          8,
                          ['class']
                        ),
                        g.cancelText || d(S).slots.cancel
                          ? (o(),
                            k(
                              y,
                              { key: 2 },
                              [
                                c(C, { class: i(d(x)('gap')) }, null, 8, [
                                  'class'
                                ]),
                                c(
                                  L,
                                  {
                                    type: 'button',
                                    class: i(d(x)('cancel')),
                                    onClick: I
                                  },
                                  {
                                    default: t(() => [
                                      d(S).slots.cancel
                                        ? m(
                                            e.$slots,
                                            'cancel',
                                            { key: 0 },
                                            void 0,
                                            !0
                                          )
                                        : (o(),
                                          k(
                                            y,
                                            { key: 1 },
                                            [r(u(g.cancelText), 1)],
                                            64
                                          ))
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  ['class']
                                )
                              ],
                              64
                            ))
                          : p('', !0)
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
                'z-index',
                'overlay',
                'duration',
                'lock-scroll',
                'lazy-render',
                'before-close',
                'overlay-style',
                'overlay-class',
                'close-on-click-overlay',
                'round',
                'close-on-popstate',
                'safe-area-inset-bottom'
              ]
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-b7e97c40']]
  ),
  N = g(
    s({
      __name: 'actionSheet',
      setup(s) {
        const i = C(!1),
          u = C(!1),
          p = C(!1),
          m = C(!1),
          k = C(!1),
          y = a(() => [
            { name: '选项一' },
            { name: '选项二' },
            { name: '选项三' }
          ]),
          v = a(() => [
            { name: '选项一', color: '#ee0a24' },
            { name: '禁用选项', disabled: !0 },
            { loading: !0 }
          ]),
          h = a(() => [
            { name: '选项一' },
            { name: '选项二' },
            { name: '选项三', subname: '描述信息' }
          ]),
          z = (e) => {
            ;(i.value = !1), F(e.name)
          },
          _ = () => F('取消')
        return (s, a) => {
          const b = T(n('z-cell'), e),
            w = x('demo-block'),
            g = f,
            C = T(n('z-action-sheet'), G),
            S = T(n('z-toast'), E),
            j = T(n('DemoPage'), L)
          return (
            o(),
            l(
              j,
              { title: 'ActionSheet' },
              {
                default: t(() => [
                  c(
                    g,
                    { class: 'demo-action-sheet' },
                    {
                      default: t(() => [
                        c(
                          w,
                          { title: '基础用法' },
                          {
                            default: t(() => [
                              c(b, {
                                'is-link': '',
                                title: '基础用法',
                                onClick: a[0] || (a[0] = (e) => (i.value = !0))
                              }),
                              c(b, {
                                'is-link': '',
                                title: '展示取消按钮',
                                onClick: a[1] || (a[1] = (e) => (u.value = !0))
                              }),
                              c(b, {
                                'is-link': '',
                                title: '展示描述信息',
                                onClick: a[2] || (a[2] = (e) => (k.value = !0))
                              })
                            ]),
                            _: 1
                          }
                        ),
                        c(
                          w,
                          { title: '选项状态' },
                          {
                            default: t(() => [
                              c(b, {
                                'is-link': '',
                                title: '选项状态',
                                onClick: a[3] || (a[3] = (e) => (m.value = !0))
                              })
                            ]),
                            _: 1
                          }
                        ),
                        c(
                          w,
                          { title: '自定义面板' },
                          {
                            default: t(() => [
                              c(b, {
                                'is-link': '',
                                title: '自定义面板',
                                onClick: a[4] || (a[4] = (e) => (p.value = !0))
                              })
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    }
                  ),
                  c(
                    C,
                    {
                      show: i.value,
                      'onUpdate:show': a[5] || (a[5] = (e) => (i.value = e)),
                      actions: d(y),
                      onSelect: z
                    },
                    null,
                    8,
                    ['show', 'actions']
                  ),
                  c(
                    C,
                    {
                      show: u.value,
                      'onUpdate:show': a[6] || (a[6] = (e) => (u.value = e)),
                      actions: d(y),
                      'close-on-click-action': '',
                      'cancel-text': '取消',
                      onCancel: _
                    },
                    null,
                    8,
                    ['show', 'actions']
                  ),
                  c(
                    C,
                    {
                      show: k.value,
                      'onUpdate:show': a[7] || (a[7] = (e) => (k.value = e)),
                      actions: d(h),
                      'close-on-click-action': '',
                      'cancel-text': '取消',
                      description: '描述'
                    },
                    null,
                    8,
                    ['show', 'actions']
                  ),
                  c(
                    C,
                    {
                      show: m.value,
                      'onUpdate:show': a[8] || (a[8] = (e) => (m.value = e)),
                      'close-on-click-action': '',
                      actions: d(v),
                      'cancel-text': '取消'
                    },
                    null,
                    8,
                    ['show', 'actions']
                  ),
                  c(
                    C,
                    {
                      show: p.value,
                      'onUpdate:show': a[9] || (a[9] = (e) => (p.value = e)),
                      title: '标题'
                    },
                    {
                      default: t(() => [
                        c(
                          g,
                          { class: 'demo-action-sheet-content' },
                          { default: t(() => [r('内容')]), _: 1 }
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ['show']
                  ),
                  c(S, { ref: 'zToast' }, null, 512)
                ]),
                _: 1
              }
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-ea455819']]
  )
export { N as default }
