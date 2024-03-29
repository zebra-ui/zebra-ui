import { _ as e } from './z-date-picker.vue_vue_type_script_setup_true_lang.a0ecb8aa.js'
import {
  d as t,
  D as a,
  o as l,
  c as o,
  w as u,
  a as n,
  E as i,
  K as d,
  x as s,
  n as m,
  L as c,
  i as r,
  _ as v,
  k as p,
  m as f,
  G as _,
  b as V,
  t as b
} from './index-7fd204f3.js'
import {
  l as x,
  m as k,
  i as g,
  o as j,
  r as z,
  b as y,
  a as U
} from './DemoPage.0bae30a9.js'
import { _ as C, a as T } from './z-tabs.8d3e6868.js'
import { _ as S } from './z-time-picker.vue_vue_type_script_setup_true_lang.72a06aa2.js'
import { z as $ } from './z-picker.ce3c705f.js'
import { u as h } from './useChildren.fb2421ae.js'
import { u as D } from './use-sync-prop-ref.d5773770.js'
import { _ as P } from './z-toast.a77377ba.js'
import { s as w } from './z-toast.44a3344c.js'
import './utils.95c08333.js'
import './useParent.5b9c05b5.js'
import './use-id.c1b053ed.js'
import './z-sticky.e6c39ae3.js'
import './use-touch.1ac9fd53.js'
const B = v(
    t({
      name: 'ZPickerGroup',
      options: { virtualHost: !0 },
      props: {
        tabs: x(),
        activeTab: k(0),
        nextStepText: String,
        title: String,
        cancelButtonText: String,
        confirmButtonText: String,
        componentSlots: Object,
        count: Number
      },
      emits: ['confirm', 'cancel', 'update:activeTab'],
      setup(e, { emit: t }) {
        const v = e,
          [p, f] = g('picker-group'),
          _ = c(),
          V = D(
            () => v.activeTab,
            (e) => t('update:activeTab', e)
          ),
          { children: b, linkChildren: x } = h(p)
        x()
        const k = a(() => +V.value < v.count - 1 && v.nextStepText),
          z = a(() => (k.value ? v.nextStepText : v.confirmButtonText)),
          y = () => {
            k.value
              ? (V.value = +V.value + 1)
              : t(
                  'confirm',
                  b.map((e) => e.confirm())
                )
          },
          U = () => t('cancel'),
          C = a(() => j(v.componentSlots)),
          T = (e) =>
            C.value
              ? !(!v.componentSlots || !v.componentSlots[e]) &&
                v.componentSlots[e]
              : _.slots[e]
        return (t, a) => {
          const c = r
          return (
            l(),
            o(
              c,
              { class: m(i(f)()) },
              {
                default: u(() => [
                  n(
                    $,
                    {
                      title: v.title,
                      'cancel-button-text': v.cancelButtonText,
                      'component-slots': i(C) ? e.componentSlots : i(_).slots,
                      'confirm-button-text': i(z),
                      onConfirm: y,
                      onCancel: U
                    },
                    d({ _: 2 }, [
                      T('cancel')
                        ? {
                            name: 'cancel',
                            fn: u(() => [
                              s(t.$slots, 'cancel', {}, void 0, !0)
                            ]),
                            key: '0'
                          }
                        : void 0,
                      T('confirm')
                        ? {
                            name: 'confirm',
                            fn: u(() => [
                              s(t.$slots, 'confirm', {}, void 0, !0)
                            ]),
                            key: '1'
                          }
                        : void 0,
                      T('title')
                        ? {
                            name: 'title',
                            fn: u(() => [s(t.$slots, 'title', {}, void 0, !0)]),
                            key: '2'
                          }
                        : void 0,
                      T('toolbar')
                        ? {
                            name: 'toolbar',
                            fn: u(() => [
                              s(t.$slots, 'toolbar', {}, void 0, !0)
                            ]),
                            key: '3'
                          }
                        : void 0
                    ]),
                    1032,
                    [
                      'title',
                      'cancel-button-text',
                      'component-slots',
                      'confirm-button-text'
                    ]
                  ),
                  s(t.$slots, 'default', {}, void 0, !0)
                ]),
                _: 3
              },
              8,
              ['class']
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-0fc0c388']]
  ),
  G = v(
    t({
      __name: 'pickerGroup',
      setup(t) {
        const a = p(['2022', '06', '01']),
          d = p(['12', '00']),
          s = new Date(2020, 0, 1),
          m = new Date(2025, 5, 1),
          c = p(0),
          v = p(0),
          x = () => {
            w(`${a.value.join('/')} ${d.value.join(':')}`)
          },
          k = () => {
            w('cancel')
          },
          g = p(['2022', '06', '01']),
          j = p(['2023', '06', '01']),
          $ = () => {
            w(`${g.value.join('/')} - ${j.value.join('/')}`)
          },
          h = () => {
            w('cancel')
          },
          D = p(['12', '00']),
          G = p(['12', '00']),
          I = () => {
            w(`${D.value.join(':')} - ${G.value.join(':')}`)
          },
          E = () => {
            w('cancel')
          },
          H = () => {
            c.value = c.value ? 0 : 1
          }
        return (t, p) => {
          const w = z(f('z-date-picker'), e),
            K = z(f('z-tab'), C),
            L = z(f('z-time-picker'), S),
            N = z(f('z-tabs'), T),
            O = z(f('z-picker-group'), B),
            Z = _('demo-block'),
            q = z(f('z-button'), y),
            A = r,
            F = z(f('z-toast'), P),
            J = z(f('DemoPage'), U)
          return (
            l(),
            o(
              J,
              { title: 'PickerGroup' },
              {
                default: u(() => [
                  n(
                    A,
                    { class: 'demo-picker-group' },
                    {
                      default: u(() => [
                        n(
                          Z,
                          { title: '选择日期时间' },
                          {
                            default: u(() => [
                              n(
                                O,
                                {
                                  title: '预约日期',
                                  tabs: ['选择日期', '选择时间'],
                                  onConfirm: x,
                                  onCancel: k
                                },
                                {
                                  default: u(() => [
                                    n(
                                      N,
                                      {
                                        active: c.value,
                                        'onUpdate:active':
                                          p[2] || (p[2] = (e) => (c.value = e)),
                                        shrink: '',
                                        animated: '',
                                        'custom-style': {
                                          'margin-top': 'var(--z-padding-base)'
                                        }
                                      },
                                      {
                                        default: u(() => [
                                          n(
                                            K,
                                            { title: '选择日期' },
                                            {
                                              default: u(() => [
                                                n(
                                                  w,
                                                  {
                                                    modelValue: a.value,
                                                    'onUpdate:modelValue':
                                                      p[0] ||
                                                      (p[0] = (e) =>
                                                        (a.value = e)),
                                                    'min-date': i(s),
                                                    'max-date': i(m)
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    'modelValue',
                                                    'min-date',
                                                    'max-date'
                                                  ]
                                                )
                                              ]),
                                              _: 1
                                            }
                                          ),
                                          n(
                                            K,
                                            { title: '选择时间' },
                                            {
                                              default: u(() => [
                                                n(
                                                  L,
                                                  {
                                                    modelValue: d.value,
                                                    'onUpdate:modelValue':
                                                      p[1] ||
                                                      (p[1] = (e) =>
                                                        (d.value = e))
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue']
                                                )
                                              ]),
                                              _: 1
                                            }
                                          )
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['active', 'custom-style']
                                    )
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        n(
                          Z,
                          { title: '下一步按钮' },
                          {
                            default: u(() => [
                              n(
                                O,
                                {
                                  activeTab: v.value,
                                  'onUpdate:activeTab':
                                    p[8] || (p[8] = (e) => (v.value = e)),
                                  title: '预约日期',
                                  count: 4,
                                  'next-step-text': '下一步',
                                  onConfirm: x,
                                  onCancel: k
                                },
                                {
                                  default: u(() => [
                                    n(
                                      N,
                                      {
                                        active: v.value,
                                        'onUpdate:active':
                                          p[7] || (p[7] = (e) => (v.value = e)),
                                        shrink: '',
                                        animated: '',
                                        'custom-style': {
                                          'margin-top': 'var(--z-padding-base)'
                                        }
                                      },
                                      {
                                        default: u(() => [
                                          n(
                                            K,
                                            { title: '选择日期' },
                                            {
                                              default: u(() => [
                                                n(
                                                  w,
                                                  {
                                                    modelValue: a.value,
                                                    'onUpdate:modelValue':
                                                      p[3] ||
                                                      (p[3] = (e) =>
                                                        (a.value = e)),
                                                    'min-date': i(s),
                                                    'max-date': i(m)
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    'modelValue',
                                                    'min-date',
                                                    'max-date'
                                                  ]
                                                )
                                              ]),
                                              _: 1
                                            }
                                          ),
                                          n(
                                            K,
                                            { title: '选择时间' },
                                            {
                                              default: u(() => [
                                                n(
                                                  L,
                                                  {
                                                    modelValue: d.value,
                                                    'onUpdate:modelValue':
                                                      p[4] ||
                                                      (p[4] = (e) =>
                                                        (d.value = e))
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue']
                                                )
                                              ]),
                                              _: 1
                                            }
                                          ),
                                          n(
                                            K,
                                            { title: '再次选择日期' },
                                            {
                                              default: u(() => [
                                                n(
                                                  w,
                                                  {
                                                    modelValue: a.value,
                                                    'onUpdate:modelValue':
                                                      p[5] ||
                                                      (p[5] = (e) =>
                                                        (a.value = e)),
                                                    'min-date': i(s),
                                                    'max-date': i(m)
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    'modelValue',
                                                    'min-date',
                                                    'max-date'
                                                  ]
                                                )
                                              ]),
                                              _: 1
                                            }
                                          ),
                                          n(
                                            K,
                                            { title: '再次选择时间' },
                                            {
                                              default: u(() => [
                                                n(
                                                  L,
                                                  {
                                                    modelValue: d.value,
                                                    'onUpdate:modelValue':
                                                      p[6] ||
                                                      (p[6] = (e) =>
                                                        (d.value = e))
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue']
                                                )
                                              ]),
                                              _: 1
                                            }
                                          )
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['active', 'custom-style']
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['activeTab']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        n(
                          Z,
                          { title: '选择日期范围' },
                          {
                            default: u(() => [
                              n(
                                O,
                                {
                                  title: '预约日期',
                                  count: 2,
                                  onConfirm: $,
                                  onCancel: h
                                },
                                {
                                  default: u(() => [
                                    n(
                                      N,
                                      {
                                        active: c.value,
                                        'onUpdate:active':
                                          p[11] ||
                                          (p[11] = (e) => (c.value = e)),
                                        shrink: '',
                                        animated: '',
                                        'custom-style': {
                                          'margin-top': 'var(--z-padding-base)'
                                        }
                                      },
                                      {
                                        default: u(() => [
                                          n(
                                            K,
                                            { title: '开始日期' },
                                            {
                                              default: u(() => [
                                                n(
                                                  w,
                                                  {
                                                    modelValue: g.value,
                                                    'onUpdate:modelValue':
                                                      p[9] ||
                                                      (p[9] = (e) =>
                                                        (g.value = e)),
                                                    'min-date': i(s),
                                                    'max-date': i(m)
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    'modelValue',
                                                    'min-date',
                                                    'max-date'
                                                  ]
                                                )
                                              ]),
                                              _: 1
                                            }
                                          ),
                                          n(
                                            K,
                                            { title: '结束日期' },
                                            {
                                              default: u(() => [
                                                n(
                                                  w,
                                                  {
                                                    modelValue: j.value,
                                                    'onUpdate:modelValue':
                                                      p[10] ||
                                                      (p[10] = (e) =>
                                                        (j.value = e)),
                                                    'min-date': i(s),
                                                    'max-date': i(m)
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    'modelValue',
                                                    'min-date',
                                                    'max-date'
                                                  ]
                                                )
                                              ]),
                                              _: 1
                                            }
                                          )
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['active', 'custom-style']
                                    )
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        n(
                          Z,
                          { title: '选择时间范围' },
                          {
                            default: u(() => [
                              n(
                                O,
                                {
                                  title: '预约日期',
                                  count: 2,
                                  onConfirm: I,
                                  onCancel: E
                                },
                                {
                                  default: u(() => [
                                    n(
                                      N,
                                      {
                                        active: c.value,
                                        'onUpdate:active':
                                          p[14] ||
                                          (p[14] = (e) => (c.value = e)),
                                        shrink: '',
                                        animated: '',
                                        'custom-style': {
                                          'margin-top': 'var(--z-padding-base)'
                                        }
                                      },
                                      {
                                        default: u(() => [
                                          n(
                                            K,
                                            { title: '开始日期' },
                                            {
                                              default: u(() => [
                                                n(
                                                  L,
                                                  {
                                                    modelValue: D.value,
                                                    'onUpdate:modelValue':
                                                      p[12] ||
                                                      (p[12] = (e) =>
                                                        (D.value = e))
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue']
                                                )
                                              ]),
                                              _: 1
                                            }
                                          ),
                                          n(
                                            K,
                                            { title: '结束日期' },
                                            {
                                              default: u(() => [
                                                n(
                                                  L,
                                                  {
                                                    modelValue: G.value,
                                                    'onUpdate:modelValue':
                                                      p[13] ||
                                                      (p[13] = (e) =>
                                                        (G.value = e))
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue']
                                                )
                                              ]),
                                              _: 1
                                            }
                                          )
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['active', 'custom-style']
                                    )
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        n(
                          Z,
                          { title: '受控模式' },
                          {
                            default: u(() => [
                              n(
                                A,
                                { class: 'picker-button' },
                                {
                                  default: u(() => [
                                    n(
                                      q,
                                      { type: 'primary', onClick: H },
                                      {
                                        default: u(() => [
                                          V(
                                            ' 点击切换 tab，当前为 ' +
                                              b(c.value),
                                            1
                                          )
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              n(
                                O,
                                {
                                  title: '预约日期',
                                  count: 2,
                                  onConfirm: I,
                                  onCancel: E
                                },
                                {
                                  default: u(() => [
                                    n(
                                      N,
                                      {
                                        active: c.value,
                                        'onUpdate:active':
                                          p[17] ||
                                          (p[17] = (e) => (c.value = e)),
                                        shrink: '',
                                        animated: '',
                                        'custom-style': {
                                          'margin-top': 'var(--z-padding-base)'
                                        }
                                      },
                                      {
                                        default: u(() => [
                                          n(
                                            K,
                                            { title: '开始日期' },
                                            {
                                              default: u(() => [
                                                n(
                                                  L,
                                                  {
                                                    modelValue: D.value,
                                                    'onUpdate:modelValue':
                                                      p[15] ||
                                                      (p[15] = (e) =>
                                                        (D.value = e))
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue']
                                                )
                                              ]),
                                              _: 1
                                            }
                                          ),
                                          n(
                                            K,
                                            { title: '结束日期' },
                                            {
                                              default: u(() => [
                                                n(
                                                  L,
                                                  {
                                                    modelValue: G.value,
                                                    'onUpdate:modelValue':
                                                      p[16] ||
                                                      (p[16] = (e) =>
                                                        (G.value = e))
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue']
                                                )
                                              ]),
                                              _: 1
                                            }
                                          )
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['active', 'custom-style']
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
                  ),
                  n(F, { ref: 'zToast' }, null, 512)
                ]),
                _: 1
              }
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-d4d42578']]
  )
export { G as default }
