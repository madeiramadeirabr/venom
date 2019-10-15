import {
  Email,
  Mixed,
  LegalPerson,
  MinMax,
  Min,
  Max,
  Numeric,
  Username,
  User,
  Mobile,
  Phone,
  Zipcode,
  State,
  Password,
  Common,
  Monetary
} from './handlers/index'
import { FieldComponent } from './field-component'
import { THandlers, THandler } from './types'

export class FieldHandler {
  protected _component: FieldComponent

  constructor(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
    this.initialize(el)
  }

  getComponent() {
    return this._component
  }

  initialize(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
    const {
        dataset: { validator, trigger }
      } = el,
      handlers: THandlers = []

    if (validator) {
      if (validator.includes('email')) {
        const vEmail: THandler = { trigger: 'keyup', name: 'email', handler: Email }
        handlers.push(vEmail)
        if (trigger && trigger !== 'keyup') handlers.push({ ...vEmail, trigger })
      }

      if (validator.includes('mixed')) {
        const vMixed: THandler = { trigger: 'keyup', name: 'mixed', handler: Mixed }
        handlers.push(vMixed)
        if (trigger && trigger !== 'keyup') handlers.push({ ...vMixed, trigger })
      }

      if (validator.includes('legal-person')) {
        const vLegalPerson: THandler = { trigger: 'keyup', name: 'legal-person', handler: LegalPerson }
        handlers.push(vLegalPerson)
        if (trigger && trigger !== 'keyup') handlers.push({ ...vLegalPerson, trigger })
      }

      if (validator.includes('numeric')) {
        const vNumeric: THandler = { trigger: 'keyup', name: 'numeric', handler: Numeric }
        handlers.push(vNumeric)
        if (trigger && trigger !== 'keyup') handlers.push({ ...vNumeric, trigger })
      }

      if (validator.includes('min') && validator.includes('max')) {
        const vMinMax: THandler = { trigger: 'keyup', name: 'min-max', handler: MinMax }
        handlers.push(vMinMax)
        if (trigger && trigger !== 'keyup') handlers.push({ ...vMinMax, trigger })
      }

      if (validator.includes('min') && !validator.includes('max')) {
        const vMin: THandler = { trigger: 'keyup', name: 'min', handler: Min }
        handlers.push(vMin)
        if (trigger && trigger !== 'keyup') handlers.push({ ...vMin, trigger })
      }

      if (validator.includes('max') && !validator.includes('min')) {
        const vMax: THandler = { trigger: 'keyup', name: 'max', handler: Max }
        handlers.push(vMax)
        if (trigger && trigger !== 'keyup') handlers.push({ ...vMax, trigger })
      }

      if (validator.includes('username')) {
        const vUsername: THandler = { trigger: 'keyup', name: 'username', handler: Username }
        handlers.push(vUsername)
        if (trigger && trigger !== 'keyup') handlers.push({ ...vUsername, trigger })
      }

      if (validator.includes('mobile')) {
        const vMobile: THandler = { trigger: 'keyup', name: 'mobile', handler: Mobile }
        handlers.push(vMobile)
        if (trigger && trigger !== 'keyup') handlers.push({ ...vMobile, trigger })
      }

      if (validator.includes('phone')) {
        const vPhone: THandler = { trigger: 'keyup', name: 'phone', handler: Phone }
        handlers.push(vPhone)
        if (trigger && trigger !== 'keyup') handlers.push({ ...vPhone, trigger })
      }

      if (validator.includes('zipcode')) {
        const vZipcode: THandler = { trigger: 'keyup', name: 'zipcode', handler: Zipcode }
        handlers.push(vZipcode)
        if (trigger && trigger !== 'keyup') handlers.push({ ...vZipcode, trigger })
      }

      if (validator.includes('user') && validator.includes('user')) {
        const vUser: THandler = { trigger: 'keyup', name: 'user', handler: User }
        handlers.push(vUser)
        if (trigger && trigger !== 'keyup') handlers.push({ ...vUser, trigger })
      }

      if (validator.includes('password')) {
        const vPassword: THandler = { trigger: 'keyup', name: 'password', handler: Password }
        handlers.push(vPassword)
        if (trigger && trigger !== 'keyup') handlers.push({ ...vPassword, trigger })
      }

      if (validator.includes('monetary')) {
        const vMonetary: THandler = { trigger: 'keyup', name: 'monetary', handler: Monetary }
        handlers.push(vMonetary)
        if (trigger && trigger !== 'keyup') handlers.push({ ...vMonetary, trigger })
      }
    } else {
      const vCommon: THandler = { trigger: 'keyup', name: 'common', handler: Common }
      handlers.push(vCommon)
    }

    const vBlurState: THandler = { trigger: 'blur', name: 'state', handler: State, ignore: true }
    handlers.push(vBlurState)

    const vFocusState: THandler = { trigger: 'focus', name: 'state', handler: State, ignore: true }
    handlers.push(vFocusState)

    this._component = new FieldComponent(el, handlers)
  }
}
