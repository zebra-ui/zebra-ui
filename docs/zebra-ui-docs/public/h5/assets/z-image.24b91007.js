import {
  d as s,
  k as o,
  D as a,
  l as e,
  I as r,
  ae as l,
  m as n,
  o as i,
  c,
  w as t,
  a as d,
  n as u,
  E as g,
  x as m,
  p,
  y as f,
  L as h,
  q as y,
  i as v,
  _ as k
} from './index-7fd204f3.js'
import {
  n as w,
  t as x,
  s as S,
  i as _,
  j as b,
  y as z,
  H as I,
  r as L,
  _ as B
} from './DemoPage.0bae30a9.js'
const j = k(
  s({
    name: 'ZImage',
    options: { virtualHost: !0 },
    props: {
      src: String,
      alt: String,
      mode: String,
      position: String,
      round: Boolean,
      block: Boolean,
      width: w,
      height: w,
      radius: w,
      iconSize: { type: [Number, String], default: '64rpx' },
      showError: x,
      errorIcon: S('error-fill'),
      iconPrefix: String,
      showLoading: x,
      loadingIcon: S('image-fill'),
      showMenuByLongpress: Boolean,
      customStyle: Object
    },
    emits: ['load', 'error', 'click'],
    setup(s, { emit: k }) {
      const w = s,
        [x, S] = _('image')
      b(x)
      const j = h(),
        E = o(!1),
        P = o(!0),
        $ = a(() => {
          const s = { width: z(w.width), height: z(w.height) }
          return (
            I(w.radius) &&
              ((s.overflow = 'hidden'), (s.borderRadius = z(w.radius))),
            { ...s, ...w.customStyle }
          )
        })
      e(
        () => w.src,
        () => {
          ;(E.value = !1), (P.value = !0)
        }
      )
      const D = (s) => {
          P.value && w.src && ((P.value = !1), k('load', s))
        },
        H = (s) => {
          ;(E.value = !0), (P.value = !1), k('error', s)
        },
        M = () => {
          k('click')
        }
      return (
        r(() => {
          l(() => {
            D(null)
          })
        }),
        (s, o) => {
          const a = y,
            e = L(n('z-icon'), B),
            r = v
          return (
            i(),
            c(
              r,
              {
                class: u(g(S)({ round: w.round, block: w.block })),
                style: f(g($)),
                onClick: M
              },
              {
                default: t(() => [
                  d(
                    a,
                    {
                      class: u(g(S)('content')),
                      src: w.src,
                      mode: w.mode,
                      'show-menu-by-longpress': w.showMenuByLongpress,
                      onLoad: D,
                      onError: H
                    },
                    null,
                    8,
                    ['class', 'src', 'mode', 'show-menu-by-longpress']
                  ),
                  P.value && w.showLoading
                    ? (i(),
                      c(
                        r,
                        { key: 0, class: u(g(S)('loading')) },
                        {
                          default: t(() => [
                            g(j).slots.loading
                              ? m(s.$slots, 'loading', { key: 0 }, void 0, !0)
                              : (i(),
                                c(
                                  r,
                                  { key: 1, class: u(g(S)('loading-icon')) },
                                  {
                                    default: t(() => [
                                      d(
                                        e,
                                        {
                                          name: w.loadingIcon,
                                          size: w.iconSize,
                                          'class-prefix': w.iconPrefix
                                        },
                                        null,
                                        8,
                                        ['name', 'size', 'class-prefix']
                                      )
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['class']
                                ))
                          ]),
                          _: 3
                        },
                        8,
                        ['class']
                      ))
                    : p('', !0),
                  E.value && w.showError
                    ? (i(),
                      c(
                        r,
                        { key: 1, class: u(g(S)('error')) },
                        {
                          default: t(() => [
                            g(j).slots.error
                              ? m(s.$slots, 'error', { key: 0 }, void 0, !0)
                              : (i(),
                                c(
                                  r,
                                  { key: 1, class: u(g(S)('error-icon')) },
                                  {
                                    default: t(() => [
                                      d(
                                        e,
                                        {
                                          name: w.errorIcon,
                                          size: w.iconSize,
                                          'class-prefix': w.iconPrefix
                                        },
                                        null,
                                        8,
                                        ['name', 'size', 'class-prefix']
                                      )
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['class']
                                ))
                          ]),
                          _: 3
                        },
                        8,
                        ['class']
                      ))
                    : p('', !0),
                  m(s.$slots, 'default', {}, void 0, !0)
                ]),
                _: 3
              },
              8,
              ['class', 'style']
            )
          )
        }
      )
    }
  }),
  [['__scopeId', 'data-v-79e659dc']]
)
export { j as _ }
