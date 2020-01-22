export declare type TAttachEvent = {
    trigger: string;
    callback: EventListener;
};
export declare type TObserver = {
    alias: string;
    component: Object;
    subscribe(instance: any): Function;
};
