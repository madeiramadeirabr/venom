import { legalPersonDocumentMask } from '../../../utils/mask'
import { legalPersonDocumentIsValid } from '../../../utils/validators/index'
import { FieldComponent } from '../field-component'

const LENGTH_CNPJ = 14

export function LegalPerson(component: FieldComponent, event: Event): boolean {
  const { clearClassnames, update, setIsValid, getValue, setValue, setHelperContent } = component,
    // @ts-ignore
    { type } = event

  function parsed(value: string): string {
    return value.replace(/\D/g, '').toString()
  }
  function maskLegalPersonDocument(value: string): string {
    return legalPersonDocumentMask(value)
  }

  function validate(value: string = ''): boolean {
    const personDocument: string = parsed(value)
    return personDocument.length === LENGTH_CNPJ && legalPersonDocumentIsValid(personDocument)
  }

  const value: string = getValue(),
    valueParsed: string = parsed(value),
    valueLength: number = valueParsed.length,
    isValid: boolean = validate(valueParsed)

  if (valueLength <= LENGTH_CNPJ) {
    setValue(maskLegalPersonDocument(valueParsed))
  } else {
    setValue(valueParsed.substring(0, valueParsed.length - 1))
  }

  setIsValid('mixed', type, isValid)
  setHelperContent('')

  if (valueLength < LENGTH_CNPJ) {
    clearClassnames()
    return false
  }

  const TRIGGER: string = 'blur',
    target = event.target as HTMLElement,
    {
      dataset: { trigger }
    } = target,
    onlyValidateOnBlur = trigger === TRIGGER
  if (!onlyValidateOnBlur || type === TRIGGER) {
    if (!isValid) setHelperContent('O documento informado é inválido')
    update()
  }

  return false
}
