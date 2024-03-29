import { _ as e } from './z-cell.365e08ec.js'
import {
  d as l,
  k as t,
  m as o,
  G as a,
  o as u,
  c as n,
  w as s,
  a as i,
  i as r
} from './index-7fd204f3.js'
import { r as m, a as d } from './DemoPage.0bae30a9.js'
import { _ as k } from './z-number-keyboard.98560cb1.js'
import { _ as v } from './z-field.7193b969.js'
import { _ as c } from './z-toast.a77377ba.js'
import { s as p } from './z-toast.44a3344c.js'
import './z-dialog.b209de9d.js'
import './use-touch.1ac9fd53.js'
import './useParent.5b9c05b5.js'
import './index.389bd7d1.js'
import './use-id.c1b053ed.js'
const f = l({
  __name: 'numberKeyboard',
  setup(l) {
    const f = t(!1),
      h = t(!1),
      b = t(!1),
      w = t(!1),
      _ = t(!1),
      j = t(!1),
      x = t(!1),
      y = t(''),
      z = (e) => p(e),
      C = () => p('删除')
    return (l, t) => {
      const p = m(o('z-cell'), e),
        D = m(o('z-number-keyboard'), k),
        B = a('demo-block'),
        I = m(o('z-field'), v),
        V = r,
        g = m(o('z-toast'), c),
        P = m(o('DemoPage'), d)
      return (
        u(),
        n(
          P,
          { title: 'NumberKeyboard' },
          {
            default: s(() => [
              i(
                V,
                { class: 'demo-number-keyboard' },
                {
                  default: s(() => [
                    i(
                      B,
                      { title: '基础用法' },
                      {
                        default: s(() => [
                          i(p, {
                            title: '弹出默认键盘',
                            'is-link': '',
                            onClick: t[0] || (t[0] = (e) => (f.value = !0))
                          }),
                          i(
                            D,
                            {
                              show: f.value,
                              onBlur: t[1] || (t[1] = (e) => (f.value = !1)),
                              onInput: z,
                              onDelete: C
                            },
                            null,
                            8,
                            ['show']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    i(
                      B,
                      { title: '双向绑定' },
                      {
                        default: s(() => [
                          i(
                            I,
                            {
                              modelValue: y.value,
                              'onUpdate:modelValue':
                                t[2] || (t[2] = (e) => (y.value = e)),
                              label: '双向绑定',
                              readonly: '',
                              clickable: '',
                              onClick: t[3] || (t[3] = (e) => (x.value = !0))
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          i(
                            D,
                            {
                              modelValue: y.value,
                              'onUpdate:modelValue':
                                t[4] || (t[4] = (e) => (y.value = e)),
                              show: x.value,
                              maxlength: 6,
                              onBlur: t[5] || (t[5] = (e) => (x.value = !1))
                            },
                            null,
                            8,
                            ['modelValue', 'show']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    i(
                      B,
                      { title: '带右侧栏的键盘' },
                      {
                        default: s(() => [
                          i(p, {
                            title: '带右侧栏的键盘',
                            'is-link': '',
                            onClick: t[6] || (t[6] = (e) => (h.value = !0))
                          }),
                          i(
                            D,
                            {
                              show: h.value,
                              theme: 'custom',
                              'extra-key': '.',
                              'close-button-text': '完成',
                              onBlur: t[7] || (t[7] = (e) => (h.value = !1)),
                              onInput: z,
                              onDelete: C
                            },
                            null,
                            8,
                            ['show']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    i(
                      B,
                      { title: '身份证号键盘' },
                      {
                        default: s(() => [
                          i(p, {
                            title: '身份证号键盘',
                            'is-link': '',
                            onClick: t[8] || (t[8] = (e) => (b.value = !0))
                          }),
                          i(
                            D,
                            {
                              show: b.value,
                              'extra-key': 'X',
                              'close-button-text': '完成',
                              onBlur: t[9] || (t[9] = (e) => (b.value = !1)),
                              onInput: z,
                              onDelete: C
                            },
                            null,
                            8,
                            ['show']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    i(
                      B,
                      { title: '键盘标题' },
                      {
                        default: s(() => [
                          i(p, {
                            title: '键盘标题',
                            'is-link': '',
                            onClick: t[10] || (t[10] = (e) => (w.value = !0))
                          }),
                          i(
                            D,
                            {
                              show: w.value,
                              title: '键盘标题',
                              'extra-key': '.',
                              'close-button-text': '完成',
                              onBlur: t[11] || (t[11] = (e) => (w.value = !1)),
                              onInput: z,
                              onDelete: C
                            },
                            null,
                            8,
                            ['show']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    i(
                      B,
                      { title: '配置多个按键' },
                      {
                        default: s(() => [
                          i(p, {
                            title: '配置多个按键',
                            'is-link': '',
                            onClick: t[12] || (t[12] = (e) => (_.value = !0))
                          }),
                          i(
                            D,
                            {
                              show: _.value,
                              theme: 'custom',
                              'extra-key': ['00', '.'],
                              'close-button-text': '完成',
                              onBlur: t[13] || (t[13] = (e) => (_.value = !1)),
                              onInput: z,
                              onDelete: C
                            },
                            null,
                            8,
                            ['show', 'extra-key']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    i(
                      B,
                      { title: '随机数字键盘' },
                      {
                        default: s(() => [
                          i(p, {
                            title: '随机数字键盘',
                            'is-link': '',
                            onClick: t[14] || (t[14] = (e) => (j.value = !0))
                          }),
                          i(
                            D,
                            {
                              show: j.value,
                              'random-key-order': '',
                              onBlur: t[15] || (t[15] = (e) => (j.value = !1)),
                              onInput: z,
                              onDelete: C
                            },
                            null,
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
              i(g, { ref: 'zToast' }, null, 512)
            ]),
            _: 1
          }
        )
      )
    }
  }
})
export { f as default }
