import { _ as e } from './z-picker.ce3c705f.js'
import {
  d as t,
  k as o,
  D as n,
  l,
  m as s,
  o as i,
  c as a,
  K as c,
  E as r,
  w as u,
  x as m,
  L as d
} from './index-7fd204f3.js'
import { m as p, l as f, v, r as g } from './DemoPage.0bae30a9.js'
const h = (e = '', t = '000000', o) => ({ text: e, value: t, children: o })
function b({ areaList: e, columnsNum: t, columnsPlaceholder: o }) {
  const { city_list: n = {}, county_list: l = {}, province_list: s = {} } = e,
    i = +t > 1,
    a = +t > 2,
    c = new Map()
  Object.keys(s).forEach((e) => {
    c.set(
      e.slice(0, 2),
      h(
        s[e],
        e,
        (() => {
          if (i) return o.length ? [h(o[0], '000000', a ? [] : void 0)] : []
        })()
      )
    )
  })
  const r = new Map()
  if (i) {
    const e = () => {
      if (a) return o.length ? [h(o[1])] : []
    }
    Object.keys(n).forEach((t) => {
      const o = h(n[t], t, e())
      r.set(t.slice(0, 4), o)
      const l = c.get(t.slice(0, 2))
      l && l.children.push(o)
    })
  }
  a &&
    Object.keys(l).forEach((e) => {
      const t = r.get(e.slice(0, 4))
      t && t.children.push(h(l[e], e))
    })
  const u = Array.from(c.values())
  if (o.length) {
    const e = a ? [h(o[2])] : void 0,
      t = i ? [h(o[1], '000000', e)] : void 0
    u.unshift(h(o[0], '000000', t))
  }
  return u
}
const y = t({
  name: 'ZArea',
  options: { virtualHost: !0 },
  props: {
    loading: Boolean,
    readonly: Boolean,
    optionHeight: p(44),
    swipeDuration: p(1e3),
    visibleOptionNum: p(6),
    title: String,
    cancelButtonText: String,
    confirmButtonText: String,
    modelValue: String,
    columnsNum: p(3),
    columnsPlaceholder: f(),
    areaList: { type: Object, default: () => ({}) }
  },
  emits: ['change', 'confirm', 'cancel', 'update:modelValue'],
  setup(t, { expose: p, emit: f }) {
    const h = t,
      y = d(),
      k = o([]),
      x = o(),
      O = n(() => b(h)),
      S = (...e) => f('change', ...e),
      V = (...e) => f('cancel', ...e),
      $ = (...e) => f('confirm', ...e)
    return (
      l(
        k,
        (e) => {
          const t = e.length ? e[e.length - 1] : ''
          t && t !== h.modelValue && f('update:modelValue', t)
        },
        { deep: !0 }
      ),
      l(
        () => h.modelValue,
        (e) => {
          if (e) {
            e !== (k.value.length ? k.value[k.value.length - 1] : '') &&
              (k.value = [
                `${e.slice(0, 2)}0000`,
                `${e.slice(0, 4)}00`,
                e
              ].slice(0, +h.columnsNum))
          } else k.value = []
        },
        { immediate: !0 }
      ),
      v({
        confirm: () => {
          var e
          return null == (e = x.value) ? void 0 : e.confirm()
        },
        getSelectedOptions: () => {
          var e
          return (null == (e = x.value) ? void 0 : e.getSelectedOptions()) || []
        }
      }),
      p({
        confirm: () => {
          var e
          return null == (e = x.value) ? void 0 : e.confirm()
        },
        getSelectedOptions: () => {
          var e
          return (null == (e = x.value) ? void 0 : e.getSelectedOptions()) || []
        }
      }),
      (t, o) => {
        const n = g(s('z-picker'), e)
        return (
          i(),
          a(
            n,
            {
              ref_key: 'picker',
              ref: x,
              modelValue: k.value,
              'onUpdate:modelValue': o[0] || (o[0] = (e) => (k.value = e)),
              columns: r(O),
              onChange: S,
              onCancel: V,
              onConfirm: $,
              title: h.title,
              loading: h.loading,
              readonly: h.readonly,
              'option-height': h.optionHeight,
              'swipe-duration': h.swipeDuration,
              'visible-option-num': h.visibleOptionNum,
              'cancel-button-text': h.cancelButtonText,
              'confirm-button-text': h.confirmButtonText,
              'component-slots': r(y).slots
            },
            c({ _: 2 }, [
              r(y).slots.title
                ? {
                    name: 'title',
                    fn: u(() => [m(t.$slots, 'title')]),
                    key: '0'
                  }
                : void 0,
              r(y).slots.cancel
                ? {
                    name: 'cancel',
                    fn: u(() => [m(t.$slots, 'cancel')]),
                    key: '1'
                  }
                : void 0,
              r(y).slots.confirm
                ? {
                    name: 'confirm',
                    fn: u(() => [m(t.$slots, 'confirm')]),
                    key: '2'
                  }
                : void 0,
              r(y).slots.toolbar
                ? {
                    name: 'toolbar',
                    fn: u(() => [m(t.$slots, 'toolbar')]),
                    key: '3'
                  }
                : void 0,
              r(y).slots['columns-top']
                ? {
                    name: 'columns-top',
                    fn: u(() => [m(t.$slots, 'columns-top')]),
                    key: '4'
                  }
                : void 0,
              r(y).slots['columns-bottom']
                ? {
                    name: 'columns-bottom',
                    fn: u(() => [m(t.$slots, 'columns-bottom')]),
                    key: '5'
                  }
                : void 0
            ]),
            1032,
            [
              'modelValue',
              'columns',
              'title',
              'loading',
              'readonly',
              'option-height',
              'swipe-duration',
              'visible-option-num',
              'cancel-button-text',
              'confirm-button-text',
              'component-slots'
            ]
          )
        )
      }
    )
  }
})
export { y as _ }
