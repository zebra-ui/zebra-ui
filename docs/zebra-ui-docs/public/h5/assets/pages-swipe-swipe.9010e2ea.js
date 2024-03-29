import { _ as t, a as e } from './z-swipe.702aa0db.js'
import {
  d as l,
  k as a,
  m as s,
  G as o,
  o as u,
  c as f,
  w as i,
  a as c,
  e as d,
  r,
  F as m,
  b as n,
  t as _,
  i as p,
  _ as y
} from './index-7fd204f3.js'
import { r as w, a as h } from './DemoPage.0bae30a9.js'
import './useParent.5b9c05b5.js'
import './useChildren.fb2421ae.js'
import './use-touch.1ac9fd53.js'
const k = y(
  l({
    __name: 'swipe',
    setup(l) {
      const y = a({
          color: '#ffffff',
          'font-size': '40rpx',
          'line-height': '300rpx',
          'text-align': 'center',
          'background-color': '#39a9ed'
        }),
        k = (t) => console.log('当前 Swipe 索引：' + t)
      return (l, a) => {
        const v = w(s('z-swipe-item'), t),
          g = w(s('z-swipe'), e),
          j = o('demo-block'),
          x = p,
          b = w(s('DemoPage'), h)
        return (
          u(),
          f(
            b,
            { title: 'Swipe' },
            {
              default: i(() => [
                c(
                  x,
                  { class: 'demo-swipe' },
                  {
                    default: i(() => [
                      c(
                        j,
                        { title: '基础用法' },
                        {
                          default: i(() => [
                            c(
                              g,
                              { 'indicator-color': '#ffffff' },
                              {
                                default: i(() => [
                                  (u(),
                                  d(
                                    m,
                                    null,
                                    r(4, (t, e) =>
                                      c(
                                        v,
                                        { key: e, 'custom-style': y.value },
                                        {
                                          default: i(() => [n(_(t), 1)]),
                                          _: 2
                                        },
                                        1032,
                                        ['custom-style']
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
                        }
                      ),
                      c(
                        j,
                        { title: '自动播放' },
                        {
                          default: i(() => [
                            c(
                              g,
                              {
                                autoplay: '1000',
                                'indicator-color': '#ffffff'
                              },
                              {
                                default: i(() => [
                                  (u(),
                                  d(
                                    m,
                                    null,
                                    r(4, (t, e) =>
                                      c(
                                        v,
                                        { key: e, 'custom-style': y.value },
                                        {
                                          default: i(() => [n(_(t), 1)]),
                                          _: 2
                                        },
                                        1032,
                                        ['custom-style']
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
                        }
                      ),
                      c(
                        j,
                        { title: '纵向' },
                        {
                          default: i(() => [
                            c(
                              g,
                              {
                                vertical: '',
                                'indicator-color': '#ffffff',
                                'custom-style': { height: '300rpx' }
                              },
                              {
                                default: i(() => [
                                  (u(),
                                  d(
                                    m,
                                    null,
                                    r(4, (t, e) =>
                                      c(
                                        v,
                                        { key: e, 'custom-style': y.value },
                                        {
                                          default: i(() => [n(_(t), 1)]),
                                          _: 2
                                        },
                                        1032,
                                        ['custom-style']
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
                        }
                      ),
                      c(
                        j,
                        { title: '事件' },
                        {
                          default: i(() => [
                            c(
                              g,
                              { onChange: k },
                              {
                                default: i(() => [
                                  (u(),
                                  d(
                                    m,
                                    null,
                                    r(4, (t, e) =>
                                      c(
                                        v,
                                        { key: e, 'custom-style': y.value },
                                        {
                                          default: i(() => [n(_(t), 1)]),
                                          _: 2
                                        },
                                        1032,
                                        ['custom-style']
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
                        }
                      ),
                      c(
                        j,
                        { title: '自定义宽高' },
                        {
                          default: i(() => [
                            c(
                              g,
                              { loop: !1, width: 200 },
                              {
                                default: i(() => [
                                  (u(),
                                  d(
                                    m,
                                    null,
                                    r(4, (t, e) =>
                                      c(
                                        v,
                                        { key: e, 'custom-style': y.value },
                                        {
                                          default: i(() => [n(_(t), 1)]),
                                          _: 2
                                        },
                                        1032,
                                        ['custom-style']
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
                        }
                      ),
                      c(
                        j,
                        { title: '自定义指示器' },
                        {
                          default: i(() => [
                            c(
                              g,
                              { 'show-indicators': !1 },
                              {
                                indicator: i(({ active: t, total: e }) => [
                                  c(
                                    x,
                                    { class: 'custom-indicator' },
                                    {
                                      default: i(() => [
                                        n(_(t + 1) + '/' + _(e), 1)
                                      ]),
                                      _: 2
                                    },
                                    1024
                                  )
                                ]),
                                default: i(() => [
                                  (u(),
                                  d(
                                    m,
                                    null,
                                    r(4, (t, e) =>
                                      c(
                                        v,
                                        { key: e, 'custom-style': y.value },
                                        {
                                          default: i(() => [n(_(t), 1)]),
                                          _: 2
                                        },
                                        1032,
                                        ['custom-style']
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
  [['__scopeId', 'data-v-cdda4794']]
)
export { k as default }
