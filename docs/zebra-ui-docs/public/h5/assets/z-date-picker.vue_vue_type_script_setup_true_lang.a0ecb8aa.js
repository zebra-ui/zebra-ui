import { _ as t } from './z-picker.ce3c705f.js'
import {
  d as e,
  k as o,
  D as a,
  l as n,
  o as l,
  c as s,
  K as r,
  E as i,
  w as m,
  m as u,
  x as c,
  L as d
} from './index-7fd204f3.js'
import {
  k as p,
  U as f,
  i as y,
  j as g,
  r as D,
  p as v
} from './DemoPage.0bae30a9.js'
import { s as h, f as b, g as x, a as k } from './utils.95c08333.js'
const w = e({
  name: 'ZDatePicker',
  options: { virtualHost: !0 },
  props: p({}, h, {
    columnsType: { type: Array, default: () => ['year', 'month', 'day'] },
    minDate: {
      type: Date,
      default: () => new Date(new Date().getFullYear() - 10, 0, 1),
      validator: f
    },
    maxDate: {
      type: Date,
      default: () => new Date(new Date().getFullYear() + 10, 11, 31),
      validator: f
    }
  }),
  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],
  setup(e, { emit: p }) {
    const f = e,
      [h] = y('date-picker')
    g(h)
    const w = d(),
      V = o(f.modelValue),
      F = o(!1),
      Y = (t) => t === f.minDate.getFullYear(),
      $ = (t) => t === f.maxDate.getFullYear(),
      T = (t) => {
        const { minDate: e, columnsType: o } = f,
          a = o.indexOf(t),
          n = F.value ? f.modelValue[a] : V.value[a]
        if (n) return +n
        switch (t) {
          case 'year':
            return e.getFullYear()
          case 'month':
            return e.getMonth() + 1
          case 'day':
            return e.getDate()
        }
      },
      j = () => {
        const t = T('year'),
          e = T('month'),
          o =
            Y(t) && ((t) => t === f.minDate.getMonth() + 1)(e)
              ? f.minDate.getDate()
              : 1,
          a =
            $(t) && ((t) => t === f.maxDate.getMonth() + 1)(e)
              ? f.maxDate.getDate()
              : k(t, e)
        return x(o, a, 'day', f.formatter, f.filter)
      },
      M = a(() =>
        f.columnsType.map((t) => {
          switch (t) {
            case 'year':
              return (() => {
                const t = f.minDate.getFullYear(),
                  e = f.maxDate.getFullYear()
                return x(t, e, 'year', f.formatter, f.filter)
              })()
            case 'month':
              return (() => {
                const t = T('year'),
                  e = Y(t) ? f.minDate.getMonth() + 1 : 1,
                  o = $(t) ? f.maxDate.getMonth() + 1 : 12
                return x(e, o, 'month', f.formatter, f.filter)
              })()
            case 'day':
              return j()
            default:
              return []
          }
        })
      )
    n(V, (t) => {
      v(t, f.modelValue) || p('update:modelValue', t)
    }),
      n(
        () => f.modelValue,
        (t, e) => {
          ;(F.value = v(e, V.value)),
            (t = b(t, M.value)),
            v(t, V.value) || (V.value = t),
            (F.value = !1)
        },
        { immediate: !0 }
      )
    const C = (...t) => p('change', ...t),
      _ = (...t) => p('cancel', ...t),
      z = (...t) => p('confirm', ...t)
    return (e, o) => {
      const a = D(u('z-picker'), t)
      return (
        l(),
        s(
          a,
          {
            modelValue: V.value,
            'onUpdate:modelValue': o[0] || (o[0] = (t) => (V.value = t)),
            columns: i(M),
            loading: e.loading,
            readonly: e.readonly,
            'option-height': e.optionHeight,
            'show-toolbar': e.showToolbar,
            'swipe-duration': e.swipeDuration,
            'visible-option-num': e.visibleOptionNum,
            title: e.title,
            'cancel-button-text': e.cancelButtonText,
            'component-slots': i(w).slots,
            'confirm-button-text': e.confirmButtonText,
            onChange: C,
            onCancel: _,
            onConfirm: z
          },
          r({ _: 2 }, [
            i(w).slots.toolbar
              ? {
                  name: 'toolbar',
                  fn: m(() => [c(e.$slots, 'toolbar')]),
                  key: '0'
                }
              : void 0,
            i(w).slots.title
              ? { name: 'title', fn: m(() => [c(e.$slots, 'title')]), key: '1' }
              : void 0,
            i(w).slots.confirm
              ? {
                  name: 'confirm',
                  fn: m(() => [c(e.$slots, 'confirm')]),
                  key: '2'
                }
              : void 0,
            i(w).slots.cancel
              ? {
                  name: 'cancel',
                  fn: m(() => [c(e.$slots, 'cancel')]),
                  key: '3'
                }
              : void 0,
            i(w).slots.option
              ? {
                  name: 'option',
                  fn: m(() => [c(e.$slots, 'option')]),
                  key: '4'
                }
              : void 0,
            i(w).slots['columns-top']
              ? {
                  name: 'columns-top',
                  fn: m(() => [c(e.$slots, 'columns-top')]),
                  key: '5'
                }
              : void 0,
            i(w).slots['columns-bottom']
              ? {
                  name: 'columns-bottom',
                  fn: m(() => [c(e.$slots, 'columns-bottom')]),
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
export { w as _ }
