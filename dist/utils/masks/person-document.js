"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vanilla_masker_1 = require("vanilla-masker");
function personDocumentMask(value) {
    return vanilla_masker_1.default.toPattern(value, '999.999.999-99');
}
exports.personDocumentMask = personDocumentMask;
//# sourceMappingURL=person-document.js.map