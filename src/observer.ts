export class Observable {

  public observers: Array<any> = []

  constructor() {
    this.observers = []
  }

  subscribe(f: any) {
    this.observers.push(f)
  }

  unsubscribe(f: any) {
    this.observers.filter(subscriber => subscriber !== f)
  }

  notify(data: any) {
    this.observers.forEach(observer => observer(data))
  }
}