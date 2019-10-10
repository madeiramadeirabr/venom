import { FieldComponent } from '../field-component'

export function Min(component: FieldComponent, e: Event): boolean {
  const { clearClassnames, update, setIsValid, getValue, setHelperContent } = component,
    type = event.type,
    target = event.target as HTMLInputElement,
    {
      dataset: { trigger, minLength }
    } = target,
    value = getValue(),
    LENGTH_MIN = minLength || 0,
    valueLength: number = value.length,
    isValid: boolean = valueLength >= LENGTH_MIN,
    TRIGGER: string = 'blur',
    onlyValidateOnBlur: boolean = trigger === TRIGGER

  setIsValid('min', type, isValid)
  setHelperContent(null)

  if (!onlyValidateOnBlur || type === TRIGGER) {
    setHelperContent(`Insira no mínimo ${LENGTH_MIN} caracteres`)
    update()
    return false
  }

  clearClassnames()
  return false
}
