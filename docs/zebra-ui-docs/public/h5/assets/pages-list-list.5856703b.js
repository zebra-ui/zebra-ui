import {
  d as e,
  k as s,
  X as i,
  D as l,
  A as a,
  l as t,
  an as o,
  I as r,
  B as d,
  a9 as n,
  s as u,
  m as f,
  o as h,
  c,
  w as v,
  x as g,
  n as m,
  E as p,
  b as _,
  t as k,
  p as z,
  e as x,
  F as y,
  L as b,
  ae as j,
  ah as T,
  i as $,
  _ as w,
  $ as L,
  a as B,
  r as S
} from './index-7fd204f3.js'
import { _ as U } from './z-cell.365e08ec.js'
import {
  m as V,
  s as C,
  t as A,
  i as D,
  j as H,
  v as P,
  r as I,
  d as E,
  x as F,
  A as O,
  a0 as R,
  a as X
} from './DemoPage.0bae30a9.js'
import { _ as Z, a as q } from './z-tabs.8d3e6868.js'
import { _ as G } from './z-pull-refresh.79093113.js'
import './useParent.5b9c05b5.js'
import './use-id.c1b053ed.js'
import './z-sticky.e6c39ae3.js'
import './useChildren.fb2421ae.js'
import './use-touch.1ac9fd53.js'
const J = w(
    e({
      name: 'ZList',
      options: { virtualHost: !0 },
      props: {
        error: Boolean,
        offset: V(30),
        loading: Boolean,
        disabled: Boolean,
        finished: Boolean,
        scroller: Object,
        errorText: String,
        direction: C('down'),
        loadingText: String,
        finishedText: String,
        immediateCheck: A,
        id: String
      },
      emits: ['load', 'update:error', 'update:loading'],
      setup(e, { expose: w, emit: L }) {
        const B = e,
          [S, U] = D('list')
        H(S)
        const V = b(),
          C = s(B.loading),
          A = i('z-tab'),
          R = l(() => a().windowHeight),
          X = () => {
            j(() => {
              if (
                C.value ||
                B.finished ||
                B.disabled ||
                B.error ||
                !1 === (null == A ? void 0 : A.value)
              )
                return void (q.value = !1)
              const { direction: e } = B,
                s = +B.offset
              F(V, '.z-list__placeholder').then((i) => {
                let l = !1
                'up' === e || (l = i.bottom - R.value <= s),
                  l &&
                    ((q.value = !1),
                    (C.value = !0),
                    L('update:loading', !0),
                    L('load'))
              })
            })
          },
          Z = () => {
            L('update:error', !1), X()
          },
          q = s(!1)
        t(() => [B.loading, B.finished, B.error], X),
          A &&
            t(A, (e) => {
              e && !q.value && X()
            })
        const G = () => {
          X()
        }
        let J = s()
        return (
          o(() => {
            C.value = B.loading
          }),
          r(() => {
            B.immediateCheck && ((q.value = !0), X()),
              O(() => {
                null != J.value && J.value.disconnect()
                const e = T(V, {
                  thresholds: [0, 0.5, 1],
                  observeAll: !0
                }).relativeToViewport()
                ;(J.value = e),
                  J.value.relativeToViewport({ top: 0, left: 0 }),
                  J.value.observe('.z-list-rect', (e) => {})
              }),
              d(`z-list-${B.id}`, G)
          }),
          n(() => {
            u(`z-list-${B.id}`)
          }),
          P({ check: X }),
          w({ check: X }),
          (e, s) => {
            const i = $,
              l = I(f('z-loading'), E)
            return (
              h(),
              c(
                i,
                { class: m(['z-list-rect', p(U)()]) },
                {
                  default: v(() => [
                    'down' === B.direction
                      ? g(e.$slots, 'default', { key: 0 }, void 0, !0)
                      : (h(),
                        c(
                          i,
                          { key: 1, class: m(p(U)('placeholder')) },
                          null,
                          8,
                          ['class']
                        )),
                    !C.value || B.finished || B.disabled
                      ? z('', !0)
                      : (h(),
                        c(
                          i,
                          { key: 2, class: m(p(U)('loading')) },
                          {
                            default: v(() => [
                              p(V).slots.loading
                                ? g(e.$slots, 'loading', { key: 0 }, void 0, !0)
                                : (h(),
                                  c(
                                    l,
                                    {
                                      key: 1,
                                      size: 'var(--z-list-loading-icon-size)'
                                    },
                                    {
                                      default: v(() => [
                                        _(k(B.loadingText || '加载中'), 1)
                                      ]),
                                      _: 1
                                    }
                                  ))
                            ]),
                            _: 3
                          },
                          8,
                          ['class']
                        )),
                    B.finished && (p(V).slots.finished || B.finishedText)
                      ? (h(),
                        c(
                          i,
                          { key: 3, class: m(p(U)('finished-text')) },
                          {
                            default: v(() => [
                              p(V).slots.finished
                                ? g(
                                    e.$slots,
                                    'finished',
                                    { key: 0 },
                                    void 0,
                                    !0
                                  )
                                : (h(),
                                  x(
                                    y,
                                    { key: 1 },
                                    [_(k(B.finishedText), 1)],
                                    64
                                  ))
                            ]),
                            _: 3
                          },
                          8,
                          ['class']
                        ))
                      : z('', !0),
                    B.error && (p(V).slots.error || B.errorText)
                      ? (h(),
                        c(
                          i,
                          { key: 4, class: m(p(U)('error-text')), onClick: Z },
                          {
                            default: v(() => [
                              p(V).slots.error
                                ? g(e.$slots, 'error', { key: 0 }, void 0, !0)
                                : (h(),
                                  x(y, { key: 1 }, [_(k(B.errorText), 1)], 64))
                            ]),
                            _: 3
                          },
                          8,
                          ['class']
                        ))
                      : z('', !0),
                    'up' === B.direction
                      ? g(e.$slots, 'default', { key: 5 }, void 0, !0)
                      : (h(),
                        c(
                          i,
                          { key: 6, class: m(p(U)('placeholder')) },
                          null,
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
    [['__scopeId', 'data-v-909f7343']]
  ),
  K = e({
    __name: 'list',
    setup(e) {
      const i = s([
        { items: [], refreshing: !1, loading: !1, error: !1, finished: !1 },
        { items: [], refreshing: !1, loading: !1, error: !1, finished: !1 },
        { items: [], refreshing: !1, loading: !1, error: !1, finished: !1 }
      ])
      R((e) => {
        L('z-list-list1', e),
          L('z-list-list2', e),
          L('z-list-list3', e),
          L('z-pull-refresh-refresh1', e)
      })
      const l = (e) => {
        const s = i.value[e]
        ;(s.loading = !0),
          setTimeout(() => {
            s.refreshing && ((s.items = []), (s.refreshing = !1))
            for (let e = 0; e < 10; e++) {
              const e = s.items.length + 1
              s.items.push(e < 10 ? '0' + e : String(e))
            }
            ;(s.loading = !1),
              (s.refreshing = !1),
              1 !== e || 10 !== s.items.length || s.error
                ? (s.error = !1)
                : (s.error = !0),
              s.items.length >= 40 && (s.finished = !0)
          }, 2e3)
      }
      return (e, s) => {
        const a = I(f('z-cell'), U),
          t = I(f('z-list'), J),
          o = I(f('z-tab'), Z),
          r = I(f('z-pull-refresh'), G),
          d = I(f('z-tabs'), q),
          n = $,
          u = I(f('DemoPage'), X)
        return (
          h(),
          c(
            u,
            { title: 'List' },
            {
              default: v(() => [
                B(
                  n,
                  { class: 'demo-list' },
                  {
                    default: v(() => [
                      B(
                        d,
                        {
                          animated: '',
                          sticky: '',
                          swipeable: '',
                          'custom-navbar': ''
                        },
                        {
                          default: v(() => [
                            B(
                              o,
                              { title: '基础用法' },
                              {
                                default: v(() => [
                                  B(
                                    t,
                                    {
                                      id: 'list1',
                                      loading: i.value[0].loading,
                                      'onUpdate:loading':
                                        s[0] ||
                                        (s[0] = (e) =>
                                          (i.value[0].loading = e)),
                                      finished: i.value[0].finished,
                                      'finished-text': '没有更多了',
                                      onLoad: s[1] || (s[1] = (e) => l(0))
                                    },
                                    {
                                      default: v(() => [
                                        (h(!0),
                                        x(
                                          y,
                                          null,
                                          S(
                                            i.value[0].items,
                                            (e) => (
                                              h(),
                                              c(
                                                a,
                                                {
                                                  key: e,
                                                  title: `单元格${e}`,
                                                  value: '内容'
                                                },
                                                null,
                                                8,
                                                ['title']
                                              )
                                            )
                                          ),
                                          128
                                        ))
                                      ]),
                                      _: 1
                                    },
                                    8,
                                    ['loading', 'finished']
                                  )
                                ]),
                                _: 1
                              }
                            ),
                            B(
                              o,
                              { title: '错误提示' },
                              {
                                default: v(() => [
                                  B(
                                    t,
                                    {
                                      id: 'list2',
                                      loading: i.value[1].loading,
                                      'onUpdate:loading':
                                        s[2] ||
                                        (s[2] = (e) =>
                                          (i.value[1].loading = e)),
                                      error: i.value[1].error,
                                      'onUpdate:error':
                                        s[3] ||
                                        (s[3] = (e) => (i.value[1].error = e)),
                                      finished: i.value[1].finished,
                                      'error-text': '请求失败，点击重新加载',
                                      onLoad: s[4] || (s[4] = (e) => l(1))
                                    },
                                    {
                                      default: v(() => [
                                        (h(!0),
                                        x(
                                          y,
                                          null,
                                          S(
                                            i.value[1].items,
                                            (e) => (
                                              h(),
                                              c(
                                                a,
                                                {
                                                  key: e,
                                                  title: `单元格${e}`,
                                                  value: '内容'
                                                },
                                                null,
                                                8,
                                                ['title']
                                              )
                                            )
                                          ),
                                          128
                                        ))
                                      ]),
                                      _: 1
                                    },
                                    8,
                                    ['loading', 'error', 'finished']
                                  )
                                ]),
                                _: 1
                              }
                            ),
                            B(
                              o,
                              { title: '下拉刷新' },
                              {
                                default: v(() => [
                                  B(
                                    r,
                                    {
                                      id: 'refresh1',
                                      modelValue: i.value[2].refreshing,
                                      'onUpdate:modelValue':
                                        s[7] ||
                                        (s[7] = (e) =>
                                          (i.value[2].refreshing = e)),
                                      onRefresh:
                                        s[8] ||
                                        (s[8] = (e) => {
                                          return (
                                            (s = 2),
                                            (i.value[s].finished = !1),
                                            void l(s)
                                          )
                                          var s
                                        })
                                    },
                                    {
                                      default: v(() => [
                                        B(
                                          t,
                                          {
                                            id: 'list3',
                                            loading: i.value[2].loading,
                                            'onUpdate:loading':
                                              s[5] ||
                                              (s[5] = (e) =>
                                                (i.value[2].loading = e)),
                                            finished: i.value[2].finished,
                                            'finished-text': '没有更多了',
                                            onLoad: s[6] || (s[6] = (e) => l(2))
                                          },
                                          {
                                            default: v(() => [
                                              (h(!0),
                                              x(
                                                y,
                                                null,
                                                S(
                                                  i.value[2].items,
                                                  (e) => (
                                                    h(),
                                                    c(
                                                      a,
                                                      {
                                                        key: e,
                                                        title: `单元格${e}`,
                                                        value: '内容'
                                                      },
                                                      null,
                                                      8,
                                                      ['title']
                                                    )
                                                  )
                                                ),
                                                128
                                              ))
                                            ]),
                                            _: 1
                                          },
                                          8,
                                          ['loading', 'finished']
                                        )
                                      ]),
                                      _: 1
                                    },
                                    8,
                                    ['modelValue']
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
  })
export { K as default }
