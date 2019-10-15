import { Component } from '../component'
import { HIDDEN_MODIFIER } from '../constants'

const ELEMENT_CONTENT = '.notification__content',
  ELEMENT_CLOSE = '.notification__close'

export class NotificationComponent extends Component {
  private _button: HTMLButtonElement
  private _content: HTMLDivElement

  constructor(el: HTMLDivElement) {
    super(el)
    this.getInstance = this.getInstance.bind(this)
    this.setContent = this.setContent.bind(this)
    this.setVisible = this.setVisible.bind(this)
    this.hideIn = this.hideIn.bind(this)
    this._initialize()
  }

  protected _initialize(): void {
    // get value of data-insible and toggle element class if need
    const { visible } = this.getAttributes()
    this._toggle(visible === 'false' ? false : true)

    if (this.getContentHtml() === '') {
      // create content element
      const content: HTMLDivElement = document.createElement('div')
      content.classList.add('venom')
      content.classList.add(ELEMENT_CONTENT.replace('.', ''))
      this._content = content

      // create close button element
      const close: HTMLButtonElement = document.createElement('button')
      close.classList.add('venom')
      close.classList.add(ELEMENT_CLOSE.replace('.', ''))

      close.innerHTML += 
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
        `
      
      this._button = close

      this.getElement().appendChild(content)
      this.getElement().appendChild(close)
    } else {
      const content: HTMLDivElement = this.getElement().querySelector(ELEMENT_CONTENT)
      if (content) this._content = content
      const close: HTMLButtonElement = this.getElement().querySelector(ELEMENT_CLOSE)
      if (close) this._button = close
    }

    console.log('william', this._button)

    this._attachEvents()
  }

  protected _attachEvents(): void {
    if (this._button) this._button.addEventListener('click', this._hide.bind(this))
  }

  protected _toggle(visibile: boolean): void {
    if (visibile) {
      if (this.getClassnames().contains(HIDDEN_MODIFIER)) this.getClassnames().remove(HIDDEN_MODIFIER)
    } else {
      if (!this.getClassnames().contains(HIDDEN_MODIFIER)) this.getClassnames().add(HIDDEN_MODIFIER)
    }
  }

  protected _hide(event: Event): boolean {
    event.preventDefault()
    this._toggle(false)
    return false
  }

  getInstance(): this {
    return this
  }

  setContent(content: string): this {
    this._content.innerHTML = content
    return this
  }

  setVisible(visible: boolean = true): this {
    this._toggle(visible)
    return this
  }

  hideIn(milliseconds: number): this {
    setTimeout(() => this._toggle(false), milliseconds)
    return this
  }
}
