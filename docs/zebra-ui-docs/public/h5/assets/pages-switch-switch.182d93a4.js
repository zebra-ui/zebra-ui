import { _ as e } from './z-switch.e182d14d.js'
import {
  d as l,
  k as a,
  m as o,
  G as u,
  o as t,
  c as d,
  w as m,
  a as s,
  i,
  _ as n
} from './index-7fd204f3.js'
import { r, _ as c, q as v, a as p } from './DemoPage.0bae30a9.js'
import { _ as V } from './z-cell.365e08ec.js'
import { s as _ } from './z-dialog.b209de9d.js'
import './index.389bd7d1.js'
const f = n(
  l({
    __name: 'switch',
    setup(l) {
      const n = a(!0),
        f = (e) => {
          _({ title: '提醒', message: '是否切换开关？' }).then(() => {
            n.value = e
          })
        }
      return (l, a) => {
        const _ = r(o('z-switch'), e),
          z = u('demo-block'),
          g = r(o('z-icon'), c),
          U = i,
          h = r(o('z-cell'), V),
          j = r(o('z-dialog'), v),
          w = r(o('DemoPage'), p)
        return (
          t(),
          d(
            w,
            { title: 'Switch' },
            {
              default: m(() => [
                s(
                  U,
                  { class: 'demo-switch' },
                  {
                    default: m(() => [
                      s(
                        z,
                        { title: '基础用法' },
                        {
                          default: m(() => [
                            s(
                              _,
                              {
                                modelValue: n.value,
                                'onUpdate:modelValue':
                                  a[0] || (a[0] = (e) => (n.value = e))
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        z,
                        { title: '禁用状态' },
                        {
                          default: m(() => [
                            s(
                              _,
                              {
                                modelValue: n.value,
                                'onUpdate:modelValue':
                                  a[1] || (a[1] = (e) => (n.value = e)),
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
                      s(
                        z,
                        { title: '加载状态' },
                        {
                          default: m(() => [
                            s(
                              _,
                              {
                                modelValue: n.value,
                                'onUpdate:modelValue':
                                  a[2] || (a[2] = (e) => (n.value = e)),
                                loading: ''
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        z,
                        { title: '自定义大小' },
                        {
                          default: m(() => [
                            s(
                              _,
                              {
                                modelValue: n.value,
                                'onUpdate:modelValue':
                                  a[3] || (a[3] = (e) => (n.value = e)),
                                size: '30rpx'
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        z,
                        { title: '自定义颜色' },
                        {
                          default: m(() => [
                            s(
                              _,
                              {
                                modelValue: n.value,
                                'onUpdate:modelValue':
                                  a[4] || (a[4] = (e) => (n.value = e)),
                                'active-color': '#ee0a24',
                                'inactive-color': '#dcdee0'
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        z,
                        { title: '自定义按钮' },
                        {
                          default: m(() => [
                            s(
                              _,
                              {
                                modelValue: n.value,
                                'onUpdate:modelValue':
                                  a[5] || (a[5] = (e) => (n.value = e))
                              },
                              {
                                node: m(() => [
                                  s(
                                    U,
                                    { class: 'icon-wrapper' },
                                    {
                                      default: m(() => [
                                        s(
                                          g,
                                          {
                                            name: n.value
                                              ? 'plus-circle-fill'
                                              : 'minus-circle-fill',
                                            color: n.value
                                              ? 'var(--z-blue)'
                                              : 'var(--z-gray-5)',
                                            size: '40rpx'
                                          },
                                          null,
                                          8,
                                          ['name', 'color']
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
                      s(
                        z,
                        { title: '异步控制' },
                        {
                          default: m(() => [
                            s(
                              _,
                              {
                                'model-value': n.value,
                                'onUpdate:modelValue': f
                              },
                              null,
                              8,
                              ['model-value']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        z,
                        { title: '搭配单元格使用' },
                        {
                          default: m(() => [
                            s(
                              h,
                              { center: '', title: '标题' },
                              {
                                'right-icon': m(() => [
                                  s(
                                    _,
                                    {
                                      modelValue: n.value,
                                      'onUpdate:modelValue':
                                        a[6] || (a[6] = (e) => (n.value = e))
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
                ),
                s(j, { ref: 'zDialog' }, null, 512)
              ]),
              _: 1
            }
          )
        )
      }
    }
  }),
  [['__scopeId', 'data-v-963d9870']]
)
export { f as default }
