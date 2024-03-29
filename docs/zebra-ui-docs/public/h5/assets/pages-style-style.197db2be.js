import {
  _ as a,
  o as s,
  c as e,
  w as t,
  G as l,
  m as o,
  a as i,
  b as d,
  i as c
} from './index-7fd204f3.js'
import { r, a as f } from './DemoPage.0bae30a9.js'
const m = a({}, [
  [
    'render',
    function (a, m) {
      const u = c,
        _ = l('demo-block'),
        n = r(o('DemoPage'), f)
      return (
        s(),
        e(
          n,
          { title: 'Style' },
          {
            default: t(() => [
              i(
                u,
                { class: 'demo-style' },
                {
                  default: t(() => [
                    i(
                      _,
                      { title: '文本省略' },
                      {
                        default: t(() => [
                          i(
                            u,
                            { class: 'z-ellipsis' },
                            {
                              default: t(() => [
                                d(
                                  '这是一段文字，超出一行会显示省略号。这是一段文字，超出一行会显示省略号'
                                )
                              ]),
                              _: 1
                            }
                          ),
                          i(
                            u,
                            { class: 'text-top z-multi-ellipsis--l2' },
                            {
                              default: t(() => [
                                d(
                                  '这是一段文字，超出两行会显示省略号。这是一段文字，超出两行会显示省略号。这是一段文字，超出两行会显示省略号'
                                )
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    i(
                      _,
                      { title: '细边框' },
                      {
                        default: t(() => [i(u, { class: 'z-hairline--top' })]),
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
  ],
  ['__scopeId', 'data-v-cb70c75a']
])
export { m as default }
