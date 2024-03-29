import {
  m as e,
  i as t,
  j as a,
  v as s,
  r as o,
  _ as l,
  A as i,
  E as n,
  x as r,
  H as c,
  a as u
} from './DemoPage.0bae30a9.js'
import {
  d,
  a6 as p,
  D as f,
  I as b,
  l as m,
  m as w,
  af as z,
  ag as h,
  o as y,
  c as g,
  w as _,
  E as x,
  x as k,
  p as v,
  a as j,
  n as S,
  y as I,
  e as $,
  F as B,
  b as D,
  t as P,
  L as T,
  i as A,
  _ as C,
  G as E
} from './index-7fd204f3.js'
import { _ as H, a as N } from './z-swipe.702aa0db.js'
import './useParent.5b9c05b5.js'
import './useChildren.fb2421ae.js'
import './use-touch.1ac9fd53.js'
const W = C(
  d({
    name: 'ZNoticeBar',
    options: { virtualHost: !0 },
    props: {
      text: String,
      mode: String,
      color: String,
      delay: e(1),
      speed: e(60),
      leftIcon: String,
      wrapable: Boolean,
      background: String,
      scrollable: { type: Boolean, default: !1 }
    },
    emits: ['close', 'replay'],
    setup(e, { emit: u }) {
      const d = e,
        [C, E] = t('notice-bar')
      a(C)
      const H = T()
      let N,
        W = 0,
        F = 0
      const G = p({ show: !0, offset: 0, duration: 0 }),
        L = () =>
          'closeable' === d.mode
            ? 'close'
            : 'link' === d.mode
              ? 'right-big'
              : void 0,
        X = (e) => {
          'closeable' === d.mode && ((G.show = !1), u('close', e))
        },
        Z = () => {
          ;(G.offset = W),
            (G.duration = 0),
            i(() => {
              n(() => {
                ;(G.offset = -F), (G.duration = (F + W) / +d.speed), u('replay')
              })
            })
        },
        q = () => {
          const { delay: e, speed: t, scrollable: a } = d,
            s = c(e) ? 1e3 * +e : 0
          ;(W = 0),
            (F = 0),
            (G.offset = 0),
            (G.duration = 0),
            clearTimeout(N),
            (N = setTimeout(() => {
              !1 !== a &&
                Promise.all([
                  r(H, '.z-notice-wrap'),
                  r(H, '.z-notice-content')
                ]).then(([e, s]) => {
                  const o = e.width,
                    l = s.width
                  ;(a || l > o) &&
                    n(() => {
                      ;(W = o), (F = l), (G.offset = -F), (G.duration = F / +t)
                    })
                })
            }, s))
        },
        J = f(() => ({
          minWidth: 'var(--z-notice-bar-icon-min-width)',
          fontSize: 'var(--z-notice-bar-icon-size)'
        })),
        K = f(() => ({
          minWidth: 'var(--z-notice-bar-icon-min-width)',
          fontSize: 'var(--z-notice-bar-icon-size)',
          textAlign: 'right',
          cursor: 'pointer'
        }))
      return (
        s({ reset: q }),
        b(() => {
          q()
        }),
        m(() => [d.text, d.scrollable], q),
        (t, a) => {
          const s = o(w('z-icon'), l),
            i = A
          return z(
            (y(),
            g(
              i,
              {
                class: S(x(E)({ wrapable: e.wrapable })),
                style: I({ color: e.color, background: e.background })
              },
              {
                default: _(() => [
                  x(H).slots['left-icon']
                    ? k(t.$slots, 'left-icon', { key: 0 }, void 0, !0)
                    : d.leftIcon
                      ? (y(),
                        g(
                          s,
                          { key: 1, 'custom-style': x(J), name: d.leftIcon },
                          null,
                          8,
                          ['custom-style', 'name']
                        ))
                      : v('', !0),
                  j(
                    i,
                    { class: S(['z-notice-wrap', x(E)('wrap')]) },
                    {
                      default: _(() => [
                        j(
                          i,
                          {
                            class: S([
                              'z-notice-content',
                              [
                                x(E)('content'),
                                {
                                  'z-ellipsis':
                                    !1 === d.scrollable && !d.wrapable
                                }
                              ]
                            ]),
                            style: I({
                              transform: G.offset
                                ? `translateX(${G.offset}px)`
                                : '',
                              transitionDuration: `${G.duration}s`
                            }),
                            onTransitionend: Z
                          },
                          {
                            default: _(() => [
                              x(H).slots.default
                                ? k(t.$slots, 'default', { key: 0 }, void 0, !0)
                                : (y(), $(B, { key: 1 }, [D(P(d.text), 1)], 64))
                            ]),
                            _: 3
                          },
                          8,
                          ['style', 'class']
                        )
                      ]),
                      _: 3
                    },
                    8,
                    ['class']
                  ),
                  x(H).slots['right-icon']
                    ? k(t.$slots, 'right-icon', { key: 2 }, void 0, !0)
                    : L()
                      ? (y(),
                        g(
                          s,
                          {
                            key: 3,
                            'custom-style': x(K),
                            name: L(),
                            onClick: X
                          },
                          null,
                          8,
                          ['custom-style', 'name']
                        ))
                      : v('', !0)
                ]),
                _: 3
              },
              8,
              ['class', 'style']
            )),
            [[h, G.show]]
          )
        }
      )
    }
  }),
  [['__scopeId', 'data-v-899d09b8']]
)
const F = C({}, [
  [
    'render',
    function (e, t) {
      const a = o(w('z-notice-bar'), W),
        s = E('demo-block'),
        l = o(w('z-swipe-item'), H),
        i = o(w('z-swipe'), N),
        n = A,
        r = o(w('DemoPage'), u)
      return (
        y(),
        g(
          r,
          { title: 'NoticeBar' },
          {
            default: _(() => [
              j(
                n,
                { class: 'demo-notice-bar' },
                {
                  default: _(() => [
                    j(
                      s,
                      { title: '基础用法' },
                      {
                        default: _(() => [
                          j(a, {
                            'left-icon': 'sound',
                            scrollable: '',
                            text: 'zebra-swiper是基于uniapp开发的一款移动端轮播组件。'
                          })
                        ]),
                        _: 1
                      }
                    ),
                    j(
                      s,
                      { title: '滚动播放' },
                      {
                        default: _(() => [
                          j(a, {
                            scrollable: '',
                            text: 'zebra-swiper是基于uniapp开发的一款移动端轮播组件。'
                          }),
                          j(a, {
                            scrollable: !1,
                            text: 'zebra-swiper是基于uniapp开发的一款移动端轮播组件。'
                          })
                        ]),
                        _: 1
                      }
                    ),
                    j(
                      s,
                      { title: '多行展示' },
                      {
                        default: _(() => [
                          j(a, {
                            wrapable: '',
                            scrollable: !1,
                            text: 'zebra-swiper是基于uniapp开发的一款移动端轮播组件。zebra-swiper是基于uniapp开发的一款移动端轮播组件。'
                          })
                        ]),
                        _: 1
                      }
                    ),
                    j(
                      s,
                      { title: '通知栏模式' },
                      {
                        default: _(() => [
                          j(a, {
                            mode: 'closeable',
                            text: 'zebra-swiper是基于uniapp开发的一款移动端轮播组件。'
                          }),
                          j(a, {
                            mode: 'link',
                            text: 'zebra-swiper是基于uniapp开发的一款移动端轮播组件。'
                          })
                        ]),
                        _: 1
                      }
                    ),
                    j(
                      s,
                      { title: '自定义样式' },
                      {
                        default: _(() => [
                          j(a, {
                            text: 'zebra-swiper是基于uniapp开发的一款移动端轮播组件。',
                            color: '#1989fa',
                            background: '#ecf9ff',
                            'left-icon': 'setting'
                          })
                        ]),
                        _: 1
                      }
                    ),
                    j(
                      s,
                      { title: '垂直滚动' },
                      {
                        default: _(() => [
                          j(
                            a,
                            { 'left-icon': 'sound', scrollable: !1 },
                            {
                              default: _(() => [
                                j(
                                  i,
                                  {
                                    vertical: '',
                                    'custom-style': {
                                      height: '80rpx',
                                      'line-height': '80rpx'
                                    },
                                    autoplay: 3e3,
                                    touchable: !1,
                                    'show-indicators': !1
                                  },
                                  {
                                    default: _(() => [
                                      j(l, null, {
                                        default: _(() => [
                                          D(
                                            'zebra-swiper是基于uniapp开发的一款移动端轮播组件。'
                                          )
                                        ]),
                                        _: 1
                                      }),
                                      j(l, null, {
                                        default: _(() => [
                                          D('一款移动端轮播组件。')
                                        ]),
                                        _: 1
                                      }),
                                      j(l, null, {
                                        default: _(() => [D('zebra-swiper')]),
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
export { F as default }
