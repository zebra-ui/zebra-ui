import {
  d as e,
  k as t,
  D as a,
  o,
  c as s,
  w as l,
  a as r,
  n,
  E as u,
  y as i,
  e as c,
  F as d,
  z as m,
  x as v,
  L as g,
  i as h,
  _ as b
} from './index-7fd204f3.js'
import {
  m as p,
  n as y,
  i as f,
  j as T,
  y as k,
  W as V,
  p as x,
  x as S,
  X as _,
  F as z
} from './DemoPage.0bae30a9.js'
import { u as N } from './index.389bd7d1.js'
import { u as w } from './use-touch.1ac9fd53.js'
const C = b(
  e({
    name: 'ZSlider',
    options: { virtualHost: !0 },
    props: {
      min: p(0),
      max: p(100),
      step: p(1),
      range: Boolean,
      reverse: Boolean,
      disabled: Boolean,
      readonly: Boolean,
      vertical: Boolean,
      barHeight: y,
      buttonSize: y,
      activeColor: String,
      inactiveColor: String,
      modelValue: { type: [Number, Array], default: 0 },
      customStyle: Object
    },
    emits: ['change', 'dragEnd', 'dragStart', 'update:modelValue'],
    setup(e, { emit: b }) {
      const p = e,
        [y, C] = f('slider')
      T(y)
      const j = g()
      let B, P, X
      const A = t(),
        E = w(),
        H = a(() => Number(p.max) - Number(p.min)),
        I = a(() => {
          const e = p.vertical ? 'width' : 'height'
          return {
            background: p.inactiveColor,
            [e]: k(p.barHeight),
            ...p.customStyle
          }
        }),
        Y = a(() => 'dragging' === A.value),
        $ = (e) => p.range && Array.isArray(e),
        D = () => {
          const { modelValue: e, min: t } = p
          return $(e)
            ? (100 * (e[1] - e[0])) / H.value + '%'
            : (100 * (e - Number(t))) / H.value + '%'
        },
        F = a(() => {
          const e = {
            [p.vertical ? 'height' : 'width']: D(),
            background: p.activeColor
          }
          A.value && (e.transition = 'none')
          return (
            (e[
              p.vertical
                ? p.reverse
                  ? 'bottom'
                  : 'top'
                : p.reverse
                  ? 'right'
                  : 'left'
            ] = (() => {
              const { modelValue: e, min: t } = p
              return $(e) ? (100 * (e[0] - Number(t))) / H.value + '%' : '0%'
            })()),
            e
          )
        }),
        L = (e) => {
          const t = +p.min,
            a = +p.max,
            o = +p.step
          e = z(e, t, a)
          const s = Math.round((e - t) / o) * o
          return _(t, s)
        },
        M = () => {
          const e = p.modelValue
          X = $(e) ? e.map(L) : L(e)
        },
        O = (e, t) => {
          ;(e = $(e)
            ? ((e) => {
                const t = e[0] ? e[0] : Number(p.min),
                  a = e[1] ? e[1] : Number(p.max)
                return t > a ? [a, t] : [t, a]
              })(e).map(L)
            : L(e)),
            x(e, p.modelValue) || b('update:modelValue', e),
            t && !x(e, X) && b('change', e)
        },
        W = (e) => {
          if (p.disabled || p.readonly) return
          M()
          const t = e.touches[0],
            { min: a, reverse: o, vertical: s, modelValue: l } = p
          S(j, '.z-slider-rect').then((e) => {
            const r = s ? e.height : e.width,
              n =
                Number(a) +
                ((s
                  ? o
                    ? e.bottom - t.clientY
                    : t.clientY - e.top
                  : o
                    ? e.right - t.clientX
                    : t.clientX - e.left) /
                  r) *
                  H.value
            if ($(l)) {
              const [e, t] = l
              O(n <= (e + t) / 2 ? [n, t] : [e, n], !0)
            } else O(n, !0)
          })
        },
        Z = (e, t = '') => {
          'number' == typeof t && (B = t), q(e)
        },
        q = (e) => {
          p.disabled ||
            p.readonly ||
            (E.start(e), (P = p.modelValue), M(), (A.value = 'start'))
        },
        G = (e) => {
          p.disabled ||
            p.readonly ||
            ('start' === A.value && b('dragStart', e),
            E.move(e),
            (A.value = 'dragging'),
            S(j, '.z-slider-rect').then((e) => {
              let t =
                ((p.vertical ? E.deltaY.value : E.deltaX.value) /
                  (p.vertical ? e.height : e.width)) *
                H.value
              if ((p.reverse && (t = -t), $(X))) {
                const e = p.reverse ? 1 - B : B
                P[e] = X[e] + t
              } else P = X + t
              O(P)
            }))
        },
        J = (e) => {
          p.disabled ||
            p.readonly ||
            ('dragging' === A.value && (O(P, !0), b('dragEnd', e)),
            (A.value = ''))
        },
        K = (e) => {
          if ('number' == typeof e) {
            return C('button-wrapper', ['left', 'right'][e])
          }
          return C('button-wrapper', p.reverse ? 'left' : 'right')
        }
      return (
        O(p.modelValue),
        N(() => p.modelValue),
        (e, t) => {
          const a = h
          return (
            o(),
            s(
              a,
              {
                style: i(u(I)),
                class: n([
                  'z-slider-rect',
                  u(C)({ vertical: p.vertical, disabled: p.disabled })
                ]),
                onClick: m(W, ['stop'])
              },
              {
                default: l(() => [
                  r(
                    a,
                    { class: n(u(C)('bar')), style: i(u(F)) },
                    {
                      default: l(() => [
                        p.range
                          ? (o(),
                            c(
                              d,
                              { key: 0 },
                              [
                                r(
                                  a,
                                  {
                                    class: n(K(0)),
                                    onTouchstartPassive:
                                      t[0] || (t[0] = (e) => Z(e, 0)),
                                    onTouchmove: m(G, ['stop', 'prevent']),
                                    onTouchend: J,
                                    onTouchcancel: J,
                                    onClick:
                                      t[1] || (t[1] = m(() => {}, ['stop']))
                                  },
                                  {
                                    default: l(() => [
                                      u(j).slots['left-button']
                                        ? v(
                                            e.$slots,
                                            'left-button',
                                            {
                                              key: 0,
                                              value: p.modelValue[0],
                                              dragging: u(Y),
                                              dragIndex:
                                                u(P)[0] > u(P)[1]
                                                  ? 1 ^ u(B)
                                                  : u(B)
                                            },
                                            void 0,
                                            !0
                                          )
                                        : (o(),
                                          s(
                                            a,
                                            {
                                              key: 1,
                                              class: n(u(C)('button')),
                                              style: i(u(V)(p.buttonSize))
                                            },
                                            null,
                                            8,
                                            ['class', 'style']
                                          ))
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  ['class', 'onTouchmove']
                                ),
                                r(
                                  a,
                                  {
                                    class: n(K(1)),
                                    onTouchstartPassive:
                                      t[2] || (t[2] = (e) => Z(e, 1)),
                                    onTouchmove: m(G, ['stop', 'prevent']),
                                    onTouchend: J,
                                    onTouchcancel: J
                                  },
                                  {
                                    default: l(() => [
                                      u(j).slots['right-button']
                                        ? v(
                                            e.$slots,
                                            'right-button',
                                            {
                                              key: 0,
                                              value: p.modelValue[1],
                                              dragging: u(Y),
                                              dragIndex:
                                                u(P)[0] > u(P)[1]
                                                  ? 1 ^ u(B)
                                                  : u(B)
                                            },
                                            void 0,
                                            !0
                                          )
                                        : (o(),
                                          s(
                                            a,
                                            {
                                              key: 1,
                                              class: n(u(C)('button')),
                                              style: i(u(V)(p.buttonSize))
                                            },
                                            null,
                                            8,
                                            ['class', 'style']
                                          ))
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  ['class', 'onTouchmove']
                                )
                              ],
                              64
                            ))
                          : (o(),
                            s(
                              a,
                              {
                                key: 1,
                                class: n(K()),
                                onTouchstartPassive:
                                  t[3] || (t[3] = (e) => Z(e)),
                                onTouchmove: m(G, ['stop', 'prevent']),
                                onTouchend: J,
                                onTouchcancel: J
                              },
                              {
                                default: l(() => [
                                  u(j).slots.button
                                    ? v(
                                        e.$slots,
                                        'button',
                                        {
                                          key: 0,
                                          value: p.modelValue,
                                          dragging: u(Y)
                                        },
                                        void 0,
                                        !0
                                      )
                                    : (o(),
                                      s(
                                        a,
                                        {
                                          key: 1,
                                          class: n(u(C)('button')),
                                          style: i(u(V)(p.buttonSize))
                                        },
                                        null,
                                        8,
                                        ['class', 'style']
                                      ))
                                ]),
                                _: 3
                              },
                              8,
                              ['class', 'onTouchmove']
                            ))
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
              ['style', 'class', 'onClick']
            )
          )
        }
      )
    }
  }),
  [['__scopeId', 'data-v-a7e37136']]
)
export { C as _ }
