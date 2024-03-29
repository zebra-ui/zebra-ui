import { _ as e } from './z-rate.8a3894b6.js'
import {
  d as l,
  k as a,
  m as t,
  G as r,
  o,
  c as u,
  w as d,
  a as s,
  b as i,
  i as m
} from './index-7fd204f3.js'
import { r as n, b as p, a9 as f, a as _ } from './DemoPage.0bae30a9.js'
import { _ as c } from './z-field.7193b969.js'
import { _ as v } from './z-slider.ac5348e7.js'
import { _ as b } from './z-form.vue_vue_type_script_setup_true_lang.1583735e.js'
import './index.389bd7d1.js'
import './use-touch.1ac9fd53.js'
import './z-cell.365e08ec.js'
import './useParent.5b9c05b5.js'
import './use-id.c1b053ed.js'
import './useChildren.fb2421ae.js'
const g = l({
  __name: 'configProvider',
  setup(l) {
    const g = a(4),
      j = a(50),
      V = {
        rateIconFullColor: '#07c160',
        sliderBarHeight: '8rpx',
        sliderButtonWidth: '40rpx',
        sliderButtonHeight: '40rpx',
        sliderActiveBackground: '#07c160',
        buttonPrimaryBackground: '#07c160',
        buttonPrimaryBorderColor: '#07c160'
      }
    return (l, a) => {
      const z = n(t('z-rate'), e),
        y = n(t('z-field'), c),
        x = n(t('z-slider'), v),
        h = n(t('z-button'), p),
        k = m,
        P = n(t('z-form'), b),
        B = n(t('z-config-provider'), f),
        C = r('demo-block'),
        U = n(t('DemoPage'), _)
      return (
        o(),
        u(
          U,
          { title: 'ConfigProvider' },
          {
            default: d(() => [
              s(
                k,
                { class: 'demo-config-provider' },
                {
                  default: d(() => [
                    s(
                      C,
                      { title: '深色模式' },
                      {
                        default: d(() => [
                          s(
                            B,
                            { theme: 'dark' },
                            {
                              default: d(() => [
                                s(P, null, {
                                  default: d(() => [
                                    s(
                                      y,
                                      { name: 'rate', label: '评分' },
                                      {
                                        input: d(() => [
                                          s(
                                            z,
                                            {
                                              modelValue: g.value,
                                              'onUpdate:modelValue':
                                                a[0] ||
                                                (a[0] = (e) => (g.value = e))
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
                                      y,
                                      { name: 'slider', label: '滑块' },
                                      {
                                        input: d(() => [
                                          s(
                                            x,
                                            {
                                              modelValue: j.value,
                                              'onUpdate:modelValue':
                                                a[1] ||
                                                (a[1] = (e) => (j.value = e))
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
                                      k,
                                      { style: { margin: '32rpx' } },
                                      {
                                        default: d(() => [
                                          s(
                                            h,
                                            { block: '', type: 'primary' },
                                            {
                                              default: d(() => [i(' 提交 ')]),
                                              _: 1
                                            }
                                          )
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    s(
                      C,
                      { title: '定制主题' },
                      {
                        default: d(() => [
                          s(
                            B,
                            { 'theme-vars': V },
                            {
                              default: d(() => [
                                s(P, null, {
                                  default: d(() => [
                                    s(
                                      y,
                                      { name: 'rate', label: '评分' },
                                      {
                                        input: d(() => [
                                          s(
                                            z,
                                            {
                                              modelValue: g.value,
                                              'onUpdate:modelValue':
                                                a[2] ||
                                                (a[2] = (e) => (g.value = e))
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
                                      y,
                                      { name: 'slider', label: '滑块' },
                                      {
                                        input: d(() => [
                                          s(
                                            x,
                                            {
                                              modelValue: j.value,
                                              'onUpdate:modelValue':
                                                a[3] ||
                                                (a[3] = (e) => (j.value = e))
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
                                      k,
                                      { style: { margin: '32rpx' } },
                                      {
                                        default: d(() => [
                                          s(
                                            h,
                                            { block: '', type: 'primary' },
                                            {
                                              default: d(() => [i(' 提交 ')]),
                                              _: 1
                                            }
                                          )
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                })
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
        )
      )
    }
  }
})
export { g as default }
