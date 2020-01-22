import { personDocumentMask } from './person-document'
import { legalPersonDocumentMask } from './legal-person-document'

export function maskPerson(value: string) {
  const lenght = value.length
  if (lenght <= 11) return personDocumentMask(value)
  return legalPersonDocumentMask(value)
}