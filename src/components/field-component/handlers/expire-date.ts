import { expireDateMask } from '../../../utils/mask'
import { FieldComponent } from '../field-component'

export function ExpireDate(component: FieldComponent, e: Event): boolean {
  function parsed(value: string): string {
    return value.replace(/\D/g, '').replace('/', '')
  }

  function validate(value: string = ''): boolean {
    const expire = parsed(value)
    return expire.length === 6
  }

  const { clearClassnames, update, setIsValid, getValue, setValue, setHelperContent } = component,
    // @ts-ignore
    { type } = event,
    value: string = getValue(),
    valueParsed: string = parsed(value),
    valueLength: number = valueParsed.length

  let newValue = valueParsed

  if (valueLength > 6) {
    newValue = valueParsed.substring(0, valueParsed.length - 1)
    setValue(expireDateMask(newValue))
  }

  const
    month = parseInt(`${newValue.charAt(0)}${newValue.charAt(1)}`, 10),
    year = parseInt(`${newValue.charAt(2)}${newValue.charAt(3)}${newValue.charAt(4)}${newValue.charAt(5)}`, 10)

  let isValid = validate(newValue),
    message = 'A data de vencimento informada não é válida'

  if (month > 12) {
    isValid = false
    message = 'O mês informado é inválido'
  }

  if (year < 2019) {
    isValid = false
    message = 'O ano informado é inválido'
  }

  setValue(expireDateMask(newValue))
  setIsValid('expire-date', type, isValid)
  setHelperContent('')

  if (valueLength < 6) {
    clearClassnames()
    return false
  }

  const TRIGGER: string = 'blur',
    // @ts-ignore
    target = event.target as HTMLInputElement,
    {
      dataset: { trigger }
    } = target,
    onlyValidateOnBlur = trigger === TRIGGER

  if (!onlyValidateOnBlur || type === TRIGGER) {
    if (!isValid) setHelperContent(message)
    update()
  }

  return false
}
