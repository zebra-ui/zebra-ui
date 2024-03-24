import type { ComponentPublicInstance } from 'vue'

export type CheckboxGroupToggleAllOptions =
  | boolean
  | {
      checked?: boolean
      skipDisabled?: boolean
    }

export type CheckboxGroupExpose = {
  toggleAll: (options?: CheckboxGroupToggleAllOptions) => void
}

export type CheckboxGroupInstance = ComponentPublicInstance<
  any,
  CheckboxGroupExpose
>
