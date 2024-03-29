import { _ as e } from './z-stepper.cbacd13a.js'
import {
  d as l,
  k as a,
  m as t,
  G as u,
  o,
  c as d,
  w as m,
  a as s,
  i as n
} from './index-7fd204f3.js'
import { r as i, a as p } from './DemoPage.0bae30a9.js'
import { _ as r } from './z-toast.a77377ba.js'
import { a as V, d as f } from './z-toast.44a3344c.js'
import './index.389bd7d1.js'
const v = l({
  __name: 'stepper',
  setup(l) {
    const v = a(1),
      _ = a(5),
      U = a(1),
      c = a(1),
      z = () => (
        V({ forbidClick: !0 }),
        new Promise((e) => {
          setTimeout(() => {
            f(), e(!0)
          }, 1e3)
        })
      )
    return (l, a) => {
      const V = i(t('z-stepper'), e),
        f = u('demo-block'),
        b = n,
        x = i(t('z-toast'), r),
        j = i(t('DemoPage'), p)
      return (
        o(),
        d(
          j,
          { title: 'Stepper' },
          {
            default: m(() => [
              s(
                b,
                { class: 'demo-stepper' },
                {
                  default: m(() => [
                    s(
                      f,
                      { title: '基础用法' },
                      {
                        default: m(() => [
                          s(
                            V,
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
                    s(
                      f,
                      { title: '步长设置' },
                      {
                        default: m(() => [
                          s(
                            V,
                            {
                              modelValue: v.value,
                              'onUpdate:modelValue':
                                a[1] || (a[1] = (e) => (v.value = e)),
                              step: '2'
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
                      f,
                      { title: '限制输入范围' },
                      {
                        default: m(() => [
                          s(
                            V,
                            {
                              modelValue: _.value,
                              'onUpdate:modelValue':
                                a[2] || (a[2] = (e) => (_.value = e)),
                              min: '5',
                              max: '8'
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
                      f,
                      { title: '限制输入整数' },
                      {
                        default: m(() => [
                          s(
                            V,
                            {
                              modelValue: U.value,
                              'onUpdate:modelValue':
                                a[3] || (a[3] = (e) => (U.value = e)),
                              integer: ''
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
                      f,
                      { title: '禁用状态' },
                      {
                        default: m(() => [
                          s(
                            V,
                            {
                              modelValue: v.value,
                              'onUpdate:modelValue':
                                a[4] || (a[4] = (e) => (v.value = e)),
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
                      f,
                      { title: '禁用输入框' },
                      {
                        default: m(() => [
                          s(
                            V,
                            {
                              modelValue: v.value,
                              'onUpdate:modelValue':
                                a[5] || (a[5] = (e) => (v.value = e)),
                              'disable-input': ''
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
                      f,
                      { title: '固定小数位数' },
                      {
                        default: m(() => [
                          s(
                            V,
                            {
                              modelValue: c.value,
                              'onUpdate:modelValue':
                                a[6] || (a[6] = (e) => (c.value = e)),
                              step: '0.2',
                              'decimal-length': 1
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
                      f,
                      { title: '自定义大小' },
                      {
                        default: m(() => [
                          s(
                            V,
                            {
                              modelValue: v.value,
                              'onUpdate:modelValue':
                                a[7] || (a[7] = (e) => (v.value = e)),
                              'input-width': '80rpx',
                              'button-size': '64rpx'
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
                      f,
                      { title: '异步变更' },
                      {
                        default: m(() => [
                          s(
                            V,
                            {
                              modelValue: v.value,
                              'onUpdate:modelValue':
                                a[8] || (a[8] = (e) => (v.value = e)),
                              'before-change': z
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
                      f,
                      { title: '圆角风格' },
                      {
                        default: m(() => [
                          s(
                            V,
                            {
                              modelValue: v.value,
                              'onUpdate:modelValue':
                                a[9] || (a[9] = (e) => (v.value = e)),
                              theme: 'round',
                              'button-size': '44rpx',
                              'disable-input': ''
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
              s(x, { ref: 'zToast' }, null, 512)
            ]),
            _: 1
          }
        )
      )
    }
  }
})
export { v as default }
