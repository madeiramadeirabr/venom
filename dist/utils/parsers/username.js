"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseUsername(value) {
    if (value === null || typeof value === 'undefined')
        return '';
    return value
        .toLowerCase()
        .replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, function (letter) { return letter.toUpperCase(); });
}
exports.parseUsername = parseUsername;
//# sourceMappingURL=username.js.map