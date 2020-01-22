export function zipcodeIsValid(zipcode: string): boolean {
  zipcode = zipcode.replace(/\D/g, '')
  return zipcode.length === 8
}

export const ZIPCODE_VALIDATOR_MESSAGES = {
  error: 'CEP inválido, tente outro',
  success: 'CEP encontrado'
}