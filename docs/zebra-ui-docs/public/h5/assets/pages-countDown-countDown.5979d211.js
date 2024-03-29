import {
  k as e,
  D as a,
  a9 as t,
  a3 as s,
  a4 as l,
  d as o,
  l as n,
  o as i,
  c as u,
  w as r,
  E as c,
  x as m,
  e as d,
  F as f,
  b as p,
  t as v,
  n as _,
  L as h,
  i as S,
  _ as D,
  m as k,
  G as H,
  a as g,
  C as j
} from './index-7fd204f3.js'
import {
  a4 as w,
  A as b,
  V as z,
  m as C,
  s as x,
  t as M,
  i as y,
  j as F,
  v as P,
  r as A,
  a as I
} from './DemoPage.0bae30a9.js'
import { _ as B, a as E } from './z-grid.6d744e86.js'
import { _ as G } from './z-toast.a77377ba.js'
import { s as K } from './z-toast.44a3344c.js'
import './z-dialog.b209de9d.js'
import './useParent.5b9c05b5.js'
import './useChildren.fb2421ae.js'
function L(o) {
  let n, i, u, r
  const c = e(o.time),
    m = a(() => {
      return {
        total: (e = c.value),
        days: Math.floor(e / 864e5),
        hours: Math.floor((e % 864e5) / 36e5),
        minutes: Math.floor((e % 36e5) / 6e4),
        seconds: Math.floor((e % 6e4) / 1e3),
        milliseconds: Math.floor(e % 1e3)
      }
      var e
    }),
    d = () => {
      ;(u = !1), w(n)
    },
    f = () => Math.max(i - Date.now(), 0),
    p = (e) => {
      var a, t
      ;(c.value = e),
        null == (a = o.onChange) || a.call(o, m.value),
        0 === e && (d(), null == (t = o.onFinish) || t.call(o))
    },
    v = () => {
      n = b(() => {
        u && (p(f()), c.value > 0 && v())
      })
    },
    _ = () => {
      n = b(() => {
        if (u) {
          const t = f()
          ;(e = t),
            (a = c.value),
            (Math.floor(e / 1e3) !== Math.floor(a / 1e3) || 0 === t) && p(t),
            c.value > 0 && _()
        }
        var e, a
      })
    },
    h = () => {
      o.millisecond ? v() : _()
    }
  return (
    t(d),
    s(() => {
      r && ((u = !0), (r = !1), h())
    }),
    l(() => {
      u && (d(), (r = !0))
    }),
    {
      start: () => {
        u || ((i = Date.now() + c.value), (u = !0), h())
      },
      pause: d,
      reset: (e = o.time) => {
        d(), (c.value = e)
      },
      current: m
    }
  )
}
const T = D(
    o({
      name: 'ZCountDown',
      options: { virtualHost: !0 },
      props: {
        time: C(0),
        format: x('HH:mm:ss'),
        autoStart: M,
        millisecond: Boolean
      },
      emits: ['change', 'finish'],
      setup(e, { expose: t, emit: s }) {
        const l = e,
          [o, D] = y('count-down')
        F(o)
        const k = h(),
          {
            start: H,
            pause: g,
            reset: j,
            current: w
          } = L({
            time: +l.time,
            millisecond: l.millisecond,
            onChange: (e) => s('change', e),
            onFinish: () => s('finish')
          }),
          b = a(() =>
            (function (e, a) {
              const { days: t } = a
              let { hours: s, minutes: l, seconds: o, milliseconds: n } = a
              if (
                (e.includes('DD') ? (e = e.replace('DD', z(t))) : (s += 24 * t),
                e.includes('HH') ? (e = e.replace('HH', z(s))) : (l += 60 * s),
                e.includes('mm') ? (e = e.replace('mm', z(l))) : (o += 60 * l),
                e.includes('ss') ? (e = e.replace('ss', z(o))) : (n += 1e3 * o),
                e.includes('S'))
              ) {
                const a = z(n, 3)
                e = e.includes('SSS')
                  ? e.replace('SSS', a)
                  : e.includes('SS')
                    ? e.replace('SS', a.slice(0, 2))
                    : e.replace('S', a.charAt(0))
              }
              return e
            })(l.format, w.value)
          ),
          C = () => {
            j(+l.time), l.autoStart && H()
          }
        return (
          n(() => l.time, C, { immediate: !0 }),
          P({ start: H, pause: g, reset: C }),
          t({ start: H, pause: g, reset: C }),
          (e, a) => {
            const t = S
            return (
              i(),
              u(
                t,
                { class: _(c(D)()) },
                {
                  default: r(() => [
                    c(k).slots.default
                      ? m(
                          e.$slots,
                          'default',
                          { key: 0, current: c(w) },
                          void 0,
                          !0
                        )
                      : (i(), d(f, { key: 1 }, [p(v(c(b)), 1)], 64))
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
    [['__scopeId', 'data-v-62c8fb80']]
  ),
  V = D(
    o({
      __name: 'countDown',
      setup(a) {
        const t = e(108e6),
          s = e(),
          l = () => {
            var e
            null == (e = s.value) || e.start()
          },
          o = () => {
            var e
            null == (e = s.value) || e.pause()
          },
          n = () => {
            var e
            null == (e = s.value) || e.reset()
          },
          c = () => K('倒计时结束')
        return (e, a) => {
          const m = A(k('z-count-down'), T),
            d = H('demo-block'),
            f = j,
            _ = S,
            h = A(k('z-grid-item'), B),
            D = A(k('z-grid'), E),
            w = A(k('z-toast'), G),
            b = A(k('DemoPage'), I)
          return (
            i(),
            u(
              b,
              { title: 'CountDown' },
              {
                default: r(() => [
                  g(
                    _,
                    { class: 'demo-count-down' },
                    {
                      default: r(() => [
                        g(
                          d,
                          { title: '基础用法' },
                          {
                            default: r(() => [
                              g(m, { time: t.value }, null, 8, ['time'])
                            ]),
                            _: 1
                          }
                        ),
                        g(
                          d,
                          { title: '自定义格式' },
                          {
                            default: r(() => [
                              g(
                                m,
                                {
                                  time: t.value,
                                  format: 'DD 天 HH 时 mm 分 ss 秒'
                                },
                                null,
                                8,
                                ['time']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        g(
                          d,
                          { title: '毫秒级渲染' },
                          {
                            default: r(() => [
                              g(
                                m,
                                {
                                  millisecond: '',
                                  time: t.value,
                                  format: 'HH:mm:ss:SS'
                                },
                                null,
                                8,
                                ['time']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        g(
                          d,
                          { title: '自定义样式' },
                          {
                            default: r(() => [
                              g(
                                m,
                                { time: t.value },
                                {
                                  default: r(({ current: e }) => [
                                    g(
                                      f,
                                      { class: 'block' },
                                      {
                                        default: r(() => [p(v(e.hours), 1)]),
                                        _: 2
                                      },
                                      1024
                                    ),
                                    g(
                                      f,
                                      { class: 'colon' },
                                      { default: r(() => [p(':')]), _: 1 }
                                    ),
                                    g(
                                      f,
                                      { class: 'block' },
                                      {
                                        default: r(() => [p(v(e.minutes), 1)]),
                                        _: 2
                                      },
                                      1024
                                    ),
                                    g(
                                      f,
                                      { class: 'colon' },
                                      { default: r(() => [p(':')]), _: 1 }
                                    ),
                                    g(
                                      f,
                                      { class: 'block' },
                                      {
                                        default: r(() => [p(v(e.seconds), 1)]),
                                        _: 2
                                      },
                                      1024
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['time']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        g(
                          d,
                          { title: '手动控制' },
                          {
                            default: r(() => [
                              g(
                                _,
                                { class: 'count-content' },
                                {
                                  default: r(() => [
                                    g(
                                      m,
                                      {
                                        ref_key: 'countDown',
                                        ref: s,
                                        millisecond: '',
                                        time: 3e3,
                                        'auto-start': !1,
                                        format: 'ss:SSS',
                                        onFinish: c
                                      },
                                      null,
                                      512
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              g(
                                D,
                                { clickable: '', 'column-num': 3 },
                                {
                                  default: r(() => [
                                    g(h, {
                                      icon: 'play-circle',
                                      text: '开始',
                                      onClick: l
                                    }),
                                    g(h, {
                                      icon: 'timeout',
                                      text: '暂停',
                                      onClick: o
                                    }),
                                    g(h, {
                                      icon: 'reload',
                                      text: '重置',
                                      onClick: n
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
                  g(w, { ref: 'zToast' }, null, 512)
                ]),
                _: 1
              }
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-293d47b5']]
  )
export { V as default }
