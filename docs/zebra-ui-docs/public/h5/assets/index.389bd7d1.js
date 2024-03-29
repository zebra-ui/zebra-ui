import { X as a, l as e } from './index-7fd204f3.js'
const l = Symbol('z-field')
function o(o) {
  const t = a(l, null)
  t &&
    !t.customValue.value &&
    ((t.customValue.value = o),
    e(o, () => {
      t.resetValidation(), t.validateWithTrigger('onChange')
    }))
}
export { l as C, o as u }
