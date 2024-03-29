import { _ as e, a as t } from './z-grid.6d744e86.js'
import {
  _ as a,
  o as i,
  c as l,
  w as o,
  m as d,
  G as u,
  a as s,
  e as m,
  r,
  F as n,
  i as c
} from './index-7fd204f3.js'
import { r as f, a as _ } from './DemoPage.0bae30a9.js'
import { _ as g } from './z-image.24b91007.js'
import './useParent.5b9c05b5.js'
import './useChildren.fb2421ae.js'
const p = a({}, [
  [
    'render',
    function (a, p) {
      const x = f(d('z-grid-item'), e),
        z = f(d('z-grid'), t),
        b = u('demo-block'),
        h = f(d('z-image'), g),
        w = c,
        j = f(d('DemoPage'), _)
      return (
        i(),
        l(
          j,
          { title: 'Grid' },
          {
            default: o(() => [
              s(
                w,
                { class: 'demo-grid' },
                {
                  default: o(() => [
                    s(
                      b,
                      { title: '基础用法' },
                      {
                        default: o(() => [
                          s(z, null, {
                            default: o(() => [
                              (i(),
                              m(
                                n,
                                null,
                                r(4, (e) =>
                                  s(x, { key: e, icon: 'image', text: '文字' })
                                ),
                                64
                              ))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }
                    ),
                    s(
                      b,
                      { title: '自定义列数' },
                      {
                        default: o(() => [
                          s(
                            z,
                            { 'column-num': 3 },
                            {
                              default: o(() => [
                                (i(),
                                m(
                                  n,
                                  null,
                                  r(6, (e) =>
                                    s(x, {
                                      key: e,
                                      icon: 'image',
                                      text: '文字'
                                    })
                                  ),
                                  64
                                ))
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    s(
                      b,
                      { title: '自定义内容' },
                      {
                        default: o(() => [
                          s(
                            z,
                            { border: !1, 'column-num': 3 },
                            {
                              default: o(() => [
                                s(x, null, {
                                  default: o(() => [
                                    s(h, {
                                      mode: 'widthFix',
                                      src: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg'
                                    })
                                  ]),
                                  _: 1
                                }),
                                s(x, null, {
                                  default: o(() => [
                                    s(h, {
                                      mode: 'widthFix',
                                      src: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg'
                                    })
                                  ]),
                                  _: 1
                                }),
                                s(x, null, {
                                  default: o(() => [
                                    s(h, {
                                      mode: 'widthFix',
                                      src: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg'
                                    })
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
                      b,
                      { title: '正方形格子' },
                      {
                        default: o(() => [
                          s(
                            z,
                            { square: '' },
                            {
                              default: o(() => [
                                (i(),
                                m(
                                  n,
                                  null,
                                  r(8, (e) =>
                                    s(x, {
                                      key: e,
                                      icon: 'image',
                                      text: '文字'
                                    })
                                  ),
                                  64
                                ))
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    s(
                      b,
                      { title: '格子间距' },
                      {
                        default: o(() => [
                          s(
                            z,
                            { gutter: 10 },
                            {
                              default: o(() => [
                                (i(),
                                m(
                                  n,
                                  null,
                                  r(8, (e) =>
                                    s(x, {
                                      key: e,
                                      icon: 'image',
                                      text: '文字'
                                    })
                                  ),
                                  64
                                ))
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    s(
                      b,
                      { title: '内容横排' },
                      {
                        default: o(() => [
                          s(
                            z,
                            { direction: 'horizontal', 'column-num': 3 },
                            {
                              default: o(() => [
                                s(x, { icon: 'image', text: '文字' }),
                                s(x, { icon: 'image', text: '文字' }),
                                s(x, { icon: 'image', text: '文字' })
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    s(
                      b,
                      { title: '徽标提示' },
                      {
                        default: o(() => [
                          s(
                            z,
                            { 'column-num': 2 },
                            {
                              default: o(() => [
                                s(x, { icon: 'home', text: '文字', dot: '' }),
                                s(x, {
                                  icon: 'search',
                                  text: '文字',
                                  badge: '99+'
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
  ],
  ['__scopeId', 'data-v-52d3eeca']
])
export { p as default }
