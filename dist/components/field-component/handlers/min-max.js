"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MinMax(component, e) {
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent, type = event ? event.type : 'keyup', target = event.target, _a = target.dataset, trigger = _a.trigger, minLength = _a.minLength, maxLength = _a.maxLength, LENGTH_MIN = minLength || '0', LENGTH_MAX = maxLength || '255';
    var value = getValue(), valueLength = value.length;
    if (valueLength > parseInt(LENGTH_MAX, 10)) {
        value = value.substring(0, value.length - 1);
        valueLength--;
        setValue(value);
    }
    var isValid = valueLength >= parseInt(LENGTH_MIN, 10) && valueLength <= parseInt(LENGTH_MAX, 10), TRIGGER = 'blur', onlyValidateOnBlur = trigger === TRIGGER;
    setIsValid('min-max', type, isValid);
    setHelperContent('');
    if (!onlyValidateOnBlur || type === TRIGGER) {
        setHelperContent("Insira algo entre " + LENGTH_MIN + " e " + LENGTH_MAX + " caracteres");
        update();
        return false;
    }
    clearClassnames();
    return false;
}
exports.MinMax = MinMax;
//# sourceMappingURL=min-max.js.map