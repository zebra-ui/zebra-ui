import {
  d as t,
  k as e,
  I as a,
  u as l,
  m as o,
  G as s,
  o as r,
  c,
  w as u,
  a as i,
  b as d,
  i as f,
  S as n,
  _ as p
} from './index-7fd204f3.js'
import { r as _, b as m, a as y } from './DemoPage.0bae30a9.js'
import { _ as g } from './z-sticky.e6c39ae3.js'
const v = p(
  t({
    __name: 'sticky',
    setup(t) {
      const p = e({})
      a(() => {
        l()
          .select('#container')
          .boundingClientRect((t) => {
            p.value = t
          })
          .exec()
      })
      const v = e(0),
        b = e(0),
        k = (t) => {
          l()
            .select('#scroller')
            .boundingClientRect((e) => {
              ;(v.value = t.detail.scrollTop), (b.value = e.top)
            })
            .exec()
        }
      return (t, e) => {
        const a = _(o('z-button'), m),
          l = _(o('z-sticky'), g),
          x = s('demo-block'),
          h = f,
          w = n,
          j = _(o('DemoPage'), y)
        return (
          r(),
          c(
            j,
            { title: 'Sticky' },
            {
              default: u(() => [
                i(
                  h,
                  { class: 'demo-sticky' },
                  {
                    default: u(() => [
                      i(
                        x,
                        { title: '基础用法' },
                        {
                          default: u(() => [
                            i(
                              l,
                              { 'custom-navbar': '' },
                              {
                                default: u(() => [
                                  i(
                                    a,
                                    { type: 'primary' },
                                    { default: u(() => [d('基础用法')]), _: 1 }
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      i(
                        x,
                        { title: '吸顶距离' },
                        {
                          default: u(() => [
                            i(
                              l,
                              { 'custom-navbar': '', 'offset-top': 50 },
                              {
                                default: u(() => [
                                  i(
                                    a,
                                    {
                                      type: 'primary',
                                      'custom-style': { 'margin-left': '30%' }
                                    },
                                    { default: u(() => [d('基础用法')]), _: 1 }
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      i(
                        x,
                        { title: '指定容器' },
                        {
                          default: u(() => [
                            i(
                              h,
                              {
                                id: 'container',
                                style: {
                                  height: '300rpx',
                                  'background-color': '#fff'
                                }
                              },
                              {
                                default: u(() => [
                                  i(
                                    l,
                                    { 'custom-navbar': '', container: p.value },
                                    {
                                      default: u(() => [
                                        i(
                                          a,
                                          {
                                            type: 'warning',
                                            'custom-style': {
                                              'margin-left': '300rpx'
                                            }
                                          },
                                          {
                                            default: u(() => [d(' 指定容器 ')]),
                                            _: 1
                                          }
                                        )
                                      ]),
                                      _: 1
                                    },
                                    8,
                                    ['container']
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      i(
                        x,
                        { title: '嵌套在 scroll-view 内使用' },
                        {
                          default: u(() => [
                            i(
                              w,
                              {
                                onScroll: k,
                                'scroll-y': '',
                                id: 'scroller',
                                style: {
                                  height: '400rpx',
                                  'background-color': '#fff'
                                }
                              },
                              {
                                default: u(() => [
                                  i(
                                    h,
                                    {
                                      style: {
                                        height: '800rpx',
                                        'padding-top': '50px'
                                      }
                                    },
                                    {
                                      default: u(() => [
                                        i(
                                          l,
                                          {
                                            'scroll-top': v.value,
                                            'offset-top': b.value
                                          },
                                          {
                                            default: u(() => [
                                              i(
                                                a,
                                                { type: 'danger' },
                                                {
                                                  default: u(() => [
                                                    d(' 嵌套在 scroll-view 内 ')
                                                  ]),
                                                  _: 1
                                                }
                                              )
                                            ]),
                                            _: 1
                                          },
                                          8,
                                          ['scroll-top', 'offset-top']
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
    }
  }),
  [['__scopeId', 'data-v-9ec6eedc']]
)
export { v as default }
