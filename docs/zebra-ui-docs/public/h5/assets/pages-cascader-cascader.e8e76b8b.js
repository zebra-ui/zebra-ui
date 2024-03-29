import { _ as e } from './z-field.7193b969.js'
import {
  d as l,
  k as a,
  D as o,
  l as t,
  I as s,
  m as u,
  o as n,
  c as i,
  w as d,
  n as c,
  E as v,
  a as r,
  x as p,
  e as m,
  F as f,
  b as h,
  t as b,
  p as V,
  r as k,
  y as _,
  L as x,
  ae as y,
  i as z,
  C as w,
  S as C,
  _ as j,
  G as U,
  M as g
} from './index-7fd204f3.js'
import {
  l as I,
  t as O,
  s as T,
  n as F,
  i as S,
  j as D,
  k as $,
  r as H,
  _ as N,
  L as P,
  e as L,
  a as W
} from './DemoPage.0bae30a9.js'
import { _ as B, a as E } from './z-tabs.8d3e6868.js'
import { _ as G } from './z-toast.a77377ba.js'
import { a as M, d as R } from './z-toast.44a3344c.js'
import { u as Z } from './area.6ad1509c.js'
import './z-cell.365e08ec.js'
import './useParent.5b9c05b5.js'
import './index.389bd7d1.js'
import './use-id.c1b053ed.js'
import './z-sticky.e6c39ae3.js'
import './useChildren.fb2421ae.js'
import './use-touch.1ac9fd53.js'
const q = j(
    l({
      name: 'ZCascader',
      options: { virtualHost: !0 },
      props: {
        title: String,
        options: I(),
        closeable: O,
        swipeable: O,
        closeIcon: T('close'),
        showHeader: O,
        modelValue: F,
        fieldNames: Object,
        placeholder: String,
        activeColor: String
      },
      emits: ['close', 'change', 'finish', 'clickTab', 'update:modelValue'],
      setup(e, { emit: l }) {
        const j = e,
          [U, g] = S('cascader')
        D(U)
        const I = x(),
          O = a([]),
          T = a(),
          F = a(0),
          L = o(() => ({
            color: 'var(--z-cascader-close-icon-color)',
            fontSize: 'var(--z-cascader-close-icon-size)'
          })),
          {
            text: W,
            value: G,
            children: M
          } = $(
            { text: 'text', value: 'value', children: 'children' },
            j.fieldNames
          ),
          R = (e) => {
            const l = {
              color: 'var(--z-cascader-tab-color)',
              fontWeight: 'var(--z-font-bold)'
            }
            return (
              e.selected ||
                ((l.color = 'var(--z-cascader-unselected-tab-color)'),
                (l.fontWeight = 'normal')),
              l
            )
          },
          Z = o(() => ({ fontSize: 'var(--z-cascader-selected-icon-size)' })),
          q = (e, l) => !(!l || e[G] !== l[G]),
          A = (e, l) => e.color || (l ? j.activeColor : void 0),
          J = (e, l) => {
            for (const a of e) {
              if (a[G] === l) return [a]
              if (a[M]) {
                const e = J(a[M], l)
                if (e) return [a, ...e]
              }
            }
          },
          K = () => {
            const { options: e, modelValue: l } = j
            if (void 0 !== l) {
              const a = J(e, l)
              if (a) {
                let l = e
                return (
                  (O.value = a.map((e) => {
                    const a = { options: l, selected: e },
                      o = l.find((l) => l[G] === e[G])
                    return o && (l = o[M]), a
                  })),
                  l && O.value.push({ options: l, selected: null }),
                  void y(() => {
                    F.value = O.value.length - 1
                  })
                )
              }
            }
            ;(O.value = [{ options: e, selected: null }]),
              setTimeout(() => {
                T.value && T.value.resize()
              }, 500)
          },
          Q = () => l('close'),
          X = ({ name: e, title: a }) => l('clickTab', e, a)
        t(F, () => {
          setTimeout(() => {
            T.value && T.value.resize()
          }, 500)
        }),
          t(() => j.options, K, { deep: !0 }),
          t(
            () => j.modelValue,
            (e) => {
              if (void 0 !== e) {
                if (
                  O.value
                    .map((e) => {
                      var l
                      return null == (l = e.selected) ? void 0 : l[G]
                    })
                    .includes(e)
                )
                  return
              }
              K()
            }
          ),
          K()
        const Y = a(!0)
        return (
          s(() => {
            Y.value = !0
          }),
          (e, a) => {
            const o = z,
              t = H(u('z-icon'), N),
              s = w,
              x = C,
              U = H(u('z-tab'), B),
              S = H(u('z-tabs'), E)
            return (
              n(),
              i(
                o,
                { class: c(v(g)()) },
                {
                  default: d(() => [
                    j.showHeader
                      ? (n(),
                        i(
                          o,
                          { key: 0, class: c(v(g)('header')) },
                          {
                            default: d(() => [
                              r(
                                o,
                                { class: c(v(g)('title')) },
                                {
                                  default: d(() => [
                                    v(I).slots.title
                                      ? p(
                                          e.$slots,
                                          'title',
                                          { key: 0 },
                                          void 0,
                                          !0
                                        )
                                      : (n(),
                                        m(
                                          f,
                                          { key: 1 },
                                          [h(b(j.title), 1)],
                                          64
                                        ))
                                  ]),
                                  _: 3
                                },
                                8,
                                ['class']
                              ),
                              j.closeable
                                ? (n(),
                                  i(
                                    t,
                                    {
                                      key: 0,
                                      name: j.closeIcon,
                                      'custom-class': [v(P)],
                                      'custom-style': v(L),
                                      onClick: Q
                                    },
                                    null,
                                    8,
                                    ['name', 'custom-class', 'custom-style']
                                  ))
                                : V('', !0)
                            ]),
                            _: 3
                          },
                          8,
                          ['class']
                        ))
                      : V('', !0),
                    r(
                      o,
                      { class: c(v(g)('tabs')) },
                      {
                        default: d(() => [
                          r(
                            S,
                            {
                              ref_key: 'cascaderTabsRef',
                              ref: T,
                              active: F.value,
                              'onUpdate:active':
                                a[0] || (a[0] = (e) => (F.value = e)),
                              shrink: '',
                              animated: '',
                              color: j.activeColor,
                              swipeable: j.swipeable,
                              onClickTab: X
                            },
                            {
                              default: d(() => [
                                (n(!0),
                                m(
                                  f,
                                  null,
                                  k(
                                    O.value,
                                    (a, u) => (
                                      n(),
                                      i(
                                        U,
                                        {
                                          key: u,
                                          title: a.selected
                                            ? a.selected[v(W)]
                                            : j.placeholder || '请选择',
                                          'title-style': R(a)
                                        },
                                        {
                                          default: d(() => [
                                            v(I).slots['options-top']
                                              ? p(
                                                  e.$slots,
                                                  'options-top',
                                                  { key: 0, tabIndex: u },
                                                  void 0,
                                                  !0
                                                )
                                              : V('', !0),
                                            r(
                                              x,
                                              {
                                                class: c(v(g)('options')),
                                                'scroll-y': 'true'
                                              },
                                              {
                                                default: d(() => [
                                                  (n(!0),
                                                  m(
                                                    f,
                                                    null,
                                                    k(
                                                      a.options,
                                                      (r, m) => (
                                                        n(),
                                                        i(
                                                          o,
                                                          {
                                                            key: m,
                                                            class: c([
                                                              v(g)('option', {
                                                                selected: q(
                                                                  r,
                                                                  a.selected
                                                                ),
                                                                disabled:
                                                                  r.disabled
                                                              }),
                                                              r.className
                                                            ]),
                                                            style: _({
                                                              color: A(
                                                                r,
                                                                q(r, a.selected)
                                                              )
                                                            }),
                                                            onClick: () =>
                                                              ((e, a) => {
                                                                if (e.disabled)
                                                                  return
                                                                if (
                                                                  ((O.value[
                                                                    a
                                                                  ].selected =
                                                                    e),
                                                                  O.value
                                                                    .length >
                                                                    a + 1 &&
                                                                    (O.value =
                                                                      O.value.slice(
                                                                        0,
                                                                        a + 1
                                                                      )),
                                                                  e[M])
                                                                ) {
                                                                  const l = {
                                                                    options:
                                                                      e[M],
                                                                    selected:
                                                                      null
                                                                  }
                                                                  O.value[a + 1]
                                                                    ? (O.value[
                                                                        a + 1
                                                                      ] = l)
                                                                    : O.value.push(
                                                                        l
                                                                      ),
                                                                    y(() => {
                                                                      F.value++
                                                                    })
                                                                }
                                                                const o =
                                                                  O.value
                                                                    .map(
                                                                      (e) =>
                                                                        e.selected
                                                                    )
                                                                    .filter(
                                                                      Boolean
                                                                    )
                                                                l(
                                                                  'update:modelValue',
                                                                  e[G]
                                                                )
                                                                const t = {
                                                                  value: e[G],
                                                                  tabIndex: a,
                                                                  selectedOptions:
                                                                    o
                                                                }
                                                                l('change', t),
                                                                  e[M] ||
                                                                    (T.value &&
                                                                      T.value.resize(),
                                                                    l(
                                                                      'finish',
                                                                      t
                                                                    ))
                                                              })(r, u)
                                                          },
                                                          {
                                                            default: d(() => [
                                                              v(I).slots.option
                                                                ? p(
                                                                    e.$slots,
                                                                    'option',
                                                                    {
                                                                      key: 0,
                                                                      option: r,
                                                                      selected:
                                                                        q(
                                                                          r,
                                                                          a.selected
                                                                        )
                                                                    },
                                                                    void 0,
                                                                    !0
                                                                  )
                                                                : (n(),
                                                                  i(
                                                                    s,
                                                                    { key: 1 },
                                                                    {
                                                                      default:
                                                                        d(
                                                                          () => [
                                                                            h(
                                                                              b(
                                                                                r[
                                                                                  v(
                                                                                    W
                                                                                  )
                                                                                ]
                                                                              ),
                                                                              1
                                                                            )
                                                                          ]
                                                                        ),
                                                                      _: 2
                                                                    },
                                                                    1024
                                                                  )),
                                                              q(r, a.selected)
                                                                ? (n(),
                                                                  i(
                                                                    t,
                                                                    {
                                                                      key: 2,
                                                                      name: 'check',
                                                                      'custom-style':
                                                                        v(Z)
                                                                    },
                                                                    null,
                                                                    8,
                                                                    [
                                                                      'custom-style'
                                                                    ]
                                                                  ))
                                                                : V('', !0)
                                                            ]),
                                                            _: 2
                                                          },
                                                          1032,
                                                          [
                                                            'class',
                                                            'style',
                                                            'onClick'
                                                          ]
                                                        )
                                                      )
                                                    ),
                                                    128
                                                  ))
                                                ]),
                                                _: 2
                                              },
                                              1032,
                                              ['class']
                                            ),
                                            v(I).slots['options-bottom']
                                              ? p(
                                                  e.$slots,
                                                  'options-bottom',
                                                  { key: 1, tabIndex: u },
                                                  void 0,
                                                  !0
                                                )
                                              : V('', !0)
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['title', 'title-style']
                                      )
                                    )
                                  ),
                                  128
                                ))
                              ]),
                              _: 3
                            },
                            8,
                            ['active', 'color', 'swipeable']
                          )
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
                ['class']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-84289ff2']]
  ),
  A = j(
    l({
      __name: 'cascader',
      setup(l) {
        const o = a(!1),
          t = a(!1),
          s = a(!1),
          c = a(!1),
          v = a(!1),
          p = a(!1),
          m = a(''),
          f = a(''),
          h = a(''),
          V = a(''),
          k = a(''),
          _ = a(''),
          x = a(''),
          y = a(''),
          w = a(''),
          C = a(''),
          j = a(''),
          I = a(''),
          O = a([]),
          T = a([]),
          F = a([]),
          S = a([]),
          D = a([]),
          $ = a([]),
          N = { text: 'name', value: 'code', children: 'items' },
          P = ({ selectedOptions: e }) => {
            ;(o.value = !1), (m.value = e.map((e) => e.text).join('/'))
          },
          B = ({ selectedOptions: e }) => {
            ;(t.value = !1), (f.value = e.map((e) => e.text).join('/'))
          },
          E = ({ selectedOptions: e }) => {
            ;(s.value = !1), (h.value = e.map((e) => e.text).join('/'))
          },
          A = ({ selectedOptions: e }) => {
            ;(c.value = !1), (V.value = e.map((e) => e.name).join('/'))
          },
          J = ({ selectedOptions: e }) => {
            ;(v.value = !1), (k.value = e.map((e) => e.text).join('/'))
          },
          K = ({ selectedOptions: e }) => {
            ;(p.value = !1), (_.value = e.map((e) => e.text).join('/'))
          },
          Q = ({ value: e }) => {
            e === F.value[0].value &&
              0 === F.value[0].children.length &&
              (M('加载中...'),
              setTimeout(() => {
                ;(F.value[0].children = [
                  { text: '杭州市', value: '330100' },
                  { text: '宁波市', value: '330200' }
                ]),
                  R()
              }, 1e3))
          }
        return (l, a) => {
          const M = H(u('z-field'), e),
            R = H(u('z-cascader'), q),
            X = H(u('z-popup'), L),
            Y = U('demo-block'),
            ee = z,
            le = H(u('z-toast'), G),
            ae = H(u('DemoPage'), W)
          return (
            n(),
            i(
              ae,
              { title: 'Cascader' },
              {
                default: d(() => [
                  r(
                    ee,
                    { class: 'demo-cascader' },
                    {
                      default: d(() => [
                        r(
                          Y,
                          { title: '基础用法' },
                          {
                            default: d(() => [
                              r(
                                M,
                                {
                                  modelValue: m.value,
                                  'onUpdate:modelValue':
                                    a[0] || (a[0] = (e) => (m.value = e)),
                                  'is-link': '',
                                  readonly: '',
                                  label: '地区',
                                  placeholder: '请选择所在地区',
                                  onClick:
                                    a[1] ||
                                    (a[1] = (e) => (
                                      (O.value = [
                                        {
                                          text: '浙江省',
                                          value: '330000',
                                          children: [
                                            { text: '杭州市', value: '330100' }
                                          ]
                                        },
                                        {
                                          text: '江苏省',
                                          value: '320000',
                                          children: [
                                            { text: '南京市', value: '320100' }
                                          ]
                                        }
                                      ]),
                                      void (o.value = !0)
                                    ))
                                },
                                null,
                                8,
                                ['modelValue']
                              ),
                              r(
                                X,
                                {
                                  show: o.value,
                                  'onUpdate:show':
                                    a[4] || (a[4] = (e) => (o.value = e)),
                                  round: '',
                                  position: 'bottom'
                                },
                                {
                                  default: d(() => [
                                    r(
                                      R,
                                      {
                                        modelValue: x.value,
                                        'onUpdate:modelValue':
                                          a[2] || (a[2] = (e) => (x.value = e)),
                                        title: '请选择所在地区',
                                        options: O.value,
                                        onClose:
                                          a[3] ||
                                          (a[3] = (e) => (o.value = !1)),
                                        onFinish: P
                                      },
                                      null,
                                      8,
                                      ['modelValue', 'options']
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['show']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        r(
                          Y,
                          { title: '完整省市区数据' },
                          {
                            default: d(() => [
                              r(
                                M,
                                {
                                  modelValue: _.value,
                                  'onUpdate:modelValue':
                                    a[5] || (a[5] = (e) => (_.value = e)),
                                  'is-link': '',
                                  readonly: '',
                                  label: '地区',
                                  placeholder: '请选择所在地区',
                                  onClick:
                                    a[6] ||
                                    (a[6] = (e) => (
                                      ($.value = Z()), void (p.value = !0)
                                    ))
                                },
                                null,
                                8,
                                ['modelValue']
                              ),
                              r(
                                X,
                                {
                                  show: p.value,
                                  'onUpdate:show':
                                    a[9] || (a[9] = (e) => (p.value = e)),
                                  round: '',
                                  position: 'bottom'
                                },
                                {
                                  default: d(() => [
                                    r(
                                      R,
                                      {
                                        modelValue: I.value,
                                        'onUpdate:modelValue':
                                          a[7] || (a[7] = (e) => (I.value = e)),
                                        title: '请选择所在地区',
                                        options: $.value,
                                        onClose:
                                          a[8] ||
                                          (a[8] = (e) => (p.value = !1)),
                                        onFinish: K
                                      },
                                      null,
                                      8,
                                      ['modelValue', 'options']
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['show']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        r(
                          Y,
                          { title: '自定义颜色' },
                          {
                            default: d(() => [
                              r(
                                M,
                                {
                                  modelValue: f.value,
                                  'onUpdate:modelValue':
                                    a[10] || (a[10] = (e) => (f.value = e)),
                                  'is-link': '',
                                  readonly: '',
                                  label: '地区',
                                  placeholder: '请选择所在地区',
                                  onClick:
                                    a[11] ||
                                    (a[11] = (e) => (
                                      (T.value = [
                                        {
                                          text: '浙江省',
                                          value: '330000',
                                          children: [
                                            { text: '杭州市', value: '330100' }
                                          ]
                                        },
                                        {
                                          text: '江苏省',
                                          value: '320000',
                                          children: [
                                            { text: '南京市', value: '320100' }
                                          ]
                                        }
                                      ]),
                                      void (t.value = !0)
                                    ))
                                },
                                null,
                                8,
                                ['modelValue']
                              ),
                              r(
                                X,
                                {
                                  show: t.value,
                                  'onUpdate:show':
                                    a[14] || (a[14] = (e) => (t.value = e)),
                                  round: '',
                                  position: 'bottom'
                                },
                                {
                                  default: d(() => [
                                    r(
                                      R,
                                      {
                                        modelValue: y.value,
                                        'onUpdate:modelValue':
                                          a[12] ||
                                          (a[12] = (e) => (y.value = e)),
                                        title: '请选择所在地区',
                                        options: T.value,
                                        'active-color': '#ee0a24',
                                        onClose:
                                          a[13] ||
                                          (a[13] = (e) => (t.value = !1)),
                                        onFinish: B
                                      },
                                      null,
                                      8,
                                      ['modelValue', 'options']
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['show']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        r(
                          Y,
                          { title: '异步加载选项' },
                          {
                            default: d(() => [
                              r(
                                M,
                                {
                                  modelValue: h.value,
                                  'onUpdate:modelValue':
                                    a[15] || (a[15] = (e) => (h.value = e)),
                                  'is-link': '',
                                  readonly: '',
                                  label: '地区',
                                  placeholder: '请选择所在地区',
                                  onClick:
                                    a[16] ||
                                    (a[16] = (e) => (
                                      (F.value = [
                                        {
                                          text: '浙江省',
                                          value: '330000',
                                          children: []
                                        }
                                      ]),
                                      void (s.value = !0)
                                    ))
                                },
                                null,
                                8,
                                ['modelValue']
                              ),
                              r(
                                X,
                                {
                                  show: s.value,
                                  'onUpdate:show':
                                    a[19] || (a[19] = (e) => (s.value = e)),
                                  round: '',
                                  position: 'bottom'
                                },
                                {
                                  default: d(() => [
                                    r(
                                      R,
                                      {
                                        modelValue: w.value,
                                        'onUpdate:modelValue':
                                          a[17] ||
                                          (a[17] = (e) => (w.value = e)),
                                        title: '请选择所在地区',
                                        options: F.value,
                                        onClose:
                                          a[18] ||
                                          (a[18] = (e) => (s.value = !1)),
                                        onChange: Q,
                                        onFinish: E
                                      },
                                      null,
                                      8,
                                      ['modelValue', 'options']
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['show']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        r(
                          Y,
                          { title: '自定义字段名' },
                          {
                            default: d(() => [
                              r(
                                M,
                                {
                                  modelValue: V.value,
                                  'onUpdate:modelValue':
                                    a[20] || (a[20] = (e) => (V.value = e)),
                                  'is-link': '',
                                  readonly: '',
                                  label: '地区',
                                  placeholder: '请选择所在地区',
                                  onClick:
                                    a[21] ||
                                    (a[21] = (e) => (
                                      (S.value = [
                                        {
                                          name: '浙江省',
                                          code: '330000',
                                          items: [
                                            { name: '杭州市', code: '330100' }
                                          ]
                                        },
                                        {
                                          name: '江苏省',
                                          code: '320000',
                                          items: [
                                            { name: '南京市', code: '320100' }
                                          ]
                                        }
                                      ]),
                                      void (c.value = !0)
                                    ))
                                },
                                null,
                                8,
                                ['modelValue']
                              ),
                              r(
                                X,
                                {
                                  show: c.value,
                                  'onUpdate:show':
                                    a[24] || (a[24] = (e) => (c.value = e)),
                                  round: '',
                                  position: 'bottom'
                                },
                                {
                                  default: d(() => [
                                    r(
                                      R,
                                      {
                                        modelValue: C.value,
                                        'onUpdate:modelValue':
                                          a[22] ||
                                          (a[22] = (e) => (C.value = e)),
                                        title: '请选择所在地区',
                                        options: S.value,
                                        'field-names': N,
                                        onClose:
                                          a[23] ||
                                          (a[23] = (e) => (c.value = !1)),
                                        onFinish: A
                                      },
                                      null,
                                      8,
                                      ['modelValue', 'options']
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['show']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        r(
                          Y,
                          { title: '自定义选项上方内容' },
                          {
                            default: d(() => [
                              r(
                                M,
                                {
                                  modelValue: k.value,
                                  'onUpdate:modelValue':
                                    a[25] || (a[25] = (e) => (k.value = e)),
                                  'is-link': '',
                                  readonly: '',
                                  label: '地区',
                                  placeholder: '请选择所在地区',
                                  onClick:
                                    a[26] ||
                                    (a[26] = (e) => (
                                      (D.value = [
                                        {
                                          text: '浙江省',
                                          value: '330000',
                                          children: [
                                            { text: '杭州市', value: '330100' }
                                          ]
                                        },
                                        {
                                          text: '江苏省',
                                          value: '320000',
                                          children: [
                                            { text: '南京市', value: '320100' }
                                          ]
                                        }
                                      ]),
                                      void (v.value = !0)
                                    ))
                                },
                                null,
                                8,
                                ['modelValue']
                              ),
                              r(
                                X,
                                {
                                  show: v.value,
                                  'onUpdate:show':
                                    a[29] || (a[29] = (e) => (v.value = e)),
                                  round: '',
                                  position: 'bottom'
                                },
                                {
                                  default: d(() => [
                                    r(
                                      R,
                                      {
                                        modelValue: j.value,
                                        'onUpdate:modelValue':
                                          a[27] ||
                                          (a[27] = (e) => (j.value = e)),
                                        title: '请选择所在地区',
                                        options: D.value,
                                        onClose:
                                          a[28] ||
                                          (a[28] = (e) => (v.value = !1)),
                                        onFinish: J
                                      },
                                      {
                                        'options-top': d(({ tabIndex: e }) => [
                                          g(
                                            'div',
                                            { class: 'current-level' },
                                            '当前为第 ' + b(e + 1) + ' 级',
                                            1
                                          )
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['modelValue', 'options']
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['show']
                              )
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    }
                  ),
                  r(le, { ref: 'zToast' }, null, 512)
                ]),
                _: 1
              }
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-0f6a3f28']]
  )
export { A as default }
