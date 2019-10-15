import { FieldComponent } from '../field-component'

export function Password(component: FieldComponent, e: Event): boolean {
  const { clearClassnames, update, setIsValid, getValue, setValue, setHelperContent } = component,
    type = event ? event.type : 'keyup',
    // @ts-ignore
    target = event.target as HTMLInputElement,
    {
      dataset: { trigger, minLength, maxLength }
    } = target,
    LENGTH_MIN: number = 6,
    LENGTH_MAX: number = 12

  let value: string = getValue(),
    valueLength: number = value.length

  if (valueLength > LENGTH_MAX) {
    value = value.substring(0, value.length - 1)
    valueLength--
    setValue(value)
  }

  const isValid = valueLength >= LENGTH_MIN && valueLength <= LENGTH_MAX,
    TRIGGER = 'blur',
    onlyValidateOnBlur = trigger === TRIGGER

  setIsValid('password', type, isValid)
  setHelperContent('')

  if (!onlyValidateOnBlur || type === TRIGGER) {
    if (!isValid) {
      setHelperContent(`A senha deve ter entre ${LENGTH_MIN} e ${LENGTH_MAX} caracteres`)
    }
    update()
    return false
  }

  clearClassnames()
  return false
}
