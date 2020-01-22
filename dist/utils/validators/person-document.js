"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function personDocumentIsValid(num) {
    if (num === void 0) { num = ''; }
    num = num.replace(/\D/g, '');
    if (num === null || num === undefined || num === '')
        return false;
    var numbers, digits, sum = 0, i, result, equalDigits = 0;
    if (num.length < 11)
        return false;
    for (i = 0; i < num.length - 1; i++) {
        if (num.charAt(i) != num.charAt(i + 1)) {
            equalDigits = 0;
            break;
        }
    }
    if (!equalDigits) {
        numbers = num.substring(0, 9);
        digits = num.substring(9);
        sum = 0;
        for (i = 10; i > 1; i--)
            sum += parseInt(numbers.charAt(10 - i)) * i;
        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (result != parseInt(digits.charAt(0)))
            return false;
        numbers = num.substring(0, 10);
        sum = 0;
        for (i = 11; i > 1; i--)
            sum += parseInt(numbers.charAt(11 - i)) * i;
        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (result != parseInt(digits.charAt(1)))
            return false;
        return true;
    }
    return false;
}
exports.personDocumentIsValid = personDocumentIsValid;
exports.PERSON_DOCUMENT_VALIDATOR_MESSAGES = {
    error: 'O CPF informado é inválido',
    success: 'O CPF é válido'
};
//# sourceMappingURL=person-document.js.map