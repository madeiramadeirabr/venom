import { FieldComponent } from '../field-component'

const MAX_LENGTH = 3

export function SecureCode(component: FieldComponent, e: Event): boolean {
  function parsed(value: string): string {
    return value.replace(/\D/g, '')
  }

  function validate(value: string = ''): boolean {
    return value.length > 2 && value.length <= 3
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

  if (valueLength > MAX_LENGTH) {
    newValue = value.substring(0, value.length - 1)
    isValid = validate(newValue)
    setValue(parsed(newValue))
  } else {
    setValue(parsed(value))
  }

  if (valueLength <= 1) {
    clearClassnames()
    return false
  } else {
    setIsValid('secure-code', type, isValid)
    setHelperContent('')
  }

  if (!onlyValidateOnBlur || type === TRIGGER) {
    if (!isValid) setHelperContent('Código de segurança inválido')
    update()
  }

  return false
}
