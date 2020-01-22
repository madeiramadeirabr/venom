"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function zipcodeIsValid(zipcode) {
    zipcode = zipcode.replace(/\D/g, '');
    return zipcode.length === 8;
}
exports.zipcodeIsValid = zipcodeIsValid;
exports.ZIPCODE_VALIDATOR_MESSAGES = {
    error: 'CEP inválido, tente outro',
    success: 'CEP encontrado'
};
//# sourceMappingURL=zipcode.js.map