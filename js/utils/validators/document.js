/*
 * Pure javascript functions for validate input value
 * @author  William Novak <https://github.com/williamnvk>
 * @package Venom\Utils\Validators
 * @version 1.0.0
 */

/*
 * Validate physical person document (CPF)
 * @param string num (default: 0)
 */
export function personDocumentIsValid(num = 0) {
  num = num.replace(/\D/g, "")
  if (num === null || num === undefined || num === '') {
    return false;
  }

  let numbers, digits, sum = 0, i, result, equalDigits = 0;

  if (num.length < 11) return false;
  for (i = 0; i < num.length - 1; i++) {
    if (num.charAt(i) != num.charAt(i + 1)) {
      equalDigits = 0;
      break;
    }
  }

  if (!equalDigits) {
    numbers = num.substring(0, 9);
    digits = num.substring(9);
    sum = 0;
    for (i = 10; i > 1; i--) sum += numbers.charAt(10 - i) * i;
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result != digits.charAt(0)) return false;
    numbers = num.substring(0, 10);
    sum = 0;
    for (i = 11; i > 1; i--) sum += numbers.charAt(11 - i) * i;
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result != digits.charAt(1)) return false;
    return true;
  }

  return false;
}

/*
 * Validate legal person document (CNPJ)
 * @param string num (default: 0)
 */
export function legalPersonDocumentIsValid(cnpj = 0) {
  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj == '') return false;

  if (cnpj.length != 14)
    return false;

  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999")
    return false;

  // Valida DVs
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0))
    return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
    return false;

  return true;
}