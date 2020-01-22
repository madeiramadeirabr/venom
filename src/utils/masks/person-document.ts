// @ts-ignore
import VMasker from 'vanilla-masker'

export function personDocumentMask(value: string): string {
  return VMasker.toPattern(value, '999.999.999-99')
}