import { Component } from '../component'
import { HIDDEN_MODIFIER } from '../constants'

export class CollapsComponent extends Component {
  private _button: HTMLElement
  private _container: HTMLElement
  private _content: HTMLElement

  constructor(element: HTMLDivElement) {
    super(element)

    this._initialize()
  }

  getInstance(): this {
    return this
  }

  protected _initialize(): void {
    this._button = this.getElement().querySelector('button')
    this._container = this.getElement().querySelector('.collapse__container')
    this._content = this.getElement().querySelector('.collapse__content')

    this._container.addEventListener('click', () => {
      this.change()
    })
  }

  change(): this {
    const isHidden: boolean = this._content.classList.contains(HIDDEN_MODIFIER)
    if (isHidden) {
      this.open()
    } else {
      this.close()
    }
    return this
  }

  close(): this {
    this._content.classList.add(HIDDEN_MODIFIER)
    this._button.classList.add('collapse__open')
    this._button.classList.remove('collapse__close')
    return this
  }

  closeAll(): this {
    if (this._element.parentElement) {
      this._element.parentElement.querySelectorAll('.collapse__content').forEach((content: any) => {
        content.classList.add(HIDDEN_MODIFIER)
      })

      this._element.parentElement.querySelectorAll('.collapse__container').forEach((container: any) => {
        ;(container.childNodes[3] as any).classList
          .remove('collapse__close')(container.childNodes[3] as any)
          .classList.add('collapse__open')
      })
    }
    return this
  }

  open(): this {
    this.closeAll()
    this._content.classList.remove(HIDDEN_MODIFIER)
    this._button.classList.remove('collapse__open')
    this._button.classList.add('collapse__close')
    return this
  }
}
