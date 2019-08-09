export class MinMax {

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
            trigger, minLength, maxLength
          }
        }
      } = event

    setEvent(event)

    let
      value = getValue(),
      valueLength = value.length

    const
      LENGTH_MIN = minLength || 0,
      LENGTH_MAX = maxLength || 255

    if (valueLength > LENGTH_MAX) {
      value = value.substring(0, value.length - 1)
      valueLength--
      setValue(value)
    }

    const isValid = valueLength >= LENGTH_MIN && valueLength <= LENGTH_MAX

    const TRIGGER = 'blur'
    const onlyValidateOnBlur = trigger === TRIGGER
    setIsValid('min-max', type, isValid)

    if (!onlyValidateOnBlur || type === TRIGGER) {
      update()
    } else {
      clear()
    }

  }

}