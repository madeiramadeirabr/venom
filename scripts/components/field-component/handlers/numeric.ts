import { FieldComponent } from '../field-component'

export function Numeric(component: FieldComponent, e: Event): boolean {
  const { clearClassnames, update, setIsValid, getValue, setHelperContent } = component,
    { type } = event,
    value = getValue(),
    valueLength = value.length,
    isValid = /^\d+$/.test(value)

  setIsValid('numeric', type, isValid)
  setHelperContent(null)

  if (valueLength <= 0) {
    clearClassnames()
    return false
  }

  const TRIGGER: string = 'blur',
    target = event.target as HTMLInputElement,
    {
      dataset: { trigger }
    } = target,
    onlyValidateOnBlur = trigger === TRIGGER

  if (!onlyValidateOnBlur || type === TRIGGER) {
    if (!isValid) setHelperContent('Apenas números')
    update()
  }

  return false
}
