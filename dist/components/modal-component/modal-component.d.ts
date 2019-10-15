import { Component } from '../component';
export declare class ModalComponent extends Component {
    private _container;
    private _body;
    private _close;
    private _title;
    constructor(element: HTMLDivElement);
    getInstance(): this;
    _initialize(): void;
    _onClose(e: Event): boolean;
    setSize(windowSize: any): this;
    setWidth(width: string | number): this;
    setHeight(height: string | number): this;
    close(): this;
    open(): this;
    show(): this;
    hide(): this;
    setBodyContent(content: any): this;
    setBodyContentFromTemplate(id: string): this;
    setBodyContentFromData(attribute: string, value: string, multiple?: boolean): this;
    getBody(): HTMLDivElement;
    getContainer(): HTMLDivElement;
    getClose(): HTMLElement;
    getTitle(): HTMLElement;
    setTitle(title: string): this;
    setTitleModifier(modifier: string): this;
    changeClose(callback: Function): this;
    resetClose(): void;
}
