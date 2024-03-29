import {
  n as a,
  D as e,
  i as o,
  j as s,
  r as l,
  d as t,
  y as i
} from './DemoPage.0bae30a9.js'
import {
  d as n,
  D as d,
  m as c,
  o as r,
  c as u,
  w as p,
  a as g,
  n as m,
  E as v,
  p as f,
  x as y,
  y as V,
  L as h,
  i as b,
  _ as C
} from './index-7fd204f3.js'
import { u as w } from './index.389bd7d1.js'
const k = C(
  n({
    name: 'ZSwitch',
    options: { virtualHost: !0 },
    props: {
      size: a,
      loading: Boolean,
      disabled: Boolean,
      modelValue: e,
      activeColor: String,
      inactiveColor: String,
      activeValue: { type: e, default: !0 },
      inactiveValue: { type: e, default: !1 }
    },
    emits: ['change', 'update:modelValue'],
    setup(a, { emit: e }) {
      const n = a,
        [C, k] = o('switch')
      s(C)
      const _ = () => n.modelValue === n.activeValue,
        z = h(),
        j = () => {
          if (!n.disabled && !n.loading) {
            const a = _() ? n.inactiveValue : n.activeValue
            e('update:modelValue', a), e('change', a)
          }
        }
      w(() => n.modelValue)
      const x = d(() => {
        const a = {
          top: '25%',
          left: '25%',
          width: '50%',
          height: '50%',
          lineHeight: '1'
        }
        return _() && (a.color = 'var(--z-switch-on-background)'), a
      })
      return (e, o) => {
        const s = l(c('z-loading'), t),
          d = b
        return (
          r(),
          u(
            d,
            {
              class: m(
                v(k)({ on: _(), loading: a.loading, disabled: a.disabled })
              ),
              style: V({
                fontSize: v(i)(a.size),
                backgroundColor: _() ? a.activeColor : a.inactiveColor
              }),
              onClick: j
            },
            {
              default: p(() => [
                g(
                  d,
                  { class: m(v(k)('node')) },
                  {
                    default: p(() => [
                      n.loading
                        ? (r(),
                          u(
                            s,
                            {
                              key: 0,
                              color: _() ? n.activeColor : n.inactiveColor,
                              'wrapper-style': v(x)
                            },
                            null,
                            8,
                            ['color', 'wrapper-style']
                          ))
                        : f('', !0),
                      v(z).slots.node
                        ? y(e.$slots, 'node', { key: 1 }, void 0, !0)
                        : f('', !0)
                    ]),
                    _: 3
                  },
                  8,
                  ['class']
                ),
                y(e.$slots, 'background', {}, void 0, !0)
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
  [['__scopeId', 'data-v-4e2a6b33']]
)
export { k as _ }
