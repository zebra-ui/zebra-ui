import {
  d as e,
  D as a,
  N as t,
  I as l,
  m as s,
  o as i,
  c as u,
  w as o,
  a as n,
  n as r,
  E as c,
  b as d,
  t as v,
  L as h,
  O as g,
  P as m,
  C as f,
  i as p,
  _ as w,
  k as _,
  G as b,
  p as k
} from './index-7fd204f3.js'
import {
  s as y,
  w as z,
  i as C,
  j as T,
  v as S,
  r as x,
  b as j,
  x as P,
  a as B
} from './DemoPage.0bae30a9.js'
import { u as D } from './use-id.c1b053ed.js'
import { _ as I } from './z-image.24b91007.js'
import { _ as W } from './z-toast.a77377ba.js'
import { s as L } from './z-toast.44a3344c.js'
import './z-dialog.b209de9d.js'
const R = w(
    e({
      name: 'ZSignature',
      options: { virtualHost: !0 },
      props: {
        tips: String,
        type: y('png'),
        penColor: y('#000'),
        lineWidth: z(3),
        clearButtonText: String,
        backgroundColor: y(''),
        confirmButtonText: String
      },
      emits: ['submit', 'clear', 'start', 'end', 'signing'],
      setup(e, { emit: w }) {
        const _ = e,
          [b, k] = C('signature')
        T(b)
        const y = h()
        let z = !0
        const B = D(),
          I = a(() => {
            const e = t(B, y)
            return e || ((z = !1), null)
          })
        let W,
          L = 0,
          R = 0
        const E = (e) => {
            if (!I.value) return !1
            I.value.beginPath(),
              (I.value.lineWidth = _.lineWidth),
              (I.value.strokeStyle = _.penColor),
              P(y, `#${B}`).then((a) => {
                W = a
                const t = e.touches[0],
                  l = t.clientX - ((null == W ? void 0 : W.left) || 0),
                  s = t.clientY - ((null == W ? void 0 : W.top) || 0)
                I.value && I.value.moveTo(l, s)
              }),
              w('start')
          },
          F = (e) => {
            if (!I.value) return !1
            const a = e.touches[0],
              t = a.x,
              l = a.y
            ;(I.value.lineCap = 'round'),
              (I.value.lineJoin = 'round'),
              I.value.lineTo(t, l),
              I.value.stroke(),
              I.value.draw(!0),
              I.value.moveTo(t, l),
              w('signing', e)
          },
          G = (e) => {
            w('end')
          },
          H = (e) => {
            e &&
              _.backgroundColor &&
              ((e.fillStyle = _.backgroundColor),
              e.fillRect(0, 0, L, R),
              e.draw())
          },
          J = () => {
            const e = I.value
            e &&
              g(
                {
                  canvasId: B,
                  success: (a) => {
                    w('submit', {
                      image: a.tempFilePath,
                      width: L,
                      height: R,
                      canvas: e
                    })
                  },
                  fail: (e) => {
                    console.error(e)
                  }
                },
                y
              )
          },
          N = () => {
            I.value &&
              (I.value.clearRect(0, 0, L, R),
              I.value.closePath(),
              H(I.value),
              I.value.draw()),
              w('clear')
          },
          O = () => {
            if (z && I.value) {
              const e = I.value,
                a = 1
              P(y, '.z-signature__content').then((t) => {
                var l
                ;(L = e.width = (t.width || 0) * a),
                  (R = e.height = (t.height || 0) * a),
                  null == (l = I.value) || l.scale(a, a),
                  H(I.value)
              })
            }
          },
          X = a(() => ({
            padding: '0 var(--z-padding-md)',
            marginTop: 'var(--z-padding-xs)',
            marginLeft: 'var(--z-padding-xs)'
          }))
        return (
          l(O),
          S({
            resize: () => {
              I.value && O()
            }
          }),
          (e, a) => {
            const t = m,
              l = f,
              h = p,
              g = x(s('z-button'), j)
            return (
              i(),
              u(
                h,
                { class: r(c(k)()) },
                {
                  default: o(() => [
                    n(
                      h,
                      { class: r(c(k)('content')) },
                      {
                        default: o(() => [
                          c(z)
                            ? (i(),
                              u(
                                t,
                                {
                                  key: 0,
                                  id: c(B),
                                  'canvas-id': c(B),
                                  'disable-scroll': '',
                                  onTouchstartPassive: E,
                                  onTouchmove: F,
                                  onTouchend: G
                                },
                                null,
                                8,
                                ['id', 'canvas-id']
                              ))
                            : (i(),
                              u(
                                l,
                                { key: 1 },
                                { default: o(() => [d(v(_.tips), 1)]), _: 1 }
                              ))
                        ]),
                        _: 1
                      },
                      8,
                      ['class']
                    ),
                    n(
                      h,
                      { class: r(c(k)('footer')) },
                      {
                        default: o(() => [
                          n(
                            g,
                            { size: 'small', 'custom-style': c(X), onClick: N },
                            {
                              default: o(() => [
                                d(v(_.clearButtonText || '清空'), 1)
                              ]),
                              _: 1
                            },
                            8,
                            ['custom-style']
                          ),
                          n(
                            g,
                            {
                              type: 'primary',
                              size: 'small',
                              'custom-style': c(X),
                              onClick: J
                            },
                            {
                              default: o(() => [
                                d(v(_.confirmButtonText || '确认'), 1)
                              ]),
                              _: 1
                            },
                            8,
                            ['custom-style']
                          )
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
                ['class']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-347c493c']]
  ),
  E = e({
    __name: 'signature',
    setup(e) {
      const a = _(''),
        t = _(''),
        l = _(''),
        r = _(''),
        c = _(''),
        d = _(''),
        v = _(''),
        h = _(''),
        g = _(''),
        m = _(''),
        f = _(''),
        w = _(''),
        y = (e) => {
          ;(a.value = e.image), (t.value = e.width), (l.value = e.height)
        },
        z = (e) => {
          ;(r.value = e.image), (c.value = e.width), (d.value = e.height)
        },
        C = (e) => {
          ;(v.value = e.image), (h.value = e.width), (g.value = e.height)
        },
        T = (e) => {
          ;(m.value = e.image), (f.value = e.width), (w.value = e.height)
        },
        S = () => L('clear')
      return (e, _) => {
        const j = x(s('z-signature'), R),
          P = x(s('z-image'), I),
          D = b('demo-block'),
          L = p,
          E = x(s('z-toast'), W),
          F = x(s('DemoPage'), B)
        return (
          i(),
          u(
            F,
            { title: 'Signature' },
            {
              default: o(() => [
                n(
                  L,
                  { class: 'demo-signature' },
                  {
                    default: o(() => [
                      n(
                        D,
                        { title: '基础用法' },
                        {
                          default: o(() => [
                            n(j, { onSubmit: y, onClear: S }),
                            a.value
                              ? (i(),
                                u(
                                  P,
                                  {
                                    key: 0,
                                    width: t.value,
                                    height: l.value,
                                    src: a.value
                                  },
                                  null,
                                  8,
                                  ['width', 'height', 'src']
                                ))
                              : k('', !0)
                          ]),
                          _: 1
                        }
                      ),
                      n(
                        D,
                        { title: '自定义颜色' },
                        {
                          default: o(() => [
                            n(j, {
                              'pen-color': '#ff0000',
                              onSubmit: z,
                              onClear: S
                            }),
                            r.value
                              ? (i(),
                                u(
                                  P,
                                  {
                                    key: 0,
                                    width: c.value,
                                    height: d.value,
                                    src: r.value
                                  },
                                  null,
                                  8,
                                  ['width', 'height', 'src']
                                ))
                              : k('', !0)
                          ]),
                          _: 1
                        }
                      ),
                      n(
                        D,
                        { title: '自定义线宽' },
                        {
                          default: o(() => [
                            n(j, { 'line-width': 10, onSubmit: C, onClear: S }),
                            v.value
                              ? (i(),
                                u(
                                  P,
                                  {
                                    key: 0,
                                    width: h.value,
                                    height: g.value,
                                    src: v.value
                                  },
                                  null,
                                  8,
                                  ['width', 'height', 'src']
                                ))
                              : k('', !0)
                          ]),
                          _: 1
                        }
                      ),
                      n(
                        D,
                        { title: '自定义背景颜色' },
                        {
                          default: o(() => [
                            n(j, {
                              'background-color': '#eee',
                              onSubmit: T,
                              onClear: S
                            }),
                            m.value
                              ? (i(),
                                u(
                                  P,
                                  {
                                    key: 0,
                                    width: f.value,
                                    height: w.value,
                                    src: m.value
                                  },
                                  null,
                                  8,
                                  ['width', 'height', 'src']
                                ))
                              : k('', !0)
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                n(E, { ref: 'zToast' }, null, 512)
              ]),
              _: 1
            }
          )
        )
      }
    }
  })
export { E as default }
