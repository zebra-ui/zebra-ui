import { _ as e } from './z-cell.365e08ec.js'
import {
  k as l,
  l as a,
  d as t,
  D as s,
  m as o,
  o as i,
  c as r,
  w as n,
  a as d,
  E as u,
  K as c,
  x as p,
  af as m,
  n as f,
  y as v,
  ag as b,
  p as z,
  L as _,
  ae as g,
  i as w,
  _ as y,
  G as k,
  b as x
} from './index-7fd204f3.js'
import {
  n as h,
  t as V,
  D as S,
  i as C,
  j as $,
  v as B,
  r as D,
  A as j,
  x as A,
  E as q,
  B as P,
  _ as U,
  b as E,
  a as N
} from './DemoPage.0bae30a9.js'
import { u as I } from './useParent.5b9c05b5.js'
import { u as L } from './useChildren.fb2421ae.js'
const Z = y(
    t({
      name: 'ZCollapseItem',
      options: { virtualHost: !0 },
      props: {
        icon: String,
        size: String,
        title: h,
        value: h,
        label: h,
        center: Boolean,
        border: V,
        iconPrefix: String,
        valueClass: S,
        valueStyle: null,
        labelClass: S,
        titleClass: S,
        titleStyle: null,
        arrowDirection: String,
        required: { type: [Boolean, String], default: null },
        clickable: { type: Boolean, default: null },
        name: h,
        isLink: V,
        disabled: Boolean,
        readonly: Boolean,
        lazyRender: V
      },
      setup(t, { expose: y }) {
        const k = t,
          [x, h] = C('collapse-item')
        $(x)
        const V = _(),
          S = l(),
          { parent: P, index: U } = I('z-collapse'),
          E = s(() => (k.name ? k.name : U.value)),
          N = s(() => P.isExpanded(E.value)),
          L = l(N.value),
          Z = (function (e) {
            const t = l(!1)
            return (
              a(
                e,
                (e) => {
                  e && (t.value = e)
                },
                { immediate: !0 }
              ),
              t
            )
          })(() => L.value || !k.lazyRender),
          H = l({ height: '0' }),
          R = () => {
            N.value ? S.value && (H.value.height = '') : (L.value = !1)
          }
        a(
          N,
          (e, l) => {
            if (null === l) return
            e && (L.value = !0)
            ;(e ? g : j)(() => {
              A(V, '.z-collapse-content-rect').then((l) => {
                if (l) {
                  const a = l.height
                  if (a) {
                    const l = `${a}px`
                    ;(H.value.height = e ? '0' : l),
                      q(() => {
                        H.value.height = e ? l : '0'
                      })
                  } else R()
                }
              })
            })
          },
          { immediate: !0 }
        )
        const G = (e = !N.value) => {
            P.toggle(E.value, e)
          },
          K = () => {
            k.disabled || k.readonly || G()
          },
          T = s(() => {
            const e = {
              transform: 'rotate(90deg) translateZ(0)',
              transition: 'transform var(--z-collapse-item-duration)'
            }
            return (
              N.value && (e.transform = ' rotate(-90deg)'),
              k.disabled &&
                (e.color = 'var(--z-collapse-item-title-disabled-color)'),
              { ...e }
            )
          }),
          F = s(() => {
            const e = { position: 'relative' }
            return (
              k.disabled &&
                ((e.color = 'var(--z-collapse-item-title-disabled-color)'),
                (e.cursor = 'not-allowed')),
              { ...e }
            )
          })
        return (
          B({ toggle: G, expanded: N, itemName: E }),
          y({ toggle: G, expanded: N, itemName: E }),
          (l, a) => {
            const s = D(o('z-cell'), e),
              _ = w
            return (
              i(),
              r(
                _,
                { class: f([u(h)({ border: u(U) && k.border })]) },
                {
                  default: n(() => [
                    d(
                      s,
                      {
                        'custom-class': u(h)('title', {
                          disabled: t.disabled,
                          expanded: u(N),
                          borderless: !t.border
                        }),
                        'custom-style': u(F),
                        icon: k.icon,
                        size: k.size,
                        title: k.title,
                        value: k.value,
                        label: k.label,
                        center: k.center,
                        border: k.border,
                        'icon-prefix': k.iconPrefix,
                        'value-class': k.valueClass,
                        'value-style': k.valueStyle,
                        'label-class': k.labelClass,
                        'title-class': k.titleClass,
                        'title-style': k.titleStyle,
                        'arrow-direction': k.arrowDirection,
                        required: k.required,
                        'is-link': k.isLink,
                        clickable: k.clickable,
                        'right-icon-style': u(T),
                        'component-slots': u(V).slots,
                        onClick: K
                      },
                      c({ _: 2 }, [
                        u(V).slots.title
                          ? {
                              name: 'title',
                              fn: n(() => [
                                p(l.$slots, 'title', {}, void 0, !0)
                              ]),
                              key: '0'
                            }
                          : void 0,
                        u(V).slots.icon
                          ? {
                              name: 'icon',
                              fn: n(() => [
                                p(l.$slots, 'icon', {}, void 0, !0)
                              ]),
                              key: '1'
                            }
                          : void 0,
                        u(V).slots.value
                          ? {
                              name: 'default',
                              fn: n(() => [
                                p(l.$slots, 'value', {}, void 0, !0)
                              ]),
                              key: '2'
                            }
                          : void 0,
                        u(V).slots.label
                          ? {
                              name: 'label',
                              fn: n(() => [
                                p(l.$slots, 'label', {}, void 0, !0)
                              ]),
                              key: '3'
                            }
                          : void 0,
                        u(V).slots['right-icon']
                          ? {
                              name: 'right-icon',
                              fn: n(() => [
                                p(l.$slots, 'right-icon', {}, void 0, !0)
                              ]),
                              key: '4'
                            }
                          : void 0
                      ]),
                      1032,
                      [
                        'custom-class',
                        'custom-style',
                        'icon',
                        'size',
                        'title',
                        'value',
                        'label',
                        'center',
                        'border',
                        'icon-prefix',
                        'value-class',
                        'value-style',
                        'label-class',
                        'title-class',
                        'title-style',
                        'arrow-direction',
                        'required',
                        'is-link',
                        'clickable',
                        'right-icon-style',
                        'component-slots'
                      ]
                    ),
                    u(Z)
                      ? m(
                          (i(),
                          r(
                            _,
                            {
                              key: 0,
                              class: f([
                                'z-collapse-item-rect',
                                u(h)('wrapper')
                              ]),
                              style: v([H.value]),
                              onTransitionend: R
                            },
                            {
                              default: n(() => [
                                d(
                                  _,
                                  {
                                    class: f([
                                      'z-collapse-content-rect',
                                      u(h)('content')
                                    ])
                                  },
                                  {
                                    default: n(() => [
                                      p(l.$slots, 'default', {}, void 0, !0)
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  ['class']
                                )
                              ]),
                              _: 3
                            },
                            8,
                            ['class', 'style']
                          )),
                          [[b, L.value]]
                        )
                      : z('', !0)
                  ]),
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
    [['__scopeId', 'data-v-21fa6de3']]
  ),
  H = t({
    name: 'ZCollapse',
    options: { virtualHost: !0 },
    props: {
      border: V,
      accordion: Boolean,
      modelValue: { type: [String, Number, Array], default: '' }
    },
    emits: ['change', 'update:modelValue'],
    setup(e, { expose: l, emit: a }) {
      const t = e,
        [s, o] = C('collapse'),
        { linkChildren: d, children: c } = L(s),
        m = (e) => {
          a('change', e), a('update:modelValue', e)
        },
        v = (e = {}) => {
          if (t.accordion) return
          'boolean' == typeof e && (e = { expanded: e })
          const { expanded: l, skipDisabled: a } = e,
            s = c
              .filter((e) =>
                e.disabled && a ? e.expanded.value : l || !e.expanded.value
              )
              .map((e) => e.itemName.value)
          m(s)
        }
      return (
        B({ toggleAll: v }),
        l({ toggleAll: v }),
        d({
          toggle: (e, l) => {
            const { accordion: a, modelValue: s } = t
            m(
              a
                ? e === s
                  ? ''
                  : e
                : l
                  ? s.concat(e)
                  : s.filter((l) => l !== e)
            )
          },
          isExpanded: (e) => {
            const { accordion: l, modelValue: a } = t
            return l ? a === e : a.includes(e)
          }
        }),
        (e, l) => {
          const a = w
          return (
            i(),
            r(
              a,
              { class: f([u(o)(), { [u(P)]: t.border }]) },
              { default: n(() => [p(e.$slots, 'default')]), _: 3 },
              8,
              ['class']
            )
          )
        }
      )
    }
  }),
  R = y(
    t({
      __name: 'collapse',
      setup(e) {
        const a = l([0]),
          t = l(0),
          s = l([]),
          u = l([]),
          c = l(['1']),
          p = l(),
          m = () => {
            var e, l
            null == (l = null == (e = p.value) ? void 0 : e.toggleAll) ||
              l.call(e, !0)
          },
          f = () => {
            var e, l
            null == (l = null == (e = p.value) ? void 0 : e.toggleAll) ||
              l.call(e)
          }
        return (e, l) => {
          const v = D(o('z-collapse-item'), Z),
            b = D(o('z-collapse'), H),
            z = k('demo-block'),
            _ = D(o('z-icon'), U),
            g = D(o('z-button'), E),
            y = w,
            h = D(o('DemoPage'), N)
          return (
            i(),
            r(
              h,
              { title: 'Collapse' },
              {
                default: n(() => [
                  d(
                    y,
                    { class: 'demo-collapse' },
                    {
                      default: n(() => [
                        d(
                          z,
                          { title: '基础用法' },
                          {
                            default: n(() => [
                              d(
                                b,
                                {
                                  modelValue: a.value,
                                  'onUpdate:modelValue':
                                    l[0] || (l[0] = (e) => (a.value = e))
                                },
                                {
                                  default: n(() => [
                                    d(
                                      v,
                                      { title: '标题1' },
                                      {
                                        default: n(() => [
                                          x(
                                            ' zebra-swiper是基于uniapp开发的一款移动端轮播组件。 '
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    d(
                                      v,
                                      { title: '标题2' },
                                      {
                                        default: n(() => [
                                          x(
                                            ' zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。 其中，z-swiper-item 组件只可放置在 z-swiper 组件中。 '
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    d(
                                      v,
                                      { title: '标题3' },
                                      {
                                        default: n(() => [
                                          x(
                                            ' 在使用组件时，可以通过props像组件传递参数，从而实现不同的配置。 通常，配置都将通过options对象传递给组件。所以配置项都应该写进options中。 同时，也可以通过$refs的方式调用组件的方法。 '
                                          )
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        d(
                          z,
                          { title: '手风琴' },
                          {
                            default: n(() => [
                              d(
                                b,
                                {
                                  modelValue: t.value,
                                  'onUpdate:modelValue':
                                    l[1] || (l[1] = (e) => (t.value = e)),
                                  accordion: ''
                                },
                                {
                                  default: n(() => [
                                    d(
                                      v,
                                      { title: '标题1' },
                                      {
                                        default: n(() => [
                                          x(
                                            ' zebra-swiper是基于uniapp开发的一款移动端轮播组件。 '
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    d(
                                      v,
                                      { title: '标题2' },
                                      {
                                        default: n(() => [
                                          x(
                                            ' zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。 其中，z-swiper-item 组件只可放置在 z-swiper 组件中。 '
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    d(
                                      v,
                                      { title: '标题3' },
                                      {
                                        default: n(() => [
                                          x(
                                            ' 在使用组件时，可以通过props像组件传递参数，从而实现不同的配置。 通常，配置都将通过options对象传递给组件。所以配置项都应该写进options中。 同时，也可以通过$refs的方式调用组件的方法。 '
                                          )
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        d(
                          z,
                          { title: '禁用' },
                          {
                            default: n(() => [
                              d(
                                b,
                                {
                                  modelValue: s.value,
                                  'onUpdate:modelValue':
                                    l[2] || (l[2] = (e) => (s.value = e))
                                },
                                {
                                  default: n(() => [
                                    d(
                                      v,
                                      { title: '标题1' },
                                      {
                                        default: n(() => [
                                          x(
                                            ' zebra-swiper是基于uniapp开发的一款移动端轮播组件。 '
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    d(
                                      v,
                                      { title: '标题2', disabled: '' },
                                      {
                                        default: n(() => [
                                          x(
                                            ' zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。 其中，z-swiper-item 组件只可放置在 z-swiper 组件中。 '
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    d(
                                      v,
                                      { title: '标题3', disabled: '' },
                                      {
                                        default: n(() => [
                                          x(
                                            ' 在使用组件时，可以通过props像组件传递参数，从而实现不同的配置。 通常，配置都将通过options对象传递给组件。所以配置项都应该写进options中。 同时，也可以通过$refs的方式调用组件的方法。 '
                                          )
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        d(
                          z,
                          { title: '自定义标题' },
                          {
                            default: n(() => [
                              d(
                                b,
                                {
                                  modelValue: u.value,
                                  'onUpdate:modelValue':
                                    l[3] || (l[3] = (e) => (u.value = e))
                                },
                                {
                                  default: n(() => [
                                    d(v, null, {
                                      title: n(() => [
                                        x(' 标题1'),
                                        d(_, { name: 'tag' })
                                      ]),
                                      default: n(() => [
                                        x(
                                          ' zebra-swiper是基于uniapp开发的一款移动端轮播组件。 '
                                        )
                                      ]),
                                      _: 1
                                    }),
                                    d(
                                      v,
                                      {
                                        title: '标题2',
                                        value: '内容',
                                        icon: 'question-circle'
                                      },
                                      {
                                        default: n(() => [
                                          x(
                                            ' zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。 其中，z-swiper-item 组件只可放置在 z-swiper 组件中。 '
                                          )
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        d(
                          z,
                          { title: '全部展开与全部切换' },
                          {
                            default: n(() => [
                              d(
                                b,
                                {
                                  modelValue: c.value,
                                  'onUpdate:modelValue':
                                    l[4] || (l[4] = (e) => (c.value = e)),
                                  ref_key: 'collapse',
                                  ref: p
                                },
                                {
                                  default: n(() => [
                                    d(
                                      v,
                                      { title: '标题1', name: '1' },
                                      {
                                        default: n(() => [
                                          x(
                                            ' zebra-swiper是基于uniapp开发的一款移动端轮播组件。 '
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    d(
                                      v,
                                      { title: '标题2', name: '2' },
                                      {
                                        default: n(() => [
                                          x(
                                            ' zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。 其中，z-swiper-item 组件只可放置在 z-swiper 组件中。 '
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    d(
                                      v,
                                      { title: '标题3', name: '3' },
                                      {
                                        default: n(() => [
                                          x(
                                            ' 在使用组件时，可以通过props像组件传递参数，从而实现不同的配置。 通常，配置都将通过options对象传递给组件。所以配置项都应该写进options中。 同时，也可以通过$refs的方式调用组件的方法。 '
                                          )
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modelValue']
                              ),
                              d(
                                y,
                                { class: 'demo-collapse-buttons' },
                                {
                                  default: n(() => [
                                    d(
                                      g,
                                      { type: 'primary', onClick: m },
                                      {
                                        default: n(() => [x(' 全部展开 ')]),
                                        _: 1
                                      }
                                    ),
                                    d(
                                      g,
                                      {
                                        type: 'primary',
                                        'custom-style': {
                                          'margin-left': '30rpx'
                                        },
                                        onClick: f
                                      },
                                      {
                                        default: n(() => [x(' 全部切换 ')]),
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
      }
    }),
    [['__scopeId', 'data-v-c9dad8d1']]
  )
export { R as default }
