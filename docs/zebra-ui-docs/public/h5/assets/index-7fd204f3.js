!(function () {
  const e = document.createElement('link').relList
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e)
    new MutationObserver((e) => {
      for (const n of e)
        if ('childList' === n.type)
          for (const e of n.addedNodes)
            'LINK' === e.tagName && 'modulepreload' === e.rel && t(e)
    }).observe(document, { childList: !0, subtree: !0 })
  }
  function t(e) {
    if (e.ep) return
    e.ep = !0
    const t = (function (e) {
      const t = {}
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        'use-credentials' === e.crossOrigin
          ? (t.credentials = 'include')
          : 'anonymous' === e.crossOrigin
            ? (t.credentials = 'omit')
            : (t.credentials = 'same-origin'),
        t
      )
    })(e)
    fetch(e.href, t)
  }
})()
const e = {},
  t = function (t, n, o) {
    if (!n || 0 === n.length) return t()
    const r = document.getElementsByTagName('link')
    return Promise.all(
      n.map((t) => {
        if (
          (t = (function (e) {
            return '/h5/' + e
          })(t)) in e
        )
          return
        e[t] = !0
        const n = t.endsWith('.css'),
          i = n ? '[rel="stylesheet"]' : ''
        if (!!o)
          for (let e = r.length - 1; e >= 0; e--) {
            const o = r[e]
            if (o.href === t && (!n || 'stylesheet' === o.rel)) return
          }
        else if (document.querySelector(`link[href="${t}"]${i}`)) return
        const a = document.createElement('link')
        return (
          (a.rel = n ? 'stylesheet' : 'modulepreload'),
          n || ((a.as = 'script'), (a.crossOrigin = '')),
          (a.href = t),
          document.head.appendChild(a),
          n
            ? new Promise((e, n) => {
                a.addEventListener('load', e),
                  a.addEventListener('error', () =>
                    n(new Error(`Unable to preload CSS for ${t}`))
                  )
              })
            : void 0
        )
      })
    ).then(() => t())
  }
function n(e, t) {
  const n = Object.create(null),
    o = e.split(',')
  for (let r = 0; r < o.length; r++) n[o[r]] = !0
  return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e]
}
function o(e) {
  if (C(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        i = L(r) ? s(r) : o(r)
      if (i) for (const e in i) t[e] = i[e]
    }
    return t
  }
  return L(e) || A(e) ? e : void 0
}
const r = /;(?![^(]*\))/g,
  i = /:([^]+)/,
  a = /\/\*.*?\*\//gs
function s(e) {
  const t = {}
  return (
    e
      .replace(a, '')
      .split(r)
      .forEach((e) => {
        if (e) {
          const n = e.split(i)
          n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
      }),
    t
  )
}
function l(e) {
  let t = ''
  if (L(e)) t = e
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = l(e[n])
      o && (t += o + ' ')
    }
  else if (A(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const c = n(
  'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly'
)
function u(e) {
  return !!e || '' === e
}
function d(e, t) {
  if (e === t) return !0
  let n = O(e),
    o = O(t)
  if (n || o) return !(!n || !o) && e.getTime() === t.getTime()
  if (((n = P(e)), (o = P(t)), n || o)) return e === t
  if (((n = C(e)), (o = C(t)), n || o))
    return (
      !(!n || !o) &&
      (function (e, t) {
        if (e.length !== t.length) return !1
        let n = !0
        for (let o = 0; n && o < e.length; o++) n = d(e[o], t[o])
        return n
      })(e, t)
    )
  if (((n = A(e)), (o = A(t)), n || o)) {
    if (!n || !o) return !1
    if (Object.keys(e).length !== Object.keys(t).length) return !1
    for (const n in e) {
      const o = e.hasOwnProperty(n),
        r = t.hasOwnProperty(n)
      if ((o && !r) || (!o && r) || !d(e[n], t[n])) return !1
    }
  }
  return String(e) === String(t)
}
function p(e, t) {
  return e.findIndex((e) => d(e, t))
}
const f = (e) =>
    L(e)
      ? e
      : null == e
        ? ''
        : C(e) || (A(e) && (e.toString === M || !I(e.toString)))
          ? JSON.stringify(e, h, 2)
          : String(e),
  h = (e, t) =>
    t && t.__v_isRef
      ? h(e, t.value)
      : k(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (e, [t, n]) => ((e[`${t} =>`] = n), e),
              {}
            )
          }
        : $(t)
          ? { [`Set(${t.size})`]: [...t.values()] }
          : !A(t) || C(t) || N(t)
            ? t
            : String(t),
  g = {},
  m = [],
  v = () => {},
  y = () => !1,
  _ = /^on[^a-z]/,
  b = (e) => _.test(e),
  w = (e) => e.startsWith('onUpdate:'),
  x = Object.assign,
  T = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  S = Object.prototype.hasOwnProperty,
  E = (e, t) => S.call(e, t),
  C = Array.isArray,
  k = (e) => '[object Map]' === B(e),
  $ = (e) => '[object Set]' === B(e),
  O = (e) => '[object Date]' === B(e),
  I = (e) => 'function' == typeof e,
  L = (e) => 'string' == typeof e,
  P = (e) => 'symbol' == typeof e,
  A = (e) => null !== e && 'object' == typeof e,
  R = (e) => A(e) && I(e.then) && I(e.catch),
  M = Object.prototype.toString,
  B = (e) => M.call(e),
  N = (e) => '[object Object]' === B(e),
  V = (e) => L(e) && 'NaN' !== e && '-' !== e[0] && '' + parseInt(e, 10) === e,
  j = n(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  D = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  F = /-(\w)/g,
  q = D((e) => e.replace(F, (e, t) => (t ? t.toUpperCase() : ''))),
  z = /\B([A-Z])/g,
  W = D((e) => e.replace(z, '-$1').toLowerCase()),
  H = D((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  U = D((e) => (e ? `on${H(e)}` : '')),
  Y = (e, t) => !Object.is(e, t),
  X = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  G = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  K = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Q
const J = [
  'ad',
  'ad-content-page',
  'ad-draw',
  'audio',
  'button',
  'camera',
  'canvas',
  'checkbox',
  'checkbox-group',
  'cover-image',
  'cover-view',
  'editor',
  'form',
  'functional-page-navigator',
  'icon',
  'image',
  'input',
  'label',
  'live-player',
  'live-pusher',
  'map',
  'movable-area',
  'movable-view',
  'navigator',
  'official-account',
  'open-data',
  'picker',
  'picker-view',
  'picker-view-column',
  'progress',
  'radio',
  'radio-group',
  'rich-text',
  'scroll-view',
  'slider',
  'swiper',
  'swiper-item',
  'switch',
  'text',
  'textarea',
  'video',
  'view',
  'web-view'
].map((e) => 'uni-' + e)
const Z = /^([a-z-]+:)?\/\//i,
  ee = /^data:.*,.*/,
  te = 'onPageScroll'
function ne(e) {
  return e && (e.appContext ? e.proxy : e)
}
function oe(e) {
  if (!e) return
  let t = e.type.name
  for (
    ;
    t && ((n = W(t)), -1 !== J.indexOf('uni-' + n.replace('v-uni-', '')));

  )
    t = (e = e.parent).type.name
  var n
  return e.proxy
}
function re(e) {
  return 1 === e.nodeType
}
function ie(e) {
  return 0 === e.indexOf('/')
}
function ae(e) {
  return ie(e) ? e : '/' + e
}
function se(e, t = null) {
  let n
  return (...o) => (e && ((n = e.apply(t, o)), (e = null)), n)
}
function le(e) {
  return q(e.substring(5))
}
const ce = se(() => {
  const e = HTMLElement.prototype,
    t = e.setAttribute
  e.setAttribute = function (e, n) {
    if (e.startsWith('data-') && this.tagName.startsWith('UNI-')) {
      ;(this.__uniDataset || (this.__uniDataset = {}))[le(e)] = n
    }
    t.call(this, e, n)
  }
  const n = e.removeAttribute
  e.removeAttribute = function (e) {
    this.__uniDataset &&
      e.startsWith('data-') &&
      this.tagName.startsWith('UNI-') &&
      delete this.__uniDataset[le(e)],
      n.call(this, e)
  }
})
function ue(e) {
  return x({}, e.dataset, e.__uniDataset)
}
const de = new RegExp(
  '"[^"]+"|\'[^\']+\'|url\\([^)]+\\)|(\\d*\\.?\\d+)[r|u]px',
  'g'
)
function pe(e) {
  return { passive: e }
}
function fe(e) {
  const { id: t, offsetTop: n, offsetLeft: o } = e
  return { id: t, dataset: ue(e), offsetTop: n, offsetLeft: o }
}
function he(e) {
  try {
    return decodeURIComponent('' + e)
  } catch (t) {}
  return '' + e
}
function ge(e = {}) {
  const t = {}
  return (
    Object.keys(e).forEach((n) => {
      try {
        t[n] = he(e[n])
      } catch (o) {
        t[n] = e[n]
      }
    }),
    t
  )
}
const me = /\+/g
function ve(e) {
  const t = {}
  if ('' === e || '?' === e) return t
  const n = ('?' === e[0] ? e.slice(1) : e).split('&')
  for (let o = 0; o < n.length; ++o) {
    const e = n[o].replace(me, ' ')
    let r = e.indexOf('='),
      i = he(r < 0 ? e : e.slice(0, r)),
      a = r < 0 ? null : he(e.slice(r + 1))
    if (i in t) {
      let e = t[i]
      C(e) || (e = t[i] = [e]), e.push(a)
    } else t[i] = a
  }
  return t
}
function ye(e, t, { clearTimeout: n, setTimeout: o }) {
  let r
  const i = function () {
    n(r)
    const i = () => e.apply(this, arguments)
    r = o(i, t)
  }
  return (
    (i.cancel = function () {
      n(r)
    }),
    i
  )
}
class _e {
  constructor(e, t) {
    ;(this.id = e),
      (this.listener = {}),
      (this.emitCache = []),
      t &&
        Object.keys(t).forEach((e) => {
          this.on(e, t[e])
        })
  }
  emit(e, ...t) {
    const n = this.listener[e]
    if (!n) return this.emitCache.push({ eventName: e, args: t })
    n.forEach((e) => {
      e.fn.apply(e.fn, t)
    }),
      (this.listener[e] = n.filter((e) => 'once' !== e.type))
  }
  on(e, t) {
    this._addListener(e, 'on', t), this._clearCache(e)
  }
  once(e, t) {
    this._addListener(e, 'once', t), this._clearCache(e)
  }
  off(e, t) {
    const n = this.listener[e]
    if (n)
      if (t)
        for (let o = 0; o < n.length; )
          n[o].fn === t && (n.splice(o, 1), o--), o++
      else delete this.listener[e]
  }
  _clearCache(e) {
    for (let t = 0; t < this.emitCache.length; t++) {
      const n = this.emitCache[t],
        o = e ? (n.eventName === e ? e : null) : n.eventName
      if (!o) continue
      'number' != typeof this.emit.apply(this, [o, ...n.args])
        ? (this.emitCache.splice(t, 1), t--)
        : this.emitCache.pop()
    }
  }
  _addListener(e, t, n) {
    ;(this.listener[e] || (this.listener[e] = [])).push({ fn: n, type: t })
  }
}
const be = [
    'onInit',
    'onLoad',
    'onShow',
    'onHide',
    'onUnload',
    'onBackPress',
    'onPageScroll',
    'onTabItemTap',
    'onReachBottom',
    'onPullDownRefresh',
    'onShareTimeline',
    'onShareAppMessage',
    'onAddToFavorites',
    'onSaveExitState',
    'onNavigationBarButtonTap',
    'onNavigationBarSearchInputClicked',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputFocusChanged'
  ],
  we = ['onLoad', 'onShow']
const xe = [
  'onShow',
  'onHide',
  'onLaunch',
  'onError',
  'onThemeChange',
  'onPageNotFound',
  'onUnhandledRejection',
  'onExit',
  'onInit',
  'onLoad',
  'onReady',
  'onUnload',
  'onResize',
  'onBackPress',
  'onPageScroll',
  'onTabItemTap',
  'onReachBottom',
  'onPullDownRefresh',
  'onShareTimeline',
  'onAddToFavorites',
  'onShareAppMessage',
  'onSaveExitState',
  'onNavigationBarButtonTap',
  'onNavigationBarSearchInputClicked',
  'onNavigationBarSearchInputChanged',
  'onNavigationBarSearchInputConfirmed',
  'onNavigationBarSearchInputFocusChanged'
]
const Te = []
const Se = se((e, t) => {
    if (I(e._component.onError)) return t(e)
  }),
  Ee = function () {}
Ee.prototype = {
  on: function (e, t, n) {
    var o = this.e || (this.e = {})
    return (o[e] || (o[e] = [])).push({ fn: t, ctx: n }), this
  },
  once: function (e, t, n) {
    var o = this
    function r() {
      o.off(e, r), t.apply(n, arguments)
    }
    return (r._ = t), this.on(e, r, n)
  },
  emit: function (e) {
    for (
      var t = [].slice.call(arguments, 1),
        n = ((this.e || (this.e = {}))[e] || []).slice(),
        o = 0,
        r = n.length;
      o < r;
      o++
    )
      n[o].fn.apply(n[o].ctx, t)
    return this
  },
  off: function (e, t) {
    var n = this.e || (this.e = {}),
      o = n[e],
      r = []
    if (o && t)
      for (var i = 0, a = o.length; i < a; i++)
        o[i].fn !== t && o[i].fn._ !== t && r.push(o[i])
    return r.length ? (n[e] = r) : delete n[e], this
  }
}
var Ce = Ee
const ke = { black: 'rgba(0,0,0,0.4)', white: 'rgba(255,255,255,0.4)' }
function $e(e, t = {}, n = 'light') {
  const o = t[n],
    r = {}
  return o
    ? (Object.keys(e).forEach((i) => {
        let a = e[i]
        r[i] = (() => {
          if (N(a)) return $e(a, t, n)
          if (C(a)) return a.map((e) => (N(e) ? $e(e, t, n) : e))
          if (L(a) && a.startsWith('@')) {
            const t = a.replace('@', '')
            let n = o[t] || a
            switch (i) {
              case 'titleColor':
                n = 'black' === n ? '#000000' : '#ffffff'
                break
              case 'borderStyle':
                n = (e = n) && e in ke ? ke[e] : e
            }
            return n
          }
          var e
          return a
        })()
      }),
      r)
    : e
}
let Oe
class Ie {
  constructor(e = !1) {
    ;(this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Oe),
      !e && Oe && (this.index = (Oe.scopes || (Oe.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(e) {
    if (this._active) {
      const t = Oe
      try {
        return (Oe = this), e()
      } finally {
        Oe = t
      }
    }
  }
  on() {
    Oe = this
  }
  off() {
    Oe = this.parent
  }
  stop(e) {
    if (this._active) {
      let t, n
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop()
      for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]()
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0)
      if (!this.detached && this.parent && !e) {
        const e = this.parent.scopes.pop()
        e &&
          e !== this &&
          ((this.parent.scopes[this.index] = e), (e.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Le(e) {
  return new Ie(e)
}
function Pe() {
  return Oe
}
const Ae = (e) => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  Re = (e) => (e.w & Ve) > 0,
  Me = (e) => (e.n & Ve) > 0,
  Be = new WeakMap()
let Ne = 0,
  Ve = 1
let je
const De = Symbol(''),
  Fe = Symbol('')
class qe {
  constructor(e, t = null, n) {
    ;(this.fn = e),
      (this.scheduler = t),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      (function (e, t = Oe) {
        t && t.active && t.effects.push(e)
      })(this, n)
  }
  run() {
    if (!this.active) return this.fn()
    let e = je,
      t = We
    for (; e; ) {
      if (e === this) return
      e = e.parent
    }
    try {
      return (
        (this.parent = je),
        (je = this),
        (We = !0),
        (Ve = 1 << ++Ne),
        Ne <= 30
          ? (({ deps: e }) => {
              if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ve
            })(this)
          : ze(this),
        this.fn()
      )
    } finally {
      Ne <= 30 &&
        ((e) => {
          const { deps: t } = e
          if (t.length) {
            let n = 0
            for (let o = 0; o < t.length; o++) {
              const r = t[o]
              Re(r) && !Me(r) ? r.delete(e) : (t[n++] = r),
                (r.w &= ~Ve),
                (r.n &= ~Ve)
            }
            t.length = n
          }
        })(this),
        (Ve = 1 << --Ne),
        (je = this.parent),
        (We = t),
        (this.parent = void 0),
        this.deferStop && this.stop()
    }
  }
  stop() {
    je === this
      ? (this.deferStop = !0)
      : this.active &&
        (ze(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function ze(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
let We = !0
const He = []
function Ue() {
  He.push(We), (We = !1)
}
function Ye() {
  const e = He.pop()
  We = void 0 === e || e
}
function Xe(e, t, n) {
  if (We && je) {
    let t = Be.get(e)
    t || Be.set(e, (t = new Map()))
    let o = t.get(n)
    o || t.set(n, (o = Ae())), Ge(o)
  }
}
function Ge(e, t) {
  let n = !1
  Ne <= 30 ? Me(e) || ((e.n |= Ve), (n = !Re(e))) : (n = !e.has(je)),
    n && (e.add(je), je.deps.push(e))
}
function Ke(e, t, n, o, r, i) {
  const a = Be.get(e)
  if (!a) return
  let s = []
  if ('clear' === t) s = [...a.values()]
  else if ('length' === n && C(e)) {
    const e = Number(o)
    a.forEach((t, n) => {
      ;('length' === n || n >= e) && s.push(t)
    })
  } else
    switch ((void 0 !== n && s.push(a.get(n)), t)) {
      case 'add':
        C(e)
          ? V(n) && s.push(a.get('length'))
          : (s.push(a.get(De)), k(e) && s.push(a.get(Fe)))
        break
      case 'delete':
        C(e) || (s.push(a.get(De)), k(e) && s.push(a.get(Fe)))
        break
      case 'set':
        k(e) && s.push(a.get(De))
    }
  if (1 === s.length) s[0] && Qe(s[0])
  else {
    const e = []
    for (const t of s) t && e.push(...t)
    Qe(Ae(e))
  }
}
function Qe(e, t) {
  const n = C(e) ? e : [...e]
  for (const o of n) o.computed && Je(o)
  for (const o of n) o.computed || Je(o)
}
function Je(e, t) {
  ;(e !== je || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const Ze = n('__proto__,__v_isRef,__isVue'),
  et = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => 'arguments' !== e && 'caller' !== e)
      .map((e) => Symbol[e])
      .filter(P)
  ),
  tt = st(),
  nt = st(!1, !0),
  ot = st(!0),
  rt = it()
function it() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...e) {
        const n = Ht(this)
        for (let t = 0, r = this.length; t < r; t++) Xe(n, 0, t + '')
        const o = n[t](...e)
        return -1 === o || !1 === o ? n[t](...e.map(Ht)) : o
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...e) {
        Ue()
        const n = Ht(this)[t].apply(this, e)
        return Ye(), n
      }
    }),
    e
  )
}
function at(e) {
  const t = Ht(this)
  return Xe(t, 0, e), t.hasOwnProperty(e)
}
function st(e = !1, t = !1) {
  return function (n, o, r) {
    if ('__v_isReactive' === o) return !e
    if ('__v_isReadonly' === o) return e
    if ('__v_isShallow' === o) return t
    if ('__v_raw' === o && r === (e ? (t ? Bt : Mt) : t ? Rt : At).get(n))
      return n
    const i = C(n)
    if (!e) {
      if (i && E(rt, o)) return Reflect.get(rt, o, r)
      if ('hasOwnProperty' === o) return at
    }
    const a = Reflect.get(n, o, r)
    return (P(o) ? et.has(o) : Ze(o))
      ? a
      : (e || Xe(n, 0, o),
        t
          ? a
          : Qt(a)
            ? i && V(o)
              ? a
              : a.value
            : A(a)
              ? e
                ? jt(a)
                : Vt(a)
              : a)
  }
}
function lt(e = !1) {
  return function (t, n, o, r) {
    let i = t[n]
    if (qt(i) && Qt(i) && !Qt(o)) return !1
    if (
      !e &&
      (zt(o) || qt(o) || ((i = Ht(i)), (o = Ht(o))), !C(t) && Qt(i) && !Qt(o))
    )
      return (i.value = o), !0
    const a = C(t) && V(n) ? Number(n) < t.length : E(t, n),
      s = Reflect.set(t, n, o, r)
    return (
      t === Ht(r) && (a ? Y(o, i) && Ke(t, 'set', n, o) : Ke(t, 'add', n, o)), s
    )
  }
}
const ct = {
    get: tt,
    set: lt(),
    deleteProperty: function (e, t) {
      const n = E(e, t)
      e[t]
      const o = Reflect.deleteProperty(e, t)
      return o && n && Ke(e, 'delete', t, void 0), o
    },
    has: function (e, t) {
      const n = Reflect.has(e, t)
      return (P(t) && et.has(t)) || Xe(e, 0, t), n
    },
    ownKeys: function (e) {
      return Xe(e, 0, C(e) ? 'length' : De), Reflect.ownKeys(e)
    }
  },
  ut = { get: ot, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
  dt = x({}, ct, { get: nt, set: lt(!0) }),
  pt = (e) => e,
  ft = (e) => Reflect.getPrototypeOf(e)
function ht(e, t, n = !1, o = !1) {
  const r = Ht((e = e.__v_raw)),
    i = Ht(t)
  n || (t !== i && Xe(r, 0, t), Xe(r, 0, i))
  const { has: a } = ft(r),
    s = o ? pt : n ? Xt : Yt
  return a.call(r, t)
    ? s(e.get(t))
    : a.call(r, i)
      ? s(e.get(i))
      : void (e !== r && e.get(t))
}
function gt(e, t = !1) {
  const n = this.__v_raw,
    o = Ht(n),
    r = Ht(e)
  return (
    t || (e !== r && Xe(o, 0, e), Xe(o, 0, r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function mt(e, t = !1) {
  return (e = e.__v_raw), !t && Xe(Ht(e), 0, De), Reflect.get(e, 'size', e)
}
function vt(e) {
  e = Ht(e)
  const t = Ht(this)
  return ft(t).has.call(t, e) || (t.add(e), Ke(t, 'add', e, e)), this
}
function yt(e, t) {
  t = Ht(t)
  const n = Ht(this),
    { has: o, get: r } = ft(n)
  let i = o.call(n, e)
  i || ((e = Ht(e)), (i = o.call(n, e)))
  const a = r.call(n, e)
  return (
    n.set(e, t), i ? Y(t, a) && Ke(n, 'set', e, t) : Ke(n, 'add', e, t), this
  )
}
function _t(e) {
  const t = Ht(this),
    { has: n, get: o } = ft(t)
  let r = n.call(t, e)
  r || ((e = Ht(e)), (r = n.call(t, e))), o && o.call(t, e)
  const i = t.delete(e)
  return r && Ke(t, 'delete', e, void 0), i
}
function bt() {
  const e = Ht(this),
    t = 0 !== e.size,
    n = e.clear()
  return t && Ke(e, 'clear', void 0, void 0), n
}
function wt(e, t) {
  return function (n, o) {
    const r = this,
      i = r.__v_raw,
      a = Ht(i),
      s = t ? pt : e ? Xt : Yt
    return !e && Xe(a, 0, De), i.forEach((e, t) => n.call(o, s(e), s(t), r))
  }
}
function xt(e, t, n) {
  return function (...o) {
    const r = this.__v_raw,
      i = Ht(r),
      a = k(i),
      s = 'entries' === e || (e === Symbol.iterator && a),
      l = 'keys' === e && a,
      c = r[e](...o),
      u = n ? pt : t ? Xt : Yt
    return (
      !t && Xe(i, 0, l ? Fe : De),
      {
        next() {
          const { value: e, done: t } = c.next()
          return t
            ? { value: e, done: t }
            : { value: s ? [u(e[0]), u(e[1])] : u(e), done: t }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function Tt(e) {
  return function (...t) {
    return 'delete' !== e && this
  }
}
function St() {
  const e = {
      get(e) {
        return ht(this, e)
      },
      get size() {
        return mt(this)
      },
      has: gt,
      add: vt,
      set: yt,
      delete: _t,
      clear: bt,
      forEach: wt(!1, !1)
    },
    t = {
      get(e) {
        return ht(this, e, !1, !0)
      },
      get size() {
        return mt(this)
      },
      has: gt,
      add: vt,
      set: yt,
      delete: _t,
      clear: bt,
      forEach: wt(!1, !0)
    },
    n = {
      get(e) {
        return ht(this, e, !0)
      },
      get size() {
        return mt(this, !0)
      },
      has(e) {
        return gt.call(this, e, !0)
      },
      add: Tt('add'),
      set: Tt('set'),
      delete: Tt('delete'),
      clear: Tt('clear'),
      forEach: wt(!0, !1)
    },
    o = {
      get(e) {
        return ht(this, e, !0, !0)
      },
      get size() {
        return mt(this, !0)
      },
      has(e) {
        return gt.call(this, e, !0)
      },
      add: Tt('add'),
      set: Tt('set'),
      delete: Tt('delete'),
      clear: Tt('clear'),
      forEach: wt(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      ;(e[r] = xt(r, !1, !1)),
        (n[r] = xt(r, !0, !1)),
        (t[r] = xt(r, !1, !0)),
        (o[r] = xt(r, !0, !0))
    }),
    [e, n, t, o]
  )
}
const [Et, Ct, kt, $t] = St()
function Ot(e, t) {
  const n = t ? (e ? $t : kt) : e ? Ct : Et
  return (t, o, r) =>
    '__v_isReactive' === o
      ? !e
      : '__v_isReadonly' === o
        ? e
        : '__v_raw' === o
          ? t
          : Reflect.get(E(n, o) && o in t ? n : t, o, r)
}
const It = { get: Ot(!1, !1) },
  Lt = { get: Ot(!1, !0) },
  Pt = { get: Ot(!0, !1) },
  At = new WeakMap(),
  Rt = new WeakMap(),
  Mt = new WeakMap(),
  Bt = new WeakMap()
function Nt(e) {
  return e.__v_skip || !Object.isExtensible(e)
    ? 0
    : (function (e) {
        switch (e) {
          case 'Object':
          case 'Array':
            return 1
          case 'Map':
          case 'Set':
          case 'WeakMap':
          case 'WeakSet':
            return 2
          default:
            return 0
        }
      })(((e) => B(e).slice(8, -1))(e))
}
function Vt(e) {
  return qt(e) ? e : Dt(e, !1, ct, It, At)
}
function jt(e) {
  return Dt(e, !0, ut, Pt, Mt)
}
function Dt(e, t, n, o, r) {
  if (!A(e)) return e
  if (e.__v_raw && (!t || !e.__v_isReactive)) return e
  const i = r.get(e)
  if (i) return i
  const a = Nt(e)
  if (0 === a) return e
  const s = new Proxy(e, 2 === a ? o : n)
  return r.set(e, s), s
}
function Ft(e) {
  return qt(e) ? Ft(e.__v_raw) : !(!e || !e.__v_isReactive)
}
function qt(e) {
  return !(!e || !e.__v_isReadonly)
}
function zt(e) {
  return !(!e || !e.__v_isShallow)
}
function Wt(e) {
  return Ft(e) || qt(e)
}
function Ht(e) {
  const t = e && e.__v_raw
  return t ? Ht(t) : e
}
function Ut(e) {
  return G(e, '__v_skip', !0), e
}
const Yt = (e) => (A(e) ? Vt(e) : e),
  Xt = (e) => (A(e) ? jt(e) : e)
function Gt(e) {
  We && je && Ge((e = Ht(e)).dep || (e.dep = Ae()))
}
function Kt(e, t) {
  const n = (e = Ht(e)).dep
  n && Qe(n)
}
function Qt(e) {
  return !(!e || !0 !== e.__v_isRef)
}
function Jt(e) {
  return en(e, !1)
}
function Zt(e) {
  return en(e, !0)
}
function en(e, t) {
  return Qt(e) ? e : new tn(e, t)
}
class tn {
  constructor(e, t) {
    ;(this.__v_isShallow = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = t ? e : Ht(e)),
      (this._value = t ? e : Yt(e))
  }
  get value() {
    return Gt(this), this._value
  }
  set value(e) {
    const t = this.__v_isShallow || zt(e) || qt(e)
    ;(e = t ? e : Ht(e)),
      Y(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = t ? e : Yt(e)), Kt(this))
  }
}
function nn(e) {
  return Qt(e) ? e.value : e
}
const on = {
  get: (e, t, n) => nn(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t]
    return Qt(r) && !Qt(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, o)
  }
}
function rn(e) {
  return Ft(e) ? e : new Proxy(e, on)
}
class an {
  constructor(e, t, n) {
    ;(this._object = e),
      (this._key = t),
      (this._defaultValue = n),
      (this.__v_isRef = !0)
  }
  get value() {
    const e = this._object[this._key]
    return void 0 === e ? this._defaultValue : e
  }
  set value(e) {
    this._object[this._key] = e
  }
  get dep() {
    return (
      (e = Ht(this._object)),
      (t = this._key),
      null === (n = Be.get(e)) || void 0 === n ? void 0 : n.get(t)
    )
    var e, t, n
  }
}
function sn(e, t, n) {
  const o = e[t]
  return Qt(o) ? o : new an(e, t, n)
}
var ln
class cn {
  constructor(e, t, n, o) {
    ;(this._setter = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[ln] = !1),
      (this._dirty = !0),
      (this.effect = new qe(e, () => {
        this._dirty || ((this._dirty = !0), Kt(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = n)
  }
  get value() {
    const e = Ht(this)
    return (
      Gt(e),
      (!e._dirty && e._cacheable) ||
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    )
  }
  set value(e) {
    this._setter(e)
  }
}
function un(e, t, n, o) {
  let r
  try {
    r = o ? e(...o) : e()
  } catch (i) {
    pn(i, t, n)
  }
  return r
}
function dn(e, t, n, o) {
  if (I(e)) {
    const r = un(e, t, n, o)
    return (
      r &&
        R(r) &&
        r.catch((e) => {
          pn(e, t, n)
        }),
      r
    )
  }
  const r = []
  for (let i = 0; i < e.length; i++) r.push(dn(e[i], t, n, o))
  return r
}
function pn(e, t, n, o = !0) {
  t && t.vnode
  if (t) {
    let o = t.parent
    const r = t.proxy,
      i = n
    for (; o; ) {
      const t = o.ec
      if (t) for (let n = 0; n < t.length; n++) if (!1 === t[n](e, r, i)) return
      o = o.parent
    }
    const a = t.appContext.config.errorHandler
    if (a) return void un(a, null, 10, [e, r, i])
  }
  !(function (e, t, n, o = !0) {
    console.error(e)
  })(e, 0, 0, o)
}
ln = '__v_isReadonly'
let fn = !1,
  hn = !1
const gn = []
let mn = 0
const vn = []
let yn = null,
  _n = 0
const bn = Promise.resolve()
let wn = null
function xn(e) {
  const t = wn || bn
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Tn(e) {
  ;(gn.length && gn.includes(e, fn && e.allowRecurse ? mn + 1 : mn)) ||
    (null == e.id
      ? gn.push(e)
      : gn.splice(
          (function (e) {
            let t = mn + 1,
              n = gn.length
            for (; t < n; ) {
              const o = (t + n) >>> 1
              kn(gn[o]) < e ? (t = o + 1) : (n = o)
            }
            return t
          })(e.id),
          0,
          e
        ),
    Sn())
}
function Sn() {
  fn || hn || ((hn = !0), (wn = bn.then(On)))
}
function En(e, t = fn ? mn + 1 : 0) {
  for (; t < gn.length; t++) {
    const e = gn[t]
    e && e.pre && (gn.splice(t, 1), t--, e())
  }
}
function Cn(e) {
  if (vn.length) {
    const e = [...new Set(vn)]
    if (((vn.length = 0), yn)) return void yn.push(...e)
    for (yn = e, yn.sort((e, t) => kn(e) - kn(t)), _n = 0; _n < yn.length; _n++)
      yn[_n]()
    ;(yn = null), (_n = 0)
  }
}
const kn = (e) => (null == e.id ? 1 / 0 : e.id),
  $n = (e, t) => {
    const n = kn(e) - kn(t)
    if (0 === n) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function On(e) {
  ;(hn = !1), (fn = !0), gn.sort($n)
  try {
    for (mn = 0; mn < gn.length; mn++) {
      const e = gn[mn]
      e && !1 !== e.active && un(e, null, 14)
    }
  } finally {
    ;(mn = 0),
      (gn.length = 0),
      Cn(),
      (fn = !1),
      (wn = null),
      (gn.length || vn.length) && On()
  }
}
function In(e, t, ...n) {
  if (e.isUnmounted) return
  const o = e.vnode.props || g
  let r = n
  const i = t.startsWith('update:'),
    a = i && t.slice(7)
  if (a && a in o) {
    const e = `${'modelValue' === a ? 'model' : a}Modifiers`,
      { number: t, trim: i } = o[e] || g
    i && (r = n.map((e) => (L(e) ? e.trim() : e))), t && (r = n.map(K))
  }
  let s,
    l = o[(s = U(t))] || o[(s = U(q(t)))]
  !l && i && (l = o[(s = U(W(t)))]), l && dn(l, e, 6, Ln(e, l, r))
  const c = o[s + 'Once']
  if (c) {
    if (e.emitted) {
      if (e.emitted[s]) return
    } else e.emitted = {}
    ;(e.emitted[s] = !0), dn(c, e, 6, Ln(e, c, r))
  }
}
function Ln(e, t, n) {
  if (1 !== n.length) return n
  if (I(t)) {
    if (t.length < 2) return n
  } else if (!t.find((e) => e.length >= 2)) return n
  const o = n[0]
  if (
    o &&
    E(o, 'type') &&
    E(o, 'timeStamp') &&
    E(o, 'target') &&
    E(o, 'currentTarget') &&
    E(o, 'detail')
  ) {
    const t = e.proxy,
      o = t.$gcd(t, !0)
    o && n.push(o)
  }
  return n
}
function Pn(e, t, n = !1) {
  const o = t.emitsCache,
    r = o.get(e)
  if (void 0 !== r) return r
  const i = e.emits
  let a = {},
    s = !1
  if (!I(e)) {
    const o = (e) => {
      const n = Pn(e, t, !0)
      n && ((s = !0), x(a, n))
    }
    !n && t.mixins.length && t.mixins.forEach(o),
      e.extends && o(e.extends),
      e.mixins && e.mixins.forEach(o)
  }
  return i || s
    ? (C(i) ? i.forEach((e) => (a[e] = null)) : x(a, i), A(e) && o.set(e, a), a)
    : (A(e) && o.set(e, null), null)
}
function An(e, t) {
  return (
    !(!e || !b(t)) &&
    ((t = t.slice(2).replace(/Once$/, '')),
    E(e, t[0].toLowerCase() + t.slice(1)) || E(e, W(t)) || E(e, t))
  )
}
let Rn = null,
  Mn = null
function Bn(e) {
  const t = Rn
  return (Rn = e), (Mn = (e && e.type.__scopeId) || null), t
}
function Nn(e, t = Rn, n) {
  if (!t) return e
  if (e._n) return e
  const o = (...n) => {
    o._d && jr(-1)
    const r = Bn(t)
    let i
    try {
      i = e(...n)
    } finally {
      Bn(r), o._d && jr(1)
    }
    return i
  }
  return (o._n = !0), (o._c = !0), (o._d = !0), o
}
function Vn(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    props: i,
    propsOptions: [a],
    slots: s,
    attrs: l,
    emit: c,
    render: u,
    renderCache: d,
    data: p,
    setupState: f,
    ctx: h,
    inheritAttrs: g
  } = e
  let m, v
  const y = Bn(e)
  try {
    if (4 & n.shapeFlag) {
      const e = r || o
      ;(m = Zr(u.call(e, e, d, i, f, p, h))), (v = l)
    } else {
      const e = t
      0,
        (m = Zr(
          e.length > 1 ? e(i, { attrs: l, slots: s, emit: c }) : e(i, null)
        )),
        (v = t.props ? l : jn(l))
    }
  } catch (b) {
    ;(Mr.length = 0), pn(b, e, 1), (m = Gr(Ar))
  }
  let _ = m
  if (v && !1 !== g) {
    const e = Object.keys(v),
      { shapeFlag: t } = _
    e.length && 7 & t && (a && e.some(w) && (v = Dn(v, a)), (_ = Kr(_, v)))
  }
  return (
    n.dirs && ((_ = Kr(_)), (_.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (_.transition = n.transition),
    (m = _),
    Bn(y),
    m
  )
}
const jn = (e) => {
    let t
    for (const n in e)
      ('class' === n || 'style' === n || b(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Dn = (e, t) => {
    const n = {}
    for (const o in e) (w(o) && o.slice(9) in t) || (n[o] = e[o])
    return n
  }
function Fn(e, t, n) {
  const o = Object.keys(t)
  if (o.length !== Object.keys(e).length) return !0
  for (let r = 0; r < o.length; r++) {
    const i = o[r]
    if (t[i] !== e[i] && !An(n, i)) return !0
  }
  return !1
}
const qn = (e) => e.__isSuspense
function zn(e, t) {
  if (ai) {
    let n = ai.provides
    const o = ai.parent && ai.parent.provides
    o === n && (n = ai.provides = Object.create(o)),
      (n[e] = t),
      'app' === ai.type.mpType && ai.appContext.app.provide(e, t)
  } else;
}
function Wn(e, t, n = !1) {
  const o = ai || Rn
  if (o) {
    const r =
      null == o.parent
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && I(t) ? t.call(o.proxy) : t
  }
}
function Hn(e, t) {
  return Xn(e, null, t)
}
const Un = {}
function Yn(e, t, n) {
  return Xn(e, t, n)
}
function Xn(
  e,
  t,
  { immediate: n, deep: o, flush: r, onTrack: i, onTrigger: a } = g
) {
  const s = Pe() === (null == ai ? void 0 : ai.scope) ? ai : null
  let l,
    c,
    u = !1,
    d = !1
  if (
    (Qt(e)
      ? ((l = () => e.value), (u = zt(e)))
      : Ft(e)
        ? ((l = () => e), (o = !0))
        : C(e)
          ? ((d = !0),
            (u = e.some((e) => Ft(e) || zt(e))),
            (l = () =>
              e.map((e) =>
                Qt(e) ? e.value : Ft(e) ? Qn(e) : I(e) ? un(e, s, 2) : void 0
              )))
          : (l = I(e)
              ? t
                ? () => un(e, s, 2)
                : () => {
                    if (!s || !s.isUnmounted) return c && c(), dn(e, s, 3, [f])
                  }
              : v),
    t && o)
  ) {
    const e = l
    l = () => Qn(e())
  }
  let p,
    f = (e) => {
      c = _.onStop = () => {
        un(e, s, 4)
      }
    }
  if (di) {
    if (
      ((f = v),
      t ? n && dn(t, s, 3, [l(), d ? [] : void 0, f]) : l(),
      'sync' !== r)
    )
      return v
    {
      const e = _i()
      p = e.__watcherHandles || (e.__watcherHandles = [])
    }
  }
  let h = d ? new Array(e.length).fill(Un) : Un
  const m = () => {
    if (_.active)
      if (t) {
        const e = _.run()
        ;(o || u || (d ? e.some((e, t) => Y(e, h[t])) : Y(e, h))) &&
          (c && c(),
          dn(t, s, 3, [e, h === Un ? void 0 : d && h[0] === Un ? [] : h, f]),
          (h = e))
      } else _.run()
  }
  let y
  ;(m.allowRecurse = !!t),
    'sync' === r
      ? (y = m)
      : 'post' === r
        ? (y = () => kr(m, s && s.suspense))
        : ((m.pre = !0), s && (m.id = s.uid), (y = () => Tn(m)))
  const _ = new qe(l, y)
  t
    ? n
      ? m()
      : (h = _.run())
    : 'post' === r
      ? kr(_.run.bind(_), s && s.suspense)
      : _.run()
  const b = () => {
    _.stop(), s && s.scope && T(s.scope.effects, _)
  }
  return p && p.push(b), b
}
function Gn(e, t, n) {
  const o = this.proxy,
    r = L(e) ? (e.includes('.') ? Kn(o, e) : () => o[e]) : e.bind(o, o)
  let i
  I(t) ? (i = t) : ((i = t.handler), (n = t))
  const a = ai
  li(this)
  const s = Xn(r, i.bind(o), n)
  return a ? li(a) : ci(), s
}
function Kn(e, t) {
  const n = t.split('.')
  return () => {
    let t = e
    for (let e = 0; e < n.length && t; e++) t = t[n[e]]
    return t
  }
}
function Qn(e, t) {
  if (!A(e) || e.__v_skip) return e
  if ((t = t || new Set()).has(e)) return e
  if ((t.add(e), Qt(e))) Qn(e.value, t)
  else if (C(e)) for (let n = 0; n < e.length; n++) Qn(e[n], t)
  else if ($(e) || k(e))
    e.forEach((e) => {
      Qn(e, t)
    })
  else if (N(e)) for (const n in e) Qn(e[n], t)
  return e
}
const Jn = [Function, Array],
  Zn = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Jn,
    onEnter: Jn,
    onAfterEnter: Jn,
    onEnterCancelled: Jn,
    onBeforeLeave: Jn,
    onLeave: Jn,
    onAfterLeave: Jn,
    onLeaveCancelled: Jn,
    onBeforeAppear: Jn,
    onAppear: Jn,
    onAfterAppear: Jn,
    onAppearCancelled: Jn
  },
  eo = {
    name: 'BaseTransition',
    props: Zn,
    setup(e, { slots: t }) {
      const n = si(),
        o = (function () {
          const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map()
          }
          return (
            Oo(() => {
              e.isMounted = !0
            }),
            Po(() => {
              e.isUnmounting = !0
            }),
            e
          )
        })()
      let r
      return () => {
        const i = t.default && ao(t.default(), !0)
        if (!i || !i.length) return
        let a = i[0]
        if (i.length > 1)
          for (const e of i)
            if (e.type !== Ar) {
              a = e
              break
            }
        const s = Ht(e),
          { mode: l } = s
        if (o.isLeaving) return oo(a)
        const c = ro(a)
        if (!c) return oo(a)
        const u = no(c, s, o, n)
        io(c, u)
        const d = n.subTree,
          p = d && ro(d)
        let f = !1
        const { getTransitionKey: h } = c.type
        if (h) {
          const e = h()
          void 0 === r ? (r = e) : e !== r && ((r = e), (f = !0))
        }
        if (p && p.type !== Ar && (!Wr(c, p) || f)) {
          const e = no(p, s, o, n)
          if ((io(p, e), 'out-in' === l))
            return (
              (o.isLeaving = !0),
              (e.afterLeave = () => {
                ;(o.isLeaving = !1), !1 !== n.update.active && n.update()
              }),
              oo(a)
            )
          'in-out' === l &&
            c.type !== Ar &&
            (e.delayLeave = (e, t, n) => {
              ;(to(o, p)[String(p.key)] = p),
                (e._leaveCb = () => {
                  t(), (e._leaveCb = void 0), delete u.delayedLeave
                }),
                (u.delayedLeave = n)
            })
        }
        return a
      }
    }
  }
function to(e, t) {
  const { leavingVNodes: n } = e
  let o = n.get(t.type)
  return o || ((o = Object.create(null)), n.set(t.type, o)), o
}
function no(e, t, n, o) {
  const {
      appear: r,
      mode: i,
      persisted: a = !1,
      onBeforeEnter: s,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: d,
      onLeave: p,
      onAfterLeave: f,
      onLeaveCancelled: h,
      onBeforeAppear: g,
      onAppear: m,
      onAfterAppear: v,
      onAppearCancelled: y
    } = t,
    _ = String(e.key),
    b = to(n, e),
    w = (e, t) => {
      e && dn(e, o, 9, t)
    },
    x = (e, t) => {
      const n = t[1]
      w(e, t),
        C(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n()
    },
    T = {
      mode: i,
      persisted: a,
      beforeEnter(t) {
        let o = s
        if (!n.isMounted) {
          if (!r) return
          o = g || s
        }
        t._leaveCb && t._leaveCb(!0)
        const i = b[_]
        i && Wr(e, i) && i.el._leaveCb && i.el._leaveCb(), w(o, [t])
      },
      enter(e) {
        let t = l,
          o = c,
          i = u
        if (!n.isMounted) {
          if (!r) return
          ;(t = m || l), (o = v || c), (i = y || u)
        }
        let a = !1
        const s = (e._enterCb = (t) => {
          a ||
            ((a = !0),
            w(t ? i : o, [e]),
            T.delayedLeave && T.delayedLeave(),
            (e._enterCb = void 0))
        })
        t ? x(t, [e, s]) : s()
      },
      leave(t, o) {
        const r = String(e.key)
        if ((t._enterCb && t._enterCb(!0), n.isUnmounting)) return o()
        w(d, [t])
        let i = !1
        const a = (t._leaveCb = (n) => {
          i ||
            ((i = !0),
            o(),
            w(n ? h : f, [t]),
            (t._leaveCb = void 0),
            b[r] === e && delete b[r])
        })
        ;(b[r] = e), p ? x(p, [t, a]) : a()
      },
      clone: (e) => no(e, t, n, o)
    }
  return T
}
function oo(e) {
  if (po(e)) return ((e = Kr(e)).children = null), e
}
function ro(e) {
  return po(e) ? (e.children ? e.children[0] : void 0) : e
}
function io(e, t) {
  6 & e.shapeFlag && e.component
    ? io(e.component.subTree, t)
    : 128 & e.shapeFlag
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function ao(e, t = !1, n) {
  let o = [],
    r = 0
  for (let i = 0; i < e.length; i++) {
    let a = e[i]
    const s = null == n ? a.key : String(n) + String(null != a.key ? a.key : i)
    a.type === Lr
      ? (128 & a.patchFlag && r++, (o = o.concat(ao(a.children, t, s))))
      : (t || a.type !== Ar) && o.push(null != s ? Kr(a, { key: s }) : a)
  }
  if (r > 1) for (let i = 0; i < o.length; i++) o[i].patchFlag = -2
  return o
}
function so(e) {
  return I(e) ? { setup: e, name: e.name } : e
}
const lo = (e) => !!e.type.__asyncLoader
function co(e) {
  I(e) && (e = { loader: e })
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: o,
    delay: r = 200,
    timeout: i,
    suspensible: a = !0,
    onError: s
  } = e
  let l,
    c = null,
    u = 0
  const d = () => {
    let e
    return (
      c ||
      (e = c =
        t()
          .catch((e) => {
            if (((e = e instanceof Error ? e : new Error(String(e))), s))
              return new Promise((t, n) => {
                s(
                  e,
                  () => t((u++, (c = null), d())),
                  () => n(e),
                  u + 1
                )
              })
            throw e
          })
          .then((t) =>
            e !== c && c
              ? c
              : (t &&
                  (t.__esModule || 'Module' === t[Symbol.toStringTag]) &&
                  (t = t.default),
                (l = t),
                t)
          ))
    )
  }
  return so({
    name: 'AsyncComponentWrapper',
    __asyncLoader: d,
    get __asyncResolved() {
      return l
    },
    setup() {
      const e = ai
      if (l) return () => uo(l, e)
      const t = (t) => {
        ;(c = null), pn(t, e, 13, !o)
      }
      if ((a && e.suspense) || di)
        return d()
          .then((t) => () => uo(t, e))
          .catch((e) => (t(e), () => (o ? Gr(o, { error: e }) : null)))
      const s = Jt(!1),
        u = Jt(),
        p = Jt(!!r)
      return (
        r &&
          setTimeout(() => {
            p.value = !1
          }, r),
        null != i &&
          setTimeout(() => {
            if (!s.value && !u.value) {
              const e = new Error(`Async component timed out after ${i}ms.`)
              t(e), (u.value = e)
            }
          }, i),
        d()
          .then(() => {
            ;(s.value = !0),
              e.parent && po(e.parent.vnode) && Tn(e.parent.update)
          })
          .catch((e) => {
            t(e), (u.value = e)
          }),
        () =>
          s.value && l
            ? uo(l, e)
            : u.value && o
              ? Gr(o, { error: u.value })
              : n && !p.value
                ? Gr(n)
                : void 0
      )
    }
  })
}
function uo(e, t) {
  const { ref: n, props: o, children: r, ce: i } = t.vnode,
    a = Gr(e, o, r)
  return (a.ref = n), (a.ce = i), delete t.vnode.ce, a
}
const po = (e) => e.type.__isKeepAlive
class fo {
  constructor(e) {
    ;(this.max = e),
      (this._cache = new Map()),
      (this._keys = new Set()),
      (this._max = parseInt(e, 10))
  }
  get(e) {
    const { _cache: t, _keys: n, _max: o } = this,
      r = t.get(e)
    if (r) n.delete(e), n.add(e)
    else if ((n.add(e), o && n.size > o)) {
      const e = n.values().next().value
      this.pruneCacheEntry(t.get(e)), this.delete(e)
    }
    return r
  }
  set(e, t) {
    this._cache.set(e, t)
  }
  delete(e) {
    this._cache.delete(e), this._keys.delete(e)
  }
  forEach(e, t) {
    this._cache.forEach(e.bind(t))
  }
}
const ho = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
      matchBy: { type: String, default: 'name' },
      cache: Object
    },
    setup(e, { slots: t }) {
      const n = si(),
        o = n.ctx
      if (!o.renderer)
        return () => {
          const e = t.default && t.default()
          return e && 1 === e.length ? e[0] : e
        }
      const r = e.cache || new fo(e.max)
      r.pruneCacheEntry = a
      let i = null
      function a(t) {
        var o
        !i || !Wr(t, i) || ('key' === e.matchBy && t.key !== i.key)
          ? (wo((o = t)), u(o, n, s, !0))
          : i && wo(i)
      }
      const s = n.suspense,
        {
          renderer: {
            p: l,
            m: c,
            um: u,
            o: { createElement: d }
          }
        } = o,
        p = d('div')
      function f(t) {
        r.forEach((n, o) => {
          const i = To(n, e.matchBy)
          !i || (t && t(i)) || (r.delete(o), a(n))
        })
      }
      ;(o.activate = (e, t, n, o, r) => {
        const i = e.component
        if (i.ba) {
          const e = i.isDeactivated
          ;(i.isDeactivated = !1), X(i.ba), (i.isDeactivated = e)
        }
        c(e, t, n, 0, s),
          l(i.vnode, e, t, n, i, s, o, e.slotScopeIds, r),
          kr(() => {
            ;(i.isDeactivated = !1), i.a && X(i.a)
            const t = e.props && e.props.onVnodeMounted
            t && oi(t, i.parent, e)
          }, s)
      }),
        (o.deactivate = (e) => {
          const t = e.component
          t.bda && So(t.bda),
            c(e, p, null, 1, s),
            kr(() => {
              t.bda && Eo(t.bda), t.da && X(t.da)
              const n = e.props && e.props.onVnodeUnmounted
              n && oi(n, t.parent, e), (t.isDeactivated = !0)
            }, s)
        }),
        Yn(
          () => [e.include, e.exclude, e.matchBy],
          ([e, t]) => {
            e && f((t) => mo(e, t)), t && f((e) => !mo(t, e))
          },
          { flush: 'post', deep: !0 }
        )
      let h = null
      const g = () => {
        null != h && r.set(h, xo(n.subTree))
      }
      return (
        Oo(g),
        Lo(g),
        Po(() => {
          r.forEach((t, o) => {
            r.delete(o), a(t)
            const { subTree: i, suspense: s } = n,
              l = xo(i)
            if (t.type !== l.type || ('key' === e.matchBy && t.key !== l.key));
            else {
              l.component.bda && X(l.component.bda), wo(l)
              const e = l.component.da
              e && kr(e, s)
            }
          })
        }),
        () => {
          if (((h = null), !t.default)) return null
          const n = t.default(),
            o = n[0]
          if (n.length > 1) return (i = null), n
          if (!zr(o) || (!(4 & o.shapeFlag) && !qn(o.type)))
            return (i = null), o
          let a = xo(o)
          const s = a.type,
            l = To(a, e.matchBy),
            { include: c, exclude: u } = e
          if ((c && (!l || !mo(c, l))) || (u && l && mo(u, l)))
            return (i = a), o
          const d = null == a.key ? s : a.key,
            p = r.get(d)
          return (
            a.el && ((a = Kr(a)), qn(o.type) && (o.ssContent = a)),
            (h = d),
            p &&
              ((a.el = p.el),
              (a.component = p.component),
              a.transition && io(a, a.transition),
              (a.shapeFlag |= 512)),
            (a.shapeFlag |= 256),
            (i = a),
            qn(o.type) ? o : a
          )
        }
      )
    }
  },
  go = ho
function mo(e, t) {
  return C(e)
    ? e.some((e) => mo(e, t))
    : L(e)
      ? e.split(',').includes(t)
      : !!e.test && e.test(t)
}
function vo(e, t) {
  _o(e, 'a', t)
}
function yo(e, t) {
  _o(e, 'da', t)
}
function _o(e, t, n = ai) {
  const o =
    e.__wdc ||
    (e.__wdc = () => {
      let t = n
      for (; t; ) {
        if (t.isDeactivated) return
        t = t.parent
      }
      return e()
    })
  if (((o.__called = !1), Co(t, o, n), n)) {
    let e = n.parent
    for (; e && e.parent; ) po(e.parent.vnode) && bo(o, t, n, e), (e = e.parent)
  }
}
function bo(e, t, n, o) {
  const r = Co(t, e, o, !0)
  Ao(() => {
    T(o[t], r)
  }, n)
}
function wo(e) {
  ;(e.shapeFlag &= -257), (e.shapeFlag &= -513)
}
function xo(e) {
  return qn(e.type) ? e.ssContent : e
}
function To(e, t) {
  if ('name' === t) {
    const t = e.type
    return gi(lo(e) ? t.__asyncResolved || {} : t)
  }
  return String(e.key)
}
function So(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t]
    n.__called || (n(), (n.__called = !0))
  }
}
function Eo(e) {
  e.forEach((e) => (e.__called = !1))
}
function Co(e, t, n = ai, o = !1) {
  if (n) {
    if (((r = e), be.indexOf(r) > -1 && n.$pageInstance)) {
      if (n.type.__reserved) return
      if (
        n !== n.$pageInstance &&
        ((n = n.$pageInstance),
        (function (e) {
          return we.indexOf(e) > -1
        })(e))
      ) {
        const o = n.proxy
        dn(t.bind(o), n, e, 'onLoad' === e ? [o.$page.options] : [])
      }
    }
    const i = n[e] || (n[e] = []),
      a =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return
          Ue(), li(n)
          const r = dn(t, n, e, o)
          return ci(), Ye(), r
        })
    return o ? i.unshift(a) : i.push(a), a
  }
  var r
}
const ko =
    (e) =>
    (t, n = ai) =>
      (!di || 'sp' === e) && Co(e, (...e) => t(...e), n),
  $o = ko('bm'),
  Oo = ko('m'),
  Io = ko('bu'),
  Lo = ko('u'),
  Po = ko('bum'),
  Ao = ko('um'),
  Ro = ko('sp'),
  Mo = ko('rtg'),
  Bo = ko('rtc')
function No(e, t = ai) {
  Co('ec', e, t)
}
function Vo(e, t) {
  const n = Rn
  if (null === n) return e
  const o = hi(n) || n.proxy,
    r = e.dirs || (e.dirs = [])
  for (let i = 0; i < t.length; i++) {
    let [e, n, a, s = g] = t[i]
    e &&
      (I(e) && (e = { mounted: e, updated: e }),
      e.deep && Qn(n),
      r.push({
        dir: e,
        instance: o,
        value: n,
        oldValue: void 0,
        arg: a,
        modifiers: s
      }))
  }
  return e
}
function jo(e, t, n, o) {
  const r = e.dirs,
    i = t && t.dirs
  for (let a = 0; a < r.length; a++) {
    const s = r[a]
    i && (s.oldValue = i[a].value)
    let l = s.dir[o]
    l && (Ue(), dn(l, n, 8, [e.el, s, e, t]), Ye())
  }
}
function Do(e, t) {
  return zo('components', e, !0, t) || e
}
const Fo = Symbol()
function qo(e) {
  return L(e) ? zo('components', e, !1) || e : e || Fo
}
function zo(e, t, n = !0, o = !1) {
  const r = Rn || ai
  if (r) {
    const n = r.type
    if ('components' === e) {
      const e = gi(n, !1)
      if (e && (e === t || e === q(t) || e === H(q(t)))) return n
    }
    const i = Wo(r[e] || n[e], t) || Wo(r.appContext[e], t)
    return !i && o ? n : i
  }
}
function Wo(e, t) {
  return e && (e[t] || e[q(t)] || e[H(q(t))])
}
function Ho(e, t, n, o) {
  let r
  const i = n && n[o]
  if (C(e) || L(e)) {
    r = new Array(e.length)
    for (let n = 0, o = e.length; n < o; n++)
      r[n] = t(e[n], n, void 0, i && i[n])
  } else if ('number' == typeof e) {
    r = new Array(e)
    for (let n = 0; n < e; n++) r[n] = t(n + 1, n, void 0, i && i[n])
  } else if (A(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (e, n) => t(e, n, void 0, i && i[n]))
    else {
      const n = Object.keys(e)
      r = new Array(n.length)
      for (let o = 0, a = n.length; o < a; o++) {
        const a = n[o]
        r[o] = t(e[a], a, o, i && i[o])
      }
    }
  else r = []
  return n && (n[o] = r), r
}
function Uo(e, t) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n]
    if (C(o)) for (let t = 0; t < o.length; t++) e[o[t].name] = o[t].fn
    else
      o &&
        (e[o.name] = o.key
          ? (...e) => {
              const t = o.fn(...e)
              return t && (t.key = o.key), t
            }
          : o.fn)
  }
  return e
}
function Yo(e, t, n = {}, o, r) {
  if (Rn.isCE || (Rn.parent && lo(Rn.parent) && Rn.parent.isCE))
    return 'default' !== t && (n.name = t), Gr('slot', n, o && o())
  let i = e[t]
  i && i._c && (i._d = !1), Nr()
  const a = i && Xo(i(n)),
    s = qr(
      Lr,
      { key: n.key || (a && a.key) || `_${t}` },
      a || (o ? o() : []),
      a && 1 === e._ ? 64 : -2
    )
  return (
    !r && s.scopeId && (s.slotScopeIds = [s.scopeId + '-s']),
    i && i._c && (i._d = !0),
    s
  )
}
function Xo(e) {
  return e.some(
    (e) => !zr(e) || (e.type !== Ar && !(e.type === Lr && !Xo(e.children)))
  )
    ? e
    : null
}
const Go = (e) => (e ? (ui(e) ? hi(e) || e.proxy : Go(e.parent)) : null),
  Ko = x(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Go(e.parent),
    $root: (e) => Go(e.root),
    $emit: (e) => e.emit,
    $options: (e) => or(e),
    $forceUpdate: (e) => e.f || (e.f = () => Tn(e.update)),
    $nextTick: (e) => e.n || (e.n = xn.bind(e.proxy)),
    $watch: (e) => Gn.bind(e)
  }),
  Qo = (e, t) => e !== g && !e.__isScriptSetup && E(e, t),
  Jo = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: o,
        data: r,
        props: i,
        accessCache: a,
        type: s,
        appContext: l
      } = e
      let c
      if ('$' !== t[0]) {
        const s = a[t]
        if (void 0 !== s)
          switch (s) {
            case 1:
              return o[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (Qo(o, t)) return (a[t] = 1), o[t]
          if (r !== g && E(r, t)) return (a[t] = 2), r[t]
          if ((c = e.propsOptions[0]) && E(c, t)) return (a[t] = 3), i[t]
          if (n !== g && E(n, t)) return (a[t] = 4), n[t]
          Zo && (a[t] = 0)
        }
      }
      const u = Ko[t]
      let d, p
      return u
        ? ('$attrs' === t && Xe(e, 0, t), u(e))
        : (d = s.__cssModules) && (d = d[t])
          ? d
          : n !== g && E(n, t)
            ? ((a[t] = 4), n[t])
            : ((p = l.config.globalProperties), E(p, t) ? p[t] : void 0)
    },
    set({ _: e }, t, n) {
      const { data: o, setupState: r, ctx: i } = e
      return Qo(r, t)
        ? ((r[t] = n), !0)
        : o !== g && E(o, t)
          ? ((o[t] = n), !0)
          : !E(e.props, t) &&
            ('$' !== t[0] || !(t.slice(1) in e)) &&
            ((i[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: o,
          appContext: r,
          propsOptions: i
        }
      },
      a
    ) {
      let s
      return (
        !!n[a] ||
        (e !== g && E(e, a)) ||
        Qo(t, a) ||
        ((s = i[0]) && E(s, a)) ||
        E(o, a) ||
        E(Ko, a) ||
        E(r.config.globalProperties, a)
      )
    },
    defineProperty(e, t, n) {
      return (
        null != n.get
          ? (e._.accessCache[t] = 0)
          : E(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    }
  }
let Zo = !0
function er(e) {
  const t = or(e),
    n = e.proxy,
    o = e.ctx
  ;(Zo = !1), t.beforeCreate && tr(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: i,
    methods: a,
    watch: s,
    provide: l,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: p,
    beforeUpdate: f,
    updated: h,
    activated: g,
    deactivated: m,
    beforeDestroy: y,
    beforeUnmount: _,
    destroyed: b,
    unmounted: w,
    render: x,
    renderTracked: T,
    renderTriggered: S,
    errorCaptured: E,
    serverPrefetch: k,
    expose: $,
    inheritAttrs: O,
    components: L,
    directives: P,
    filters: R
  } = t
  if (
    (c &&
      (function (e, t, n = v, o = !1) {
        C(e) && (e = sr(e))
        for (const r in e) {
          const n = e[r]
          let i
          ;(i = A(n)
            ? 'default' in n
              ? Wn(n.from || r, n.default, !0)
              : Wn(n.from || r)
            : Wn(n)),
            Qt(i) && o
              ? Object.defineProperty(t, r, {
                  enumerable: !0,
                  configurable: !0,
                  get: () => i.value,
                  set: (e) => (i.value = e)
                })
              : (t[r] = i)
        }
      })(c, o, null, e.appContext.config.unwrapInjectedRef),
    a)
  )
    for (const v in a) {
      const e = a[v]
      I(e) && (o[v] = e.bind(n))
    }
  if (r) {
    const t = r.call(n, n)
    A(t) && (e.data = Vt(t))
  }
  if (((Zo = !0), i))
    for (const C in i) {
      const e = i[C],
        t = I(e) ? e.bind(n, n) : I(e.get) ? e.get.bind(n, n) : v,
        r = !I(e) && I(e.set) ? e.set.bind(n) : v,
        a = mi({ get: t, set: r })
      Object.defineProperty(o, C, {
        enumerable: !0,
        configurable: !0,
        get: () => a.value,
        set: (e) => (a.value = e)
      })
    }
  if (s) for (const v in s) nr(s[v], o, n, v)
  if (l) {
    const e = I(l) ? l.call(n) : l
    Reflect.ownKeys(e).forEach((t) => {
      zn(t, e[t])
    })
  }
  function M(e, t) {
    C(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n))
  }
  if (
    (u && tr(u, e, 'c'),
    M($o, d),
    M(Oo, p),
    M(Io, f),
    M(Lo, h),
    M(vo, g),
    M(yo, m),
    M(No, E),
    M(Bo, T),
    M(Mo, S),
    M(Po, _),
    M(Ao, w),
    M(Ro, k),
    C($))
  )
    if ($.length) {
      const t = e.exposed || (e.exposed = {})
      $.forEach((e) => {
        Object.defineProperty(t, e, { get: () => n[e], set: (t) => (n[e] = t) })
      })
    } else e.exposed || (e.exposed = {})
  x && e.render === v && (e.render = x),
    null != O && (e.inheritAttrs = O),
    L && (e.components = L),
    P && (e.directives = P)
  const B = e.appContext.config.globalProperties.$applyOptions
  B && B(t, e, n)
}
function tr(e, t, n) {
  dn(C(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function nr(e, t, n, o) {
  const r = o.includes('.') ? Kn(n, o) : () => n[o]
  if (L(e)) {
    const n = t[e]
    I(n) && Yn(r, n)
  } else if (I(e)) Yn(r, e.bind(n))
  else if (A(e))
    if (C(e)) e.forEach((e) => nr(e, t, n, o))
    else {
      const o = I(e.handler) ? e.handler.bind(n) : t[e.handler]
      I(o) && Yn(r, o, e)
    }
}
function or(e) {
  const t = e.type,
    { mixins: n, extends: o } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: a }
    } = e.appContext,
    s = i.get(t)
  let l
  return (
    s
      ? (l = s)
      : r.length || n || o
        ? ((l = {}), r.length && r.forEach((e) => rr(l, e, a, !0)), rr(l, t, a))
        : (l = t),
    A(t) && i.set(t, l),
    l
  )
}
function rr(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t
  i && rr(e, i, n, !0), r && r.forEach((t) => rr(e, t, n, !0))
  for (const a in t)
    if (o && 'expose' === a);
    else {
      const o = ir[a] || (n && n[a])
      e[a] = o ? o(e[a], t[a]) : t[a]
    }
  return e
}
const ir = {
  data: ar,
  props: cr,
  emits: cr,
  methods: cr,
  computed: cr,
  beforeCreate: lr,
  created: lr,
  beforeMount: lr,
  mounted: lr,
  beforeUpdate: lr,
  updated: lr,
  beforeDestroy: lr,
  beforeUnmount: lr,
  destroyed: lr,
  unmounted: lr,
  activated: lr,
  deactivated: lr,
  errorCaptured: lr,
  serverPrefetch: lr,
  components: cr,
  directives: cr,
  watch: function (e, t) {
    if (!e) return t
    if (!t) return e
    const n = x(Object.create(null), e)
    for (const o in t) n[o] = lr(e[o], t[o])
    return n
  },
  provide: ar,
  inject: function (e, t) {
    return cr(sr(e), sr(t))
  }
}
function ar(e, t) {
  return t
    ? e
      ? function () {
          return x(I(e) ? e.call(this, this) : e, I(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function sr(e) {
  if (C(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function lr(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function cr(e, t) {
  return e ? x(x(Object.create(null), e), t) : t
}
function ur(e, t, n, o = !1) {
  const r = {},
    i = {}
  G(i, Hr, 1), (e.propsDefaults = Object.create(null)), dr(e, t, r, i)
  for (const a in e.propsOptions[0]) a in r || (r[a] = void 0)
  n
    ? (e.props = o ? r : Dt(r, !1, dt, Lt, Rt))
    : e.type.props
      ? (e.props = r)
      : (e.props = i),
    (e.attrs = i)
}
function dr(e, t, n, o) {
  const [r, i] = e.propsOptions
  let a,
    s = !1
  if (t)
    for (let l in t) {
      if (j(l)) continue
      const c = t[l]
      let u
      r && E(r, (u = q(l)))
        ? i && i.includes(u)
          ? ((a || (a = {}))[u] = c)
          : (n[u] = c)
        : An(e.emitsOptions, l) ||
          (l in o && c === o[l]) ||
          ((o[l] = c), (s = !0))
    }
  if (i) {
    const t = Ht(n),
      o = a || g
    for (let a = 0; a < i.length; a++) {
      const s = i[a]
      n[s] = pr(r, t, s, o[s], e, !E(o, s))
    }
  }
  return s
}
function pr(e, t, n, o, r, i) {
  const a = e[n]
  if (null != a) {
    const e = E(a, 'default')
    if (e && void 0 === o) {
      const e = a.default
      if (a.type !== Function && I(e)) {
        const { propsDefaults: i } = r
        n in i ? (o = i[n]) : (li(r), (o = i[n] = e.call(null, t)), ci())
      } else o = e
    }
    a[0] && (i && !e ? (o = !1) : !a[1] || ('' !== o && o !== W(n)) || (o = !0))
  }
  return o
}
function fr(e, t, n = !1) {
  const o = t.propsCache,
    r = o.get(e)
  if (r) return r
  const i = e.props,
    a = {},
    s = []
  let l = !1
  if (!I(e)) {
    const o = (e) => {
      l = !0
      const [n, o] = fr(e, t, !0)
      x(a, n), o && s.push(...o)
    }
    !n && t.mixins.length && t.mixins.forEach(o),
      e.extends && o(e.extends),
      e.mixins && e.mixins.forEach(o)
  }
  if (!i && !l) return A(e) && o.set(e, m), m
  if (C(i))
    for (let u = 0; u < i.length; u++) {
      const e = q(i[u])
      hr(e) && (a[e] = g)
    }
  else if (i)
    for (const u in i) {
      const e = q(u)
      if (hr(e)) {
        const t = i[u],
          n = (a[e] = C(t) || I(t) ? { type: t } : Object.assign({}, t))
        if (n) {
          const t = vr(Boolean, n.type),
            o = vr(String, n.type)
          ;(n[0] = t > -1),
            (n[1] = o < 0 || t < o),
            (t > -1 || E(n, 'default')) && s.push(e)
        }
      }
    }
  const c = [a, s]
  return A(e) && o.set(e, c), c
}
function hr(e) {
  return '$' !== e[0]
}
function gr(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : null === e ? 'null' : ''
}
function mr(e, t) {
  return gr(e) === gr(t)
}
function vr(e, t) {
  return C(t) ? t.findIndex((t) => mr(t, e)) : I(t) && mr(t, e) ? 0 : -1
}
const yr = (e) => '_' === e[0] || '$stable' === e,
  _r = (e) => (C(e) ? e.map(Zr) : [Zr(e)]),
  br = (e, t, n) => {
    if (t._n) return t
    const o = Nn((...e) => _r(t(...e)), n)
    return (o._c = !1), o
  },
  wr = (e, t, n) => {
    const o = e._ctx
    for (const r in e) {
      if (yr(r)) continue
      const n = e[r]
      if (I(n)) t[r] = br(0, n, o)
      else if (null != n) {
        const e = _r(n)
        t[r] = () => e
      }
    }
  },
  xr = (e, t) => {
    const n = _r(t)
    e.slots.default = () => n
  }
function Tr() {
  return {
    app: null,
    config: {
      isNativeTag: y,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let Sr = 0
function Er(e, t) {
  return function (n, o = null) {
    I(n) || (n = Object.assign({}, n)), null == o || A(o) || (o = null)
    const r = Tr(),
      i = new Set()
    let a = !1
    const s = (r.app = {
      _uid: Sr++,
      _component: n,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: bi,
      get config() {
        return r.config
      },
      set config(e) {},
      use: (e, ...t) => (
        i.has(e) ||
          (e && I(e.install)
            ? (i.add(e), e.install(s, ...t))
            : I(e) && (i.add(e), e(s, ...t))),
        s
      ),
      mixin: (e) => (r.mixins.includes(e) || r.mixins.push(e), s),
      component: (e, t) => (t ? ((r.components[e] = t), s) : r.components[e]),
      directive: (e, t) => (t ? ((r.directives[e] = t), s) : r.directives[e]),
      mount(i, l, c) {
        if (!a) {
          const u = Gr(n, o)
          return (
            (u.appContext = r),
            l && t ? t(u, i) : e(u, i, c),
            (a = !0),
            (s._container = i),
            (i.__vue_app__ = s),
            (s._instance = u.component),
            hi(u.component) || u.component.proxy
          )
        }
      },
      unmount() {
        a && (e(null, s._container), delete s._container.__vue_app__)
      },
      provide: (e, t) => ((r.provides[e] = t), s)
    })
    return s
  }
}
function Cr(e, t, n, o, r = !1) {
  if (C(e))
    return void e.forEach((e, i) => Cr(e, t && (C(t) ? t[i] : t), n, o, r))
  if (lo(o) && !r) return
  const i = 4 & o.shapeFlag ? hi(o.component) || o.component.proxy : o.el,
    a = r ? null : i,
    { i: s, r: l } = e,
    c = t && t.r,
    u = s.refs === g ? (s.refs = {}) : s.refs,
    d = s.setupState
  if (
    (null != c &&
      c !== l &&
      (L(c)
        ? ((u[c] = null), E(d, c) && (d[c] = null))
        : Qt(c) && (c.value = null)),
    I(l))
  )
    un(l, s, 12, [a, u])
  else {
    const t = L(l),
      o = Qt(l)
    if (t || o) {
      const s = () => {
        if (e.f) {
          const n = t ? (E(d, l) ? d[l] : u[l]) : l.value
          r
            ? C(n) && T(n, i)
            : C(n)
              ? n.includes(i) || n.push(i)
              : t
                ? ((u[l] = [i]), E(d, l) && (d[l] = u[l]))
                : ((l.value = [i]), e.k && (u[e.k] = l.value))
        } else
          t
            ? ((u[l] = a), E(d, l) && (d[l] = a))
            : o && ((l.value = a), e.k && (u[e.k] = a))
      }
      a ? ((s.id = -1), kr(s, n)) : s()
    }
  }
}
const kr = function (e, t) {
  var n
  t && t.pendingBranch
    ? C(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : (C((n = e))
        ? vn.push(...n)
        : (yn && yn.includes(n, n.allowRecurse ? _n + 1 : _n)) || vn.push(n),
      Sn())
}
function $r(e) {
  return (function (e, t) {
    ;(
      Q ||
      (Q =
        'undefined' != typeof globalThis
          ? globalThis
          : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
              ? window
              : 'undefined' != typeof global
                ? global
                : {})
    ).__VUE__ = !0
    const {
        insert: n,
        remove: o,
        patchProp: r,
        forcePatchProp: i,
        createElement: a,
        createText: s,
        createComment: l,
        setText: c,
        setElementText: u,
        parentNode: d,
        nextSibling: p,
        setScopeId: f = v,
        insertStaticContent: h
      } = e,
      y = (
        e,
        t,
        n,
        o = null,
        r = null,
        i = null,
        a = !1,
        s = null,
        l = !!t.dynamicChildren
      ) => {
        if (e === t) return
        e && !Wr(e, t) && ((o = te(e)), Y(e, r, i, !0), (e = null)),
          -2 === t.patchFlag && ((l = !1), (t.dynamicChildren = null))
        const { type: c, ref: u, shapeFlag: d } = t
        switch (c) {
          case Pr:
            _(e, t, n, o)
            break
          case Ar:
            b(e, t, n, o)
            break
          case Rr:
            null == e && w(t, n, o, a)
            break
          case Lr:
            A(e, t, n, o, r, i, a, s, l)
            break
          default:
            1 & d
              ? C(e, t, n, o, r, i, a, s, l)
              : 6 & d
                ? M(e, t, n, o, r, i, a, s, l)
                : (64 & d || 128 & d) &&
                  c.process(e, t, n, o, r, i, a, s, l, oe)
        }
        null != u && r && Cr(u, e && e.ref, i, t || e, !t)
      },
      _ = (e, t, o, r) => {
        if (null == e) n((t.el = s(t.children)), o, r)
        else {
          const n = (t.el = e.el)
          t.children !== e.children && c(n, t.children)
        }
      },
      b = (e, t, o, r) => {
        null == e ? n((t.el = l(t.children || '')), o, r) : (t.el = e.el)
      },
      w = (e, t, n, o) => {
        ;[e.el, e.anchor] = h(e.children, t, n, o, e.el, e.anchor)
      },
      T = ({ el: e, anchor: t }, o, r) => {
        let i
        for (; e && e !== t; ) (i = p(e)), n(e, o, r), (e = i)
        n(t, o, r)
      },
      S = ({ el: e, anchor: t }) => {
        let n
        for (; e && e !== t; ) (n = p(e)), o(e), (e = n)
        o(t)
      },
      C = (e, t, n, o, r, i, a, s, l) => {
        ;(a = a || 'svg' === t.type),
          null == e ? k(t, n, o, r, i, a, s, l) : I(e, t, r, i, a, s, l)
      },
      k = (e, t, o, i, s, l, c, d) => {
        let p, f
        const { type: h, props: g, shapeFlag: m, transition: v, dirs: y } = e
        if (
          ((p = e.el = a(e.type, l, g && g.is, g)),
          8 & m
            ? u(p, e.children)
            : 16 & m &&
              O(e.children, p, null, i, s, l && 'foreignObject' !== h, c, d),
          y && jo(e, null, i, 'created'),
          $(p, e, e.scopeId, c, i),
          g)
        ) {
          for (const t in g)
            'value' === t ||
              j(t) ||
              r(p, t, null, g[t], l, e.children, i, s, ee)
          'value' in g && r(p, 'value', null, g.value),
            (f = g.onVnodeBeforeMount) && oi(f, i, e)
        }
        Object.defineProperty(p, '__vueParentComponent', {
          value: i,
          enumerable: !1
        }),
          y && jo(e, null, i, 'beforeMount')
        const _ = (!s || (s && !s.pendingBranch)) && v && !v.persisted
        _ && v.beforeEnter(p),
          n(p, t, o),
          ((f = g && g.onVnodeMounted) || _ || y) &&
            kr(() => {
              f && oi(f, i, e), _ && v.enter(p), y && jo(e, null, i, 'mounted')
            }, s)
      },
      $ = (e, t, n, o, r) => {
        if ((n && f(e, n), o)) for (let i = 0; i < o.length; i++) f(e, o[i])
        if (r) {
          if (t === r.subTree) {
            const t = r.vnode
            $(e, t, t.scopeId, t.slotScopeIds, r.parent)
          }
        }
      },
      O = (e, t, n, o, r, i, a, s, l = 0) => {
        for (let c = l; c < e.length; c++) {
          const l = (e[c] = s ? ei(e[c]) : Zr(e[c]))
          y(null, l, t, n, o, r, i, a, s)
        }
      },
      I = (e, t, n, o, a, s, l) => {
        const c = (t.el = e.el)
        let { patchFlag: d, dynamicChildren: p, dirs: f } = t
        d |= 16 & e.patchFlag
        const h = e.props || g,
          m = t.props || g
        let v
        n && Or(n, !1),
          (v = m.onVnodeBeforeUpdate) && oi(v, n, t, e),
          f && jo(t, e, n, 'beforeUpdate'),
          n && Or(n, !0)
        const y = a && 'foreignObject' !== t.type
        if (
          (p
            ? L(e.dynamicChildren, p, c, n, o, y, s)
            : l || F(e, t, c, null, n, o, y, s, !1),
          d > 0)
        ) {
          if (16 & d) P(c, t, h, m, n, o, a)
          else if (
            (2 & d && h.class !== m.class && r(c, 'class', null, m.class, a),
            4 & d && r(c, 'style', h.style, m.style, a),
            8 & d)
          ) {
            const s = t.dynamicProps
            for (let t = 0; t < s.length; t++) {
              const l = s[t],
                u = h[l],
                d = m[l]
              ;(d !== u || 'value' === l || (i && i(c, l))) &&
                r(c, l, u, d, a, e.children, n, o, ee)
            }
          }
          1 & d && e.children !== t.children && u(c, t.children)
        } else l || null != p || P(c, t, h, m, n, o, a)
        ;((v = m.onVnodeUpdated) || f) &&
          kr(() => {
            v && oi(v, n, t, e), f && jo(t, e, n, 'updated')
          }, o)
      },
      L = (e, t, n, o, r, i, a) => {
        for (let s = 0; s < t.length; s++) {
          const l = e[s],
            c = t[s],
            u =
              l.el && (l.type === Lr || !Wr(l, c) || 70 & l.shapeFlag)
                ? d(l.el)
                : n
          y(l, c, u, null, o, r, i, a, !0)
        }
      },
      P = (e, t, n, o, a, s, l) => {
        if (n !== o) {
          if (n !== g)
            for (const i in n)
              j(i) || i in o || r(e, i, n[i], null, l, t.children, a, s, ee)
          for (const c in o) {
            if (j(c)) continue
            const u = o[c],
              d = n[c]
            ;((u !== d && 'value' !== c) || (i && i(e, c))) &&
              r(e, c, d, u, l, t.children, a, s, ee)
          }
          'value' in o && r(e, 'value', n.value, o.value)
        }
      },
      A = (e, t, o, r, i, a, l, c, u) => {
        const d = (t.el = e ? e.el : s('')),
          p = (t.anchor = e ? e.anchor : s(''))
        let { patchFlag: f, dynamicChildren: h, slotScopeIds: g } = t
        g && (c = c ? c.concat(g) : g),
          null == e
            ? (n(d, o, r), n(p, o, r), O(t.children, o, p, i, a, l, c, u))
            : f > 0 && 64 & f && h && e.dynamicChildren
              ? (L(e.dynamicChildren, h, o, i, a, l, c),
                (null != t.key || (i && t === i.subTree)) && Ir(e, t, !0))
              : F(e, t, o, p, i, a, l, c, u)
      },
      M = (e, t, n, o, r, i, a, s, l) => {
        ;(t.slotScopeIds = s),
          null == e
            ? 512 & t.shapeFlag
              ? r.ctx.activate(t, n, o, a, l)
              : B(t, n, o, r, i, a, l)
            : N(e, t, l)
      },
      B = (e, t, n, o, r, i, a) => {
        const s = (e.component = (function (e, t, n) {
          const o = e.type,
            r = (t ? t.appContext : e.appContext) || ri,
            i = {
              uid: ii++,
              vnode: e,
              type: o,
              parent: t,
              appContext: r,
              root: null,
              next: null,
              subTree: null,
              effect: null,
              update: null,
              scope: new Ie(!0),
              render: null,
              proxy: null,
              exposed: null,
              exposeProxy: null,
              withProxy: null,
              provides: t ? t.provides : Object.create(r.provides),
              accessCache: null,
              renderCache: [],
              components: null,
              directives: null,
              propsOptions: fr(o, r),
              emitsOptions: Pn(o, r),
              emit: null,
              emitted: null,
              propsDefaults: g,
              inheritAttrs: o.inheritAttrs,
              ctx: g,
              data: g,
              props: g,
              attrs: g,
              slots: g,
              refs: g,
              setupState: g,
              setupContext: null,
              suspense: n,
              suspenseId: n ? n.pendingId : 0,
              asyncDep: null,
              asyncResolved: !1,
              isMounted: !1,
              isUnmounted: !1,
              isDeactivated: !1,
              bc: null,
              c: null,
              bm: null,
              m: null,
              bu: null,
              u: null,
              um: null,
              bum: null,
              bda: null,
              da: null,
              ba: null,
              a: null,
              rtg: null,
              rtc: null,
              ec: null,
              sp: null
            }
          ;(i.ctx = { _: i }),
            (i.root = t ? t.root : i),
            (i.emit = In.bind(null, i)),
            (i.$pageInstance = t && t.$pageInstance),
            e.ce && e.ce(i)
          return i
        })(e, o, r))
        if (
          (po(e) && (s.ctx.renderer = oe),
          (function (e, t = !1) {
            di = t
            const { props: n, children: o } = e.vnode,
              r = ui(e)
            ur(e, n, r, t),
              ((e, t) => {
                if (32 & e.vnode.shapeFlag) {
                  const n = t._
                  n ? ((e.slots = Ht(t)), G(t, '_', n)) : wr(t, (e.slots = {}))
                } else (e.slots = {}), t && xr(e, t)
                G(e.slots, Hr, 1)
              })(e, o)
            const i = r
              ? (function (e, t) {
                  const n = e.type
                  ;(e.accessCache = Object.create(null)),
                    (e.proxy = Ut(new Proxy(e.ctx, Jo)))
                  const { setup: o } = n
                  if (o) {
                    const n = (e.setupContext =
                      o.length > 1
                        ? (function (e) {
                            const t = (t) => {
                              e.exposed = t || {}
                            }
                            let n
                            return {
                              get attrs() {
                                return (
                                  n ||
                                  (n = (function (e) {
                                    return new Proxy(e.attrs, {
                                      get: (t, n) => (Xe(e, 0, '$attrs'), t[n])
                                    })
                                  })(e))
                                )
                              },
                              slots: e.slots,
                              emit: e.emit,
                              expose: t
                            }
                          })(e)
                        : null)
                    li(e), Ue()
                    const r = un(o, e, 0, [e.props, n])
                    if ((Ye(), ci(), R(r))) {
                      if ((r.then(ci, ci), t))
                        return r
                          .then((n) => {
                            pi(e, n, t)
                          })
                          .catch((t) => {
                            pn(t, e, 0)
                          })
                      e.asyncDep = r
                    } else pi(e, r, t)
                  } else fi(e, t)
                })(e, t)
              : void 0
            di = !1
          })(s),
          s.asyncDep)
        ) {
          if ((r && r.registerDep(s, V), !e.el)) {
            const e = (s.subTree = Gr(Ar))
            b(null, e, t, n)
          }
        } else V(s, e, t, n, r, i, a)
      },
      N = (e, t, n) => {
        const o = (t.component = e.component)
        if (
          (function (e, t, n) {
            const { props: o, children: r, component: i } = e,
              { props: a, children: s, patchFlag: l } = t,
              c = i.emitsOptions
            if (t.dirs || t.transition) return !0
            if (!(n && l >= 0))
              return (
                !((!r && !s) || (s && s.$stable)) ||
                (o !== a && (o ? !a || Fn(o, a, c) : !!a))
              )
            if (1024 & l) return !0
            if (16 & l) return o ? Fn(o, a, c) : !!a
            if (8 & l) {
              const e = t.dynamicProps
              for (let t = 0; t < e.length; t++) {
                const n = e[t]
                if (a[n] !== o[n] && !An(c, n)) return !0
              }
            }
            return !1
          })(e, t, n)
        ) {
          if (o.asyncDep && !o.asyncResolved) return void D(o, t, n)
          ;(o.next = t),
            (function (e) {
              const t = gn.indexOf(e)
              t > mn && gn.splice(t, 1)
            })(o.update),
            o.update()
        } else (t.el = e.el), (o.vnode = t)
      },
      V = (e, t, n, o, r, i, a) => {
        const s = () => {
            if (e.isMounted) {
              let t,
                { next: n, bu: o, u: s, parent: l, vnode: c } = e,
                u = n
              Or(e, !1),
                n ? ((n.el = c.el), D(e, n, a)) : (n = c),
                o && X(o),
                (t = n.props && n.props.onVnodeBeforeUpdate) && oi(t, l, n, c),
                Or(e, !0)
              const p = Vn(e),
                f = e.subTree
              ;(e.subTree = p),
                y(f, p, d(f.el), te(f), e, r, i),
                (n.el = p.el),
                null === u &&
                  (function ({ vnode: e, parent: t }, n) {
                    for (; t && t.subTree === e; )
                      ((e = t.vnode).el = n), (t = t.parent)
                  })(e, p.el),
                s && kr(s, r),
                (t = n.props && n.props.onVnodeUpdated) &&
                  kr(() => oi(t, l, n, c), r)
            } else {
              let a
              const { el: s, props: l } = t,
                { bm: c, m: u, parent: d } = e,
                p = lo(t)
              if (
                (Or(e, !1),
                c && X(c),
                !p && (a = l && l.onVnodeBeforeMount) && oi(a, d, t),
                Or(e, !0),
                s && ie)
              ) {
                const n = () => {
                  ;(e.subTree = Vn(e)), ie(s, e.subTree, e, r, null)
                }
                p
                  ? t.type.__asyncLoader().then(() => !e.isUnmounted && n())
                  : n()
              } else {
                const a = (e.subTree = Vn(e))
                y(null, a, n, o, e, r, i), (t.el = a.el)
              }
              if ((u && kr(u, r), !p && (a = l && l.onVnodeMounted))) {
                const e = t
                kr(() => oi(a, d, e), r)
              }
              const { ba: f, a: h } = e
              ;(256 & t.shapeFlag ||
                (d && lo(d.vnode) && 256 & d.vnode.shapeFlag)) &&
                (f && So(f), h && kr(h, r), f && kr(() => Eo(f), r)),
                (e.isMounted = !0),
                (t = n = o = null)
            }
          },
          l = (e.effect = new qe(s, () => Tn(c), e.scope)),
          c = (e.update = () => l.run())
        ;(c.id = e.uid), Or(e, !0), c()
      },
      D = (e, t, n) => {
        t.component = e
        const o = e.vnode.props
        ;(e.vnode = t),
          (e.next = null),
          (function (e, t, n, o) {
            const {
                props: r,
                attrs: i,
                vnode: { patchFlag: a }
              } = e,
              s = Ht(r),
              [l] = e.propsOptions
            let c = !1
            if (!(o || a > 0) || 16 & a) {
              let o
              dr(e, t, r, i) && (c = !0)
              for (const i in s)
                (t && (E(t, i) || ((o = W(i)) !== i && E(t, o)))) ||
                  (l
                    ? !n ||
                      (void 0 === n[i] && void 0 === n[o]) ||
                      (r[i] = pr(l, s, i, void 0, e, !0))
                    : delete r[i])
              if (i !== s)
                for (const e in i) (t && E(t, e)) || (delete i[e], (c = !0))
            } else if (8 & a) {
              const n = e.vnode.dynamicProps
              for (let o = 0; o < n.length; o++) {
                let a = n[o]
                if (An(e.emitsOptions, a)) continue
                const u = t[a]
                if (l)
                  if (E(i, a)) u !== i[a] && ((i[a] = u), (c = !0))
                  else {
                    const t = q(a)
                    r[t] = pr(l, s, t, u, e, !1)
                  }
                else u !== i[a] && ((i[a] = u), (c = !0))
              }
            }
            c && Ke(e, 'set', '$attrs')
          })(e, t.props, o, n),
          ((e, t, n) => {
            const { vnode: o, slots: r } = e
            let i = !0,
              a = g
            if (32 & o.shapeFlag) {
              const e = t._
              e
                ? n && 1 === e
                  ? (i = !1)
                  : (x(r, t), n || 1 !== e || delete r._)
                : ((i = !t.$stable), wr(t, r)),
                (a = t)
            } else t && (xr(e, t), (a = { default: 1 }))
            if (i) for (const s in r) yr(s) || s in a || delete r[s]
          })(e, t.children, n),
          Ue(),
          En(),
          Ye()
      },
      F = (e, t, n, o, r, i, a, s, l = !1) => {
        const c = e && e.children,
          d = e ? e.shapeFlag : 0,
          p = t.children,
          { patchFlag: f, shapeFlag: h } = t
        if (f > 0) {
          if (128 & f) return void H(c, p, n, o, r, i, a, s, l)
          if (256 & f) return void z(c, p, n, o, r, i, a, s, l)
        }
        8 & h
          ? (16 & d && ee(c, r, i), p !== c && u(n, p))
          : 16 & d
            ? 16 & h
              ? H(c, p, n, o, r, i, a, s, l)
              : ee(c, r, i, !0)
            : (8 & d && u(n, ''), 16 & h && O(p, n, o, r, i, a, s, l))
      },
      z = (e, t, n, o, r, i, a, s, l) => {
        t = t || m
        const c = (e = e || m).length,
          u = t.length,
          d = Math.min(c, u)
        let p
        for (p = 0; p < d; p++) {
          const o = (t[p] = l ? ei(t[p]) : Zr(t[p]))
          y(e[p], o, n, null, r, i, a, s, l)
        }
        c > u ? ee(e, r, i, !0, !1, d) : O(t, n, o, r, i, a, s, l, d)
      },
      H = (e, t, n, o, r, i, a, s, l) => {
        let c = 0
        const u = t.length
        let d = e.length - 1,
          p = u - 1
        for (; c <= d && c <= p; ) {
          const o = e[c],
            u = (t[c] = l ? ei(t[c]) : Zr(t[c]))
          if (!Wr(o, u)) break
          y(o, u, n, null, r, i, a, s, l), c++
        }
        for (; c <= d && c <= p; ) {
          const o = e[d],
            c = (t[p] = l ? ei(t[p]) : Zr(t[p]))
          if (!Wr(o, c)) break
          y(o, c, n, null, r, i, a, s, l), d--, p--
        }
        if (c > d) {
          if (c <= p) {
            const e = p + 1,
              d = e < u ? t[e].el : o
            for (; c <= p; )
              y(null, (t[c] = l ? ei(t[c]) : Zr(t[c])), n, d, r, i, a, s, l),
                c++
          }
        } else if (c > p) for (; c <= d; ) Y(e[c], r, i, !0), c++
        else {
          const f = c,
            h = c,
            g = new Map()
          for (c = h; c <= p; c++) {
            const e = (t[c] = l ? ei(t[c]) : Zr(t[c]))
            null != e.key && g.set(e.key, c)
          }
          let v,
            _ = 0
          const b = p - h + 1
          let w = !1,
            x = 0
          const T = new Array(b)
          for (c = 0; c < b; c++) T[c] = 0
          for (c = f; c <= d; c++) {
            const o = e[c]
            if (_ >= b) {
              Y(o, r, i, !0)
              continue
            }
            let u
            if (null != o.key) u = g.get(o.key)
            else
              for (v = h; v <= p; v++)
                if (0 === T[v - h] && Wr(o, t[v])) {
                  u = v
                  break
                }
            void 0 === u
              ? Y(o, r, i, !0)
              : ((T[u - h] = c + 1),
                u >= x ? (x = u) : (w = !0),
                y(o, t[u], n, null, r, i, a, s, l),
                _++)
          }
          const S = w
            ? (function (e) {
                const t = e.slice(),
                  n = [0]
                let o, r, i, a, s
                const l = e.length
                for (o = 0; o < l; o++) {
                  const l = e[o]
                  if (0 !== l) {
                    if (((r = n[n.length - 1]), e[r] < l)) {
                      ;(t[o] = r), n.push(o)
                      continue
                    }
                    for (i = 0, a = n.length - 1; i < a; )
                      (s = (i + a) >> 1), e[n[s]] < l ? (i = s + 1) : (a = s)
                    l < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), (n[i] = o))
                  }
                }
                ;(i = n.length), (a = n[i - 1])
                for (; i-- > 0; ) (n[i] = a), (a = t[a])
                return n
              })(T)
            : m
          for (v = S.length - 1, c = b - 1; c >= 0; c--) {
            const e = h + c,
              d = t[e],
              p = e + 1 < u ? t[e + 1].el : o
            0 === T[c]
              ? y(null, d, n, p, r, i, a, s, l)
              : w && (v < 0 || c !== S[v] ? U(d, n, p, 2) : v--)
          }
        }
      },
      U = (e, t, o, r, i = null) => {
        const { el: a, type: s, transition: l, children: c, shapeFlag: u } = e
        if (6 & u) return void U(e.component.subTree, t, o, r)
        if (128 & u) return void e.suspense.move(t, o, r)
        if (64 & u) return void s.move(e, t, o, oe)
        if (s === Lr) {
          n(a, t, o)
          for (let e = 0; e < c.length; e++) U(c[e], t, o, r)
          return void n(e.anchor, t, o)
        }
        if (s === Rr) return void T(e, t, o)
        if (2 !== r && 1 & u && l)
          if (0 === r) l.beforeEnter(a), n(a, t, o), kr(() => l.enter(a), i)
          else {
            const { leave: e, delayLeave: r, afterLeave: i } = l,
              s = () => n(a, t, o),
              c = () => {
                e(a, () => {
                  s(), i && i()
                })
              }
            r ? r(a, s, c) : c()
          }
        else n(a, t, o)
      },
      Y = (e, t, n, o = !1, r = !1) => {
        const {
          type: i,
          props: a,
          ref: s,
          children: l,
          dynamicChildren: c,
          shapeFlag: u,
          patchFlag: d,
          dirs: p
        } = e
        if ((null != s && Cr(s, null, n, e, !0), 256 & u))
          return void t.ctx.deactivate(e)
        const f = 1 & u && p,
          h = !lo(e)
        let g
        if ((h && (g = a && a.onVnodeBeforeUnmount) && oi(g, t, e), 6 & u))
          Z(e.component, n, o)
        else {
          if (128 & u) return void e.suspense.unmount(n, o)
          f && jo(e, null, t, 'beforeUnmount'),
            64 & u
              ? e.type.remove(e, t, n, r, oe, o)
              : c && (i !== Lr || (d > 0 && 64 & d))
                ? ee(c, t, n, !1, !0)
                : ((i === Lr && 384 & d) || (!r && 16 & u)) && ee(l, t, n),
            o && K(e)
        }
        ;((h && (g = a && a.onVnodeUnmounted)) || f) &&
          kr(() => {
            g && oi(g, t, e), f && jo(e, null, t, 'unmounted')
          }, n)
      },
      K = (e) => {
        const { type: t, el: n, anchor: r, transition: i } = e
        if (t === Lr) return void J(n, r)
        if (t === Rr) return void S(e)
        const a = () => {
          o(n), i && !i.persisted && i.afterLeave && i.afterLeave()
        }
        if (1 & e.shapeFlag && i && !i.persisted) {
          const { leave: t, delayLeave: o } = i,
            r = () => t(n, a)
          o ? o(e.el, a, r) : r()
        } else a()
      },
      J = (e, t) => {
        let n
        for (; e !== t; ) (n = p(e)), o(e), (e = n)
        o(t)
      },
      Z = (e, t, n) => {
        const { bum: o, scope: r, update: i, subTree: a, um: s } = e
        o && X(o),
          r.stop(),
          i && ((i.active = !1), Y(a, e, t, n)),
          s && kr(s, t),
          kr(() => {
            e.isUnmounted = !0
          }, t),
          t &&
            t.pendingBranch &&
            !t.isUnmounted &&
            e.asyncDep &&
            !e.asyncResolved &&
            e.suspenseId === t.pendingId &&
            (t.deps--, 0 === t.deps && t.resolve())
      },
      ee = (e, t, n, o = !1, r = !1, i = 0) => {
        for (let a = i; a < e.length; a++) Y(e[a], t, n, o, r)
      },
      te = (e) =>
        6 & e.shapeFlag
          ? te(e.component.subTree)
          : 128 & e.shapeFlag
            ? e.suspense.next()
            : p(e.anchor || e.el),
      ne = (e, t, n) => {
        null == e
          ? t._vnode && Y(t._vnode, null, null, !0)
          : y(t._vnode || null, e, t, null, null, null, n),
          En(),
          Cn(),
          (t._vnode = e)
      },
      oe = { p: y, um: Y, m: U, r: K, mt: B, mc: O, pc: F, pbc: L, n: te, o: e }
    let re, ie
    t && ([re, ie] = t(oe))
    return { render: ne, hydrate: re, createApp: Er(ne, re) }
  })(e)
}
function Or({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Ir(e, t, n = !1) {
  const o = e.children,
    r = t.children
  if (C(o) && C(r))
    for (let i = 0; i < o.length; i++) {
      const e = o[i]
      let t = r[i]
      1 & t.shapeFlag &&
        !t.dynamicChildren &&
        ((t.patchFlag <= 0 || 32 === t.patchFlag) &&
          ((t = r[i] = ei(r[i])), (t.el = e.el)),
        n || Ir(e, t)),
        t.type === Pr && (t.el = e.el)
    }
}
const Lr = Symbol(void 0),
  Pr = Symbol(void 0),
  Ar = Symbol(void 0),
  Rr = Symbol(void 0),
  Mr = []
let Br = null
function Nr(e = !1) {
  Mr.push((Br = e ? null : []))
}
let Vr = 1
function jr(e) {
  Vr += e
}
function Dr(e) {
  return (
    (e.dynamicChildren = Vr > 0 ? Br || m : null),
    Mr.pop(),
    (Br = Mr[Mr.length - 1] || null),
    Vr > 0 && Br && Br.push(e),
    e
  )
}
function Fr(e, t, n, o, r, i) {
  return Dr(Xr(e, t, n, o, r, i, !0))
}
function qr(e, t, n, o, r) {
  return Dr(Gr(e, t, n, o, r, !0))
}
function zr(e) {
  return !!e && !0 === e.__v_isVNode
}
function Wr(e, t) {
  return e.type === t.type && e.key === t.key
}
const Hr = '__vInternal',
  Ur = ({ key: e }) => (null != e ? e : null),
  Yr = ({ ref: e, ref_key: t, ref_for: n }) =>
    null != e
      ? L(e) || Qt(e) || I(e)
        ? { i: Rn, r: e, k: t, f: !!n }
        : e
      : null
function Xr(
  e,
  t = null,
  n = null,
  o = 0,
  r = null,
  i = e === Lr ? 0 : 1,
  a = !1,
  s = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ur(t),
    ref: t && Yr(t),
    scopeId: Mn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Rn
  }
  return (
    s
      ? (ti(l, n), 128 & i && e.normalize(l))
      : n && (l.shapeFlag |= L(n) ? 8 : 16),
    Vr > 0 &&
      !a &&
      Br &&
      (l.patchFlag > 0 || 6 & i) &&
      32 !== l.patchFlag &&
      Br.push(l),
    l
  )
}
const Gr = function (e, t = null, n = null, r = 0, i = null, a = !1) {
  ;(e && e !== Fo) || (e = Ar)
  if (zr(e)) {
    const o = Kr(e, t, !0)
    return (
      n && ti(o, n),
      Vr > 0 &&
        !a &&
        Br &&
        (6 & o.shapeFlag ? (Br[Br.indexOf(e)] = o) : Br.push(o)),
      (o.patchFlag |= -2),
      o
    )
  }
  ;(s = e), I(s) && '__vccOpts' in s && (e = e.__vccOpts)
  var s
  if (t) {
    t = (function (e) {
      return e ? (Wt(e) || Hr in e ? x({}, e) : e) : null
    })(t)
    let { class: e, style: n } = t
    e && !L(e) && (t.class = l(e)),
      A(n) && (Wt(n) && !C(n) && (n = x({}, n)), (t.style = o(n)))
  }
  const c = L(e)
    ? 1
    : qn(e)
      ? 128
      : ((e) => e.__isTeleport)(e)
        ? 64
        : A(e)
          ? 4
          : I(e)
            ? 2
            : 0
  return Xr(e, t, n, r, i, c, a, !0)
}
function Kr(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: i, children: a } = e,
    s = t ? ni(o || {}, t) : o
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: s,
    key: s && Ur(s),
    ref:
      t && t.ref ? (n && r ? (C(r) ? r.concat(Yr(t)) : [r, Yr(t)]) : Yr(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Lr ? (-1 === i ? 16 : 16 | i) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Kr(e.ssContent),
    ssFallback: e.ssFallback && Kr(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}
function Qr(e = ' ', t = 0) {
  return Gr(Pr, null, e, t)
}
function Jr(e = '', t = !1) {
  return t ? (Nr(), qr(Ar, null, e)) : Gr(Ar, null, e)
}
function Zr(e) {
  return null == e || 'boolean' == typeof e
    ? Gr(Ar)
    : C(e)
      ? Gr(Lr, null, e.slice())
      : 'object' == typeof e
        ? ei(e)
        : Gr(Pr, null, String(e))
}
function ei(e) {
  return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : Kr(e)
}
function ti(e, t) {
  let n = 0
  const { shapeFlag: o } = e
  if (null == t) t = null
  else if (C(t)) n = 16
  else if ('object' == typeof t) {
    if (65 & o) {
      const n = t.default
      return void (n && (n._c && (n._d = !1), ti(e, n()), n._c && (n._d = !0)))
    }
    {
      n = 32
      const o = t._
      o || Hr in t
        ? 3 === o &&
          Rn &&
          (1 === Rn.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
        : (t._ctx = Rn)
    }
  } else
    I(t)
      ? ((t = { default: t, _ctx: Rn }), (n = 32))
      : ((t = String(t)), 64 & o ? ((n = 16), (t = [Qr(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function ni(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const e in r)
      if ('class' === e)
        t.class !== r.class && (t.class = l([t.class, r.class]))
      else if ('style' === e) t.style = o([t.style, r.style])
      else if (b(e)) {
        const n = t[e],
          o = r[e]
        !o ||
          n === o ||
          (C(n) && n.includes(o)) ||
          (t[e] = n ? [].concat(n, o) : o)
      } else '' !== e && (t[e] = r[e])
  }
  return t
}
function oi(e, t, n, o = null) {
  dn(e, t, 7, [n, o])
}
const ri = Tr()
let ii = 0
let ai = null
const si = () => ai || Rn,
  li = (e) => {
    ;(ai = e), e.scope.on()
  },
  ci = () => {
    ai && ai.scope.off(), (ai = null)
  }
function ui(e) {
  return 4 & e.vnode.shapeFlag
}
let di = !1
function pi(e, t, n) {
  I(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : A(t) && (e.setupState = rn(t)),
    fi(e, n)
}
function fi(e, t, n) {
  const o = e.type
  e.render || (e.render = o.render || v), li(e), Ue(), er(e), Ye(), ci()
}
function hi(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(rn(Ut(e.exposed)), {
        get: (t, n) => (n in t ? t[n] : n in Ko ? Ko[n](e) : void 0),
        has: (e, t) => t in e || t in Ko
      }))
    )
}
function gi(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
const mi = (e, t) =>
  (function (e, t, n = !1) {
    let o, r
    const i = I(e)
    return (
      i ? ((o = e), (r = v)) : ((o = e.get), (r = e.set)),
      new cn(o, r, i || !r, n)
    )
  })(e, 0, di)
function vi(e, t, n) {
  const o = arguments.length
  return 2 === o
    ? A(t) && !C(t)
      ? zr(t)
        ? Gr(e, null, [t])
        : Gr(e, t)
      : Gr(e, null, t)
    : (o > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : 3 === o && zr(n) && (n = [n]),
      Gr(e, t, n))
}
const yi = Symbol(''),
  _i = () => Wn(yi),
  bi = '3.2.47',
  wi = 'undefined' != typeof document ? document : null,
  xi = wi && wi.createElement('template'),
  Ti = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, o) => {
      const r = t
        ? wi.createElementNS('http://www.w3.org/2000/svg', e)
        : wi.createElement(e, n ? { is: n } : void 0)
      return (
        'select' === e &&
          o &&
          null != o.multiple &&
          r.setAttribute('multiple', o.multiple),
        r
      )
    },
    createText: (e) => wi.createTextNode(e),
    createComment: (e) => wi.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => wi.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, o, r, i) {
      const a = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n), r !== i && (r = r.nextSibling);

        );
      else {
        xi.innerHTML = o ? `<svg>${e}</svg>` : e
        const r = xi.content
        if (o) {
          const e = r.firstChild
          for (; e.firstChild; ) r.appendChild(e.firstChild)
          r.removeChild(e)
        }
        t.insertBefore(r, n)
      }
      return [
        a ? a.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ]
    }
  }
const Si = /\s*!important$/
function Ei(e, t, n) {
  if (C(n)) n.forEach((n) => Ei(e, t, n))
  else if ((null == n && (n = ''), (n = Mi(n)), t.startsWith('--')))
    e.setProperty(t, n)
  else {
    const o = (function (e, t) {
      const n = ki[t]
      if (n) return n
      let o = q(t)
      if ('filter' !== o && o in e) return (ki[t] = o)
      o = H(o)
      for (let r = 0; r < Ci.length; r++) {
        const n = Ci[r] + o
        if (n in e) return (ki[t] = n)
      }
      return t
    })(e, t)
    Si.test(n)
      ? e.setProperty(W(o), n.replace(Si, ''), 'important')
      : (e[o] = n)
  }
}
const Ci = ['Webkit', 'Moz', 'ms'],
  ki = {}
const {
    unit: $i,
    unitRatio: Oi,
    unitPrecision: Ii
  } = { unit: 'rem', unitRatio: 10 / 320, unitPrecision: 5 },
  Li =
    ((Pi = $i),
    (Ai = Oi),
    (Ri = Ii),
    (e) =>
      e.replace(de, (e, t) => {
        if (!t) return e
        if (1 === Ai) return `${t}${Pi}`
        const n = (function (e, t) {
          const n = Math.pow(10, t + 1),
            o = Math.floor(e * n)
          return (10 * Math.round(o / 10)) / n
        })(parseFloat(t) * Ai, Ri)
        return 0 === n ? '0' : `${n}${Pi}`
      }))
var Pi, Ai, Ri
const Mi = (e) => (L(e) ? Li(e) : e),
  Bi = 'http://www.w3.org/1999/xlink'
function Ni(e, t, n, o) {
  e.addEventListener(t, n, o)
}
function Vi(e, t, n, o, r = null) {
  const i = e._vei || (e._vei = {}),
    a = i[t]
  if (o && a) a.value = o
  else {
    const [n, s] = (function (e) {
      let t
      if (ji.test(e)) {
        let n
        for (t = {}; (n = e.match(ji)); )
          (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
      }
      return [':' === e[2] ? e.slice(3) : W(e.slice(2)), t]
    })(t)
    if (o) {
      const a = (i[t] = (function (e, t) {
        const n = (e) => {
          if (e._vts) {
            if (e._vts <= n.attached) return
          } else e._vts = Date.now()
          const o = t && t.proxy,
            r = o && o.$nne,
            { value: i } = n
          if (r && C(i)) {
            const n = qi(e, i)
            for (let o = 0; o < n.length; o++) {
              const i = n[o]
              dn(i, t, 5, i.__wwe ? [e] : r(e))
            }
          } else dn(qi(e, i), t, 5, r && !i.__wwe ? r(e, i, t) : [e])
        }
        return (
          (n.value = e),
          (n.attached = (() =>
            Di || (Fi.then(() => (Di = 0)), (Di = Date.now())))()),
          n
        )
      })(o, r))
      Ni(e, n, a, s)
    } else
      a &&
        (!(function (e, t, n, o) {
          e.removeEventListener(t, n, o)
        })(e, n, a, s),
        (i[t] = void 0))
  }
}
const ji = /(?:Once|Passive|Capture)$/
let Di = 0
const Fi = Promise.resolve()
function qi(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((e) => {
        const t = (t) => !t._stopped && e && e(t)
        return (t.__wwe = e.__wwe), t
      })
    )
  }
  return t
}
const zi = /^on[a-z]/
const Wi = 'transition',
  Hi = (e, { slots: t }) =>
    vi(
      eo,
      (function (e) {
        const t = {}
        for (const x in e) x in Ui || (t[x] = e[x])
        if (!1 === e.css) return t
        const {
            name: n = 'v',
            type: o,
            duration: r,
            enterFromClass: i = `${n}-enter-from`,
            enterActiveClass: a = `${n}-enter-active`,
            enterToClass: s = `${n}-enter-to`,
            appearFromClass: l = i,
            appearActiveClass: c = a,
            appearToClass: u = s,
            leaveFromClass: d = `${n}-leave-from`,
            leaveActiveClass: p = `${n}-leave-active`,
            leaveToClass: f = `${n}-leave-to`
          } = e,
          h = (function (e) {
            if (null == e) return null
            if (A(e)) return [Gi(e.enter), Gi(e.leave)]
            {
              const t = Gi(e)
              return [t, t]
            }
          })(r),
          g = h && h[0],
          m = h && h[1],
          {
            onBeforeEnter: v,
            onEnter: y,
            onEnterCancelled: _,
            onLeave: b,
            onLeaveCancelled: w,
            onBeforeAppear: T = v,
            onAppear: S = y,
            onAppearCancelled: E = _
          } = t,
          C = (e, t, n) => {
            Qi(e, t ? u : s), Qi(e, t ? c : a), n && n()
          },
          k = (e, t) => {
            ;(e._isLeaving = !1), Qi(e, d), Qi(e, f), Qi(e, p), t && t()
          },
          $ = (e) => (t, n) => {
            const r = e ? S : y,
              a = () => C(t, e, n)
            Yi(r, [t, a]),
              Ji(() => {
                Qi(t, e ? l : i), Ki(t, e ? u : s), Xi(r) || ea(t, o, g, a)
              })
          }
        return x(t, {
          onBeforeEnter(e) {
            Yi(v, [e]), Ki(e, i), Ki(e, a)
          },
          onBeforeAppear(e) {
            Yi(T, [e]), Ki(e, l), Ki(e, c)
          },
          onEnter: $(!1),
          onAppear: $(!0),
          onLeave(e, t) {
            e._isLeaving = !0
            const n = () => k(e, t)
            Ki(e, d),
              document.body.offsetHeight,
              Ki(e, p),
              Ji(() => {
                e._isLeaving && (Qi(e, d), Ki(e, f), Xi(b) || ea(e, o, m, n))
              }),
              Yi(b, [e, n])
          },
          onEnterCancelled(e) {
            C(e, !1), Yi(_, [e])
          },
          onAppearCancelled(e) {
            C(e, !0), Yi(E, [e])
          },
          onLeaveCancelled(e) {
            k(e), Yi(w, [e])
          }
        })
      })(e),
      t
    )
Hi.displayName = 'Transition'
const Ui = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}
Hi.props = x({}, Zn, Ui)
const Yi = (e, t = []) => {
    C(e) ? e.forEach((e) => e(...t)) : e && e(...t)
  },
  Xi = (e) => !!e && (C(e) ? e.some((e) => e.length > 1) : e.length > 1)
function Gi(e) {
  const t = ((e) => {
    const t = L(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  })(e)
  return t
}
function Ki(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.add(t)),
    (e._vtc || (e._vtc = new Set())).add(t)
}
function Qi(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.remove(t))
  const { _vtc: n } = e
  n && (n.delete(t), n.size || (e._vtc = void 0))
}
function Ji(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Zi = 0
function ea(e, t, n, o) {
  const r = (e._endId = ++Zi),
    i = () => {
      r === e._endId && o()
    }
  if (n) return setTimeout(i, n)
  const {
    type: a,
    timeout: s,
    propCount: l
  } = (function (e, t) {
    const n = window.getComputedStyle(e),
      o = (e) => (n[e] || '').split(', '),
      r = o('transitionDelay'),
      i = o('transitionDuration'),
      a = ta(r, i),
      s = o('animationDelay'),
      l = o('animationDuration'),
      c = ta(s, l)
    let u = null,
      d = 0,
      p = 0
    t === Wi
      ? a > 0 && ((u = Wi), (d = a), (p = i.length))
      : 'animation' === t
        ? c > 0 && ((u = 'animation'), (d = c), (p = l.length))
        : ((d = Math.max(a, c)),
          (u = d > 0 ? (a > c ? Wi : 'animation') : null),
          (p = u ? (u === Wi ? i.length : l.length) : 0))
    const f =
      u === Wi &&
      /\b(transform|all)(,|$)/.test(o('transitionProperty').toString())
    return { type: u, timeout: d, propCount: p, hasTransform: f }
  })(e, t)
  if (!a) return o()
  const c = a + 'end'
  let u = 0
  const d = () => {
      e.removeEventListener(c, p), i()
    },
    p = (t) => {
      t.target === e && ++u >= l && d()
    }
  setTimeout(() => {
    u < l && d()
  }, s + 1),
    e.addEventListener(c, p)
}
function ta(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((t, n) => na(t) + na(e[n])))
}
function na(e) {
  return 1e3 * Number(e.slice(0, -1).replace(',', '.'))
}
const oa = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1
  return C(t) ? (e) => X(t, e) : t
}
function ra(e) {
  e.target.composing = !0
}
function ia(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const aa = {
    created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
      e._assign = oa(r)
      const i = o || (r.props && 'number' === r.props.type)
      Ni(e, t ? 'change' : 'input', (t) => {
        if (t.target.composing) return
        let o = e.value
        n && (o = o.trim()), i && (o = K(o)), e._assign(o)
      }),
        n &&
          Ni(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t ||
          (Ni(e, 'compositionstart', ra),
          Ni(e, 'compositionend', ia),
          Ni(e, 'change', ia))
    },
    mounted(e, { value: t }) {
      e.value = null == t ? '' : t
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: o, number: r } },
      i
    ) {
      if (((e._assign = oa(i)), e.composing)) return
      if (document.activeElement === e && 'range' !== e.type) {
        if (n) return
        if (o && e.value.trim() === t) return
        if ((r || 'number' === e.type) && K(e.value) === t) return
      }
      const a = null == t ? '' : t
      e.value !== a && (e.value = a)
    }
  },
  sa = {
    deep: !0,
    created(e, t, n) {
      ;(e._assign = oa(n)),
        Ni(e, 'change', () => {
          const t = e._modelValue,
            n = pa(e),
            o = e.checked,
            r = e._assign
          if (C(t)) {
            const e = p(t, n),
              i = -1 !== e
            if (o && !i) r(t.concat(n))
            else if (!o && i) {
              const n = [...t]
              n.splice(e, 1), r(n)
            }
          } else if ($(t)) {
            const e = new Set(t)
            o ? e.add(n) : e.delete(n), r(e)
          } else r(fa(e, o))
        })
    },
    mounted: la,
    beforeUpdate(e, t, n) {
      ;(e._assign = oa(n)), la(e, t, n)
    }
  }
function la(e, { value: t, oldValue: n }, o) {
  ;(e._modelValue = t),
    C(t)
      ? (e.checked = p(t, o.props.value) > -1)
      : $(t)
        ? (e.checked = t.has(o.props.value))
        : t !== n && (e.checked = d(t, fa(e, !0)))
}
const ca = {
    created(e, { value: t }, n) {
      ;(e.checked = d(t, n.props.value)),
        (e._assign = oa(n)),
        Ni(e, 'change', () => {
          e._assign(pa(e))
        })
    },
    beforeUpdate(e, { value: t, oldValue: n }, o) {
      ;(e._assign = oa(o)), t !== n && (e.checked = d(t, o.props.value))
    }
  },
  ua = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, o) {
      const r = $(t)
      Ni(e, 'change', () => {
        const t = Array.prototype.filter
          .call(e.options, (e) => e.selected)
          .map((e) => (n ? K(pa(e)) : pa(e)))
        e._assign(e.multiple ? (r ? new Set(t) : t) : t[0])
      }),
        (e._assign = oa(o))
    },
    mounted(e, { value: t }) {
      da(e, t)
    },
    beforeUpdate(e, t, n) {
      e._assign = oa(n)
    },
    updated(e, { value: t }) {
      da(e, t)
    }
  }
function da(e, t) {
  const n = e.multiple
  if (!n || C(t) || $(t)) {
    for (let o = 0, r = e.options.length; o < r; o++) {
      const r = e.options[o],
        i = pa(r)
      if (n) C(t) ? (r.selected = p(t, i) > -1) : (r.selected = t.has(i))
      else if (d(pa(r), t))
        return void (e.selectedIndex !== o && (e.selectedIndex = o))
    }
    n || -1 === e.selectedIndex || (e.selectedIndex = -1)
  }
}
function pa(e) {
  return '_value' in e ? e._value : e.value
}
function fa(e, t) {
  const n = t ? '_trueValue' : '_falseValue'
  return n in e ? e[n] : t
}
const ha = {
  created(e, t, n) {
    ga(e, t, n, null, 'created')
  },
  mounted(e, t, n) {
    ga(e, t, n, null, 'mounted')
  },
  beforeUpdate(e, t, n, o) {
    ga(e, t, n, o, 'beforeUpdate')
  },
  updated(e, t, n, o) {
    ga(e, t, n, o, 'updated')
  }
}
function ga(e, t, n, o, r) {
  const i = (function (e, t) {
    switch (e) {
      case 'SELECT':
        return ua
      case 'TEXTAREA':
        return aa
      default:
        switch (t) {
          case 'checkbox':
            return sa
          case 'radio':
            return ca
          default:
            return aa
        }
    }
  })(e.tagName, n.props && n.props.type)[r]
  i && i(e, t, n, o)
}
const ma = ['ctrl', 'shift', 'alt', 'meta'],
  va = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && 0 !== e.button,
    middle: (e) => 'button' in e && 1 !== e.button,
    right: (e) => 'button' in e && 2 !== e.button,
    exact: (e, t) => ma.some((n) => e[`${n}Key`] && !t.includes(n))
  },
  ya =
    (e, t) =>
    (n, ...o) => {
      for (let e = 0; e < t.length; e++) {
        const o = va[t[e]]
        if (o && o(n, t)) return
      }
      return e(n, ...o)
    },
  _a = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e._vod = 'none' === e.style.display ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : ba(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: o }) {
      !t != !n &&
        (o
          ? t
            ? (o.beforeEnter(e), ba(e, !0), o.enter(e))
            : o.leave(e, () => {
                ba(e, !1)
              })
          : ba(e, t))
    },
    beforeUnmount(e, { value: t }) {
      ba(e, t)
    }
  }
function ba(e, t) {
  e.style.display = t ? e._vod : 'none'
}
const wa = x(
  {
    patchProp: (e, t, n, o, r = !1, i, a, s, l) => {
      if (0 === t.indexOf('change:'))
        return (function (e, t, n, o = null) {
          if (!n || !o) return
          const r = t.replace('change:', ''),
            { attrs: i } = o,
            a = i[r],
            s = (e.__wxsProps || (e.__wxsProps = {}))[r]
          if (s === a) return
          e.__wxsProps[r] = a
          const l = o.proxy
          xn(() => {
            n(a, s, l.$gcd(l, !0), l.$gcd(l, !1))
          })
        })(e, t, o, a)
      'class' === t
        ? (function (e, t, n) {
            const { __wxsAddClass: o, __wxsRemoveClass: r } = e
            r &&
              r.length &&
              ((t = (t || '')
                .split(/\s+/)
                .filter((e) => -1 === r.indexOf(e))
                .join(' ')),
              (r.length = 0)),
              o && o.length && (t = (t || '') + ' ' + o.join(' '))
            const i = e._vtc
            i && (t = (t ? [t, ...i] : [...i]).join(' ')),
              null == t
                ? e.removeAttribute('class')
                : n
                  ? e.setAttribute('class', t)
                  : (e.className = t)
          })(e, o, r)
        : 'style' === t
          ? (function (e, t, n) {
              const o = e.style,
                r = L(n)
              if (n && !r) {
                if (t && !L(t)) for (const e in t) null == n[e] && Ei(o, e, '')
                for (const e in n) Ei(o, e, n[e])
              } else {
                const i = o.display
                r
                  ? t !== n && (o.cssText = n)
                  : t && e.removeAttribute('style'),
                  '_vod' in e && (o.display = i)
              }
              const { __wxsStyle: i } = e
              if (i) for (const a in i) Ei(o, a, i[a])
            })(e, n, o)
          : b(t)
            ? w(t) || Vi(e, t, 0, o, a)
            : (
                  '.' === t[0]
                    ? ((t = t.slice(1)), 1)
                    : '^' === t[0]
                      ? ((t = t.slice(1)), 0)
                      : (function (e, t, n, o) {
                          if (o)
                            return (
                              'innerHTML' === t ||
                              'textContent' === t ||
                              !!(t in e && zi.test(t) && I(n))
                            )
                          if (
                            'spellcheck' === t ||
                            'draggable' === t ||
                            'translate' === t
                          )
                            return !1
                          if ('form' === t) return !1
                          if ('list' === t && 'INPUT' === e.tagName) return !1
                          if ('type' === t && 'TEXTAREA' === e.tagName)
                            return !1
                          if (zi.test(t) && L(n)) return !1
                          return t in e
                        })(e, t, o, r)
                )
              ? (function (e, t, n, o, r, i, a) {
                  if ('innerHTML' === t || 'textContent' === t)
                    return o && a(o, r, i), void (e[t] = null == n ? '' : n)
                  if (
                    'value' === t &&
                    'PROGRESS' !== e.tagName &&
                    !e.tagName.includes('-')
                  ) {
                    e._value = n
                    const o = null == n ? '' : n
                    return (
                      (e.value === o && 'OPTION' !== e.tagName) ||
                        (e.value = o),
                      void (null == n && e.removeAttribute(t))
                    )
                  }
                  let s = !1
                  if ('' === n || null == n) {
                    const o = typeof e[t]
                    'boolean' === o
                      ? (n = u(n))
                      : null == n && 'string' === o
                        ? ((n = ''), (s = !0))
                        : 'number' === o && ((n = 0), (s = !0))
                  }
                  try {
                    e[t] = n
                  } catch (l) {}
                  s && e.removeAttribute(t)
                })(e, t, o, i, a, s, l)
              : ('true-value' === t
                  ? (e._trueValue = o)
                  : 'false-value' === t && (e._falseValue = o),
                (function (e, t, n, o, r) {
                  if (o && t.startsWith('xlink:'))
                    null == n
                      ? e.removeAttributeNS(Bi, t.slice(6, t.length))
                      : e.setAttributeNS(Bi, t, n)
                  else {
                    const o = c(t)
                    null == n || (o && !u(n))
                      ? e.removeAttribute(t)
                      : e.setAttribute(t, o ? '' : n)
                  }
                })(e, t, o, r))
    },
    forcePatchProp: (e, t) =>
      0 === t.indexOf('change:') ||
      ('class' === t && e.__wxsClassChanged
        ? ((e.__wxsClassChanged = !1), !0)
        : !('style' !== t || !e.__wxsStyleChanged) &&
          ((e.__wxsStyleChanged = !1), !0))
  },
  Ti
)
let xa
const Ta = (...e) => {
  const t = (xa || (xa = $r(wa))).createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (e) => {
      const o = (function (e) {
        if (L(e)) {
          return document.querySelector(e)
        }
        return e
      })(e)
      if (!o) return
      const r = t._component
      I(r) || r.render || r.template || (r.template = o.innerHTML),
        (o.innerHTML = '')
      const i = n(o, !1, o instanceof SVGElement)
      return (
        o instanceof Element &&
          (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')),
        i
      )
    }),
    t
  )
}
const Sa = ['{', '}']
const Ea = /^(?:\d)+/,
  Ca = /^(?:\w)+/
const ka = Object.prototype.hasOwnProperty,
  $a = (e, t) => ka.call(e, t),
  Oa = new (class {
    constructor() {
      this._caches = Object.create(null)
    }
    interpolate(e, t, n = Sa) {
      if (!t) return [e]
      let o = this._caches[e]
      return (
        o ||
          ((o = (function (e, [t, n]) {
            const o = []
            let r = 0,
              i = ''
            for (; r < e.length; ) {
              let a = e[r++]
              if (a === t) {
                i && o.push({ type: 'text', value: i }), (i = '')
                let t = ''
                for (a = e[r++]; void 0 !== a && a !== n; )
                  (t += a), (a = e[r++])
                const s = a === n,
                  l = Ea.test(t)
                    ? 'list'
                    : s && Ca.test(t)
                      ? 'named'
                      : 'unknown'
                o.push({ value: t, type: l })
              } else i += a
            }
            return i && o.push({ type: 'text', value: i }), o
          })(e, n)),
          (this._caches[e] = o)),
        (function (e, t) {
          const n = []
          let o = 0
          const r = Array.isArray(t)
            ? 'list'
            : ((i = t),
              null !== i && 'object' == typeof i ? 'named' : 'unknown')
          var i
          if ('unknown' === r) return n
          for (; o < e.length; ) {
            const i = e[o]
            switch (i.type) {
              case 'text':
                n.push(i.value)
                break
              case 'list':
                n.push(t[parseInt(i.value, 10)])
                break
              case 'named':
                'named' === r && n.push(t[i.value])
            }
            o++
          }
          return n
        })(o, t)
      )
    }
  })()
function Ia(e, t) {
  if (!e) return
  if (((e = e.trim().replace(/_/g, '-')), t && t[e])) return e
  if ('chinese' === (e = e.toLowerCase())) return 'zh-Hans'
  if (0 === e.indexOf('zh'))
    return e.indexOf('-hans') > -1
      ? 'zh-Hans'
      : e.indexOf('-hant') > -1
        ? 'zh-Hant'
        : ((n = e),
          ['-tw', '-hk', '-mo', '-cht'].find((e) => -1 !== n.indexOf(e))
            ? 'zh-Hant'
            : 'zh-Hans')
  var n
  let o = ['en', 'fr', 'es']
  t && Object.keys(t).length > 0 && (o = Object.keys(t))
  const r = (function (e, t) {
    return t.find((t) => 0 === e.indexOf(t))
  })(e, o)
  return r || void 0
}
class La {
  constructor({
    locale: e,
    fallbackLocale: t,
    messages: n,
    watcher: o,
    formater: r
  }) {
    ;(this.locale = 'en'),
      (this.fallbackLocale = 'en'),
      (this.message = {}),
      (this.messages = {}),
      (this.watchers = []),
      t && (this.fallbackLocale = t),
      (this.formater = r || Oa),
      (this.messages = n || {}),
      this.setLocale(e || 'en'),
      o && this.watchLocale(o)
  }
  setLocale(e) {
    const t = this.locale
    ;(this.locale = Ia(e, this.messages) || this.fallbackLocale),
      this.messages[this.locale] || (this.messages[this.locale] = {}),
      (this.message = this.messages[this.locale]),
      t !== this.locale &&
        this.watchers.forEach((e) => {
          e(this.locale, t)
        })
  }
  getLocale() {
    return this.locale
  }
  watchLocale(e) {
    const t = this.watchers.push(e) - 1
    return () => {
      this.watchers.splice(t, 1)
    }
  }
  add(e, t, n = !0) {
    const o = this.messages[e]
    o
      ? n
        ? Object.assign(o, t)
        : Object.keys(t).forEach((e) => {
            $a(o, e) || (o[e] = t[e])
          })
      : (this.messages[e] = t)
  }
  f(e, t, n) {
    return this.formater.interpolate(e, t, n).join('')
  }
  t(e, t, n) {
    let o = this.message
    return (
      'string' == typeof t
        ? (t = Ia(t, this.messages)) && (o = this.messages[t])
        : (n = t),
      $a(o, e)
        ? this.formater.interpolate(o[e], n).join('')
        : (console.warn(
            `Cannot translate the value of keypath ${e}. Use the value of keypath as default.`
          ),
          e)
    )
  }
}
function Pa(e, t = {}, n, o) {
  'string' != typeof e && ([e, t] = [t, e]),
    'string' != typeof e &&
      (e =
        'undefined' != typeof uni && Gd
          ? Gd()
          : 'undefined' != typeof global && global.getLocale
            ? global.getLocale()
            : 'en'),
    'string' != typeof n &&
      (n =
        ('undefined' != typeof __uniConfig && __uniConfig.fallbackLocale) ||
        'en')
  const r = new La({ locale: e, fallbackLocale: n, messages: t, watcher: o })
  let i = (e, t) => {
    {
      let e = !1
      i = function (t, n) {
        const o = Yh().$vm
        return (
          o &&
            (o.$locale,
            e ||
              ((e = !0),
              (function (e, t) {
                e.$watchLocale
                  ? e.$watchLocale((e) => {
                      t.setLocale(e)
                    })
                  : e.$watch(
                      () => e.$locale,
                      (e) => {
                        t.setLocale(e)
                      }
                    )
              })(o, r))),
          r.t(t, n)
        )
      }
    }
    return i(e, t)
  }
  return {
    i18n: r,
    f: (e, t, n) => r.f(e, t, n),
    t: (e, t) => i(e, t),
    add: (e, t, n = !0) => r.add(e, t, n),
    watch: (e) => r.watchLocale(e),
    getLocale: () => r.getLocale(),
    setLocale: (e) => r.setLocale(e)
  }
}
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Aa = 'undefined' != typeof window
const Ra = Object.assign
function Ma(e, t) {
  const n = {}
  for (const o in t) {
    const r = t[o]
    n[o] = Na(r) ? r.map(e) : e(r)
  }
  return n
}
const Ba = () => {},
  Na = Array.isArray,
  Va = /\/$/
function ja(e, t, n = '/') {
  let o,
    r = {},
    i = '',
    a = ''
  const s = t.indexOf('#')
  let l = t.indexOf('?')
  return (
    s < l && s >= 0 && (l = -1),
    l > -1 &&
      ((o = t.slice(0, l)),
      (i = t.slice(l + 1, s > -1 ? s : t.length)),
      (r = e(i))),
    s > -1 && ((o = o || t.slice(0, s)), (a = t.slice(s, t.length))),
    (o = (function (e, t) {
      if (e.startsWith('/')) return e
      if (!e) return t
      const n = t.split('/'),
        o = e.split('/')
      let r,
        i,
        a = n.length - 1
      for (r = 0; r < o.length; r++)
        if (((i = o[r]), '.' !== i)) {
          if ('..' !== i) break
          a > 1 && a--
        }
      return (
        n.slice(0, a).join('/') +
        '/' +
        o.slice(r - (r === o.length ? 1 : 0)).join('/')
      )
    })(null != o ? o : t, n)),
    { fullPath: o + (i && '?') + i + a, path: o, query: r, hash: a }
  )
}
function Da(e, t) {
  return t && e.toLowerCase().startsWith(t.toLowerCase())
    ? e.slice(t.length) || '/'
    : e
}
function Fa(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function qa(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!za(e[n], t[n])) return !1
  return !0
}
function za(e, t) {
  return Na(e) ? Wa(e, t) : Na(t) ? Wa(t, e) : e === t
}
function Wa(e, t) {
  return Na(t)
    ? e.length === t.length && e.every((e, n) => e === t[n])
    : 1 === e.length && e[0] === t
}
var Ha, Ua, Ya, Xa
function Ga(e) {
  if (!e)
    if (Aa) {
      const t = document.querySelector('base')
      e = (e = (t && t.getAttribute('href')) || '/').replace(
        /^\w+:\/\/[^\/]+/,
        ''
      )
    } else e = '/'
  return '/' !== e[0] && '#' !== e[0] && (e = '/' + e), e.replace(Va, '')
}
;((Ua = Ha || (Ha = {})).pop = 'pop'),
  (Ua.push = 'push'),
  ((Xa = Ya || (Ya = {})).back = 'back'),
  (Xa.forward = 'forward'),
  (Xa.unknown = '')
const Ka = /^[^#]+#/
function Qa(e, t) {
  return e.replace(Ka, '#') + t
}
const Ja = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function Za(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      o = 'string' == typeof n && n.startsWith('#'),
      r =
        'string' == typeof n
          ? o
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    t = (function (e, t) {
      const n = document.documentElement.getBoundingClientRect(),
        o = e.getBoundingClientRect()
      return {
        behavior: t.behavior,
        left: o.left - n.left - (t.left || 0),
        top: o.top - n.top - (t.top || 0)
      }
    })(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        null != t.left ? t.left : window.pageXOffset,
        null != t.top ? t.top : window.pageYOffset
      )
}
function es(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const ts = new Map()
function ns(e, t) {
  const { pathname: n, search: o, hash: r } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let t = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      n = r.slice(t)
    return '/' !== n[0] && (n = '/' + n), Da(n, '')
  }
  return Da(n, e) + o + r
}
function os(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? Ja() : null
  }
}
function rs(e) {
  const { history: t, location: n } = window,
    o = { value: ns(e, n) },
    r = { value: t.state }
  function i(o, i, a) {
    const s = e.indexOf('#'),
      l =
        s > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(s)) + o
          : location.protocol + '//' + location.host + e + o
    try {
      t[a ? 'replaceState' : 'pushState'](i, '', l), (r.value = i)
    } catch (c) {
      console.error(c), n[a ? 'replace' : 'assign'](l)
    }
  }
  return (
    r.value ||
      i(
        o.value,
        {
          back: null,
          current: o.value,
          forward: null,
          position: t.length - 1,
          replaced: !0,
          scroll: null
        },
        !0
      ),
    {
      location: o,
      state: r,
      push: function (e, n) {
        const a = Ra({}, r.value, t.state, { forward: e, scroll: Ja() })
        i(a.current, a, !0),
          i(
            e,
            Ra({}, os(o.value, e, null), { position: a.position + 1 }, n),
            !1
          ),
          (o.value = e)
      },
      replace: function (e, n) {
        i(
          e,
          Ra({}, t.state, os(r.value.back, e, r.value.forward, !0), n, {
            position: r.value.position
          }),
          !0
        ),
          (o.value = e)
      }
    }
  )
}
function is(e) {
  const t = rs((e = Ga(e))),
    n = (function (e, t, n, o) {
      let r = [],
        i = [],
        a = null
      const s = ({ state: i }) => {
        const s = ns(e, location),
          l = n.value,
          c = t.value
        let u = 0
        if (i) {
          if (((n.value = s), (t.value = i), a && a === l))
            return void (a = null)
          u = c ? i.position - c.position : 0
        } else o(s)
        r.forEach((e) => {
          e(n.value, l, {
            delta: u,
            type: Ha.pop,
            direction: u ? (u > 0 ? Ya.forward : Ya.back) : Ya.unknown
          })
        })
      }
      function l() {
        const { history: e } = window
        e.state && e.replaceState(Ra({}, e.state, { scroll: Ja() }), '')
      }
      return (
        window.addEventListener('popstate', s),
        window.addEventListener('beforeunload', l),
        {
          pauseListeners: function () {
            a = n.value
          },
          listen: function (e) {
            r.push(e)
            const t = () => {
              const t = r.indexOf(e)
              t > -1 && r.splice(t, 1)
            }
            return i.push(t), t
          },
          destroy: function () {
            for (const e of i) e()
            ;(i = []),
              window.removeEventListener('popstate', s),
              window.removeEventListener('beforeunload', l)
          }
        }
      )
    })(e, t.state, t.location, t.replace)
  const o = Ra(
    {
      location: '',
      base: e,
      go: function (e, t = !0) {
        t || n.pauseListeners(), history.go(e)
      },
      createHref: Qa.bind(null, e)
    },
    t,
    n
  )
  return (
    Object.defineProperty(o, 'location', {
      enumerable: !0,
      get: () => t.location.value
    }),
    Object.defineProperty(o, 'state', {
      enumerable: !0,
      get: () => t.state.value
    }),
    o
  )
}
function as(e) {
  return 'string' == typeof e || 'symbol' == typeof e
}
const ss = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  ls = Symbol('')
var cs, us
function ds(e, t) {
  return Ra(new Error(), { type: e, [ls]: !0 }, t)
}
function ps(e, t) {
  return e instanceof Error && ls in e && (null == t || !!(e.type & t))
}
;((us = cs || (cs = {}))[(us.aborted = 4)] = 'aborted'),
  (us[(us.cancelled = 8)] = 'cancelled'),
  (us[(us.duplicated = 16)] = 'duplicated')
const fs = { sensitive: !1, strict: !1, start: !0, end: !0 },
  hs = /[.+*?^${}()[\]/\\]/g
function gs(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n]
    if (o) return o
    n++
  }
  return e.length < t.length
    ? 1 === e.length && 80 === e[0]
      ? -1
      : 1
    : e.length > t.length
      ? 1 === t.length && 80 === t[0]
        ? 1
        : -1
      : 0
}
function ms(e, t) {
  let n = 0
  const o = e.score,
    r = t.score
  for (; n < o.length && n < r.length; ) {
    const e = gs(o[n], r[n])
    if (e) return e
    n++
  }
  if (1 === Math.abs(r.length - o.length)) {
    if (vs(o)) return 1
    if (vs(r)) return -1
  }
  return r.length - o.length
}
function vs(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const ys = { type: 0, value: '' },
  _s = /[a-zA-Z0-9_]/
function bs(e, t, n) {
  const o = (function (e, t) {
      const n = Ra({}, fs, t),
        o = []
      let r = n.start ? '^' : ''
      const i = []
      for (const l of e) {
        const e = l.length ? [] : [90]
        n.strict && !l.length && (r += '/')
        for (let t = 0; t < l.length; t++) {
          const o = l[t]
          let a = 40 + (n.sensitive ? 0.25 : 0)
          if (0 === o.type)
            t || (r += '/'), (r += o.value.replace(hs, '\\$&')), (a += 40)
          else if (1 === o.type) {
            const { value: e, repeatable: n, optional: c, regexp: u } = o
            i.push({ name: e, repeatable: n, optional: c })
            const d = u || '[^/]+?'
            if ('[^/]+?' !== d) {
              a += 10
              try {
                new RegExp(`(${d})`)
              } catch (s) {
                throw new Error(
                  `Invalid custom RegExp for param "${e}" (${d}): ` + s.message
                )
              }
            }
            let p = n ? `((?:${d})(?:/(?:${d}))*)` : `(${d})`
            t || (p = c && l.length < 2 ? `(?:/${p})` : '/' + p),
              c && (p += '?'),
              (r += p),
              (a += 20),
              c && (a += -8),
              n && (a += -20),
              '.*' === d && (a += -50)
          }
          e.push(a)
        }
        o.push(e)
      }
      if (n.strict && n.end) {
        const e = o.length - 1
        o[e][o[e].length - 1] += 0.7000000000000001
      }
      n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && (r += '(?:/|$)')
      const a = new RegExp(r, n.sensitive ? '' : 'i')
      return {
        re: a,
        score: o,
        keys: i,
        parse: function (e) {
          const t = e.match(a),
            n = {}
          if (!t) return null
          for (let o = 1; o < t.length; o++) {
            const e = t[o] || '',
              r = i[o - 1]
            n[r.name] = e && r.repeatable ? e.split('/') : e
          }
          return n
        },
        stringify: function (t) {
          let n = '',
            o = !1
          for (const r of e) {
            ;(o && n.endsWith('/')) || (n += '/'), (o = !1)
            for (const e of r)
              if (0 === e.type) n += e.value
              else if (1 === e.type) {
                const { value: i, repeatable: a, optional: s } = e,
                  l = i in t ? t[i] : ''
                if (Na(l) && !a)
                  throw new Error(
                    `Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`
                  )
                const c = Na(l) ? l.join('/') : l
                if (!c) {
                  if (!s) throw new Error(`Missing required param "${i}"`)
                  r.length < 2 &&
                    (n.endsWith('/') ? (n = n.slice(0, -1)) : (o = !0))
                }
                n += c
              }
          }
          return n || '/'
        }
      }
    })(
      (function (e) {
        if (!e) return [[]]
        if ('/' === e) return [[ys]]
        if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
        function t(e) {
          throw new Error(`ERR (${n})/"${c}": ${e}`)
        }
        let n = 0,
          o = n
        const r = []
        let i
        function a() {
          i && r.push(i), (i = [])
        }
        let s,
          l = 0,
          c = '',
          u = ''
        function d() {
          c &&
            (0 === n
              ? i.push({ type: 0, value: c })
              : 1 === n || 2 === n || 3 === n
                ? (i.length > 1 &&
                    ('*' === s || '+' === s) &&
                    t(
                      `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
                    ),
                  i.push({
                    type: 1,
                    value: c,
                    regexp: u,
                    repeatable: '*' === s || '+' === s,
                    optional: '*' === s || '?' === s
                  }))
                : t('Invalid state to consume buffer'),
            (c = ''))
        }
        function p() {
          c += s
        }
        for (; l < e.length; )
          if (((s = e[l++]), '\\' !== s || 2 === n))
            switch (n) {
              case 0:
                '/' === s ? (c && d(), a()) : ':' === s ? (d(), (n = 1)) : p()
                break
              case 4:
                p(), (n = o)
                break
              case 1:
                '(' === s
                  ? (n = 2)
                  : _s.test(s)
                    ? p()
                    : (d(), (n = 0), '*' !== s && '?' !== s && '+' !== s && l--)
                break
              case 2:
                ')' === s
                  ? '\\' == u[u.length - 1]
                    ? (u = u.slice(0, -1) + s)
                    : (n = 3)
                  : (u += s)
                break
              case 3:
                d(),
                  (n = 0),
                  '*' !== s && '?' !== s && '+' !== s && l--,
                  (u = '')
                break
              default:
                t('Unknown state')
            }
          else (o = n), (n = 4)
        return (
          2 === n && t(`Unfinished custom RegExp for param "${c}"`), d(), a(), r
        )
      })(e.path),
      n
    ),
    r = Ra(o, { record: e, parent: t, children: [], alias: [] })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function ws(e, t) {
  const n = [],
    o = new Map()
  function r(e, n, o) {
    const s = !o,
      l = (function (e) {
        return {
          path: e.path,
          redirect: e.redirect,
          name: e.name,
          meta: e.meta || {},
          aliasOf: void 0,
          beforeEnter: e.beforeEnter,
          props: Ts(e),
          children: e.children || [],
          instances: {},
          leaveGuards: new Set(),
          updateGuards: new Set(),
          enterCallbacks: {},
          components:
            'components' in e
              ? e.components || null
              : e.component && { default: e.component }
        }
      })(e)
    l.aliasOf = o && o.record
    const c = Cs(t, e),
      u = [l]
    if ('alias' in e) {
      const t = 'string' == typeof e.alias ? [e.alias] : e.alias
      for (const e of t)
        u.push(
          Ra({}, l, {
            components: o ? o.record.components : l.components,
            path: e,
            aliasOf: o ? o.record : l
          })
        )
    }
    let d, p
    for (const t of u) {
      const { path: u } = t
      if (n && '/' !== u[0]) {
        const e = n.record.path,
          o = '/' === e[e.length - 1] ? '' : '/'
        t.path = n.record.path + (u && o + u)
      }
      if (
        ((d = bs(t, n, c)),
        o
          ? o.alias.push(d)
          : ((p = p || d),
            p !== d && p.alias.push(d),
            s && e.name && !Ss(d) && i(e.name)),
        l.children)
      ) {
        const e = l.children
        for (let t = 0; t < e.length; t++) r(e[t], d, o && o.children[t])
      }
      ;(o = o || d),
        ((d.record.components && Object.keys(d.record.components).length) ||
          d.record.name ||
          d.record.redirect) &&
          a(d)
    }
    return p
      ? () => {
          i(p)
        }
      : Ba
  }
  function i(e) {
    if (as(e)) {
      const t = o.get(e)
      t &&
        (o.delete(e),
        n.splice(n.indexOf(t), 1),
        t.children.forEach(i),
        t.alias.forEach(i))
    } else {
      const t = n.indexOf(e)
      t > -1 &&
        (n.splice(t, 1),
        e.record.name && o.delete(e.record.name),
        e.children.forEach(i),
        e.alias.forEach(i))
    }
  }
  function a(e) {
    let t = 0
    for (
      ;
      t < n.length &&
      ms(e, n[t]) >= 0 &&
      (e.record.path !== n[t].record.path || !ks(e, n[t]));

    )
      t++
    n.splice(t, 0, e), e.record.name && !Ss(e) && o.set(e.record.name, e)
  }
  return (
    (t = Cs({ strict: !1, end: !0, sensitive: !1 }, t)),
    e.forEach((e) => r(e)),
    {
      addRoute: r,
      resolve: function (e, t) {
        let r,
          i,
          a,
          s = {}
        if ('name' in e && e.name) {
          if (((r = o.get(e.name)), !r)) throw ds(1, { location: e })
          ;(a = r.record.name),
            (s = Ra(
              xs(
                t.params,
                r.keys.filter((e) => !e.optional).map((e) => e.name)
              ),
              e.params &&
                xs(
                  e.params,
                  r.keys.map((e) => e.name)
                )
            )),
            (i = r.stringify(s))
        } else if ('path' in e)
          (i = e.path),
            (r = n.find((e) => e.re.test(i))),
            r && ((s = r.parse(i)), (a = r.record.name))
        else {
          if (
            ((r = t.name ? o.get(t.name) : n.find((e) => e.re.test(t.path))),
            !r)
          )
            throw ds(1, { location: e, currentLocation: t })
          ;(a = r.record.name),
            (s = Ra({}, t.params, e.params)),
            (i = r.stringify(s))
        }
        const l = []
        let c = r
        for (; c; ) l.unshift(c.record), (c = c.parent)
        return { name: a, path: i, params: s, matched: l, meta: Es(l) }
      },
      removeRoute: i,
      getRoutes: function () {
        return n
      },
      getRecordMatcher: function (e) {
        return o.get(e)
      }
    }
  )
}
function xs(e, t) {
  const n = {}
  for (const o of t) o in e && (n[o] = e[o])
  return n
}
function Ts(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const o in e.components) t[o] = 'boolean' == typeof n ? n : n[o]
  return t
}
function Ss(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Es(e) {
  return e.reduce((e, t) => Ra(e, t.meta), {})
}
function Cs(e, t) {
  const n = {}
  for (const o in e) n[o] = o in t ? t[o] : e[o]
  return n
}
function ks(e, t) {
  return t.children.some((t) => t === e || ks(e, t))
}
const $s = /#/g,
  Os = /&/g,
  Is = /\//g,
  Ls = /=/g,
  Ps = /\?/g,
  As = /\+/g,
  Rs = /%5B/g,
  Ms = /%5D/g,
  Bs = /%5E/g,
  Ns = /%60/g,
  Vs = /%7B/g,
  js = /%7C/g,
  Ds = /%7D/g,
  Fs = /%20/g
function qs(e) {
  return encodeURI('' + e)
    .replace(js, '|')
    .replace(Rs, '[')
    .replace(Ms, ']')
}
function zs(e) {
  return qs(e)
    .replace(As, '%2B')
    .replace(Fs, '+')
    .replace($s, '%23')
    .replace(Os, '%26')
    .replace(Ns, '`')
    .replace(Vs, '{')
    .replace(Ds, '}')
    .replace(Bs, '^')
}
function Ws(e) {
  return null == e
    ? ''
    : (function (e) {
        return qs(e).replace($s, '%23').replace(Ps, '%3F')
      })(e).replace(Is, '%2F')
}
function Hs(e) {
  try {
    return decodeURIComponent('' + e)
  } catch (t) {}
  return '' + e
}
function Us(e) {
  const t = {}
  if ('' === e || '?' === e) return t
  const n = ('?' === e[0] ? e.slice(1) : e).split('&')
  for (let o = 0; o < n.length; ++o) {
    const e = n[o].replace(As, ' '),
      r = e.indexOf('='),
      i = Hs(r < 0 ? e : e.slice(0, r)),
      a = r < 0 ? null : Hs(e.slice(r + 1))
    if (i in t) {
      let e = t[i]
      Na(e) || (e = t[i] = [e]), e.push(a)
    } else t[i] = a
  }
  return t
}
function Ys(e) {
  let t = ''
  for (let n in e) {
    const o = e[n]
    if (((n = zs(n).replace(Ls, '%3D')), null == o)) {
      void 0 !== o && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Na(o) ? o.map((e) => e && zs(e)) : [o && zs(o)]).forEach((e) => {
      void 0 !== e &&
        ((t += (t.length ? '&' : '') + n), null != e && (t += '=' + e))
    })
  }
  return t
}
function Xs(e) {
  const t = {}
  for (const n in e) {
    const o = e[n]
    void 0 !== o &&
      (t[n] = Na(o)
        ? o.map((e) => (null == e ? null : '' + e))
        : null == o
          ? o
          : '' + o)
  }
  return t
}
const Gs = Symbol(''),
  Ks = Symbol(''),
  Qs = Symbol(''),
  Js = Symbol(''),
  Zs = Symbol('')
function el() {
  let e = []
  return {
    add: function (t) {
      return (
        e.push(t),
        () => {
          const n = e.indexOf(t)
          n > -1 && e.splice(n, 1)
        }
      )
    },
    list: () => e,
    reset: function () {
      e = []
    }
  }
}
function tl(e, t, n, o, r) {
  const i = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || [])
  return () =>
    new Promise((a, s) => {
      const l = (e) => {
          var l
          !1 === e
            ? s(ds(4, { from: n, to: t }))
            : e instanceof Error
              ? s(e)
              : 'string' == typeof (l = e) || (l && 'object' == typeof l)
                ? s(ds(2, { from: t, to: e }))
                : (i &&
                    o.enterCallbacks[r] === i &&
                    'function' == typeof e &&
                    i.push(e),
                  a())
        },
        c = e.call(o && o.instances[r], t, n, l)
      let u = Promise.resolve(c)
      e.length < 3 && (u = u.then(l)), u.catch((e) => s(e))
    })
}
function nl(e, t, n, o) {
  const r = []
  for (const a of e)
    for (const e in a.components) {
      let s = a.components[e]
      if ('beforeRouteEnter' === t || a.instances[e])
        if (
          'object' == typeof (i = s) ||
          'displayName' in i ||
          'props' in i ||
          '__vccOpts' in i
        ) {
          const i = (s.__vccOpts || s)[t]
          i && r.push(tl(i, n, o, a, e))
        } else {
          let i = s()
          r.push(() =>
            i.then((r) => {
              if (!r)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${e}" at "${a.path}"`)
                )
              const i =
                (s = r).__esModule || 'Module' === s[Symbol.toStringTag]
                  ? r.default
                  : r
              var s
              a.components[e] = i
              const l = (i.__vccOpts || i)[t]
              return l && tl(l, n, o, a, e)()
            })
          )
        }
    }
  var i
  return r
}
function ol(e) {
  const t = Wn(Qs),
    n = Wn(Js),
    o = mi(() => t.resolve(nn(e.to))),
    r = mi(() => {
      const { matched: e } = o.value,
        { length: t } = e,
        r = e[t - 1],
        i = n.matched
      if (!r || !i.length) return -1
      const a = i.findIndex(Fa.bind(null, r))
      if (a > -1) return a
      const s = il(e[t - 2])
      return t > 1 && il(r) === s && i[i.length - 1].path !== s
        ? i.findIndex(Fa.bind(null, e[t - 2]))
        : a
    }),
    i = mi(
      () =>
        r.value > -1 &&
        (function (e, t) {
          for (const n in t) {
            const o = t[n],
              r = e[n]
            if ('string' == typeof o) {
              if (o !== r) return !1
            } else if (
              !Na(r) ||
              r.length !== o.length ||
              o.some((e, t) => e !== r[t])
            )
              return !1
          }
          return !0
        })(n.params, o.value.params)
    ),
    a = mi(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        qa(n.params, o.value.params)
    )
  return {
    route: o,
    href: mi(() => o.value.href),
    isActive: i,
    isExactActive: a,
    navigate: function (n = {}) {
      return (function (e) {
        if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return
        if (e.defaultPrevented) return
        if (void 0 !== e.button && 0 !== e.button) return
        if (e.currentTarget && e.currentTarget.getAttribute) {
          const t = e.currentTarget.getAttribute('target')
          if (/\b_blank\b/i.test(t)) return
        }
        e.preventDefault && e.preventDefault()
        return !0
      })(n)
        ? t[nn(e.replace) ? 'replace' : 'push'](nn(e.to)).catch(Ba)
        : Promise.resolve()
    }
  }
}
const rl = so({
  name: 'RouterLink',
  compatConfig: { MODE: 3 },
  props: {
    to: { type: [String, Object], required: !0 },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: { type: String, default: 'page' }
  },
  useLink: ol,
  setup(e, { slots: t }) {
    const n = Vt(ol(e)),
      { options: o } = Wn(Qs),
      r = mi(() => ({
        [al(e.activeClass, o.linkActiveClass, 'router-link-active')]:
          n.isActive,
        [al(
          e.exactActiveClass,
          o.linkExactActiveClass,
          'router-link-exact-active'
        )]: n.isExactActive
      }))
    return () => {
      const o = t.default && t.default(n)
      return e.custom
        ? o
        : vi(
            'a',
            {
              'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
              href: n.href,
              onClick: n.navigate,
              class: r.value
            },
            o
          )
    }
  }
})
function il(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const al = (e, t, n) => (null != e ? e : null != t ? t : n)
function sl(e, t) {
  if (!e) return null
  const n = e(t)
  return 1 === n.length ? n[0] : n
}
const ll = so({
  name: 'RouterView',
  inheritAttrs: !1,
  props: { name: { type: String, default: 'default' }, route: Object },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    const o = Wn(Zs),
      r = mi(() => e.route || o.value),
      i = Wn(Ks, 0),
      a = mi(() => {
        let e = nn(i)
        const { matched: t } = r.value
        let n
        for (; (n = t[e]) && !n.components; ) e++
        return e
      }),
      s = mi(() => r.value.matched[a.value])
    zn(
      Ks,
      mi(() => a.value + 1)
    ),
      zn(Gs, s),
      zn(Zs, r)
    const l = Jt()
    return (
      Yn(
        () => [l.value, s.value, e.name],
        ([e, t, n], [o, r, i]) => {
          t &&
            ((t.instances[n] = e),
            r &&
              r !== t &&
              e &&
              e === o &&
              (t.leaveGuards.size || (t.leaveGuards = r.leaveGuards),
              t.updateGuards.size || (t.updateGuards = r.updateGuards))),
            !e ||
              !t ||
              (r && Fa(t, r) && o) ||
              (t.enterCallbacks[n] || []).forEach((t) => t(e))
        },
        { flush: 'post' }
      ),
      () => {
        const o = r.value,
          i = e.name,
          a = s.value,
          c = a && a.components[i]
        if (!c) return sl(n.default, { Component: c, route: o })
        const u = a.props[i],
          d = u
            ? !0 === u
              ? o.params
              : 'function' == typeof u
                ? u(o)
                : u
            : null,
          p = vi(
            c,
            Ra({}, d, t, {
              onVnodeUnmounted: (e) => {
                e.component.isUnmounted && (a.instances[i] = null)
              },
              ref: l
            })
          )
        return sl(n.default, { Component: p, route: o }) || p
      }
    )
  }
})
function cl(e) {
  const t = ws(e.routes, e),
    n = e.parseQuery || Us,
    o = e.stringifyQuery || Ys,
    r = e.history,
    i = el(),
    a = el(),
    s = el(),
    l = Zt(ss)
  let c = ss
  Aa &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const u = Ma.bind(null, (e) => '' + e),
    d = Ma.bind(null, Ws),
    p = Ma.bind(null, Hs)
  function f(e, i) {
    if (((i = Ra({}, i || l.value)), 'string' == typeof e)) {
      const o = ja(n, e, i.path),
        a = t.resolve({ path: o.path }, i),
        s = r.createHref(o.fullPath)
      return Ra(o, a, {
        params: p(a.params),
        hash: Hs(o.hash),
        redirectedFrom: void 0,
        href: s
      })
    }
    let a
    if ('path' in e) a = Ra({}, e, { path: ja(n, e.path, i.path).path })
    else {
      const t = Ra({}, e.params)
      for (const e in t) null == t[e] && delete t[e]
      ;(a = Ra({}, e, { params: d(e.params) })), (i.params = d(i.params))
    }
    const s = t.resolve(a, i),
      c = e.hash || ''
    s.params = u(p(s.params))
    const f = (function (e, t) {
      const n = t.query ? e(t.query) : ''
      return t.path + (n && '?') + n + (t.hash || '')
    })(
      o,
      Ra({}, e, {
        hash:
          ((h = c), qs(h).replace(Vs, '{').replace(Ds, '}').replace(Bs, '^')),
        path: s.path
      })
    )
    var h
    const g = r.createHref(f)
    return Ra(
      { fullPath: f, hash: c, query: o === Ys ? Xs(e.query) : e.query || {} },
      s,
      { redirectedFrom: void 0, href: g }
    )
  }
  function h(e) {
    return 'string' == typeof e ? ja(n, e, l.value.path) : Ra({}, e)
  }
  function g(e, t) {
    if (c !== e) return ds(8, { from: t, to: e })
  }
  function m(e) {
    return y(e)
  }
  function v(e) {
    const t = e.matched[e.matched.length - 1]
    if (t && t.redirect) {
      const { redirect: n } = t
      let o = 'function' == typeof n ? n(e) : n
      return (
        'string' == typeof o &&
          ((o = o.includes('?') || o.includes('#') ? (o = h(o)) : { path: o }),
          (o.params = {})),
        Ra(
          { query: e.query, hash: e.hash, params: 'path' in o ? {} : e.params },
          o
        )
      )
    }
  }
  function y(e, t) {
    const n = (c = f(e)),
      r = l.value,
      i = e.state,
      a = e.force,
      s = !0 === e.replace,
      u = v(n)
    if (u)
      return y(
        Ra(h(u), {
          state: 'object' == typeof u ? Ra({}, i, u.state) : i,
          force: a,
          replace: s
        }),
        t || n
      )
    const d = n
    let p
    return (
      (d.redirectedFrom = t),
      !a &&
        (function (e, t, n) {
          const o = t.matched.length - 1,
            r = n.matched.length - 1
          return (
            o > -1 &&
            o === r &&
            Fa(t.matched[o], n.matched[r]) &&
            qa(t.params, n.params) &&
            e(t.query) === e(n.query) &&
            t.hash === n.hash
          )
        })(o, r, n) &&
        ((p = ds(16, { to: d, from: r })), I(r, r, !0, !1)),
      (p ? Promise.resolve(p) : b(d, r))
        .catch((e) => (ps(e) ? (ps(e, 2) ? e : O(e)) : $(e, d, r)))
        .then((e) => {
          if (e) {
            if (ps(e, 2))
              return y(
                Ra({ replace: s }, h(e.to), {
                  state: 'object' == typeof e.to ? Ra({}, i, e.to.state) : i,
                  force: a
                }),
                t || d
              )
          } else e = x(d, r, !0, s, i)
          return w(d, r, e), e
        })
    )
  }
  function _(e, t) {
    const n = g(e, t)
    return n ? Promise.reject(n) : Promise.resolve()
  }
  function b(e, t) {
    let n
    const [o, r, s] = (function (e, t) {
      const n = [],
        o = [],
        r = [],
        i = Math.max(t.matched.length, e.matched.length)
      for (let a = 0; a < i; a++) {
        const i = t.matched[a]
        i && (e.matched.find((e) => Fa(e, i)) ? o.push(i) : n.push(i))
        const s = e.matched[a]
        s && (t.matched.find((e) => Fa(e, s)) || r.push(s))
      }
      return [n, o, r]
    })(e, t)
    n = nl(o.reverse(), 'beforeRouteLeave', e, t)
    for (const i of o)
      i.leaveGuards.forEach((o) => {
        n.push(tl(o, e, t))
      })
    const l = _.bind(null, e, t)
    return (
      n.push(l),
      ul(n)
        .then(() => {
          n = []
          for (const o of i.list()) n.push(tl(o, e, t))
          return n.push(l), ul(n)
        })
        .then(() => {
          n = nl(r, 'beforeRouteUpdate', e, t)
          for (const o of r)
            o.updateGuards.forEach((o) => {
              n.push(tl(o, e, t))
            })
          return n.push(l), ul(n)
        })
        .then(() => {
          n = []
          for (const o of e.matched)
            if (o.beforeEnter && !t.matched.includes(o))
              if (Na(o.beforeEnter))
                for (const r of o.beforeEnter) n.push(tl(r, e, t))
              else n.push(tl(o.beforeEnter, e, t))
          return n.push(l), ul(n)
        })
        .then(
          () => (
            e.matched.forEach((e) => (e.enterCallbacks = {})),
            (n = nl(s, 'beforeRouteEnter', e, t)),
            n.push(l),
            ul(n)
          )
        )
        .then(() => {
          n = []
          for (const o of a.list()) n.push(tl(o, e, t))
          return n.push(l), ul(n)
        })
        .catch((e) => (ps(e, 8) ? e : Promise.reject(e)))
    )
  }
  function w(e, t, n) {
    for (const o of s.list()) o(e, t, n)
  }
  function x(e, t, n, o, i) {
    const a = g(e, t)
    if (a) return a
    const s = t === ss,
      c = Aa ? history.state : {}
    n &&
      (o || s
        ? r.replace(e.fullPath, Ra({ scroll: s && c && c.scroll }, i))
        : r.push(e.fullPath, i)),
      (l.value = e),
      I(e, t, n, s),
      O()
  }
  let T
  function S() {
    T ||
      (T = r.listen((e, t, n) => {
        if (!R.listening) return
        const o = f(e),
          i = v(o)
        if (i) return void y(Ra(i, { replace: !0 }), o).catch(Ba)
        c = o
        const a = l.value
        var s, u
        Aa && ((s = es(a.fullPath, n.delta)), (u = Ja()), ts.set(s, u)),
          b(o, a)
            .catch((e) =>
              ps(e, 12)
                ? e
                : ps(e, 2)
                  ? (y(e.to, o)
                      .then((e) => {
                        ps(e, 20) &&
                          !n.delta &&
                          n.type === Ha.pop &&
                          r.go(-1, !1)
                      })
                      .catch(Ba),
                    Promise.reject())
                  : (n.delta && r.go(-n.delta, !1), $(e, o, a))
            )
            .then((e) => {
              ;(e = e || x(o, a, !1)) &&
                (n.delta && !ps(e, 8)
                  ? r.go(-n.delta, !1)
                  : n.type === Ha.pop && ps(e, 20) && r.go(-1, !1)),
                w(o, a, e)
            })
            .catch(Ba)
      }))
  }
  let E,
    C = el(),
    k = el()
  function $(e, t, n) {
    O(e)
    const o = k.list()
    return (
      o.length ? o.forEach((o) => o(e, t, n)) : console.error(e),
      Promise.reject(e)
    )
  }
  function O(e) {
    return (
      E ||
        ((E = !e),
        S(),
        C.list().forEach(([t, n]) => (e ? n(e) : t())),
        C.reset()),
      e
    )
  }
  function I(t, n, o, r) {
    const { scrollBehavior: i } = e
    if (!Aa || !i) return Promise.resolve()
    const a =
      (!o &&
        (function (e) {
          const t = ts.get(e)
          return ts.delete(e), t
        })(es(t.fullPath, 0))) ||
      ((r || !o) && history.state && history.state.scroll) ||
      null
    return xn()
      .then(() => i(t, n, a))
      .then((e) => e && Za(e))
      .catch((e) => $(e, t, n))
  }
  const L = (e) => r.go(e)
  let P
  const A = new Set(),
    R = {
      currentRoute: l,
      listening: !0,
      addRoute: function (e, n) {
        let o, r
        return (
          as(e) ? ((o = t.getRecordMatcher(e)), (r = n)) : (r = e),
          t.addRoute(r, o)
        )
      },
      removeRoute: function (e) {
        const n = t.getRecordMatcher(e)
        n && t.removeRoute(n)
      },
      hasRoute: function (e) {
        return !!t.getRecordMatcher(e)
      },
      getRoutes: function () {
        return t.getRoutes().map((e) => e.record)
      },
      resolve: f,
      options: e,
      push: m,
      replace: function (e) {
        return m(Ra(h(e), { replace: !0 }))
      },
      go: L,
      back: () => L(-1),
      forward: () => L(1),
      beforeEach: i.add,
      beforeResolve: a.add,
      afterEach: s.add,
      onError: k.add,
      isReady: function () {
        return E && l.value !== ss
          ? Promise.resolve()
          : new Promise((e, t) => {
              C.add([e, t])
            })
      },
      install(e) {
        e.component('RouterLink', rl),
          e.component('RouterView', ll),
          (e.config.globalProperties.$router = this),
          Object.defineProperty(e.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => nn(l)
          }),
          Aa &&
            !P &&
            l.value === ss &&
            ((P = !0), m(r.location).catch((e) => {}))
        const t = {}
        for (const o in ss) t[o] = mi(() => l.value[o])
        e.provide(Qs, this), e.provide(Js, Vt(t)), e.provide(Zs, l)
        const n = e.unmount
        A.add(e),
          (e.unmount = function () {
            A.delete(e),
              A.size < 1 &&
                ((c = ss),
                T && T(),
                (T = null),
                (l.value = ss),
                (P = !1),
                (E = !1)),
              n()
          })
      }
    }
  return R
}
function ul(e) {
  return e.reduce((e, t) => e.then(() => t()), Promise.resolve())
}
function dl() {
  return Wn(Js)
}
const pl = se(
  () =>
    'undefined' != typeof __uniConfig &&
    __uniConfig.locales &&
    !!Object.keys(__uniConfig.locales).length
)
let fl
function hl() {
  if (!fl) {
    let e
    if (
      ((e =
        (navigator.cookieEnabled &&
          window.localStorage &&
          localStorage.UNI_LOCALE) ||
        __uniConfig.locale ||
        navigator.language),
      (fl = Pa(e)),
      pl())
    ) {
      const t = Object.keys(__uniConfig.locales || {})
      t.length && t.forEach((e) => fl.add(e, __uniConfig.locales[e])),
        fl.setLocale(e)
    }
  }
  return fl
}
function gl(e, t, n) {
  return t.reduce((t, o, r) => ((t[e + o] = n[r]), t), {})
}
const ml = se(() => {
    const e = 'uni.async.',
      t = ['error']
    hl().add(
      'en',
      gl(e, t, ['The connection timed out, click the screen to try again.']),
      !1
    ),
      hl().add(
        'es',
        gl(e, t, [
          'Se agotó el tiempo de conexión, haga clic en la pantalla para volver a intentarlo.'
        ]),
        !1
      ),
      hl().add(
        'fr',
        gl(e, t, [
          "La connexion a expiré, cliquez sur l'écran pour réessayer."
        ]),
        !1
      ),
      hl().add('zh-Hans', gl(e, t, ['连接服务器超时，点击屏幕重试']), !1),
      hl().add('zh-Hant', gl(e, t, ['連接服務器超時，點擊屏幕重試']), !1)
  }),
  vl = se(() => {
    const e = 'uni.showToast.',
      t = ['unpaired']
    hl().add(
      'en',
      gl(e, t, ['Please note showToast must be paired with hideToast']),
      !1
    ),
      hl().add(
        'es',
        gl(e, t, [
          'Tenga en cuenta que showToast debe estar emparejado con hideToast'
        ]),
        !1
      ),
      hl().add(
        'fr',
        gl(e, t, [
          'Veuillez noter que showToast doit être associé à hideToast'
        ]),
        !1
      ),
      hl().add(
        'zh-Hans',
        gl(e, t, ['请注意 showToast 与 hideToast 必须配对使用']),
        !1
      ),
      hl().add(
        'zh-Hant',
        gl(e, t, ['請注意 showToast 與 hideToast 必須配對使用']),
        !1
      )
  }),
  yl = se(() => {
    const e = 'uni.showLoading.',
      t = ['unpaired']
    hl().add(
      'en',
      gl(e, t, ['Please note showLoading must be paired with hideLoading']),
      !1
    ),
      hl().add(
        'es',
        gl(e, t, [
          'Tenga en cuenta que showLoading debe estar emparejado con hideLoading'
        ]),
        !1
      ),
      hl().add(
        'fr',
        gl(e, t, [
          'Veuillez noter que showLoading doit être associé à hideLoading'
        ]),
        !1
      ),
      hl().add(
        'zh-Hans',
        gl(e, t, ['请注意 showLoading 与 hideLoading 必须配对使用']),
        !1
      ),
      hl().add(
        'zh-Hant',
        gl(e, t, ['請注意 showLoading 與 hideLoading 必須配對使用']),
        !1
      )
  }),
  _l = se(() => {
    const e = 'uni.chooseFile.',
      t = ['notUserActivation']
    hl().add(
      'en',
      gl(e, t, [
        'File chooser dialog can only be shown with a user activation'
      ]),
      !1
    ),
      hl().add(
        'es',
        gl(e, t, [
          'El cuadro de diálogo del selector de archivos solo se puede mostrar con la activación del usuario'
        ]),
        !1
      ),
      hl().add(
        'fr',
        gl(e, t, [
          "La boîte de dialogue du sélecteur de fichier ne peut être affichée qu'avec une activation par l'utilisateur"
        ]),
        !1
      ),
      hl().add(
        'zh-Hans',
        gl(e, t, ['文件选择器对话框只能在由用户激活时显示']),
        !1
      ),
      hl().add(
        'zh-Hant',
        gl(e, t, ['文件選擇器對話框只能在由用戶激活時顯示']),
        !1
      )
  }),
  bl = se(() => {
    const e = 'uni.setClipboardData.',
      t = ['success', 'fail']
    hl().add(
      'en',
      gl(e, t, ['Content copied', 'Copy failed, please copy manually']),
      !1
    ),
      hl().add(
        'es',
        gl(e, t, ['Contenido copiado', 'Error al copiar, copie manualmente']),
        !1
      ),
      hl().add(
        'fr',
        gl(e, t, ['Contenu copié', 'Échec de la copie, copiez manuellement']),
        !1
      ),
      hl().add('zh-Hans', gl(e, t, ['内容已复制', '复制失败，请手动复制']), !1),
      hl().add('zh-Hant', gl(e, t, ['內容已復制', '復制失敗，請手動復製']), !1)
  })
function wl(e) {
  const t = new Ce()
  return {
    on: (e, n) => t.on(e, n),
    once: (e, n) => t.once(e, n),
    off: (e, n) => t.off(e, n),
    emit: (e, ...n) => t.emit(e, ...n),
    subscribe(n, o, r = !1) {
      t[r ? 'once' : 'on'](`${e}.${n}`, o)
    },
    unsubscribe(n, o) {
      t.off(`${e}.${n}`, o)
    },
    subscribeHandler(n, o, r) {
      t.emit(`${e}.${n}`, o, r)
    }
  }
}
let xl = 1
const Tl = Object.create(null)
function Sl(e, t) {
  return e + '.' + t
}
function El(e, t, n) {
  ;(t = Sl(e, t)), Tl[t] || (Tl[t] = n)
}
function Cl({ id: e, name: t, args: n }, o) {
  t = Sl(o, t)
  const r = (t) => {
      e && cm.publishHandler('invokeViewApi.' + e, t)
    },
    i = Tl[t]
  i ? i(n, r) : r({})
}
const kl = x(wl('service'), {
    invokeServiceMethod: (e, t, n) => {
      const { subscribe: o, publishHandler: r } = cm,
        i = n ? xl++ : 0
      n && o('invokeServiceApi.' + i, n, !0),
        r('invokeServiceApi', { id: i, name: e, args: t })
    }
  }),
  $l = pe(!0)
let Ol
function Il() {
  Ol && (clearTimeout(Ol), (Ol = null))
}
let Ll = 0,
  Pl = 0
function Al(e) {
  if ((Il(), 1 !== e.touches.length)) return
  const { pageX: t, pageY: n } = e.touches[0]
  ;(Ll = t),
    (Pl = n),
    (Ol = setTimeout(function () {
      const t = new CustomEvent('longpress', {
        bubbles: !0,
        cancelable: !0,
        target: e.target,
        currentTarget: e.currentTarget
      })
      ;(t.touches = e.touches),
        (t.changedTouches = e.changedTouches),
        e.target.dispatchEvent(t)
    }, 350))
}
function Rl(e) {
  if (!Ol) return
  if (1 !== e.touches.length) return Il()
  const { pageX: t, pageY: n } = e.touches[0]
  return Math.abs(t - Ll) > 10 || Math.abs(n - Pl) > 10 ? Il() : void 0
}
function Ml(e, t) {
  const n = Number(e)
  return isNaN(n) ? t : n
}
function Bl() {
  const e = __uniConfig.globalStyle || {},
    t = Ml(e.rpxCalcMaxDeviceWidth, 960),
    n = Ml(e.rpxCalcBaseDeviceWidth, 375)
  function o() {
    let e = (function () {
      const e =
          /^Apple/.test(navigator.vendor) &&
          'number' == typeof window.orientation,
        t = e && 90 === Math.abs(window.orientation)
      var n = e
        ? Math[t ? 'max' : 'min'](screen.width, screen.height)
        : screen.width
      return (
        Math.min(window.innerWidth, document.documentElement.clientWidth, n) ||
        n
      )
    })()
    ;(e = e <= t ? e : n),
      (document.documentElement.style.fontSize = e / 23.4375 + 'px')
  }
  o(),
    document.addEventListener('DOMContentLoaded', o),
    window.addEventListener('load', o),
    window.addEventListener('resize', o)
}
function Nl() {
  Bl(),
    ce(),
    window.addEventListener('touchstart', Al, $l),
    window.addEventListener('touchmove', Rl, $l),
    window.addEventListener('touchend', Il, $l),
    window.addEventListener('touchcancel', Il, $l)
}
function Vl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var jl,
  Dl,
  Fl = ['top', 'left', 'right', 'bottom'],
  ql = {}
function zl() {
  return (Dl =
    'CSS' in window && 'function' == typeof CSS.supports
      ? CSS.supports('top: env(safe-area-inset-top)')
        ? 'env'
        : CSS.supports('top: constant(safe-area-inset-top)')
          ? 'constant'
          : ''
      : '')
}
function Wl() {
  if ((Dl = 'string' == typeof Dl ? Dl : zl())) {
    var e = [],
      t = !1
    try {
      var n = Object.defineProperty({}, 'passive', {
        get: function () {
          t = { passive: !0 }
        }
      })
      window.addEventListener('test', null, n)
    } catch (s) {}
    var o = document.createElement('div')
    r(o, {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '0',
      height: '0',
      zIndex: '-1',
      overflow: 'hidden',
      visibility: 'hidden'
    }),
      Fl.forEach(function (e) {
        a(o, e)
      }),
      document.body.appendChild(o),
      i(),
      (jl = !0)
  } else
    Fl.forEach(function (e) {
      ql[e] = 0
    })
  function r(e, t) {
    var n = e.style
    Object.keys(t).forEach(function (e) {
      var o = t[e]
      n[e] = o
    })
  }
  function i(t) {
    t
      ? e.push(t)
      : e.forEach(function (e) {
          e()
        })
  }
  function a(e, n) {
    var o = document.createElement('div'),
      a = document.createElement('div'),
      s = document.createElement('div'),
      l = document.createElement('div'),
      c = {
        position: 'absolute',
        width: '100px',
        height: '200px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        paddingBottom: Dl + '(safe-area-inset-' + n + ')'
      }
    r(o, c),
      r(a, c),
      r(s, {
        transition: '0s',
        animation: 'none',
        width: '400px',
        height: '400px'
      }),
      r(l, {
        transition: '0s',
        animation: 'none',
        width: '250%',
        height: '250%'
      }),
      o.appendChild(s),
      a.appendChild(l),
      e.appendChild(o),
      e.appendChild(a),
      i(function () {
        o.scrollTop = a.scrollTop = 1e4
        var e = o.scrollTop,
          r = a.scrollTop
        function i() {
          this.scrollTop !== (this === o ? e : r) &&
            ((o.scrollTop = a.scrollTop = 1e4),
            (e = o.scrollTop),
            (r = a.scrollTop),
            (function (e) {
              Ul.length ||
                setTimeout(function () {
                  var e = {}
                  Ul.forEach(function (t) {
                    e[t] = ql[t]
                  }),
                    (Ul.length = 0),
                    Yl.forEach(function (t) {
                      t(e)
                    })
                }, 0)
              Ul.push(e)
            })(n))
        }
        o.addEventListener('scroll', i, t), a.addEventListener('scroll', i, t)
      })
    var u = getComputedStyle(o)
    Object.defineProperty(ql, n, {
      configurable: !0,
      get: function () {
        return parseFloat(u.paddingBottom)
      }
    })
  }
}
function Hl(e) {
  return jl || Wl(), ql[e]
}
var Ul = []
var Yl = []
const Xl = Vl({
    get support() {
      return 0 != ('string' == typeof Dl ? Dl : zl()).length
    },
    get top() {
      return Hl('top')
    },
    get left() {
      return Hl('left')
    },
    get right() {
      return Hl('right')
    },
    get bottom() {
      return Hl('bottom')
    },
    onChange: function (e) {
      zl() && (jl || Wl(), 'function' == typeof e && Yl.push(e))
    },
    offChange: function (e) {
      var t = Yl.indexOf(e)
      t >= 0 && Yl.splice(t, 1)
    }
  }),
  Gl = ya(() => {}, ['prevent'])
function Kl(e, t) {
  return parseInt((e.getPropertyValue(t).match(/\d+/) || ['0'])[0])
}
function Ql() {
  const e = Kl(document.documentElement.style, '--window-top')
  return e ? e + Xl.top : 0
}
function Jl() {
  const e = document.documentElement.style,
    t = Ql(),
    n = Kl(e, '--window-bottom'),
    o = Kl(e, '--window-left'),
    r = Kl(e, '--window-right'),
    i = Kl(e, '--top-window-height')
  return {
    top: t,
    bottom: n ? n + Xl.bottom : 0,
    left: o ? o + Xl.left : 0,
    right: r ? r + Xl.right : 0,
    topWindowHeight: i || 0
  }
}
function Zl(e) {
  const t = document.documentElement.style
  Object.keys(e).forEach((n) => {
    t.setProperty(n, e[n])
  })
}
function ec(e) {
  return Symbol(e)
}
function tc(e) {
  return -1 !== (e += '').indexOf('rpx') || -1 !== e.indexOf('upx')
}
function nc(e, t = !1) {
  if (t)
    return (function (e) {
      if (!tc(e)) return e
      return e.replace(
        /(\d+(\.\d+)?)[ru]px/g,
        (e, t) => cd(parseFloat(t)) + 'px'
      )
    })(e)
  if (L(e)) {
    const t = parseInt(e) || 0
    return tc(e) ? cd(t) : t
  }
  return e
}
const oc =
    'M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z',
  rc =
    'M15.808 0.16q-4.224 0-7.872 2.176-3.552 2.112-5.632 5.728-2.144 3.744-2.144 8.128 0 4.192 2.144 7.872 2.112 3.52 5.632 5.632 3.68 2.144 7.872 2.144 4.384 0 8.128-2.144 3.616-2.080 5.728-5.632 2.176-3.648 2.176-7.872 0-4.384-2.176-8.128-2.112-3.616-5.728-5.728-3.744-2.176-8.128-2.176zM15.136 8.672h1.728q0.128 0 0.224 0.096t0.096 0.256l-0.384 10.24q0 0.064-0.048 0.112t-0.112 0.048h-1.248q-0.096 0-0.144-0.048t-0.048-0.112l-0.384-10.24q0-0.16 0.096-0.256t0.224-0.096zM16 23.328q-0.48 0-0.832-0.352t-0.352-0.848 0.352-0.848 0.832-0.352 0.832 0.352 0.352 0.848-0.352 0.848-0.832 0.352z',
  ic =
    'M21.781 7.844l-9.063 8.594 9.063 8.594q0.25 0.25 0.25 0.609t-0.25 0.578q-0.25 0.25-0.578 0.25t-0.578-0.25l-9.625-9.125q-0.156-0.125-0.203-0.297t-0.047-0.359q0-0.156 0.047-0.328t0.203-0.297l9.625-9.125q0.25-0.25 0.578-0.25t0.578 0.25q0.25 0.219 0.25 0.578t-0.25 0.578z'
function ac(e, t = '#000', n = 27) {
  return Gr(
    'svg',
    { width: n, height: n, viewBox: '0 0 32 32' },
    [Gr('path', { d: e, fill: t }, null, 8, ['d', 'fill'])],
    8,
    ['width', 'height']
  )
}
function sc() {
  {
    const { $pageInstance: e } = si()
    return e && e.proxy.$page.id
  }
}
function lc(e) {
  const t = ne(e)
  if (t.$page) return t.$page.id
  if (t.$) {
    const { $pageInstance: e } = t.$
    return e && e.proxy.$page.id
  }
}
function cc() {
  const e = Th(),
    t = e.length
  if (t) return e[t - 1]
}
function uc() {
  const e = cc()
  if (e) return e.$page.meta
}
function dc() {
  const e = uc()
  return e ? e.id : -1
}
function pc() {
  const e = cc()
  if (e) return e.$vm
}
const fc = ['navigationBar', 'pullToRefresh']
function hc(e, t) {
  const n = JSON.parse(JSON.stringify(__uniConfig.globalStyle || {})),
    o = x({ id: t }, n, e)
  fc.forEach((t) => {
    o[t] = x({}, n[t], e[t])
  })
  const { navigationBar: r } = o
  return r.titleText && r.titleImage && (r.titleText = ''), o
}
function gc(e, t, n) {
  if (L(e)) (n = t), (t = e), (e = pc())
  else if ('number' == typeof e) {
    const t = Th().find((t) => t.$page.id === e)
    e = t ? t.$vm : pc()
  }
  if (!e) return
  const o = e.$[t]
  return (
    o &&
    ((e, t) => {
      let n
      for (let o = 0; o < e.length; o++) n = e[o](t)
      return n
    })(o, n)
  )
}
function mc(e) {
  e.preventDefault()
}
let vc,
  yc = 0
function _c({ onPageScroll: e, onReachBottom: t, onReachBottomDistance: n }) {
  let o = !1,
    r = !1,
    i = !0
  const a = () => {
    function a() {
      if (
        (() => {
          const { scrollHeight: e } = document.documentElement,
            t = window.innerHeight,
            o = window.scrollY,
            i = o > 0 && e > t && o + t + n >= e,
            a = Math.abs(e - yc) > n
          return !i || (r && !a)
            ? (!i && r && (r = !1), !1)
            : ((yc = e), (r = !0), !0)
        })()
      )
        return (
          t && t(),
          (i = !1),
          setTimeout(function () {
            i = !0
          }, 350),
          !0
        )
    }
    e && e(window.pageYOffset),
      t && i && (a() || (vc = setTimeout(a, 300))),
      (o = !1)
  }
  return function () {
    clearTimeout(vc), o || requestAnimationFrame(a), (o = !0)
  }
}
function bc(e, t) {
  if (0 === t.indexOf('/')) return t
  if (0 === t.indexOf('./')) return bc(e, t.slice(2))
  const n = t.split('/'),
    o = n.length
  let r = 0
  for (; r < o && '..' === n[r]; r++);
  n.splice(0, r), (t = n.join('/'))
  const i = e.length > 0 ? e.split('/') : []
  return i.splice(i.length - r - 1, r + 1), ae(i.concat(n).join('/'))
}
function wc(e, t = !1) {
  return t
    ? __uniRoutes.find((t) => t.path === e || t.alias === e)
    : __uniRoutes.find((t) => t.path === e)
}
class xc {
  constructor(e) {
    ;(this.$bindClass = !1),
      (this.$bindStyle = !1),
      (this.$vm = e),
      (this.$el = (function (e, t = !1) {
        const { vnode: n } = e
        if (re(n.el)) return t ? (n.el ? [n.el] : []) : n.el
        const { subTree: o } = e
        if (16 & o.shapeFlag) {
          const e = o.children.filter((e) => e.el && re(e.el))
          if (e.length > 0) return t ? e.map((e) => e.el) : e[0].el
        }
        return t ? (n.el ? [n.el] : []) : n.el
      })(e.$)),
      this.$el.getAttribute &&
        ((this.$bindClass = !!this.$el.getAttribute('class')),
        (this.$bindStyle = !!this.$el.getAttribute('style')))
  }
  selectComponent(e) {
    if (!this.$el || !e) return
    const t = Cc(this.$el.querySelector(e))
    return t ? Tc(t, !1) : void 0
  }
  selectAllComponents(e) {
    if (!this.$el || !e) return []
    const t = [],
      n = this.$el.querySelectorAll(e)
    for (let o = 0; o < n.length; o++) {
      const e = Cc(n[o])
      e && t.push(Tc(e, !1))
    }
    return t
  }
  forceUpdate(e) {
    'class' === e
      ? this.$bindClass
        ? ((this.$el.__wxsClassChanged = !0), this.$vm.$forceUpdate())
        : this.updateWxsClass()
      : 'style' === e &&
        (this.$bindStyle
          ? ((this.$el.__wxsStyleChanged = !0), this.$vm.$forceUpdate())
          : this.updateWxsStyle())
  }
  updateWxsClass() {
    const { __wxsAddClass: e } = this.$el
    e.length && (this.$el.className = e.join(' '))
  }
  updateWxsStyle() {
    const { __wxsStyle: e } = this.$el
    e &&
      this.$el.setAttribute(
        'style',
        (function (e) {
          let t = ''
          if (!e || L(e)) return t
          for (const n in e) {
            const o = e[n],
              r = n.startsWith('--') ? n : W(n)
            ;(L(o) || 'number' == typeof o) && (t += `${r}:${o};`)
          }
          return t
        })(e)
      )
  }
  setStyle(e) {
    return this.$el && e
      ? (L(e) && (e = s(e)),
        N(e) && ((this.$el.__wxsStyle = e), this.forceUpdate('style')),
        this)
      : this
  }
  addClass(e) {
    if (!this.$el || !e) return this
    const t = this.$el.__wxsAddClass || (this.$el.__wxsAddClass = [])
    return -1 === t.indexOf(e) && (t.push(e), this.forceUpdate('class')), this
  }
  removeClass(e) {
    if (!this.$el || !e) return this
    const { __wxsAddClass: t } = this.$el
    if (t) {
      const n = t.indexOf(e)
      n > -1 && t.splice(n, 1)
    }
    const n = this.$el.__wxsRemoveClass || (this.$el.__wxsRemoveClass = [])
    return -1 === n.indexOf(e) && (n.push(e), this.forceUpdate('class')), this
  }
  hasClass(e) {
    return this.$el && this.$el.classList.contains(e)
  }
  getDataset() {
    return this.$el && this.$el.dataset
  }
  callMethod(e, t = {}) {
    const n = this.$vm[e]
    I(n)
      ? n(JSON.parse(JSON.stringify(t)))
      : this.$vm.ownerId &&
        cm.publishHandler('onWxsInvokeCallMethod', {
          nodeId: this.$el.__id,
          ownerId: this.$vm.ownerId,
          method: e,
          args: t
        })
  }
  requestAnimationFrame(e) {
    return window.requestAnimationFrame(e)
  }
  getState() {
    return this.$el && (this.$el.__wxsState || (this.$el.__wxsState = {}))
  }
  triggerEvent(e, t = {}) {
    return this.$vm.$emit(e, t), this
  }
  getComputedStyle(e) {
    if (this.$el) {
      const t = window.getComputedStyle(this.$el)
      return e && e.length ? e.reduce((e, n) => ((e[n] = t[n]), e), {}) : t
    }
    return {}
  }
  setTimeout(e, t) {
    return window.setTimeout(e, t)
  }
  clearTimeout(e) {
    return window.clearTimeout(e)
  }
  getBoundingClientRect() {
    return this.$el.getBoundingClientRect()
  }
}
function Tc(e, t = !0) {
  if ((t && e && (e = oe(e.$)), e && e.$el))
    return (
      e.$el.__wxsComponentDescriptor ||
        (e.$el.__wxsComponentDescriptor = new xc(e)),
      e.$el.__wxsComponentDescriptor
    )
}
function Sc(e, t) {
  return Tc(e, t)
}
function Ec(e, t, n, o = !0) {
  if (t) {
    e.__instance ||
      ((e.__instance = !0),
      Object.defineProperty(e, 'instance', { get: () => Sc(n.proxy, !1) }))
    const r = (function (e, t, n = !0) {
      if (!t) return !1
      if (n && e.length < 2) return !1
      const o = oe(t)
      if (!o) return !1
      const r = o.$.type
      return !(!r.$wxs && !r.$renderjs) && o
    })(t, n, o)
    if (r) return [e, Sc(r, !1)]
  }
}
function Cc(e) {
  if (e) return e.__vueParentComponent && e.__vueParentComponent.proxy
}
function kc(e) {
  for (; e && 0 !== e.tagName.indexOf('UNI-'); ) e = e.parentElement
  return e
}
function $c(e, t = !1) {
  const { type: n, timeStamp: o, target: r, currentTarget: i } = e,
    a = {
      type: n,
      timeStamp: o,
      target: fe(t ? r : kc(r)),
      detail: {},
      currentTarget: fe(i)
    }
  return (
    e._stopped && (a._stopped = !0),
    e.type.startsWith('touch') &&
      ((a.touches = e.touches), (a.changedTouches = e.changedTouches)),
    (function (e, t) {
      x(e, {
        preventDefault: () => t.preventDefault(),
        stopPropagation: () => t.stopPropagation()
      })
    })(a, e),
    a
  )
}
function Oc(e, t) {
  return {
    force: 1,
    identifier: 0,
    clientX: e.clientX,
    clientY: e.clientY - t,
    pageX: e.pageX,
    pageY: e.pageY - t
  }
}
function Ic(e, t) {
  const n = []
  for (let o = 0; o < e.length; o++) {
    const {
      identifier: r,
      pageX: i,
      pageY: a,
      clientX: s,
      clientY: l,
      force: c
    } = e[o]
    n.push({
      identifier: r,
      pageX: i,
      pageY: a - t,
      clientX: s,
      clientY: l - t,
      force: c || 0
    })
  }
  return n
}
const Lc = Object.defineProperty(
  {
    __proto__: null,
    $nne: function (e, t, n) {
      const { currentTarget: o } = e
      if (!(e instanceof Event && o instanceof HTMLElement)) return [e]
      const r = 0 !== o.tagName.indexOf('UNI-')
      if (r) return Ec(e, t, n, !1) || [e]
      const i = $c(e, r)
      if ('click' === e.type)
        !(function (e, t) {
          const { x: n, y: o } = t,
            r = Ql()
          ;(e.detail = { x: n, y: o - r }),
            (e.touches = e.changedTouches = [Oc(t, r)])
        })(i, e)
      else if (
        ((e) =>
          0 === e.type.indexOf('mouse') || ['contextmenu'].includes(e.type))(e)
      )
        !(function (e, t) {
          const n = Ql()
          ;(e.pageX = t.pageX),
            (e.pageY = t.pageY - n),
            (e.clientX = t.clientX),
            (e.clientY = t.clientY - n),
            (e.touches = e.changedTouches = [Oc(t, n)])
        })(i, e)
      else if (
        ((e) =>
          ('undefined' != typeof TouchEvent && e instanceof TouchEvent) ||
          0 === e.type.indexOf('touch') ||
          ['longpress'].indexOf(e.type) >= 0)(e)
      ) {
        const t = Ql()
        ;(i.touches = Ic(e.touches, t)),
          (i.changedTouches = Ic(e.changedTouches, t))
      } else if (
        ((e) => !e.type.indexOf('key') && e instanceof KeyboardEvent)(e)
      ) {
        ;['key', 'code'].forEach((t) => {
          Object.defineProperty(i, t, { get: () => e[t] })
        })
      }
      return Ec(i, t, n) || [i]
    },
    createNativeEvent: $c
  },
  Symbol.toStringTag,
  { value: 'Module' }
)
function Pc(e) {
  !(function (e) {
    const t = e.globalProperties
    x(t, Lc), (t.$gcd = Sc)
  })(e._context.config)
}
let Ac = 1
function Rc(e) {
  return (e || dc()) + '.invokeViewApi'
}
const Mc = x(wl('view'), {
  invokeOnCallback: (e, t) => um.emit('api.' + e, t),
  invokeViewMethod: (e, t, n, o) => {
    const { subscribe: r, publishHandler: i } = um,
      a = o ? Ac++ : 0
    o && r('invokeViewApi.' + a, o, !0),
      i(Rc(n), { id: a, name: e, args: t }, n)
  },
  invokeViewMethodKeepAlive: (e, t, n, o) => {
    const { subscribe: r, unsubscribe: i, publishHandler: a } = um,
      s = Ac++,
      l = 'invokeViewApi.' + s
    return (
      r(l, n),
      a(Rc(o), { id: s, name: e, args: t }, o),
      () => {
        i(l)
      }
    )
  }
})
function Bc(e) {
  gc(cc(), 'onResize', e), um.invokeOnCallback('onWindowResize', e)
}
function Nc(e) {
  const t = cc()
  gc(Yh(), 'onShow', e), gc(t, 'onShow')
}
function Vc() {
  gc(Yh(), 'onHide'), gc(cc(), 'onHide')
}
const jc = ['onPageScroll', 'onReachBottom']
function Dc() {
  jc.forEach((e) =>
    um.subscribe(
      e,
      (function (e) {
        return (t, n) => {
          gc(parseInt(n), e, t)
        }
      })(e)
    )
  )
}
function Fc() {
  !(function () {
    const { on: e } = um
    e('onResize', Bc),
      e('onAppEnterForeground', Nc),
      e('onAppEnterBackground', Vc)
  })(),
    Dc()
}
function qc() {
  if (this.$route) {
    const e = this.$route.meta
    return (
      e.eventChannel || (e.eventChannel = new _e(this.$page.id)), e.eventChannel
    )
  }
}
function zc(e) {
  e._context.config.globalProperties.getOpenerEventChannel = qc
}
function Wc() {
  return {
    path: '',
    query: {},
    scene: 1001,
    referrerInfo: { appId: '', extraData: {} }
  }
}
function Hc(e) {
  return /^-?\d+[ur]px$/i.test(e)
    ? e.replace(/(^-?\d+)[ur]px$/i, (e, t) => `${cd(parseFloat(t))}px`)
    : /^-?[\d\.]+$/.test(e)
      ? `${e}px`
      : e || ''
}
function Uc(e) {
  const t = e.animation
  if (!t || !t.actions || !t.actions.length) return
  let n = 0
  const o = t.actions,
    r = t.actions.length
  function i() {
    const t = o[n],
      a = t.option.transition,
      s = (function (e) {
        const t = [
            'matrix',
            'matrix3d',
            'scale',
            'scale3d',
            'rotate3d',
            'skew',
            'translate',
            'translate3d'
          ],
          n = [
            'scaleX',
            'scaleY',
            'scaleZ',
            'rotate',
            'rotateX',
            'rotateY',
            'rotateZ',
            'skewX',
            'skewY',
            'translateX',
            'translateY',
            'translateZ'
          ],
          o = ['opacity', 'background-color'],
          r = ['width', 'height', 'left', 'right', 'top', 'bottom'],
          i = e.animates,
          a = e.option,
          s = a.transition,
          l = {},
          c = []
        return (
          i.forEach((e) => {
            let i = e.type,
              a = [...e.args]
            if (t.concat(n).includes(i))
              i.startsWith('rotate') || i.startsWith('skew')
                ? (a = a.map((e) => parseFloat(e) + 'deg'))
                : i.startsWith('translate') && (a = a.map(Hc)),
                n.indexOf(i) >= 0 && (a.length = 1),
                c.push(`${i}(${a.join(',')})`)
            else if (o.concat(r).includes(a[0])) {
              i = a[0]
              const e = a[1]
              l[i] = r.includes(i) ? Hc(e) : e
            }
          }),
          (l.transform = l.webkitTransform = c.join(' ')),
          (l.transition = l.webkitTransition =
            Object.keys(l)
              .map(
                (e) =>
                  `${(function (e) {
                    return e
                      .replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`)
                      .replace('webkit', '-webkit')
                  })(e)} ${s.duration}ms ${s.timingFunction} ${s.delay}ms`
              )
              .join(',')),
          (l.transformOrigin = l.webkitTransformOrigin = a.transformOrigin),
          l
        )
      })(t)
    Object.keys(s).forEach((t) => {
      e.$el.style[t] = s[t]
    }),
      (n += 1),
      n < r && setTimeout(i, a.duration + a.delay)
  }
  setTimeout(() => {
    i()
  }, 0)
}
const Yc = {
    props: ['animation'],
    watch: {
      animation: {
        deep: !0,
        handler() {
          Uc(this)
        }
      }
    },
    mounted() {
      Uc(this)
    }
  },
  Xc = (e) => {
    e.__reserved = !0
    const { props: t, mixins: n } = e
    return (t && t.animation) || (n || (e.mixins = [])).push(Yc), Gc(e)
  },
  Gc = (e) => ((e.__reserved = !0), (e.compatConfig = { MODE: 3 }), so(e)),
  Kc = {
    hoverClass: { type: String, default: 'none' },
    hoverStopPropagation: { type: Boolean, default: !1 },
    hoverStartTime: { type: [Number, String], default: 50 },
    hoverStayTime: { type: [Number, String], default: 400 }
  }
function Qc(e) {
  const t = Jt(!1)
  let n,
    o,
    r = !1
  function i() {
    requestAnimationFrame(() => {
      clearTimeout(o),
        (o = setTimeout(() => {
          t.value = !1
        }, parseInt(e.hoverStayTime)))
    })
  }
  function a(o) {
    o._hoverPropagationStopped ||
      (e.hoverClass &&
        'none' !== e.hoverClass &&
        !e.disabled &&
        (e.hoverStopPropagation && (o._hoverPropagationStopped = !0),
        (r = !0),
        (n = setTimeout(() => {
          ;(t.value = !0), r || i()
        }, parseInt(e.hoverStartTime)))))
  }
  function s() {
    ;(r = !1), t.value && i()
  }
  function l() {
    s(), window.removeEventListener('mouseup', l)
  }
  return {
    hovering: t,
    binding: {
      onTouchstartPassive: function (e) {
        e.touches.length > 1 || a(e)
      },
      onMousedown: function (e) {
        r || (a(e), window.addEventListener('mouseup', l))
      },
      onTouchend: function () {
        s()
      },
      onMouseup: function () {
        r && l()
      },
      onTouchcancel: function () {
        ;(r = !1), (t.value = !1), clearTimeout(n)
      }
    }
  }
}
function Jc(e, t) {
  return (
    L(t) && (t = [t]),
    t.reduce((t, n) => (e[n] && (t[n] = !0), t), Object.create(null))
  )
}
function Zc(e) {
  return (e.__wwe = !0), e
}
function eu(e, t) {
  return (n, o, r) => {
    e.value &&
      t(
        n,
        (function (e, t, n, o) {
          const r = fe(n)
          return {
            type: o.type || e,
            timeStamp: t.timeStamp || 0,
            target: r,
            currentTarget: r,
            detail: o
          }
        })(n, o, e.value, r || {})
      )
  }
}
const tu = ec('uf'),
  nu = ec('ul')
function ou(e, t, n) {
  const o = sc()
  ;(n && !e) ||
    (N(t) &&
      Object.keys(t).forEach((r) => {
        n
          ? 0 !== r.indexOf('@') &&
            0 !== r.indexOf('uni-') &&
            cm.on(`uni-${r}-${o}-${e}`, t[r])
          : 0 === r.indexOf('uni-')
            ? cm.on(r, t[r])
            : e && cm.on(`uni-${r}-${o}-${e}`, t[r])
      }))
}
function ru(e, t, n) {
  const o = sc()
  ;(n && !e) ||
    (N(t) &&
      Object.keys(t).forEach((r) => {
        n
          ? 0 !== r.indexOf('@') &&
            0 !== r.indexOf('uni-') &&
            cm.off(`uni-${r}-${o}-${e}`, t[r])
          : 0 === r.indexOf('uni-')
            ? cm.off(r, t[r])
            : e && cm.off(`uni-${r}-${o}-${e}`, t[r])
      }))
}
const iu = Xc({
  name: 'Button',
  props: {
    id: { type: String, default: '' },
    hoverClass: { type: String, default: 'button-hover' },
    hoverStartTime: { type: [Number, String], default: 20 },
    hoverStayTime: { type: [Number, String], default: 70 },
    hoverStopPropagation: { type: Boolean, default: !1 },
    disabled: { type: [Boolean, String], default: !1 },
    formType: { type: String, default: '' },
    openType: { type: String, default: '' },
    loading: { type: [Boolean, String], default: !1 },
    plain: { type: [Boolean, String], default: !1 }
  },
  setup(e, { slots: t }) {
    const n = Jt(null),
      o = Wn(tu, !1),
      { hovering: r, binding: i } = Qc(e)
    hl()
    const a = Zc((t, r) => {
        if (e.disabled) return t.stopImmediatePropagation()
        r && n.value.click()
        const i = e.formType
        if (i) {
          if (!o) return
          'submit' === i ? o.submit(t) : 'reset' === i && o.reset(t)
        } else;
      }),
      s = Wn(nu, !1)
    return (
      s &&
        (s.addHandler(a),
        Po(() => {
          s.removeHandler(a)
        })),
      (function (e, t) {
        ou(e.id, t),
          Yn(
            () => e.id,
            (e, n) => {
              ru(n, t, !0), ou(e, t, !0)
            }
          ),
          Ao(() => {
            ru(e.id, t)
          })
      })(e, { 'label-click': a }),
      () => {
        const o = e.hoverClass,
          s = Jc(e, 'disabled'),
          l = Jc(e, 'loading'),
          c = Jc(e, 'plain'),
          u = o && 'none' !== o
        return Gr(
          'uni-button',
          ni(
            { ref: n, onClick: a, class: u && r.value ? o : '' },
            u && i,
            s,
            l,
            c
          ),
          [t.default && t.default()],
          16,
          ['onClick']
        )
      }
    )
  }
})
function au(e) {
  return e.$el
}
function su(e) {
  const { base: t } = __uniConfig.router
  return 0 === ae(e).indexOf(t) ? ae(e) : t + e
}
function lu(e) {
  const { base: t, assets: n } = __uniConfig.router
  if (
    ('./' === t &&
      (0 === e.indexOf('./static/') ||
        (n && 0 === e.indexOf('./' + n + '/'))) &&
      (e = e.slice(1)),
    0 === e.indexOf('/'))
  ) {
    if (0 !== e.indexOf('//')) return su(e.slice(1))
    e = 'https:' + e
  }
  if (Z.test(e) || ee.test(e) || 0 === e.indexOf('blob:')) return e
  const o = Th()
  return o.length ? su(bc(o[o.length - 1].$page.route, e).slice(1)) : e
}
const cu = navigator.userAgent,
  uu = /android/i.test(cu),
  du = /iphone|ipad|ipod/i.test(cu),
  pu = cu.match(/Windows NT ([\d|\d.\d]*)/i),
  fu = /Macintosh|Mac/i.test(cu),
  hu = /Linux|X11/i.test(cu),
  gu = fu && navigator.maxTouchPoints > 0
function mu() {
  return (
    /^Apple/.test(navigator.vendor) && 'number' == typeof window.orientation
  )
}
function vu(e) {
  return e && 90 === Math.abs(window.orientation)
}
function yu(e, t) {
  return e ? Math[t ? 'max' : 'min'](screen.width, screen.height) : screen.width
}
function _u(e) {
  return (
    Math.min(window.innerWidth, document.documentElement.clientWidth, e) || e
  )
}
function bu(e, t, n, o) {
  um.invokeViewMethod('video.' + e, { videoId: e, type: n, data: o }, t)
}
function wu(e, t) {
  const n = {},
    { top: o, topWindowHeight: r } = Jl()
  if (
    (t.id && (n.id = e.id), t.dataset && (n.dataset = ue(e)), t.rect || t.size)
  ) {
    const i = e.getBoundingClientRect()
    t.rect &&
      ((n.left = i.left),
      (n.right = i.right),
      (n.top = i.top - o - r),
      (n.bottom = i.bottom - o - r)),
      t.size && ((n.width = i.width), (n.height = i.height))
  }
  if (
    (C(t.properties) &&
      t.properties.forEach((e) => {
        e = e.replace(/-([a-z])/g, function (e, t) {
          return t.toUpperCase()
        })
      }),
    t.scrollOffset)
  )
    if ('UNI-SCROLL-VIEW' === e.tagName) {
      const t = e.children[0].children[0]
      ;(n.scrollLeft = t.scrollLeft),
        (n.scrollTop = t.scrollTop),
        (n.scrollHeight = t.scrollHeight),
        (n.scrollWidth = t.scrollWidth)
    } else
      (n.scrollLeft = 0),
        (n.scrollTop = 0),
        (n.scrollHeight = 0),
        (n.scrollWidth = 0)
  if (C(t.computedStyle)) {
    const o = getComputedStyle(e)
    t.computedStyle.forEach((e) => {
      n[e] = o[e]
    })
  }
  return (
    t.context &&
      (n.contextInfo = (function (e) {
        return e.__uniContextInfo
      })(e)),
    n
  )
}
function xu(e, t) {
  return (
    e.matches ||
    e.matchesSelector ||
    e.mozMatchesSelector ||
    e.msMatchesSelector ||
    e.oMatchesSelector ||
    e.webkitMatchesSelector ||
    function (e) {
      const t = this.parentElement.querySelectorAll(e)
      let n = t.length
      for (; --n >= 0 && t.item(n) !== this; );
      return n > -1
    }
  ).call(e, t)
}
function Tu(e, t, n) {
  const o = []
  t.forEach(({ component: t, selector: n, single: r, fields: i }) => {
    null === t
      ? o.push(
          (function (e) {
            const t = {}
            if (
              (e.id && (t.id = ''),
              e.dataset && (t.dataset = {}),
              e.rect &&
                ((t.left = 0), (t.right = 0), (t.top = 0), (t.bottom = 0)),
              e.size &&
                ((t.width = document.documentElement.clientWidth),
                (t.height = document.documentElement.clientHeight)),
              e.scrollOffset)
            ) {
              const e = document.documentElement,
                n = document.body
              ;(t.scrollLeft = e.scrollLeft || n.scrollLeft || 0),
                (t.scrollTop = e.scrollTop || n.scrollTop || 0),
                (t.scrollHeight = e.scrollHeight || n.scrollHeight || 0),
                (t.scrollWidth = e.scrollWidth || n.scrollWidth || 0)
            }
            return t
          })(i)
        )
      : o.push(
          (function (e, t, n, o, r) {
            const i = (function (e, t) {
                return e ? e.$el : t.$el
              })(t, e),
              a = i.parentElement
            if (!a) return o ? null : []
            const { nodeType: s } = i,
              l = 3 === s || 8 === s
            if (o) {
              const e = l
                ? a.querySelector(n)
                : xu(i, n)
                  ? i
                  : i.querySelector(n)
              return e ? wu(e, r) : null
            }
            {
              let e = []
              const t = (l ? a : i).querySelectorAll(n)
              return (
                t &&
                  t.length &&
                  [].forEach.call(t, (t) => {
                    e.push(wu(t, r))
                  }),
                !l && xu(i, n) && e.unshift(wu(i, r)),
                e
              )
            }
          })(e, t, n, r, i)
        )
  }),
    n(o)
}
const Su = ['original', 'compressed'],
  Eu = ['album', 'camera']
function Cu(e, t) {
  return !C(e) || 0 === e.length || e.find((e) => -1 === t.indexOf(e)) ? t : e
}
function ku(e) {
  return function () {
    try {
      return e.apply(e, arguments)
    } catch (t) {
      console.error(t)
    }
  }
}
let $u = 1
const Ou = {}
function Iu(e, t, n, o = !1) {
  return (Ou[e] = { name: t, keepAlive: o, callback: n }), e
}
function Lu(e, t, n) {
  if ('number' == typeof e) {
    const o = Ou[e]
    if (o) return o.keepAlive || delete Ou[e], o.callback(t, n)
  }
  return t
}
const Pu = 'success',
  Au = 'fail',
  Ru = 'complete'
function Mu(e, t = {}, { beforeAll: n, beforeSuccess: o } = {}) {
  N(t) || (t = {})
  const {
      success: r,
      fail: i,
      complete: a
    } = (function (e) {
      const t = {}
      for (const n in e) {
        const o = e[n]
        I(o) && ((t[n] = ku(o)), delete e[n])
      }
      return t
    })(t),
    s = I(r),
    l = I(i),
    c = I(a),
    u = $u++
  return (
    Iu(u, e, (u) => {
      ;((u = u || {}).errMsg = (function (e, t) {
        return e && -1 !== e.indexOf(':fail')
          ? t + e.substring(e.indexOf(':fail'))
          : t + ':ok'
      })(u.errMsg, e)),
        I(n) && n(u),
        u.errMsg === e + ':ok' ? (I(o) && o(u, t), s && r(u)) : l && i(u),
        c && a(u)
    }),
    u
  )
}
const Bu = 'success',
  Nu = 'fail',
  Vu = 'complete',
  ju = {},
  Du = {}
function Fu(e, t) {
  return function (n) {
    return e(n, t) || n
  }
}
function qu(e, t, n) {
  let o = !1
  for (let r = 0; r < e.length; r++) {
    const i = e[r]
    if (o) o = Promise.resolve(Fu(i, n))
    else {
      const e = i(t, n)
      if ((R(e) && (o = Promise.resolve(e)), !1 === e))
        return { then() {}, catch() {} }
    }
  }
  return o || { then: (e) => e(t), catch() {} }
}
function zu(e, t = {}) {
  return (
    [Bu, Nu, Vu].forEach((n) => {
      const o = e[n]
      if (!C(o)) return
      const r = t[n]
      t[n] = function (e) {
        qu(o, e, t).then((e) => (I(r) && r(e)) || e)
      }
    }),
    t
  )
}
function Wu(e, t) {
  const n = []
  C(ju.returnValue) && n.push(...ju.returnValue)
  const o = Du[e]
  return (
    o && C(o.returnValue) && n.push(...o.returnValue),
    n.forEach((e) => {
      t = e(t) || t
    }),
    t
  )
}
function Hu(e) {
  const t = Object.create(null)
  Object.keys(ju).forEach((e) => {
    'returnValue' !== e && (t[e] = ju[e].slice())
  })
  const n = Du[e]
  return (
    n &&
      Object.keys(n).forEach((e) => {
        'returnValue' !== e && (t[e] = (t[e] || []).concat(n[e]))
      }),
    t
  )
}
function Uu(e, t, n, o) {
  const r = Hu(e)
  if (r && Object.keys(r).length) {
    if (C(r.invoke)) {
      return qu(r.invoke, n).then((n) => t(zu(Hu(e), n), ...o))
    }
    return t(zu(r, n), ...o)
  }
  return t(n, ...o)
}
function Yu(e, t) {
  return (n = {}, ...o) =>
    (function (e) {
      return !(!N(e) || ![Pu, Au, Ru].find((t) => I(e[t])))
    })(n)
      ? Wu(e, Uu(e, t, n, o))
      : Wu(
          e,
          new Promise((r, i) => {
            Uu(e, t, x(n, { success: r, fail: i }), o)
          })
        )
}
function Xu(e, t, n, o) {
  return Lu(e, x({ errMsg: t + ':fail' + (n ? ' ' + n : '') }, o))
}
function Gu(e, t, n, o) {
  if (o && o.beforeInvoke) {
    const e = o.beforeInvoke(t)
    if (L(e)) return e
  }
  const r = (function (e, t) {
    const n = e[0]
    if (!t || (!N(t.formatArgs) && N(n))) return
    const o = t.formatArgs,
      r = Object.keys(o)
    for (let i = 0; i < r.length; i++) {
      const t = r[i],
        a = o[t]
      if (I(a)) {
        const o = a(e[0][t], n)
        if (L(o)) return o
      } else E(n, t) || (n[t] = a)
    }
  })(t, o)
  if (r) return r
}
function Ku(e, t, n) {
  return (o) => {
    !(function (e) {
      if (!I(e))
        throw new Error(
          'Invalid args: type check failed for args "callback". Expected Function'
        )
    })(o)
    const r = Gu(0, [o], 0, n)
    if (r) throw new Error(r)
    const i = !(function (e) {
      for (const t in Ou) if (Ou[t].name === e) return !0
      return !1
    })(e)
    !(function (e, t) {
      Iu($u++, e, t, !0)
    })(e, o),
      i &&
        (!(function (e) {
          um.on('api.' + e, (t) => {
            for (const n in Ou) {
              const o = Ou[n]
              o.name === e && o.callback(t)
            }
          })
        })(e),
        t())
  }
}
function Qu(e, t, n, o) {
  return (n) => {
    const r = Mu(e, n, o),
      i = Gu(0, [n], 0, o)
    return i
      ? Xu(r, e, i)
      : t(n, {
          resolve: (t) =>
            (function (e, t, n) {
              return Lu(e, x(n || {}, { errMsg: t + ':ok' }))
            })(r, e, t),
          reject: (t, n) =>
            Xu(
              r,
              e,
              (function (e) {
                return !e || L(e)
                  ? e
                  : e.stack
                    ? (console.error(e.message + '\n' + e.stack), e.message)
                    : e
              })(t),
              n
            )
        })
  }
}
function Ju(e, t, n) {
  return Ku(e, t, n)
}
function Zu(e, t, n, o) {
  return (function (e, t, n, o) {
    return (...e) => {
      const n = Gu(0, e, 0, o)
      if (n) throw new Error(n)
      return t.apply(null, e)
    }
  })(0, t, 0, o)
}
function ed(e, t, n, o) {
  return Yu(
    e,
    (function (e, t, n, o) {
      return Qu(e, t, 0, o)
    })(e, t, 0, o)
  )
}
let td = !1,
  nd = 0,
  od = 0,
  rd = 960,
  id = 375,
  ad = 750
function sd() {
  const {
    platform: e,
    pixelRatio: t,
    windowWidth: n
  } = (function () {
    const e = mu(),
      t = _u(yu(e, vu(e)))
    return {
      platform: du ? 'ios' : 'other',
      pixelRatio: window.devicePixelRatio,
      windowWidth: t
    }
  })()
  ;(nd = n), (od = t), (td = 'ios' === e)
}
function ld(e, t) {
  const n = Number(e)
  return isNaN(n) ? t : n
}
const cd = Zu(0, (e, t) => {
    if (
      (0 === nd &&
        (sd(),
        (function () {
          const e = __uniConfig.globalStyle || {}
          ;(rd = ld(e.rpxCalcMaxDeviceWidth, 960)),
            (id = ld(e.rpxCalcBaseDeviceWidth, 375)),
            (ad = ld(e.rpxCalcBaseDeviceWidth, 750))
        })()),
      0 === (e = Number(e)))
    )
      return 0
    let n = t || nd
    n = e === ad || n <= rd ? n : id
    let o = (e / 750) * n
    return (
      o < 0 && (o = -o),
      (o = Math.floor(o + 1e-4)),
      0 === o && (o = 1 !== od && td ? 0.5 : 1),
      e < 0 ? -o : o
    )
  }),
  ud = new Ce(),
  dd = Zu(0, (e, t) => (ud.on(e, t), () => ud.off(e, t))),
  pd = Zu(0, (e, t) => {
    e ? (C(e) || (e = [e]), e.forEach((e) => ud.off(e, t))) : (ud.e = {})
  }),
  fd = Zu(0, (e, ...t) => {
    ud.emit(e, ...t)
  }),
  hd = [0.5, 0.8, 1, 1.25, 1.5, 2]
const gd = (e, t, n, o) => {
  !(function (e, t, n, o, r) {
    um.invokeViewMethod('map.' + e, { type: n, data: o }, t, r)
  })(e, t, n, o, (e) => {
    o &&
      ((e, t) => {
        const n = t.errMsg || ''
        new RegExp('\\:\\s*fail').test(n)
          ? e.fail && e.fail(t)
          : e.success && e.success(t),
          e.complete && e.complete(t)
      })(o, e)
  })
}
function md(e, t) {
  return function (n, o) {
    n ? (o[e] = Math.round(n)) : void 0 !== t && (o[e] = t)
  }
}
const vd = md('width'),
  yd = md('height'),
  _d = { PNG: 'png', JPG: 'jpg', JPEG: 'jpg' },
  bd = {
    formatArgs: {
      x: md('x', 0),
      y: md('y', 0),
      width: vd,
      height: yd,
      destWidth: md('destWidth'),
      destHeight: md('destHeight'),
      fileType(e, t) {
        e = (e || '').toUpperCase()
        let n = _d[e]
        n || (n = _d.PNG), (t.fileType = n)
      },
      quality(e, t) {
        t.quality = e && e > 0 && e < 1 ? e : 1
      }
    }
  }
function wd(e, t, n, o, r) {
  um.invokeViewMethod(`canvas.${e}`, { type: n, data: o }, t, (e) => {
    r && r(e)
  })
}
var xd = ['scale', 'rotate', 'translate', 'setTransform', 'transform'],
  Td = [
    'drawImage',
    'fillText',
    'fill',
    'stroke',
    'fillRect',
    'strokeRect',
    'clearRect',
    'strokeText'
  ],
  Sd = [
    'setFillStyle',
    'setTextAlign',
    'setStrokeStyle',
    'setGlobalAlpha',
    'setShadow',
    'setFontSize',
    'setLineCap',
    'setLineJoin',
    'setLineWidth',
    'setMiterLimit',
    'setTextBaseline',
    'setLineDash'
  ]
const Ed = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgrey: '#a9a9a9',
  darkgreen: '#006400',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  grey: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgrey: '#d3d3d3',
  lightgreen: '#90ee90',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
  transparent: '#00000000'
}
function Cd(e) {
  var t = null
  if (null != (t = /^#([0-9|A-F|a-f]{6})$/.exec((e = e || '#000000')))) {
    return [
      parseInt(t[1].slice(0, 2), 16),
      parseInt(t[1].slice(2, 4), 16),
      parseInt(t[1].slice(4), 16),
      255
    ]
  }
  if (null != (t = /^#([0-9|A-F|a-f]{3})$/.exec(e))) {
    let e = t[1].slice(0, 1),
      n = t[1].slice(1, 2),
      o = t[1].slice(2, 3)
    return (
      (e = parseInt(e + e, 16)),
      (n = parseInt(n + n, 16)),
      (o = parseInt(o + o, 16)),
      [e, n, o, 255]
    )
  }
  if (null != (t = /^rgb\((.+)\)$/.exec(e)))
    return t[1]
      .split(',')
      .map(function (e) {
        return Math.min(255, parseInt(e.trim()))
      })
      .concat(255)
  if (null != (t = /^rgba\((.+)\)$/.exec(e)))
    return t[1].split(',').map(function (e, t) {
      return 3 === t
        ? Math.floor(255 * parseFloat(e.trim()))
        : Math.min(255, parseInt(e.trim()))
    })
  var n = e.toLowerCase()
  if (E(Ed, n)) {
    t = /^#([0-9|A-F|a-f]{6,8})$/.exec(Ed[n])
    const e = parseInt(t[1].slice(0, 2), 16),
      o = parseInt(t[1].slice(2, 4), 16),
      r = parseInt(t[1].slice(4, 6), 16)
    let i = parseInt(t[1].slice(6, 8), 16)
    return (i = i >= 0 ? i : 255), [e, o, r, i]
  }
  return console.error('unsupported color:' + e), [0, 0, 0, 255]
}
class kd {
  constructor(e, t) {
    ;(this.type = e), (this.data = t), (this.colorStop = [])
  }
  addColorStop(e, t) {
    this.colorStop.push([e, Cd(t)])
  }
}
class $d {
  constructor(e, t) {
    ;(this.type = 'pattern'), (this.data = e), (this.colorStop = t)
  }
}
class Od {
  constructor(e) {
    this.width = e
  }
}
class Id {
  constructor(e, t) {
    ;(this.id = e),
      (this.pageId = t),
      (this.actions = []),
      (this.path = []),
      (this.subpath = []),
      (this.drawingState = []),
      (this.state = {
        lineDash: [0, 0],
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 0,
        shadowColor: [0, 0, 0, 0],
        font: '10px sans-serif',
        fontSize: 10,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontFamily: 'sans-serif'
      })
  }
  draw(e = !1, t) {
    var n = [...this.actions]
    ;(this.actions = []),
      (this.path = []),
      wd(this.id, this.pageId, 'actionsChanged', { actions: n, reserve: e }, t)
  }
  createLinearGradient(e, t, n, o) {
    return new kd('linear', [e, t, n, o])
  }
  createCircularGradient(e, t, n) {
    return new kd('radial', [e, t, n])
  }
  createPattern(e, t) {
    if (void 0 === t)
      console.error(
        "Failed to execute 'createPattern' on 'CanvasContext': 2 arguments required, but only 1 present."
      )
    else {
      if (!(['repeat', 'repeat-x', 'repeat-y', 'no-repeat'].indexOf(t) < 0))
        return new $d(e, t)
      console.error(
        "Failed to execute 'createPattern' on 'CanvasContext': The provided type ('" +
          t +
          "') is not one of 'repeat', 'no-repeat', 'repeat-x', or 'repeat-y'."
      )
    }
  }
  measureText(e) {
    let t = 0
    return (
      (t = (function (e, t) {
        const n = document.createElement('canvas').getContext('2d')
        return (n.font = t), n.measureText(e).width || 0
      })(e, this.state.font)),
      new Od(t)
    )
  }
  save() {
    this.actions.push({ method: 'save', data: [] }),
      this.drawingState.push(this.state)
  }
  restore() {
    this.actions.push({ method: 'restore', data: [] }),
      (this.state = this.drawingState.pop() || {
        lineDash: [0, 0],
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 0,
        shadowColor: [0, 0, 0, 0],
        font: '10px sans-serif',
        fontSize: 10,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontFamily: 'sans-serif'
      })
  }
  beginPath() {
    ;(this.path = []),
      (this.subpath = []),
      this.path.push({ method: 'beginPath', data: [] })
  }
  moveTo(e, t) {
    this.path.push({ method: 'moveTo', data: [e, t] }),
      (this.subpath = [[e, t]])
  }
  lineTo(e, t) {
    0 === this.path.length && 0 === this.subpath.length
      ? this.path.push({ method: 'moveTo', data: [e, t] })
      : this.path.push({ method: 'lineTo', data: [e, t] }),
      this.subpath.push([e, t])
  }
  quadraticCurveTo(e, t, n, o) {
    this.path.push({ method: 'quadraticCurveTo', data: [e, t, n, o] }),
      this.subpath.push([n, o])
  }
  bezierCurveTo(e, t, n, o, r, i) {
    this.path.push({ method: 'bezierCurveTo', data: [e, t, n, o, r, i] }),
      this.subpath.push([r, i])
  }
  arc(e, t, n, o, r, i = !1) {
    this.path.push({ method: 'arc', data: [e, t, n, o, r, i] }),
      this.subpath.push([e, t])
  }
  rect(e, t, n, o) {
    this.path.push({ method: 'rect', data: [e, t, n, o] }),
      (this.subpath = [[e, t]])
  }
  arcTo(e, t, n, o, r) {
    this.path.push({ method: 'arcTo', data: [e, t, n, o, r] }),
      this.subpath.push([n, o])
  }
  clip() {
    this.actions.push({ method: 'clip', data: [...this.path] })
  }
  closePath() {
    this.path.push({ method: 'closePath', data: [] }),
      this.subpath.length && (this.subpath = [this.subpath.shift()])
  }
  clearActions() {
    ;(this.actions = []), (this.path = []), (this.subpath = [])
  }
  getActions() {
    var e = [...this.actions]
    return this.clearActions(), e
  }
  set lineDashOffset(e) {
    this.actions.push({ method: 'setLineDashOffset', data: [e] })
  }
  set globalCompositeOperation(e) {
    this.actions.push({ method: 'setGlobalCompositeOperation', data: [e] })
  }
  set shadowBlur(e) {
    this.actions.push({ method: 'setShadowBlur', data: [e] })
  }
  set shadowColor(e) {
    this.actions.push({ method: 'setShadowColor', data: [e] })
  }
  set shadowOffsetX(e) {
    this.actions.push({ method: 'setShadowOffsetX', data: [e] })
  }
  set shadowOffsetY(e) {
    this.actions.push({ method: 'setShadowOffsetY', data: [e] })
  }
  set font(e) {
    var t = this
    this.state.font = e
    var n = e.match(/^(([\w\-]+\s)*)(\d+r?px)(\/(\d+\.?\d*(r?px)?))?\s+(.*)/)
    if (n) {
      var o = n[1].trim().split(/\s/),
        r = parseFloat(n[3]),
        i = n[7],
        a = []
      o.forEach(function (e, n) {
        ;['italic', 'oblique', 'normal'].indexOf(e) > -1
          ? (a.push({ method: 'setFontStyle', data: [e] }),
            (t.state.fontStyle = e))
          : ['bold', 'normal'].indexOf(e) > -1
            ? (a.push({ method: 'setFontWeight', data: [e] }),
              (t.state.fontWeight = e))
            : 0 === n
              ? (a.push({ method: 'setFontStyle', data: ['normal'] }),
                (t.state.fontStyle = 'normal'))
              : 1 === n && s()
      }),
        1 === o.length && s(),
        (o = a
          .map(function (e) {
            return e.data[0]
          })
          .join(' ')),
        (this.state.fontSize = r),
        (this.state.fontFamily = i),
        this.actions.push({ method: 'setFont', data: [`${o} ${r}px ${i}`] })
    } else
      console.warn("Failed to set 'font' on 'CanvasContext': invalid format.")
    function s() {
      a.push({ method: 'setFontWeight', data: ['normal'] }),
        (t.state.fontWeight = 'normal')
    }
  }
  get font() {
    return this.state.font
  }
  set fillStyle(e) {
    this.setFillStyle(e)
  }
  set strokeStyle(e) {
    this.setStrokeStyle(e)
  }
  set globalAlpha(e) {
    ;(e = Math.floor(255 * parseFloat(e))),
      this.actions.push({ method: 'setGlobalAlpha', data: [e] })
  }
  set textAlign(e) {
    this.actions.push({ method: 'setTextAlign', data: [e] })
  }
  set lineCap(e) {
    this.actions.push({ method: 'setLineCap', data: [e] })
  }
  set lineJoin(e) {
    this.actions.push({ method: 'setLineJoin', data: [e] })
  }
  set lineWidth(e) {
    this.actions.push({ method: 'setLineWidth', data: [e] })
  }
  set miterLimit(e) {
    this.actions.push({ method: 'setMiterLimit', data: [e] })
  }
  set textBaseline(e) {
    this.actions.push({ method: 'setTextBaseline', data: [e] })
  }
}
const Ld = se(() => {
    ;[...xd, ...Td].forEach(function (e) {
      Id.prototype[e] = (function (e) {
        switch (e) {
          case 'fill':
          case 'stroke':
            return function () {
              this.actions.push({ method: e + 'Path', data: [...this.path] })
            }
          case 'fillRect':
            return function (e, t, n, o) {
              this.actions.push({
                method: 'fillPath',
                data: [{ method: 'rect', data: [e, t, n, o] }]
              })
            }
          case 'strokeRect':
            return function (e, t, n, o) {
              this.actions.push({
                method: 'strokePath',
                data: [{ method: 'rect', data: [e, t, n, o] }]
              })
            }
          case 'fillText':
          case 'strokeText':
            return function (t, n, o, r) {
              var i = [t.toString(), n, o]
              'number' == typeof r && i.push(r),
                this.actions.push({ method: e, data: i })
            }
          case 'drawImage':
            return function (t, n, o, r, i, a, s, l, c) {
              var u
              function d(e) {
                return 'number' == typeof e
              }
              void 0 === c &&
                ((a = n),
                (s = o),
                (l = r),
                (c = i),
                (n = void 0),
                (o = void 0),
                (r = void 0),
                (i = void 0)),
                (u =
                  d(n) && d(o) && d(r) && d(i)
                    ? [t, a, s, l, c, n, o, r, i]
                    : d(l) && d(c)
                      ? [t, a, s, l, c]
                      : [t, a, s]),
                this.actions.push({ method: e, data: u })
            }
          default:
            return function (...t) {
              this.actions.push({ method: e, data: t })
            }
        }
      })(e)
    }),
      Sd.forEach(function (e) {
        Id.prototype[e] = (function (e) {
          switch (e) {
            case 'setFillStyle':
            case 'setStrokeStyle':
              return function (t) {
                'object' != typeof t
                  ? this.actions.push({ method: e, data: ['normal', Cd(t)] })
                  : this.actions.push({
                      method: e,
                      data: [t.type, t.data, t.colorStop]
                    })
              }
            case 'setGlobalAlpha':
              return function (t) {
                ;(t = Math.floor(255 * parseFloat(t))),
                  this.actions.push({ method: e, data: [t] })
              }
            case 'setShadow':
              return function (t, n, o, r) {
                ;(r = Cd(r)),
                  this.actions.push({ method: e, data: [t, n, o, r] }),
                  (this.state.shadowBlur = o),
                  (this.state.shadowColor = r),
                  (this.state.shadowOffsetX = t),
                  (this.state.shadowOffsetY = n)
              }
            case 'setLineDash':
              return function (t, n) {
                ;(t = t || [0, 0]),
                  (n = n || 0),
                  this.actions.push({ method: e, data: [t, n] }),
                  (this.state.lineDash = t)
              }
            case 'setFontSize':
              return function (t) {
                ;(this.state.font = this.state.font.replace(
                  /\d+\.?\d*px/,
                  t + 'px'
                )),
                  (this.state.fontSize = t),
                  this.actions.push({ method: e, data: [t] })
              }
            default:
              return function (...t) {
                this.actions.push({ method: e, data: t })
              }
          }
        })(e)
      })
  }),
  Pd = Zu(0, (e, t) => {
    if ((Ld(), t)) return new Id(e, lc(t))
    const n = lc(pc())
    if (n) return new Id(e, n)
    um.emit('onError', 'createCanvasContext:fail')
  }),
  Ad = ed(
    'canvasToTempFilePath',
    (
      {
        x: e = 0,
        y: t = 0,
        width: n,
        height: o,
        destWidth: r,
        destHeight: i,
        canvasId: a,
        fileType: s,
        quality: l
      },
      { resolve: c, reject: u }
    ) => {
      var d = lc(pc())
      if (!d) return void u()
      wd(
        a,
        d,
        'toTempFilePath',
        {
          x: e,
          y: t,
          width: n,
          height: o,
          destWidth: r,
          destHeight: i,
          fileType: s,
          quality: l,
          dirname: `${_p}/canvas`
        },
        (e) => {
          e.errMsg && -1 !== e.errMsg.indexOf('fail') ? u('', e) : c(e)
        }
      )
    },
    0,
    bd
  ),
  Rd = { thresholds: [0], initialRatio: 0, observeAll: !1 },
  Md = ['top', 'right', 'bottom', 'left']
let Bd = 1
function Nd(e = {}) {
  return Md.map((t) => `${Number(e[t]) || 0}px`).join(' ')
}
class Vd {
  constructor(e, t) {
    ;(this._pageId = lc(e)),
      (this._component = e),
      (this._options = x({}, Rd, t))
  }
  relativeTo(e, t) {
    return (
      (this._options.relativeToSelector = e),
      (this._options.rootMargin = Nd(t)),
      this
    )
  }
  relativeToViewport(e) {
    return (
      (this._options.relativeToSelector = void 0),
      (this._options.rootMargin = Nd(e)),
      this
    )
  }
  observe(e, t) {
    I(t) &&
      ((this._options.selector = e),
      (this._reqId = Bd++),
      (function ({ reqId: e, component: t, options: n, callback: o }, r) {
        const i = au(t)
        ;(i.__io || (i.__io = {}))[e] = (function (e, t, n) {
          !(function () {
            if ('object' != typeof window) return
            if (
              'IntersectionObserver' in window &&
              'IntersectionObserverEntry' in window &&
              'intersectionRatio' in window.IntersectionObserverEntry.prototype
            )
              return void (
                'isIntersecting' in
                  window.IntersectionObserverEntry.prototype ||
                Object.defineProperty(
                  window.IntersectionObserverEntry.prototype,
                  'isIntersecting',
                  {
                    get: function () {
                      return this.intersectionRatio > 0
                    }
                  }
                )
              )
            function e(e) {
              try {
                return (e.defaultView && e.defaultView.frameElement) || null
              } catch (t) {
                return null
              }
            }
            var t = (function (t) {
                for (var n = window.document, o = e(n); o; )
                  o = e((n = o.ownerDocument))
                return n
              })(),
              n = [],
              o = null,
              r = null
            function i(e) {
              ;(this.time = e.time),
                (this.target = e.target),
                (this.rootBounds = h(e.rootBounds)),
                (this.boundingClientRect = h(e.boundingClientRect)),
                (this.intersectionRect = h(e.intersectionRect || f())),
                (this.isIntersecting = !!e.intersectionRect)
              var t = this.boundingClientRect,
                n = t.width * t.height,
                o = this.intersectionRect,
                r = o.width * o.height
              this.intersectionRatio = n
                ? Number((r / n).toFixed(4))
                : this.isIntersecting
                  ? 1
                  : 0
            }
            function a(e, t) {
              var n = t || {}
              if ('function' != typeof e)
                throw new Error('callback must be a function')
              if (n.root && 1 != n.root.nodeType && 9 != n.root.nodeType)
                throw new Error('root must be a Document or Element')
              ;(this._checkForIntersections = l(
                this._checkForIntersections.bind(this),
                this.THROTTLE_TIMEOUT
              )),
                (this._callback = e),
                (this._observationTargets = []),
                (this._queuedEntries = []),
                (this._rootMarginValues = this._parseRootMargin(n.rootMargin)),
                (this.thresholds = this._initThresholds(n.threshold)),
                (this.root = n.root || null),
                (this.rootMargin = this._rootMarginValues
                  .map(function (e) {
                    return e.value + e.unit
                  })
                  .join(' ')),
                (this._monitoringDocuments = []),
                (this._monitoringUnsubscribes = [])
            }
            function s() {
              return window.performance && performance.now && performance.now()
            }
            function l(e, t) {
              var n = null
              return function () {
                n ||
                  (n = setTimeout(function () {
                    e(), (n = null)
                  }, t))
              }
            }
            function c(e, t, n, o) {
              'function' == typeof e.addEventListener
                ? e.addEventListener(t, n, o || !1)
                : 'function' == typeof e.attachEvent &&
                  e.attachEvent('on' + t, n)
            }
            function u(e, t, n, o) {
              'function' == typeof e.removeEventListener
                ? e.removeEventListener(t, n, o || !1)
                : 'function' == typeof e.detatchEvent &&
                  e.detatchEvent('on' + t, n)
            }
            function d(e, t) {
              var n = Math.max(e.top, t.top),
                o = Math.min(e.bottom, t.bottom),
                r = Math.max(e.left, t.left),
                i = Math.min(e.right, t.right),
                a = i - r,
                s = o - n
              return (
                (a >= 0 &&
                  s >= 0 && {
                    top: n,
                    bottom: o,
                    left: r,
                    right: i,
                    width: a,
                    height: s
                  }) ||
                null
              )
            }
            function p(e) {
              var t
              try {
                t = e.getBoundingClientRect()
              } catch (n) {}
              return t
                ? ((t.width && t.height) ||
                    (t = {
                      top: t.top,
                      right: t.right,
                      bottom: t.bottom,
                      left: t.left,
                      width: t.right - t.left,
                      height: t.bottom - t.top
                    }),
                  t)
                : f()
            }
            function f() {
              return {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
              }
            }
            function h(e) {
              return !e || 'x' in e
                ? e
                : {
                    top: e.top,
                    y: e.top,
                    bottom: e.bottom,
                    left: e.left,
                    x: e.left,
                    right: e.right,
                    width: e.width,
                    height: e.height
                  }
            }
            function g(e, t) {
              var n = t.top - e.top,
                o = t.left - e.left
              return {
                top: n,
                left: o,
                height: t.height,
                width: t.width,
                bottom: n + t.height,
                right: o + t.width
              }
            }
            function m(e, t) {
              for (var n = t; n; ) {
                if (n == e) return !0
                n = v(n)
              }
              return !1
            }
            function v(n) {
              var o = n.parentNode
              return 9 == n.nodeType && n != t
                ? e(n)
                : (o && o.assignedSlot && (o = o.assignedSlot.parentNode),
                  o && 11 == o.nodeType && o.host ? o.host : o)
            }
            function y(e) {
              return e && 9 === e.nodeType
            }
            ;(a.prototype.THROTTLE_TIMEOUT = 100),
              (a.prototype.POLL_INTERVAL = null),
              (a.prototype.USE_MUTATION_OBSERVER = !0),
              (a._setupCrossOriginUpdater = function () {
                return (
                  o ||
                    (o = function (e, t) {
                      ;(r = e && t ? g(e, t) : f()),
                        n.forEach(function (e) {
                          e._checkForIntersections()
                        })
                    }),
                  o
                )
              }),
              (a._resetCrossOriginUpdater = function () {
                ;(o = null), (r = null)
              }),
              (a.prototype.observe = function (e) {
                if (
                  !this._observationTargets.some(function (t) {
                    return t.element == e
                  })
                ) {
                  if (!e || 1 != e.nodeType)
                    throw new Error('target must be an Element')
                  this._registerInstance(),
                    this._observationTargets.push({ element: e, entry: null }),
                    this._monitorIntersections(e.ownerDocument),
                    this._checkForIntersections()
                }
              }),
              (a.prototype.unobserve = function (e) {
                ;(this._observationTargets = this._observationTargets.filter(
                  function (t) {
                    return t.element != e
                  }
                )),
                  this._unmonitorIntersections(e.ownerDocument),
                  0 == this._observationTargets.length &&
                    this._unregisterInstance()
              }),
              (a.prototype.disconnect = function () {
                ;(this._observationTargets = []),
                  this._unmonitorAllIntersections(),
                  this._unregisterInstance()
              }),
              (a.prototype.takeRecords = function () {
                var e = this._queuedEntries.slice()
                return (this._queuedEntries = []), e
              }),
              (a.prototype._initThresholds = function (e) {
                var t = e || [0]
                return (
                  Array.isArray(t) || (t = [t]),
                  t.sort().filter(function (e, t, n) {
                    if ('number' != typeof e || isNaN(e) || e < 0 || e > 1)
                      throw new Error(
                        'threshold must be a number between 0 and 1 inclusively'
                      )
                    return e !== n[t - 1]
                  })
                )
              }),
              (a.prototype._parseRootMargin = function (e) {
                var t = (e || '0px').split(/\s+/).map(function (e) {
                  var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e)
                  if (!t)
                    throw new Error(
                      'rootMargin must be specified in pixels or percent'
                    )
                  return { value: parseFloat(t[1]), unit: t[2] }
                })
                return (
                  (t[1] = t[1] || t[0]),
                  (t[2] = t[2] || t[0]),
                  (t[3] = t[3] || t[1]),
                  t
                )
              }),
              (a.prototype._monitorIntersections = function (n) {
                var o = n.defaultView
                if (o && -1 == this._monitoringDocuments.indexOf(n)) {
                  var r = this._checkForIntersections,
                    i = null,
                    a = null
                  this.POLL_INTERVAL
                    ? (i = o.setInterval(r, this.POLL_INTERVAL))
                    : (c(o, 'resize', r, !0),
                      c(n, 'scroll', r, !0),
                      this.USE_MUTATION_OBSERVER &&
                        'MutationObserver' in o &&
                        (a = new o.MutationObserver(r)).observe(n, {
                          attributes: !0,
                          childList: !0,
                          characterData: !0,
                          subtree: !0
                        })),
                    this._monitoringDocuments.push(n),
                    this._monitoringUnsubscribes.push(function () {
                      var e = n.defaultView
                      e && (i && e.clearInterval(i), u(e, 'resize', r, !0)),
                        u(n, 'scroll', r, !0),
                        a && a.disconnect()
                    })
                  var s =
                    (this.root && (this.root.ownerDocument || this.root)) || t
                  if (n != s) {
                    var l = e(n)
                    l && this._monitorIntersections(l.ownerDocument)
                  }
                }
              }),
              (a.prototype._unmonitorIntersections = function (n) {
                var o = this._monitoringDocuments.indexOf(n)
                if (-1 != o) {
                  var r =
                    (this.root && (this.root.ownerDocument || this.root)) || t
                  if (
                    !this._observationTargets.some(function (t) {
                      var o = t.element.ownerDocument
                      if (o == n) return !0
                      for (; o && o != r; ) {
                        var i = e(o)
                        if ((o = i && i.ownerDocument) == n) return !0
                      }
                      return !1
                    })
                  ) {
                    var i = this._monitoringUnsubscribes[o]
                    if (
                      (this._monitoringDocuments.splice(o, 1),
                      this._monitoringUnsubscribes.splice(o, 1),
                      i(),
                      n != r)
                    ) {
                      var a = e(n)
                      a && this._unmonitorIntersections(a.ownerDocument)
                    }
                  }
                }
              }),
              (a.prototype._unmonitorAllIntersections = function () {
                var e = this._monitoringUnsubscribes.slice(0)
                ;(this._monitoringDocuments.length = 0),
                  (this._monitoringUnsubscribes.length = 0)
                for (var t = 0; t < e.length; t++) e[t]()
              }),
              (a.prototype._checkForIntersections = function () {
                if (this.root || !o || r) {
                  var e = this._rootIsInDom(),
                    t = e ? this._getRootRect() : f()
                  this._observationTargets.forEach(function (n) {
                    var r = n.element,
                      a = p(r),
                      l = this._rootContainsTarget(r),
                      c = n.entry,
                      u =
                        e &&
                        l &&
                        this._computeTargetAndRootIntersection(r, a, t),
                      d = null
                    this._rootContainsTarget(r)
                      ? (o && !this.root) || (d = t)
                      : (d = f())
                    var h = (n.entry = new i({
                      time: s(),
                      target: r,
                      boundingClientRect: a,
                      rootBounds: d,
                      intersectionRect: u
                    }))
                    c
                      ? e && l
                        ? this._hasCrossedThreshold(c, h) &&
                          this._queuedEntries.push(h)
                        : c && c.isIntersecting && this._queuedEntries.push(h)
                      : this._queuedEntries.push(h)
                  }, this),
                    this._queuedEntries.length &&
                      this._callback(this.takeRecords(), this)
                }
              }),
              (a.prototype._computeTargetAndRootIntersection = function (
                e,
                n,
                i
              ) {
                if ('none' != window.getComputedStyle(e).display) {
                  for (var a = n, s = v(e), l = !1; !l && s; ) {
                    var c = null,
                      u = 1 == s.nodeType ? window.getComputedStyle(s) : {}
                    if ('none' == u.display) return null
                    if (s == this.root || 9 == s.nodeType)
                      if (((l = !0), s == this.root || s == t))
                        o && !this.root
                          ? !r || (0 == r.width && 0 == r.height)
                            ? ((s = null), (c = null), (a = null))
                            : (c = r)
                          : (c = i)
                      else {
                        var f = v(s),
                          h = f && p(f),
                          m =
                            f && this._computeTargetAndRootIntersection(f, h, i)
                        h && m
                          ? ((s = f), (c = g(h, m)))
                          : ((s = null), (a = null))
                      }
                    else {
                      var y = s.ownerDocument
                      s != y.body &&
                        s != y.documentElement &&
                        'visible' != u.overflow &&
                        (c = p(s))
                    }
                    if ((c && (a = d(c, a)), !a)) break
                    s = s && v(s)
                  }
                  return a
                }
              }),
              (a.prototype._getRootRect = function () {
                var e
                if (this.root && !y(this.root)) e = p(this.root)
                else {
                  var n = y(this.root) ? this.root : t,
                    o = n.documentElement,
                    r = n.body
                  e = {
                    top: 0,
                    left: 0,
                    right: o.clientWidth || r.clientWidth,
                    width: o.clientWidth || r.clientWidth,
                    bottom: o.clientHeight || r.clientHeight,
                    height: o.clientHeight || r.clientHeight
                  }
                }
                return this._expandRectByRootMargin(e)
              }),
              (a.prototype._expandRectByRootMargin = function (e) {
                var t = this._rootMarginValues.map(function (t, n) {
                    return 'px' == t.unit
                      ? t.value
                      : (t.value * (n % 2 ? e.width : e.height)) / 100
                  }),
                  n = {
                    top: e.top - t[0],
                    right: e.right + t[1],
                    bottom: e.bottom + t[2],
                    left: e.left - t[3]
                  }
                return (
                  (n.width = n.right - n.left), (n.height = n.bottom - n.top), n
                )
              }),
              (a.prototype._hasCrossedThreshold = function (e, t) {
                var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                  o = t.isIntersecting ? t.intersectionRatio || 0 : -1
                if (n !== o)
                  for (var r = 0; r < this.thresholds.length; r++) {
                    var i = this.thresholds[r]
                    if (i == n || i == o || i < n != i < o) return !0
                  }
              }),
              (a.prototype._rootIsInDom = function () {
                return !this.root || m(t, this.root)
              }),
              (a.prototype._rootContainsTarget = function (e) {
                var n =
                  (this.root && (this.root.ownerDocument || this.root)) || t
                return m(n, e) && (!this.root || n == e.ownerDocument)
              }),
              (a.prototype._registerInstance = function () {
                n.indexOf(this) < 0 && n.push(this)
              }),
              (a.prototype._unregisterInstance = function () {
                var e = n.indexOf(this)
                ;-1 != e && n.splice(e, 1)
              }),
              (window.IntersectionObserver = a),
              (window.IntersectionObserverEntry = i)
          })()
          const o = t.relativeToSelector
              ? e.querySelector(t.relativeToSelector)
              : null,
            r = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  n({
                    intersectionRatio: yp(e),
                    intersectionRect: vp(e.intersectionRect),
                    boundingClientRect: vp(e.boundingClientRect),
                    relativeRect: vp(e.rootBounds),
                    time: Date.now(),
                    dataset: ue(e.target),
                    id: e.target.id
                  })
                })
              },
              { root: o, rootMargin: t.rootMargin, threshold: t.thresholds }
            )
          if (t.observeAll) {
            r.USE_MUTATION_OBSERVER = !0
            const n = e.querySelectorAll(t.selector)
            for (let e = 0; e < n.length; e++) r.observe(n[e])
          } else {
            r.USE_MUTATION_OBSERVER = !1
            const n = e.querySelector(t.selector)
            n
              ? r.observe(n)
              : console.warn(
                  `Node ${t.selector} is not found. Intersection observer will not trigger.`
                )
          }
          return r
        })(i, n, o)
      })(
        {
          reqId: this._reqId,
          component: this._component,
          options: this._options,
          callback: t
        },
        this._pageId
      ))
  }
  disconnect() {
    this._reqId &&
      (function ({ reqId: e, component: t }, n) {
        const o = au(t),
          r = o.__io && o.__io[e]
        r && (r.disconnect(), delete o.__io[e])
      })({ reqId: this._reqId, component: this._component }, this._pageId)
  }
}
const jd = Zu(
  0,
  (e, t) => (
    (e = ne(e)) && !lc(e) && ((t = e), (e = null)), new Vd(e || pc(), t)
  )
)
let Dd = 0,
  Fd = {}
function qd(e, t, n, o) {
  const r = { options: o },
    i = o && ('success' in o || 'fail' in o || 'complete' in o)
  if (i) {
    const e = String(Dd++)
    ;(r.callbackId = e), (Fd[e] = o)
  }
  um.invokeViewMethod(
    `editor.${e}`,
    { type: n, data: r },
    t,
    ({ callbackId: e, data: t }) => {
      i &&
        (!(function (e, t) {
          ;(e = e || {}),
            L(t) && (t = { errMsg: t }),
            /:ok$/.test(t.errMsg)
              ? I(e.success) && e.success(t)
              : I(e.fail) && e.fail(t),
            I(e.complete) && e.complete(t)
        })(Fd[e], t),
        delete Fd[e])
    }
  )
}
const zd = {
  canvas: Id,
  map: class {
    constructor(e, t) {
      ;(this.id = e), (this.pageId = t)
    }
    getCenterLocation(e) {
      gd(this.id, this.pageId, 'getCenterLocation', e)
    }
    moveToLocation(e) {
      gd(this.id, this.pageId, 'moveToLocation', e)
    }
    getScale(e) {
      gd(this.id, this.pageId, 'getScale', e)
    }
    getRegion(e) {
      gd(this.id, this.pageId, 'getRegion', e)
    }
    includePoints(e) {
      gd(this.id, this.pageId, 'includePoints', e)
    }
    translateMarker(e) {
      gd(this.id, this.pageId, 'translateMarker', e)
    }
    $getAppMap() {}
    addCustomLayer(e) {
      gd(this.id, this.pageId, 'addCustomLayer', e)
    }
    removeCustomLayer(e) {
      gd(this.id, this.pageId, 'removeCustomLayer', e)
    }
    addGroundOverlay(e) {
      gd(this.id, this.pageId, 'addGroundOverlay', e)
    }
    removeGroundOverlay(e) {
      gd(this.id, this.pageId, 'removeGroundOverlay', e)
    }
    updateGroundOverlay(e) {
      gd(this.id, this.pageId, 'updateGroundOverlay', e)
    }
    initMarkerCluster(e) {
      gd(this.id, this.pageId, 'initMarkerCluster', e)
    }
    addMarkers(e) {
      gd(this.id, this.pageId, 'addMarkers', e)
    }
    removeMarkers(e) {
      gd(this.id, this.pageId, 'removeMarkers', e)
    }
    moveAlong(e) {
      gd(this.id, this.pageId, 'moveAlong', e)
    }
    setLocMarkerIcon(e) {
      gd(this.id, this.pageId, 'setLocMarkerIcon', e)
    }
    openMapApp(e) {
      gd(this.id, this.pageId, 'openMapApp', e)
    }
    on(e, t) {
      gd(this.id, this.pageId, 'on', { name: e, callback: t })
    }
  },
  video: class {
    constructor(e, t) {
      ;(this.id = e), (this.pageId = t)
    }
    play() {
      bu(this.id, this.pageId, 'play')
    }
    pause() {
      bu(this.id, this.pageId, 'pause')
    }
    stop() {
      bu(this.id, this.pageId, 'stop')
    }
    seek(e) {
      bu(this.id, this.pageId, 'seek', { position: e })
    }
    sendDanmu(e) {
      bu(this.id, this.pageId, 'sendDanmu', e)
    }
    playbackRate(e) {
      ~hd.indexOf(e) || (e = 1),
        bu(this.id, this.pageId, 'playbackRate', { rate: e })
    }
    requestFullScreen(e = {}) {
      bu(this.id, this.pageId, 'requestFullScreen', e)
    }
    exitFullScreen() {
      bu(this.id, this.pageId, 'exitFullScreen')
    }
    showStatusBar() {
      bu(this.id, this.pageId, 'showStatusBar')
    }
    hideStatusBar() {
      bu(this.id, this.pageId, 'hideStatusBar')
    }
  },
  editor: class {
    constructor(e, t) {
      ;(this.id = e), (this.pageId = t)
    }
    format(e, t) {
      this._exec('format', { name: e, value: t })
    }
    insertDivider() {
      this._exec('insertDivider')
    }
    insertImage(e) {
      this._exec('insertImage', e)
    }
    insertText(e) {
      this._exec('insertText', e)
    }
    setContents(e) {
      this._exec('setContents', e)
    }
    getContents(e) {
      this._exec('getContents', e)
    }
    clear(e) {
      this._exec('clear', e)
    }
    removeFormat(e) {
      this._exec('removeFormat', e)
    }
    undo(e) {
      this._exec('undo', e)
    }
    redo(e) {
      this._exec('redo', e)
    }
    blur(e) {
      this._exec('blur', e)
    }
    getSelectionText(e) {
      this._exec('getSelectionText', e)
    }
    scrollIntoView(e) {
      this._exec('scrollIntoView', e)
    }
    _exec(e, t) {
      qd(this.id, this.pageId, e, t)
    }
  }
}
function Wd(e) {
  if (e && e.contextInfo) {
    const { id: t, type: n, page: o } = e.contextInfo,
      r = zd[n]
    ;(e.context = new r(t, o)), delete e.contextInfo
  }
}
class Hd {
  constructor(e, t, n, o) {
    ;(this._selectorQuery = e),
      (this._component = t),
      (this._selector = n),
      (this._single = o)
  }
  boundingClientRect(e) {
    return (
      this._selectorQuery._push(
        this._selector,
        this._component,
        this._single,
        { id: !0, dataset: !0, rect: !0, size: !0 },
        e
      ),
      this._selectorQuery
    )
  }
  fields(e, t) {
    return (
      this._selectorQuery._push(
        this._selector,
        this._component,
        this._single,
        e,
        t
      ),
      this._selectorQuery
    )
  }
  scrollOffset(e) {
    return (
      this._selectorQuery._push(
        this._selector,
        this._component,
        this._single,
        { id: !0, dataset: !0, scrollOffset: !0 },
        e
      ),
      this._selectorQuery
    )
  }
  context(e) {
    return (
      this._selectorQuery._push(
        this._selector,
        this._component,
        this._single,
        { context: !0 },
        e
      ),
      this._selectorQuery
    )
  }
  node(e) {
    return this._selectorQuery
  }
}
class Ud {
  constructor(e) {
    ;(this._component = void 0),
      (this._page = e),
      (this._queue = []),
      (this._queueCb = [])
  }
  exec(e) {
    return (
      Tu(this._page, this._queue, (t) => {
        const n = this._queueCb
        t.forEach((e, t) => {
          C(e) ? e.forEach(Wd) : Wd(e)
          const o = n[t]
          I(o) && o.call(this, e)
        }),
          I(e) && e.call(this, t)
      }),
      this._nodesRef
    )
  }
  in(e) {
    return (this._component = ne(e)), this
  }
  select(e) {
    return (this._nodesRef = new Hd(this, this._component, e, !0))
  }
  selectAll(e) {
    return (this._nodesRef = new Hd(this, this._component, e, !1))
  }
  selectViewport() {
    return (this._nodesRef = new Hd(this, null, '', !0))
  }
  _push(e, t, n, o, r) {
    this._queue.push({ component: t, selector: e, single: n, fields: o }),
      this._queueCb.push(r)
  }
}
const Yd = Zu(
    0,
    (e) => ((e = ne(e)) && !lc(e) && (e = null), new Ud(e || pc()))
  ),
  Xd = Ju('onWindowResize', () => {}),
  Gd = Zu(0, () => {
    const e = Yh()
    return e && e.$vm ? e.$vm.$locale : hl().getLocale()
  }),
  Kd = ed('setPageMeta', (e, { resolve: t }) => {
    t(
      (function (e, { pageStyle: t, rootFontSize: n }) {
        t &&
          (
            document.querySelector('uni-page-body') || document.body
          ).setAttribute('style', t)
        n &&
          document.documentElement.style.fontSize !== n &&
          (document.documentElement.style.fontSize = n)
      })(pc(), e)
    )
  }),
  Qd = {
    onUnhandledRejection: [],
    onPageNotFound: [],
    onError: [],
    onShow: [],
    onHide: []
  }
const Jd = {
    formatArgs: { showToast: !0 },
    beforeInvoke() {
      bl()
    },
    beforeSuccess(e, t) {
      if (!t.showToast) return
      const { t: n } = hl(),
        o = n('uni.setClipboardData.success')
      o && om({ title: o, icon: 'success', mask: !1 })
    }
  },
  Zd =
    (Boolean,
    {
      formatArgs: {
        filePath(e, t) {
          t.filePath = lu(e)
        }
      }
    }),
  ep = {
    formatArgs: {
      count(e, t) {
        ;(!e || e <= 0) && (t.count = 9)
      },
      sizeType(e, t) {
        t.sizeType = Cu(e, Su)
      },
      sourceType(e, t) {
        t.sourceType = Cu(e, Eu)
      },
      extension(e, t) {
        if (e instanceof Array && 0 === e.length)
          return 'param extension should not be empty.'
        e || (t.extension = ['*'])
      }
    }
  },
  tp = {
    formatArgs: {
      sourceType(e, t) {
        t.sourceType = Cu(e, Eu)
      },
      compressed: !0,
      maxDuration: 60,
      camera: 'back',
      extension(e, t) {
        if (e instanceof Array && 0 === e.length)
          return 'param extension should not be empty.'
        e || (t.extension = ['*'])
      }
    }
  },
  np =
    (Boolean,
    {
      formatArgs: {
        src(e, t) {
          t.src = lu(e)
        }
      }
    }),
  op = {
    formatArgs: {
      urls(e, t) {
        t.urls = e.map((e) => (L(e) && e ? lu(e) : ''))
      },
      current(e, t) {
        'number' == typeof e
          ? (t.current = e > 0 && e < t.urls.length ? e : 0)
          : L(e) && e && (t.current = lu(e))
      }
    }
  }
const rp = { url: { type: String, required: !0 } },
  ip =
    (cp([
      'slide-in-right',
      'slide-in-left',
      'slide-in-top',
      'slide-in-bottom',
      'fade-in',
      'zoom-out',
      'zoom-fade-out',
      'pop-in',
      'none'
    ]),
    cp([
      'slide-out-right',
      'slide-out-left',
      'slide-out-top',
      'slide-out-bottom',
      'fade-out',
      'zoom-in',
      'zoom-fade-in',
      'pop-out',
      'none'
    ]),
    pp('navigateTo')),
  ap = pp('redirectTo'),
  sp = pp('reLaunch'),
  lp = {
    formatArgs: {
      delta(e, t) {
        ;(e = parseInt(e + '') || 1), (t.delta = Math.min(Th().length - 1, e))
      }
    }
  }
function cp(e) {
  return {
    animationType: {
      type: String,
      validator(t) {
        if (t && -1 === e.indexOf(t))
          return (
            '`' +
            t +
            '` is not supported for `animationType` (supported values are: `' +
            e.join('`|`') +
            '`)'
          )
      }
    },
    animationDuration: { type: Number }
  }
}
let up
function dp() {
  up = ''
}
function pp(e) {
  return { formatArgs: { url: fp(e) }, beforeAll: dp }
}
function fp(e) {
  return function (t, n) {
    if (!t) return 'Missing required args: "url"'
    const o = (t = (function (e) {
        if (0 === e.indexOf('/')) return e
        let t = ''
        const n = Th()
        return n.length && (t = n[n.length - 1].$page.route), bc(t, e)
      })(t)).split('?')[0],
      r = wc(o, !0)
    if (!r) return 'page `' + t + '` is not found'
    if ('navigateTo' === e || 'redirectTo' === e) {
      if (r.meta.isTabBar) return `can not ${e} a tabbar page`
    } else if ('switchTab' === e && !r.meta.isTabBar)
      return 'can not switch to no-tabBar page'
    if (
      (('switchTab' !== e && 'preloadPage' !== e) ||
        !r.meta.isTabBar ||
        'appLaunch' === n.openType ||
        (t = o),
      r.meta.isEntry && (t = t.replace(r.alias, '/')),
      (n.url = (function (e) {
        if (!L(e)) return e
        const t = e.indexOf('?')
        if (-1 === t) return e
        const n = e
          .slice(t + 1)
          .trim()
          .replace(/^(\?|#|&)/, '')
        if (!n) return e
        e = e.slice(0, t)
        const o = []
        return (
          n.split('&').forEach((e) => {
            const t = e.replace(/\+/g, ' ').split('='),
              n = t.shift(),
              r = t.length > 0 ? t.join('=') : ''
            o.push(n + '=' + encodeURIComponent(r))
          }),
          o.length ? e + '?' + o.join('&') : e
        )
      })(t)),
      'unPreloadPage' !== e)
    )
      if ('preloadPage' !== e) {
        if (up === t && 'appLaunch' !== n.openType) return `${up} locked`
        __uniConfig.ready && (up = t)
      } else if (r.meta.isTabBar) {
        const e = Th(),
          t = r.path.slice(1)
        if (e.find((e) => e.route === t))
          return 'tabBar page `' + t + '` already exists'
      }
  }
}
const hp = { formatArgs: { duration: 300 } },
  gp = ['success', 'loading', 'none', 'error'],
  mp =
    (Boolean,
    {
      formatArgs: {
        title: '',
        icon(e, t) {
          var n, o
          t.icon = ((o = gp), (n = e) && -1 !== o.indexOf(n) ? n : o[0])
        },
        image(e, t) {
          t.image = e ? lu(e) : ''
        },
        duration: 1500,
        mask: !1
      }
    })
function vp(e) {
  const { bottom: t, height: n, left: o, right: r, top: i, width: a } = e || {}
  return { bottom: t, height: n, left: o, right: r, top: i, width: a }
}
function yp(e) {
  const {
    intersectionRatio: t,
    boundingClientRect: { height: n, width: o },
    intersectionRect: { height: r, width: i }
  } = e
  return 0 !== t ? t : r === n ? i / o : r / n
}
const _p = '',
  bp = {}
function wp(e, t) {
  const n = bp[e]
  return n
    ? Promise.resolve(n)
    : /^data:[a-z-]+\/[a-z-]+;base64,/.test(e)
      ? Promise.resolve(
          (function (e) {
            const t = e.split(','),
              n = t[0].match(/:(.*?);/),
              o = n ? n[1] : '',
              r = atob(t[1])
            let i = r.length
            const a = new Uint8Array(i)
            for (; i--; ) a[i] = r.charCodeAt(i)
            return (function (e, t) {
              let n
              if (e instanceof File) n = e
              else {
                t = t || e.type || ''
                const r = `${Date.now()}${(function (e) {
                  const t = e.split('/')[1]
                  return t ? `.${t}` : ''
                })(t)}`
                try {
                  n = new File([e], r, { type: t })
                } catch (o) {
                  ;(n = e = e instanceof Blob ? e : new Blob([e], { type: t })),
                    (n.name = n.name || r)
                }
              }
              return n
            })(a, o)
          })(e)
        )
      : t
        ? Promise.reject(new Error('not find'))
        : new Promise((t, n) => {
            const o = new XMLHttpRequest()
            o.open('GET', e, !0),
              (o.responseType = 'blob'),
              (o.onload = function () {
                t(this.response)
              }),
              (o.onerror = n),
              o.send()
          })
}
function xp(e) {
  for (const n in bp)
    if (E(bp, n)) {
      if (bp[n] === e) return n
    }
  var t = (window.URL || window.webkitURL).createObjectURL(e)
  return (bp[t] = e), t
}
function Tp(e) {
  ;(window.URL || window.webkitURL).revokeObjectURL(e), delete bp[e]
}
const Sp = Wc(),
  Ep = Wc()
const Cp = Xc({
  name: 'ResizeSensor',
  props: { initial: { type: Boolean, default: !1 } },
  emits: ['resize'],
  setup(e, { emit: t }) {
    const n = Jt(null),
      o = (function (e) {
        return () => {
          const { firstElementChild: t, lastElementChild: n } = e.value
          ;(t.scrollLeft = 1e5),
            (t.scrollTop = 1e5),
            (n.scrollLeft = 1e5),
            (n.scrollTop = 1e5)
        }
      })(n),
      r = (function (e, t, n) {
        const o = Vt({ width: -1, height: -1 })
        return (
          Yn(
            () => x({}, o),
            (e) => t('resize', e)
          ),
          () => {
            const t = e.value
            ;(o.width = t.offsetWidth), (o.height = t.offsetHeight), n()
          }
        )
      })(n, t, o)
    return (
      (function (e, t, n, o) {
        vo(o),
          Oo(() => {
            t.initial && xn(n)
            const r = e.value
            r.offsetParent !== r.parentElement &&
              (r.parentElement.style.position = 'relative'),
              'AnimationEvent' in window || o()
          })
      })(n, e, r, o),
      () =>
        Gr(
          'uni-resize-sensor',
          { ref: n, onAnimationstartOnce: r },
          [
            Gr('div', { onScroll: r }, [Gr('div', null, null)], 40, [
              'onScroll'
            ]),
            Gr('div', { onScroll: r }, [Gr('div', null, null)], 40, [
              'onScroll'
            ])
          ],
          40,
          ['onAnimationstartOnce']
        )
    )
  }
})
const kp = (function () {
  if (navigator.userAgent.includes('jsdom')) return 1
  const e = document.createElement('canvas')
  e.height = e.width = 0
  const t = e.getContext('2d'),
    n =
      t.backingStorePixelRatio ||
      t.webkitBackingStorePixelRatio ||
      t.mozBackingStorePixelRatio ||
      t.msBackingStorePixelRatio ||
      t.oBackingStorePixelRatio ||
      t.backingStorePixelRatio ||
      1
  return (window.devicePixelRatio || 1) / n
})()
function $p(e, t = !0) {
  ;(e.width = e.offsetWidth * (t ? kp : 1)),
    (e.height = e.offsetHeight * (t ? kp : 1)),
    (e.getContext('2d').__hidpi__ = t)
}
let Op = !1
function Ip() {
  if (Op) return
  Op = !0
  const e = {
      fillRect: 'all',
      clearRect: 'all',
      strokeRect: 'all',
      moveTo: 'all',
      lineTo: 'all',
      arc: [0, 1, 2],
      arcTo: 'all',
      bezierCurveTo: 'all',
      isPointinPath: 'all',
      isPointinStroke: 'all',
      quadraticCurveTo: 'all',
      rect: 'all',
      translate: 'all',
      createRadialGradient: 'all',
      createLinearGradient: 'all',
      transform: [4, 5],
      setTransform: [4, 5]
    },
    t = CanvasRenderingContext2D.prototype
  var n
  ;(t.drawImageByCanvas =
    ((n = t.drawImage),
    function (e, t, o, r, i, a, s, l, c, u) {
      if (!this.__hidpi__) return n.apply(this, arguments)
      ;(t *= kp),
        (o *= kp),
        (r *= kp),
        (i *= kp),
        (a *= kp),
        (s *= kp),
        (l = u ? l * kp : l),
        (c = u ? c * kp : c),
        n.call(this, e, t, o, r, i, a, s, l, c)
    })),
    1 !== kp &&
      (!(function (e, t) {
        for (const n in e) E(e, n) && t(e[n], n)
      })(e, function (e, n) {
        t[n] = (function (t) {
          return function () {
            if (!this.__hidpi__) return t.apply(this, arguments)
            let n = Array.prototype.slice.call(arguments)
            if ('all' === e)
              n = n.map(function (e) {
                return e * kp
              })
            else if (Array.isArray(e))
              for (let t = 0; t < e.length; t++) n[e[t]] *= kp
            return t.apply(this, n)
          }
        })(t[n])
      }),
      (t.stroke = (function (e) {
        return function () {
          if (!this.__hidpi__) return e.apply(this, arguments)
          ;(this.lineWidth *= kp),
            e.apply(this, arguments),
            (this.lineWidth /= kp)
        }
      })(t.stroke)),
      (t.fillText = (function (e) {
        return function () {
          if (!this.__hidpi__) return e.apply(this, arguments)
          const t = Array.prototype.slice.call(arguments)
          ;(t[1] *= kp),
            (t[2] *= kp),
            t[3] && 'number' == typeof t[3] && (t[3] *= kp)
          var n = this.font
          ;(this.font = n.replace(
            /(\d+\.?\d*)(px|em|rem|pt)/g,
            function (e, t, n) {
              return t * kp + n
            }
          )),
            e.apply(this, t),
            (this.font = n)
        }
      })(t.fillText)),
      (t.strokeText = (function (e) {
        return function () {
          if (!this.__hidpi__) return e.apply(this, arguments)
          var t = Array.prototype.slice.call(arguments)
          ;(t[1] *= kp),
            (t[2] *= kp),
            t[3] && 'number' == typeof t[3] && (t[3] *= kp)
          var n = this.font
          ;(this.font = n.replace(
            /(\d+\.?\d*)(px|em|rem|pt)/g,
            function (e, t, n) {
              return t * kp + n
            }
          )),
            e.apply(this, t),
            (this.font = n)
        }
      })(t.strokeText)),
      (t.drawImage = (function (e) {
        return function () {
          if (!this.__hidpi__) return e.apply(this, arguments)
          this.scale(kp, kp),
            e.apply(this, arguments),
            this.scale(1 / kp, 1 / kp)
        }
      })(t.drawImage)))
}
const Lp = se(() => Ip())
function Pp(e) {
  return e ? lu(e) : e
}
function Ap(e) {
  return ((e = e.slice(0))[3] = e[3] / 255), 'rgba(' + e.join(',') + ')'
}
function Rp(e, t) {
  Array.from(t).forEach((t) => {
    ;(t.x = t.clientX - e.left), (t.y = t.clientY - e.top)
  })
}
let Mp
function Bp(e = 0, t = 0) {
  return (
    Mp || (Mp = document.createElement('canvas')),
    (Mp.width = e),
    (Mp.height = t),
    Mp
  )
}
const Np = Xc({
  inheritAttrs: !1,
  name: 'Canvas',
  compatConfig: { MODE: 3 },
  props: {
    canvasId: { type: String, default: '' },
    disableScroll: { type: [Boolean, String], default: !1 },
    hidpi: { type: Boolean, default: !0 }
  },
  computed: {
    id() {
      return this.canvasId
    }
  },
  setup(e, { emit: t, slots: n }) {
    Lp()
    const o = Jt(null),
      r = Jt(null),
      i = Jt(!1),
      a = (function (e) {
        return (t, n) => {
          e(t, $c(n))
        }
      })(t),
      {
        $attrs: s,
        $excludeAttrs: l,
        $listeners: c
      } = pf({ excludeListeners: !0 }),
      { _listeners: u } = (function (e, t, n) {
        const o = mi(() => {
          let o = ['onTouchstart', 'onTouchmove', 'onTouchend'],
            r = t.value,
            i = x(
              {},
              (() => {
                let e = {}
                for (const t in r)
                  if (E(r, t)) {
                    const n = r[t]
                    e[t] = n
                  }
                return e
              })()
            )
          return (
            o.forEach((t) => {
              let o = []
              i[t] &&
                o.push(
                  Zc((e) => {
                    const o = e.currentTarget.getBoundingClientRect()
                    Rp(o, e.touches),
                      Rp(o, e.changedTouches),
                      n(t.replace('on', '').toLocaleLowerCase(), e)
                  })
                ),
                e.disableScroll && 'onTouchmove' === t && o.push(Gl),
                (i[t] = o)
            }),
            i
          )
        })
        return { _listeners: o }
      })(e, c, a),
      { _handleSubscribe: d, _resize: p } = (function (e, t, n) {
        let o = [],
          r = {}
        const i = mi(() => (e.hidpi ? kp : 1))
        function a(n) {
          let o = t.value
          if (
            !n ||
            o.width !== Math.floor(n.width * i.value) ||
            o.height !== Math.floor(n.height * i.value)
          )
            if (o.width > 0 && o.height > 0) {
              let t = o.getContext('2d'),
                n = t.getImageData(0, 0, o.width, o.height)
              $p(o, e.hidpi), t.putImageData(n, 0, 0)
            } else $p(o, e.hidpi)
        }
        function s({ actions: e, reserve: i }, a) {
          if (!e) return
          if (n.value) return void o.push([e, i])
          let s = t.value,
            u = s.getContext('2d')
          i ||
            ((u.fillStyle = '#000000'),
            (u.strokeStyle = '#000000'),
            (u.shadowColor = '#000000'),
            (u.shadowBlur = 0),
            (u.shadowOffsetX = 0),
            (u.shadowOffsetY = 0),
            u.setTransform(1, 0, 0, 1, 0, 0),
            u.clearRect(0, 0, s.width, s.height)),
            l(e)
          for (let t = 0; t < e.length; t++) {
            const n = e[t]
            let o = n.method
            const i = n.data,
              s = i[0]
            if (/^set/.test(o) && 'setTransform' !== o) {
              const n = o[3].toLowerCase() + o.slice(4)
              let r
              if ('fillStyle' === n || 'strokeStyle' === n) {
                if ('normal' === s) r = Ap(i[1])
                else if ('linear' === s) {
                  const e = u.createLinearGradient(...i[1])
                  i[2].forEach(function (t) {
                    const n = t[0],
                      o = Ap(t[1])
                    e.addColorStop(n, o)
                  }),
                    (r = e)
                } else if ('radial' === s) {
                  let e = i[1]
                  const t = e[0],
                    n = e[1],
                    o = e[2],
                    a = u.createRadialGradient(t, n, 0, t, n, o)
                  i[2].forEach(function (e) {
                    const t = e[0],
                      n = Ap(e[1])
                    a.addColorStop(t, n)
                  }),
                    (r = a)
                } else if ('pattern' === s) {
                  if (
                    !c(i[1], e.slice(t + 1), a, function (e) {
                      e && (u[n] = u.createPattern(e, i[2]))
                    })
                  )
                    break
                  continue
                }
                u[n] = r
              } else if ('globalAlpha' === n) u[n] = Number(s) / 255
              else if ('shadow' === n) {
                let e = [
                  'shadowOffsetX',
                  'shadowOffsetY',
                  'shadowBlur',
                  'shadowColor'
                ]
                i.forEach(function (t, n) {
                  u[e[n]] = 'shadowColor' === e[n] ? Ap(t) : t
                })
              } else if ('fontSize' === n) {
                const e = u.__font__ || u.font
                u.__font__ = u.font = e.replace(/\d+\.?\d*px/, s + 'px')
              } else
                'lineDash' === n
                  ? (u.setLineDash(s), (u.lineDashOffset = i[1] || 0))
                  : 'textBaseline' === n
                    ? ('normal' === s && (i[0] = 'alphabetic'), (u[n] = s))
                    : 'font' === n
                      ? (u.__font__ = u.font = s)
                      : (u[n] = s)
            } else if ('fillPath' === o || 'strokePath' === o)
              (o = o.replace(/Path/, '')),
                u.beginPath(),
                i.forEach(function (e) {
                  u[e.method].apply(u, e.data)
                }),
                u[o]()
            else if ('fillText' === o) u.fillText.apply(u, i)
            else if ('drawImage' === o) {
              if (
                'break' ===
                (function () {
                  let n = [...i],
                    o = n[0],
                    s = n.slice(1)
                  if (
                    ((r = r || {}),
                    !c(o, e.slice(t + 1), a, function (e) {
                      e &&
                        u.drawImage.apply(
                          u,
                          [e].concat([...s.slice(4, 8)], [...s.slice(0, 4)])
                        )
                    }))
                  )
                    return 'break'
                })()
              )
                break
            } else
              'clip' === o
                ? (i.forEach(function (e) {
                    u[e.method].apply(u, e.data)
                  }),
                  u.clip())
                : u[o].apply(u, i)
          }
          n.value || a({ errMsg: 'drawCanvas:ok' })
        }
        function l(e) {
          e.forEach(function (e) {
            let t = e.method,
              n = e.data,
              o = ''
            function i() {
              const e = (r[o] = new Image())
              ;(e.onload = function () {
                e.ready = !0
              }),
                (function (e) {
                  const t = document.createElement('a')
                  return (
                    (t.href = e),
                    t.origin === location.origin
                      ? Promise.resolve(e)
                      : wp(e).then(xp)
                  )
                })(o)
                  .then((t) => {
                    e.src = t
                  })
                  .catch(() => {
                    e.src = o
                  })
            }
            'drawImage' === t
              ? ((o = n[0]), (o = Pp(o)), (n[0] = o))
              : 'setFillStyle' === t &&
                'pattern' === n[0] &&
                ((o = n[1]), (o = Pp(o)), (n[1] = o)),
              o && !r[o] && i()
          })
        }
        function c(e, t, i, a) {
          let l = r[e]
          return l.ready
            ? (a(l), !0)
            : (o.unshift([t, !0]),
              (n.value = !0),
              (l.onload = function () {
                ;(l.ready = !0), a(l), (n.value = !1)
                let e = o.slice(0)
                o = []
                for (let t = e.shift(); t; )
                  s({ actions: t[0], reserve: t[1] }, i), (t = e.shift())
              }),
              !1)
        }
        function u(
          {
            x: e = 0,
            y: n = 0,
            width: o,
            height: r,
            destWidth: a,
            destHeight: s,
            hidpi: l = !0,
            dataType: c,
            quality: u = 1,
            type: d = 'png'
          },
          p
        ) {
          const f = t.value
          let h
          const g = f.offsetWidth - e
          o = o ? Math.min(o, g) : g
          const m = f.offsetHeight - n
          ;(r = r ? Math.min(r, m) : m),
            l
              ? ((a = o), (s = r))
              : a || s
                ? a
                  ? s || (s = Math.round((r / o) * a))
                  : (a = Math.round((o / r) * s))
                : ((a = Math.round(o * i.value)), (s = Math.round(r * i.value)))
          const v = Bp(a, s),
            y = v.getContext('2d')
          let _
          ;('jpeg' !== d && 'jpg' !== d) ||
            ((d = 'jpeg'), (y.fillStyle = '#fff'), y.fillRect(0, 0, a, s)),
            (y.__hidpi__ = !0),
            y.drawImageByCanvas(f, e, n, o, r, 0, 0, a, s, !1)
          try {
            let e
            if ('base64' === c) h = v.toDataURL(`image/${d}`, u)
            else {
              const e = y.getImageData(0, 0, a, s)
              h = Array.prototype.slice.call(e.data)
            }
            _ = { data: h, compressed: e, width: a, height: s }
          } catch (b) {
            _ = { errMsg: `canvasGetImageData:fail ${b}` }
          }
          if (((v.height = v.width = 0), (y.__hidpi__ = !1), !p)) return _
          p(_)
        }
        function d(
          { data: e, x: n, y: o, width: r, height: i, compressed: a },
          s
        ) {
          try {
            0, i || (i = Math.round(e.length / 4 / r))
            const a = Bp(r, i)
            a
              .getContext('2d')
              .putImageData(
                new ImageData(new Uint8ClampedArray(e), r, i),
                0,
                0
              ),
              t.value.getContext('2d').drawImage(a, n, o, r, i),
              (a.height = a.width = 0)
          } catch (l) {
            return void s({ errMsg: 'canvasPutImageData:fail' })
          }
          s({ errMsg: 'canvasPutImageData:ok' })
        }
        function p(
          {
            x: e = 0,
            y: t = 0,
            width: n,
            height: o,
            destWidth: r,
            destHeight: i,
            fileType: a,
            quality: s,
            dirname: l
          },
          c
        ) {
          const d = u({
            x: e,
            y: t,
            width: n,
            height: o,
            destWidth: r,
            destHeight: i,
            hidpi: !1,
            dataType: 'base64',
            type: a,
            quality: s
          })
          var p
          d.data && d.data.length
            ? ((p = d.data),
              ((e, t) => {
                let n = 'toTempFilePath:' + (e ? 'fail' : 'ok')
                e && (n += ` ${e.message}`), c({ errMsg: n, tempFilePath: t })
              })(null, p))
            : c({
                errMsg: d.errMsg.replace('canvasPutImageData', 'toTempFilePath')
              })
        }
        const f = {
          actionsChanged: s,
          getImageData: u,
          putImageData: d,
          toTempFilePath: p
        }
        function h(e, t, n) {
          let o = f[e]
          0 !== e.indexOf('_') && I(o) && o(t, n)
        }
        return x(f, { _resize: a, _handleSubscribe: h })
      })(e, o, i)
    return (
      (function (e, t, n, o) {
        const r = si().proxy
        Oo(() => {
          Zf(t || Jf(r), e, o),
            (!n && t) ||
              Yn(
                () => r.id,
                (t, n) => {
                  Zf(Jf(r, t), e, o), eh(n && Jf(r, n))
                }
              )
        }),
          Po(() => {
            eh(t || Jf(r), o)
          })
      })(
        d,
        (function (e) {
          const t = sc(),
            n = si().proxy,
            o = n.$options.name.toLowerCase(),
            r = e || n.id || 'context' + th++
          return (
            Oo(() => {
              n.$el.__uniContextInfo = { id: r, type: o, page: t }
            }),
            `${o}.${r}`
          )
        })(e.canvasId),
        !0
      ),
      Oo(() => {
        p()
      }),
      () => {
        const { canvasId: t, disableScroll: i } = e
        return Gr(
          'uni-canvas',
          ni(
            { 'canvas-id': t, 'disable-scroll': i },
            s.value,
            l.value,
            u.value
          ),
          [
            Gr(
              'canvas',
              {
                ref: o,
                class: 'uni-canvas-canvas',
                width: '300',
                height: '150'
              },
              null,
              512
            ),
            Gr(
              'div',
              {
                style:
                  'position: absolute;top: 0;left: 0;width: 100%;height: 100%;overflow: hidden;'
              },
              [n.default && n.default()]
            ),
            Gr(Cp, { ref: r, onResize: p }, null, 8, ['onResize'])
          ],
          16,
          ['canvas-id', 'disable-scroll']
        )
      }
    )
  }
})
function Vp() {}
const jp = {
  cursorSpacing: { type: [Number, String], default: 0 },
  showConfirmBar: { type: [Boolean, String], default: 'auto' },
  adjustPosition: { type: [Boolean, String], default: !0 },
  autoBlur: { type: [Boolean, String], default: !1 }
}
function Dp(e, t, n) {
  function o(e) {
    const t = mi(() => 0 === String(navigator.vendor).indexOf('Apple'))
    e.addEventListener('focus', () => {
      clearTimeout(undefined), document.addEventListener('click', Vp, !1)
    })
    e.addEventListener('blur', () => {
      t.value && e.blur(),
        document.removeEventListener('click', Vp, !1),
        t.value &&
          document.documentElement.scrollTo(
            document.documentElement.scrollLeft,
            document.documentElement.scrollTop
          )
    })
  }
  Yn(
    () => t.value,
    (e) => e && o(e)
  )
}
const Fp = {
    src: { type: String, default: '' },
    mode: { type: String, default: 'scaleToFill' },
    lazyLoad: { type: [Boolean, String], default: !1 },
    draggable: { type: Boolean, default: !1 }
  },
  qp = {
    widthFix: ['offsetWidth', 'height', (e, t) => e / t],
    heightFix: ['offsetHeight', 'width', (e, t) => e * t]
  },
  zp = {
    aspectFit: ['center center', 'contain'],
    aspectFill: ['center center', 'cover'],
    widthFix: [, '100% 100%'],
    heightFix: [, '100% 100%'],
    top: ['center top'],
    bottom: ['center bottom'],
    center: ['center center'],
    left: ['left center'],
    right: ['right center'],
    'top left': ['left top'],
    'top right': ['right top'],
    'bottom left': ['left bottom'],
    'bottom right': ['right bottom']
  },
  Wp = Xc({
    name: 'Image',
    props: Fp,
    setup(e, { emit: t }) {
      const n = Jt(null),
        o = (function (e, t) {
          const n = Jt(''),
            o = mi(() => {
              let e = 'auto',
                o = ''
              const r = zp[t.mode]
              return (
                r
                  ? (r[0] && (o = r[0]), r[1] && (e = r[1]))
                  : ((o = '0% 0%'), (e = '100% 100%')),
                `background-image:${n.value ? 'url("' + n.value + '")' : 'none'};background-position:${o};background-size:${e};`
              )
            }),
            r = Vt({
              rootEl: e,
              src: mi(() => (t.src ? lu(t.src) : '')),
              origWidth: 0,
              origHeight: 0,
              origStyle: { width: '', height: '' },
              modeStyle: o,
              imgSrc: n
            })
          return (
            Oo(() => {
              const t = e.value.style
              ;(r.origWidth = Number(t.width) || 0),
                (r.origHeight = Number(t.height) || 0)
            }),
            r
          )
        })(n, e),
        r = eu(n, t),
        { fixSize: i } = (function (e, t, n) {
          const o = () => {
              const { mode: o } = t,
                r = qp[o]
              if (!r) return
              const { origWidth: i, origHeight: a } = n,
                s = i && a ? i / a : 0
              if (!s) return
              const l = e.value,
                c = l[r[0]]
              c &&
                (l.style[r[1]] =
                  (function (e) {
                    Hp && e > 10 && (e = 2 * Math.round(e / 2))
                    return e
                  })(r[2](c, s)) + 'px')
            },
            r = () => {
              const { style: t } = e.value,
                {
                  origStyle: { width: o, height: r }
                } = n
              ;(t.width = o), (t.height = r)
            }
          return (
            Yn(
              () => t.mode,
              (e, t) => {
                qp[t] && r(), qp[e] && o()
              }
            ),
            { fixSize: o, resetSize: r }
          )
        })(n, e, o)
      return (
        (function (e, t, n, o, r) {
          let i, a
          const s = (t = 0, n = 0, o = '') => {
              ;(e.origWidth = t), (e.origHeight = n), (e.imgSrc = o)
            },
            l = (l) => {
              if (!l) return c(), void s()
              ;(i = i || new Image()),
                (i.onload = (e) => {
                  const { width: u, height: d } = i
                  s(u, d, l),
                    o(),
                    (i.draggable = t.draggable),
                    a && a.remove(),
                    (a = i),
                    n.value.appendChild(i),
                    c(),
                    r('load', e, { width: u, height: d })
                }),
                (i.onerror = (t) => {
                  s(),
                    c(),
                    r('error', t, { errMsg: `GET ${e.src} 404 (Not Found)` })
                }),
                (i.src = l)
            },
            c = () => {
              i && ((i.onload = null), (i.onerror = null), (i = null))
            }
          Yn(
            () => e.src,
            (e) => l(e)
          ),
            Yn(
              () => e.imgSrc,
              (e) => {
                !e && a && (a.remove(), (a = null))
              }
            ),
            Oo(() => l(e.src)),
            Po(() => c())
        })(o, e, n, i, r),
        () =>
          Gr(
            'uni-image',
            { ref: n },
            [
              Gr('div', { style: o.modeStyle }, null, 4),
              qp[e.mode]
                ? Gr(Cp, { onResize: i }, null, 8, ['onResize'])
                : Gr('span', null, null)
            ],
            512
          )
      )
    }
  })
const Hp = 'Google Inc.' === navigator.vendor
const Up = pe(!0),
  Yp = []
let Xp,
  Gp = 0
const Kp = (e) => Yp.forEach((t) => (t.userAction = e))
function Qp(e = { userAction: !1 }) {
  if (!Xp) {
    ;['touchstart', 'touchmove', 'touchend', 'mousedown', 'mouseup'].forEach(
      (e) => {
        document.addEventListener(
          e,
          function () {
            !Gp && Kp(!0),
              Gp++,
              setTimeout(() => {
                !--Gp && Kp(!1)
              }, 0)
          },
          Up
        )
      }
    ),
      (Xp = !0)
  }
  Yp.push(e)
}
const Jp = () => !!Gp
function Zp() {
  const e = Vt({ userAction: !1 })
  return (
    Oo(() => {
      Qp(e)
    }),
    Po(() => {
      !(function (e) {
        const t = Yp.indexOf(e)
        t >= 0 && Yp.splice(t, 1)
      })(e)
    }),
    { state: e }
  )
}
function ef(e, t) {
  const n = document.activeElement
  if (!n) return t({})
  const o = {}
  ;['input', 'textarea'].includes(n.tagName.toLowerCase()) &&
    ((o.start = n.selectionStart), (o.end = n.selectionEnd)),
    t(o)
}
function tf(e, t) {
  return (
    'number' === t && isNaN(Number(e)) && (e = ''), null === e ? '' : String(e)
  )
}
const nf = [
    'none',
    'text',
    'decimal',
    'numeric',
    'tel',
    'search',
    'email',
    'url'
  ],
  of = x(
    {},
    {
      name: { type: String, default: '' },
      modelValue: { type: [String, Number], default: '' },
      value: { type: [String, Number], default: '' },
      disabled: { type: [Boolean, String], default: !1 },
      autoFocus: { type: [Boolean, String], default: !1 },
      focus: { type: [Boolean, String], default: !1 },
      cursor: { type: [Number, String], default: -1 },
      selectionStart: { type: [Number, String], default: -1 },
      selectionEnd: { type: [Number, String], default: -1 },
      type: { type: String, default: 'text' },
      password: { type: [Boolean, String], default: !1 },
      placeholder: { type: String, default: '' },
      placeholderStyle: { type: String, default: '' },
      placeholderClass: { type: String, default: '' },
      maxlength: { type: [Number, String], default: 140 },
      confirmType: { type: String, default: 'done' },
      confirmHold: { type: Boolean, default: !1 },
      ignoreCompositionEvent: { type: Boolean, default: !0 },
      step: { type: String, default: '0.000000000000000001' },
      inputmode: {
        type: String,
        default: void 0,
        validator: (e) => !!~nf.indexOf(e)
      }
    },
    jp
  ),
  rf = [
    'input',
    'focus',
    'blur',
    'update:value',
    'update:modelValue',
    'update:focus',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'keyboardheightchange'
  ]
function af(e, t, n, o) {
  const r = ye(
    (n) => {
      t.value = tf(n, e.type)
    },
    100,
    { setTimeout: setTimeout, clearTimeout: clearTimeout }
  )
  Yn(() => e.modelValue, r), Yn(() => e.value, r)
  const i = (function (e, t) {
    let n,
      o,
      r = 0
    const i = function (...i) {
      const a = Date.now()
      clearTimeout(n),
        (o = () => {
          ;(o = null), (r = a), e.apply(this, i)
        }),
        a - r < t ? (n = setTimeout(o, t - (a - r))) : o()
    }
    return (
      (i.cancel = function () {
        clearTimeout(n), (o = null)
      }),
      (i.flush = function () {
        clearTimeout(n), o && o()
      }),
      i
    )
  })((e, t) => {
    r.cancel(),
      n('update:modelValue', t.value),
      n('update:value', t.value),
      o('input', e, t)
  }, 100)
  return (
    $o(() => {
      r.cancel(), i.cancel()
    }),
    {
      trigger: o,
      triggerInput: (e, t, n) => {
        r.cancel(), i(e, t), n && i.flush()
      }
    }
  )
}
function sf(e, t) {
  Zp()
  const n = mi(() => e.autoFocus || e.focus)
  function o() {
    if (!n.value) return
    const e = t.value
    e ? e.focus() : setTimeout(o, 100)
  }
  Yn(
    () => e.focus,
    (e) => {
      e
        ? o()
        : (function () {
            const e = t.value
            e && e.blur()
          })()
    }
  ),
    Oo(() => {
      n.value && xn(o)
    })
}
function lf(e, t, n, o) {
  El(dc(), 'getSelectedTextRange', ef)
  const {
      fieldRef: r,
      state: i,
      trigger: a
    } = (function (e, t, n) {
      const o = Jt(null),
        r = eu(t, n),
        i = mi(() => {
          const t = Number(e.selectionStart)
          return isNaN(t) ? -1 : t
        }),
        a = mi(() => {
          const t = Number(e.selectionEnd)
          return isNaN(t) ? -1 : t
        }),
        s = mi(() => {
          const t = Number(e.cursor)
          return isNaN(t) ? -1 : t
        }),
        l = mi(() => {
          var t = Number(e.maxlength)
          return isNaN(t) ? 140 : t
        }),
        c = tf(e.modelValue, e.type) || tf(e.value, e.type),
        u = Vt({
          value: c,
          valueOrigin: c,
          maxlength: l,
          focus: e.focus,
          composing: !1,
          selectionStart: i,
          selectionEnd: a,
          cursor: s
        })
      return (
        Yn(
          () => u.focus,
          (e) => n('update:focus', e)
        ),
        Yn(
          () => u.maxlength,
          (e) => (u.value = u.value.slice(0, e))
        ),
        { fieldRef: o, state: u, trigger: r }
      )
    })(e, t, n),
    { triggerInput: s } = af(e, i, n, a)
  sf(e, r), Dp(0, r)
  const { state: l } = (function () {
    const e = Vt({ attrs: {} })
    return (
      Oo(() => {
        let t = si()
        for (; t; ) {
          const n = t.type.__scopeId
          n && (e.attrs[n] = ''),
            (t = t.proxy && 'page' === t.proxy.$mpType ? null : t.parent)
        }
      }),
      { state: e }
    )
  })()
  !(function (e, t) {
    const n = Wn(tu, !1)
    if (!n) return
    const o = si(),
      r = {
        submit() {
          const n = o.proxy
          return [n[e], L(t) ? n[t] : t.value]
        },
        reset() {
          L(t) ? (o.proxy[t] = '') : (t.value = '')
        }
      }
    n.addField(r),
      Po(() => {
        n.removeField(r)
      })
  })('name', i),
    (function (e, t, n, o, r, i) {
      function a() {
        const n = e.value
        n &&
          t.focus &&
          t.selectionStart > -1 &&
          t.selectionEnd > -1 &&
          'number' !== n.type &&
          ((n.selectionStart = t.selectionStart),
          (n.selectionEnd = t.selectionEnd))
      }
      function s() {
        const n = e.value
        n &&
          t.focus &&
          t.selectionStart < 0 &&
          t.selectionEnd < 0 &&
          t.cursor > -1 &&
          'number' !== n.type &&
          (n.selectionEnd = n.selectionStart = t.cursor)
      }
      function l(e) {
        return 'number' === e.type ? null : e.selectionEnd
      }
      Yn([() => t.selectionStart, () => t.selectionEnd], a),
        Yn(() => t.cursor, s),
        Yn(
          () => e.value,
          function () {
            const c = e.value
            if (!c) return
            const u = function (e, o) {
              e.stopPropagation(),
                (I(i) && !1 === i(e, t)) ||
                  ((t.value = c.value),
                  (t.composing && n.ignoreCompositionEvent) ||
                    r(e, { value: c.value, cursor: l(c) }, o))
            }
            function d(e) {
              n.ignoreCompositionEvent || o(e.type, e, { value: e.data })
            }
            c.addEventListener('change', (e) => e.stopPropagation()),
              c.addEventListener('focus', function (e) {
                ;(t.focus = !0), o('focus', e, { value: t.value }), a(), s()
              }),
              c.addEventListener('blur', function (e) {
                t.composing && ((t.composing = !1), u(e, !0)),
                  (t.focus = !1),
                  o('blur', e, { value: t.value, cursor: l(e.target) })
              }),
              c.addEventListener('input', u),
              c.addEventListener('compositionstart', (e) => {
                e.stopPropagation(), (t.composing = !0), d(e)
              }),
              c.addEventListener('compositionend', (e) => {
                e.stopPropagation(),
                  t.composing && ((t.composing = !1), u(e)),
                  d(e)
              }),
              c.addEventListener('compositionupdate', d)
          }
        )
    })(r, i, e, a, s, o)
  return {
    fieldRef: r,
    state: i,
    scopedAttrsState: l,
    fixDisabledColor:
      0 === String(navigator.vendor).indexOf('Apple') &&
      CSS.supports('image-orientation:from-image'),
    trigger: a
  }
}
const cf = Xc({
  name: 'Input',
  props: x({}, of, {
    placeholderClass: { type: String, default: 'input-placeholder' },
    textContentType: { type: String, default: '' }
  }),
  emits: ['confirm', ...rf],
  setup(e, { emit: t }) {
    const n = ['text', 'number', 'idcard', 'digit', 'password', 'tel'],
      o = ['off', 'one-time-code'],
      r = mi(() => {
        let t = ''
        switch (e.type) {
          case 'text':
            'search' === e.confirmType && (t = 'search')
            break
          case 'idcard':
            t = 'text'
            break
          case 'digit':
            t = 'number'
            break
          default:
            t = ~n.includes(e.type) ? e.type : 'text'
        }
        return e.password ? 'password' : t
      }),
      i = mi(() => {
        const t = o.indexOf(e.textContentType),
          n = o.indexOf(W(e.textContentType))
        return o[-1 !== t ? t : -1 !== n ? n : 0]
      })
    let a,
      s = Jt('')
    const l = Jt(null),
      {
        fieldRef: c,
        state: u,
        scopedAttrsState: d,
        fixDisabledColor: p,
        trigger: f
      } = lf(e, l, t, (e, t) => {
        const n = e.target
        if ('number' === r.value) {
          if (
            (a && (n.removeEventListener('blur', a), (a = null)),
            n.validity && !n.validity.valid)
          ) {
            if (
              ((!s.value || !n.value) && '-' === e.data) ||
              ('-' === s.value[0] && 'deleteContentBackward' === e.inputType)
            )
              return (
                (s.value = '-'),
                (t.value = ''),
                (a = () => {
                  s.value = n.value = ''
                }),
                n.addEventListener('blur', a),
                !1
              )
            if (s.value)
              if (-1 !== s.value.indexOf('.')) {
                if ('.' !== e.data && 'deleteContentBackward' === e.inputType) {
                  const e = s.value.indexOf('.')
                  return (s.value = n.value = t.value = s.value.slice(0, e)), !0
                }
              } else if ('.' === e.data)
                return (
                  (s.value += '.'),
                  (a = () => {
                    s.value = n.value = s.value.slice(0, -1)
                  }),
                  n.addEventListener('blur', a),
                  !1
                )
            return (
              (s.value = t.value = n.value = '-' === s.value ? '' : s.value), !1
            )
          }
          s.value = n.value
          const o = t.maxlength
          if (o > 0 && n.value.length > o)
            return (n.value = n.value.slice(0, o)), (t.value = n.value), !1
        }
      })
    Yn(
      () => u.value,
      (t) => {
        'number' !== e.type || ('-' === s.value && '' === t) || (s.value = t)
      }
    )
    const h = ['number', 'digit'],
      g = mi(() => (h.includes(e.type) ? e.step : ''))
    function m(t) {
      if ('Enter' !== t.key) return
      const n = t.target
      t.stopPropagation(),
        f('confirm', t, { value: n.value }),
        !e.confirmHold && n.blur()
    }
    return () => {
      let t =
        e.disabled && p
          ? Gr(
              'input',
              {
                key: 'disabled-input',
                ref: c,
                value: u.value,
                tabindex: '-1',
                readonly: !!e.disabled,
                type: r.value,
                maxlength: u.maxlength,
                step: g.value,
                class: 'uni-input-input',
                onFocus: (e) => e.target.blur()
              },
              null,
              40,
              ['value', 'readonly', 'type', 'maxlength', 'step', 'onFocus']
            )
          : Vo(
              Gr(
                'input',
                {
                  key: 'input',
                  ref: c,
                  'onUpdate:modelValue': (e) => (u.value = e),
                  disabled: !!e.disabled,
                  type: r.value,
                  maxlength: u.maxlength,
                  step: g.value,
                  enterkeyhint: e.confirmType,
                  pattern: 'number' === e.type ? '[0-9]*' : void 0,
                  class: 'uni-input-input',
                  autocomplete: i.value,
                  onKeyup: m,
                  inputmode: e.inputmode
                },
                null,
                40,
                [
                  'onUpdate:modelValue',
                  'disabled',
                  'type',
                  'maxlength',
                  'step',
                  'enterkeyhint',
                  'pattern',
                  'autocomplete',
                  'onKeyup',
                  'inputmode'
                ]
              ),
              [[ha, u.value]]
            )
      return Gr(
        'uni-input',
        { ref: l },
        [
          Gr('div', { class: 'uni-input-wrapper' }, [
            Vo(
              Gr(
                'div',
                ni(d.attrs, {
                  style: e.placeholderStyle,
                  class: ['uni-input-placeholder', e.placeholderClass]
                }),
                [e.placeholder],
                16
              ),
              [[_a, !(u.value.length || '-' === s.value)]]
            ),
            'search' === e.confirmType
              ? Gr(
                  'form',
                  {
                    action: '',
                    onSubmit: (e) => e.preventDefault(),
                    class: 'uni-input-form'
                  },
                  [t],
                  40,
                  ['onSubmit']
                )
              : t
          ])
        ],
        512
      )
    }
  }
})
const uf = ['class', 'style'],
  df = /^on[A-Z]+/,
  pf = (e = {}) => {
    const { excludeListeners: t = !1, excludeKeys: n = [] } = e,
      o = si(),
      r = Zt({}),
      i = Zt({}),
      a = Zt({}),
      s = n.concat(uf)
    return (
      (o.attrs = Vt(o.attrs)),
      Hn(() => {
        const e = ((n = o.attrs), Object.keys(n).map((e) => [e, n[e]])).reduce(
          (e, [n, o]) => (
            s.includes(n)
              ? (e.exclude[n] = o)
              : df.test(n)
                ? (t || (e.attrs[n] = o), (e.listeners[n] = o))
                : (e.attrs[n] = o),
            e
          ),
          { exclude: {}, attrs: {}, listeners: {} }
        )
        var n
        ;(r.value = e.attrs), (i.value = e.listeners), (a.value = e.exclude)
      }),
      { $attrs: r, $listeners: i, $excludeAttrs: a }
    )
  }
function ff(e) {
  const t = []
  return (
    C(e) &&
      e.forEach((e) => {
        zr(e)
          ? e.type === Lr
            ? t.push(...ff(e.children))
            : t.push(e)
          : C(e) && t.push(...ff(e))
      }),
    t
  )
}
const hf = Xc({
  inheritAttrs: !1,
  name: 'MovableArea',
  props: { scaleArea: { type: Boolean, default: !1 } },
  setup(e, { slots: t }) {
    const n = Jt(null),
      o = Jt(!1)
    let { setContexts: r, events: i } = (function (e, t) {
      const n = Jt(0),
        o = Jt(0),
        r = Vt({ x: null, y: null }),
        i = Jt(null)
      let a = null,
        s = []
      function l(t) {
        t &&
          1 !== t &&
          (e.scaleArea
            ? s.forEach(function (e) {
                e._setScale(t)
              })
            : a && a._setScale(t))
      }
      function c(e, n = s) {
        let o = t.value
        function r(e) {
          for (let t = 0; t < n.length; t++) {
            const o = n[t]
            if (e === o.rootRef.value) return o
          }
          return e === o || e === document.body || e === document
            ? null
            : r(e.parentNode)
        }
        return r(e)
      }
      const u = Zc((t) => {
          let n = t.touches
          if (n && n.length > 1) {
            let t = { x: n[1].pageX - n[0].pageX, y: n[1].pageY - n[0].pageY }
            if (((i.value = gf(t)), (r.x = t.x), (r.y = t.y), !e.scaleArea)) {
              let e = c(n[0].target),
                t = c(n[1].target)
              a = e && e === t ? e : null
            }
          }
        }),
        d = Zc((e) => {
          let t = e.touches
          if (t && t.length > 1) {
            e.preventDefault()
            let n = { x: t[1].pageX - t[0].pageX, y: t[1].pageY - t[0].pageY }
            if (null !== r.x && i.value && i.value > 0) {
              l(gf(n) / i.value)
            }
            ;(r.x = n.x), (r.y = n.y)
          }
        }),
        p = Zc((t) => {
          let n = t.touches
          ;(n && n.length) ||
            (t.changedTouches &&
              ((r.x = 0),
              (r.y = 0),
              (i.value = null),
              e.scaleArea
                ? s.forEach(function (e) {
                    e._endScale()
                  })
                : a && a._endScale()))
        })
      function f() {
        h(),
          s.forEach(function (e, t) {
            e.setParent()
          })
      }
      function h() {
        let e = window.getComputedStyle(t.value),
          r = t.value.getBoundingClientRect()
        ;(n.value =
          r.width -
          ['Left', 'Right'].reduce(function (t, n) {
            const o = 'padding' + n
            return t + parseFloat(e['border' + n + 'Width']) + parseFloat(e[o])
          }, 0)),
          (o.value =
            r.height -
            ['Top', 'Bottom'].reduce(function (t, n) {
              const o = 'padding' + n
              return (
                t + parseFloat(e['border' + n + 'Width']) + parseFloat(e[o])
              )
            }, 0))
      }
      return (
        zn('movableAreaWidth', n),
        zn('movableAreaHeight', o),
        {
          setContexts(e) {
            s = e
          },
          events: {
            _onTouchstart: u,
            _onTouchmove: d,
            _onTouchend: p,
            _resize: f
          }
        }
      )
    })(e, n)
    const { $listeners: a, $attrs: s, $excludeAttrs: l } = pf(),
      c = a.value
    ;['onTouchstart', 'onTouchmove', 'onTouchend'].forEach((e) => {
      let t = c[e],
        n = i[`_${e}`]
      c[e] = t ? [].concat(t, n) : n
    }),
      Oo(() => {
        i._resize(), (o.value = !0)
      })
    let u = []
    const d = []
    function p() {
      const e = []
      for (let t = 0; t < u.length; t++) {
        let n = u[t]
        n = n.el
        const o = d.find((e) => n === e.rootRef.value)
        o && e.push(Ut(o))
      }
      r(e)
    }
    return (
      zn('_isMounted', o),
      zn('movableAreaRootRef', n),
      zn('addMovableViewContext', (e) => {
        d.push(e), p()
      }),
      zn('removeMovableViewContext', (e) => {
        const t = d.indexOf(e)
        t >= 0 && (d.splice(t, 1), p())
      }),
      () => {
        const e = t.default && t.default()
        return (
          (u = ff(e)),
          Gr(
            'uni-movable-area',
            ni({ ref: n }, s.value, l.value, c),
            [Gr(Cp, { onResize: i._resize }, null, 8, ['onResize']), u],
            16
          )
        )
      }
    )
  }
})
function gf(e) {
  return Math.sqrt(e.x * e.x + e.y * e.y)
}
const mf = function (e, t, n, o) {
  e.addEventListener(
    t,
    (e) => {
      I(n) &&
        !1 === n(e) &&
        ((void 0 === e.cancelable || e.cancelable) && e.preventDefault(),
        e.stopPropagation())
    },
    { passive: !1 }
  )
}
let vf, yf
function _f(e, t, n) {
  Po(() => {
    document.removeEventListener('mousemove', vf),
      document.removeEventListener('mouseup', yf)
  })
  let o = 0,
    r = 0,
    i = 0,
    a = 0
  const s = function (e, n, s, l) {
    if (
      !1 ===
      t({
        cancelable: e.cancelable,
        target: e.target,
        currentTarget: e.currentTarget,
        preventDefault: e.preventDefault.bind(e),
        stopPropagation: e.stopPropagation.bind(e),
        touches: e.touches,
        changedTouches: e.changedTouches,
        detail: {
          state: n,
          x: s,
          y: l,
          dx: s - o,
          dy: l - r,
          ddx: s - i,
          ddy: l - a,
          timeStamp: e.timeStamp
        }
      })
    )
      return !1
  }
  let l,
    c,
    u = null
  mf(e, 'touchstart', function (e) {
    if (((l = !0), 1 === e.touches.length && !u))
      return (
        (u = e),
        (o = i = e.touches[0].pageX),
        (r = a = e.touches[0].pageY),
        s(e, 'start', o, r)
      )
  }),
    mf(e, 'mousedown', function (e) {
      if (((c = !0), !l && !u))
        return (
          (u = e), (o = i = e.pageX), (r = a = e.pageY), s(e, 'start', o, r)
        )
    }),
    mf(e, 'touchmove', function (e) {
      if (1 === e.touches.length && u) {
        const t = s(e, 'move', e.touches[0].pageX, e.touches[0].pageY)
        return (i = e.touches[0].pageX), (a = e.touches[0].pageY), t
      }
    })
  const d = (vf = function (e) {
    if (!l && c && u) {
      const t = s(e, 'move', e.pageX, e.pageY)
      return (i = e.pageX), (a = e.pageY), t
    }
  })
  document.addEventListener('mousemove', d),
    mf(e, 'touchend', function (e) {
      if (0 === e.touches.length && u)
        return (
          (l = !1),
          (u = null),
          s(e, 'end', e.changedTouches[0].pageX, e.changedTouches[0].pageY)
        )
    })
  const p = (yf = function (e) {
    if (((c = !1), !l && u)) return (u = null), s(e, 'end', e.pageX, e.pageY)
  })
  document.addEventListener('mouseup', p),
    mf(e, 'touchcancel', function (e) {
      if (u) {
        l = !1
        const t = u
        return (
          (u = null),
          s(e, n ? 'cancel' : 'end', t.touches[0].pageX, t.touches[0].pageY)
        )
      }
    })
}
function bf(e, t, n) {
  return e > t - n && e < t + n
}
function wf(e, t) {
  return bf(e, 0, t)
}
function xf() {}
function Tf(e, t) {
  ;(this._m = e), (this._f = 1e3 * t), (this._startTime = 0), (this._v = 0)
}
function Sf(e, t, n) {
  ;(this._m = e),
    (this._k = t),
    (this._c = n),
    (this._solution = null),
    (this._endPosition = 0),
    (this._startTime = 0)
}
function Ef(e, t, n) {
  ;(this._springX = new Sf(e, t, n)),
    (this._springY = new Sf(e, t, n)),
    (this._springScale = new Sf(e, t, n)),
    (this._startTime = 0)
}
;(xf.prototype.x = function (e) {
  return Math.sqrt(e)
}),
  (Tf.prototype.setV = function (e, t) {
    const n = Math.pow(Math.pow(e, 2) + Math.pow(t, 2), 0.5)
    ;(this._x_v = e),
      (this._y_v = t),
      (this._x_a = (-this._f * this._x_v) / n),
      (this._y_a = (-this._f * this._y_v) / n),
      (this._t = Math.abs(e / this._x_a) || Math.abs(t / this._y_a)),
      (this._lastDt = null),
      (this._startTime = new Date().getTime())
  }),
  (Tf.prototype.setS = function (e, t) {
    ;(this._x_s = e), (this._y_s = t)
  }),
  (Tf.prototype.s = function (e) {
    void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3),
      e > this._t && ((e = this._t), (this._lastDt = e))
    let t = this._x_v * e + 0.5 * this._x_a * Math.pow(e, 2) + this._x_s,
      n = this._y_v * e + 0.5 * this._y_a * Math.pow(e, 2) + this._y_s
    return (
      ((this._x_a > 0 && t < this._endPositionX) ||
        (this._x_a < 0 && t > this._endPositionX)) &&
        (t = this._endPositionX),
      ((this._y_a > 0 && n < this._endPositionY) ||
        (this._y_a < 0 && n > this._endPositionY)) &&
        (n = this._endPositionY),
      { x: t, y: n }
    )
  }),
  (Tf.prototype.ds = function (e) {
    return (
      void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3),
      e > this._t && (e = this._t),
      { dx: this._x_v + this._x_a * e, dy: this._y_v + this._y_a * e }
    )
  }),
  (Tf.prototype.delta = function () {
    return {
      x: (-1.5 * Math.pow(this._x_v, 2)) / this._x_a || 0,
      y: (-1.5 * Math.pow(this._y_v, 2)) / this._y_a || 0
    }
  }),
  (Tf.prototype.dt = function () {
    return -this._x_v / this._x_a
  }),
  (Tf.prototype.done = function () {
    const e =
      bf(this.s().x, this._endPositionX) ||
      bf(this.s().y, this._endPositionY) ||
      this._lastDt === this._t
    return (this._lastDt = null), e
  }),
  (Tf.prototype.setEnd = function (e, t) {
    ;(this._endPositionX = e), (this._endPositionY = t)
  }),
  (Tf.prototype.reconfigure = function (e, t) {
    ;(this._m = e), (this._f = 1e3 * t)
  }),
  (Sf.prototype._solve = function (e, t) {
    const n = this._c,
      o = this._m,
      r = this._k,
      i = n * n - 4 * o * r
    if (0 === i) {
      const r = -n / (2 * o),
        i = e,
        a = t / (r * e)
      return {
        x: function (e) {
          return (i + a * e) * Math.pow(Math.E, r * e)
        },
        dx: function (e) {
          const t = Math.pow(Math.E, r * e)
          return r * (i + a * e) * t + a * t
        }
      }
    }
    if (i > 0) {
      const r = (-n - Math.sqrt(i)) / (2 * o),
        a = (-n + Math.sqrt(i)) / (2 * o),
        s = (t - r * e) / (a - r),
        l = e - s
      return {
        x: function (e) {
          let t, n
          return (
            e === this._t && ((t = this._powER1T), (n = this._powER2T)),
            (this._t = e),
            t || (t = this._powER1T = Math.pow(Math.E, r * e)),
            n || (n = this._powER2T = Math.pow(Math.E, a * e)),
            l * t + s * n
          )
        },
        dx: function (e) {
          let t, n
          return (
            e === this._t && ((t = this._powER1T), (n = this._powER2T)),
            (this._t = e),
            t || (t = this._powER1T = Math.pow(Math.E, r * e)),
            n || (n = this._powER2T = Math.pow(Math.E, a * e)),
            l * r * t + s * a * n
          )
        }
      }
    }
    const a = Math.sqrt(4 * o * r - n * n) / (2 * o),
      s = (-n / 2) * o,
      l = e,
      c = (t - s * e) / a
    return {
      x: function (e) {
        return (
          Math.pow(Math.E, s * e) * (l * Math.cos(a * e) + c * Math.sin(a * e))
        )
      },
      dx: function (e) {
        const t = Math.pow(Math.E, s * e),
          n = Math.cos(a * e),
          o = Math.sin(a * e)
        return t * (c * a * n - l * a * o) + s * t * (c * o + l * n)
      }
    }
  }),
  (Sf.prototype.x = function (e) {
    return (
      void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3),
      this._solution ? this._endPosition + this._solution.x(e) : 0
    )
  }),
  (Sf.prototype.dx = function (e) {
    return (
      void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3),
      this._solution ? this._solution.dx(e) : 0
    )
  }),
  (Sf.prototype.setEnd = function (e, t, n) {
    if (
      (n || (n = new Date().getTime()), e !== this._endPosition || !wf(t, 0.1))
    ) {
      t = t || 0
      let o = this._endPosition
      this._solution &&
        (wf(t, 0.1) && (t = this._solution.dx((n - this._startTime) / 1e3)),
        (o = this._solution.x((n - this._startTime) / 1e3)),
        wf(t, 0.1) && (t = 0),
        wf(o, 0.1) && (o = 0),
        (o += this._endPosition)),
        (this._solution && wf(o - e, 0.1) && wf(t, 0.1)) ||
          ((this._endPosition = e),
          (this._solution = this._solve(o - this._endPosition, t)),
          (this._startTime = n))
    }
  }),
  (Sf.prototype.snap = function (e) {
    ;(this._startTime = new Date().getTime()),
      (this._endPosition = e),
      (this._solution = {
        x: function () {
          return 0
        },
        dx: function () {
          return 0
        }
      })
  }),
  (Sf.prototype.done = function (e) {
    return (
      e || (e = new Date().getTime()),
      bf(this.x(), this._endPosition, 0.1) && wf(this.dx(), 0.1)
    )
  }),
  (Sf.prototype.reconfigure = function (e, t, n) {
    ;(this._m = e),
      (this._k = t),
      (this._c = n),
      this.done() ||
        ((this._solution = this._solve(
          this.x() - this._endPosition,
          this.dx()
        )),
        (this._startTime = new Date().getTime()))
  }),
  (Sf.prototype.springConstant = function () {
    return this._k
  }),
  (Sf.prototype.damping = function () {
    return this._c
  }),
  (Sf.prototype.configuration = function () {
    return [
      {
        label: 'Spring Constant',
        read: this.springConstant.bind(this),
        write: function (e, t) {
          e.reconfigure(1, t, e.damping())
        }.bind(this, this),
        min: 100,
        max: 1e3
      },
      {
        label: 'Damping',
        read: this.damping.bind(this),
        write: function (e, t) {
          e.reconfigure(1, e.springConstant(), t)
        }.bind(this, this),
        min: 1,
        max: 500
      }
    ]
  }),
  (Ef.prototype.setEnd = function (e, t, n, o) {
    const r = new Date().getTime()
    this._springX.setEnd(e, o, r),
      this._springY.setEnd(t, o, r),
      this._springScale.setEnd(n, o, r),
      (this._startTime = r)
  }),
  (Ef.prototype.x = function () {
    const e = (new Date().getTime() - this._startTime) / 1e3
    return {
      x: this._springX.x(e),
      y: this._springY.x(e),
      scale: this._springScale.x(e)
    }
  }),
  (Ef.prototype.done = function () {
    const e = new Date().getTime()
    return (
      this._springX.done(e) &&
      this._springY.done(e) &&
      this._springScale.done(e)
    )
  }),
  (Ef.prototype.reconfigure = function (e, t, n) {
    this._springX.reconfigure(e, t, n),
      this._springY.reconfigure(e, t, n),
      this._springScale.reconfigure(e, t, n)
  })
function Cf(e, t) {
  return +((1e3 * e - 1e3 * t) / 1e3).toFixed(1)
}
const kf = Xc({
  name: 'MovableView',
  props: {
    direction: { type: String, default: 'none' },
    inertia: { type: [Boolean, String], default: !1 },
    outOfBounds: { type: [Boolean, String], default: !1 },
    x: { type: [Number, String], default: 0 },
    y: { type: [Number, String], default: 0 },
    damping: { type: [Number, String], default: 20 },
    friction: { type: [Number, String], default: 2 },
    disabled: { type: [Boolean, String], default: !1 },
    scale: { type: [Boolean, String], default: !1 },
    scaleMin: { type: [Number, String], default: 0.5 },
    scaleMax: { type: [Number, String], default: 10 },
    scaleValue: { type: [Number, String], default: 1 },
    animation: { type: [Boolean, String], default: !0 }
  },
  emits: ['change', 'scale'],
  setup(e, { slots: t, emit: n }) {
    const o = Jt(null),
      r = eu(o, n),
      { setParent: i } = (function (e, t, n) {
        const o = Wn('_isMounted', Jt(!1)),
          r = Wn('addMovableViewContext', () => {}),
          i = Wn('removeMovableViewContext', () => {})
        let a,
          s,
          l = Jt(1),
          c = Jt(1),
          u = Jt(!1),
          d = Jt(0),
          p = Jt(0),
          f = null,
          h = null,
          g = !1,
          m = null,
          v = null
        const y = new xf(),
          _ = new xf(),
          b = { historyX: [0, 0], historyY: [0, 0], historyT: [0, 0] },
          w = mi(() => {
            let t = Number(e.friction)
            return isNaN(t) || t <= 0 ? 2 : t
          }),
          x = new Tf(1, w.value)
        Yn(
          () => e.disabled,
          () => {
            H()
          }
        )
        const {
          _updateOldScale: T,
          _endScale: S,
          _setScale: E,
          scaleValueSync: C,
          _updateBoundary: k,
          _updateOffset: $,
          _updateWH: O,
          _scaleOffset: I,
          minX: L,
          minY: P,
          maxX: A,
          maxY: R,
          FAandSFACancel: M,
          _getLimitXY: B,
          _setTransform: N,
          _revise: V,
          dampingNumber: j,
          xMove: D,
          yMove: F,
          xSync: q,
          ySync: z,
          _STD: W
        } = (function (e, t, n, o, r, i, a, s, l, c) {
          const u = mi(() => {
              let t = Number(e.scaleMin)
              return isNaN(t) ? 0.5 : t
            }),
            d = mi(() => {
              let t = Number(e.scaleMax)
              return isNaN(t) ? 10 : t
            }),
            p = Jt(Number(e.scaleValue) || 1)
          Yn(p, (e) => {
            N(e)
          }),
            Yn(u, () => {
              B()
            }),
            Yn(d, () => {
              B()
            }),
            Yn(
              () => e.scaleValue,
              (e) => {
                p.value = Number(e) || 0
              }
            )
          const {
              _updateBoundary: f,
              _updateOffset: h,
              _updateWH: g,
              _scaleOffset: m,
              minX: v,
              minY: y,
              maxX: _,
              maxY: b
            } = (function (e, t, n) {
              const o = Wn('movableAreaWidth', Jt(0)),
                r = Wn('movableAreaHeight', Jt(0)),
                i = Wn('movableAreaRootRef'),
                a = { x: 0, y: 0 },
                s = { x: 0, y: 0 },
                l = Jt(0),
                c = Jt(0),
                u = Jt(0),
                d = Jt(0),
                p = Jt(0),
                f = Jt(0)
              function h() {
                let e = 0 - a.x + s.x,
                  t = o.value - l.value - a.x - s.x
                ;(u.value = Math.min(e, t)), (p.value = Math.max(e, t))
                let n = 0 - a.y + s.y,
                  i = r.value - c.value - a.y - s.y
                ;(d.value = Math.min(n, i)), (f.value = Math.max(n, i))
              }
              function g() {
                ;(a.x = If(e.value, i.value)), (a.y = Lf(e.value, i.value))
              }
              function m(o) {
                ;(o = o || t.value), (o = n(o))
                let r = e.value.getBoundingClientRect()
                ;(c.value = r.height / t.value), (l.value = r.width / t.value)
                let i = c.value * o,
                  a = l.value * o
                ;(s.x = (a - l.value) / 2), (s.y = (i - c.value) / 2)
              }
              return {
                _updateBoundary: h,
                _updateOffset: g,
                _updateWH: m,
                _scaleOffset: s,
                minX: u,
                minY: d,
                maxX: p,
                maxY: f
              }
            })(t, o, M),
            {
              FAandSFACancel: w,
              _getLimitXY: x,
              _animationTo: T,
              _setTransform: S,
              _revise: E,
              dampingNumber: C,
              xMove: k,
              yMove: $,
              xSync: O,
              ySync: I,
              _STD: L
            } = (function (e, t, n, o, r, i, a, s, l, c, u, d, p, f) {
              const h = mi(() => {
                  let e = Number(t.damping)
                  return isNaN(e) ? 20 : e
                }),
                g = mi(
                  () => 'all' === t.direction || 'horizontal' === t.direction
                ),
                m = mi(
                  () => 'all' === t.direction || 'vertical' === t.direction
                ),
                v = Jt(Af(t.x)),
                y = Jt(Af(t.y))
              Yn(
                () => t.x,
                (e) => {
                  v.value = Af(e)
                }
              ),
                Yn(
                  () => t.y,
                  (e) => {
                    y.value = Af(e)
                  }
                ),
                Yn(v, (e) => {
                  E(e)
                }),
                Yn(y, (e) => {
                  C(e)
                })
              const _ = new Ef(1, (9 * Math.pow(h.value, 2)) / 40, h.value)
              function b(e, t) {
                let n = !1
                return (
                  e > r.value
                    ? ((e = r.value), (n = !0))
                    : e < a.value && ((e = a.value), (n = !0)),
                  t > i.value
                    ? ((t = i.value), (n = !0))
                    : t < s.value && ((t = s.value), (n = !0)),
                  { x: e, y: t, outOfBounds: n }
                )
              }
              function w() {
                d && d.cancel(), u && u.cancel()
              }
              function x(e, n, r, i, a, s) {
                w(),
                  g.value || (e = l.value),
                  m.value || (n = c.value),
                  t.scale || (r = o.value)
                let d = b(e, n)
                ;(e = d.x),
                  (n = d.y),
                  t.animation
                    ? ((_._springX._solution = null),
                      (_._springY._solution = null),
                      (_._springScale._solution = null),
                      (_._springX._endPosition = l.value),
                      (_._springY._endPosition = c.value),
                      (_._springScale._endPosition = o.value),
                      _.setEnd(e, n, r, 1),
                      (u = Pf(
                        _,
                        function () {
                          let e = _.x()
                          T(e.x, e.y, e.scale, i, a, s)
                        },
                        function () {
                          u.cancel()
                        }
                      )))
                    : T(e, n, r, i, a, s)
              }
              function T(r, i, a, s = '', u, d) {
                ;(null !== r &&
                  'NaN' !== r.toString() &&
                  'number' == typeof r) ||
                  (r = l.value || 0),
                  (null !== i &&
                    'NaN' !== i.toString() &&
                    'number' == typeof i) ||
                    (i = c.value || 0),
                  (r = Number(r.toFixed(1))),
                  (i = Number(i.toFixed(1))),
                  (a = Number(a.toFixed(1))),
                  (l.value === r && c.value === i) ||
                    u ||
                    f(
                      'change',
                      {},
                      { x: Cf(r, n.x), y: Cf(i, n.y), source: s }
                    ),
                  t.scale || (a = o.value),
                  (a = +(a = p(a)).toFixed(3)),
                  d && a !== o.value && f('scale', {}, { x: r, y: i, scale: a })
                let h =
                  'translateX(' +
                  r +
                  'px) translateY(' +
                  i +
                  'px) translateZ(0px) scale(' +
                  a +
                  ')'
                e.value &&
                  ((e.value.style.transform = h),
                  (e.value.style.webkitTransform = h),
                  (l.value = r),
                  (c.value = i),
                  (o.value = a))
              }
              function S(e) {
                let t = b(l.value, c.value),
                  n = t.x,
                  r = t.y,
                  i = t.outOfBounds
                return i && x(n, r, o.value, e), i
              }
              function E(e) {
                if (g.value) {
                  if (e + n.x === l.value) return l
                  u && u.cancel(), x(e + n.x, y.value + n.y, o.value)
                }
                return e
              }
              function C(e) {
                if (m.value) {
                  if (e + n.y === c.value) return c
                  u && u.cancel(), x(v.value + n.x, e + n.y, o.value)
                }
                return e
              }
              return {
                FAandSFACancel: w,
                _getLimitXY: b,
                _animationTo: x,
                _setTransform: T,
                _revise: S,
                dampingNumber: h,
                xMove: g,
                yMove: m,
                xSync: v,
                ySync: y,
                _STD: _
              }
            })(t, e, m, o, _, b, v, y, a, s, l, c, M, n)
          function P(t, n) {
            if (e.scale) {
              ;(t = M(t)), g(t), f()
              const e = x(a.value, s.value),
                o = e.x,
                r = e.y
              n
                ? T(o, r, t, '', !0, !0)
                : Of(function () {
                    S(o, r, t, '', !0, !0)
                  })
            }
          }
          function A() {
            i.value = !0
          }
          function R(e) {
            r.value = e
          }
          function M(e) {
            return (
              (e = Math.max(0.5, u.value, e)), (e = Math.min(10, d.value, e))
            )
          }
          function B() {
            if (!e.scale) return !1
            P(o.value, !0), R(o.value)
          }
          function N(t) {
            return !!e.scale && (P((t = M(t)), !0), R(t), t)
          }
          function V() {
            ;(i.value = !1), R(o.value)
          }
          function j(e) {
            e && ((e = r.value * e), A(), P(e))
          }
          return {
            _updateOldScale: R,
            _endScale: V,
            _setScale: j,
            scaleValueSync: p,
            _updateBoundary: f,
            _updateOffset: h,
            _updateWH: g,
            _scaleOffset: m,
            minX: v,
            minY: y,
            maxX: _,
            maxY: b,
            FAandSFACancel: w,
            _getLimitXY: x,
            _animationTo: T,
            _setTransform: S,
            _revise: E,
            dampingNumber: C,
            xMove: k,
            yMove: $,
            xSync: O,
            ySync: I,
            _STD: L
          }
        })(e, n, t, l, c, u, d, p, f, h)
        function H() {
          u.value ||
            e.disabled ||
            (M(),
            (b.historyX = [0, 0]),
            (b.historyY = [0, 0]),
            (b.historyT = [0, 0]),
            D.value && (a = d.value),
            F.value && (s = p.value),
            (n.value.style.willChange = 'transform'),
            (m = null),
            (v = null),
            (g = !0))
        }
        function U(t) {
          if (!u.value && !e.disabled && g) {
            let n = d.value,
              o = p.value
            if (
              (null === v &&
                (v =
                  Math.abs(t.detail.dx / t.detail.dy) > 1
                    ? 'htouchmove'
                    : 'vtouchmove'),
              D.value &&
                ((n = t.detail.dx + a),
                b.historyX.shift(),
                b.historyX.push(n),
                F.value ||
                  null !== m ||
                  (m = Math.abs(t.detail.dx / t.detail.dy) < 1)),
              F.value &&
                ((o = t.detail.dy + s),
                b.historyY.shift(),
                b.historyY.push(o),
                D.value ||
                  null !== m ||
                  (m = Math.abs(t.detail.dy / t.detail.dx) < 1)),
              b.historyT.shift(),
              b.historyT.push(t.detail.timeStamp),
              !m)
            ) {
              t.preventDefault()
              let r = 'touch'
              n < L.value
                ? e.outOfBounds
                  ? ((r = 'touch-out-of-bounds'),
                    (n = L.value - y.x(L.value - n)))
                  : (n = L.value)
                : n > A.value &&
                  (e.outOfBounds
                    ? ((r = 'touch-out-of-bounds'),
                      (n = A.value + y.x(n - A.value)))
                    : (n = A.value)),
                o < P.value
                  ? e.outOfBounds
                    ? ((r = 'touch-out-of-bounds'),
                      (o = P.value - _.x(P.value - o)))
                    : (o = P.value)
                  : o > R.value &&
                    (e.outOfBounds
                      ? ((r = 'touch-out-of-bounds'),
                        (o = R.value + _.x(o - R.value)))
                      : (o = R.value)),
                Of(function () {
                  N(n, o, l.value, r)
                })
            }
          }
        }
        function Y() {
          if (
            !u.value &&
            !e.disabled &&
            g &&
            ((n.value.style.willChange = 'auto'),
            (g = !1),
            !m && !V('out-of-bounds') && e.inertia)
          ) {
            const e =
                (1e3 * (b.historyX[1] - b.historyX[0])) /
                (b.historyT[1] - b.historyT[0]),
              t =
                (1e3 * (b.historyY[1] - b.historyY[0])) /
                (b.historyT[1] - b.historyT[0]),
              n = d.value,
              o = p.value
            x.setV(e, t), x.setS(n, o)
            const r = x.delta().x,
              i = x.delta().y
            let a = r + n,
              s = i + o
            a < L.value
              ? ((a = L.value), (s = o + ((L.value - n) * i) / r))
              : a > A.value &&
                ((a = A.value), (s = o + ((A.value - n) * i) / r)),
              s < P.value
                ? ((s = P.value), (a = n + ((P.value - o) * r) / i))
                : s > R.value &&
                  ((s = R.value), (a = n + ((R.value - o) * r) / i)),
              x.setEnd(a, s),
              (h = Pf(
                x,
                function () {
                  let e = x.s(),
                    t = e.x,
                    n = e.y
                  N(t, n, l.value, 'friction')
                },
                function () {
                  h.cancel()
                }
              ))
          }
          e.outOfBounds || e.inertia || M()
        }
        function X() {
          if (!o.value) return
          M()
          let t = e.scale ? C.value : 1
          $(), O(t), k()
          let n = B(q.value + I.x, z.value + I.y),
            r = n.x,
            i = n.y
          N(r, i, t, '', !0), T(t)
        }
        return (
          Oo(() => {
            _f(n.value, (e) => {
              switch (e.detail.state) {
                case 'start':
                  H()
                  break
                case 'move':
                  U(e)
                  break
                case 'end':
                  Y()
              }
            }),
              X(),
              x.reconfigure(1, w.value),
              W.reconfigure(1, (9 * Math.pow(j.value, 2)) / 40, j.value),
              (n.value.style.transformOrigin = 'center')
            const e = { rootRef: n, setParent: X, _endScale: S, _setScale: E }
            r(e),
              Ao(() => {
                i(e)
              })
          }),
          Ao(() => {
            M()
          }),
          { setParent: X }
        )
      })(e, r, o)
    return () =>
      Gr(
        'uni-movable-view',
        { ref: o },
        [
          Gr(Cp, { onResize: i }, null, 8, ['onResize']),
          t.default && t.default()
        ],
        512
      )
  }
})
let $f = !1
function Of(e) {
  $f ||
    (($f = !0),
    requestAnimationFrame(function () {
      e(), ($f = !1)
    }))
}
function If(e, t) {
  if (e === t) return 0
  let n = e.offsetLeft
  return e.offsetParent ? (n += If(e.offsetParent, t)) : 0
}
function Lf(e, t) {
  if (e === t) return 0
  let n = e.offsetTop
  return e.offsetParent ? (n += Lf(e.offsetParent, t)) : 0
}
function Pf(e, t, n) {
  let o = { id: 0, cancelled: !1 }
  return (
    (function e(t, n, o, r) {
      if (!t || !t.cancelled) {
        o(n)
        let i = n.done()
        i ||
          t.cancelled ||
          (t.id = requestAnimationFrame(e.bind(null, t, n, o, r))),
          i && r && r(n)
      }
    })(o, e, t, n),
    {
      cancel: function (e) {
        e && e.id && cancelAnimationFrame(e.id), e && (e.cancelled = !0)
      }.bind(null, o),
      model: e
    }
  )
}
function Af(e) {
  return /\d+[ur]px$/i.test(e) ? cd(parseFloat(e)) : Number(e) || 0
}
const Rf = ['navigate', 'redirect', 'switchTab', 'reLaunch', 'navigateBack'],
  Mf = [
    'slide-in-right',
    'slide-in-left',
    'slide-in-top',
    'slide-in-bottom',
    'fade-in',
    'zoom-out',
    'zoom-fade-out',
    'pop-in',
    'none'
  ],
  Bf = [
    'slide-out-right',
    'slide-out-left',
    'slide-out-top',
    'slide-out-bottom',
    'fade-out',
    'zoom-in',
    'zoom-fade-in',
    'pop-out',
    'none'
  ],
  Nf = {
    hoverClass: { type: String, default: 'navigator-hover' },
    url: { type: String, default: '' },
    openType: {
      type: String,
      default: 'navigate',
      validator: (e) => Boolean(~Rf.indexOf(e))
    },
    delta: { type: Number, default: 1 },
    hoverStartTime: { type: [Number, String], default: 50 },
    hoverStayTime: { type: [Number, String], default: 600 },
    exists: { type: String, default: '' },
    hoverStopPropagation: { type: Boolean, default: !1 },
    animationType: {
      type: String,
      default: '',
      validator: (e) => !e || Mf.concat(Bf).includes(e)
    },
    animationDuration: { type: [String, Number], default: 300 }
  }
x({}, Nf, { renderLink: { type: Boolean, default: !0 } })
const Vf = pe(!0),
  jf = Xc({
    name: 'ScrollView',
    compatConfig: { MODE: 3 },
    props: {
      scrollX: { type: [Boolean, String], default: !1 },
      scrollY: { type: [Boolean, String], default: !1 },
      upperThreshold: { type: [Number, String], default: 50 },
      lowerThreshold: { type: [Number, String], default: 50 },
      scrollTop: { type: [Number, String], default: 0 },
      scrollLeft: { type: [Number, String], default: 0 },
      scrollIntoView: { type: String, default: '' },
      scrollWithAnimation: { type: [Boolean, String], default: !1 },
      enableBackToTop: { type: [Boolean, String], default: !1 },
      refresherEnabled: { type: [Boolean, String], default: !1 },
      refresherThreshold: { type: Number, default: 45 },
      refresherDefaultStyle: { type: String, default: 'back' },
      refresherBackground: { type: String, default: '#fff' },
      refresherTriggered: { type: [Boolean, String], default: !1 }
    },
    emits: [
      'scroll',
      'scrolltoupper',
      'scrolltolower',
      'refresherrefresh',
      'refresherrestore',
      'refresherpulling',
      'refresherabort',
      'update:refresherTriggered'
    ],
    setup(e, { emit: t, slots: n }) {
      const o = Jt(null),
        r = Jt(null),
        i = Jt(null),
        a = Jt(null),
        s = Jt(null),
        l = eu(o, t),
        {
          state: c,
          scrollTopNumber: u,
          scrollLeftNumber: d
        } = (function (e) {
          const t = mi(() => Number(e.scrollTop) || 0),
            n = mi(() => Number(e.scrollLeft) || 0)
          return {
            state: Vt({
              lastScrollTop: t.value,
              lastScrollLeft: n.value,
              lastScrollToUpperTime: 0,
              lastScrollToLowerTime: 0,
              refresherHeight: 0,
              refreshRotate: 0,
              refreshState: ''
            }),
            scrollTopNumber: t,
            scrollLeftNumber: n
          }
        })(e)
      !(function (e, t, n, o, r, i, a, s, l) {
        let c = !1,
          u = 0,
          d = !1,
          p = () => {}
        const f = mi(() => {
            let t = Number(e.upperThreshold)
            return isNaN(t) ? 50 : t
          }),
          h = mi(() => {
            let t = Number(e.lowerThreshold)
            return isNaN(t) ? 50 : t
          })
        function g(e, t) {
          const n = a.value
          let o = 0,
            r = ''
          if (
            (e < 0
              ? (e = 0)
              : 'x' === t && e > n.scrollWidth - n.offsetWidth
                ? (e = n.scrollWidth - n.offsetWidth)
                : 'y' === t &&
                  e > n.scrollHeight - n.offsetHeight &&
                  (e = n.scrollHeight - n.offsetHeight),
            'x' === t
              ? (o = n.scrollLeft - e)
              : 'y' === t && (o = n.scrollTop - e),
            0 === o)
          )
            return
          let i = s.value
          ;(i.style.transition = 'transform .3s ease-out'),
            (i.style.webkitTransition = '-webkit-transform .3s ease-out'),
            'x' === t
              ? (r = 'translateX(' + o + 'px) translateZ(0)')
              : 'y' === t && (r = 'translateY(' + o + 'px) translateZ(0)'),
            i.removeEventListener('transitionend', p),
            i.removeEventListener('webkitTransitionEnd', p),
            (p = () => b(e, t)),
            i.addEventListener('transitionend', p),
            i.addEventListener('webkitTransitionEnd', p),
            'x' === t
              ? (n.style.overflowX = 'hidden')
              : 'y' === t && (n.style.overflowY = 'hidden'),
            (i.style.transform = r),
            (i.style.webkitTransform = r)
        }
        function m(n) {
          const o = n.target
          r('scroll', n, {
            scrollLeft: o.scrollLeft,
            scrollTop: o.scrollTop,
            scrollHeight: o.scrollHeight,
            scrollWidth: o.scrollWidth,
            deltaX: t.lastScrollLeft - o.scrollLeft,
            deltaY: t.lastScrollTop - o.scrollTop
          }),
            e.scrollY &&
              (o.scrollTop <= f.value &&
                t.lastScrollTop - o.scrollTop > 0 &&
                n.timeStamp - t.lastScrollToUpperTime > 200 &&
                (r('scrolltoupper', n, { direction: 'top' }),
                (t.lastScrollToUpperTime = n.timeStamp)),
              o.scrollTop + o.offsetHeight + h.value >= o.scrollHeight &&
                t.lastScrollTop - o.scrollTop < 0 &&
                n.timeStamp - t.lastScrollToLowerTime > 200 &&
                (r('scrolltolower', n, { direction: 'bottom' }),
                (t.lastScrollToLowerTime = n.timeStamp))),
            e.scrollX &&
              (o.scrollLeft <= f.value &&
                t.lastScrollLeft - o.scrollLeft > 0 &&
                n.timeStamp - t.lastScrollToUpperTime > 200 &&
                (r('scrolltoupper', n, { direction: 'left' }),
                (t.lastScrollToUpperTime = n.timeStamp)),
              o.scrollLeft + o.offsetWidth + h.value >= o.scrollWidth &&
                t.lastScrollLeft - o.scrollLeft < 0 &&
                n.timeStamp - t.lastScrollToLowerTime > 200 &&
                (r('scrolltolower', n, { direction: 'right' }),
                (t.lastScrollToLowerTime = n.timeStamp))),
            (t.lastScrollTop = o.scrollTop),
            (t.lastScrollLeft = o.scrollLeft)
        }
        function v(t) {
          e.scrollY &&
            (e.scrollWithAnimation ? g(t, 'y') : (a.value.scrollTop = t))
        }
        function y(t) {
          e.scrollX &&
            (e.scrollWithAnimation ? g(t, 'x') : (a.value.scrollLeft = t))
        }
        function _(t) {
          if (t) {
            if (!/^[_a-zA-Z][-_a-zA-Z0-9:]*$/.test(t))
              return void console.error(`id error: scroll-into-view=${t}`)
            let n = i.value.querySelector('#' + t)
            if (n) {
              let t = a.value.getBoundingClientRect(),
                o = n.getBoundingClientRect()
              if (e.scrollX) {
                let n = o.left - t.left,
                  r = a.value.scrollLeft + n
                e.scrollWithAnimation ? g(r, 'x') : (a.value.scrollLeft = r)
              }
              if (e.scrollY) {
                let n = o.top - t.top,
                  r = a.value.scrollTop + n
                e.scrollWithAnimation ? g(r, 'y') : (a.value.scrollTop = r)
              }
            }
          }
        }
        function b(t, n) {
          ;(s.value.style.transition = ''),
            (s.value.style.webkitTransition = ''),
            (s.value.style.transform = ''),
            (s.value.style.webkitTransform = '')
          let o = a.value
          'x' === n
            ? ((o.style.overflowX = e.scrollX ? 'auto' : 'hidden'),
              (o.scrollLeft = t))
            : 'y' === n &&
              ((o.style.overflowY = e.scrollY ? 'auto' : 'hidden'),
              (o.scrollTop = t)),
            s.value.removeEventListener('transitionend', p),
            s.value.removeEventListener('webkitTransitionEnd', p)
        }
        function w(n) {
          if (e.refresherEnabled) {
            switch (n) {
              case 'refreshing':
                ;(t.refresherHeight = e.refresherThreshold),
                  c ||
                    ((c = !0),
                    r('refresherrefresh', {}, {}),
                    l('update:refresherTriggered', !0))
                break
              case 'restore':
              case 'refresherabort':
                ;(c = !1),
                  (t.refresherHeight = u = 0),
                  'restore' === n && ((d = !1), r('refresherrestore', {}, {})),
                  'refresherabort' === n &&
                    d &&
                    ((d = !1), r('refresherabort', {}, {}))
            }
            t.refreshState = n
          }
        }
        Oo(() => {
          xn(() => {
            v(n.value), y(o.value)
          }),
            _(e.scrollIntoView)
          let i = function (e) {
              e.preventDefault(), e.stopPropagation(), m(e)
            },
            s = { x: 0, y: 0 },
            l = null,
            p = function (n) {
              if (null === s) return
              let o = n.touches[0].pageX,
                i = n.touches[0].pageY,
                p = a.value
              if (Math.abs(o - s.x) > Math.abs(i - s.y))
                if (e.scrollX) {
                  if (0 === p.scrollLeft && o > s.x) return void (l = !1)
                  if (p.scrollWidth === p.offsetWidth + p.scrollLeft && o < s.x)
                    return void (l = !1)
                  l = !0
                } else l = !1
              else if (e.scrollY)
                if (0 === p.scrollTop && i > s.y)
                  (l = !1),
                    e.refresherEnabled &&
                      !1 !== n.cancelable &&
                      n.preventDefault()
                else {
                  if (
                    p.scrollHeight === p.offsetHeight + p.scrollTop &&
                    i < s.y
                  )
                    return void (l = !1)
                  l = !0
                }
              else l = !1
              if (
                (l && n.stopPropagation(),
                0 === p.scrollTop && 1 === n.touches.length && w('pulling'),
                e.refresherEnabled && 'pulling' === t.refreshState)
              ) {
                const o = i - s.y
                0 === u && (u = i),
                  c
                    ? ((t.refresherHeight = o + e.refresherThreshold), (d = !1))
                    : ((t.refresherHeight = i - u),
                      t.refresherHeight > 0 &&
                        ((d = !0), r('refresherpulling', n, { deltaY: o })))
                const a = t.refresherHeight / e.refresherThreshold
                t.refreshRotate = 360 * (a > 1 ? 1 : a)
              }
            },
            f = function (e) {
              1 === e.touches.length &&
                (s = { x: e.touches[0].pageX, y: e.touches[0].pageY })
            },
            h = function (n) {
              ;(s = null),
                t.refresherHeight >= e.refresherThreshold
                  ? w('refreshing')
                  : w('refresherabort')
            }
          a.value.addEventListener('touchstart', f, Vf),
            a.value.addEventListener('touchmove', p, pe(!1)),
            a.value.addEventListener('scroll', i, pe(!1)),
            a.value.addEventListener('touchend', h, Vf),
            Po(() => {
              a.value.removeEventListener('touchstart', f),
                a.value.removeEventListener('touchmove', p),
                a.value.removeEventListener('scroll', i),
                a.value.removeEventListener('touchend', h)
            })
        }),
          vo(() => {
            e.scrollY && (a.value.scrollTop = t.lastScrollTop),
              e.scrollX && (a.value.scrollLeft = t.lastScrollLeft)
          }),
          Yn(n, (e) => {
            v(e)
          }),
          Yn(o, (e) => {
            y(e)
          }),
          Yn(
            () => e.scrollIntoView,
            (e) => {
              _(e)
            }
          ),
          Yn(
            () => e.refresherTriggered,
            (e) => {
              !0 === e ? w('refreshing') : !1 === e && w('restore')
            }
          )
      })(e, c, u, d, l, o, r, a, t)
      const p = mi(() => {
        let t = ''
        return (
          e.scrollX ? (t += 'overflow-x:auto;') : (t += 'overflow-x:hidden;'),
          e.scrollY ? (t += 'overflow-y:auto;') : (t += 'overflow-y:hidden;'),
          t
        )
      })
      return () => {
        const {
            refresherEnabled: t,
            refresherBackground: l,
            refresherDefaultStyle: u
          } = e,
          { refresherHeight: d, refreshState: f, refreshRotate: h } = c
        return Gr(
          'uni-scroll-view',
          { ref: o },
          [
            Gr(
              'div',
              { ref: i, class: 'uni-scroll-view' },
              [
                Gr(
                  'div',
                  { ref: r, style: p.value, class: 'uni-scroll-view' },
                  [
                    Gr(
                      'div',
                      { ref: a, class: 'uni-scroll-view-content' },
                      [
                        t
                          ? Gr(
                              'div',
                              {
                                ref: s,
                                style: { backgroundColor: l, height: d + 'px' },
                                class: 'uni-scroll-view-refresher'
                              },
                              [
                                'none' !== u
                                  ? Gr(
                                      'div',
                                      { class: 'uni-scroll-view-refresh' },
                                      [
                                        Gr(
                                          'div',
                                          {
                                            class:
                                              'uni-scroll-view-refresh-inner'
                                          },
                                          [
                                            'pulling' == f
                                              ? Gr(
                                                  'svg',
                                                  {
                                                    key: 'refresh__icon',
                                                    style: {
                                                      transform:
                                                        'rotate(' + h + 'deg)'
                                                    },
                                                    fill: '#2BD009',
                                                    class:
                                                      'uni-scroll-view-refresh__icon',
                                                    width: '24',
                                                    height: '24',
                                                    viewBox: '0 0 24 24'
                                                  },
                                                  [
                                                    Gr(
                                                      'path',
                                                      {
                                                        d: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
                                                      },
                                                      null
                                                    ),
                                                    Gr(
                                                      'path',
                                                      {
                                                        d: 'M0 0h24v24H0z',
                                                        fill: 'none'
                                                      },
                                                      null
                                                    )
                                                  ],
                                                  4
                                                )
                                              : null,
                                            'refreshing' == f
                                              ? Gr(
                                                  'svg',
                                                  {
                                                    key: 'refresh__spinner',
                                                    class:
                                                      'uni-scroll-view-refresh__spinner',
                                                    width: '24',
                                                    height: '24',
                                                    viewBox: '25 25 50 50'
                                                  },
                                                  [
                                                    Gr(
                                                      'circle',
                                                      {
                                                        cx: '50',
                                                        cy: '50',
                                                        r: '20',
                                                        fill: 'none',
                                                        style: 'color: #2bd009',
                                                        'stroke-width': '3'
                                                      },
                                                      null
                                                    )
                                                  ]
                                                )
                                              : null
                                          ]
                                        )
                                      ]
                                    )
                                  : null,
                                'none' == u
                                  ? n.refresher && n.refresher()
                                  : null
                              ],
                              4
                            )
                          : null,
                        n.default && n.default()
                      ],
                      512
                    )
                  ],
                  4
                )
              ],
              512
            )
          ],
          512
        )
      }
    }
  })
function Df(e, t, n, o, r, i) {
  function a() {
    c && (clearTimeout(c), (c = null))
  }
  let s,
    l,
    c = null,
    u = !0,
    d = 0,
    p = 1,
    f = null,
    h = !1,
    g = 0,
    m = ''
  const v = mi(() => n.value.length > t.displayMultipleItems),
    y = mi(() => e.circular && v.value)
  function _(r) {
    ;(Math.floor(2 * d) === Math.floor(2 * r) &&
      Math.ceil(2 * d) === Math.ceil(2 * r)) ||
      (y.value &&
        (function (o) {
          if (!u)
            for (
              let r = n.value,
                i = r.length,
                a = o + t.displayMultipleItems,
                s = 0;
              s < i;
              s++
            ) {
              const t = r[s],
                n = Math.floor(o / i) * i + s,
                l = n + i,
                c = n - i,
                u = Math.max(o - (n + 1), n - a, 0),
                d = Math.max(o - (l + 1), l - a, 0),
                p = Math.max(o - (c + 1), c - a, 0),
                f = Math.min(u, d, p),
                h = [n, l, c][[u, d, p].indexOf(f)]
              t.updatePosition(h, e.vertical)
            }
        })(r))
    const a =
        'translate(' +
        (e.vertical ? '0' : 100 * -r * p + '%') +
        ', ' +
        (e.vertical ? 100 * -r * p + '%' : '0') +
        ') translateZ(0)',
      l = o.value
    if (
      (l && ((l.style.webkitTransform = a), (l.style.transform = a)),
      (d = r),
      !s)
    ) {
      if (r % 1 == 0) return
      s = r
    }
    r -= Math.floor(s)
    const c = n.value
    r <= -(c.length - 1) ? (r += c.length) : r >= c.length && (r -= c.length),
      (r = s % 1 > 0.5 || s < 0 ? r - 1 : r),
      i(
        'transition',
        {},
        {
          dx: e.vertical ? 0 : r * l.offsetWidth,
          dy: e.vertical ? r * l.offsetHeight : 0
        }
      )
  }
  function b(e) {
    const o = n.value.length
    if (!o) return -1
    const r = ((Math.round(e) % o) + o) % o
    if (y.value) {
      if (o <= t.displayMultipleItems) return 0
    } else if (r > o - t.displayMultipleItems) return o - t.displayMultipleItems
    return r
  }
  function w() {
    f = null
  }
  function x() {
    if (!f) return void (h = !1)
    const e = f,
      o = e.toPos,
      r = e.acc,
      a = e.endTime,
      c = e.source,
      u = a - Date.now()
    if (u <= 0) {
      _(o), (f = null), (h = !1), (s = null)
      const e = n.value[t.current]
      if (e) {
        const n = e.getItemId()
        i(
          'animationfinish',
          {},
          { current: t.current, currentItemId: n, source: c }
        )
      }
      return
    }
    _(o + (r * u * u) / 2), (l = requestAnimationFrame(x))
  }
  function T(e, o, r) {
    w()
    const i = t.duration,
      a = n.value.length
    let s = d
    if (y.value)
      if (r < 0) {
        for (; s < e; ) s += a
        for (; s - a > e; ) s -= a
      } else if (r > 0) {
        for (; s > e; ) s -= a
        for (; s + a < e; ) s += a
        s + a - e < e - s && (s += a)
      } else {
        for (; s + a < e; ) s += a
        for (; s - a > e; ) s -= a
        s + a - e < e - s && (s += a)
      }
    else 'click' === o && (e = e + t.displayMultipleItems - 1 < a ? e : 0)
    ;(f = {
      toPos: e,
      acc: (2 * (s - e)) / (i * i),
      endTime: Date.now() + i,
      source: o
    }),
      h || ((h = !0), (l = requestAnimationFrame(x)))
  }
  function S() {
    a()
    const e = n.value,
      o = function () {
        ;(c = null),
          (m = 'autoplay'),
          y.value
            ? (t.current = b(t.current + 1))
            : (t.current =
                t.current + t.displayMultipleItems < e.length
                  ? t.current + 1
                  : 0),
          T(t.current, 'autoplay', y.value ? 1 : 0),
          (c = setTimeout(o, t.interval))
      }
    u || e.length <= t.displayMultipleItems || (c = setTimeout(o, t.interval))
  }
  function E(e) {
    e ? S() : a()
  }
  return (
    Yn([() => e.current, () => e.currentItemId, () => [...n.value]], () => {
      let o = -1
      if (e.currentItemId)
        for (let t = 0, r = n.value; t < r.length; t++) {
          if (r[t].getItemId() === e.currentItemId) {
            o = t
            break
          }
        }
      o < 0 && (o = Math.round(e.current) || 0),
        (o = o < 0 ? 0 : o),
        t.current !== o && ((m = ''), (t.current = o))
    }),
    Yn(
      [
        () => e.vertical,
        () => y.value,
        () => t.displayMultipleItems,
        () => [...n.value]
      ],
      function () {
        a(), f && (_(f.toPos), (f = null))
        const r = n.value
        for (let t = 0; t < r.length; t++) r[t].updatePosition(t, e.vertical)
        p = 1
        const i = o.value
        if (1 === t.displayMultipleItems && r.length) {
          const e = r[0].getBoundingClientRect(),
            t = i.getBoundingClientRect()
          ;(p = e.width / t.width), (p > 0 && p < 1) || (p = 1)
        }
        const s = d
        d = -2
        const l = t.current
        l >= 0
          ? ((u = !1),
            t.userTracking
              ? (_(s + l - g), (g = l))
              : (_(l), e.autoplay && S()))
          : ((u = !0), _(-t.displayMultipleItems - 1))
      }
    ),
    Yn(
      () => t.interval,
      () => {
        c && (a(), S())
      }
    ),
    Yn(
      () => t.current,
      (e, o) => {
        !(function (e, o) {
          const r = m
          m = ''
          const a = n.value
          if (!r) {
            const t = a.length
            T(e, '', y.value && o + ((t - e) % t) > t / 2 ? 1 : 0)
          }
          const s = a[e]
          if (s) {
            const e = (t.currentItemId = s.getItemId())
            i('change', {}, { current: t.current, currentItemId: e, source: r })
          }
        })(e, o),
          r('update:current', e)
      }
    ),
    Yn(
      () => t.currentItemId,
      (e) => {
        r('update:currentItemId', e)
      }
    ),
    Yn(() => e.autoplay && !t.userTracking, E),
    E(e.autoplay && !t.userTracking),
    Oo(() => {
      let r = !1,
        i = 0,
        s = 0
      function l(e) {
        t.userTracking = !1
        const n = i / Math.abs(i)
        let o = 0
        !e && Math.abs(i) > 0.2 && (o = 0.5 * n)
        const r = b(d + o)
        e
          ? _(g)
          : ((m = 'touch'),
            (t.current = r),
            T(r, 'touch', 0 !== o ? o : 0 === r && y.value && d >= 1 ? 1 : 0))
      }
      _f(o.value, (c) => {
        if (!e.disableTouch && !u) {
          if ('start' === c.detail.state)
            return (
              (t.userTracking = !0),
              (r = !1),
              a(),
              (g = d),
              (i = 0),
              (s = Date.now()),
              void w()
            )
          if ('end' === c.detail.state) return l(!1)
          if ('cancel' === c.detail.state) return l(!0)
          if (t.userTracking) {
            if (!r) {
              r = !0
              const n = Math.abs(c.detail.dx),
                o = Math.abs(c.detail.dy)
              if (
                (((n >= o && e.vertical) || (n <= o && !e.vertical)) &&
                  (t.userTracking = !1),
                !t.userTracking)
              )
                return void (e.autoplay && S())
            }
            return (
              (function (r) {
                const a = s
                s = Date.now()
                const l = n.value.length - t.displayMultipleItems
                function c(e) {
                  return 0.5 - 0.25 / (e + 0.5)
                }
                function u(e, t) {
                  let n = g + e
                  ;(i = 0.6 * i + 0.4 * t),
                    y.value ||
                      ((n < 0 || n > l) &&
                        (n < 0 ? (n = -c(-n)) : n > l && (n = l + c(n - l)),
                        (i = 0))),
                    _(n)
                }
                const d = s - a || 1,
                  p = o.value
                e.vertical
                  ? u(-r.dy / p.offsetHeight, -r.ddy / d)
                  : u(-r.dx / p.offsetWidth, -r.ddx / d)
              })(c.detail),
              !1
            )
          }
        }
      })
    }),
    Ao(() => {
      a(), cancelAnimationFrame(l)
    }),
    {
      onSwiperDotClick: function (e) {
        T((t.current = e), (m = 'click'), y.value ? 1 : 0)
      },
      circularEnabled: y,
      swiperEnabled: v
    }
  )
}
const Ff = Xc({
    name: 'Swiper',
    props: {
      indicatorDots: { type: [Boolean, String], default: !1 },
      vertical: { type: [Boolean, String], default: !1 },
      autoplay: { type: [Boolean, String], default: !1 },
      circular: { type: [Boolean, String], default: !1 },
      interval: { type: [Number, String], default: 5e3 },
      duration: { type: [Number, String], default: 500 },
      current: { type: [Number, String], default: 0 },
      indicatorColor: { type: String, default: '' },
      indicatorActiveColor: { type: String, default: '' },
      previousMargin: { type: String, default: '' },
      nextMargin: { type: String, default: '' },
      currentItemId: { type: String, default: '' },
      skipHiddenItemLayout: { type: [Boolean, String], default: !1 },
      displayMultipleItems: { type: [Number, String], default: 1 },
      disableTouch: { type: [Boolean, String], default: !1 },
      navigation: { type: [Boolean, String], default: !1 },
      navigationColor: { type: String, default: '#fff' },
      navigationActiveColor: { type: String, default: 'rgba(53, 53, 53, 0.6)' }
    },
    emits: [
      'change',
      'transition',
      'animationfinish',
      'update:current',
      'update:currentItemId'
    ],
    setup(e, { slots: t, emit: n }) {
      const o = Jt(null),
        r = eu(o, n),
        i = Jt(null),
        a = Jt(null),
        s = (function (e) {
          return Vt({
            interval: mi(() => {
              const t = Number(e.interval)
              return isNaN(t) ? 5e3 : t
            }),
            duration: mi(() => {
              const t = Number(e.duration)
              return isNaN(t) ? 500 : t
            }),
            displayMultipleItems: mi(() => {
              const t = Math.round(e.displayMultipleItems)
              return isNaN(t) ? 1 : t
            }),
            current: Math.round(e.current) || 0,
            currentItemId: e.currentItemId,
            userTracking: !1
          })
        })(e),
        l = mi(() => {
          let t = {}
          return (
            (e.nextMargin || e.previousMargin) &&
              (t = e.vertical
                ? {
                    left: 0,
                    right: 0,
                    top: nc(e.previousMargin, !0),
                    bottom: nc(e.nextMargin, !0)
                  }
                : {
                    top: 0,
                    bottom: 0,
                    left: nc(e.previousMargin, !0),
                    right: nc(e.nextMargin, !0)
                  }),
            t
          )
        }),
        c = mi(() => {
          const t = Math.abs(100 / s.displayMultipleItems) + '%'
          return {
            width: e.vertical ? '100%' : t,
            height: e.vertical ? t : '100%'
          }
        })
      let u = []
      const d = [],
        p = Jt([])
      function f() {
        const e = []
        for (let t = 0; t < u.length; t++) {
          let n = u[t]
          n instanceof Element || (n = n.el)
          const o = d.find((e) => n === e.rootRef.value)
          o && e.push(Ut(o))
        }
        p.value = e
      }
      zn('addSwiperContext', function (e) {
        d.push(e), f()
      })
      zn('removeSwiperContext', function (e) {
        const t = d.indexOf(e)
        t >= 0 && (d.splice(t, 1), f())
      })
      const {
        onSwiperDotClick: h,
        circularEnabled: g,
        swiperEnabled: m
      } = Df(e, s, p, a, n, r)
      let v = () => null
      return (
        (v = qf(o, e, s, h, p, g, m)),
        () => {
          const n = t.default && t.default()
          return (
            (u = ff(n)),
            Gr(
              'uni-swiper',
              { ref: o },
              [
                Gr(
                  'div',
                  { ref: i, class: 'uni-swiper-wrapper' },
                  [
                    Gr(
                      'div',
                      { class: 'uni-swiper-slides', style: l.value },
                      [
                        Gr(
                          'div',
                          {
                            ref: a,
                            class: 'uni-swiper-slide-frame',
                            style: c.value
                          },
                          [n],
                          4
                        )
                      ],
                      4
                    ),
                    e.indicatorDots &&
                      Gr(
                        'div',
                        {
                          class: [
                            'uni-swiper-dots',
                            e.vertical
                              ? 'uni-swiper-dots-vertical'
                              : 'uni-swiper-dots-horizontal'
                          ]
                        },
                        [
                          p.value.map((t, n, o) =>
                            Gr(
                              'div',
                              {
                                onClick: () => h(n),
                                class: {
                                  'uni-swiper-dot': !0,
                                  'uni-swiper-dot-active':
                                    (n < s.current + s.displayMultipleItems &&
                                      n >= s.current) ||
                                    n <
                                      s.current +
                                        s.displayMultipleItems -
                                        o.length
                                },
                                style: {
                                  background:
                                    n === s.current
                                      ? e.indicatorActiveColor
                                      : e.indicatorColor
                                }
                              },
                              null,
                              14,
                              ['onClick']
                            )
                          )
                        ],
                        2
                      ),
                    v()
                  ],
                  512
                )
              ],
              512
            )
          )
        }
      )
    }
  }),
  qf = (e, t, n, o, r, i, a) => {
    let s = !1,
      l = !1,
      c = !1,
      u = Jt(!1)
    function d(e, n) {
      const o = e.currentTarget
      o &&
        (o.style.backgroundColor = 'over' === n ? t.navigationActiveColor : '')
    }
    Hn(() => {
      ;(s = 'auto' === t.navigation), (u.value = !0 !== t.navigation || s), y()
    }),
      Hn(() => {
        const e = r.value.length,
          t = !i.value
        ;(l = 0 === n.current && t),
          (c =
            (n.current === e - 1 && t) ||
            (t && n.current + n.displayMultipleItems >= e)),
          a.value || ((l = !0), (c = !0), s && (u.value = !0))
      })
    const p = {
      onMouseover: (e) => d(e, 'over'),
      onMouseout: (e) => d(e, 'out')
    }
    function f(e, t, a) {
      if ((e.stopPropagation(), a)) return
      const s = r.value.length
      let l = n.current
      switch (t) {
        case 'prev':
          l--, l < 0 && i.value && (l = s - 1)
          break
        case 'next':
          l++, l >= s && i.value && (l = 0)
      }
      o(l)
    }
    const h = () => ac(ic, t.navigationColor, 26)
    let g
    const m = (n) => {
        clearTimeout(g)
        const { clientX: o, clientY: r } = n,
          {
            left: i,
            right: a,
            top: s,
            bottom: l,
            width: c,
            height: d
          } = e.value.getBoundingClientRect()
        let p = !1
        if (
          ((p = t.vertical
            ? !(r - s < d / 3 || l - r < d / 3)
            : !(o - i < c / 3 || a - o < c / 3)),
          p)
        )
          return (g = setTimeout(() => {
            u.value = p
          }, 300))
        u.value = p
      },
      v = () => {
        u.value = !0
      }
    function y() {
      e.value &&
        (e.value.removeEventListener('mousemove', m),
        e.value.removeEventListener('mouseleave', v),
        s &&
          (e.value.addEventListener('mousemove', m),
          e.value.addEventListener('mouseleave', v)))
    }
    return (
      Oo(y),
      function () {
        const e = {
          'uni-swiper-navigation-hide': u.value,
          'uni-swiper-navigation-vertical': t.vertical
        }
        return t.navigation
          ? Gr(Lr, null, [
              Gr(
                'div',
                ni(
                  {
                    class: [
                      'uni-swiper-navigation uni-swiper-navigation-prev',
                      x({ 'uni-swiper-navigation-disabled': l }, e)
                    ],
                    onClick: (e) => f(e, 'prev', l)
                  },
                  p
                ),
                [h()],
                16,
                ['onClick']
              ),
              Gr(
                'div',
                ni(
                  {
                    class: [
                      'uni-swiper-navigation uni-swiper-navigation-next',
                      x({ 'uni-swiper-navigation-disabled': c }, e)
                    ],
                    onClick: (e) => f(e, 'next', c)
                  },
                  p
                ),
                [h()],
                16,
                ['onClick']
              )
            ])
          : null
      }
    )
  },
  zf = Xc({
    name: 'SwiperItem',
    props: { itemId: { type: String, default: '' } },
    setup(e, { slots: t }) {
      const n = Jt(null),
        o = {
          rootRef: n,
          getItemId: () => e.itemId,
          getBoundingClientRect: () => n.value.getBoundingClientRect(),
          updatePosition(e, t) {
            const o = t ? '0' : 100 * e + '%',
              r = t ? 100 * e + '%' : '0',
              i = n.value,
              a = `translate(${o},${r}) translateZ(0)`
            i && ((i.style.webkitTransform = a), (i.style.transform = a))
          }
        }
      return (
        Oo(() => {
          const e = Wn('addSwiperContext')
          e && e(o)
        }),
        Ao(() => {
          const e = Wn('removeSwiperContext')
          e && e(o)
        }),
        () =>
          Gr(
            'uni-swiper-item',
            {
              ref: n,
              style: { position: 'absolute', width: '100%', height: '100%' }
            },
            [t.default && t.default()],
            512
          )
      )
    }
  }),
  Wf = { ensp: ' ', emsp: ' ', nbsp: ' ' }
function Hf(e, t) {
  return e
    .replace(/\\n/g, '\n')
    .split('\n')
    .map((e) =>
      (function (e, { space: t, decode: n }) {
        if (!e) return e
        t && Wf[t] && (e = e.replace(/ /g, Wf[t]))
        if (!n) return e
        return e
          .replace(/&nbsp;/g, Wf.nbsp)
          .replace(/&ensp;/g, Wf.ensp)
          .replace(/&emsp;/g, Wf.emsp)
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&apos;/g, "'")
      })(e, t)
    )
}
const Uf = Xc({
    name: 'Text',
    props: {
      selectable: { type: [Boolean, String], default: !1 },
      space: { type: String, default: '' },
      decode: { type: [Boolean, String], default: !1 }
    },
    setup:
      (e, { slots: t }) =>
      () => {
        const n = []
        return (
          t.default &&
            t.default().forEach((t) => {
              if (8 & t.shapeFlag && t.type !== Ar) {
                const o = Hf(t.children, { space: e.space, decode: e.decode }),
                  r = o.length - 1
                o.forEach((e, t) => {
                  ;(0 !== t || e) && n.push(Qr(e)), t !== r && n.push(Gr('br'))
                })
              } else n.push(t)
            }),
          Gr(
            'uni-text',
            { selectable: !!e.selectable || null },
            [Gr('span', null, n)],
            8,
            ['selectable']
          )
        )
      }
  }),
  Yf = x({}, of, {
    placeholderClass: { type: String, default: 'input-placeholder' },
    autoHeight: { type: [Boolean, String], default: !1 },
    confirmType: {
      type: String,
      default: 'return',
      validator: (e) => Gf.concat('return').includes(e)
    }
  })
let Xf = !1
const Gf = ['done', 'go', 'next', 'search', 'send']
const Kf = Xc({
    name: 'Textarea',
    props: Yf,
    emits: ['confirm', 'linechange', ...rf],
    setup(e, { emit: t }) {
      const n = Jt(null),
        o = Jt(null),
        {
          fieldRef: r,
          state: i,
          scopedAttrsState: a,
          fixDisabledColor: s,
          trigger: l
        } = lf(e, n, t),
        c = mi(() => i.value.split('\n')),
        u = mi(() => Gf.includes(e.confirmType)),
        d = Jt(0),
        p = Jt(null)
      function f({ height: e }) {
        d.value = e
      }
      function h(e) {
        'Enter' === e.key && u.value && e.preventDefault()
      }
      function g(t) {
        if ('Enter' === t.key && u.value) {
          !(function (e) {
            l('confirm', e, { value: i.value })
          })(t)
          const n = t.target
          !e.confirmHold && n.blur()
        }
      }
      return (
        Yn(
          () => d.value,
          (t) => {
            const r = n.value,
              i = p.value,
              a = o.value
            let s = parseFloat(getComputedStyle(r).lineHeight)
            isNaN(s) && (s = i.offsetHeight)
            var c = Math.round(t / s)
            l(
              'linechange',
              {},
              {
                height: t,
                heightRpx: (750 / window.innerWidth) * t,
                lineCount: c
              }
            ),
              e.autoHeight &&
                ((r.style.height = 'auto'), (a.style.height = t + 'px'))
          }
        ),
        (function () {
          const e = '(prefers-color-scheme: dark)'
          Xf =
            0 === String(navigator.platform).indexOf('iP') &&
            0 === String(navigator.vendor).indexOf('Apple') &&
            window.matchMedia(e).media !== e
        })(),
        () => {
          let t =
            e.disabled && s
              ? Gr(
                  'textarea',
                  {
                    key: 'disabled-textarea',
                    ref: r,
                    value: i.value,
                    tabindex: '-1',
                    readonly: !!e.disabled,
                    maxlength: i.maxlength,
                    class: {
                      'uni-textarea-textarea': !0,
                      'uni-textarea-textarea-fix-margin': Xf
                    },
                    style: { overflowY: e.autoHeight ? 'hidden' : 'auto' },
                    onFocus: (e) => e.target.blur()
                  },
                  null,
                  46,
                  ['value', 'readonly', 'maxlength', 'onFocus']
                )
              : Gr(
                  'textarea',
                  {
                    key: 'textarea',
                    ref: r,
                    value: i.value,
                    disabled: !!e.disabled,
                    maxlength: i.maxlength,
                    enterkeyhint: e.confirmType,
                    inputmode: e.inputmode,
                    class: {
                      'uni-textarea-textarea': !0,
                      'uni-textarea-textarea-fix-margin': Xf
                    },
                    style: { overflowY: e.autoHeight ? 'hidden' : 'auto' },
                    onKeydown: h,
                    onKeyup: g
                  },
                  null,
                  46,
                  [
                    'value',
                    'disabled',
                    'maxlength',
                    'enterkeyhint',
                    'inputmode',
                    'onKeydown',
                    'onKeyup'
                  ]
                )
          return Gr(
            'uni-textarea',
            { ref: n },
            [
              Gr(
                'div',
                { ref: o, class: 'uni-textarea-wrapper' },
                [
                  Vo(
                    Gr(
                      'div',
                      ni(a.attrs, {
                        style: e.placeholderStyle,
                        class: ['uni-textarea-placeholder', e.placeholderClass]
                      }),
                      [e.placeholder],
                      16
                    ),
                    [[_a, !i.value.length]]
                  ),
                  Gr('div', { ref: p, class: 'uni-textarea-line' }, [' '], 512),
                  Gr('div', { class: 'uni-textarea-compute' }, [
                    c.value.map((e) => Gr('div', null, [e.trim() ? e : '.'])),
                    Gr(Cp, { initial: !0, onResize: f }, null, 8, [
                      'initial',
                      'onResize'
                    ])
                  ]),
                  'search' === e.confirmType
                    ? Gr(
                        'form',
                        {
                          action: '',
                          onSubmit: () => !1,
                          class: 'uni-input-form'
                        },
                        [t],
                        40,
                        ['onSubmit']
                      )
                    : t
                ],
                512
              )
            ],
            512
          )
        }
      )
    }
  }),
  Qf = Xc({
    name: 'View',
    props: x({}, Kc),
    setup(e, { slots: t }) {
      const { hovering: n, binding: o } = Qc(e)
      return () => {
        const r = e.hoverClass
        return r && 'none' !== r
          ? Gr(
              'uni-view',
              ni({ class: n.value ? r : '' }, o),
              [t.default && t.default()],
              16
            )
          : Gr('uni-view', null, [t.default && t.default()])
      }
    }
  })
function Jf(e, t) {
  if ((t || (t = e.id), t)) return e.$options.name.toLowerCase() + '.' + t
}
function Zf(e, t, n) {
  e &&
    El(n || dc(), e, ({ type: e, data: n }, o) => {
      t(e, n, o)
    })
}
function eh(e, t) {
  e &&
    (function (e, t) {
      ;(t = Sl(e, t)), delete Tl[t]
    })(t || dc(), e)
}
let th = 0
function nh(e, t, n, o) {
  I(t) && Co(e, t.bind(n), o)
}
function oh(e, t, n) {
  var o
  const r = e.mpType || n.$mpType
  if (
    r &&
    'component' !== r &&
    (Object.keys(e).forEach((o) => {
      if (
        (function (e, t, n = !0) {
          return !(n && !I(t)) && (xe.indexOf(e) > -1 || 0 === e.indexOf('on'))
        })(o, e[o], !1)
      ) {
        const r = e[o]
        C(r) ? r.forEach((e) => nh(o, e, n, t)) : nh(o, r, n, t)
      }
    }),
    'page' === r)
  ) {
    t.__isVisible = !0
    try {
      gc(n, 'onLoad', t.attrs.__pageQuery),
        delete t.attrs.__pageQuery,
        'preloadPage' !== (null == (o = n.$page) ? void 0 : o.openType) &&
          gc(n, 'onShow')
    } catch (i) {
      console.error(i.message + '\n' + i.stack)
    }
  }
}
function rh(e, t, n) {
  oh(e, t, n)
}
function ih(e, t, n) {
  return (e[t] = n)
}
function ah(e, ...t) {
  const n = this[e]
  return n ? n(...t) : (console.error(`method ${e} not found`), null)
}
function sh(e) {
  return function (t, n, o) {
    if (!n) throw t
    const r = e._instance
    if (!r || !r.proxy) throw t
    gc(r.proxy, 'onError', t)
  }
}
function lh(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function ch(e) {
  const t = e._context.config
  var n
  ;(t.errorHandler = Se(e, sh)),
    (n = t.optionMergeStrategies),
    xe.forEach((e) => {
      n[e] = lh
    })
  const o = t.globalProperties
  ;(o.$set = ih),
    (o.$applyOptions = rh),
    (o.$callMethod = ah),
    (function (e) {
      Te.forEach((t) => t(e))
    })(e)
}
const uh = ec('upm')
function dh() {
  return Wn(uh)
}
function ph(e) {
  const t = (function (e) {
    return Vt(
      (function (e) {
        {
          const { navigationBar: t } = e,
            { titleSize: n, titleColor: o, backgroundColor: r } = t
          ;(t.titleText = t.titleText || ''),
            (t.type = t.type || 'default'),
            (t.titleSize = n || '16px'),
            (t.titleColor = o || '#000000'),
            (t.backgroundColor = r || '#F8F8F8')
        }
        if (history.state) {
          const t = history.state.__type__
          ;('redirectTo' !== t && 'reLaunch' !== t) ||
            0 !== Th().length ||
            ((e.isEntry = !0), (e.isQuit = !0))
        }
        return e
      })(JSON.parse(JSON.stringify(hc(dl().meta, e))))
    )
  })(e)
  return zn(uh, t), t
}
function fh() {
  return dl()
}
function hh() {
  return (history.state && history.state.__id__) || 1
}
const gh = window.CSS && window.CSS.supports
function mh(e) {
  return gh && (gh(e) || gh.apply(window.CSS, e.split(':')))
}
const vh = mh('top:env(a)'),
  yh = mh('top:constant(a)'),
  _h = (() => (vh ? 'env' : yh ? 'constant' : ''))()
function bh(e) {
  let t = 0
  var n, o
  'custom' !== e.navigationBar.style &&
    ['default', 'float'].indexOf(e.navigationBar.type) > -1 &&
    (t = 44),
    Zl({
      '--window-top':
        ((o = t), _h ? `calc(${o}px + ${_h}(safe-area-inset-top))` : `${o}px`),
      '--window-bottom':
        ((n = 0),
        _h ? `calc(${n}px + ${_h}(safe-area-inset-bottom))` : `${n}px`)
    })
}
const wh = new Map()
function xh() {
  return wh
}
function Th() {
  const e = [],
    t = wh.values()
  for (const n of t) n.$.__isTabBar ? n.$.__isActive && e.push(n) : e.push(n)
  return e
}
function Sh(e, t = !0) {
  const n = wh.get(e)
  ;(n.$.__isUnload = !0),
    gc(n, 'onUnload'),
    wh.delete(e),
    t &&
      (function (e) {
        const t = Oh.get(e)
        t && (Oh.delete(e), Ih.pruneCacheEntry(t))
      })(e)
}
let Eh = hh()
function Ch(e) {
  const t = dh()
  let n = e.fullPath
  return (
    e.meta.isEntry &&
      -1 === n.indexOf(e.meta.route) &&
      (n = '/' + e.meta.route + n.replace('/', '')),
    (function (e, t, n, o, r, i) {
      const { id: a, route: s } = o,
        l = $e(o.navigationBar, __uniConfig.themeConfig, i).titleColor
      return {
        id: a,
        path: ae(s),
        route: s,
        fullPath: t,
        options: n,
        meta: o,
        openType: e,
        eventChannel: r,
        statusBarStyle: '#ffffff' === l ? 'light' : 'dark'
      }
    })('navigateTo', n, {}, t)
  )
}
function kh(e) {
  const t = Ch(e.$route)
  !(function (e, t) {
    ;(e.route = t.route),
      (e.$vm = e),
      (e.$page = t),
      (e.$mpType = 'page'),
      t.meta.isTabBar && ((e.$.__isTabBar = !0), (e.$.__isActive = !0))
  })(e, t),
    wh.set($h(t.path, t.id), e)
}
function $h(e, t) {
  return e + '$$' + t
}
const Oh = new Map(),
  Ih = {
    get: (e) => Oh.get(e),
    set(e, t) {
      !(function (e) {
        const t = parseInt(e.split('$$')[1])
        if (!t) return
        Ih.forEach((e, n) => {
          const o = parseInt(n.split('$$')[1])
          o &&
            o > t &&
            (Ih.delete(n),
            Ih.pruneCacheEntry(e),
            xn(() => {
              wh.forEach((e, t) => {
                e.$.isUnmounted && wh.delete(t)
              })
            }))
        })
      })(e),
        Oh.set(e, t)
    },
    delete(e) {
      Oh.get(e) && Oh.delete(e)
    },
    forEach(e) {
      Oh.forEach(e)
    }
  }
function Lh(e, t) {
  !(function (e) {
    const t = Ah(e),
      { body: n } = document
    Rh && n.removeAttribute(Rh), t && n.setAttribute(t, ''), (Rh = t)
  })(e),
    bh(t),
    (function (e) {
      {
        const t = 'nvue-dir-' + __uniConfig.nvue['flex-direction']
        e.isNVue
          ? (document.body.setAttribute('nvue', ''),
            document.body.setAttribute(t, ''))
          : (document.body.removeAttribute('nvue'),
            document.body.removeAttribute(t))
      }
    })(t),
    (function (e, t) {
      document.removeEventListener('touchmove', mc),
        Mh && document.removeEventListener('scroll', Mh)
      if (t.disableScroll) return document.addEventListener('touchmove', mc)
      const { onPageScroll: n, onReachBottom: o } = e,
        r = 'transparent' === t.navigationBar.type
      if (!n && !o && !r) return
      const i = {},
        a = e.proxy.$page.id
      ;(n || r) &&
        (i.onPageScroll = (function (e, t, n) {
          return (o) => {
            t && cm.publishHandler('onPageScroll', { scrollTop: o }, e),
              n && cm.emit(e + '.onPageScroll', { scrollTop: o })
          }
        })(a, n, r))
      o &&
        ((i.onReachBottomDistance = t.onReachBottomDistance || 50),
        (i.onReachBottom = () => cm.publishHandler('onReachBottom', {}, a)))
      ;(Mh = _c(i)),
        requestAnimationFrame(() => document.addEventListener('scroll', Mh))
    })(e, t)
}
function Ph(e) {
  const t = Ah(e)
  t &&
    (function (e) {
      const t = document.querySelector('uni-page-body')
      t && t.setAttribute(e, '')
    })(t)
}
function Ah(e) {
  return e.type.__scopeId
}
let Rh, Mh
function Bh(e) {
  const t = cl({
    history: Vh(),
    strict: !!__uniConfig.router.strict,
    routes: __uniRoutes,
    scrollBehavior: Nh
  })
  ;(e.router = t), e.use(t)
}
const Nh = (e, t, n) => {
  if (n) return n
}
function Vh() {
  let { routerBase: e } = __uniConfig.router
  '/' === e && (e = '')
  const t =
    ((n = e),
    (n = location.host
      ? n || location.pathname + location.search
      : '').includes('#') || (n += '#'),
    is(n))
  var n
  return (
    t.listen((e, t, n) => {
      'back' === n.direction &&
        (function (e = 1) {
          const t = Th(),
            n = t.length - 1,
            o = n - e
          for (let r = n; r > o; r--) {
            const e = t[r].$page
            Sh($h(e.path, e.id), !1)
          }
        })(Math.abs(n.delta))
    }),
    t
  )
}
const jh = {
  install(e) {
    ch(e),
      Pc(e),
      zc(e),
      e.config.warnHandler || (e.config.warnHandler = Dh),
      Bh(e)
  }
}
function Dh(e, t, n) {
  if (t) {
    if ('PageMetaHead' === t.$.type.name) return
    const e = t.$.parent
    if (e && 'PageMeta' === e.type.name) return
  }
  const o = [`[Vue warn]: ${e}`]
  n.length && o.push('\n', n), console.warn(...o)
}
const Fh = { class: 'uni-async-loading' },
  qh = Gr('i', { class: 'uni-loading' }, null, -1),
  zh = Gc({ name: 'AsyncLoading', render: () => (Nr(), qr('div', Fh, [qh])) })
function Wh() {
  window.location.reload()
}
const Hh = Gc({
  name: 'AsyncError',
  setup() {
    ml()
    const { t: e } = hl()
    return () =>
      Gr(
        'div',
        { class: 'uni-async-error', onClick: Wh },
        [e('uni.async.error')],
        8,
        ['onClick']
      )
  }
})
let Uh
function Yh() {
  return Uh
}
function Xh(e) {
  ;(Uh = e),
    Object.defineProperty(Uh.$.ctx, '$children', {
      get: () => Th().map((e) => e.$vm)
    })
  const t = Uh.$.appContext.app
  t.component(zh.name) || t.component(zh.name, zh),
    t.component(Hh.name) || t.component(Hh.name, Hh),
    (function (e) {
      ;(e.$vm = e), (e.$mpType = 'app')
      const t = Jt(hl().getLocale())
      Object.defineProperty(e, '$locale', {
        get: () => t.value,
        set(e) {
          t.value = e
        }
      })
    })(Uh),
    (function (e, t) {
      const n = e.$options || {}
      ;(n.globalData = x(n.globalData || {}, t)),
        Object.defineProperty(e, 'globalData', {
          get: () => n.globalData,
          set(e) {
            n.globalData = e
          }
        })
    })(Uh),
    Fc(),
    Nl()
}
function Gh(e, { clone: t, init: n, setup: o, before: r }) {
  t && (e = x({}, e)), r && r(e)
  const i = e.setup
  return (
    (e.setup = (e, t) => {
      const r = si()
      n(r.proxy)
      const a = o(r)
      if (i) return i(a || e, t)
    }),
    e
  )
}
function Kh(e, t) {
  return e && (e.__esModule || 'Module' === e[Symbol.toStringTag])
    ? Gh(e.default, t)
    : Gh(e, t)
}
function Qh(e) {
  return Kh(e, {
    clone: !0,
    init: kh,
    setup(e) {
      e.$pageInstance = e
      const t = fh(),
        n = ge(t.query)
      ;(e.attrs.__pageQuery = n), (e.proxy.$page.options = n)
      const o = dh()
      var r, i, a
      return (
        $o(() => {
          Lh(e, o)
        }),
        Oo(() => {
          Ph(e)
          const { onReady: n } = e
          n && X(n), tg(t)
        }),
        _o(
          () => {
            if (!e.__isVisible) {
              Lh(e, o), (e.__isVisible = !0)
              const { onShow: n } = e
              n && X(n),
                xn(() => {
                  tg(t)
                })
            }
          },
          'ba',
          r
        ),
        (function (e, t) {
          _o(e, 'bda', t)
        })(() => {
          if (e.__isVisible && !e.__isUnload) {
            e.__isVisible = !1
            const { onHide: t } = e
            t && X(t)
          }
        }),
        (i = o.id),
        cm.subscribe(Sl(i, 'invokeViewApi'), a ? a(Cl) : Cl),
        Po(() => {
          !(function (e) {
            cm.unsubscribe(Sl(e, 'invokeViewApi')),
              Object.keys(Tl).forEach((t) => {
                0 === t.indexOf(e + '.') && delete Tl[t]
              })
          })(o.id)
        }),
        n
      )
    }
  })
}
function Jh() {
  const {
      windowWidth: e,
      windowHeight: t,
      screenWidth: n,
      screenHeight: o
    } = fg(),
    r = 90 === Math.abs(Number(window.orientation)) ? 'landscape' : 'portrait'
  um.emit('onResize', {
    deviceOrientation: r,
    size: { windowWidth: e, windowHeight: t, screenWidth: n, screenHeight: o }
  })
}
function Zh(e) {
  N(e.data) &&
    'WEB_INVOKE_APPSERVICE' === e.data.type &&
    um.emit('onWebInvokeAppService', e.data.data, e.data.pageId)
}
function eg() {
  const { emit: e } = um
  'visible' === document.visibilityState
    ? e('onAppEnterForeground', x({}, Ep))
    : e('onAppEnterBackground')
}
function tg(e) {
  const { tabBarText: t, tabBarIndex: n, route: o } = e.meta
  t && gc('onTabItemTap', { index: n, text: t, pagePath: o })
}
const ng =
  (navigator.cookieEnabled && (window.localStorage || window.sessionStorage)) ||
  {}
let og
function rg() {
  if (((og = og || ng.__DC_STAT_UUID), !og)) {
    og = Date.now() + '' + Math.floor(1e7 * Math.random())
    try {
      ng.__DC_STAT_UUID = og
    } catch (e) {}
  }
  return og
}
function ig() {
  if (!0 !== __uniConfig.darkmode)
    return L(__uniConfig.darkmode) ? __uniConfig.darkmode : 'light'
  try {
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
  } catch (e) {
    return 'light'
  }
}
function ag() {
  let e,
    t = '0',
    n = '',
    o = 'phone'
  const r = navigator.language
  if (du) {
    e = 'iOS'
    const o = cu.match(/OS\s([\w_]+)\slike/)
    o && (t = o[1].replace(/_/g, '.'))
    const r = cu.match(/\(([a-zA-Z]+);/)
    r && (n = r[1])
  } else if (uu) {
    e = 'Android'
    const o = cu.match(/Android[\s/]([\w\.]+)[;\s]/)
    o && (t = o[1])
    const r = cu.match(/\((.+?)\)/),
      i = r ? r[1].split(';') : cu.split(' '),
      a = [
        /\bAndroid\b/i,
        /\bLinux\b/i,
        /\bU\b/i,
        /^\s?[a-z][a-z]$/i,
        /^\s?[a-z][a-z]-[a-z][a-z]$/i,
        /\bwv\b/i,
        /\/[\d\.,]+$/,
        /^\s?[\d\.,]+$/,
        /\bBrowser\b/i,
        /\bMobile\b/i
      ]
    for (let e = 0; e < i.length; e++) {
      const t = i[e]
      if (t.indexOf('Build') > 0) {
        n = t.split('Build')[0].trim()
        break
      }
      let o
      for (let e = 0; e < a.length; e++)
        if (a[e].test(t)) {
          o = !0
          break
        }
      if (!o) {
        n = t.trim()
        break
      }
    }
  } else if (gu)
    (n = 'iPad'),
      (e = 'iOS'),
      (o = 'pad'),
      (t = I(window.BigInt) ? '14.0' : '13.0')
  else if (pu || fu || hu) {
    ;(n = 'PC'), (e = 'PC'), (o = 'pc'), (t = '0')
    let r = cu.match(/\((.+?)\)/)[1]
    if (pu) {
      switch (((e = 'Windows'), pu[1])) {
        case '5.1':
          t = 'XP'
          break
        case '6.0':
          t = 'Vista'
          break
        case '6.1':
          t = '7'
          break
        case '6.2':
          t = '8'
          break
        case '6.3':
          t = '8.1'
          break
        case '10.0':
          t = '10'
      }
      const n = r && r.match(/[Win|WOW]([\d]+)/)
      n && (t += ` x${n[1]}`)
    } else if (fu) {
      e = 'macOS'
      const n = (r && r.match(/Mac OS X (.+)/)) || ''
      t &&
        ((t = n[1].replace(/_/g, '.')),
        -1 !== t.indexOf(';') && (t = t.split(';')[0]))
    } else if (hu) {
      e = 'Linux'
      const n = (r && r.match(/Linux (.*)/)) || ''
      n && ((t = n[1]), -1 !== t.indexOf(';') && (t = t.split(';')[0]))
    }
  } else (e = 'Other'), (t = '0'), (o = 'unknown')
  const i = `${e} ${t}`,
    a = e.toLocaleLowerCase()
  let s = '',
    l = String(
      (function () {
        const e = navigator.userAgent,
          t = e.indexOf('compatible') > -1 && e.indexOf('MSIE') > -1,
          n = e.indexOf('Edge') > -1 && !t,
          o = e.indexOf('Trident') > -1 && e.indexOf('rv:11.0') > -1
        if (t) {
          new RegExp('MSIE (\\d+\\.\\d+);').test(e)
          const t = parseFloat(RegExp.$1)
          return t > 6 ? t : 6
        }
        return n ? -1 : o ? 11 : -1
      })()
    )
  if ('-1' !== l) s = 'IE'
  else {
    const e = ['Version', 'Firefox', 'Chrome', 'Edge{0,1}'],
      t = ['Safari', 'Firefox', 'Chrome', 'Edge']
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        r = new RegExp(`(${o})/(\\S*)\\b`)
      r.test(cu) && ((s = t[n]), (l = cu.match(r)[2]))
    }
  }
  let c = 'portrait'
  const u =
    void 0 === window.screen.orientation
      ? window.orientation
      : window.screen.orientation.angle
  return (
    (c = 90 === Math.abs(u) ? 'landscape' : 'portrait'),
    {
      deviceBrand: void 0,
      brand: void 0,
      deviceModel: n,
      deviceOrientation: c,
      model: n,
      system: i,
      platform: a,
      browserName: s.toLocaleLowerCase(),
      browserVersion: l,
      language: r,
      deviceType: o,
      ua: cu,
      osname: e,
      osversion: t,
      theme: ig()
    }
  )
}
const sg = Zu(0, () => {
  const e = window.devicePixelRatio,
    t = mu(),
    n = vu(t),
    o = yu(t, n),
    r = (function (e, t) {
      return e
        ? Math[t ? 'min' : 'max'](screen.height, screen.width)
        : screen.height
    })(t, n),
    i = _u(o)
  let a = window.innerHeight
  const s = Xl.top,
    l = {
      left: Xl.left,
      right: i - Xl.right,
      top: Xl.top,
      bottom: a - Xl.bottom,
      width: i - Xl.left - Xl.right,
      height: a - Xl.top - Xl.bottom
    },
    { top: c, bottom: u } = Jl()
  return (
    (a -= c),
    (a -= u),
    {
      windowTop: c,
      windowBottom: u,
      windowWidth: i,
      windowHeight: a,
      pixelRatio: e,
      screenWidth: o,
      screenHeight: r,
      statusBarHeight: s,
      safeArea: l,
      safeAreaInsets: {
        top: Xl.top,
        right: Xl.right,
        bottom: Xl.bottom,
        left: Xl.left
      },
      screenTop: r - a
    }
  )
})
let lg,
  cg = !0
function ug() {
  cg && (lg = ag())
}
const dg = Zu(0, () => {
    ug()
    const {
      deviceBrand: e,
      deviceModel: t,
      brand: n,
      model: o,
      platform: r,
      system: i,
      deviceOrientation: a,
      deviceType: s
    } = lg
    return {
      brand: n,
      deviceBrand: e,
      deviceModel: t,
      devicePixelRatio: window.devicePixelRatio,
      deviceId: rg(),
      deviceOrientation: a,
      deviceType: s,
      model: o,
      platform: r,
      system: i
    }
  }),
  pg = Zu(0, () => {
    ug()
    const { theme: e, language: t, browserName: n, browserVersion: o } = lg
    return {
      appId: __uniConfig.appId,
      appName: __uniConfig.appName,
      appVersion: __uniConfig.appVersion,
      appVersionCode: __uniConfig.appVersionCode,
      appLanguage: Gd ? Gd() : t,
      enableDebug: !1,
      hostSDKVersion: void 0,
      hostPackageName: void 0,
      hostFontSizeSetting: void 0,
      hostName: n,
      hostVersion: o,
      hostTheme: e,
      hostLanguage: t,
      language: t,
      SDKVersion: '',
      theme: e,
      version: ''
    }
  }),
  fg = Zu(0, () => {
    ;(cg = !0), ug(), (cg = !1)
    const e = sg(),
      t = dg(),
      n = pg()
    cg = !0
    const {
        ua: o,
        browserName: r,
        browserVersion: i,
        osname: a,
        osversion: s
      } = lg,
      l = x(e, t, n, {
        ua: o,
        browserName: r,
        browserVersion: i,
        uniPlatform: 'web',
        uniCompileVersion: __uniConfig.compilerVersion,
        uniRuntimeVersion: __uniConfig.compilerVersion,
        fontSizeSetting: void 0,
        osName: a.toLocaleLowerCase(),
        osVersion: s,
        osLanguage: void 0,
        osTheme: void 0
      })
    return (
      delete l.screenTop,
      delete l.enableDebug,
      __uniConfig.darkmode || delete l.theme,
      (function (e) {
        let t = {}
        return (
          N(e) &&
            Object.keys(e)
              .sort()
              .forEach((n) => {
                const o = n
                t[o] = e[o]
              }),
          Object.keys(t) ? t : e
        )
      })(l)
    )
  })
const hg = ed(
  'setClipboardData',
  (e, t) => {
    return (
      (n = void 0),
      (o = [e, t]),
      (r = function* ({ data: e }, { resolve: t, reject: n }) {
        try {
          yield navigator.clipboard.writeText(e), t()
        } catch (o) {
          !(function (e, t, n) {
            const o = document.getElementById('#clipboard')
            o && o.remove()
            const r = document.createElement('textarea')
            ;(r.id = '#clipboard'),
              (r.style.position = 'fixed'),
              (r.style.top = '-9999px'),
              (r.style.zIndex = '-9999'),
              document.body.appendChild(r),
              (r.value = e),
              r.select(),
              r.setSelectionRange(0, r.value.length)
            const i = document.execCommand('Copy', !1)
            r.blur(), i ? t() : n()
          })(e, t, n)
        }
      }),
      new Promise((e, t) => {
        var i = (e) => {
            try {
              s(r.next(e))
            } catch (n) {
              t(n)
            }
          },
          a = (e) => {
            try {
              s(r.throw(e))
            } catch (n) {
              t(n)
            }
          },
          s = (t) => (t.done ? e(t.value) : Promise.resolve(t.value).then(i, a))
        s((r = r.apply(n, o)).next())
      })
    )
    var n, o, r
  },
  0,
  Jd
)
const gg = Zu(0, (e, t) => {
  const n = typeof t,
    o = 'string' === n ? t : JSON.stringify({ type: n, data: t })
  localStorage.setItem(e, o)
})
function mg(e) {
  const t = localStorage && localStorage.getItem(e)
  if (!L(t)) throw new Error('data not found')
  let n = t
  try {
    const e = (function (e) {
      const t = ['object', 'string', 'number', 'boolean', 'undefined']
      try {
        const n = L(e) ? JSON.parse(e) : e,
          o = n.type
        if (t.indexOf(o) >= 0) {
          const e = Object.keys(n)
          if (2 === e.length && 'data' in n) {
            if (typeof n.data === o) return n.data
            if (
              'object' === o &&
              /^\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{3}Z$/.test(n.data)
            )
              return new Date(n.data)
          } else if (1 === e.length) return ''
        }
      } catch (n) {}
    })(JSON.parse(t))
    void 0 !== e && (n = e)
  } catch (o) {}
  return n
}
const vg = Zu(0, (e) => {
    try {
      return mg(e)
    } catch (t) {
      return ''
    }
  }),
  yg = ed(
    'getFileInfo',
    ({ filePath: e }, { resolve: t, reject: n }) => {
      wp(e)
        .then((e) => {
          t({ size: e.size })
        })
        .catch((e) => {
          n(String(e))
        })
    },
    0,
    Zd
  )
const _g = ed(
    'getImageInfo',
    ({ src: e }, { resolve: t, reject: n }) => {
      const o = new Image()
      ;(o.onload = function () {
        t({
          width: o.naturalWidth,
          height: o.naturalHeight,
          path:
            0 === e.indexOf('/')
              ? window.location.protocol + '//' + window.location.host + e
              : e
        })
      }),
        (o.onerror = function () {
          n()
        }),
        (o.src = e)
    },
    0,
    np
  ),
  bg = {
    image: {
      jpg: 'jpeg',
      jpe: 'jpeg',
      pbm: 'x-portable-bitmap',
      pgm: 'x-portable-graymap',
      pnm: 'x-portable-anymap',
      ppm: 'x-portable-pixmap',
      psd: 'vnd.adobe.photoshop',
      pic: 'x-pict',
      rgb: 'x-rgb',
      svg: 'svg+xml',
      svgz: 'svg+xml',
      tif: 'tiff',
      xif: 'vnd.xiff',
      wbmp: 'vnd.wap.wbmp',
      wdp: 'vnd.ms-photo',
      xbm: 'x-xbitmap',
      ico: 'x-icon'
    },
    video: {
      '3g2': '3gpp2',
      '3gp': '3gpp',
      avi: 'x-msvideo',
      f4v: 'x-f4v',
      flv: 'x-flv',
      jpgm: 'jpm',
      jpgv: 'jpeg',
      m1v: 'mpeg',
      m2v: 'mpeg',
      mpe: 'mpeg',
      mpg: 'mpeg',
      mpg4: 'mpeg',
      m4v: 'x-m4v',
      mkv: 'x-matroska',
      mov: 'quicktime',
      qt: 'quicktime',
      movie: 'x-sgi-movie',
      mp4v: 'mp4',
      ogv: 'ogg',
      smv: 'x-smv',
      wm: 'x-ms-wm',
      wmv: 'x-ms-wmv',
      wmx: 'x-ms-wmx',
      wvx: 'x-ms-wvx'
    }
  }
function wg({ count: e, sourceType: t, type: n, extension: o }) {
  const r = document.createElement('input')
  return (
    (r.type = 'file'),
    (function (e, t) {
      for (const n in t) e.style[n] = t[n]
    })(r, {
      position: 'absolute',
      visibility: 'hidden',
      zIndex: '-999',
      width: '0',
      height: '0',
      top: '0',
      left: '0'
    }),
    (r.accept = o
      .map((e) => {
        if ('all' !== n) {
          const t = e.replace('.', '')
          return `${n}/${bg[n][t] || t}`
        }
        return (function () {
          const e = window.navigator.userAgent
            .toLowerCase()
            .match(/MicroMessenger/i)
          return !(!e || 'micromessenger' !== e[0])
        })()
          ? '.'
          : 0 === e.indexOf('.')
            ? e
            : `.${e}`
      })
      .join(',')),
    e && e > 1 && (r.multiple = !0),
    'all' !== n &&
      t instanceof Array &&
      1 === t.length &&
      'camera' === t[0] &&
      r.setAttribute('capture', 'camera'),
    r
  )
}
Qp()
let xg = null
const Tg = ed(
    'chooseImage',
    ({ count: e, sourceType: t, extension: n }, { resolve: o, reject: r }) => {
      _l()
      const { t: i } = hl()
      xg && (document.body.removeChild(xg), (xg = null)),
        (xg = wg({ count: e, sourceType: t, extension: n, type: 'image' })),
        document.body.appendChild(xg),
        xg.addEventListener('change', function (t) {
          const n = t.target,
            r = []
          if (n && n.files) {
            const t = n.files.length
            for (let o = 0; o < t; o++) {
              const t = n.files[o]
              let i
              Object.defineProperty(t, 'path', {
                get: () => ((i = i || xp(t)), i)
              }),
                o < e && r.push(t)
            }
          }
          o({
            get tempFilePaths() {
              return r.map(({ path: e }) => e)
            },
            tempFiles: r
          })
        }),
        xg.click(),
        Jp() || console.warn(i('uni.chooseFile.notUserActivation'))
    },
    0,
    ep
  ),
  Sg = { esc: ['Esc', 'Escape'], enter: ['Enter'] },
  Eg = Object.keys(Sg)
function Cg(e, t, n) {
  return (
    (t.onClose = (...e) => ((t.visible = !1), n.apply(null, e))),
    Ta(so({ setup: () => () => (Nr(), qr(e, t, null, 16)) }))
  )
}
function kg(e) {
  let t = document.getElementById(e)
  return (
    t ||
      ((t = document.createElement('div')),
      (t.id = e),
      document.body.append(t)),
    t
  )
}
function $g(e, { onEsc: t, onEnter: n }) {
  const o = Jt(e.visible),
    { key: r, disable: i } = (function () {
      const e = Jt(''),
        t = Jt(!1),
        n = (n) => {
          if (t.value) return
          const o = Eg.find((e) => -1 !== Sg[e].indexOf(n.key))
          o && (e.value = o), xn(() => (e.value = ''))
        }
      return (
        Oo(() => {
          document.addEventListener('keyup', n)
        }),
        Po(() => {
          document.removeEventListener('keyup', n)
        }),
        { key: e, disable: t }
      )
    })()
  return (
    Yn(
      () => e.visible,
      (e) => (o.value = e)
    ),
    Yn(
      () => o.value,
      (e) => (i.value = !e)
    ),
    Hn(() => {
      const { value: e } = r
      'esc' === e ? t && t() : 'enter' === e && n && n()
    }),
    o
  )
}
let Og = 0,
  Ig = ''
function Lg(e) {
  let t = Og
  ;(Og += e ? 1 : -1),
    (Og = Math.max(0, Og)),
    Og > 0
      ? 0 === t &&
        ((Ig = document.body.style.overflow),
        (document.body.style.overflow = 'hidden'))
      : ((document.body.style.overflow = Ig), (Ig = ''))
}
const Pg = Gc({
  name: 'ImageView',
  props: { src: { type: String, default: '' } },
  setup(e) {
    const t = Vt({ direction: 'none' })
    let n = 1,
      o = 0,
      r = 0,
      i = 0,
      a = 0
    function s({ detail: e }) {
      n = e.scale
    }
    function l(e) {
      const t = e.target.getBoundingClientRect()
      ;(o = t.width), (r = t.height)
    }
    function c(e) {
      const t = e.target.getBoundingClientRect()
      ;(i = t.width), (a = t.height), d(e)
    }
    function u(e) {
      const s = n * o > i,
        l = n * r > a
      ;(t.direction =
        s && l ? 'all' : s ? 'horizontal' : l ? 'vertical' : 'none'),
        d(e)
    }
    function d(e) {
      ;('all' !== t.direction && 'horizontal' !== t.direction) ||
        e.stopPropagation()
    }
    return () => {
      const n = {
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%'
      }
      return Gr(
        hf,
        {
          style: n,
          onTouchstart: Zc(c),
          onTouchmove: Zc(d),
          onTouchend: Zc(u)
        },
        {
          default: () => [
            Gr(
              kf,
              {
                style: n,
                direction: t.direction,
                inertia: !0,
                scale: !0,
                'scale-min': '1',
                'scale-max': '4',
                onScale: s
              },
              {
                default: () => [
                  Gr(
                    'img',
                    {
                      src: e.src,
                      style: {
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxHeight: '100%',
                        maxWidth: '100%'
                      },
                      onLoad: l
                    },
                    null,
                    40,
                    ['src', 'onLoad']
                  )
                ]
              },
              8,
              ['style', 'direction', 'inertia', 'scale', 'onScale']
            )
          ]
        },
        8,
        ['style', 'onTouchstart', 'onTouchmove', 'onTouchend']
      )
    }
  }
})
function Ag(e) {
  let t = 'number' == typeof e.current ? e.current : e.urls.indexOf(e.current)
  return (t = t < 0 ? 0 : t), t
}
const Rg = Gc({
  name: 'ImagePreview',
  props: {
    urls: { type: Array, default: () => [] },
    current: { type: [Number, String], default: 0 }
  },
  emits: ['close'],
  setup(e, { emit: t }) {
    Oo(() => Lg(!0)), Ao(() => Lg(!1))
    const n = Jt(null),
      o = Jt(Ag(e))
    let r
    function i() {
      r ||
        xn(() => {
          t('close')
        })
    }
    function a(e) {
      o.value = e.detail.current
    }
    Yn(
      () => e.current,
      () => (o.value = Ag(e))
    ),
      Oo(() => {
        const e = n.value
        let t = 0,
          o = 0
        e.addEventListener('mousedown', (e) => {
          ;(r = !1), (t = e.clientX), (o = e.clientY)
        }),
          e.addEventListener('mouseup', (e) => {
            ;(Math.abs(e.clientX - t) > 20 || Math.abs(e.clientY - o) > 20) &&
              (r = !0)
          })
      })
    const s = {
      position: 'absolute',
      'box-sizing': 'border-box',
      top: '0',
      right: '0',
      width: '60px',
      height: '44px',
      padding: '6px',
      'line-height': '32px',
      'font-size': '26px',
      color: 'white',
      'text-align': 'center',
      cursor: 'pointer'
    }
    return () => {
      let t
      return Gr(
        'div',
        {
          ref: n,
          style: {
            display: 'block',
            position: 'fixed',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            zIndex: 999,
            background: 'rgba(0,0,0,0.8)'
          },
          onClick: i
        },
        [
          Gr(
            Ff,
            {
              navigation: 'auto',
              current: o.value,
              onChange: a,
              'indicator-dots': !1,
              autoplay: !1,
              style: {
                position: 'absolute',
                left: '0',
                top: '0',
                width: '100%',
                height: '100%'
              }
            },
            ((r = t =
              e.urls.map((e) =>
                Gr(zf, null, {
                  default: () => [Gr(Pg, { src: e }, null, 8, ['src'])]
                })
              )),
            'function' == typeof r ||
            ('[object Object]' === Object.prototype.toString.call(r) && !zr(r))
              ? t
              : { default: () => [t], _: 1 }),
            8,
            ['current', 'onChange']
          ),
          Gr(
            'div',
            { style: s },
            [
              ac(
                'M17.25 16.156l7.375-7.313q0.281-0.281 0.281-0.641t-0.281-0.641q-0.25-0.25-0.625-0.25t-0.625 0.25l-7.375 7.344-7.313-7.344q-0.25-0.25-0.625-0.25t-0.625 0.25q-0.281 0.25-0.281 0.625t0.281 0.625l7.313 7.344-7.375 7.344q-0.281 0.25-0.281 0.625t0.281 0.625q0.125 0.125 0.281 0.188t0.344 0.063q0.156 0 0.328-0.063t0.297-0.188l7.375-7.344 7.375 7.406q0.125 0.156 0.297 0.219t0.328 0.063q0.188 0 0.344-0.078t0.281-0.203q0.281-0.25 0.281-0.609t-0.281-0.641l-7.375-7.406z',
                '#ffffff',
                26
              )
            ],
            4
          )
        ],
        8,
        ['onClick']
      )
      var r
    }
  }
})
let Mg,
  Bg = null
const Ng = () => {
    ;(Bg = null),
      xn(() => {
        null == Mg || Mg.unmount(), (Mg = null)
      })
  },
  Vg = ed(
    'previewImage',
    (e, { resolve: t }) => {
      Bg
        ? x(Bg, e)
        : ((Bg = Vt(e)),
          xn(() => {
            ;(Mg = Cg(Rg, Bg, Ng)), Mg.mount(kg('u-a-p'))
          })),
        t()
    },
    0,
    op
  )
let jg = null
const Dg = ed(
    'chooseVideo',
    ({ sourceType: e, extension: t }, { resolve: n, reject: o }) => {
      _l()
      const { t: r } = hl()
      jg && (document.body.removeChild(jg), (jg = null)),
        (jg = wg({ sourceType: e, extension: t, type: 'video' })),
        document.body.appendChild(jg),
        jg.addEventListener('change', function (e) {
          const t = e.target.files[0]
          let o = ''
          const r = {
            tempFilePath: o,
            tempFile: t,
            size: t.size,
            duration: 0,
            width: 0,
            height: 0,
            name: t.name
          }
          Object.defineProperty(r, 'tempFilePath', {
            get() {
              return (o = o || xp(this.tempFile)), o
            }
          })
          const i = document.createElement('video')
          if (void 0 !== i.onloadedmetadata) {
            const e = xp(t)
            ;(i.onloadedmetadata = function () {
              Tp(e),
                n(
                  x(r, {
                    duration: i.duration || 0,
                    width: i.videoWidth || 0,
                    height: i.videoHeight || 0
                  })
                )
            }),
              setTimeout(() => {
                ;(i.onloadedmetadata = null), Tp(e), n(r)
              }, 300),
              (i.src = e)
          } else n(r)
        }),
        jg.click(),
        Jp() || console.warn(r('uni.chooseFile.notUserActivation'))
    },
    0,
    tp
  ),
  Fg = ed(
    'navigateBack',
    (e, { resolve: t, reject: n }) => {
      let o = !0
      return (
        !0 === gc('onBackPress', { from: e.from || 'navigateBack' }) &&
          (o = !1),
        o ? (Yh().$router.go(-e.delta), t()) : n('onBackPress')
      )
    },
    0,
    lp
  )
function qg(
  { type: e, url: t, tabBarText: n, events: o, isAutomatedTesting: r },
  i
) {
  const a = Yh().$router,
    { path: s, query: l } = (function (e) {
      const [t, n] = e.split('?', 2)
      return { path: t, query: ve(n || '') }
    })(t)
  return new Promise((t, c) => {
    const u = (function (e, t) {
      return { __id__: t || ++Eh, __type__: e }
    })(e, i)
    a['navigateTo' === e ? 'push' : 'replace']({
      path: s,
      query: l,
      state: u,
      force: !0
    }).then((i) => {
      if (ps(i)) return c(i.message)
      if (
        ('switchTab' === e && (a.currentRoute.value.meta.tabBarText = n),
        'navigateTo' === e)
      ) {
        const e = a.currentRoute.value.meta
        return (
          e.eventChannel
            ? o &&
              (Object.keys(o).forEach((t) => {
                e.eventChannel._addListener(t, 'on', o[t])
              }),
              e.eventChannel._clearCache())
            : (e.eventChannel = new _e(u.__id__, o)),
          t(r ? { __id__: u.__id__ } : { eventChannel: e.eventChannel })
        )
      }
      return r ? t({ __id__: u.__id__ }) : t()
    })
  })
}
const zg = ed(
  'navigateTo',
  ({ url: e, events: t, isAutomatedTesting: n }, { resolve: o, reject: r }) =>
    qg({ type: 'navigateTo', url: e, events: t, isAutomatedTesting: n })
      .then(o)
      .catch(r),
  0,
  ip
)
const Wg = ed(
  'redirectTo',
  ({ url: e, isAutomatedTesting: t }, { resolve: n, reject: o }) => (
    (function () {
      const e = cc()
      if (!e) return
      const t = e.$page
      Sh($h(t.path, t.id))
    })(),
    qg({ type: 'redirectTo', url: e, isAutomatedTesting: t }).then(n).catch(o)
  ),
  0,
  ap
)
const Hg = ed(
  'reLaunch',
  ({ url: e, isAutomatedTesting: t }, { resolve: n, reject: o }) => (
    (function () {
      const e = xh().keys()
      for (const t of e) Sh(t)
    })(),
    qg({ type: 'reLaunch', url: e, isAutomatedTesting: t }).then(n).catch(o)
  ),
  0,
  sp
)
function Ug(e) {
  __uniConfig.darkmode && um.on('onThemeChange', e)
}
function Yg(e) {
  let t = {}
  return (
    __uniConfig.darkmode && (t = $e(e, __uniConfig.themeConfig, ig())),
    __uniConfig.darkmode ? t : e
  )
}
const Xg = {
    title: { type: String, default: '' },
    icon: { default: 'success', validator: (e) => -1 !== gp.indexOf(e) },
    image: { type: String, default: '' },
    duration: { type: Number, default: 1500 },
    mask: { type: Boolean, default: !1 },
    visible: { type: Boolean }
  },
  Gg = { light: '#fff', dark: 'rgba(255,255,255,0.9)' },
  Kg = (e) => Gg[e],
  Qg = so({
    name: 'Toast',
    props: Xg,
    setup(e) {
      vl(), yl()
      const { Icon: t } = (function (e) {
          const t = Jt(Kg(ig())),
            n = ({ theme: e }) => (t.value = Kg(e))
          Hn(() => {
            var t
            e.visible ? Ug(n) : ((t = n), um.off('onThemeChange', t))
          })
          return {
            Icon: mi(() => {
              switch (e.icon) {
                case 'success':
                  return Gr(ac(oc, t.value, 38), { class: 'uni-toast__icon' })
                case 'error':
                  return Gr(ac(rc, t.value, 38), { class: 'uni-toast__icon' })
                case 'loading':
                  return Gr(
                    'i',
                    { class: ['uni-toast__icon', 'uni-loading'] },
                    null,
                    2
                  )
                default:
                  return null
              }
            })
          }
        })(e),
        n = $g(e, {})
      return () => {
        const { mask: o, duration: r, title: i, image: a } = e
        return Gr(
          Hi,
          { name: 'uni-fade' },
          {
            default: () => [
              Vo(
                Gr(
                  'uni-toast',
                  { 'data-duration': r },
                  [
                    o
                      ? Gr(
                          'div',
                          {
                            class: 'uni-mask',
                            style: 'background: transparent;',
                            onTouchmove: Gl
                          },
                          null,
                          40,
                          ['onTouchmove']
                        )
                      : '',
                    a || t.value
                      ? Gr('div', { class: 'uni-toast' }, [
                          a
                            ? Gr(
                                'img',
                                { src: a, class: 'uni-toast__icon' },
                                null,
                                10,
                                ['src']
                              )
                            : t.value,
                          Gr('p', { class: 'uni-toast__content' }, [i])
                        ])
                      : Gr('div', { class: 'uni-sample-toast' }, [
                          Gr('p', { class: 'uni-simple-toast__text' }, [i])
                        ])
                  ],
                  8,
                  ['data-duration']
                ),
                [[_a, n.value]]
              )
            ]
          }
        )
      }
    }
  })
let Jg,
  Zg,
  em = ''
const tm = Le()
function nm(e) {
  Jg
    ? x(Jg, e)
    : ((Jg = Vt(x(e, { visible: !1 }))),
      xn(() => {
        tm.run(() => {
          Yn([() => Jg.visible, () => Jg.duration], ([e, t]) => {
            if (e) {
              if ((Zg && clearTimeout(Zg), 'onShowLoading' === em)) return
              Zg = setTimeout(() => {
                rm('onHideToast')
              }, t)
            } else Zg && clearTimeout(Zg)
          })
        }),
          um.on('onHidePopup', () => rm('onHidePopup')),
          Cg(Qg, Jg, () => {}).mount(kg('u-a-t'))
      })),
    setTimeout(() => {
      Jg.visible = !0
    }, 10)
}
const om = ed(
  'showToast',
  (e, { resolve: t, reject: n }) => {
    nm(e), (em = 'onShowToast'), t()
  },
  0,
  mp
)
function rm(e) {
  const { t: t } = hl()
  if (!em) return
  let n = ''
  if (
    ('onHideToast' === e && 'onShowToast' !== em
      ? (n = t('uni.showToast.unpaired'))
      : 'onHideLoading' === e &&
        'onShowLoading' !== em &&
        (n = t('uni.showLoading.unpaired')),
    n)
  )
    return console.warn(n)
  ;(em = ''),
    setTimeout(() => {
      Jg.visible = !1
    }, 10)
}
function im(e) {
  function t() {
    var t
    ;(t = e.navigationBar.titleText),
      (document.title = t),
      um.emit('onNavigationBarChange', { titleText: t })
  }
  Hn(t), vo(t)
}
const am = ed(
    'pageScrollTo',
    ({ scrollTop: e, selector: t, duration: n }, { resolve: o }) => {
      !(function (e, t, n) {
        if (L(e)) {
          const t = document.querySelector(e)
          if (t) {
            const { height: o, top: r } = t.getBoundingClientRect()
            ;(e = r + window.pageYOffset), n && (e -= o)
          }
        }
        e < 0 && (e = 0)
        const o = document.documentElement,
          { clientHeight: r, scrollHeight: i } = o
        if (((e = Math.min(e, i - r)), 0 === t))
          return void (o.scrollTop = document.body.scrollTop = e)
        if (window.scrollY === e) return
        const a = (t) => {
          if (t <= 0) return void window.scrollTo(0, e)
          const n = e - window.scrollY
          requestAnimationFrame(function () {
            window.scrollTo(0, window.scrollY + (n / t) * 10), a(t - 10)
          })
        }
        a(t)
      })(t || e || 0, n, !0),
        o()
    },
    0,
    hp
  ),
  sm = Gc({
    name: 'Layout',
    setup(e, { emit: t }) {
      const n = Jt(null)
      Zl({
        '--status-bar-height': '0px',
        '--top-window-height': '0px',
        '--window-left': '0px',
        '--window-right': '0px',
        '--window-margin': '0px',
        '--tab-bar-height': '0px'
      })
      const o = (function () {
          const e = dl()
          return {
            routeKey: mi(() => $h('/' + e.meta.route, hh())),
            isTabBar: mi(() => e.meta.isTabBar),
            routeCache: Ih
          }
        })(),
        { layoutState: r, windowState: i } = (function () {
          fh()
          {
            const e = Vt({
              marginWidth: 0,
              leftWindowWidth: 0,
              rightWindowWidth: 0
            })
            return (
              Yn(
                () => e.marginWidth,
                (e) => Zl({ '--window-margin': e + 'px' })
              ),
              Yn(
                () => e.leftWindowWidth + e.marginWidth,
                (e) => {
                  Zl({ '--window-left': e + 'px' })
                }
              ),
              Yn(
                () => e.rightWindowWidth + e.marginWidth,
                (e) => {
                  Zl({ '--window-right': e + 'px' })
                }
              ),
              { layoutState: e, windowState: mi(() => ({})) }
            )
          }
        })()
      !(function (e, t) {
        const n = fh()
        function o() {
          const o = document.body.clientWidth,
            r = Th()
          let i = {}
          if (r.length > 0) {
            i = r[r.length - 1].$page.meta
          } else {
            const e = wc(n.path, !0)
            e && (i = e.meta)
          }
          const a = parseInt(
            String(
              (E(i, 'maxWidth')
                ? i.maxWidth
                : __uniConfig.globalStyle.maxWidth) || Number.MAX_SAFE_INTEGER
            )
          )
          let s = !1
          ;(s = o > a),
            s && a
              ? ((e.marginWidth = (o - a) / 2),
                xn(() => {
                  const e = t.value
                  e &&
                    e.setAttribute(
                      'style',
                      'max-width:' + a + 'px;margin:0 auto;'
                    )
                }))
              : ((e.marginWidth = 0),
                xn(() => {
                  const e = t.value
                  e && e.removeAttribute('style')
                }))
        }
        Yn([() => n.path], o),
          Oo(() => {
            o(), window.addEventListener('resize', o)
          })
      })(r, n)
      const a = (function (e) {
        const t = Jt(!1)
        return mi(() => ({
          'uni-app--showtabbar': e && e.value,
          'uni-app--maxwidth': t.value
        }))
      })(!1)
      return () => {
        const e = (function (e, t, n, o, r, i) {
          return (function ({ routeKey: e, isTabBar: t, routeCache: n }) {
            return Gr(ll, null, {
              default: Nn(({ Component: o }) => [
                (Nr(),
                qr(
                  go,
                  { matchBy: 'key', cache: n },
                  [
                    (Nr(),
                    qr(qo(o), { type: t.value ? 'tabBar' : '', key: e.value }))
                  ],
                  1032,
                  ['cache']
                ))
              ]),
              _: 1
            })
          })(e)
        })(o)
        return Gr('uni-app', { ref: n, class: a.value }, [e, !1], 2)
      }
    }
  })
const lm = Xc({
    name: 'CoverView',
    compatConfig: { MODE: 3 },
    props: { scrollTop: { type: [String, Number], default: 0 } },
    setup(e, { slots: t }) {
      const n = Jt(null)
      function o(e) {
        let t = n.value
        'scroll' === getComputedStyle(t).overflowY &&
          (t.scrollTop = (function (e) {
            let t = String(e)
            ;/\d+[ur]px$/i.test(t) &&
              t.replace(/\d+[ur]px$/i, (e) => String(cd(parseFloat(e))))
            return parseFloat(t) || 0
          })(e))
      }
      return (
        Yn(
          () => e.scrollTop,
          (e) => {
            o(e)
          }
        ),
        Oo(() => {
          o(e.scrollTop)
        }),
        () =>
          Gr(
            'uni-cover-view',
            { 'scroll-top': e.scrollTop },
            [
              Gr(
                'div',
                { ref: n, class: 'uni-cover-view' },
                [t.default && t.default()],
                512
              )
            ],
            8,
            ['scroll-top']
          )
      )
    }
  }),
  cm = x(kl, {
    publishHandler(e, t, n) {
      um.subscribeHandler(e, t, n)
    }
  }),
  um = x(Mc, {
    publishHandler(e, t, n) {
      cm.subscribeHandler(e, t, n)
    }
  }),
  dm = Gc({
    name: 'PageHead',
    setup() {
      const e = Jt(null),
        t = dh(),
        n = (function (e, t) {
          const n = Ft(e),
            o = n ? Vt(Yg(e)) : Yg(e)
          return (
            __uniConfig.darkmode &&
              n &&
              Yn(e, (e) => {
                const t = Yg(e)
                for (const n in t) o[n] = t[n]
              }),
            t && Ug(t),
            o
          )
        })(t.navigationBar, () => {
          const e = Yg(t.navigationBar)
          ;(n.backgroundColor = e.backgroundColor),
            (n.titleColor = e.titleColor)
        }),
        { clazz: o, style: r } = (function (e) {
          const t = mi(() => {
              const { type: t, titlePenetrate: n, shadowColorType: o } = e,
                r = {
                  'uni-page-head': !0,
                  'uni-page-head-transparent': 'transparent' === t,
                  'uni-page-head-titlePenetrate': 'YES' === n,
                  'uni-page-head-shadow': !!o
                }
              return o && (r[`uni-page-head-shadow-${o}`] = !0), r
            }),
            n = mi(() => ({
              backgroundColor: e.backgroundColor,
              color: e.titleColor,
              transitionDuration: e.duration,
              transitionTimingFunction: e.timingFunc
            }))
          return { clazz: t, style: n }
        })(n)
      return () => {
        const i = (function (e, t) {
            if (!t)
              return Gr(
                'div',
                { class: 'uni-page-head-btn', onClick: fm },
                [ac(ic, 'transparent' === e.type ? '#fff' : e.titleColor, 27)],
                8,
                ['onClick']
              )
          })(n, t.isQuit),
          a = n.type || 'default',
          s =
            'transparent' !== a &&
            'float' !== a &&
            Gr(
              'div',
              {
                class: {
                  'uni-placeholder': !0,
                  'uni-placeholder-titlePenetrate': n.titlePenetrate
                }
              },
              null,
              2
            )
        return Gr(
          'uni-page-head',
          { 'uni-page-head-type': a },
          [
            Gr(
              'div',
              { ref: e, class: o.value, style: r.value },
              [
                Gr('div', { class: 'uni-page-head-hd' }, [i]),
                pm(n),
                Gr('div', { class: 'uni-page-head-ft' }, [])
              ],
              6
            ),
            s
          ],
          8,
          ['uni-page-head-type']
        )
      }
    }
  })
function pm(e, t) {
  return (function ({
    type: e,
    loading: t,
    titleSize: n,
    titleText: o,
    titleImage: r
  }) {
    return Gr('div', { class: 'uni-page-head-bd' }, [
      Gr(
        'div',
        {
          style: { fontSize: n, opacity: 'transparent' === e ? 0 : 1 },
          class: 'uni-page-head__title'
        },
        [
          t
            ? Gr('i', { class: 'uni-loading' }, null)
            : r
              ? Gr(
                  'img',
                  { src: r, class: 'uni-page-head__title_image' },
                  null,
                  8,
                  ['src']
                )
              : o
        ],
        4
      )
    ])
  })(e)
}
function fm() {
  1 === Th().length
    ? Hg({ url: '/' })
    : Fg({ from: 'backbutton', success() {} })
}
const hm = Gc({
    name: 'PageBody',
    setup: (e, t) => () =>
      Gr(Lr, null, [
        !1,
        Gr(
          'uni-page-wrapper',
          null,
          [Gr('uni-page-body', null, [Yo(t.slots, 'default')])],
          16
        )
      ])
  }),
  gm = Gc({
    name: 'Page',
    setup(e, t) {
      const n = ph(hh()),
        o = n.navigationBar
      return (
        im(n),
        () =>
          Gr(
            'uni-page',
            { 'data-page': n.route },
            'custom' !== o.style ? [Gr(dm), mm(t)] : [mm(t)]
          )
      )
    }
  })
function mm(e) {
  return (
    Nr(), qr(hm, { key: 0 }, { default: Nn(() => [Yo(e.slots, 'page')]), _: 3 })
  )
}
const vm = {
  loading: 'AsyncLoading',
  error: 'AsyncError',
  delay: 200,
  timeout: 6e4,
  suspensible: !0
}
;(window.uni = {}), (window.wx = {}), (window.rpx2px = cd)
const ym = Object.assign({}),
  _m = Object.assign
;(window.__uniConfig = _m(
  {
    globalStyle: {
      backgroundColor: '#F8F8F8',
      navigationBar: {
        backgroundColor: '#F8F8F8',
        titleText: 'uni-app',
        type: 'default',
        titleColor: '#000000'
      },
      isNVue: !1
    },
    uniIdRouter: {},
    compilerVersion: '3.99'
  },
  {
    appId: '__UNI__9A0C2FC',
    appName: 'zebra-ui',
    appVersion: '1.0.0',
    appVersionCode: '100',
    async: vm,
    debug: !1,
    networkTimeout: {
      request: 6e4,
      connectSocket: 6e4,
      uploadFile: 6e4,
      downloadFile: 6e4
    },
    sdkConfigs: {},
    qqMapKey: void 0,
    bMapKey: void 0,
    googleMapKey: void 0,
    aMapKey: void 0,
    aMapSecurityJsCode: void 0,
    aMapServiceHost: void 0,
    nvue: { 'flex-direction': 'column' },
    locale: '',
    fallbackLocale: '',
    locales: Object.keys(ym).reduce((e, t) => {
      const n = t.replace(/\.\/locale\/(uni-app.)?(.*).json/, '$2')
      return _m(e[n] || (e[n] = {}), ym[t].default), e
    }, {}),
    router: {
      mode: 'hash',
      base: '/h5/',
      assets: 'assets',
      routerBase: '/h5/'
    },
    darkmode: !1,
    themeConfig: {}
  }
)),
  (window.__uniLayout = window.__uniLayout || {})
const bm = { delay: vm.delay, timeout: vm.timeout, suspensible: vm.suspensible }
vm.loading &&
  (bm.loadingComponent = {
    name: 'SystemAsyncLoading',
    render: () => Gr(Do(vm.loading))
  }),
  vm.error &&
    (bm.errorComponent = {
      name: 'SystemAsyncError',
      render: () => Gr(Do(vm.error))
    })
const wm = () =>
    t(
      () => import('./pages-index-index.e3426534.js'),
      [
        'assets/pages-index-index.e3426534.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-switch.e182d14d.js',
        'assets/index.389bd7d1.js',
        'assets/z-switch-ac0a07fc.css',
        'assets/z-tabbar.119e2831.js',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-tabbar-7999918f.css',
        'assets/index-ee3dd7a1.css'
      ]
    ).then((e) => Qh(e.default || e)),
  xm = co(_m({ loader: wm }, bm)),
  Tm = () =>
    t(
      () => import('./pages-button-button.8a7218d7.js'),
      [
        'assets/pages-button-button.8a7218d7.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-swipe.702aa0db.js',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-swipe-c7ec30c8.css',
        'assets/button-43707ea6.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Sm = co(_m({ loader: Tm }, bm)),
  Em = () =>
    t(
      () => import('./pages-icon-icon.362a38c2.js'),
      [
        'assets/pages-icon-icon.362a38c2.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-tabs.8d3e6868.js',
        'assets/useParent.5b9c05b5.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-sticky.e6c39ae3.js',
        'assets/z-sticky-ea36140d.css',
        'assets/useChildren.fb2421ae.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-tabs-c3abd8fd.css',
        'assets/icon-9b6592ba.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Cm = co(_m({ loader: Em }, bm)),
  km = () =>
    t(
      () => import('./pages-tab-tab.06f9a9d9.js'),
      [
        'assets/pages-tab-tab.06f9a9d9.js',
        'assets/z-tabs.8d3e6868.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/useParent.5b9c05b5.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-sticky.e6c39ae3.js',
        'assets/z-sticky-ea36140d.css',
        'assets/useChildren.fb2421ae.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-tabs-c3abd8fd.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/z-dialog.b209de9d.js',
        'assets/tab-119533b8.css'
      ]
    ).then((e) => Qh(e.default || e)),
  $m = co(_m({ loader: km }, bm)),
  Om = () =>
    t(
      () => import('./pages-swipe-swipe.9010e2ea.js'),
      [
        'assets/pages-swipe-swipe.9010e2ea.js',
        'assets/z-swipe.702aa0db.js',
        'assets/useParent.5b9c05b5.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/useChildren.fb2421ae.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-swipe-c7ec30c8.css',
        'assets/swipe-502f878a.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Im = co(_m({ loader: Om }, bm)),
  Lm = () =>
    t(
      () => import('./pages-sticky-sticky.32da6f83.js'),
      [
        'assets/pages-sticky-sticky.32da6f83.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-sticky.e6c39ae3.js',
        'assets/z-sticky-ea36140d.css',
        'assets/sticky-0ecf0889.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Pm = co(_m({ loader: Lm }, bm)),
  Am = () =>
    t(
      () => import('./pages-layout-layout.2d1a68df.js'),
      [
        'assets/pages-layout-layout.2d1a68df.js',
        'assets/z-row.ce10d2dd.js',
        'assets/useParent.5b9c05b5.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/useChildren.fb2421ae.js',
        'assets/z-row-8c20d51f.css',
        'assets/layout-f583e41b.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Rm = co(_m({ loader: Am }, bm)),
  Mm = () =>
    t(
      () => import('./pages-badge-badge.8363850c.js'),
      [
        'assets/pages-badge-badge.8363850c.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-row.ce10d2dd.js',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-row-8c20d51f.css',
        'assets/badge-c5b8e459.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Bm = co(_m({ loader: Mm }, bm)),
  Nm = () =>
    t(
      () => import('./pages-loading-loading.2f9689d5.js'),
      [
        'assets/pages-loading-loading.2f9689d5.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-row.ce10d2dd.js',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-row-8c20d51f.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Vm = co(_m({ loader: Nm }, bm)),
  jm = () =>
    t(
      () => import('./pages-popup-popup.77df1895.js'),
      [
        'assets/pages-popup-popup.77df1895.js',
        'assets/z-cell.365e08ec.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell-cbd0668e.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/z-dialog.b209de9d.js',
        'assets/popup-1b2da509.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Dm = co(_m({ loader: jm }, bm)),
  Fm = () =>
    t(
      () => import('./pages-transition-transition.494cc7ac.js'),
      [
        'assets/pages-transition-transition.494cc7ac.js',
        'assets/z-cell.365e08ec.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell-cbd0668e.css',
        'assets/z-cell-group.8b81d491.js',
        'assets/z-cell-group-293df60b.css',
        'assets/transition-9b24019c.css'
      ]
    ).then((e) => Qh(e.default || e)),
  qm = co(_m({ loader: Fm }, bm)),
  zm = () =>
    t(
      () => import('./pages-cell-cell.407dec37.js'),
      [
        'assets/pages-cell-cell.407dec37.js',
        'assets/z-cell.365e08ec.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell-cbd0668e.css',
        'assets/z-cell-group.8b81d491.js',
        'assets/z-cell-group-293df60b.css',
        'assets/z-tag.7271e54a.js',
        'assets/z-tag-099032f2.css',
        'assets/cell-31723ddc.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Wm = co(_m({ loader: zm }, bm)),
  Hm = () =>
    t(
      () => import('./pages-overlay-overlay.612fde93.js'),
      [
        'assets/pages-overlay-overlay.612fde93.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/overlay-c7cf8925.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Um = co(_m({ loader: Hm }, bm)),
  Ym = () =>
    t(
      () => import('./pages-toast-toast.c9c8c5b0.js'),
      [
        'assets/pages-toast-toast.c9c8c5b0.js',
        'assets/z-cell.365e08ec.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell-cbd0668e.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/z-dialog.b209de9d.js',
        'assets/toast-36b29016.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Xm = co(_m({ loader: Ym }, bm)),
  Gm = () =>
    t(
      () => import('./pages-navbar-navbar.1b52e882.js'),
      [
        'assets/pages-navbar-navbar.1b52e882.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/z-dialog.b209de9d.js'
      ]
    ).then((e) => Qh(e.default || e)),
  Km = co(_m({ loader: Gm }, bm)),
  Qm = () =>
    t(
      () => import('./pages-image-image.c18d4926.js'),
      [
        'assets/pages-image-image.c18d4926.js',
        'assets/z-image.24b91007.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-image-242ac2bc.css',
        'assets/z-row.ce10d2dd.js',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-row-8c20d51f.css',
        'assets/image-8d07cfe8.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Jm = co(_m({ loader: Qm }, bm)),
  Zm = () =>
    t(
      () => import('./pages-field-field.84d3cb14.js'),
      [
        'assets/pages-field-field.84d3cb14.js',
        'assets/z-field.7193b969.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell.365e08ec.js',
        'assets/z-cell-cbd0668e.css',
        'assets/useParent.5b9c05b5.js',
        'assets/index.389bd7d1.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-field-ef33d482.css'
      ]
    ).then((e) => Qh(e.default || e)),
  ev = co(_m({ loader: Zm }, bm)),
  tv = () =>
    t(() => import('./pages-test-test.3f25d526.js'), []).then((e) =>
      Qh(e.default || e)
    ),
  nv = co(_m({ loader: tv }, bm)),
  ov = () =>
    t(
      () => import('./pages-checkbox-checkbox.1d2eabb7.js'),
      [
        'assets/pages-checkbox-checkbox.1d2eabb7.js',
        'assets/z-checkbox-group.af09d884.js',
        'assets/z-checker.a83e3fe8.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-checker-44435683.css',
        'assets/useParent.5b9c05b5.js',
        'assets/index.389bd7d1.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-checkbox-group-062d3140.css',
        'assets/z-cell.365e08ec.js',
        'assets/z-cell-cbd0668e.css',
        'assets/z-cell-group.8b81d491.js',
        'assets/z-cell-group-293df60b.css',
        'assets/checkbox-2e308231.css'
      ]
    ).then((e) => Qh(e.default || e)),
  rv = co(_m({ loader: ov }, bm)),
  iv = () =>
    t(
      () => import('./pages-radio-radio.7b360be9.js'),
      [
        'assets/pages-radio-radio.7b360be9.js',
        'assets/z-radio-group.0b52c354.js',
        'assets/z-checker.a83e3fe8.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-checker-44435683.css',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/index.389bd7d1.js',
        'assets/z-radio-group-0e9f09e1.css',
        'assets/z-cell.365e08ec.js',
        'assets/z-cell-cbd0668e.css',
        'assets/z-cell-group.8b81d491.js',
        'assets/z-cell-group-293df60b.css',
        'assets/radio-13f57d85.css'
      ]
    ).then((e) => Qh(e.default || e)),
  av = co(_m({ loader: iv }, bm)),
  sv = () =>
    t(
      () => import('./pages-picker-picker.50339c65.js'),
      [
        'assets/pages-picker-picker.50339c65.js',
        'assets/z-picker.ce3c705f.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/useParent.5b9c05b5.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-picker-4d8a617d.css',
        'assets/z-field.7193b969.js',
        'assets/z-cell.365e08ec.js',
        'assets/z-cell-cbd0668e.css',
        'assets/index.389bd7d1.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-field-ef33d482.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/z-dialog.b209de9d.js'
      ]
    ).then((e) => Qh(e.default || e)),
  lv = co(_m({ loader: sv }, bm)),
  cv = () =>
    t(
      () => import('./pages-datePicker-datePicker.844cc8b9.js'),
      [
        'assets/pages-datePicker-datePicker.844cc8b9.js',
        'assets/z-date-picker.vue_vue_type_script_setup_true_lang.a0ecb8aa.js',
        'assets/z-picker.ce3c705f.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/useParent.5b9c05b5.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-picker-4d8a617d.css',
        'assets/utils.95c08333.js'
      ]
    ).then((e) => Qh(e.default || e)),
  uv = co(_m({ loader: cv }, bm)),
  dv = () =>
    t(
      () => import('./pages-timePicker-timePicker.252bb986.js'),
      [
        'assets/pages-timePicker-timePicker.252bb986.js',
        'assets/z-time-picker.vue_vue_type_script_setup_true_lang.72a06aa2.js',
        'assets/z-picker.ce3c705f.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/useParent.5b9c05b5.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-picker-4d8a617d.css',
        'assets/utils.95c08333.js'
      ]
    ).then((e) => Qh(e.default || e)),
  pv = co(_m({ loader: dv }, bm)),
  fv = () =>
    t(
      () => import('./pages-pickerGroup-pickerGroup.0fb46e76.js'),
      [
        'assets/pages-pickerGroup-pickerGroup.0fb46e76.js',
        'assets/z-date-picker.vue_vue_type_script_setup_true_lang.a0ecb8aa.js',
        'assets/z-picker.ce3c705f.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/useParent.5b9c05b5.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-picker-4d8a617d.css',
        'assets/utils.95c08333.js',
        'assets/z-tabs.8d3e6868.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-sticky.e6c39ae3.js',
        'assets/z-sticky-ea36140d.css',
        'assets/z-tabs-c3abd8fd.css',
        'assets/z-time-picker.vue_vue_type_script_setup_true_lang.72a06aa2.js',
        'assets/use-sync-prop-ref.d5773770.js',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/pickerGroup-ad7935ef.css'
      ]
    ).then((e) => Qh(e.default || e)),
  hv = co(_m({ loader: fv }, bm)),
  gv = () =>
    t(
      () => import('./pages-switch-switch.182d93a4.js'),
      [
        'assets/pages-switch-switch.182d93a4.js',
        'assets/z-switch.e182d14d.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/index.389bd7d1.js',
        'assets/z-switch-ac0a07fc.css',
        'assets/z-cell.365e08ec.js',
        'assets/z-cell-cbd0668e.css',
        'assets/z-dialog.b209de9d.js',
        'assets/switch-f0ddb333.css'
      ]
    ).then((e) => Qh(e.default || e)),
  mv = co(_m({ loader: gv }, bm)),
  vv = () =>
    t(
      () => import('./pages-dialog-dialog.93c5edab.js'),
      [
        'assets/pages-dialog-dialog.93c5edab.js',
        'assets/z-cell.365e08ec.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell-cbd0668e.css',
        'assets/z-picker.ce3c705f.js',
        'assets/useParent.5b9c05b5.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-picker-4d8a617d.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-dialog.b209de9d.js',
        'assets/z-toast.44a3344c.js'
      ]
    ).then((e) => Qh(e.default || e)),
  yv = co(_m({ loader: vv }, bm)),
  _v = () =>
    t(
      () => import('./pages-search-search.146abd38.js'),
      [
        'assets/pages-search-search.146abd38.js',
        'assets/z-field.7193b969.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell.365e08ec.js',
        'assets/z-cell-cbd0668e.css',
        'assets/useParent.5b9c05b5.js',
        'assets/index.389bd7d1.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-field-ef33d482.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/search-c7e49b8f.css'
      ]
    ).then((e) => Qh(e.default || e)),
  bv = co(_m({ loader: _v }, bm)),
  wv = () =>
    t(
      () => import('./pages-slider-slider.a30bfb10.js'),
      [
        'assets/pages-slider-slider.a30bfb10.js',
        'assets/z-slider.ac5348e7.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/index.389bd7d1.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-slider-9ff21d04.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/slider-fb679dca.css'
      ]
    ).then((e) => Qh(e.default || e)),
  xv = co(_m({ loader: wv }, bm)),
  Tv = () =>
    t(
      () => import('./pages-stepper-stepper.0ac20d15.js'),
      [
        'assets/pages-stepper-stepper.0ac20d15.js',
        'assets/z-stepper.cbacd13a.js',
        'assets/index.389bd7d1.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-stepper-baa5c361.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js'
      ]
    ).then((e) => Qh(e.default || e)),
  Sv = co(_m({ loader: Tv }, bm)),
  Ev = () =>
    t(
      () => import('./pages-rate-rate.9ddbdb69.js'),
      [
        'assets/pages-rate-rate.9ddbdb69.js',
        'assets/z-rate.8a3894b6.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/index.389bd7d1.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-rate-72193cde.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js'
      ]
    ).then((e) => Qh(e.default || e)),
  Cv = co(_m({ loader: Ev }, bm)),
  kv = () =>
    t(
      () => import('./pages-signature-signature.613ade76.js'),
      [
        'assets/pages-signature-signature.613ade76.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/use-id.c1b053ed.js',
        'assets/z-image.24b91007.js',
        'assets/z-image-242ac2bc.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/z-dialog.b209de9d.js',
        'assets/signature-cd83a0f1.css'
      ]
    ).then((e) => Qh(e.default || e)),
  $v = co(_m({ loader: kv }, bm)),
  Ov = () =>
    t(
      () => import('./pages-uploader-uploader.5173f229.js'),
      [
        'assets/pages-uploader-uploader.5173f229.js',
        'assets/z-uploader.c2d8306c.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/index.389bd7d1.js',
        'assets/z-image.24b91007.js',
        'assets/z-image-242ac2bc.css',
        'assets/z-uploader-e3a25b40.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/uploader-4a13fd44.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Iv = co(_m({ loader: Ov }, bm)),
  Lv = () =>
    t(
      () => import('./pages-numberKeyboard-numberKeyboard.17b4b960.js'),
      [
        'assets/pages-numberKeyboard-numberKeyboard.17b4b960.js',
        'assets/z-cell.365e08ec.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell-cbd0668e.css',
        'assets/z-number-keyboard.98560cb1.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-number-keyboard-1bcd1ddc.css',
        'assets/z-field.7193b969.js',
        'assets/useParent.5b9c05b5.js',
        'assets/index.389bd7d1.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-field-ef33d482.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/z-dialog.b209de9d.js'
      ]
    ).then((e) => Qh(e.default || e)),
  Pv = co(_m({ loader: Lv }, bm)),
  Av = () =>
    t(
      () => import('./pages-passwordInput-passwordInput.5a54d21e.js'),
      [
        'assets/pages-passwordInput-passwordInput.5a54d21e.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-number-keyboard.98560cb1.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-number-keyboard-1bcd1ddc.css',
        'assets/passwordInput-42916547.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Rv = co(_m({ loader: Av }, bm)),
  Mv = () =>
    t(
      () => import('./pages-cascader-cascader.e8e76b8b.js'),
      [
        'assets/pages-cascader-cascader.e8e76b8b.js',
        'assets/z-field.7193b969.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell.365e08ec.js',
        'assets/z-cell-cbd0668e.css',
        'assets/useParent.5b9c05b5.js',
        'assets/index.389bd7d1.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-field-ef33d482.css',
        'assets/z-tabs.8d3e6868.js',
        'assets/z-sticky.e6c39ae3.js',
        'assets/z-sticky-ea36140d.css',
        'assets/useChildren.fb2421ae.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-tabs-c3abd8fd.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/area.6ad1509c.js',
        'assets/cascader-1b725006.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Bv = co(_m({ loader: Mv }, bm)),
  Nv = () =>
    t(
      () => import('./pages-calendar-calendar.1a1d5bf8.js'),
      [
        'assets/pages-calendar-calendar.1a1d5bf8.js',
        'assets/z-cell.365e08ec.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell-cbd0668e.css',
        'assets/z-calendar.796cc0f9.js',
        'assets/z-toast.44a3344c.js',
        'assets/use-id.c1b053ed.js',
        'assets/utils.95c08333.js',
        'assets/z-calendar-082a9633.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Vv = co(_m({ loader: Nv }, bm)),
  jv = () =>
    t(
      () => import('./pages-form-form.88b16ccb.js'),
      [
        'assets/pages-form-form.88b16ccb.js',
        'assets/z-field.7193b969.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell.365e08ec.js',
        'assets/z-cell-cbd0668e.css',
        'assets/useParent.5b9c05b5.js',
        'assets/index.389bd7d1.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-field-ef33d482.css',
        'assets/z-form.vue_vue_type_script_setup_true_lang.1583735e.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-switch.e182d14d.js',
        'assets/z-switch-ac0a07fc.css',
        'assets/z-checkbox-group.af09d884.js',
        'assets/z-checker.a83e3fe8.js',
        'assets/z-checker-44435683.css',
        'assets/z-checkbox-group-062d3140.css',
        'assets/z-radio-group.0b52c354.js',
        'assets/z-radio-group-0e9f09e1.css',
        'assets/z-stepper.cbacd13a.js',
        'assets/z-stepper-baa5c361.css',
        'assets/z-rate.8a3894b6.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-rate-72193cde.css',
        'assets/z-slider.ac5348e7.js',
        'assets/z-slider-9ff21d04.css',
        'assets/z-uploader.c2d8306c.js',
        'assets/z-image.24b91007.js',
        'assets/z-image-242ac2bc.css',
        'assets/z-uploader-e3a25b40.css',
        'assets/z-calendar.796cc0f9.js',
        'assets/z-toast.44a3344c.js',
        'assets/utils.95c08333.js',
        'assets/z-calendar-082a9633.css',
        'assets/z-picker.ce3c705f.js',
        'assets/z-picker-4d8a617d.css',
        'assets/z-date-picker.vue_vue_type_script_setup_true_lang.a0ecb8aa.js',
        'assets/z-area.vue_vue_type_script_setup_true_lang.477f3be6.js',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/area.6ad1509c.js',
        'assets/z-dialog.b209de9d.js',
        'assets/form-ceb082a9.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Dv = co(_m({ loader: jv }, bm)),
  Fv = () =>
    t(
      () => import('./pages-area-area.3a6a1279.js'),
      [
        'assets/pages-area-area.3a6a1279.js',
        'assets/z-area.vue_vue_type_script_setup_true_lang.477f3be6.js',
        'assets/z-picker.ce3c705f.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/useParent.5b9c05b5.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-picker-4d8a617d.css',
        'assets/area.6ad1509c.js'
      ]
    ).then((e) => Qh(e.default || e)),
  qv = co(_m({ loader: Fv }, bm)),
  zv = () =>
    t(
      () => import('./pages-pullRefresh-pullRefresh.49e09d6e.js'),
      [
        'assets/pages-pullRefresh-pullRefresh.49e09d6e.js',
        'assets/z-cell.365e08ec.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell-cbd0668e.css',
        'assets/z-pull-refresh.79093113.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-pull-refresh-e53fc421.css',
        'assets/z-tabs.8d3e6868.js',
        'assets/useParent.5b9c05b5.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-sticky.e6c39ae3.js',
        'assets/z-sticky-ea36140d.css',
        'assets/useChildren.fb2421ae.js',
        'assets/z-tabs-c3abd8fd.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/pullRefresh-845745d6.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Wv = co(_m({ loader: zv }, bm)),
  Hv = () =>
    t(
      () => import('./pages-list-list.5856703b.js'),
      [
        'assets/pages-list-list.5856703b.js',
        'assets/z-cell.365e08ec.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell-cbd0668e.css',
        'assets/z-tabs.8d3e6868.js',
        'assets/useParent.5b9c05b5.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-sticky.e6c39ae3.js',
        'assets/z-sticky-ea36140d.css',
        'assets/useChildren.fb2421ae.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-tabs-c3abd8fd.css',
        'assets/z-pull-refresh.79093113.js',
        'assets/z-pull-refresh-e53fc421.css',
        'assets/list-f7970bbf.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Uv = co(_m({ loader: Hv }, bm)),
  Yv = () =>
    t(
      () => import('./pages-actionSheet-actionSheet.8c460166.js'),
      [
        'assets/pages-actionSheet-actionSheet.8c460166.js',
        'assets/z-cell.365e08ec.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell-cbd0668e.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/z-dialog.b209de9d.js',
        'assets/actionSheet-4d3d5eb2.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Xv = co(_m({ loader: Yv }, bm)),
  Gv = () =>
    t(
      () => import('./pages-barrage-barrage.6ba87e8e.js'),
      [
        'assets/pages-barrage-barrage.6ba87e8e.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/barrage-e4751a84.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Kv = co(_m({ loader: Gv }, bm)),
  Qv = () =>
    t(
      () => import('./pages-dropdownMenu-dropdownMenu.72b91ed7.js'),
      [
        'assets/pages-dropdownMenu-dropdownMenu.72b91ed7.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell.365e08ec.js',
        'assets/z-cell-cbd0668e.css',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-switch.e182d14d.js',
        'assets/index.389bd7d1.js',
        'assets/z-switch-ac0a07fc.css',
        'assets/dropdownMenu-bd7e427d.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Jv = co(_m({ loader: Qv }, bm)),
  Zv = () =>
    t(
      () => import('./pages-floatingPanel-floatingPanel.c9b1e4c5.js'),
      [
        'assets/pages-floatingPanel-floatingPanel.c9b1e4c5.js',
        'assets/z-cell.365e08ec.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell-cbd0668e.css',
        'assets/z-cell-group.8b81d491.js',
        'assets/z-cell-group-293df60b.css',
        'assets/use-sync-prop-ref.d5773770.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/closest.9c1a5909.js',
        'assets/z-tabs.8d3e6868.js',
        'assets/useParent.5b9c05b5.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-sticky.e6c39ae3.js',
        'assets/z-sticky-ea36140d.css',
        'assets/useChildren.fb2421ae.js',
        'assets/z-tabs-c3abd8fd.css',
        'assets/floatingPanel-bd347ca2.css'
      ]
    ).then((e) => Qh(e.default || e)),
  ey = co(_m({ loader: Zv }, bm)),
  ty = () =>
    t(
      () => import('./pages-floatingBubble-floatingBubble.b77aa09a.js'),
      [
        'assets/pages-floatingBubble-floatingBubble.b77aa09a.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/use-touch.1ac9fd53.js',
        'assets/closest.9c1a5909.js',
        'assets/z-tabs.8d3e6868.js',
        'assets/useParent.5b9c05b5.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-sticky.e6c39ae3.js',
        'assets/z-sticky-ea36140d.css',
        'assets/useChildren.fb2421ae.js',
        'assets/z-tabs-c3abd8fd.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/floatingBubble-912489e8.css'
      ]
    ).then((e) => Qh(e.default || e)),
  ny = co(_m({ loader: ty }, bm)),
  oy = () =>
    t(
      () => import('./pages-notify-notify.44959110.js'),
      [
        'assets/pages-notify-notify.44959110.js',
        'assets/z-cell.365e08ec.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell-cbd0668e.css',
        'assets/z-toast.44a3344c.js',
        'assets/z-dialog.b209de9d.js',
        'assets/notify-02dc34c7.css'
      ]
    ).then((e) => Qh(e.default || e)),
  ry = co(_m({ loader: oy }, bm)),
  iy = () =>
    t(
      () => import('./pages-shareSheet-shareSheet.ed646743.js'),
      [
        'assets/pages-shareSheet-shareSheet.ed646743.js',
        'assets/z-cell.365e08ec.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell-cbd0668e.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/z-dialog.b209de9d.js',
        'assets/shareSheet-4387b867.css'
      ]
    ).then((e) => Qh(e.default || e)),
  ay = co(_m({ loader: iy }, bm)),
  sy = () =>
    t(
      () => import('./pages-swipeCell-swipeCell.bd4574f6.js'),
      [
        'assets/pages-swipeCell-swipeCell.bd4574f6.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell.365e08ec.js',
        'assets/z-cell-cbd0668e.css',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-card.861d1a5d.js',
        'assets/z-card-ca2b60d7.css',
        'assets/z-toast.44a3344c.js',
        'assets/z-dialog.b209de9d.js',
        'assets/swipeCell-db50f4d0.css'
      ]
    ).then((e) => Qh(e.default || e)),
  ly = co(_m({ loader: sy }, bm)),
  cy = () =>
    t(
      () => import('./pages-card-card.a03d3280.js'),
      [
        'assets/pages-card-card.a03d3280.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-card.861d1a5d.js',
        'assets/z-card-ca2b60d7.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/z-dialog.b209de9d.js',
        'assets/card-6b2fa4c0.css'
      ]
    ).then((e) => Qh(e.default || e)),
  uy = co(_m({ loader: cy }, bm)),
  dy = () =>
    t(
      () => import('./pages-circle-circle.eb0c96fd.js'),
      [
        'assets/pages-circle-circle.eb0c96fd.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/use-id.c1b053ed.js',
        'assets/circle-606dadb0.css'
      ]
    ).then((e) => Qh(e.default || e)),
  py = co(_m({ loader: dy }, bm)),
  fy = () =>
    t(
      () => import('./pages-collapse-collapse.9547a00d.js'),
      [
        'assets/pages-collapse-collapse.9547a00d.js',
        'assets/z-cell.365e08ec.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-cell-cbd0668e.css',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/collapse-45e62ba5.css'
      ]
    ).then((e) => Qh(e.default || e)),
  hy = co(_m({ loader: fy }, bm)),
  gy = () =>
    t(
      () => import('./pages-countDown-countDown.5979d211.js'),
      [
        'assets/pages-countDown-countDown.5979d211.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-grid.6d744e86.js',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-grid-8e58665f.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/z-dialog.b209de9d.js',
        'assets/countDown-59249588.css'
      ]
    ).then((e) => Qh(e.default || e)),
  my = co(_m({ loader: gy }, bm)),
  vy = () =>
    t(
      () => import('./pages-grid-grid.ec16dc25.js'),
      [
        'assets/pages-grid-grid.ec16dc25.js',
        'assets/z-grid.6d744e86.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-grid-8e58665f.css',
        'assets/z-image.24b91007.js',
        'assets/z-image-242ac2bc.css',
        'assets/grid-e8cbb68e.css'
      ]
    ).then((e) => Qh(e.default || e)),
  yy = co(_m({ loader: vy }, bm)),
  _y = () =>
    t(
      () => import('./pages-divider-divider.2f2e2375.js'),
      [
        'assets/pages-divider-divider.2f2e2375.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/divider-fd855039.css'
      ]
    ).then((e) => Qh(e.default || e)),
  by = co(_m({ loader: _y }, bm)),
  wy = () =>
    t(
      () => import('./pages-empty-empty.d2b0bd59.js'),
      [
        'assets/pages-empty-empty.d2b0bd59.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-tabs.8d3e6868.js',
        'assets/useParent.5b9c05b5.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-sticky.e6c39ae3.js',
        'assets/z-sticky-ea36140d.css',
        'assets/useChildren.fb2421ae.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-tabs-c3abd8fd.css',
        'assets/empty-861afb21.css'
      ]
    ).then((e) => Qh(e.default || e)),
  xy = co(_m({ loader: wy }, bm)),
  Ty = () =>
    t(
      () => import('./pages-highlight-highlight.9c25dcba.js'),
      [
        'assets/pages-highlight-highlight.9c25dcba.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/highlight-4f9d9671.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Sy = co(_m({ loader: Ty }, bm)),
  Ey = () =>
    t(
      () => import('./pages-noticeBar-noticeBar.db50a474.js'),
      [
        'assets/pages-noticeBar-noticeBar.db50a474.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-swipe.702aa0db.js',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-swipe-c7ec30c8.css',
        'assets/noticeBar-218c7738.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Cy = co(_m({ loader: Ey }, bm)),
  ky = () =>
    t(
      () => import('./pages-popover-popover.5d04c0c0.js'),
      [
        'assets/pages-popover-popover.5d04c0c0.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/use-sync-prop-ref.d5773770.js',
        'assets/z-grid.6d744e86.js',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-grid-8e58665f.css',
        'assets/z-picker.ce3c705f.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-picker-4d8a617d.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/popover-e824d7ac.css'
      ]
    ).then((e) => Qh(e.default || e)),
  $y = co(_m({ loader: ky }, bm)),
  Oy = () =>
    t(
      () => import('./pages-progress-progress.913043d1.js'),
      [
        'assets/pages-progress-progress.913043d1.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/progress-738e977c.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Iy = co(_m({ loader: Oy }, bm)),
  Ly = () =>
    t(
      () => import('./pages-rollingText-rollingText.11a084d7.js'),
      [
        'assets/pages-rollingText-rollingText.11a084d7.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-grid.6d744e86.js',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-grid-8e58665f.css',
        'assets/rollingText-68a07a82.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Py = co(_m({ loader: Ly }, bm)),
  Ay = () =>
    t(
      () => import('./pages-skeleton-skeleton.25e601b3.js'),
      [
        'assets/pages-skeleton-skeleton.25e601b3.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-switch.e182d14d.js',
        'assets/index.389bd7d1.js',
        'assets/z-switch-ac0a07fc.css',
        'assets/skeleton-66b02025.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Ry = co(_m({ loader: Ay }, bm)),
  My = () =>
    t(
      () => import('./pages-steps-steps.ea311f73.js'),
      [
        'assets/pages-steps-steps.ea311f73.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/steps-59af16fc.css'
      ]
    ).then((e) => Qh(e.default || e)),
  By = co(_m({ loader: My }, bm)),
  Ny = () =>
    t(
      () => import('./pages-tag-tag.9b90f1fb.js'),
      [
        'assets/pages-tag-tag.9b90f1fb.js',
        'assets/z-tag.7271e54a.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/z-tag-099032f2.css',
        'assets/z-cell.365e08ec.js',
        'assets/z-cell-cbd0668e.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Vy = co(_m({ loader: Ny }, bm)),
  jy = () =>
    t(
      () => import('./pages-textEllipsis-textEllipsis.43f084d4.js'),
      [
        'assets/pages-textEllipsis-textEllipsis.43f084d4.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/textEllipsis-c17d5c5b.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Dy = co(_m({ loader: jy }, bm)),
  Fy = () =>
    t(
      () => import('./pages-watermark-watermark.897ef574.js'),
      [
        'assets/pages-watermark-watermark.897ef574.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/use-id.c1b053ed.js',
        'assets/watermark-1d4421f2.css'
      ]
    ).then((e) => Qh(e.default || e)),
  qy = co(_m({ loader: Fy }, bm)),
  zy = () =>
    t(
      () => import('./pages-tabbar-tabbar.382a44fb.js'),
      [
        'assets/pages-tabbar-tabbar.382a44fb.js',
        'assets/z-tabbar.119e2831.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/useParent.5b9c05b5.js',
        'assets/useChildren.fb2421ae.js',
        'assets/z-tabbar-7999918f.css',
        'assets/z-toast.a77377ba.js',
        'assets/z-toast-132ca753.css',
        'assets/z-toast.44a3344c.js',
        'assets/tabbar-1392e3e6.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Wy = co(_m({ loader: zy }, bm)),
  Hy = () =>
    t(
      () => import('./pages-configProvider-configProvider.b4d86711.js'),
      [
        'assets/pages-configProvider-configProvider.b4d86711.js',
        'assets/z-rate.8a3894b6.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/index.389bd7d1.js',
        'assets/use-touch.1ac9fd53.js',
        'assets/z-rate-72193cde.css',
        'assets/z-field.7193b969.js',
        'assets/z-cell.365e08ec.js',
        'assets/z-cell-cbd0668e.css',
        'assets/useParent.5b9c05b5.js',
        'assets/use-id.c1b053ed.js',
        'assets/z-field-ef33d482.css',
        'assets/z-slider.ac5348e7.js',
        'assets/z-slider-9ff21d04.css',
        'assets/z-form.vue_vue_type_script_setup_true_lang.1583735e.js',
        'assets/useChildren.fb2421ae.js'
      ]
    ).then((e) => Qh(e.default || e)),
  Uy = co(_m({ loader: Hy }, bm)),
  Yy = () =>
    t(
      () => import('./pages-style-style.197db2be.js'),
      [
        'assets/pages-style-style.197db2be.js',
        'assets/DemoPage.0bae30a9.js',
        'assets/DemoPage-f45a9355.css',
        'assets/style-35fc1287.css'
      ]
    ).then((e) => Qh(e.default || e)),
  Xy = co(_m({ loader: Yy }, bm))
function Gy(e, t) {
  return (
    Nr(),
    qr(gm, null, {
      page: Nn(() => [Gr(e, _m({}, t, { ref: 'page' }), null, 512)]),
      _: 1
    })
  )
}
window.__uniRoutes = [
  {
    path: '/',
    alias: '/pages/index/index',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(xm, t)
      }
    },
    loader: wm,
    meta: {
      isQuit: !0,
      isEntry: !0,
      enablePullDownRefresh: !1,
      navigationBar: {
        titleText: 'zebra-ui',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/button/button',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Sm, t)
      }
    },
    loader: Tm,
    meta: {
      navigationBar: { titleText: 'Button', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/icon/icon',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Cm, t)
      }
    },
    loader: Em,
    meta: {
      navigationBar: { titleText: 'Icon', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/tab/tab',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy($m, t)
      }
    },
    loader: km,
    meta: {
      navigationBar: { titleText: 'Tab', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/swipe/swipe',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Im, t)
      }
    },
    loader: Om,
    meta: {
      navigationBar: { titleText: 'Swipe', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/sticky/sticky',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Pm, t)
      }
    },
    loader: Lm,
    meta: {
      navigationBar: { titleText: 'Sticky', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/layout/layout',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Rm, t)
      }
    },
    loader: Am,
    meta: {
      navigationBar: { titleText: 'Layout', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/badge/badge',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Bm, t)
      }
    },
    loader: Mm,
    meta: {
      navigationBar: { titleText: 'Badge', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/loading/loading',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Vm, t)
      }
    },
    loader: Nm,
    meta: {
      navigationBar: { titleText: 'Loading', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/popup/popup',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Dm, t)
      }
    },
    loader: jm,
    meta: {
      navigationBar: { titleText: 'Popup', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/transition/transition',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(qm, t)
      }
    },
    loader: Fm,
    meta: {
      navigationBar: {
        titleText: 'Transition',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/cell/cell',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Wm, t)
      }
    },
    loader: zm,
    meta: {
      navigationBar: { titleText: 'Cell', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/overlay/overlay',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Um, t)
      }
    },
    loader: Hm,
    meta: {
      navigationBar: { titleText: 'Overlay', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/toast/toast',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Xm, t)
      }
    },
    loader: Ym,
    meta: {
      navigationBar: { titleText: 'Toast', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/navbar/navbar',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Km, t)
      }
    },
    loader: Gm,
    meta: {
      navigationBar: { titleText: 'Navbar', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/image/image',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Jm, t)
      }
    },
    loader: Qm,
    meta: {
      navigationBar: { titleText: 'Image', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/field/field',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(ev, t)
      }
    },
    loader: Zm,
    meta: {
      navigationBar: { titleText: 'Field', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/test/test',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(nv, t)
      }
    },
    loader: tv,
    meta: {
      enablePullDownRefresh: !1,
      navigationBar: { titleText: 'Test', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/checkbox/checkbox',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(rv, t)
      }
    },
    loader: ov,
    meta: {
      navigationBar: {
        titleText: 'Checkbox',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/radio/radio',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(av, t)
      }
    },
    loader: iv,
    meta: {
      navigationBar: { titleText: 'Radio', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/picker/picker',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(lv, t)
      }
    },
    loader: sv,
    meta: {
      navigationBar: { titleText: 'Picker', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/datePicker/datePicker',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(uv, t)
      }
    },
    loader: cv,
    meta: {
      navigationBar: {
        titleText: 'DatePicker',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/timePicker/timePicker',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(pv, t)
      }
    },
    loader: dv,
    meta: {
      navigationBar: {
        titleText: 'TimePicker',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/pickerGroup/pickerGroup',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(hv, t)
      }
    },
    loader: fv,
    meta: {
      navigationBar: {
        titleText: 'PickerGroup',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/switch/switch',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(mv, t)
      }
    },
    loader: gv,
    meta: {
      navigationBar: { titleText: 'Switch', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/dialog/dialog',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(yv, t)
      }
    },
    loader: vv,
    meta: {
      navigationBar: { titleText: 'Dialog', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/search/search',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(bv, t)
      }
    },
    loader: _v,
    meta: {
      navigationBar: { titleText: 'Search', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/slider/slider',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(xv, t)
      }
    },
    loader: wv,
    meta: {
      navigationBar: { titleText: 'Slider', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/stepper/stepper',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Sv, t)
      }
    },
    loader: Tv,
    meta: {
      navigationBar: { titleText: 'Stepper', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/rate/rate',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Cv, t)
      }
    },
    loader: Ev,
    meta: {
      navigationBar: { titleText: 'Rate', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/signature/signature',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy($v, t)
      }
    },
    loader: kv,
    meta: {
      navigationBar: {
        titleText: 'Signature',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/uploader/uploader',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Iv, t)
      }
    },
    loader: Ov,
    meta: {
      navigationBar: {
        titleText: 'Uploader',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/numberKeyboard/numberKeyboard',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Pv, t)
      }
    },
    loader: Lv,
    meta: {
      navigationBar: {
        titleText: 'NumberKeyboard',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/passwordInput/passwordInput',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Rv, t)
      }
    },
    loader: Av,
    meta: {
      navigationBar: {
        titleText: 'PasswordInput',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/cascader/cascader',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Bv, t)
      }
    },
    loader: Mv,
    meta: {
      navigationBar: {
        titleText: 'Cascader',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/calendar/calendar',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Vv, t)
      }
    },
    loader: Nv,
    meta: {
      navigationBar: {
        titleText: 'Calendar',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/form/form',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Dv, t)
      }
    },
    loader: jv,
    meta: {
      navigationBar: { titleText: 'Form', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/area/area',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(qv, t)
      }
    },
    loader: Fv,
    meta: {
      navigationBar: { titleText: 'Area', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/pullRefresh/pullRefresh',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Wv, t)
      }
    },
    loader: zv,
    meta: {
      navigationBar: {
        titleText: 'PullRefresh',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/list/list',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Uv, t)
      }
    },
    loader: Hv,
    meta: {
      navigationBar: { titleText: 'List', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/actionSheet/actionSheet',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Xv, t)
      }
    },
    loader: Yv,
    meta: {
      navigationBar: {
        titleText: 'ActionSheet',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/barrage/barrage',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Kv, t)
      }
    },
    loader: Gv,
    meta: {
      navigationBar: { titleText: 'Barrage', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/dropdownMenu/dropdownMenu',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Jv, t)
      }
    },
    loader: Qv,
    meta: {
      navigationBar: {
        titleText: 'DropdownMenu',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/floatingPanel/floatingPanel',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(ey, t)
      }
    },
    loader: Zv,
    meta: {
      navigationBar: {
        titleText: 'FloatingPanel',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/floatingBubble/floatingBubble',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(ny, t)
      }
    },
    loader: ty,
    meta: {
      navigationBar: {
        titleText: 'FloatingBubble',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/notify/notify',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(ry, t)
      }
    },
    loader: oy,
    meta: {
      navigationBar: { titleText: 'Notify', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/shareSheet/shareSheet',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(ay, t)
      }
    },
    loader: iy,
    meta: {
      navigationBar: {
        titleText: 'ShareSheet',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/swipeCell/swipeCell',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(ly, t)
      }
    },
    loader: sy,
    meta: {
      navigationBar: {
        titleText: 'SwipeCell',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/card/card',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(uy, t)
      }
    },
    loader: cy,
    meta: {
      navigationBar: { titleText: 'Card', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/circle/circle',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(py, t)
      }
    },
    loader: dy,
    meta: {
      navigationBar: { titleText: 'Circle', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/collapse/collapse',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(hy, t)
      }
    },
    loader: fy,
    meta: {
      navigationBar: {
        titleText: 'Collapse',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/countDown/countDown',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(my, t)
      }
    },
    loader: gy,
    meta: {
      navigationBar: {
        titleText: 'CountDown',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/grid/grid',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(yy, t)
      }
    },
    loader: vy,
    meta: {
      navigationBar: { titleText: 'Grid', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/divider/divider',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(by, t)
      }
    },
    loader: _y,
    meta: {
      navigationBar: { titleText: 'Divider', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/empty/empty',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(xy, t)
      }
    },
    loader: wy,
    meta: {
      navigationBar: { titleText: 'Empty', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/highlight/highlight',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Sy, t)
      }
    },
    loader: Ty,
    meta: {
      navigationBar: {
        titleText: 'Highlight',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/noticeBar/noticeBar',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Cy, t)
      }
    },
    loader: Ey,
    meta: {
      navigationBar: {
        titleText: 'NoticeBar',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/popover/popover',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy($y, t)
      }
    },
    loader: ky,
    meta: {
      navigationBar: { titleText: 'Popover', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/progress/progress',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Iy, t)
      }
    },
    loader: Oy,
    meta: {
      navigationBar: {
        titleText: 'Progress',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/rollingText/rollingText',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Py, t)
      }
    },
    loader: Ly,
    meta: {
      navigationBar: {
        titleText: 'RollingText',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/skeleton/skeleton',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Ry, t)
      }
    },
    loader: Ay,
    meta: {
      navigationBar: {
        titleText: 'Skeleton',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/steps/steps',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(By, t)
      }
    },
    loader: My,
    meta: {
      navigationBar: { titleText: 'Steps', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/tag/tag',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Vy, t)
      }
    },
    loader: Ny,
    meta: {
      navigationBar: { titleText: 'Tag', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/textEllipsis/textEllipsis',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Dy, t)
      }
    },
    loader: jy,
    meta: {
      navigationBar: {
        titleText: 'TextEllipsis',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/watermark/watermark',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(qy, t)
      }
    },
    loader: Fy,
    meta: {
      navigationBar: {
        titleText: 'Watermark',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/tabbar/tabbar',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Wy, t)
      }
    },
    loader: zy,
    meta: {
      navigationBar: { titleText: 'Tabbar', style: 'custom', type: 'default' },
      isNVue: !1
    }
  },
  {
    path: '/pages/configProvider/configProvider',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Uy, t)
      }
    },
    loader: Hy,
    meta: {
      navigationBar: {
        titleText: 'ConfigProvider',
        style: 'custom',
        type: 'default'
      },
      isNVue: !1
    }
  },
  {
    path: '/pages/style/style',
    component: {
      setup() {
        const e = Yh(),
          t = (e && e.$route && e.$route.query) || {}
        return () => Gy(Xy, t)
      }
    },
    loader: Yy,
    meta: {
      navigationBar: { titleText: 'Style', style: 'custom', type: 'default' },
      isNVue: !1
    }
  }
].map((e) => ((e.meta.route = (e.alias || e.path).slice(1)), e))
const Ky = {
  onLaunch: function () {},
  onShow: function () {},
  onHide: function () {}
}
Kh(Ky, {
  init: Xh,
  setup(e) {
    const t = fh(),
      n = () => {
        var n
        ;(n = e),
          Object.keys(Qd).forEach((e) => {
            Qd[e].forEach((t) => {
              Co(e, t, n)
            })
          })
        const { onLaunch: o, onShow: r, onPageNotFound: i, onError: a } = e,
          s = (function ({ path: e, query: t }) {
            return x(Sp, { path: e, query: t }), x(Ep, Sp), x({}, Sp)
          })({
            path: t.path.slice(1) || __uniRoutes[0].meta.route,
            query: ge(t.query)
          })
        if ((o && X(o, s), r && X(r, s), !t.matched.length)) {
          const e = {
            notFound: !0,
            openType: 'appLaunch',
            path: t.path,
            query: {},
            scene: 1001
          }
          i && X(i, e)
        }
        a &&
          (e.appContext.config.errorHandler = (e) => {
            X(a, e)
          })
      }
    return (
      Wn(Qs).isReady().then(n),
      Oo(() => {
        window.addEventListener(
          'resize',
          ye(Jh, 50, { setTimeout: setTimeout, clearTimeout: clearTimeout })
        ),
          window.addEventListener('message', Zh),
          document.addEventListener('visibilitychange', eg),
          (function () {
            let e = null
            try {
              e = window.matchMedia('(prefers-color-scheme: dark)')
            } catch (t) {}
            if (e) {
              let t = (e) => {
                um.emit('onThemeChange', {
                  theme: e.matches ? 'dark' : 'light'
                })
              }
              e.addEventListener
                ? e.addEventListener('change', t)
                : e.addListener(t)
            }
          })()
      }),
      t.query
    )
  },
  before(e) {
    e.mpType = 'app'
    const { setup: t } = e,
      n = () => (Nr(), qr(sm))
    ;(e.setup = (e, o) => {
      const r = t && t(e, o)
      return I(r) ? n : r
    }),
      (e.render = n)
  }
})
/*!
 * pinia v2.0.33
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Qy
const Jy = (e) => (Qy = e),
  Zy = Symbol()
function e_(e) {
  return (
    e &&
    'object' == typeof e &&
    '[object Object]' === Object.prototype.toString.call(e) &&
    'function' != typeof e.toJSON
  )
}
var t_, n_
;((n_ = t_ || (t_ = {})).direct = 'direct'),
  (n_.patchObject = 'patch object'),
  (n_.patchFunction = 'patch function')
const o_ = 'undefined' != typeof window
function r_() {
  const e = Le(!0),
    t = e.run(() => Jt({}))
  let n = [],
    o = []
  const r = Ut({
    install(e) {
      Jy(r),
        (r._a = e),
        e.provide(Zy, r),
        (e.config.globalProperties.$pinia = r),
        o.forEach((e) => n.push(e)),
        (o = [])
    },
    use(e) {
      return this._a ? n.push(e) : o.push(e), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t
  })
  return r
}
const i_ = () => {}
function a_(e, t, n, o = i_) {
  e.push(t)
  const r = () => {
    const n = e.indexOf(t)
    n > -1 && (e.splice(n, 1), o())
  }
  var i
  return !n && Pe() && ((i = r), Oe && Oe.cleanups.push(i)), r
}
function s_(e, ...t) {
  e.slice().forEach((e) => {
    e(...t)
  })
}
function l_(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((t, n) => e.set(n, t)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e)
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue
    const o = t[n],
      r = e[n]
    e_(r) && e_(o) && e.hasOwnProperty(n) && !Qt(o) && !Ft(o)
      ? (e[n] = l_(r, o))
      : (e[n] = o)
  }
  return e
}
const c_ = Symbol()
const { assign: u_ } = Object
function d_(e, t, n, o) {
  const { state: r, actions: i, getters: a } = t,
    s = n.state.value[e]
  let l
  return (
    (l = p_(
      e,
      function () {
        s || (n.state.value[e] = r ? r() : {})
        const t = (function (e) {
          const t = C(e) ? new Array(e.length) : {}
          for (const n in e) t[n] = sn(e, n)
          return t
        })(n.state.value[e])
        return u_(
          t,
          i,
          Object.keys(a || {}).reduce(
            (t, o) => (
              (t[o] = Ut(
                mi(() => {
                  Jy(n)
                  const t = n._s.get(e)
                  return a[o].call(t, t)
                })
              )),
              t
            ),
            {}
          )
        )
      },
      t,
      n,
      o,
      !0
    )),
    l
  )
}
function p_(e, t, n = {}, o, r, i) {
  let a
  const s = u_({ actions: {} }, n),
    l = { deep: !0 }
  let c,
    u,
    d,
    p = Ut([]),
    f = Ut([])
  const h = o.state.value[e]
  let g
  function m(t) {
    let n
    ;(c = u = !1),
      'function' == typeof t
        ? (t(o.state.value[e]),
          (n = { type: t_.patchFunction, storeId: e, events: d }))
        : (l_(o.state.value[e], t),
          (n = { type: t_.patchObject, payload: t, storeId: e, events: d }))
    const r = (g = Symbol())
    xn().then(() => {
      g === r && (c = !0)
    }),
      (u = !0),
      s_(p, n, o.state.value[e])
  }
  i || h || (o.state.value[e] = {}), Jt({})
  const v = i
    ? function () {
        const { state: e } = n,
          t = e ? e() : {}
        this.$patch((e) => {
          u_(e, t)
        })
      }
    : i_
  function y(t, n) {
    return function () {
      Jy(o)
      const r = Array.from(arguments),
        i = [],
        a = []
      function s(e) {
        i.push(e)
      }
      function l(e) {
        a.push(e)
      }
      let c
      s_(f, { args: r, name: t, store: _, after: s, onError: l })
      try {
        c = n.apply(this && this.$id === e ? this : _, r)
      } catch (u) {
        throw (s_(a, u), u)
      }
      return c instanceof Promise
        ? c
            .then((e) => (s_(i, e), e))
            .catch((e) => (s_(a, e), Promise.reject(e)))
        : (s_(i, c), c)
    }
  }
  const _ = Vt({
    _p: o,
    $id: e,
    $onAction: a_.bind(null, f),
    $patch: m,
    $reset: v,
    $subscribe(t, n = {}) {
      const r = a_(p, t, n.detached, () => i()),
        i = a.run(() =>
          Yn(
            () => o.state.value[e],
            (o) => {
              ;('sync' === n.flush ? u : c) &&
                t({ storeId: e, type: t_.direct, events: d }, o)
            },
            u_({}, l, n)
          )
        )
      return r
    },
    $dispose: function () {
      a.stop(), (p = []), (f = []), o._s.delete(e)
    }
  })
  o._s.set(e, _)
  const b = o._e.run(() => ((a = Le()), a.run(() => t())))
  for (const T in b) {
    const t = b[T]
    if ((Qt(t) && (!Qt((x = t)) || !x.effect)) || Ft(t))
      i ||
        (!h ||
          (e_((w = t)) && w.hasOwnProperty(c_)) ||
          (Qt(t) ? (t.value = h[T]) : l_(t, h[T])),
        (o.state.value[e][T] = t))
    else if ('function' == typeof t) {
      const e = y(T, t)
      ;(b[T] = e), (s.actions[T] = t)
    }
  }
  var w, x
  return (
    u_(_, b),
    u_(Ht(_), b),
    Object.defineProperty(_, '$state', {
      get: () => o.state.value[e],
      set: (e) => {
        m((t) => {
          u_(t, e)
        })
      }
    }),
    o._p.forEach((e) => {
      u_(
        _,
        a.run(() => e({ store: _, app: o._a, pinia: o, options: s }))
      )
    }),
    h && i && n.hydrate && n.hydrate(_.$state, h),
    (c = !0),
    (u = !0),
    _
  )
}
function f_(e, t, n) {
  let o, r
  const i = 'function' == typeof t
  function a(e, n) {
    const a = si()
    ;(e = e || (a && Wn(Zy, null))) && Jy(e),
      (e = Qy)._s.has(o) || (i ? p_(o, t, r, e) : d_(o, r, e))
    return e._s.get(o)
  }
  return (
    'string' == typeof e ? ((o = e), (r = i ? n : t)) : ((r = e), (o = e.id)),
    (a.$id = o),
    a
  )
}
let h_ = 'Store'
function g_(e, t) {
  return Array.isArray(t)
    ? t.reduce(
        (t, n) => (
          (t[n] = function () {
            return e(this.$pinia)[n]
          }),
          t
        ),
        {}
      )
    : Object.keys(t).reduce(
        (n, o) => (
          (n[o] = function () {
            const n = e(this.$pinia),
              r = t[o]
            return 'function' == typeof r ? r.call(this, n) : n[r]
          }),
          n
        ),
        {}
      )
}
const m_ = g_
const v_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get MutationType() {
          return t_
        },
        PiniaVuePlugin: function (e) {
          e.mixin({
            beforeCreate() {
              const e = this.$options
              if (e.pinia) {
                const t = e.pinia
                if (!this._provided) {
                  const e = {}
                  Object.defineProperty(this, '_provided', {
                    get: () => e,
                    set: (t) => Object.assign(e, t)
                  })
                }
                ;(this._provided[Zy] = t),
                  this.$pinia || (this.$pinia = t),
                  (t._a = this),
                  o_ && Jy(t)
              } else
                !this.$pinia &&
                  e.parent &&
                  e.parent.$pinia &&
                  (this.$pinia = e.parent.$pinia)
            },
            destroyed() {
              delete this._pStores
            }
          })
        },
        acceptHMRUpdate: function (e, t) {
          return () => {}
        },
        createPinia: r_,
        defineStore: f_,
        getActivePinia: () => (si() && Wn(Zy)) || Qy,
        mapActions: function (e, t) {
          return Array.isArray(t)
            ? t.reduce(
                (t, n) => (
                  (t[n] = function (...t) {
                    return e(this.$pinia)[n](...t)
                  }),
                  t
                ),
                {}
              )
            : Object.keys(t).reduce(
                (n, o) => (
                  (n[o] = function (...n) {
                    return e(this.$pinia)[t[o]](...n)
                  }),
                  n
                ),
                {}
              )
        },
        mapGetters: m_,
        mapState: g_,
        mapStores: function (...e) {
          return e.reduce(
            (e, t) => (
              (e[t.$id + h_] = function () {
                return t(this.$pinia)
              }),
              e
            ),
            {}
          )
        },
        mapWritableState: function (e, t) {
          return Array.isArray(t)
            ? t.reduce(
                (t, n) => (
                  (t[n] = {
                    get() {
                      return e(this.$pinia)[n]
                    },
                    set(t) {
                      return (e(this.$pinia)[n] = t)
                    }
                  }),
                  t
                ),
                {}
              )
            : Object.keys(t).reduce(
                (n, o) => (
                  (n[o] = {
                    get() {
                      return e(this.$pinia)[t[o]]
                    },
                    set(n) {
                      return (e(this.$pinia)[t[o]] = n)
                    }
                  }),
                  n
                ),
                {}
              )
        },
        setActivePinia: Jy,
        setMapStoreSuffix: function (e) {
          h_ = e
        },
        skipHydrate: function (e) {
          return Object.defineProperty(e, c_, {})
        },
        storeToRefs: function (e) {
          {
            e = Ht(e)
            const t = {}
            for (const n in e) {
              const o = e[n]
              ;(Qt(o) || Ft(o)) && (t[n] = sn(e, n))
            }
            return t
          }
        }
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  y_ = (e, t) => {
    const n = e.__vccOpts || e
    for (const [o, r] of t) n[o] = r
    return n
  },
  __ = y_(
    so({
      name: 'DemoBlock',
      options: { virtualHost: !0 },
      props: { card: { type: Boolean, default: !0 }, title: String },
      setup(e) {
        const t = e
        return (e, n) => {
          const o = Qf
          return (
            Nr(),
            qr(
              o,
              { class: 'zebra-doc-demo-wrapper' },
              {
                default: Nn(() => [
                  Gr(
                    o,
                    { class: 'zebra-doc-demo-block' },
                    {
                      default: Nn(() => [
                        t.title
                          ? (Nr(),
                            qr(
                              o,
                              { key: 0, class: 'zebra-doc-demo-block__title' },
                              { default: Nn(() => [Qr(f(t.title), 1)]), _: 1 }
                            ))
                          : Jr('', !0),
                        t.card
                          ? (Nr(),
                            qr(
                              o,
                              { key: 1, class: 'zebra-doc-demo-block__card' },
                              {
                                default: Nn(() => [
                                  Yo(e.$slots, 'default', {}, void 0, !0)
                                ]),
                                _: 3
                              }
                            ))
                          : Yo(e.$slots, 'default', { key: 2 }, void 0, !0)
                      ]),
                      _: 3
                    }
                  )
                ]),
                _: 3
              }
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-20cac6fc']]
  ),
  b_ = y_(
    so({
      __name: 'DemoItem',
      props: {
        item: { type: Object, default: () => ({}) },
        height: { type: String, default: '300rpx' },
        customStyle: { type: Object, default: () => ({}) }
      },
      setup(e) {
        const t = e
        return (n, r) => {
          const i = Qf
          return (
            Nr(),
            qr(
              i,
              {
                class: 'item',
                style: o([
                  {
                    background: t.item.background,
                    height: t.height,
                    ...t.customStyle
                  }
                ])
              },
              { default: Nn(() => [Qr(f(e.item.text), 1)]), _: 1 },
              8,
              ['style']
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-953f9c88']]
  )
;(function () {
  const e = Ta(Ky)
  return (
    e.use(r_()),
    e.component('DemoBlock', __),
    e.component('DemoItem', b_),
    { app: e, Pinia: v_ }
  )
})()
  .app.use(jh)
  .mount('#app')
export {
  fd as $,
  fg as A,
  dd as B,
  Uf as C,
  mi as D,
  nn as E,
  Lr as F,
  Do as G,
  hg as H,
  Oo as I,
  cf as J,
  Uo as K,
  si as L,
  Xr as M,
  Pd as N,
  Ad as O,
  Np as P,
  Xd as Q,
  Io as R,
  jf as S,
  L as T,
  Co as U,
  te as V,
  di as W,
  Wn as X,
  f_ as Y,
  vg as Z,
  y_ as _,
  Gr as a,
  gg as a0,
  Fg as a1,
  iu as a2,
  vo as a3,
  yo as a4,
  zn as a5,
  Vt as a6,
  Kd as a7,
  am as a8,
  Po as a9,
  Hn as aa,
  ni as ab,
  Ao as ac,
  zr as ad,
  xn as ae,
  Vo as af,
  _a as ag,
  jd as ah,
  Kf as ai,
  Dg as aj,
  Tg as ak,
  yg as al,
  Vg as am,
  Lo as an,
  lm as ao,
  _g as ap,
  Qr as b,
  qr as c,
  so as d,
  Fr as e,
  Wg as f,
  Th as g,
  zg as h,
  Qf as i,
  Hg as j,
  Jt as k,
  Yn as l,
  qo as m,
  l as n,
  Nr as o,
  Jr as p,
  Wp as q,
  Ho as r,
  pd as s,
  f as t,
  Yd as u,
  cd as v,
  Nn as w,
  Yo as x,
  o as y,
  ya as z
}
