import { FieldComponent } from '../field-component'

export function Monetary(component: FieldComponent, e: Event) {
  const { clearClassnames, update, setIsValid, getValue, setValue, setHelperContent } = component

  function parsed(value: string): string {
    const money = parseFloat(value.replace(/\D/g, '')) / 100
    return money
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  const { type } = e,
    TRIGGER: string = 'blur',
    target = event.target as HTMLInputElement,
    {
      dataset: { trigger }
    } = target,
    onlyValidateOnBlur = trigger === TRIGGER,
    value: string = getValue(),
    valueParsed: string = parsed(value),
    valueLength: number = valueParsed.length,
    isValid: boolean = true

  setValue(valueParsed)

  if (valueLength < 8) {
    clearClassnames()
    return false
  } else {
    setIsValid('monetary', type, isValid)
    setHelperContent(null)
  }

  if (!onlyValidateOnBlur || type === TRIGGER) {
    if (!isValid) setHelperContent('Insira um valor válido, ex.: 99,00')
    update()
  }

  return false
}
