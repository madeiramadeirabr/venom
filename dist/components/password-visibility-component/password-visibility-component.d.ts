import { Component } from '../component';
export declare class PasswordVisibilityComponent extends Component {
    private _visible;
    private _invisible;
    private _target;
    constructor(el: HTMLSpanElement);
    getInstance(): this;
    protected _getVisible(): HTMLSpanElement;
    protected _getInvisible(): HTMLSpanElement;
    protected _createVisible(): void;
    protected _createInvisible(): void;
    protected _initialize(): void;
    protected _onChangeVisibility: () => void;
}
