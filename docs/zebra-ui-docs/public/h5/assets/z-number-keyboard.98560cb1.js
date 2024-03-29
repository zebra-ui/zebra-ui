import {
  d as e,
  k as t,
  m as o,
  o as s,
  c as a,
  w as l,
  a as r,
  n,
  E as d,
  p as u,
  e as i,
  F as c,
  b as y,
  t as p,
  i as m,
  _ as x,
  D as h,
  l as g,
  y as f,
  x as k,
  r as v,
  L as b,
  C as w
} from './index-7fd204f3.js'
import {
  n as B,
  i as _,
  j as z,
  r as K,
  d as T,
  _ as S,
  t as A,
  s as C,
  m as D,
  b as I,
  e as O,
  z as P
} from './DemoPage.0bae30a9.js'
import { u as V } from './use-touch.1ac9fd53.js'
const j = x(
    e({
      name: 'ZNumberKeyboardKey',
      options: { virtualHost: !0 },
      props: {
        type: String,
        text: B,
        color: String,
        wider: Boolean,
        large: Boolean,
        loading: Boolean
      },
      emits: ['press'],
      setup(e, { emit: x }) {
        const h = e,
          [g, f] = _('key')
        z(g)
        const k = t(!1),
          v = V(),
          b = (e) => {
            v.start(e), (k.value = !0)
          },
          w = (e) => {
            v.move(e), v.direction.value && (k.value = !1)
          },
          B = (e) => {
            k.value && ((k.value = !1), x('press', h.text, h.type))
          }
        return (e, t) => {
          const x = K(o('z-loading'), T),
            g = K(o('z-icon'), S),
            v = m
          return (
            s(),
            a(
              v,
              {
                class: n([d(f)('wrapper', { wider: h.wider })]),
                onTouchstartPassive: b,
                onTouchmovePassive: w,
                onTouchend: B,
                onTouchcancel: B
              },
              {
                default: l(() => [
                  r(
                    v,
                    {
                      class: n([
                        d(f)([
                          h.color,
                          {
                            large: h.large,
                            active: k.value,
                            delete: 'delete' === h.type
                          }
                        ])
                      ])
                    },
                    {
                      default: l(() => [
                        h.loading
                          ? (s(),
                            a(
                              x,
                              { key: 0, class: n(d(f)('loading-icon')) },
                              null,
                              8,
                              ['class']
                            ))
                          : u('', !0),
                        'delete' == h.type
                          ? (s(),
                            i(
                              c,
                              { key: 1 },
                              [
                                h.text
                                  ? (s(),
                                    i(c, { key: 0 }, [y(p(h.text), 1)], 64))
                                  : (s(),
                                    a(g, {
                                      key: 1,
                                      name: 'delete-key',
                                      size: '56rpx'
                                    }))
                              ],
                              64
                            ))
                          : 'extra' == h.type
                            ? (s(),
                              i(
                                c,
                                { key: 2 },
                                [
                                  h.text
                                    ? (s(),
                                      i(c, { key: 0 }, [y(p(h.text), 1)], 64))
                                    : (s(),
                                      a(g, {
                                        key: 1,
                                        name: 'hide-key',
                                        size: '56rpx'
                                      }))
                                ],
                                64
                              ))
                            : (s(), i(c, { key: 3 }, [y(p(h.text), 1)], 64))
                      ]),
                      _: 1
                    },
                    8,
                    ['class']
                  )
                ]),
                _: 1
              },
              8,
              ['class']
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-9d8f40d8']]
  ),
  L = x(
    e({
      name: 'ZNumberKeyboard',
      options: { virtualHost: !0 },
      props: {
        show: Boolean,
        title: String,
        overlay: A,
        position: { type: String, default: 'bottom' },
        overlayBackground: { type: Boolean, default: !1 },
        theme: C('default'),
        zIndex: B,
        maxlength: D(1 / 0),
        modelValue: C(''),
        transition: A,
        blurOnClose: A,
        showDeleteKey: A,
        randomKeyOrder: Boolean,
        closeButtonText: String,
        deleteButtonText: String,
        closeButtonLoading: Boolean,
        hideOnClickOutside: A,
        safeAreaInsetBottom: A,
        extraKey: { type: [String, Array], default: '' }
      },
      emits: [
        'show',
        'hide',
        'blur',
        'input',
        'close',
        'delete',
        'update:modelValue'
      ],
      setup(e, { emit: t }) {
        const x = e,
          [B, T] = _('number-keyboard')
        z(B)
        const S = b()
        const A = () => {
            const e = Array(9)
              .fill('')
              .map((e, t) => ({ text: t + 1 }))
            return (
              x.randomKeyOrder &&
                (function (e) {
                  for (let t = e.length - 1; t > 0; t--) {
                    const o = Math.floor(Math.random() * (t + 1)),
                      s = e[t]
                    ;(e[t] = e[o]), (e[o] = s)
                  }
                })(e),
              e
            )
          },
          C = h(() => ({
            position: 'absolute',
            right: 0,
            height: '100%',
            padding: 'var(--z-number-keyboard-close-padding)',
            color: 'var(--z-number-keyboard-close-color)',
            fontSize: 'var(--z-number-keyboard-close-font-size)'
          })),
          D = h(() => ({ background: 'transparent' })),
          V = h(() => x.closeButtonText && 'default' === x.theme),
          L = h(() => x.title || V.value || S.slots['title-left']),
          H = h(() =>
            'custom' === x.theme
              ? (() => {
                  const e = A(),
                    { extraKey: t } = x,
                    o = Array.isArray(t) ? t : [t]
                  return (
                    1 === o.length
                      ? e.push(
                          { text: 0, wider: !0 },
                          { text: o[0], type: 'extra' }
                        )
                      : 2 === o.length &&
                        e.push(
                          { text: o[0], type: 'extra' },
                          { text: 0 },
                          { text: o[1], type: 'extra' }
                        ),
                    e
                  )
                })()
              : [
                  ...A(),
                  { text: x.extraKey, type: 'extra' },
                  { text: 0 },
                  {
                    text: x.showDeleteKey ? x.deleteButtonText : '',
                    type: x.showDeleteKey ? 'delete' : ''
                  }
                ]
          ),
          M = () => {
            x.show && t('blur')
          },
          N = () => {
            t('close'), x.blurOnClose && M()
          },
          Z = (e, o) => {
            if ('' === e) return void ('extra' === o && M())
            const s = x.modelValue
            'delete' === o
              ? (t('delete'), t('update:modelValue', s.slice(0, s.length - 1)))
              : 'close' === o
                ? N()
                : s.length < +x.maxlength &&
                  (t('input', e), t('update:modelValue', s + e))
          }
        return (
          g(
            () => x.show,
            (e) => {
              x.transition || t(e ? 'show' : 'hide')
            }
          ),
          (t, h) => {
            const g = w,
              b = m,
              B = K(o('z-button'), I),
              _ = K(o('z-popup'), O)
            return (
              s(),
              a(
                _,
                {
                  show: x.show,
                  overlay: e.overlay,
                  position: e.position,
                  'overlay-back-groud': e.overlayBackground,
                  'custom-style': d(D),
                  onClose: N
                },
                {
                  default: l(() => [
                    r(
                      b,
                      {
                        style: f(d(P)(x.zIndex)),
                        class: n(
                          d(T)({
                            unfit: !x.safeAreaInsetBottom,
                            'with-title': d(L)
                          })
                        )
                      },
                      {
                        default: l(() => [
                          d(L)
                            ? (s(),
                              a(
                                b,
                                { key: 0, class: n(d(T)('header')) },
                                {
                                  default: l(() => [
                                    d(S).slots['title-left']
                                      ? (s(),
                                        a(
                                          g,
                                          {
                                            key: 0,
                                            class: n(d(T)('title-left'))
                                          },
                                          {
                                            default: l(() => [
                                              k(
                                                t.$slots,
                                                'title-left',
                                                {},
                                                void 0,
                                                !0
                                              )
                                            ]),
                                            _: 3
                                          },
                                          8,
                                          ['class']
                                        ))
                                      : u('', !0),
                                    e.title
                                      ? (s(),
                                        a(
                                          b,
                                          { key: 1, class: n(d(T)('title')) },
                                          {
                                            default: l(() => [
                                              y(p(e.title), 1)
                                            ]),
                                            _: 1
                                          },
                                          8,
                                          ['class']
                                        ))
                                      : u('', !0),
                                    d(V)
                                      ? (s(),
                                        a(
                                          B,
                                          {
                                            key: 2,
                                            type: 'text',
                                            'custom-style': d(C),
                                            onClick: N
                                          },
                                          {
                                            default: l(() => [
                                              y(p(e.closeButtonText), 1)
                                            ]),
                                            _: 1
                                          },
                                          8,
                                          ['custom-style']
                                        ))
                                      : u('', !0)
                                  ]),
                                  _: 3
                                },
                                8,
                                ['class']
                              ))
                            : u('', !0),
                          r(
                            b,
                            { class: n(d(T)('body')) },
                            {
                              default: l(() => [
                                r(
                                  b,
                                  { class: n(d(T)('keys')) },
                                  {
                                    default: l(() => [
                                      (s(!0),
                                      i(
                                        c,
                                        null,
                                        v(
                                          d(H),
                                          (e, t) => (
                                            s(),
                                            a(
                                              j,
                                              {
                                                key: t,
                                                text: e.text,
                                                type: e.type,
                                                wider: e.wider,
                                                color: e.color,
                                                onPress: Z
                                              },
                                              null,
                                              8,
                                              ['text', 'type', 'wider', 'color']
                                            )
                                          )
                                        ),
                                        128
                                      ))
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['class']
                                ),
                                'custom' === x.theme
                                  ? (s(),
                                    a(
                                      b,
                                      { key: 0, class: n(d(T)('sidebar')) },
                                      {
                                        default: l(() => [
                                          x.showDeleteKey
                                            ? (s(),
                                              a(
                                                j,
                                                {
                                                  key: 0,
                                                  large: !0,
                                                  text: x.deleteButtonText,
                                                  type: 'delete',
                                                  onPress: Z
                                                },
                                                null,
                                                8,
                                                ['text']
                                              ))
                                            : u('', !0),
                                          r(
                                            j,
                                            {
                                              large: !0,
                                              text: e.closeButtonText,
                                              type: 'close',
                                              color: 'blue',
                                              loading: e.closeButtonLoading,
                                              onPress: Z
                                            },
                                            null,
                                            8,
                                            ['text', 'loading']
                                          )
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['class']
                                    ))
                                  : u('', !0)
                              ]),
                              _: 1
                            },
                            8,
                            ['class']
                          )
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
                [
                  'show',
                  'overlay',
                  'position',
                  'overlay-back-groud',
                  'custom-style'
                ]
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-aa028cf5']]
  )
export { L as _ }
