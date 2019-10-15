import { Component } from '../component';
export declare class NotificationComponent extends Component {
    private _button;
    private _content;
    constructor(el: HTMLDivElement);
    protected _initialize(): void;
    protected _attachEvents(): void;
    protected _toggle(visibile: boolean): void;
    protected _hide(event: Event): boolean;
    getInstance(): this;
    setContent(content: string): this;
    setVisible(visible?: boolean): this;
    hideIn(milliseconds: number): this;
}
