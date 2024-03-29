import {
  k as t,
  d as e,
  D as o,
  o as a,
  c as s,
  n as l,
  E as n,
  y as i,
  w as r,
  x as c,
  e as d,
  F as u,
  b as m,
  t as f,
  p,
  i as y,
  _ as h,
  I as b,
  ae as v,
  a as w,
  r as k,
  K as D,
  L as g,
  C as S,
  l as x,
  m as _,
  S as $,
  ah as T
} from './index-7fd204f3.js'
import {
  i as C,
  R as z,
  w as M,
  j as A,
  n as I,
  y as O,
  v as R,
  x as H,
  s as B,
  t as F,
  m as j,
  U as P,
  G as W,
  r as N,
  b as Y,
  e as Z,
  A as L
} from './DemoPage.0bae30a9.js'
import { s as U } from './z-toast.44a3344c.js'
import { u as V } from './use-id.c1b053ed.js'
import { a as E } from './utils.95c08333.js'
const [G, K, q] = C('calendar'),
  J = (t) => (
    t instanceof Date || (t = new Date(t)),
    `${t.getFullYear()}年${t.getMonth() + 1}月`
  )
function Q(t, e) {
  t instanceof Date || (t = new Date(t)), e instanceof Date || (e = new Date(e))
  const o = t.getFullYear(),
    a = e.getFullYear()
  if (o === a) {
    const o = t.getMonth(),
      a = e.getMonth()
    return o === a ? 0 : o > a ? 1 : -1
  }
  return o > a ? 1 : -1
}
function X(t, e) {
  t instanceof Date || (t = new Date(t)), e instanceof Date || (e = new Date(e))
  const o = Q(t, e)
  if (0 === o) {
    const o = t.getDate(),
      a = e.getDate()
    return o === a ? 0 : o > a ? 1 : -1
  }
  return o
}
const tt = (t) => new Date(t),
  et = (t) => (Array.isArray(t) ? t.map(tt) : tt(t))
function ot(t, e) {
  const o = tt(t)
  return o.setDate(o.getDate() + e), o
}
const at = (t) => ot(t, -1),
  st = (t) => ot(t, 1),
  lt = () => {
    const t = new Date()
    return t.setHours(0, 0, 0, 0), t
  }
const nt = h(
    e({
      name: 'ZCalendarDay',
      options: { virtualHost: !0 },
      props: {
        item: z(Object),
        color: String,
        index: Number,
        offset: M(0),
        rowHeight: String,
        componentSlots: Object
      },
      emits: ['click', 'clickDisabledDate'],
      setup(t, { emit: e }) {
        const h = t,
          [b] = C('calendar-day')
        A(b)
        const v = o(() => {
            var t
            const { item: e, index: o, color: a, offset: s, rowHeight: l } = h,
              n = { height: l }
            if ('placeholder' === e.type) return (n.width = '100%'), n
            if ((0 === o && (n.marginLeft = (100 * s) / 7 + '%'), a))
              switch (e.type) {
                case 'end':
                case 'start':
                case 'start-end':
                case 'multiple-middle':
                case 'multiple-selected':
                  n.background = a
                  break
                case 'middle':
                  n.color = a
              }
            return (
              s + ((null == (t = e.date) ? void 0 : t.getDate()) || 1) > 28 &&
                (n.marginBottom = 0),
              n
            )
          }),
          w = () => {
            'disabled' !== h.item.type
              ? e('click', h.item)
              : e('clickDisabledDate', h.item)
          }
        return (e, o) => {
          const b = y
          return 'placeholder' === h.item.type
            ? (a(),
              s(b, { key: 0, class: l(n(K)('day')), style: i(n(v)) }, null, 8, [
                'class',
                'style'
              ]))
            : (a(),
              s(
                b,
                {
                  key: 1,
                  style: i(n(v)),
                  class: l([n(K)('day', h.item.type), h.item.className]),
                  onClick: w
                },
                {
                  default: r(() => [
                    'selected' === h.item.type
                      ? (a(),
                        s(
                          b,
                          {
                            key: 0,
                            class: l(n(K)('selected-day')),
                            style: i({
                              width: t.rowHeight,
                              height: t.rowHeight,
                              background: t.color
                            })
                          },
                          {
                            default: r(() => [
                              h.item.topInfo ||
                              (t.componentSlots && t.componentSlots['top-info'])
                                ? (a(),
                                  s(
                                    b,
                                    { key: 0, class: l(n(K)('top-info')) },
                                    {
                                      default: r(() => [
                                        t.componentSlots &&
                                        t.componentSlots['top-info']
                                          ? c(
                                              e.$slots,
                                              'top-info',
                                              { key: 0 },
                                              void 0,
                                              !0
                                            )
                                          : (a(),
                                            d(
                                              u,
                                              { key: 1 },
                                              [m(f(h.item.topInfo), 1)],
                                              64
                                            ))
                                      ]),
                                      _: 3
                                    },
                                    8,
                                    ['class']
                                  ))
                                : p('', !0),
                              m(' ' + f(h.item.text) + ' ', 1),
                              h.item.bottomInfo ||
                              (t.componentSlots &&
                                t.componentSlots['bottom-info'])
                                ? (a(),
                                  s(
                                    b,
                                    { key: 1, class: l(n(K)('bottom-info')) },
                                    {
                                      default: r(() => [
                                        t.componentSlots &&
                                        t.componentSlots['bottom-info']
                                          ? c(
                                              e.$slots,
                                              'bottom-info',
                                              { key: 0 },
                                              void 0,
                                              !0
                                            )
                                          : (a(),
                                            d(
                                              u,
                                              { key: 1 },
                                              [m(f(h.item.bottomInfo), 1)],
                                              64
                                            ))
                                      ]),
                                      _: 3
                                    },
                                    8,
                                    ['class']
                                  ))
                                : p('', !0)
                            ]),
                            _: 3
                          },
                          8,
                          ['class', 'style']
                        ))
                      : (a(),
                        d(
                          u,
                          { key: 1 },
                          [
                            h.item.topInfo ||
                            (t.componentSlots && t.componentSlots['top-info'])
                              ? (a(),
                                s(
                                  b,
                                  { key: 0, class: l(n(K)('top-info')) },
                                  {
                                    default: r(() => [
                                      t.componentSlots &&
                                      t.componentSlots['top-info']
                                        ? c(
                                            e.$slots,
                                            'top-info',
                                            { key: 0 },
                                            void 0,
                                            !0
                                          )
                                        : (a(),
                                          d(
                                            u,
                                            { key: 1 },
                                            [m(f(h.item.topInfo), 1)],
                                            64
                                          ))
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  ['class']
                                ))
                              : p('', !0),
                            m(' ' + f(h.item.text) + ' ', 1),
                            h.item.bottomInfo ||
                            (t.componentSlots &&
                              t.componentSlots['bottom-info'])
                              ? (a(),
                                s(
                                  b,
                                  { key: 1, class: l(n(K)('bottom-info')) },
                                  {
                                    default: r(() => [
                                      t.componentSlots &&
                                      t.componentSlots['bottom-info']
                                        ? c(
                                            e.$slots,
                                            'bottom-info',
                                            { key: 0 },
                                            void 0,
                                            !0
                                          )
                                        : (a(),
                                          d(
                                            u,
                                            { key: 1 },
                                            [m(f(h.item.bottomInfo), 1)],
                                            64
                                          ))
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  ['class']
                                ))
                              : p('', !0)
                          ],
                          64
                        ))
                  ]),
                  _: 3
                },
                8,
                ['style', 'class']
              ))
        }
      }
    }),
    [['__scopeId', 'data-v-c9eec7d4']]
  ),
  it = h(
    e({
      name: 'ZCalendarMonth',
      options: { virtualHost: !1 },
      props: {
        date: z(Number),
        type: String,
        color: String,
        minDate: z(Date),
        maxDate: z(Date),
        showMark: Boolean,
        rowHeight: I,
        formatter: Function,
        lazyRender: Boolean,
        currentDate: [Date, Array],
        allowSameDay: Boolean,
        showSubtitle: Boolean,
        showMonthTitle: Boolean,
        firstDayOfWeek: Number,
        componentSlots: Object,
        index: [Number, String]
      },
      emits: ['click', 'clickDisabledDate', 'setScroll'],
      setup(e, { expose: i, emit: h }) {
        const S = e,
          [x] = C('calendar-month')
        A(x)
        const _ = g(),
          [$, T] = (function (e = !1) {
            const o = t(e)
            return [
              o,
              (t = !o.value) => {
                o.value = t
              }
            ]
          })(),
          z = t(),
          M = V(),
          I = o(() => J(new Date(S.date))),
          B = o(() => O(S.rowHeight)),
          F = o(() => {
            const t = new Date(S.date).getDay()
            return S.firstDayOfWeek ? (t + 7 - S.firstDayOfWeek) % 7 : t
          }),
          j = o(() =>
            E(new Date(S.date).getFullYear(), new Date(S.date).getMonth() + 1)
          ),
          P = o(() => $.value || !S.lazyRender || 0 == S.index),
          W = () => I.value,
          N = (t) => {
            const { type: e, minDate: o, maxDate: a, currentDate: s } = S
            if (X(t, o) < 0 || X(t, a) > 0) return 'disabled'
            if (null === s) return ''
            if (Array.isArray(s)) {
              if ('multiple' === e)
                return ((t) => {
                  const e = (t) => S.currentDate.some((e) => 0 === X(e, t))
                  if (e(t)) {
                    const o = at(t),
                      a = st(t),
                      s = e(o),
                      l = e(a)
                    return s && l
                      ? 'multiple-middle'
                      : s
                        ? 'end'
                        : l
                          ? 'start'
                          : 'multiple-selected'
                  }
                  return ''
                })(t)
              if ('range' === e)
                return ((t) => {
                  const [e, o] = S.currentDate
                  if (!e) return ''
                  const a = X(t, e)
                  if (!o) return 0 === a ? 'start' : ''
                  const s = X(t, o)
                  return S.allowSameDay && 0 === a && 0 === s
                    ? 'start-end'
                    : 0 === a
                      ? 'start'
                      : 0 === s
                        ? 'end'
                        : a > 0 && s < 0
                          ? 'middle'
                          : ''
                })(t)
            } else if ('single' === e) return 0 === X(t, s) ? 'selected' : ''
            return ''
          },
          Y = (t) => {
            if ('range' === S.type) {
              if ('start' === t || 'end' === t) return q(t)
              if ('start-end' === t) return `${q('start')}/${q('end')}`
            }
          },
          Z = o(() => {
            const t = Math.ceil((j.value + F.value) / 7)
            return Array(t).fill({ type: 'placeholder' })
          }),
          L = o(() => {
            const t = [],
              e = new Date(S.date).getFullYear(),
              o = new Date(S.date).getMonth()
            for (let a = 1; a <= j.value; a++) {
              const s = new Date(e, o, a),
                l = N(s)
              let n = { date: s, type: l, text: a, bottomInfo: Y(l) }
              S.formatter && (n = S.formatter(n)), t.push(n)
            }
            return t
          }),
          U = o(() => L.value.filter((t) => 'disabled' === t.type)),
          G = (t, e) => {
            H(_, '.z-calendar-days-rect').then((o) => {
              const a = o,
                s = Z.value.length,
                l =
                  ((Math.ceil((e.getDate() + F.value) / 7) - 1) * a.height) / s
              h('setScroll', a.top + l + t.scrollTop - t.top)
            })
          }
        return (
          b(() => {
            v(() => {
              H(_, '.z-calendar-month-rect').then((t) => {
                z.value = t.height
              })
            })
          }),
          R({
            id: M,
            props: S,
            getTitle: W,
            getHeight: () => z.value,
            setVisible: T,
            scrollToDate: G,
            disabledDays: U
          }),
          i({
            id: M,
            props: S,
            getTitle: W,
            getHeight: () => z.value,
            setVisible: T,
            scrollToDate: G,
            disabledDays: U
          }),
          (t, o) => {
            const i = y
            return (
              a(),
              s(
                i,
                { class: l(['z-calendar-month-rect', n(K)('month')]) },
                {
                  default: r(() => [
                    S.showMonthTitle
                      ? (a(),
                        s(
                          i,
                          { key: 0, class: l(n(K)('month-title')) },
                          {
                            default: r(() => [
                              e.componentSlots &&
                              e.componentSlots['month-title']
                                ? c(
                                    t.$slots,
                                    'month-title',
                                    { key: 0 },
                                    void 0,
                                    !0
                                  )
                                : (a(), d(u, { key: 1 }, [m(f(n(I)), 1)], 64))
                            ]),
                            _: 3
                          },
                          8,
                          ['class']
                        ))
                      : p('', !0),
                    w(
                      i,
                      { class: l(['z-calendar-days-rect', n(K)('days')]) },
                      {
                        default: r(() => [
                          S.showMark && n(P)
                            ? (a(),
                              s(
                                i,
                                { key: 0, class: l(n(K)('month-mark')) },
                                {
                                  default: r(() => [
                                    m(f(new Date(S.date).getMonth() + 1), 1)
                                  ]),
                                  _: 1
                                },
                                8,
                                ['class']
                              ))
                            : p('', !0),
                          (a(!0),
                          d(
                            u,
                            null,
                            k(
                              n(P) ? n(L) : n(Z),
                              (o, l) => (
                                a(),
                                s(
                                  nt,
                                  {
                                    key: l,
                                    item: o,
                                    index: l,
                                    color: S.color,
                                    offset: n(F),
                                    'row-height': n(B),
                                    'component-slots': S.componentSlots,
                                    onClick: (t) => h('click', t),
                                    onClickDisabledDate: (t) =>
                                      h('clickDisabledDate', t)
                                  },
                                  D({ _: 2 }, [
                                    e.componentSlots &&
                                    e.componentSlots['top-info']
                                      ? {
                                          name: 'top-info',
                                          fn: r(() => [
                                            c(
                                              t.$slots,
                                              'top-info',
                                              { item: o },
                                              void 0,
                                              !0
                                            )
                                          ]),
                                          key: '0'
                                        }
                                      : void 0,
                                    e.componentSlots &&
                                    e.componentSlots['bottom-info']
                                      ? {
                                          name: 'bottom-info',
                                          fn: r(() => [
                                            c(
                                              t.$slots,
                                              'bottom-info',
                                              { item: o },
                                              void 0,
                                              !0
                                            )
                                          ]),
                                          key: '1'
                                        }
                                      : void 0
                                  ]),
                                  1032,
                                  [
                                    'item',
                                    'index',
                                    'color',
                                    'offset',
                                    'row-height',
                                    'component-slots',
                                    'onClick',
                                    'onClickDisabledDate'
                                  ]
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        _: 3
                      },
                      8,
                      ['class']
                    )
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
    [['__scopeId', 'data-v-f7bd9a37']]
  ),
  rt = h(
    e({
      name: 'ZCalendarHeader',
      options: { virtualHost: !0 },
      props: {
        date: Number,
        title: String,
        subtitle: String,
        showTitle: Boolean,
        showSubtitle: Boolean,
        firstDayOfWeek: Number,
        componentSlots: Object
      },
      emits: ['clickSubtitle'],
      setup(t, { emit: e }) {
        const i = t,
          [h] = C('calendar-header')
        A(h)
        const b = (t) => e('clickSubtitle', t),
          v = o(() => {
            const { firstDayOfWeek: t } = i,
              e = ['日', '一', '二', '三', '四', '五', '六']
            return [...e.slice(t, 7), ...e.slice(0, t)]
          })
        return (e, o) => {
          const h = y,
            D = S
          return (
            a(),
            s(
              h,
              { class: l(n(K)('header')) },
              {
                default: r(() => [
                  i.showTitle
                    ? (a(),
                      s(
                        h,
                        { key: 0, class: l(n(K)('header-title')) },
                        {
                          default: r(() => [
                            t.componentSlots && t.componentSlots.title
                              ? c(e.$slots, 'title', { key: 0 }, void 0, !0)
                              : i.title
                                ? (a(),
                                  d(u, { key: 1 }, [m(f(i.title), 1)], 64))
                                : (a(), d(u, { key: 2 }, [m(' 日期选择 ')], 64))
                          ]),
                          _: 3
                        },
                        8,
                        ['class']
                      ))
                    : p('', !0),
                  i.showSubtitle
                    ? (a(),
                      s(
                        h,
                        {
                          key: 1,
                          class: l(n(K)('header-subtitle')),
                          onClick: b
                        },
                        {
                          default: r(() => [
                            t.componentSlots && t.componentSlots.subtitle
                              ? c(e.$slots, 'subtitle', { key: 0 }, void 0, !0)
                              : (a(),
                                d(u, { key: 1 }, [m(f(i.subtitle), 1)], 64))
                          ]),
                          _: 3
                        },
                        8,
                        ['class']
                      ))
                    : p('', !0),
                  w(
                    h,
                    { class: l(n(K)('weekdays')) },
                    {
                      default: r(() => [
                        (a(!0),
                        d(
                          u,
                          null,
                          k(
                            n(v),
                            (t, e) => (
                              a(),
                              s(
                                D,
                                { key: e, class: l(n(K)('weekday')) },
                                { default: r(() => [m(f(t), 1)]), _: 2 },
                                1032,
                                ['class']
                              )
                            )
                          ),
                          128
                        ))
                      ]),
                      _: 1
                    },
                    8,
                    ['class']
                  )
                ]),
                _: 3
              },
              8,
              ['class']
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-b591cb6c']]
  ),
  ct = h(
    e({
      name: 'ZCalendar',
      options: { virtualHost: !0 },
      props: {
        show: Boolean,
        type: B('single'),
        title: String,
        color: String,
        round: F,
        readonly: Boolean,
        poppable: F,
        maxRange: j(null),
        position: B('bottom'),
        showMark: F,
        showTitle: F,
        formatter: Function,
        rowHeight: I,
        confirmText: String,
        rangePrompt: String,
        lazyRender: Boolean,
        showConfirm: F,
        defaultDate: [Date, Array],
        allowSameDay: Boolean,
        showSubtitle: F,
        closeOnPopstate: F,
        showRangePrompt: F,
        confirmDisabledText: String,
        closeOnClickOverlay: F,
        safeAreaInsetTop: Boolean,
        safeAreaInsetBottom: F,
        minDate: { type: Date, validator: P, default: lt },
        maxDate: {
          type: Date,
          validator: P,
          default: () => {
            const t = lt()
            return new Date(t.getFullYear(), t.getMonth() + 6, t.getDate())
          }
        },
        firstDayOfWeek: {
          type: I,
          default: 0,
          validator: (t) => t >= 0 && t <= 6
        },
        customStyle: Object
      },
      emits: [
        'select',
        'confirm',
        'unselect',
        'monthShow',
        'overRange',
        'update:show',
        'clickSubtitle',
        'clickDisabledDate'
      ],
      setup(e, { emit: h }) {
        const S = e,
          C = g(),
          z = o(() => {
            let t = {}
            return (
              'top' == S.position || 'bottom' == S.position
                ? (t.height = 'var(--z-calendar-popup-height)')
                : 'left' == S.position || 'right' == S.position
                  ? (t.height = '100%')
                  : (t = {}),
              { ...t }
            )
          }),
          M = o(() => ({
            height: 'var(--z-calendar-confirm-button-height)',
            margin: 'var(--z-calendar-confirm-button-margin)'
          })),
          A = (t, e = S.minDate, o = S.maxDate) =>
            -1 === X(t, e) ? e : 1 === X(t, o) ? o : t,
          I = t(''),
          O = (t = S.defaultDate) => {
            const { type: e, minDate: o, maxDate: a, allowSameDay: s } = S
            if (null === t) return t
            const l = lt()
            if ('range' === e) {
              Array.isArray(t) || (t = [])
              return [
                A(t[0] || l, o, s ? a : at(a)),
                A(t[1] || l, s ? o : st(o))
              ]
            }
            return 'multiple' === e
              ? Array.isArray(t)
                ? t.map((t) => A(t))
                : [A(l)]
              : ((t && !Array.isArray(t)) || (t = l), A(t))
          },
          H = t({ textFn: () => '', date: void 0 }),
          B = t(O()),
          [F, j] = W(),
          V = o(() => (S.firstDayOfWeek ? +S.firstDayOfWeek % 7 : 0)),
          E = o(() => {
            const t = [],
              e = new Date(S.minDate)
            e.setDate(1)
            do {
              t.push(e.getTime()), e.setMonth(e.getMonth() + 1)
            } while (1 !== Q(e, S.maxDate))
            return t
          }),
          G = o(() => {
            if (B.value) {
              if ('range' === S.type) return !B.value[0] || !B.value[1]
              if ('multiple' === S.type) return !B.value.length
            }
            return !B.value
          })
        let q = t()
        const nt = () => {
            v(() => {
              null != q.value && q.value.disconnect()
              const t = T(C, { thresholds: [0, 0.1, 0.9, 1], observeAll: !0 })
              ;(q.value = t),
                q.value.relativeTo('.z-calendar__body'),
                q.value.observe('.z-calendar-month', (t) => {
                  const { boundingClientRect: e } = t,
                    { relativeRect: o } = t,
                    { date: a } = t.dataset
                  Math.floor(e.top) <= Math.floor(o.top) + 2 &&
                    (t.dataset.showed ||
                      ((t.dataset.showed = !0),
                      h('monthShow', { date: a, title: J(a) })),
                    (H.value = { textFn: () => J(a), date: a }))
                })
            })
          },
          ct = (t) => {
            L(() => {
              E.value.some(
                (e, o) => 0 === Q(e, t) && ((I.value = `month${o}`), !0)
              ),
                nt()
            })
          },
          dt = () => {
            if (!S.poppable || S.show)
              if (B.value) {
                const t = 'single' === S.type ? B.value : B.value[0]
                P(t) && ct(t)
              } else L(nt)
          },
          ut = () => {
            ;(S.poppable && !S.show) || dt()
          },
          mt = (t = O()) => {
            ;(B.value = t), dt()
          },
          ft = () => h('confirm', B.value ? B.value : et(B.value)),
          pt = (t, e) => {
            const o = (t) => {
              ;(B.value = t), h('select', et(t))
            }
            if (e && 'range' === S.type) {
              const e = ((t) => {
                const { maxRange: e, rangePrompt: o, showRangePrompt: a } = S
                return !(
                  e &&
                  (function (t) {
                    const e = t[0].getTime()
                    return (t[1].getTime() - e) / 864e5 + 1
                  })(t) > +e &&
                  (a && U(o || `最多选择 ${e} 天`), h('overRange'), 1)
                )
              })(t)
              if (!e) return void o([t[0], ot(t[0], +S.maxRange - 1)])
            }
            o(t), e && !S.showConfirm && ft()
          },
          yt = o(() =>
            F.value.reduce((t, e) => {
              var o, a
              return (
                t.push(
                  ...((
                    null == (o = null == e ? void 0 : e.disabledDays)
                      ? void 0
                      : o.value
                  )
                    ? null == (a = null == e ? void 0 : e.disabledDays)
                      ? void 0
                      : a.value
                    : [])
                ),
                t
              )
            }, [])
          ),
          ht = (t) => {
            if (S.readonly || !t.date) return
            const { date: e } = t,
              { type: o } = S
            if ('range' === o) {
              if (!B.value) return void pt([e])
              const [t, o] = B.value
              if (t && !o) {
                const o = X(e, t)
                if (1 === o) {
                  const o = ((t, e, o) => {
                    var a
                    return null ==
                      (a = t.find(
                        (t) => -1 === X(e, t.date) && -1 === X(t.date, o)
                      ))
                      ? void 0
                      : a.date
                  })(yt.value, t, e)
                  if (o) {
                    const a = at(o)
                    ;-1 === X(t, a) ? pt([t, a]) : pt([e])
                  } else pt([t, e], !0)
                } else -1 === o ? pt([e]) : S.allowSameDay && pt([e, e], !0)
              } else pt([e])
            } else if ('multiple' === o) {
              if (!B.value) return void pt([e])
              const t = B.value,
                o = t.findIndex((t) => 0 === X(t, e))
              if (-1 !== o) {
                const [e] = t.splice(o, 1)
                h('unselect', tt(e))
              } else
                S.maxRange && t.length >= +S.maxRange
                  ? U(S.rangePrompt || `最多选择 ${S.maxRange} 天`)
                  : pt([...t, e])
            } else pt(e, !0)
          },
          bt = (t) => h('update:show', t)
        x(
          () => S.show,
          () => {
            setTimeout(() => {
              ut()
            }, 30)
          }
        ),
          x(
            () => [S.type, S.minDate, S.maxDate],
            () => mt(O(B.value))
          ),
          x(
            () => S.defaultDate,
            (t = null) => {
              ;(B.value = t), dt()
            }
          )
        const vt = () => {
          I.value = ''
        }
        return (
          R({ reset: mt, scrollToDate: ct, getSelectedDate: () => B.value }),
          b(() => {
            ut()
          }),
          (t, o) => {
            const b = $,
              v = N(_('z-button'), Y),
              g = y,
              x = N(_('z-popup'), Z)
            return S.poppable
              ? (a(),
                s(
                  x,
                  {
                    key: 0,
                    show: S.show,
                    'custom-style': n(z),
                    'close-icon-style': { top: '22rpx' },
                    round: S.round,
                    position: S.position,
                    closeable: S.showTitle || S.showSubtitle,
                    'close-on-popstate': S.closeOnPopstate,
                    'safe-area-inset-top': S.safeAreaInsetTop,
                    'close-on-click-overlay': S.closeOnClickOverlay,
                    'onUpdate:show': bt,
                    onClose: vt
                  },
                  {
                    default: r(() => [
                      w(
                        g,
                        { class: l(n(K)()), style: i(e.customStyle) },
                        {
                          default: r(() => [
                            w(
                              rt,
                              {
                                date: H.value.date,
                                title: S.title,
                                subtitle: H.value.textFn(),
                                'show-title': S.showTitle,
                                'show-subtitle': S.showSubtitle,
                                'first-day-of-week': n(V),
                                'component-slots': n(C).slots,
                                onClickSubtitle:
                                  o[0] || (o[0] = (t) => h('clickSubtitle', t))
                              },
                              D({ _: 2 }, [
                                n(C).slots.title
                                  ? {
                                      name: 'title',
                                      fn: r(() => [
                                        c(t.$slots, 'title', {}, void 0, !0)
                                      ]),
                                      key: '0'
                                    }
                                  : void 0,
                                n(C).slots.subtitle
                                  ? {
                                      name: 'subtitle',
                                      fn: r(() => [
                                        c(
                                          t.$slots,
                                          'subtitle',
                                          {
                                            date: H.value.date,
                                            text: H.value.textFn()
                                          },
                                          void 0,
                                          !0
                                        )
                                      ]),
                                      key: '1'
                                    }
                                  : void 0
                              ]),
                              1032,
                              [
                                'date',
                                'title',
                                'subtitle',
                                'show-title',
                                'show-subtitle',
                                'first-day-of-week',
                                'component-slots'
                              ]
                            ),
                            w(
                              b,
                              {
                                class: l(n(K)('body')),
                                'scroll-y': 'true',
                                'scroll-into-view': I.value
                              },
                              {
                                default: r(() => [
                                  (a(!0),
                                  d(
                                    u,
                                    null,
                                    k(
                                      n(E),
                                      (e, l) => (
                                        a(),
                                        s(
                                          it,
                                          {
                                            key: l,
                                            id: `month${l}`,
                                            class: 'z-calendar-month',
                                            ref_for: !0,
                                            ref: n(j)(l),
                                            'data-date': e,
                                            'date-showed': !1,
                                            date: e,
                                            index: l,
                                            'current-date': B.value,
                                            'show-month-title':
                                              0 !== l || !S.showSubtitle,
                                            'first-day-of-week': n(V),
                                            onClick: ht,
                                            type: S.type,
                                            color: S.color,
                                            'min-date': S.minDate,
                                            'max-date': S.maxDate,
                                            'show-mark': S.showMark,
                                            formatter: S.formatter,
                                            'row-height': S.rowHeight,
                                            'lazy-render': S.lazyRender,
                                            'component-slots': n(C).slots,
                                            'show-subtitle': S.showSubtitle,
                                            'allow-same-day': S.allowSameDay,
                                            onClickDisabledDate:
                                              o[1] ||
                                              (o[1] = (t) =>
                                                h('clickDisabledDate', t))
                                          },
                                          D(
                                            {
                                              default: r(() => [
                                                n(C).slots['top-info']
                                                  ? c(
                                                      t.$slots,
                                                      'top-info',
                                                      { key: 0 },
                                                      void 0,
                                                      !0
                                                    )
                                                  : p('', !0),
                                                n(C).slots['bottom-info']
                                                  ? c(
                                                      t.$slots,
                                                      'bottom-info',
                                                      { key: 1 },
                                                      void 0,
                                                      !0
                                                    )
                                                  : p('', !0)
                                              ]),
                                              _: 2
                                            },
                                            [
                                              n(C).slots['month-title']
                                                ? {
                                                    name: 'month-title',
                                                    fn: r(() => [
                                                      c(
                                                        t.$slots,
                                                        'month-title',
                                                        {
                                                          date: e,
                                                          text: n(J)(e)
                                                        },
                                                        void 0,
                                                        !0
                                                      )
                                                    ]),
                                                    key: '0'
                                                  }
                                                : void 0
                                            ]
                                          ),
                                          1032,
                                          [
                                            'id',
                                            'data-date',
                                            'date',
                                            'index',
                                            'current-date',
                                            'show-month-title',
                                            'first-day-of-week',
                                            'type',
                                            'color',
                                            'min-date',
                                            'max-date',
                                            'show-mark',
                                            'formatter',
                                            'row-height',
                                            'lazy-render',
                                            'component-slots',
                                            'show-subtitle',
                                            'allow-same-day'
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  ))
                                ]),
                                _: 3
                              },
                              8,
                              ['class', 'scroll-into-view']
                            ),
                            w(
                              g,
                              {
                                class: l([
                                  n(K)('footer'),
                                  {
                                    'z-safe-area-bottom': S.safeAreaInsetBottom
                                  }
                                ])
                              },
                              {
                                default: r(() => [
                                  n(C).slots.footer
                                    ? c(
                                        t.$slots,
                                        'footer',
                                        { key: 0 },
                                        void 0,
                                        !0
                                      )
                                    : p('', !0),
                                  S.showConfirm
                                    ? (a(),
                                      s(
                                        v,
                                        {
                                          key: 1,
                                          round: '',
                                          block: '',
                                          type: 'primary',
                                          color: S.color,
                                          'custom-style': n(M),
                                          disabled: n(G),
                                          'native-type': 'button',
                                          onClick: ft
                                        },
                                        {
                                          default: r(() => [
                                            n(C).slots['confirm-text']
                                              ? c(
                                                  t.$slots,
                                                  'confirm-text',
                                                  { key: 0, disabled: n(G) },
                                                  void 0,
                                                  !0
                                                )
                                              : (
                                                    n(G)
                                                      ? S.confirmDisabledText
                                                      : S.confirmText
                                                  )
                                                ? (a(),
                                                  d(
                                                    u,
                                                    { key: 1 },
                                                    [
                                                      m(
                                                        f(
                                                          n(G)
                                                            ? S.confirmDisabledText
                                                            : S.confirmText
                                                        ),
                                                        1
                                                      )
                                                    ],
                                                    64
                                                  ))
                                                : (a(),
                                                  d(
                                                    u,
                                                    { key: 2 },
                                                    [m(' 确认 ')],
                                                    64
                                                  ))
                                          ]),
                                          _: 3
                                        },
                                        8,
                                        ['color', 'custom-style', 'disabled']
                                      ))
                                    : p('', !0)
                                ]),
                                _: 3
                              },
                              8,
                              ['class']
                            )
                          ]),
                          _: 3
                        },
                        8,
                        ['class', 'style']
                      )
                    ]),
                    _: 3
                  },
                  8,
                  [
                    'show',
                    'custom-style',
                    'round',
                    'position',
                    'closeable',
                    'close-on-popstate',
                    'safe-area-inset-top',
                    'close-on-click-overlay'
                  ]
                ))
              : (a(),
                s(
                  g,
                  { key: 1, class: l(n(K)()), style: i(e.customStyle) },
                  {
                    default: r(() => [
                      w(
                        rt,
                        {
                          date: H.value.date,
                          title: S.title,
                          subtitle: H.value.textFn(),
                          'show-title': S.showTitle,
                          'show-subtitle': S.showSubtitle,
                          'first-day-of-week': n(V),
                          'component-slots': n(C).slots,
                          onClickSubtitle:
                            o[2] || (o[2] = (t) => h('clickSubtitle', t))
                        },
                        D({ _: 2 }, [
                          n(C).slots.title
                            ? {
                                name: 'title',
                                fn: r(() => [
                                  c(t.$slots, 'title', {}, void 0, !0)
                                ]),
                                key: '0'
                              }
                            : void 0,
                          n(C).slots.subtitle
                            ? {
                                name: 'subtitle',
                                fn: r(() => [
                                  c(
                                    t.$slots,
                                    'subtitle',
                                    {
                                      date: H.value.date,
                                      text: H.value.textFn()
                                    },
                                    void 0,
                                    !0
                                  )
                                ]),
                                key: '1'
                              }
                            : void 0
                        ]),
                        1032,
                        [
                          'date',
                          'title',
                          'subtitle',
                          'show-title',
                          'show-subtitle',
                          'first-day-of-week',
                          'component-slots'
                        ]
                      ),
                      w(
                        b,
                        {
                          class: l(n(K)('body')),
                          'scroll-y': 'true',
                          'scroll-into-view': I.value
                        },
                        {
                          default: r(() => [
                            (a(!0),
                            d(
                              u,
                              null,
                              k(
                                n(E),
                                (e, l) => (
                                  a(),
                                  s(
                                    it,
                                    {
                                      key: l,
                                      id: `month${l}`,
                                      class: 'z-calendar-month',
                                      ref_for: !0,
                                      ref: n(j)(l),
                                      'data-date': e,
                                      'date-showed': !1,
                                      date: e,
                                      index: l,
                                      'current-date': B.value,
                                      'show-month-title':
                                        0 !== l || !S.showSubtitle,
                                      'first-day-of-week': n(V),
                                      onClick: ht,
                                      type: S.type,
                                      color: S.color,
                                      'min-date': S.minDate,
                                      'max-date': S.maxDate,
                                      'show-mark': S.showMark,
                                      formatter: S.formatter,
                                      'row-height': S.rowHeight,
                                      'lazy-render': S.lazyRender,
                                      'component-slots': n(C).slots,
                                      'show-subtitle': S.showSubtitle,
                                      'allow-same-day': S.allowSameDay,
                                      onClickDisabledDate:
                                        o[3] ||
                                        (o[3] = (t) =>
                                          h('clickDisabledDate', t))
                                    },
                                    D(
                                      {
                                        default: r(() => [
                                          n(C).slots['top-info']
                                            ? c(
                                                t.$slots,
                                                'top-info',
                                                { key: 0 },
                                                void 0,
                                                !0
                                              )
                                            : p('', !0),
                                          n(C).slots['bottom-info']
                                            ? c(
                                                t.$slots,
                                                'bottom-info',
                                                { key: 1 },
                                                void 0,
                                                !0
                                              )
                                            : p('', !0)
                                        ]),
                                        _: 2
                                      },
                                      [
                                        n(C).slots['month-title']
                                          ? {
                                              name: 'month-title',
                                              fn: r(() => [
                                                c(
                                                  t.$slots,
                                                  'month-title',
                                                  { date: e, text: n(J)(e) },
                                                  void 0,
                                                  !0
                                                )
                                              ]),
                                              key: '0'
                                            }
                                          : void 0
                                      ]
                                    ),
                                    1032,
                                    [
                                      'id',
                                      'data-date',
                                      'date',
                                      'index',
                                      'current-date',
                                      'show-month-title',
                                      'first-day-of-week',
                                      'type',
                                      'color',
                                      'min-date',
                                      'max-date',
                                      'show-mark',
                                      'formatter',
                                      'row-height',
                                      'lazy-render',
                                      'component-slots',
                                      'show-subtitle',
                                      'allow-same-day'
                                    ]
                                  )
                                )
                              ),
                              128
                            ))
                          ]),
                          _: 3
                        },
                        8,
                        ['class', 'scroll-into-view']
                      ),
                      w(
                        g,
                        {
                          class: l([
                            n(K)('footer'),
                            { 'z-safe-area-bottom': S.safeAreaInsetBottom }
                          ])
                        },
                        {
                          default: r(() => [
                            n(C).slots.footer
                              ? c(t.$slots, 'footer', { key: 0 }, void 0, !0)
                              : p('', !0),
                            S.showConfirm
                              ? (a(),
                                s(
                                  v,
                                  {
                                    key: 1,
                                    round: '',
                                    block: '',
                                    type: 'primary',
                                    color: S.color,
                                    'custom-style': n(M),
                                    disabled: n(G),
                                    'native-type': 'button',
                                    onClick: ft
                                  },
                                  {
                                    default: r(() => [
                                      n(C).slots['confirm-text']
                                        ? c(
                                            t.$slots,
                                            'confirm-text',
                                            { key: 0, disabled: n(G) },
                                            void 0,
                                            !0
                                          )
                                        : (
                                              n(G)
                                                ? S.confirmDisabledText
                                                : S.confirmText
                                            )
                                          ? (a(),
                                            d(
                                              u,
                                              { key: 1 },
                                              [
                                                m(
                                                  f(
                                                    n(G)
                                                      ? S.confirmDisabledText
                                                      : S.confirmText
                                                  ),
                                                  1
                                                )
                                              ],
                                              64
                                            ))
                                          : (a(),
                                            d(u, { key: 2 }, [m(' 确认 ')], 64))
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  ['color', 'custom-style', 'disabled']
                                ))
                              : p('', !0)
                          ]),
                          _: 3
                        },
                        8,
                        ['class']
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['class', 'style']
                ))
          }
        )
      }
    }),
    [['__scopeId', 'data-v-a2bd0449']]
  )
export { ct as _ }
