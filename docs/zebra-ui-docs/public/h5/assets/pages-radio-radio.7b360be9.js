import { _ as e, a } from './z-radio-group.0b52c354.js'
import {
  d as l,
  k as t,
  m as o,
  G as u,
  o as d,
  c as m,
  w as i,
  a as n,
  b as s,
  q as r,
  i as c,
  _
} from './index-7fd204f3.js'
import { r as f, a as p } from './DemoPage.0bae30a9.js'
import { _ as V } from './z-cell.365e08ec.js'
import { _ as v } from './z-cell-group.8b81d491.js'
import './z-checker.a83e3fe8.js'
import './useParent.5b9c05b5.js'
import './useChildren.fb2421ae.js'
import './index.389bd7d1.js'
const z = _(
  l({
    __name: 'radio',
    setup(l) {
      const _ = t('1'),
        z = 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png',
        g = 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-noselect.png'
      return (l, t) => {
        const b = f(o('z-radio'), e),
          h = f(o('z-radio-group'), a),
          U = u('demo-block'),
          x = r,
          j = f(o('z-cell'), V),
          k = f(o('z-cell-group'), v),
          y = c,
          C = f(o('DemoPage'), p)
        return (
          d(),
          m(
            C,
            { title: 'Radio' },
            {
              default: i(() => [
                n(
                  y,
                  { class: 'demo-radio' },
                  {
                    default: i(() => [
                      n(
                        U,
                        { title: '基础用法' },
                        {
                          default: i(() => [
                            n(
                              h,
                              {
                                modelValue: _.value,
                                'onUpdate:modelValue':
                                  t[0] || (t[0] = (e) => (_.value = e))
                              },
                              {
                                default: i(() => [
                                  n(
                                    b,
                                    { name: '1' },
                                    { default: i(() => [s('单选框 1')]), _: 1 }
                                  ),
                                  n(
                                    b,
                                    {
                                      name: '2',
                                      'custom-style': { 'margin-top': '20rpx' }
                                    },
                                    { default: i(() => [s('单选框 2')]), _: 1 }
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
                      n(
                        U,
                        { title: '水平排列' },
                        {
                          default: i(() => [
                            n(
                              h,
                              {
                                modelValue: _.value,
                                'onUpdate:modelValue':
                                  t[1] || (t[1] = (e) => (_.value = e)),
                                direction: 'horizontal'
                              },
                              {
                                default: i(() => [
                                  n(
                                    b,
                                    { name: '1' },
                                    { default: i(() => [s('单选框 1')]), _: 1 }
                                  ),
                                  n(
                                    b,
                                    { name: '2' },
                                    { default: i(() => [s('单选框 2')]), _: 1 }
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
                      n(
                        U,
                        { title: '禁用状态' },
                        {
                          default: i(() => [
                            n(
                              h,
                              {
                                modelValue: _.value,
                                'onUpdate:modelValue':
                                  t[2] || (t[2] = (e) => (_.value = e)),
                                disabled: ''
                              },
                              {
                                default: i(() => [
                                  n(
                                    b,
                                    { name: '1' },
                                    { default: i(() => [s('单选框 1')]), _: 1 }
                                  ),
                                  n(
                                    b,
                                    {
                                      name: '2',
                                      'custom-style': { 'margin-top': '20rpx' }
                                    },
                                    { default: i(() => [s('单选框 2')]), _: 1 }
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
                      n(
                        U,
                        { title: '自定义形状' },
                        {
                          default: i(() => [
                            n(
                              h,
                              {
                                modelValue: _.value,
                                'onUpdate:modelValue':
                                  t[3] || (t[3] = (e) => (_.value = e)),
                                shape: 'square'
                              },
                              {
                                default: i(() => [
                                  n(
                                    b,
                                    { name: '1' },
                                    { default: i(() => [s('单选框 1')]), _: 1 }
                                  ),
                                  n(
                                    b,
                                    {
                                      name: '2',
                                      'custom-style': { 'margin-top': '20rpx' }
                                    },
                                    { default: i(() => [s('单选框 2')]), _: 1 }
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue']
                            ),
                            n(
                              h,
                              {
                                modelValue: _.value,
                                'onUpdate:modelValue':
                                  t[4] || (t[4] = (e) => (_.value = e)),
                                shape: 'dot'
                              },
                              {
                                default: i(() => [
                                  n(
                                    b,
                                    {
                                      name: '1',
                                      'custom-style': { 'margin-top': '20rpx' }
                                    },
                                    { default: i(() => [s('单选框 1')]), _: 1 }
                                  ),
                                  n(
                                    b,
                                    {
                                      name: '2',
                                      'custom-style': { 'margin-top': '20rpx' }
                                    },
                                    { default: i(() => [s('单选框 2')]), _: 1 }
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
                      n(
                        U,
                        { title: '自定义颜色' },
                        {
                          default: i(() => [
                            n(
                              h,
                              {
                                modelValue: _.value,
                                'onUpdate:modelValue':
                                  t[5] || (t[5] = (e) => (_.value = e)),
                                direction: 'horizontal'
                              },
                              {
                                default: i(() => [
                                  n(
                                    b,
                                    { name: '1', 'checked-color': '#ee0a24' },
                                    { default: i(() => [s('单选框 1')]), _: 1 }
                                  ),
                                  n(
                                    b,
                                    { name: '2', 'checked-color': '#ee0a24' },
                                    { default: i(() => [s('单选框 2')]), _: 1 }
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
                      n(
                        U,
                        { title: '自定义大小' },
                        {
                          default: i(() => [
                            n(
                              h,
                              {
                                modelValue: _.value,
                                'onUpdate:modelValue':
                                  t[6] || (t[6] = (e) => (_.value = e)),
                                direction: 'horizontal'
                              },
                              {
                                default: i(() => [
                                  n(
                                    b,
                                    { name: '1', 'icon-size': '48rpx' },
                                    { default: i(() => [s('单选框 1')]), _: 1 }
                                  ),
                                  n(
                                    b,
                                    { name: '2', 'icon-size': '48rpx' },
                                    { default: i(() => [s('单选框 2')]), _: 1 }
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
                      n(
                        U,
                        { title: '自定义图标' },
                        {
                          default: i(() => [
                            n(
                              h,
                              {
                                modelValue: _.value,
                                'onUpdate:modelValue':
                                  t[7] || (t[7] = (e) => (_.value = e)),
                                direction: 'horizontal'
                              },
                              {
                                default: i(() => [
                                  n(
                                    b,
                                    { name: '1' },
                                    {
                                      icon: i(() => [
                                        n(
                                          x,
                                          {
                                            class: 'img-icon',
                                            src: '1' == _.value ? z : g
                                          },
                                          null,
                                          8,
                                          ['src']
                                        )
                                      ]),
                                      default: i(() => [s(' 单选框 1 ')]),
                                      _: 1
                                    }
                                  ),
                                  n(
                                    b,
                                    { name: '2' },
                                    {
                                      icon: i(() => [
                                        n(
                                          x,
                                          {
                                            class: 'img-icon',
                                            src: '2' == _.value ? z : g
                                          },
                                          null,
                                          8,
                                          ['src']
                                        )
                                      ]),
                                      default: i(() => [s(' 单选框 2 ')]),
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
                      n(
                        U,
                        { title: '左侧文本' },
                        {
                          default: i(() => [
                            n(
                              h,
                              {
                                modelValue: _.value,
                                'onUpdate:modelValue':
                                  t[8] || (t[8] = (e) => (_.value = e)),
                                direction: 'horizontal'
                              },
                              {
                                default: i(() => [
                                  n(
                                    b,
                                    { name: '1', 'label-position': 'left' },
                                    { default: i(() => [s('单选框 1')]), _: 1 }
                                  ),
                                  n(
                                    b,
                                    { name: '2', 'label-position': 'left' },
                                    { default: i(() => [s('单选框 2')]), _: 1 }
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
                      n(
                        U,
                        { title: '禁用文本点击' },
                        {
                          default: i(() => [
                            n(
                              h,
                              {
                                modelValue: _.value,
                                'onUpdate:modelValue':
                                  t[9] || (t[9] = (e) => (_.value = e)),
                                direction: 'horizontal'
                              },
                              {
                                default: i(() => [
                                  n(
                                    b,
                                    { name: '1', 'label-disabled': '' },
                                    { default: i(() => [s('单选框 1')]), _: 1 }
                                  ),
                                  n(
                                    b,
                                    { name: '2', 'label-disabled': '' },
                                    { default: i(() => [s('单选框 2')]), _: 1 }
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
                      n(
                        U,
                        { title: '搭配单元格组件使用' },
                        {
                          default: i(() => [
                            n(
                              h,
                              {
                                modelValue: _.value,
                                'onUpdate:modelValue':
                                  t[12] || (t[12] = (e) => (_.value = e))
                              },
                              {
                                default: i(() => [
                                  n(k, null, {
                                    default: i(() => [
                                      n(
                                        j,
                                        {
                                          title: '单选框 1',
                                          clickable: '',
                                          onClick:
                                            t[10] ||
                                            (t[10] = (e) => (_.value = '1'))
                                        },
                                        {
                                          'right-icon': i(() => [
                                            n(b, { name: '1' })
                                          ]),
                                          _: 1
                                        }
                                      ),
                                      n(
                                        j,
                                        {
                                          title: '单选框 2',
                                          clickable: '',
                                          onClick:
                                            t[11] ||
                                            (t[11] = (e) => (_.value = '2'))
                                        },
                                        {
                                          'right-icon': i(() => [
                                            n(b, { name: '2' })
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  })
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
                )
              ]),
              _: 1
            }
          )
        )
      }
    }
  }),
  [['__scopeId', 'data-v-49dca60e']]
)
export { z as default }
