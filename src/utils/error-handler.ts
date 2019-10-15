function VenomError(message: string): void {
  this.name = 'Venom'
  this.message = message || 'Attention, an error occurred here!'
  this.stack = new Error().stack
}

// @ts-ignore
VenomError.prototype = Object.create(VenomError.prototype)
// @ts-ignore
VenomError.prototype.constructor = VenomError

export { VenomError }
