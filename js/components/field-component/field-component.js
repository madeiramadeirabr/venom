const
  POSITIVE_MODIFIER = '--positive',
  NEGATIVE_MODIFIER = '--negative',
  INPUT_ELEMENT = "form__field",
  FORM_ELEMENT = "form",
  INDICATOR_ELEMENT = "form__indicator"
import { Venom } from "../../venom"
import { ButtonComponent } from "../button-component"

export class FieldComponent {

  constructor(component, handlers) {
    this.getInstance = this.getInstance.bind(this)
    this.setEvent = this.setEvent.bind(this)
    this.setIsValid = this.setIsValid.bind(this)
    this.getIsValid = this.getIsValid.bind(this)
    this.clear = this.clear.bind(this)
    this.update = this.update.bind(this)
    this.pushValidators = this.pushValidators.bind(this)
    this.setDisabled = this.setDisabled.bind(this)
    this.setFocus = this.setFocus.bind(this)
    this.setBlur = this.setBlur.bind(this)
    this.getAlias = this.getAlias.bind(this)
    this.notify = this.notify.bind(this)
    this.injectHandlers = this.injectHandlers.bind(this)
    this.getComponent = this.getComponent.bind(this)

    this.initialize(component)
    this.injectHandlers(handlers)
  }

  initialize(component) {
    this.component = component
    this.indicator = false
    this.isValid = false
    this.validators = []
  }

  getAlias() {
    const { alias } = this.getComponent().getAttributes()
    return alias
  }

  getComponent() {
    return this.component
  }

  getListener() {
    const { listener } = this.getComponent().getAttributes()
    if (!listener) return false
    const instance = Venom.get(listener)
    if (instance) return instance.component
  }

  setDisabled(value) {
    if (this.getElement().disabled !== value) this.getElement().disabled = value
    return this
  }

  setFocus() {
    this.getElement().focus()
    return this
  }

  setBlur() {
    this.getElement().blur()
    return this
  }

  getInstance() {
    return this
  }

  pushValidators(name, trigger) {
    this.validators.push({ name, trigger, value: false })
    return this
  }

  setIsValid(name, trigger, isValid) {
    let indexOf = -1;

    this.validators.map(
      (validator, index) => (validator.name === name && validator.trigger === trigger) ? indexOf = index : false
    )

    if (indexOf >= 0 && this.validators[indexOf].value !== isValid) this.validators[indexOf].value = isValid

    let result = true

    this.validators.map(({ value }) => (value === false) ? result = false : null)

    if (this.isValid !== result) this.isValid = result

    this.notify()

    return this
  }

  notify() {
    const listener = this.getListener()
    if (listener) {
      if (this.getListener() instanceof ButtonComponent) {
        this.getListener().notify(this)
      }
    }
  }

  getIsValid() {
    return this.isValid
  }

  reset() {
    this.getComponent().setValue("")
    this.isValid = false
    this.clear()
  }

  injectHandlers(handlers) {
    if (handlers) {
      handlers.map(
        ({ trigger, name, handler }) => {

          let exists = false
          this.validators.map(
            validator => {
              if (validator.name === name) {
                if (validator.trigger !== 'blur') exists = true
              }
            }
          )

          if (!exists) {
            if (name) this.pushValidators(name, trigger)
          }

          this.getElement().addEventListener(
            trigger,
            new handler(this).handler,
            false
          )
        }
      )
    }
    return this
  }

  createIndicator() {
    const indicator = this.getElement().nextSibling
    if (indicator) {
      this.indicator = indicator
    } else {
      let indicatorEl = document.createElement('span')
      indicatorEl.classList.add(FORM_ELEMENT)
      indicatorEl.classList.add(INDICATOR_ELEMENT)
      this.getElement().parentNode.insertBefore(indicatorEl, this.getElement().nextSibling)
      this.indicator = indicatorEl
    }

    this.indicator
    return this
  }

  getIndicator() {
    if (this.indicator) return this.indicator
    this.createIndicator()
    return this.getIndicator()
  }

  getElement() {
    return this.getComponent().getElement()
  }

  setEvent(event) {
    this.getComponent().setEvent(event)
    return this
  }

  getEvent() {
    return this.getComponent().getEvent()
  }

  clearInputClasslist() {
    const { classList } = this.getElement()
    if (classList.contains(INPUT_ELEMENT + POSITIVE_MODIFIER)) classList.remove(INPUT_ELEMENT + POSITIVE_MODIFIER)
    if (classList.contains(INPUT_ELEMENT + NEGATIVE_MODIFIER)) classList.remove(INPUT_ELEMENT + NEGATIVE_MODIFIER)
  }

  clearIndicatorClasslist() {
    const { classList } = this.getIndicator()
    if (classList.contains(INDICATOR_ELEMENT + POSITIVE_MODIFIER)) classList.remove(INDICATOR_ELEMENT + POSITIVE_MODIFIER)
    if (classList.contains(INDICATOR_ELEMENT + NEGATIVE_MODIFIER)) classList.remove(INDICATOR_ELEMENT + NEGATIVE_MODIFIER)
  }

  toggleInputClassname(positive = true) {
    const { classList } = this.getElement()
    const className = `${INPUT_ELEMENT}${positive ? POSITIVE_MODIFIER : NEGATIVE_MODIFIER}`
    if (!classList.contains(className)) classList.add(className)
  }

  toggleIndicatorClassname(positive = true) {
    const { classList } = this.getIndicator()
    const className = `${INDICATOR_ELEMENT}${positive ? POSITIVE_MODIFIER : NEGATIVE_MODIFIER}`
    if (!classList.contains(className)) classList.add(className)
  }

  toggleClassname(positive = true) {
    this.toggleInputClassname(positive)
    this.toggleIndicatorClassname(positive)
  }

  clear() {
    this.clearInputClasslist()
    this.clearIndicatorClasslist()
  }

  update() {
    this.clear()
    const isValid = this.getIsValid()
    this.toggleClassname(isValid)
  }

}