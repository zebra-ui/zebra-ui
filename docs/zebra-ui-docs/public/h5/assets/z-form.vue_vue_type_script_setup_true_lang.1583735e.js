import {
  d as e,
  o as a,
  c as t,
  w as r,
  x as o,
  n as s,
  E as n,
  i
} from './index-7fd204f3.js'
import { u as l } from './useChildren.fb2421ae.js'
import {
  n as d,
  t as m,
  i as u,
  j as c,
  v as g,
  P as h
} from './DemoPage.0bae30a9.js'
const f = e({
  name: 'ZForm',
  options: { virtualHost: !0 },
  props: {
    colon: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    required: [Boolean, String],
    showError: Boolean,
    labelWidth: d,
    labelAlign: String,
    inputAlign: String,
    scrollToError: Boolean,
    validateFirst: Boolean,
    submitOnEnter: m,
    showErrorMessage: m,
    errorMessageAlign: String,
    validateTrigger: { type: [String, Array], default: 'onBlur' }
  },
  emits: ['submit', 'failed'],
  setup(e, { expose: d, emit: m }) {
    const f = e,
      [p, v] = u('form')
    c(p)
    const { children: V, linkChildren: b } = l(h),
      B = (e) => (e ? V.filter((a) => e.includes(a.name)) : V),
      P = (e) => {
        return 'string' == typeof e
          ? ((e) => {
              const a = V.find((a) => a.name === e)
              return a
                ? new Promise((e, t) => {
                    a.validate().then((a) => {
                      a ? t(a) : e()
                    })
                  })
                : Promise.reject()
            })(e)
          : f.validateFirst
            ? ((a = e),
              new Promise((e, t) => {
                const r = []
                B(a)
                  .reduce(
                    (e, a) =>
                      e.then(() => {
                        if (!r.length)
                          return a.validate().then((e) => {
                            e && r.push(e)
                          })
                      }),
                    Promise.resolve()
                  )
                  .then(() => {
                    r.length ? t(r) : e()
                  })
              }))
            : ((e) =>
                new Promise((a, t) => {
                  const r = B(e)
                  Promise.all(r.map((e) => e.validate())).then((e) => {
                    ;(e = e.filter(Boolean)).length ? t(e) : a()
                  })
                }))(e)
        var a
      },
      S = (e) => {
        'string' == typeof e && (e = [e])
        B(e).forEach((e) => {
          e.resetValidation()
        })
      },
      w = () =>
        V.reduce((e, a) => ((e[a.name] = a.getValidationStatus()), e), {}),
      E = (e, a) => {
        V.some((t) => t.name === e && (t.$el.scrollIntoView(a), !0))
      },
      j = () =>
        V.reduce(
          (e, a) => (void 0 !== a.name && (e[a.name] = a.formValue.value), e),
          {}
        ),
      y = () => {
        const e = j()
        P()
          .then(() => m('submit', e))
          .catch((a) => {
            m('failed', { values: e, errors: a }),
              f.scrollToError && a[0].name && E(a[0].name)
          })
      }
    return (
      b({ props: f }),
      g({
        submit: y,
        validate: P,
        getValues: j,
        scrollToField: E,
        resetValidation: S,
        getValidationStatus: w
      }),
      d({
        submit: y,
        validate: P,
        getValues: j,
        scrollToField: E,
        resetValidation: S,
        getValidationStatus: w
      }),
      (e, l) => {
        const d = i
        return (
          a(),
          t(
            d,
            { class: s(n(v)()) },
            { default: r(() => [o(e.$slots, 'default')]), _: 3 },
            8,
            ['class']
          )
        )
      }
    )
  }
})
export { f as _ }
