import {
  d as e,
  o as t,
  c as s,
  w as a,
  a as i,
  b as r,
  t as l,
  e as n,
  F as o,
  r as d,
  n as p,
  g as c,
  f as u,
  h as m,
  i as f,
  _ as g,
  j as v,
  k as w,
  l as b,
  m as S,
  p as C,
  q as x,
  $ as y,
  s as T,
  u as E,
  v as P,
  x as M,
  y as k,
  z as I,
  A as _,
  B as O,
  C as z,
  D,
  E as G
} from './index-7fd204f3.js'
import { u as A, r as B, _ as L, a as j } from './DemoPage.0bae30a9.js'
import { _ as R } from './z-switch.e182d14d.js'
import { _ as N, a as H } from './z-tabbar.119e2831.js'
import './index.389bd7d1.js'
import './useParent.5b9c05b5.js'
import './useChildren.fb2421ae.js'
const F = g(
    e({
      __name: 'DemoHomeNav',
      props: {
        group: {
          type: Object,
          default: function () {
            return null
          }
        }
      },
      setup(e) {
        const h = e
        return (g, v) => {
          const w = f
          return (
            t(),
            s(
              w,
              { class: 'demo-home-nav' },
              {
                default: a(() => [
                  i(
                    w,
                    { class: 'demo-home-nav__title' },
                    { default: a(() => [r(l(e.group.groupName), 1)]), _: 1 }
                  ),
                  i(
                    w,
                    { class: 'demo-home-nav__group' },
                    {
                      default: a(() => [
                        (t(!0),
                        n(
                          o,
                          null,
                          d(
                            h.group.list,
                            (e, n) => (
                              t(),
                              s(
                                w,
                                {
                                  key: n,
                                  class: 'demo-home-nav__block',
                                  onClick: (t) =>
                                    ((e) => {
                                      const t = `/pages${e}${e}`
                                      c().length > 9
                                        ? u({ url: t })
                                        : m({ url: t })
                                    })(e.path)
                                },
                                {
                                  default: a(() => [
                                    i(
                                      w,
                                      { class: 'block-card' },
                                      {
                                        default: a(() => [
                                          i(
                                            w,
                                            { class: 'block-card-icon' },
                                            {
                                              default: a(() => [
                                                i(
                                                  w,
                                                  {
                                                    class: p([
                                                      'zebra-icon',
                                                      'card-icon-content',
                                                      'zebra-icon-' + e.image
                                                    ])
                                                  },
                                                  null,
                                                  8,
                                                  ['class']
                                                ),
                                                i(
                                                  w,
                                                  { class: 'block-card-title' },
                                                  {
                                                    default: a(() => [
                                                      r(
                                                        l(
                                                          e.title.split(' ')[1]
                                                        ),
                                                        1
                                                      )
                                                    ]),
                                                    _: 2
                                                  },
                                                  1024
                                                ),
                                                i(
                                                  w,
                                                  { class: 'block-card-text' },
                                                  {
                                                    default: a(() => [
                                                      r(
                                                        l(
                                                          e.title.split(' ')[0]
                                                        ),
                                                        1
                                                      )
                                                    ]),
                                                    _: 2
                                                  },
                                                  1024
                                                )
                                              ]),
                                              _: 2
                                            },
                                            1024
                                          )
                                        ]),
                                        _: 2
                                      },
                                      1024
                                    )
                                  ]),
                                  _: 2
                                },
                                1032,
                                ['onClick']
                              )
                            )
                          ),
                          128
                        ))
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
    [['__scopeId', 'data-v-d98e3d5b']]
  ),
  V = A(),
  W = [
    'quickstart',
    'advancedUsage',
    'faq',
    'changedlog',
    'contribution',
    'international'
  ]
function X(e) {
  const t = e.match(/\/([^/]+)$/)
  if (t) {
    const e = t[1]
    return e.replace(/-([a-z])/g, function (e) {
      return e[1].toUpperCase()
    })
  }
  return null
}
window.top.postMessage({ type: 'iframeReady' }, '*'),
  window.addEventListener('message', (e) => {
    'windowIframeReady' === e.data.type &&
      window.top.postMessage({ type: 'iframeReady' }, '*'),
      'replacePath' === e.data.type &&
        (!X(e.data.value) || W.includes(X(e.data.value))
          ? v({ url: '/pages/index/index' })
          : v({ url: `/pages/${X(e.data.value)}/${X(e.data.value)}` }))
  })
const Y = g(
  e({
    __name: 'DemoHome',
    props: {
      list: {
        type: Array,
        default: function () {
          return []
        }
      },
      showTitle: { type: Boolean, default: !0 },
      showDesc: { type: Boolean, default: !0 }
    },
    setup(e) {
      const l = e
      window.addEventListener('message', (e) => {
        var t, s
        if ('updateTheme' !== (null == (t = e.data) ? void 0 : t.type)) return
        const a = (null == (s = e.data) ? void 0 : s.value) || ''
        V.setTheme('light-n' == a ? 'light' : 'dark')
      })
      const p = A(),
        c = w('dark' == p.theme),
        u = (e) => {
          p.setTheme(e ? 'dark' : 'light'),
            window.top.postMessage(
              { type: 'updateThemeParent', value: V.theme },
              '*'
            )
        }
      return (
        b(
          () => p.theme,
          (e) => {
            c.value = 'dark' == e
          }
        ),
        (e, p) => {
          const h = x,
            m = f,
            g = B(S('z-icon'), L),
            v = B(S('z-switch'), R),
            w = B(S('DemoHomeNav'), F)
          return (
            t(),
            s(
              m,
              { class: 'demo-home' },
              {
                default: a(() => [
                  l.showTitle
                    ? (t(),
                      s(
                        m,
                        { key: 0, class: 'demo-home__title' },
                        {
                          default: a(() => [
                            i(h, {
                              mode: 'aspectFit',
                              class: 'demo-home__image',
                              src: '/h5/assets/logo-285d0b6a.png'
                            }),
                            i(
                              m,
                              { class: 'demo-home__text' },
                              { default: a(() => [r(' Zebra UI ')]), _: 1 }
                            )
                          ]),
                          _: 1
                        }
                      ))
                    : C('', !0),
                  l.showDesc
                    ? (t(),
                      s(
                        m,
                        { key: 1, class: 'demo-home__desc' },
                        {
                          default: a(() => [
                            r(' 多端适配的uniapp组件库 '),
                            i(
                              v,
                              {
                                modelValue: c.value,
                                'onUpdate:modelValue':
                                  p[0] || (p[0] = (e) => (c.value = e)),
                                onChange: u
                              },
                              {
                                node: a(() => [
                                  i(
                                    m,
                                    { class: 'icon-wrapper' },
                                    {
                                      default: a(() => [
                                        i(
                                          g,
                                          {
                                            name: c.value ? 'moon' : 'sun',
                                            color: c.value
                                              ? 'var(--z-blue)'
                                              : 'var(--z-gray-5)',
                                            size: '40rpx'
                                          },
                                          null,
                                          8,
                                          ['name', 'color']
                                        )
                                      ]),
                                      _: 1
                                    }
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
                      ))
                    : C('', !0),
                  (t(!0),
                  n(
                    o,
                    null,
                    d(
                      l.list,
                      (e, r) => (
                        t(),
                        s(
                          m,
                          { key: r },
                          {
                            default: a(() => [
                              i(w, { group: e }, null, 8, ['group'])
                            ]),
                            _: 2
                          },
                          1024
                        )
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              }
            )
          )
        }
      )
    }
  }),
  [['__scopeId', 'data-v-1fb1a3d3']]
)
function U(e, t) {
  return new Promise((s) => {
    E()
      .in(e)
      .select(t)
      .boundingClientRect()
      .exec((e = []) => s(e[0]))
  })
}
const q = {
  name: 'z-swipe-item',
  mixins: [
    (function (e, t = {}) {
      return (
        t.indexKey,
        {
          inject: { [e]: { default: null } },
          mounted() {
            ;(this.parent = this[e]), this.bindRelation()
          },
          beforeUnmount() {
            this.parent &&
              ((this.parent.children = this.parent.children.filter(
                (e) => e !== this
              )),
              y('childrenReady' + this.parent._uid, this))
          },
          methods: {
            bindRelation() {
              if (!this.parent || -1 !== this.parent.children.indexOf(this))
                return
              const e = [...this.parent.children, this]
              ;(this.parent.children = e),
                (this.index = this.parent.children.indexOf(this)),
                y('childrenReady' + this.parent._uid, this)
            }
          }
        }
      )
    })('zSwipe')
  ],
  props: {
    customStyle: { type: Object, default: () => ({}) },
    swiperItemWidth: { type: [String, Number], default: 0 },
    swiperItemHeight: { type: [String, Number], default: 0 }
  },
  data: () => ({
    wxsItemTransform: '',
    itemStyle: {},
    offsetLeft: 0,
    offsetTop: 0,
    itemClass: [],
    width: 0,
    height: 0
  }),
  mounted() {
    this.getSize()
  },
  computed: {
    slideClass() {
      return this.itemClass.join(' ')
    }
  },
  watch: {
    swiperItemWidth: {
      handler(e) {
        e && this.$set(this.itemStyle, 'width', this.unitFormat(e, 'rpx'))
      },
      immediate: !0
    },
    swiperItemHeight: {
      handler(e) {
        e && this.$set(this.itemStyle, 'height', this.unitFormat(e, 'rpx'))
      },
      immediate: !0
    }
  },
  methods: {
    unitFormat: (e, t) =>
      'rpx' == t
        ? e.includes('rpx') || e.includes('px')
          ? e
          : e + 'px'
        : 'number' == t
          ? e.includes('rpx')
            ? P(parseInt(e.replace('rpx', '')))
            : !e.includes('rpx') && e.includes('px')
              ? parseInt(e.replace('px', ''))
              : e
          : void 0,
    onClickSlide(e) {
      this.$emit('click', { event: e, index: this.index }),
        this.parent.swiper.updateClickedSlide(this.index),
        this.parent.swiper.emit('slideClick', this.index)
    },
    transform(e) {
      this.$set(this.itemStyle, 'transform', e)
    },
    transition(e) {
      this.$set(this.itemStyle, 'transition-duration', `${e}ms`)
    },
    willChange(e) {
      this.$set(this.itemStyle, 'will-change', e)
    },
    css(e) {
      Object.keys(e).forEach((t) => {
        this.$set(this.itemStyle, t, e[t])
      })
    },
    transitionEnd(e, t) {
      setTimeout(e, t)
    },
    getSize() {
      const e = E().in(this)
      return new Promise((t, s) => {
        e.select('.swiper-slide')
          .boundingClientRect((e) => {
            this.swiperItemWidth &&
              ((this.width = this.unitFormat(this.swiperItemWidth, 'number')),
              (this.height = e.height)),
              this.swiperItemHeight &&
                ((this.width = e.width),
                (this.height = this.unitFormat(
                  this.swiperItemHeight,
                  'number'
                ))),
              this.swiperItemWidth ||
                this.swiperItemHeight ||
                ((this.width = e.width), (this.height = e.height)),
              t({ width: this.width, height: this.height })
          })
          .exec()
      })
    },
    addClass(e) {
      this.itemClass = Array.from(new Set([...this.itemClass, ...e.split(' ')]))
    },
    removeClass(e) {
      this.itemClass = this.itemClass.filter((t) => !e.split(' ').includes(t))
    },
    hasClass(e) {
      return this.itemClass.includes(e)
    },
    nextAll() {
      return this.parent.children.filter((e) => e.index > this.index)
    },
    prevAll() {
      return this.parent.children.filter((e) => e.index < this.index).reverse()
    }
  }
}
const Z = g(q, [
  [
    'render',
    function (e, i, r, l, n, o) {
      const d = f
      return (
        t(),
        s(
          d,
          {
            class: p(['swiper-slide', o.slideClass]),
            style: k([n.itemStyle, r.customStyle]),
            onClick: I(o.onClickSlide, ['stop'])
          },
          { default: a(() => [M(e.$slots, 'default', {}, void 0, !0)]), _: 3 },
          8,
          ['class', 'style', 'onClick']
        )
      )
    }
  ],
  ['__scopeId', 'data-v-0270bd42']
])
function K(e) {
  return (
    'object' == typeof e &&
    null !== e &&
    e.constructor &&
    'Object' === Object.prototype.toString.call(e).slice(8, -1)
  )
}
function J() {
  return Date.now()
}
function Q(e, t = 0) {
  return setTimeout(e, t)
}
function ee(...e) {
  const t = Object(e[0]),
    s = ['__proto__', 'constructor', 'prototype']
  for (let a = 1; a < e.length; a += 1) {
    const i = e[a]
    if (null != i) {
      const e = Object.keys(Object(i)).filter((e) => s.indexOf(e) < 0)
      for (let s = 0, a = e.length; s < a; s += 1) {
        const a = e[s],
          r = Object.getOwnPropertyDescriptor(i, a)
        void 0 !== r &&
          r.enumerable &&
          (K(t[a]) && K(i[a])
            ? i[a].__swiper__
              ? (t[a] = i[a])
              : ee(t[a], i[a])
            : !K(t[a]) && K(i[a])
              ? ((t[a] = {}), i[a].__swiper__ ? (t[a] = i[a]) : ee(t[a], i[a]))
              : (t[a] = i[a]))
      }
    }
  }
  return t
}
function te(e, t, s) {
  e.style.setProperty(t, s)
}
function se({ swiper: e, targetPosition: t, side: s }) {
  const a = getWindow(),
    i = -e.translate
  let r,
    l = null
  const n = e.params.speed
  ;(e.wrapperEl.style.scrollSnapType = 'none'),
    a.cancelAnimationFrame(e.cssModeFrameID)
  const o = t > i ? 'next' : 'prev',
    d = (e, t) => ('next' === o && e >= t) || ('prev' === o && e <= t),
    p = () => {
      ;(r = new Date().getTime()), null === l && (l = r)
      const o = Math.max(Math.min((r - l) / n, 1), 0),
        c = 0.5 - Math.cos(o * Math.PI) / 2
      let u = i + c * (t - i)
      if ((d(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), d(u, t)))
        return (
          (e.wrapperEl.style.overflow = 'hidden'),
          (e.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ;(e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({ [s]: u })
          }),
          void a.cancelAnimationFrame(e.cssModeFrameID)
        )
      e.cssModeFrameID = a.requestAnimationFrame(p)
    }
  p()
}
let ae, ie, re
function le() {
  return (
    ae ||
      (ae = {
        smoothScroll: !0,
        touch: navigator.userAgent.indexOf('Mobile') > -1,
        passiveListener: (function () {
          let e = !1
          try {
            Object.defineProperty({}, 'passive', {
              get() {
                e = !0
              }
            })
          } catch (t) {}
          return e
        })(),
        gestures: !1
      }),
    ae
  )
}
function ne(e = {}) {
  return (
    ie ||
      (ie = (function ({ userAgent: e } = {}) {
        le()
        const t = { ios: !1, android: !1 },
          s = _()
        return (
          'android' == s.platform && ((t.os = 'android'), (t.android = !0)),
          'ios' == s.platform && ((t.os = 'ios'), (t.ios = !0)),
          t
        )
      })(e)),
    ie
  )
}
function oe() {
  return (
    re ||
      (re = (function () {
        function e() {
          return _().model
        }
        return {
          isSafari: e(),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e())
        }
      })()),
    re
  )
}
function de(e, t) {
  return function (s = {}) {
    const a = Object.keys(s)[0],
      i = s[a]
    'object' == typeof i && null !== i
      ? (['navigation', 'pagination', 'scrollbar'].indexOf(a) >= 0 &&
          !0 === e[a] &&
          (e[a] = { auto: !0 }),
        a in e && 'enabled' in i
          ? (!0 === e[a] && (e[a] = { enabled: !0 }),
            'object' != typeof e[a] || 'enabled' in e[a] || (e[a].enabled = !0),
            e[a] || (e[a] = { enabled: !1 }),
            ee(t, s))
          : ee(t, s))
      : ee(t, s)
  }
}
function pe({ swiper: e, runCallbacks: t, direction: s, step: a }) {
  const { activeIndex: i, previousIndex: r } = e
  let l = s
  if (
    (l || (l = i > r ? 'next' : i < r ? 'prev' : 'reset'),
    e.emit(`transition${a}`),
    t && i !== r)
  ) {
    if ('reset' === l) return void e.emit(`slideResetTransition${a}`)
    e.emit(`slideChangeTransition${a}`),
      'next' === l
        ? e.emit(`slideNextTransition${a}`)
        : e.emit(`slidePrevTransition${a}`)
  }
}
const ce = {
  init: !0,
  direction: 'horizontal',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  enabled: !0,
  focusableElements: 'input, select, option, textarea, button, video, label',
  width: null,
  height: null,
  preventInteractionOnTransition: !1,
  userAgent: null,
  url: null,
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  autoHeight: !1,
  setWrapperSize: !1,
  virtualTranslate: !1,
  virtualList: [],
  virtualIndexList: [],
  effect: 'slide',
  breakpoints: void 0,
  breakpointsBase: 'window',
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  watchOverflow: !0,
  roundLengths: !1,
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 0,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  uniqueNavElements: !0,
  resistance: !0,
  resistanceRatio: 0.85,
  watchSlidesProgress: !1,
  grabCursor: !1,
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  preloadImages: !0,
  updateOnImagesReady: !0,
  loop: !1,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: !1,
  loopPreventsSlide: !0,
  rewind: !1,
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  noSwiping: !1,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  passiveListeners: !0,
  containerModifierClass: 'swiper-',
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  slideThumbsClass: 'swiper-slide-thumb',
  runCallbacksOnInit: !0,
  _emitClasses: !1,
  willChange: !1
}
function ue(e) {
  const t = this,
    s = t.touchEventsData,
    { params: a, touches: i, enabled: r } = t
  if (!r) return
  if (t.animating && a.preventInteractionOnTransition) return
  !t.animating && a.cssMode && a.loop && t.loopFix()
  let l = e
  if (
    (l.originalEvent && (l = l.originalEvent),
    (s.isTouchEvent =
      'touchstart' === l.type ||
      'touchStart' === l.type ||
      'onTouchstart' === l.type),
    !s.isTouchEvent && 'which' in l && 3 === l.which)
  )
    return
  if (!s.isTouchEvent && 'button' in l && l.button > 0) return
  if (s.isTouched && s.isMoved) return
  if (
    (a.noSwipingClass && a.noSwipingClass,
    a.noSwipingSelector ? a.noSwipingSelector : a.noSwipingClass,
    l.target && l.target.shadowRoot,
    a.noSwiping)
  )
    return void (t.allowClick = !0)
  if (a.swipeHandler && !$targetEl.closest(a.swipeHandler)[0]) return
  ;(i.currentX =
    'touchstart' === l.type ||
    'touchStart' === l.type ||
    'onTouchstart' === l.type
      ? l.touches[0].pageX
      : l.pageX),
    (i.currentY =
      'touchstart' === l.type ||
      'touchStart' === l.type ||
      'onTouchstart' === l.type
        ? l.touches[0].pageY
        : l.pageY)
  const n = i.currentX,
    o = i.currentY
  a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
    a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold,
    Object.assign(s, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }),
    (i.startX = n),
    (i.startY = o),
    (s.touchStartTime = J()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    a.threshold > 0 && (s.allowThresholdMove = !1),
    t.emit('touch-start', l)
}
function he(e) {
  const t = this,
    s = t.touchEventsData,
    { params: a, touches: i, rtlTranslate: r, enabled: l } = t
  if (!l) return
  let n = e
  if ((n.originalEvent && (n = n.originalEvent), !s.isTouched))
    return void (
      s.startMoving &&
      s.isScrolling &&
      t.emit('touchMoveOpposite', n)
    )
  if (
    s.isTouchEvent &&
    'touchmove' !== n.type &&
    'touchMove' !== n.type &&
    'onTouchmove' !== n.type
  )
    return
  const o =
      ('touchmove' === n.type ||
        'touchMove' === n.type ||
        'onTouchmove' === n.type) &&
      n.touches &&
      (n.touches[0] || n.changedTouches[0]),
    d =
      'touchmove' === n.type ||
      'touchMove' === n.type ||
      'onTouchmove' === n.type
        ? o.pageX
        : n.pageX,
    p =
      'touchmove' === n.type ||
      'touchMove' === n.type ||
      'onTouchmove' === n.type
        ? o.pageY
        : n.pageY
  if (n.preventedByNestedSwiper) return (i.startX = d), void (i.startY = p)
  if (!t.allowTouchMove)
    return (
      (t.allowClick = !1),
      void (
        s.isTouched &&
        (Object.assign(i, { startX: d, startY: p, currentX: d, currentY: p }),
        (s.touchStartTime = J()))
      )
    )
  if (s.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
    if (t.isVertical()) {
      if (
        (p < i.startY && t.translate <= t.maxTranslate()) ||
        (p > i.startY && t.translate >= t.minTranslate())
      )
        return (s.isTouched = !1), void (s.isMoved = !1)
    } else if (
      (d < i.startX && t.translate <= t.maxTranslate()) ||
      (d > i.startX && t.translate >= t.minTranslate())
    )
      return
  if (
    (s.allowTouchCallbacks && t.emit('touch-move', n),
    n.touches && n.touches.length > 1)
  )
    return
  ;(i.currentX = d), (i.currentY = p)
  const c = i.currentX - i.startX,
    u = i.currentY - i.startY
  if (t.params.threshold && Math.sqrt(c ** 2 + u ** 2) < t.params.threshold)
    return
  if (void 0 === s.isScrolling) {
    let e
    ;(t.isHorizontal() && i.currentY === i.startY) ||
    (t.isVertical() && i.currentX === i.startX)
      ? (s.isScrolling = !1)
      : c * c + u * u >= 25 &&
        ((e = (180 * Math.atan2(Math.abs(u), Math.abs(c))) / Math.PI),
        (s.isScrolling = t.isHorizontal()
          ? e > a.touchAngle
          : 90 - e > a.touchAngle))
  }
  if (
    (s.isScrolling && t.emit('touchMoveOpposite', n),
    void 0 === s.startMoving &&
      ((i.currentX === i.startX && i.currentY === i.startY) ||
        (s.startMoving = !0)),
    s.isScrolling)
  )
    return void (s.isTouched = !1)
  if (!s.startMoving) return
  ;(t.allowClick = !1),
    !a.cssMode && n.cancelable && n.preventDefault(),
    a.touchMoveStopPropagation && !a.nested && n.stopPropagation(),
    s.isMoved ||
      (a.loop && !a.cssMode && t.loopFix(),
      (s.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating && t.$wrapperEl.emit('transitionend', [t]),
      (s.allowMomentumBounce = !1),
      !a.grabCursor ||
        (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) ||
        t.setGrabCursor(!0),
      t.emit('sliderFirstMove', n)),
    t.emit('sliderMove', n),
    (s.isMoved = !0)
  let h = t.isHorizontal() ? c : u
  ;(i.diff = h),
    (h *= a.touchRatio),
    r && (h = -h),
    (t.swipeDirection = h > 0 ? 'prev' : 'next'),
    (s.currentTranslate = h + s.startTranslate)
  let m = !0,
    f = a.resistanceRatio
  if (
    (a.touchReleaseOnEdges && (f = 0),
    h > 0 && s.currentTranslate > t.minTranslate()
      ? ((m = !1),
        a.resistance &&
          (s.currentTranslate =
            t.minTranslate() -
            1 +
            (-t.minTranslate() + s.startTranslate + h) ** f))
      : h < 0 &&
        s.currentTranslate < t.maxTranslate() &&
        ((m = !1),
        a.resistance &&
          (s.currentTranslate =
            t.maxTranslate() +
            1 -
            (t.maxTranslate() - s.startTranslate - h) ** f)),
    m && (n.preventedByNestedSwiper = !0),
    !t.allowSlideNext &&
      'next' === t.swipeDirection &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !t.allowSlidePrev &&
      'prev' === t.swipeDirection &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    t.allowSlidePrev ||
      t.allowSlideNext ||
      (s.currentTranslate = s.startTranslate),
    a.threshold > 0)
  ) {
    if (!(Math.abs(h) > a.threshold || s.allowThresholdMove))
      return void (s.currentTranslate = s.startTranslate)
    if (!s.allowThresholdMove)
      return (
        (s.allowThresholdMove = !0),
        (i.startX = i.currentX),
        (i.startY = i.currentY),
        (s.currentTranslate = s.startTranslate),
        void (i.diff = t.isHorizontal()
          ? i.currentX - i.startX
          : i.currentY - i.startY)
      )
  }
  a.followFinger &&
    !a.cssMode &&
    (((a.freeMode && a.freeMode.enabled && t.freeMode) ||
      a.watchSlidesProgress) &&
      (t.updateActiveIndex(), t.updateSlidesClasses()),
    t.params.freeMode &&
      a.freeMode.enabled &&
      t.freeMode &&
      t.freeMode.onTouchMove(),
    t.updateProgress(s.currentTranslate),
    t.setTranslate(s.currentTranslate))
}
function me(e) {
  const t = this,
    s = t.touchEventsData,
    { params: a, touches: i, rtlTranslate: r, slidesGrid: l, enabled: n } = t
  if (!n) return
  let o = e
  if (
    (o.originalEvent && (o = o.originalEvent),
    s.allowTouchCallbacks && t.emit('touch-end', o),
    (s.allowTouchCallbacks = !1),
    !s.isTouched)
  )
    return (
      s.isMoved && a.grabCursor && t.setGrabCursor(!1),
      (s.isMoved = !1),
      void (s.startMoving = !1)
    )
  a.grabCursor &&
    s.isMoved &&
    s.isTouched &&
    (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
    t.setGrabCursor(!1)
  const d = J(),
    p = d - s.touchStartTime
  if (
    (t.allowClick &&
      (o.path || (o.composedPath && o.composedPath()),
      t.emit('tap click', o),
      p < 300 &&
        d - s.lastClickTime < 300 &&
        t.emit('doubleTap doubleClick', o)),
    (s.lastClickTime = J()),
    Q(() => {
      t.destroyed || (t.allowClick = !0)
    }),
    !s.isTouched ||
      !s.isMoved ||
      !t.swipeDirection ||
      0 === i.diff ||
      s.currentTranslate === s.startTranslate)
  )
    return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
  let c
  if (
    ((s.isTouched = !1),
    (s.isMoved = !1),
    (s.startMoving = !1),
    (c = a.followFinger
      ? r
        ? t.translate
        : -t.translate
      : -s.currentTranslate),
    a.cssMode)
  )
    return
  if (t.params.freeMode && a.freeMode.enabled)
    return void t.freeMode.onTouchEnd({ currentPos: c })
  let u = 0,
    h = t.slidesSizesGrid[0]
  for (
    let g = 0;
    g < l.length;
    g += g < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
  ) {
    const e = g < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
    void 0 !== l[g + e]
      ? c >= l[g] && c < l[g + e] && ((u = g), (h = l[g + e] - l[g]))
      : c >= l[g] && ((u = g), (h = l[l.length - 1] - l[l.length - 2]))
  }
  const m = (c - l[u]) / h,
    f = u < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
  if (p > a.longSwipesMs) {
    if (!a.longSwipes) return void t.slideTo(t.activeIndex)
    'next' === t.swipeDirection &&
      (m >= a.longSwipesRatio ? t.slideTo(u + f) : t.slideTo(u)),
      'prev' === t.swipeDirection &&
        (m > 1 - a.longSwipesRatio ? t.slideTo(u + f) : t.slideTo(u))
  } else {
    if (!a.shortSwipes) return void t.slideTo(t.activeIndex)
    t.navigation &&
    (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
      ? o.target === t.navigation.nextEl
        ? t.slideTo(u + f)
        : t.slideTo(u)
      : ('next' === t.swipeDirection && t.slideTo(u + f),
        'prev' === t.swipeDirection && t.slideTo(u))
  }
}
function fe() {
  const e = this,
    { params: t, el: s } = e
  if (s && 0 === s.offsetWidth) return
  t.breakpoints && e.setBreakpoint()
  const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e
  ;(e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses(),
    ('auto' === t.slidesPerView || t.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = a),
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
}
function ge(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function ve() {
  const e = this,
    { wrapperEl: t, rtlTranslate: s, enabled: a } = e
  if (!a) return
  let i
  ;(e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    -0 === e.translate && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses()
  const r = e.maxTranslate() - e.minTranslate()
  ;(i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
    i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
    e.emit('setTranslate', e.translate, !1)
}
const we = (e, t) => {
  const { params: s, touchEvents: a, wrapperEl: i, device: r, support: l } = e
  e.native
  const n = !!s.nested,
    o = t
  if (l.touch)
    'touchstart' !== a.start || !l.passiveListener || s.passiveListeners
  else {
    let s = 'on' === t ? 'addEventListener' : 'removeEventListener'
    document.querySelector(`#${e.$el.swiperElId}`) &&
      document
        .querySelector(`#${e.$el.swiperElId}`)
        [s](a.start, e.onTouchStart, !1),
      document[s](a.move, e.onTouchMove, n),
      document[s](a.end, e.onTouchEnd, !1)
  }
  s.updateOnWindowResize
    ? e[o](
        r.ios || r.android
          ? 'resize orientationchange observerUpdate'
          : 'resize observerUpdate',
        fe,
        !0
      )
    : e[o]('observerUpdate', fe, !0)
}
const be = {
    eventsEmitter: {
      on(e, t, s) {
        const a = this
        if ('function' != typeof t) return a
        const i = s ? 'unshift' : 'push'
        return (
          e.split(' ').forEach((e) => {
            a.eventsListeners[e] || (a.eventsListeners[e] = []),
              a.eventsListeners[e][i](t)
          }),
          a
        )
      },
      once(e, t, s) {
        const a = this
        if ('function' != typeof t) return a
        function i(...s) {
          a.off(e, i),
            i.__emitterProxy && delete i.__emitterProxy,
            t.apply(a, s)
        }
        return (i.__emitterProxy = t), a.on(e, i, s)
      },
      onAny(e, t) {
        const s = this
        if ('function' != typeof e) return s
        const a = t ? 'unshift' : 'push'
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
        )
      },
      offAny(e) {
        const t = this
        if (!t.eventsAnyListeners) return t
        const s = t.eventsAnyListeners.indexOf(e)
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
      },
      off(e, t) {
        const s = this
        return s.eventsListeners
          ? (e.split(' ').forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((a, i) => {
                    ;(a === t ||
                      (a.__emitterProxy && a.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(i, 1)
                  })
            }),
            s)
          : s
      },
      emit(...e) {
        const t = this
        if (!t.eventsListeners) return t
        let s, a, i
        'string' == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (a = e.slice(1, e.length)), (i = t))
          : ((s = e[0].events), (a = e[0].data), (i = e[0].context || t)),
          a.unshift(i)
        return (
          (Array.isArray(s) ? s : s.split(' ')).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(i, [e, ...a])
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(i, a)
                })
          }),
          t
        )
      }
    },
    update: {
      updateSize: function () {
        const e = this
        let t, s
        const a = e.el
        ;(t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : a.width),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : a.height),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            (Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s
            }))
      },
      updateSlides: function () {
        const e = this
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: 'height',
                'margin-top': 'margin-left',
                'margin-bottom ': 'margin-right',
                'margin-left': 'margin-top',
                'margin-right': 'margin-bottom',
                'padding-left': 'padding-top',
                'padding-right': 'padding-bottom',
                marginRight: 'marginBottom'
              }[t]
        }
        function s(e, s) {
          return parseFloat(e[t(s)] || 0)
        }
        const a = e.params,
          { $wrapperEl: i, size: r, rtlTranslate: l, wrongRTL: n } = e,
          o = e.virtual && a.virtual.enabled,
          d = o ? e.virtual.slides.length : e.slides.length,
          p = e.slides,
          c = o ? e.virtual.slides.length : p.length
        let u = []
        const h = [],
          m = []
        let f = a.slidesOffsetBefore
        'function' == typeof f && (f = a.slidesOffsetBefore.call(e))
        let g = a.slidesOffsetAfter
        'function' == typeof g && (g = a.slidesOffsetAfter.call(e))
        const v = e.snapGrid.length,
          w = e.slidesGrid.length
        let b = a.spaceBetween,
          S = -f,
          C = 0,
          x = 0
        if (void 0 === r) return
        'string' == typeof b &&
          b.indexOf('%') >= 0 &&
          (b = (parseFloat(b.replace('%', '')) / 100) * r),
          (e.virtualSize = -b),
          a.centeredSlides &&
            a.cssMode &&
            (te(e.wrapperEl, '--swiper-centered-offset-before', ''),
            te(e.wrapperEl, '--swiper-centered-offset-after', ''))
        const y = a.grid && a.grid.rows > 1 && e.grid
        let T
        y && e.grid.initSlides(c)
        const E =
          'auto' === a.slidesPerView &&
          a.breakpoints &&
          Object.keys(a.breakpoints).filter(
            (e) => void 0 !== a.breakpoints[e].slidesPerView
          ).length > 0
        if (
          (Array(...Array(c)).forEach(async (i, l) => {
            T = 0
            const n = p[l]
            if (
              (y && e.grid.updateSlide(l, n, c, t), 'auto' === a.slidesPerView)
            ) {
              E && (p[l].style[t('width')] = '')
              const i = n.itemStyle,
                r = n.itemStyle.transform,
                o = n.itemStyle.webkitTransform
              if (
                (r && (n.itemStyle.transform = 'none'),
                o && (n.itemStyle.webkitTransform = 'none'),
                a.roundLengths)
              )
                T = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0)
              else {
                const t = e.isHorizontal() ? n.width : n.height
                s(i, 'padding-left'), s(i, 'padding-right')
                const a = s(i, 'margin-left'),
                  r = s(i, 'margin-right'),
                  l = i['box-sizing']
                T = l && 'border-box' === l ? t + a + r : t
              }
              r && (n.itemStyle.transform = r),
                o && (n.itemStyle.webkitTransform = o),
                a.roundLengths && (T = Math.floor(T))
            } else
              (T = (r - (a.slidesPerView - 1) * b) / a.slidesPerView),
                a.roundLengths && (T = Math.floor(T)),
                p[l] && p[l].css({ [t('width')]: `${T}px` })
            p[l] && (p[l].swiperSlideSize = T),
              a.autoHeight && p[l] && p[l].css({ height: 'auto' }),
              m.push(T),
              a.centeredSlides
                ? ((S = S + T / 2 + C / 2 + b),
                  0 === C && 0 !== l && (S = S - r / 2 - b),
                  0 === l && (S = S - r / 2 - b),
                  Math.abs(S) < 0.001 && (S = 0),
                  a.roundLengths && (S = Math.floor(S)),
                  x % a.slidesPerGroup == 0 && u.push(S),
                  h.push(S))
                : (a.roundLengths && (S = Math.floor(S)),
                  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                    e.params.slidesPerGroup ==
                    0 && u.push(S),
                  h.push(S),
                  (S = S + T + b)),
              (e.virtualSize += T + b),
              (C = T),
              (x += 1)
          }),
          (e.virtualSize = Math.max(e.virtualSize, r) + g),
          l &&
            n &&
            ('slide' === a.effect || 'coverflow' === a.effect) &&
            i.css({ width: `${e.virtualSize + a.spaceBetween}px` }),
          a.setWrapperSize &&
            i.css({ [t('width')]: `${e.virtualSize + a.spaceBetween}px` }),
          y && e.grid.updateWrapperSize(T, u, t),
          !a.centeredSlides)
        ) {
          const t = []
          for (let s = 0; s < u.length; s += 1) {
            let i = u[s]
            a.roundLengths && (i = Math.floor(i)),
              u[s] <= e.virtualSize - r && t.push(i)
          }
          ;(u = t),
            Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
              u.push(e.virtualSize - r)
        }
        if ((0 === u.length && (u = [0]), 0 !== a.spaceBetween)) {
          const s = e.isHorizontal() && l ? 'margin-left' : t('margin-right')
          p.filter((e, t) => !a.cssMode || t !== p.length - 1).forEach((e) => {
            e.css({ [s]: `${b}px` })
          })
        }
        if (a.centeredSlides && a.centeredSlidesBounds) {
          let e = 0
          m.forEach((t) => {
            e += t + (a.spaceBetween ? a.spaceBetween : 0)
          }),
            (e -= a.spaceBetween)
          const t = e - r
          u = u.map((e) => (e < 0 ? -f : e > t ? t + g : e))
        }
        if (a.centerInsufficientSlides) {
          let e = 0
          if (
            (m.forEach((t) => {
              e += t + (a.spaceBetween ? a.spaceBetween : 0)
            }),
            (e -= a.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2
            u.forEach((e, s) => {
              u[s] = e - t
            }),
              h.forEach((e, s) => {
                h[s] = e + t
              })
          }
        }
        if (
          (Object.assign(e, {
            slides: p,
            snapGrid: u,
            slidesGrid: h,
            slidesSizesGrid: m
          }),
          a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
        ) {
          te(e.wrapperEl, '--swiper-centered-offset-before', -u[0] + 'px'),
            te(
              e.wrapperEl,
              '--swiper-centered-offset-after',
              e.size / 2 - m[m.length - 1] / 2 + 'px'
            )
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0]
          ;(e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s))
        }
        return (
          c !== d && e.emit('slidesLengthChange'),
          u.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit('snapGridLengthChange')),
          h.length !== w && e.emit('slidesGridLengthChange'),
          a.watchSlidesProgress && e.updateSlidesOffset(),
          p
        )
      },
      updateAutoHeight: async function (e) {
        const t = this,
          s = [],
          a = t.virtual && t.params.virtual.enabled
        let i,
          r = 0
        'number' == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed)
        const l = (e) =>
          a
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute('data-swiper-slide-index'), 10) === e
              )[0]
            : t.slides[e]
        if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              s.push(e)
            })
          else
            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
              const e = t.activeIndex + i
              if (e > t.slides.length && !a) break
              s.push(l(e))
            }
        else s.push(l(t.activeIndex))
        for (i = 0; i < s.length; i += 1)
          if (void 0 !== s[i]) {
            const e = (await s[i].getSize()).height
            r = e > r ? e : r
          }
        ;(r || 0 === r) && t.$wrapperEl.css({ height: `${r || ''}px` })
      },
      updateSlidesOffset: async function () {
        const e = this,
          t = e.slides
        for (let s = 0; s < t.length; s += 1) {
          let a = (t[s].swiperSlideSize + e.params.spaceBetween) * t[s].index
          t[s].swiperSlideOffset = (e.isHorizontal(), a)
        }
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: a, rtlTranslate: i, snapGrid: r } = t
        if (0 === a.length) return
        ;(void 0 !== a[0].swiperSlideOffset &&
          void 0 !== a[a.length - 1].swiperSlideOffset) ||
          t.updateSlidesOffset()
        let l = -e
        i && (l = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = [])
        for (let n = 0; n < a.length; n += 1) {
          const e = a[n]
          let o = e.swiperSlideOffset
          s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset)
          const d =
              (l + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (e.swiperSlideSize + s.spaceBetween),
            p =
              (l - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (e.swiperSlideSize + s.spaceBetween),
            c = -(l - o),
            u = c + t.slidesSizesGrid[n]
          ;((c >= 0 && c < t.size - 1) ||
            (u > 1 && u <= t.size) ||
            (c <= 0 && u >= t.size)) &&
            (t.visibleSlides.push(e),
            t.visibleSlidesIndexes.push(n),
            a[n].addClass(s.slideVisibleClass)),
            (e.progress = i ? -d : d),
            (e.originalProgress = i ? -p : p)
        }
      },
      updateProgress: function (e) {
        const t = this
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1
          e = (t && t.translate && t.translate * s) || 0
        }
        const s = t.params,
          a = t.maxTranslate() - t.minTranslate()
        let { progress: i, isBeginning: r, isEnd: l } = t
        const n = r,
          o = l
        0 === a
          ? ((i = 0), (r = !0), (l = !0))
          : ((i = (e - t.minTranslate()) / a), (r = i <= 0), (l = i >= 1)),
          Object.assign(t, { progress: i, isBeginning: r, isEnd: l }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !n && t.emit('reachBeginning toEdge'),
          l && !o && t.emit('reachEnd toEdge'),
          ((n && !r) || (o && !l)) && t.emit('fromEdge'),
          t.emit('progress', i)
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: a,
            activeIndex: i,
            realIndex: r
          } = e
        if (!t.length || !a) return
        const l = e.virtual && s.virtual.enabled
        for (var n = 0; n < t.length; n++)
          t[n].removeClass(
            `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
          )
        let o
        if (
          ((o = l ? t[t.findIndex((e) => e.dataSwiperSlideIndex == i)] : t[i]),
          !o)
        )
          return
        if ((o.addClass(s.slideActiveClass), s.loop))
          if (o.hasClass(s.slideDuplicateClass)) {
            let e = t.findIndex(
              (e) =>
                !e.hasClass(s.slideDuplicateClass) &&
                e.dataSwiperSlideIndex == r
            )
            t[e] && t[e].addClass(s.slideDuplicateActiveClass)
          } else {
            let e = t.findIndex(
              (e) =>
                e.hasClass(s.slideDuplicateClass) && e.dataSwiperSlideIndex == r
            )
            t[e] && t[e].addClass(s.slideDuplicateActiveClass)
          }
        let d = o.nextAll(`.${s.slideClass}`)[0]
        d
          ? d.addClass(s.slideNextClass)
          : s.loop && !d && ((d = t[0]), d.addClass(s.slideNextClass))
        let p = o.prevAll(`.${s.slideClass}`)[0]
        if (
          (p
            ? p.addClass(s.slidePrevClass)
            : s.loop &&
              !p &&
              ((p = t[t.length - 1]), p.addClass(s.slidePrevClass)),
          s.loop)
        ) {
          if (d.hasClass(s.slideDuplicateClass)) {
            let e = t.findIndex(
              (e) =>
                !e.hasClass(s.slideDuplicateClass) &&
                e.dataSwiperSlideIndex == d.dataSwiperSlideIndex
            )
            t[e] && t[e].addClass(s.slideDuplicateNextClass)
          } else {
            let e = t.findIndex(
              (e) =>
                e.hasClass(s.slideDuplicateClass) &&
                e.dataSwiperSlideIndex == d.dataSwiperSlideIndex
            )
            t[e] && t[e].addClass(s.slideDuplicateNextClass)
          }
          if (p.hasClass(s.slideDuplicateClass)) {
            let e = t.findIndex(
              (e) =>
                !e.hasClass(s.slideDuplicateClass) &&
                e.dataSwiperSlideIndex == p.dataSwiperSlideIndex
            )
            t[e] && t[e].addClass(s.slideDuplicatePrevClass)
          } else {
            let e = t.findIndex(
              (e) =>
                e.hasClass(s.slideDuplicateClass) &&
                e.dataSwiperSlideIndex == p.dataSwiperSlideIndex
            )
            t[e] && t[e].addClass(s.slideDuplicatePrevClass)
          }
        }
        e.emitSlidesClasses()
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: a,
            snapGrid: i,
            params: r,
            activeIndex: l,
            realIndex: n,
            snapIndex: o
          } = t
        let d,
          p,
          c = e
        if (void 0 === c) {
          for (let e = 0; e < a.length; e += 1)
            void 0 !== a[e + 1]
              ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2
                ? (c = e)
                : s >= a[e] && s < a[e + 1] && (c = e + 1)
              : s >= a[e] && (c = e)
          r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
        }
        if (i.indexOf(s) >= 0) d = i.indexOf(s)
        else {
          const e = Math.min(r.slidesPerGroupSkip, c)
          d = e + Math.floor((c - e) / r.slidesPerGroup)
        }
        d >= i.length && (d = i.length - 1),
          t.loopedSlides &&
            (t.slides
              .filter(
                (e) =>
                  e.index >= t.loopedSlides &&
                  e.index < t.slides.length - t.loopedSlides
              )
              .forEach((e, s) => {
                e.dataSwiperSlideIndex = e.index - t.loopedSlides
              }),
            t.slides
              .filter((e) => e.index < t.loopedSlides)
              .forEach((e, s) => {
                t.slides[t.slides.length - 3 * t.loopedSlides + s] &&
                  (e.dataSwiperSlideIndex =
                    t.slides[t.slides.length - 3 * t.loopedSlides + s].index)
              }),
            t.slides
              .filter((e) => e.index >= t.slides.length - t.loopedSlides)
              .forEach((e, s) => {
                e.dataSwiperSlideIndex = t.slides[s].index
              })),
          c !== l
            ? ((p =
                (t.virtual && r.virtual.enabled) ||
                null == t.slides[c].dataSwiperSlideIndex ||
                null == t.slides[c].dataSwiperSlideIndex
                  ? c
                  : t.slides[c].dataSwiperSlideIndex),
              Object.assign(t, {
                snapIndex: d,
                realIndex: p,
                previousIndex: l,
                activeIndex: c
              }),
              t.emit('activeIndexChange'),
              t.emit('snapIndexChange'),
              n !== p && t.emit('realIndexChange'),
              (t.initialized || t.params.runCallbacksOnInit) &&
                t.emit('slideChange', c))
            : d !== o && ((t.snapIndex = d), t.emit('snapIndexChange'))
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          a = t.slides[e]
        let i,
          r = !1
        if (a)
          for (let l = 0; l < t.slides.length; l += 1)
            if (t.slides[l] === a) {
              ;(r = !0), (i = l)
              break
            }
        if (!a || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0)
        ;(t.clickedSlide = a),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                $(a).attr('data-swiper-slide-index'),
                10
              ))
            : (t.clickedIndex = i),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide()
      }
    },
    checkOverflow: {
      checkOverflow: function () {
        const e = this,
          { isLocked: t, params: s } = e,
          { slidesOffsetBefore: a } = s
        if (a) {
          const t = e.slides.length - 1,
            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a
          e.isLocked = e.size > s
        } else e.isLocked = 1 === e.snapGrid.length
        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
          !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
          t && t !== e.isLocked && (e.isEnd = !1),
          t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock')
      }
    },
    slide: {
      slideTo: function (e = 0, t = this.params.speed, s = !0, a, i) {
        if ('number' != typeof e && 'string' != typeof e)
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          )
        if ('string' == typeof e) {
          const t = parseInt(e, 10)
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            )
          e = t
        }
        const r = this
        let l,
          n = e
        n < 0 && (n = 0)
        const {
          params: o,
          snapGrid: d,
          slidesGrid: p,
          previousIndex: c,
          activeIndex: u,
          rtlTranslate: h,
          wrapperEl: m,
          enabled: f
        } = r
        if (
          (r.animating && o.preventInteractionOnTransition) ||
          (!f && !a && !i)
        )
          return !1
        const g = Math.min(r.params.slidesPerGroupSkip, n)
        let v = g + Math.floor((n - g) / r.params.slidesPerGroup)
        v >= d.length && (v = d.length - 1),
          (u || o.initialSlide || 0) === (c || 0) &&
            s &&
            r.emit('beforeSlideChangeStart')
        const w = -d[v]
        if ((r.updateProgress(w), o.normalizeSlideIndex))
          for (let S = 0; S < p.length; S += 1) {
            const e = -Math.floor(100 * w),
              t = Math.floor(100 * p[S]),
              s = Math.floor(100 * p[S + 1])
            void 0 !== p[S + 1]
              ? e >= t && e < s - (s - t) / 2
                ? (n = S)
                : e >= t && e < s && (n = S + 1)
              : e >= t && (n = S)
          }
        if (r.initialized && n !== u) {
          if (!r.allowSlideNext && w < r.translate && w < r.minTranslate())
            return !1
          if (
            !r.allowSlidePrev &&
            w > r.translate &&
            w > r.maxTranslate() &&
            (u || 0) !== n
          )
            return !1
        }
        let b
        if (
          ((b = n > u ? 'next' : n < u ? 'prev' : 'reset'),
          (h && -w === r.translate) || (!h && w === r.translate))
        )
          return (
            r.updateActiveIndex(n),
            o.autoHeight &&
              setTimeout(() => {
                r.updateAutoHeight()
              }, 0),
            r.updateSlidesClasses(),
            'slide' !== o.effect && r.setTranslate(w),
            'reset' !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
            !1
          )
        if (o.cssMode) {
          const e = r.isHorizontal(),
            s = h ? w : -w
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled
            t &&
              ((r.wrapperEl.style.scrollSnapType = 'none'),
              (r._immediateVirtual = !0)),
              (m[e ? 'scrollLeft' : 'scrollTop'] = s),
              t &&
                requestAnimationFrame(() => {
                  ;(r.wrapperEl.style.scrollSnapType = ''),
                    (r._swiperImmediateVirtual = !1)
                })
          } else {
            if (!r.support.smoothScroll)
              return (
                se({ swiper: r, targetPosition: s, side: e ? 'left' : 'top' }),
                !0
              )
            m.scrollTo({ [e ? 'left' : 'top']: s, behavior: 'smooth' })
          }
          return !0
        }
        return (
          r.setTransition(t),
          r.setTranslate(w),
          r.updateActiveIndex(n),
          r.updateSlidesClasses(),
          r.emit('beforeTransitionStart', t, a),
          r.transitionStart(s, b),
          0 === t
            ? r.transitionEnd(s, b)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    (clearTimeout(l),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, b))
                }),
              (l = setTimeout(() => {
                r.onSlideToWrapperTransitionEnd &&
                  r.onSlideToWrapperTransitionEnd()
              }, t))),
          !0
        )
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, a) {
        const i = this
        let r = e
        return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a)
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const a = this,
          { animating: i, enabled: r, params: l } = a
        if (!r) return a
        let n = l.slidesPerGroup
        'auto' === l.slidesPerView &&
          1 === l.slidesPerGroup &&
          l.slidesPerGroupAuto &&
          (n = Math.max(a.slidesPerViewDynamic('current', !0), 1))
        const o = a.activeIndex < l.slidesPerGroupSkip ? 1 : n
        if (l.loop) {
          if (i && l.loopPreventsSlide) return !1
          a.loopFix()
        }
        return l.rewind && a.isEnd
          ? a.slideTo(0, e, t, s)
          : (setTimeout(() => {
              a.slideTo(a.activeIndex + o, e, t, s)
            }, 0),
            !0)
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const a = this,
          {
            params: i,
            animating: r,
            snapGrid: l,
            slidesGrid: n,
            rtlTranslate: o,
            enabled: d
          } = a
        if (!d) return a
        if (i.loop) {
          if (r && i.loopPreventsSlide) return !1
          a.loopFix()
        }
        function p(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
        }
        const c = p(o ? a.translate : -a.translate),
          u = l.map((e) => p(e))
        let h = l[u.indexOf(c) - 1]
        if (void 0 === h && i.cssMode) {
          let e
          l.forEach((t, s) => {
            c >= t && (e = s)
          }),
            void 0 !== e && (h = l[e > 0 ? e - 1 : e])
        }
        let m = 0
        return (
          void 0 !== h &&
            ((m = n.indexOf(h)),
            m < 0 && (m = a.activeIndex - 1),
            'auto' === i.slidesPerView &&
              1 === i.slidesPerGroup &&
              i.slidesPerGroupAuto &&
              ((m = m - a.slidesPerViewDynamic('previous', !0) + 1),
              (m = Math.max(m, 0)))),
          i.rewind && a.isBeginning
            ? a.slideTo(a.slides.length - 1, e, t, s)
            : (setTimeout(() => {
                a.slideTo(m, e, t, s)
              }, 30),
              !0)
        )
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s)
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, a = 0.5) {
        const i = this
        let r = i.activeIndex
        const l = Math.min(i.params.slidesPerGroupSkip, r),
          n = l + Math.floor((r - l) / i.params.slidesPerGroup),
          o = i.rtlTranslate ? i.translate : -i.translate
        if (o >= i.snapGrid[n]) {
          const e = i.snapGrid[n]
          o - e > (i.snapGrid[n + 1] - e) * a && (r += i.params.slidesPerGroup)
        } else {
          const e = i.snapGrid[n - 1]
          o - e <= (i.snapGrid[n] - e) * a && (r -= i.params.slidesPerGroup)
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, i.slidesGrid.length - 1)),
          i.slideTo(r, e, t, s)
        )
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          a =
            'auto' === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView
        let i,
          r = e.clickedIndex
        if (t.loop) {
          if (e.animating) return
          ;(i = parseInt(e.activeIndex, 10)),
            t.centeredSlides
              ? r < e.loopedSlides - a / 2 ||
                r > e.slides.length - e.loopedSlides + a / 2
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  Q(() => {
                    e.slideTo(r)
                  }))
                : e.slideTo(r)
              : r > e.slides.length - a
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  Q(() => {
                    e.slideTo(r)
                  }))
                : e.slideTo(r)
        } else e.slideTo(r)
      }
    },
    loop: {
      loopCreate: function () {
        const e = this,
          { params: t, $wrapperEl: s, native: a } = e
        let i = a.children
        if (t.loopFillGroupWithBlank) {
          const e = t.slidesPerGroup - (i.length % t.slidesPerGroup)
          e !== t.slidesPerGroup &&
            ((a.loopBlankShow = !0), (a.loopBlankNumber = e))
        }
        'auto' !== t.slidesPerView ||
          t.loopedSlides ||
          (t.loopedSlides = i.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(t.loopedSlides || t.slidesPerView, 10)
          )),
          (e.loopedSlides += t.loopAdditionalSlides),
          e.loopedSlides > i.length && (e.loopedSlides = i.length)
        const r = [],
          l = []
        i.forEach((t, s) => {
          s < i.length && s >= i.length - e.loopedSlides && r.push(t),
            s < e.loopedSlides && l.push(t)
        })
        let n = [...e.native.value],
          o = [...n]
        e.originalDataList = [...e.native.value]
        for (let d = 0; d < l.length; d += 1) o.push(n[l[d].index])
        for (let d = r.length - 1; d >= 0; d -= 1) o.unshift(n[r[d].index])
        return e.native.$emit('input', o), !0
      },
      loopFix: function () {
        const e = this
        e.emit('beforeLoopFix')
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: a,
          allowSlidePrev: i,
          allowSlideNext: r,
          snapGrid: l,
          rtlTranslate: n
        } = e
        let o
        ;(e.allowSlidePrev = !0), (e.allowSlideNext = !0)
        const d = -l[t] - e.getTranslate()
        if (t < a) {
          ;(o = s.length - 3 * a + t), (o += a)
          e.slideTo(o, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((n ? -e.translate : e.translate) - d)
        } else if (t >= s.length - a) {
          ;(o = -s.length + t + a), (o += a)
          e.slideTo(o, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((n ? -e.translate : e.translate) - d)
        }
        ;(e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit('loopFix')
      },
      loopDestroy: function () {}
    },
    translate: {
      getTranslate: function (e = this.isHorizontal() ? 'x' : 'y') {
        const { params: t, rtlTranslate: s, translate: a, $wrapperEl: i } = this
        if (t.virtualTranslate) return s ? -a : a
        if (t.cssMode) return a
        let r = (function (e, t = 'x') {
          let s
          return (
            'x' === t && (s = e.translate),
            'y' === t && (s = e.translate),
            s || 0
          )
        })(this, e)
        return s && (r = -r), r || 0
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: a,
            params: i,
            $wrapperEl: r,
            wrapperEl: l,
            progress: n
          } = s
        let o,
          d = 0,
          p = 0
        if (isNaN(e)) return
        if (!r) return
        s.isHorizontal() ? (d = a ? -e : e) : (p = e),
          i.roundLengths && ((d = Math.floor(d)), (p = Math.floor(p))),
          i.cssMode
            ? (l[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
                s.isHorizontal() ? -d : -p)
            : i.virtualTranslate ||
              r.transform(`translate3d(${d}px, ${p}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? d : p)
        const c = s.maxTranslate() - s.minTranslate()
        ;(o = 0 === c ? 0 : (e - s.minTranslate()) / c),
          o !== n && s.updateProgress(e),
          s.emit('setTranslate', s.translate, t)
      },
      minTranslate: function () {
        return -this.snapGrid[0]
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1]
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, a = !0, i) {
        const r = this
        let l
        const { params: n, wrapperEl: o } = r
        if (r.animating && n.preventInteractionOnTransition) return !1
        const d = r.minTranslate(),
          p = r.maxTranslate()
        let c
        if (
          ((c = a && e > d ? d : a && e < p ? p : e),
          r.updateProgress(c),
          n.cssMode)
        ) {
          const e = r.isHorizontal()
          if (0 === t) o[e ? 'scrollLeft' : 'scrollTop'] = -c
          else {
            if (!r.support.smoothScroll)
              return (
                se({ swiper: r, targetPosition: -c, side: e ? 'left' : 'top' }),
                !0
              )
            o.scrollTo({ [e ? 'left' : 'top']: -c, behavior: 'smooth' })
          }
          return !0
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(c),
              s &&
                (r.emit('beforeTransitionStart', t, i),
                r.emit('transitionEnd')))
            : (r.setTransition(t),
              r.setTranslate(c),
              s &&
                (r.emit('beforeTransitionStart', t, i),
                r.emit('transitionStart')),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (clearTimeout(l),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit('transitionEnd'))
                  }),
                (l = setTimeout(() => {
                  r.onTranslateToWrapperTransitionEnd()
                }, t)))),
          !0
        )
      }
    },
    transition: {
      setTransition: function (e, t) {
        const s = this
        s.$wrapperEl &&
          (s.params.cssMode || s.$wrapperEl.transition(e),
          s.emit('setTransition', e, t))
      },
      transitionStart: function (e = !0, t) {
        const s = this,
          { params: a } = s
        a.cssMode ||
          (a.autoHeight && s.updateAutoHeight(),
          pe({ swiper: s, runCallbacks: e, direction: t, step: 'Start' }))
      },
      transitionEnd: function (e = !0, t) {
        const s = this,
          { params: a } = s
        ;(s.animating = !1),
          a.cssMode ||
            (s.setTransition(0),
            pe({ swiper: s, runCallbacks: e, direction: t, step: 'End' }))
      }
    },
    grabCursor: {
      setGrabCursor: function (e) {
        const t = this
        if (
          t.support.touch ||
          !t.params.simulateTouch ||
          (t.params.watchOverflow && t.isLocked) ||
          t.params.cssMode
        )
          return
        ;('container' === t.params.touchEventsTarget
          ? t.$el
          : t.$wrapperEl
        ).setCss({
          cursor: 'move',
          cursor: e ? '-webkit-grabbing' : '-webkit-grab',
          cursor: e ? '-moz-grabbin' : '-moz-grab',
          cursor: e ? 'grabbing' : 'grab'
        })
      },
      unsetGrabCursor: function () {
        const e = this
        e.support.touch ||
          (e.params.watchOverflow && e.isLocked) ||
          e.params.cssMode ||
          e[
            'container' === e.params.touchEventsTarget ? '$el' : '$wrapperEl'
          ].setCss({ cursor: '' })
      }
    },
    events: {
      attachEvents: function () {
        const e = this,
          { params: t, support: s } = e
        ;(e.onTouchStart = ue.bind(e)),
          (e.onTouchMove = he.bind(e)),
          (e.onTouchEnd = me.bind(e)),
          t.cssMode && (e.onScroll = ve.bind(e)),
          (e.onClick = ge.bind(e)),
          we(e, 'on')
      },
      detachEvents: function () {
        we(this, 'off')
      }
    },
    classes: {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: a,
            $el: i,
            device: r,
            support: l
          } = e,
          n = (function (e, t) {
            const s = []
            return (
              e.forEach((e) => {
                'object' == typeof e
                  ? Object.keys(e).forEach((a) => {
                      e[a] && s.push(t + a)
                    })
                  : 'string' == typeof e && s.push(t + e)
              }),
              s
            )
          })(
            [
              'initialized',
              s.direction,
              { 'pointer-events': !l.touch },
              { 'free-mode': e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: a },
              { grid: s.grid && s.grid.rows > 1 },
              {
                'grid-column':
                  s.grid && s.grid.rows > 1 && 'column' === s.grid.fill
              },
              { android: r.android },
              { ios: r.ios },
              { 'css-mode': s.cssMode },
              { centered: s.cssMode && s.centeredSlides }
            ],
            s.containerModifierClass
          )
        t.push(...n), i.addClass([...t].join(' ')), e.emitContainerClasses()
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this
        e.removeClass(t.join(' ')), this.emitContainerClasses()
      }
    }
  },
  Se = {}
class Ce {
  constructor(...e) {
    const t = this
    let s, a, i
    1 === e.length &&
    e[0].constructor &&
    'Object' === Object.prototype.toString.call(e[0]).slice(8, -1)
      ? (s = e[0])
      : 2 === e.length &&
          e[0].constructor &&
          'Object' === Object.prototype.toString.call(e[0]).slice(8, -1)
        ? ((s = e[0]), (i = e[1]))
        : ([a, s, i] = e),
      s || (s = {}),
      (s = ee({}, s)),
      a && !s.el && (s.el = a),
      (t.__swiper__ = !0),
      (t.support = le()),
      (t.device = ne({ userAgent: s.userAgent })),
      (t.browser = oe()),
      (t.eventsListeners = {}),
      (t.eventsAnyListeners = []),
      (t.modules = [...t.__modules__]),
      (t.native = i),
      s.modules && Array.isArray(s.modules) && t.modules.push(...s.modules)
    const r = {}
    t.modules.forEach((e) => {
      e({
        swiper: t,
        extendParams: de(s, r),
        on: t.on.bind(t),
        once: t.once.bind(t),
        off: t.off.bind(t),
        emit: t.emit.bind(t)
      })
    })
    const l = ee({}, ce, r)
    return (
      (t.params = ee({}, l, Se, s)),
      (t.originalParams = ee({}, t.params)),
      (t.passedParams = ee({}, s)),
      t.params &&
        t.params.on &&
        Object.keys(t.params.on).forEach((e) => {
          t.on(e, t.params.on[e])
        }),
      t.params && t.params.onAny && t.onAny(t.params.onAny),
      Object.assign(t, {
        enabled: t.params.enabled,
        el: a,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: () => 'horizontal' === t.params.direction,
        isVertical: () => 'vertical' === t.params.direction,
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: t.params.allowSlideNext,
        allowSlidePrev: t.params.allowSlidePrev,
        touchEvents: (function () {
          const e = ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
            s = ['pointerdown', 'pointermove', 'pointerup']
          return (
            (t.touchEventsTouch = {
              start: e[0],
              move: e[1],
              end: e[2],
              cancel: e[3]
            }),
            (t.touchEventsDesktop = { start: s[0], move: s[1], end: s[2] }),
            t.support.touch || !t.params.simulateTouch
              ? t.touchEventsTouch
              : t.touchEventsDesktop
          )
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: t.params.focusableElements,
          lastClickTime: J(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: t.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
        virtualList: [],
        virtualIndexList: []
      }),
      t.emit('_swiper'),
      t.params.init && t.init(),
      t
    )
  }
  enable() {
    const e = this
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit('enable'))
  }
  disable() {
    const e = this
    e.enabled &&
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit('disable'))
  }
  setProgress(e, t) {
    const s = this
    e = Math.min(Math.max(e, 0), 1)
    const a = s.minTranslate(),
      i = (s.maxTranslate() - a) * e + a
    s.translateTo(i, void 0 === t ? 0 : t),
      s.updateActiveIndex(),
      s.updateSlidesClasses()
  }
  emitContainerClasses() {
    const e = this
    if (!e.params._emitClasses || !e.el) return
    const t = e.native.contentClass
      .split(' ')
      .filter(
        (t) =>
          0 === t.indexOf('swiper') ||
          0 === t.indexOf(e.params.containerModifierClass)
      )
    e.emit('_containerClasses', t.join(' '))
  }
  getSlideClasses(e) {
    const t = this
    return e.slideClass
      .split(' ')
      .filter(
        (e) =>
          0 === e.indexOf('swiper-slide') ||
          0 === e.indexOf(t.params.slideClass)
      )
      .join(' ')
  }
  emitSlidesClasses() {
    const e = this
    if (!e.params._emitClasses || !e.el) return
    const t = []
    e.slides.forEach((s) => {
      const a = e.getSlideClasses(s)
      t.push({ slideEl: s, classNames: a }), e.emit('_slideClass', s, a)
    }),
      e.emit('_slideClasses', t)
  }
  slidesPerViewDynamic(e = 'current', t = !1) {
    const {
      params: s,
      slides: a,
      slidesGrid: i,
      slidesSizesGrid: r,
      size: l,
      activeIndex: n
    } = this
    let o = 1
    if (s.centeredSlides) {
      let e,
        t = a[n].swiperSlideSize
      for (let s = n + 1; s < a.length; s += 1)
        a[s] && !e && ((t += a[s].swiperSlideSize), (o += 1), t > l && (e = !0))
      for (let s = n - 1; s >= 0; s -= 1)
        a[s] && !e && ((t += a[s].swiperSlideSize), (o += 1), t > l && (e = !0))
    } else if ('current' === e)
      for (let d = n + 1; d < a.length; d += 1) {
        ;(t ? i[d] + r[d] - i[n] < l : i[d] - i[n] < l) && (o += 1)
      }
    else
      for (let d = n - 1; d >= 0; d -= 1) {
        i[n] - i[d] < l && (o += 1)
      }
    return o
  }
  changeDirection(e, t) {
    void 0 === t && (t = !0)
    const s = this,
      a = s.params.direction
    return (
      e || (e = 'horizontal' === a ? 'vertical' : 'horizontal'),
      e === a ||
        ('horizontal' !== e && 'vertical' !== e) ||
        (s.$wrapperEl.removeClass(`${s.params.containerModifierClass}${a}`),
        s.$wrapperEl.addClass(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        (s.params.direction = e),
        s.slides.forEach((t) => {
          'vertical' === e ? t.css({ width: '' }) : t.css({ height: '' })
        }),
        s.emit('changeDirection'),
        t && s.update()),
      s
    )
  }
  async update(e) {
    const t = this
    if (!t || t.destroyed) return
    const { snapGrid: s, params: a } = t
    if (!(e = await t.native.getRect())) return !1
    function i() {
      const e = t.rtlTranslate ? -1 * t.translate : t.translate,
        s = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate())
      t.setTranslate(s), t.updateActiveIndex(), t.updateSlidesClasses()
    }
    let r
    Object.assign(t, { el: e, $el: t.native }),
      t.emit('beforeUpdate'),
      a.breakpoints && t.setBreakpoint(),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses(),
      t.params.freeMode && t.params.freeMode.enabled
        ? (i(), t.params.autoHeight && t.updateAutoHeight())
        : ((r =
            ('auto' === t.params.slidesPerView || t.params.slidesPerView > 1) &&
            t.isEnd &&
            !t.params.centeredSlides
              ? t.slideTo(t.slides.length - 1, 0, !1, !0)
              : t.slideTo(t.activeIndex, 0, !1, !0)),
          r || i()),
      a.watchOverflow && s !== t.snapGrid && t.checkOverflow(),
      t.emit('update')
  }
  async mount(e) {
    const t = this
    return (
      !!t.mounted ||
      (!!(e = await t.native.getRect()) &&
        (t.emit('beforeMount'),
        Object.assign(t, {
          $el: t.native,
          el: e,
          $wrapperEl: t.native,
          wrapperEl: t.native,
          mounted: !0
        }),
        !0))
    )
  }
  async init(e) {
    const t = this
    if (t.initialized) return t
    return (
      !1 === (await t.mount(e)) ||
        (t.emit('beforeInit'),
        t.addClasses(),
        t.params.loop && t.loopCreate(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop
          ? t.slideTo(
              t.params.initialSlide + t.loopedSlides,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.attachEvents(),
        (t.initialized = !0),
        t.emit('init'),
        t.emit('afterInit')),
      t
    )
  }
  destroy(e = !0, t = !0) {
    const s = this,
      { params: a, $el: i, $wrapperEl: r, slides: l } = s
    return (
      void 0 === s.params ||
        s.destroyed ||
        (s.emit('beforeDestroy'),
        (s.initialized = !1),
        s.detachEvents(),
        a.loop && s.loopDestroy(),
        s.emit('destroy'),
        Object.keys(s.eventsListeners).forEach((e) => {
          s.off(e)
        }),
        !1 !== e &&
          (function (e) {
            const t = e
            Object.keys(t).forEach((e) => {
              try {
                t[e] = null
              } catch (s) {}
              try {
                delete t[e]
              } catch (s) {}
            })
          })(s),
        (s.destroyed = !0)),
      null
    )
  }
  static extendDefaults(e) {
    ee(Se, e)
  }
  static get extendedDefaults() {
    return Se
  }
  static get defaults() {
    return ce
  }
  static installModule(e) {
    Ce.prototype.__modules__ || (Ce.prototype.__modules__ = [])
    const t = Ce.prototype.__modules__
    'function' == typeof e && t.indexOf(e) < 0 && t.push(e)
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((e) => Ce.installModule(e)), Ce)
      : (Ce.installModule(e), Ce)
  }
}
function xe(e) {
  const {
    effect: t,
    swiper: s,
    on: a,
    setTranslate: i,
    setTransition: r,
    overwriteParams: l,
    perspective: n
  } = e
  a('beforeInit', () => {
    if (s.params.effect !== t) return
    s.classNames.push(`${s.params.containerModifierClass}${t}`),
      n && n() && s.classNames.push(`${s.params.containerModifierClass}3d`)
    const e = l ? l() : {}
    Object.assign(s.params, e), Object.assign(s.originalParams, e)
  }),
    a('setTranslate', () => {
      s.params.effect === t && i()
    }),
    a('setTransition', (e, a) => {
      s.params.effect === t && r(a)
    })
}
function ye(e, t) {
  return e.transformEl
    ? t
        .find(e.transformEl)
        .css({
          'backface-visibility': 'hidden',
          '-webkit-backface-visibility': 'hidden'
        })
    : t
}
function Te({ swiper: e, duration: t, transformEl: s, allSlides: a }) {
  const { slides: i, activeIndex: r, $wrapperEl: l } = e
  if (e.params.virtualTranslate && 0 !== t) {
    let l,
      n = !1
    l = a ? (s ? i.find(s) : i) : s ? i.eq(r).find(s) : i[r]
    for (let s = 0; s < l.length; s += 1)
      l[s].transitionEnd(() => {
        n ||
          (e &&
            !e.destroyed &&
            ((n = !0), (e.animating = !1), e.emit('transitionEnd')))
      }, t)
  }
}
Object.keys(be).forEach((e) => {
  Object.keys(be[e]).forEach((t) => {
    Ce.prototype[t] = be[e][t]
  })
})
const Ee = [
  function ({ swiper: e, extendParams: t, on: s, emit: a }) {
    let i
    function r() {
      e.slides[e.activeIndex]
      let t = e.params.autoplay.delay
      clearTimeout(i),
        (i = Q(() => {
          let t
          e.params.autoplay.reverseDirection
            ? e.params.loop
              ? (e.loopFix(),
                (t = e.slidePrev(e.params.speed, !0, !0)),
                a('autoplay'))
              : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? n()
                  : ((t = e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0
                    )),
                    a('autoplay'))
                : ((t = e.slidePrev(e.params.speed, !0, !0)), a('autoplay'))
            : e.params.loop
              ? (e.loopFix(),
                setTimeout(() => {
                  t = e.slideNext(e.params.speed, !0, !0)
                }, 30),
                a('autoplay'))
              : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? n()
                  : ((t = e.slideTo(0, e.params.speed, !0, !0)), a('autoplay'))
                : ((t = e.slideNext(e.params.speed, !0, !0)), a('autoplay')),
            ((e.params.cssMode && e.autoplay.running) || !1 === t) && r()
        }, t))
    }
    function l() {
      return (
        void 0 === i &&
        !e.autoplay.running &&
        ((e.autoplay.running = !0), a('autoplayStart'), r(), !0)
      )
    }
    function n() {
      return (
        !!e.autoplay.running &&
        void 0 !== i &&
        (i && (clearTimeout(i), (i = void 0)),
        (e.autoplay.running = !1),
        a('autoplayStop'),
        !0)
      )
    }
    function o(t) {
      e.autoplay.running &&
        (e.autoplay.paused ||
          (i && clearTimeout(i),
          (e.autoplay.paused = !0),
          0 !== t && e.params.autoplay.waitForTransition
            ? ['transitionEnd', 'webkitTransitionEnd'].forEach((t) => {
                e.on(t, d)
              })
            : ((e.autoplay.paused = !1), r())))
    }
    function d(t) {
      e &&
        !e.destroyed &&
        e.$wrapperEl &&
        (['transitionEnd', 'webkitTransitionEnd'].forEach((t) => {
          e.off(t, d)
        }),
        (e.autoplay.paused = !1),
        e.autoplay.running ? r() : n())
    }
    ;(e.autoplay = { running: !1, paused: !1 }),
      t({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1
        }
      }),
      s('init update', () => {
        e.params.autoplay.enabled && (l(), e.params.autoplay.pauseOnMouseEnter)
      }),
      s('beforeTransitionStart', (t, s, a) => {
        e.autoplay.running &&
          (a || !e.params.autoplay.disableOnInteraction
            ? e.autoplay.pause(s)
            : e.params.loop || n())
      }),
      s('sliderFirstMove', () => {
        e.autoplay.running &&
          (e.params.autoplay.disableOnInteraction ? n() : o())
      }),
      s('touch-end', () => {
        e.params.cssMode &&
          e.autoplay.paused &&
          !e.params.autoplay.disableOnInteraction &&
          r()
      }),
      s('destroy', () => {
        e.autoplay.running && n()
      }),
      Object.assign(e.autoplay, { pause: o, run: r, start: l, stop: n })
  },
  function ({ swiper: e, extendParams: t, emit: s, once: a }) {
    t({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: 0.02
      }
    }),
      Object.assign(e, {
        freeMode: {
          onTouchMove: function () {
            const { touchEventsData: t, touches: s } = e
            0 === t.velocities.length &&
              t.velocities.push({
                position: s[e.isHorizontal() ? 'startX' : 'startY'],
                time: t.touchStartTime
              }),
              t.velocities.push({
                position: s[e.isHorizontal() ? 'currentX' : 'currentY'],
                time: J()
              })
          },
          onTouchEnd: function ({ currentPos: t }) {
            const {
                params: i,
                $wrapperEl: r,
                rtlTranslate: l,
                snapGrid: n,
                touchEventsData: o
              } = e,
              d = J() - o.touchStartTime
            if (t < -e.minTranslate()) e.slideTo(e.activeIndex)
            else if (t > -e.maxTranslate())
              e.slides.length < n.length
                ? e.slideTo(n.length - 1)
                : e.slideTo(e.slides.length - 1)
            else {
              if (i.freeMode.momentum) {
                if (o.velocities.length > 1) {
                  const t = o.velocities.pop(),
                    s = o.velocities.pop(),
                    a = t.position - s.position,
                    r = t.time - s.time
                  ;(e.velocity = a / r),
                    (e.velocity /= 2),
                    Math.abs(e.velocity) < i.freeMode.minimumVelocity &&
                      (e.velocity = 0),
                    (r > 150 || J() - t.time > 300) && (e.velocity = 0)
                } else e.velocity = 0
                ;(e.velocity *= i.freeMode.momentumVelocityRatio),
                  (o.velocities.length = 0)
                let t = 1e3 * i.freeMode.momentumRatio
                const d = e.velocity * t
                let p = e.translate + d
                l && (p = -p)
                let c,
                  u = !1
                const h =
                  20 * Math.abs(e.velocity) * i.freeMode.momentumBounceRatio
                let m
                if (p < e.maxTranslate())
                  i.freeMode.momentumBounce
                    ? (p + e.maxTranslate() < -h && (p = e.maxTranslate() - h),
                      (c = e.maxTranslate()),
                      (u = !0),
                      (o.allowMomentumBounce = !0))
                    : (p = e.maxTranslate()),
                    i.loop && i.centeredSlides && (m = !0)
                else if (p > e.minTranslate())
                  i.freeMode.momentumBounce
                    ? (p - e.minTranslate() > h && (p = e.minTranslate() + h),
                      (c = e.minTranslate()),
                      (u = !0),
                      (o.allowMomentumBounce = !0))
                    : (p = e.minTranslate()),
                    i.loop && i.centeredSlides && (m = !0)
                else if (i.freeMode.sticky) {
                  let t
                  for (let e = 0; e < n.length; e += 1)
                    if (n[e] > -p) {
                      t = e
                      break
                    }
                  ;(p =
                    Math.abs(n[t] - p) < Math.abs(n[t - 1] - p) ||
                    'next' === e.swipeDirection
                      ? n[t]
                      : n[t - 1]),
                    (p = -p)
                }
                if (
                  (m &&
                    a('transitionEnd', () => {
                      e.loopFix()
                    }),
                  0 !== e.velocity)
                ) {
                  if (
                    ((t = l
                      ? Math.abs((-p - e.translate) / e.velocity)
                      : Math.abs((p - e.translate) / e.velocity)),
                    i.freeMode.sticky)
                  ) {
                    const s = Math.abs((l ? -p : p) - e.translate),
                      a = e.slidesSizesGrid[e.activeIndex]
                    t =
                      s < a
                        ? i.speed
                        : s < 2 * a
                          ? 1.5 * i.speed
                          : 2.5 * i.speed
                  }
                } else if (i.freeMode.sticky) return void e.slideToClosest()
                i.freeMode.momentumBounce && u
                  ? (e.updateProgress(c),
                    e.setTransition(t),
                    e.setTranslate(p),
                    e.transitionStart(!0, e.swipeDirection),
                    (e.animating = !0),
                    r.transitionEnd(() => {
                      e &&
                        !e.destroyed &&
                        o.allowMomentumBounce &&
                        (s('momentumBounce'),
                        e.setTransition(i.speed),
                        setTimeout(() => {
                          e.setTranslate(c),
                            r.transitionEnd(() => {
                              e && !e.destroyed && e.transitionEnd()
                            }, t)
                        }, 0))
                    }, t))
                  : e.velocity
                    ? (s('_freeModeNoMomentumRelease'),
                      e.updateProgress(p),
                      e.setTransition(t),
                      e.setTranslate(p),
                      e.transitionStart(!0, e.swipeDirection),
                      e.animating ||
                        ((e.animating = !0),
                        r.transitionEnd(() => {
                          e && !e.destroyed && e.transitionEnd()
                        }, t)))
                    : e.updateProgress(p),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses()
              } else {
                if (i.freeMode.sticky) return void e.slideToClosest()
                i.freeMode && s('_freeModeNoMomentumRelease')
              }
              ;(!i.freeMode.momentum || d >= i.longSwipesMs) &&
                (e.updateProgress(),
                e.updateActiveIndex(),
                e.updateSlidesClasses())
            }
          }
        }
      })
  },
  function ({ swiper: e, extendParams: t, on: s }) {
    t({ fadeEffect: { crossFade: !1, transformEl: null } }),
      xe({
        effect: 'fade',
        swiper: e,
        on: s,
        setTranslate: () => {
          const { slides: t } = e,
            s = e.params.fadeEffect
          for (let a = 0; a < t.length; a += 1) {
            const i = e.slides[a]
            let r = -i.swiperSlideOffset
            e.params.virtualTranslate || (r -= e.translate)
            let l = 0
            e.isHorizontal() || ((l = r), (r = 0))
            const n = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(i.progress), 0)
                : 1 + Math.min(Math.max(i.progress, -1), 0),
              o = ye(s, i)
            o.css({ opacity: n }),
              o.transform(`translate3d(${r}px, ${l}px, 0px)`),
              e.params.willChange && o.willChange('opacity'),
              t[a].addClass('swiper-slide-fade')
          }
        },
        setTransition: (t) => {
          const { transformEl: s } = e.params.fadeEffect,
            a = s ? e.slides.find(s) : e.slides
          for (let e = 0; e < a.length; e += 1) a[e].transition(t)
          Te({ swiper: e, duration: t, transformEl: s, allSlides: !0 })
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode
        })
      })
  },
  function ({ swiper: e, extendParams: t, on: s }) {
    t({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94
      }
    }),
      xe({
        effect: 'cube',
        swiper: e,
        on: s,
        setTranslate: () => {
          const {
              $el: t,
              $wrapperEl: s,
              slides: a,
              width: i,
              height: r,
              rtlTranslate: l,
              size: n,
              browser: o
            } = e,
            d = e.params.cubeEffect,
            p = e.isHorizontal(),
            c = e.virtual && e.params.virtual.enabled
          let u = 0
          d.shadow &&
            (p
              ? (e.native.cubeShadowShowWrapper ||
                  e.$wrapperEl.updateData({ cubeShadowShowWrapper: !0 }),
                e.$wrapperEl.cubeShadowCss({ height: `${i}px` }))
              : e.native.cubeShadowShowRoot ||
                e.$wrapperEl.updateData({ cubeShadowShowRoot: !0 }))
          for (let h = 0; h < a.length; h += 1) {
            const t = a[h]
            let s = h
            c && (s = parseInt(e.activeIndex, 10))
            let i = 90 * s,
              r = Math.floor(i / 360)
            l && ((i = -i), (r = Math.floor(-i / 360)))
            const o = Math.max(Math.min(t.progress, 1), -1)
            let d = 0,
              m = 0,
              f = 0
            s % 4 == 0
              ? ((d = 4 * -r * n), (f = 0))
              : (s - 1) % 4 == 0
                ? ((d = 0), (f = 4 * -r * n))
                : (s - 2) % 4 == 0
                  ? ((d = n + 4 * r * n), (f = n))
                  : (s - 3) % 4 == 0 && ((d = -n), (f = 3 * n + 4 * n * r)),
              l && (d = -d),
              p || ((m = d), (d = 0))
            const g = `rotateX(${p ? 0 : -i}deg) rotateY(${p ? i : 0}deg) translate3d(${d}px, ${m}px, ${f}px)`
            o <= 1 &&
              o > -1 &&
              ((u = 90 * s + 90 * o), l && (u = 90 * -s - 90 * o)),
              t.transform(g),
              t.addClass('swiper-slide-cube')
          }
          if (
            (s.css({
              '-webkit-transform-origin': `50% 50% -${n / 2}px`,
              'transform-origin': `50% 50% -${n / 2}px`
            }),
            d.shadow)
          )
            if (p)
              e.$wrapperEl.cubeShadowTransform(
                `translate3d(0px, ${i / 2 + d.shadowOffset}px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`
              )
            else {
              const t = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                s =
                  1.5 -
                  (Math.sin((2 * t * Math.PI) / 360) / 2 +
                    Math.cos((2 * t * Math.PI) / 360) / 2),
                a = d.shadowScale,
                i = d.shadowScale / s,
                l = d.shadowOffset
              e.$wrapperEl.cubeShadowTransform(
                `scale3d(${a}, 1, ${i}) translate3d(0px, ${r / 2 + l}px, ${-r / 2 / i}px) rotateX(-90deg)`
              )
            }
          s.transform(
            `translate3d(0px,0,0px) rotateX(${e.isHorizontal() ? 0 : u}deg) rotateY(${e.isHorizontal() ? -u : 0}deg)`
          )
        },
        setTransition: (t) => {
          const { $el: s, slides: a } = e
          for (var i = 0; i < a.length; i++) a[i].transition(t)
          e.params.cubeEffect.shadow &&
            !e.isHorizontal() &&
            e.$wrapperEl.cubeShadowTransition(t)
        },
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0
        })
      })
  },
  function ({ swiper: e, extendParams: t, on: s }) {
    t({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0,
        transformEl: null
      }
    }),
      xe({
        effect: 'coverflow',
        swiper: e,
        on: s,
        setTranslate: () => {
          const { width: t, height: s, slides: a, slidesSizesGrid: i } = e,
            r = e.params.coverflowEffect,
            l = e.isHorizontal(),
            n = e.translate,
            o = l ? t / 2 - n : s / 2 - n,
            d = l ? r.rotate : -r.rotate,
            p = r.depth
          for (let c = 0, u = a.length; c < u; c += 1) {
            const t = a[c],
              s = i[c],
              n = ((o - t.swiperSlideOffset - s / 2) / s) * r.modifier
            let u = l ? d * n : 0,
              h = l ? 0 : d * n,
              m = -p * Math.abs(n),
              f = r.stretch
            'string' == typeof f &&
              -1 !== f.indexOf('%') &&
              (f = (parseFloat(r.stretch) / 100) * s)
            let g = l ? 0 : f * n,
              v = l ? f * n : 0,
              w = 1 - (1 - r.scale) * Math.abs(n)
            Math.abs(v) < 0.001 && (v = 0),
              Math.abs(g) < 0.001 && (g = 0),
              Math.abs(m) < 0.001 && (m = 0),
              Math.abs(u) < 0.001 && (u = 0),
              Math.abs(h) < 0.001 && (h = 0),
              Math.abs(w) < 0.001 && (w = 0)
            const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`,
              S = ye(r, t)
            S.transform(b),
              t.css({ zIndex: 1 - Math.abs(Math.round(n)) }),
              e.params.willChange && S.willChange('transform'),
              t.addClass('swiper-slide-coverflow')
          }
        },
        setTransition: (t) => {
          const { transformEl: s } = e.params.coverflowEffect,
            a = s ? e.slides.find(s) : e.slides
          for (var i = 0; i < a.length; i++) a[i].transition(t)
        },
        perspective: () => !0,
        overwriteParams: () => ({ watchSlidesProgress: !0 })
      })
  },
  function ({ swiper: e, extendParams: t, on: s }) {
    t({
      flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null }
    }),
      xe({
        effect: 'flip',
        swiper: e,
        on: s,
        setTranslate: () => {
          const { slides: t, rtlTranslate: s } = e,
            a = e.params.flipEffect
          for (let i = 0; i < t.length; i += 1) {
            const r = t[i]
            let l = r.progress
            e.params.flipEffect.limitRotation &&
              (l = Math.max(Math.min(r.progress, 1), -1))
            const n = r.swiperSlideOffset
            let o = -180 * l,
              d = 0,
              p = e.params.cssMode ? -n - e.translate : -n,
              c = 0
            e.isHorizontal()
              ? s && (o = -o)
              : ((c = p), (p = 0), (d = -o), (o = 0)),
              r.css({ zIndex: -Math.abs(Math.round(l)) + t.length })
            const u = `translate3d(${p}px, ${c}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`,
              h = ye(a, r)
            h.transform(u),
              e.params.willChange && h.willChange('transform'),
              t[i].addClass('swiper-slide-flip')
          }
        },
        setTransition: (t) => {
          const { transformEl: s } = e.params.flipEffect,
            a = s ? e.slides.find(s) : e.slides
          for (let e = 0; e < a.length; e += 1) a[e].transition(t)
          Te({ swiper: e, duration: t, transformEl: s })
        },
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode
        })
      })
  },
  function ({ swiper: e, extendParams: t, on: s }) {
    t({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8
      }
    }),
      xe({
        effect: 'cards',
        swiper: e,
        on: s,
        setTranslate: () => {
          const { slides: t, activeIndex: s } = e,
            a = e.params.cardsEffect,
            { startTranslate: i, isTouched: r } = e.touchEventsData,
            l = e.translate
          for (let n = 0; n < t.length; n += 1) {
            const o = t[n],
              d = o.progress,
              p = Math.min(Math.max(d, -4), 4)
            let c = o.swiperSlideOffset
            e.params.centeredSlides &&
              !e.params.cssMode &&
              e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),
              e.params.centeredSlides &&
                e.params.cssMode &&
                (c -= t.swiperSlideOffset)
            let u = e.params.cssMode ? -c - e.translate : -c,
              h = 0
            const m = -100 * Math.abs(p)
            let f = 1,
              g = -a.perSlideRotate * p,
              v = a.perSlideOffset - 0.75 * Math.abs(p)
            const w =
                (n === s || n === s - 1) &&
                p > 0 &&
                p < 1 &&
                (r || e.params.cssMode) &&
                l < i,
              b =
                (n === s || n === s + 1) &&
                p < 0 &&
                p > -1 &&
                (r || e.params.cssMode) &&
                l > i
            if (w || b) {
              const e = (1 - Math.abs((Math.abs(p) - 0.5) / 0.5)) ** 0.5
              ;(g += -28 * p * e),
                (f += -0.5 * e),
                (v += 96 * e),
                (h = -25 * e * Math.abs(p) + '%')
            }
            if (
              ((u =
                p < 0
                  ? `calc(${u}px + (${v * Math.abs(p)}%))`
                  : p > 0
                    ? `calc(${u}px + (-${v * Math.abs(p)}%))`
                    : `${u}px`),
              !e.isHorizontal())
            ) {
              const e = h
              ;(h = u), (u = e)
            }
            const S = p < 0 ? '' + (1 + (1 - f) * p) : '' + (1 - (1 - f) * p),
              C = `translate3d(${u}, ${h}, ${m}px) rotateZ(${a.rotate ? g : 0}deg) scale(${S})`
            o.css({ zIndex: -Math.abs(Math.round(d)) + t.length })
            const x = ye(a, o)
            x.transform(C),
              e.params.willChange && x.willChange('transform'),
              t[n].addClass('swiper-slide-cards')
          }
        },
        setTransition: (t) => {
          const { transformEl: s } = e.params.cardsEffect,
            a = s ? e.slides.find(s) : e.slides
          for (let e = 0; e < a.length; e += 1) a[e].transition(t)
          Te({ swiper: e, duration: t, transformEl: s })
        },
        perspective: () => !0,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode
        })
      })
  },
  function ({ swiper: e, extendParams: t, on: s }) {
    t({
      creativeEffect: {
        transformEl: null,
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
        next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 }
      }
    })
    const a = (e) => ('string' == typeof e ? e : `${e}px`)
    xe({
      effect: 'creative',
      swiper: e,
      on: s,
      setTranslate: () => {
        const { slides: t, $wrapperEl: s, slidesSizesGrid: i } = e,
          r = e.params.creativeEffect,
          { progressMultiplier: l } = r,
          n = e.params.centeredSlides
        if (n) {
          const t = i[0] / 2 - e.params.slidesOffsetBefore || 0
          s.transform(`translateX(calc(50% - ${t}px))`)
        }
        for (let o = 0; o < t.length; o += 1) {
          const s = t[o],
            i = s.progress,
            d = Math.min(
              Math.max(s.progress, -r.limitProgress),
              r.limitProgress
            )
          let p = d
          n ||
            (p = Math.min(
              Math.max(s.originalProgress, -r.limitProgress),
              r.limitProgress
            ))
          const c = s.swiperSlideOffset,
            u = [e.params.cssMode ? -c - e.translate : -c, 0, 0],
            h = [0, 0, 0]
          e.isHorizontal() || ((u[1] = u[0]), (u[0] = 0))
          let m = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          }
          d < 0 ? (m = r.next) : d > 0 && (m = r.prev),
            u.forEach((e, t) => {
              u[t] =
                `calc(${e}px + (${a(m.translate[t])} * ${Math.abs(d * l)}))`
            }),
            h.forEach((e, t) => {
              h[t] = m.rotate[t] * Math.abs(d * l)
            }),
            s.css({ zIndex: -Math.abs(Math.round(i)) + t.length })
          const f = u.join(', '),
            g = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
            v =
              p < 0
                ? `scale(${1 + (1 - m.scale) * p * l})`
                : `scale(${1 - (1 - m.scale) * p * l})`,
            w =
              p < 0 ? 1 + (1 - m.opacity) * p * l : 1 - (1 - m.opacity) * p * l,
            b = `translate3d(${f}) ${g} ${v}`,
            S = ye(r, s)
          S.transform(b),
            S.css({ opacity: w }),
            m.origin && S.css({ 'transform-origin': m.origin }),
            e.params.willChange && t[o].willChange('transform,opacity'),
            t[o].addClass('swiper-slide-creative')
        }
      },
      setTransition: (t) => {
        const { transformEl: s } = e.params.creativeEffect,
          a = s ? e.slides.find(s) : e.slides
        for (let e = 0; e < a.length; e += 1) a[e].transition(t)
        Te({ swiper: e, duration: t, transformEl: s, allSlides: !0 })
      },
      perspective: () => e.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode
      })
    })
  },
  function ({ swiper: e, extendParams: t, on: s }) {
    t({ panorama: { depth: 200, rotate: 30, stretch: 1 } }),
      s('beforeInit', () => {
        if ('panorama' !== e.params.effect) return
        e.classNames.push(`${e.params.containerModifierClass}panorama`),
          e.classNames.push(`${e.params.containerModifierClass}3d`)
        const t = { watchSlidesProgress: !0 }
        Object.assign(e.params, t), Object.assign(e.originalParams, t)
      }),
      s('progress', () => {
        if ('panorama' !== e.params.effect) return
        const t = e.slidesSizesGrid,
          {
            depth: s = 200,
            rotate: a = 30,
            stretch: i = 1
          } = e.params.panorama,
          r = (a * Math.PI) / 180 / 2,
          l = 1 / (180 / a)
        for (let n = 0; n < e.slides.length; n += 1) {
          const o = e.slides[n],
            d = o.progress,
            p = t[n],
            c =
              d +
              (e.params.centeredSlides
                ? 0
                : 0.5 * (e.params.slidesPerView - 1)),
            u = 1 - Math.cos(c * l * Math.PI),
            h = c * ((i * p) / 3) * u + 'px',
            m = c * a,
            f = ((0.5 * p) / Math.sin(r)) * u - s + 'px'
          o.transform(`translateX(${h}) translateZ(${f}) rotateY(${m}deg)`),
            e.params.willChange && o.willChange('transform'),
            o.addClass('swiper-slide-panorama')
        }
      }),
      s('setTransition', (t, s) => {
        'panorama' === e.params.effect &&
          e.slides.forEach((e) => {
            e.transition(s)
          })
      })
  },
  function ({ swiper: e, extendParams: t, on: s }) {
    t({ carouselEffect: {} }),
      xe({
        effect: 'carousel',
        swiper: e,
        on: s,
        setTranslate: () => {
          const t = e.slides.length
          for (let s = 0; s < e.slides.length; s += 1) {
            const a = e.slides[s],
              i = e.slides[s].progress,
              r = Math.abs(i)
            let l = 1
            r > 1 && (l = 0.3 * (r - 1) + 1)
            const n = i * l * 50 + '%',
              o = 1 - 0.2 * r,
              d = t - Math.abs(Math.round(i)),
              p = `translateX(${n}) scale(${o})`
            a.transform(p),
              a.css({ zIndex: d }),
              r > 3 ? a.css({ opacity: 0 }) : a.css({ opacity: 1 })
          }
        },
        setTransition: (t) => {
          const { transformEl: s } = e.params.coverflowEffect,
            a = s ? e.slides.find(s) : e.slides
          for (var i = 0; i < a.length; i++) a[i].transition(t)
        },
        perspective: () => !0,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          slidesPerView: 'auto',
          centeredSlides: !0
        })
      })
  },
  function ({ swiper: e, extendParams: t, on: s, emit: a }) {
    function i(t, s) {
      if (!e.$wrapperEl) return
      const a = e.params.navigation
      t &&
        (e.$wrapperEl[s ? `add${t}` : `remove${t}`](a.disabledClass),
        e.params.watchOverflow &&
          e.enabled &&
          e.$wrapperEl[e.isLocked ? `add${t}` : `remove${t}`](a.lockClass))
    }
    function r() {
      e.params.loop ||
        (e.navigation,
        i('PrevElClass', e.isBeginning && !e.params.rewind),
        i('NextElClass', e.isEnd && !e.params.rewind))
    }
    function l(t) {
      ;(!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev()
    }
    function n() {
      ;(!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext()
    }
    function o() {
      const t = e.params.navigation
      if (
        ((t.slot || t.custom) && ((t.nextEl = !0), (t.prevEl = !0)),
        !(t.nextEl || t.prevEl || t.slot || t.custom))
      )
        return
      t.slot
        ? e.native.updateData({
            showPrevButtonSlot: !0,
            showNextButtonSlot: !0
          })
        : t.custom ||
          e.native.updateData({ showPrevButton: !0, showNextButton: !0 })
      const s = t.nextEl,
        a = t.prevEl
      s && e.on('nextClick', n),
        a && e.on('prevClick', l),
        Object.assign(e.navigation, {
          $nextEl: s,
          nextEl: s,
          $prevEl: a,
          prevEl: a
        }),
        e.enabled ||
          (s && e.$wrapperEl.addNextElClass(t.lockClass),
          a && e.$wrapperEl.addPrevElClass(t.lockClass))
    }
    function d() {
      const { $nextEl: t, $prevEl: s } = e.navigation
      t &&
        (e.off('nextClick', n),
        e.$wrapperEl.removeNextElClass(e.params.navigation.disabledClass)),
        s &&
          (e.off('prevClick', l),
          e.$wrapperEl.removePrevElClass(e.params.navigation.disabledClass))
    }
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock'
      }
    }),
      (e.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
      }),
      s('init', () => {
        o(), r()
      }),
      s('toEdge fromEdge lock unlock', () => {
        r()
      }),
      s('destroy', () => {
        d()
      }),
      s('enable disable', () => {
        const { $nextEl: t, $prevEl: s } = e.navigation
        t &&
          e.$wrapperEl[e.enabled ? 'removeNextElClass' : 'addNextElClass'](
            e.params.navigation.lockClass
          ),
          s &&
            e.$wrapperEl[e.enabled ? 'removePrevElClass' : 'addPrevElClass'](
              e.params.navigation.lockClass
            )
      }),
      Object.assign(e.navigation, { update: r, init: o, destroy: d })
  },
  function ({ swiper: e, extendParams: t, on: s, emit: a }) {
    const i = 'swiper-pagination'
    let r
    t({
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: 'bullets',
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (e) => e,
        formatFractionTotal: (e) => e,
        bulletClass: `${i}-bullet`,
        bulletActiveClass: `${i}-bullet-active`,
        modifierClass: `${i}-`,
        currentClass: `${i}-current`,
        totalClass: `${i}-total`,
        hiddenClass: `${i}-hidden`,
        progressbarFillClass: `${i}-progressbar-fill`,
        progressbarOppositeClass: `${i}-progressbar-opposite`,
        clickableClass: `${i}-clickable`,
        lockClass: `${i}-lock`,
        horizontalClass: `${i}-horizontal`,
        verticalClass: `${i}-vertical`
      }
    }),
      (e.pagination = { el: null, $el: null, bullets: [] })
    let l = 0
    function n() {
      return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el
    }
    function o(t, s) {
      const { bulletActiveClass: a } = e.params.pagination,
        i = e.pagination.bullets
      i[t.index + s] &&
        i[t.index + s].addPaginationItemClass(
          `${a}-${s > 0 ? 'next' : 'prev'}`
        ),
        i[t.index + (s > 0 ? s + 1 : s - 1)] &&
          i[t.index + (s > 0 ? s + 1 : s - 1)].addPaginationItemClass(
            `${a}-${s > 0 ? 'next' : 'prev'}-${s > 0 ? 'next' : 'prev'}`
          )
    }
    function d() {
      const t = e.rtl,
        s = e.params.pagination
      if (n()) return
      const i =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        d = e.pagination.$el
      let p
      const c = e.params.loop
        ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
        : e.snapGrid.length
      if (
        (e.params.loop
          ? ((p = Math.ceil(
              (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
            )),
            p > i - 1 - 2 * e.loopedSlides && (p -= i - 2 * e.loopedSlides),
            p > c - 1 && (p -= c),
            p < 0 && 'bullets' !== e.params.paginationType && (p = c + p))
          : (p = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
        'bullets' === s.type &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const a = e.pagination.bullets
        let i, n, c
        if (
          (s.dynamicBullets &&
            ((r = a[0][e.isHorizontal() ? 'outerWidth' : 'outerHeight']),
            e.$wrapperEl.paginationCss({
              [e.isHorizontal() ? 'width' : 'height']:
                r * (s.dynamicMainBullets + 4) + 'px'
            }),
            s.dynamicMainBullets > 1 &&
              void 0 !== e.previousIndex &&
              ((l += p - (e.previousIndex - e.loopedSlides || 0)),
              l > s.dynamicMainBullets - 1
                ? (l = s.dynamicMainBullets - 1)
                : l < 0 && (l = 0)),
            (i = Math.max(p - l, 0)),
            (n = i + (Math.min(a.length, s.dynamicMainBullets) - 1)),
            (c = (n + i) / 2)),
          a.forEach((e) => {
            e.removePaginationItemClass(
              ['', '-next', '-next-next', '-prev', '-prev-prev', '-main']
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(' ')
            )
          }),
          d.length > 1)
        )
          a.each((e) => {
            const t = $(e),
              a = t.index()
            a === p && t.addClass(s.bulletActiveClass),
              s.dynamicBullets &&
                (a >= i && a <= n && t.addClass(`${s.bulletActiveClass}-main`),
                a === i && o(t, 'prev'),
                a === n && o(t, 'next'))
          })
        else {
          const t = a[p],
            r = t.index
          if (
            (t.addPaginationItemClass(s.bulletActiveClass), s.dynamicBullets)
          ) {
            const t = a[i],
              l = a[n]
            for (let e = i; e <= n; e += 1)
              a[e].addPaginationItemClass(`${s.bulletActiveClass}-main`)
            if (e.params.loop)
              if (r >= a.length) {
                for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                  a[a.length - e].addPaginationItemClass(
                    `${s.bulletActiveClass}-main`
                  )
                a[a.length - s.dynamicMainBullets - 1].addPaginationItemClass(
                  `${s.bulletActiveClass}-prev`
                )
              } else o(t, -1), o(l, 1)
            else o(t, -1), o(l, 1)
          }
        }
        if (s.dynamicBullets) {
          const i = Math.min(a.length, s.dynamicMainBullets + 4),
            l = (r * i - r) / 2 - c * r,
            n = t ? 'right' : 'left'
          a.forEach((t) => {
            t.setCss({ [e.isHorizontal() ? n : 'top']: `${l}px` })
          })
        }
      }
      if (
        ('fraction' === s.type &&
          ((e.native.paginationContent.text = s.formatFractionCurrent(p + 1)),
          (e.native.paginationContent.total = s.formatFractionTotal(c)),
          e.native.updateData({
            paginationContent: e.native.paginationContent
          })),
        'progressbar' === s.type)
      ) {
        let t
        t = s.progressbarOpposite
          ? e.isHorizontal()
            ? 'vertical'
            : 'horizontal'
          : e.isHorizontal()
            ? 'horizontal'
            : 'vertical'
        const a = (p + 1) / c
        let i = 1,
          r = 1
        'horizontal' === t ? (i = a) : (r = a),
          e.native.paginationContent.transform(
            `translate3d(0,0,0) scaleX(${i}) scaleY(${r})`
          ),
          e.native.paginationContent.transition(e.params.speed),
          e.native.updateData({ paginationContent: e.native.paginationContent })
      }
      'custom' === s.type && s.renderCustom
        ? (d.html(s.renderCustom(e, p + 1, c)), a('paginationRender', d[0]))
        : a('paginationUpdate', d[0]),
        e.params.watchOverflow &&
          e.enabled &&
          e.$wrapperEl[
            e.isLocked ? 'addPaginationClass' : 'removePaginationClass'
          ](s.lockClass)
    }
    function p() {
      const t = e.params.pagination
      if (n()) return
      const s =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length
      e.pagination.$el
      let i = 0
      if ('bullets' === t.type) {
        let a = e.params.loop
          ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          !e.params.loop &&
          a > s &&
          (a = s)
        for (let s = 0; s < a; s += 1)
          t.renderBullet
            ? (i += t.renderBullet.call(e, s, t.bulletClass))
            : ((e.native.paginationType = 'bullets'),
              e.native.paginationContent.push({
                index: s,
                outerWidth: 16,
                outerHeight: 16,
                classContent: [t.bulletClass],
                styleContent: {},
                addPaginationItemClass: function (e) {
                  this.classContent = Array.from(
                    new Set([...this.classContent, ...e.split(' ')])
                  )
                },
                removePaginationItemClass: function (e) {
                  this.classContent = this.classContent.filter(
                    (t) => !e.split(' ').includes(t)
                  )
                },
                setCss: function (e) {
                  Object.keys(e).forEach((t) => {
                    this.styleContent[t] = e[t]
                  })
                }
              }),
              e.native.updateData({
                paginationType: e.native.paginationType,
                paginationContent: e.native.paginationContent
              }))
        e.pagination.bullets = e.native.paginationContent
      }
      'fraction' === t.type &&
        (t.renderFraction
          ? (i = t.renderFraction.call(e, t.currentClass, t.totalClass))
          : ((e.native.paginationType = 'fraction'),
            (e.native.paginationContent = {
              currentClass: t.currentClass,
              totalClass: t.totalClass
            }),
            e.native.updateData({
              paginationType: e.native.paginationType,
              paginationContent: e.native.paginationContent
            }))),
        'progressbar' === t.type &&
          (t.renderProgressbar
            ? (i = t.renderProgressbar.call(e, t.progressbarFillClass))
            : ((e.native.paginationType = 'progressbar'),
              (e.native.paginationContent = {
                progressbarFillClass: t.progressbarFillClass,
                styleContent: { transform: '', transitionDuration: '' },
                transition: function (e) {
                  this.styleContent.transitionDuration = `${e}ms`
                },
                transform: function (e) {
                  this.styleContent.transform = e
                }
              }),
              e.native.updateData({
                paginationType: e.native.paginationType,
                paginationContent: e.native.paginationContent
              }))),
        'custom' !== t.type && a('paginationRender', e.pagination.$el[0])
    }
    function c() {
      const t = e.params.pagination
      if (!t.el) return
      e.native.updateData({ showIndicators: !0 })
      let s = t.el
      'bullets' === t.type &&
        t.clickable &&
        e.$wrapperEl.addPaginationClass(t.clickableClass),
        e.$wrapperEl.addPaginationClass(t.modifierClass + t.type),
        e.$wrapperEl.addPaginationClass(t.modifierClass + e.params.direction),
        'bullets' === t.type &&
          t.dynamicBullets &&
          (e.$wrapperEl.addPaginationClass(
            `${t.modifierClass}${t.type}-dynamic`
          ),
          (l = 0),
          t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
        'progressbar' === t.type &&
          t.progressbarOpposite &&
          e.$wrapperEl.addPaginationClass(t.progressbarOppositeClass),
        t.clickable &&
          e.on('paginationItemClick', function (t, s) {
            let a = s * e.params.slidesPerGroup
            e.params.loop && (a += e.loopedSlides), e.slideTo(a)
          }),
        Object.assign(e.pagination, { $el: s, el: s }),
        e.enabled || e.$wrapperEl.addPaginationClass(t.lockClass)
    }
    function u() {
      const t = e.params.pagination
      n() ||
        (e.pagination.$el,
        t.clickable &&
          e.off(
            'paginationItemClick',
            (function (e = '') {
              return `.${e
                .trim()
                .replace(/([\.:!\/])/g, '\\$1')
                .replace(/ /g, '.')}`
            })(t.bulletClass)
          ))
    }
    s('init update', () => {
      e.native.paginationContent &&
        e.native.updateData({ paginationContent: [] }),
        c(),
        p(),
        d()
    }),
      s('activeIndexChange', () => {
        ;(e.params.loop || void 0 === e.snapIndex) && d()
      }),
      s('snapIndexChange', () => {
        e.params.loop || d()
      }),
      s('slidesLengthChange', () => {
        e.params.loop && (p(), d())
      }),
      s('snapGridLengthChange', () => {
        e.params.loop || (p(), d())
      }),
      s('destroy', () => {
        u()
      }),
      s('enable disable', () => {
        const { $el: t } = e.pagination
        t &&
          e.$wrapperEl[
            e.enabled ? 'removePaginationClass' : 'addPaginationClass'
          ](e.params.pagination.lockClass)
      }),
      s('lock unlock', () => {
        d()
      }),
      s('click', (t, s) => {
        const i = s.target,
          { $el: r } = e.pagination
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          r.length > 0 &&
          !$(i).hasClass(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && i === e.navigation.nextEl) ||
              (e.navigation.prevEl && i === e.navigation.prevEl))
          )
            return
          const t = r.hasClass(e.params.pagination.hiddenClass)
          a(!0 === t ? 'paginationShow' : 'paginationHide'),
            r.toggleClass(e.params.pagination.hiddenClass)
        }
      }),
      Object.assign(e.pagination, { render: p, update: d, init: c, destroy: u })
  },
  function ({ swiper: e, extendParams: t, on: s }) {
    t({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-thumbs'
      }
    })
    let a = !1,
      i = !1
    function r() {
      const t = e.thumbs.swiper
      if (!t) return
      const s = t.clickedIndex,
        a = t.clickedSlide
      if (a && a.hasClass(e.params.thumbs.slideThumbActiveClass)) return
      if (null == s) return
      let i
      if (
        ((i = t.params.loop
          ? parseInt($(t.clickedSlide).attr('data-swiper-slide-index'), 10)
          : s),
        e.params.loop)
      ) {
        let t = e.activeIndex
        e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
          (e.loopFix(),
          (e._clientLeft = e.$wrapperEl[0].clientLeft),
          (t = e.activeIndex))
        const s = e.slides
            .eq(t)
            .prevAll(`[data-swiper-slide-index="${i}"]`)
            .eq(0)
            .index(),
          a = e.slides
            .eq(t)
            .nextAll(`[data-swiper-slide-index="${i}"]`)
            .eq(0)
            .index()
        i = void 0 === s ? a : void 0 === a ? s : a - t < t - s ? a : s
      }
      e.slideTo(i)
    }
    function l() {
      const { thumbs: t } = e.params
      if (a) return !1
      a = !0
      const s = e.constructor
      if (t.swiper instanceof s)
        (e.thumbs.swiper = t.swiper),
          Object.assign(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }),
          Object.assign(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          })
      else if (K(t.swiper)) {
        const a = Object.assign({}, t.swiper)
        Object.assign(a, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
          (e.thumbs.swiper = new s(a)),
          (i = !0)
      }
      return (
        e.thumbs.swiper.$el &&
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
        e.thumbs.swiper.on('slideClick', r),
        !0
      )
    }
    function n(t) {
      const s = e.thumbs.swiper
      if (!s) return
      const a =
          'auto' === s.params.slidesPerView
            ? s.slidesPerViewDynamic()
            : s.params.slidesPerView,
        i = e.params.thumbs.autoScrollOffset,
        r = i && !s.params.loop
      if (e.realIndex !== s.realIndex || r) {
        let l,
          n,
          o = s.activeIndex
        if (s.params.loop) {
          s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
            (s.loopFix(),
            (s._clientLeft = s.$wrapperEl[0].clientLeft),
            (o = s.activeIndex))
          const t = s.slides
              .eq(o)
              .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
              .eq(0)
              .index(),
            a = s.slides
              .eq(o)
              .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
              .eq(0)
              .index()
          ;(l =
            void 0 === t
              ? a
              : void 0 === a
                ? t
                : a - o == o - t
                  ? s.params.slidesPerGroup > 1
                    ? a
                    : o
                  : a - o < o - t
                    ? a
                    : t),
            (n = e.activeIndex > e.previousIndex ? 'next' : 'prev')
        } else (l = e.realIndex), (n = l > e.previousIndex ? 'next' : 'prev')
        r && (l += 'next' === n ? i : -1 * i),
          s.visibleSlidesIndexes &&
            s.visibleSlidesIndexes.indexOf(l) < 0 &&
            (s.params.centeredSlides
              ? (l =
                  l > o ? l - Math.floor(a / 2) + 1 : l + Math.floor(a / 2) - 1)
              : l > o && s.params.slidesPerGroup,
            s.slideTo(l, t ? 0 : void 0))
      }
      let l = 1
      const n = e.params.thumbs.slideThumbActiveClass
      if (
        (e.params.slidesPerView > 1 &&
          !e.params.centeredSlides &&
          (l = e.params.slidesPerView),
        e.params.thumbs.multipleActiveThumbs || (l = 1),
        (l = Math.floor(l)),
        s.slides.forEach((t) => {
          t.addClass(e.params.slideThumbsClass), t.removeClass(n)
        }),
        s.params.loop || (s.params.virtual && s.params.virtual.enabled))
      )
        for (let o = 0; o < l; o += 1)
          s.$wrapperEl
            .children(`[data-swiper-slide-index="${e.realIndex + o}"]`)
            .addClass(n)
      else for (let o = 0; o < l; o += 1) s.slides[e.realIndex + o].addClass(n)
    }
    ;(e.thumbs = { swiper: null }),
      s('beforeInit', () => {
        const { thumbs: t } = e.params
        t && t.swiper && (l(), n(!0))
      }),
      s('slideChange update resize observerUpdate', () => {
        e.thumbs.swiper && n()
      }),
      s('setTransition', (t, s) => {
        const a = e.thumbs.swiper
        a && a.setTransition(s)
      }),
      s('beforeDestroy', () => {
        const t = e.thumbs.swiper
        t && i && t && t.destroy()
      }),
      Object.assign(e.thumbs, { init: l, update: n })
  },
  function ({ swiper: e, extendParams: t, on: s, emit: a }) {
    let i,
      r,
      l,
      n,
      o = !1,
      d = null,
      p = null
    function c() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return
      const { scrollbar: t, rtlTranslate: s, progress: a } = e,
        i = e.params.scrollbar
      let n = r,
        o = (l - r) * a
      s
        ? ((o = -o), o > 0 ? ((n = r - o), (o = 0)) : -o + r > l && (n = l + o))
        : o < 0
          ? ((n = r + o), (o = 0))
          : o + r > l && (n = l - o),
        e.isHorizontal()
          ? (e.$wrapperEl.scrollbarItemTransform(`translate3d(${o}px, 0, 0)`),
            e.$wrapperEl.scrollbarItemCss({ width: `${n}px` }))
          : (e.$wrapperEl.scrollbarItemTransform(`translate3d(0px, ${o}px, 0)`),
            e.$wrapperEl.scrollbarItemCss({ height: `${n}px` })),
        i.hide &&
          (clearTimeout(d),
          e.$wrapperEl.scrollbarCss({ opacity: 1 }),
          (d = setTimeout(() => {
            e.$wrapperEl.scrollbarCss({ opacity: 0 }),
              e.$wrapperEl.scrollbarTransition(400)
          }, 1e3)))
    }
    async function u() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return
      const { scrollbar: t } = e,
        { $el: s, methods: a } = t
      e.$wrapperEl.scrollbarItemCss({ width: '', height: '' })
      let i = await e.native.getRectScrollbar()
      ;(a.offset = function () {
        return i
      }),
        (l = e.isHorizontal() ? i.width : i.height),
        (n =
          e.size /
          (e.virtualSize +
            e.params.slidesOffsetBefore -
            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
        (r =
          'auto' === e.params.scrollbar.dragSize
            ? l * n
            : parseInt(e.params.scrollbar.dragSize, 10)),
        e.isHorizontal()
          ? e.$wrapperEl.scrollbarItemCss({ width: `${r}px` })
          : e.$wrapperEl.scrollbarItemCss({ height: `${r}px` }),
        n >= 1
          ? e.$wrapperEl.scrollbarCss({ display: 'none' })
          : e.$wrapperEl.scrollbarCss({ display: '' }),
        e.params.scrollbar.hide && e.$wrapperEl.scrollbarCss({ opacity: 0 }),
        e.params.watchOverflow &&
          e.enabled &&
          e.$wrapperEl[
            e.isLocked ? 'addScrollbarClass' : 'removeScrollbarClass'
          ](e.params.scrollbar.lockClass)
    }
    function h(t) {
      const { scrollbar: s, rtlTranslate: a } = e,
        { $el: n, methods: o } = s
      let d
      ;(d =
        ((function (t) {
          return e.isHorizontal()
            ? ('touchstart' === t.type || t.type, t.touches[0].clientX)
            : 'touchstart' === t.type || 'touchmove' === t.type
              ? t.touches[0].clientY
              : t.clientY
        })(t) -
          o.offset()[e.isHorizontal() ? 'left' : 'top'] -
          (null !== i ? i : r / 2)) /
        (l - r)),
        (d = Math.max(Math.min(d, 1), 0)),
        a && (d = 1 - d)
      const p = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * d
      e.updateProgress(p),
        e.setTranslate(p),
        e.updateActiveIndex(),
        e.updateSlidesClasses()
    }
    function m(t, s) {
      const r = e.params.scrollbar,
        { scrollbar: l, $wrapperEl: n } = e
      ;(o = !0),
        (i = null),
        n.transition(100),
        e.$wrapperEl.scrollbarItemTransition(100),
        h(s),
        clearTimeout(p),
        e.$wrapperEl.scrollbarTransition(0),
        r.hide && e.$wrapperEl.scrollbarCss({ opacity: 1 }),
        e.params.cssMode && e.$wrapperEl.css({ 'scroll-snap-type': 'none' }),
        a('scrollbarDragStart', s)
    }
    function f(t, s) {
      const { scrollbar: i, $wrapperEl: r } = e
      o &&
        (h(s),
        r.transition(0),
        e.$wrapperEl.scrollbarTransition(0),
        e.$wrapperEl.scrollbarItemTransition(0),
        a('scrollbarDragMove', s))
    }
    function g(t, s) {
      const i = e.params.scrollbar,
        { scrollbar: r, $wrapperEl: l } = e
      o &&
        ((o = !1),
        e.params.cssMode &&
          (e.$wrapperEl.css({ 'scroll-snap-type': '' }), l.transition('')),
        i.hide &&
          (clearTimeout(p),
          (p = Q(() => {
            e.$wrapperEl.scrollbarCss({ opacity: 0 }),
              e.$wrapperEl.scrollbarTransition(400)
          }, 1e3))),
        a('scrollbarDragEnd', s),
        i.snapOnRelease && e.slideToClosest())
    }
    function v(t) {
      const {
          scrollbar: s,
          touchEventsTouch: a,
          touchEventsDesktop: i,
          params: r,
          support: l
        } = e,
        n = s.$el,
        o = !(!l.passiveListener || !r.passiveListeners) && {
          passive: !1,
          capture: !1
        },
        d = !(!l.passiveListener || !r.passiveListeners) && {
          passive: !0,
          capture: !1
        }
      if (!n) return
      const p = 'on' === t ? 'on' : 'off'
      l.touch,
        e[p]('touchStartScrollbar', m, o),
        e[p]('touchMoveScrollbar', f, o),
        e[p]('touchEndScrollbar', g, d)
    }
    function w() {
      const { scrollbar: t } = e,
        s = e.params.scrollbar
      if (!s.el) return
      let a = s.el
      return (
        Object.assign(t, { $el: a, el: a, methods: {} }),
        s.draggable && e.params.scrollbar.el && v('on'),
        e.$wrapperEl[e.enabled ? 'removeScrollbarClass' : 'addScrollbarClass'](
          e.params.scrollbar.lockClass
        ),
        !0
      )
    }
    function b() {
      e.params.scrollbar.el && v('off')
    }
    t({
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag'
      }
    }),
      (e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
      s('init', async () => {
        await w(), u(), c()
      }),
      s('update resize observerUpdate lock unlock', () => {
        u()
      }),
      s('setTranslate', () => {
        c()
      }),
      s('setTransition', (t, s) => {
        !(function (t) {
          e.params.scrollbar.el &&
            e.scrollbar.el &&
            e.$wrapperEl.scrollbarItemTransition(t)
        })(s)
      }),
      s('enable disable', () => {
        const { $el: t } = e.scrollbar
        t &&
          t[e.enabled ? 'removeClass' : 'addClass'](
            e.params.scrollbar.lockClass
          )
      }),
      s('destroy', () => {
        b()
      }),
      Object.assign(e.scrollbar, {
        updateSize: u,
        setTranslate: c,
        init: w,
        destroy: b
      })
  },
  function ({ swiper: e, extendParams: t, on: s }) {
    s('setTransition', (t, s) => {
      e.params.willChange &&
        (('slide' != e.params.effect &&
          'cube' != e.params.effect &&
          'coverflow' != e.params.effect &&
          'panorama' != e.params.effect) ||
          e.$wrapperEl.willChange('transform'))
    }),
      s('transitionEnd', (t, s) => {
        e.params.willChange &&
          (e.$wrapperEl.willChange('auto'),
          e.slides.forEach((e) => {
            e.$itemEl.willChange('auto')
          }))
      })
  },
  function ({ swiper: e, extendParams: t, on: s }) {
    let a
    async function i(t) {
      const {
          slidesPerView: s,
          slidesPerGroup: a,
          centeredSlides: i
        } = e.params,
        { addSlidesBefore: r, addSlidesAfter: l } = e.params.virtual,
        { from: n, to: o, slides: d, slidesGrid: p, offset: c } = e.virtual
      e.params.cssMode || e.updateActiveIndex()
      const u = e.activeIndex || 0
      let h, m, f
      ;(h = e.rtlTranslate ? 'right' : e.isHorizontal() ? 'left' : 'top'),
        i
          ? ((m = Math.floor(s / 2) + a + l), (f = Math.floor(s / 2) + a + r))
          : ((m = s + (a - 1) + l), (f = a + r))
      const g = Math.max((u || 0) - f, 0),
        v = Math.min((u || 0) + m, d.length - 1),
        w = (e.slidesGrid[g] || 0) - (e.slidesGrid[0] || 0)
      function b() {
        e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.lazy && e.params.lazy.enabled && e.lazy.load()
      }
      if (
        (Object.assign(e.virtual, {
          from: g,
          to: v,
          offset: w,
          slidesGrid: e.slidesGrid
        }),
        n === g && o === v && !t)
      )
        return (
          e.slidesGrid !== p && w !== c && e.slides.css(h, `${w}px`),
          void e.updateProgress()
        )
      if (e.params.virtual.renderExternal)
        return (
          e.params.virtual.renderExternal.call(e, {
            offset: w,
            from: g,
            to: v,
            slides: (function () {
              const t = []
              if ('keep' == e.params.virtual.type)
                for (let e = 0; e < g; e += 1) t.push('')
              for (let e = g; e <= v; e += 1) t.push(d[e])
              return t
            })()
          }),
          void (e.params.virtual.renderExternalUpdate && b())
        )
      const S = [],
        C = []
      if (t) e.$wrapperEl.find(`.${e.params.slideClass}`).remove()
      else
        for (let x = n; x <= o; x += 1)
          (x < g || x > v) &&
            (e.virtualList.splice(
              e.virtualList.findIndex((e) => e == d[x]),
              1
            ),
            e.virtualIndexList.splice(
              e.virtualIndexList.findIndex((e) => e == x),
              1
            ))
      for (let e = 0; e < d.length; e += 1)
        e >= g &&
          e <= v &&
          (void 0 === o || t
            ? C.push(e)
            : (e > o && C.push(e), e < n && S.push(e)))
      C.forEach((t) => {
        e.virtualList.push(d[t]), e.virtualIndexList.push(t)
      }),
        S.sort((e, t) => t - e).forEach((t) => {
          e.virtualList.unshift(d[t]), e.virtualIndexList.unshift(t)
        }),
        e.native.emit('input', [e.virtualList]),
        b()
    }
    t({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    }),
      (e.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: []
      }),
      s('beforeInit', () => {
        e.params.virtual.enabled &&
          ((e.virtual.slides = e.params.virtual.slides),
          e.classNames.push(`${e.params.containerModifierClass}virtual`),
          (e.params.watchSlidesProgress = !0),
          (e.originalParams.watchSlidesProgress = !0),
          e.params.initialSlide || i())
      }),
      s('setTranslate', async () => {
        e.params.virtual.enabled &&
          (e.params.cssMode && e._immediateVirtual,
          clearTimeout(a),
          (a = setTimeout(() => {
            i()
          }, 100)))
      }),
      Object.assign(e.virtual, {
        appendSlide: function (t) {
          if ('object' == typeof t && 'length' in t)
            for (let s = 0; s < t.length; s += 1)
              t[s] && e.virtual.slides.push(t[s])
          else e.virtual.slides.push(t)
          i(!0)
        },
        prependSlide: function (t) {
          const s = e.activeIndex
          let a = s + 1,
            r = 1
          if (Array.isArray(t)) {
            for (let s = 0; s < t.length; s += 1)
              t[s] && e.virtual.slides.unshift(t[s])
            ;(a = s + t.length), (r = t.length)
          } else e.virtual.slides.unshift(t)
          if (e.params.virtual.cache) {
            const t = e.virtual.cache,
              s = {}
            Object.keys(t).forEach((e) => {
              const a = t[e],
                i = a.attr('data-swiper-slide-index')
              i && a.attr('data-swiper-slide-index', parseInt(i, 10) + r),
                (s[parseInt(e, 10) + r] = a)
            }),
              (e.virtual.cache = s)
          }
          i(!0), e.slideTo(a, 0)
        },
        removeSlide: function (t) {
          if (null == t) return
          let s = e.activeIndex
          if (Array.isArray(t))
            for (let a = t.length - 1; a >= 0; a -= 1)
              e.virtual.slides.splice(t[a], 1),
                e.params.virtual.cache && delete e.virtual.cache[t[a]],
                t[a] < s && (s -= 1),
                (s = Math.max(s, 0))
          else
            e.virtual.slides.splice(t, 1),
              e.params.virtual.cache && delete e.virtual.cache[t],
              t < s && (s -= 1),
              (s = Math.max(s, 0))
          i(!0), e.slideTo(s, 0)
        },
        removeAllSlides: function () {
          ;(e.virtual.slides = []),
            e.params.virtual.cache && (e.virtual.cache = {}),
            i(!0),
            e.slideTo(0, 0)
        },
        update: i
      })
  },
  function ({ swiper: e, extendParams: t, on: s }) {
    function a(e, t) {
      const s = (function () {
        let e, t, s
        return (a, i) => {
          for (t = -1, e = a.length; e - t > 1; )
            (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s)
          return e
        }
      })()
      let a, i
      return (
        (this.x = e),
        (this.y = t),
        (this.lastIndex = e.length - 1),
        (this.interpolate = function (e) {
          return e
            ? ((i = s(this.x, e)),
              (a = i - 1),
              ((e - this.x[a]) * (this.y[i] - this.y[a])) /
                (this.x[i] - this.x[a]) +
                this.y[a])
            : 0
        }),
        this
      )
    }
    function i() {
      e.controller.control &&
        e.controller.spline &&
        ((e.controller.spline = void 0), delete e.controller.spline)
    }
    t({ controller: { control: void 0, inverse: !1, by: 'slide' } }),
      (e.controller = { control: void 0 }),
      s('beforeInit', () => {
        if (
          'undefined' != typeof window &&
          ('string' == typeof e.params.controller.control ||
            e.params.controller.control instanceof HTMLElement)
        ) {
          const t = document.querySelector(e.params.controller.control)
          if (t && t.swiper) e.controller.control = t.swiper
          else if (t) {
            const s = (a) => {
              ;(e.controller.control = a.detail[0]),
                e.update(),
                t.removeEventListener('init', s)
            }
            t.addEventListener('init', s)
          }
        } else e.controller.control = e.params.controller.control
      }),
      s('update', () => {
        i()
      }),
      s('resize', () => {
        i()
      }),
      s('observerUpdate', () => {
        i()
      }),
      s('setTranslate', (t, s, a) => {
        e.controller.control &&
          !e.controller.control.destroyed &&
          e.controller.setTranslate(s, a)
      }),
      s('setTransition', (t, s, a) => {
        e.controller.control &&
          !e.controller.control.destroyed &&
          e.controller.setTransition(s, a)
      }),
      Object.assign(e.controller, {
        setTranslate: function (t, s) {
          const i = e.controller.control
          let r, l
          const n = e.constructor
          function o(t) {
            if (t.destroyed) return
            const s = e.rtlTranslate ? -e.translate : e.translate
            'slide' === e.params.controller.by &&
              (!(function (t) {
                e.controller.spline = e.params.loop
                  ? new a(e.slidesGrid, t.slidesGrid)
                  : new a(e.snapGrid, t.snapGrid)
              })(t),
              (l = -e.controller.spline.interpolate(-s))),
              (l && 'container' !== e.params.controller.by) ||
                ((r =
                  (t.maxTranslate() - t.minTranslate()) /
                  (e.maxTranslate() - e.minTranslate())),
                (!Number.isNaN(r) && Number.isFinite(r)) || (r = 1),
                (l = (s - e.minTranslate()) * r + t.minTranslate())),
              e.params.controller.inverse && (l = t.maxTranslate() - l),
              t.updateProgress(l),
              t.setTranslate(l, e),
              t.updateActiveIndex(),
              t.updateSlidesClasses()
          }
          if (Array.isArray(i))
            for (let e = 0; e < i.length; e += 1)
              i[e] !== s && i[e] instanceof n && o(i[e])
          else i instanceof n && s !== i && o(i)
        },
        setTransition: function (t, s) {
          const a = e.constructor,
            i = e.controller.control
          let r
          function l(s) {
            s.destroyed ||
              (s.setTransition(t, e),
              0 !== t &&
                (s.transitionStart(),
                s.params.autoHeight &&
                  Q(() => {
                    s.updateAutoHeight()
                  })))
          }
          if (Array.isArray(i))
            for (r = 0; r < i.length; r += 1)
              i[r] !== s && i[r] instanceof a && l(i[r])
          else i instanceof a && s !== i && l(i)
        }
      })
  }
]
function Pe(e) {
  return (
    'object' == typeof e &&
    null !== e &&
    e.constructor &&
    'Object' === Object.prototype.toString.call(e).slice(8, -1)
  )
}
function $e(e, t) {
  const s = ['__proto__', 'constructor', 'prototype']
  Object.keys(t)
    .filter((e) => s.indexOf(e) < 0)
    .forEach((s) => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : Pe(t[s]) && Pe(e[s]) && Object.keys(t[s]).length > 0
          ? t[s].__swiper__
            ? (e[s] = t[s])
            : $e(e[s], t[s])
          : (e[s] = t[s])
    })
}
function Me(e = {}) {
  return e.scrollbar
}
Ce.use(Ee)
const ke = [
  'modules',
  'init',
  '_direction',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_preloadImages',
  'updateOnImagesReady',
  '_loop',
  '_loopAdditionalSlides',
  '_loopedSlides',
  '_loopFillGroupWithBlank',
  'loopPreventsSlide',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideBlankClass',
  'slideActiveClass',
  'slideDuplicateActiveClass',
  'slideVisibleClass',
  'slideDuplicateClass',
  'slideNextClass',
  'slideDuplicateNextClass',
  'slidePrevClass',
  'slideDuplicatePrevClass',
  'wrapperClass',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'panorama',
  'hashNavigation',
  'history',
  'keyboard',
  'lazy',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  '_virtual',
  'zoom'
]
function Ie(e = {}) {
  const t = { on: {} },
    s = {}
  $e(t, Ce.defaults),
    $e(t, Ce.extendedDefaults),
    (t._emitClasses = !0),
    (t.init = !1)
  const a = {},
    i = ke.map((e) => e.replace(/_/, '')),
    r = Object.assign({}, e)
  return (
    Object.keys(r).forEach((r) => {
      void 0 !== e[r] &&
        (i.indexOf(r) >= 0
          ? Pe(e[r])
            ? ((t[r] = {}), (s[r] = {}), $e(t[r], e[r]), $e(s[r], e[r]))
            : ((t[r] = e[r]), (s[r] = e[r]))
          : 0 === r.search(/on[A-Z]/) && 'function' == typeof e[r]
            ? (t.on[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r])
            : (a[r] = e[r]))
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((e) => {
      !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e]
    }),
    { params: t, passedParams: s, rest: a }
  )
}
function _e(e, t) {
  let s = t.slidesPerView
  if (t.breakpoints) {
    const e = Ce.prototype.getBreakpoint(t.breakpoints),
      a = e in t.breakpoints ? t.breakpoints[e] : void 0
    a && a.slidesPerView && (s = a.slidesPerView)
  }
  let a = Math.ceil(parseFloat(t.loopedSlides || s, 10))
  return (a += t.loopAdditionalSlides), a > e.length && (a = e.length), a
}
async function Oe({
  swiper: e,
  slides: t,
  passedParams: s,
  changedParams: a,
  nextEl: i,
  prevEl: r,
  paginationEl: l,
  scrollbarEl: n
}) {
  const o = a.filter((e) => 'children' !== e && 'direction' !== e),
    {
      params: d,
      pagination: p,
      navigation: c,
      scrollbar: u,
      virtual: h,
      thumbs: m
    } = e
  let f, g, v, w, b
  a.includes('thumbs') &&
    s.thumbs &&
    s.thumbs.swiper &&
    d.thumbs &&
    !d.thumbs.swiper &&
    (f = !0),
    a.includes('controller') &&
      s.controller &&
      s.controller.control &&
      d.controller &&
      !d.controller.control &&
      (g = !0),
    a.includes('pagination') &&
      s.pagination &&
      (s.pagination.el || l) &&
      (d.pagination || !1 === d.pagination) &&
      p &&
      !p.el &&
      (v = !0),
    a.includes('scrollbar') &&
      s.scrollbar &&
      (s.scrollbar.el || n) &&
      (d.scrollbar || !1 === d.scrollbar) &&
      u &&
      !u.el &&
      (w = !0),
    a.includes('navigation') &&
      s.navigation &&
      (s.navigation.prevEl || r) &&
      (s.navigation.nextEl || i) &&
      (d.navigation || !1 === d.navigation) &&
      c &&
      !c.prevEl &&
      !c.nextEl &&
      (b = !0)
  if (
    (o.forEach((t) => {
      if (Pe(d[t]) && Pe(s[t])) $e(d[t], s[t])
      else {
        const i = s[t]
        ;(!0 !== i && !1 !== i) ||
        ('navigation' !== t && 'pagination' !== t && 'scrollbar' !== t)
          ? (d[t] = s[t])
          : !1 === i &&
            e[(a = t)] &&
            (e[a].destroy(),
            'navigation' === a
              ? ((d[a].prevEl = void 0),
                (d[a].nextEl = void 0),
                (e[a].prevEl = void 0),
                (e[a].nextEl = void 0))
              : ((d[a].el = void 0), (e[a].el = void 0)))
      }
      var a
    }),
    a.includes('children') && h && d.virtual.enabled
      ? h.update(!0)
      : a.includes('children') &&
        e.lazy &&
        e.params.lazy.enabled &&
        e.lazy.load(),
    f)
  ) {
    m.init() && m.update(!0)
  }
  g && (e.controller.control = d.controller.control),
    v && (l && (d.pagination.el = l), p.init(), p.render(), p.update()),
    w &&
      (n && (d.scrollbar.el = n), u.init(), u.updateSize(), u.setTranslate()),
    b &&
      (i && (d.navigation.nextEl = i),
      r && (d.navigation.prevEl = r),
      c.init(),
      c.update()),
    a.includes('allowSlideNext') && (e.allowSlideNext = s.allowSlideNext),
    a.includes('allowSlidePrev') && (e.allowSlidePrev = s.allowSlidePrev),
    a.includes('direction') && e.changeDirection(s.direction, !1),
    e.update()
}
var ze
const De = g(
    {
      name: 'z-swipe',
      mixins: [
        ((ze = 'zSwipe'),
        {
          provide() {
            return { [ze]: this }
          },
          created() {
            this.children = []
          },
          beforeUnmount() {
            T('childrenReady' + this._uid)
          }
        })
      ],
      emits: [
        'update:modelValue',
        'touch-start',
        'touch-move',
        'touch-end',
        'transitionend',
        'slideClick',
        '_beforeBreakpoint',
        '_containerClasses',
        '_slideClass',
        '_slideClasses',
        '_swiper',
        'activeIndexChange',
        'afterInit',
        'autoplay',
        'autoplayStart',
        'autoplayStop',
        'autoplayPause',
        'autoplayResume',
        'beforeDestroy',
        'beforeInit',
        'beforeLoopFix',
        'beforeResize',
        'beforeSlideChangeStart',
        'beforeTransitionStart',
        'breakpoint',
        'changeDirection',
        'click',
        'disable',
        'doubleTap',
        'doubleClick',
        'destroy',
        'enable',
        'fromEdge',
        'hashChange',
        'hashSet',
        'imagesReady',
        'init',
        'keyPress',
        'lazyImageLoad',
        'lazyImageReady',
        'lock',
        'loopFix',
        'momentumBounce',
        'navigationHide',
        'navigationShow',
        'observerUpdate',
        'orientationchange',
        'paginationHide',
        'paginationRender',
        'paginationShow',
        'paginationUpdate',
        'progress',
        'reachBeginning',
        'reachEnd',
        'realIndexChange',
        'resize',
        'scroll',
        'scrollbarDragEnd',
        'scrollbarDragMove',
        'scrollbarDragStart',
        'setTransition',
        'setTranslate',
        'slideChange',
        'slideChangeTransitionEnd',
        'slideChangeTransitionStart',
        'slideNextTransitionEnd',
        'slideNextTransitionStart',
        'slidePrevTransitionEnd',
        'slidePrevTransitionStart',
        'slideResetTransitionStart',
        'slideResetTransitionEnd',
        'sliderMove',
        'sliderFirstMove',
        'slidesLengthChange',
        'slidesGridLengthChange',
        'snapGridLengthChange',
        'snapIndexChange',
        'swiper',
        'tap',
        'toEdge',
        'touchEnd',
        'touchMove',
        'touchMoveOpposite',
        'touchStart',
        'transitionEnd',
        'transitionStart',
        'unlock',
        'update',
        'zoomChange',
        'beforeMount',
        'nextClick',
        'prevClick',
        'touchStartScrollbar',
        'touchMoveScrollbar',
        'touchEndScrollbar',
        'beforeUpdate',
        'paginationItemClick'
      ],
      props: {
        customStyle: { type: Object, default: () => ({}) },
        options: { type: Object, default: () => ({}) },
        modelValue: { type: Array, default: () => [] }
      },
      data: () => ({
        wxsTransform: '',
        wrapperStyle: {},
        contentClass: '',
        nextElClass: [],
        prevElClass: [],
        paginationElClass: [],
        paginationItemElClass: [],
        loopBlankShow: !1,
        loopBlankNumber: 0,
        cubeShadowShowWrapper: !1,
        cubeShadowShowRoot: !1,
        cubeShadowStyle: {},
        eventsListeners: {},
        showPrevButton: !1,
        showPrevButtonSlot: !1,
        showNextButton: !1,
        showNextButtonSlot: !1,
        showIndicators: !1,
        paginationContent: [],
        paginationType: '',
        paginationStyle: {},
        scrollbarElClass: [],
        scrollbarStyle: {},
        scrollbarItemStyle: {},
        rectInfo: null,
        containerClasses: 'swiper',
        virtualData: null,
        firstLoad: !0,
        originalDataList: [],
        loopUpdateData: !1
      }),
      computed: {
        value() {
          return this.modelValue
        },
        _uid() {
          return this._.uid
        },
        nextClass() {
          return this.nextElClass.join(' ')
        },
        prevClass() {
          return this.prevElClass.join(' ')
        },
        paginationClass() {
          return this.paginationElClass.join(' ')
        },
        paginationItemClass() {
          return this.paginationItemElClass.join(' ')
        },
        scrollbarClass() {
          return this.scrollbarElClass.join(' ')
        },
        scrollbarShow() {
          return Me(this.options)
        }
      },
      created() {
        const { params: e, passedParams: t } = Ie(this.options)
        ;(this.swiperElRef = 'swiper'),
          (this.swiperParams = e),
          (this.oldPassedParamsRef = t),
          this.slidesRef,
          (e.onAny = (e, ...t) => {
            this.$emit(e, ...t)
          }),
          Object.assign(e.on, {
            _containerClasses(e, t) {
              this.containerClasses = t
            }
          }),
          this.$watch(
            () => ({ value: this.value, options: this.options }),
            (e) => {
              if (
                this.swiperParams &&
                this.swiperParams.virtual &&
                !this.virtualData &&
                e.options.virtual.slides.length
              ) {
                this.swiperParams.virtual.slides = e.options.virtual.slides
                const t = {
                  cache: !1,
                  slides: e.options.virtual.slides,
                  renderExternal: (e) => {
                    ;(this.virtualData = e),
                      this.$emit('update:modelValue', e.slides)
                  },
                  renderExternalUpdate: !1
                }
                $e(this.swiperParams.virtual, t), this.loadSwiper()
              }
              if (this.swiperParams && this.swiperParams.loop)
                if (
                  this.originalDataList.length &&
                  this.originalDataList.toString() == e.value.toString()
                )
                  this.loopUpdateData = !0
                else {
                  this.loopUpdateData = !1
                  let t = (function (e, t, s) {
                    const a = s
                    if (t.loopFillGroupWithBlank) {
                      const e = t.slidesPerGroup - (a.length % t.slidesPerGroup)
                      if (e !== t.slidesPerGroup)
                        for (let s = 0; s < e; s += 1) {
                          const e = h('div', {
                            class: `${t.slideClass} ${t.slideBlankClass}`
                          })
                          a.push(e)
                        }
                    }
                    'auto' !== t.slidesPerView ||
                      t.loopedSlides ||
                      (t.loopedSlides = a.length)
                    const i = _e(a, t),
                      r = [],
                      l = []
                    return (
                      a.forEach((t, s) => {
                        s < i && (e.loopUpdateData || l.push(t)),
                          s < a.length &&
                            s >= a.length - i &&
                            (e.loopUpdateData || r.push(t))
                      }),
                      e &&
                        (e.originalDataList || (e.originalDataList = []),
                        (e.originalDataList = [...r, ...a, ...l])),
                      { data: [...r, ...a, ...l] }
                    )
                  })(this, this.swiperParams, this.value)
                  if (
                    this.swiperParams.loop &&
                    !this.loopUpdateData &&
                    t.data.toString() != e.value.toString()
                  )
                    return (
                      (this.loopUpdateData = !0),
                      void this.$emit('update:modelValue', t.data)
                    )
                }
              if (this.swiper && !this.firstLoad) {
                if (this.virtualData && 'cut' == e.options.virtual.type) {
                  const e = this.swiper.isHorizontal()
                    ? {
                        [this.swiper.rtlTranslate ? 'right' : 'left']:
                          `${this.virtualData.offset}px`
                      }
                    : { top: `${this.virtualData.offset}px` }
                  this.children.map((t) => {
                    t.css(e)
                  })
                }
                this.updateSwiper(e.value, e.options, this.children)
              }
            },
            { deep: !0, immediate: !0 }
          ),
          this.$watch(
            () => this.$data,
            (e) => {
              this.swiper &&
                this.swiper.native &&
                Object.assign(this.swiper.native, { val: e })
            },
            { deep: !0 }
          ),
          this.$watch(
            () => this.virtualData,
            (e) => {
              var t
              this.swiper &&
                this.virtualData &&
                (!(t = this.swiper) ||
                  t.destroyed ||
                  !t.params.virtual ||
                  (t.params.virtual && !t.params.virtual.enabled) ||
                  (t.updateSlides(),
                  t.updateProgress(),
                  t.updateSlidesClasses(),
                  t.lazy && t.params.lazy.enabled && t.lazy.load(),
                  t.parallax &&
                    t.params.parallax &&
                    t.params.parallax.enabled &&
                    t.parallax.setTranslate()))
            },
            { deep: !0 }
          ),
          O('childrenReady' + this._uid, async (e) => {
            ;(e.dataSwiperSlideIndex = e.index),
              this.children.length == this.value.length &&
                Promise.all(this.children.map((e) => e.getSize())).then((e) => {
                  if (this.swiperParams && this.swiperParams.loop) {
                    if (
                      !this.originalDataList.length ||
                      this.originalDataList.toString() != this.value.toString()
                    )
                      return
                    this.firstLoad && this.loadSwiper()
                  } else this.firstLoad && this.loadSwiper()
                  this.updateSwiper(this.value, this.options, this.children)
                })
          })
      },
      beforeUnmount() {
        this.swiper && !this.swiper.destroyed && this.swiper.destroy(!0, !1)
      },
      methods: {
        loadSwiper() {
          let e = this.swiperParams
          ;(this.slidesRef = this.children),
            (this.oldSlidesRef = this.slidesRef)
          let t = (function (e, t) {
            return new Ce(e, t)
          })(e, {
            ...this.$data,
            ...this.$props,
            swiperElId: 'swiper' + this._uid,
            emit: this.emit.bind(this),
            updateData: this.updateData.bind(this),
            getRect: this.getRect.bind(this),
            getRectScrollbar: this.getRectScrollbar.bind(this),
            willChange: this.willChange.bind(this),
            transform: this.transform.bind(this),
            transition: this.transition.bind(this),
            scrollbarTransform: this.scrollbarTransform.bind(this),
            scrollbarTransition: this.scrollbarTransition.bind(this),
            scrollbarItemTransform: this.scrollbarItemTransform.bind(this),
            scrollbarItemTransition: this.scrollbarItemTransition.bind(this),
            addClass: this.addClass.bind(this),
            removeClass: this.removeClass.bind(this),
            addPaginationClass: this.addPaginationClass.bind(this),
            removePaginationClass: this.removePaginationClass.bind(this),
            addScrollbarClass: this.addScrollbarClass.bind(this),
            removeScrollbarClass: this.removeScrollbarClass.bind(this),
            setCss: this.setCss.bind(this),
            css: this.setCss.bind(this),
            paginationCss: this.setPaginationCss.bind(this),
            scrollbarCss: this.scrollbarCss.bind(this),
            scrollbarItemCss: this.scrollbarItemCss.bind(this),
            addNextElClass: this.addNextElClass.bind(this),
            addPrevElClass: this.addPrevElClass.bind(this),
            removeNextElClass: this.removeNextElClass.bind(this),
            removePrevElClass: this.removePrevElClass.bind(this),
            cubeShadowCss: this.cubeShadowCss.bind(this),
            cubeShadowTransform: this.cubeShadowTransform.bind(this),
            cubeShadowTransition: this.cubeShadowTransition.bind(this)
          })
          ;(this.swiper = t),
            (t.loopCreate = () => {}),
            (t.loopDestroy = () => {}),
            e.loop && (t.loopedSlides = _e(this.slidesRef, e)),
            this.swiper &&
              (!(function (
                {
                  el: e,
                  nextEl: t,
                  prevEl: s,
                  paginationEl: a,
                  scrollbarEl: i,
                  swiper: r
                },
                l
              ) {
                ;(function (e = {}) {
                  return (
                    e.navigation &&
                    void 0 === e.navigation.nextEl &&
                    void 0 === e.navigation.prevEl
                  )
                })(l) &&
                  t &&
                  s &&
                  ((r.params.navigation.nextEl = t),
                  (r.originalParams.navigation.nextEl = t),
                  (r.params.navigation.prevEl = s),
                  (r.originalParams.navigation.prevEl = s)),
                  (function (e = {}) {
                    return e.pagination && void 0 === e.pagination.el
                  })(l) &&
                    a &&
                    ((r.params.pagination.el = a),
                    (r.originalParams.pagination.el = a)),
                  Me(l) &&
                    i &&
                    ((r.params.scrollbar.el = i),
                    (r.originalParams.scrollbar.el = i)),
                  r.init(e)
              })(
                {
                  el: this.swiperElRef,
                  nextEl: this.nextElRef,
                  prevEl: this.prevElRef,
                  paginationEl: this.paginationElRef,
                  scrollbarEl: this.scrollbarElRef,
                  swiper: this.swiper
                },
                this.swiperParams
              ),
              this.$emit('swiper'),
              (this.firstLoad = !1))
        },
        updateSwiper(e, t, s) {
          ;(this.swiper.slides = s), (this.slidesRef = s)
          let a = this.initializedRef,
            i = this.swiper,
            r = this.slidesRef,
            l = this.oldPassedParamsRef,
            n = this.oldSlidesRef,
            o = this.breakpointChanged,
            d = this.nextElRef,
            p = this.prevElRef,
            c = this.paginationElRef,
            u = this.scrollbarElRef
          !a && i && (i.emitSlidesClasses(), (a = !0))
          const { passedParams: h } = Ie(t),
            m = (function (e, t, s, a) {
              const i = []
              if (!t) return i
              const r = (e) => {
                  i.indexOf(e) < 0 && i.push(e)
                },
                l = a.map((e) => e.props && e.props.key),
                n = s.map((e) => e.props && e.props.key)
              return (
                l.join('') !== n.join('') && i.push('children'),
                a.length !== s.length && i.push('children'),
                ke
                  .filter((e) => '_' === e[0])
                  .map((e) => e.replace(/_/, ''))
                  .forEach((s) => {
                    if (s in e && s in t)
                      if (Pe(e[s]) && Pe(t[s])) {
                        const a = Object.keys(e[s]),
                          i = Object.keys(t[s])
                        a.length !== i.length
                          ? r(s)
                          : (a.forEach((a) => {
                              e[s][a] !== t[s][a] && r(s)
                            }),
                            i.forEach((a) => {
                              e[s][a] !== t[s][a] && r(s)
                            }))
                      } else e[s] !== t[s] && r(s)
                    else
                      ((s in e && !(s in t)) || (!(s in e) && s in t)) && r(s)
                  }),
                i
              )
            })(h, l, r, n)
          ;(this.oldPassedParamsRef = h),
            (this.oldSlidesRef = r),
            (m.length || o) &&
              i &&
              !i.destroyed &&
              Oe({
                swiper: i,
                slides: r,
                passedParams: h,
                changedParams: m,
                nextEl: d,
                prevEl: p,
                scrollbarEl: u,
                paginationEl: c
              }),
            (o = !1)
        },
        emit(e, t) {
          this.$emit(e, ...t)
        },
        async getRect() {
          let e = await U(this, '.swiper')
          return (this.rectInfo = e), e
        },
        async getRectScrollbar() {
          return await U(this, '.swiper-scrollbar')
        },
        updateData(e) {
          Object.keys(e).forEach((t) => {
            this.$set(this, t, e[t])
          })
        },
        willChange(e) {
          this.$set(this.wrapperStyle, 'will-change', e)
        },
        transform(e) {
          this.$set(this.wrapperStyle, 'transform', e)
        },
        transition(e) {
          this.$set(this.wrapperStyle, 'transition-duration', `${e}ms`)
        },
        setCss(e) {
          Object.keys(e).forEach((t) => {
            this.$set(this.wrapperStyle, t, e[t])
          })
        },
        scrollbarTransform(e) {
          this.$set(this.scrollbarStyle, 'transform', e)
        },
        scrollbarTransition(e) {
          this.$set(this.scrollbarStyle, 'transitionDuration', `${e}ms`)
        },
        scrollbarItemTransform(e) {
          this.$set(this.scrollbarItemStyle, 'transform', e)
        },
        scrollbarItemTransition(e) {
          this.$set(this.scrollbarItemStyle, 'transitionDuration', `${e}ms`)
        },
        addClass(e) {
          this.contentClass = Array.from(
            new Set([...this.contentClass, ...e.split(' ')])
          )
        },
        removeClass(e) {
          this.contentClass = this.contentClass.filter(
            (t) => !e.split(' ').includes(t)
          )
        },
        addPaginationClass(e) {
          this.paginationElClass = Array.from(
            new Set([...this.paginationElClass, ...e.split(' ')])
          )
        },
        removePaginationClass(e) {
          this.paginationElClass = this.paginationElClass.filter(
            (t) => !e.split(' ').includes(t)
          )
        },
        addScrollbarClass(e) {
          this.scrollbarElClass = Array.from(
            new Set([...this.scrollbarElClass, ...e.split(' ')])
          )
        },
        removeScrollbarClass(e) {
          this.scrollbarElClass = this.scrollbarElClass.filter(
            (t) => !e.split(' ').includes(t)
          )
        },
        setPaginationCss(e) {
          Object.keys(e).forEach((t) => {
            this.$set(this.paginationStyle, t, e[t])
          })
        },
        scrollbarCss(e) {
          Object.keys(e).forEach((t) => {
            this.$set(this.scrollbarStyle, t, e[t])
          })
        },
        scrollbarItemCss(e) {
          Object.keys(e).forEach((t) => {
            this.$set(this.scrollbarItemStyle, t, e[t])
          })
        },
        addNextElClass(e) {
          this.nextElClass = Array.from(
            new Set([...this.nextElClass, ...e.split(' ')])
          )
        },
        addPrevElClass(e) {
          this.prevElClass = Array.from(
            new Set([...this.prevElClass, ...e.split(' ')])
          )
        },
        removeNextElClass(e) {
          this.nextElClass = this.nextElClass.filter(
            (t) => !e.split(' ').includes(t)
          )
        },
        removePrevElClass(e) {
          this.prevElClass = this.prevElClass.filter(
            (t) => !e.split(' ').includes(t)
          )
        },
        setSwiperOn(e, t) {
          this.eventsListeners[e] || (this.eventsListeners[e] = {}),
            (this.eventsListeners[e] = t)
        },
        paginationItemClick(e) {
          this.swiper.emit('paginationItemClick', e)
        },
        prevClick() {
          this.swiper.emit('prevClick')
        },
        nextClick() {
          this.swiper.emit('nextClick')
        },
        onTouchStart(e) {
          this.swiper.onTouchStart(e)
        },
        onTouchStartSwiperWxs(e) {
          this.swiper.onTouchStart(e)
        },
        onTouchMove(e) {
          this.swiper.onTouchMove(e)
        },
        onTouchMoveSwiperWxs(e) {
          this.swiper.onTouchMove(e)
        },
        onTouchEnd(e) {
          this.swiper.onTouchEnd(e)
        },
        onTouchEndSwiperWxs(e) {
          this.swiper.onTouchEnd(e)
        },
        onClickWrapper(e) {
          this.$emit('click', e)
        },
        onClickScrollbar(e) {
          this.$emit('scrollbarClick', e)
        },
        onTouchStartScrollbar(e) {
          this.swiper.emit('touchStartScrollbar', e)
        },
        onTouchMoveScrollbar(e) {
          this.swiper.emit('touchMoveScrollbar', e)
        },
        onTouchEndScrollbar(e) {
          this.swiper.emit('touchEndScrollbar', e)
        },
        cubeShadowCss(e) {
          Object.keys(e).forEach((t) => {
            this.$set(this.cubeShadowStyle, t, e[t])
          })
        },
        cubeShadowTransform(e) {
          this.$set(this.cubeShadowStyle, 'transform', e)
        },
        cubeShadowTransition(e) {
          this.$set(this.cubeShadowStyle, 'transitionDuration', `${e}ms`)
        }
      }
    },
    [
      [
        'render',
        function (e, c, u, h, m, g) {
          const v = B(S('z-swiper-item'), Z),
            w = f,
            b = z
          return (
            t(),
            s(
              w,
              {
                id: 'swiper' + g._uid,
                class: p([
                  'swiper',
                  m.contentClass,
                  m.containerClasses,
                  'vertical' === u.options.direction ? 'swiper-vertical' : ''
                ]),
                style: k([u.customStyle])
              },
              {
                default: a(() => [
                  i(
                    w,
                    {
                      class: p(['swiper-wrapper']),
                      style: k([m.wrapperStyle]),
                      onClick: g.onClickWrapper,
                      onTouchstart: g.onTouchStart,
                      onTouchmove: g.onTouchMove,
                      onTouchend: g.onTouchEnd,
                      onTouchcancel: g.onTouchEnd
                    },
                    {
                      default: a(() => [
                        M(e.$slots, 'default', {}, void 0, !0),
                        m.loopBlankShow
                          ? (t(!0),
                            n(
                              o,
                              { key: 0 },
                              d(
                                m.loopBlankNumber,
                                (e, a) => (t(), s(v, { key: a }))
                              ),
                              128
                            ))
                          : C('', !0),
                        m.cubeShadowShowWrapper
                          ? (t(),
                            s(
                              w,
                              {
                                key: 1,
                                class: 'swiper-cube-shadow',
                                style: k([m.cubeShadowStyle])
                              },
                              null,
                              8,
                              ['style']
                            ))
                          : C('', !0)
                      ]),
                      _: 3
                    },
                    8,
                    [
                      'style',
                      'onClick',
                      'onTouchstart',
                      'onTouchmove',
                      'onTouchend',
                      'onTouchcancel'
                    ]
                  ),
                  m.cubeShadowShowRoot
                    ? (t(),
                      s(
                        w,
                        {
                          key: 0,
                          class: 'swiper-cube-shadow',
                          style: k([m.cubeShadowStyle])
                        },
                        null,
                        8,
                        ['style']
                      ))
                    : C('', !0),
                  M(e.$slots, 'indicator', {}, void 0, !0),
                  m.showIndicators
                    ? (t(),
                      s(
                        w,
                        {
                          key: 1,
                          class: p(['swiper-pagination', g.paginationClass]),
                          style: k([m.paginationStyle])
                        },
                        {
                          default: a(() => [
                            'bullets' == m.paginationType
                              ? (t(!0),
                                n(
                                  o,
                                  { key: 0 },
                                  d(
                                    m.paginationContent,
                                    (e, a) => (
                                      t(),
                                      s(
                                        w,
                                        {
                                          key: a,
                                          class: p([e.classContent.join(' ')]),
                                          style: k([e.styleContent]),
                                          onClick: (e) =>
                                            g.paginationItemClick(a)
                                        },
                                        null,
                                        8,
                                        ['class', 'style', 'onClick']
                                      )
                                    )
                                  ),
                                  128
                                ))
                              : C('', !0),
                            'fraction' == m.paginationType
                              ? (t(),
                                n(
                                  o,
                                  { key: 1 },
                                  [
                                    i(
                                      b,
                                      {
                                        class: p(
                                          m.paginationContent.currentClass
                                        )
                                      },
                                      {
                                        default: a(() => [
                                          r(l(m.paginationContent.text), 1)
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['class']
                                    ),
                                    r('/'),
                                    i(
                                      b,
                                      {
                                        class: p(m.paginationContent.totalClass)
                                      },
                                      {
                                        default: a(() => [
                                          r(l(m.paginationContent.total), 1)
                                        ]),
                                        _: 1
                                      },
                                      8,
                                      ['class']
                                    )
                                  ],
                                  64
                                ))
                              : C('', !0),
                            'progressbar' == m.paginationType
                              ? (t(),
                                s(
                                  b,
                                  {
                                    key: 2,
                                    class: p(
                                      m.paginationContent.progressbarFillClass
                                    ),
                                    style: k([m.paginationContent.styleContent])
                                  },
                                  null,
                                  8,
                                  ['class', 'style']
                                ))
                              : C('', !0)
                          ]),
                          _: 1
                        },
                        8,
                        ['class', 'style']
                      ))
                    : C('', !0),
                  m.showPrevButton || m.showPrevButtonSlot
                    ? (t(),
                      s(
                        w,
                        {
                          key: 2,
                          class: p(['swiper-button-prev', g.prevClass]),
                          onClick: g.prevClick
                        },
                        {
                          default: a(() => [
                            m.showPrevButtonSlot
                              ? M(
                                  e.$slots,
                                  'pre-button',
                                  { key: 1 },
                                  void 0,
                                  !0
                                )
                              : (t(),
                                s(w, {
                                  key: 0,
                                  class:
                                    'zebra-icon zebra-icon-circle_chevron_left'
                                }))
                          ]),
                          _: 3
                        },
                        8,
                        ['class', 'onClick']
                      ))
                    : C('', !0),
                  m.showNextButton || m.showNextButtonSlot
                    ? (t(),
                      s(
                        w,
                        {
                          key: 3,
                          class: p(['swiper-button-next', g.nextClass]),
                          onClick: g.nextClick
                        },
                        {
                          default: a(() => [
                            m.showNextButtonSlot
                              ? M(
                                  e.$slots,
                                  'next-button',
                                  { key: 1 },
                                  void 0,
                                  !0
                                )
                              : (t(),
                                s(w, {
                                  key: 0,
                                  class:
                                    'zebra-icon zebra-icon-circle_chevron_right'
                                }))
                          ]),
                          _: 3
                        },
                        8,
                        ['class', 'onClick']
                      ))
                    : C('', !0),
                  g.scrollbarShow
                    ? (t(),
                      s(
                        w,
                        {
                          key: 4,
                          class: p(['swiper-scrollbar', g.scrollbarClass]),
                          style: k([m.scrollbarStyle]),
                          onClick: I(g.onClickScrollbar, ['stop']),
                          onTouchstart: I(g.onTouchStartScrollbar, ['stop']),
                          onTouchmove: I(g.onTouchMoveScrollbar, [
                            'stop',
                            'prevent'
                          ]),
                          onTouchend: I(g.onTouchEndScrollbar, ['stop'])
                        },
                        {
                          default: a(() => [
                            i(
                              w,
                              {
                                class: 'swiper-scrollbar-drag',
                                style: k([m.scrollbarItemStyle])
                              },
                              null,
                              8,
                              ['style']
                            )
                          ]),
                          _: 1
                        },
                        8,
                        [
                          'class',
                          'style',
                          'onClick',
                          'onTouchstart',
                          'onTouchmove',
                          'onTouchend'
                        ]
                      ))
                    : C('', !0)
                ]),
                _: 3
              },
              8,
              ['id', 'class', 'style']
            )
          )
        }
      ],
      ['__scopeId', 'data-v-7799b5c0']
    ]
  ),
  Ge = [
    {
      groupName: '基础组件',
      list: [
        { path: '/button', title: 'Button 按钮', image: 'button' },
        { path: '/cell', title: 'Cell 单元格', image: 'cell' },
        {
          path: '/configProvider',
          title: 'Cell 全局配置',
          image: 'configProvider'
        },
        { path: '/icon', title: 'Icon 图标', image: 'icon' },
        { path: '/image', title: 'Image 图片', image: 'image' },
        { path: '/layout', title: 'Layout 布局', image: 'layout' },
        { path: '/popup', title: 'Popup 弹层', image: 'popup' },
        { path: '/style', title: 'Style 内置样式', image: 'style' },
        { path: '/transition', title: 'Transition 动画', image: 'transition' },
        { path: '/toast', title: 'Toast 轻提示', image: 'toast' }
      ]
    },
    {
      groupName: '表单组件',
      list: [
        { path: '/area', title: 'Area 省市区选择', image: 'area' },
        { path: '/calendar', title: 'Calendar 日历', image: 'calendar' },
        { path: '/cascader', title: 'Cascader 级联选择', image: 'cascader' },
        { path: '/checkbox', title: 'Checkbox 复选框', image: 'checkbox' },
        {
          path: '/datePicker',
          title: 'DatePicker 日期选择',
          image: 'datePicker'
        },
        { path: '/field', title: 'Field 输入框', image: 'field' },
        { path: '/form', title: 'Form 表单', image: 'form' },
        {
          path: '/numberKeyboard',
          title: 'NumberKeyboard 数字键盘',
          image: 'numberKeyboard'
        },
        {
          path: '/passwordInput',
          title: 'PasswordInput 密码输入框',
          image: 'passwordInput'
        },
        { path: '/picker', title: 'Picker 选择器', image: 'picker' },
        {
          path: '/pickerGroup',
          title: 'PickerGroup 选择器组',
          image: 'pickerGroup'
        },
        { path: '/radio', title: 'Radio 单选框', image: 'radio' },
        { path: '/rate', title: 'Rate 评分', image: 'rate' },
        { path: '/search', title: 'Search 搜索', image: 'search' },
        { path: '/slider', title: 'Slider 滑块', image: 'slider' },
        { path: '/signature', title: 'Signature 签名', image: 'signature' },
        { path: '/stepper', title: 'Stepper 步进器', image: 'stepper' },
        { path: '/switch', title: 'Switch 开关', image: 'switch' },
        {
          path: '/timePicker',
          title: 'TimePicker 时间选择',
          image: 'timePicker'
        },
        { path: '/uploader', title: 'Uploader 文件上传', image: 'uploader' }
      ]
    },
    {
      groupName: '反馈组件',
      list: [
        {
          path: '/actionSheet',
          title: 'ActionSheet 动作面板',
          image: 'actionSheet'
        },
        { path: '/barrage', title: 'Barrage 弹幕', image: 'barrage' },
        { path: '/dialog', title: 'Dialog 弹出框', image: 'dialog' },
        {
          path: '/dropdownMenu',
          title: 'DropdownMenu 下拉菜单',
          image: 'dropdownMenu'
        },
        {
          path: '/floatingPanel',
          title: 'FloatingPanel 浮动面板',
          image: 'floatingPanel'
        },
        {
          path: '/floatingBubble',
          title: 'FloatingBubble 浮动气泡',
          image: 'floatingBubble'
        },
        { path: '/loading', title: 'Loading 加载', image: 'loading' },
        { path: '/notify', title: 'Notify 消息提示', image: 'notify' },
        { path: '/overlay', title: 'Overlay 遮罩层', image: 'overlay' },
        {
          path: '/pullRefresh',
          title: 'PullRefresh 下拉刷新',
          image: 'pullRefresh'
        },
        {
          path: '/shareSheet',
          title: 'ShareSheet 分享面板',
          image: 'shareSheet'
        },
        {
          path: '/swipeCell',
          title: 'SwipeCell 滑动单元格',
          image: 'swipeCell'
        }
      ]
    },
    {
      groupName: '展示组件',
      list: [
        { path: '/badge', title: 'Badge 徽标', image: 'badge' },
        { path: '/card', title: 'Card 卡片', image: 'card' },
        { path: '/circle', title: 'Circle 环形进度条', image: 'circle' },
        { path: '/collapse', title: 'Collapse 折叠面板', image: 'collapse' },
        { path: '/countDown', title: 'CountDown 倒计时', image: 'countDown' },
        { path: '/divider', title: 'Divider 分割线', image: 'divider' },
        { path: '/empty', title: 'Empty 空状态', image: 'empty' },
        { path: '/highlight', title: 'Highlight 高亮', image: 'highlight' },
        { path: '/list', title: 'List 列表', image: 'list' },
        { path: '/noticeBar', title: 'NoticeBar 通知栏', image: 'noticeBar' },
        { path: '/popover', title: 'Popover 气泡弹框', image: 'popover' },
        { path: '/progress', title: 'Progress 进度条', image: 'progress' },
        {
          path: '/rollingText',
          title: 'RollingText 翻滚文本',
          image: 'rollingText'
        },
        { path: '/skeleton', title: 'Skeleton 骨架屏', image: 'skeleton' },
        { path: '/steps', title: 'Steps 步骤条', image: 'steps' },
        { path: '/sticky', title: 'Sticky 吸顶', image: 'sticky' },
        { path: '/swipe', title: 'Swipe 轮播块', image: 'swipe' },
        { path: '/tag', title: 'Tag 标签', image: 'tag' },
        {
          path: '/textEllipsis',
          title: 'TextEllipsis 文本省略',
          image: 'textEllipsis'
        },
        { path: '/watermark', title: 'Watermark 水印', image: 'watermark' }
      ]
    },
    {
      groupName: '导航组件',
      list: [
        { path: '/grid', title: 'Grid 宫格', image: 'grid' },
        { path: '/navbar', title: 'Navbar 导航栏', image: 'navbar' },
        { path: '/tab', title: 'Tab 标签页', image: 'tab' },
        { path: '/tabbar', title: 'Tabbar 标签栏', image: 'tabbar' }
      ]
    }
  ],
  Ae = g(
    {
      __name: 'index',
      setup(e) {
        const p = w(Ge)
        p.value = p.value.map((e) => [e])
        const c = w(0),
          u = w(null),
          h = w({
            autoHeight: !0,
            noSwiping: !0,
            effect: 'cube',
            cubeEffect: { shadow: !1, slideShadows: !1 }
          }),
          m = w([
            { name: '基础', active: 'base-a', inactive: 'base' },
            { name: '表单', active: 'form-a', inactive: 'form-i' },
            { name: '反馈', active: 'feedback-a', inactive: 'feedback' },
            { name: '展示', active: 'show-a', inactive: 'show' },
            { name: '导航', active: 'navigation-a', inactive: 'navigation' }
          ]),
          g = D(() => _().windowHeight + 'px'),
          v = D(() => ({
            ...{
              height: `calc(100vh - env(safe-area-inset-top) - ${_().statusBarHeight}px)`
            }
          })),
          b = (e) => {
            u.value.swiper.slideTo(e, 500, !1)
          }
        return (e, w) => {
          const C = B(S('DemoHome'), Y),
            x = f,
            y = B(S('z-swiper-item'), Z),
            T = B(S('z-swiper'), De),
            E = B(S('z-icon'), L),
            P = B(S('z-tabbar-item'), N),
            $ = B(S('z-tabbar'), H),
            M = B(S('DemoPage'), j)
          return (
            t(),
            s(
              M,
              { 'show-header': !1 },
              {
                default: a(() => [
                  i(
                    x,
                    { class: 'demo-index' },
                    {
                      default: a(() => [
                        i(
                          T,
                          {
                            modelValue: p.value,
                            'onUpdate:modelValue':
                              w[0] || (w[0] = (e) => (p.value = e)),
                            ref_key: 'zswiper',
                            ref: u,
                            options: h.value
                          },
                          {
                            default: a(() => [
                              (t(!0),
                              n(
                                o,
                                null,
                                d(
                                  p.value,
                                  (e, r) => (
                                    t(),
                                    s(
                                      y,
                                      { 'swiper-item-height': G(g), key: r },
                                      {
                                        default: a(() => [
                                          i(
                                            x,
                                            {
                                              class: 'scroll-view-content',
                                              style: k(G(v))
                                            },
                                            {
                                              default: a(() => [
                                                i(
                                                  C,
                                                  {
                                                    list: e,
                                                    'show-title': 0 == r,
                                                    'show-desc': 0 == r
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    'list',
                                                    'show-title',
                                                    'show-desc'
                                                  ]
                                                )
                                              ]),
                                              _: 2
                                            },
                                            1032,
                                            ['style']
                                          )
                                        ]),
                                        _: 2
                                      },
                                      1032,
                                      ['swiper-item-height']
                                    )
                                  )
                                ),
                                128
                              ))
                            ]),
                            _: 1
                          },
                          8,
                          ['modelValue', 'options']
                        ),
                        i(
                          $,
                          {
                            modelValue: c.value,
                            'onUpdate:modelValue':
                              w[1] || (w[1] = (e) => (c.value = e)),
                            float: '',
                            background: '',
                            animate: '',
                            onChange: b
                          },
                          {
                            default: a(() => [
                              (t(!0),
                              n(
                                o,
                                null,
                                d(
                                  m.value,
                                  (e, n) => (
                                    t(),
                                    s(
                                      P,
                                      { key: n },
                                      {
                                        icon: a((t) => [
                                          i(
                                            E,
                                            {
                                              'class-prefix': 'zebra-icon',
                                              'custom-style': {
                                                'font-weight': 'bold'
                                              },
                                              name: t.active
                                                ? e.active
                                                : e.inactive
                                            },
                                            null,
                                            8,
                                            ['name']
                                          )
                                        ]),
                                        default: a(() => [
                                          r(' ' + l(e.name), 1)
                                        ]),
                                        _: 2
                                      },
                                      1024
                                    )
                                  )
                                ),
                                128
                              ))
                            ]),
                            _: 1
                          },
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
            )
          )
        }
      }
    },
    [['__scopeId', 'data-v-1e4a5933']]
  )
export { Ae as default }
