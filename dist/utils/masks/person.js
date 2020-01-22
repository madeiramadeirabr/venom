"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_document_1 = require("./person-document");
var legal_person_document_1 = require("./legal-person-document");
function maskPerson(value) {
    var lenght = value.length;
    if (lenght <= 11)
        return person_document_1.personDocumentMask(value);
    return legal_person_document_1.legalPersonDocumentMask(value);
}
exports.maskPerson = maskPerson;
//# sourceMappingURL=person.js.map