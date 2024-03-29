import {
  d as e,
  k as t,
  D as a,
  l as r,
  I as s,
  a9 as l,
  o as n,
  c as o,
  w as i,
  a as u,
  n as c,
  E as d,
  y as f,
  x as p,
  b as m,
  t as v,
  P as h,
  i as x,
  ao as y,
  N as _,
  A as b,
  u as g,
  L as k,
  _ as w,
  m as C,
  G as S
} from './index-7fd204f3.js'
import {
  s as z,
  m as P,
  t as R,
  w as L,
  i as F,
  j as M,
  y as N,
  o as j,
  r as I,
  b as U,
  a as A
} from './DemoPage.0bae30a9.js'
import { u as O } from './use-id.c1b053ed.js'
const W = w(
    e({
      name: 'ZCircle',
      options: { virtualHost: !0 },
      props: {
        text: String,
        type: z(''),
        size: P(100),
        fill: z(''),
        rate: P(100),
        speed: P(50),
        color: { type: [String, Object], default: '#1989fa' },
        clockwise: R,
        layerColor: z('#ffffff'),
        currentRate: L(0),
        strokeWidth: P(4),
        strokeLinecap: String,
        startPosition: z('top'),
        lineCap: z('round')
      },
      emits: ['update:currentRate'],
      setup(e, { emit: w }) {
        const C = e,
          S = 2 * Math.PI,
          z = -Math.PI / 2,
          P = (e) => Math.min(Math.max(e, 0), 100),
          [R, L] = F('circle')
        M(R)
        const I = k(),
          U = O()
        let A
        const W = t('#1989fa'),
          G = t(0),
          T = () => {
            const { type: e, size: t } = C
            if ('' === e) {
              const e = _(U, I)
              return Promise.resolve(e)
            }
            const a = b().pixelRatio
            return new Promise((r) => {
              g()
                .in(I)
                .select(`#${U}`)
                .node((s) => {
                  const l = s[0].node,
                    n = l.getContext(e)
                  A ||
                    ((A = !0),
                    (l.width = t * a),
                    (l.height = t * a),
                    n.scale(a, a)),
                    r(Y(n))
                })
                .exec()
            })
          },
          B = a(() => {
            const e = { top: 0, right: 90, bottom: 180, left: 270 }[
              C.startPosition
            ]
            if (e) return { transform: `rotate(${e}deg)` }
          }),
          D = () => {
            const { color: e, size: t } = C
            return j(e)
              ? T().then((a) => {
                  if (!a) return
                  const r = a.createLinearGradient(t, 0, 0, 0)
                  Object.keys(e)
                    .sort((e, t) => parseFloat(e) - parseFloat(t))
                    .map((t) => r.addColorStop(parseFloat(t) / 100, e[t])),
                    (W.value = r)
                })
              : ((W.value = e), Promise.resolve())
          },
          $ = (e) => {
            const { size: t } = C
            T().then((a) => {
              if (!a) return
              a.clearRect(0, 0, t, t),
                ((e) => {
                  const { layerColor: t, fill: a } = C
                  X(e, t, 0, S, a)
                })(a)
              ;((e, t) => {
                const { clockwise: a } = C,
                  r = S * (t / 100),
                  s = a ? z + r : 3 * Math.PI - (z + r)
                X(e, W.value, z, s)
              })(a, P(e)),
                w('update:currentRate', P(parseFloat(C.rate.toFixed(1)))),
                a.draw()
            })
          }
        let J = t()
        const E = () => {
            const { rate: e, speed: t } = C
            if (Number(t) <= 0 || Number(t) > 1e3) return void $(e)
            if (G.value == e) return void $(e)
            H()
            const a = () => {
              J.value = setTimeout(
                () => {
                  G.value !== e
                    ? (Math.abs(G.value - Number(e)) < 1
                        ? (G.value = Number(e))
                        : G.value < Number(e)
                          ? (G.value += 1)
                          : (G.value -= 1),
                      $(G.value),
                      a())
                    : H()
                },
                1e3 / Number(t)
              )
            }
            a()
          },
          H = () => {
            J.value && (clearTimeout(J.value), (J.value = null))
          },
          X = (e, t, a, r, s) => {
            const { strokeWidth: l, lineCap: n, clockwise: o, size: i } = C,
              u = i / 2,
              c = u - l / 2
            e.setStrokeStyle(t),
              e.setLineWidth(l),
              e.setLineCap(n),
              e.beginPath(),
              e.arc(u, u, c, a, r, !o),
              e.stroke(),
              s && (e.setFillStyle(s), e.fill())
          },
          Y = (e) =>
            Object.assign(e, {
              setStrokeStyle(t) {
                e.strokeStyle = t
              },
              setLineWidth(t) {
                e.lineWidth = t
              },
              setLineCap(t) {
                e.lineCap = t
              },
              setFillStyle(t) {
                e.fillStyle = t
              },
              setFontSize(t) {
                e.font = String(t)
              },
              setGlobalAlpha(t) {
                e.globalAlpha = t
              },
              setLineJoin(t) {
                e.lineJoin = t
              },
              setTextAlign(t) {
                e.textAlign = t
              },
              setMiterLimit(t) {
                e.miterLimit = t
              },
              setShadow(t, a, r, s) {
                ;(e.shadowOffsetX = t),
                  (e.shadowOffsetY = a),
                  (e.shadowBlur = r),
                  (e.shadowColor = s)
              },
              setTextBaseline(t) {
                e.textBaseline = t
              },
              createCircularGradient() {},
              draw() {}
            })
        return (
          r(
            () => C.size,
            () => {
              E()
            }
          ),
          r(
            () => C.rate,
            () => {
              E()
            }
          ),
          r(
            () => C.color,
            () => {
              D().then(() => {
                E()
              })
            }
          ),
          s(() => {
            ;(G.value = Number(C.currentRate)),
              D().then(() => {
                E()
              })
          }),
          l(() => {
            H()
          }),
          (t, a) => {
            const r = h,
              s = x,
              l = y
            return (
              n(),
              o(
                s,
                { class: c(d(L)()) },
                {
                  default: i(() => [
                    u(
                      r,
                      {
                        class: c(d(L)('canvas')),
                        type: e.type,
                        style: f([
                          { width: d(N)(e.size), height: d(N)(e.size) },
                          d(B)
                        ]),
                        id: d(U),
                        'canvas-id': d(U)
                      },
                      null,
                      8,
                      ['class', 'type', 'style', 'id', 'canvas-id']
                    ),
                    e.text
                      ? (n(),
                        o(
                          l,
                          { key: 1, class: c(d(L)('text')) },
                          { default: i(() => [m(v(e.text), 1)]), _: 1 },
                          8,
                          ['class']
                        ))
                      : (n(),
                        o(
                          s,
                          { key: 0, class: c(d(L)('text')) },
                          {
                            default: i(() => [
                              p(t.$slots, 'default', {}, void 0, !0)
                            ]),
                            _: 3
                          },
                          8,
                          ['class']
                        ))
                  ]),
                  _: 3
                },
                8,
                ['class']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-3daa27fb']]
  ),
  G = w(
    e({
      __name: 'circle',
      setup(e) {
        const a = t(70),
          r = t(0),
          s = t(70),
          l = t(70),
          c = t(70),
          d = { '0%': '#3fecff', '100%': '#6149f6' },
          f = (e) => Math.min(Math.max(e, 0), 100),
          p = () => {
            a.value = f(a.value + 20)
          },
          m = () => {
            a.value = f(a.value - 20)
          }
        return (e, t) => {
          const f = I(C('z-circle'), W),
            v = S('demo-block'),
            h = x,
            y = I(C('z-button'), U),
            _ = I(C('DemoPage'), A)
          return (
            n(),
            o(
              _,
              { title: 'Circle' },
              {
                default: i(() => [
                  u(
                    h,
                    { class: 'demo-circle' },
                    {
                      default: i(() => [
                        u(
                          v,
                          { title: '基础用法' },
                          {
                            default: i(() => [
                              u(
                                f,
                                {
                                  'current-rate': r.value,
                                  'onUpdate:currentRate':
                                    t[0] || (t[0] = (e) => (r.value = e)),
                                  rate: a.value,
                                  speed: 100,
                                  text: r.value.toFixed(0) + '%'
                                },
                                null,
                                8,
                                ['current-rate', 'rate', 'text']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        u(
                          v,
                          { title: '自定义样式' },
                          {
                            default: i(() => [
                              u(
                                h,
                                { class: 'content' },
                                {
                                  default: i(() => [
                                    u(
                                      h,
                                      { class: 'content-item' },
                                      {
                                        default: i(() => [
                                          u(
                                            f,
                                            {
                                              'current-rate': l.value,
                                              'onUpdate:currentRate':
                                                t[1] ||
                                                (t[1] = (e) => (l.value = e)),
                                              rate: a.value,
                                              speed: 100,
                                              'stroke-width': 10,
                                              text: '宽度定制'
                                            },
                                            null,
                                            8,
                                            ['current-rate', 'rate']
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    u(
                                      h,
                                      { class: 'content-item' },
                                      {
                                        default: i(() => [
                                          u(
                                            f,
                                            {
                                              'current-rate': l.value,
                                              'onUpdate:currentRate':
                                                t[2] ||
                                                (t[2] = (e) => (l.value = e)),
                                              color: '#ee0a24',
                                              rate: a.value,
                                              'layer-color': '#ebedf0',
                                              speed: 100,
                                              text: '颜色定制'
                                            },
                                            null,
                                            8,
                                            ['current-rate', 'rate']
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    u(
                                      h,
                                      { class: 'content-item' },
                                      {
                                        default: i(() => [
                                          u(
                                            f,
                                            {
                                              'current-rate': s.value,
                                              'onUpdate:currentRate':
                                                t[3] ||
                                                (t[3] = (e) => (s.value = e)),
                                              rate: a.value,
                                              speed: 100,
                                              color: d,
                                              text: '渐变色'
                                            },
                                            null,
                                            8,
                                            ['current-rate', 'rate']
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    u(
                                      h,
                                      { class: 'content-item' },
                                      {
                                        default: i(() => [
                                          u(
                                            f,
                                            {
                                              'current-rate': c.value,
                                              'onUpdate:currentRate':
                                                t[4] ||
                                                (t[4] = (e) => (c.value = e)),
                                              color: '#07c160',
                                              rate: a.value,
                                              speed: 100,
                                              clockwise: !1,
                                              text: '逆时针'
                                            },
                                            null,
                                            8,
                                            ['current-rate', 'rate']
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    u(
                                      h,
                                      { class: 'content-item' },
                                      {
                                        default: i(() => [
                                          u(
                                            f,
                                            {
                                              'current-rate': c.value,
                                              'onUpdate:currentRate':
                                                t[5] ||
                                                (t[5] = (e) => (c.value = e)),
                                              color: '#7232dd',
                                              rate: a.value,
                                              speed: 100,
                                              size: 140,
                                              text: '大小定制'
                                            },
                                            null,
                                            8,
                                            ['current-rate', 'rate']
                                          )
                                        ]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              u(
                                h,
                                { style: { 'margin-top': '30rpx' } },
                                {
                                  default: i(() => [
                                    u(y, {
                                      text: '增加',
                                      type: 'primary',
                                      size: 'small',
                                      onClick: p
                                    }),
                                    u(y, {
                                      'custom-style': {
                                        'margin-left': '30rpx'
                                      },
                                      text: '减少',
                                      type: 'danger',
                                      size: 'small',
                                      onClick: m
                                    })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        u(
                          v,
                          { title: '起始位置' },
                          {
                            default: i(() => [
                              u(
                                h,
                                { class: 'content' },
                                {
                                  default: i(() => [
                                    u(
                                      h,
                                      { class: 'content-item' },
                                      {
                                        default: i(() => [
                                          u(
                                            f,
                                            {
                                              'current-rate': 75,
                                              rate: a.value,
                                              text: '左侧',
                                              'start-position': 'left'
                                            },
                                            null,
                                            8,
                                            ['rate']
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    u(
                                      h,
                                      { class: 'content-item' },
                                      {
                                        default: i(() => [
                                          u(
                                            f,
                                            {
                                              'current-rate': 75,
                                              rate: a.value,
                                              text: '右侧',
                                              'start-position': 'right'
                                            },
                                            null,
                                            8,
                                            ['rate']
                                          )
                                        ]),
                                        _: 1
                                      }
                                    ),
                                    u(
                                      h,
                                      { class: 'content-item' },
                                      {
                                        default: i(() => [
                                          u(
                                            f,
                                            {
                                              'current-rate': 75,
                                              rate: a.value,
                                              text: '底部',
                                              'start-position': 'bottom'
                                            },
                                            null,
                                            8,
                                            ['rate']
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
    [['__scopeId', 'data-v-dd7a8799']]
  )
export { G as default }
