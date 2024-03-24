import { getCurrentInstance } from 'vue'
function generateUUIDWithoutHyphens() {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export function useId(name: any = 'unknown') {
  const vm = getCurrentInstance()
  if (name == 'unknown') {
    name = vm?.type?.name || {}
  }
  return `${name}-${generateUUIDWithoutHyphens()}`
}
