// @ts-ignore
import VMasker from 'vanilla-masker'

export function legalPersonDocumentMask(value: string): string {
  return VMasker.toPattern(value, '99.999.999/9999-99')
}