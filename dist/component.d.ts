export declare class Component {
    protected _el: HTMLElement;
    protected _uid: number;
    constructor(el: HTMLElement);
    getElement(): HTMLElement;
    protected _getAlias(): string;
    attachEvent(trigger: string, callback: Function): this;
    protected _setUid(uid: number): void;
    getUid(): number;
    protected _isInputType(): boolean;
}
