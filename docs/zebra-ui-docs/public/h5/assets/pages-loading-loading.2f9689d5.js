import { r as e, d as a, _ as t, a as l } from './DemoPage.0bae30a9.js'
import {
  _ as s,
  o as f,
  c as d,
  w as n,
  m as u,
  G as i,
  a as o,
  b as r,
  i as _
} from './index-7fd204f3.js'
import { _ as p, a as c } from './z-row.ce10d2dd.js'
import './useParent.5b9c05b5.js'
import './useChildren.fb2421ae.js'
const m = s({}, [
  [
    'render',
    function (s, m) {
      const z = e(u('z-loading'), a),
        g = e(u('z-col'), p),
        j = e(u('z-row'), c),
        x = i('demo-block'),
        b = e(u('z-icon'), t),
        w = _,
        y = e(u('DemoPage'), l)
      return (
        f(),
        d(
          y,
          { title: 'Loading' },
          {
            default: n(() => [
              o(
                w,
                { class: 'demo-loading' },
                {
                  default: n(() => [
                    o(
                      x,
                      { title: '基础用法' },
                      {
                        default: n(() => [
                          o(
                            j,
                            { gutter: '20' },
                            {
                              default: n(() => [
                                o(
                                  g,
                                  { span: '6' },
                                  { default: n(() => [o(z)]), _: 1 }
                                ),
                                o(
                                  g,
                                  { span: '6' },
                                  {
                                    default: n(() => [
                                      o(z, { type: 'spinner' })
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
                    o(
                      x,
                      { title: '自定义颜色' },
                      {
                        default: n(() => [
                          o(
                            j,
                            { gutter: '20' },
                            {
                              default: n(() => [
                                o(
                                  g,
                                  { span: '6' },
                                  {
                                    default: n(() => [
                                      o(z, { color: '#1989fa' })
                                    ]),
                                    _: 1
                                  }
                                ),
                                o(
                                  g,
                                  { span: '6' },
                                  {
                                    default: n(() => [
                                      o(z, {
                                        color: '#1989fa',
                                        type: 'spinner'
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
                    ),
                    o(
                      x,
                      { title: '自定义大小' },
                      {
                        default: n(() => [
                          o(
                            j,
                            { gutter: '20' },
                            {
                              default: n(() => [
                                o(
                                  g,
                                  { span: '6' },
                                  {
                                    default: n(() => [
                                      o(z, { color: '#1989fa', size: '24' })
                                    ]),
                                    _: 1
                                  }
                                ),
                                o(
                                  g,
                                  { span: '6' },
                                  {
                                    default: n(() => [
                                      o(z, {
                                        color: '#1989fa',
                                        type: 'spinner',
                                        size: '24'
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
                    ),
                    o(
                      x,
                      { title: '显示文字' },
                      {
                        default: n(() => [
                          o(
                            j,
                            { gutter: '20', align: 'center' },
                            {
                              default: n(() => [
                                o(
                                  g,
                                  { span: '8' },
                                  {
                                    default: n(() => [
                                      o(
                                        z,
                                        { size: '24' },
                                        {
                                          default: n(() => [r('加载中...')]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                o(
                                  g,
                                  { span: '6' },
                                  {
                                    default: n(() => [
                                      o(
                                        z,
                                        { size: '24', vertical: '' },
                                        {
                                          default: n(() => [r('加载中...')]),
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
                    o(
                      x,
                      { title: '文本颜色' },
                      {
                        default: n(() => [
                          o(
                            j,
                            { gutter: '20', align: 'center' },
                            {
                              default: n(() => [
                                o(
                                  g,
                                  { span: '8' },
                                  {
                                    default: n(() => [
                                      o(
                                        z,
                                        { size: '24', 'text-color': '#0094ff' },
                                        {
                                          default: n(() => [r('加载中...')]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                o(
                                  g,
                                  { span: '6' },
                                  {
                                    default: n(() => [
                                      o(
                                        z,
                                        {
                                          size: '24',
                                          vertical: '',
                                          'text-color': '#0094ff'
                                        },
                                        {
                                          default: n(() => [r('加载中...')]),
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
                    o(
                      x,
                      { title: '自定义图标' },
                      {
                        default: n(() => [
                          o(
                            j,
                            { gutter: '20', align: 'center' },
                            {
                              default: n(() => [
                                o(
                                  g,
                                  { span: '8' },
                                  {
                                    default: n(() => [
                                      o(
                                        z,
                                        { size: '30' },
                                        {
                                          icon: n(() => [
                                            o(b, { name: 'undo', size: '30' })
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                o(
                                  g,
                                  { span: '6' },
                                  {
                                    default: n(() => [
                                      o(
                                        z,
                                        { size: '30' },
                                        {
                                          icon: n(() => [
                                            o(b, {
                                              name: 'reloadtime',
                                              size: '30'
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
  ]
])
export { m as default }
