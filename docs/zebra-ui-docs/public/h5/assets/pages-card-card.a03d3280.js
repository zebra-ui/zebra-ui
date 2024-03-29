import { r as e, b as t, a } from './DemoPage.0bae30a9.js'
import {
  d as i,
  k as o,
  m as s,
  G as l,
  o as r,
  c as u,
  w as d,
  a as c,
  b as n,
  t as p,
  i as m,
  _ as f
} from './index-7fd204f3.js'
import { _ } from './z-card.861d1a5d.js'
import { _ as v } from './z-toast.a77377ba.js'
import { s as z } from './z-toast.44a3344c.js'
import './z-dialog.b209de9d.js'
const b = f(
  i({
    __name: 'card',
    setup(i) {
      const f = o('标题'),
        b = o('副标题'),
        j = o('这是一段文字描述'),
        k = o('https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg'),
        y = o(
          '仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。'
        ),
        g = () => {
          z('操作')
        }
      return (i, o) => {
        const z = e(s('z-button'), t),
          h = e(s('z-card'), _),
          C = l('demo-block'),
          w = m,
          x = e(s('z-toast'), v),
          D = e(s('DemoPage'), a)
        return (
          r(),
          u(
            D,
            { title: 'Card' },
            {
              default: d(() => [
                c(
                  w,
                  { class: 'demo-card' },
                  {
                    default: d(() => [
                      c(
                        C,
                        { title: '基础用法' },
                        {
                          default: d(() => [
                            c(
                              h,
                              { title: f.value, 'header-bordered': '' },
                              {
                                actions: d(() => [
                                  c(
                                    z,
                                    {
                                      type: 'primary',
                                      size: 'mini',
                                      onClick: g
                                    },
                                    { default: d(() => [n('操作')]), _: 1 }
                                  )
                                ]),
                                default: d(() => [n(p(y.value) + ' ', 1)]),
                                _: 1
                              },
                              8,
                              ['title']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      c(
                        C,
                        { title: '副标题与描述' },
                        {
                          default: d(() => [
                            c(
                              h,
                              {
                                title: f.value,
                                subtitle: b.value,
                                description: j.value
                              },
                              {
                                actions: d(() => [
                                  c(
                                    z,
                                    {
                                      type: 'primary',
                                      size: 'mini',
                                      onClick: g
                                    },
                                    { default: d(() => [n('操作')]), _: 1 }
                                  )
                                ]),
                                default: d(() => [n(p(y.value) + ' ', 1)]),
                                _: 1
                              },
                              8,
                              ['title', 'subtitle', 'description']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      c(
                        C,
                        { title: '底部' },
                        {
                          default: d(() => [
                            c(
                              h,
                              { cover: k.value },
                              {
                                footer: d(() => [
                                  c(
                                    w,
                                    { class: 'footer' },
                                    {
                                      default: d(() => [
                                        c(z, { icon: 'appstore' }),
                                        c(z, { icon: 'like' }),
                                        c(z, { icon: 'heart' })
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['cover']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      c(
                        C,
                        { title: '全部展示' },
                        {
                          default: d(() => [
                            c(
                              h,
                              {
                                title: f.value,
                                cover: k.value,
                                subtitle: b.value,
                                description: j.value
                              },
                              {
                                actions: d(() => [
                                  c(
                                    z,
                                    {
                                      type: 'primary',
                                      size: 'mini',
                                      onClick: g
                                    },
                                    { default: d(() => [n('操作')]), _: 1 }
                                  )
                                ]),
                                footer: d(() => [
                                  c(
                                    w,
                                    { class: 'footer' },
                                    {
                                      default: d(() => [
                                        c(z, { icon: 'appstore' }),
                                        c(z, { icon: 'like' }),
                                        c(z, { icon: 'heart' })
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                default: d(() => [n(p(y.value) + ' ', 1)]),
                                _: 1
                              },
                              8,
                              ['title', 'cover', 'subtitle', 'description']
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                c(x, { ref: 'zToast' }, null, 512)
              ]),
              _: 1
            }
          )
        )
      }
    }
  }),
  [['__scopeId', 'data-v-d2435218']]
)
export { b as default }
