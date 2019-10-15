import { TObserver } from './types';
export declare const Venom: {
    observers: TObserver[];
    subscribe: (instance: any) => void;
    unsubscribe: (f: any) => void;
    get: (alias?: string) => any;
    getComponent: (alias?: string) => any;
    update: (instance: TObserver, position: number) => any;
};
