import { mobileIsValid } from '../../../utils/validators/index'
import { mobileMask } from '../../../utils/mask'
import { FieldComponent } from '../field-component'

const LENGTH_MAX = 11

export function Mobile(component: FieldComponent, e: Event): boolean {
  function parsed(value: string): string {
    return value.replace(/\D/g, '')
  }

  function validate(value: string = ''): boolean {
    const mobile = parsed(value)
    return mobileIsValid(mobile)
  }

  const { clearClassnames, update, setIsValid, getValue, setValue, setHelperContent } = component,
    { type } = event,
    value: string = getValue(),
    valueParsed: string = parsed(value),
    valueLength: number = valueParsed.length,
    isValid = validate(valueParsed)

  setValue(mobileMask(valueParsed))
  setIsValid('mobile', type, isValid)
  setHelperContent(null)

  if (valueLength < LENGTH_MAX) {
    clearClassnames()
    return false
  }

  const TRIGGER: string = 'blur',
    target = event.target as HTMLInputElement,
    {
      dataset: { trigger }
    } = target,
    onlyValidateOnBlur = trigger === TRIGGER

  if (!onlyValidateOnBlur || type === TRIGGER) {
    if (!isValid) setHelperContent('Informe um número de celular válido')
    update()
  }
}
