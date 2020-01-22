"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseEmail(value) {
    if (value === null || typeof value === 'undefined')
        return '';
    return value.replace(' ', '').replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '').toLowerCase();
}
exports.parseEmail = parseEmail;
//# sourceMappingURL=email.js.map