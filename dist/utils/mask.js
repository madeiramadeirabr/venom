"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vanilla_masker_1 = require("vanilla-masker");
var credit_card_1 = require("./credit-card");
function personDocumentMask(num) {
    return vanilla_masker_1.default.toPattern(num, '999.999.999-99');
}
exports.personDocumentMask = personDocumentMask;
function creditCardMask(num) {
    var brand = credit_card_1.getBrand(num);
    switch (brand) {
        case 'visa':
        case 'mastercard':
        case 'master':
        case 'elo':
        case 'hipercard':
        default:
            return vanilla_masker_1.default.toPattern(num, '9999 9999 9999 9999');
        case 'dinners':
            return vanilla_masker_1.default.toPattern(num, '9999 999999 9999');
        case 'amex':
            return vanilla_masker_1.default.toPattern(num, '9999 999999 99999');
    }
}
exports.creditCardMask = creditCardMask;
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
function expireDateMask(num) {
    return vanilla_masker_1.default.toPattern(num, '99/9999');
}
exports.expireDateMask = expireDateMask;
//# sourceMappingURL=mask.js.map