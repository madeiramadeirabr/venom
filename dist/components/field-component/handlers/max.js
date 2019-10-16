"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Max(component, e) {
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent, type = event ? event.type : 'keyup', target = event.target, _a = target.dataset, trigger = _a.trigger, maxLength = _a.maxLength, value = getValue(), LENGTH_MAX = maxLength || 255, valueLength = value.length, TRIGGER = 'blur', isValid = valueLength <= LENGTH_MAX, onlyValidateOnBlur = trigger === TRIGGER;
    if (valueLength > LENGTH_MAX)
        setValue(value.substring(0, value.length - 1));
    setIsValid('max', type, isValid);
    setHelperContent('');
    if (!onlyValidateOnBlur || type === TRIGGER) {
        setHelperContent("Insira no m\u00E1ximo " + LENGTH_MAX + " caracteres");
        update();
        return false;
    }
    clearClassnames();
    return false;
}
exports.Max = Max;
//# sourceMappingURL=max.js.map