import {
  d as e,
  k as s,
  $ as l,
  m as a,
  o as t,
  c as r,
  w as u,
  a as o,
  e as i,
  r as d,
  F as m,
  y as p,
  q as f,
  i as n,
  _ as c
} from './index-7fd204f3.js'
import { _ as h } from './z-cell.365e08ec.js'
import { a0 as z, r as _, a as g } from './DemoPage.0bae30a9.js'
import { _ as j } from './z-pull-refresh.79093113.js'
import { _ as v, a as b } from './z-tabs.8d3e6868.js'
import { _ as V } from './z-toast.a77377ba.js'
import { s as w } from './z-toast.44a3344c.js'
import './use-touch.1ac9fd53.js'
import './useParent.5b9c05b5.js'
import './use-id.c1b053ed.js'
import './z-sticky.e6c39ae3.js'
import './useChildren.fb2421ae.js'
const y = c(
  e({
    __name: 'pullRefresh',
    setup(e) {
      const c = s(0),
        y = s(!1)
      z((e) => {
        l('z-pull-refresh-refresh1', e),
          l('z-pull-refresh-refresh2', e),
          l('z-pull-refresh-refresh3', e)
      })
      const k = (e) => {
        setTimeout(() => {
          e && w('刷新成功'), (y.value = !1), c.value++
        }, 1e3)
      }
      return (e, s) => {
        const l = _(a('z-cell'), h),
          c = _(a('z-pull-refresh'), j),
          z = _(a('z-tab'), v),
          w = f,
          R = _(a('z-tabs'), b),
          $ = n,
          P = _(a('z-toast'), V),
          x = _(a('DemoPage'), g)
        return (
          t(),
          r(
            x,
            { title: 'PullRefresh' },
            {
              default: u(() => [
                o(
                  $,
                  { class: 'demo-pull-refresh' },
                  {
                    default: u(() => [
                      o(R, null, {
                        default: u(() => [
                          o(
                            z,
                            { title: '基础用法' },
                            {
                              default: u(() => [
                                o(
                                  c,
                                  {
                                    id: 'refresh1',
                                    modelValue: y.value,
                                    'onUpdate:modelValue':
                                      s[0] || (s[0] = (e) => (y.value = e)),
                                    onRefresh: s[1] || (s[1] = (e) => k(!0))
                                  },
                                  {
                                    default: u(() => [
                                      (t(),
                                      i(
                                        m,
                                        null,
                                        d(30, (e) =>
                                          o(
                                            l,
                                            {
                                              key: e,
                                              title: `单元格${e}`,
                                              value: '内容'
                                            },
                                            null,
                                            8,
                                            ['title']
                                          )
                                        ),
                                        64
                                      ))
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['modelValue']
                                )
                              ]),
                              _: 1
                            }
                          ),
                          o(
                            z,
                            { title: '成功提示' },
                            {
                              default: u(() => [
                                o(
                                  c,
                                  {
                                    id: 'refresh2',
                                    modelValue: y.value,
                                    'onUpdate:modelValue':
                                      s[2] || (s[2] = (e) => (y.value = e)),
                                    'success-text': '刷新成功',
                                    onRefresh: s[3] || (s[3] = (e) => k(!1))
                                  },
                                  {
                                    default: u(() => [
                                      (t(),
                                      i(
                                        m,
                                        null,
                                        d(10, (e) =>
                                          o(
                                            l,
                                            {
                                              key: e,
                                              title: `单元格${e}`,
                                              value: '内容'
                                            },
                                            null,
                                            8,
                                            ['title']
                                          )
                                        ),
                                        64
                                      ))
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['modelValue']
                                )
                              ]),
                              _: 1
                            }
                          ),
                          o(
                            z,
                            { title: '自定义提示' },
                            {
                              default: u(() => [
                                o(
                                  c,
                                  {
                                    id: 'refresh3',
                                    modelValue: y.value,
                                    'onUpdate:modelValue':
                                      s[4] || (s[4] = (e) => (y.value = e)),
                                    'head-height': '80',
                                    onRefresh: s[5] || (s[5] = (e) => k(!0))
                                  },
                                  {
                                    pulling: u(({ distance: e }) => [
                                      o(
                                        w,
                                        {
                                          class: 'doge',
                                          src: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
                                          style: p({
                                            transform: `scale(${e / 80})`
                                          })
                                        },
                                        null,
                                        8,
                                        ['style']
                                      )
                                    ]),
                                    loosing: u(() => [
                                      o(w, {
                                        src: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
                                        class: 'doge'
                                      })
                                    ]),
                                    loading: u(() => [
                                      o(w, {
                                        src: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
                                        class: 'doge'
                                      })
                                    ]),
                                    default: u(() => [
                                      (t(),
                                      i(
                                        m,
                                        null,
                                        d(2, (e) =>
                                          o(
                                            l,
                                            {
                                              key: e,
                                              title: `单元格${e}`,
                                              value: '内容'
                                            },
                                            null,
                                            8,
                                            ['title']
                                          )
                                        ),
                                        64
                                      ))
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['modelValue']
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
                ),
                o(P, { ref: 'zToast' }, null, 512)
              ]),
              _: 1
            }
          )
        )
      }
    }
  }),
  [['__scopeId', 'data-v-aaa373ed']]
)
export { y as default }
