const MAX_LENGTH = 72

export class Username {

  constructor(instance) {
    this.instance = instance
    this.handler = this.handler.bind(this)
  }

  parsed(value) {
    return value.toLowerCase().replace(
      /^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g,
      (letter) => letter.toUpperCase()
    ).replace(/[^A-Za-z0-9\s]/g, '')
  }

  isValid(value = '') {
    const username = value.trim();
    return !(username.indexOf(" ") <= 0)
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
      valueLength = value.length

    setValue(this.parsed(value))

    if (valueLength >= MAX_LENGTH) {
      setValue(value.substring(0, value.length - 1))
    }

    const isValid = this.isValid(value)
    setIsValid('username', type, isValid)

    if (valueLength <= 0) {
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