import { _ as e } from './z-date-picker.vue_vue_type_script_setup_true_lang.a0ecb8aa.js'
import {
  d as a,
  k as t,
  m as l,
  G as m,
  o as d,
  c as u,
  w as o,
  a as i,
  E as s,
  i as n
} from './index-7fd204f3.js'
import { r, a as p } from './DemoPage.0bae30a9.js'
import './z-picker.ce3c705f.js'
import './useParent.5b9c05b5.js'
import './use-touch.1ac9fd53.js'
import './useChildren.fb2421ae.js'
import './utils.95c08333.js'
const c = a({
  __name: 'datePicker',
  setup(a) {
    const c = t(['2021', '01', '01']),
      _ = t(['2021', '01']),
      f = new Date(2020, 0, 1),
      v = new Date(2025, 5, 1),
      x = ['year', 'month'],
      V = t(['2021', '01']),
      j = (e, a) => (
        'year' === e && (a.text += '年'), 'month' === e && (a.text += '月'), a
      ),
      k = t(['2021', '01']),
      y = (e, a) =>
        'month' === e ? a.filter((e) => Number(e.value) % 6 == 0) : a
    return (a, t) => {
      const h = r(l('z-date-picker'), e),
        D = m('demo-block'),
        P = n,
        U = r(l('DemoPage'), p)
      return (
        d(),
        u(
          U,
          { title: 'DatePicker' },
          {
            default: o(() => [
              i(
                P,
                { class: 'demo-date-picker' },
                {
                  default: o(() => [
                    i(
                      D,
                      { title: '基础用法' },
                      {
                        default: o(() => [
                          i(
                            h,
                            {
                              modelValue: c.value,
                              'onUpdate:modelValue':
                                t[0] || (t[0] = (e) => (c.value = e)),
                              title: '选择日期',
                              'min-date': s(f),
                              'max-date': s(v)
                            },
                            null,
                            8,
                            ['modelValue', 'min-date', 'max-date']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    i(
                      D,
                      { title: '选项类型' },
                      {
                        default: o(() => [
                          i(
                            h,
                            {
                              modelValue: _.value,
                              'onUpdate:modelValue':
                                t[1] || (t[1] = (e) => (_.value = e)),
                              title: '选择年月',
                              'min-date': s(f),
                              'max-date': s(v),
                              'columns-type': x
                            },
                            null,
                            8,
                            ['modelValue', 'min-date', 'max-date']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    i(
                      D,
                      { title: '格式化选项' },
                      {
                        default: o(() => [
                          i(
                            h,
                            {
                              modelValue: V.value,
                              'onUpdate:modelValue':
                                t[2] || (t[2] = (e) => (V.value = e)),
                              title: '选择年月',
                              'min-date': s(f),
                              'max-date': s(v),
                              formatter: j,
                              'columns-type': x
                            },
                            null,
                            8,
                            ['modelValue', 'min-date', 'max-date']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    i(
                      D,
                      { title: '过滤选项' },
                      {
                        default: o(() => [
                          i(
                            h,
                            {
                              modelValue: k.value,
                              'onUpdate:modelValue':
                                t[3] || (t[3] = (e) => (k.value = e)),
                              title: '选择年月',
                              filter: y,
                              'min-date': s(f),
                              'max-date': s(v),
                              'columns-type': x
                            },
                            null,
                            8,
                            ['modelValue', 'min-date', 'max-date']
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
export { c as default }
