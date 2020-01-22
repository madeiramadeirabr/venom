"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uuid() {
    var cryptoObj = window.crypto || window.msCrypto, array = new Uint16Array(1);
    cryptoObj.getRandomValues(array);
    return array[0];
}
exports.uuid = uuid;
//# sourceMappingURL=uuid.js.map