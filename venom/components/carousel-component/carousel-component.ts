import { Component } from '../component'
import { querySelectorAll } from '../../../helpers/dom'
import { HIDDEN_MODIFIER } from '../constants'

const ACTIVE = 'carousel__layer--is-active',
  LAYERS = 'carousel__layers',
  DOTS = 'carousel__dot',
  DOT_ACTIVE = 'carousel__dot--is-active',
  ARROW_DISABLED = 'carousel__button--is-disabled'

type TConfig = {
  dots: boolean
  arrows: boolean
}

type TButtons = {
  left: HTMLButtonElement
  right: HTMLButtonElement
}

export class CarouselComponent extends Component {

  private _active: number = 0

  private _config: TConfig = {
    dots: false,
    arrows: false
  }

  constructor(element: HTMLDivElement) {
    super(element)
    this.getInstance = this.getInstance.bind(this)
    this.setActive = this.setActive.bind(this)
    this._initialize()
  }

  getInstance(): this {
    return this
  }

  setActive(active: number) {

    const Layers = this._getLayers(),
      max = Layers.length,
      { left, right } = this._getButtons()

    if (active >= (max + 1)) {
      right.classList.add(ARROW_DISABLED)
    } else {
      if (right.classList.contains(ARROW_DISABLED)) right.classList.remove(ARROW_DISABLED)
    }

    if (active <= 0) {
      left.classList.add(ARROW_DISABLED)
    } else {
      if (left.classList.contains(ARROW_DISABLED)) left.classList.remove(ARROW_DISABLED)
    }

    this._active = active
    return this
  }

  getActive() {
    return this._active
  }

  protected _initialize() {
    const { left, right } = this._getButtons(),
      PrevButton = left,
      NextButton = right,
      Dots = this._getDots()

    PrevButton.addEventListener('click', () => {
      this.setActive(this.getActive() - 1)
      this._changeLayer()
      return false
    })

    NextButton.addEventListener('click', () => {
      this.setActive(this.getActive() + 1)
      this._changeLayer()
      return false
    })

    if (Dots.length > 0) {
      Dots.map(
        (Dot) => {
          Dot.addEventListener('click', (e: Event) => {
            // @ts-ignore
            this.setActive(e.target.value)
            this._changeLayer()
            return false
          })
        }
      )
    }

  }

  protected _changeLayer() {
    const Prev = (this.getElement() as HTMLElement).querySelector(`.${ACTIVE}`),
      Next = (this.getElement() as HTMLElement).querySelector(`[data-layer="${this.getActive()}"]`),
      { dots } = this._getConfig()

    if (Prev) {
      Prev.classList.remove(ACTIVE)
      Prev.classList.add(HIDDEN_MODIFIER)
    }

    if (Next) {
      Next.classList.add(ACTIVE)
      Next.classList.remove(HIDDEN_MODIFIER)
    }

    if (dots) {
      const Dots = this._getDots()
      if (Dots.length > 0) {
        Dots.map((Dot) => { if (Dot.classList.contains(DOT_ACTIVE)) Dot.classList.remove(DOT_ACTIVE) })
        const Dot = (this.getElement() as HTMLElement).querySelector(`.${DOTS}[data-layer="${this.getActive()}"]`)
        if (Dot) Dot.classList.add(DOT_ACTIVE)
      }
    }

  }

  protected _getConfig() {
    const { dots, arrows } = this.getAttributes()
    this._config = {
      dots,
      arrows
    }
    return this._config
  }

  protected _getDots(): Array<HTMLButtonElement> {
    const dots = querySelectorAll(`.${DOTS}`, (this.getElement() as HTMLDivElement)) as Array<HTMLButtonElement>
    if (dots.length > 0) return dots
  }

  protected _getButtons(): TButtons {
    const leftButton = (this.getElement() as HTMLElement).querySelector('.carousel__button--is-left'),
      rightButton = (this.getElement() as HTMLElement).querySelector('.carousel__button--is-right')

    return {
      left: leftButton as HTMLButtonElement,
      right: rightButton as HTMLButtonElement
    }

  }

  protected _getLayers() {
    const Layers = querySelectorAll(`.${LAYERS}`, (this.getElement() as HTMLDivElement))
    if (Layers.length > 0) return Layers
  }

}