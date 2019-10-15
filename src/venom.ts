/*
 * Pure typescript object for venom instance
 * @author  William Novak <https://github.com/williamnvk>
 * @package Venom
 * @version 1.0.0
 */

import { TObserver } from './types' // eslint-disable-line no-unused-vars

export const Venom = {
    observers: [] as Array<TObserver>,
    subscribe: function(instance: any): void {
        const { alias } = instance
        let indexOf = -1
        this.observers.map((observer: TObserver, index: number) => {
            if (observer && observer.alias === alias) {
                indexOf = index
            }
        })
        if (indexOf <= 0) {
            this.observers.push(instance)
        } else {
            this.update(instance, indexOf)
        }
        console.log('Venom', this.observers)
    },
    unsubscribe: function(f: any) {
        this.observers = this.observers.filter((subscriber: any) => subscriber !== f)
    },
    get: function(alias: string = '') {
        if (!alias) return false
        let indexOf = -1
        this.observers.map(function(observer: TObserver, index: number) {
            if (observer.alias === alias) indexOf = index
        })
        if (indexOf >= 0) return this.observers[indexOf]
        return false
    },
    getComponent: function(alias: string = ''): any {
        if (!alias) return false
        let indexOf = -1
        this.observers.map(function(observer: TObserver, index: number) {
            if (observer.alias === alias) indexOf = index
        })
        if (indexOf >= 0) return this.observers[indexOf].component
        return false
    },
    update: function(instance: TObserver, position: number) {
        this.observers[position] = instance
        return this
    }
}
