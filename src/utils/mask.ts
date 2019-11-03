/*
 * Pure javascript functions for input value masked output
 * @author  William Novak <https://github.com/williamnvk>
 * @package Venom\Utils
 * @version 1.0.0
 */
// @ts-ignore
import VMasker from 'vanilla-masker'
import { getBrand } from "./credit-card"

export function personDocumentMask(num: string): string {
  return VMasker.toPattern(num, '999.999.999-99')
}

export function creditCardMask(num: string): string {

  const brand = getBrand(num)

  switch (brand) {
    case 'visa':
    case 'mastercard':
    case 'master':
    case 'elo':
    case 'hipercard':
    default:
      return VMasker.toPattern(num, '9999 9999 9999 9999')

    case 'dinners':
      return VMasker.toPattern(num, '9999 999999 9999')

    case 'amex':
      return VMasker.toPattern(num, '9999 999999 99999')
  }
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

export function expireDateMask(num: string): string {
  return VMasker.toPattern(num, '99/9999')
}
