export class Min {

  constructor(instance) {
    this.instance = instance
    this.handler = this.handler.bind(this)
  }

  getInstance() {
    return this.instance
  }

  handler(event) {
    event.preventDefault()

    const { setEvent, clear, update, setIsValid } = this.getInstance(),
      { getValue, setValue } = this.getInstance().getComponent(),
      {
        type, target: {
          dataset: {
            trigger, minLength
          }
        }
      } = event

    setEvent(event)

    const
      value = getValue(),
      LENGTH_MIN = minLength || 0,
      valueLength = value.length

    const isValid = valueLength >= LENGTH_MIN

    const TRIGGER = 'blur'
    const onlyValidateOnBlur = trigger === TRIGGER
    setIsValid('min', type, isValid)

    if (!onlyValidateOnBlur || type === TRIGGER) {
      update()
    } else {
      clear()
    }

  }

}