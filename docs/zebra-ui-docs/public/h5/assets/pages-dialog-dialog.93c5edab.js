import { _ as t } from './z-cell.365e08ec.js'
import {
  d as e,
  k as s,
  m as l,
  G as i,
  o,
  c as a,
  w as n,
  a as u,
  E as m,
  i as r
} from './index-7fd204f3.js'
import { r as c, q as d, a as k } from './DemoPage.0bae30a9.js'
import { _ as f } from './z-picker.ce3c705f.js'
import { _ as g } from './z-toast.a77377ba.js'
import { a as h, s as p } from './z-dialog.b209de9d.js'
import { s as z } from './z-toast.44a3344c.js'
import './useParent.5b9c05b5.js'
import './use-touch.1ac9fd53.js'
import './useChildren.fb2421ae.js'
const _ = e({
  __name: 'dialog',
  setup(e) {
    const _ = (t) =>
        new Promise((e) => {
          setTimeout(() => {
            e('confirm' === t)
          }, 1e3)
        }),
      j = () => {
        p({ title: '标题', message: '异步关闭示例', beforeClose: _ })
      },
      C = s(!1),
      b = [
        { text: '杭州', value: 'Hangzhou' },
        { text: '宁波', value: 'Ningbo' },
        { text: '温州', value: 'Wenzhou' },
        { text: '绍兴', value: 'Shaoxing' },
        { text: '湖州', value: 'Huzhou' }
      ],
      v = () => {
        p({ title: '标题', message: '操作事件' })
          .then(() => {
            z('点击确认按钮')
          })
          .catch(() => {
            z('点击取消按钮')
          })
      }
    return (e, s) => {
      const z = c(l('z-cell'), t),
        _ = i('demo-block'),
        x = c(l('z-picker'), f),
        w = c(l('z-dialog'), d),
        D = r,
        P = c(l('z-toast'), g),
        H = c(l('DemoPage'), k)
      return (
        o(),
        a(
          H,
          { title: 'Dialog' },
          {
            default: n(() => [
              u(
                D,
                { class: 'demo-dialog' },
                {
                  default: n(() => [
                    u(
                      _,
                      { title: '基础用法' },
                      {
                        default: n(() => [
                          u(z, {
                            title: '提示弹窗',
                            'is-link': '',
                            onClick:
                              s[0] ||
                              (s[0] = (t) =>
                                m(h)({
                                  title: '标题',
                                  message: '这是一个示例提示'
                                }))
                          }),
                          u(z, {
                            title: '提示弹窗（无标题）',
                            'is-link': '',
                            onClick:
                              s[1] ||
                              (s[1] = (t) =>
                                m(h)({ message: '这是一个无标题提示' }))
                          }),
                          u(z, {
                            title: '确认弹窗',
                            'is-link': '',
                            onClick:
                              s[2] ||
                              (s[2] = (t) =>
                                m(p)({
                                  title: '标题',
                                  message: '这是一个示例提示'
                                }))
                          })
                        ]),
                        _: 1
                      }
                    ),
                    u(
                      _,
                      { title: '按钮风格' },
                      {
                        default: n(() => [
                          u(z, {
                            title: '提示弹窗',
                            'is-link': '',
                            onClick:
                              s[3] ||
                              (s[3] = (t) =>
                                m(h)({
                                  title: '标题',
                                  theme: 'round-button',
                                  message: '这是一个示例提示'
                                }))
                          }),
                          u(z, {
                            title: '提示弹窗（无标题）',
                            'is-link': '',
                            onClick:
                              s[4] ||
                              (s[4] = (t) =>
                                m(h)({
                                  theme: 'round-button',
                                  message: '这是一个无标题提示'
                                }))
                          }),
                          u(z, {
                            title: '确认弹窗',
                            'is-link': '',
                            onClick:
                              s[5] ||
                              (s[5] = (t) =>
                                m(p)({
                                  title: '标题',
                                  theme: 'round-button',
                                  message: '这是一个示例提示'
                                }))
                          })
                        ]),
                        _: 1
                      }
                    ),
                    u(
                      _,
                      { title: '异步关闭' },
                      {
                        default: n(() => [
                          u(z, { title: '异步关闭', 'is-link': '', onClick: j })
                        ]),
                        _: 1
                      }
                    ),
                    u(
                      _,
                      { title: '事件' },
                      {
                        default: n(() => [
                          u(z, { title: '事件', 'is-link': '', onClick: v })
                        ]),
                        _: 1
                      }
                    ),
                    u(
                      _,
                      { title: '使用组件' },
                      {
                        default: n(() => [
                          u(z, {
                            title: '使用组件',
                            'is-link': '',
                            onClick: s[6] || (s[6] = (t) => (C.value = !0))
                          }),
                          u(
                            w,
                            {
                              show: C.value,
                              'onUpdate:show':
                                s[7] || (s[7] = (t) => (C.value = t)),
                              'use-component': '',
                              title: '标题',
                              'show-cancel-button': ''
                            },
                            {
                              default: n(() => [
                                u(x, { columns: b, 'show-toolbar': !1 })
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
              u(w, { ref: 'zDialog' }, null, 512),
              u(P, { ref: 'zToast' }, null, 512)
            ]),
            _: 1
          }
        )
      )
    }
  }
})
export { _ as default }
