import { FieldComponent } from '../field-component'

const MAX_LENGTH = 72

export function Username(component: FieldComponent, e: Event): boolean {
  function parsed(value: string): string {
    return value
      .toLowerCase()
      .replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, (letter) => letter.toUpperCase())
      .replace(/[^A-Za-z0-9\s]/g, '')
  }

  function validate(value: string = ''): boolean {
    const username = value.trim()
    return !(username.indexOf(' ') <= 0)
  }

  const { clearClassnames, update, setIsValid, getValue, setValue, setHelperContent } = component,
    { type } = event,
    value: string = getValue(),
    valueLength: number = value.length,
    isValid = validate(value)

  setValue(parsed(value))

  if (valueLength >= MAX_LENGTH) setValue(value.substring(0, value.length - 1))

  setIsValid('username', type, isValid)
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
    if (!isValid) setHelperContent('Insira seu nome completo: nome e sobrenome')
    update()
  }

  return false
}
