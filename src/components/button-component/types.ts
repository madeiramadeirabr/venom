import { IInputComponent } from "../../components/types";

export type TListening = {
  component?: IInputComponent;
};

export type TInjectHandler = {
  trigger: string;
  callback: EventListener;
};

export interface IButtonComponent {
  getInstance(): this;
}
