import { _ as e } from './z-checker.a83e3fe8.js'
import {
  d as o,
  D as a,
  l,
  m as s,
  o as n,
  c as i,
  K as t,
  E as d,
  w as c,
  x as r,
  L as p,
  _ as u,
  n as m,
  i as b
} from './index-7fd204f3.js'
import {
  D as h,
  n as g,
  t as k,
  i as f,
  j as V,
  v as x,
  r as v,
  s as S,
  l as _
} from './DemoPage.0bae30a9.js'
import { u as j } from './useParent.5b9c05b5.js'
import { u as z } from './index.389bd7d1.js'
import { u as G } from './useChildren.fb2421ae.js'
const y = u(
    o({
      name: 'ZCheckbox',
      options: { virtualHost: !0 },
      props: {
        name: h,
        disabled: Boolean,
        iconSize: g,
        modelValue: h,
        checkedColor: String,
        labelPosition: String,
        labelDisabled: Boolean,
        shape: String,
        bindGroup: k,
        indeterminate: { type: Boolean, default: null },
        iconName: String,
        customStyle: Object
      },
      emits: ['change', 'update:modelValue', 'click'],
      setup(o, { expose: u, emit: m }) {
        const b = o,
          [h, g] = f('checkbox')
        V(h)
        const k = p(),
          { parent: S } = j('z-checkbox-group'),
          _ = a(() =>
            S && b.bindGroup
              ? -1 !== S.props.modelValue.indexOf(b.name)
              : !!b.modelValue
          ),
          G = (e = !_.value) => {
            S && b.bindGroup
              ? ((e) => {
                  const { name: o } = b,
                    { max: a, modelValue: l } = S.props,
                    s = l.slice()
                  if (e)
                    (a && s.length >= +a) ||
                      s.includes(o) ||
                      (s.push(o), b.bindGroup && S.updateValue(s))
                  else {
                    const e = s.indexOf(o)
                    ;-1 !== e &&
                      (s.splice(e, 1), b.bindGroup && S.updateValue(s))
                  }
                })(e)
              : m('update:modelValue', e),
              null !== b.indeterminate && m('change', e)
          }
        return (
          l(
            () => b.modelValue,
            (e) => {
              null === b.indeterminate && m('change', e)
            }
          ),
          x({ toggle: G, props: b, checked: _ }),
          u({ toggle: G, props: b, checked: _ }),
          z(() => b.modelValue),
          (a, l) => {
            const p = v(s('z-checker'), e)
            return (
              n(),
              i(
                p,
                {
                  bem: d(g),
                  role: 'checkbox',
                  parent: d(S),
                  checked: d(_),
                  onToggle: G,
                  name: o.name,
                  disabled: o.disabled,
                  'icon-size': o.iconSize,
                  'icon-name': o.iconName,
                  'model-value': o.modelValue,
                  'checked-color': o.checkedColor,
                  'label-position': o.labelPosition,
                  'label-disabled': o.labelDisabled,
                  shape: o.shape,
                  'bind-group': o.bindGroup,
                  indeterminate: o.indeterminate,
                  'component-slot': d(k).slots,
                  'custom-style': o.customStyle
                },
                t(
                  {
                    default: c(() => [r(a.$slots, 'default', {}, void 0, !0)]),
                    _: 2
                  },
                  [
                    d(k).slots.icon
                      ? {
                          name: 'icon',
                          fn: c(() => [r(a.$slots, 'icon', {}, void 0, !0)]),
                          key: '0'
                        }
                      : void 0
                  ]
                ),
                1032,
                [
                  'bem',
                  'parent',
                  'checked',
                  'name',
                  'disabled',
                  'icon-size',
                  'icon-name',
                  'model-value',
                  'checked-color',
                  'label-position',
                  'label-disabled',
                  'shape',
                  'bind-group',
                  'indeterminate',
                  'component-slot',
                  'custom-style'
                ]
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-7416e96f']]
  ),
  C = u(
    o({
      name: 'ZCheckboxGroup',
      options: { virtualHost: !0 },
      props: {
        max: g,
        shape: S('round'),
        disabled: Boolean,
        iconSize: g,
        direction: String,
        modelValue: _(),
        checkedColor: String
      },
      emits: ['change', 'update:modelValue'],
      setup(e, { expose: o, emit: a }) {
        const s = e,
          [t, p] = f('checkbox-group'),
          { children: u, linkChildren: h } = G(t),
          g = (e) => a('update:modelValue', e),
          k = (e = {}) => {
            'boolean' == typeof e && (e = { checked: e })
            const { checked: o, skipDisabled: a } = e,
              l = u
                .filter(
                  (e) =>
                    !!e.props.bindGroup &&
                    (e.props.disabled && a
                      ? e.checked.value
                      : o || !e.checked.value)
                )
                .map((e) => e.name)
            g(l)
          }
        return (
          l(
            () => s.modelValue,
            (e) => a('change', e)
          ),
          x({ toggleAll: k }),
          o({ toggleAll: k }),
          z(() => s.modelValue),
          h({ props: s, updateValue: g }),
          (e, o) => {
            const a = b
            return (
              n(),
              i(
                a,
                { class: m(d(p)([s.direction])) },
                {
                  default: c(() => [r(e.$slots, 'default', {}, void 0, !0)]),
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
    [['__scopeId', 'data-v-9e62570f']]
  )
export { y as _, C as a }
