import { Component } from '../../component'
import { Venom } from '../../venom'
import { TTextFieldModifiers } from './types'

export const TEXTFIELD_DISABLED_MODIFIER: string = 'field--is-disabled',
  TEXTFIELD_ACTIVE_MODIFIER = 'field--is-active',
  TEXTFIELD_SUCCESS_MODIFIER = 'field--is-success',
  TEXTFIELD_DANGER_MODIFIER = 'field--is-danger',
  TEXTFIELD_MODIFIERS = [TEXTFIELD_ACTIVE_MODIFIER, TEXTFIELD_SUCCESS_MODIFIER, TEXTFIELD_DANGER_MODIFIER]

export class TextField extends Component {

  // @ts-ignore
  private _container: HTMLDivElement
  // @ts-ignore
  private _feedback: HTMLSpanElement
  // @ts-ignore
  private _label: HTMLLabelElement

  constructor(el: HTMLInputElement | HTMLTextAreaElement) {
    super(el)
    this._setUid(Venom.create({ alias: this._getAlias(), component: this.getInstance() }))
  }

  getInstance(): TextField {
    return this
  }

  getElement() {
    return (this._el as HTMLInputElement | HTMLTextAreaElement)
  }

  getContainer() {
    if (!this._container) {
      const Container = this._el.closest('.field') as HTMLDivElement
      if (Container) this._container = Container
    }
    return this._container
  }

  getFeedback() {
    if (!this._feedback) {
      const Helper = this.getContainer().querySelector('.field__feedback') as HTMLSpanElement
      if (Helper) this._feedback = Helper
    }
    return this._feedback
  }

  getLabel() {
    if (!this._label) {
      const Label = this.getContainer().querySelector('label') as HTMLLabelElement
      if (Label) this._label = Label
    }
    return this._label
  }

  setDisabled(disabled: boolean): TextField {
    if ('disabled' in this._el) {
      // @ts-ignore
      this._el.disabled = disabled
    } else {
      const classList = this.getContainer().classList,
        contains = classList.contains(TEXTFIELD_DISABLED_MODIFIER)
      if (disabled) {
        if (!contains) classList.add(TEXTFIELD_DISABLED_MODIFIER)
      } else {
        if (contains) classList.remove(TEXTFIELD_DISABLED_MODIFIER)
      }
    }
    return this
  }

  setModifier(textfieldModifier: TTextFieldModifiers): TextField {
    const classList = this.getContainer().classList
    TEXTFIELD_MODIFIERS.map(function (modifier) {
      if (classList.contains(modifier)) classList.remove(modifier)
    })
    if (!classList.contains(textfieldModifier)) classList.add(textfieldModifier)
    return this
  }

  setValue(value: string): TextField {
    this.getElement().value = value
    return this
  }

  getValue(): string {
    return this.getElement().value
  }

  setFeedback(text: string): TextField {
    this.getFeedback().innerHTML = text
    return this
  }

  setLabel(label: string): TextField {
    if (this.getLabel().innerHTML !== label) this.getLabel().innerHTML = label
    return this
  }

}