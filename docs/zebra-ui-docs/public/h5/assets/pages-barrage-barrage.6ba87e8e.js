import {
  d as a,
  k as e,
  l as t,
  I as l,
  o as s,
  c as o,
  w as u,
  x as d,
  e as i,
  F as n,
  r,
  n as m,
  y as p,
  b as v,
  t as y,
  p as c,
  E as f,
  i as x,
  v as g,
  L as _,
  _ as h,
  m as b,
  G as w,
  a as V
} from './index-7fd204f3.js'
import {
  m as k,
  t as z,
  w as P,
  l as S,
  i as B,
  j as E,
  A as $,
  v as D,
  x as I,
  r as j,
  b as A,
  a as C
} from './DemoPage.0bae30a9.js'
const M = h(
    a({
      name: 'ZBarrage',
      options: { virtualHost: !0 },
      props: {
        top: k(10),
        rows: k(4),
        duration: k(4e3),
        autoPlay: z,
        delay: P(300),
        modelValue: S()
      },
      emits: ['update:modelValue'],
      setup(a, { expose: h, emit: b }) {
        const w = a,
          [V, k] = B('barrage')
        E(V)
        const z = _(),
          P = k('item'),
          S = e(0),
          j = e([]),
          A = e(!0),
          C = e(w.autoPlay),
          M = ({ id: a, text: e }, t) => {
            const l = ((a, e = w.delay) => {
              const t = {}
              return (
                (t.className = P),
                (t.innerText = String(a)),
                (t.style = {}),
                (t.dataset = {}),
                (t.style.animationDuration = `${w.duration}ms`),
                (t.style.animationDelay = `${e}ms`),
                (t.style.animationTimingFunction = 'linear'),
                (t.show = !0),
                t
              )
            })(e, A.value ? t * w.delay : void 0)
            w.autoPlay ||
              !1 !== C.value ||
              (l.style.animationPlayState = 'paused'),
              S.value++
            const s = ((S.value - 1) % +w.rows) * g(50) + +w.top
            ;(l.style.top = `${s}px`),
              (l.dataset.id = String(a)),
              j.value.push(l)
          },
          T = (a, e) => {
            const t = new Map(e.map((a) => [a.id, a]))
            a.forEach((a, e) => {
              t.has(a.id) ? t.delete(a.id) : M(a, e)
            }),
              t.forEach((a) => {
                const e = j.value.findIndex(
                  (e) => e.dataset.id === String(a.id)
                )
                e > -1 && j.value.splice(e, 1)
              }),
              (A.value = !1)
          }
        t(
          () => w.modelValue.slice(),
          (a, e) => {
            T(a || [], e || [])
          },
          { deep: !0 }
        )
        const F = e({})
        l(() => {
          $(() => {
            I(z, '.z-barrage').then((a) => {
              ;(F.value['--move-distance'] = `-${a.width}px`),
                T(w.modelValue, [])
            })
          })
        })
        const N = () => {
            ;(C.value = !0),
              j.value.forEach((a) => {
                a.style = { ...a.style, animationPlayState: 'running' }
              })
          },
          U = () => {
            ;(C.value = !1),
              j.value.forEach((a) => {
                a.style = { ...a.style, animationPlayState: 'paused' }
              })
          }
        return (
          D({ play: N, pause: U }),
          h({ play: N, pause: U }),
          (a, e) => {
            const t = x
            return (
              s(),
              o(
                t,
                { class: m(f(k)()), style: p([F.value]) },
                {
                  default: u(() => [
                    d(a.$slots, 'default', {}, void 0, !0),
                    (s(!0),
                    i(
                      n,
                      null,
                      r(j.value, (a, e) => {
                        var l
                        return (
                          s(),
                          i(
                            n,
                            { key: e },
                            [
                              a.show
                                ? (s(),
                                  o(
                                    t,
                                    {
                                      key: 0,
                                      class: m(
                                        null == a ? void 0 : a.className
                                      ),
                                      'data-id':
                                        null ==
                                        (l = null == a ? void 0 : a.dataset)
                                          ? void 0
                                          : l.id,
                                      style: p(a.style),
                                      onAnimationend: (e) =>
                                        ((a, e) => {
                                          ;(a.show = !1),
                                            j.value.filter((a) => a.show)
                                              .length ||
                                              b('update:modelValue', [])
                                        })(a)
                                    },
                                    {
                                      default: u(() => [v(y(a.innerText), 1)]),
                                      _: 2
                                    },
                                    1032,
                                    [
                                      'class',
                                      'data-id',
                                      'style',
                                      'onAnimationend'
                                    ]
                                  ))
                                : c('', !0)
                            ],
                            64
                          )
                        )
                      }),
                      128
                    ))
                  ]),
                  _: 3
                },
                8,
                ['class', 'style']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-f6b3e5be']]
  ),
  T = h(
    a({
      __name: 'barrage',
      setup(a) {
        const l = [
            { id: 11, text: 'zebra-ui' },
            { id: 12, text: '666666' },
            { id: 13, text: '哈哈哈哈哈哈' },
            { id: 14, text: 'uniapp' },
            { id: 15, text: 'zebra-swiper' },
            { id: 16, text: '嘻嘻嘻' },
            {
              id: 17,
              text: '这条弹幕很长这条弹幕很长这条弹幕很长这条弹幕很长这条弹幕很长'
            }
          ],
          d = e([...l]),
          i = () => {
            d.value.push({ id: Math.random(), text: 'Barrage' })
          },
          n = e([...l]),
          r = e(),
          m = () => {
            n.value.push({ id: Math.random(), text: 'Barrage' })
          },
          p = e(!1)
        return (
          t(p, () => {
            var a, e
            p.value
              ? null == (a = r.value) || a.play()
              : null == (e = r.value) || e.pause()
          }),
          (a, e) => {
            const t = x,
              l = j(b('z-barrage'), M),
              c = j(b('z-button'), A),
              f = w('demo-block'),
              g = j(b('DemoPage'), C)
            return (
              s(),
              o(
                g,
                { title: 'Barrage' },
                {
                  default: u(() => [
                    V(
                      t,
                      { class: 'demo-barrage' },
                      {
                        default: u(() => [
                          V(
                            f,
                            { title: '基础用法' },
                            {
                              default: u(() => [
                                V(
                                  l,
                                  {
                                    modelValue: d.value,
                                    'onUpdate:modelValue':
                                      e[0] || (e[0] = (a) => (d.value = a))
                                  },
                                  {
                                    default: u(() => [
                                      V(t, { class: 'video' })
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['modelValue']
                                ),
                                V(
                                  t,
                                  { style: { 'margin-top': '20rpx' } },
                                  {
                                    default: u(() => [
                                      V(
                                        c,
                                        {
                                          onClick: i,
                                          type: 'primary',
                                          size: 'small'
                                        },
                                        {
                                          default: u(() => [v(' 弹幕 ')]),
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
                          V(
                            f,
                            { title: '视频弹幕' },
                            {
                              default: u(() => [
                                V(
                                  l,
                                  {
                                    modelValue: n.value,
                                    'onUpdate:modelValue':
                                      e[1] || (e[1] = (a) => (n.value = a)),
                                    ref_key: 'videoBarrage',
                                    ref: r,
                                    'auto-play': !1
                                  },
                                  {
                                    default: u(() => [
                                      V(t, { class: 'video' })
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['modelValue']
                                ),
                                V(
                                  t,
                                  { style: { 'margin-top': '10px' } },
                                  {
                                    default: u(() => [
                                      V(
                                        c,
                                        {
                                          onClick: m,
                                          type: 'primary',
                                          size: 'small',
                                          disabled: !p.value
                                        },
                                        {
                                          default: u(() => [v(' 弹幕 ')]),
                                          _: 1
                                        },
                                        8,
                                        ['disabled']
                                      ),
                                      V(
                                        c,
                                        {
                                          'custom-style': {
                                            'margin-left': '20rpx'
                                          },
                                          onClick:
                                            e[2] ||
                                            (e[2] = (a) =>
                                              ((a = !p.value) => {
                                                p.value = a
                                              })()),
                                          size: 'small'
                                        },
                                        {
                                          default: u(() => [
                                            v(y(p.value ? '暂停' : '播放'), 1)
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
        )
      }
    }),
    [['__scopeId', 'data-v-a079e183']]
  )
export { T as default }
