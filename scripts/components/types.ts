export type TClassList = {
  contains: Function
  add: Function
  remove: Function
}

export type TModifier = '--is-success' | '--is-danger' | '--is-warning' | '--is-info'

export interface IComponent {
  getComponent(): this
  getElement(): any
  setEvent(event: Event): this
  getAttributes(): DOMStringMap
  getClassnames(): TClassList
  getTagname(): string
  attachEvent(trigger: any, callback: EventListener): this
}

export interface IInputComponent {
  setValue(value: string): IComponent
  getValue(): string
  setDisabled(disabled: boolean): this
  setType(type: string): this
  getType(): string
}