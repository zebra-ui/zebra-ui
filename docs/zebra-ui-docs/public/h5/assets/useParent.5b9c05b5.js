import { X as n, ac as e, D as i, k as r, L as a } from './index-7fd204f3.js'
function t(t) {
  const s = n(t, null)
  if (s) {
    const n = a(),
      { link: r, unlink: t, internalChildren: l } = s
    r(n), e(() => t(n))
    return { parent: s, index: i(() => l.indexOf(n)) }
  }
  return { parent: null, index: r(-1) }
}
export { t as u }
