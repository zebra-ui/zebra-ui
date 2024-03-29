import {
  d as e,
  D as l,
  o as a,
  c as o,
  w as t,
  n as s,
  E as r,
  y as c,
  i as n,
  m as i,
  x as u,
  p as d,
  a as m,
  e as p,
  b as f,
  t as h,
  F as g,
  L as k,
  _ as b,
  k as v,
  G as y,
  M as V
} from './index-7fd204f3.js'
import { f as _, _ as x } from './z-field.7193b969.js'
import {
  k as I,
  s as z,
  t as j,
  i as C,
  j as w,
  v as S,
  r as U,
  a as T
} from './DemoPage.0bae30a9.js'
import { u as $ } from './use-id.c1b053ed.js'
import { _ as A } from './z-toast.a77377ba.js'
import { s as L } from './z-toast.44a3344c.js'
import './z-cell.365e08ec.js'
import './useParent.5b9c05b5.js'
import './index.389bd7d1.js'
const B = b(
    e({
      name: 'ZSearch',
      options: { virtualHost: !0 },
      props: I({}, _, {
        label: String,
        shape: z('square'),
        leftIcon: z('search'),
        clearable: j,
        actionText: String,
        background: String,
        showAction: Boolean
      }),
      emits: [
        'blur',
        'focus',
        'clear',
        'search',
        'cancel',
        'clickInput',
        'clickLeftIcon',
        'clickRightIcon',
        'update:modelValue'
      ],
      setup(e, { emit: b }) {
        const v = e,
          y = k(),
          [V, _] = C('search')
        w(V)
        const I = $(),
          z = () => {
            y.slots.action || (b('update:modelValue', ''), b('cancel'))
          },
          j = (e) => b('blur', e),
          T = (e) => b('focus', e),
          A = (e) => b('clear', e),
          L = (e) => b('clickInput', e),
          B = (e) => b('clickLeftIcon', e),
          D = (e) => b('clickRightIcon', e),
          M = () => {
            b('search', v.modelValue)
          },
          P = l(() => {
            const e = {
              flex: 1,
              alignItems: 'center',
              padding: '0 var(--z-padding-xs) 0 0',
              height: 'var(--z-search-input-height)',
              backgroundColor: 'transparent'
            }
            let l = {}
            return (
              (l = v.errorMessage
                ? {
                    height: 'auto',
                    alignItems: 'flex-start',
                    paddingTop: '10rpx',
                    paddingBottom: '10rpx'
                  }
                : {}),
              { ...e, ...l }
            )
          }),
          R = (e) => b('update:modelValue', e)
        return (
          S({ focus: () => {}, blur: () => {} }),
          (e, l) => {
            const k = n,
              b = U(i('z-field'), x)
            return (
              a(),
              o(
                k,
                {
                  class: s(r(_)({ 'show-action': v.showAction })),
                  style: c({ background: v.background })
                },
                {
                  default: t(() => [
                    r(y).slots.left
                      ? u(e.$slots, 'left', { key: 0 }, void 0, !0)
                      : d('', !0),
                    m(
                      k,
                      { class: s(r(_)('content', v.shape)) },
                      {
                        default: t(() => [
                          r(y).slots.label || v.label
                            ? (a(),
                              o(
                                k,
                                { key: 0, class: s(r(_)('label')) },
                                {
                                  default: t(() => [
                                    r(y).slots.label
                                      ? u(
                                          e.$slots,
                                          'label',
                                          { key: 0 },
                                          void 0,
                                          !0
                                        )
                                      : (a(),
                                        p(
                                          g,
                                          { key: 1 },
                                          [f(h(v.label), 1)],
                                          64
                                        ))
                                  ]),
                                  _: 3
                                },
                                8,
                                ['class']
                              ))
                            : d('', !0),
                          m(
                            b,
                            {
                              id: v.id || `${I}-input`,
                              type: 'text',
                              'confirm-type': 'search',
                              'cell-style': r(P),
                              'custom-style': { display: 'flex', flex: '1' },
                              'left-icon-color':
                                'var(--z-search-left-icon-color)',
                              border: !1,
                              name: v.name,
                              'label-width': '0',
                              'left-icon': v.leftIcon,
                              'right-icon': v.rightIcon,
                              autofocus: v.autofocus,
                              clearable: v.clearable,
                              maxlength: v.maxlength,
                              formatter: v.formatter,
                              'clear-icon': v.clearIcon,
                              'model-value': v.modelValue,
                              'input-align': v.inputAlign,
                              placeholder: v.placeholder,
                              autocomplete: v.autocomplete,
                              autocapitalize: v.autocapitalize,
                              autocorrect: v.autocorrect,
                              'error-message': v.errorMessage,
                              enterkeyhint: v.enterkeyhint,
                              'clear-trigger': v.clearTrigger,
                              'format-trigger': v.formatTrigger,
                              spellcheck: v.spellcheck,
                              error: v.error,
                              disabled: v.disabled,
                              readonly: v.readonly,
                              onBlur: j,
                              onFocus: T,
                              onClear: A,
                              onClickInput: L,
                              onClickLeftIcon: B,
                              onConfirm: M,
                              onClickRightIcon: D,
                              'onUpdate:modelValue': R
                            },
                            {
                              default: t(() => [
                                r(y).slots['left-icon']
                                  ? u(
                                      e.$slots,
                                      'left-icon',
                                      { key: 0 },
                                      void 0,
                                      !0
                                    )
                                  : d('', !0),
                                r(y).slots['right-icon']
                                  ? u(
                                      e.$slots,
                                      'right-icon',
                                      { key: 1 },
                                      void 0,
                                      !0
                                    )
                                  : d('', !0)
                              ]),
                              _: 3
                            },
                            8,
                            [
                              'id',
                              'cell-style',
                              'name',
                              'left-icon',
                              'right-icon',
                              'autofocus',
                              'clearable',
                              'maxlength',
                              'formatter',
                              'clear-icon',
                              'model-value',
                              'input-align',
                              'placeholder',
                              'autocomplete',
                              'autocapitalize',
                              'autocorrect',
                              'error-message',
                              'enterkeyhint',
                              'clear-trigger',
                              'format-trigger',
                              'spellcheck',
                              'error',
                              'disabled',
                              'readonly'
                            ]
                          )
                        ]),
                        _: 3
                      },
                      8,
                      ['class']
                    ),
                    v.showAction
                      ? (a(),
                        p(
                          'div',
                          { key: 1, class: s(r(_)('action')), onClick: z },
                          [
                            r(y).slots.action
                              ? u(e.$slots, 'action', { key: 0 }, void 0, !0)
                              : (a(),
                                p(
                                  g,
                                  { key: 1 },
                                  [f(h(v.actionText || '取消'), 1)],
                                  64
                                ))
                          ],
                          2
                        ))
                      : d('', !0)
                  ]),
                  _: 3
                },
                8,
                ['class', 'style']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-518f95e1']]
  ),
  D = e({
    __name: 'search',
    setup(e) {
      const l = v(''),
        s = (e) => L(e),
        r = () => L('取消'),
        c = () => L(l.value)
      return (e, u) => {
        const d = U(i('z-search'), B),
          p = y('demo-block'),
          f = n,
          h = U(i('z-toast'), A),
          g = U(i('DemoPage'), T)
        return (
          a(),
          o(
            g,
            { title: 'Search' },
            {
              default: t(() => [
                m(
                  f,
                  { class: 'demo-search' },
                  {
                    default: t(() => [
                      m(
                        p,
                        { title: '基础用法' },
                        {
                          default: t(() => [
                            m(
                              d,
                              {
                                modelValue: l.value,
                                'onUpdate:modelValue':
                                  u[0] || (u[0] = (e) => (l.value = e)),
                                placeholder: '请输入搜索关键词'
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      m(
                        p,
                        { title: '事件监听' },
                        {
                          default: t(() => [
                            m(
                              d,
                              {
                                modelValue: l.value,
                                'onUpdate:modelValue':
                                  u[1] || (u[1] = (e) => (l.value = e)),
                                'show-action': '',
                                placeholder: '请输入搜索关键词',
                                onSearch: s,
                                onCancel: r
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      m(
                        p,
                        { title: '搜索框内容对齐' },
                        {
                          default: t(() => [
                            m(
                              d,
                              {
                                modelValue: l.value,
                                'onUpdate:modelValue':
                                  u[2] || (u[2] = (e) => (l.value = e)),
                                placeholder: '请输入搜索关键词',
                                'input-align': 'center'
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      m(
                        p,
                        { title: '禁用搜索框' },
                        {
                          default: t(() => [
                            m(
                              d,
                              {
                                modelValue: l.value,
                                'onUpdate:modelValue':
                                  u[3] || (u[3] = (e) => (l.value = e)),
                                placeholder: '请输入搜索关键词',
                                disabled: ''
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      m(
                        p,
                        { title: '自定义背景色' },
                        {
                          default: t(() => [
                            m(
                              d,
                              {
                                modelValue: l.value,
                                'onUpdate:modelValue':
                                  u[4] || (u[4] = (e) => (l.value = e)),
                                placeholder: '请输入搜索关键词',
                                shape: 'round',
                                background: '#4fc08d'
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      m(
                        p,
                        { title: '自定义按钮' },
                        {
                          default: t(() => [
                            m(
                              d,
                              {
                                modelValue: l.value,
                                'onUpdate:modelValue':
                                  u[5] || (u[5] = (e) => (l.value = e)),
                                'show-action': '',
                                label: '地址',
                                placeholder: '请输入搜索关键词',
                                onSearch: s
                              },
                              {
                                action: t(() => [
                                  V('div', { onClick: c }, '搜索')
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                m(h, { ref: 'zToast' }, null, 512)
              ]),
              _: 1
            }
          )
        )
      }
    }
  })
export { D as default }
