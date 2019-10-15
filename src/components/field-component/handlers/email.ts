import { emailIsValid } from '../../../utils/validators/index'
import { FieldComponent } from '../field-component'

const MIN_LENGTH = 5,
  MAX_LENGTH = 112

export function Email(component: FieldComponent, event: Event): boolean {
  function parsed(value: string): string {
    return value.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '').toLowerCase()
  }

  function validate(value: string = ''): boolean {
    const email = parsed(value)
    return emailIsValid(email)
  }

  const { clearClassnames, update, setIsValid, getValue, setValue, setHelperContent } = component,
    TRIGGER: string = 'blur',
    {
      dataset: { trigger }
    } = event.target as HTMLInputElement,
    // @ts-ignore
    { type } = event,
    onlyValidateOnBlur = trigger === TRIGGER,
    valueParsed = parsed(getValue()),
    valueLength: number = valueParsed.length,
    isValid = validate(valueParsed)

  setValue(valueParsed)

  if (valueLength >= MAX_LENGTH) setValue(valueParsed.substring(0, valueParsed.length - 1))

  setIsValid('email', type, isValid)
  setHelperContent('')

  if (valueLength <= MIN_LENGTH) {
    clearClassnames()
    return false
  }

  if (!onlyValidateOnBlur || type === TRIGGER) {
    if (!isValid) setHelperContent('Insira um e-mail válido, ex.: seunome@email.com')
    update()
  }

  return false
}
