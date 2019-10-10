import { Component } from '../component'

const HEADER: string = '[data-panel="header"]',
  TITLE: string = '[data-panel="title"]',
  SUBTITLE: string = '[data-panel="subtitle"]',
  BUTTON: string = '.panel__arrow',
  DESCRIPTION: string = '[data-panel="description"]',
  BODY: string = '[data-panel="body"]',
  OPEN_MODIFIER: string = 'panel--is-open',
  NO_DESCRIPTION_MODIFIER: string = 'panel--has-no-description'

export class PanelComponent extends Component {
  protected _title: HTMLSpanElement
  protected _subtitle: HTMLSpanElement
  protected _button: HTMLElement
  protected _description: HTMLParagraphElement
  protected _body: HTMLDivElement
  protected _header: HTMLElement

  constructor(element: HTMLDivElement) {
    super(element)
    this.getInstance = this.getInstance.bind(this)

    this.toggle = this.toggle.bind(this)
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)

    this.setTitle = this.setTitle.bind(this)
    this.setSubtitle = this.setSubtitle.bind(this)
    this.setDescription = this.setDescription.bind(this)
    this.setBody = this.setBody.bind(this)

    this._initialize()
  }

  getInstance(): this {
    return this
  }

  protected _initialize() {
    const Header = this.getHeader()
    if (Header) Header.addEventListener('click', this.toggle.bind(this))
  }

  toggle(): this {
    const classnames = this.getClassnames(),
      isOpen: boolean = classnames.contains(OPEN_MODIFIER)

    if (isOpen) {
      this.close()
    } else {
      this.open()
    }

    return this
  }

  close(): this {
    const classnames = this.getClassnames()
    classnames.remove(OPEN_MODIFIER)
    return this
  }

  open(): this {
    const classnames = this.getClassnames()
    classnames.add(OPEN_MODIFIER)
    return this
  }

  // TODO decreciate
  show(): this {
    this.open()
    return this
  }

  // TODO decreciate
  hide(): this {
    this.close()
    return this
  }

  getButton(): HTMLElement {
    if (!this._button) this._button = this.getElement().querySelector(BUTTON)
    return this._button
  }

  getHeader(): HTMLElement {
    if (!this._header) this._header = this.getElement().querySelector(HEADER)
    return this._header
  }

  getTitle(): HTMLSpanElement {
    if (!this._title) this._title = this.getElement().querySelector(TITLE)
    return this._title
  }

  getSubtitle(): HTMLSpanElement {
    if (!this._subtitle) this._subtitle = this.getElement().querySelector(SUBTITLE)
    return this._subtitle
  }

  getDescription(): HTMLSpanElement {
    if (!this._description) this._description = this.getElement().querySelector(DESCRIPTION)
    return this._description
  }

  getBody(): HTMLDivElement {
    if (!this._body) this._body = this.getElement().querySelector(BODY)
    return this._body
  }

  setTitle(title: string): this {
    this.getTitle().innerHTML = title
    return this
  }

  setSubtitle(subtitle: string): this {
    this.getSubtitle().innerHTML = subtitle
    return this
  }

  setDescription(description: string): this {
    const Description = this.getDescription(),
      classnames = this.getClassnames(),
      contains = classnames.contains(NO_DESCRIPTION_MODIFIER),
      content = description.length > 0

    if (content && contains) classnames.remove(NO_DESCRIPTION_MODIFIER)
    if (!content && !contains) classnames.add(NO_DESCRIPTION_MODIFIER)

    const El = this.getDescription().querySelector('p')
    El.innerHTML = description

    return this
  }

  setBody(body: any, isHtmlElement: boolean = false): this {
    if (isHtmlElement) {
      this.getBody().innerHTML = body
    } else {
      this.getBody().appendChild(body)
    }
    return this
  }
}
