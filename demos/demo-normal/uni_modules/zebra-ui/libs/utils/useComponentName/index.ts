import { ref } from 'vue'

const componentNames = ref<string[]>([])

export function useComponentName(defaultValue = '') {
  componentNames.value.push(defaultValue)
  return componentNames
}
