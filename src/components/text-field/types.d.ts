
export type TTextFieldModifiers = 'field--is-active' | 'field--is-success' | 'field--is-danger'

export type TTextFieldValidatorMessages = {
  error: string
  success: string
}

export type TTextFieldValidatorOptions = {
  clearMessageOnSuccess?: boolean
  clearMessageOnEmpty?: boolean
  validatorIsConstructor?: boolean
}

export type TTextFieldValidator = {
  parser?: Function
  validator: Function
  mask?: Function
  messages: TTextFieldValidatorMessages
  callback?: Function
  options?: TTextFieldValidatorOptions
}