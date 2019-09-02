export class Max {

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
      {
        type, target: {
          dataset: {
            trigger, maxLength
          }
        }
      } = event

    setEvent(event)

    const
      value = getValue(),
      LENGTH_MAX = maxLength || 255,
      valueLength = value.length

    if (valueLength > LENGTH_MAX) {
      setValue(value.substring(0, value.length - 1))
    }

    const isValid = valueLength <= LENGTH_MAX
    setIsValid('max', type, isValid)

    const TRIGGER = 'blur'
    const onlyValidateOnBlur = trigger === TRIGGER

    if (!onlyValidateOnBlur || type === TRIGGER) {
      update()
    } else {
      clear()
    }

  }

}