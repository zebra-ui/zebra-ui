import { _ as e } from './z-slider.ac5348e7.js'
import {
  d as l,
  k as a,
  m as t,
  G as d,
  o,
  c as u,
  w as s,
  a as m,
  b as i,
  t as n,
  i as r,
  _ as f
} from './index-7fd204f3.js'
import { r as _, a as V } from './DemoPage.0bae30a9.js'
import { _ as c } from './z-toast.a77377ba.js'
import { s as p } from './z-toast.44a3344c.js'
import './index.389bd7d1.js'
import './use-touch.1ac9fd53.js'
const v = f(
  l({
    __name: 'slider',
    setup(l) {
      const f = a(50),
        v = a(0),
        g = a(50),
        h = a([10, 50]),
        U = a(50),
        b = a([10, 50]),
        j = (e) => p('当前值：' + e)
      return (l, a) => {
        const p = _(t('z-slider'), e),
          x = r,
          C = d('demo-block'),
          z = _(t('z-toast'), c),
          y = _(t('DemoPage'), V)
        return (
          o(),
          u(
            y,
            { title: 'Slider' },
            {
              default: s(() => [
                m(
                  x,
                  { class: 'demo-slider' },
                  {
                    default: s(() => [
                      m(
                        C,
                        { title: '基础用法' },
                        {
                          default: s(() => [
                            m(
                              x,
                              { class: 'demo-slider-item' },
                              {
                                default: s(() => [
                                  m(
                                    p,
                                    {
                                      modelValue: f.value,
                                      'onUpdate:modelValue':
                                        a[0] || (a[0] = (e) => (f.value = e)),
                                      onChange: j
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
                      m(
                        C,
                        { title: '双滑块' },
                        {
                          default: s(() => [
                            m(
                              x,
                              { class: 'demo-slider-item' },
                              {
                                default: s(() => [
                                  m(
                                    p,
                                    {
                                      modelValue: h.value,
                                      'onUpdate:modelValue':
                                        a[1] || (a[1] = (e) => (h.value = e)),
                                      range: '',
                                      onChange: j
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
                      m(
                        C,
                        { title: '指定选择范围' },
                        {
                          default: s(() => [
                            m(
                              x,
                              { class: 'demo-slider-item' },
                              {
                                default: s(() => [
                                  m(
                                    p,
                                    {
                                      modelValue: v.value,
                                      'onUpdate:modelValue':
                                        a[2] || (a[2] = (e) => (v.value = e)),
                                      min: -50,
                                      max: 50,
                                      onChange: j
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
                      m(
                        C,
                        { title: '禁用' },
                        {
                          default: s(() => [
                            m(
                              x,
                              { class: 'demo-slider-item' },
                              {
                                default: s(() => [
                                  m(
                                    p,
                                    {
                                      modelValue: f.value,
                                      'onUpdate:modelValue':
                                        a[3] || (a[3] = (e) => (f.value = e)),
                                      disabled: ''
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
                      m(
                        C,
                        { title: '指定步长' },
                        {
                          default: s(() => [
                            m(
                              x,
                              { class: 'demo-slider-item' },
                              {
                                default: s(() => [
                                  m(
                                    p,
                                    {
                                      modelValue: g.value,
                                      'onUpdate:modelValue':
                                        a[4] || (a[4] = (e) => (g.value = e)),
                                      step: 10,
                                      onChange: j
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
                      m(
                        C,
                        { title: '自定义样式' },
                        {
                          default: s(() => [
                            m(
                              x,
                              { class: 'demo-slider-item' },
                              {
                                default: s(() => [
                                  m(
                                    p,
                                    {
                                      modelValue: f.value,
                                      'onUpdate:modelValue':
                                        a[5] || (a[5] = (e) => (f.value = e)),
                                      'bar-height': '8rpx',
                                      'active-color': '#ee0a24',
                                      onChange: j
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
                      m(
                        C,
                        { title: '自定义按钮' },
                        {
                          default: s(() => [
                            m(
                              x,
                              { class: 'demo-slider-item' },
                              {
                                default: s(() => [
                                  m(
                                    p,
                                    {
                                      modelValue: f.value,
                                      'onUpdate:modelValue':
                                        a[6] || (a[6] = (e) => (f.value = e))
                                    },
                                    {
                                      button: s(() => [
                                        m(
                                          x,
                                          { class: 'custom-button' },
                                          {
                                            default: s(() => [
                                              i(n(f.value), 1)
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
                            )
                          ]),
                          _: 1
                        }
                      ),
                      m(
                        C,
                        { title: '垂直方向' },
                        {
                          default: s(() => [
                            m(
                              x,
                              { class: 'demo-slider-item' },
                              {
                                default: s(() => [
                                  m(
                                    x,
                                    { style: { height: '300rpx' } },
                                    {
                                      default: s(() => [
                                        m(
                                          p,
                                          {
                                            modelValue: U.value,
                                            'onUpdate:modelValue':
                                              a[7] ||
                                              (a[7] = (e) => (U.value = e)),
                                            vertical: '',
                                            onChange: j
                                          },
                                          null,
                                          8,
                                          ['modelValue']
                                        ),
                                        m(
                                          p,
                                          {
                                            modelValue: b.value,
                                            'onUpdate:modelValue':
                                              a[8] ||
                                              (a[8] = (e) => (b.value = e)),
                                            range: '',
                                            vertical: '',
                                            'custom-style': {
                                              'margin-left': '200rpx'
                                            },
                                            onChange: j
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
                    ]),
                    _: 1
                  }
                ),
                m(z, { ref: 'zToast' }, null, 512)
              ]),
              _: 1
            }
          )
        )
      }
    }
  }),
  [['__scopeId', 'data-v-ba5a53e4']]
)
export { v as default }
