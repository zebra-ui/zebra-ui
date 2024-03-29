import { _ as e } from './z-rate.8a3894b6.js'
import {
  d as l,
  k as a,
  m as o,
  G as u,
  o as t,
  c as d,
  w as m,
  a as n,
  i as s
} from './index-7fd204f3.js'
import { r as i, a as r } from './DemoPage.0bae30a9.js'
import { _ as V } from './z-toast.a77377ba.js'
import { s as f } from './z-toast.44a3344c.js'
import './index.389bd7d1.js'
import './use-touch.1ac9fd53.js'
const v = l({
  __name: 'rate',
  setup(l) {
    const v = a(3),
      p = a(2.5),
      _ = a(3),
      c = a(3),
      U = a(3.3),
      h = (e) => f('当前值：' + e)
    return (l, a) => {
      const f = i(o('z-rate'), e),
        j = u('demo-block'),
        z = s,
        g = i(o('z-toast'), V),
        b = i(o('DemoPage'), r)
      return (
        t(),
        d(
          b,
          { title: 'Rate' },
          {
            default: m(() => [
              n(
                z,
                { class: 'demo-rate' },
                {
                  default: m(() => [
                    n(
                      j,
                      { title: '基础用法' },
                      {
                        default: m(() => [
                          n(
                            f,
                            {
                              modelValue: v.value,
                              'onUpdate:modelValue':
                                a[0] || (a[0] = (e) => (v.value = e))
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
                      j,
                      { title: '自定义图标' },
                      {
                        default: m(() => [
                          n(
                            f,
                            {
                              modelValue: v.value,
                              'onUpdate:modelValue':
                                a[1] || (a[1] = (e) => (v.value = e)),
                              icon: 'heart-fill',
                              'void-icon': 'heart'
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
                      j,
                      { title: '自定义样式' },
                      {
                        default: m(() => [
                          n(
                            f,
                            {
                              modelValue: v.value,
                              'onUpdate:modelValue':
                                a[2] || (a[2] = (e) => (v.value = e)),
                              size: 35,
                              color: '#ffd21e',
                              'void-icon': 'star',
                              'void-color': '#eee'
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
                      j,
                      { title: '半星' },
                      {
                        default: m(() => [
                          n(
                            f,
                            {
                              modelValue: p.value,
                              'onUpdate:modelValue':
                                a[3] || (a[3] = (e) => (p.value = e)),
                              'allow-half': ''
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
                      j,
                      { title: '自定义数量' },
                      {
                        default: m(() => [
                          n(
                            f,
                            {
                              modelValue: _.value,
                              'onUpdate:modelValue':
                                a[4] || (a[4] = (e) => (_.value = e)),
                              count: 6
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
                      j,
                      { title: '可清空' },
                      {
                        default: m(() => [
                          n(
                            f,
                            {
                              modelValue: c.value,
                              'onUpdate:modelValue':
                                a[5] || (a[5] = (e) => (c.value = e)),
                              clearable: ''
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
                      j,
                      { title: '禁用状态' },
                      {
                        default: m(() => [
                          n(
                            f,
                            {
                              modelValue: v.value,
                              'onUpdate:modelValue':
                                a[6] || (a[6] = (e) => (v.value = e)),
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
                    n(
                      j,
                      { title: '只读状态' },
                      {
                        default: m(() => [
                          n(
                            f,
                            {
                              modelValue: v.value,
                              'onUpdate:modelValue':
                                a[7] || (a[7] = (e) => (v.value = e)),
                              readonly: ''
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
                      j,
                      { title: '只读状态显示小数' },
                      {
                        default: m(() => [
                          n(
                            f,
                            {
                              modelValue: U.value,
                              'onUpdate:modelValue':
                                a[8] || (a[8] = (e) => (U.value = e)),
                              readonly: '',
                              'allow-half': ''
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
                      j,
                      { title: '监听 change 事件' },
                      {
                        default: m(() => [
                          n(
                            f,
                            {
                              modelValue: v.value,
                              'onUpdate:modelValue':
                                a[9] || (a[9] = (e) => (v.value = e)),
                              onChange: h
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
              ),
              n(g, { ref: 'zToast' }, null, 512)
            ]),
            _: 1
          }
        )
      )
    }
  }
})
export { v as default }
