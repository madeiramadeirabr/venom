import { Component } from '../../component';
import { TTextFieldModifiers } from './types';
export declare const TEXTFIELD_DISABLED_MODIFIER: string, TEXTFIELD_ACTIVE_MODIFIER = "field--is-active", TEXTFIELD_SUCCESS_MODIFIER = "field--is-success", TEXTFIELD_DANGER_MODIFIER = "field--is-danger", TEXTFIELD_MODIFIERS: string[];
export declare class TextField extends Component {
    private _container;
    private _feedback;
    private _label;
    constructor(el: HTMLInputElement | HTMLTextAreaElement);
    getInstance(): TextField;
    getElement(): HTMLInputElement | HTMLTextAreaElement;
    getContainer(): HTMLDivElement;
    getFeedback(): HTMLSpanElement;
    getLabel(): HTMLLabelElement;
    setDisabled(disabled: boolean): TextField;
    setModifier(textfieldModifier: TTextFieldModifiers): TextField;
    setValue(value: string): TextField;
    getValue(): string;
    setFeedback(text: string): TextField;
    setLabel(label: string): TextField;
}
