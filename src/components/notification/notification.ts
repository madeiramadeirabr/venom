import { Component } from '../../component'
import { Venom } from '../../venom'
import { HELPER_HIDDEN_MODIFIER } from '../../modifiers'
import { TNotificationModifiers } from './types'

export const
  NOTIFICATION_PRIMARY_MODIFIER = 'notification--is-primary',
  NOTIFICATION_SECONDAY_MODIFIER = 'notification--is-secondary',
  NOTIFICATION_SUCCESS_MODIFIER = 'notification--is-success',
  NOTIFICATION_DANGER_MODIFIER = 'notification--is-danger',
  NOTIFICATION_WARNING_MODIFIER = 'notification--is-warning',
  NOTIFICATION_MODIFIERS = [NOTIFICATION_PRIMARY_MODIFIER, NOTIFICATION_SECONDAY_MODIFIER, NOTIFICATION_SUCCESS_MODIFIER, NOTIFICATION_DANGER_MODIFIER, NOTIFICATION_WARNING_MODIFIER]

export class Notification extends Component {

  // @ts-ignore
  private _content: HTMLElement
  // @ts-ignore
  private _close: HTMLSpanElement

  constructor(el: HTMLDivElement) {
    super(el)
    this._setUid(Venom.create({ alias: this._getAlias(), component: this.getInstance() }))
    this._bootstrap()
  }

  private _bootstrap() {
    const CloseButton = this.getCloseButton()
    if (CloseButton) {
      const CloseComponent = new Component(CloseButton)
      CloseComponent.attachEvent(
        'click', (e: Event) => {
          this.setVisibile(false)
          e.stopPropagation()
        }
      )
    }
  }

  getCloseButton(): HTMLSpanElement {
    if (!this._close) {
      const Close = (this._el.querySelector('.notification__close')) as HTMLSpanElement
      if (Close) this._close = Close
    }
    return this._close
  }

  getContent(): HTMLElement {
    if (!this._content) {
      const Content = (this._el.querySelector('.notification__content')) as HTMLElement
      if (Content) this._content = Content
    }
    return this._content
  }

  getInstance(): Notification {
    return this
  }

  getElement() {
    return this._el
  }

  setModifier(notificationModifier: TNotificationModifiers): Notification {
    const classList = this.getElement().classList
    NOTIFICATION_MODIFIERS.map(function (modifier) {
      if (classList.contains(modifier)) classList.remove(modifier)
    })
    if (!classList.contains(notificationModifier)) classList.add(notificationModifier)
    return this
  }

  setVisibile(visible: boolean = true, delay: number = 0): Notification {
    const toggle = () => {
      const isHidden = this.getElement().classList.contains(HELPER_HIDDEN_MODIFIER)
      if (visible) {
        if (isHidden) this.getElement().classList.remove(HELPER_HIDDEN_MODIFIER)
      } else {
        if (!isHidden) this.getElement().classList.add(HELPER_HIDDEN_MODIFIER)
      }
    }
    if (delay > 0) {
      setTimeout(toggle, delay)
    } else {
      toggle()
    }
    return this
  }

  setContent(content: string): Notification {
    this.getContent().innerHTML = content
    return this
  }

}