import {
  d as a,
  k as e,
  D as t,
  l as s,
  ae as l,
  o,
  c as r,
  w as i,
  a as p,
  n as u,
  E as c,
  y as m,
  p as d,
  ap as n,
  P as g,
  i as f,
  N as h,
  O as w,
  L as y,
  _,
  m as b,
  G as v,
  b as k
} from './index-7fd204f3.js'
import {
  w as z,
  m as x,
  n as j,
  t as I,
  s as P,
  i as S,
  j as q,
  k as C,
  z as D,
  y as F,
  r as W,
  b as X,
  a as Y
} from './DemoPage.0bae30a9.js'
import { u as G } from './use-id.c1b053ed.js'
const H = _(
    a({
      name: 'ZWatermark',
      options: { virtualHost: !0 },
      props: {
        gapX: z(0),
        gapY: z(0),
        image: String,
        width: z(100),
        height: z(100),
        rotate: x(-22),
        zIndex: j,
        content: String,
        opacity: z(1),
        fullPage: I,
        textColor: P('#dcdee0'),
        type: P(''),
        fontSize: z(20)
      },
      setup(a) {
        const _ = a,
          [b, v] = S('watermark')
        q(b)
        const k = y(),
          z = G(),
          x = e(''),
          j = e(''),
          I = e(!0),
          P = t(() => C({ backgroundImage: `url(${x.value})` }, D(_.zIndex))),
          W = (a = '') => {
            I.value = !0
            const e = h(z, k)
            e.translate(0, 0),
              e.setGlobalAlpha(_.opacity),
              e.rotate((Number(_.rotate) * Math.PI) / 180),
              e.setFillStyle(_.textColor),
              e.setFontSize(_.fontSize),
              a && e.drawImage(a, 0, 0, _.height / 1.5, _.width / 1.5),
              _.content && e.fillText(_.content, 0, _.height / 2),
              e.draw(!1, () =>
                w(
                  {
                    canvasId: z,
                    destWidth: X.value,
                    destHeight: Y.value,
                    success: (a) => {
                      ;(x.value = a.tempFilePath), (I.value = !1)
                    },
                    fail: (a) => {
                      console.warn(a)
                    }
                  },
                  k
                )
              )
          },
          X = t(() => _.width + _.gapX),
          Y = t(() => _.height + _.gapY)
        return (
          s(
            () => [
              j.value,
              _.content,
              _.textColor,
              _.height,
              _.width,
              _.rotate,
              _.gapX,
              _.gapY,
              _.image
            ],
            () => {
              l(() => {
                x.value && (x.value = ''),
                  _.image
                    ? n({
                        src: _.image,
                        success: (a) => {
                          W(a.path)
                        }
                      })
                    : W()
              })
            },
            { immediate: !0 }
          ),
          (a, e) => {
            const t = g,
              s = f
            return (
              o(),
              r(
                s,
                {
                  class: u(['z-watermark-rect', c(v)({ full: _.fullPage })]),
                  style: m(c(P))
                },
                {
                  default: i(() => [
                    p(
                      s,
                      { class: u(c(v)('wrapper')) },
                      {
                        default: i(() => [
                          I.value
                            ? (o(),
                              r(
                                t,
                                {
                                  key: 0,
                                  id: c(z),
                                  'canvas-id': c(z),
                                  style: m({
                                    width: c(F)(c(X)),
                                    height: c(F)(c(Y))
                                  })
                                },
                                null,
                                8,
                                ['id', 'canvas-id', 'style']
                              ))
                            : d('', !0)
                        ]),
                        _: 1
                      },
                      8,
                      ['class']
                    )
                  ]),
                  _: 1
                },
                8,
                ['class', 'style']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-b960ccb0']]
  ),
  N = _(
    a({
      __name: 'watermark',
      setup(a) {
        const t = e(!1)
        return (a, e) => {
          const s = W(b('z-watermark'), H),
            l = f,
            u = v('demo-block'),
            c = W(b('z-button'), X),
            m = W(b('DemoPage'), Y)
          return (
            o(),
            r(
              m,
              { title: 'Watermark' },
              {
                default: i(() => [
                  p(
                    l,
                    { class: 'demo-watermark' },
                    {
                      default: i(() => [
                        p(
                          u,
                          { title: '基础用法' },
                          {
                            default: i(() => [
                              p(
                                l,
                                { class: 'demo-watermark-wrapper' },
                                {
                                  default: i(() => [
                                    p(s, { content: 'Zebra', 'full-page': !1 })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        p(
                          u,
                          { title: '图片水印' },
                          {
                            default: i(() => [
                              p(
                                l,
                                { class: 'demo-watermark-wrapper' },
                                {
                                  default: i(() => [
                                    p(
                                      s,
                                      {
                                        rotate: 0,
                                        image:
                                          'https://assets-1256020106.cos.ap-beijing.myqcloud.com/zebra-ui/images/logo.png',
                                        opacity: 0.2,
                                        'full-page': !1
                                      },
                                      null,
                                      8,
                                      ['opacity']
                                    )
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        p(
                          u,
                          { title: '自定义间隔' },
                          {
                            default: i(() => [
                              p(
                                l,
                                { class: 'demo-watermark-wrapper' },
                                {
                                  default: i(() => [
                                    p(
                                      s,
                                      {
                                        rotate: 0,
                                        image:
                                          'https://assets-1256020106.cos.ap-beijing.myqcloud.com/zebra-ui/images/logo.png',
                                        'gap-x': 30,
                                        'gap-y': 10,
                                        opacity: 0.2,
                                        'full-page': !1
                                      },
                                      null,
                                      8,
                                      ['opacity']
                                    )
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        p(
                          u,
                          { title: '自定义倾斜角度' },
                          {
                            default: i(() => [
                              p(
                                l,
                                { class: 'demo-watermark-wrapper' },
                                {
                                  default: i(() => [
                                    p(
                                      s,
                                      {
                                        image:
                                          'https://assets-1256020106.cos.ap-beijing.myqcloud.com/zebra-ui/images/logo.png',
                                        rotate: 22,
                                        opacity: 0.2,
                                        'full-page': !1
                                      },
                                      null,
                                      8,
                                      ['opacity']
                                    )
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        p(
                          u,
                          { title: '显示范围' },
                          {
                            default: i(() => [
                              p(
                                l,
                                { class: 'demo-watermark-wrapper' },
                                {
                                  default: i(() => [
                                    p(
                                      c,
                                      {
                                        type: 'primary',
                                        onClick:
                                          e[0] ||
                                          (e[0] = (a) => (t.value = !t.value))
                                      },
                                      { default: i(() => [k(' 切换 ')]), _: 1 }
                                    ),
                                    p(
                                      s,
                                      {
                                        rotate: 0,
                                        'full-page': t.value,
                                        opacity: 0.2,
                                        image:
                                          'https://assets-1256020106.cos.ap-beijing.myqcloud.com/zebra-ui/images/logo.png'
                                      },
                                      null,
                                      8,
                                      ['full-page', 'opacity']
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
    [['__scopeId', 'data-v-2ed3b29a']]
  )
export { N as default }
