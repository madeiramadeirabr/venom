export declare class Observable {
    observers: Array<any>;
    constructor();
    subscribe(f: any): void;
    unsubscribe(f: any): void;
    notify(data: any): void;
}
