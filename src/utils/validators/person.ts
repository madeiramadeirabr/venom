import { personDocumentIsValid } from './person-document'
import { legalPersonDocumentIsValid } from './legal-person-document'

export function personIsValid(value: string = '') {
  console.log('value', value)
  const length = value.length
  if (length === 11) return personDocumentIsValid(value)
  if (length === 14) return legalPersonDocumentIsValid(value)
  return false
}

export const PERSON_VALIDATOR_MESSAGES = {
  error: 'O documento informado é inválido',
  success: 'O documento informado é válido'
}