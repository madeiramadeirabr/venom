export class FormComponent {

  constructor(component) {
    this.initialize(component)
    this.getComponent = this.getComponent.bind(this)
  }

  initialize(component) {
    this.component = component
  }

  getInstance() {
    return this
  }

  getComponent() {
    return this.component
  }

}