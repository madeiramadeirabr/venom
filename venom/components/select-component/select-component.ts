import { Component } from '../component'
import { ModalComponent } from '../modal-component/index'
import { Venom } from '../../venom'
import { isMobile } from '../../../helpers/detect'

export type TOption = {
  value: string
  label: string
  description?: string
  selected: boolean
}

export type TOptions = Array<TOption>

export class SelectComponent extends Component {

  private _modal: ModalComponent
  private _options: TOptions
  private _title: string
  private _body: HTMLElement
  private _callback: Function

  constructor(element: HTMLDivElement) {
    super(element)
    this.getInstance = this.getInstance.bind(this)
    this.setOptions = this.setOptions.bind(this)
    this.setTitle = this.setTitle.bind(this)
    this.open = this.open.bind(this)

    this._initialize()
  }

  getInstance(): this {
    return this
  }

  protected _initialize() {
    this.attachEvent('click', () => {
      this.open()
    })
  }

  open() {
    const Modal = this._getModal()
    if (!this._getBody()) this._setBody()
    Modal
      .setTitle(this._getTitle())
      .setWidth(isMobile() ? '100%' : '395px')
      .setBodyContent(this._getBody())
      .setFooterContent('')
      .show()
  }

  close() {
    const Modal = this._getModal()
    Modal.close()
  }

  private _setBody() {
    const
      Modal = this._getModal(),
      Ul = document.createElement('ul') as HTMLUListElement

    Ul.classList.add('helper--is-no-list-style')

    this._getOptions().map(
      ({ value, label, description, selected }: TOption) => {
        const Li = document.createElement('li') as HTMLLIElement,
          Label = document.createElement('label') as HTMLLabelElement,
          Input = document.createElement('input') as HTMLInputElement,
          Text = document.createElement('span') as HTMLSpanElement,
          Marker = document.createElement('span') as HTMLSpanElement

        Li.classList.add('helper--has-margin-bottom')
        Label.classList.add('input', 'input__radio')
        Input.type = "radio"
        Input.setAttribute('name', 'option')
        Input.setAttribute('id', 'option-' + value)
        Label.setAttribute('for', 'option-' + value)
        // @ts-ignore
        Input.value = value
        if (selected) Input.checked = true
        Text.classList.add('input__text')
        Marker.classList.add('input__marker')
        Text.innerText = label
        Label.appendChild(Input)
        Label.appendChild(Text)
        Label.appendChild(Marker)
        Li.appendChild(Label)
        Ul.appendChild(Li)

        Input.addEventListener('change', () => {
          this._callback()
          Modal.close()
          return false
        })
      })

    this._body = Ul
  }

  private _getBody() {
    return this._body
  }

  setOptions(options: TOptions) {
    this._options = options
    return this
  }

  setTitle(title: string) {
    this._title = title
    return this
  }

  private _getOptions() {
    const { options } = this.getAttributes()
    this.setOptions(JSON.parse(options))
    return this._options
  }

  private _getTitle() {
    const { title } = this.getAttributes()
    this._title = title
    return this._title
  }

  private _getModal() {
    const { modal } = this.getAttributes()
    return Venom.getComponent(modal) as ModalComponent
  }

  onChange(callback: Function) {
    this._callback = callback
  }
}
