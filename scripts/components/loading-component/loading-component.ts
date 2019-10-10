import { Component } from '../component'
import { consoleError } from '../../../helpers/logging/callbacks'

const MESSAGE: string = '[data-loading=message]'

export class LoadingComponent extends Component {
  protected _state: Object

  private _top = '0'
  private _left = '0'
  private _width = '100%'
  private _height = '100%'

  private _content: HTMLElement
  private _message: HTMLParagraphElement
  private _placeholder: HTMLElement

  constructor(element: HTMLElement) {
    super(element)
    this.loadingStart = this.loadingStart.bind(this)
    this.loadingStop = this.loadingStop.bind(this)
    this.setLoadingText = this.setLoadingText.bind(this)
    this._initialize()
  }

  getInstance(): this {
    return this
  }

  protected _initialize(): void {}

  setPlaceholder(query: string): this {
    const Placeholder = document.querySelector(query) as HTMLElement
    if (Placeholder) this._placeholder = Placeholder
    return this
  }

  _getPlaceholder(): HTMLElement {
    return this._placeholder || document.querySelector('body')
  }

  loadingStart(loadingText: string = 'Loading ...'): this {
    this.elementPosition()

    console.log('LoadingStart', this)

    this.getElement().style = `top:${this._top}; left: ${this._left}; width: ${this._width}; height: ${this._height}`
    this.getComponent().show()
    this.setLoadingText(loadingText)
    return this
  }

  elementPosition() {
    const el = this._getPlaceholder()
    this._top = el.offsetTop + 'px'
    this._left = el.offsetLeft + 'px'
    this._width = el.offsetWidth + 'px'
    this._height = el.offsetHeight + 'px'
  }

  loadingStop(): this {
    this.getComponent().hide()
    return this
  }

  setLoadingText(loadingText: string) {
    this._getMessage().innerHTML = loadingText
  }

  private _getMessage(): HTMLParagraphElement {
    if (!this._message) this._message = this.getElement().querySelector(MESSAGE)
    return this._message
  }
}
