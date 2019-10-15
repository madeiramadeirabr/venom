export type THandler = {
  trigger: string
  name: string
  handler: Function
  ignore?: boolean
}

export type THandlers = Array<THandler>
