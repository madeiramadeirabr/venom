import { Component } from '../component';
export declare class LoadingComponent extends Component {
    protected _state: Object;
    private _top;
    private _left;
    private _width;
    private _height;
    private _content;
    private _message;
    private _placeholder;
    constructor(element: HTMLElement);
    getInstance(): this;
    protected _initialize(): void;
    setPlaceholder(query: string): this;
    unsetPlaceholder(): this;
    _getPlaceholder(): HTMLElement;
    loadingStart(loadingText?: string): this;
    _setPosition(): void;
    elementPosition(): void;
    loadingStop(): this;
    setLoadingText(loadingText: string): void;
    private _getMessage;
}
