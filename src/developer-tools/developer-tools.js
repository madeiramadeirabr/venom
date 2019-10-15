import { Venom } from '../venom'
export class DeveloperTools {
    constructor() {
        this.initialize()
    }

    initialize() {
        const container = document.createElement('div')
        container.style = 'width: 100vw; height: 80px; position: fixed; bottom: 0; left: 0; background-color: black; color: white'

        const components = Venom.list()
        components.map(({ alias }) => {
            const row = document.createElement('div')
            row.style = 'color: green'
            row.innerHTML = alias
            container.appendChild(row)
        })

        const body = document.querySelector('body')
        body.appendChild(container)
    }
}
