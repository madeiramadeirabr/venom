import { personDocumentMask, legalPersonDocumentMask } from '../../../utils/mask';
import { personDocumentIsValid, legalPersonDocumentIsValid } from '../../../utils/validators/index';
var LENGTH_CPF = 11, LENGTH_CNPJ = 14;
export function Mixed(component, event) {
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent, type = event.type;
    function parsed(value) {
        return value.replace(/\D/g, '').toString();
    }
    function maskPhysicalPersonDocument(value) {
        return personDocumentMask(value);
    }
    function maskLegalPersonDocument(value) {
        return legalPersonDocumentMask(value);
    }
    function validate(value) {
        if (value === void 0) { value = ''; }
        var personDocument = parsed(value);
        return (personDocument.length === LENGTH_CPF && personDocumentIsValid(personDocument)) || (personDocument.length === LENGTH_CNPJ && legalPersonDocumentIsValid(personDocument));
    }
    var value = getValue(), valueParsed = parsed(value), valueLength = valueParsed.length, isValid = validate(valueParsed);
    if (valueLength <= LENGTH_CNPJ) {
        setValue(valueLength <= LENGTH_CPF ? maskPhysicalPersonDocument(valueParsed) : maskLegalPersonDocument(valueParsed));
    }
    else {
        setValue(valueParsed.substring(0, valueParsed.length - 1));
    }
    setIsValid('mixed', type, isValid);
    setHelperContent('');
    if (valueLength < LENGTH_CPF || (valueLength > LENGTH_CPF && valueLength < LENGTH_CNPJ)) {
        clearClassnames();
        return false;
    }
    var TRIGGER = 'blur', target = event.target, trigger = target.dataset.trigger, onlyValidateOnBlur = trigger === TRIGGER;
    if (!onlyValidateOnBlur || type === TRIGGER) {
        if (!isValid)
            setHelperContent('O documento informado é inválido');
        update();
    }
    return false;
}
//# sourceMappingURL=mixed.js.map