import { _ as e } from './z-uploader.c2d8306c.js'
import {
  d as l,
  k as a,
  m as u,
  G as t,
  o,
  c as s,
  w as d,
  a as i,
  b as m,
  t as r,
  i as p,
  _ as n
} from './index-7fd204f3.js'
import { r as f, b as c, a as g } from './DemoPage.0bae30a9.js'
import { _ as z } from './z-toast.a77377ba.js'
import { s as b } from './z-toast.44a3344c.js'
import './index.389bd7d1.js'
import './z-image.24b91007.js'
const v = n(
  l({
    __name: 'uploader',
    setup(l) {
      const n = (e) => {
          console.log(e)
        },
        v = a([]),
        _ = a([]),
        V = a([
          {
            url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg'
          },
          {
            url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg'
          }
        ]),
        w = a([
          {
            url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg'
          },
          {
            url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg'
          }
        ]),
        j = a([
          {
            url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
            status: 'uploading',
            message: '上传中...'
          },
          {
            url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
            status: 'failed',
            message: '上传失败'
          }
        ]),
        h = a([
          {
            url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
            deletable: !0,
            beforeDelete: () => {
              b('删除前置处理')
            }
          },
          {
            url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg'
          }
        ]),
        U = (e) => {
          ;(e.status = 'uploading'),
            (e.message = '上传中...'),
            setTimeout(() => {
              ;(e.status = 'failed'), (e.message = '上传失败')
            }, 1e3)
        },
        x = () => {
          b('文件大小不能超过 500kb')
        },
        y = (e) => 'image' != e.type || (b('上传图片拦截'), !1),
        k = (e) =>
          new Promise((l, a) => {
            'image' !== e.type
              ? (b('请上传图片格式文件'), a())
              : ((e.custom = { name: 'zebra-image-test' }), l(e))
          })
      return (l, a) => {
        const b = f(u('z-uploader'), e),
          D = t('demo-block'),
          P = f(u('z-button'), c),
          T = p,
          B = f(u('z-toast'), z),
          G = f(u('DemoPage'), g)
        return (
          o(),
          s(
            G,
            { title: 'Uploader' },
            {
              default: d(() => [
                i(
                  T,
                  { class: 'demo-uploader' },
                  {
                    default: d(() => [
                      i(
                        D,
                        { title: '基础用法' },
                        { default: d(() => [i(b, { 'after-read': n })]), _: 1 }
                      ),
                      i(
                        D,
                        { title: '文件预览' },
                        {
                          default: d(() => [
                            i(
                              b,
                              {
                                modelValue: V.value,
                                'onUpdate:modelValue':
                                  a[0] || (a[0] = (e) => (V.value = e)),
                                multiple: ''
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      i(
                        D,
                        { title: '上传状态' },
                        {
                          default: d(() => [
                            i(
                              b,
                              {
                                modelValue: j.value,
                                'onUpdate:modelValue':
                                  a[1] || (a[1] = (e) => (j.value = e)),
                                'after-read': U
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      i(
                        D,
                        { title: '限制上传数量' },
                        {
                          default: d(() => [
                            i(
                              b,
                              {
                                modelValue: v.value,
                                'onUpdate:modelValue':
                                  a[2] || (a[2] = (e) => (v.value = e)),
                                multiple: '',
                                'max-count': 2
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      i(
                        D,
                        { title: '限制上传大小' },
                        {
                          default: d(() => [
                            i(
                              b,
                              {
                                modelValue: _.value,
                                'onUpdate:modelValue':
                                  a[3] || (a[3] = (e) => (_.value = e)),
                                multiple: '',
                                'max-size': 512e3,
                                onOversize: x
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      i(
                        D,
                        { title: '自定义上传样式' },
                        {
                          default: d(() => [
                            i(b, null, {
                              default: d(() => [
                                i(
                                  P,
                                  { icon: 'upload', type: 'primary' },
                                  { default: d(() => [m('上传文件')]), _: 1 }
                                )
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }
                      ),
                      i(
                        D,
                        { title: '自定义预览样式' },
                        {
                          default: d(() => [
                            i(
                              b,
                              {
                                modelValue: V.value,
                                'onUpdate:modelValue':
                                  a[4] || (a[4] = (e) => (V.value = e))
                              },
                              {
                                'preview-cover': d(({ file: e }) => [
                                  i(
                                    T,
                                    { class: 'preview-cover z-ellipsis' },
                                    {
                                      default: d(() => {
                                        var l
                                        return [
                                          m(
                                            r(
                                              (null == e ? void 0 : e.url)
                                                ? null == e
                                                  ? void 0
                                                  : e.url
                                                : null == (l = e.file)
                                                  ? void 0
                                                  : l.url
                                            ),
                                            1
                                          )
                                        ]
                                      }),
                                      _: 2
                                    },
                                    1024
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
                      i(
                        D,
                        { title: '自定义预览大小' },
                        {
                          default: d(() => [
                            i(
                              b,
                              {
                                modelValue: V.value,
                                'onUpdate:modelValue':
                                  a[5] || (a[5] = (e) => (V.value = e)),
                                'preview-size': '180rpx'
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      i(
                        D,
                        { title: '上传前置处理' },
                        {
                          default: d(() => [
                            i(b, { 'before-read': y }),
                            i(b, { 'before-read': k })
                          ]),
                          _: 1
                        }
                      ),
                      i(
                        D,
                        { title: '禁用文件上传' },
                        { default: d(() => [i(b, { disabled: '' })]), _: 1 }
                      ),
                      i(
                        D,
                        { title: '自定义单个图片预览' },
                        {
                          default: d(() => [
                            i(
                              b,
                              {
                                modelValue: h.value,
                                'onUpdate:modelValue':
                                  a[6] || (a[6] = (e) => (h.value = e)),
                                deletable: !1
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      i(
                        D,
                        { title: '开启覆盖上传' },
                        {
                          default: d(() => [
                            i(
                              b,
                              {
                                modelValue: w.value,
                                'onUpdate:modelValue':
                                  a[7] || (a[7] = (e) => (w.value = e)),
                                reupload: '',
                                'max-count': '2'
                              },
                              null,
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
                i(B, { ref: 'zToast' }, null, 512)
              ]),
              _: 1
            }
          )
        )
      }
    }
  }),
  [['__scopeId', 'data-v-13d66f7f']]
)
export { v as default }
