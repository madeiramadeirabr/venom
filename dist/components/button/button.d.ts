import { Component } from '../../component';
import { TButtonModifiers } from './types';
declare const BUTTON_DISABLED_MODIFIER: string, BUTTON_MODIFIERS: string[];
declare class Button extends Component {
    private _content;
    constructor(el: HTMLButtonElement | HTMLInputElement | HTMLAnchorElement | HTMLDivElement);
    private _getContent;
    getInstance(): Button;
    getElement(): HTMLElement;
    setDisabled(disabled: boolean): Button;
    setModifier(buttonModifier: TButtonModifiers): Button;
    setText(content: string): Button;
    setLoading(start?: boolean, content?: string): this;
}
export { BUTTON_DISABLED_MODIFIER, BUTTON_MODIFIERS, Button, TButtonModifiers };
