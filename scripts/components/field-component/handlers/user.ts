import { FieldComponent } from '../field-component'
import { SUCCESS_MODIFIER, DANGER_MODIFIER } from '../../constants'

export function User(component: FieldComponent, e: Event): boolean {
  const { clearClassnames, setModifier, setIsValid, getValue, setHelperContent } = component,
    type = event.type,
    isValid = getValue().length >= 1

  clearClassnames()
  setIsValid('user', type, isValid)
  setHelperContent(null)

  setModifier(isValid ? SUCCESS_MODIFIER : DANGER_MODIFIER)

  return false
}
