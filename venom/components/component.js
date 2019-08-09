export class Component {

  constructor(element) {
    this.getInstance = this.getInstance.bind(this)
    this.getElement = this.getElement.bind(this)
    this.setEvent = this.setEvent.bind(this)
    this.setValue = this.setValue.bind(this)
    this.getValue = this.getValue.bind(this)
    this.getValue = this.getValue.bind(this)
    this.setIsDisabled = this.setIsDisabled.bind(this)
    this.getAttributes = this.getAttributes.bind(this)
    this.getClassnames = this.getClassnames.bind(this)
    this.setType = this.setType.bind(this)
    this.getType = this.getType.bind(this)
    this.getTagname = this.getTagname.bind(this)
    this.setContentHtml = this.setContentHtml.bind(this)
    this.getContentHtml = this.getContentHtml.bind(this)
    this.attachEvent = this.attachEvent.bind(this)
    this.initialize(element)
  }

  initialize(element) {
    this.element = element
  }

  attachEvent(trigger, callback) {
    this.getElement().addEventListener(trigger, callback)
  }

  getAttributes() {
    return this.getElement().dataset
  }

  getClassnames() {
    return this.getElement().classList
  }

  setContentHtml(setContentHtml) {
    this.getElement().innerHTML = setContentHtml
    return this
  }

  getContentHtml() {
    return this.getElement().innerHTML
  }

  setValue(value) {
    const e = this.getEvent()
    if (e) e.target.value = value
    this.getElement().value = value
    return this
  }

  getValue() {
    const e = this.getEvent()
    if (e) {
      const {
        target: { value }
      } = e
      return value
    }

    return this.getElement().value
  }

  getElement() {
    return this.element
  }

  setEvent(event) {
    this.event = event
    return this
  }

  getEvent() {
    return this.event
  }

  getInstance() {
    return this
  }

  setIsDisabled(value) {
    this.getElement().disabled = value
    return this
  }

  setType(type) {
    const tag = this.getTagname()
    if (tag === 'button' || tag === 'input') {
      if (this.getEvent()) this.getEvent().target.type = type
      this.getElement().type = type
    }
    return this
  }

  getType() {
    const tag = this.getTagname()
    if (tag === 'button' || tag === 'input') {
      if (this.getEvent()) return this.getEvent().target.type
      return this.getElement().type
    }
    return false
  }

  getTagname() {
    let tag = null
    if (this.getEvent()) tag = this.getEvent().tagName
    tag = this.getElement().tagName
    return tag.toLowerCase()
  }

}