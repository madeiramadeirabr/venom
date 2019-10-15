import { Component } from '../component';
export declare class ToggleComponent extends Component {
    private _input;
    constructor(el: HTMLSpanElement);
    onChange(callback: Function): void;
    getInstance(): this;
    isOn(): boolean;
    turnOn(): this;
    turnOff(): this;
    protected _initialize(): void;
    getInput(): HTMLInputElement;
    turn(): this;
}
