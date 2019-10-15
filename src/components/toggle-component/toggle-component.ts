import { Component } from '../component'

export class ToggleComponent extends Component {
  private _input: HTMLInputElement

  constructor(el: HTMLSpanElement) {
    super(el)
    this.getInstance = this.getInstance.bind(this)
    this.turnOn = this.turnOn.bind(this)
    this.turnOff = this.turnOff.bind(this)
    this.turn = this.turn.bind(this)
    this.isOn = this.isOn.bind(this)

    this.getInput = this.getInput.bind(this)
    this._initialize()
  }

  onChange(callback: Function) {
    this.getInput().addEventListener('change', (e: Event) => {
      setTimeout(callback, 500)
      // @ts-ignore
      if (e.target.checked) this.turnOn()
      return false
    })
  }

  getInstance() {
    return this
  }

  isOn() {
    return this.getInput().checked as boolean
  }

  turnOn() {
    if (!this.isOn()) this.getInput().checked = true
    return this
  }

  turnOff() {
    if (this.isOn()) this.getInput().checked = false
    return this
  }

  protected _initialize() {
    this.attachEvent('click', this.turn)
  }

  getInput() {
    if (!this._input) this._input = this.getElement().querySelector('input[type=checkbox]')
    return this._input
  }

  turn() {
    this.getInput().checked = !this.isOn()
    return this
  }
}
