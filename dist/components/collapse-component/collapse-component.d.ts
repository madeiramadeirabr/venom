import { Component } from '../component';
export declare class CollapsComponent extends Component {
    private _button;
    private _container;
    private _content;
    constructor(element: HTMLDivElement);
    getInstance(): this;
    protected _initialize(): void;
    change(): this;
    close(): this;
    closeAll(): this;
    open(): this;
}
