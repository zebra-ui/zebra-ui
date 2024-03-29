import { _ as a } from './z-area.vue_vue_type_script_setup_true_lang.477f3be6.js'
import {
  d as e,
  k as t,
  m as l,
  G as s,
  o as r,
  c as i,
  w as o,
  a as u,
  E as m,
  i as d
} from './index-7fd204f3.js'
import { r as n, a as p } from './DemoPage.0bae30a9.js'
import { a as _ } from './area.6ad1509c.js'
import './z-picker.ce3c705f.js'
import './useParent.5b9c05b5.js'
import './use-touch.1ac9fd53.js'
import './useChildren.fb2421ae.js'
const c = e({
  __name: 'area',
  setup(e) {
    const c = t('330302')
    return (e, t) => {
      const f = n(l('z-area'), a),
        j = s('demo-block'),
        v = d,
        g = n(l('DemoPage'), p)
      return (
        r(),
        i(
          g,
          { title: 'Area' },
          {
            default: o(() => [
              u(
                v,
                { class: 'demo-area' },
                {
                  default: o(() => [
                    u(
                      j,
                      { title: '基础用法' },
                      {
                        default: o(() => [
                          u(f, { title: '标题', 'area-list': m(_) }, null, 8, [
                            'area-list'
                          ])
                        ]),
                        _: 1
                      }
                    ),
                    u(
                      j,
                      { title: '控制选中项' },
                      {
                        default: o(() => [
                          u(
                            f,
                            {
                              modelValue: c.value,
                              'onUpdate:modelValue':
                                t[0] || (t[0] = (a) => (c.value = a)),
                              title: '标题',
                              'area-list': m(_)
                            },
                            null,
                            8,
                            ['modelValue', 'area-list']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    u(
                      j,
                      { title: '配置显示列' },
                      {
                        default: o(() => [
                          u(
                            f,
                            {
                              title: '标题',
                              'area-list': m(_),
                              'columns-num': 2
                            },
                            null,
                            8,
                            ['area-list']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    u(
                      j,
                      { title: '配置列占位提示文字' },
                      {
                        default: o(() => [
                          u(
                            f,
                            {
                              title: '标题',
                              'area-list': m(_),
                              'columns-placeholder': [
                                '请选择',
                                '请选择',
                                '请选择'
                              ]
                            },
                            null,
                            8,
                            ['area-list']
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
      )
    }
  }
})
export { c as default }
