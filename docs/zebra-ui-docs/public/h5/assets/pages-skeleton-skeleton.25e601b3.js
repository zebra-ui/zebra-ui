import {
  d as a,
  o as e,
  c as t,
  n as s,
  E as l,
  y as o,
  i as r,
  _ as n,
  m as i,
  x as d,
  w as u,
  e as c,
  F as p,
  p as m,
  a as v,
  r as h,
  L as _,
  D as k,
  k as f,
  G as y,
  b as g,
  q as w
} from './index-7fd204f3.js'
import {
  n as z,
  s as S,
  i as W,
  j as b,
  W as x,
  y as I,
  m as j,
  t as A,
  r as B,
  _ as H,
  a as Z
} from './DemoPage.0bae30a9.js'
import { _ as D } from './z-switch.e182d14d.js'
import './index.389bd7d1.js'
const P = n(
    a({
      name: 'ZSkeletonAvatar',
      options: { virtualHost: !0 },
      props: { avatarSize: z, avatarShape: S('round') },
      setup(a) {
        const n = a,
          [i, d] = W('skeleton-avatar')
        return (
          b(i),
          (a, i) => {
            const u = r
            return (
              e(),
              t(
                u,
                {
                  class: s(l(d)([n.avatarShape])),
                  style: o(l(x)(n.avatarSize))
                },
                null,
                8,
                ['class', 'style']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-bfac5d36']]
  ),
  V = n(
    a({
      name: 'ZSkeletonTitle',
      options: { virtualHost: !0 },
      props: { round: Boolean, titleWidth: z },
      setup(a) {
        const n = a,
          [i, d] = W('skeleton-title')
        return (
          b(i),
          (a, i) => {
            const u = r
            return (
              e(),
              t(
                u,
                {
                  class: s(l(d)([{ round: n.round }])),
                  style: o({ width: l(I)(n.titleWidth) })
                },
                null,
                8,
                ['class', 'style']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-ac06239c']]
  ),
  q = n(
    a({
      name: 'ZSkeletonParagraph',
      options: { virtualHost: !0 },
      props: { round: Boolean, rowWidth: { type: z, default: '100%' } },
      setup(a) {
        const n = a,
          [i, d] = W('skeleton-paragraph')
        return (
          b(i),
          (a, i) => {
            const u = r
            return (
              e(),
              t(
                u,
                {
                  class: s(l(d)([{ round: n.round }])),
                  style: o({ width: n.rowWidth })
                },
                null,
                8,
                ['class', 'style']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-fd33d58e']]
  ),
  L = n(
    a({
      name: 'ZSkeleton',
      options: { virtualHost: !0 },
      props: {
        row: j(0),
        round: Boolean,
        title: Boolean,
        titleWidth: z,
        avatar: Boolean,
        avatarSize: z,
        avatarShape: S('round'),
        loading: A,
        animate: A,
        rowWidth: { type: [Number, String, Array], default: '100%' }
      },
      setup(a) {
        const o = a,
          [n, k] = W('skeleton')
        b(n)
        const f = _(),
          y = (a) => {
            const { rowWidth: e } = o
            return '100%' === e && a === +o.row - 1
              ? '60%'
              : Array.isArray(e)
                ? e[a]
                : e
          }
        return (a, n) => {
          const _ = B(i('z-skeleton-avatar'), P),
            g = B(i('z-skeleton-title'), V),
            w = B(i('z-skeleton-paragraph'), q),
            z = r
          return o.loading
            ? (e(),
              t(
                z,
                {
                  key: 1,
                  class: s(l(k)({ animate: o.animate, round: o.round }))
                },
                {
                  default: u(() => [
                    l(f).slots.template
                      ? d(a.$slots, 'template', { key: 0 }, void 0, !0)
                      : (e(),
                        c(
                          p,
                          { key: 1 },
                          [
                            o.avatar
                              ? (e(),
                                t(
                                  _,
                                  {
                                    key: 0,
                                    'avatar-shape': o.avatarShape,
                                    'avatar-size': o.avatarSize
                                  },
                                  null,
                                  8,
                                  ['avatar-shape', 'avatar-size']
                                ))
                              : m('', !0),
                            v(
                              z,
                              { class: s(l(k)('content')) },
                              {
                                default: u(() => [
                                  o.title
                                    ? (e(),
                                      t(
                                        g,
                                        {
                                          key: 0,
                                          round: o.round,
                                          'title-width': o.titleWidth
                                        },
                                        null,
                                        8,
                                        ['round', 'title-width']
                                      ))
                                    : m('', !0),
                                  (e(!0),
                                  c(
                                    p,
                                    null,
                                    h(
                                      Array(+o.row).fill(''),
                                      (a, s) => (
                                        e(),
                                        t(
                                          w,
                                          {
                                            key: s,
                                            round: o.round,
                                            'row-width': l(I)(y(s))
                                          },
                                          null,
                                          8,
                                          ['round', 'row-width']
                                        )
                                      )
                                    ),
                                    128
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['class']
                            )
                          ],
                          64
                        ))
                  ]),
                  _: 3
                },
                8,
                ['class']
              ))
            : d(a.$slots, 'default', { key: 0 }, void 0, !0)
        }
      }
    }),
    [['__scopeId', 'data-v-96f9494f']]
  ),
  $ = n(
    a({
      name: 'ZSkeletonImage',
      options: { virtualHost: !0 },
      props: { imageSize: z, imageShape: S('square') },
      setup(a) {
        const n = a,
          [d, c] = W('skeleton-image')
        b(d)
        const p = k(() => ({
          width: 'calc(var(--z-skeleton-image-size) / 2)',
          height: 'calc(var(--z-skeleton-image-size) / 2)',
          fontSize: 'calc(var(--z-skeleton-image-size) / 2)',
          color: 'var(--z-gray-5)'
        }))
        return (a, d) => {
          const m = B(i('z-icon'), H),
            h = r
          return (
            e(),
            t(
              h,
              { class: s(l(c)([n.imageShape])), style: o(l(x)(n.imageSize)) },
              {
                default: u(() => [
                  v(m, { name: 'image', 'custom-style': l(p) }, null, 8, [
                    'custom-style'
                  ])
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
    [['__scopeId', 'data-v-4b421110']]
  ),
  E = n(
    a({
      __name: 'skeleton',
      setup(a) {
        const s = f(!1)
        return (a, l) => {
          const o = B(i('z-skeleton'), L),
            n = y('demo-block'),
            d = B(i('z-switch'), D),
            c = r,
            p = w,
            m = B(i('z-skeleton-image'), $),
            h = B(i('z-skeleton-paragraph'), q),
            _ = B(i('DemoPage'), Z)
          return (
            e(),
            t(
              _,
              { title: 'Skeleton' },
              {
                default: u(() => [
                  v(
                    c,
                    { class: 'demo-skeleton' },
                    {
                      default: u(() => [
                        v(
                          n,
                          { title: '基础用法' },
                          {
                            default: u(() => [v(o, { title: '', row: 3 })]),
                            _: 1
                          }
                        ),
                        v(
                          n,
                          { title: '显示头像' },
                          {
                            default: u(() => [
                              v(o, { title: '', avatar: '', row: 3 })
                            ]),
                            _: 1
                          }
                        ),
                        v(
                          n,
                          { title: '显示子组件' },
                          {
                            default: u(() => [
                              v(
                                c,
                                { class: 'demo-skeleton-switch' },
                                {
                                  default: u(() => [
                                    v(
                                      d,
                                      {
                                        modelValue: s.value,
                                        'onUpdate:modelValue':
                                          l[0] || (l[0] = (a) => (s.value = a))
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              v(
                                o,
                                {
                                  title: '',
                                  avatar: '',
                                  row: 2,
                                  loading: !s.value
                                },
                                {
                                  default: u(() => [
                                    v(
                                      c,
                                      { class: 'demo-skeleton-preview' },
                                      {
                                        default: u(() => [
                                          v(p, {
                                            src: 'https://cdn.zebraui.com/zebra-ui/images/logo.png'
                                          }),
                                          v(
                                            c,
                                            { class: 'demo-skeleton-content' },
                                            {
                                              default: u(() => [
                                                v(
                                                  c,
                                                  { class: 'title' },
                                                  {
                                                    default: u(() => [
                                                      g('标题')
                                                    ]),
                                                    _: 1
                                                  }
                                                ),
                                                v(
                                                  c,
                                                  { class: 'desc' },
                                                  {
                                                    default: u(() => [
                                                      g(
                                                        'zebra-swiper 是基于uniapp开发的一款移动端轮播组件。'
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
                                  ]),
                                  _: 1
                                },
                                8,
                                ['loading']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        v(
                          n,
                          { title: '自定义内容' },
                          {
                            default: u(() => [
                              v(o, null, {
                                template: u(() => [
                                  v(
                                    c,
                                    {
                                      style: { display: 'flex', width: '100%' }
                                    },
                                    {
                                      default: u(() => [
                                        v(m),
                                        v(
                                          c,
                                          {
                                            style: {
                                              flex: 1,
                                              marginLeft: '32rpx'
                                            }
                                          },
                                          {
                                            default: u(() => [
                                              v(h, { 'row-width': '60%' }),
                                              v(h),
                                              v(h),
                                              v(h)
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
          )
        }
      }
    }),
    [['__scopeId', 'data-v-c44a6c5a']]
  )
export { E as default }
