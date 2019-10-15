import { zipcodeIsValid } from '../../../utils/validators/index'
import { zipcodeMask } from '../../../utils/mask'
import { FieldComponent } from '../field-component'

export function Zipcode(component: FieldComponent, e: Event) {
  const { clearClassnames, update, setIsValid, getValue, setValue, setHelperContent } = component

  function parsed(value: string): string {
    return value.replace(/\D/g, '')
  }

  function validate(value: string = ''): boolean {
    const zipcode = parsed(value)
    return zipcodeIsValid(zipcode)
  }

  const { type } = e,
    TRIGGER: string = 'blur',
    // @ts-ignore
    target = event.target as HTMLInputElement,
    {
      dataset: { trigger }
    } = target,
    onlyValidateOnBlur = trigger === TRIGGER,
    value: string = getValue(),
    valueParsed: string = parsed(value),
    valueLength: number = valueParsed.length,
    isValid: boolean = validate(valueParsed)

  setValue(zipcodeMask(valueParsed))

  if (valueLength < 8) {
    clearClassnames()
    return false
  } else {
    setIsValid('zipcode', type, isValid)
    setHelperContent('')
  }

  if (!onlyValidateOnBlur || type === TRIGGER) {
    if (!isValid) setHelperContent('Insira um CEP válido')
    update()
  }

  return false
}
