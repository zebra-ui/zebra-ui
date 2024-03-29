import { _ as e } from './z-field.7193b969.js'
import {
  d as l,
  k as a,
  m as o,
  G as u,
  o as t,
  c as r,
  w as s,
  a as d,
  b as m,
  E as n,
  i,
  _ as p
} from './index-7fd204f3.js'
import { r as v, b as c, e as _, a as f } from './DemoPage.0bae30a9.js'
import { _ as V } from './z-form.vue_vue_type_script_setup_true_lang.1583735e.js'
import { _ as b } from './z-switch.e182d14d.js'
import { _ as z, a as h } from './z-checkbox-group.af09d884.js'
import { _ as j, a as k } from './z-radio-group.0b52c354.js'
import { _ as g } from './z-stepper.cbacd13a.js'
import { _ as y } from './z-rate.8a3894b6.js'
import { _ as U } from './z-slider.ac5348e7.js'
import { _ as w } from './z-uploader.c2d8306c.js'
import { _ as x } from './z-calendar.796cc0f9.js'
import { _ as C } from './z-picker.ce3c705f.js'
import { _ as q } from './z-date-picker.vue_vue_type_script_setup_true_lang.a0ecb8aa.js'
import { _ as P } from './z-area.vue_vue_type_script_setup_true_lang.477f3be6.js'
import { _ as D } from './z-toast.a77377ba.js'
import { a as F } from './area.6ad1509c.js'
import { a as G, d as S } from './z-toast.44a3344c.js'
import './z-dialog.b209de9d.js'
import './z-cell.365e08ec.js'
import './useParent.5b9c05b5.js'
import './index.389bd7d1.js'
import './use-id.c1b053ed.js'
import './useChildren.fb2421ae.js'
import './z-checker.a83e3fe8.js'
import './use-touch.1ac9fd53.js'
import './z-image.24b91007.js'
import './utils.95c08333.js'
const $ = p(
  l({
    __name: 'form',
    setup(l) {
      const p = a(),
        $ = a(),
        B = a(),
        E = a(''),
        H = a(''),
        I = a(''),
        M = a(''),
        O = a('abc'),
        T = a(''),
        A = a(''),
        N = a(''),
        R = a(3),
        W = a('1'),
        J = a(50),
        K = a(1),
        L = a([
          {
            url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg'
          }
        ]),
        Q = a(!1),
        X = a([]),
        Y = a(!1),
        Z = a(!1),
        ee = a(!1),
        le = /\d{6}/,
        ae = (e) => {
          console.log('submit', e)
        },
        oe = (e) => {
          console.log('submit', e)
        },
        ue = () => {
          p.value.submit()
        },
        te = () => {
          $.value.submit()
        },
        re = () => {
          B.value.submit()
        },
        se = (e) => /1\d{10}/.test(e),
        de = (e) => `${e} 不合法，请重新输入`,
        me = (e) =>
          new Promise((l) => {
            G('验证中...'),
              setTimeout(() => {
                S(), l('1234' === e)
              }, 1e3)
          }),
        ne = (e) => {
          console.log('failed', e)
        },
        ie = a(''),
        pe = a(''),
        ve = a(!1),
        ce = a(!1),
        _e = a([
          { text: '杭州', value: 'Hangzhou' },
          { text: '宁波', value: 'Ningbo' },
          { text: '温州', value: 'Wenzhou' },
          { text: '绍兴', value: 'Shaoxing' },
          { text: '湖州', value: 'Huzhou' }
        ]),
        fe = ({ selectedOptions: e }) => {
          var l
          ;(ie.value = (null == (l = e[0]) ? void 0 : l.text) || ''),
            (ve.value = !1)
        },
        Ve = () => {
          ve.value = !1
        },
        be = ({ selectedValues: e }) => {
          ;(pe.value = e.join('/')), (ce.value = !1)
        },
        ze = () => {
          ce.value = !1
        },
        he = ({ selectedOptions: e }) => {
          ;(A.value = e.map((e) => e.text).join('/')), (Z.value = !1)
        },
        je = () => {
          Z.value = !1
        },
        ke = (e) => {
          ;(N.value = ((e) => `${e.getMonth() + 1}/${e.getDate()}`)(e)),
            (ee.value = !1)
        }
      return (l, a) => {
        const G = v(o('z-field'), e),
          S = v(o('z-form'), V),
          ge = v(o('z-button'), c),
          ye = i,
          Ue = u('demo-block'),
          we = v(o('z-switch'), b),
          xe = v(o('z-checkbox'), z),
          Ce = v(o('z-checkbox-group'), h),
          qe = v(o('z-radio'), j),
          Pe = v(o('z-radio-group'), k),
          De = v(o('z-stepper'), g),
          Fe = v(o('z-rate'), y),
          Ge = v(o('z-slider'), U),
          Se = v(o('z-uploader'), w),
          $e = v(o('z-calendar'), x),
          Be = v(o('z-picker'), C),
          Ee = v(o('z-popup'), _),
          He = v(o('z-date-picker'), q),
          Ie = v(o('z-area'), P),
          Me = v(o('z-toast'), D),
          Oe = v(o('DemoPage'), f)
        return (
          t(),
          r(
            Oe,
            { title: 'Form' },
            {
              default: s(() => [
                d(
                  ye,
                  { class: 'demo-form' },
                  {
                    default: s(() => [
                      d(
                        Ue,
                        { title: '基础用法' },
                        {
                          default: s(() => [
                            d(
                              S,
                              { ref_key: 'formBasic', ref: p, onSubmit: ae },
                              {
                                default: s(() => [
                                  d(
                                    G,
                                    {
                                      modelValue: E.value,
                                      'onUpdate:modelValue':
                                        a[0] || (a[0] = (e) => (E.value = e)),
                                      name: '用户名',
                                      label: '用户名',
                                      placeholder: '用户名',
                                      rules: [
                                        {
                                          required: !0,
                                          message: '请填写用户名'
                                        }
                                      ]
                                    },
                                    null,
                                    8,
                                    ['modelValue']
                                  ),
                                  d(
                                    G,
                                    {
                                      modelValue: H.value,
                                      'onUpdate:modelValue':
                                        a[1] || (a[1] = (e) => (H.value = e)),
                                      type: 'password',
                                      name: '密码',
                                      label: '密码',
                                      placeholder: '密码',
                                      rules: [
                                        { required: !0, message: '请填写密码' }
                                      ]
                                    },
                                    null,
                                    8,
                                    ['modelValue']
                                  )
                                ]),
                                _: 1
                              },
                              512
                            ),
                            d(
                              ye,
                              { class: 'button' },
                              {
                                default: s(() => [
                                  d(
                                    ge,
                                    { block: '', type: 'primary', onClick: ue },
                                    { default: s(() => [m(' 提交 ')]), _: 1 }
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      d(
                        Ue,
                        { title: '校验规则' },
                        {
                          default: s(() => [
                            d(
                              S,
                              { ref_key: 'formRule', ref: $, onFailed: ne },
                              {
                                default: s(() => [
                                  d(
                                    G,
                                    {
                                      modelValue: I.value,
                                      'onUpdate:modelValue':
                                        a[2] || (a[2] = (e) => (I.value = e)),
                                      label: '正则校验',
                                      name: 'pattern',
                                      placeholder: '输入六位数字通过校验',
                                      rules: [
                                        {
                                          pattern: le,
                                          message: '请输入正确内容'
                                        }
                                      ]
                                    },
                                    null,
                                    8,
                                    ['modelValue', 'rules']
                                  ),
                                  d(
                                    G,
                                    {
                                      modelValue: M.value,
                                      'onUpdate:modelValue':
                                        a[3] || (a[3] = (e) => (M.value = e)),
                                      label: '函数校验',
                                      name: 'validator',
                                      placeholder:
                                        '输入1开头的11位数字通过校验',
                                      rules: [
                                        {
                                          validator: se,
                                          message: '请输入正确内容'
                                        }
                                      ]
                                    },
                                    null,
                                    8,
                                    ['modelValue', 'rules']
                                  ),
                                  d(
                                    G,
                                    {
                                      modelValue: O.value,
                                      'onUpdate:modelValue':
                                        a[4] || (a[4] = (e) => (O.value = e)),
                                      label: '错误提示',
                                      name: 'validatorMessage',
                                      placeholder: '自定义错误提示',
                                      rules: [{ validator: de }]
                                    },
                                    null,
                                    8,
                                    ['modelValue', 'rules']
                                  ),
                                  d(
                                    G,
                                    {
                                      modelValue: T.value,
                                      'onUpdate:modelValue':
                                        a[5] || (a[5] = (e) => (T.value = e)),
                                      label: '异步函数校验',
                                      name: 'asyncValidator',
                                      placeholder: '输入1234通过校验',
                                      rules: [
                                        {
                                          validator: me,
                                          message: '请输入正确内容'
                                        }
                                      ]
                                    },
                                    null,
                                    8,
                                    ['modelValue', 'rules']
                                  )
                                ]),
                                _: 1
                              },
                              512
                            ),
                            d(
                              ye,
                              { class: 'button' },
                              {
                                default: s(() => [
                                  d(
                                    ge,
                                    { block: '', type: 'primary', onClick: te },
                                    { default: s(() => [m(' 提交 ')]), _: 1 }
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      d(
                        Ue,
                        { title: '表单项类型' },
                        {
                          default: s(() => [
                            d(
                              S,
                              { ref_key: 'formItem', ref: B, onSubmit: oe },
                              {
                                default: s(() => [
                                  d(
                                    G,
                                    { name: 'switch', label: '开关' },
                                    {
                                      input: s(() => [
                                        d(
                                          we,
                                          {
                                            modelValue: Y.value,
                                            'onUpdate:modelValue':
                                              a[6] ||
                                              (a[6] = (e) => (Y.value = e))
                                          },
                                          null,
                                          8,
                                          ['modelValue']
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  d(
                                    G,
                                    { name: 'checkbox', label: '复选框' },
                                    {
                                      input: s(() => [
                                        d(
                                          xe,
                                          {
                                            modelValue: Q.value,
                                            'onUpdate:modelValue':
                                              a[7] ||
                                              (a[7] = (e) => (Q.value = e)),
                                            shape: 'square'
                                          },
                                          null,
                                          8,
                                          ['modelValue']
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  d(
                                    G,
                                    {
                                      name: 'checkboxGroup',
                                      label: '复选框组'
                                    },
                                    {
                                      input: s(() => [
                                        d(
                                          Ce,
                                          {
                                            modelValue: X.value,
                                            'onUpdate:modelValue':
                                              a[8] ||
                                              (a[8] = (e) => (X.value = e)),
                                            direction: 'horizontal'
                                          },
                                          {
                                            default: s(() => [
                                              d(
                                                xe,
                                                { name: '1', shape: 'square' },
                                                {
                                                  default: s(() => [
                                                    m(' 选项1 ')
                                                  ]),
                                                  _: 1
                                                }
                                              ),
                                              d(
                                                xe,
                                                { name: '2', shape: 'square' },
                                                {
                                                  default: s(() => [
                                                    m(' 选项2 ')
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
                                    G,
                                    { name: 'radio', label: '单选框' },
                                    {
                                      input: s(() => [
                                        d(
                                          Pe,
                                          {
                                            modelValue: W.value,
                                            'onUpdate:modelValue':
                                              a[9] ||
                                              (a[9] = (e) => (W.value = e)),
                                            direction: 'horizontal'
                                          },
                                          {
                                            default: s(() => [
                                              d(
                                                qe,
                                                { name: '1' },
                                                {
                                                  default: s(() => [
                                                    m('选项1')
                                                  ]),
                                                  _: 1
                                                }
                                              ),
                                              d(
                                                qe,
                                                { name: '2' },
                                                {
                                                  default: s(() => [
                                                    m('选项2')
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
                                    G,
                                    { name: 'stepper', label: '步进器' },
                                    {
                                      input: s(() => [
                                        d(
                                          De,
                                          {
                                            modelValue: K.value,
                                            'onUpdate:modelValue':
                                              a[10] ||
                                              (a[10] = (e) => (K.value = e))
                                          },
                                          null,
                                          8,
                                          ['modelValue']
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  d(
                                    G,
                                    { name: 'rate', label: '评分' },
                                    {
                                      input: s(() => [
                                        d(
                                          Fe,
                                          {
                                            modelValue: R.value,
                                            'onUpdate:modelValue':
                                              a[11] ||
                                              (a[11] = (e) => (R.value = e))
                                          },
                                          null,
                                          8,
                                          ['modelValue']
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  d(
                                    G,
                                    { name: 'slider', label: '滑块' },
                                    {
                                      input: s(() => [
                                        d(
                                          Ge,
                                          {
                                            modelValue: J.value,
                                            'onUpdate:modelValue':
                                              a[12] ||
                                              (a[12] = (e) => (J.value = e))
                                          },
                                          null,
                                          8,
                                          ['modelValue']
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  d(
                                    G,
                                    { name: 'uploader', label: '文件上传' },
                                    {
                                      input: s(() => [
                                        d(
                                          Se,
                                          {
                                            modelValue: L.value,
                                            'onUpdate:modelValue':
                                              a[13] ||
                                              (a[13] = (e) => (L.value = e)),
                                            'max-count': '2'
                                          },
                                          null,
                                          8,
                                          ['modelValue']
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  d(
                                    G,
                                    {
                                      modelValue: ie.value,
                                      'onUpdate:modelValue':
                                        a[14] ||
                                        (a[14] = (e) => (ie.value = e)),
                                      'is-link': '',
                                      readonly: '',
                                      name: 'picker',
                                      label: '选择器',
                                      placeholder: '请选择城市',
                                      onClick:
                                        a[15] ||
                                        (a[15] = (e) => (ve.value = !0))
                                    },
                                    null,
                                    8,
                                    ['modelValue']
                                  ),
                                  d(
                                    G,
                                    {
                                      modelValue: pe.value,
                                      'onUpdate:modelValue':
                                        a[16] ||
                                        (a[16] = (e) => (pe.value = e)),
                                      'is-link': '',
                                      readonly: '',
                                      name: 'datePicker',
                                      label: '时间选择',
                                      placeholder: '点击选择事件',
                                      onClick:
                                        a[17] ||
                                        (a[17] = (e) => (ce.value = !0))
                                    },
                                    null,
                                    8,
                                    ['modelValue']
                                  ),
                                  d(
                                    G,
                                    {
                                      modelValue: A.value,
                                      'onUpdate:modelValue':
                                        a[18] || (a[18] = (e) => (A.value = e)),
                                      'is-link': '',
                                      readonly: '',
                                      name: 'area',
                                      label: '地区选择',
                                      placeholder: '点击选择省市区',
                                      onClick:
                                        a[19] || (a[19] = (e) => (Z.value = !0))
                                    },
                                    null,
                                    8,
                                    ['modelValue']
                                  ),
                                  d(
                                    G,
                                    {
                                      modelValue: N.value,
                                      'onUpdate:modelValue':
                                        a[20] || (a[20] = (e) => (N.value = e)),
                                      'is-link': '',
                                      readonly: '',
                                      name: 'calendar',
                                      label: '日历',
                                      placeholder: '点击选择日期',
                                      onClick:
                                        a[21] ||
                                        (a[21] = (e) => (ee.value = !0))
                                    },
                                    null,
                                    8,
                                    ['modelValue']
                                  ),
                                  d(
                                    $e,
                                    {
                                      show: ee.value,
                                      'onUpdate:show':
                                        a[22] ||
                                        (a[22] = (e) => (ee.value = e)),
                                      round: '',
                                      teleport: 'body',
                                      onConfirm: ke
                                    },
                                    null,
                                    8,
                                    ['show']
                                  )
                                ]),
                                _: 1
                              },
                              512
                            ),
                            d(
                              ye,
                              { class: 'button' },
                              {
                                default: s(() => [
                                  d(
                                    ge,
                                    { block: '', type: 'primary', onClick: re },
                                    { default: s(() => [m(' 提交 ')]), _: 1 }
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
                d(
                  Ee,
                  {
                    show: ve.value,
                    'onUpdate:show': a[23] || (a[23] = (e) => (ve.value = e)),
                    round: '',
                    position: 'bottom',
                    teleport: 'body'
                  },
                  {
                    default: s(() => [
                      d(
                        Be,
                        { columns: _e.value, onConfirm: fe, onCancel: Ve },
                        null,
                        8,
                        ['columns']
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ['show']
                ),
                d(
                  Ee,
                  {
                    show: ce.value,
                    'onUpdate:show': a[24] || (a[24] = (e) => (ce.value = e)),
                    round: '',
                    position: 'bottom',
                    teleport: 'body'
                  },
                  {
                    default: s(() => [d(He, { onConfirm: be, onCancel: ze })]),
                    _: 1
                  },
                  8,
                  ['show']
                ),
                d(
                  Ee,
                  {
                    show: Z.value,
                    'onUpdate:show': a[25] || (a[25] = (e) => (Z.value = e)),
                    round: '',
                    position: 'bottom',
                    teleport: 'body'
                  },
                  {
                    default: s(() => [
                      d(
                        Ie,
                        { 'area-list': n(F), onConfirm: he, onCancel: je },
                        null,
                        8,
                        ['area-list']
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ['show']
                ),
                d(Me, { ref: 'zToast' }, null, 512)
              ]),
              _: 1
            }
          )
        )
      }
    }
  }),
  [['__scopeId', 'data-v-b3891d43']]
)
export { $ as default }
