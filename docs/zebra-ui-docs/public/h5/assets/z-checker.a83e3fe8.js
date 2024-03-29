import {
  d as o,
  D as e,
  m as r,
  o as l,
  c,
  w as a,
  e as i,
  F as n,
  E as t,
  n as d,
  x as s,
  p as b,
  a as u,
  y as k,
  z as m,
  L as h,
  C as p,
  i as g,
  _ as z
} from './index-7fd204f3.js'
import {
  D as v,
  n as y,
  R as S,
  t as C,
  r as f,
  _ as x,
  y as _
} from './DemoPage.0bae30a9.js'
const w = z(
  o({
    name: 'ZChecker',
    options: { virtualHost: !0 },
    props: {
      name: v,
      disabled: Boolean,
      iconSize: y,
      modelValue: v,
      checkedColor: String,
      labelPosition: String,
      labelDisabled: Boolean,
      bem: S(Function),
      role: String,
      shape: String,
      parent: Object,
      checked: Boolean,
      bindGroup: C,
      indeterminate: { type: Boolean, default: null },
      iconName: String,
      componentSlot: Object,
      customStyle: Object
    },
    emits: ['click', 'toggle'],
    setup(o, { emit: z }) {
      const v = o,
        y = h(),
        S = (o) => {
          if (v.parent && v.bindGroup) return v.parent.props[o]
        },
        C = e(() => {
          if (v.parent && v.bindGroup) {
            const o = S('disabled') || v.disabled
            if ('checkbox' === v.role) {
              const e = S('modelValue').length,
                r = S('max'),
                l = r && e >= +r
              return o || (l && !v.checked)
            }
            return o
          }
          return v.disabled
        }),
        w = e(() => v.shape || S('shape') || 'round'),
        D = e(() => S('direction')),
        P = e(() => {
          let o = {},
            e = {},
            r = {},
            l = {}
          'checkbox' === v.role
            ? ((o = {
                display: 'block',
                boxSizing: 'border-box',
                width: '1.25em',
                height: '1.25em',
                color: 'transparent',
                fontSize: '0.8em',
                lineHeight: '1.25',
                textAlign: 'center',
                border: '1rpx solid var(--z-checkbox-border-color)',
                transitionDuration: 'var(--z-checkbox-duration)',
                transitionProperty: 'color, border-color, background-color'
              }),
              'round' == w.value && (o['border-radius'] = '100%'),
              (e = v.indeterminate
                ? {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--z-white)',
                    borderColor: 'var(--z-checkbox-checked-icon-color)',
                    backgroundColor: 'var(--z-checkbox-checked-icon-color)'
                  }
                : {}),
              (r = v.checked
                ? {
                    color: 'var(--z-white)',
                    backgroundColor: 'var(--z-checkbox-checked-icon-color)',
                    borderColor: 'var(--z-checkbox-checked-icon-color)'
                  }
                : {}),
              C.value
                ? ((l = {
                    'background-color': 'var(--z-checkbox-disabled-background)',
                    'border-color': 'var(--z-checkbox-disabled-icon-color)'
                  }),
                  v.checked &&
                    (l.color = 'var(--z-checkbox-disabled-icon-color)'))
                : (l = {}))
            : ((o = {
                display: 'block',
                boxSizing: 'border-box',
                width: '1.25em',
                height: '1.25em',
                color: 'transparent',
                fontSize: '0.8em',
                lineHeight: '1.25',
                textAlign: 'center',
                border: '1rpx solid var(--z-radio-border-color)',
                transitionDuration: 'var(--z-radio-duration)',
                transitionProperty: 'color, border-color, background-color'
              }),
              'round' == w.value && (o['border-radius'] = '100%'),
              (r = v.checked
                ? {
                    color: 'var(--z-white)',
                    backgroundColor: 'var(--z-radio-checked-icon-color)',
                    borderColor: 'var(--z-radio-checked-icon-color)'
                  }
                : {}),
              C.value
                ? ((l = {
                    'background-color': 'var(--z-radio-disabled-background)',
                    'border-color': 'var(--z-radio-disabled-icon-color)'
                  }),
                  v.checked && (l.color = 'var(--z-radio-disabled-icon-color)'))
                : (l = {}))
          const c = v.checkedColor || S('checkedColor')
          return c && v.checked && !C.value
            ? { ...o, ...e, ...r, ...l, borderColor: c, backgroundColor: c }
            : { ...o, ...e, ...r, ...l }
        }),
        j = (o) => {
          C.value || v.labelDisabled || z('toggle'), z('click', o)
        },
        N = (o) => {
          C.value || z('toggle'), z('click', o)
        }
      return (e, h) => {
        const z = p,
          B = f(r('z-icon'), x),
          $ = g
        return (
          l(),
          c(
            $,
            {
              class: d(
                v.bem([
                  { disabled: t(C), 'label-disabled': v.labelDisabled },
                  t(D)
                ])
              ),
              style: k(o.customStyle),
              onClick: j
            },
            {
              default: a(() => {
                var r, h
                return [
                  'left' === v.labelPosition
                    ? (l(),
                      i(
                        n,
                        { key: 0 },
                        [
                          t(y).slots.default
                            ? (l(),
                              c(
                                z,
                                {
                                  key: 0,
                                  class: d(
                                    v.bem('label', [
                                      v.labelPosition,
                                      { disabled: t(C) }
                                    ])
                                  )
                                },
                                {
                                  default: a(() => [
                                    s(e.$slots, 'default', {}, void 0, !0)
                                  ]),
                                  _: 3
                                },
                                8,
                                ['class']
                              ))
                            : b('', !0),
                          u(
                            $,
                            {
                              class: d(
                                o.bem('icon', [
                                  t(w),
                                  {
                                    disabled: t(C),
                                    checked: o.checked,
                                    indeterminate: o.indeterminate
                                  }
                                ])
                              ),
                              style: k(
                                'dot' !== t(w)
                                  ? {
                                      fontSize: t(_)(
                                        v.iconSize || S('iconSize')
                                      )
                                    }
                                  : {
                                      width: t(_)(v.iconSize || S('iconSize')),
                                      height: t(_)(v.iconSize || S('iconSize')),
                                      borderColor:
                                        null == (r = t(P))
                                          ? void 0
                                          : r.borderColor
                                    }
                              )
                            },
                            {
                              default: a(() => {
                                var r
                                return [
                                  o.componentSlot && o.componentSlot.icon
                                    ? s(
                                        e.$slots,
                                        'icon',
                                        { key: 0 },
                                        void 0,
                                        !0
                                      )
                                    : 'dot' !== t(w)
                                      ? (l(),
                                        c(
                                          $,
                                          { key: 1, onClick: m(N, ['stop']) },
                                          {
                                            default: a(() => [
                                              u(
                                                B,
                                                {
                                                  name: o.indeterminate
                                                    ? 'minus'
                                                    : S('iconName') ||
                                                      o.iconName ||
                                                      'check-small',
                                                  'custom-style': t(P),
                                                  'badge-wrapper-style': {
                                                    display: 'block'
                                                  }
                                                },
                                                null,
                                                8,
                                                ['name', 'custom-style']
                                              )
                                            ]),
                                            _: 1
                                          },
                                          8,
                                          ['onClick']
                                        ))
                                      : (l(),
                                        c(
                                          $,
                                          {
                                            key: 2,
                                            class: d(o.bem('icon--dot__icon')),
                                            style: k({
                                              backgroundColor:
                                                null == (r = t(P))
                                                  ? void 0
                                                  : r.backgroundColor
                                            })
                                          },
                                          null,
                                          8,
                                          ['class', 'style']
                                        ))
                                ]
                              }),
                              _: 3
                            },
                            8,
                            ['class', 'style']
                          )
                        ],
                        64
                      ))
                    : (l(),
                      i(
                        n,
                        { key: 1 },
                        [
                          u(
                            $,
                            {
                              class: d(
                                o.bem('icon', [
                                  t(w),
                                  {
                                    disabled: t(C),
                                    checked: o.checked,
                                    indeterminate: o.indeterminate
                                  }
                                ])
                              ),
                              style: k(
                                'dot' !== t(w)
                                  ? {
                                      fontSize: t(_)(
                                        v.iconSize || S('iconSize')
                                      )
                                    }
                                  : {
                                      width: t(_)(v.iconSize || S('iconSize')),
                                      height: t(_)(v.iconSize || S('iconSize')),
                                      borderColor:
                                        null == (h = t(P))
                                          ? void 0
                                          : h.borderColor
                                    }
                              )
                            },
                            {
                              default: a(() => {
                                var r
                                return [
                                  o.componentSlot && o.componentSlot.icon
                                    ? s(
                                        e.$slots,
                                        'icon',
                                        { key: 0 },
                                        void 0,
                                        !0
                                      )
                                    : 'dot' !== t(w)
                                      ? (l(),
                                        c(
                                          $,
                                          { key: 1, onClick: m(N, ['stop']) },
                                          {
                                            default: a(() => [
                                              u(
                                                B,
                                                {
                                                  name: o.indeterminate
                                                    ? 'minus'
                                                    : S('iconName') ||
                                                      o.iconName ||
                                                      'check-small',
                                                  'custom-style': t(P),
                                                  'badge-wrapper-style': {
                                                    display: 'block'
                                                  }
                                                },
                                                null,
                                                8,
                                                ['name', 'custom-style']
                                              )
                                            ]),
                                            _: 1
                                          },
                                          8,
                                          ['onClick']
                                        ))
                                      : (l(),
                                        c(
                                          $,
                                          {
                                            key: 2,
                                            class: d(o.bem('icon--dot__icon')),
                                            style: k({
                                              backgroundColor:
                                                null == (r = t(P))
                                                  ? void 0
                                                  : r.backgroundColor
                                            })
                                          },
                                          null,
                                          8,
                                          ['class', 'style']
                                        ))
                                ]
                              }),
                              _: 3
                            },
                            8,
                            ['class', 'style']
                          ),
                          t(y).slots.default
                            ? (l(),
                              c(
                                $,
                                {
                                  key: 0,
                                  class: d(
                                    v.bem('label', [
                                      v.labelPosition,
                                      { disabled: t(C) }
                                    ])
                                  )
                                },
                                {
                                  default: a(() => [
                                    s(e.$slots, 'default', {}, void 0, !0)
                                  ]),
                                  _: 3
                                },
                                8,
                                ['class']
                              ))
                            : b('', !0)
                        ],
                        64
                      ))
                ]
              }),
              _: 3
            },
            8,
            ['class', 'style']
          )
        )
      }
    }
  }),
  [['__scopeId', 'data-v-c9a2b2f0']]
)
export { w as _ }
