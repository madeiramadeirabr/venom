import { Component } from '../component'

const CLOSE_BUTTON: string = '[data-modal=button]',
  BODY: string = '.modal__body',
  CONTAINER: string = '.modal__container',
  TITLE: string = '[data-modal=title]'

export class ModalComponent extends Component {
  private _container: HTMLDivElement
  private _body: HTMLDivElement
  private _close: HTMLElement
  private _title: HTMLSpanElement

  constructor(element: HTMLDivElement) {
    super(element)

    this.setBodyContent = this.setBodyContent.bind(this)
    this.setBodyContentFromTemplate = this.setBodyContentFromTemplate.bind(this)
    this.setBodyContentFromData = this.setBodyContentFromData.bind(this)

    this.setSize = this.setSize.bind(this)

    this.setWidth = this.setWidth.bind(this)
    this.setHeight = this.setHeight.bind(this)

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)

    this.setTitle = this.setTitle.bind(this)
    this.setTitleModifier = this.setTitleModifier.bind(this)
    this.changeClose = this.changeClose.bind(this)
    this.resetClose = this.resetClose.bind(this)

    this._onClose = this._onClose.bind(this)

    this._initialize()
  }

  getInstance(): this {
    return this
  }

  _initialize(): void {
    var windowSize = window.matchMedia('(min-width: 768px)')
    this.setSize(windowSize)
    windowSize.addEventListener('change', () => {
      this.setSize(windowSize)
    })

    const Close = this.getClose()
    if (Close) Close.addEventListener('click', this._onClose)
  }

  _onClose(e: Event) {
    this.close()
    return false
  }

  setSize(windowSize: any): this {
    let width: string, height: string

    if (windowSize.matches) {
      width = this.getElement().dataset.width + 'px'
      height = this.getElement().dataset.height + 'px'
    } else {
      width = '100%'
      height = '100%'
    }

    this.setWidth(width)
    this.setHeight(height)

    return this
  }

  setWidth(width: string | number): this {
    if (width) {
      const size = width.toString().includes('px') ? (width as string) : `${width}px`
      this.getContainer().style.width = size
      this.getContainer().style.maxWidth = width == '100%' ? 'calc(100vh - 40px)' : size
    }
    return this
  }

  setHeight(height: string | number): this {
    if (height) {
      const size = height.toString().includes('px') ? (height as string) : `${height}px`
      this.getContainer().style.height = size
      this.getContainer().style.maxHeight = height == '100%' ? 'calc(100vh - 40px)' : size
    }
    return this
  }

  close(): this {
    this.getElement().classList.add('modal--is-hidden')
    document.documentElement.style.overflow = 'scroll'
    return this
  }

  open(): this {
    this.getElement().classList.remove('modal--is-hidden')
    document.documentElement.style.overflow = 'hidden'
    return this
  }

  // TODO depreciate
  show(): this {
    this.open()
    return this
  }

  // TODO depreciate
  hide(): this {
    this.close()
    return this
  }

  setBodyContent(content: any): this {
    this.getBody().innerHTML = content
    return this
  }

  setBodyContentFromTemplate(id: string): this {
    // @ts-ignore
    const template: HTMLElement = document.getElementById(id)
    // @ts-ignore
    this.setBodyContent('')
    this.getBody().appendChild(document.importNode((template as any).content, true))
    return this
  }

  setBodyContentFromData(attribute: string, value: string, multiple: boolean = false): this {
    const param = `[data-${attribute}=${value}]`,
      template = multiple ? [].slice.call(document.querySelectorAll(param)) : document.querySelector(param)

    this.setBodyContent('')

    // @ts-ignore
    if (!multiple) this.getBody().appendChild(document.importNode(template.content, true))

    // @ts-ignore
    if (template) template.map((t) => this.getBody().appendChild(document.importNode(t.content, true)))

    return this
  }

  getBody(): HTMLDivElement {
    if (!this._body) this._body = this.getElement().querySelector(BODY)
    return this._body
  }

  getContainer(): HTMLDivElement {
    if (!this._container) this._container = this.getElement().querySelector(CONTAINER)
    return this._container
  }

  getClose(): HTMLElement {
    if (!this._close) this._close = this.getElement().querySelector(CLOSE_BUTTON)
    return this._close
  }

  getTitle(): HTMLElement {
    if (!this._title) this._title = this.getElement().querySelector(TITLE)
    return this._title
  }

  setTitle(title: string): this {
    const Title = this.getTitle()
    Title.innerHTML = title
    return this
  }

  setTitleModifier(modifier: string): this {
    // @ts-ignore
    const { classList } = this.getTitle().parentElement,
      contains = classList.contains(modifier)
    if (!contains) classList.add(modifier)
    return this
  }

  changeClose(callback: Function): this {
    const Close = this.getClose()
    Close.removeEventListener('click', this._onClose)
    Close.addEventListener('click', () => callback())
    return this
  }

  resetClose() {
    const Close = this.getClose()
    Close.addEventListener('click', this._onClose)
  }
}
