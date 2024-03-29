import {
  d as t,
  D as a,
  o as e,
  c as r,
  w as l,
  a as s,
  n as u,
  E as i,
  e as o,
  F as n,
  r as d,
  y as g,
  b as c,
  t as m,
  p,
  i as f,
  _ as y,
  k as h,
  l as _,
  m as v,
  G as x
} from './index-7fd204f3.js'
import {
  l as b,
  w as k,
  s as A,
  i as z,
  j as N,
  y as C,
  t as j,
  V as w,
  v as L,
  A as S,
  r as T,
  b as I,
  a as R
} from './DemoPage.0bae30a9.js'
import { _ as D, a as H } from './z-grid.6d744e86.js'
import './useParent.5b9c05b5.js'
import './useChildren.fb2421ae.js'
const P = y(
    t({
      name: 'ZRollingTextItem',
      options: { virtualHost: !0 },
      props: {
        figureArr: b(),
        delay: Number,
        duration: k(2),
        isStart: Boolean,
        direction: A('down'),
        height: k(40)
      },
      setup(t) {
        const y = t,
          [h, _] = z('rolling-text-item')
        N(h)
        const v = a(() =>
            'down' === y.direction ? y.figureArr.slice().reverse() : y.figureArr
          ),
          x = a(() => `-${y.height * (y.figureArr.length - 1)}px`),
          b = a(() => ({ lineHeight: C(y.height) })),
          k = a(() => ({
            height: C(y.height),
            '--z-translate': x.value,
            '--z-duration': y.duration + 's',
            '--z-delay': y.delay + 's'
          }))
        return (t, a) => {
          const h = f
          return (
            e(),
            r(
              h,
              { class: u(i(_)([y.direction])), style: g(i(k)) },
              {
                default: l(() => [
                  s(
                    h,
                    { class: u(i(_)('box', { animate: y.isStart })) },
                    {
                      default: l(() => [
                        Array.isArray(i(v))
                          ? (e(!0),
                            o(
                              n,
                              { key: 0 },
                              d(
                                i(v),
                                (t, a) => (
                                  e(),
                                  r(
                                    h,
                                    {
                                      key: a,
                                      class: u(i(_)('item')),
                                      style: g(i(b))
                                    },
                                    { default: l(() => [c(m(t), 1)]), _: 2 },
                                    1032,
                                    ['class', 'style']
                                  )
                                )
                              ),
                              128
                            ))
                          : p('', !0)
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
      }
    }),
    [['__scopeId', 'data-v-078865c5']]
  ),
  O = y(
    t({
      name: 'ZRollingText',
      options: { virtualHost: !0 },
      props: {
        startNum: k(0),
        targetNum: Number,
        textList: b(),
        duration: k(2),
        autoStart: j,
        direction: A('down'),
        stopOrder: A('ltr'),
        height: k(40)
      },
      setup(t, { expose: s }) {
        const g = t,
          [c, m] = z('rolling-text')
        N(c)
        const p = a(() => Array.isArray(g.textList) && g.textList.length),
          y = a(() =>
            p.value
              ? g.textList[0].length
              : `${Math.max(g.startNum, g.targetNum)}`.length
          ),
          v = (t) => {
            const a = []
            for (let e = 0; e < g.textList.length; e++) a.push(g.textList[e][t])
            return a
          },
          x = a(() =>
            p.value
              ? new Array(y.value).fill('')
              : w(g.targetNum, y.value).split('')
          ),
          b = a(() => w(g.startNum, y.value).split('')),
          k = (t) => {
            const a = +b.value[t],
              e = +x.value[t],
              r = []
            for (let l = a; l <= 9; l++) r.push(l)
            for (let l = 0; l <= 2; l++) for (let t = 0; t <= 9; t++) r.push(t)
            for (let l = 0; l <= e; l++) r.push(l)
            return r
          },
          A = h(g.autoStart),
          C = () => {
            A.value = !0
          },
          j = () => {
            ;(A.value = !1), g.autoStart && S(() => C())
          }
        return (
          _(
            () => g.autoStart,
            (t) => {
              t && C()
            }
          ),
          L({ start: C, reset: j }),
          s({ start: C, reset: j }),
          (t, a) => {
            const s = f
            return (
              e(),
              r(
                s,
                { class: u(i(m)()) },
                {
                  default: l(() => [
                    (e(!0),
                    o(
                      n,
                      null,
                      d(i(x), (t, a) => {
                        return (
                          e(),
                          r(
                            P,
                            {
                              key: a,
                              'figure-arr': i(p) ? v(a) : k(a),
                              duration: g.duration,
                              direction: g.direction,
                              'is-start': A.value,
                              height: g.height,
                              delay:
                                ((l = a),
                                (s = i(y)),
                                'ltr' === g.stopOrder
                                  ? 0.2 * l
                                  : 0.2 * (s - 1 - l))
                            },
                            null,
                            8,
                            [
                              'figure-arr',
                              'duration',
                              'direction',
                              'is-start',
                              'height',
                              'delay'
                            ]
                          )
                        )
                        var l, s
                      }),
                      128
                    ))
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
    [['__scopeId', 'data-v-e2ebeb87']]
  ),
  Z = y(
    t({
      __name: 'rollingText',
      setup(t) {
        const a = h(!1),
          u = h(!1),
          i = h(!1),
          o = h(!1),
          n = h(!1),
          d = h([
            'aaaaa',
            'bbbbb',
            'ccccc',
            'ddddd',
            'eeeee',
            'fffff',
            'ggggg'
          ]),
          g = h(),
          m = () => {
            var t
            null == (t = g.value) || t.start()
          },
          p = () => {
            var t
            null == (t = g.value) || t.reset()
          }
        return (t, y) => {
          const h = T(v('z-rolling-text'), O),
            _ = T(v('z-button'), I),
            b = f,
            k = x('demo-block'),
            A = T(v('z-grid-item'), D),
            z = T(v('z-grid'), H),
            N = T(v('DemoPage'), R)
          return (
            e(),
            r(
              N,
              { title: 'RollingText' },
              {
                default: l(() => [
                  s(
                    b,
                    { class: 'demo-rolling-text' },
                    {
                      default: l(() => [
                        s(
                          k,
                          { title: '基础用法' },
                          {
                            default: l(() => [
                              s(
                                h,
                                {
                                  'start-num': 0,
                                  'target-num': 123,
                                  'auto-start': a.value
                                },
                                null,
                                8,
                                ['auto-start']
                              ),
                              s(
                                b,
                                { style: { 'margin-top': '20rpx' } },
                                {
                                  default: l(() => [
                                    s(
                                      _,
                                      {
                                        onClick:
                                          y[0] || (y[0] = () => (a.value = !0)),
                                        type: 'primary'
                                      },
                                      {
                                        default: l(() => [c(' 向下翻滚 ')]),
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
                        s(
                          k,
                          { title: '设置翻滚方向' },
                          {
                            default: l(() => [
                              s(
                                h,
                                {
                                  'start-num': 0,
                                  'target-num': 432,
                                  'auto-start': u.value,
                                  direction: 'up'
                                },
                                null,
                                8,
                                ['auto-start']
                              ),
                              s(
                                b,
                                { style: { 'margin-top': '20rpx' } },
                                {
                                  default: l(() => [
                                    s(
                                      _,
                                      {
                                        onClick:
                                          y[1] || (y[1] = () => (u.value = !0)),
                                        type: 'primary'
                                      },
                                      {
                                        default: l(() => [c('向上翻滚')]),
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
                        s(
                          k,
                          { title: '设置各数位停止顺序' },
                          {
                            default: l(() => [
                              s(
                                h,
                                {
                                  'start-num': 0,
                                  'target-num': 54321,
                                  'auto-start': i.value,
                                  'stop-order': 'rtl'
                                },
                                null,
                                8,
                                ['auto-start']
                              ),
                              s(
                                b,
                                { style: { 'margin-top': '20rpx' } },
                                {
                                  default: l(() => [
                                    s(
                                      _,
                                      {
                                        onClick:
                                          y[2] || (y[2] = () => (i.value = !0)),
                                        type: 'primary'
                                      },
                                      {
                                        default: l(() => [c('从个位停止')]),
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
                        s(
                          k,
                          { title: '翻转非数字内容' },
                          {
                            default: l(() => [
                              s(
                                h,
                                {
                                  'text-list': d.value,
                                  duration: 1,
                                  'auto-start': n.value
                                },
                                null,
                                8,
                                ['text-list', 'auto-start']
                              ),
                              s(
                                b,
                                { style: { 'margin-top': '20rpx' } },
                                {
                                  default: l(() => [
                                    s(
                                      _,
                                      {
                                        onClick:
                                          y[3] || (y[3] = () => (n.value = !0)),
                                        type: 'primary'
                                      },
                                      { default: l(() => [c('开始')]), _: 1 }
                                    )
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        s(
                          k,
                          { title: '自定义样式' },
                          {
                            default: l(() => [
                              s(
                                b,
                                { class: 'my-rolling-text' },
                                {
                                  default: l(() => [
                                    s(
                                      h,
                                      {
                                        'start-num': 12345,
                                        'target-num': 54321,
                                        'auto-start': o.value,
                                        height: 54
                                      },
                                      null,
                                      8,
                                      ['auto-start']
                                    )
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        s(
                          k,
                          { title: '自定义样式' },
                          {
                            default: l(() => [
                              s(
                                b,
                                { class: 'my-rolling-text' },
                                {
                                  default: l(() => [
                                    s(
                                      h,
                                      {
                                        ref_key: 'rollingTextRef',
                                        ref: g,
                                        'start-num': 0,
                                        'target-num': 54321,
                                        'auto-start': !1,
                                        height: 54
                                      },
                                      null,
                                      512
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              s(
                                z,
                                {
                                  clickable: '',
                                  'column-num': 2,
                                  'custom-style': { 'margin-top': '20rpx' }
                                },
                                {
                                  default: l(() => [
                                    s(A, {
                                      icon: 'play-circle',
                                      text: '开始',
                                      onClick: m
                                    }),
                                    s(A, {
                                      icon: 'reload',
                                      text: '重置',
                                      onClick: p
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
          )
        }
      }
    }),
    [['__scopeId', 'data-v-42834a8a']]
  )
export { Z as default }
