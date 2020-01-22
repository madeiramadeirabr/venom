
import { uuid } from './utils/uuid'

export class Component {
  protected _el: HTMLElement
  protected _uid: number

  constructor(el: HTMLElement) {
    this._el = el
    /* eslint-disable-next-line no-console */
    console.log(`Venom/Component: ${new Date().toISOString()}: ${this._getAlias()}`, this)
  }

  getElement(): HTMLElement {
    return this._el
  }

  protected _getAlias(): string {
    const { alias } = this._el.dataset
    if (alias) return alias

    const { id } = this._el
    if (id) return id

    return uuid().toString()
  }

  attachEvent(trigger: string, callback: Function): this {
    // @ts-ignore
    this._el.addEventListener(trigger, callback)
    return this
  }

  protected _setUid(uid: number) {
    this._uid = uid
  }

  getUid() {
    return this._uid
  }

  protected _isInputType() {
    return this._el instanceof HTMLInputElement
  }

}