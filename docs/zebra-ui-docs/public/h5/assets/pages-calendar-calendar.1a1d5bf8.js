import { _ as e } from './z-cell.365e08ec.js'
import {
  d as t,
  a6 as a,
  m as o,
  G as l,
  o as i,
  c as n,
  w as s,
  a as r,
  i as c
} from './index-7fd204f3.js'
import { r as m, a as u } from './DemoPage.0bae30a9.js'
import { _ as d } from './z-calendar.796cc0f9.js'
import { _ as f } from './z-toast.a77377ba.js'
import './z-toast.44a3344c.js'
import './use-id.c1b053ed.js'
import './utils.95c08333.js'
const k = t({
  __name: 'calendar',
  setup(t) {
    const k = a({
        date: {
          maxRange: [],
          selectSingle: null,
          selectRange: [],
          selectMultiple: [],
          quickSelect1: null,
          quickSelect2: [],
          customColor: [],
          customConfirm: [],
          customRange: null,
          customDayText: [],
          customPosition: null
        },
        type: 'single',
        round: !0,
        color: void 0,
        minDate: void 0,
        maxDate: void 0,
        maxRange: void 0,
        position: void 0,
        formatter: void 0,
        showConfirm: !1,
        showCalendar: !1,
        confirmText: void 0,
        confirmDisabledText: void 0,
        firstDayOfWeek: 0
      }),
      g = (e) => {
        if (!e.date) return e
        const t = e.date.getMonth() + 1,
          a = e.date.getDate()
        return (
          5 === t &&
            (1 === a
              ? (e.topInfo = '劳动节')
              : 4 === a
                ? (e.topInfo = '青年节')
                : 11 === a && (e.text = '今天')),
          'start' === e.type
            ? (e.bottomInfo = '入店')
            : 'end' === e.type && (e.bottomInfo = '离店'),
          e
        )
      },
      v = (e, t) => {
        switch (
          ((k.round = !0),
          (k.color = void 0),
          (k.minDate = void 0),
          (k.maxDate = void 0),
          (k.maxRange = void 0),
          (k.position = void 0),
          (k.formatter = void 0),
          (k.showConfirm = !0),
          (k.confirmText = void 0),
          (k.confirmDisabledText = void 0),
          (k.firstDayOfWeek = 0),
          (k.id = t),
          (k.type = e),
          (k.showCalendar = !0),
          t)
        ) {
          case 'quickSelect1':
          case 'quickSelect2':
            k.showConfirm = !1
            break
          case 'customColor':
            k.color = '#ee0a24'
            break
          case 'customConfirm':
            ;(k.confirmText = '完成'),
              (k.confirmDisabledText = '请选择结束时间')
            break
          case 'customRange':
            ;(k.minDate = new Date(2010, 0, 1)),
              (k.maxDate = new Date(2010, 0, 31))
            break
          case 'customDayText':
            ;(k.minDate = new Date(2010, 4, 1)),
              (k.maxDate = new Date(2010, 4, 31)),
              (k.formatter = g)
            break
          case 'customPosition':
            ;(k.round = !1), (k.position = 'right')
            break
          case 'maxRange':
            k.maxRange = 3
            break
          case 'firstDayOfWeek':
            k.firstDayOfWeek = 1
        }
      },
      x = (e) => {
        if (e) return `${e.getMonth() + 1}/${e.getDate()}`
      },
      p = (e) => {
        if (e) return `${e.getFullYear()}/${x(e)}`
      },
      D = (e) => {
        if (e.length) return `选择了 ${e.length} 个日期`
      },
      C = (e) => {
        if (e.length) {
          const [t, a] = e
          return `${x(t)} - ${x(a)}`
        }
      },
      h = (e) => {
        ;(k.showCalendar = !1), (k.date[k.id] = e)
      }
    return (t, a) => {
      const g = m(o('z-cell'), e),
        x = l('demo-block'),
        w = m(o('z-calendar'), d),
        y = c,
        b = m(o('z-toast'), f),
        R = m(o('DemoPage'), u)
      return (
        i(),
        n(
          R,
          { title: 'Calendar' },
          {
            default: s(() => [
              r(
                y,
                { class: 'demo-calendar' },
                {
                  default: s(() => [
                    r(
                      x,
                      { title: '基础用法' },
                      {
                        default: s(() => [
                          r(
                            g,
                            {
                              'is-link': '',
                              title: '选择单个日期',
                              value: p(k.date.selectSingle),
                              onClick:
                                a[0] ||
                                (a[0] = (e) => v('single', 'selectSingle'))
                            },
                            null,
                            8,
                            ['value']
                          ),
                          r(
                            g,
                            {
                              'is-link': '',
                              title: '选择多个日期',
                              value: D(k.date.selectMultiple),
                              onClick:
                                a[1] ||
                                (a[1] = (e) => v('multiple', 'selectMultiple'))
                            },
                            null,
                            8,
                            ['value']
                          ),
                          r(
                            g,
                            {
                              'is-link': '',
                              title: '选择日期区间',
                              value: C(k.date.selectRange),
                              onClick:
                                a[2] ||
                                (a[2] = (e) => v('range', 'selectRange'))
                            },
                            null,
                            8,
                            ['value']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      x,
                      { title: '快捷选择' },
                      {
                        default: s(() => [
                          r(
                            g,
                            {
                              'is-link': '',
                              title: '选择单个日期',
                              value: p(k.date.quickSelect1),
                              onClick:
                                a[3] ||
                                (a[3] = (e) => v('single', 'quickSelect1'))
                            },
                            null,
                            8,
                            ['value']
                          ),
                          r(
                            g,
                            {
                              'is-link': '',
                              title: '选择日期区间',
                              value: C(k.date.quickSelect2),
                              onClick:
                                a[4] ||
                                (a[4] = (e) => v('range', 'quickSelect2'))
                            },
                            null,
                            8,
                            ['value']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      x,
                      { title: '自定义日历' },
                      {
                        default: s(() => [
                          r(
                            g,
                            {
                              'is-link': '',
                              title: '自定义颜色',
                              value: C(k.date.customColor),
                              onClick:
                                a[5] ||
                                (a[5] = (e) => v('range', 'customColor'))
                            },
                            null,
                            8,
                            ['value']
                          ),
                          r(
                            g,
                            {
                              'is-link': '',
                              title: '自定义日期范围',
                              value: p(k.date.customRange),
                              onClick:
                                a[6] ||
                                (a[6] = (e) => v('single', 'customRange'))
                            },
                            null,
                            8,
                            ['value']
                          ),
                          r(
                            g,
                            {
                              'is-link': '',
                              title: '自定义按钮文字',
                              value: C(k.date.customConfirm),
                              onClick:
                                a[7] ||
                                (a[7] = (e) => v('range', 'customConfirm'))
                            },
                            null,
                            8,
                            ['value']
                          ),
                          r(
                            g,
                            {
                              'is-link': '',
                              title: '自定义日期文案',
                              value: C(k.date.customDayText),
                              onClick:
                                a[8] ||
                                (a[8] = (e) => v('range', 'customDayText'))
                            },
                            null,
                            8,
                            ['value']
                          ),
                          r(
                            g,
                            {
                              'is-link': '',
                              title: '自定义弹出位置',
                              value: p(k.date.customPosition),
                              onClick:
                                a[9] ||
                                (a[9] = (e) => v('single', 'customPosition'))
                            },
                            null,
                            8,
                            ['value']
                          ),
                          r(
                            g,
                            {
                              'is-link': '',
                              title: '日期区间最大范围',
                              value: C(k.date.maxRange),
                              onClick:
                                a[10] || (a[10] = (e) => v('range', 'maxRange'))
                            },
                            null,
                            8,
                            ['value']
                          ),
                          r(g, {
                            'is-link': '',
                            title: '自定义周起始日',
                            onClick:
                              a[11] ||
                              (a[11] = (e) => v('single', 'firstDayOfWeek'))
                          })
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      x,
                      { title: '平铺展示' },
                      {
                        default: s(() => [
                          r(w, {
                            title: '日历',
                            poppable: !1,
                            'show-confirm': !1,
                            'custom-style': { height: '500px' }
                          })
                        ]),
                        _: 1
                      }
                    ),
                    r(
                      w,
                      {
                        show: k.showCalendar,
                        'onUpdate:show':
                          a[12] || (a[12] = (e) => (k.showCalendar = e)),
                        type: k.type,
                        color: k.color,
                        round: k.round,
                        position: k.position,
                        'min-date': k.minDate,
                        'max-date': k.maxDate,
                        'max-range': k.maxRange,
                        formatter: k.formatter,
                        'show-confirm': k.showConfirm,
                        'confirm-text': k.confirmText,
                        'first-day-of-week': k.firstDayOfWeek,
                        'confirm-disabled-text': k.confirmDisabledText,
                        onConfirm: h
                      },
                      null,
                      8,
                      [
                        'show',
                        'type',
                        'color',
                        'round',
                        'position',
                        'min-date',
                        'max-date',
                        'max-range',
                        'formatter',
                        'show-confirm',
                        'confirm-text',
                        'first-day-of-week',
                        'confirm-disabled-text'
                      ]
                    )
                  ]),
                  _: 1
                }
              ),
              r(b, { ref: 'zToast' }, null, 512)
            ]),
            _: 1
          }
        )
      )
    }
  }
})
export { k as default }
