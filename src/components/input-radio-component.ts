import { Component } from './component'
import { IInputComponent } from './types'

export class InputComponent extends Component implements IInputComponent {
  constructor(element: HTMLInputElement) {
    super(element)

    this.getBaseComponent = this.getBaseComponent.bind(this)
    this.getInputComponent = this.getInputComponent.bind(this)
    this.getElement = this.getElement.bind(this)

    this.setDisabled = this.setDisabled.bind(this)
    this.getDisabled = this.getDisabled.bind(this)

    this.setType = this.setType.bind(this)
    this.getType = this.getType.bind(this)

    this.setValue = this.setValue.bind(this)
    this.getValue = this.getValue.bind(this)
  }

  getInputComponent(): this {
    return this
  }

  getBaseComponent(): Component {
    return super.getComponent()
  }

  getElement(): HTMLInputElement {
    return super.getElement()
  }

  setValue(value: string): this {
    this.getElement().value = value === null ? '' : value
    return this
  }

  getValue(): string {
    return this.getElement().value
  }

  setType(type: string): this {
    // @ts-ignore
    this.getElement().type = type
    return this
  }

  getType(): string {
    return this.getElement().type
  }

  setDisabled(disabled: boolean): this {
    this.getElement().disabled = disabled
    return this
  }

  getDisabled(): boolean {
    return this.getElement().disabled
  }

  isFormInput(): boolean {
    return this.getElement() instanceof HTMLInputElement || this.getElement() instanceof HTMLSelectElement || this.getElement() instanceof HTMLTextAreaElement ? true : false
  }
}
