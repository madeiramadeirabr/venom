const DISABLED_CLASSNAME = 'button--disabled'
import { FieldComponent } from "../field-component"
import { Venom } from "../../venom"

export class ButtonComponent {

  constructor(component) {
    this.changeContent = this.changeContent.bind(this)
    this.setIsEnabled = this.setIsEnabled.bind(this)
    this.setIsDisabled = this.setIsDisabled.bind(this)
    this.startLoading = this.startLoading.bind(this)
    this.stopLoading = this.stopLoading.bind(this)
    this.notify = this.notify.bind(this)
    this.getComponent = this.getComponent.bind(this)
    this.initialize(component)
  }

  getInstance() {
    return this
  }

  getAlias() {
    const { alias } = this.getComponent().getAttributes()
    return alias
  }

  getTag() {
    return this.tag
  }

  getContent() {
    return this.content
  }

  getComponent() {
    return this.component
  }

  getElement() {
    return this.getComponent().getElement()
  }

  initialize(component) {
    this.component = component

    const { tagName } = this.getElement()
    this.tag = tagName.toLowerCase()

    this.content = this.tag === 'input' || this.tag === 'button' ? this.getComponent().getValue() : this.getComponent().getContentHtml()
    this.listening = false

    const { target } = this.getComponent().getAttributes()
    if (!target) return false

    const
      indexOfPipe = target.indexOf('|'),
      targets = [],
      listening = []

    if (indexOfPipe > 0) {
      const targetList = target.split('|')
      targetList.map((t) => targets.push(t))
    } else {
      targets.push(target)
    }

    targets.map(
      t => {
        const instance = Venom.get(t)
        if (instance) {
          if (instance.component instanceof FieldComponent) {
            listening.push(instance)
          }
        }
      }
    )

    this.listening = listening
  }

  getListening() {
    return this.listening
  }

  notify() {

    let ready = true
    this.listening.map(
      ({ component }) => {
        if (!component.getIsValid()) {
          ready = false
        }
      }
    )
    this.toggle(!ready)
  }

  getAttributes() {
    return this.getComponent().getAttributes()
  }

  getClassnames() {
    return this.getComponent().getClassnames()
  }

  injectHandler({ trigger, callback }) {
    this.getElement().addEventListener(trigger, callback)
  }

  changeContent(content) {
    const tag = this.getTag()
    if (tag === 'input' || tag === 'button') {
      this.getComponent().setValue(content)
    } else {
      this.getContent().setContentHtml(content)
    }
    return this
  }

  setIsEnabled() {
    this.toggle(false)
  }

  setIsDisabled() {
    this.toggle(true)
  }

  toggle(disable = true) {
    const classlist = this.getComponent().getClassnames()
    if (disable) {
      if (!classlist.contains(DISABLED_CLASSNAME)) classlist.add(DISABLED_CLASSNAME)
    } else {
      if (classlist.contains(DISABLED_CLASSNAME)) classlist.remove(DISABLED_CLASSNAME)
    }
  }

  startLoading(text = "aguarde...") {
    this.changeContent(text)
    this.toggle(true)
  }

  stopLoading() {
    this.changeContent(this.getContent())
    this.toggle(false)
  }

}