import { isPromise, isFunction } from '../../libs/utils'
import type { FieldRule, FieldType } from './types'

export function isEmptyValue(value: unknown) {
  if (Array.isArray(value)) {
    return !value.length
  }
  if (value === 0) {
    return false
  }
  return !value
}

export function runSyncRule(value: unknown, rule: FieldRule) {
  if (isEmptyValue(value)) {
    if (rule.required) {
      return false
    }
    if (rule.validateEmpty === false) {
      return true
    }
  }
  if (rule.pattern && !rule.pattern.test(String(value))) {
    return false
  }
  return true
}

export function runRuleValidator(value: unknown, rule: FieldRule) {
  return new Promise((resolve) => {
    const returnVal = rule.validator!(value, rule)

    if (isPromise(returnVal)) {
      returnVal.then(resolve)
      return
    }

    resolve(returnVal)
  })
}

export function getRuleMessage(value: unknown, rule: FieldRule) {
  const { message } = rule

  if (isFunction(message)) {
    return message(value, rule)
  }
  return message || ''
}

export function startComposing({ target }: Event) {
  target!.composing = true
}

export function endComposing({ target }: any) {
  if (target!.composing) {
    target!.composing = false
    target!.dispatchEvent(new Event('input'))
  }
}

export function mapInputType(type: FieldType): {
  type: any['type']
  inputmode?: any['inputmode']
} {
  if (type === 'number') {
    return {
      type: 'text',
      inputmode: 'decimal'
    }
  }

  if (type === 'digit') {
    return {
      type: 'tel',
      inputmode: 'numeric'
    }
  }

  return { type }
}
export function getStringLength(str: string) {
  return [...str].length
}
export function cutString(str: string, maxlength: number) {
  return [...str].slice(0, maxlength).join('')
}
