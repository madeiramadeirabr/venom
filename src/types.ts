export type TAttachEvent = {
  trigger: string
  callback: EventListener
}

export type TObserver = {
  alias: string
  component: Object
  subscribe(instance: any): Function
}
