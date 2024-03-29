import { _ as e } from './z-time-picker.vue_vue_type_script_setup_true_lang.72a06aa2.js'
import {
  d as l,
  k as t,
  m as u,
  G as a,
  o as m,
  c as i,
  w as o,
  a as r,
  i as d
} from './index-7fd204f3.js'
import { r as n, a as s } from './DemoPage.0bae30a9.js'
import './z-picker.ce3c705f.js'
import './useParent.5b9c05b5.js'
import './use-touch.1ac9fd53.js'
import './useChildren.fb2421ae.js'
import './utils.95c08333.js'
const f = l({
  __name: 'timePicker',
  setup(l) {
    const f = t(['12', '00']),
      p = t(['12', '00', '05']),
      v = ['hour', 'minute', 'second'],
      c = t(['12', '35']),
      V = t(['12', '00', '00']),
      _ = t(['12', '00']),
      b = (e, l) => (
        'hour' === e && (l.text += '时'), 'minute' === e && (l.text += '分'), l
      ),
      h = t(['12', '00']),
      j = (e, l) =>
        'minute' === e ? l.filter((e) => Number(e.value) % 10 == 0) : l,
      k = (e, l, t) => {
        const u = +t[0]
        if ('hour' === e)
          return l.filter((e) => Number(e.value) >= 8 && Number(e.value) <= 18)
        if ('minute' === e) {
          if (((l = l.filter((e) => Number(e.value) % 10 == 0)), 8 === u))
            return l.filter((e) => Number(e.value) >= 40)
          if (18 === u) return l.filter((e) => Number(e.value) <= 20)
        }
        return l
      }
    return (l, t) => {
      const x = n(u('z-time-picker'), e),
        N = a('demo-block'),
        U = d,
        P = n(u('DemoPage'), s)
      return (
        m(),
        i(
          P,
          { title: 'TimePicker' },
          {
            default: o(() => [
              r(
                U,
                { class: 'demo-time-picker' },
                {
                  default: o(() => [
                    r(
                      N,
                      { title: '基础用法' },
                      {
                        default: o(() => [
                          r(
                            x,
                            {
                              modelValue: f.value,
                              'onUpdate:modelValue':
                                t[0] || (t[0] = (e) => (f.value = e)),
                              title: '选择时间'
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      N,
                      { title: '选项类型' },
                      {
                        default: o(() => [
                          r(
                            x,
                            {
                              modelValue: p.value,
                              'onUpdate:modelValue':
                                t[1] || (t[1] = (e) => (p.value = e)),
                              title: '选择时间',
                              'columns-type': v
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      N,
                      { title: '时间范围' },
                      {
                        default: o(() => [
                          r(
                            x,
                            {
                              modelValue: c.value,
                              'onUpdate:modelValue':
                                t[2] || (t[2] = (e) => (c.value = e)),
                              title: '选择时间',
                              'min-hour': 10,
                              'max-hour': 20,
                              'min-minute': 30,
                              'max-minute': 40
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      N,
                      { title: '整体时间范围' },
                      {
                        default: o(() => [
                          r(
                            x,
                            {
                              modelValue: V.value,
                              'onUpdate:modelValue':
                                t[3] || (t[3] = (e) => (V.value = e)),
                              title: '选择时间',
                              'columns-type': ['hour', 'minute', 'second'],
                              'min-time': '09:40:10',
                              'max-time': '20:20:50'
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      N,
                      { title: '格式化选项' },
                      {
                        default: o(() => [
                          r(
                            x,
                            {
                              modelValue: _.value,
                              'onUpdate:modelValue':
                                t[4] || (t[4] = (e) => (_.value = e)),
                              title: '选择时间',
                              formatter: b
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      N,
                      { title: '过滤选项' },
                      {
                        default: o(() => [
                          r(
                            x,
                            {
                              modelValue: h.value,
                              'onUpdate:modelValue':
                                t[5] || (t[5] = (e) => (h.value = e)),
                              title: '选择时间',
                              filter: j
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      N,
                      { title: '高级用法' },
                      {
                        default: o(() => [
                          r(x, { title: '选择时间', filter: k })
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
export { f as default }
