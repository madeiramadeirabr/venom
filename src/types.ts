import { Component } from './components/component' // eslint-disable-line no-unused-vars

export type TObserver = {
  alias: string
  component: Component
  subscribe(instance: any): Function
}
