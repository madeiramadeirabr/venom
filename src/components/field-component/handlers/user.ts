import { FieldComponent } from '../field-component'
import { SUCCESS_MODIFIER, DANGER_MODIFIER } from '../../constants'

export function User(component: FieldComponent, e: Event): boolean {
  const { clearClassnames, setModifier, setIsValid, getValue, setHelperContent } = component,
    type = event ? event.type : 'keyup',
    isValid = getValue().length >= 1

  clearClassnames()
  setIsValid('user', type, isValid)
  setHelperContent('')

  setModifier(isValid ? SUCCESS_MODIFIER : DANGER_MODIFIER)

  return false
}
