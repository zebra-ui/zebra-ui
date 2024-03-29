import { k as s, l as a } from './index-7fd204f3.js'
const e = (e, o) => {
  const r = s(e())
  return (
    a(e, (s) => {
      s !== r.value && (r.value = s)
    }),
    a(r, (s) => {
      s !== e() && o(s)
    }),
    r
  )
}
export { e as u }
