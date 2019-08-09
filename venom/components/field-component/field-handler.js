import { Email, Mixed, MinMax, Min, Max, Numeric, Username, Mobile, Phone, Zipcode } from "./handlers"
import { FieldComponent } from "./field-component"

export class FieldHandler {

  constructor(component) {
    this.initialize(component)
  }

  getInstance() {
    return this.instance
  }

  initialize(component) {
    const
      attributes = component.getAttributes(),
      { validator, trigger } = attributes,
      handlers = []

    if (validator) {

      if (validator.includes('email')) {
        const vEmail = { trigger: 'keyup', name: 'email', handler: Email }
        handlers.push(vEmail)
        if (trigger && (trigger !== 'keyup')) handlers.push({ ...vEmail, trigger })
      }

      if (validator.includes('mixed')) {
        const vMixed = { trigger: 'keyup', name: 'mixed', handler: Mixed }
        handlers.push(vMixed)
        if (trigger && (trigger !== 'keyup')) handlers.push({ ...vMixed, trigger })
      }

      if (validator.includes('numeric')) {
        const vNumeric = { trigger: 'keyup', name: 'numeric', handler: Numeric }
        handlers.push(vNumeric)
        if (trigger && (trigger !== 'keyup')) handlers.push({ ...vNumeric, trigger })
      }

      if (validator.includes('min') && validator.includes('max')) {
        const vMinMax = { trigger: 'keyup', name: 'min-max', handler: MinMax }
        handlers.push(vMinMax)
        if (trigger && (trigger !== 'keyup')) handlers.push({ ...vMinMax, trigger })
      }

      if (validator.includes('min') && !validator.includes('max')) {
        const vMin = { trigger: 'keyup', name: 'min', handler: Min }
        handlers.push(vMin)
        if (trigger && (trigger !== 'keyup')) handlers.push({ ...vMin, trigger })
      }

      if (validator.includes('max') && !validator.includes('min')) {
        const vMax = { trigger: 'keyup', name: 'max', handler: Max }
        handlers.push(vMax)
        if (trigger && (trigger !== 'keyup')) handlers.push({ ...vMax, trigger })
      }

      if (validator.includes('username')) {
        const vUsername = { trigger: 'keyup', name: 'username', handler: Username }
        handlers.push(vUsername)
        if (trigger && (trigger !== 'keyup')) handlers.push({ ...vUsername, trigger })
      }

      if (validator.includes('mobile')) {
        const vMobile = { trigger: 'keyup', name: 'mobile', handler: Mobile }
        handlers.push(vMobile)
        if (trigger && (trigger !== 'keyup')) handlers.push({ ...vMobile, trigger })
      }

      if (validator.includes('phone')) {
        const vPhone = { trigger: 'keyup', name: 'phone', handler: Phone }
        handlers.push(vPhone)
        if (trigger && (trigger !== 'keyup')) handlers.push({ ...vPhone, trigger })
      }

      if (validator.includes('zipcode')) {
        const vZipcode = { trigger: 'keyup', name: 'zipcode', handler: Zipcode }
        handlers.push(vZipcode)
        if (trigger && (trigger !== 'keyup')) handlers.push({ ...vZipcode, trigger })
      }
    }

    this.instance = new FieldComponent(component, handlers)
  }

}