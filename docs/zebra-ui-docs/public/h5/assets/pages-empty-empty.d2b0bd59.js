import {
  d as e,
  D as t,
  o as s,
  c as a,
  w as i,
  a as r,
  n as o,
  E as l,
  y as d,
  x as m,
  b as c,
  t as p,
  p as u,
  L as n,
  q as f,
  i as g,
  C as b,
  _,
  k as y,
  m as z,
  G as h
} from './index-7fd204f3.js'
import {
  s as k,
  i as j,
  j as v,
  W as w,
  r as x,
  b as S,
  a as D
} from './DemoPage.0bae30a9.js'
import { _ as E, a as P } from './z-tabs.8d3e6868.js'
import './useParent.5b9c05b5.js'
import './use-id.c1b053ed.js'
import './z-sticky.e6c39ae3.js'
import './useChildren.fb2421ae.js'
import './use-touch.1ac9fd53.js'
const $ = _(
    e({
      name: 'ZEmpty',
      options: { virtualHost: !0 },
      props: {
        image: k('default'),
        imageSize: [Number, String, Array],
        description: String
      },
      setup(e) {
        const _ = e,
          [y, z] = j('empty')
        v(y)
        const h = n(),
          k = t(() => ({
            error: 'https://cdn.zebraui.com/zebra-ui/error-default.png',
            search: 'https://cdn.zebraui.com/zebra-ui/empty-search.png',
            network: 'https://cdn.zebraui.com/zebra-ui/error-network.png',
            default: 'https://cdn.zebraui.com/zebra-ui/empty-default.png'
          }))
        return (e, t) => {
          const n = f,
            y = g,
            j = b
          return (
            s(),
            a(
              y,
              { class: o(l(z)()) },
              {
                default: i(() => [
                  r(
                    y,
                    { class: o(l(z)('image')), style: d(l(w)(_.imageSize)) },
                    {
                      default: i(() => [
                        l(h).slots.image
                          ? m(e.$slots, 'image', { key: 0 }, void 0, !0)
                          : (s(),
                            a(
                              n,
                              {
                                key: 1,
                                src: l(k)[_.image] || _.image,
                                mode: 'aspectFill'
                              },
                              null,
                              8,
                              ['src']
                            ))
                      ]),
                      _: 3
                    },
                    8,
                    ['class', 'style']
                  ),
                  l(h).slots.description
                    ? m(e.$slots, 'description', { key: 0 }, void 0, !0)
                    : (s(),
                      a(
                        j,
                        { key: 1, class: o(l(z)('description')) },
                        { default: i(() => [c(p(_.description), 1)]), _: 1 },
                        8,
                        ['class']
                      )),
                  l(h).slots.default
                    ? (s(),
                      a(
                        y,
                        { key: 2, class: o(l(z)('bottom')) },
                        {
                          default: i(() => [
                            m(e.$slots, 'default', {}, void 0, !0)
                          ]),
                          _: 3
                        },
                        8,
                        ['class']
                      ))
                    : u('', !0)
                ]),
                _: 3
              },
              8,
              ['class']
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-106b000b']]
  ),
  C = e({
    __name: 'empty',
    setup(e) {
      const t = y('error')
      return (e, o) => {
        const l = x(z('z-empty'), $),
          d = h('demo-block'),
          m = x(z('z-tab'), E),
          p = x(z('z-tabs'), P),
          u = x(z('z-button'), S),
          n = g,
          f = x(z('DemoPage'), D)
        return (
          s(),
          a(
            f,
            { title: 'Empty' },
            {
              default: i(() => [
                r(
                  n,
                  { class: 'demo-empty' },
                  {
                    default: i(() => [
                      r(
                        d,
                        { title: '基础用法' },
                        {
                          default: i(() => [r(l, { description: '描述文字' })]),
                          _: 1
                        }
                      ),
                      r(
                        d,
                        { title: '图片类型' },
                        {
                          default: i(() => [
                            r(
                              p,
                              {
                                active: t.value,
                                'onUpdate:active':
                                  o[0] || (o[0] = (e) => (t.value = e))
                              },
                              {
                                default: i(() => [
                                  r(
                                    m,
                                    { name: 'error', title: '通用错误' },
                                    {
                                      default: i(() => [
                                        r(l, {
                                          image: 'error',
                                          description: '描述文字'
                                        })
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  r(
                                    m,
                                    { name: 'network', title: '网络错误' },
                                    {
                                      default: i(() => [
                                        r(l, {
                                          image: 'network',
                                          description: '描述文字'
                                        })
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  r(
                                    m,
                                    { name: 'search', title: '搜索提示' },
                                    {
                                      default: i(() => [
                                        r(l, {
                                          image: 'search',
                                          description: '描述文字'
                                        })
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
                      r(
                        d,
                        { title: '自定义大小' },
                        {
                          default: i(() => [
                            r(l, {
                              'image-size': '500rpx',
                              description: '描述文字'
                            })
                          ]),
                          _: 1
                        }
                      ),
                      r(
                        d,
                        { title: '自定义图片' },
                        {
                          default: i(() => [
                            r(l, {
                              image:
                                'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
                              'image-size': 80,
                              description: '描述文字'
                            })
                          ]),
                          _: 1
                        }
                      ),
                      r(
                        d,
                        { title: '底部内容' },
                        {
                          default: i(() => [
                            r(
                              l,
                              { description: '描述文字' },
                              {
                                default: i(() => [
                                  r(
                                    u,
                                    {
                                      type: 'primary',
                                      round: '',
                                      'custom-style': { width: '300rpx' },
                                      class: 'bottom-button'
                                    },
                                    { default: i(() => [c(' 按钮 ')]), _: 1 }
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
    }
  })
export { C as default }
