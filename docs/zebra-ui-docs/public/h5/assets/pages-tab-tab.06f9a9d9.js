import {
  d as t,
  k as e,
  m as a,
  G as l,
  o as i,
  c as u,
  w as d,
  a as s,
  e as c,
  r as o,
  F as v,
  b as f,
  t as _,
  i as m,
  _ as n
} from './index-7fd204f3.js'
import { _ as r, a as p } from './z-tabs.8d3e6868.js'
import { r as b, _ as k, a as y } from './DemoPage.0bae30a9.js'
import { _ as U } from './z-toast.a77377ba.js'
import { s as $ } from './z-toast.44a3344c.js'
import './z-dialog.b209de9d.js'
import './useParent.5b9c05b5.js'
import './use-id.c1b053ed.js'
import './z-sticky.e6c39ae3.js'
import './useChildren.fb2421ae.js'
import './use-touch.1ac9fd53.js'
const j = n(
  t({
    __name: 'tab',
    setup(t) {
      const n = e(0),
        j = e(0),
        z = e(0),
        h = e(0),
        g = e(0),
        P = e('name1'),
        w = ({ title: t }) => $(t),
        x = (t) =>
          1 !== t &&
          new Promise((e) => {
            e(3 !== t)
          })
      return (t, e) => {
        const $ = m,
          C = b(a('z-tab'), r),
          T = b(a('z-tabs'), p),
          D = l('demo-block'),
          F = b(a('z-icon'), k),
          G = b(a('z-toast'), U),
          I = b(a('DemoPage'), y)
        return (
          i(),
          u(
            I,
            { title: 'Tab' },
            {
              default: d(() => [
                s(
                  $,
                  { class: 'demo-tab' },
                  {
                    default: d(() => [
                      s(
                        D,
                        { title: '基础用法' },
                        {
                          default: d(() => [
                            s(
                              T,
                              {
                                active: n.value,
                                'onUpdate:active':
                                  e[0] || (e[0] = (t) => (n.value = t))
                              },
                              {
                                default: d(() => [
                                  (i(),
                                  c(
                                    v,
                                    null,
                                    o(4, (t, e) =>
                                      s(
                                        C,
                                        { key: e, title: `标签 ${t}` },
                                        {
                                          default: d(() => [
                                            s(
                                              $,
                                              { class: 'demo-tab-item' },
                                              {
                                                default: d(() => [
                                                  f(' 内容' + _(t), 1)
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['title']
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['active']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        D,
                        { title: '通过名称匹配' },
                        {
                          default: d(() => [
                            s(
                              T,
                              {
                                active: P.value,
                                'onUpdate:active':
                                  e[1] || (e[1] = (t) => (P.value = t))
                              },
                              {
                                default: d(() => [
                                  (i(),
                                  c(
                                    v,
                                    null,
                                    o(4, (t, e) =>
                                      s(
                                        C,
                                        {
                                          key: e,
                                          title: `标签 ${t}`,
                                          name: `name${t}`
                                        },
                                        {
                                          default: d(() => [
                                            s(
                                              $,
                                              { class: 'demo-tab-item' },
                                              {
                                                default: d(() => [
                                                  f(' 内容' + _(t), 1)
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['title', 'name']
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['active']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        D,
                        { title: '吸顶' },
                        {
                          default: d(() => [
                            s(
                              T,
                              {
                                active: n.value,
                                'onUpdate:active':
                                  e[2] || (e[2] = (t) => (n.value = t)),
                                sticky: '',
                                'custom-navbar': ''
                              },
                              {
                                default: d(() => [
                                  (i(),
                                  c(
                                    v,
                                    null,
                                    o(4, (t, e) =>
                                      s(
                                        C,
                                        { key: e, title: `标签 ${t}` },
                                        {
                                          default: d(() => [
                                            s(
                                              $,
                                              { class: 'demo-tab-item' },
                                              {
                                                default: d(() => [
                                                  f(' 内容' + _(t), 1)
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['title']
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['active']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        D,
                        { title: '标签栏滚动' },
                        {
                          default: d(() => [
                            s(
                              T,
                              {
                                active: j.value,
                                'onUpdate:active':
                                  e[3] || (e[3] = (t) => (j.value = t))
                              },
                              {
                                default: d(() => [
                                  (i(),
                                  c(
                                    v,
                                    null,
                                    o(8, (t, e) =>
                                      s(
                                        C,
                                        { key: e, title: `标签 ${t}` },
                                        {
                                          default: d(() => [
                                            s(
                                              $,
                                              { class: 'demo-tab-item' },
                                              {
                                                default: d(() => [
                                                  f(' 内容' + _(t), 1)
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['title']
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['active']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        D,
                        { title: '禁用标签' },
                        {
                          default: d(() => [
                            s(
                              T,
                              {
                                active: h.value,
                                'onUpdate:active':
                                  e[4] || (e[4] = (t) => (h.value = t))
                              },
                              {
                                default: d(() => [
                                  (i(),
                                  c(
                                    v,
                                    null,
                                    o(4, (t, e) =>
                                      s(
                                        C,
                                        {
                                          key: e,
                                          title: `标签 ${t}`,
                                          disabled: 2 == e
                                        },
                                        {
                                          default: d(() => [
                                            s(
                                              $,
                                              { class: 'demo-tab-item' },
                                              {
                                                default: d(() => [
                                                  f(' 内容' + _(t), 1)
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['title', 'disabled']
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['active']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        D,
                        { title: '样式风格' },
                        {
                          default: d(() => [
                            s(
                              T,
                              {
                                active: n.value,
                                'onUpdate:active':
                                  e[5] || (e[5] = (t) => (n.value = t)),
                                type: 'card'
                              },
                              {
                                default: d(() => [
                                  (i(),
                                  c(
                                    v,
                                    null,
                                    o(4, (t, e) =>
                                      s(
                                        C,
                                        { key: e, title: `标签 ${t}` },
                                        {
                                          default: d(() => [
                                            s(
                                              $,
                                              { class: 'demo-tab-item' },
                                              {
                                                default: d(() => [
                                                  f(' 内容' + _(t), 1)
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['title']
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['active']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        D,
                        { title: '点击事件' },
                        {
                          default: d(() => [
                            s(
                              T,
                              {
                                active: n.value,
                                'onUpdate:active':
                                  e[6] || (e[6] = (t) => (n.value = t)),
                                onClickTab: w
                              },
                              {
                                default: d(() => [
                                  (i(),
                                  c(
                                    v,
                                    null,
                                    o(4, (t, e) =>
                                      s(
                                        C,
                                        { key: e, title: `标签 ${t}` },
                                        {
                                          default: d(() => [
                                            s(
                                              $,
                                              { class: 'demo-tab-item' },
                                              {
                                                default: d(() => [
                                                  f(' 内容' + _(t), 1)
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['title']
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['active']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        D,
                        { title: '收缩布局' },
                        {
                          default: d(() => [
                            s(
                              T,
                              {
                                active: n.value,
                                'onUpdate:active':
                                  e[7] || (e[7] = (t) => (n.value = t)),
                                shrink: ''
                              },
                              {
                                default: d(() => [
                                  (i(),
                                  c(
                                    v,
                                    null,
                                    o(4, (t, e) =>
                                      s(
                                        C,
                                        { key: e, title: `标签 ${t}` },
                                        {
                                          default: d(() => [
                                            s(
                                              $,
                                              { class: 'demo-tab-item' },
                                              {
                                                default: d(() => [
                                                  f(' 内容' + _(t), 1)
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['title']
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['active']
                            ),
                            s(
                              T,
                              {
                                active: n.value,
                                'onUpdate:active':
                                  e[8] || (e[8] = (t) => (n.value = t)),
                                shrink: '',
                                type: 'card'
                              },
                              {
                                default: d(() => [
                                  (i(),
                                  c(
                                    v,
                                    null,
                                    o(4, (t, e) =>
                                      s(
                                        C,
                                        { key: e, title: `标签 ${t}` },
                                        {
                                          default: d(() => [
                                            s(
                                              $,
                                              { class: 'demo-tab-item' },
                                              {
                                                default: d(() => [
                                                  f(' 内容' + _(t), 1)
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['title']
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['active']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        D,
                        { title: '自定义标题' },
                        {
                          default: d(() => [
                            s(
                              T,
                              {
                                active: n.value,
                                'onUpdate:active':
                                  e[9] || (e[9] = (t) => (n.value = t))
                              },
                              {
                                title: d(({ item: t }) => [
                                  s(F, { name: 'star' }),
                                  f('选项 ' + _(t.slotContent), 1)
                                ]),
                                default: d(() => [
                                  (i(),
                                  c(
                                    v,
                                    null,
                                    o(4, (t, e) =>
                                      s(
                                        C,
                                        { key: e, 'slot-content': t },
                                        {
                                          default: d(() => [
                                            s(
                                              $,
                                              { class: 'demo-tab-item' },
                                              {
                                                default: d(() => [
                                                  f(' 内容' + _(t), 1)
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['slot-content']
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['active']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        D,
                        { title: '切换动画' },
                        {
                          default: d(() => [
                            s(
                              T,
                              {
                                active: n.value,
                                'onUpdate:active':
                                  e[10] || (e[10] = (t) => (n.value = t)),
                                animated: ''
                              },
                              {
                                default: d(() => [
                                  (i(),
                                  c(
                                    v,
                                    null,
                                    o(4, (t, e) =>
                                      s(
                                        C,
                                        { key: e, title: `标签 ${t}` },
                                        {
                                          default: d(() => [
                                            s(
                                              $,
                                              { class: 'demo-tab-item' },
                                              {
                                                default: d(() => [
                                                  f(' 内容' + _(t), 1)
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['title']
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['active']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        D,
                        { title: '滑动切换' },
                        {
                          default: d(() => [
                            s(
                              T,
                              {
                                active: n.value,
                                'onUpdate:active':
                                  e[11] || (e[11] = (t) => (n.value = t)),
                                swipeable: ''
                              },
                              {
                                default: d(() => [
                                  (i(),
                                  c(
                                    v,
                                    null,
                                    o(4, (t, e) =>
                                      s(
                                        C,
                                        { key: e, title: `标签 ${t}` },
                                        {
                                          default: d(() => [
                                            s(
                                              $,
                                              { class: 'demo-tab-item' },
                                              {
                                                default: d(() => [
                                                  f(' 内容' + _(t), 1)
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['title']
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['active']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        D,
                        { title: '滚动导航' },
                        {
                          default: d(() => [
                            s(
                              T,
                              {
                                active: z.value,
                                'onUpdate:active':
                                  e[12] || (e[12] = (t) => (z.value = t)),
                                scrollspy: ''
                              },
                              {
                                default: d(() => [
                                  s(
                                    $,
                                    { style: { height: '1000rpx' } },
                                    {
                                      default: d(() => [
                                        (i(),
                                        c(
                                          v,
                                          null,
                                          o(18, (t, e) =>
                                            s(
                                              C,
                                              { key: e, title: `标签 ${t}` },
                                              {
                                                default: d(() => [
                                                  s(
                                                    $,
                                                    { class: 'demo-tab-item' },
                                                    {
                                                      default: d(() => [
                                                        f(' 内容' + _(t), 1)
                                                      ]),
                                                      _: 2
                                                    },
                                                    1024
                                                  )
                                                ]),
                                                _: 2
                                              },
                                              1032,
                                              ['title']
                                            )
                                          ),
                                          64
                                        ))
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['active']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(
                        D,
                        { title: '异步切换' },
                        {
                          default: d(() => [
                            s(
                              T,
                              {
                                active: g.value,
                                'onUpdate:active':
                                  e[13] || (e[13] = (t) => (g.value = t)),
                                'before-change': x
                              },
                              {
                                default: d(() => [
                                  (i(),
                                  c(
                                    v,
                                    null,
                                    o(4, (t, e) =>
                                      s(
                                        C,
                                        { key: e, title: `标签 ${t}` },
                                        {
                                          default: d(() => [
                                            s(
                                              $,
                                              { class: 'demo-tab-item' },
                                              {
                                                default: d(() => [
                                                  f(' 内容' + _(t), 1)
                                                ]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['title']
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['active']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      s(G, { ref: 'zToast' }, null, 512)
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
  [['__scopeId', 'data-v-3b96b410']]
)
export { j as default }
