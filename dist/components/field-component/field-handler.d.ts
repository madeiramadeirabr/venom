import { FieldComponent } from './field-component';
export declare class FieldHandler {
    protected _component: FieldComponent;
    constructor(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement);
    getComponent(): FieldComponent;
    initialize(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): void;
}
