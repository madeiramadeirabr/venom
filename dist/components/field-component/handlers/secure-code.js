"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MAX_LENGTH = 3;
function SecureCode(component, e) {
    function parsed(value) {
        return value.replace(/\D/g, '');
    }
    function validate(value) {
        if (value === void 0) { value = ''; }
        return value.length > 2 && value.length <= 3;
    }
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent, type = e.type, TRIGGER = 'blur', target = event.target, trigger = target.dataset.trigger, onlyValidateOnBlur = trigger === TRIGGER, value = getValue(), valueLength = value.length;
    var isValid = validate(value), newValue = value;
    if (valueLength > MAX_LENGTH) {
        newValue = value.substring(0, value.length - 1);
        isValid = validate(newValue);
        setValue(parsed(newValue));
    }
    else {
        setValue(parsed(value));
    }
    if (valueLength <= 1) {
        clearClassnames();
        return false;
    }
    else {
        setIsValid('secure-code', type, isValid);
        setHelperContent('');
    }
    if (!onlyValidateOnBlur || type === TRIGGER) {
        if (!isValid)
            setHelperContent('Código de segurança inválido');
        update();
    }
    return false;
}
exports.SecureCode = SecureCode;
//# sourceMappingURL=secure-code.js.map