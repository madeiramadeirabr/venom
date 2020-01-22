export function isEmpty(value: string) {
  if (value === null || typeof value === 'undefined') return false
  return value.length <= 0
}

export const IS_EMPTY_VALIDATOR_MESSAGES = {
  error: 'Esse campo não pode ficar fazio',
  success: 'Ok'
}