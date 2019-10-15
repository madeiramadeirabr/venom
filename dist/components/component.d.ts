import { TClassList, IComponent } from "./types";
export declare class Component implements IComponent {
    protected _element: any;
    protected _event: Event;
    constructor(element: any);
    getComponent(): this;
    getElement(): any;
    attachEvent(trigger: any, callback: EventListener): this;
    getAttributes(): any;
    getClassnames(): TClassList;
    setContentHtml(setContentHtml: string): this;
    _haveInnerHTML(): boolean;
    getContentHtml(): string | null;
    setEvent(event: Event): this;
    getEvent(): Event;
    getTagname(): string;
    getAlias(): string;
    getComponentName(): string;
    clearModifiers(): void;
    setModifier(modifier: string): this;
    hide(): this;
    show(): this;
    toggle(): this;
    isInput(): HTMLInputElement | boolean;
}
