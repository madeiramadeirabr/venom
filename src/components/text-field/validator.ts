import { TTextFieldValidator, TTextFieldModifiers } from './types'
import { TextField, TEXTFIELD_SUCCESS_MODIFIER, TEXTFIELD_DANGER_MODIFIER } from './text-field'

export class Validator {

  private _validators: Array<TTextFieldValidator> = []
  private _component: TextField
  private _isValid: boolean = true

  constructor(component: TextField) {
    this._component = component
    this._validators = []
  }

  insert(validator: TTextFieldValidator): Validator {
    this._validators.push(validator)
    return this
  }

  delete(validator: TTextFieldValidator): Validator {
    this._validators.filter(instance => instance !== validator)
    return this
  }

  isValid(): boolean {
    return this._isValid
  }

  validate() {
    const currentValue = this._component.getValue()
    let validated = true
    if (this._validators.length > 0) {
      this._validators.map(
        // @ts-ignore
        ({ parser, validator, mask, messages: { error, success }, callback, options: { clearMessageOnSuccess, clearMessageOnEmpty } }) => {
          if (currentValue.length > 0) {
            const value = parser ? parser(currentValue) : currentValue,
              isValid = validator(value)

            let feedback = "", modifier: TTextFieldModifiers = TEXTFIELD_SUCCESS_MODIFIER

            if (!clearMessageOnSuccess || !isValid) {
              feedback = isValid ? success : error
              modifier = isValid ? TEXTFIELD_SUCCESS_MODIFIER : TEXTFIELD_DANGER_MODIFIER
            }

            this._component.setFeedback(feedback).setModifier(modifier)

            if (!isValid) validated = false
            if (callback) callback(!isValid)
            if (mask) this._component.setValue(mask(value))
          } else {
            if (clearMessageOnEmpty) this._component.setFeedback('')
          }
        }
      )
    }
    if (this._isValid !== validated) this._isValid = !this._isValid
    return this
  }

}