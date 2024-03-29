import {
  d as s,
  o as t,
  c as e,
  w as a,
  E as l,
  e as o,
  F as i,
  a as n,
  n as c,
  x as r,
  b as d,
  t as u,
  L as _,
  i as p,
  _ as f
} from './index-7fd204f3.js'
import { t as m, i as b, j as g, B as k } from './DemoPage.0bae30a9.js'
const v = f(
  s({
    __name: 'z-cell-group',
    props: { title: String, inset: Boolean, border: m },
    setup(s) {
      const f = s,
        [m, v] = b('cell-group')
      g(m)
      const y = _()
      return (s, _) => {
        const m = p
        return (
          t(),
          e(
            m,
            { class: c(l(v)()) },
            {
              default: a(() => [
                f.title || l(y).slots.title
                  ? (t(),
                    o(
                      i,
                      { key: 0 },
                      [
                        n(
                          m,
                          { class: c(l(v)('title', { inset: f.inset })) },
                          {
                            default: a(() => [
                              l(y).slots.title
                                ? r(s.$slots, 'title', { key: 0 }, void 0, !0)
                                : (t(),
                                  o(i, { key: 1 }, [d(u(f.title), 1)], 64))
                            ]),
                            _: 3
                          },
                          8,
                          ['class']
                        ),
                        n(
                          m,
                          {
                            class: c([
                              l(v)({ inset: f.inset }),
                              { [l(k)]: f.border && !f.inset }
                            ])
                          },
                          {
                            default: a(() => [
                              r(s.$slots, 'default', {}, void 0, !0)
                            ]),
                            _: 3
                          },
                          8,
                          ['class']
                        )
                      ],
                      64
                    ))
                  : (t(),
                    e(
                      m,
                      {
                        key: 1,
                        class: c([
                          l(v)({ inset: f.inset }),
                          { [l(k)]: f.border && !f.inset }
                        ])
                      },
                      {
                        default: a(() => [
                          r(s.$slots, 'default', {}, void 0, !0)
                        ]),
                        _: 3
                      },
                      8,
                      ['class']
                    ))
              ]),
              _: 3
            },
            8,
            ['class']
          )
        )
      }
    }
  }),
  [['__scopeId', 'data-v-01cc7e2c']]
)
export { v as _ }
