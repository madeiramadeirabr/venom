import { Component } from '../component'

const MESSAGE: string = '[data-loading=message]'

export class LoadingComponent extends Component {
  protected _state: Object

  private _top = '0'
  private _left = '0'
  private _width = '100%'
  private _height = '100%'

  private _content: HTMLElement
  private _message: HTMLParagraphElement
  private _placeholder: HTMLElement

  constructor(element: HTMLElement) {
    super(element)
    this.loadingStart = this.loadingStart.bind(this)
    this.loadingStop = this.loadingStop.bind(this)
    this.setLoadingText = this.setLoadingText.bind(this)
    this._initialize()
  }

  getInstance(): this {
    return this
  }

  protected _initialize(): void { }

  setPlaceholder(query: string): this {
    const Placeholder = document.querySelector(query) as HTMLElement
    if (Placeholder) this._placeholder = Placeholder
    return this
  }

  unsetPlaceholder(): this {
    // @ts-ignore
    this._placeholder = null
    return this
  }

  _getPlaceholder(): HTMLElement {
    return this._placeholder || document.querySelector('body')
  }

  _fixBody(add: boolean = true) {
    const Body = document.querySelector('body'),
      helper = 'helper--has-no-scroll'
    if (Body) {
      if (add) {
        Body.classList.add(helper)
      } else {
        Body.classList.remove(helper)
      }
    }
  }

  loadingStart(loadingText: string = 'Loading ...'): this {
    this.elementPosition()
    this.getElement().setAttribute('style', `top:${this._top}; left: ${this._left}; width: ${this._width}; height: ${this._height};`)

    this._setPosition()

    this.getComponent().show()
    this._fixBody(true)
    this.setLoadingText(loadingText)
    return this
  }

  _setPosition() {
    const el = this._getPlaceholder()
    const content = this.getElement().querySelector('.loading__content')
    if (content) {
      if (el == document.querySelector('body')) {
        content.style.position = 'fixed'
      } else {
        content.style.position = 'absolute'
      }
    }
  }

  elementPosition() {
    const el = this._getPlaceholder()
    this._top = el.offsetTop + 'px'
    this._left = el.offsetLeft + 'px'
    this._width = el.offsetWidth + 'px'
    this._height = el.offsetHeight + 'px'
  }

  loadingStop(): this {
    this._fixBody(false)
    this.getComponent().hide()
    return this
  }

  setLoadingText(loadingText: string) {
    this._getMessage().innerHTML = this.getElement().classList.contains('loading--is-oldstyle')
      ? loadingText
      : `

      <style type="text/css">
        @keyframes hideshow {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }

        .loading__icon {
          animation: hideshow 2s ease infinite;
        }
      </style>


      <svg class="loading__icon" height="90" width="90" xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>MadeiraMadeira</title>
        <rect fill="none" height="92" id="canvas_background" width="92" x="-1" y="-1"/>
      </g>
      <g>
        <title>MadeiraMadeira</title>
        <path style="fill: transparent !important;" d="m76.006185,73l-36.8,9.5c-6.4,1.6 -13,-2.2 -14.6,-8.6l-9.1,-35.6c-1.6,-6.4 2.2,-13 8.6,-14.6l36.8,-9.5c6.4,-1.6 13,2.2 14.6,8.6l9.1,35.6c1.7,6.4 -2.2,12.9 -8.6,14.6z" id="svg_1"/>
        <path style="fill: #F4831F !important;" d="m89.435256,63.562438l-14.02815,-56.003004c-1.315139,-5.260556 -6.68529,-8.438809 -11.836251,-7.014075l0,0l-56.003004,14.02815c-5.150961,1.315139 -8.438809,6.4661 -7.014075,11.726656l14.02815,56.003004c1.315139,5.260556 6.68529,8.438809 11.836251,7.014075l46.687436,-11.617061c-0.109595,-0.109595 -0.21919,-0.21919 -0.328785,-0.328785c-1.972709,-2.082303 -4.712582,-2.959063 -8.329214,-2.849468l0,0l-26.96035,-0.328785c-7.233265,0 -9.425163,-5.260556 -9.534758,-8.110024l-1.972709,-20.27506l-7.233265,0c-1.205544,0 -2.191898,-0.986354 -2.191898,-2.191898c0,-0.547975 0.21919,-1.205544 0.65757,-1.534329l25.864401,-24.987642c0.767164,-0.767164 2.082303,-0.876759 2.849468,-0.109595l27.289135,24.001287c0.986354,0.767164 1.095949,2.191898 0.328785,2.959063c-0.43838,0.547975 -1.095949,0.876759 -1.753519,0.767164l-5.698936,0l0,19.288706c0,1.205544 -0.986354,2.191898 -2.191898,2.191898l-14.466529,-0.109595l-4.274202,-11.836251l-4.383797,6.575695l0,-25.097236l0,-0.109595l16.110453,19.179111l-7.562049,-1.643924c0,0 1.534329,4.931771 2.630278,8.657999l10.082733,0l0,-19.069516c0,-1.205544 0.986354,-2.191898 2.191898,-2.191898l2.191898,0l-21.699794,-18.959921l-20.603845,20.05587l3.945417,0c1.095949,0 2.082303,0.876759 2.191898,1.972709l2.191898,22.247769l0,0c0,0.65757 0.43838,4.055012 5.260556,4.055012l26.850755,0.21919c4.931771,-0.21919 8.767594,1.205544 11.507467,4.274202c0.65757,0.65757 1.205544,1.424734 1.643924,2.191898l4.712582,-1.205544c5.260556,-1.315139 8.329214,-6.575695 7.014075,-11.836251z" id="svg_2" stroke="null"/>
      </g>
    </svg>
    <p class="helper--has-margin-top">${loadingText}</p>
    `
  }

  private _getMessage(): HTMLParagraphElement {
    if (!this._message) this._message = this.getElement().querySelector(MESSAGE)
    return this._message
  }
}