import { Component } from '../component';
export declare class PanelComponent extends Component {
    protected _title: HTMLSpanElement;
    protected _subtitle: HTMLSpanElement;
    protected _button: HTMLElement;
    protected _description: HTMLParagraphElement;
    protected _body: HTMLDivElement;
    protected _header: HTMLElement;
    constructor(element: HTMLDivElement);
    getInstance(): this;
    protected _initialize(): void;
    toggle(): this;
    close(): this;
    open(): this;
    show(): this;
    hide(): this;
    getButton(): HTMLElement;
    getHeader(): HTMLElement;
    getTitle(): HTMLSpanElement;
    getSubtitle(): HTMLSpanElement;
    getDescription(): HTMLSpanElement;
    getBody(): HTMLDivElement;
    setTitle(title: string): this;
    setSubtitle(subtitle: string): this;
    setDescription(description: string): this;
    setBody(body: any, isHtmlElement?: boolean): this;
}
