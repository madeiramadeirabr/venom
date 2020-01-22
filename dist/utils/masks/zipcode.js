"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vanilla_masker_1 = require("vanilla-masker");
var numeric_1 = require("../parsers/numeric");
function zipcodeMask(value) {
    return vanilla_masker_1.default.toPattern(numeric_1.parseNumeric(value), '99.999-999');
}
exports.zipcodeMask = zipcodeMask;
//# sourceMappingURL=zipcode.js.map