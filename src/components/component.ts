import { TClassList, IComponent } from "./types";
import {
  DANGER_MODIFIER,
  WARNING_MODIFIER,
  SUCCESS_MODIFIER,
  INFO_MODIFIER,
  HIDDEN_MODIFIER
} from "./constants";

export class Component implements IComponent {
  protected _element: any;
  protected _event: Event;

  constructor(element: any) {
    this._element = element;
    this.attachEvent = this.attachEvent.bind(this);
    this.getAlias = this.getAlias.bind(this);
    this.getAttributes = this.getAttributes.bind(this);
    this.getClassnames = this.getClassnames.bind(this);
    this.getComponent = this.getComponent.bind(this);
    this.getElement = this.getElement.bind(this);

    this.setEvent = this.setEvent.bind(this);
    this.getEvent = this.getEvent.bind(this);

    this.getTagname = this.getTagname.bind(this);

    this.setContentHtml = this.setContentHtml.bind(this);
    this.getContentHtml = this.getContentHtml.bind(this);

    this.clearModifiers = this.clearModifiers.bind(this);
    this.setModifier = this.setModifier.bind(this);

    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    this.toggle = this.toggle.bind(this);

    this.isInput = this.isInput.bind(this);
  }

  getComponent(): this {
    return this;
  }

  getElement(): any {
    return this._element;
  }

  attachEvent(trigger: any, callback: EventListener) {
    this.getElement().addEventListener(trigger, callback);
    return this;
  }

  getAttributes() {
    return this.getElement().dataset;
  }

  getClassnames(): TClassList {
    return this.getElement().classList;
  }

  setContentHtml(setContentHtml: string): this {
    if (this._haveInnerHTML()) this.getElement().innerHTML = setContentHtml;
    return this;
  }

  _haveInnerHTML(): boolean {
    const el: any = this.getElement();
    return (
      el instanceof HTMLDivElement ||
      el instanceof HTMLLabelElement ||
      el instanceof HTMLParagraphElement ||
      el instanceof HTMLSpanElement ||
      el instanceof HTMLTemplateElement ||
      el instanceof HTMLAnchorElement ||
      el instanceof HTMLButtonElement ||
      el instanceof HTMLFormElement ||
      el instanceof HTMLTableElement ||
      el instanceof HTMLTimeElement ||
      el instanceof HTMLQuoteElement ||
      el instanceof HTMLHeadingElement
    );
  }

  getContentHtml(): string | null {
    return this._haveInnerHTML() ? this.getElement().innerHTML : null;
  }

  setEvent(event: Event): this {
    this._event = event;
    return this;
  }

  getEvent(): Event {
    return this._event;
  }

  getTagname(): string {
    return this.getElement().tagName.toLowerCase();
  }

  getAlias(): string {
    const { alias } = this.getAttributes();
    return alias;
  }

  getComponentName(): string {
    const { component } = this.getAttributes();
    return component;
  }

  clearModifiers(): void {
    const modifiers = [
      DANGER_MODIFIER,
      WARNING_MODIFIER,
      INFO_MODIFIER,
      SUCCESS_MODIFIER
    ];
    modifiers.map(modifier => {
      if (this.getClassnames().contains(this.getComponentName() + modifier)) {
        this.getClassnames().remove(this.getComponentName() + modifier);
      }
    });
  }

  setModifier(modifier: string): this {
    this.clearModifiers();
    const MODIFIER = this.getComponentName() + modifier;
    if (!this.getClassnames().contains(MODIFIER))
      this.getClassnames().add(MODIFIER);
    return this;
  }

  hide(): this {
    const Classnames = this.getClassnames();
    if (!Classnames.contains(HIDDEN_MODIFIER)) Classnames.add(HIDDEN_MODIFIER);
    return this;
  }

  show(): this {
    const Classnames = this.getClassnames();
    console.log("Classnames", Classnames);
    if (Classnames.contains(HIDDEN_MODIFIER))
      Classnames.remove(HIDDEN_MODIFIER);
    return this;
  }

  toggle(): this {
    if (this.getClassnames().contains(HIDDEN_MODIFIER)) {
      this.show();
    } else {
      this.hide();
    }
    return this;
  }

  isInput(): HTMLInputElement | boolean {
    const el: any = this.getElement();
    if (el instanceof HTMLInputElement) {
      return el as HTMLInputElement;
    }

    return false;
  }
}
