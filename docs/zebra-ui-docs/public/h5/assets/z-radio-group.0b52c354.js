import { _ as e } from './z-checker.a83e3fe8.js'
import {
  d as o,
  D as a,
  m as s,
  o as l,
  c as i,
  K as t,
  E as n,
  w as d,
  x as r,
  L as c,
  l as m,
  n as u,
  i as p,
  _ as b
} from './index-7fd204f3.js'
import { D as h, n as g, i as V, j as f, r as S } from './DemoPage.0bae30a9.js'
import { u as k } from './useParent.5b9c05b5.js'
import { u as j } from './useChildren.fb2421ae.js'
import { u as z } from './index.389bd7d1.js'
const v = o({
    name: 'ZRadio',
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
      iconName: String,
      customStyle: Object
    },
    emits: ['update:modelValue'],
    setup(o, { emit: m }) {
      const u = o,
        [p, b] = V('radio')
      f(p)
      const h = c(),
        { parent: g } = k('z-radio-group'),
        j = a(() => (g ? g.props.modelValue : u.modelValue) === u.name),
        z = () => {
          g ? g.updateValue(u.name) : m('update:modelValue', u.name)
        }
      return (a, c) => {
        const m = S(s('z-checker'), e)
        return (
          l(),
          i(
            m,
            {
              bem: n(b),
              role: 'radio',
              parent: n(g),
              checked: n(j),
              onToggle: z,
              name: o.name,
              disabled: o.disabled,
              'icon-size': o.iconSize,
              'icon-name': o.iconName,
              'model-value': o.modelValue,
              'checked-color': o.checkedColor,
              'label-position': o.labelPosition,
              'label-disabled': o.labelDisabled,
              shape: o.shape,
              'component-slot': n(h).slots,
              'custom-style': o.customStyle
            },
            t({ default: d(() => [r(a.$slots, 'default')]), _: 2 }, [
              n(h).slots.icon
                ? { name: 'icon', fn: d(() => [r(a.$slots, 'icon')]), key: '0' }
                : void 0
            ]),
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
              'component-slot',
              'custom-style'
            ]
          )
        )
      }
    }
  }),
  _ = b(
    o({
      name: 'ZRadioGroup',
      options: { virtualHost: !0 },
      props: {
        shape: String,
        disabled: Boolean,
        iconSize: g,
        direction: String,
        modelValue: h,
        checkedColor: String
      },
      emits: ['change', 'update:modelValue'],
      setup(e, { emit: o }) {
        const a = e,
          [s, t] = V('radio-group'),
          { linkChildren: c } = j(s)
        return (
          m(
            () => a.modelValue,
            (e) => o('change', e)
          ),
          c({ props: a, updateValue: (e) => o('update:modelValue', e) }),
          z(() => a.modelValue),
          (e, o) => {
            const s = p
            return (
              l(),
              i(
                s,
                { class: u(n(t)([a.direction])), role: 'radiogroup' },
                {
                  default: d(() => [r(e.$slots, 'default', {}, void 0, !0)]),
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
    [['__scopeId', 'data-v-1f80e8da']]
  )
export { v as _, _ as a }
