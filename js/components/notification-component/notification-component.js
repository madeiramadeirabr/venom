import {
  DANGER_MODIFIER_CLASSNAME,
  WARNING_MODIFIER_CLASSNAME,
  INFO_MODIFIER_CLASSNAME,
  SUCCESS_MODIFIER_CLASSNAME
} from "./constants"
import { VenomError } from "../../utils/error-handler";
import { timingSafeEqual } from "crypto";

const HELPER_CLASSNAME = 'helper--hidden',
  BLOCK_CLASSNAME = 'notification',
  ELEMENT_CONTAINER_CLASSNAME = 'notification__container',
  ELEMENT_CONTENT_CLASSNAME = 'notification__content',
  ELEMENT_CLOSE_CLASSNAME = 'notification__close'

export class NotificationComponent {

  constructor(component) {
    this.changeContent = this.changeContent.bind(this)
    this.changeToVisible = this.changeToVisible.bind(this)
    this.changeToInvisible = this.changeToInvisible.bind(this)
    this.changeModifierTo = this.changeModifierTo.bind(this)
    this.getComponent = this.getComponent.bind(this)
    this.hideIn = this.hideIn.bind(this)
    this.initialize(component)
  }

  getComponent() {
    return this.component
  }

  getAlias() {
    const { alias } = this.getComponent().getAttributes()
    return alias
  }

  getClassnames() {
    return this.getComponent().getClassnames()
  }

  getElement() {
    return this.getComponent().getElement()
  }

  setButton(button) {
    this.button = button
    return this
  }

  getButton() {
    return this.button
  }

  setContent(content) {
    this.content = content
    return this
  }

  getContent() {
    return this.content
  }

  initialize(component) {

    this.element = component.getElement()
    this.component = component

    // get value of data-insible and toggle element class if need
    const { visible } = this.getComponent().getAttributes()
    this.toggle(visible === "false" ? false : true)

    if (this.getComponent().getContentHtml() === '') {
      // create content element
      const content = document.createElement('div')
      content.classList.add('venom')
      content.classList.add(BLOCK_CLASSNAME)
      content.classList.add(ELEMENT_CONTENT_CLASSNAME)
      this.setContent(content)

      // create close button element
      const close = document.createElement('div')
      close.classList.add('venom')
      close.classList.add(BLOCK_CLASSNAME)
      close.classList.add(ELEMENT_CLOSE_CLASSNAME)
      this.setButton(close)

      this.getElement().appendChild(content)
      this.getElement().appendChild(close)
    } else {
      const content = document.querySelector(`.${BLOCK_CLASSNAME}.${ELEMENT_CONTENT_CLASSNAME}`)
      if (content) this.setContent(content)
      const close = document.querySelector(`.${BLOCK_CLASSNAME}.${ELEMENT_CLOSE_CLASSNAME}`)
      if (close) this.setButton(close)
    }

    this.attachEvents()

  }

  attachEvents() {
    const button = this.getButton()
    if (button) button.addEventListener('click', this.hide.bind(this))
  }

  getInstance() {
    return this
  }

  hide() {
    this.toggle(false)
  }

  toggle(isVisible) {
    if (isVisible) {
      if (this.getClassnames().contains(HELPER_CLASSNAME)) this.getClassnames().remove(HELPER_CLASSNAME)
    } else {
      if (!this.getClassnames().contains(HELPER_CLASSNAME)) this.getClassnames().add(HELPER_CLASSNAME)
    }
  }

  changeContent(content) {
    // TODO detect type of content
    // To prevent create element instance with Venom, using direct change in element
    this.getContent().innerHTML = content
    return this
  }

  changeToVisible() {
    this.toggle(true)
    return this
  }

  changeToInvisible() {
    this.toggle(false)
    return this
  }

  clearModifiers() {
    const modifiers = [DANGER_MODIFIER_CLASSNAME, WARNING_MODIFIER_CLASSNAME, INFO_MODIFIER_CLASSNAME, SUCCESS_MODIFIER_CLASSNAME]
    modifiers.map(
      (modifier) => {
        if (this.getClassnames().contains(ELEMENT_CONTAINER_CLASSNAME + modifier)) {
          this.getClassnames().remove(ELEMENT_CONTAINER_CLASSNAME + modifier)
        }
      }
    )
  }

  changeModifierTo(modifier) {
    this.clearModifiers()
    if (!this.getClassnames().contains(ELEMENT_CONTAINER_CLASSNAME + modifier)) {
      this.getClassnames().add(ELEMENT_CONTAINER_CLASSNAME + modifier)
    }
    return this
  }

  hideIn(milliseconds) {
    try {

      if (!Number.isInteger(milliseconds)) {
        throw new VenomError(`an error has occured in ("NotificationComponent.hideIn"). The param milliseconds is not a integer, received: ${milliseconds}`);
      }
      setTimeout(
        () => this.hide(),
        milliseconds
      )
    } catch (e) {
      console.error(e.name + ': ' + e.message);
    }
  }

}