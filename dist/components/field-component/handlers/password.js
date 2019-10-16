"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Password(component, e) {
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent, type = event ? event.type : 'keyup', target = event.target, _a = target.dataset, trigger = _a.trigger, minLength = _a.minLength, maxLength = _a.maxLength, LENGTH_MIN = 6, LENGTH_MAX = 12;
    var value = getValue(), valueLength = value.length;
    if (valueLength > LENGTH_MAX) {
        value = value.substring(0, value.length - 1);
        valueLength--;
        setValue(value);
    }
    var isValid = valueLength >= LENGTH_MIN && valueLength <= LENGTH_MAX, TRIGGER = 'blur', onlyValidateOnBlur = trigger === TRIGGER;
    setIsValid('password', type, isValid);
    setHelperContent('');
    if (!onlyValidateOnBlur || type === TRIGGER) {
        if (!isValid) {
            setHelperContent("A senha deve ter entre " + LENGTH_MIN + " e " + LENGTH_MAX + " caracteres");
        }
        update();
        return false;
    }
    clearClassnames();
    return false;
}
exports.Password = Password;
//# sourceMappingURL=password.js.map