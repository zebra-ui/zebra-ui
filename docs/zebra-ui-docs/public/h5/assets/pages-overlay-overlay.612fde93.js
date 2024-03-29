import { r as a, b as e, g as l, a as t } from './DemoPage.0bae30a9.js'
import {
  d as s,
  k as o,
  m as u,
  G as r,
  o as i,
  c as n,
  w as c,
  a as d,
  z as p,
  i as v,
  _ as m
} from './index-7fd204f3.js'
const _ = m(
  s({
    __name: 'overlay',
    setup(s) {
      const m = o(!1),
        _ = o(!1),
        f = o(!1)
      return (s, o) => {
        const k = a(u('z-button'), e),
          y = a(u('z-overlay'), l),
          w = r('demo-block'),
          C = v,
          h = a(u('DemoPage'), t)
        return (
          i(),
          n(
            h,
            { title: 'Overlay' },
            {
              default: c(() => [
                d(
                  C,
                  { class: 'demo-overlay' },
                  {
                    default: c(() => [
                      d(
                        w,
                        { title: '基础用法' },
                        {
                          default: c(() => [
                            d(k, {
                              type: 'primary',
                              text: '显示遮罩层',
                              onClick: o[0] || (o[0] = (a) => (m.value = !0))
                            }),
                            d(
                              y,
                              {
                                show: m.value,
                                onClick: o[1] || (o[1] = (a) => (m.value = !1))
                              },
                              null,
                              8,
                              ['show']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      d(
                        w,
                        { title: '嵌入内容' },
                        {
                          default: c(() => [
                            d(k, {
                              type: 'primary',
                              text: '嵌入内容',
                              onClick: o[2] || (o[2] = (a) => (_.value = !0))
                            }),
                            d(
                              y,
                              {
                                show: _.value,
                                onClick: o[4] || (o[4] = (a) => (_.value = !1))
                              },
                              {
                                default: c(() => [
                                  d(
                                    C,
                                    { class: 'wrapper' },
                                    {
                                      default: c(() => [
                                        d(C, {
                                          class: 'block',
                                          onClick:
                                            o[3] ||
                                            (o[3] = p(() => {}, ['stop']))
                                        })
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['show']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      d(
                        w,
                        { title: '设置层级' },
                        {
                          default: c(() => [
                            d(k, {
                              type: 'primary',
                              text: '设置层级',
                              onClick: o[5] || (o[5] = (a) => (f.value = !0))
                            }),
                            d(
                              y,
                              {
                                show: f.value,
                                'z-index': '100',
                                onClick: o[6] || (o[6] = (a) => (f.value = !1))
                              },
                              null,
                              8,
                              ['show']
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
  }),
  [['__scopeId', 'data-v-1a3ebe46']]
)
export { _ as default }
