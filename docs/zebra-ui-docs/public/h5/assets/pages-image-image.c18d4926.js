import { _ as t } from './z-image.24b91007.js'
import {
  d as e,
  m as a,
  G as s,
  o as l,
  c as d,
  w as i,
  a as r,
  e as o,
  r as u,
  F as f,
  b as _,
  i as h,
  t as g,
  _ as m
} from './index-7fd204f3.js'
import { r as p, d as n, a as c } from './DemoPage.0bae30a9.js'
import { _ as x, a as w } from './z-row.ce10d2dd.js'
import './useParent.5b9c05b5.js'
import './useChildren.fb2421ae.js'
const z = m(
  e({
    __name: 'image',
    setup(e) {
      const m = 'https://cdn.zebraui.com/zebra-ui/images/demo.jpg',
        z = ['scaleToFill', 'aspectFit', 'aspectFill', 'widthFix', 'heightFix'],
        b = [
          'top',
          'bottom',
          'center',
          'left',
          'right',
          'top left',
          'top right',
          'bottom left',
          'bottom right'
        ]
      return (e, j) => {
        const F = p(a('z-image'), t),
          k = p(a('z-col'), x),
          y = p(a('z-row'), w),
          P = s('demo-block'),
          D = h,
          I = p(a('z-loading'), n),
          v = p(a('DemoPage'), c)
        return (
          l(),
          d(
            v,
            { title: 'Image' },
            {
              default: i(() => [
                r(
                  D,
                  { class: 'demo-image' },
                  {
                    default: i(() => [
                      r(
                        P,
                        { title: '基础用法' },
                        {
                          default: i(() => [
                            r(
                              y,
                              { gutter: '30' },
                              {
                                default: i(() => [
                                  r(
                                    k,
                                    { span: '8' },
                                    {
                                      default: i(() => [
                                        r(F, {
                                          width: '100',
                                          height: '100',
                                          src: m
                                        })
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
                      ),
                      r(
                        P,
                        { title: '填充模式' },
                        {
                          default: i(() => [
                            r(
                              y,
                              { gutter: '30' },
                              {
                                default: i(() => [
                                  (l(),
                                  o(
                                    f,
                                    null,
                                    u(z, (t, e) =>
                                      r(
                                        k,
                                        { span: '8', key: e },
                                        {
                                          default: i(() => [
                                            r(
                                              F,
                                              {
                                                width: '150rpx',
                                                height: '150rpx',
                                                mode: t,
                                                src: m
                                              },
                                              null,
                                              8,
                                              ['mode']
                                            ),
                                            r(
                                              D,
                                              { class: 'text' },
                                              {
                                                default: i(() => [_(g(t), 1)]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1024
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      r(
                        P,
                        { title: '裁剪' },
                        {
                          default: i(() => [
                            r(
                              y,
                              { gutter: '30' },
                              {
                                default: i(() => [
                                  (l(),
                                  o(
                                    f,
                                    null,
                                    u(b, (t, e) =>
                                      r(
                                        k,
                                        { span: '8', key: e },
                                        {
                                          default: i(() => [
                                            r(
                                              F,
                                              {
                                                width: '150rpx',
                                                height: '150rpx',
                                                mode: t,
                                                src: m
                                              },
                                              null,
                                              8,
                                              ['mode']
                                            ),
                                            r(
                                              D,
                                              { class: 'text' },
                                              {
                                                default: i(() => [_(g(t), 1)]),
                                                _: 2
                                              },
                                              1024
                                            )
                                          ]),
                                          _: 2
                                        },
                                        1024
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        }
                      ),
                      r(
                        P,
                        { title: '圆形图片' },
                        {
                          default: i(() => [
                            r(
                              y,
                              { gutter: '30' },
                              {
                                default: i(() => [
                                  r(
                                    k,
                                    { span: '8' },
                                    {
                                      default: i(() => [
                                        r(F, {
                                          round: '',
                                          width: '100',
                                          height: '100',
                                          src: m
                                        })
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
                      ),
                      r(
                        P,
                        { title: '加载中提示' },
                        {
                          default: i(() => [
                            r(
                              y,
                              { gutter: '30' },
                              {
                                default: i(() => [
                                  r(
                                    k,
                                    { span: '8' },
                                    {
                                      default: i(() => [
                                        r(F, {
                                          'show-loading': '',
                                          width: '100',
                                          height: '100'
                                        }),
                                        r(
                                          D,
                                          { class: 'text' },
                                          {
                                            default: i(() => [_('默认提示')]),
                                            _: 1
                                          }
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  r(
                                    k,
                                    { span: '8' },
                                    {
                                      default: i(() => [
                                        r(
                                          F,
                                          {
                                            'show-loading': '',
                                            width: '100',
                                            height: '100'
                                          },
                                          {
                                            loading: i(() => [
                                              r(I, {
                                                type: 'spinner',
                                                size: '40rpx'
                                              })
                                            ]),
                                            _: 1
                                          }
                                        ),
                                        r(
                                          D,
                                          { class: 'text' },
                                          {
                                            default: i(() => [_('自定义提示')]),
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
                      ),
                      r(
                        P,
                        { title: '加载失败提示' },
                        {
                          default: i(() => [
                            r(
                              y,
                              { gutter: '30' },
                              {
                                default: i(() => [
                                  r(
                                    k,
                                    { span: '8' },
                                    {
                                      default: i(() => [
                                        r(F, {
                                          'show-error': '',
                                          width: '100',
                                          height: '100',
                                          src: 'x'
                                        }),
                                        r(
                                          D,
                                          { class: 'text' },
                                          {
                                            default: i(() => [_('默认提示')]),
                                            _: 1
                                          }
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  r(
                                    k,
                                    { span: '8' },
                                    {
                                      default: i(() => [
                                        r(
                                          F,
                                          {
                                            'show-error': '',
                                            width: '100',
                                            height: '100',
                                            src: 'x'
                                          },
                                          {
                                            error: i(() => [_(' 加载失败 ')]),
                                            _: 1
                                          }
                                        ),
                                        r(
                                          D,
                                          { class: 'text' },
                                          {
                                            default: i(() => [_('自定义提示')]),
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
  [['__scopeId', 'data-v-83f0264d']]
)
export { z as default }
