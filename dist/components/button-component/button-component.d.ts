import { InputComponent } from '../input-component';
import { TInjectHandler, IButtonComponent } from './types';
export declare class ButtonComponent extends InputComponent implements IButtonComponent {
    private _tag;
    private _content;
    private _listening;
    private _haveIcon;
    private _text;
    constructor(element: HTMLButtonElement);
    getInstance(): this;
    protected _getContent(): string;
    protected _initialize(): void;
    protected _getText(): Element;
    notify(): void;
    injectHandler({ trigger, callback }: TInjectHandler): this;
    changeContent(content: string): this;
    setDisabled(disabled?: boolean): this;
    protected _toggle(disable?: boolean): void;
    loadingStart(content?: string): this;
    loadingStop(): this;
}
