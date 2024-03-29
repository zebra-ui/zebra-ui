import {
  M as e,
  N as l,
  s as t,
  m as a,
  n as o,
  t as s,
  D as r,
  k as i,
  i as n,
  j as c,
  O as u,
  H as d,
  v as p,
  r as g,
  y as f,
  P as m,
  _ as y,
  Q as h
} from './DemoPage.0bae30a9.js'
import {
  d as b,
  k as v,
  a6 as k,
  D as w,
  l as x,
  I as z,
  o as S,
  c as C,
  w as I,
  n as A,
  E as _,
  y as B,
  a5 as M,
  m as V,
  i as $,
  a as j,
  K as T,
  x as W,
  p as P,
  e as E,
  F as L,
  b as q,
  t as D,
  L as F,
  ai as O,
  J as R,
  C as H,
  _ as N
} from './index-7fd204f3.js'
import { _ as J } from './z-cell.365e08ec.js'
import { u as K } from './useParent.5b9c05b5.js'
import { C as Q } from './index.389bd7d1.js'
import { u as Z } from './use-id.c1b053ed.js'
function G(e) {
  return Array.isArray(e) ? !e.length : 0 !== e && !e
}
function U(e, t) {
  const { message: a } = t
  return l(a) ? a(e, t) : a || ''
}
function X({ target: e }) {
  e.composing = !0
}
function Y({ target: e }) {
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')))
}
function ee(e) {
  return [...e].length
}
function le(e, l) {
  return [...e].slice(0, l).join('')
}
const te = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: { type: Number, default: 140 },
    formatter: Function,
    clearIcon: t('close-circle-fill'),
    modelValue: a(''),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: t('focus'),
    formatTrigger: t('onInput'),
    spellcheck: { type: Boolean, default: null },
    error: { type: Boolean, default: null },
    disabled: { type: Boolean, default: null },
    readonly: { type: Boolean, default: null }
  },
  ae = N(
    b({
      name: 'ZField',
      options: { virtualHost: !0 },
      props: i(
        {},
        {
          icon: String,
          size: String,
          title: o,
          value: o,
          label: o,
          center: Boolean,
          isLink: Boolean,
          border: s,
          iconPrefix: String,
          valueClass: r,
          labelClass: r,
          titleClass: r,
          titleStyle: null,
          arrowDirection: String,
          required: { type: [Boolean, String], default: null },
          clickable: { type: Boolean, default: null }
        },
        te,
        {
          rows: o,
          type: t('text'),
          confirmType: t('done'),
          rules: Array,
          autosize: [Boolean, Object],
          labelWidth: o,
          labelClass: r,
          labelAlign: String,
          showWordLimit: Boolean,
          errorMessageAlign: String,
          colon: { type: Boolean, default: null },
          placeholderStyle: String,
          leftIconColor: String,
          cellStyle: Object,
          customStyle: Object
        }
      ),
      emits: [
        'blur',
        'focus',
        'clear',
        'keypress',
        'clickInput',
        'endValidate',
        'startValidate',
        'clickLeftIcon',
        'clickRightIcon',
        'update:modelValue',
        'click',
        'confirm'
      ],
      setup(l, { emit: t }) {
        const a = l,
          [o, s] = n('field')
        c(o)
        const r = F(),
          i = v(''),
          b = Z(),
          N = k({ status: 'unvalidated', focused: !1, validateMessage: '' }),
          te = v(),
          { parent: ae } = K(m),
          oe = w(() =>
            Ce.value
              ? 'color: var(--z-field-input-error-text-color);' +
                a.placeholderStyle
              : 'color: var(--z-field-placeholder-text-color);' +
                a.placeholderStyle
          ),
          se = () => String(a.modelValue ? a.modelValue : ''),
          re = (e) =>
            d(a[e]) ? a[e] : ae && d(ae.props[e]) ? ae.props[e] : void 0,
          ie = w(() => {
            const e = re('readonly')
            if (a.clearable && !e) {
              const e = '' !== se(),
                l =
                  'always' === a.clearTrigger ||
                  ('focus' === a.clearTrigger && N.focused)
              return e && l
            }
            return !1
          }),
          ne = w(() => (te.value && r.slots.input ? te.value() : a.modelValue)),
          ce = w(() => {
            var e
            const l = re('required')
            return 'auto' === l
              ? null == (e = a.rules)
                ? void 0
                : e.some((e) => e.required)
              : l
          }),
          ue = w(() => ({ 'flex-wrap': 'wrap', ...a.cellStyle })),
          de = (l) =>
            l.reduce(
              (l, t) =>
                l.then(() => {
                  if ('failed' === N.status) return
                  let { value: l } = ne
                  if (
                    (t.formatter && (l = t.formatter(l, t)),
                    !(function (e, l) {
                      if (G(e)) {
                        if (l.required) return !1
                        if (!1 === l.validateEmpty) return !0
                      }
                      return !(l.pattern && !l.pattern.test(String(e)))
                    })(l, t))
                  )
                    return (
                      (N.status = 'failed'), void (N.validateMessage = U(l, t))
                    )
                  if (t.validator) {
                    if (G(l) && !1 === t.validateEmpty) return
                    return (function (l, t) {
                      return new Promise((a) => {
                        const o = t.validator(l, t)
                        e(o) ? o.then(a) : a(o)
                      })
                    })(l, t).then((e) => {
                      e && 'string' == typeof e
                        ? ((N.status = 'failed'), (N.validateMessage = e))
                        : !1 === e &&
                          ((N.status = 'failed'), (N.validateMessage = U(l, t)))
                    })
                  }
                }),
              Promise.resolve()
            ),
          pe = () => {
            ;(N.status = 'unvalidated'), (N.validateMessage = '')
          },
          ge = () =>
            t('endValidate', { status: N.status, message: N.validateMessage }),
          fe = (e = a.rules) =>
            new Promise((l) => {
              pe(),
                e
                  ? (t('startValidate'),
                    de(e).then(() => {
                      'failed' === N.status
                        ? (l({ name: a.name, message: N.validateMessage }),
                          ge())
                        : ((N.status = 'passed'), l(), ge())
                    }))
                  : l()
            }),
          me = (e) => {
            if (ae && a.rules) {
              const { validateTrigger: l } = ae.props,
                t = h(l).includes(e),
                o = a.rules.filter((l) =>
                  l.trigger ? h(l.trigger).includes(e) : t
                )
              o.length && fe(o)
            }
          },
          ye = (e, l = 'onInput') => {
            if (
              ((e = ((e) => {
                const { maxlength: l } = a
                if (d(l) && ee(e) > +l) {
                  const t = se()
                  return t && ee(t) === +l ? t : le(e, +l)
                }
                return e
              })(e)),
              'number' === a.type || 'digit' === a.type)
            ) {
              const l = 'number' === a.type
              e = u(e, l, l)
            }
            if (a.formatter && l === a.formatTrigger) {
              const { formatter: l, maxlength: t } = a
              ;(e = l(e)), d(t) && ee(e) > +t && (e = le(e, +t))
            }
            ;(i.value = e), e !== a.modelValue && t('update:modelValue', e)
          },
          he = (e) => {
            ye(e.detail.value)
          },
          be = (e) => {
            t('confirm', e)
          },
          ve = (e) => {
            ;(N.focused = !0), t('focus', e), re('readonly')
          },
          ke = (e) => {
            ;(N.focused = !1),
              ye(se(), 'onBlur'),
              t('blur', e),
              re('readonly') || me('onBlur')
          },
          we = (e) => t('clickInput', e),
          xe = (e) => t('clickLeftIcon', e),
          ze = (e) => t('clickRightIcon', e),
          Se = (e) => {
            t('update:modelValue', ''), t('clear', e)
          },
          Ce = w(() =>
            'boolean' == typeof a.error
              ? a.error
              : !(!ae || !ae.props.showError || 'failed' !== N.status) || void 0
          ),
          Ie = w(() => {
            const e = {
              flex: 'none',
              boxSizing: 'border-box',
              width: 'var(--z-field-label-width)',
              marginRight: 'var(--z-field-label-margin-right)',
              color: 'var(--z-field-label-color)',
              textAlign: 'left',
              wordWrap: 'break-word'
            }
            let l = {}
            l =
              'left' == a.labelAlign
                ? {}
                : 'center' == a.labelAlign
                  ? { 'text-align': 'center' }
                  : 'right' == a.labelAlign
                    ? { 'text-align': 'right' }
                    : 'top' == a.labelAlign
                      ? {
                          display: 'flex',
                          width: '100%',
                          textAlign: 'left',
                          marginBottom: 'var(--z-padding-base)',
                          overflowWrap: 'break-word'
                        }
                      : {}
            const t = re('labelWidth'),
              o = re('labelAlign')
            return t && 'top' !== o
              ? { ...e, ...l, width: f(t) }
              : { ...e, ...l }
          }),
          Ae = () => a.id || `${b}-input`,
          _e = () => {
            t('click')
          }
        p({
          blur: () => {},
          focus: () => {},
          validate: fe,
          formValue: ne,
          resetValidation: pe,
          getValidationStatus: () => N.status
        }),
          M(Q, {
            customValue: te,
            resetValidation: pe,
            validateWithTrigger: me
          }),
          x(
            () => a.modelValue,
            () => {
              ye(se()), pe(), me('onInput')
            }
          ),
          z(() => {
            ye(se(), a.formatTrigger)
          })
        const Be = w(() => ({
            display: 'block',
            'font-size': 'var(--z-field-icon-size)',
            'line-height': 'inherit'
          })),
          Me = w(() => ({
            display: 'block',
            'font-size': 'var(--z-field-icon-size)',
            'line-height': 'inherit'
          })),
          Ve = w(() => ({ display: 'block' }))
        return (e, l) => {
          const t = g(V('z-icon'), y),
            o = $,
            n = O,
            c = R,
            u = H,
            d = g(V('z-cell'), J)
          return (
            S(),
            C(
              o,
              {
                class: A(
                  _(s)({
                    error: _(Ce),
                    disabled: e.disabled,
                    [`label-${e.labelAlign}`]: e.labelAlign
                  })
                ),
                style: B(e.customStyle)
              },
              {
                default: I(() => [
                  j(
                    d,
                    {
                      'custom-style': _(ue),
                      size: a.size,
                      center: a.center,
                      border: a.border,
                      'is-link': a.isLink,
                      clickable: a.clickable,
                      'title-style': _(Ie),
                      'value-style': { overflow: 'visible' },
                      'title-class': [
                        _(s)('label', [e.labelAlign]),
                        a.labelClass
                      ],
                      'arrow-direction': a.arrowDirection,
                      onClick: _e
                    },
                    T(
                      {
                        title: I(() => [
                          'top' === e.labelAlign
                            ? (S(),
                              E(
                                L,
                                { key: 0 },
                                [
                                  a.leftIcon || _(r).slots['left-icon']
                                    ? (S(),
                                      C(
                                        o,
                                        {
                                          key: 0,
                                          class: A(_(s)('left-icon')),
                                          onClick: xe
                                        },
                                        {
                                          default: I(() => [
                                            _(r).slots['left-icon']
                                              ? W(
                                                  e.$slots,
                                                  'left-icon',
                                                  { key: 0 },
                                                  void 0,
                                                  !0
                                                )
                                              : P('', !0),
                                            j(
                                              t,
                                              {
                                                name: a.leftIcon,
                                                'class-prefix': a.iconPrefix,
                                                'custom-style': _(Be),
                                                'badge-wrapper-style': _(Ve)
                                              },
                                              null,
                                              8,
                                              [
                                                'name',
                                                'class-prefix',
                                                'custom-style',
                                                'badge-wrapper-style'
                                              ]
                                            )
                                          ]),
                                          _: 3
                                        },
                                        8,
                                        ['class']
                                      ))
                                    : P('', !0),
                                  _(r).slots.label
                                    ? (S(),
                                      E(
                                        L,
                                        { key: 1 },
                                        [
                                          W(e.$slots, 'label', {}, void 0, !0),
                                          q(D(re('colon') ? ':' : ''), 1)
                                        ],
                                        64
                                      ))
                                    : a.label
                                      ? (S(),
                                        C(
                                          o,
                                          {
                                            key: 2,
                                            id: `${_(b)}-label`,
                                            style: B(
                                              'top' === re('labelAlign') &&
                                                re('labelWidth')
                                                ? {
                                                    width: _(f)(
                                                      re('labelWidth')
                                                    )
                                                  }
                                                : void 0
                                            )
                                          },
                                          {
                                            default: I(() => [
                                              q(
                                                D(
                                                  a.label +
                                                    (re('colon') ? ':' : '')
                                                ),
                                                1
                                              )
                                            ]),
                                            _: 1
                                          },
                                          8,
                                          ['id', 'style']
                                        ))
                                      : P('', !0)
                                ],
                                64
                              ))
                            : (S(),
                              E(
                                L,
                                { key: 1 },
                                [
                                  _(r).slots.label
                                    ? (S(),
                                      E(
                                        L,
                                        { key: 0 },
                                        [
                                          W(e.$slots, 'label', {}, void 0, !0),
                                          q(D(re('colon') ? ':' : ''), 1)
                                        ],
                                        64
                                      ))
                                    : a.label
                                      ? (S(),
                                        C(
                                          o,
                                          {
                                            key: 1,
                                            id: `${_(b)}-label`,
                                            class: A(
                                              _(s)('label--content', {
                                                required: _(ce)
                                              })
                                            ),
                                            style: B(
                                              'top' === re('labelAlign') &&
                                                re('labelWidth')
                                                ? {
                                                    width: _(f)(
                                                      re('labelWidth')
                                                    )
                                                  }
                                                : void 0
                                            )
                                          },
                                          {
                                            default: I(() => [
                                              q(
                                                D(
                                                  a.label +
                                                    (re('colon') ? ':' : '')
                                                ),
                                                1
                                              )
                                            ]),
                                            _: 1
                                          },
                                          8,
                                          ['id', 'class', 'style']
                                        ))
                                      : P('', !0)
                                ],
                                64
                              ))
                        ]),
                        default: I(() => [
                          j(
                            o,
                            { class: A(_(s)('body')) },
                            {
                              default: I(() => [
                                _(r).slots.input
                                  ? (S(),
                                    C(
                                      o,
                                      {
                                        key: 0,
                                        class: A(
                                          _(s)('control', [
                                            re('inputAlign'),
                                            {
                                              error: _(Ce),
                                              custom: !!_(r).slots.input,
                                              'min-height':
                                                'textarea' === a.type &&
                                                !a.autosize
                                            }
                                          ])
                                        ),
                                        onClick: we
                                      },
                                      {
                                        default: I(() => [
                                          W(e.$slots, 'input', {}, void 0, !0)
                                        ]),
                                        _: 3
                                      },
                                      8,
                                      ['class']
                                    ))
                                  : 'textarea' === a.type
                                    ? (S(),
                                      C(
                                        n,
                                        {
                                          key: 1,
                                          id: Ae(),
                                          name: a.name,
                                          value: i.value,
                                          rows:
                                            void 0 !== a.rows
                                              ? +a.rows
                                              : void 0,
                                          maxlength: a.maxlength,
                                          'placeholder-style': _(oe),
                                          class: A(
                                            _(s)('control', [
                                              re('inputAlign'),
                                              {
                                                error: _(Ce),
                                                custom: !!_(r).slots.input,
                                                'min-height':
                                                  'textarea' === a.type &&
                                                  !a.autosize
                                              }
                                            ])
                                          ),
                                          'auto-height': !!a.autosize,
                                          disabled:
                                            re('disabled') || re('readonly'),
                                          readonly: re('readonly'),
                                          autofocus: a.autofocus,
                                          placeholder: a.placeholder,
                                          autocomplete: a.autocomplete,
                                          autocapitalize: a.autocapitalize,
                                          autocorrect: a.autocorrect,
                                          enterkeyhint: a.enterkeyhint,
                                          spellcheck: a.spellcheck,
                                          onBlur: ke,
                                          onFocus: ve,
                                          onInput: he,
                                          onClick: we,
                                          onCompositionend: _(Y),
                                          onCompositionstart: _(X)
                                        },
                                        null,
                                        8,
                                        [
                                          'id',
                                          'name',
                                          'value',
                                          'rows',
                                          'maxlength',
                                          'placeholder-style',
                                          'class',
                                          'auto-height',
                                          'disabled',
                                          'readonly',
                                          'autofocus',
                                          'placeholder',
                                          'autocomplete',
                                          'autocapitalize',
                                          'autocorrect',
                                          'enterkeyhint',
                                          'spellcheck',
                                          'onCompositionend',
                                          'onCompositionstart'
                                        ]
                                      ))
                                    : (S(),
                                      C(
                                        c,
                                        {
                                          key: 2,
                                          type: a.type,
                                          'confirm-type': a.confirmType,
                                          id: Ae(),
                                          name: a.name,
                                          value: i.value,
                                          rows:
                                            void 0 !== a.rows
                                              ? +a.rows
                                              : void 0,
                                          maxlength: a.maxlength,
                                          'placeholder-style': _(oe),
                                          style: B(
                                            re('readonly')
                                              ? 'pointer-events: none;'
                                              : ''
                                          ),
                                          class: A(
                                            _(s)('control', [
                                              re('inputAlign'),
                                              {
                                                disabled: e.disabled,
                                                error: _(Ce),
                                                custom: !!_(r).slots.input,
                                                'min-height':
                                                  'textarea' === a.type &&
                                                  !a.autosize
                                              }
                                            ])
                                          ),
                                          disabled:
                                            re('disabled') || re('readonly'),
                                          readonly: re('readonly'),
                                          autofocus: a.autofocus,
                                          placeholder: a.placeholder,
                                          autocomplete: a.autocomplete,
                                          autocapitalize: a.autocapitalize,
                                          autocorrect: a.autocorrect,
                                          enterkeyhint: a.enterkeyhint,
                                          spellcheck: a.spellcheck,
                                          onBlur: ke,
                                          onFocus: ve,
                                          onInput: he,
                                          onConfirm: be,
                                          onClick: we,
                                          onCompositionend: _(Y),
                                          onCompositionstart: _(X)
                                        },
                                        null,
                                        8,
                                        [
                                          'type',
                                          'confirm-type',
                                          'id',
                                          'name',
                                          'value',
                                          'rows',
                                          'maxlength',
                                          'placeholder-style',
                                          'style',
                                          'class',
                                          'disabled',
                                          'readonly',
                                          'autofocus',
                                          'placeholder',
                                          'autocomplete',
                                          'autocapitalize',
                                          'autocorrect',
                                          'enterkeyhint',
                                          'spellcheck',
                                          'onCompositionend',
                                          'onCompositionstart'
                                        ]
                                      )),
                                _(ie)
                                  ? (S(),
                                    C(
                                      o,
                                      { key: 3, class: A(_(s)('clear')) },
                                      {
                                        default: I(() => [
                                          j(
                                            t,
                                            {
                                              name: a.clearIcon,
                                              'badge-wrapper-style': _(Ve),
                                              onTouchstart: Se
                                            },
                                            null,
                                            8,
                                            ['name', 'badge-wrapper-style']
                                          )
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['class']
                                    ))
                                  : P('', !0),
                                a.rightIcon || _(r).slots['right-icon']
                                  ? (S(),
                                    C(
                                      o,
                                      {
                                        key: 4,
                                        class: A(_(s)('right-icon')),
                                        onClick: ze
                                      },
                                      {
                                        default: I(() => [
                                          _(r).slots['right-icon']
                                            ? W(
                                                e.$slots,
                                                'right-icon',
                                                { key: 0 },
                                                void 0,
                                                !0
                                              )
                                            : (S(),
                                              C(
                                                t,
                                                {
                                                  key: 1,
                                                  name: a.rightIcon,
                                                  'class-prefix': a.iconPrefix,
                                                  'badge-wrapper-style': _(Ve),
                                                  'custom-style': _(Me)
                                                },
                                                null,
                                                8,
                                                [
                                                  'name',
                                                  'class-prefix',
                                                  'badge-wrapper-style',
                                                  'custom-style'
                                                ]
                                              ))
                                        ]),
                                        _: 3
                                      },
                                      8,
                                      ['class']
                                    ))
                                  : P('', !0),
                                _(r).slots.button
                                  ? (S(),
                                    C(
                                      o,
                                      { key: 5, class: A(_(s)('button')) },
                                      {
                                        default: I(() => [
                                          W(e.$slots, 'button', {}, void 0, !0)
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
                            ['class']
                          ),
                          a.showWordLimit && a.maxlength
                            ? (S(),
                              C(
                                o,
                                { key: 0, class: A(_(s)('word-limit')) },
                                {
                                  default: I(() => [
                                    j(
                                      u,
                                      { class: A(_(s)('word-num')) },
                                      {
                                        default: I(() => [
                                          q(D(_(ee)(se())), 1)
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['class']
                                    ),
                                    q('/' + D(a.maxlength), 1)
                                  ]),
                                  _: 1
                                },
                                8,
                                ['class']
                              ))
                            : P('', !0),
                          _(ae) && !1 != !_(ae).props.showErrorMessage
                            ? P('', !0)
                            : (S(),
                              E(
                                L,
                                { key: 1 },
                                [
                                  a.errorMessage || N.validateMessage
                                    ? (S(),
                                      C(
                                        o,
                                        {
                                          key: 0,
                                          class: A(
                                            _(s)(
                                              'error-message',
                                              re('errorMessageAlign')
                                            )
                                          )
                                        },
                                        {
                                          default: I(() => [
                                            _(r).slots['error-message']
                                              ? W(
                                                  e.$slots,
                                                  'error-message',
                                                  {
                                                    key: 0,
                                                    message:
                                                      a.errorMessage ||
                                                      N.validateMessage
                                                  },
                                                  void 0,
                                                  !0
                                                )
                                              : (S(),
                                                E(
                                                  L,
                                                  { key: 1 },
                                                  [
                                                    q(
                                                      D(
                                                        a.errorMessage ||
                                                          N.validateMessage
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
                                        ['class']
                                      ))
                                    : P('', !0)
                                ],
                                64
                              ))
                        ]),
                        extra: I(() => [W(e.$slots, 'extra', {}, void 0, !0)]),
                        _: 2
                      },
                      [
                        (a.leftIcon || _(r).slots['left-icon']) &&
                        'top' !== e.labelAlign
                          ? {
                              name: 'icon',
                              fn: I(() => [
                                j(
                                  o,
                                  { class: A(_(s)('left-icon')), onClick: xe },
                                  {
                                    default: I(() => [
                                      _(r).slots['left-icon']
                                        ? W(
                                            e.$slots,
                                            'left-icon',
                                            { key: 0 },
                                            void 0,
                                            !0
                                          )
                                        : P('', !0),
                                      j(
                                        t,
                                        {
                                          name: a.leftIcon,
                                          'class-prefix': a.iconPrefix,
                                          color: a.leftIconColor,
                                          'custom-style': _(Be),
                                          'badge-wrapper-style': _(Ve)
                                        },
                                        null,
                                        8,
                                        [
                                          'name',
                                          'class-prefix',
                                          'color',
                                          'custom-style',
                                          'badge-wrapper-style'
                                        ]
                                      )
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  ['class']
                                )
                              ]),
                              key: '0'
                            }
                          : void 0
                      ]
                    ),
                    1032,
                    [
                      'custom-style',
                      'size',
                      'center',
                      'border',
                      'is-link',
                      'clickable',
                      'title-style',
                      'title-class',
                      'arrow-direction'
                    ]
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
    [['__scopeId', 'data-v-7c860383']]
  )
export { ae as _, te as f }
