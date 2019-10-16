"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function VenomError(message) {
    this.name = 'Venom';
    this.message = message || 'Attention, an error occurred here!';
    this.stack = new Error().stack;
}
exports.VenomError = VenomError;
VenomError.prototype = Object.create(VenomError.prototype);
VenomError.prototype.constructor = VenomError;
//# sourceMappingURL=error-handler.js.map