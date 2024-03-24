import type { FieldValidationStatus } from '../z-field/types'

export type FormExpose = {
  submit: () => void
  validate: (name?: string | string[] | undefined) => Promise<void>
  getValues: () => Record<string, unknown>
  scrollToField: (
    name: string,
    options?: boolean | ScrollIntoViewOptions | undefined
  ) => void
  resetValidation: (name?: string | string[] | undefined) => void
  getValidationStatus: () => Record<string, FieldValidationStatus>
}
