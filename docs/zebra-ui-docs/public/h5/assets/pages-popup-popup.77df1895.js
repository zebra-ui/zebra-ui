import { _ as o } from './z-cell.365e08ec.js'
import {
  d as l,
  k as e,
  m as t,
  G as s,
  o as i,
  c as a,
  w as n,
  a as u,
  b as h,
  E as c,
  i as p,
  _ as d
} from './index-7fd204f3.js'
import { r as v, e as w, a as m } from './DemoPage.0bae30a9.js'
import { _ as k } from './z-toast.a77377ba.js'
import { s as r } from './z-toast.44a3344c.js'
import './z-dialog.b209de9d.js'
const f = d(
  l({
    __name: 'popup',
    setup(l) {
      const d = e(!1),
        f = e(!1),
        _ = e(!1),
        C = e(!1),
        b = e(!1),
        g = e(!1),
        y = e(!1),
        U = e(!1),
        z = e(!1),
        j = e(!1),
        O = e(!1),
        P = e(!1),
        x = () => {
          r('click-overlay')
        },
        D = () => {
          r('click-close-icon')
        }
      return (l, e) => {
        const I = v(t('z-cell'), o),
          E = p,
          G = v(t('z-popup'), w),
          T = s('demo-block'),
          q = v(t('z-toast'), k),
          A = v(t('DemoPage'), m)
        return (
          i(),
          a(
            A,
            { title: 'Popup' },
            {
              default: n(() => [
                u(
                  E,
                  { class: 'demo-popup' },
                  {
                    default: n(() => [
                      u(
                        T,
                        { title: '基础用法' },
                        {
                          default: n(() => [
                            u(I, {
                              title: '展示弹出层',
                              'is-link': '',
                              onClick: e[0] || (e[0] = (o) => (d.value = !0))
                            }),
                            u(
                              G,
                              {
                                show: d.value,
                                'onUpdate:show':
                                  e[1] || (e[1] = (o) => (d.value = o))
                              },
                              {
                                default: n(() => [
                                  u(
                                    E,
                                    { class: 'popup-content' },
                                    { default: n(() => [h(' 内容 ')]), _: 1 }
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
                      u(
                        T,
                        { title: '弹出位置' },
                        {
                          default: n(() => [
                            u(I, {
                              title: '顶部弹出',
                              'is-link': '',
                              onClick: e[2] || (e[2] = (o) => (f.value = !0))
                            }),
                            u(I, {
                              title: '底部弹出',
                              'is-link': '',
                              onClick: e[3] || (e[3] = (o) => (_.value = !0))
                            }),
                            u(I, {
                              title: '左侧弹出',
                              'is-link': '',
                              onClick: e[4] || (e[4] = (o) => (C.value = !0))
                            }),
                            u(I, {
                              title: '右侧弹出',
                              'is-link': '',
                              onClick: e[5] || (e[5] = (o) => (b.value = !0))
                            }),
                            u(
                              G,
                              {
                                show: f.value,
                                'onUpdate:show':
                                  e[6] || (e[6] = (o) => (f.value = o)),
                                position: 'top',
                                'custom-style': { height: '30%' }
                              },
                              null,
                              8,
                              ['show']
                            ),
                            u(
                              G,
                              {
                                show: _.value,
                                'onUpdate:show':
                                  e[7] || (e[7] = (o) => (_.value = o)),
                                position: 'bottom',
                                'custom-style': { height: '30%' }
                              },
                              null,
                              8,
                              ['show']
                            ),
                            u(
                              G,
                              {
                                show: C.value,
                                'onUpdate:show':
                                  e[8] || (e[8] = (o) => (C.value = o)),
                                position: 'left',
                                'custom-style': { width: '30%', height: '100%' }
                              },
                              null,
                              8,
                              ['show']
                            ),
                            u(
                              G,
                              {
                                show: b.value,
                                'onUpdate:show':
                                  e[9] || (e[9] = (o) => (b.value = o)),
                                position: 'right',
                                'custom-style': { width: '30%', height: '100%' }
                              },
                              null,
                              8,
                              ['show']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      u(
                        T,
                        { title: '关闭图标' },
                        {
                          default: n(() => [
                            u(I, {
                              title: '关闭图标',
                              'is-link': '',
                              onClick: e[10] || (e[10] = (o) => (g.value = !0))
                            }),
                            u(I, {
                              title: '自定义图标',
                              'is-link': '',
                              onClick: e[11] || (e[11] = (o) => (y.value = !0))
                            }),
                            u(I, {
                              title: '图标位置',
                              'is-link': '',
                              onClick: e[12] || (e[12] = (o) => (U.value = !0))
                            }),
                            u(
                              G,
                              {
                                show: g.value,
                                'onUpdate:show':
                                  e[13] || (e[13] = (o) => (g.value = o)),
                                closeable: '',
                                position: 'bottom',
                                'custom-style': { height: '30%' }
                              },
                              null,
                              8,
                              ['show']
                            ),
                            u(
                              G,
                              {
                                show: y.value,
                                'onUpdate:show':
                                  e[14] || (e[14] = (o) => (y.value = o)),
                                closeable: '',
                                'close-icon': 'close-circle',
                                position: 'bottom',
                                'custom-style': { height: '30%' }
                              },
                              null,
                              8,
                              ['show']
                            ),
                            u(
                              G,
                              {
                                show: U.value,
                                'onUpdate:show':
                                  e[15] || (e[15] = (o) => (U.value = o)),
                                closeable: '',
                                'close-icon-position': 'top-left',
                                position: 'bottom',
                                'custom-style': { height: '30%' }
                              },
                              null,
                              8,
                              ['show']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      u(
                        T,
                        { title: '圆角弹窗' },
                        {
                          default: n(() => [
                            u(I, {
                              title: '圆角居中',
                              'is-link': '',
                              onClick: e[16] || (e[16] = (o) => (z.value = !0))
                            }),
                            u(I, {
                              title: '圆角底部',
                              'is-link': '',
                              onClick: e[17] || (e[17] = (o) => (j.value = !0))
                            }),
                            u(
                              G,
                              {
                                show: z.value,
                                'onUpdate:show':
                                  e[18] || (e[18] = (o) => (z.value = o)),
                                round: ''
                              },
                              {
                                default: n(() => [
                                  u(
                                    E,
                                    { class: 'popup-content' },
                                    { default: n(() => [h(' 内容 ')]), _: 1 }
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['show']
                            ),
                            u(
                              G,
                              {
                                show: j.value,
                                'onUpdate:show':
                                  e[19] || (e[19] = (o) => (j.value = o)),
                                round: '',
                                position: 'bottom',
                                'custom-style': { height: '30%' }
                              },
                              null,
                              8,
                              ['show']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      u(
                        T,
                        { title: '事件' },
                        {
                          default: n(() => [
                            u(I, {
                              title: '点击事件',
                              'is-link': '',
                              onClick: e[20] || (e[20] = (o) => (O.value = !0))
                            }),
                            u(I, {
                              title: '显示关闭事件',
                              'is-link': '',
                              onClick: e[21] || (e[21] = (o) => (P.value = !0))
                            }),
                            u(
                              G,
                              {
                                show: O.value,
                                'onUpdate:show':
                                  e[22] || (e[22] = (o) => (O.value = o)),
                                position: 'bottom',
                                closeable: '',
                                'custom-style': { height: '30%' },
                                onClickOverlay: x,
                                onClickCloseIcon: D
                              },
                              null,
                              8,
                              ['show']
                            ),
                            u(
                              G,
                              {
                                show: P.value,
                                'onUpdate:show':
                                  e[23] || (e[23] = (o) => (P.value = o)),
                                position: 'bottom',
                                closeable: '',
                                'custom-style': { height: '30%' },
                                onOpen: e[24] || (e[24] = (o) => c(r)('open')),
                                onOpened:
                                  e[25] || (e[25] = (o) => c(r)('opened')),
                                onClose:
                                  e[26] || (e[26] = (o) => c(r)('close')),
                                onClosed:
                                  e[27] || (e[27] = (o) => c(r)('closed'))
                              },
                              null,
                              8,
                              ['show']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      u(q, { ref: 'zToast' }, null, 512)
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
  [['__scopeId', 'data-v-213998de']]
)
export { f as default }
