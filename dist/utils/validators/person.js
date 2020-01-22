"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_document_1 = require("./person-document");
var legal_person_document_1 = require("./legal-person-document");
function personIsValid(value) {
    if (value === void 0) { value = ''; }
    console.log('value', value);
    var length = value.length;
    if (length === 11)
        return person_document_1.personDocumentIsValid(value);
    if (length === 14)
        return legal_person_document_1.legalPersonDocumentIsValid(value);
    return false;
}
exports.personIsValid = personIsValid;
exports.PERSON_VALIDATOR_MESSAGES = {
    error: 'O documento informado é inválido',
    success: 'O documento informado é válido'
};
//# sourceMappingURL=person.js.map