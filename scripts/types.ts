import { Component } from './components/component'

export type TObserver = {
  alias: string
  component: Component
  subscribe(instance: any): Function
}
