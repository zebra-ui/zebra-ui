import {
  t as s,
  s as o,
  i as a,
  j as e,
  r as l,
  _ as t,
  f as n,
  L as r
} from './DemoPage.0bae30a9.js'
import {
  d as c,
  D as i,
  m,
  o as u,
  c as p,
  w as d,
  a as f,
  y,
  E as g,
  n as x,
  x as k,
  z,
  p as _,
  i as b,
  _ as C
} from './index-7fd204f3.js'
const w = C(
  c({
    name: 'ZTag',
    options: { virtualHost: !0 },
    props: {
      size: String,
      mark: Boolean,
      show: s,
      type: o('default'),
      color: String,
      plain: Boolean,
      round: Boolean,
      textColor: String,
      closeable: Boolean
    },
    emits: ['close'],
    setup(s, { emit: o }) {
      const c = s,
        [C, w] = a('tag')
      e(C)
      const h = (s) => {
          o('close', s)
        },
        B = i(() =>
          c.plain
            ? { color: c.textColor || c.color, borderColor: c.color }
            : { color: c.textColor, background: c.color }
        ),
        j = i(() => {
          const s = { mark: c.mark, plain: c.plain, round: c.round }
          return c.size && (s[c.size] = c.size), s
        }),
        v = i(() => ({ display: 'inline-flex' }))
      return (o, a) => {
        const e = l(m('z-icon'), t),
          i = b,
          C = l(m('z-transition'), n)
        return (
          u(),
          p(
            C,
            {
              show: c.show,
              name: c.closeable ? 'fade' : '',
              'custom-style': g(v)
            },
            {
              default: d(() => [
                f(
                  i,
                  { style: y(g(B)), class: x(g(w)([g(j), s.type])) },
                  {
                    default: d(() => [
                      k(o.$slots, 'default', {}, void 0, !0),
                      s.closeable
                        ? (u(),
                          p(
                            e,
                            {
                              key: 0,
                              name: 'close',
                              'custom-style': { 'margin-left': '4rpx' },
                              'custom-class': [g(r)],
                              onClick: z(h, ['stop'])
                            },
                            null,
                            8,
                            ['custom-class', 'onClick']
                          ))
                        : _('', !0)
                    ]),
                    _: 3
                  },
                  8,
                  ['style', 'class']
                )
              ]),
              _: 3
            },
            8,
            ['show', 'name', 'custom-style']
          )
        )
      }
    }
  }),
  [['__scopeId', 'data-v-063ba7f1']]
)
export { w as _ }
