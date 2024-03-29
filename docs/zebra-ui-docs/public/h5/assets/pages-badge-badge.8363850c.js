import {
  _ as t,
  o as a,
  c as l,
  w as e,
  m as d,
  G as s,
  a as n,
  i as c
} from './index-7fd204f3.js'
import { r as u, c as f, _ as o, a as _ } from './DemoPage.0bae30a9.js'
import { _ as i, a as p } from './z-row.ce10d2dd.js'
import './useParent.5b9c05b5.js'
import './useChildren.fb2421ae.js'
const r = t({}, [
  [
    'render',
    function (t, r) {
      const m = c,
        h = u(d('z-badge'), f),
        g = u(d('z-col'), i),
        b = u(d('z-row'), p),
        x = s('demo-block'),
        j = u(d('z-icon'), o),
        z = u(d('DemoPage'), _)
      return (
        a(),
        l(
          z,
          { title: 'Badge' },
          {
            default: e(() => [
              n(
                m,
                { class: 'demo-badge' },
                {
                  default: e(() => [
                    n(
                      x,
                      { title: '基础用法' },
                      {
                        default: e(() => [
                          n(
                            b,
                            { gutter: '20' },
                            {
                              default: e(() => [
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(
                                        h,
                                        { content: 5 },
                                        {
                                          default: e(() => [
                                            n(m, { class: 'child' })
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(
                                        h,
                                        { content: 10 },
                                        {
                                          default: e(() => [
                                            n(m, { class: 'child' })
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(
                                        h,
                                        { content: 'Hot' },
                                        {
                                          default: e(() => [
                                            n(m, { class: 'child' })
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(
                                        h,
                                        { dot: '' },
                                        {
                                          default: e(() => [
                                            n(m, { class: 'child' })
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
                    n(
                      x,
                      { title: '最大值' },
                      {
                        default: e(() => [
                          n(
                            b,
                            { gutter: '20' },
                            {
                              default: e(() => [
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(
                                        h,
                                        { content: 20, max: '9' },
                                        {
                                          default: e(() => [
                                            n(m, { class: 'child' })
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(
                                        h,
                                        { content: 50, max: '20' },
                                        {
                                          default: e(() => [
                                            n(m, { class: 'child' })
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(
                                        h,
                                        { content: 200, max: '99' },
                                        {
                                          default: e(() => [
                                            n(m, { class: 'child' })
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
                    n(
                      x,
                      { title: '自定义颜色' },
                      {
                        default: e(() => [
                          n(
                            b,
                            { gutter: '20' },
                            {
                              default: e(() => [
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(
                                        h,
                                        { content: 5, color: '#1989fa' },
                                        {
                                          default: e(() => [
                                            n(m, { class: 'child' })
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(
                                        h,
                                        { content: 10, color: '#1989fa' },
                                        {
                                          default: e(() => [
                                            n(m, { class: 'child' })
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(
                                        h,
                                        { dot: '', color: '#1989fa' },
                                        {
                                          default: e(() => [
                                            n(m, { class: 'child' })
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
                    n(
                      x,
                      { title: '自定义内容' },
                      {
                        default: e(() => [
                          n(
                            b,
                            { gutter: '20' },
                            {
                              default: e(() => [
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(h, null, {
                                        content: e(() => [
                                          n(j, { name: 'download' })
                                        ]),
                                        default: e(() => [
                                          n(m, { class: 'child' })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }
                                ),
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(h, null, {
                                        content: e(() => [
                                          n(j, { name: 'flag' })
                                        ]),
                                        default: e(() => [
                                          n(m, { class: 'child' })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }
                                ),
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(h, null, {
                                        content: e(() => [
                                          n(j, { name: 'mail' })
                                        ]),
                                        default: e(() => [
                                          n(m, { class: 'child' })
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
                    ),
                    n(
                      x,
                      { title: '自定义位置' },
                      {
                        default: e(() => [
                          n(
                            b,
                            { gutter: '20' },
                            {
                              default: e(() => [
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(
                                        h,
                                        { content: 10, position: 'top-left' },
                                        {
                                          default: e(() => [
                                            n(m, { class: 'child' })
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(
                                        h,
                                        {
                                          content: 10,
                                          position: 'bottom-left'
                                        },
                                        {
                                          default: e(() => [
                                            n(m, { class: 'child' })
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(
                                        h,
                                        {
                                          content: 10,
                                          position: 'bottom-right'
                                        },
                                        {
                                          default: e(() => [
                                            n(m, { class: 'child' })
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
                    n(
                      x,
                      { title: '独立展示' },
                      {
                        default: e(() => [
                          n(
                            b,
                            { gutter: '20' },
                            {
                              default: e(() => [
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [n(h, { content: 10 })]),
                                    _: 1
                                  }
                                ),
                                n(
                                  g,
                                  { span: '6' },
                                  {
                                    default: e(() => [
                                      n(h, { content: 10, max: '9' })
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
  ],
  ['__scopeId', 'data-v-cb5f97fd']
])
export { r as default }
