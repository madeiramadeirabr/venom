"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseNumeric(value) {
    if (value === null || typeof value === 'undefined')
        return '';
    return value.replace(/\D/g, '');
}
exports.parseNumeric = parseNumeric;
//# sourceMappingURL=numeric.js.map