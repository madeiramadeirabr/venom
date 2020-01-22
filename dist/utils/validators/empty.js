"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEmpty(value) {
    if (value === null || typeof value === 'undefined')
        return false;
    return value.length <= 0;
}
exports.isEmpty = isEmpty;
exports.IS_EMPTY_VALIDATOR_MESSAGES = {
    error: 'Esse campo não pode ficar fazio',
    success: 'Ok'
};
//# sourceMappingURL=empty.js.map