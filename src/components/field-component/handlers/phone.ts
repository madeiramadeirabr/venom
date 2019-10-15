import { phoneIsValid } from '../../../utils/validators/index'
import { phoneMask } from '../../../utils/mask'
import { FieldComponent } from '../field-component'

const LENGTH_MAX = 11

export function Phone(component: FieldComponent, e: Event): boolean {
  function parsed(value: string): string {
    return value.replace(/\D/g, '')
  }

  function validate(value: string = ''): boolean {
    const mobile = parsed(value)
    return phoneIsValid(mobile)
  }

  const { clearClassnames, update, setIsValid, getValue, setValue, setHelperContent } = component,
    // @ts-ignore
    { type } = event,
    value: string = getValue(),
    valueParsed: string = parsed(value),
    valueLength: number = valueParsed.length,
    isValid = validate(valueParsed)

  setValue(phoneMask(valueParsed))
  setIsValid('mobile', type, isValid)
  setHelperContent('')

  if (valueLength < LENGTH_MAX) {
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
    if (!isValid) setHelperContent('Informe um número de telefone válido')
    update()
  }

  return false
}
