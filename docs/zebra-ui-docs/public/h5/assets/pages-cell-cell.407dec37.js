import { _ as l } from './z-cell.365e08ec.js'
import {
  _ as e,
  o as t,
  c as a,
  w as i,
  m as s,
  G as u,
  a as o,
  b as r,
  C as d,
  i as c
} from './index-7fd204f3.js'
import { r as n, _, a as f } from './DemoPage.0bae30a9.js'
import { _ as m } from './z-cell-group.8b81d491.js'
import { _ as v } from './z-tag.7271e54a.js'
const p = e({}, [
  [
    'render',
    function (e, p) {
      const g = n(s('z-cell'), l),
        z = n(s('z-cell-group'), m),
        b = u('demo-block'),
        j = d,
        k = n(s('z-tag'), v),
        h = n(s('z-icon'), _),
        w = c,
        x = n(s('DemoPage'), f)
      return (
        t(),
        a(
          x,
          { title: 'Cell' },
          {
            default: i(() => [
              o(
                w,
                { class: 'demo-cell' },
                {
                  default: i(() => [
                    o(
                      b,
                      { title: '基础用法' },
                      {
                        default: i(() => [
                          o(z, null, {
                            default: i(() => [
                              o(g, { title: '单元格', value: '内容' }),
                              o(g, {
                                title: '单元格',
                                value: '内容',
                                label: '描述信息'
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }
                    ),
                    o(
                      b,
                      { title: '卡片风格' },
                      {
                        default: i(() => [
                          o(
                            z,
                            { inset: '' },
                            {
                              default: i(() => [
                                o(g, { title: '单元格', value: '内容' }),
                                o(g, {
                                  title: '单元格',
                                  value: '内容',
                                  label: '描述信息'
                                })
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    o(
                      b,
                      { title: '尺寸' },
                      {
                        default: i(() => [
                          o(z, null, {
                            default: i(() => [
                              o(g, {
                                title: '单元格',
                                value: '内容',
                                size: 'large'
                              }),
                              o(g, {
                                title: '单元格',
                                value: '内容',
                                label: '描述信息',
                                size: 'large'
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }
                    ),
                    o(
                      b,
                      { title: '图标' },
                      {
                        default: i(() => [
                          o(z, null, {
                            default: i(() => [
                              o(g, {
                                title: '单元格',
                                value: '内容',
                                icon: 'appstore'
                              }),
                              o(g, {
                                title: '单元格',
                                value: '内容',
                                icon: 'setting'
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }
                    ),
                    o(
                      b,
                      { title: '箭头' },
                      {
                        default: i(() => [
                          o(z, null, {
                            default: i(() => [
                              o(g, { title: '单元格', 'is-link': '' }),
                              o(g, {
                                title: '单元格',
                                'is-link': '',
                                value: '内容'
                              }),
                              o(g, {
                                title: '单元格',
                                'is-link': '',
                                'arrow-direction': 'down',
                                value: '内容'
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }
                    ),
                    o(
                      b,
                      { title: '分组标题' },
                      {
                        default: i(() => [
                          o(
                            z,
                            { title: '分组1' },
                            {
                              default: i(() => [
                                o(g, { title: '单元格', value: '内容' })
                              ]),
                              _: 1
                            }
                          ),
                          o(
                            z,
                            { title: '分组2' },
                            {
                              default: i(() => [
                                o(g, { title: '单元格', value: '内容' })
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    o(
                      b,
                      { title: '插槽' },
                      {
                        default: i(() => [
                          o(
                            g,
                            { value: '内容', 'is-link': '' },
                            {
                              title: i(() => [
                                o(
                                  j,
                                  { class: 'custom-title' },
                                  { default: i(() => [r('单元格')]), _: 1 }
                                ),
                                o(
                                  k,
                                  { type: 'primary' },
                                  { default: i(() => [r('标签')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          o(
                            g,
                            { title: '单元格', icon: 'creditcard' },
                            {
                              'right-icon': i(() => [
                                o(h, { name: 'search', class: 'search-icon' })
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    o(
                      b,
                      { title: '垂直居中' },
                      {
                        default: i(() => [
                          o(g, {
                            center: '',
                            title: '单元格',
                            value: '内容',
                            label: '描述信息'
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
      )
    }
  ],
  ['__scopeId', 'data-v-66c72912']
])
export { p as default }
