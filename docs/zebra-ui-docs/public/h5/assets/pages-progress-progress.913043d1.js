import {
  d as t,
  D as e,
  o as a,
  c as s,
  w as o,
  a as r,
  n as l,
  E as i,
  y as n,
  b as c,
  t as p,
  p as d,
  C as g,
  i as u,
  _ as v,
  k as m,
  m as f,
  G as _
} from './index-7fd204f3.js'
import {
  t as y,
  n as x,
  i as k,
  j as b,
  y as h,
  r as C,
  b as P,
  a as S
} from './DemoPage.0bae30a9.js'
const w = v(
    t({
      name: 'ZProgress',
      options: { virtualHost: !0 },
      props: {
        color: String,
        inactive: Boolean,
        pivotText: String,
        textColor: String,
        showPivot: y,
        pivotColor: String,
        trackColor: String,
        strokeWidth: x,
        percentage: {
          type: x,
          default: 0,
          validator: (t) => +t >= 0 && +t <= 100
        },
        customStyle: Object
      },
      setup(t) {
        const v = t,
          [m, f] = k('progress')
        b(m)
        const _ = e(() => (v.inactive ? void 0 : v.color))
        return (e, m) => {
          const y = g,
            x = u
          return (
            a(),
            s(
              x,
              {
                class: l(i(f)()),
                style: n({
                  background: t.trackColor,
                  height: i(h)(t.strokeWidth)
                })
              },
              {
                default: o(() => [
                  r(
                    y,
                    {
                      class: l(i(f)('portion', { inactive: v.inactive })),
                      style: n({ width: `${t.percentage}%`, background: i(_) })
                    },
                    null,
                    8,
                    ['class', 'style']
                  ),
                  v.showPivot
                    ? (a(),
                      s(
                        y,
                        {
                          key: 0,
                          style: n({
                            color: t.textColor,
                            left: +t.percentage + '%',
                            transform: `translate(-${+t.percentage}%,-50%)`,
                            background: t.pivotColor || i(_)
                          }),
                          class: l(i(f)('pivot', { inactive: v.inactive }))
                        },
                        {
                          default: o(() => [
                            c(
                              p(t.pivotText ? t.pivotText : `${t.percentage}%`),
                              1
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['style', 'class']
                      ))
                    : d('', !0)
                ]),
                _: 1
              },
              8,
              ['class', 'style']
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-8be5dda6']]
  ),
  j = v(
    t({
      __name: 'progress',
      setup(t) {
        const e = m(50),
          l = (t) => Math.min(Math.max(t, 0), 100),
          i = () => {
            e.value = l(e.value + 20)
          },
          n = () => {
            e.value = l(e.value - 20)
          }
        return (t, l) => {
          const c = C(f('z-progress'), w),
            p = _('demo-block'),
            d = u,
            g = C(f('z-button'), P),
            v = C(f('DemoPage'), S)
          return (
            a(),
            s(
              v,
              { title: 'Progress' },
              {
                default: o(() => [
                  r(
                    d,
                    { class: 'demo-progress' },
                    {
                      default: o(() => [
                        r(
                          p,
                          { title: '基础用法' },
                          { default: o(() => [r(c, { percentage: 50 })]), _: 1 }
                        ),
                        r(
                          p,
                          { title: '线条粗细' },
                          {
                            default: o(() => [
                              r(c, { percentage: 50, 'stroke-width': '8' })
                            ]),
                            _: 1
                          }
                        ),
                        r(
                          p,
                          { title: '置灰' },
                          {
                            default: o(() => [
                              r(c, { inactive: '', percentage: 50 })
                            ]),
                            _: 1
                          }
                        ),
                        r(
                          p,
                          { title: '样式定制' },
                          {
                            default: o(() => [
                              r(c, {
                                color: '#f2826a',
                                percentage: 25,
                                'pivot-text': '橙色'
                              }),
                              r(
                                d,
                                { class: 'demo-progress-item' },
                                {
                                  default: o(() => [
                                    r(c, {
                                      color: '#ee0a24',
                                      percentage: 50,
                                      'pivot-text': '红色'
                                    })
                                  ]),
                                  _: 1
                                }
                              ),
                              r(
                                d,
                                { class: 'demo-progress-item' },
                                {
                                  default: o(() => [
                                    r(c, {
                                      percentage: 75,
                                      'pivot-text': '紫色渐变',
                                      'pivot-color': '#7232dd',
                                      color:
                                        'linear-gradient(to right, #be99ff, #7232dd)'
                                    })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        r(
                          p,
                          { title: '过渡效果' },
                          {
                            default: o(() => [
                              r(c, { percentage: e.value }, null, 8, [
                                'percentage'
                              ]),
                              r(
                                d,
                                { style: { 'margin-top': '30rpx' } },
                                {
                                  default: o(() => [
                                    r(g, {
                                      text: '增加',
                                      type: 'primary',
                                      size: 'small',
                                      onClick: i
                                    }),
                                    r(g, {
                                      text: '减少',
                                      type: 'danger',
                                      size: 'small',
                                      'custom-style': {
                                        'margin-left': '30rpx'
                                      },
                                      onClick: n
                                    })
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
                ]),
                _: 1
              }
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-0b325a48']]
  )
export { j as default }
