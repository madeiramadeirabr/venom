import { Component } from './component';
import { IInputComponent } from './types';
export declare class InputComponent extends Component implements IInputComponent {
    constructor(element: HTMLInputElement | HTMLButtonElement | HTMLSelectElement | HTMLTextAreaElement);
    getInputComponent(): this;
    getBaseComponent(): Component;
    getElement(): HTMLInputElement;
    setValue(value: string): this;
    getValue(): string;
    setType(type: string): this;
    getType(): string;
    setDisabled(disabled: boolean): this;
    getDisabled(): boolean;
    isFormInput(): boolean;
}
