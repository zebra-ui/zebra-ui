import { r as t, h as a, _ as e, a as l } from './DemoPage.0bae30a9.js'
import {
  d as s,
  m as r,
  G as i,
  o,
  c as f,
  w as d,
  a as m,
  E as n,
  i as _
} from './index-7fd204f3.js'
import { _ as u } from './z-toast.a77377ba.js'
import { s as c } from './z-toast.44a3344c.js'
import './z-dialog.b209de9d.js'
const g = s({
  __name: 'navbar',
  setup: (s) => (s, g) => {
    const h = t(r('z-nav-bar'), a),
      x = i('demo-block'),
      z = t(r('z-icon'), e),
      b = _,
      p = t(r('z-toast'), u),
      j = t(r('DemoPage'), l)
    return (
      o(),
      f(
        j,
        { title: 'Navbar' },
        {
          default: d(() => [
            m(
              b,
              { class: 'demo-navbar' },
              {
                default: d(() => [
                  m(
                    x,
                    { title: '基础用法' },
                    { default: d(() => [m(h, { title: '标题' })]), _: 1 }
                  ),
                  m(
                    x,
                    { title: '返回上级' },
                    {
                      default: d(() => [
                        m(h, {
                          title: '标题',
                          'left-text': '返回',
                          'left-arrow': ''
                        })
                      ]),
                      _: 1
                    }
                  ),
                  m(
                    x,
                    { title: '右侧按钮' },
                    {
                      default: d(() => [
                        m(h, {
                          title: '标题',
                          'left-text': '返回',
                          'right-text': '按钮',
                          'left-arrow': '',
                          onClickRight: g[0] || (g[0] = (t) => n(c)('按钮'))
                        })
                      ]),
                      _: 1
                    }
                  ),
                  m(
                    x,
                    { title: '使用插槽' },
                    {
                      default: d(() => [
                        m(
                          h,
                          {
                            title: '标题',
                            'left-text': '返回',
                            'left-arrow': ''
                          },
                          {
                            right: d(() => [
                              m(z, { name: 'search', size: '18' })
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    }
                  ),
                  m(
                    x,
                    { title: '禁用按钮' },
                    {
                      default: d(() => [
                        m(h, {
                          title: '标题',
                          'left-text': '返回',
                          'right-text': '按钮',
                          'left-arrow': '',
                          'left-disabled': '',
                          'right-disabled': ''
                        })
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              }
            ),
            m(p, { ref: 'zToast' }, null, 512)
          ]),
          _: 1
        }
      )
    )
  }
})
export { g as default }
