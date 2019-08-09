export class PanelComponent {

  constructor(component) {
    this.initialize(component)
    this.getComponent = this.getComponent.bind(this)
    this.toggle = this.toggle.bind(this)
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

  toggle() {
    const
      classnames = this.getComponent().getClassnames(),
      helper = 'helper--hidden',
      isHidden = classnames.contains(helper)

    if (isHidden) {
      classnames.remove(helper)
    } else {
      classnames.add(helper)
    }
  }

}