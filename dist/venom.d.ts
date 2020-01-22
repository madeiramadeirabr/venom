import { TObserver } from './types';
export declare const Venom: {
    observers: TObserver[];
    create: (instance: any) => number;
    update: (uid: number, instance: TObserver) => void;
    get: (aliasOrUid: string | number) => any;
    delete: (f: any) => void;
};
