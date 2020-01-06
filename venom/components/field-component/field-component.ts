import { Venom } from '../../venom'
import { ButtonComponent } from '../button-component/index'
import { THandlers, THandler } from './types'
import { InputComponent } from '../input-component'
import { TEXT_FIELD_ELEMENT } from './constants'
import { SUCCESS_MODIFIER, DANGER_MODIFIER, WARNING_MODIFIER, ACTIVE_MODIFIER, DISABLED_MODIFIER } from '../constants'
import { TModifier } from '../types'

export class FieldComponent extends InputComponent {
  protected validators: any = []
  protected isValid: boolean = false

  protected _containerEl: HTMLDivElement
  protected _helperEl: HTMLSpanElement
  protected _mainEl: HTMLDivElement

  constructor(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, handlers: THandlers) {
    super(el)
    this.getInstance = this.getInstance.bind(this)
    this.setIsValid = this.setIsValid.bind(this)
    this.getIsValid = this.getIsValid.bind(this)
    this.update = this.update.bind(this)
    this.pushValidators = this.pushValidators.bind(this)
    this.setDisabled = this.setDisabled.bind(this)
    this.setFocus = this.setFocus.bind(this)
    this.setBlur = this.setBlur.bind(this)
    this.notify = this.notify.bind(this)
    this.injectHandlers = this.injectHandlers.bind(this)
    this.clearClassnames = this.clearClassnames.bind(this)
    this.setValue = this.setValue.bind(this)
    this.setActive = this.setActive.bind(this)
    this.setHelperContent = this.setHelperContent.bind(this)
    this.setModifier = this.setModifier.bind(this)
    this.reset = this.reset.bind(this)
    this.getIsRequired = this.getIsRequired.bind(this)

    if (this.getValue().length > 0) this.setActive(true)

    this.injectHandlers(handlers)

    this.attachEvent('change', (e: Event) => {
      // @ts-ignore
      const value: string = e.target.value.toString()
      if (value.length <= 0) {
        this.setActive(false)
      } else {
        this.setActive(true)
      }
    })
  }

  getListener(): any {
    const { listener } = this.getAttributes()
    if (!listener) return false
    const instance = Venom.get(listener)
    if (instance) return instance.component
  }

  getIsRequired(): boolean {
    const { required } = this.getAttributes()
    return required || false
  }

  setValue(value: string, forceIsValid: boolean = false): this {
    this._valueHandler(value)
    super.setValue(value)

    if (forceIsValid) this.isValid = true
    return this
  }

  _valueHandler(value: string): void {
    if (value.length <= 0) this.reset()
    if (value.length > 0) this.setActive(true)
  }

  setDisabled(value: boolean): this {
    const prevDisabled = this.getElement().disabled
    if (prevDisabled !== value) {
      super.setDisabled(value)
      const { classList } = this._getMainElement()
      const DISABLE_MODIFIER = TEXT_FIELD_ELEMENT + DISABLED_MODIFIER
      if (!classList.contains(DISABLE_MODIFIER)) classList.add(DISABLE_MODIFIER)
    }
    return this
  }

  setHelperContent(content: string): this {
    const prevContent = this._getHelperElement().innerHTML
    if (prevContent !== content) this._getHelperElement().innerHTML = content
    return this
  }

  setFocus(): this {
    this.getElement().focus()
    return this
  }

  setBlur(): this {
    const value = this.getValue()
    this._valueHandler(value)
    this.getElement().blur()
    return this
  }

  getInstance(): this {
    return this
  }

  pushValidators(name: string, trigger: EventListener): this {
    this.validators.push({ name, trigger, value: false })
    return this
  }

  setIsValid(name: string, trigger: string, isValid: boolean): this {
    if (isValid !== this.isValid) {
      let indexOf = -1

      this.validators.map((validator: any, index: number) => (validator.name === name && validator.trigger === trigger ? (indexOf = index) : false))

      if (indexOf >= 0 && this.validators[indexOf].value !== isValid) this.validators[indexOf].value = isValid

      let result = true

      // @ts-ignore
      this.validators.map(({ value }) => (value === false ? (result = false) : null))

      if (this.isValid !== result) this.isValid = result

      this.notify()
    }
    return this
  }

  notify(): void {
    const listener = this.getListener()
    if (listener instanceof ButtonComponent) listener.notify()
  }

  getIsValid(): boolean {
    return this.isValid
  }

  reset(): void {
    this.isValid = false
    this.clearClassnames()
    this.setActive(false)
  }

  injectHandlers(handlers: THandlers): this {
    if (handlers) {
      handlers.map(({ trigger, name, handler, ignore }) => {
        let exists = false
        this.validators.map((validator: THandler) => {
          if (validator.name === name) {
            if (validator.trigger !== 'blur') exists = true
          }
        })

        // @ts-ignore
        if (!exists && (ignore === undefined || !ignore) && name) this.pushValidators(name, trigger)

        this.attachEvent(trigger, (event) => handler(this, event))
      })
    }
    return this
  }

  _getContainerElement(): HTMLDivElement {
    // @ts-ignore
    if (!this._containerEl) this._containerEl = this.getElement().parentElement
    return this._containerEl
  }

  _getHelperElement(): HTMLSpanElement {
    // @ts-ignore
    if (!this._helperEl) this._helperEl = this._getMainElement().querySelector('span.text-field__helper')
    return this._helperEl
  }

  _getMainElement(): HTMLDivElement {
    // @ts-ignore
    if (!this._mainEl) this._mainEl = this._getContainerElement().parentElement
    return this._mainEl
  }

  clearClassnames(): void {
    const { classList } = this._getMainElement()

    if (classList.contains(TEXT_FIELD_ELEMENT + SUCCESS_MODIFIER)) classList.remove(TEXT_FIELD_ELEMENT + SUCCESS_MODIFIER)
    if (classList.contains(TEXT_FIELD_ELEMENT + DANGER_MODIFIER)) classList.remove(TEXT_FIELD_ELEMENT + DANGER_MODIFIER)
    if (classList.contains(TEXT_FIELD_ELEMENT + DANGER_MODIFIER)) classList.remove(TEXT_FIELD_ELEMENT + WARNING_MODIFIER)
    if (classList.contains(TEXT_FIELD_ELEMENT + DISABLED_MODIFIER)) classList.remove(TEXT_FIELD_ELEMENT + DISABLED_MODIFIER)
  }

  changeClassnames(success: boolean = true): void {
    const { classList } = this._getMainElement()
    const className = `${TEXT_FIELD_ELEMENT}${success ? SUCCESS_MODIFIER : DANGER_MODIFIER}`
    if (!classList.contains(className)) classList.add(className)
  }

  update(changeClassnames: boolean = true): this {
    this.clearClassnames()
    if (changeClassnames) this.changeClassnames(this.getIsValid())
    return this
  }

  setActive(value: boolean = true): this {
    const mainEl = this._getMainElement()
    if (mainEl) {
      const { classList } = mainEl,
        ACTIVATED_MODIFIER = TEXT_FIELD_ELEMENT + ACTIVE_MODIFIER

      if (value) {
        if (!classList.contains(ACTIVATED_MODIFIER)) classList.add(ACTIVATED_MODIFIER)
      } else {
        if (classList.contains(ACTIVATED_MODIFIER)) classList.remove(ACTIVATED_MODIFIER)
      }
    }

    return this
  }

  setModifier(modifier: TModifier): this {
    const mainEl = this._getMainElement()
    if (mainEl) {
      this.clearClassnames()
      const { classList } = mainEl,
        MODIFIER = TEXT_FIELD_ELEMENT + modifier

      if (!classList.contains(MODIFIER)) classList.add(MODIFIER)
    }

    return this
  }
}
