export class Numeric {

  constructor(instance) {
    this.instance = instance
    this.handler = this.handler.bind(this)
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
      valueLength = value.length,
      isValid = /^\d+$/.test(value)

    setIsValid('numeric', type, isValid)

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