import { emailIsValid } from "../../../utils/validators"

const
  MIN_LENGTH = 5,
  MAX_LENGTH = 112

export class Email {

  constructor(instance) {
    this.instance = instance
    this.handler = this.handler.bind(this)
  }

  parsed(value) {
    return value.replace(/[^a-zA-Z0-9_/-@.]/g, '').toLowerCase()
  }

  isValid(value = '') {
    const email = this.parsed(value)
    return emailIsValid(email)
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

    setValue(valueParsed)

    if (valueLength >= MAX_LENGTH) {
      setValue(valueParsed.substring(0, valueParsed.length - 1))
    }

    const isValid = this.isValid(valueParsed)
    setIsValid('email', type, isValid)

    if (valueLength <= MIN_LENGTH) {
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