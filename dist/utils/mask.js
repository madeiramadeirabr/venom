"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vanilla_masker_1 = require("vanilla-masker");
function personDocumentMask(num) {
    return vanilla_masker_1.default.toPattern(num, '999.999.999-99');
}
exports.personDocumentMask = personDocumentMask;
function legalPersonDocumentMask(num) {
    return vanilla_masker_1.default.toPattern(num, '99.999.999/9999-99');
}
exports.legalPersonDocumentMask = legalPersonDocumentMask;
function mobileMask(num) {
    return vanilla_masker_1.default.toPattern(num, '(99) 99999-9999');
}
exports.mobileMask = mobileMask;
function phoneMask(num) {
    return vanilla_masker_1.default.toPattern(num, '(99) 9999-9999');
}
exports.phoneMask = phoneMask;
function zipcodeMask(num) {
    return vanilla_masker_1.default.toPattern(num, '99.999-999');
}
exports.zipcodeMask = zipcodeMask;
//# sourceMappingURL=mask.js.map