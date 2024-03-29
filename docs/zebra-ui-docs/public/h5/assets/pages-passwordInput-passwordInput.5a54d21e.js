import {
  d as e,
  D as l,
  o as a,
  c as u,
  w as s,
  a as o,
  n as t,
  E as n,
  e as r,
  F as d,
  r as v,
  y as c,
  b as f,
  t as i,
  p as m,
  i as p,
  _ as h,
  k as w,
  l as _,
  m as g,
  G as y
} from './index-7fd204f3.js'
import {
  t as V,
  s as k,
  n as b,
  m as I,
  i as B,
  j as F,
  Z as j,
  $ as P,
  y as U,
  r as z,
  a as D
} from './DemoPage.0bae30a9.js'
import { _ as x } from './z-number-keyboard.98560cb1.js'
import './use-touch.1ac9fd53.js'
const C = h(
    e({
      name: 'ZPasswordInput',
      options: { virtualHost: !0 },
      props: {
        info: String,
        mask: V,
        value: k(''),
        gutter: b,
        length: I(6),
        focused: Boolean,
        errorInfo: String
      },
      emits: ['focus'],
      setup(e, { emit: h }) {
        const w = e,
          [_, g] = B('password-input')
        F(_)
        const y = (e) => {
            h('focus', e)
          },
          V = l(() => w.errorInfo || w.info),
          k = l(() => +w.length),
          b = (e) => w.value[e],
          I = (e) => 0 !== e && !w.gutter,
          z = (e) => w.focused && e === w.value.length,
          D = (e) => {
            if (0 !== e && w.gutter) return { marginLeft: U(w.gutter) }
          }
        return (l, h) => {
          const _ = p
          return (
            a(),
            u(
              _,
              { class: t(n(g)()) },
              {
                default: s(() => [
                  o(
                    _,
                    {
                      class: t([n(g)('security'), { [n(j)]: !w.gutter }]),
                      onClickPassive: y
                    },
                    {
                      default: s(() => [
                        (a(!0),
                        r(
                          d,
                          null,
                          v(
                            n(k),
                            (l, o) => (
                              a(),
                              u(
                                _,
                                {
                                  key: o,
                                  class: t([
                                    { [n(P)]: I(o) },
                                    n(g)('item', { focus: z(o) })
                                  ]),
                                  style: c(D(o))
                                },
                                {
                                  default: s(() => [
                                    e.mask
                                      ? (a(),
                                        u(
                                          _,
                                          {
                                            key: 0,
                                            class: t(n(g)('security--mask')),
                                            style: c({
                                              visibility: b(o)
                                                ? 'visible'
                                                : 'hidden'
                                            })
                                          },
                                          null,
                                          8,
                                          ['class', 'style']
                                        ))
                                      : (a(),
                                        r(d, { key: 1 }, [f(i(b(o)), 1)], 64)),
                                    z(o)
                                      ? (a(),
                                        u(
                                          _,
                                          { key: 2, class: t(n(g)('cursor')) },
                                          null,
                                          8,
                                          ['class']
                                        ))
                                      : m('', !0)
                                  ]),
                                  _: 2
                                },
                                1032,
                                ['class', 'style']
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
                  n(V)
                    ? (a(),
                      u(
                        _,
                        {
                          key: 0,
                          class: t(n(g)(w.errorInfo ? 'error-info' : 'info'))
                        },
                        { default: s(() => [f(i(n(V)), 1)]), _: 1 },
                        8,
                        ['class']
                      ))
                    : m('', !0)
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
    [['__scopeId', 'data-v-b5a1e34f']]
  ),
  S = e({
    __name: 'passwordInput',
    setup(e) {
      const l = w('123'),
        t = w('123'),
        n = w('123'),
        r = w('123'),
        d = w('123'),
        v = w(!1),
        c = w(!1),
        f = w(!1),
        i = w(!1),
        m = w(!1),
        h = w('')
      return (
        _(d, (e) => {
          6 === e.length && '123456' !== e
            ? (h.value = '密码错误')
            : (h.value = '')
        }),
        (e, w) => {
          const _ = z(g('z-password-input'), C),
            V = z(g('z-number-keyboard'), x),
            k = y('demo-block'),
            b = p,
            I = z(g('DemoPage'), D)
          return (
            a(),
            u(
              I,
              { title: 'PasswordInput' },
              {
                default: s(() => [
                  o(
                    b,
                    { class: 'demo-password-input' },
                    {
                      default: s(() => [
                        o(
                          k,
                          { title: '基础用法' },
                          {
                            default: s(() => [
                              o(
                                _,
                                {
                                  value: l.value,
                                  focused: v.value,
                                  onFocus:
                                    w[0] || (w[0] = (e) => (v.value = !0))
                                },
                                null,
                                8,
                                ['value', 'focused']
                              ),
                              o(
                                V,
                                {
                                  modelValue: l.value,
                                  'onUpdate:modelValue':
                                    w[1] || (w[1] = (e) => (l.value = e)),
                                  show: v.value,
                                  onBlur: w[2] || (w[2] = (e) => (v.value = !1))
                                },
                                null,
                                8,
                                ['modelValue', 'show']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        o(
                          k,
                          { title: '自定义长度' },
                          {
                            default: s(() => [
                              o(
                                _,
                                {
                                  value: t.value,
                                  length: 4,
                                  focused: c.value,
                                  onFocus:
                                    w[3] || (w[3] = (e) => (c.value = !0))
                                },
                                null,
                                8,
                                ['value', 'focused']
                              ),
                              o(
                                V,
                                {
                                  modelValue: t.value,
                                  'onUpdate:modelValue':
                                    w[4] || (w[4] = (e) => (t.value = e)),
                                  show: c.value,
                                  onBlur: w[5] || (w[5] = (e) => (c.value = !1))
                                },
                                null,
                                8,
                                ['modelValue', 'show']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        o(
                          k,
                          { title: '格子间距' },
                          {
                            default: s(() => [
                              o(
                                _,
                                {
                                  value: n.value,
                                  gutter: 10,
                                  focused: f.value,
                                  onFocus:
                                    w[6] || (w[6] = (e) => (f.value = !0))
                                },
                                null,
                                8,
                                ['value', 'focused']
                              ),
                              o(
                                V,
                                {
                                  modelValue: n.value,
                                  'onUpdate:modelValue':
                                    w[7] || (w[7] = (e) => (n.value = e)),
                                  show: f.value,
                                  onBlur: w[8] || (w[8] = (e) => (f.value = !1))
                                },
                                null,
                                8,
                                ['modelValue', 'show']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        o(
                          k,
                          { title: '明文展示' },
                          {
                            default: s(() => [
                              o(
                                _,
                                {
                                  value: r.value,
                                  mask: !1,
                                  focused: i.value,
                                  onFocus:
                                    w[9] || (w[9] = (e) => (i.value = !0))
                                },
                                null,
                                8,
                                ['value', 'focused']
                              ),
                              o(
                                V,
                                {
                                  modelValue: r.value,
                                  'onUpdate:modelValue':
                                    w[10] || (w[10] = (e) => (r.value = e)),
                                  show: i.value,
                                  onBlur:
                                    w[11] || (w[11] = (e) => (i.value = !1))
                                },
                                null,
                                8,
                                ['modelValue', 'show']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        o(
                          k,
                          { title: '提示信息' },
                          {
                            default: s(() => [
                              o(
                                _,
                                {
                                  value: d.value,
                                  info: '密码为 6 位数字',
                                  'error-info': h.value,
                                  focused: m.value,
                                  onFocus:
                                    w[12] || (w[12] = (e) => (m.value = !0))
                                },
                                null,
                                8,
                                ['value', 'error-info', 'focused']
                              ),
                              o(
                                V,
                                {
                                  modelValue: d.value,
                                  'onUpdate:modelValue':
                                    w[13] || (w[13] = (e) => (d.value = e)),
                                  show: m.value,
                                  onBlur:
                                    w[14] || (w[14] = (e) => (m.value = !1))
                                },
                                null,
                                8,
                                ['modelValue', 'show']
                              )
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
export { S as default }
