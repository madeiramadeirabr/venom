import { phoneIsValid } from '../../../utils/validators/index'
import { phoneMask, mobileMask } from '../../../utils/mask'
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
    valueLength: number = valueParsed.length

  let
    newValue = valueLength <= LENGTH_MAX ? valueParsed : valueParsed.substring(0, valueParsed.length - 1),
    isValid = validate(newValue)

  setValue(valueLength >= 11 ? mobileMask(newValue) : phoneMask(newValue))
  setIsValid('phone', type, isValid)
  setHelperContent(null)

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
    if (!isValid) setHelperContent('Informe um número de telefone/celular válido')
    update()
  }
}
