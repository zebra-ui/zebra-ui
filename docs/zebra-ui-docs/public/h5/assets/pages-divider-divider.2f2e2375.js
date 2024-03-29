import {
  d as t,
  o as e,
  c as a,
  w as s,
  x as l,
  p as o,
  n as i,
  E as d,
  y as r,
  L as n,
  i as c,
  _ as u,
  m as f,
  G as v,
  a as _,
  b as m,
  M as p
} from './index-7fd204f3.js'
import {
  t as h,
  s as y,
  i as b,
  j as g,
  r as j,
  a as x
} from './DemoPage.0bae30a9.js'
const D = u(
  t({
    name: 'ZDivider',
    options: { virtualHost: !0 },
    props: {
      dashed: Boolean,
      hairline: h,
      vertical: Boolean,
      contentPosition: y('center'),
      customStyle: Object
    },
    setup(t) {
      const u = t,
        [f, v] = b('divider')
      g(f)
      const _ = n()
      return (n, f) => {
        const m = c
        return (
          e(),
          a(
            m,
            {
              class: i(
                d(v)({
                  dashed: u.dashed,
                  hairline: u.hairline,
                  vertical: u.vertical,
                  [`content-${u.contentPosition}`]:
                    !!d(_).slots.default && !u.vertical
                })
              ),
              style: r(t.customStyle)
            },
            {
              default: s(() => [
                u.vertical
                  ? o('', !0)
                  : l(n.$slots, 'default', { key: 0 }, void 0, !0)
              ]),
              _: 3
            },
            8,
            ['class', 'style']
          )
        )
      }
    }
  }),
  [['__scopeId', 'data-v-579f48d1']]
)
const P = u({}, [
  [
    'render',
    function (t, l) {
      const o = j(f('z-divider'), D),
        i = v('demo-block'),
        d = c,
        r = j(f('DemoPage'), x)
      return (
        e(),
        a(
          r,
          { title: 'Divider' },
          {
            default: s(() => [
              _(
                d,
                { class: 'demo-divider' },
                {
                  default: s(() => [
                    _(
                      i,
                      { title: '基础用法' },
                      { default: s(() => [_(o)]), _: 1 }
                    ),
                    _(
                      i,
                      { title: '展示文本' },
                      {
                        default: s(() => [
                          _(o, null, { default: s(() => [m(' 文字 ')]), _: 1 })
                        ]),
                        _: 1
                      }
                    ),
                    _(
                      i,
                      { title: '内容位置' },
                      {
                        default: s(() => [
                          _(
                            o,
                            { 'content-position': 'left' },
                            { default: s(() => [m(' 文字 ')]), _: 1 }
                          ),
                          _(
                            o,
                            { 'content-position': 'right' },
                            { default: s(() => [m(' 文字 ')]), _: 1 }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    _(
                      i,
                      { title: '虚线' },
                      {
                        default: s(() => [
                          _(
                            o,
                            { dashed: '', hairline: !1 },
                            { default: s(() => [m(' 文字 ')]), _: 1 }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    _(
                      i,
                      { title: '自定义样式' },
                      {
                        default: s(() => [
                          _(
                            o,
                            {
                              'custom-style': {
                                borderColor: '#1989fa',
                                color: '#1989fa',
                                padding: '0 32rpx'
                              }
                            },
                            { default: s(() => [m(' 文字 ')]), _: 1 }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    _(
                      i,
                      { title: '垂直' },
                      {
                        default: s(() => [
                          p('div', { class: 'content' }, [
                            _(o, { vertical: '' }),
                            m(' 文字 '),
                            _(o, { vertical: '', dashed: '' }),
                            m(' 文字 '),
                            _(o, { vertical: '', hairline: !1 }),
                            m(' 文字 '),
                            _(o, {
                              vertical: '',
                              'custom-style': { borderColor: '#1989fa' }
                            })
                          ])
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
  ],
  ['__scopeId', 'data-v-4efe50ac']
])
export { P as default }
