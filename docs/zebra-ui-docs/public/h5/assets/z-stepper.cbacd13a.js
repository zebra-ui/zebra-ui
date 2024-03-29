import {
  d as e,
  k as a,
  D as l,
  l as s,
  o as t,
  c as n,
  w as u,
  af as i,
  a as o,
  y as d,
  E as r,
  n as m,
  ag as c,
  ae as p,
  a2 as v,
  J as h,
  i as g,
  _ as b
} from './index-7fd204f3.js'
import { u as f } from './index.389bd7d1.js'
import {
  m as x,
  t as y,
  n as S,
  i as w,
  j as V,
  y as P,
  W as T,
  L as B,
  O as C,
  H as I,
  C as M,
  X as F,
  Y as L
} from './DemoPage.0bae30a9.js'
const _ = b(
  e({
    name: 'ZStepper',
    options: { virtualHost: !0 },
    props: {
      min: x(1),
      max: x(1 / 0),
      name: x(''),
      step: x(1),
      theme: String,
      integer: Boolean,
      disabled: Boolean,
      showPlus: y,
      showMinus: y,
      showInput: y,
      longPress: y,
      autoFixed: y,
      allowEmpty: Boolean,
      modelValue: S,
      inputWidth: S,
      buttonSize: S,
      placeholder: String,
      disablePlus: Boolean,
      disableMinus: Boolean,
      disableInput: Boolean,
      beforeChange: Function,
      defaultValue: x(1),
      decimalLength: S
    },
    emits: [
      'plus',
      'blur',
      'minus',
      'focus',
      'change',
      'overlimit',
      'update:modelValue'
    ],
    setup(e, { emit: b }) {
      const x = e,
        [y, S] = w('stepper')
      V(y)
      const _ = (e, a) => String(e) === String(a),
        j = (e, a = !0) => {
          const { min: l, max: s, allowEmpty: t, decimalLength: n } = x
          return (
            (t && '' === e) ||
              ((e = '' === (e = C(String(e), !x.integer)) ? 0 : +e),
              (e = Number.isNaN(e) ? +l : e),
              (e = a ? Math.max(Math.min(+s, e), +l) : e),
              I(n) && (e = e.toFixed(+n))),
            e
          )
        }
      let k
      const z = a(),
        E = a(
          (() => {
            const e = x.modelValue ? x.modelValue : x.defaultValue,
              a = j(e)
            return _(a, x.modelValue) || b('update:modelValue', a), a
          })()
        ),
        N = l(() => x.disabled || x.disableMinus || +E.value <= +x.min),
        W = l(() => x.disabled || x.disablePlus || +E.value >= +x.max),
        D = l(() => ({ width: P(x.inputWidth), height: P(x.buttonSize) })),
        H = l(() => T(x.buttonSize)),
        $ = (e) => {
          x.beforeChange
            ? M(x.beforeChange, {
                args: [e],
                done() {
                  E.value = e
                }
              })
            : (E.value = e)
        },
        J = () => {
          if (('plus' === k && W.value) || ('minus' === k && N.value))
            return void b('overlimit', k)
          const e = 'minus' === k ? -x.step : +x.step,
            a = j(F(+E.value, e))
          $(a), b(k)
        },
        O = (e) => {
          const a = e.target,
            { value: l } = a,
            { decimalLength: s } = x
          let t = C(String(l), !x.integer)
          if (I(s) && t.includes('.')) {
            const e = t.split('.')
            t = `${e[0]}.${e[1].slice(0, +s)}`
          }
          x.beforeChange
            ? (a.value = String(E.value))
            : _(l, t) || (a.value = t)
          const n = t === String(+t)
          $(n ? +t : t)
        },
        X = (e) => {
          var a
          x.disableInput ? null == (a = z.value) || a.blur() : b('focus', e)
        },
        Y = (e) => {
          const a = e.detail,
            l = j(a.value, x.autoFixed)
          ;(a.value = String(l)),
            (E.value = l),
            p(() => {
              b('blur', e)
            })
        }
      let Z
      const q = () => {
          Z = setTimeout(() => {
            J(), q()
          }, 200)
        },
        A = (e) => {
          x.longPress && clearTimeout(Z)
        },
        G = (e, a) => {
          ;(k = a), J()
        },
        K = (e, a) => {
          ;(k = a),
            x.longPress &&
              (clearTimeout(Z),
              (Z = setTimeout(() => {
                J(), q()
              }, L)))
        }
      return (
        s(
          () => [x.max, x.min, x.integer, x.decimalLength],
          () => {
            const e = j(E.value)
            _(e, E.value) || (E.value = e)
          }
        ),
        s(
          () => x.modelValue,
          (e) => {
            _(e, E.value) || (E.value = j(e))
          }
        ),
        s(E, (e) => {
          b('update:modelValue', e), b('change', e, { name: x.name })
        }),
        f(() => x.modelValue),
        (e, a) => {
          const l = v,
            s = h,
            p = g
          return (
            t(),
            n(
              p,
              { class: m(r(S)([x.theme])) },
              {
                default: u(() => [
                  i(
                    o(
                      l,
                      {
                        type: 'button',
                        style: d(r(H)),
                        class: m([
                          r(S)('minus', { disabled: r(N) }),
                          { [r(B)]: !r(N) }
                        ]),
                        onClick: a[0] || (a[0] = (e) => G(0, 'minus')),
                        onTouchstartPassive:
                          a[1] || (a[1] = (e) => K(0, 'minus')),
                        onTouchend: A,
                        onTouchcancel: A
                      },
                      null,
                      8,
                      ['style', 'class']
                    ),
                    [[c, x.showMinus]]
                  ),
                  i(
                    o(
                      s,
                      {
                        type: x.integer ? 'number' : 'digit',
                        class: m(r(S)('input')),
                        value: E.value,
                        style: d(r(D)),
                        disabled: x.disabled || x.disableInput,
                        inputmode: x.integer ? 'numeric' : 'decimal',
                        placeholder: x.placeholder,
                        'aria-valuemax': x.max,
                        'aria-valuemin': x.min,
                        'aria-valuenow': E.value,
                        onBlur: Y,
                        onInput: O,
                        onFocus: X
                      },
                      null,
                      8,
                      [
                        'type',
                        'class',
                        'value',
                        'style',
                        'disabled',
                        'inputmode',
                        'placeholder',
                        'aria-valuemax',
                        'aria-valuemin',
                        'aria-valuenow'
                      ]
                    ),
                    [[c, x.showInput]]
                  ),
                  i(
                    o(
                      l,
                      {
                        type: 'button',
                        style: d(r(H)),
                        class: m([
                          r(S)('plus', { disabled: r(W) }),
                          { [r(B)]: !r(W) }
                        ]),
                        onClick: a[2] || (a[2] = (e) => G(0, 'plus')),
                        onTouchstartPassive:
                          a[3] || (a[3] = (e) => K(0, 'plus')),
                        onTouchend: A,
                        onTouchcancel: A
                      },
                      null,
                      8,
                      ['style', 'class']
                    ),
                    [[c, x.showPlus]]
                  )
                ]),
                _: 1
              },
              8,
              ['class']
            )
          )
        }
      )
    }
  }),
  [['__scopeId', 'data-v-f5d1dce7']]
)
export { _ }
