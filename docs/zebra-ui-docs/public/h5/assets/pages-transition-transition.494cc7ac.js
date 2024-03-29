import { _ as e } from './z-cell.365e08ec.js'
import {
  d as l,
  k as a,
  m as t,
  G as i,
  o as s,
  c as o,
  w as n,
  a as d,
  i as m,
  _ as c
} from './index-7fd204f3.js'
import { r, f as u, a as f } from './DemoPage.0bae30a9.js'
import { _ as k } from './z-cell-group.8b81d491.js'
const _ = c(
  l({
    __name: 'transition',
    setup(l) {
      const c = a(!1),
        _ = a(''),
        p = (e) => {
          ;(c.value = !0),
            (_.value = e),
            setTimeout(() => {
              c.value = !1
            }, 500)
        }
      return (l, a) => {
        const v = r(t('z-cell'), e),
          g = r(t('z-cell-group'), k),
          w = i('demo-block'),
          h = m,
          z = r(t('z-transition'), u),
          C = r(t('DemoPage'), f)
        return (
          s(),
          o(
            C,
            { title: 'Transition' },
            {
              default: n(() => [
                d(
                  h,
                  { class: 'demo-transition' },
                  {
                    default: n(() => [
                      d(
                        w,
                        { title: '基础用法' },
                        {
                          default: n(() => [
                            d(g, null, {
                              default: n(() => [
                                d(v, {
                                  'is-link': '',
                                  title: 'Fade',
                                  onClick: a[0] || (a[0] = (e) => p('fade'))
                                }),
                                d(v, {
                                  'is-link': '',
                                  title: 'Slide Up',
                                  onClick: a[1] || (a[1] = (e) => p('slide-up'))
                                }),
                                d(v, {
                                  'is-link': '',
                                  title: 'Slide Down',
                                  onClick:
                                    a[2] || (a[2] = (e) => p('slide-down'))
                                }),
                                d(v, {
                                  'is-link': '',
                                  title: 'Slide Left',
                                  onClick:
                                    a[3] || (a[3] = (e) => p('slide-left'))
                                }),
                                d(v, {
                                  'is-link': '',
                                  title: 'Slide Right',
                                  onClick:
                                    a[4] || (a[4] = (e) => p('slide-right'))
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }
                      ),
                      d(
                        z,
                        {
                          show: c.value,
                          'onUpdate:show':
                            a[5] || (a[5] = (e) => (c.value = e)),
                          name: _.value
                        },
                        {
                          default: n(() => [
                            d(
                              h,
                              { class: 'demo-animate-content' },
                              {
                                default: n(() => [
                                  d(h, { class: 'demo-animate-block' })
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['show', 'name']
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
  }),
  [['__scopeId', 'data-v-ce63bd57']]
)
export { _ as default }
