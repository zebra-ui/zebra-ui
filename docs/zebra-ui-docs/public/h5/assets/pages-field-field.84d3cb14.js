import { _ as l } from './z-field.7193b969.js'
import {
  d as e,
  k as a,
  m as u,
  G as o,
  o as d,
  c as t,
  w as m,
  a as r,
  b as n,
  i as p
} from './index-7fd204f3.js'
import { r as V, b as i, a as v } from './DemoPage.0bae30a9.js'
import './z-cell.365e08ec.js'
import './useParent.5b9c05b5.js'
import './index.389bd7d1.js'
import './use-id.c1b053ed.js'
const s = e({
  __name: 'field',
  setup(e) {
    const s = a(''),
      c = a(''),
      b = a(''),
      f = a(''),
      h = a(''),
      U = a(''),
      _ = a(''),
      g = a(''),
      y = a(''),
      j = a(''),
      z = a(''),
      w = a(''),
      x = a(''),
      P = a(''),
      k = a(''),
      q = a(''),
      D = a(''),
      B = a(''),
      F = a(''),
      G = (l) => l.replace(/\d/g, '')
    return (e, a) => {
      const A = V(u('z-field'), l),
        C = o('demo-block'),
        E = V(u('z-button'), i),
        H = p,
        I = V(u('DemoPage'), v)
      return (
        d(),
        t(
          I,
          { title: 'Field' },
          {
            default: m(() => [
              r(
                H,
                { class: 'demo-field' },
                {
                  default: m(() => [
                    r(
                      C,
                      { title: '基础用法' },
                      {
                        default: m(() => [
                          r(
                            A,
                            {
                              modelValue: s.value,
                              'onUpdate:modelValue':
                                a[0] || (a[0] = (l) => (s.value = l)),
                              label: '文本',
                              placeholder: '请输入文本'
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      C,
                      { title: '自定义类型' },
                      {
                        default: m(() => [
                          r(
                            A,
                            {
                              modelValue: b.value,
                              'onUpdate:modelValue':
                                a[1] || (a[1] = (l) => (b.value = l)),
                              label: '文本',
                              placeholder: '请输入文本'
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          r(
                            A,
                            {
                              modelValue: c.value,
                              'onUpdate:modelValue':
                                a[2] || (a[2] = (l) => (c.value = l)),
                              type: 'tel',
                              label: '手机号',
                              placeholder: '请输入手机号'
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          r(
                            A,
                            {
                              modelValue: f.value,
                              'onUpdate:modelValue':
                                a[3] || (a[3] = (l) => (f.value = l)),
                              type: 'digit',
                              label: '整数',
                              placeholder: '请输入整数'
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          r(
                            A,
                            {
                              modelValue: h.value,
                              'onUpdate:modelValue':
                                a[4] || (a[4] = (l) => (h.value = l)),
                              type: 'number',
                              label: '数字',
                              placeholder: '请输入数字'
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          r(
                            A,
                            {
                              modelValue: U.value,
                              'onUpdate:modelValue':
                                a[5] || (a[5] = (l) => (U.value = l)),
                              type: 'password',
                              label: '密码',
                              placeholder: '请输入密码'
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      C,
                      { title: '禁用输入框' },
                      {
                        default: m(() => [
                          r(A, {
                            label: '文本',
                            'model-value': '输入框只读',
                            readonly: ''
                          }),
                          r(A, {
                            label: '文本',
                            'model-value': '输入框已禁用',
                            disabled: ''
                          })
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      C,
                      { title: '显示图标' },
                      {
                        default: m(() => [
                          r(
                            A,
                            {
                              modelValue: _.value,
                              'onUpdate:modelValue':
                                a[6] || (a[6] = (l) => (_.value = l)),
                              label: '文本',
                              'left-icon': 'detail',
                              'right-icon': 'info-circle',
                              placeholder: '显示图标'
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          r(
                            A,
                            {
                              modelValue: g.value,
                              'onUpdate:modelValue':
                                a[7] || (a[7] = (l) => (g.value = l)),
                              clearable: '',
                              label: '文本',
                              'left-icon': 'safetycertificate',
                              placeholder: '显示清除图标'
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      C,
                      { title: '必填星号' },
                      {
                        default: m(() => [
                          r(
                            A,
                            {
                              modelValue: q.value,
                              'onUpdate:modelValue':
                                a[8] || (a[8] = (l) => (q.value = l)),
                              required: '',
                              label: '用户名',
                              placeholder: '请输入用户名'
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          r(
                            A,
                            {
                              modelValue: D.value,
                              'onUpdate:modelValue':
                                a[9] || (a[9] = (l) => (D.value = l)),
                              required: '',
                              label: '手机号',
                              placeholder: '请输入手机号'
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      C,
                      { title: '错误提示' },
                      {
                        default: m(() => [
                          r(
                            A,
                            {
                              modelValue: q.value,
                              'onUpdate:modelValue':
                                a[10] || (a[10] = (l) => (q.value = l)),
                              error: '',
                              label: '用户名',
                              placeholder: '请输入用户名'
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          r(
                            A,
                            {
                              modelValue: D.value,
                              'onUpdate:modelValue':
                                a[11] || (a[11] = (l) => (D.value = l)),
                              label: '手机号',
                              placeholder: '请输入手机号',
                              'error-message': '手机号格式错误'
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      C,
                      { title: '插入按钮' },
                      {
                        default: m(() => [
                          r(
                            A,
                            {
                              modelValue: B.value,
                              'onUpdate:modelValue':
                                a[12] || (a[12] = (l) => (B.value = l)),
                              center: '',
                              clearable: '',
                              label: '短信验证码',
                              placeholder: '请输入验证码'
                            },
                            {
                              button: m(() => [
                                r(
                                  E,
                                  { size: 'mini', type: 'primary' },
                                  { default: m(() => [n('发送验证码')]), _: 1 }
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
                    r(
                      C,
                      { title: '格式化输入内容' },
                      {
                        default: m(() => [
                          r(
                            A,
                            {
                              modelValue: y.value,
                              'onUpdate:modelValue':
                                a[13] || (a[13] = (l) => (y.value = l)),
                              label: '文本',
                              formatter: G,
                              placeholder: '在输入时执行格式化'
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          r(
                            A,
                            {
                              modelValue: j.value,
                              'onUpdate:modelValue':
                                a[14] || (a[14] = (l) => (j.value = l)),
                              label: '文本',
                              formatter: G,
                              'format-trigger': 'onBlur',
                              placeholder: '在失焦时执行格式化'
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      C,
                      { title: '高度自适应' },
                      {
                        default: m(() => [
                          r(
                            A,
                            {
                              modelValue: F.value,
                              'onUpdate:modelValue':
                                a[15] || (a[15] = (l) => (F.value = l)),
                              rows: '1',
                              autosize: '',
                              label: '留言',
                              type: 'textarea',
                              placeholder: '请输入留言'
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      C,
                      { title: '显示字数统计' },
                      {
                        default: m(() => [
                          r(
                            A,
                            {
                              modelValue: F.value,
                              'onUpdate:modelValue':
                                a[16] || (a[16] = (l) => (F.value = l)),
                              rows: '2',
                              autosize: '',
                              maxlength: 50,
                              label: '留言',
                              type: 'textarea',
                              placeholder: '请输入留言',
                              'show-word-limit': ''
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      C,
                      { title: '输入框内容对齐' },
                      {
                        default: m(() => [
                          r(
                            A,
                            {
                              modelValue: z.value,
                              'onUpdate:modelValue':
                                a[17] || (a[17] = (l) => (z.value = l)),
                              label: '文本',
                              placeholder: '请输入文本',
                              'input-align': 'right'
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      C,
                      { title: '输入框文本位置' },
                      {
                        default: m(() => [
                          r(
                            A,
                            {
                              modelValue: w.value,
                              'onUpdate:modelValue':
                                a[18] || (a[18] = (l) => (w.value = l)),
                              label: '文本',
                              placeholder: '顶部对齐',
                              'label-align': 'top'
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          r(
                            A,
                            {
                              modelValue: x.value,
                              'onUpdate:modelValue':
                                a[19] || (a[19] = (l) => (x.value = l)),
                              label: '文本',
                              placeholder: '左对齐',
                              'label-align': 'left'
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          r(
                            A,
                            {
                              modelValue: P.value,
                              'onUpdate:modelValue':
                                a[20] || (a[20] = (l) => (P.value = l)),
                              label: '文本',
                              placeholder: '居中对齐',
                              'label-align': 'center'
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          r(
                            A,
                            {
                              modelValue: k.value,
                              'onUpdate:modelValue':
                                a[21] || (a[21] = (l) => (k.value = l)),
                              label: '文本',
                              placeholder: '右对齐',
                              'label-align': 'right'
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
                }
              )
            ]),
            _: 1
          }
        )
      )
    }
  }
})
export { s as default }
