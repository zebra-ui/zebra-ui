import { _ as a, a as s } from './z-row.ce10d2dd.js'
import {
  _ as t,
  o as e,
  c as n,
  w as p,
  m as f,
  G as l,
  a as u,
  b as d,
  i as _
} from './index-7fd204f3.js'
import { r as o, a as r } from './DemoPage.0bae30a9.js'
import './useParent.5b9c05b5.js'
import './useChildren.fb2421ae.js'
const i = t({}, [
  [
    'render',
    function (t, i) {
      const m = o(f('z-col'), a),
        c = o(f('z-row'), s),
        j = l('demo-block'),
        y = _,
        b = o(f('DemoPage'), r)
      return (
        e(),
        n(
          b,
          { title: 'Layout' },
          {
            default: p(() => [
              u(
                y,
                { class: 'demo-layout' },
                {
                  default: p(() => [
                    u(
                      j,
                      { title: '基础用法' },
                      {
                        default: p(() => [
                          u(c, null, {
                            default: p(() => [
                              u(
                                m,
                                { span: '8' },
                                { default: p(() => [d('span: 8')]), _: 1 }
                              ),
                              u(
                                m,
                                { span: '8' },
                                { default: p(() => [d('span: 8')]), _: 1 }
                              ),
                              u(
                                m,
                                { span: '8' },
                                { default: p(() => [d('span: 8')]), _: 1 }
                              )
                            ]),
                            _: 1
                          }),
                          u(c, null, {
                            default: p(() => [
                              u(
                                m,
                                { span: '4' },
                                { default: p(() => [d('span: 4')]), _: 1 }
                              ),
                              u(
                                m,
                                { span: '10', offset: '4' },
                                {
                                  default: p(() => [d('offset: 4, span: 10')]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }),
                          u(c, null, {
                            default: p(() => [
                              u(
                                m,
                                { offset: '12', span: '12' },
                                {
                                  default: p(() => [d('offset: 12, span: 12')]),
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
                    u(
                      j,
                      { title: '水平间距' },
                      {
                        default: p(() => [
                          u(
                            c,
                            { gutter: '20' },
                            {
                              default: p(() => [
                                u(
                                  m,
                                  { span: '8' },
                                  { default: p(() => [d('span: 8')]), _: 1 }
                                ),
                                u(
                                  m,
                                  { span: '8' },
                                  { default: p(() => [d('span: 8')]), _: 1 }
                                ),
                                u(
                                  m,
                                  { span: '8' },
                                  { default: p(() => [d('span: 8')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    u(
                      j,
                      { title: '垂直间距' },
                      {
                        default: p(() => [
                          u(
                            c,
                            { gutter: [20, 20] },
                            {
                              default: p(() => [
                                u(
                                  m,
                                  { span: '12' },
                                  { default: p(() => [d('span: 12')]), _: 1 }
                                ),
                                u(
                                  m,
                                  { span: '12' },
                                  { default: p(() => [d('span: 12')]), _: 1 }
                                ),
                                u(
                                  m,
                                  { span: '12' },
                                  { default: p(() => [d('span: 12')]), _: 1 }
                                ),
                                u(
                                  m,
                                  { span: '12' },
                                  { default: p(() => [d('span: 12')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    ),
                    u(
                      j,
                      { title: '对齐方式' },
                      {
                        default: p(() => [
                          u(
                            c,
                            { justify: 'center' },
                            {
                              default: p(() => [
                                u(
                                  m,
                                  { span: '6' },
                                  { default: p(() => [d('span: 6')]), _: 1 }
                                ),
                                u(
                                  m,
                                  { span: '6' },
                                  { default: p(() => [d('span: 6')]), _: 1 }
                                ),
                                u(
                                  m,
                                  { span: '6' },
                                  { default: p(() => [d('span: 6')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          u(
                            c,
                            { justify: 'end' },
                            {
                              default: p(() => [
                                u(
                                  m,
                                  { span: '6' },
                                  { default: p(() => [d('span: 6')]), _: 1 }
                                ),
                                u(
                                  m,
                                  { span: '6' },
                                  { default: p(() => [d('span: 6')]), _: 1 }
                                ),
                                u(
                                  m,
                                  { span: '6' },
                                  { default: p(() => [d('span: 6')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          u(
                            c,
                            { justify: 'space-between' },
                            {
                              default: p(() => [
                                u(
                                  m,
                                  { span: '6' },
                                  { default: p(() => [d('span: 6')]), _: 1 }
                                ),
                                u(
                                  m,
                                  { span: '6' },
                                  { default: p(() => [d('span: 6')]), _: 1 }
                                ),
                                u(
                                  m,
                                  { span: '6' },
                                  { default: p(() => [d('span: 6')]), _: 1 }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          u(
                            c,
                            { justify: 'space-around' },
                            {
                              default: p(() => [
                                u(
                                  m,
                                  { span: '6' },
                                  { default: p(() => [d('span: 6')]), _: 1 }
                                ),
                                u(
                                  m,
                                  { span: '6' },
                                  { default: p(() => [d('span: 6')]), _: 1 }
                                ),
                                u(
                                  m,
                                  { span: '6' },
                                  { default: p(() => [d('span: 6')]), _: 1 }
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
  ],
  ['__scopeId', 'data-v-8e820fe6']
])
export { i as default }
