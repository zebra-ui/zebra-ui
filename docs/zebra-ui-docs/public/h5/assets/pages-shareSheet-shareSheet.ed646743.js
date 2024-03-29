import { _ as e } from './z-cell.365e08ec.js'
import {
  d as s,
  o,
  c as a,
  w as t,
  m as l,
  a as n,
  E as i,
  n as c,
  x as r,
  e as d,
  b as p,
  t as m,
  F as u,
  p as k,
  r as y,
  L as h,
  i as f,
  a2 as v,
  q as w,
  C as _,
  _ as b,
  k as z,
  D as S,
  G as g
} from './index-7fd204f3.js'
import {
  k as C,
  a1 as q,
  t as j,
  i as x,
  j as A,
  r as O,
  _ as U,
  e as I,
  L as P,
  a as Q
} from './DemoPage.0bae30a9.js'
import { _ as D } from './z-toast.a77377ba.js'
import { s as N } from './z-toast.44a3344c.js'
import './z-dialog.b209de9d.js'
const T = b(
    s({
      name: 'ZShareSheet',
      options: { virtualHost: !0 },
      props: C({}, q, {
        title: String,
        round: j,
        options: [Array, Object],
        cancelText: String,
        description: String,
        closeOnPopstate: j,
        safeAreaInsetBottom: j
      }),
      emits: ['cancel', 'select', 'update:show'],
      setup(e, { emit: s }) {
        const b = e,
          z = (e) => (null == e ? void 0 : e.includes('/')),
          S = {
            qq: 'QQ',
            link: 'link',
            weibo: 'weibo',
            qrcode: 'qrcode',
            poster: 'image',
            wechat: 'wechat-fill',
            'weapp-qrcode': 'miniprogram',
            'wechat-moments': 'message-fill'
          },
          [g, C] = x('share-sheet')
        A(g)
        const q = h(),
          j = (e) => s('update:show', e),
          Q = () => {
            j(!1), s('cancel')
          },
          D = (e, o) => s('select', e, o)
        return (e, s) => {
          const h = f,
            g = w,
            x = O(l('z-icon'), U),
            A = _,
            N = v,
            T = O(l('z-popup'), I)
          return (
            o(),
            a(
              T,
              {
                position: 'bottom',
                show: b.show,
                'z-index': b.zIndex,
                overlay: b.overlay,
                duration: b.duration,
                'lock-scroll': b.lockScroll,
                'lazy-render': b.lazyRender,
                'before-close': b.beforeClose,
                'overlay-style': b.overlayStyle,
                'overlay-class': b.overlayClass,
                'transition-appear': b.transitionAppear,
                'close-on-click-overlay': b.closeOnClickOverlay,
                round: b.round,
                'close-on-popstate': b.closeOnPopstate,
                'safe-area-inset-bottom': b.safeAreaInsetBottom,
                'onUpdate:show': j
              },
              {
                default: t(() => [
                  n(
                    h,
                    { class: c(i(C)()) },
                    {
                      default: t(() => [
                        i(q).slots.title || b.title || e.description
                          ? (o(),
                            a(
                              h,
                              { key: 0, class: c(i(C)('header')) },
                              {
                                default: t(() => [
                                  i(q).slots.title || b.title
                                    ? (o(),
                                      a(
                                        h,
                                        { key: 0, class: c(i(C)('title')) },
                                        {
                                          default: t(() => [
                                            i(q).slots.title
                                              ? r(
                                                  e.$slots,
                                                  'title',
                                                  { key: 0 },
                                                  void 0,
                                                  !0
                                                )
                                              : (o(),
                                                d(
                                                  u,
                                                  { key: 1 },
                                                  [p(m(b.title), 1)],
                                                  64
                                                ))
                                          ]),
                                          _: 3
                                        },
                                        8,
                                        ['class']
                                      ))
                                    : k('', !0),
                                  i(q).slots.description || b.description
                                    ? (o(),
                                      a(
                                        h,
                                        {
                                          key: 1,
                                          class: c(i(C)('description'))
                                        },
                                        {
                                          default: t(() => [
                                            i(q).slots.description
                                              ? r(
                                                  e.$slots,
                                                  'description',
                                                  { key: 0 },
                                                  void 0,
                                                  !0
                                                )
                                              : (o(),
                                                d(
                                                  u,
                                                  { key: 1 },
                                                  [p(m(b.description), 1)],
                                                  64
                                                ))
                                          ]),
                                          _: 3
                                        },
                                        8,
                                        ['class']
                                      ))
                                    : k('', !0)
                                ]),
                                _: 3
                              },
                              8,
                              ['class']
                            ))
                          : k('', !0),
                        Array.isArray(e.options[0])
                          ? (o(!0),
                            d(
                              u,
                              { key: 1 },
                              y(
                                e.options,
                                (e, s) => (
                                  o(),
                                  a(
                                    h,
                                    {
                                      key: s,
                                      class: c(
                                        i(C)('options', {
                                          border: 0 != Number(s)
                                        })
                                      )
                                    },
                                    {
                                      default: t(() => [
                                        (o(!0),
                                        d(
                                          u,
                                          null,
                                          y(
                                            e,
                                            (e, l) => (
                                              o(),
                                              a(
                                                h,
                                                {
                                                  key: l,
                                                  class: c([
                                                    i(C)('option'),
                                                    e.className,
                                                    i(P)
                                                  ]),
                                                  onClick: () => D(e, s)
                                                },
                                                {
                                                  default: t(() => [
                                                    z(e.icon)
                                                      ? (o(),
                                                        a(
                                                          g,
                                                          {
                                                            key: 0,
                                                            src: e.icon,
                                                            class: c(
                                                              i(C)('image-icon')
                                                            )
                                                          },
                                                          null,
                                                          8,
                                                          ['src', 'class']
                                                        ))
                                                      : (o(),
                                                        a(
                                                          h,
                                                          {
                                                            key: 1,
                                                            class: c(
                                                              i(C)('icon', [
                                                                e.icon
                                                              ])
                                                            )
                                                          },
                                                          {
                                                            default: t(() => [
                                                              n(
                                                                x,
                                                                {
                                                                  name:
                                                                    S[e.icon] ||
                                                                    e.icon
                                                                },
                                                                null,
                                                                8,
                                                                ['name']
                                                              )
                                                            ]),
                                                            _: 2
                                                          },
                                                          1032,
                                                          ['class']
                                                        )),
                                                    e.name
                                                      ? (o(),
                                                        a(
                                                          A,
                                                          {
                                                            key: 2,
                                                            class: c(
                                                              i(C)('name')
                                                            )
                                                          },
                                                          {
                                                            default: t(() => [
                                                              p(m(e.name), 1)
                                                            ]),
                                                            _: 2
                                                          },
                                                          1032,
                                                          ['class']
                                                        ))
                                                      : k('', !0),
                                                    e.description
                                                      ? (o(),
                                                        a(
                                                          A,
                                                          {
                                                            key: 3,
                                                            class: c(
                                                              i(C)(
                                                                'option-description'
                                                              )
                                                            )
                                                          },
                                                          {
                                                            default: t(() => [
                                                              p(
                                                                m(
                                                                  e.description
                                                                ),
                                                                1
                                                              )
                                                            ]),
                                                            _: 2
                                                          },
                                                          1032,
                                                          ['class']
                                                        ))
                                                      : k('', !0)
                                                  ]),
                                                  _: 2
                                                },
                                                1032,
                                                ['class', 'onClick']
                                              )
                                            )
                                          ),
                                          128
                                        ))
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ['class']
                                  )
                                )
                              ),
                              128
                            ))
                          : (o(),
                            a(
                              h,
                              { key: 2, class: c(i(C)('options')) },
                              {
                                default: t(() => [
                                  (o(!0),
                                  d(
                                    u,
                                    null,
                                    y(
                                      e.options,
                                      (e, s) => (
                                        o(),
                                        a(
                                          h,
                                          {
                                            key: s,
                                            class: c([
                                              i(C)('option'),
                                              e.className,
                                              i(P)
                                            ]),
                                            onClick: () => D(e, s)
                                          },
                                          {
                                            default: t(() => [
                                              z(e.icon)
                                                ? (o(),
                                                  a(
                                                    g,
                                                    {
                                                      key: 0,
                                                      src: e.icon,
                                                      class: c(
                                                        i(C)('image-icon')
                                                      )
                                                    },
                                                    null,
                                                    8,
                                                    ['src', 'class']
                                                  ))
                                                : (o(),
                                                  a(
                                                    h,
                                                    {
                                                      key: 1,
                                                      class: c(
                                                        i(C)('icon', [e.icon])
                                                      )
                                                    },
                                                    {
                                                      default: t(() => [
                                                        n(
                                                          x,
                                                          {
                                                            name:
                                                              S[e.icon] ||
                                                              e.icon
                                                          },
                                                          null,
                                                          8,
                                                          ['name']
                                                        )
                                                      ]),
                                                      _: 2
                                                    },
                                                    1032,
                                                    ['class']
                                                  )),
                                              e.name
                                                ? (o(),
                                                  a(
                                                    A,
                                                    {
                                                      key: 2,
                                                      class: c(i(C)('name'))
                                                    },
                                                    {
                                                      default: t(() => [
                                                        p(m(e.name), 1)
                                                      ]),
                                                      _: 2
                                                    },
                                                    1032,
                                                    ['class']
                                                  ))
                                                : k('', !0),
                                              e.description
                                                ? (o(),
                                                  a(
                                                    A,
                                                    {
                                                      key: 3,
                                                      class: c(
                                                        i(C)(
                                                          'option-description'
                                                        )
                                                      )
                                                    },
                                                    {
                                                      default: t(() => [
                                                        p(m(e.description), 1)
                                                      ]),
                                                      _: 2
                                                    },
                                                    1032,
                                                    ['class']
                                                  ))
                                                : k('', !0)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ['class', 'onClick']
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
                            )),
                        n(
                          N,
                          {
                            type: 'button',
                            class: c(i(C)('cancel')),
                            onClick: Q
                          },
                          {
                            default: t(() => [
                              i(q).slots.cancel
                                ? r(e.$slots, 'cancel', { key: 0 }, void 0, !0)
                                : (o(),
                                  d(
                                    u,
                                    { key: 1 },
                                    [p(m(b.cancelText || '取消'), 1)],
                                    64
                                  ))
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
                  )
                ]),
                _: 3
              },
              8,
              [
                'show',
                'z-index',
                'overlay',
                'duration',
                'lock-scroll',
                'lazy-render',
                'before-close',
                'overlay-style',
                'overlay-class',
                'transition-appear',
                'close-on-click-overlay',
                'round',
                'close-on-popstate',
                'safe-area-inset-bottom'
              ]
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-4b6c2181']]
  ),
  $ = s({
    __name: 'shareSheet',
    setup(s) {
      const c = z(!1),
        r = z(!1),
        d = z(!1),
        p = z(!1),
        m = S(() => [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' }
        ]),
        u = S(() => [
          [
            { name: '微信', icon: 'wechat' },
            { name: '朋友圈', icon: 'wechat-moments' },
            { name: '微博', icon: 'weibo' },
            { name: 'QQ', icon: 'qq' }
          ],
          [
            { name: '复制链接', icon: 'link' },
            { name: '分享海报', icon: 'poster' },
            { name: '二维码', icon: 'qrcode' },
            { name: '小程序码', icon: 'weapp-qrcode' }
          ]
        ]),
        k = S(() => [
          {
            name: '名称',
            icon: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png'
          },
          { name: '名称', icon: 'zhihu' },
          { name: '名称', icon: 'linkedin' },
          { name: '名称', icon: 'facebook' }
        ]),
        y = S(() => [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: '复制链接', icon: 'link', description: '描述信息' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' }
        ]),
        h = (e) => {
          N(e.name),
            (c.value = !1),
            (r.value = !1),
            (d.value = !1),
            (p.value = !1)
        }
      return (s, v) => {
        const w = O(l('z-cell'), e),
          _ = O(l('z-share-sheet'), T),
          b = g('demo-block'),
          z = f,
          S = O(l('z-toast'), D),
          C = O(l('DemoPage'), Q)
        return (
          o(),
          a(
            C,
            { title: 'ShareSheet' },
            {
              default: t(() => [
                n(
                  z,
                  { class: 'demo-share-sheet' },
                  {
                    default: t(() => [
                      n(
                        b,
                        { title: '基础用法' },
                        {
                          default: t(() => [
                            n(w, {
                              'is-link': '',
                              title: '显示分享面板',
                              onClick: v[0] || (v[0] = (e) => (c.value = !0))
                            }),
                            n(
                              _,
                              {
                                show: c.value,
                                'onUpdate:show':
                                  v[1] || (v[1] = (e) => (c.value = e)),
                                title: '立即分享给好友',
                                options: i(m),
                                onSelect: h
                              },
                              null,
                              8,
                              ['show', 'options']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      n(
                        b,
                        { title: '展示多行选项' },
                        {
                          default: t(() => [
                            n(w, {
                              'is-link': '',
                              title: '显示分享面板',
                              onClick: v[2] || (v[2] = (e) => (d.value = !0))
                            }),
                            n(
                              _,
                              {
                                show: d.value,
                                'onUpdate:show':
                                  v[3] || (v[3] = (e) => (d.value = e)),
                                title: '立即分享给好友',
                                options: i(u),
                                onSelect: h
                              },
                              null,
                              8,
                              ['show', 'options']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      n(
                        b,
                        { card: '', title: '自定义图标' },
                        {
                          default: t(() => [
                            n(w, {
                              'is-link': '',
                              title: '显示分享面板',
                              onClick: v[4] || (v[4] = (e) => (p.value = !0))
                            }),
                            n(
                              _,
                              {
                                show: p.value,
                                'onUpdate:show':
                                  v[5] || (v[5] = (e) => (p.value = e)),
                                options: i(k),
                                onSelect: h
                              },
                              null,
                              8,
                              ['show', 'options']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      n(
                        b,
                        { title: '展示描述信息' },
                        {
                          default: t(() => [
                            n(w, {
                              'is-link': '',
                              title: '显示分享面板',
                              onClick: v[6] || (v[6] = (e) => (r.value = !0))
                            }),
                            n(
                              _,
                              {
                                show: r.value,
                                'onUpdate:show':
                                  v[7] || (v[7] = (e) => (r.value = e)),
                                title: '立即分享给好友',
                                options: i(y),
                                description: '描述信息',
                                onSelect: h
                              },
                              null,
                              8,
                              ['show', 'options']
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                n(S, { ref: 'zToast' }, null, 512)
              ]),
              _: 1
            }
          )
        )
      }
    }
  })
export { $ as default }
