export function usernameIsValid(username: string): boolean {
  var regName: RegExp = /^[a-zA-Z]+ [a-zA-Z]+$/
  var username: string = username.replace(/[0-9]/g, '')
  return !regName.test(username) ? false : true
}

export const USERNAME_VALIDATOR_MESSAGES = {
  error: 'Informe nome e sobrenome',
  success: 'Nome informado é valido'
}