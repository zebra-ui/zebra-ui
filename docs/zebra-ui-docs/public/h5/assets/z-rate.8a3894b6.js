import {
  n as o,
  s as e,
  m as l,
  t as a,
  w as t,
  i as s,
  j as r,
  r as i,
  _ as n,
  y as c,
  x as u,
  I as d
} from './DemoPage.0bae30a9.js'
import {
  d as f,
  D as p,
  m,
  o as v,
  c as h,
  w as b,
  e as z,
  F as g,
  r as y,
  E as w,
  y as _,
  n as x,
  a as C,
  p as E,
  z as H,
  i as I,
  L as S,
  _ as T
} from './index-7fd204f3.js'
import { u as V } from './index.389bd7d1.js'
import { u as k } from './use-touch.1ac9fd53.js'
const P = T(
  f({
    name: 'ZRate',
    options: { virtualHost: !0 },
    props: {
      size: o,
      icon: e('star-fill'),
      color: String,
      count: l(5),
      gutter: o,
      clearable: Boolean,
      readonly: Boolean,
      disabled: Boolean,
      voidIcon: e('star'),
      allowHalf: Boolean,
      voidColor: String,
      touchable: a,
      iconPrefix: String,
      modelValue: t(0),
      disabledColor: String
    },
    emits: ['change', 'update:modelValue'],
    setup(o, { emit: e }) {
      const l = o,
        [a, t] = s('rate')
      r(a)
      const f = S(),
        T = k(),
        P = p(() => l.readonly || l.disabled),
        j = p(() => P.value || !l.touchable),
        M = p(() =>
          Array(+l.count)
            .fill('')
            .map((o, e) =>
              (function (o, e, l, a) {
                if (o >= e) return { status: 'full', value: 1 }
                if (o + 0.5 >= e && l && !a)
                  return { status: 'half', value: 0.5 }
                if (o + 1 >= e && l && a) {
                  const l = 10 ** 10
                  return {
                    status: 'half',
                    value: Math.round((o - e + 1) * l) / l
                  }
                }
                return { status: 'void', value: 0 }
              })(l.modelValue, e + 1, l.allowHalf, l.readonly)
            )
        )
      let N,
        A,
        B = Number.MAX_SAFE_INTEGER,
        R = Number.MIN_SAFE_INTEGER
      const F = () => {
          Promise.all([u(f, '.z-rate-rect'), d(f, '.z-rate__item')]).then(
            ([o, e]) => {
              A = o
              ;(N = []),
                e.forEach((o, e) => {
                  ;(B = Math.min(o.top, B)),
                    (R = Math.max(o.top, R)),
                    l.allowHalf
                      ? N.push(
                          {
                            score: e + 0.5,
                            left: o.left,
                            top: o.top,
                            height: o.height
                          },
                          {
                            score: e + 1,
                            left: o.left + o.width / 2,
                            top: o.top,
                            height: o.height
                          }
                        )
                      : N.push({
                          score: e + 1,
                          left: o.left,
                          top: o.top,
                          height: o.height
                        })
                })
            }
          )
        },
        X = (o, e) => {
          for (let l = N.length - 1; l > 0; l--)
            if (e >= A.top && e <= A.bottom) {
              if (o > N[l].left && e >= N[l].top && e <= N[l].top + N[l].height)
                return N[l].score
            } else {
              const a = e < A.top ? B : R
              if (o > N[l].left && N[l].top === a) return N[l].score
            }
          return l.allowHalf ? 0.5 : 1
        },
        D = (o) => {
          P.value ||
            o === l.modelValue ||
            (e('update:modelValue', o), e('change', o))
        },
        G = (o) => {
          j.value || (T.start(o), F())
        },
        Y = (o) => {
          if (!j.value && (T.move(o), T.isHorizontal() && !T.isTap.value)) {
            const { clientX: e, clientY: l } = o.touches[0]
            D(X(e, l))
          }
        },
        L = (o) => {
          let e = {}
          const a = o + 1
          return (
            l.gutter && a !== +l.count && (e = { paddingRight: c(l.gutter) }), e
          )
        },
        Z = (o) => 'full' === o.status,
        q = (o) => 'void' === o.status,
        J = (o) => l.allowHalf && o.value > 0 && o.value < 1,
        K = (o) => {
          const e = {
            display: 'block',
            width: '1em',
            color: 'var(--z-rate-icon-void-color)',
            fontSize: 'var(--z-rate-icon-size)'
          }
          l.size && (e['font-size'] = c(l.size))
          let a = {}
          ;(a = Z(o) ? { color: 'var(--z-rate-icon-full-color)' } : {}),
            l.disabled && (a.color = 'var(--z-rate-icon-disabled-color)')
          let t = {}
          return (
            (t =
              l.disabled && l.disabledColor
                ? { color: l.disabledColor }
                : Z(o) && l.color
                  ? { color: l.color }
                  : l.voidColor
                    ? { color: l.voidColor }
                    : {}),
            { ...e, ...a, ...t }
          )
        },
        O = (o) => {
          const e = {
            display: 'block',
            width: o.value + 'em',
            color: 'var(--z-rate-icon-void-color)',
            fontSize: 'var(--z-rate-icon-size)'
          }
          l.size && (e['font-size'] = c(l.size))
          let a = {}
          ;(a = q(o) ? {} : { color: 'var(--z-rate-icon-full-color)' }),
            l.disabled && (a.color = 'var(--z-rate-icon-disabled-color)')
          let t = {}
          return (
            (t =
              l.disabled && l.disabledColor
                ? { color: l.disabledColor }
                : q(o) && l.voidColor
                  ? { color: l.voidColor }
                  : l.color
                    ? { color: l.color }
                    : {}),
            { ...e, ...a, ...t }
          )
        }
      return (
        V(() => l.modelValue),
        (e, a) => {
          const s = i(m('z-icon'), n),
            r = I
          return (
            v(),
            h(
              r,
              {
                class: x([
                  'z-rate-rect',
                  w(t)({ readonly: l.readonly, disabled: l.disabled })
                ]),
                onTouchstartPassive: G,
                onTouchmove: H(Y, ['stop', 'prevent'])
              },
              {
                default: b(() => [
                  (v(!0),
                  z(
                    g,
                    null,
                    y(
                      w(M),
                      (e, a) => (
                        v(),
                        h(
                          r,
                          {
                            key: a,
                            style: _(L(a)),
                            class: x(w(t)('item')),
                            onClick: (o) =>
                              ((o, e) => {
                                const a = o.touches[0],
                                  t = e + 1
                                F()
                                let s = l.allowHalf
                                  ? X(a.clientX, a.clientY)
                                  : t
                                l.clearable &&
                                  T.isTap.value &&
                                  s === l.modelValue &&
                                  (s = 0),
                                  D(s)
                              })(o, a)
                          },
                          {
                            default: b(() => [
                              C(
                                s,
                                {
                                  name: Z(e) ? o.icon : o.voidIcon,
                                  'custom-style': K(e),
                                  'class-prefix': o.iconPrefix
                                },
                                null,
                                8,
                                ['name', 'custom-style', 'class-prefix']
                              ),
                              J(e)
                                ? (v(),
                                  h(
                                    s,
                                    {
                                      key: 0,
                                      'custom-style': O(e),
                                      'badge-wrapper-style': {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        overflow: 'hidden',
                                        pointerEvents: 'none'
                                      },
                                      name: q(e) ? o.voidIcon : o.icon,
                                      'class-prefix': o.iconPrefix
                                    },
                                    null,
                                    8,
                                    [
                                      'custom-style',
                                      'badge-wrapper-style',
                                      'name',
                                      'class-prefix'
                                    ]
                                  ))
                                : E('', !0)
                            ]),
                            _: 2
                          },
                          1032,
                          ['style', 'class', 'onClick']
                        )
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              },
              8,
              ['class', 'onTouchmove']
            )
          )
        }
      )
    }
  }),
  [['__scopeId', 'data-v-26183470']]
)
export { P as _ }
