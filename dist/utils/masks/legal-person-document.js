"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vanilla_masker_1 = require("vanilla-masker");
function legalPersonDocumentMask(value) {
    return vanilla_masker_1.default.toPattern(value, '99.999.999/9999-99');
}
exports.legalPersonDocumentMask = legalPersonDocumentMask;
//# sourceMappingURL=legal-person-document.js.map