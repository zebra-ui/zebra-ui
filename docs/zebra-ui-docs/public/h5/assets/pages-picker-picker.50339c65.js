import { _ as e } from './z-picker.ce3c705f.js'
import {
  d as t,
  k as a,
  m as l,
  G as i,
  o as u,
  c as o,
  w as n,
  a as s,
  i as m
} from './index-7fd204f3.js'
import { r as c, e as d, a as r } from './DemoPage.0bae30a9.js'
import { _ as v } from './z-field.7193b969.js'
import { _ as x } from './z-toast.a77377ba.js'
import { s as h } from './z-toast.44a3344c.js'
import './z-dialog.b209de9d.js'
import './useParent.5b9c05b5.js'
import './use-touch.1ac9fd53.js'
import './useChildren.fb2421ae.js'
import './z-cell.365e08ec.js'
import './index.389bd7d1.js'
import './use-id.c1b053ed.js'
const p = t({
  __name: 'picker',
  setup(t) {
    const p = [
        { text: '杭州', value: 'Hangzhou' },
        { text: '宁波', value: 'Ningbo' },
        { text: '温州', value: 'Wenzhou' },
        { text: '绍兴', value: 'Shaoxing' },
        { text: '湖州', value: 'Huzhou' }
      ],
      f = [
        [
          { text: '周一', value: 'Monday' },
          { text: '周二', value: 'Tuesday' },
          { text: '周三', value: 'Wednesday' },
          { text: '周四', value: 'Thursday' },
          { text: '周五', value: 'Friday' }
        ],
        [
          { text: '上午', value: 'Morning' },
          { text: '下午', value: 'Afternoon' },
          { text: '晚上', value: 'Evening' }
        ]
      ],
      y = [
        {
          text: '浙江',
          value: 'Zhejiang',
          children: [
            {
              text: '杭州',
              value: 'Hangzhou',
              children: [
                { text: '西湖区', value: 'Xihu' },
                { text: '余杭区', value: 'Yuhang' }
              ]
            },
            {
              text: '温州',
              value: 'Wenzhou',
              children: [
                { text: '鹿城区', value: 'Lucheng' },
                { text: '瓯海区', value: 'Ouhai' }
              ]
            }
          ]
        },
        {
          text: '福建',
          value: 'Fujian',
          children: [
            {
              text: '福州',
              value: 'Fuzhou',
              children: [
                { text: '鼓楼区', value: 'Gulou' },
                { text: '台江区', value: 'Taijiang' }
              ]
            },
            {
              text: '厦门',
              value: 'Xiamen',
              children: [
                { text: '思明区', value: 'Siming' },
                { text: '海沧区', value: 'Haicang' }
              ]
            }
          ]
        }
      ],
      g = [
        { text: '杭州', value: 'Hangzhou', disabled: !0 },
        { text: '宁波', value: 'Ningbo' },
        { text: '温州', value: 'Wenzhou' }
      ],
      z = [
        {
          cityName: '浙江',
          cities: [
            {
              cityName: '杭州',
              cities: [{ cityName: '西湖区' }, { cityName: '余杭区' }]
            },
            {
              cityName: '温州',
              cities: [{ cityName: '鹿城区' }, { cityName: '瓯海区' }]
            }
          ]
        },
        {
          cityName: '福建',
          cities: [
            {
              cityName: '福州',
              cities: [{ cityName: '鼓楼区' }, { cityName: '台江区' }]
            },
            {
              cityName: '厦门',
              cities: [{ cityName: '思明区' }, { cityName: '海沧区' }]
            }
          ]
        }
      ],
      j = { text: 'cityName', value: 'cityName', children: 'cities' },
      N = a(!0),
      _ = a(['Wenzhou']),
      k = ({ selectedValues: e }) => {
        h(`当前值: ${e.join(',')}`)
      },
      C = ({ selectedValues: e }) => {
        h(`当前值: ${e.join(',')}`)
      },
      V = () => h('取消'),
      b = a(''),
      H = a(!1),
      W = ({ selectedOptions: e }) => {
        ;(H.value = !1), (b.value = e[0].text)
      }
    return (t, a) => {
      const h = c(l('z-picker'), e),
        w = i('demo-block'),
        P = c(l('z-field'), v),
        T = c(l('z-popup'), d),
        F = m,
        U = c(l('z-toast'), x),
        D = c(l('DemoPage'), r)
      return (
        u(),
        o(
          D,
          { title: 'Picker' },
          {
            default: n(() => [
              s(
                F,
                { class: 'demo-picker' },
                {
                  default: n(() => [
                    s(
                      w,
                      { title: '基础用法' },
                      {
                        default: n(() => [
                          s(h, {
                            title: '标题',
                            columns: p,
                            onConfirm: k,
                            onCancel: V,
                            onChange: C
                          })
                        ]),
                        _: 1
                      }
                    ),
                    s(
                      w,
                      { title: '搭配弹出层使用' },
                      {
                        default: n(() => [
                          s(
                            P,
                            {
                              modelValue: b.value,
                              'onUpdate:modelValue':
                                a[0] || (a[0] = (e) => (b.value = e)),
                              'is-link': '',
                              readonly: '',
                              label: '城市',
                              placeholder: '选择城市',
                              onClick: a[1] || (a[1] = (e) => (H.value = !0)),
                              onClickInput:
                                a[2] || (a[2] = (e) => (H.value = !0))
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          s(
                            T,
                            {
                              show: H.value,
                              'onUpdate:show':
                                a[4] || (a[4] = (e) => (H.value = e)),
                              round: '',
                              position: 'bottom'
                            },
                            {
                              default: n(() => [
                                s(h, {
                                  columns: p,
                                  onCancel:
                                    a[3] || (a[3] = (e) => (H.value = !1)),
                                  onConfirm: W
                                })
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
                    s(
                      w,
                      { title: '双向绑定' },
                      {
                        default: n(() => [
                          s(
                            h,
                            {
                              modelValue: _.value,
                              'onUpdate:modelValue':
                                a[5] || (a[5] = (e) => (_.value = e)),
                              title: '标题',
                              columns: p
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    s(
                      w,
                      { title: '多列选择' },
                      {
                        default: n(() => [s(h, { title: '标题', columns: f })]),
                        _: 1
                      }
                    ),
                    s(
                      w,
                      { title: '级联选择' },
                      {
                        default: n(() => [s(h, { title: '标题', columns: y })]),
                        _: 1
                      }
                    ),
                    s(
                      w,
                      { title: '禁用选项' },
                      { default: n(() => [s(h, { columns: g })]), _: 1 }
                    ),
                    s(
                      w,
                      { title: '加载状态' },
                      {
                        default: n(() => [
                          s(h, { loading: N.value }, null, 8, ['loading'])
                        ]),
                        _: 1
                      }
                    ),
                    s(
                      w,
                      { title: '自定义 Columns 的结构' },
                      {
                        default: n(() => [
                          s(h, {
                            title: '标题',
                            columns: z,
                            'columns-field-names': j
                          })
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                }
              ),
              s(U, { ref: 'zToast' }, null, 512)
            ]),
            _: 1
          }
        )
      )
    }
  }
})
export { p as default }
