import { Component } from '../../component'
import { Venom } from '../../venom'
import { TButtonModifiers } from './types'

const BUTTON_DISABLED_MODIFIER: string = 'button--is-disabled',
  BUTTON_MODIFIERS = ['button--is-primary', 'button--is-secondary', 'button--is-success', 'button--is-danger', 'button--is-warning'],
  BUTTON_TEXT = 'button__text'

class Button extends Component {

  private _content: string = ''

  constructor(el: HTMLButtonElement | HTMLInputElement | HTMLAnchorElement | HTMLDivElement) {
    super(el)
    this._setUid(Venom.create({ alias: this._getAlias(), component: this.getInstance() }))
  }

  private _getContent(): string {
    if (this._isInputType()) return (this._el as HTMLInputElement).value
    const ButtonText = (this._el.querySelector(`.${BUTTON_TEXT}`)) as HTMLElement
    if (ButtonText) return ButtonText.innerHTML
    return this._el.innerHTML
  }

  getInstance(): Button {
    return this
  }

  getElement() {
    return this._el
  }

  setDisabled(disabled: boolean): Button {
    if ('disabled' in this._el) {
      // @ts-ignore
      this._el.disabled = disabled
    }

    const classList = this._el.classList,
      contains = classList.contains(BUTTON_DISABLED_MODIFIER)
    if (disabled) {
      if (!contains) classList.add(BUTTON_DISABLED_MODIFIER)
    } else {
      if (contains) classList.remove(BUTTON_DISABLED_MODIFIER)
    }

    return this
  }

  setModifier(buttonModifier: TButtonModifiers): Button {
    const classList = this._el.classList
    for (const modifier in BUTTON_MODIFIERS) {
      if (classList.contains(modifier)) classList.remove(modifier)
    }
    if (!classList.contains(buttonModifier)) classList.add(buttonModifier)
    return this
  }

  setText(content: string): Button {
    if (this._isInputType()) {
      (this._el as HTMLInputElement).value = content
    } else {
      this._el.innerHTML = content
    }
    return this
  }

  setLoading(start: boolean = true, content: string = ''): this {
    if (!this._content) this._content = this._getContent()
    this.setText(start ? content : this._content).setDisabled(start)
    return this
  }

}

export { BUTTON_DISABLED_MODIFIER, BUTTON_MODIFIERS, Button }