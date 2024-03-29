import {
  aj as e,
  ak as a,
  al as t,
  d as l,
  D as s,
  m as o,
  o as i,
  c as r,
  w as n,
  E as c,
  n as u,
  x as d,
  p,
  y as m,
  a as f,
  b as v,
  t as y,
  i as g,
  _ as b,
  k as h,
  e as z,
  F as w,
  r as k,
  K as x,
  af as S,
  ag as j,
  L as F,
  am as _,
  ae as P,
  C,
  a6 as T
} from './index-7fd204f3.js'
import {
  i as O,
  o as V,
  Q as D,
  N as R,
  n as U,
  R as I,
  H as A,
  r as B,
  _ as M,
  d as N,
  W as $,
  C as H,
  m as L,
  s as E,
  t as Z,
  l as K,
  v as Q,
  M as W
} from './DemoPage.0bae30a9.js'
import { u as q } from './index.389bd7d1.js'
import { _ as G } from './z-image.24b91007.js'
const [J, X, Y] = O('uploader')
function ee(e, a) {
  return new Promise((l) => {
    'file' !== a
      ? t({ filePath: e.url })
          .then((a) => {
            ;(e.size = a.size), l(e)
          })
          .catch(() => {
            l(e)
          })
      : l()
  })
}
function ae(e, a) {
  return D(e).some((e) => !!e.file && (R(a) ? a(e.file) : e.file.size > +a))
}
const te = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i
function le(e) {
  return (
    !!e.isImage ||
    (e.file && e.file.type
      ? 0 === e.file.type.indexOf('image')
      : e.url
        ? ((a = e.url), te.test(a))
        : 'string' == typeof e.content && 0 === e.content.indexOf('data:image'))
  )
  var a
}
function se(e, a) {
  return V(e)
    ? Object.keys(e).reduce((t, l) => (a.includes(l) || (t[l] = e[l]), t), {})
    : {}
}
function oe({
  accept: t,
  multiple: l,
  capture: s,
  compressed: o,
  maxDuration: i,
  sizeType: r,
  camera: n,
  maxCount: c
}) {
  return new Promise((u, d) => {
    switch (t) {
      case 'image':
        a({
          count: l ? Math.min(c, 9) : 1,
          sourceType: s,
          sizeType: r,
          success: (e) =>
            u(
              (function (e) {
                return e.tempFiles.map((e) =>
                  Object.assign(Object.assign({}, se(e, ['path'])), {
                    type: 'image',
                    url: e.path,
                    thumb: e.path
                  })
                )
              })(e)
            ),
          fail: d
        })
        break
      case 'media':
        uni.chooseMedia({
          count: l ? Math.min(c, 9) : 1,
          sourceType: s,
          maxDuration: i,
          sizeType: r,
          camera: n,
          success: (e) =>
            u(
              (function (e) {
                return e.tempFiles.map((a) =>
                  Object.assign(
                    Object.assign(
                      {},
                      se(a, ['fileType', 'thumbTempFilePath', 'tempFilePath'])
                    ),
                    {
                      type: e.type,
                      url: a.tempFilePath,
                      thumb:
                        'video' === e.type
                          ? a.thumbTempFilePath
                          : a.tempFilePath
                    }
                  )
                )
              })(e)
            ),
          fail: d
        })
        break
      case 'video':
        e({
          sourceType: s,
          compressed: o,
          maxDuration: i,
          camera: n,
          success: (e) =>
            u(
              (function (e) {
                return [
                  Object.assign(
                    Object.assign(
                      {},
                      se(e, ['tempFilePath', 'thumbTempFilePath', 'errMsg'])
                    ),
                    {
                      type: 'video',
                      url: e.tempFilePath,
                      thumb: e.thumbTempFilePath
                    }
                  )
                ]
              })(e)
            ),
          fail: d
        })
        break
      default:
        uni.chooseMessageFile({
          count: l ? c : 1,
          type: t,
          success: (e) =>
            u(
              (function (e) {
                return e.tempFiles.map((e) =>
                  Object.assign(Object.assign({}, se(e, ['path'])), {
                    url: e.path
                  })
                )
              })(e)
            ),
          fail: d
        })
    }
  })
}
const ie = b(
    l({
      name: 'ZUploaderItem',
      options: { virtualHost: !0 },
      props: {
        name: U,
        item: I(Object),
        index: Number,
        imageFit: String,
        lazyLoad: Boolean,
        deletable: Boolean,
        reupload: Boolean,
        previewSize: [Number, String, Array],
        beforeDelete: Function,
        comonentSlots: Object
      },
      emits: ['delete', 'preview', 'reupload'],
      setup(e, { emit: a }) {
        const t = e,
          l = (e) => {
            const { name: l, item: s, index: o, beforeDelete: i } = t
            e.stopPropagation(),
              H(i, {
                args: [s, { name: l, index: o }],
                done: () => a('delete')
              })
          },
          b = s(() => {
            const e = {
              display: 'block',
              width: 'var(--z-uploader-size)',
              height: 'var(--z-uploader-size)',
              overflow: 'hidden',
              borderRadius: 'var(--z-uploader-border-radius)'
            }
            return (
              Array.isArray(t.previewSize)
                ? ((e.width = t.previewSize[0]), (e.height = t.previewSize[1]))
                : t.previewSize &&
                  ((e.width = t.previewSize), (e.height = t.previewSize)),
              { ...e }
            )
          }),
          h = s(() => ({
            color: 'var(--z-uploader-file-icon-color)',
            fontSize: 'var(--z-uploader-file-icon-size)'
          })),
          z = s(
            () => 'uploading' === t.item.status || 'failed' === t.item.status
          ),
          w = s(() => A(t.item.message) && '' !== t.item.message),
          k = s(() => t.deletable && 'uploading' !== t.item.status),
          x = s(() => ({ fontSize: 'var(--z-uploader-mask-icon-size)' })),
          S = s(() => ({
            width: 'var(--z-uploader-loading-icon-size)',
            height: 'var(--z-uploader-loading-icon-size)',
            color: 'var(--z-uploader-loading-icon-color)'
          })),
          j = s(() => ({
            color: 'var(--z-uploader-delete-color)',
            fontSize: 'var(--z-uploader-delete-icon-size)',
            transform: 'scale(0.8)'
          })),
          F = () => {
            t.reupload ? a('reupload') : a('preview')
          }
        return (a, s) => {
          const _ = g,
            P = B(o('z-image'), G),
            C = B(o('z-icon'), M),
            T = B(o('z-loading'), N)
          return (
            i(),
            r(
              _,
              { class: u(c(X)('preview')) },
              {
                default: n(() => [
                  c(le)(e.item)
                    ? (i(),
                      r(
                        P,
                        {
                          key: 0,
                          mode: e.imageFit,
                          src: e.item.objectUrl || e.item.content || e.item.url,
                          'custom-style': c(b),
                          onClick: F
                        },
                        {
                          default: n(() => [
                            e.comonentSlots && e.comonentSlots['preview-cover']
                              ? (i(),
                                r(
                                  _,
                                  { key: 0, class: u(c(X)('preview-cover')) },
                                  {
                                    default: n(() => [
                                      d(
                                        a.$slots,
                                        'preview-cover',
                                        {},
                                        void 0,
                                        !0
                                      )
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  ['class']
                                ))
                              : p('', !0)
                          ]),
                          _: 3
                        },
                        8,
                        ['mode', 'src', 'custom-style']
                      ))
                    : (i(),
                      r(
                        _,
                        {
                          key: 1,
                          class: u(c(X)('file')),
                          style: m(c($)(t.previewSize))
                        },
                        {
                          default: n(() => [
                            f(
                              C,
                              { 'custom-style': c(h), name: 'description' },
                              null,
                              8,
                              ['custom-style']
                            ),
                            f(
                              _,
                              { class: u([c(X)('file-name'), 'z-ellipsis']) },
                              {
                                default: n(() => [
                                  v(
                                    y(
                                      e.item.file
                                        ? e.item.file.name
                                        : e.item.url
                                    ),
                                    1
                                  )
                                ]),
                                _: 1
                              },
                              8,
                              ['class']
                            ),
                            e.comonentSlots && e.comonentSlots['preview-cover']
                              ? (i(),
                                r(
                                  _,
                                  { key: 0, class: u(c(X)('preview-cover')) },
                                  {
                                    default: n(() => [
                                      d(
                                        a.$slots,
                                        'preview-cover',
                                        {},
                                        void 0,
                                        !0
                                      )
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  ['class']
                                ))
                              : p('', !0)
                          ]),
                          _: 3
                        },
                        8,
                        ['class', 'style']
                      )),
                  c(z)
                    ? (i(),
                      r(
                        _,
                        { key: 2, class: u(c(X)('mask')) },
                        {
                          default: n(() => [
                            'failed' === e.item.status
                              ? (i(),
                                r(
                                  C,
                                  {
                                    key: 0,
                                    name: 'close-circle',
                                    'custom-style': c(x)
                                  },
                                  null,
                                  8,
                                  ['custom-style']
                                ))
                              : (i(),
                                r(
                                  T,
                                  { key: 1, 'custom-style': c(S) },
                                  null,
                                  8,
                                  ['custom-style']
                                )),
                            c(w)
                              ? (i(),
                                r(
                                  _,
                                  { key: 2, class: u(c(X)('mask-message')) },
                                  {
                                    default: n(() => [v(y(t.item.message), 1)]),
                                    _: 1
                                  },
                                  8,
                                  ['class']
                                ))
                              : p('', !0)
                          ]),
                          _: 1
                        },
                        8,
                        ['class']
                      ))
                    : p('', !0),
                  c(k)
                    ? (i(),
                      r(
                        _,
                        {
                          key: 3,
                          class: u([
                            c(X)('preview-delete', {
                              shadow: !(
                                e.comonentSlots &&
                                e.comonentSlots['preview-delete']
                              )
                            })
                          ]),
                          onClick: l
                        },
                        {
                          default: n(() => [
                            e.comonentSlots && e.comonentSlots['preview-delete']
                              ? d(
                                  a.$slots,
                                  'preview-delete',
                                  { key: 0 },
                                  void 0,
                                  !0
                                )
                              : (i(),
                                r(
                                  C,
                                  {
                                    key: 1,
                                    name: 'close',
                                    'badge-wrapper-style': c(j)
                                  },
                                  null,
                                  8,
                                  ['badge-wrapper-style']
                                ))
                          ]),
                          _: 3
                        },
                        8,
                        ['class']
                      ))
                    : p('', !0)
                ]),
                _: 3
              },
              8,
              ['class']
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-4b639a32']]
  ),
  re = b(
    l({
      name: 'ZUploader',
      options: { virtualHost: !0 },
      props: {
        name: L(''),
        accept: E('image'),
        capture: String,
        multiple: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        lazyLoad: Boolean,
        maxCount: L(1 / 0),
        imageFit: E('cover'),
        resultType: E('dataUrl'),
        uploadIcon: E('upload'),
        uploadText: String,
        deletable: Z,
        reupload: Boolean,
        afterRead: Function,
        showUpload: Z,
        modelValue: K(),
        beforeRead: Function,
        beforeDelete: Function,
        previewSize: [Number, String, Array],
        previewImage: Z,
        previewFullImage: Z,
        maxSize: { type: [Number, String, Function], default: 1 / 0 },
        compressed: Z,
        maxDuration: { type: Number, default: 60 },
        sizeType: { type: Array, default: () => ['original', 'compressed'] },
        camera: { type: String, default: 'back' }
      },
      emits: [
        'delete',
        'oversize',
        'clickUpload',
        'closePreview',
        'clickPreview',
        'clickReupload',
        'update:modelValue',
        'error'
      ],
      setup(e, { emit: a }) {
        const t = e,
          l = F(),
          b = [],
          O = h(-1),
          V = h(!1),
          R = (e = t.modelValue.length) => ({ name: t.name, index: e }),
          U = () => {},
          I = s(() => ({
            color: 'var(--z-uploader-icon-color)',
            fontSize: 'var(--z-uploader-icon-size)'
          })),
          A = (e) => {
            if (ae(e, t.maxSize)) {
              if (!Array.isArray(e)) return void a('oversize', e, R())
              {
                const l = (function (e, a) {
                  const t = [],
                    l = []
                  return (
                    e.forEach((e) => {
                      ae(e, a) ? l.push(e) : t.push(e)
                    }),
                    { valid: t, invalid: l }
                  )
                })(e, t.maxSize)
                if (((e = l.valid), a('oversize', l.invalid, R()), !e.length))
                  return
              }
            }
            if (((e = T(e)), O.value > -1)) {
              const l = [...t.modelValue]
              l.splice(O.value, 1, e), a('update:modelValue', l), (O.value = -1)
            } else a('update:modelValue', [...t.modelValue, ...D(e)])
            t.afterRead && t.afterRead(e, R())
          },
          N = s(() => t.modelValue.length >= +t.maxCount && t.reupload),
          H = (e) => {
            const { maxCount: a, modelValue: l, resultType: s } = t
            if (Array.isArray(e)) {
              const t = +a - l.length
              e.length > t && (e = e.slice(0, t)),
                Promise.all(e.map((e) => ee(e, s))).then((a) => {
                  const t = e.map((e, t) => {
                    const l = {
                      file: e,
                      status: '',
                      message: '',
                      objectUrl: e.url
                    }
                    return a[t] && (l.content = a[t]), l
                  })
                  A(t)
                })
            } else
              ee(e, s).then((a) => {
                const t = { file: e, status: '', message: '', objectUrl: a.url }
                a && (t.content = a), A(t)
              })
          },
          L = (e) => a('clickUpload', e),
          E = () => {
            V.value || (O.value = -1), (V.value = !1)
            const { maxCount: e, modelValue: l, disabled: s } = t
            s ||
              oe(
                Object.assign(
                  Object.assign(
                    {},
                    {
                      accept: t.accept,
                      multiple: t.multiple,
                      capture: t.capture,
                      compressed: t.compressed,
                      maxDuration: t.maxDuration,
                      sizeType: t.sizeType,
                      camera: t.camera,
                      maxCount: t.maxCount
                    }
                  ),
                  { maxCount: e - l.length }
                )
              )
                .then((e) => {
                  ;((e) => {
                    const a = e
                    if (t.disabled || !a || !a.length) return
                    const l = 1 === a.length ? a[0] : [].slice.call(a)
                    if (t.beforeRead) {
                      const e = t.beforeRead(l, R())
                      if (!e) return
                      if (W(e))
                        return void e
                          .then((e) => {
                            H(e || l)
                          })
                          .catch(U)
                    }
                    H(l)
                  })(e)
                })
                .catch((e) => {
                  a('error', e)
                })
          }
        return (
          Q({ chooseFile: E, closeImagePreview: () => {} }),
          q(() => t.modelValue),
          (e, s) => {
            const h = g,
              F = B(o('z-icon'), M),
              T = C
            return (
              i(),
              r(
                h,
                { class: u(c(X)()) },
                {
                  default: n(() => [
                    f(
                      h,
                      { class: u(c(X)('wrapper', { disabled: t.disabled })) },
                      {
                        default: n(() => [
                          t.previewImage
                            ? (i(!0),
                              z(
                                w,
                                { key: 0 },
                                k(
                                  t.modelValue,
                                  (s, o) => (
                                    i(),
                                    r(
                                      ie,
                                      {
                                        key: o,
                                        item: s,
                                        index: o,
                                        name: t.name,
                                        deletable: s.deletable || t.deletable,
                                        reupload: s.reupload || t.reupload,
                                        'preview-size':
                                          s.previewSize || t.previewSize,
                                        'before-delete':
                                          s.beforeDelete || t.beforeDelete,
                                        'comonent-slots': c(l).slots,
                                        onClick: () =>
                                          a(
                                            t.reupload
                                              ? 'clickReupload'
                                              : 'clickPreview',
                                            s,
                                            R(o)
                                          ),
                                        onDelete: (e) =>
                                          ((e, l) => {
                                            const s = t.modelValue.slice(0)
                                            s.splice(l, 1),
                                              a('update:modelValue', s),
                                              a('delete', e, R(l))
                                          })(s, o),
                                        onPreview: (e) =>
                                          ((e) => {
                                            if (t.previewFullImage) {
                                              const a = t.modelValue.filter(le),
                                                l = a
                                                  .map(
                                                    (e) => (
                                                      e.objectUrl &&
                                                        !e.url &&
                                                        'failed' !== e.status &&
                                                        ((e.url = e.objectUrl),
                                                        b.push(e.url)),
                                                      e.url
                                                    )
                                                  )
                                                  .filter(Boolean)
                                              _({
                                                urls: l,
                                                current: a.indexOf(e),
                                                showmenu: !0
                                              })
                                            }
                                          })(s),
                                        onReupload: (e) =>
                                          ((e) => {
                                            ;(V.value = !0),
                                              (O.value = e),
                                              P(() => E())
                                          })(o)
                                      },
                                      x({ _: 2 }, [
                                        c(l).slots['preview-cover']
                                          ? {
                                              name: 'preview-cover',
                                              fn: n(() => [
                                                d(
                                                  e.$slots,
                                                  'preview-cover',
                                                  { file: s },
                                                  void 0,
                                                  !0
                                                )
                                              ]),
                                              key: '0'
                                            }
                                          : void 0,
                                        c(l).slots['preview-delete']
                                          ? {
                                              name: 'preview-delete',
                                              fn: n(() => [
                                                d(
                                                  e.$slots,
                                                  'preview-delete',
                                                  {},
                                                  void 0,
                                                  !0
                                                )
                                              ]),
                                              key: '1'
                                            }
                                          : void 0
                                      ]),
                                      1032,
                                      [
                                        'item',
                                        'index',
                                        'name',
                                        'deletable',
                                        'reupload',
                                        'preview-size',
                                        'before-delete',
                                        'comonent-slots',
                                        'onClick',
                                        'onDelete',
                                        'onPreview',
                                        'onReupload'
                                      ]
                                    )
                                  )
                                ),
                                128
                              ))
                            : p('', !0),
                          t.modelValue.length < +t.maxCount
                            ? (i(),
                              z(
                                w,
                                { key: 1 },
                                [
                                  c(l).slots.default
                                    ? S(
                                        (i(),
                                        r(
                                          h,
                                          {
                                            key: 0,
                                            class: u(c(X)('input-wrapper')),
                                            onClick: L
                                          },
                                          {
                                            default: n(() => [
                                              d(
                                                e.$slots,
                                                'default',
                                                {},
                                                void 0,
                                                !0
                                              ),
                                              t.readonly
                                                ? p('', !0)
                                                : (i(),
                                                  r(
                                                    h,
                                                    {
                                                      key: 0,
                                                      class: u(c(X)('input')),
                                                      onClick: E
                                                    },
                                                    null,
                                                    8,
                                                    ['class']
                                                  ))
                                            ]),
                                            _: 3
                                          },
                                          8,
                                          ['class']
                                        )),
                                        [[j, !c(N)]]
                                      )
                                    : S(
                                        (i(),
                                        r(
                                          h,
                                          {
                                            key: 1,
                                            class: u(
                                              c(X)('upload', {
                                                readonly: t.readonly
                                              })
                                            ),
                                            style: m(c($)(t.previewSize)),
                                            onClick: L
                                          },
                                          {
                                            default: n(() => [
                                              f(
                                                F,
                                                {
                                                  name: t.uploadIcon,
                                                  'custom-style': c(I)
                                                },
                                                null,
                                                8,
                                                ['name', 'custom-style']
                                              ),
                                              t.uploadText
                                                ? (i(),
                                                  r(
                                                    T,
                                                    {
                                                      key: 0,
                                                      class: u(
                                                        c(X)('upload-text')
                                                      )
                                                    },
                                                    {
                                                      default: n(() => [
                                                        v(y(t.uploadText), 1)
                                                      ]),
                                                      _: 1
                                                    },
                                                    8,
                                                    ['class']
                                                  ))
                                                : p('', !0),
                                              t.readonly
                                                ? p('', !0)
                                                : (i(),
                                                  r(
                                                    h,
                                                    {
                                                      key: 1,
                                                      class: u(c(X)('input')),
                                                      onClick: E
                                                    },
                                                    null,
                                                    8,
                                                    ['class']
                                                  ))
                                            ]),
                                            _: 1
                                          },
                                          8,
                                          ['class', 'style']
                                        )),
                                        [[j, t.showUpload && !c(N)]]
                                      )
                                ],
                                64
                              ))
                            : p('', !0)
                        ]),
                        _: 3
                      },
                      8,
                      ['class']
                    )
                  ]),
                  _: 3
                },
                8,
                ['class']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-82dbc2c9']]
  )
export { re as _ }
