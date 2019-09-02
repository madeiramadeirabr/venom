import { personDocumentMask, legalPersonDocumentMask } from "../../../utils/mask"
import { personDocumentIsValid, legalPersonDocumentIsValid } from "../../../utils/validators"

const
  LENGTH_CPF = 11,
  LENGTH_CNPJ = 14;

export class Mixed {

  constructor(instance) {
    this.initialize(instance)
    this.handler = this.handler.bind(this)
  }

  initialize(instance) {
    this.instance = instance
  }

  parsed(value) {
    return value.replace(/\D/g, "")
  }

  maskPhysicalPersonDocument(value) {
    return personDocumentMask(value)
  }

  maskLegalPersonDocument(value) {
    return legalPersonDocumentMask(value)
  }

  isValid(value = '') {
    const personDocument = this.parsed(value);
    return ((personDocument.length === LENGTH_CPF && personDocumentIsValid(personDocument))
      || (personDocument.length === LENGTH_CNPJ && legalPersonDocumentIsValid(personDocument)))
  }

  getInstance() {
    return this.instance
  }

  handler(event) {
    event.preventDefault()

    const
      { setEvent, clear, update, setIsValid } = this.getInstance(),
      { getValue, setValue } = this.getInstance().getComponent(),
      { type } = event

    setEvent(event)

    const
      value = getValue(),
      valueParsed = this.parsed(value),
      valueLength = valueParsed.length

    if (valueLength <= LENGTH_CNPJ) {
      setValue(
        valueLength <= LENGTH_CPF ? this.maskPhysicalPersonDocument(valueParsed) : this.maskLegalPersonDocument(valueParsed)
      )
    } else {
      setValue(valueParsed.substring(0, valueParsed.length - 1))
    }

    const isValid = this.isValid(valueParsed)
    setIsValid('mixed', type, isValid)

    if (valueLength < LENGTH_CPF || (valueLength > LENGTH_CPF && valueLength < LENGTH_CNPJ)) {
      clear()
    } else {
      const TRIGGER = 'blur'
      const { target: { dataset: { trigger } } } = event;
      const onlyValidateOnBlur = trigger === TRIGGER
      if (!onlyValidateOnBlur || type === TRIGGER) {
        update()
      }
    }

  }

}