import { L as x } from './index-7fd204f3.js'
function n(n = 'unknown') {
  var o
  const t = x()
  return (
    'unknown' == n &&
      (n = (null == (o = null == t ? void 0 : t.type) ? void 0 : o.name) || {}),
    `${n}-${'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (x) {
      const n = (16 * Math.random()) | 0
      return ('x' == x ? n : (3 & n) | 8).toString(16)
    })}`
  )
}
export { n as u }
