import {
  s as e,
  n as t,
  w as o,
  i as a,
  j as s,
  k as i,
  r as n,
  _ as r,
  d as l,
  e as c,
  H as d
} from './DemoPage.0bae30a9.js'
import {
  d as p,
  a6 as y,
  D as m,
  k as u,
  l as g,
  I as w,
  ac as v,
  X as h,
  m as k,
  o as z,
  c as f,
  w as b,
  a as x,
  E as S,
  p as B,
  n as C,
  y as _,
  x as O,
  b as j,
  t as T,
  L as H,
  i as I,
  _ as P
} from './index-7fd204f3.js'
const A = P(
  p({
    __name: 'z-toast',
    props: {
      icon: String,
      show: Boolean,
      type: e('text'),
      overlay: Boolean,
      message: t,
      iconSize: t,
      duration: o(2e3),
      position: e('middle'),
      wordBreak: String,
      iconPrefix: String,
      transition: e('fade'),
      loadingType: String,
      forbidClick: Boolean,
      overlayStyle: Object,
      closeOnClick: Boolean,
      closeOnClickOverlay: Boolean,
      zIndex: t,
      customStyle: Object,
      name: String
    },
    emits: ['update:show'],
    setup(e, { expose: t, emit: o }) {
      const p = e,
        [P, A] = a('toast')
      s(P)
      const D = H(),
        W = y({ show: !1, overlay: !1 })
      let $,
        E = !1
      const L = () => {
          const e = (p.show && p.forbidClick) || (W.show && W.forbidClick)
          E !== e && ((E = e), (W.overlay = !0))
        },
        R = m(() =>
          'success' === p.type || 'success' === W.type
            ? 'check-circle'
            : 'fail' === p.type || 'fail' === W.type
              ? 'warning-circle'
              : ''
        ),
        U = (e) => {
          ;(W.show = e), o('update:show', e)
        },
        X = () => {
          p.closeOnClick && U(!1)
        },
        q = () => clearTimeout($),
        F = u({}),
        G = m(() => {
          const e = {}
          let t = {},
            o = {}
          return (
            (t =
              'top' == p.position || 'top' == W.position
                ? { top: 'var(--z-toast-position-top-distance)' }
                : 'bottom' == p.position || 'bottom' == W.position
                  ? {
                      top: 'auto',
                      bottom: 'var(--z-toast-position-bottom-distance)'
                    }
                  : ('middle' == p.position || W.position, {})),
            'normal' === p.wordBreak || 'normal' === W.wordBreak
              ? ((e['word-break'] = 'normal'), (e['word-wrap'] = 'normal'))
              : 'break-word' === p.wordBreak || 'break-word' === W.wordBreak
                ? ((e['word-break'] = 'normal'),
                  (e['word-wrap'] = 'break-word'))
                : ('break-all' !== p.wordBreak &&
                    'break-all' !== W.wordBreak) ||
                  (e['word-break'] = 'break-all'),
            p.icon || W.icon
              ? ((o = {}), (F.value = {}))
              : ('text' != p.type && 'html' != p.type) ||
                  ('text' != W.type && 'html' != W.type)
                ? D.slots.message
                  ? ((o = {
                      width: 'fit-content',
                      minWidth: 'var(--z-toast-text-min-width)',
                      minHeight: '0',
                      padding: 'var(--z-toast-text-padding)'
                    }),
                    (F.value = { 'margin-top': '0' }))
                  : ((o = {}), (F.value = {}))
                : ((o = {
                    width: 'fit-content',
                    minWidth: 'var(--z-toast-text-min-width)',
                    minHeight: '0',
                    padding: 'var(--z-toast-text-padding)'
                  }),
                  (F.value = { 'margin-top': '0' })),
            {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'content-box',
              transition: 'all var(--z-duration-fast)',
              width: 'var(--z-toast-default-width)',
              maxWidth: 'var(--z-toast-max-width)',
              minHeight: 'var(--z-toast-default-min-height)',
              padding: 'var(--z-toast-default-padding)',
              color: 'var(--z-toast-text-color)',
              fontSize: 'var(--z-toast-font-size)',
              lineHeight: 'var(--z-toast-line-height)',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
              textAlign: 'center',
              background: 'var(--z-toast-background)',
              borderRadius: 'var(--z-toast-radius)',
              ...t,
              ...e,
              ...o,
              ...p.customStyle,
              ...W.customStyle
            }
          )
        }),
        J = (e) => {
          W.show = e
        }
      g(() => [p.show, p.forbidClick], L),
        g(() => [W.show, W.forbidClick], L),
        g(
          () => [p.show, p.type, p.message, p.duration],
          () => {
            q(),
              p.show &&
                p.duration > 0 &&
                ($ = setTimeout(() => {
                  U(!1)
                }, p.duration))
          }
        ),
        g(
          () => [W.show, W.type, W.message, W.duration],
          () => {
            q(),
              W.show &&
                W.duration > 0 &&
                ($ = setTimeout(() => {
                  U(!1)
                }, W.duration))
          }
        ),
        w(L),
        v(L),
        t({
          open: (e) => {
            i(W, e, { transitionAppear: !0 }), J(!0)
          },
          close: () => J(!1),
          toggle: J,
          state: W
        })
      const K = h(`z-toast-${p.name}`, u({}))
      return (
        g(
          () => K.value,
          (e) => {
            i(W, e, { transitionAppear: !0 })
          }
        ),
        (t, o) => {
          const a = n(k('z-icon'), r),
            s = n(k('z-loading'), l),
            i = I,
            y = n(k('z-popup'), c)
          return (
            z(),
            f(
              i,
              { class: C(S(A)()) },
              {
                default: b(() => [
                  x(
                    y,
                    {
                      show: e.show || W.show,
                      overlay: e.overlay || W.overlay,
                      transition: e.transition,
                      'overlay-back-groud':
                        'loading' != p.type && 'loading' != W.type,
                      'overlay-style': e.overlayStyle,
                      'close-on-click-overlay':
                        e.closeOnClickOverlay || W.closeOnClickOverlay,
                      'z-index': e.zIndex,
                      'custom-style': S(G),
                      onClick: X,
                      onClosed: q,
                      'onUpdate:show': U
                    },
                    {
                      default: b(() => [
                        e.icon ||
                        W.icon ||
                        'success' === e.type ||
                        'fail' === e.type ||
                        'success' === W.type ||
                        'fail' === W.type
                          ? (z(),
                            f(
                              a,
                              {
                                key: 0,
                                name: e.icon || W.icon || S(R),
                                size:
                                  e.iconSize ||
                                  W.iconSize ||
                                  'var(--z-toast-icon-size)',
                                'class-prefix': e.iconPrefix || W.iconPrefix,
                                'custom-style': { 'line-height': '1' }
                              },
                              null,
                              8,
                              ['name', 'size', 'class-prefix']
                            ))
                          : 'loading' === e.type || 'loading' === W.type
                            ? (z(),
                              f(
                                s,
                                {
                                  key: 1,
                                  'custom-style': {
                                    padding: 'var(--z-padding-base)',
                                    color: 'var(--z-toast-loading-icon-color)'
                                  },
                                  size: e.iconSize || W.iconSize,
                                  type: e.loadingType || W.loadingType
                                },
                                null,
                                8,
                                ['custom-style', 'size', 'type']
                              ))
                            : B('', !0),
                        S(D).slots.message
                          ? (z(),
                            f(
                              i,
                              {
                                key: 2,
                                class: C(S(A)('text')),
                                style: _(F.value)
                              },
                              {
                                default: b(() => [
                                  O(t.$slots, 'message', {}, void 0, !0)
                                ]),
                                _: 3
                              },
                              8,
                              ['class', 'style']
                            ))
                          : (!S(d)(e.message) && !S(d)(W.message)) ||
                              ('' === e.message && '' === W.message)
                            ? B('', !0)
                            : (z(),
                              f(
                                i,
                                {
                                  key: 3,
                                  class: C(S(A)('text')),
                                  style: _(F.value)
                                },
                                {
                                  default: b(() => [
                                    j(T(e.message || W.message), 1)
                                  ]),
                                  _: 1
                                },
                                8,
                                ['class', 'style']
                              ))
                      ]),
                      _: 3
                    },
                    8,
                    [
                      'show',
                      'overlay',
                      'transition',
                      'overlay-back-groud',
                      'overlay-style',
                      'close-on-click-overlay',
                      'z-index',
                      'custom-style'
                    ]
                  )
                ]),
                _: 3
              },
              8,
              ['class']
            )
          )
        }
      )
    }
  }),
  [['__scopeId', 'data-v-22effdaa']]
)
export { A as _ }
