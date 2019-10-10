const DISABLED_CLASSNAME = 'button--is-disabled'
import { FieldComponent } from '../field-component/index'
import { Venom } from '../../venom'
import { InputComponent } from '../input-component'
import { TListening, TInjectHandler, IButtonComponent } from './types'
import { Component } from '../component'

export class ButtonComponent extends InputComponent implements IButtonComponent {
  private _tag: string
  private _content: string
  private _listening: Array<TListening>
  private _haveIcon: boolean
  private _text: Element

  constructor(element: HTMLButtonElement) {
    super(element)
    this.changeContent = this.changeContent.bind(this)
    this.setDisabled = this.setDisabled.bind(this)
    this.loadingStart = this.loadingStart.bind(this)
    this.loadingStop = this.loadingStop.bind(this)
    this.notify = this.notify.bind(this)
    this.injectHandler = this.injectHandler.bind(this)

    this._initialize()
  }

  getInstance(): this {
    return this
  }

  protected _getContent(): string {
    return this._content
  }

  protected _initialize(): void {
    this._element.addEventListener('dragover', () => {
      this._element.classList.add('button--is-dragged')
      return false
    })

    this._element.addEventListener('dragend', () => {
      this._element.classList.remove('button--is-dragged')
      return false
    })

    const Icon = this.getElement().querySelector('.button__icon')
    if (Icon) this._haveIcon = true

    const Text = this.getElement().querySelector('.button__text')
    if (Text) this._text = Text

    const { tagName } = super.getElement()
    this._tag = tagName.toLowerCase()

    this._content = !Text ? super.getValue() : Text.innerHTML
    this._listening = []

    const { target } = this.getAttributes()
    if (target) {
      const indexOfPipe = target.indexOf('|'),
        targets = [],
        // @ts-ignore
        listening = []

      if (indexOfPipe > 0) {
        const targetList = target.split('|')
        targetList.map((t: any) => targets.push(t))
      } else {
        targets.push(target)
      }

      targets.map((t) => {
        // @ts-ignore
        const instance = Venom.get(t)
        if (instance) {
          if (instance.component instanceof FieldComponent) {
            listening.push(instance)
          }
        }
      })

      // @ts-ignore
      this._listening = listening
    }
  }

  protected _getText() {
    return this._text
  }

  notify() {
    let ready = true
    if (this._listening.length > 0) {
      this._listening.map(({ component }) => {
        // @ts-ignore
        if (!component.getIsValid()) ready = false
      })
      this._toggle(!ready)
    }
  }

  injectHandler({ trigger, callback }: TInjectHandler): this {
    super.getElement().addEventListener(trigger, callback)
    return this
  }

  changeContent(content: string): this {
    const Text = this._getText()
    if (!Text) {
      if (this.getElement() instanceof HTMLInputElement) {
        super.setValue(content)
      } else {
        super.setContentHtml(content)
      }
    } else {
      Text.innerHTML = content
    }
    return this
  }

  setDisabled(disabled: boolean = true): this {
    this._toggle(disabled)
    super.setDisabled(disabled)
    return this
  }

  protected _toggle(disable: boolean = true): void {
    const classlist = this.getClassnames()
    if (disable) {
      if (!classlist.contains(DISABLED_CLASSNAME)) classlist.add(DISABLED_CLASSNAME)
    } else {
      if (classlist.contains(DISABLED_CLASSNAME)) classlist.remove(DISABLED_CLASSNAME)
    }
  }

  loadingStart(content = 'aguarde...'): this {
    this.changeContent(content)
    this._toggle(true)
    return this
  }

  loadingStop(): this {
    this.changeContent(this._getContent())
    this._toggle(false)
    return this
  }
}
