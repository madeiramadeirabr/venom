/*
 * Pure javascript functions for input value masked output
 * @author  William Novak <https://github.com/williamnvk>
 * @package Venom\Utils
 * @version 1.0.0
 */

export function personDocumentMask(num) {
  /* eslint-disable */
  if (num && num.length > 0) {
    num = num.replace(/\D/g, '');
    num = num.replace(/(\d{3})(\d)/, '$1.$2');
    num = num.replace(/(\d{3})(\d)/, '$1.$2');
    num = num.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }
  /* eslint-enable */
  return num;
}

export function legalPersonDocumentMask(num) {
  /* eslint-disable */
  if (num && num.length > 0) {
    num = num.replace(/\D/g, '');
    num = num.replace(/^(\d{2})(\d)/, '$1.$2');
    num = num.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    num = num.replace(/\.(\d{3})(\d)/, '.$1/$2');
    num = num.replace(/(\d{4})(\d)/, '$1-$2');
  }
  /* eslint-enable */
  return num;
}

export function mobileMask(num) {
  if (num.length !== 11) return num
  let n = num.replace(/\D/g, '').match(/(\d{2})(\d{5})(\d{4})/)
  return '(' + n[1] + ') ' + n[2] + '-' + n[3];
}

export function phoneMask(num) {
  if (num.length !== 10) return num
  let n = num.replace(/\D/g, '').match(/(\d{2})(\d{4})(\d{4})/)
  return '(' + n[1] + ') ' + n[2] + '-' + n[3];
}

export function zipcodeMask(num) {
  if (num.length < 7 || num.length > 8) return num
  let n = num.replace(/\D/g, '').match(/(\d{3})(\d{2})(\d{3})/)
  return n[1] + '.' + n[2] + '-' + n[3];
}
