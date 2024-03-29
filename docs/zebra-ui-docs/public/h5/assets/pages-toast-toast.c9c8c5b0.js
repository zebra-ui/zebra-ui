import { _ as e } from './z-cell.365e08ec.js'
import {
  d as s,
  k as i,
  m as t,
  G as a,
  o as l,
  c as o,
  w as n,
  a as r,
  E as c,
  b as m,
  i as d,
  _ as k
} from './index-7fd204f3.js'
import { r as u, _ as f, b as g, a as _ } from './DemoPage.0bae30a9.js'
import { _ as p } from './z-toast.a77377ba.js'
import { s as b, a as C, b as z, c as w, d as h } from './z-toast.44a3344c.js'
import './z-dialog.b209de9d.js'
const v = k(
  s({
    __name: 'toast',
    setup(s) {
      const k = i(!1)
      return (s, i) => {
        const v = u(t('z-cell'), e),
          j = a('demo-block'),
          T = u(t('z-icon'), f),
          y = d,
          I = u(t('z-button'), g),
          x = u(t('z-toast'), p),
          B = u(t('DemoPage'), _)
        return (
          l(),
          o(
            B,
            { title: 'Toast' },
            {
              default: n(() => [
                r(
                  y,
                  { class: 'demo-toast' },
                  {
                    default: n(() => [
                      r(
                        j,
                        { title: '基础用法' },
                        {
                          default: n(() => [
                            r(v, {
                              title: '文字提示',
                              'is-link': '',
                              onClick: i[0] || (i[0] = (e) => c(b)('文字提示'))
                            }),
                            r(v, {
                              title: '加载提示',
                              'is-link': '',
                              onClick:
                                i[1] ||
                                (i[1] = (e) =>
                                  c(C)({
                                    message: '加载中...',
                                    forbidClick: !0
                                  }))
                            }),
                            r(v, {
                              title: '成功提示',
                              'is-link': '',
                              onClick: i[2] || (i[2] = (e) => c(z)('成功文案'))
                            }),
                            r(v, {
                              title: '失败提示',
                              'is-link': '',
                              onClick: i[3] || (i[3] = (e) => c(w)('失败文案'))
                            })
                          ]),
                          _: 1
                        }
                      ),
                      r(
                        j,
                        { title: '自定义图标' },
                        {
                          default: n(() => [
                            r(v, {
                              title: '自定义图标',
                              'is-link': '',
                              onClick:
                                i[4] ||
                                (i[4] = (e) =>
                                  c(b)({
                                    message: '自定义图标',
                                    icon: 'search',
                                    duration: 0
                                  }))
                            }),
                            r(v, {
                              title: '自定义图片',
                              'is-link': '',
                              onClick:
                                i[5] ||
                                (i[5] = (e) =>
                                  c(b)({
                                    message: '自定义图片',
                                    icon: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png'
                                  }))
                            }),
                            r(v, {
                              title: '自定义加载图标',
                              'is-link': '',
                              onClick:
                                i[6] ||
                                (i[6] = (e) =>
                                  c(C)({
                                    message: '加载中...',
                                    forbidClick: !0,
                                    loadingType: 'spinner'
                                  }))
                            })
                          ]),
                          _: 1
                        }
                      ),
                      r(
                        j,
                        { title: '自定义位置' },
                        {
                          default: n(() => [
                            r(v, {
                              title: '顶部展示',
                              'is-link': '',
                              onClick:
                                i[7] ||
                                (i[7] = (e) =>
                                  c(b)({
                                    message: '顶部展示',
                                    position: 'top'
                                  }))
                            }),
                            r(v, {
                              title: '底部展示',
                              'is-link': '',
                              onClick:
                                i[8] ||
                                (i[8] = (e) =>
                                  c(b)({
                                    message: '底部展示',
                                    position: 'bottom'
                                  }))
                            })
                          ]),
                          _: 1
                        }
                      ),
                      r(
                        j,
                        { title: '文字换行方式' },
                        {
                          default: n(() => [
                            r(v, {
                              title: '换行时截断单词',
                              'is-link': '',
                              onClick:
                                i[9] ||
                                (i[9] = (e) =>
                                  c(b)({
                                    message:
                                      'This message will contain a incomprehensibilities long word.',
                                    wordBreak: 'break-all'
                                  }))
                            }),
                            r(v, {
                              title: '换行时不截断单词',
                              'is-link': '',
                              onClick:
                                i[10] ||
                                (i[10] = (e) =>
                                  c(b)({
                                    message:
                                      'This message will contain a incomprehensibilities long word.',
                                    wordBreak: 'break-word'
                                  }))
                            })
                          ]),
                          _: 1
                        }
                      ),
                      r(
                        j,
                        { title: '动态更新提示' },
                        {
                          default: n(() => [
                            r(v, {
                              title: '动态更新提示',
                              'is-link': '',
                              onClick:
                                i[11] ||
                                (i[11] = (e) =>
                                  (() => {
                                    const e = C({
                                      duration: 0,
                                      forbidClick: !0,
                                      message: '倒计时 3 秒'
                                    })
                                    let s = 3
                                    const i = setInterval(() => {
                                      s--,
                                        s
                                          ? (e.state.message = `倒计时 ${s} 秒`)
                                          : (clearInterval(i), h())
                                    }, 1e3)
                                  })())
                            })
                          ]),
                          _: 1
                        }
                      ),
                      r(
                        j,
                        { title: '使用组件' },
                        {
                          default: n(() => [
                            r(v, {
                              title: '使用组件',
                              'is-link': '',
                              onClick: i[12] || (i[12] = (e) => (k.value = !0))
                            }),
                            r(
                              x,
                              {
                                show: k.value,
                                'onUpdate:show':
                                  i[15] || (i[15] = (e) => (k.value = e)),
                                duration: 0
                              },
                              {
                                message: n(() => [
                                  r(
                                    y,
                                    { class: 'toast-custom' },
                                    {
                                      default: n(() => [
                                        r(T, {
                                          name: 'error',
                                          color: 'var(--z-orange)'
                                        }),
                                        r(y, null, {
                                          default: n(() => [
                                            m(' 这是一段内容确定删除吗？ ')
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  r(
                                    y,
                                    { class: 'toast-button' },
                                    {
                                      default: n(() => [
                                        r(
                                          I,
                                          {
                                            type: 'primary',
                                            size: 'mini',
                                            onClick:
                                              i[13] ||
                                              (i[13] = (e) => (k.value = !1))
                                          },
                                          {
                                            default: n(() => [m('确认')]),
                                            _: 1
                                          }
                                        ),
                                        r(
                                          I,
                                          {
                                            size: 'mini',
                                            onClick:
                                              i[14] ||
                                              (i[14] = (e) => (k.value = !1))
                                          },
                                          {
                                            default: n(() => [m('取消')]),
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
                              ['show']
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                r(x, { ref: 'zToast' }, null, 512)
              ]),
              _: 1
            }
          )
        )
      }
    }
  }),
  [['__scopeId', 'data-v-db6db4e1']]
)
export { v as default }
