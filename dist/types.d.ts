import { Component } from './components/component';
export declare type TObserver = {
    alias: string;
    component: Component;
    subscribe(instance: any): Function;
};
