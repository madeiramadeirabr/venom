// @ts-ignore
import VMasker from 'vanilla-masker'
import { parseNumeric } from '../parsers/numeric'

export function zipcodeMask(value: string): string {
  return VMasker.toPattern(parseNumeric(value), '99.999-999')
}