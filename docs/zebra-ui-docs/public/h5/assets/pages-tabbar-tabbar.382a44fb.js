import { _ as e, a } from './z-tabbar.119e2831.js'
import {
  d as l,
  k as t,
  m as d,
  G as o,
  o as u,
  c as i,
  w as n,
  a as s,
  b as f,
  C as c,
  q as m,
  i as _,
  _ as r
} from './index-7fd204f3.js'
import { r as b, a as g } from './DemoPage.0bae30a9.js'
import { _ as V } from './z-toast.a77377ba.js'
import { s as h } from './z-toast.44a3344c.js'
import './useParent.5b9c05b5.js'
import './useChildren.fb2421ae.js'
const p = r(
  l({
    __name: 'tabbar',
    setup(l) {
      const r = t(0),
        p = t(0),
        v = t(0),
        x = t(0),
        z = t(0),
        U = t(0),
        j = t(0),
        k = t(0),
        C = t('home'),
        P = 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png',
        D = 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-noselect.png',
        T = (e) => {
          h(`标签 ${e + 1}`)
        }
      return (l, t) => {
        const h = b(d('z-tabbar-item'), e),
          q = b(d('z-tabbar'), a),
          w = o('demo-block'),
          G = c,
          I = m,
          $ = _,
          y = b(d('z-toast'), V),
          A = b(d('DemoPage'), g)
        return (
          u(),
          i(
            A,
            { title: 'Tabbar' },
            {
              default: n(() => [
                s(
                  $,
                  { class: 'demo-tabbar' },
                  {
                    default: n(() => [
                      s(
                        w,
                        { title: '基础用法' },
                        {
                          default: n(() => [
                            s(
                              q,
                              {
                                fixed: !1,
                                modelValue: r.value,
                                'onUpdate:modelValue':
                                  t[0] || (t[0] = (e) => (r.value = e))
                              },
                              {
                                default: n(() => [
                                  s(
                                    h,
                                    { icon: 'home' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'search' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'bell' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'setting' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  )
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
                      s(
                        w,
                        { title: '通过名称匹配' },
                        {
                          default: n(() => [
                            s(
                              q,
                              {
                                fixed: !1,
                                modelValue: C.value,
                                'onUpdate:modelValue':
                                  t[1] || (t[1] = (e) => (C.value = e))
                              },
                              {
                                default: n(() => [
                                  s(
                                    h,
                                    { name: 'home', icon: 'home' },
                                    { default: n(() => [f(' 标签 ')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { name: 'search', icon: 'search' },
                                    { default: n(() => [f(' 标签 ')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { name: 'friends', icon: 'bell' },
                                    { default: n(() => [f(' 标签 ')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { name: 'setting', icon: 'setting' },
                                    { default: n(() => [f(' 标签 ')]), _: 1 }
                                  )
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
                      s(
                        w,
                        { title: '徽标提示' },
                        {
                          default: n(() => [
                            s(
                              q,
                              {
                                fixed: !1,
                                modelValue: p.value,
                                'onUpdate:modelValue':
                                  t[2] || (t[2] = (e) => (p.value = e))
                              },
                              {
                                default: n(() => [
                                  s(
                                    h,
                                    { icon: 'home' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'search', dot: '' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'bell', badge: '5' },
                                    { default: n(() => [f(' 标签 ')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'setting', badge: '20' },
                                    { default: n(() => [f(' 标签 ')]), _: 1 }
                                  )
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
                      s(
                        w,
                        { title: '自定义图标' },
                        {
                          default: n(() => [
                            s(
                              q,
                              {
                                fixed: !1,
                                modelValue: v.value,
                                'onUpdate:modelValue':
                                  t[3] || (t[3] = (e) => (v.value = e))
                              },
                              {
                                default: n(() => [
                                  s(
                                    h,
                                    { badge: '3' },
                                    {
                                      icon: n((e) => [
                                        s(
                                          I,
                                          {
                                            class: 'image',
                                            src: e.active ? P : D
                                          },
                                          null,
                                          8,
                                          ['src']
                                        )
                                      ]),
                                      default: n(() => [
                                        s(G, null, {
                                          default: n(() => [f('自定义')]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  s(
                                    h,
                                    { icon: 'search' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'setting' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  )
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
                      s(
                        w,
                        { title: '自定义颜色' },
                        {
                          default: n(() => [
                            s(
                              q,
                              {
                                fixed: !1,
                                modelValue: x.value,
                                'onUpdate:modelValue':
                                  t[4] || (t[4] = (e) => (x.value = e)),
                                'active-color': '#ee0a24'
                              },
                              {
                                default: n(() => [
                                  s(
                                    h,
                                    { icon: 'home' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'search' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'bell' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'setting' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  )
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
                      s(
                        w,
                        { title: '监听切换事件' },
                        {
                          default: n(() => [
                            s(
                              q,
                              {
                                fixed: !1,
                                modelValue: z.value,
                                'onUpdate:modelValue':
                                  t[5] || (t[5] = (e) => (z.value = e)),
                                onChange: T
                              },
                              {
                                default: n(() => [
                                  s(
                                    h,
                                    { icon: 'home' },
                                    { default: n(() => [f('标签 1')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'search' },
                                    { default: n(() => [f('标签 2')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'bell' },
                                    { default: n(() => [f('标签 3')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'setting' },
                                    { default: n(() => [f('标签 4')]), _: 1 }
                                  )
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
                      s(
                        w,
                        { title: '背景' },
                        {
                          default: n(() => [
                            s(
                              q,
                              {
                                fixed: !1,
                                modelValue: U.value,
                                'onUpdate:modelValue':
                                  t[6] || (t[6] = (e) => (U.value = e)),
                                background: ''
                              },
                              {
                                default: n(() => [
                                  s(
                                    h,
                                    { icon: 'home' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'search' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'bell' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'setting', badge: '5' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  )
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
                      s(
                        w,
                        { title: '圆角' },
                        {
                          default: n(() => [
                            s(
                              q,
                              {
                                fixed: !1,
                                modelValue: j.value,
                                'onUpdate:modelValue':
                                  t[7] || (t[7] = (e) => (j.value = e)),
                                float: '',
                                background: ''
                              },
                              {
                                default: n(() => [
                                  s(
                                    h,
                                    { icon: 'home' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'search' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'bell' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'setting', badge: '5' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  )
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
                      s(
                        w,
                        { title: '圆角悬浮' },
                        {
                          default: n(() => [
                            s(
                              q,
                              {
                                fixed: !0,
                                placeholder: '',
                                modelValue: k.value,
                                'onUpdate:modelValue':
                                  t[8] || (t[8] = (e) => (k.value = e)),
                                float: '',
                                background: ''
                              },
                              {
                                default: n(() => [
                                  s(
                                    h,
                                    { icon: 'home' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'search' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'bell' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  ),
                                  s(
                                    h,
                                    { icon: 'setting', badge: '5' },
                                    { default: n(() => [f('标签')]), _: 1 }
                                  )
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
                  }
                ),
                s(y, { ref: 'zToast' }, null, 512)
              ]),
              _: 1
            }
          )
        )
      }
    }
  }),
  [['__scopeId', 'data-v-7bff48d1']]
)
export { p as default }
