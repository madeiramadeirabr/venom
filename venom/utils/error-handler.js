function VenomError(message) {
  this.name = 'Venom';
  this.message = message || 'Attention, an error occurred here!';
  this.stack = (new Error()).stack;
}
VenomError.prototype = Object.create(VenomError.prototype);
VenomError.prototype.constructor = VenomError;

export { VenomError }