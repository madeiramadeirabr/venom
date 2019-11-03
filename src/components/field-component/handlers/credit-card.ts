import { creditCardMask } from '../../../utils/mask'
import { FieldComponent } from '../field-component'
import { getBrand } from '../../../utils/credit-card'

export function CreditCard(component: FieldComponent, e: Event): boolean {

  let brand = null
  let max_lenght = 16

  function parsed(value: string): string {
    return value.replace(/\D/g, '')
  }

  function validate(value: string = ''): boolean {
    const v = parsed(value)

    brand = getBrand(v)
    if (brand === null) return false

    switch (brand) {
      case 'amex':
        max_lenght = 15
        return v.match(/^(?:3[47][0-9]{13})$/) ? true : false

      case 'visa':
        max_lenght = 13
        return v.match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/) ? true : false

      case 'mastercard':
        max_lenght = 16
        return v.match(/^(?:5[1-5][0-9]{14})$/) ? true : false

      case 'discover':
        max_lenght = 15
        return v.match(/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/) ? true : false

      case 'dinners':
        max_lenght = 14
        return v.match(/^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/) ? true : false

      case 'elo':
        max_lenght = 16
        return v.length === 16

      case 'hiper':
        max_lenght = 16
        return v.length === 16
    }

    return false

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
