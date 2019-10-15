import { FieldComponent } from '../field-component'

export function MinMax(component: FieldComponent, e: Event): boolean {
  const { clearClassnames, update, setIsValid, getValue, setValue, setHelperContent } = component,
    type = event ? event.type : 'keyup',
    // @ts-ignore
    target = event.target as HTMLInputElement,
    {
      dataset: { trigger, minLength, maxLength }
    } = target,
    LENGTH_MIN: string = minLength || '0',
    LENGTH_MAX: string = maxLength || '255'

  let value: string = getValue(),
    valueLength: number = value.length

  if (valueLength > parseInt(LENGTH_MAX, 10)) {
    value = value.substring(0, value.length - 1)
    valueLength--
    setValue(value)
  }

  const isValid = valueLength >= parseInt(LENGTH_MIN, 10) && valueLength <= parseInt(LENGTH_MAX, 10),
    TRIGGER = 'blur',
    onlyValidateOnBlur = trigger === TRIGGER

  setIsValid('min-max', type, isValid)
  setHelperContent('')

  if (!onlyValidateOnBlur || type === TRIGGER) {
    setHelperContent(`Insira algo entre ${LENGTH_MIN} e ${LENGTH_MAX} caracteres`)
    update()
    return false
  }

  clearClassnames()
  return false
}
