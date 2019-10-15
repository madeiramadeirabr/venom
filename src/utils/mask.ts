/*
 * Pure javascript functions for input value masked output
 * @author  William Novak <https://github.com/williamnvk>
 * @package Venom\Utils
 * @version 1.0.0
 */
// @ts-ignore
import VMasker from 'vanilla-masker'

export function personDocumentMask(num: string): string {
  return VMasker.toPattern(num, '999.999.999-99')
}

export function legalPersonDocumentMask(num: string): string {
  return VMasker.toPattern(num, '99.999.999/9999-99')
}

export function mobileMask(num: string): string {
  return VMasker.toPattern(num, '(99) 99999-9999')
}

export function phoneMask(num: string): string {
  return VMasker.toPattern(num, '(99) 9999-9999')
}

export function zipcodeMask(num: string): string {
  return VMasker.toPattern(num, '99.999-999')
}
