import {
  n as e,
  t as l,
  D as s,
  i as t,
  j as a,
  o,
  r as i,
  _ as c,
  H as n
} from './DemoPage.0bae30a9.js'
import {
  d as r,
  D as u,
  m as y,
  o as d,
  c as b,
  w as m,
  x as k,
  n as v,
  E as S,
  a as f,
  p,
  y as g,
  e as _,
  F as x,
  b as C,
  t as $,
  i as h,
  L as j,
  _ as D
} from './index-7fd204f3.js'
const w = D(
  r({
    name: 'ZCell',
    options: { virtualHost: !0 },
    props: {
      icon: String,
      size: String,
      title: e,
      value: e,
      label: e,
      center: Boolean,
      isLink: Boolean,
      border: l,
      iconPrefix: String,
      valueClass: s,
      valueStyle: null,
      labelClass: s,
      titleClass: s,
      titleStyle: null,
      arrowDirection: String,
      required: { type: [Boolean, String], default: null },
      clickable: { type: Boolean, default: null },
      customStyle: Object,
      customClass: [String, Object],
      rightIconStyle: Object,
      componentSlots: Object
    },
    emits: ['click'],
    setup(e, { emit: l }) {
      const s = e,
        r = j(),
        [D, w] = t('cell')
      a(D)
      const z = s.clickable ? s.clickable : s.isLink,
        B = () => {
          l('click')
        },
        L = u(() => o(s.componentSlots)),
        O = (e) =>
          L.value
            ? 'default' == e
              ? !!s.componentSlots.value && s.componentSlots.value
              : !!s.componentSlots[e] && s.componentSlots[e]
            : r.slots[e]
      return (l, t) => {
        const a = i(y('z-icon'), c),
          o = h
        return (
          d(),
          b(
            o,
            {
              class: v([
                S(w)({
                  center: e.center,
                  required: !!e.required,
                  clickable: S(z),
                  borderless: !e.border,
                  [e.size]: !!e.size
                }),
                e.customClass
              ]),
              style: g(e.customStyle),
              tabindex: S(z) ? 0 : void 0,
              onClick: B
            },
            {
              default: m(() => [
                O('icon')
                  ? k(l.$slots, 'icon', { key: 0 }, void 0, !0)
                  : s.icon
                    ? (d(),
                      b(
                        o,
                        { key: 1, class: v(S(w)('left-icon')) },
                        {
                          default: m(() => [
                            f(
                              a,
                              { name: s.icon, 'class-prefix': s.iconPrefix },
                              null,
                              8,
                              ['name', 'class-prefix']
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['class']
                      ))
                    : p('', !0),
                O('title') || S(n)(s.title)
                  ? (d(),
                    b(
                      o,
                      {
                        key: 2,
                        class: v([S(w)('title'), s.titleClass]),
                        style: g(s.titleStyle)
                      },
                      {
                        default: m(() => [
                          O('title')
                            ? k(l.$slots, 'title', { key: 0 }, void 0, !0)
                            : (d(), _(x, { key: 1 }, [C($(s.title), 1)], 64)),
                          O('label') || S(n)(s.label)
                            ? (d(),
                              b(
                                o,
                                {
                                  key: 2,
                                  class: v([S(w)('label'), s.labelClass])
                                },
                                {
                                  default: m(() => [
                                    O('label')
                                      ? k(
                                          l.$slots,
                                          'label',
                                          { key: 0 },
                                          void 0,
                                          !0
                                        )
                                      : (d(),
                                        _(
                                          x,
                                          { key: 1 },
                                          [C($(s.label), 1)],
                                          64
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
                      ['class', 'style']
                    ))
                  : p('', !0),
                O('default') || O('value') || S(n)(s.value)
                  ? (d(),
                    b(
                      o,
                      {
                        key: 3,
                        class: v([S(w)('value'), s.valueClass]),
                        style: g(s.valueStyle)
                      },
                      {
                        default: m(() => [
                          O('default')
                            ? k(l.$slots, 'default', { key: 0 }, void 0, !0)
                            : O('value')
                              ? k(l.$slots, 'value', { key: 1 }, void 0, !0)
                              : (d(), _(x, { key: 2 }, [C($(s.value), 1)], 64))
                        ]),
                        _: 3
                      },
                      8,
                      ['class', 'style']
                    ))
                  : p('', !0),
                O('right-icon')
                  ? k(l.$slots, 'right-icon', { key: 4 }, void 0, !0)
                  : s.isLink
                    ? (d(),
                      b(
                        o,
                        { key: 5, class: v(S(w)('right-icon')) },
                        {
                          default: m(() => [
                            f(
                              a,
                              {
                                'custom-style': e.rightIconStyle,
                                name:
                                  s.arrowDirection &&
                                  'right' !== s.arrowDirection
                                    ? `${s.arrowDirection}-big`
                                    : 'right-big'
                              },
                              null,
                              8,
                              ['custom-style', 'name']
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['class']
                      ))
                    : p('', !0),
                k(l.$slots, 'extra', {}, void 0, !0)
              ]),
              _: 3
            },
            8,
            ['class', 'style', 'tabindex']
          )
        )
      }
    }
  }),
  [['__scopeId', 'data-v-659b5e72']]
)
export { w as _ }
