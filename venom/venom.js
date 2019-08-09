/*
 * Pure javascript object for venom instance
 * @author  William Novak <https://github.com/williamnvk>
 * @package Venom
 * @version 0.1.0
 */

import { VenomError } from "./utils/error-handler"

export const Venom = {
  observers: [],
  subscribe: function (instance) {
    const { alias } = instance;
    let indexOf = -1
    this.observers.map((observer, index) => {
      if (observer && observer.alias === alias) {
        indexOf = index
      }
    })
    if (indexOf <= 0) {
      this.observers.push(instance);
    } else {
      this.update(instance, indexOf)
    }
    console.log('Venom', this.observers)
  },
  unsubscribe: function (f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f)
  },
  notify: function (data) {
    this.observers.forEach(observer => observer(data))
  },
  get: function (alias = false) {
    if (!alias) return false
    let indexOf = -1
    this.observers.map(function (observer, index) {
      if (observer.alias === alias) indexOf = index
    })
    if (indexOf >= 0) return this.observers[indexOf]
    return false
  },
  getComponent: function (alias = false) {
    if (!alias) return false
    let indexOf = -1
    this.observers.map(function (observer, index) {
      if (observer.alias === alias) indexOf = index
    })
    if (indexOf >= 0) return this.observers[indexOf].component
    return false
  },
  update: function (instance, position) {
    this.observers[position] = instance
    return this
  }
}