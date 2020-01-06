import { FieldComponent } from '../field-component'

const MAX_LENGTH = 72

export function Username(component: FieldComponent, e: Event): boolean {
  function parsed(value: string): string {
    return value
      .toLowerCase()
      .replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, (letter) => letter.toUpperCase())
  }

  function validate(value: string = ''): boolean {
    return value.trim().indexOf(' ') >= 0 ? true : false
  }

  const { clearClassnames, update, setIsValid, getValue, setValue, setHelperContent } = component,
    { type } = e,
    TRIGGER: string = 'blur',
    // @ts-ignore
    target = event.target as HTMLInputElement,
    {
      dataset: { trigger }
    } = target,
    onlyValidateOnBlur = trigger === TRIGGER,
    value: string = getValue(),
    valueLength: number = value.length

  let isValid = validate(value),
    newValue = value

  if (valueLength >= MAX_LENGTH) {
    newValue = value.substring(0, value.length - 1)
    isValid = validate(newValue)
    setValue(parsed(newValue))
  } else {
    setValue(parsed(value))
  }

  if (valueLength <= 0) {
    clearClassnames()
    return false
  } else {
    setIsValid('username', type, isValid)
    setHelperContent('')
  }

  if (!onlyValidateOnBlur || type === TRIGGER) {
    if (!isValid) setHelperContent('Insira seu nom completo: nome e sobrenome')
    update()
  }

  return false
}
