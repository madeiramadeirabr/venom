import { creditCardMask } from '../../../utils/mask'
import { FieldComponent } from '../field-component'
import { getBrand } from "../../../utils/credit-card"

export function CreditCard(component: FieldComponent, e: Event): boolean {

  let max_lenght = 13

  function parsed(value: string): string {
    return value.replace(/\D/g, '')
  }

  function validate(value: string = ''): boolean {
    return getBrand(value) !== null
  }

  const { clearClassnames, update, setIsValid, getValue, setValue, setHelperContent } = component,
    // @ts-ignore
    { type } = event,
    value: string = getValue(),
    valueParsed: string = parsed(value),
    valueLength: number = valueParsed.length,
    isValid = validate(valueParsed)

  setValue(creditCardMask(valueParsed))
  setIsValid('credit-card', type, isValid)
  setHelperContent('')

  if (valueLength < max_lenght) {
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
    if (!isValid) setHelperContent('Número inválido')
    update()
  }

  return false
}
