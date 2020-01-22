import { TTextFieldValidator } from './types';
import { TextField } from './text-field';
export declare class Validator {
    private _validators;
    private _component;
    private _isValid;
    constructor(component: TextField);
    insert(validator: TTextFieldValidator): Validator;
    delete(validator: TTextFieldValidator): Validator;
    isValid(): boolean;
    validate(): this;
}
