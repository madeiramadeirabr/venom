import { IInputComponent } from "../../components/types";
export declare type TListening = {
    component?: IInputComponent;
};
export declare type TInjectHandler = {
    trigger: string;
    callback: EventListener;
};
export interface IButtonComponent {
    getInstance(): this;
}
