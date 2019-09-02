import { phoneIsValid } from "../../../utils/validators"
import { phoneMask } from "../../../utils/mask"

const LENGTH_MAX = 10

export class Phone {

  constructor(instance) {
    this.instance = instance
    this.handler = this.handler.bind(this)
  }

  parsed(value) {
    return value.replace(/\D/g, "")
  }

  isValid(value = '') {
    const phone = this.parsed(value)
    return phoneIsValid(phone)
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

    if (valueLength <= LENGTH_MAX) {
      setValue(phoneMask(valueParsed))
    } else {
      setValue(valueParsed.substring(0, valueParsed.length - 1))
    }

    const isValid = this.isValid(valueParsed)
    setIsValid('phone', type, isValid)

    if (valueLength < LENGTH_MAX) {
      clear()
    } else {
      const TRIGGER = 'blur'
      const { target: { dataset: { trigger } } } = event
      const onlyValidateOnBlur = trigger === TRIGGER
      if (!onlyValidateOnBlur || type === TRIGGER) {
        update()
      }
    }

  }

}