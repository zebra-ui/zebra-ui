import {
  d as s,
  D as e,
  o as t,
  c as o,
  w as a,
  E as l,
  n as r,
  a as c,
  x as i,
  e as d,
  F as n,
  b as u,
  t as f,
  p as y,
  L as k,
  i as v,
  q as p,
  _
} from './index-7fd204f3.js'
import { i as b, j as g, a3 as h } from './DemoPage.0bae30a9.js'
const m = _(
  s({
    name: 'ZCard',
    options: { virtualHost: !0 },
    props: {
      actions: String,
      bordered: Boolean,
      content: String,
      cover: String,
      default: String,
      description: String,
      footer: String,
      headerBordered: Boolean,
      shadow: Boolean,
      subtitle: String,
      title: String
    },
    setup(s) {
      const _ = s,
        [m, S] = b('card')
      g(m)
      const w = k(),
        $ = e(() => _.title || w.slots.title),
        B = e(() => _.subtitle || w.slots.subtitle),
        j = e(() => _.description || w.slots.description),
        x = e(() => _.actions || w.slots.actions),
        D = e(() => _.footer || w.slots.footer),
        F = e(() => _.cover || w.slots.cover),
        q = e(
          () => _.content || w.slots.content || _.default || w.slots.default
        ),
        C = e(() => $.value || B.value || j.value || x.value),
        E = e(() => D.value)
      return (e, k) => {
        const b = v,
          g = p
        return (
          t(),
          o(
            b,
            { class: r(l(S)({ shadow: s.shadow, bordered: s.bordered })) },
            {
              default: a(() => [
                l(C)
                  ? (t(),
                    o(
                      b,
                      {
                        key: 0,
                        class: r([l(S)('header'), { [l(h)]: _.headerBordered }])
                      },
                      {
                        default: a(() => [
                          c(
                            b,
                            { class: r(l(S)('header--wrapper')) },
                            {
                              default: a(() => [
                                c(b, null, {
                                  default: a(() => [
                                    l($)
                                      ? (t(),
                                        o(
                                          b,
                                          { key: 0, class: r(l(S)('title')) },
                                          {
                                            default: a(() => [
                                              l(w).slots.title
                                                ? i(
                                                    e.$slots,
                                                    'title',
                                                    { key: 0 },
                                                    void 0,
                                                    !0
                                                  )
                                                : (t(),
                                                  d(
                                                    n,
                                                    { key: 1 },
                                                    [u(f(_.title), 1)],
                                                    64
                                                  ))
                                            ]),
                                            _: 3
                                          },
                                          8,
                                          ['class']
                                        ))
                                      : y('', !0),
                                    l(B)
                                      ? (t(),
                                        o(
                                          b,
                                          {
                                            key: 1,
                                            class: r(l(S)('subtitle'))
                                          },
                                          {
                                            default: a(() => [
                                              l(w).slots.subtitle
                                                ? i(
                                                    e.$slots,
                                                    'subtitle',
                                                    { key: 0 },
                                                    void 0,
                                                    !0
                                                  )
                                                : (t(),
                                                  d(
                                                    n,
                                                    { key: 1 },
                                                    [u(f(_.subtitle), 1)],
                                                    64
                                                  ))
                                            ]),
                                            _: 3
                                          },
                                          8,
                                          ['class']
                                        ))
                                      : y('', !0),
                                    l(j)
                                      ? (t(),
                                        o(
                                          b,
                                          {
                                            key: 2,
                                            class: r(l(S)('description'))
                                          },
                                          {
                                            default: a(() => [
                                              l(w).slots.description
                                                ? i(
                                                    e.$slots,
                                                    'description',
                                                    { key: 0 },
                                                    void 0,
                                                    !0
                                                  )
                                                : (t(),
                                                  d(
                                                    n,
                                                    { key: 1 },
                                                    [u(f(_.description), 1)],
                                                    64
                                                  ))
                                            ]),
                                            _: 3
                                          },
                                          8,
                                          ['class']
                                        ))
                                      : y('', !0)
                                  ]),
                                  _: 3
                                })
                              ]),
                              _: 3
                            },
                            8,
                            ['class']
                          ),
                          l(x)
                            ? (t(),
                              o(
                                b,
                                { key: 0, class: r(l(S)('actions')) },
                                {
                                  default: a(() => [
                                    l(w).slots.actions
                                      ? i(
                                          e.$slots,
                                          'actions',
                                          { key: 0 },
                                          void 0,
                                          !0
                                        )
                                      : (t(),
                                        d(
                                          n,
                                          { key: 1 },
                                          [u(f(_.actions), 1)],
                                          64
                                        ))
                                  ]),
                                  _: 3
                                },
                                8,
                                ['class']
                              ))
                            : y('', !0)
                        ]),
                        _: 3
                      },
                      8,
                      ['class']
                    ))
                  : y('', !0),
                l(F)
                  ? (t(),
                    o(
                      b,
                      { key: 1, class: r(l(S)('cover')) },
                      {
                        default: a(() => [
                          _.cover
                            ? (t(),
                              o(
                                g,
                                {
                                  key: 0,
                                  class: r(
                                    l(S)('cover--image', { showtitle: l(C) })
                                  ),
                                  src: _.cover,
                                  mode: 'aspectFill'
                                },
                                null,
                                8,
                                ['class', 'src']
                              ))
                            : i(e.$slots, 'cover', { key: 1 }, void 0, !0)
                        ]),
                        _: 3
                      },
                      8,
                      ['class']
                    ))
                  : y('', !0),
                l(q)
                  ? (t(),
                    o(
                      b,
                      { key: 2, class: r(l(S)('body')) },
                      {
                        default: a(() => [
                          l(w).slots.default
                            ? i(e.$slots, 'default', { key: 0 }, void 0, !0)
                            : (t(), d(n, { key: 1 }, [u(f(_.content), 1)], 64))
                        ]),
                        _: 3
                      },
                      8,
                      ['class']
                    ))
                  : y('', !0),
                l(E)
                  ? (t(),
                    o(
                      b,
                      { key: 3, class: r(l(S)('footer')) },
                      {
                        default: a(() => [
                          c(
                            b,
                            { class: r(l(S)('footer--wrapper')) },
                            {
                              default: a(() => [
                                l(w).slots.footer
                                  ? i(
                                      e.$slots,
                                      'footer',
                                      { key: 0 },
                                      void 0,
                                      !0
                                    )
                                  : (t(),
                                    d(n, { key: 1 }, [u(f(_.footer), 1)], 64))
                              ]),
                              _: 3
                            },
                            8,
                            ['class']
                          )
                        ]),
                        _: 3
                      },
                      8,
                      ['class']
                    ))
                  : y('', !0)
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
  [['__scopeId', 'data-v-333aa000']]
)
export { m as _ }
