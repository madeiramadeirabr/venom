import { FieldComponent } from '../field-component'

export function Max(component: FieldComponent, e: Event): boolean {
  const { clearClassnames, update, setIsValid, getValue, setValue, setHelperContent } = component,
    type = event ? event.type : 'keyup',
    // @ts-ignore
    target = event.target as HTMLInputElement,
    {
      dataset: { trigger, maxLength }
    } = target,
    value: string = getValue(),
    LENGTH_MAX = maxLength || 255,
    valueLength: number = value.length,
    TRIGGER: string = 'blur',
    isValid: boolean = valueLength <= LENGTH_MAX,
    onlyValidateOnBlur: boolean = trigger === TRIGGER

  if (valueLength > LENGTH_MAX) setValue(value.substring(0, value.length - 1))

  setIsValid('max', type, isValid)
  setHelperContent('')

  if (!onlyValidateOnBlur || type === TRIGGER) {
    setHelperContent(`Insira no máximo ${LENGTH_MAX} caracteres`)
    update()
    return false
  }

  clearClassnames()
  return false
}
