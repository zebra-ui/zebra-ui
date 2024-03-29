import {
  i as o,
  F as t,
  H as e,
  k as n,
  j as l,
  r as s,
  b as a,
  n as i,
  R as c,
  l as u,
  v as r,
  m,
  t as p,
  s as d,
  o as v,
  p as f,
  d as h,
  S as k
} from './DemoPage.0bae30a9.js'
import {
  d as b,
  D as y,
  m as g,
  o as x,
  c as S,
  w as T,
  x as w,
  e as z,
  F as $,
  E as B,
  b as _,
  t as O,
  p as I,
  n as H,
  i as C,
  _ as j,
  k as D,
  aa as N,
  a as P,
  y as V,
  r as M,
  l as E,
  K as F,
  z as Z,
  L as A,
  ae as K
} from './index-7fd204f3.js'
import { u as L } from './useParent.5b9c05b5.js'
import { u as R } from './use-touch.1ac9fd53.js'
import { u as Y } from './useChildren.fb2421ae.js'
const [q, G, J] = o('picker'),
  Q = (o) => o.find((o) => !o.disabled) || o[0]
function U(o, e) {
  for (let n = (e = t(e, 0, o.length)); n < o.length; n++)
    if (!o[n].disabled) return n
  for (let t = e - 1; t >= 0; t--) if (!o[t].disabled) return t
  return 0
}
const W = (o, t, e) => void 0 !== t && !!o.find((o) => o[e.value] === t)
function X(o, t, e) {
  const n = o.findIndex((o) => o[e.value] === t)
  return o[U(o, n)]
}
const oo = j(
    b({
      name: 'ZPickerToolbar',
      options: { virtualHost: !0 },
      props: {
        title: String,
        cancelButtonText: String,
        confirmButtonText: String,
        componentSlots: Object
      },
      emits: ['confirm', 'cancel'],
      setup(t, { emit: e }) {
        const n = t,
          [i] = o('picker-toolbar')
        l(i)
        const c = () => e('cancel'),
          u = () => e('confirm'),
          r = y(() => ({
            color: 'var(--z-picker-cancel-action-color)',
            padding: 'var(--z-picker-action-padding)',
            fontSize: 'var(--z-picker-action-font-size)'
          })),
          m = y(() => ({
            color: 'var(--z-picker-confirm-action-color)',
            padding: 'var(--z-picker-action-padding)',
            fontSize: 'var(--z-picker-action-font-size)'
          }))
        return (o, e) => {
          const l = s(g('z-button'), a),
            i = C
          return (
            x(),
            S(
              i,
              { class: H(B(G)('toolbar')) },
              {
                default: T(() => [
                  t.componentSlots && t.componentSlots.toolbar
                    ? w(o.$slots, 'toolbar', { key: 0 }, void 0, !0)
                    : (x(),
                      z(
                        $,
                        { key: 1 },
                        [
                          (t.componentSlots && t.componentSlots.cancel) ||
                          !n.cancelButtonText ||
                          n.cancelButtonText
                            ? (x(),
                              S(
                                l,
                                {
                                  key: 0,
                                  type: 'text',
                                  'custom-style': B(r),
                                  onClick: c
                                },
                                {
                                  default: T(() => [
                                    t.componentSlots && t.componentSlots.cancel
                                      ? w(
                                          o.$slots,
                                          'cancel',
                                          { key: 0 },
                                          void 0,
                                          !0
                                        )
                                      : (x(),
                                        z(
                                          $,
                                          { key: 1 },
                                          [
                                            _(
                                              O(
                                                n.cancelButtonText
                                                  ? n.cancelButtonText
                                                  : '取消'
                                              ),
                                              1
                                            )
                                          ],
                                          64
                                        ))
                                  ]),
                                  _: 3
                                },
                                8,
                                ['custom-style']
                              ))
                            : I('', !0),
                          t.componentSlots && t.componentSlots.title
                            ? w(o.$slots, 'title', { key: 1 }, void 0, !0)
                            : I('', !0),
                          n.title
                            ? (x(),
                              S(
                                i,
                                {
                                  key: 2,
                                  class: H([B(G)('title'), 'z-ellipsis'])
                                },
                                { default: T(() => [_(O(n.title), 1)]), _: 1 },
                                8,
                                ['class']
                              ))
                            : I('', !0),
                          (t.componentSlots && t.componentSlots.confirm) ||
                          !n.confirmButtonText ||
                          n.confirmButtonText
                            ? (x(),
                              S(
                                l,
                                {
                                  key: 3,
                                  type: 'text',
                                  'custom-style': B(m),
                                  onClick: u
                                },
                                {
                                  default: T(() => [
                                    t.componentSlots && t.componentSlots.confirm
                                      ? w(
                                          o.$slots,
                                          'confirm',
                                          { key: 0 },
                                          void 0,
                                          !0
                                        )
                                      : (x(),
                                        z(
                                          $,
                                          { key: 1 },
                                          [
                                            _(
                                              O(
                                                n.confirmButtonText
                                                  ? n.confirmButtonText
                                                  : '确认'
                                              ),
                                              1
                                            )
                                          ],
                                          64
                                        ))
                                  ]),
                                  _: 3
                                },
                                8,
                                ['custom-style']
                              ))
                            : I('', !0)
                        ],
                        64
                      ))
                ]),
                _: 3
              },
              8,
              ['class']
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-f65a7728']]
  ),
  to = j(
    b({
      name: 'ZPickerColumn',
      options: { virtualHost: !0 },
      props: {
        value: i,
        fields: c(Object),
        options: u(),
        readonly: Boolean,
        allowHtml: Boolean,
        optionHeight: c(Number),
        swipeDuration: c(i),
        visibleOptionNum: c(i),
        componentSlots: Object
      },
      emits: ['change', 'clickOption', 'scrollInto'],
      setup(e, { emit: n }) {
        const l = e,
          [s, a] = o('picker-column')
        let i, c, u, m, p
        const d = D(0),
          v = D(0),
          f = R(),
          h = () => l.options.length,
          k = (o) => {
            let t = U(l.options, o)
            const e = -t * l.optionHeight,
              s = () => {
                t > h() - 1 && (t = U(l.options, o))
                const e = l.options[t][l.fields.value]
                e !== l.value && n('change', e)
              }
            i && e !== d.value ? (p = s) : s(), (d.value = e)
          },
          b = () => l.readonly || !l.options.length,
          g = y(() => ({ height: `${l.optionHeight}px` })),
          I = (o) => t(Math.round(-o / l.optionHeight), 0, h() - 1),
          j = y(() => I(d.value)),
          E = () => {
            ;(i = !1), (v.value = 0), p && (p(), (p = null))
          },
          F = (o) => {
            b() ||
              (f.start(o),
              (v.value = 0),
              (c = d.value),
              (u = Date.now()),
              (m = c),
              (p = null))
          },
          Z = (o) => {
            if (b()) return
            f.move(o), f.isVertical() && (i = !0)
            const e = t(
                c + f.deltaY.value,
                -h() * l.optionHeight,
                l.optionHeight
              ),
              s = I(e)
            s !== j.value && n('scrollInto', l.options[s]), (d.value = e)
            const a = Date.now()
            a - u > 300 && ((u = a), (m = e))
          },
          A = () => {
            if (b()) return
            const o = d.value - m,
              t = Date.now() - u
            if (t < 300 && Math.abs(o) > 15)
              return void ((o, t) => {
                const e = Math.abs(o / t)
                o = d.value + (e / 0.003) * (o < 0 ? -1 : 1)
                const n = I(o)
                ;(v.value = +l.swipeDuration), k(n)
              })(o, t)
            const e = I(d.value)
            ;(v.value = 200),
              k(e),
              setTimeout(() => {
                i = !1
              }, 0)
          }
        return (
          L(s),
          r({ stopMomentum: E }),
          N(() => {
            const o = i
                ? Math.floor(-d.value / l.optionHeight)
                : l.options.findIndex((o) => o[l.fields.value] === l.value),
              t = U(l.options, o),
              e = -t * l.optionHeight
            i && t < o && E(), (d.value = e)
          }),
          (o, t) => {
            const e = C
            return (
              x(),
              S(
                e,
                {
                  class: H(B(a)()),
                  onTouchstartPassive: F,
                  onTouchmove: Z,
                  onTouchend: A,
                  onTouchcancel: A
                },
                {
                  default: T(() => [
                    P(
                      e,
                      {
                        style: V({
                          transform: `translate3d(0, ${d.value + (l.optionHeight * (+l.visibleOptionNum - 1)) / 2}px, 0)`,
                          transitionDuration: `${v.value}ms`,
                          transitionProperty: v.value ? 'all' : 'none'
                        }),
                        class: H(B(a)('wrapper')),
                        onTransitionend: E
                      },
                      {
                        default: T(() => [
                          (x(!0),
                          z(
                            $,
                            null,
                            M(
                              l.options,
                              (t, s) => (
                                x(),
                                S(
                                  e,
                                  {
                                    key: s,
                                    role: 'button',
                                    style: V(B(g)),
                                    tabindex: t.disabled ? -1 : 0,
                                    class: H([
                                      B(a)('item', {
                                        disabled: t.disabled,
                                        selected: t[l.fields.value] === l.value
                                      }),
                                      t.className
                                    ]),
                                    onClick: () =>
                                      ((o) => {
                                        i ||
                                          b() ||
                                          ((p = null),
                                          (v.value = 200),
                                          k(o),
                                          n('clickOption', l.options[o]))
                                      })(s)
                                  },
                                  {
                                    default: T(() => [
                                      l.componentSlots &&
                                      l.componentSlots.option
                                        ? w(
                                            o.$slots,
                                            'option',
                                            { key: 0 },
                                            void 0,
                                            !0
                                          )
                                        : (x(),
                                          S(
                                            e,
                                            { key: 1, class: 'z-ellipsis' },
                                            {
                                              default: T(() => [
                                                _(O(t[l.fields.text]), 1)
                                              ]),
                                              _: 2
                                            },
                                            1024
                                          ))
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ['style', 'tabindex', 'class', 'onClick']
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
    [['__scopeId', 'data-v-75235ec6']]
  ),
  eo = j(
    b({
      name: 'ZPicker',
      options: { virtualHost: !0 },
      props: {
        loading: Boolean,
        readonly: Boolean,
        allowHtml: Boolean,
        optionHeight: m(44),
        showToolbar: p,
        swipeDuration: m(1e3),
        visibleOptionNum: m(6),
        title: String,
        cancelButtonText: String,
        confirmButtonText: String,
        columns: u(),
        modelValue: u(),
        toolbarPosition: d('top'),
        columnsFieldNames: Object,
        componentSlots: Object
      },
      emits: [
        'confirm',
        'cancel',
        'change',
        'scrollInto',
        'clickOption',
        'update:modelValue'
      ],
      setup(o, { emit: t }) {
        const l = o,
          a = A(),
          i = D(l.modelValue.slice(0)),
          { parent: c } = L('z-picker-group'),
          { children: u, linkChildren: m } = Y('z-picker-column'),
          p = y(() => v(l.componentSlots)),
          d = (o) =>
            p.value
              ? !(!l.componentSlots || !l.componentSlots[o]) &&
                l.componentSlots[o]
              : a.slots[o]
        m()
        const b = y(() =>
            (function (o) {
              return n(
                { text: 'text', value: 'value', children: 'children' },
                o
              )
            })(l.columnsFieldNames)
          ),
          _ = y(() => Number(l.optionHeight)),
          O = y(() =>
            (function (o, t) {
              const e = o[0]
              if (e) {
                if (Array.isArray(e)) return 'multiple'
                if (t.children in e) return 'cascade'
              }
              return 'default'
            })(l.columns, b.value)
          ),
          j = y(() => ({
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--z-picker-loading-icon-color)',
            background: 'var(--z-picker-loading-mask-color)'
          })),
          N = y(() => {
            const { columns: o } = l
            switch (O.value) {
              case 'multiple':
                return o
              case 'cascade':
                return (function (o, t, n) {
                  const l = []
                  let s = { [t.children]: o },
                    a = 0
                  for (; s && s[t.children]; ) {
                    const o = s[t.children],
                      i = n.value[a]
                    ;(s = e(i) ? X(o, i, t) : void 0),
                      !s && o.length && (s = X(o, Q(o)[t.value], t)),
                      a++,
                      l.push(o)
                  }
                  return l
                })(o, b.value, i)
              default:
                return [o]
            }
          }),
          R = y(() => N.value.some((o) => o.length)),
          q = y(() => N.value.map((o, t) => X(o, i.value[t], b.value))),
          J = y(() =>
            N.value.map((o, t) =>
              o.findIndex((o) => o[b.value.value] === i.value[t])
            )
          ),
          U = y(() => _.value * +l.visibleOptionNum),
          eo = y(() => ({ height: `${U.value}px` })),
          no = y(() => ({ height: `${_.value}px` })),
          lo = y(() => ({
            backgroundSize: `100% ${(U.value - _.value) / 2}px`
          })),
          so = (o, t) => {
            if (i.value[o] !== t) {
              const e = i.value.slice(0)
              ;(e[o] = t), (i.value = e)
            }
          },
          ao = () => ({
            selectedValues: i.value.slice(0),
            selectedOptions: q.value,
            selectedIndexes: J.value
          }),
          io = () => {
            u.forEach((o) => o.stopMomentum())
            const o = ao()
            return (
              K(() => {
                t('confirm', o)
              }),
              o
            )
          },
          co = () => t('cancel', ao())
        let uo
        E(
          N,
          (o) => {
            o.forEach((o, t) => {
              o.length &&
                !W(o, i.value[t], b.value) &&
                so(t, Q(o)[b.value.value])
            })
          },
          { immediate: !0 }
        ),
          E(
            () => l.modelValue,
            (o) => {
              f(o, i.value) ||
                f(o, uo) ||
                ((i.value = o.slice(0)), (uo = o.slice(0)))
            },
            { deep: !0 }
          ),
          E(
            i,
            (o) => {
              f(o, l.modelValue) ||
                ((uo = o.slice(0)), t('update:modelValue', uo))
            },
            { immediate: !0 }
          )
        return (
          r({ confirm: io, getSelectedOptions: () => q.value }),
          (e, u) => {
            const r = s(g('z-loading'), h),
              m = C
            return (
              x(),
              S(
                m,
                { class: H(B(G)()) },
                {
                  default: T(() => [
                    'top' === l.toolbarPosition
                      ? (x(),
                        z(
                          $,
                          { key: 0 },
                          [
                            l.showToolbar && !B(c)
                              ? (x(),
                                S(
                                  oo,
                                  {
                                    key: 0,
                                    title: l.title,
                                    'cancel-button-text': l.cancelButtonText,
                                    'confirm-button-text': l.confirmButtonText,
                                    'component-slots': B(p)
                                      ? o.componentSlots
                                      : B(a).slots,
                                    onConfirm: io,
                                    onCancel: co
                                  },
                                  F({ _: 2 }, [
                                    d('cancel')
                                      ? {
                                          name: 'cancel',
                                          fn: T(() => [
                                            w(
                                              e.$slots,
                                              'cancel',
                                              {},
                                              void 0,
                                              !0
                                            )
                                          ]),
                                          key: '0'
                                        }
                                      : void 0,
                                    d('confirm')
                                      ? {
                                          name: 'confirm',
                                          fn: T(() => [
                                            w(
                                              e.$slots,
                                              'confirm',
                                              {},
                                              void 0,
                                              !0
                                            )
                                          ]),
                                          key: '1'
                                        }
                                      : void 0,
                                    d('title')
                                      ? {
                                          name: 'title',
                                          fn: T(() => [
                                            w(e.$slots, 'title', {}, void 0, !0)
                                          ]),
                                          key: '2'
                                        }
                                      : void 0,
                                    d('toolbar')
                                      ? {
                                          name: 'toolbar',
                                          fn: T(() => [
                                            w(
                                              e.$slots,
                                              'toolbar',
                                              {},
                                              void 0,
                                              !0
                                            )
                                          ]),
                                          key: '3'
                                        }
                                      : void 0
                                  ]),
                                  1032,
                                  [
                                    'title',
                                    'cancel-button-text',
                                    'confirm-button-text',
                                    'component-slots'
                                  ]
                                ))
                              : I('', !0)
                          ],
                          64
                        ))
                      : I('', !0),
                    l.loading
                      ? (x(),
                        S(r, { key: 1, 'wrapper-style': B(j) }, null, 8, [
                          'wrapper-style'
                        ]))
                      : I('', !0),
                    d('columns-top')
                      ? w(e.$slots, 'columns-top', { key: 2 }, void 0, !0)
                      : I('', !0),
                    P(
                      m,
                      {
                        class: H(B(G)('columns')),
                        style: V(B(eo)),
                        onTouchmove:
                          u[0] || (u[0] = Z(() => {}, ['stop', 'prevent']))
                      },
                      {
                        default: T(() => [
                          (x(!0),
                          z(
                            $,
                            null,
                            M(
                              B(N),
                              (s, c) => (
                                x(),
                                S(
                                  to,
                                  {
                                    key: c,
                                    value: i.value[c],
                                    fields: B(b),
                                    options: s,
                                    readonly: l.readonly,
                                    'allow-html': l.allowHtml,
                                    'option-height': B(_),
                                    'swipe-duration': l.swipeDuration,
                                    'visible-option-num': l.visibleOptionNum,
                                    'component-slots': B(p)
                                      ? o.componentSlots
                                      : B(a).slots,
                                    onChange: (o) =>
                                      ((o, e) => {
                                        so(e, o),
                                          'cascade' === O.value &&
                                            i.value.forEach((o, t) => {
                                              const e = N.value[t]
                                              W(e, o, b.value) ||
                                                so(
                                                  t,
                                                  e.length
                                                    ? e[0][b.value.value]
                                                    : void 0
                                                )
                                            }),
                                          K(() => {
                                            t(
                                              'change',
                                              n({ columnIndex: e }, ao())
                                            )
                                          })
                                      })(o, c),
                                    onClickOption: (o) =>
                                      ((o, e) => {
                                        const l = {
                                          columnIndex: e,
                                          currentOption: o
                                        }
                                        t('clickOption', n(ao(), l)),
                                          t('scrollInto', l)
                                      })(o, c),
                                    onScrollInto: (o) => {
                                      t('scrollInto', {
                                        currentOption: o,
                                        columnIndex: c
                                      })
                                    }
                                  },
                                  F({ _: 2 }, [
                                    d('option')
                                      ? {
                                          name: 'option',
                                          fn: T(() => [
                                            w(
                                              e.$slots,
                                              'option',
                                              {},
                                              void 0,
                                              !0
                                            )
                                          ]),
                                          key: '0'
                                        }
                                      : void 0
                                  ]),
                                  1032,
                                  [
                                    'value',
                                    'fields',
                                    'options',
                                    'readonly',
                                    'allow-html',
                                    'option-height',
                                    'swipe-duration',
                                    'visible-option-num',
                                    'component-slots',
                                    'onChange',
                                    'onClickOption',
                                    'onScrollInto'
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                          B(R)
                            ? (x(),
                              z(
                                $,
                                { key: 0 },
                                [
                                  P(
                                    m,
                                    { class: H(B(G)('mask')), style: V(B(lo)) },
                                    null,
                                    8,
                                    ['class', 'style']
                                  ),
                                  P(
                                    m,
                                    {
                                      class: H([B(k), B(G)('frame')]),
                                      style: V(B(no))
                                    },
                                    null,
                                    8,
                                    ['class', 'style']
                                  )
                                ],
                                64
                              ))
                            : I('', !0)
                        ]),
                        _: 3
                      },
                      8,
                      ['class', 'style']
                    ),
                    d('columns-bottom')
                      ? w(e.$slots, 'columns-bottom', { key: 3 }, void 0, !0)
                      : I('', !0),
                    'bottom' === l.toolbarPosition
                      ? (x(),
                        z(
                          $,
                          { key: 4 },
                          [
                            l.showToolbar && !B(c)
                              ? (x(),
                                S(
                                  oo,
                                  {
                                    key: 0,
                                    title: l.title,
                                    'cancel-button-text': l.cancelButtonText,
                                    'confirm-button-text': l.confirmButtonText,
                                    'component-slots': B(p)
                                      ? o.componentSlots
                                      : B(a).slots,
                                    onConfirm: io,
                                    onCancel: co
                                  },
                                  F({ _: 2 }, [
                                    d('cancel')
                                      ? {
                                          name: 'cancel',
                                          fn: T(() => [
                                            w(
                                              e.$slots,
                                              'cancel',
                                              {},
                                              void 0,
                                              !0
                                            )
                                          ]),
                                          key: '0'
                                        }
                                      : void 0,
                                    d('confirm')
                                      ? {
                                          name: 'confirm',
                                          fn: T(() => [
                                            w(
                                              e.$slots,
                                              'confirm',
                                              {},
                                              void 0,
                                              !0
                                            )
                                          ]),
                                          key: '1'
                                        }
                                      : void 0,
                                    d('title')
                                      ? {
                                          name: 'title',
                                          fn: T(() => [
                                            w(e.$slots, 'title', {}, void 0, !0)
                                          ]),
                                          key: '2'
                                        }
                                      : void 0,
                                    d('toolbar')
                                      ? {
                                          name: 'toolbar',
                                          fn: T(() => [
                                            w(
                                              e.$slots,
                                              'toolbar',
                                              {},
                                              void 0,
                                              !0
                                            )
                                          ]),
                                          key: '3'
                                        }
                                      : void 0
                                  ]),
                                  1032,
                                  [
                                    'title',
                                    'cancel-button-text',
                                    'confirm-button-text',
                                    'component-slots'
                                  ]
                                ))
                              : I('', !0)
                          ],
                          64
                        ))
                      : I('', !0)
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
    [['__scopeId', 'data-v-11f2bf4e']]
  )
export { eo as _, oo as z }
