import { _ as e } from './z-tag.7271e54a.js'
import {
  d as t,
  k as a,
  m as l,
  G as u,
  o as i,
  c as r,
  w as s,
  a as _,
  b as d,
  i as o
} from './index-7fd204f3.js'
import { r as m, a as p } from './DemoPage.0bae30a9.js'
import { _ as f } from './z-cell.365e08ec.js'
const y = t({
  __name: 'tag',
  setup(t) {
    const y = a(!0),
      n = () => {
        y.value = !1
      }
    return (t, a) => {
      const c = m(l('z-tag'), e),
        v = m(l('z-cell'), f),
        g = u('demo-block'),
        z = o,
        w = m(l('DemoPage'), p)
      return (
        i(),
        r(
          w,
          { title: 'Tag' },
          {
            default: s(() => [
              _(
                z,
                { class: 'demo-tag' },
                {
                  default: s(() => [
                    _(
                      g,
                      { title: '基础用法' },
                      {
                        default: s(() => [
                          _(
                            v,
                            { title: 'primary类型' },
                            {
                              value: s(() => [
                                _(
                                  c,
                                  { type: 'primary' },
                                  { default: s(() => [d('标签')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          _(
                            v,
                            { title: 'success类型' },
                            {
                              value: s(() => [
                                _(
                                  c,
                                  { type: 'success' },
                                  { default: s(() => [d('标签')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          _(
                            v,
                            { title: 'danger类型' },
                            {
                              value: s(() => [
                                _(
                                  c,
                                  { type: 'danger' },
                                  { default: s(() => [d('标签')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          _(
                            v,
                            { title: 'warning类型' },
                            {
                              value: s(() => [
                                _(
                                  c,
                                  { type: 'warning' },
                                  { default: s(() => [d('标签')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    _(
                      g,
                      { title: '样式风格' },
                      {
                        default: s(() => [
                          _(
                            v,
                            { title: '空心样式' },
                            {
                              value: s(() => [
                                _(
                                  c,
                                  { plain: '', type: 'primary' },
                                  { default: s(() => [d('标签')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          _(
                            v,
                            { title: '圆角样式' },
                            {
                              value: s(() => [
                                _(
                                  c,
                                  { round: '', type: 'primary' },
                                  { default: s(() => [d('标签')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          _(
                            v,
                            { title: '标记样式' },
                            {
                              value: s(() => [
                                _(
                                  c,
                                  { mark: '', type: 'primary' },
                                  { default: s(() => [d('标签')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          _(
                            v,
                            { title: '可关闭标签' },
                            {
                              value: s(() => [
                                _(
                                  c,
                                  {
                                    closeable: '',
                                    show: y.value,
                                    size: 'medium',
                                    type: 'primary',
                                    onClose: n
                                  },
                                  { default: s(() => [d(' 标签 ')]), _: 1 },
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
                    _(
                      g,
                      { title: '标签大小' },
                      {
                        default: s(() => [
                          _(
                            v,
                            { title: '小号标签' },
                            {
                              value: s(() => [
                                _(
                                  c,
                                  { type: 'primary' },
                                  { default: s(() => [d('标签')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          _(
                            v,
                            { title: '中号标签' },
                            {
                              value: s(() => [
                                _(
                                  c,
                                  { type: 'primary', size: 'medium' },
                                  { default: s(() => [d('标签')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          _(
                            v,
                            { title: '大号标签' },
                            {
                              value: s(() => [
                                _(
                                  c,
                                  { type: 'primary', size: 'large' },
                                  { default: s(() => [d('标签')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    _(
                      g,
                      { title: '自定义颜色' },
                      {
                        default: s(() => [
                          _(
                            v,
                            { title: '背景颜色' },
                            {
                              value: s(() => [
                                _(
                                  c,
                                  { color: '#7232dd' },
                                  { default: s(() => [d('标签')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          _(
                            v,
                            { title: '文字颜色' },
                            {
                              value: s(() => [
                                _(
                                  c,
                                  { color: '#ffe1e1', 'text-color': '#ad0000' },
                                  { default: s(() => [d('标签')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          _(
                            v,
                            { title: '空心颜色' },
                            {
                              value: s(() => [
                                _(
                                  c,
                                  { color: '#7232dd', plain: '' },
                                  { default: s(() => [d('标签')]), _: 1 }
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
          }
        )
      )
    }
  }
})
export { y as default }
