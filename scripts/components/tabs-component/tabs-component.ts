import { Component } from '../component'

export class TabsComponent extends Component {
  private _tag: string
  private _content: string

  private tabs: any
  private tabsContent: any

  constructor(element: HTMLDivElement) {
    super(element)

    this.initialize()
  }

  getInstance(): this {
    return this
  }

  getAlias(): string {
    const { alias } = this.getAttributes()
    return alias
  }

  getAttributes(): any {
    return this.getElement().dataset
  }

  getTag(): string {
    return this._tag
  }

  getContent(): string {
    return this._content
  }

  initialize(): void {
    this.tabs = this._element.querySelectorAll('.tab__item')
    this.tabsContent = this._element.querySelectorAll('.tab__content')

    this.selectTab(1)

    this.tabs.forEach((tab: any) => {
      tab.addEventListener('click', (event: any) => {
        this.selectTab(event.target.dataset.index)
      })
    })
  }

  applyIndicatorClass(index: any) {
    this.tabs.forEach((tab: HTMLDivElement) => {
      if (tab.dataset.index == index) {
        this.addIndicator(tab)
      } else {
        this.removeIndicator(tab)
      }
    })
  }

  displaySelectedTab(selectedTable: number) {
    this.tabsContent.forEach((content: any) => {
      if (selectedTable == content.dataset.index) {
        content.classList.remove('helper--is-hidden')
      } else {
        content.classList.add('helper--is-hidden')
      }
    })
  }

  removeIndicator(element: any) {
    element.classList.remove('tab__item--has-indicator')
  }

  addIndicator(element: any) {
    element.classList.add('tab__item--has-indicator')
  }

  selectTab(index: number) {
    this.applyIndicatorClass(index)
    this.displaySelectedTab(index)
  }
}
