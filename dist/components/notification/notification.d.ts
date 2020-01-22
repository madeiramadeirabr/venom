import { Component } from '../../component';
import { TNotificationModifiers } from './types';
export declare const NOTIFICATION_PRIMARY_MODIFIER = "notification--is-primary", NOTIFICATION_SECONDAY_MODIFIER = "notification--is-secondary", NOTIFICATION_SUCCESS_MODIFIER = "notification--is-success", NOTIFICATION_DANGER_MODIFIER = "notification--is-danger", NOTIFICATION_WARNING_MODIFIER = "notification--is-warning", NOTIFICATION_MODIFIERS: string[];
export declare class Notification extends Component {
    private _content;
    private _close;
    constructor(el: HTMLDivElement);
    private _bootstrap;
    getCloseButton(): HTMLSpanElement;
    getContent(): HTMLElement;
    getInstance(): Notification;
    getElement(): HTMLElement;
    setModifier(notificationModifier: TNotificationModifiers): Notification;
    setVisibile(visible?: boolean, delay?: number): Notification;
    setContent(content: string): Notification;
}
