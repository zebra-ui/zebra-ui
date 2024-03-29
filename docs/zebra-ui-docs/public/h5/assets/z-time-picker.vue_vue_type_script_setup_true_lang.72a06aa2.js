import { _ as o } from './z-picker.ce3c705f.js'
import {
  d as t,
  k as e,
  D as n,
  l as s,
  o as i,
  c as a,
  K as m,
  E as l,
  w as u,
  m as r,
  x as c,
  L as d
} from './index-7fd204f3.js'
import {
  k as p,
  m as f,
  i as v,
  j as x,
  r as h,
  p as y
} from './DemoPage.0bae30a9.js'
import { s as b, g as T, f as g } from './utils.95c08333.js'
const k = t({
  name: 'ZTimePicker',
  options: { virtualHost: !0 },
  props: p({}, b, {
    minHour: f(0),
    maxHour: f(23),
    minMinute: f(0),
    maxMinute: f(59),
    minSecond: f(0),
    maxSecond: f(59),
    minTime: {
      type: String,
      validator: (o) => /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(o)
    },
    maxTime: {
      type: String,
      validator: (o) => /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(o)
    },
    columnsType: { type: Array, default: () => ['hour', 'minute'] },
    filter: Function
  }),
  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],
  setup(t, { emit: p }) {
    const f = t,
      [b] = v('time-picker')
    x(b)
    const k = ['hour', 'minute', 'second'],
      $ = d(),
      w = e(f.modelValue),
      V = (o) => {
        const t = o.split(':')
        return k.map((o, e) => (f.columnsType.includes(o) ? t[e] : '00'))
      },
      H = n(() => {
        let {
          minHour: o,
          maxHour: t,
          minMinute: e,
          maxMinute: n,
          minSecond: s,
          maxSecond: i
        } = f
        if (f.minTime || f.maxTime) {
          const a = { hour: 0, minute: 0, second: 0 }
          f.columnsType.forEach((o, t) => {
            a[o] = w.value[t] ? w.value[t] : 0
          })
          const { hour: m, minute: l } = a
          if (f.minTime) {
            const [t, n, i] = V(f.minTime)
            ;(o = t),
              (e = +m <= +o ? n : '00'),
              (s = +m <= +o && +l <= +e ? i : '00')
          }
          if (f.maxTime) {
            const [o, e, s] = V(f.maxTime)
            ;(t = o),
              (n = +m >= +t ? e : '59'),
              (i = +m >= +t && +l >= +n ? s : '59')
          }
        }
        return f.columnsType.map((a) => {
          const { filter: m, formatter: l } = f
          switch (a) {
            case 'hour':
              return T(+o, +t, a, l, m, w.value)
            case 'minute':
              return T(+e, +n, a, l, m, w.value)
            case 'second':
              return T(+s, +i, a, l, m, w.value)
            default:
              return []
          }
        })
      })
    s(w, (o) => {
      y(o, f.modelValue) || p('update:modelValue', o)
    }),
      s(
        () => f.modelValue,
        (o) => {
          ;(o = g(o, H.value)), y(o, w.value) || (w.value = o)
        },
        { immediate: !0 }
      )
    const S = (...o) => p('change', ...o),
      j = (...o) => p('cancel', ...o),
      M = (...o) => p('confirm', ...o)
    return (t, e) => {
      const n = h(r('z-picker'), o)
      return (
        i(),
        a(
          n,
          {
            modelValue: w.value,
            'onUpdate:modelValue': e[0] || (e[0] = (o) => (w.value = o)),
            columns: l(H),
            loading: t.loading,
            readonly: t.readonly,
            'option-height': t.optionHeight,
            'show-toolbar': t.showToolbar,
            'swipe-duration': t.swipeDuration,
            'visible-option-num': t.visibleOptionNum,
            title: t.title,
            'cancel-button-text': t.cancelButtonText,
            'component-slots': l($).slots,
            'confirm-button-text': t.confirmButtonText,
            onChange: S,
            onCancel: j,
            onConfirm: M
          },
          m({ _: 2 }, [
            l($).slots.toolbar
              ? {
                  name: 'toolbar',
                  fn: u(() => [c(t.$slots, 'toolbar')]),
                  key: '0'
                }
              : void 0,
            l($).slots.title
              ? { name: 'title', fn: u(() => [c(t.$slots, 'title')]), key: '1' }
              : void 0,
            l($).slots.confirm
              ? {
                  name: 'confirm',
                  fn: u(() => [c(t.$slots, 'confirm')]),
                  key: '2'
                }
              : void 0,
            l($).slots.cancel
              ? {
                  name: 'cancel',
                  fn: u(() => [c(t.$slots, 'cancel')]),
                  key: '3'
                }
              : void 0,
            l($).slots.option
              ? {
                  name: 'option',
                  fn: u(() => [c(t.$slots, 'option')]),
                  key: '4'
                }
              : void 0,
            l($).slots['columns-top']
              ? {
                  name: 'columns-top',
                  fn: u(() => [c(t.$slots, 'columns-top')]),
                  key: '5'
                }
              : void 0,
            l($).slots['columns-bottom']
              ? {
                  name: 'columns-bottom',
                  fn: u(() => [c(t.$slots, 'columns-bottom')]),
                  key: '6'
                }
              : void 0
          ]),
          1032,
          [
            'modelValue',
            'columns',
            'loading',
            'readonly',
            'option-height',
            'show-toolbar',
            'swipe-duration',
            'visible-option-num',
            'title',
            'cancel-button-text',
            'component-slots',
            'confirm-button-text'
          ]
        )
      )
    }
  }
})
export { k as _ }
