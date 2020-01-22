/*
 * Pure typescript object for venom instance
 * @author  William Novak <https://github.com/williamnvk>
 * @package Venom
 * @version 1.0.0
 */

import { TObserver } from './types' // eslint-disable-line no-unused-vars
import { uuid } from './utils/uuid'

export const Venom = {
  observers: [] as Array<TObserver>,
  create: function (instance: any): number {
    const id = uuid()
    this.observers[id] = instance
    return id
  },
  update: function (uid: number, instance: TObserver) {
    this.observers[uid] = instance
  },
  get: function (aliasOrUid: string | number) {
    if (typeof aliasOrUid === 'string') {
      let indexOf = -1
      this.observers.map(function (observer: TObserver, index: number) {
        if (observer.alias === aliasOrUid) indexOf = index
      })
      if (indexOf >= 0) return this.observers[indexOf].component
    }
    return this.observers[(aliasOrUid as number)].component
  },
  delete: function (f: any) {
    this.observers = this.observers.filter((subscriber: any) => subscriber !== f)
  }
}
